import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '../context/ThemeContext';

export const GitHubContributions = ({ username = 'shubhamsunilbanekar' }) => {
  const { isDark } = useTheme();
  const [contributions, setContributions] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [hoveredDay, setHoveredDay] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const years = [2026, 2025];

  useEffect(() => {
    fetchContributions();
  }, [username, selectedYear]);

  const fetchContributions = async () => {
    setLoading(true);
    try {
      // Using a public API that doesn't require authentication
      const response = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${username}?y=${selectedYear}`
      );
      const data = await response.json();

      if (data.contributions) {
        setContributions(data.contributions);
        setTotalContributions(data.total[selectedYear] || 0);
      }
    } catch (error) {
      console.error('Error fetching contributions:', error);
      // Fallback: generate empty grid
      generateEmptyGrid();
    }
    setLoading(false);
  };

  const generateEmptyGrid = () => {
    const days = [];
    const startDate = new Date(selectedYear, 0, 1);
    const endDate = new Date(selectedYear, 11, 31);

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      days.push({
        date: d.toISOString().split('T')[0],
        count: 0,
        level: 0
      });
    }
    setContributions(days);
    setTotalContributions(0);
  };

  const getColorForLevel = (level) => {
    const darkColors = [
      'rgba(255,255,255,0.05)',  // 0 contributions
      'rgba(91, 76, 219, 0.3)',   // Level 1
      'rgba(91, 76, 219, 0.5)',   // Level 2
      'rgba(91, 76, 219, 0.7)',   // Level 3
      'rgba(91, 76, 219, 1)',     // Level 4
    ];
    const lightColors = [
      'rgba(0,0,0,0.06)',         // 0 contributions
      'rgba(91, 76, 219, 0.35)',  // Level 1
      'rgba(91, 76, 219, 0.55)',  // Level 2
      'rgba(91, 76, 219, 0.75)',  // Level 3
      'rgba(91, 76, 219, 1)',     // Level 4
    ];
    const colors = isDark ? darkColors : lightColors;
    return colors[level] || colors[0];
  };

  const getLevel = (count) => {
    if (count === 0) return 0;
    if (count <= 3) return 1;
    if (count <= 6) return 2;
    if (count <= 9) return 3;
    return 4;
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Organize contributions into weeks
  const getWeeks = () => {
    if (!contributions.length) return [];

    const weeks = [];
    let currentWeek = [];

    // Get the first day of the year and its day of week
    const firstDay = new Date(selectedYear, 0, 1);
    const startDayOfWeek = firstDay.getDay();

    // Add empty cells for days before the first day
    for (let i = 0; i < startDayOfWeek; i++) {
      currentWeek.push(null);
    }

    contributions.forEach((day) => {
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
      currentWeek.push({
        ...day,
        level: day.level !== undefined ? day.level : getLevel(day.count)
      });
    });

    // Push the last week if it has any days
    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    return weeks;
  };

  const weeks = getWeeks();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Calculate month positions
  const getMonthLabels = () => {
    const labels = [];
    let weekIndex = 0;

    for (let month = 0; month < 12; month++) {
      const firstOfMonth = new Date(selectedYear, month, 1);
      const dayOfYear = Math.floor((firstOfMonth - new Date(selectedYear, 0, 1)) / (24 * 60 * 60 * 1000));
      const firstDayOfYear = new Date(selectedYear, 0, 1).getDay();
      weekIndex = Math.floor((dayOfYear + firstDayOfYear) / 7);

      labels.push({
        month: months[month],
        position: weekIndex * 14 // 12px cell + 2px gap
      });
    }
    return labels;
  };

  // Tooltip component rendered via portal
  const Tooltip = () => {
    if (!hoveredDay) return null;

    return createPortal(
      <div style={{
        position: 'fixed',
        pointerEvents: 'none',
        background: 'rgba(0,0,0,0.95)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '6px',
        padding: '8px 12px',
        fontSize: '12px',
        color: 'white',
        zIndex: 99999,
        top: mousePos.y - 60,
        left: mousePos.x,
        transform: 'translateX(-50%)',
        whiteSpace: 'nowrap',
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
      }}>
        <strong>{hoveredDay.count} contributions</strong>
        <br />
        <span style={{ color: 'rgba(255,255,255,0.6)' }}>
          {formatDate(hoveredDay.date)}
        </span>
      </div>,
      document.body
    );
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Tooltip rendered via portal to body */}
      <Tooltip />

      {/* Header with total and year selector */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{
          fontSize: '14px',
          color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)'
        }}>
          <span style={{
            fontWeight: '700',
            color: isDark ? 'white' : '#1d1d1f',
            fontSize: '16px'
          }}>
            {totalContributions.toLocaleString()}
          </span>
          {' '}contributions in {selectedYear}
        </div>

        {/* Year Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px'
        }}>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                border: 'none',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: selectedYear === year
                  ? 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)'
                  : isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                color: selectedYear === year ? 'white' : (isDark ? 'white' : '#1d1d1f')
              }}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Contribution Grid */}
      <div
        className="hide-scrollbar"
        style={{
          position: 'relative',
          overflowX: 'auto',
          overflowY: 'hidden',
          paddingBottom: '10px'
        }}
      >
        {loading ? (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '120px',
            color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'
          }}>
            Loading contributions...
          </div>
        ) : (
          <>
            {/* Month Labels */}
            <div style={{
              display: 'flex',
              position: 'relative',
              height: '20px',
              marginBottom: '4px',
              marginLeft: '32px'
            }}>
              {getMonthLabels().map((label, i) => (
                <span
                  key={i}
                  style={{
                    position: 'absolute',
                    left: `${label.position}px`,
                    fontSize: '11px',
                    color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'
                  }}
                >
                  {label.month}
                </span>
              ))}
            </div>

            {/* Grid with Day Labels */}
            <div style={{ display: 'flex' }}>
              {/* Day Labels */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                marginRight: '4px',
                width: '28px'
              }}>
                {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((day, i) => (
                  <span
                    key={i}
                    style={{
                      height: '12px',
                      fontSize: '10px',
                      color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                      lineHeight: '12px'
                    }}
                  >
                    {day}
                  </span>
                ))}
              </div>

              {/* Weeks Grid */}
              <div style={{
                display: 'flex',
                gap: '2px'
              }}>
                {weeks.map((week, weekIndex) => (
                  <div
                    key={weekIndex}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px'
                    }}
                  >
                    {week.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        onMouseEnter={(e) => {
                          if (day) {
                            setHoveredDay(day);
                            setMousePos({ x: e.clientX, y: e.clientY });
                          }
                        }}
                        onMouseMove={(e) => {
                          if (day) {
                            setMousePos({ x: e.clientX, y: e.clientY });
                          }
                        }}
                        onMouseLeave={() => setHoveredDay(null)}
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '2px',
                          background: day ? getColorForLevel(day.level) : 'transparent',
                          cursor: day ? 'pointer' : 'default',
                          transition: 'transform 0.1s ease',
                          transform: hoveredDay === day ? 'scale(1.3)' : 'scale(1)'
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend and GitHub Link */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '12px',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              {/* Legend */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ fontSize: '11px', color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>Less</span>
                {[0, 1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '2px',
                      background: getColorForLevel(level)
                    }}
                  />
                ))}
                <span style={{ fontSize: '11px', color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>More</span>
              </div>

              {/* GitHub Profile Link */}
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'white',
                  textDecoration: 'none',
                  background: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
                  transition: 'transform 0.2s ease, opacity 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Profile
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
