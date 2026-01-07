import { useTheme } from '../context/ThemeContext';

export const Footer = () => {
  const { isDark } = useTheme();
  const techStack = ['React', 'Vite', 'React Router', 'Canvas API'];

  return (
    <footer className="glass-nav" style={{
      padding: '40px 32px',
      marginTop: '80px',
      borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        textAlign: 'center'
      }}>
        {/* Tech Stack */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '12px'
        }}>
          {techStack.map((tech) => (
            <span
              key={tech}
              className="glass-pill"
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '500',
                color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Developed with love */}
        <p style={{
          fontSize: '14px',
          color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
          margin: 0
        }}>
          Developed with <span style={{ color: '#FF6B35' }}>❤️</span> by Shubham Banekar
        </p>

        {/* Copyright */}
        <p style={{
          fontSize: '12px',
          color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
          margin: 0
        }}>
          © {new Date().getFullYear()} Shubham Banekar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
