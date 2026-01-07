import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="glass-nav" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '16px 24px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <NavLink to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            zIndex: 51
          }}>
            <img
              src="/profile.png"
              alt="Shubham Banekar"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #5B4CDB'
              }}
            />
            <span style={{ color: isDark ? 'white' : '#1d1d1f', fontWeight: '600', fontSize: '18px' }}>Shubham</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="desktop-nav glass-pill" style={{
            gap: '8px',
            padding: '6px',
            borderRadius: '50px'
          }}>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                style={({ isActive }) => ({
                  padding: '10px 24px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  background: isActive ? (isDark ? 'white' : '#1d1d1f') : 'transparent',
                  color: isActive ? (isDark ? '#0a0a0a' : 'white') : (isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)')
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right side actions */}
          <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="glass-pill"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
              }}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#FFD93D' }}>
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#5B4CDB' }}>
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            {/* GitHub button - hidden on mobile */}
            <a
              href="https://github.com/shubhambanekar"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button nav-github-btn"
              style={{
                padding: '10px 24px',
                borderRadius: '50px',
                color: 'white',
                fontSize: '14px',
                fontWeight: '600',
                textDecoration: 'none'
              }}
            >
              GitHub
            </a>

            {/* Mobile Menu Button */}
            <button
              className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              style={{ color: isDark ? 'white' : '#1d1d1f' }}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={() => setMobileMenuOpen(false)}
            style={({ isActive }) => ({
              padding: '16px 32px',
              fontSize: '24px',
              fontWeight: '600',
              textDecoration: 'none',
              borderRadius: '16px',
              transition: 'all 0.2s ease',
              background: isActive
                ? 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)'
                : 'transparent',
              color: isActive
                ? 'white'
                : (isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'),
              WebkitBackgroundClip: isActive ? 'unset' : 'unset',
            })}
          >
            {link.label}
          </NavLink>
        ))}

        {/* Mobile GitHub link */}
        <a
          href="https://github.com/shubhambanekar"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button"
          style={{
            marginTop: '24px',
            padding: '14px 32px',
            borderRadius: '50px',
            color: 'white',
            fontSize: '16px',
            fontWeight: '600',
            textDecoration: 'none'
          }}
        >
          View GitHub
        </a>
      </div>
    </>
  );
};
