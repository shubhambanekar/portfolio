import { useState, useRef, useEffect } from 'react';
import { TechLogoGroup } from '../components/characters/TechLogoGroup';
import { ScrollReveal } from '../components/ScrollReveal';
import { useTheme } from '../context/ThemeContext';
import { Toast } from '../components/Toast';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [isShaking, setIsShaking] = useState(false);
  const [isNodding, setIsNodding] = useState(false);
  const [lookAtPos, setLookAtPos] = useState(null);
  const [validatedFields, setValidatedFields] = useState({ name: false, email: false, message: false });
  const { isDark } = useTheme();

  // Refs for form fields
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 600);
  };

  const triggerNod = () => {
    setIsNodding(true);
    setTimeout(() => setIsNodding(false), 500);
  };

  // Update lookAt position when field is focused
  useEffect(() => {
    const updateLookAt = () => {
      let ref = null;
      if (focused === 'name') ref = nameRef;
      else if (focused === 'email') ref = emailRef;
      else if (focused === 'message') ref = messageRef;

      if (ref?.current) {
        const rect = ref.current.getBoundingClientRect();
        setLookAtPos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      } else {
        setLookAtPos(null);
      }
    };

    updateLookAt();
    window.addEventListener('resize', updateLookAt);
    window.addEventListener('scroll', updateLookAt);
    return () => {
      window.removeEventListener('resize', updateLookAt);
      window.removeEventListener('scroll', updateLookAt);
    };
  }, [focused]);

  // Validate field on blur and trigger nod if valid, shake if invalid
  const validateField = (fieldName, value) => {
    let isValid = false;
    if (fieldName === 'name') {
      isValid = value.trim().length >= 2;
    } else if (fieldName === 'email') {
      // Stricter email validation - requires proper TLD (2+ chars)
      isValid = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(value);
    } else if (fieldName === 'message') {
      isValid = value.trim().length >= 10;
    }

    return isValid;
  };

  const handleBlur = (fieldName) => {
    const value = formData[fieldName];
    const isValid = validateField(fieldName, value);

    // Only trigger animations if field has content
    if (value.trim().length > 0) {
      // Small delay to let eye movement complete first
      setTimeout(() => {
        if (isValid && !validatedFields[fieldName]) {
          setValidatedFields(prev => ({ ...prev, [fieldName]: true }));
          triggerNod();
        } else if (!isValid) {
          // Shake for invalid input
          setValidatedFields(prev => ({ ...prev, [fieldName]: false }));
          triggerShake();
        }
      }, 100);
    }

    setFocused(null);
  };

  // Theme-aware colors
  const textPrimary = isDark ? 'white' : '#1d1d1f';
  const textMuted = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)';
  const pillText = isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)';

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields are filled
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      triggerShake();
      setToast({
        show: true,
        message: 'Please fill in all fields.',
        type: 'error',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Using Web3Forms - free service, no backend needed
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'ae098d39-3f75-4e11-9510-fd3beadc92e4',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact: ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSent(true);
        setToast({
          show: true,
          message: 'Message sent successfully! I\'ll get back to you soon.',
          type: 'success',
        });
        setFormData({ name: '', email: '', message: '' });
        setValidatedFields({ name: false, email: false, message: false });
        // Reset sent state after 3 seconds
        setTimeout(() => setIsSent(false), 3000);
      } else {
        throw new Error('Failed to send');
      }
    } catch {
      setToast({
        show: true,
        message: 'Failed to send message. Please try again or email me directly.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/shubhambanekar', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/banekarshubham', icon: '💼' },
    { name: 'Email', url: 'mailto:shubhamsunilbanekar@gmail.com', icon: '✉️' },
  ];

  const inputStyle = (field) => ({
    width: '100%',
    padding: '16px',
    background: isDark
      ? (focused === field ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)')
      : (focused === field ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.8)'),
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: `1px solid ${focused === field ? 'rgba(91, 76, 219, 0.5)' : (isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.15)')}`,
    borderRadius: '12px',
    outline: 'none',
    color: textPrimary,
    fontSize: '16px',
    transition: 'all 0.3s ease',
    boxShadow: focused === field ? '0 0 20px rgba(91, 76, 219, 0.2)' : 'none'
  });

  return (
    <div style={{ minHeight: '100vh', paddingTop: '100px', position: 'relative' }}>
      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />

      {/* Button Animations */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes popIn {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>

      {/* Background Glows */}
      <div style={{
        position: 'fixed',
        top: '10%',
        left: '15%',
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
        right: '20%',
        width: '400px',
        height: '400px',
        background: '#FF6B35',
        borderRadius: '50%',
        filter: 'blur(140px)',
        opacity: 0.12,
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'fixed',
        top: '35%',
        left: '40%',
        width: '350px',
        height: '350px',
        background: '#FF6B35',
        borderRadius: '50%',
        filter: 'blur(140px)',
        opacity: 0.1,
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'fixed',
        bottom: '30%',
        right: '25%',
        width: '450px',
        height: '450px',
        background: '#5B4CDB',
        borderRadius: '50%',
        filter: 'blur(150px)',
        opacity: 0.12,
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'fixed',
        bottom: '15%',
        left: '20%',
        width: '400px',
        height: '400px',
        background: '#FF6B35',
        borderRadius: '50%',
        filter: 'blur(150px)',
        opacity: 0.14,
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'fixed',
        bottom: '5%',
        right: '15%',
        width: '300px',
        height: '300px',
        background: '#5B4CDB',
        borderRadius: '50%',
        filter: 'blur(130px)',
        opacity: 0.08,
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <section style={{
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 32px',
        position: 'relative'
      }}>
        <div className="contact-layout" style={{
          maxWidth: '1200px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '60px',
          flexWrap: 'wrap'
        }}>
          {/* Theme Logos with Eyes */}
          <ScrollReveal direction="left">
            <div style={{
              flex: '1',
              minWidth: '280px',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <TechLogoGroup
                logos={['purpleRect', 'gradientCircle', 'orangeRect']}
                sizes={[70, 95, 70]}
                isShaking={isShaking}
                isNodding={isNodding}
                lookAt={lookAtPos}
              />
            </div>
          </ScrollReveal>

          {/* Form Section */}
          <ScrollReveal direction="right" delay={0.2}>
            <div style={{
              flex: '1',
              minWidth: '320px',
              maxWidth: '500px',
              width: '100%'
            }}>
              <p style={{
              color: '#5B4CDB',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Contact
            </p>

            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: '800',
              lineHeight: '1.2',
              marginBottom: '16px'
            }}>
              <span style={{ color: textPrimary }}>Let's work </span>
              <span style={{
                background: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>together</span>
            </h1>

            <p style={{
              fontSize: '17px',
              color: textMuted,
              marginBottom: '40px'
            }}>
              Have a project in mind? Let's create something amazing.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '32px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  color: textMuted,
                  marginBottom: '8px',
                  textTransform: 'capitalize'
                }}>Name</label>
                <input
                  ref={nameRef}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => handleBlur('name')}
                  placeholder="John Doe"
                  style={inputStyle('name')}
                />
              </div>

              <div style={{ marginBottom: '32px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  color: textMuted,
                  marginBottom: '8px',
                  textTransform: 'capitalize'
                }}>Email</label>
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => handleBlur('email')}
                  placeholder="you@example.com"
                  style={inputStyle('email')}
                />
              </div>

              <div style={{ marginBottom: '40px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  color: textMuted,
                  marginBottom: '8px',
                  textTransform: 'capitalize'
                }}>Message</label>
                <textarea
                  ref={messageRef}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => handleBlur('message')}
                  rows={4}
                  placeholder="Tell me about your project..."
                  style={{
                    ...inputStyle('message'),
                    resize: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSent}
                className={isSent ? '' : 'glass-button'}
                style={{
                  width: '100%',
                  padding: '18px 32px',
                  color: 'white',
                  borderRadius: '50px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: (isSubmitting || isSent) ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  background: isSent ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' : undefined,
                  border: 'none',
                  transition: 'all 0.4s ease',
                  transform: isSent ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                {isSubmitting ? (
                  <>
                    <span style={{
                      width: '18px',
                      height: '18px',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: 'white',
                      borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite',
                    }} />
                    Sending...
                  </>
                ) : isSent ? (
                  <>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      animation: 'popIn 0.4s ease',
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    Sent!
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>

            {/* Social Links */}
            <div style={{
              marginTop: '48px',
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap'
            }}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-pill"
                  style={{
                    padding: '10px 16px',
                    borderRadius: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: pillText,
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <span>{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
