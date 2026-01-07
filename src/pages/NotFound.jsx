import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const NotFound = () => {
  const { isDark } = useTheme();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [glitchText, setGlitchText] = useState('404');
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [bugs, setBugs] = useState([]);
  const containerRef = useRef(null);

  const funnyMessages = [
    "Looks like this page went on vacation... without telling anyone.",
    "This page is playing hide and seek. It's winning.",
    "Error 404: Page not found. Probably abducted by aliens.",
    "This page got lost finding the bathroom.",
    "Oops! The page you're looking for is in another castle.",
    "This page rage-quit and deleted itself.",
    "Page not found. Have you tried turning it off and on again?",
    "The hamsters powering this page need a break.",
  ];

  const [message] = useState(() =>
    funnyMessages[Math.floor(Math.random() * funnyMessages.length)]
  );

  // Glitch effect
  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const glitched = '404'.split('').map(char =>
          Math.random() > 0.5 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
        ).join('');
        setGlitchText(glitched);
        setTimeout(() => setGlitchText('404'), 100);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking for eyes
  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  // Bug spawning for mini-game
  useEffect(() => {
    if (!gameActive) return;

    const spawnBug = () => {
      if (bugs.length < 10) {
        setBugs(prev => [...prev, {
          id: Date.now(),
          x: Math.random() * 80 + 10,
          y: Math.random() * 60 + 20,
          type: Math.random() > 0.5 ? '🐛' : '🪲'
        }]);
      }
    };

    const interval = setInterval(spawnBug, 800);
    return () => clearInterval(interval);
  }, [gameActive, bugs.length]);

  const squashBug = (bugId) => {
    setBugs(prev => prev.filter(b => b.id !== bugId));
    setScore(prev => prev + 10);
  };

  // Eye component
  const Eye = ({ cx, cy, size = 40 }) => {
    const eyeRadius = size / 2;
    const pupilRadius = size / 4;
    const maxPupilMove = eyeRadius - pupilRadius - 4;

    const dx = mousePos.x - cx;
    const dy = mousePos.y - cy;
    const angle = Math.atan2(dy, dx);
    const distance = Math.min(Math.sqrt(dx * dx + dy * dy), maxPupilMove * 3);
    const pupilDistance = Math.min(distance / 3, maxPupilMove);

    const pupilX = Math.cos(angle) * pupilDistance;
    const pupilY = Math.sin(angle) * pupilDistance;

    return (
      <g>
        <circle
          cx={cx}
          cy={cy}
          r={eyeRadius}
          fill={isDark ? 'white' : '#f0f0f0'}
          stroke={isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'}
          strokeWidth="2"
        />
        <circle
          cx={cx + pupilX}
          cy={cy + pupilY}
          r={pupilRadius}
          fill={isDark ? '#1a1a2e' : '#333'}
        />
        <circle
          cx={cx + pupilX - 3}
          cy={cy + pupilY - 3}
          r={3}
          fill="white"
        />
      </g>
    );
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 20px 40px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Glows */}
      <div style={{
        position: 'fixed',
        top: '10%',
        left: '20%',
        width: '450px',
        height: '450px',
        background: '#5B4CDB',
        borderRadius: '50%',
        filter: 'blur(150px)',
        opacity: 0.18,
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'fixed',
        top: '5%',
        right: '25%',
        width: '400px',
        height: '400px',
        background: '#FF6B35',
        borderRadius: '50%',
        filter: 'blur(140px)',
        opacity: 0.14,
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'fixed',
        top: '40%',
        left: '35%',
        width: '380px',
        height: '380px',
        background: '#FF6B35',
        borderRadius: '50%',
        filter: 'blur(140px)',
        opacity: 0.1,
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'fixed',
        bottom: '25%',
        right: '20%',
        width: '450px',
        height: '450px',
        background: '#5B4CDB',
        borderRadius: '50%',
        filter: 'blur(150px)',
        opacity: 0.14,
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'fixed',
        bottom: '15%',
        left: '25%',
        width: '400px',
        height: '400px',
        background: '#FF6B35',
        borderRadius: '50%',
        filter: 'blur(150px)',
        opacity: 0.12,
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'fixed',
        bottom: '35%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: '#5B4CDB',
        borderRadius: '50%',
        filter: 'blur(130px)',
        opacity: 0.08,
        pointerEvents: 'none',
        zIndex: 0
      }} />
      {/* Floating 404 Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.03,
        fontSize: '200px',
        fontWeight: '900',
        color: isDark ? 'white' : 'black',
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        {Array(20).fill('404').map((text, i) => (
          <span key={i} style={{ margin: '20px' }}>{text}</span>
        ))}
      </div>

      {/* Bug Game Overlay */}
      {gameActive && bugs.map(bug => (
        <div
          key={bug.id}
          onClick={() => squashBug(bug.id)}
          style={{
            position: 'absolute',
            left: `${bug.x}%`,
            top: `${bug.y}%`,
            fontSize: '30px',
            cursor: 'crosshair',
            animation: 'bugWiggle 0.3s infinite',
            transition: 'transform 0.1s',
            zIndex: 10
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.3)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          {bug.type}
        </div>
      ))}

      {/* Main Content */}
      <div className="glass-card" style={{
        padding: '60px',
        textAlign: 'center',
        maxWidth: '600px',
        position: 'relative',
        zIndex: 5
      }}>
        {/* Animated Eyes on 404 */}
        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <svg width="300" height="120" viewBox="0 0 300 120" style={{ display: 'block', margin: '0 auto' }}>
            {/* 4 */}
            <text x="30" y="100" fontSize="100" fontWeight="900" fill="url(#gradient404)" fontFamily="Inter, sans-serif">4</text>

            {/* 0 with eyes */}
            <text x="110" y="100" fontSize="100" fontWeight="900" fill="url(#gradient404)" fontFamily="Inter, sans-serif">0</text>
            <Eye cx={155} cy={55} size={30} />

            {/* 4 */}
            <text x="190" y="100" fontSize="100" fontWeight="900" fill="url(#gradient404)" fontFamily="Inter, sans-serif">4</text>

            <defs>
              <linearGradient id="gradient404" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5B4CDB" />
                <stop offset="100%" stopColor="#FF6B35" />
              </linearGradient>
            </defs>
          </svg>

          {/* Glitch overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '100px',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            opacity: glitchText !== '404' ? 1 : 0,
            transition: 'opacity 0.05s',
            pointerEvents: 'none'
          }}>
            {glitchText}
          </div>
        </div>

        {/* Funny Message */}
        <p style={{
          fontSize: '18px',
          color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
          marginBottom: '30px',
          lineHeight: 1.6
        }}>
          {message}
        </p>

        {/* Score Display */}
        {gameActive && (
          <div style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#FF6B35',
            marginBottom: '20px'
          }}>
            Score: {score} 🎯
          </div>
        )}

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link
            to="/"
            className="glass-button"
            style={{
              padding: '14px 32px',
              borderRadius: '50px',
              color: 'white',
              fontSize: '16px',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            🏠 Go Home
          </Link>

          <button
            onClick={() => {
              setGameActive(!gameActive);
              if (!gameActive) {
                setScore(0);
                setBugs([]);
              }
            }}
            className="glass-pill"
            style={{
              padding: '14px 32px',
              borderRadius: '50px',
              color: isDark ? 'white' : '#1d1d1f',
              fontSize: '16px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            {gameActive ? '🛑 Stop Game' : '🐛 Squash Bugs!'}
          </button>
        </div>

        {/* Game Instructions */}
        {gameActive && (
          <p style={{
            fontSize: '12px',
            color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
            marginTop: '20px'
          }}>
            Click the bugs to squash them! They caused this 404 error 🐛
          </p>
        )}
      </div>

      {/* Decorative floating elements */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '10%',
        fontSize: '60px',
        animation: 'float 3s ease-in-out infinite',
        opacity: 0.5
      }}>
        👾
      </div>
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '15%',
        fontSize: '50px',
        animation: 'float 4s ease-in-out infinite',
        animationDelay: '1s',
        opacity: 0.5
      }}>
        🚀
      </div>
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        fontSize: '45px',
        animation: 'float 3.5s ease-in-out infinite',
        animationDelay: '0.5s',
        opacity: 0.5
      }}>
        🌙
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes bugWiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
      `}</style>
    </div>
  );
};
