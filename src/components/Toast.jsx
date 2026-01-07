import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export const Toast = ({ message, type = 'success', isVisible, onClose, duration = 4000 }) => {
  const { isDark } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setTimeout(onClose, 300);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible && !isAnimating) return null;

  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
  };

  const colors = {
    success: '#10B981',
    error: '#EF4444',
    info: '#5B4CDB',
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '100px',
        right: '24px',
        zIndex: 1000,
        transform: isAnimating ? 'translateX(0)' : 'translateX(120%)',
        opacity: isAnimating ? 1 : 0,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div
        className="glass-card"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '16px 20px',
          borderRadius: '12px',
          borderLeft: `4px solid ${colors[type]}`,
          minWidth: '280px',
          maxWidth: '400px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
        }}
      >
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: colors[type],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '700',
            fontSize: '14px',
            flexShrink: 0,
          }}
        >
          {icons[type]}
        </div>
        <p
          style={{
            margin: 0,
            fontSize: '14px',
            fontWeight: '500',
            color: isDark ? 'white' : '#1d1d1f',
            lineHeight: 1.4,
          }}
        >
          {message}
        </p>
        <button
          onClick={() => {
            setIsAnimating(false);
            setTimeout(onClose, 300);
          }}
          style={{
            background: 'none',
            border: 'none',
            color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
            cursor: 'pointer',
            padding: '4px',
            marginLeft: 'auto',
            fontSize: '18px',
            lineHeight: 1,
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
};
