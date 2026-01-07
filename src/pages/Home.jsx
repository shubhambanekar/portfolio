import { Link } from 'react-router-dom';
import { GlassCard } from '../components/GlassCard';
import { TypeWriter } from '../components/TypeWriter';
import { ScrollReveal } from '../components/ScrollReveal';
import { CountUp } from '../components/CountUp';
import { GitHubContributions } from '../components/GitHubContributions';
import { useTheme } from '../context/ThemeContext';

export const Home = () => {
  const { isDark } = useTheme();

  // Theme-aware colors
  const textPrimary = isDark ? 'white' : '#1d1d1f';
  const textSecondary = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';
  const textMuted = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)';
  const borderColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
  const pillText = isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)';
  const tagBg = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)';
  const ringBg = isDark ? '#0a0a0a' : '#f5f5f7';

  return (
    <div style={{ minHeight: '100vh', paddingTop: '100px', position: 'relative', zIndex: 1 }}>
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
        bottom: '15%',
        right: '25%',
        width: '500px',
        height: '500px',
        background: '#FF6B35',
        borderRadius: '50%',
        filter: 'blur(160px)',
        opacity: 0.15,
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'fixed',
        bottom: '20%',
        left: '20%',
        width: '400px',
        height: '400px',
        background: '#5B4CDB',
        borderRadius: '50%',
        filter: 'blur(150px)',
        opacity: 0.12,
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'fixed',
        top: '45%',
        left: '40%',
        width: '350px',
        height: '350px',
        background: '#5B4CDB',
        borderRadius: '50%',
        filter: 'blur(140px)',
        opacity: 0.1,
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'fixed',
        top: '60%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: '#FF6B35',
        borderRadius: '50%',
        filter: 'blur(130px)',
        opacity: 0.08,
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Hero Section */}
      <section style={{
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 32px',
        position: 'relative'
      }}>

        <div className="hero-content" style={{
          maxWidth: '1200px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '60px',
          flexWrap: 'wrap'
        }}>
          {/* Profile Picture */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="hero-profile" style={{
              flex: '1',
              minWidth: '300px',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <div style={{
                position: 'relative',
                width: '280px',
                height: '280px'
              }}>
                {/* Gradient ring */}
                <div style={{
                  position: 'absolute',
                  inset: '-4px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
                  padding: '4px'
                }}>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: ringBg
                  }} />
                </div>
                {/* Profile image */}
                <img
                  src={`${import.meta.env.BASE_URL}profile.png`}
                  alt="Shubham Banekar"
                  style={{
                    position: 'absolute',
                    inset: '0',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid transparent'
                  }}
                />
                {/* Glass overlay effect */}
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  pointerEvents: 'none'
                }} />
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="hero-text" style={{
            flex: '1',
            minWidth: '300px',
            textAlign: 'left'
          }}>
            <ScrollReveal delay={0}>
              <p style={{
                color: '#5B4CDB',
                fontSize: '14px',
                fontWeight: '600',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                <TypeWriter
                  words={['Full Stack Engineer', 'Software Architect', 'Cloud Developer', 'Problem Solver']}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseTime={2500}
                />
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 style={{
                fontSize: 'clamp(48px, 8vw, 72px)',
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: '24px'
              }}>
                <span style={{ display: 'block', color: textPrimary }}>Shubham</span>
                <span style={{
                  display: 'block',
                  background: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Banekar</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="location-info" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '8px',
                marginBottom: '16px'
              }}>
                <span style={{ color: '#FF6B35' }}>📍</span>
                <span style={{
                  fontSize: '14px',
                  color: textSecondary
                }}>
                  Based in Tampa, FL
                </span>
              </div>
              <p style={{
                fontSize: '18px',
                color: textSecondary,
                lineHeight: '1.7',
                marginBottom: '24px',
                maxWidth: '500px'
              }}>
                Building scalable microservices and enterprise applications with Java, Spring Boot, React, and Angular. 6+ years of experience in cloud-native development, WCAG-compliant government systems, IoT automation, and game server infrastructure.
              </p>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal delay={0.25}>
              <div className="social-links" style={{
                display: 'flex',
                gap: '12px',
                marginBottom: '24px',
                flexWrap: 'wrap'
              }}>
                {[
                  { href: 'https://github.com/shubhambanekar', icon: '🐙', label: 'GitHub' },
                  { href: 'https://linkedin.com/in/shubhambanekar', icon: '💼', label: 'LinkedIn' },
                  { href: 'https://www.youtube.com/@banekarlabzstudios', icon: '🎬', label: 'YouTube' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-pill"
                    style={{
                      padding: '10px 16px',
                      borderRadius: '25px',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '14px',
                      color: pillText,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <span>{social.icon}</span>
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="cta-buttons" style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap'
              }}>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <button className="glass-button" style={{
                    padding: '16px 32px',
                    color: 'white',
                    borderRadius: '50px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}>
                    Let's Talk
                  </button>
                </Link>

                <Link to="/about" style={{ textDecoration: 'none' }}>
                  <button className="glass-pill" style={{
                    padding: '16px 32px',
                    color: textPrimary,
                    borderRadius: '50px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    About Me
                  </button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '80px 32px',
        borderTop: `1px solid ${borderColor}`
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          textAlign: 'center'
        }}>
          {[
            { value: 6, suffix: '+', label: 'Years Experience' },
            { value: 50, suffix: '+', label: 'Projects Completed' },
            { value: 500, suffix: 'K+', label: 'Daily Transactions' },
            { value: 99.9, suffix: '%', label: 'System Uptime' },
          ].map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <GlassCard style={{ padding: '32px 24px' }}>
                <div style={{
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '8px'
                }}>
                  <CountUp end={stat.value} duration={2000} suffix={stat.suffix} />
                </div>
                <div style={{
                  fontSize: '14px',
                  color: textMuted,
                  textTransform: 'uppercase',
                  letterSpacing: '2px'
                }}>
                  {stat.label}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section style={{
        padding: '80px 32px',
        borderTop: `1px solid ${borderColor}`
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: '700',
                marginBottom: '16px'
              }}>
                <span style={{ color: textPrimary }}>Tech </span>
                <span style={{
                  background: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Stack</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px'
            }}>
              {[
                'Java', 'Spring Boot', 'JSF', 'PrimeFaces', 'React', 'Angular', 'TypeScript',
                'Node.js', 'Python', 'Django', 'PostgreSQL', 'MySQL', 'Redis', 'AWS',
                'Docker', 'Kubernetes', 'Jenkins', 'Git', 'Linux', 'OpenWRT'
              ].map((tech) => (
                <span
                  key={tech}
                  className="glass-pill"
                  style={{
                    padding: '10px 20px',
                    borderRadius: '25px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: pillText
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section style={{
        padding: '80px 32px',
        borderTop: `1px solid ${borderColor}`
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: '700',
                marginBottom: '16px'
              }}>
                <span style={{ color: textPrimary }}>Featured </span>
                <span style={{
                  background: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Projects</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}>
            {[
              {
                icon: '🏛️',
                title: 'CA FTB Tax Exemption Portal',
                description: 'Enterprise government application serving tax professionals with WCAG 2.1 accessibility',
                tech: ['JSF', 'PrimeFaces', 'Java'],
                link: 'https://webapp.ftb.ca.gov/'
              },
              {
                icon: '🦠',
                title: 'COVID Einstein',
                description: 'Public health platform processing real-time data for 100K+ daily users during pandemic',
                tech: ['Django', 'Redis', 'REST APIs'],
                link: null
              },
              {
                icon: '🎮',
                title: 'CS:CZ Game Server',
                description: 'Custom game server with AMX Mod X plugins, Discord integration, and DDoS protection',
                tech: ['C++', 'Pawn', 'Linux'],
                link: 'steam://connect/178.156.186.133'
              }
            ].map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.1}>
                <GlassCard style={{ padding: '28px', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '32px' }}>{project.icon}</span>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: textPrimary
                    }}>
                      {project.title}
                    </h3>
                  </div>
                  <p style={{
                    fontSize: '14px',
                    color: textSecondary,
                    lineHeight: '1.6',
                    marginBottom: '16px'
                  }}>
                    {project.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    alignItems: 'center'
                  }}>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '12px',
                          fontSize: '11px',
                          fontWeight: '500',
                          color: textSecondary,
                          background: tagBg
                        }}
                      >
                        {t}
                      </span>
                    ))}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          marginLeft: 'auto',
                          padding: '6px 12px',
                          borderRadius: '16px',
                          fontSize: '11px',
                          fontWeight: '600',
                          color: 'white',
                          textDecoration: 'none',
                          background: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)'
                        }}
                      >
                        View
                      </a>
                    )}
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div style={{ textAlign: 'center' }}>
              <Link to="/projects" style={{ textDecoration: 'none' }}>
                <button className="glass-pill" style={{
                  padding: '14px 28px',
                  color: textPrimary,
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  View All Projects →
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section style={{
        padding: '80px 32px',
        borderTop: `1px solid ${borderColor}`
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: '700',
                marginBottom: '16px'
              }}>
                <span style={{ color: textPrimary }}>GitHub </span>
                <span style={{
                  background: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Activity</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <GlassCard style={{ padding: '24px', overflow: 'hidden' }}>
              <GitHubContributions username="shubhamsunilbanekar" />
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
