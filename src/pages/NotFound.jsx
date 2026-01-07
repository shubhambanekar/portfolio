import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const NotFound = () => {
  const { isDark } = useTheme();
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [bugs, setBugs] = useState([]);

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

  return (
    <div
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
        {/* 404 Text */}
        <div style={{
          fontSize: '100px',
          fontWeight: '900',
          background: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '20px',
          lineHeight: 1
        }}>
          404
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
