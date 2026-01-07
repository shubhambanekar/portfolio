import { GlassCard } from '../components/GlassCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { useTheme } from '../context/ThemeContext';

// Professional & Academic Projects
const professionalProjects = [
  {
    id: 'p0a',
    title: "BE Exemption Application 3500/3500A",
    category: "Enterprise Government Application",
    period: "Mar 2024 - Oct 2024",
    description: "Spearheaded development of tax exemption application for CA Franchise Tax Board, transitioning from paper-based to digital platform serving tax professionals and business representatives.",
    highlights: [
      "Built with JSF, PrimeFaces, XHTML supporting save-in-progress forms with EOD database",
      "Integrated XPDF with XML for accurate PDF form generation",
      "Achieved WCAG 2.1 Level AA accessibility certification",
      "Implemented secure document attachment workflow and user authentication"
    ],
    tech: ["JSF", "PrimeFaces", "Java", "Maven", "XPDF", "XML", "MVC", "XHTML"],
    icon: "🏛️",
    link: "https://webapp.ftb.ca.gov/"
  },
  {
    id: 'p0b',
    title: "Enterprise Knowledge Library Search",
    category: "Enterprise Search Platform",
    period: "Jan 2024 - Sep 2024",
    description: "Led development of external search feature for CA FTB's Enterprise Knowledge Library, enhancing information accessibility across digital resources.",
    highlights: [
      "Integrated with Pega server via OAuth token authentication",
      "Built article rating system connected to Pega feedback mechanisms",
      "Achieved WCAG 2.1 Level AA accessibility certification",
      "Optimized knowledge management and data retrieval processes"
    ],
    tech: ["JSF", "PrimeFaces", "OAuth", "Pega", "Maven", "JBoss", "MVC"],
    icon: "🔍",
    link: "https://webapp.ftb.ca.gov/ssa/ekles/"
  },
  {
    id: 'p1',
    title: "COVID Einstein",
    category: "Public Health Platform",
    period: "Feb 2020 - May 2020",
    description: "Architected critical public health information system processing real-time COVID-19 data for millions of Indians during the pandemic.",
    highlights: [
      "Integrated 10+ government APIs (CoWIN, ICMR, state health departments) with custom decryption modules",
      "Built caching layer with Redis, reducing API calls by 70% while maintaining real-time accuracy",
      "Optimized to handle 100K+ daily active users, improving dashboard load times from 5s to 800ms",
      "Migrated from PHP/MySQL to Django for enhanced scalability"
    ],
    tech: ["PHP", "Django", "MySQL", "Redis", "OpenSSL", "REST APIs"],
    icon: "🦠"
  },
  {
    id: 'p2',
    title: "License Plate Recognition",
    category: "Computer Vision",
    period: "Oct 2019 - Jan 2020",
    description: "ML-powered system to identify and extract license plate information from images using computer vision techniques.",
    highlights: [
      "Implemented image preprocessing with Gaussian blur and Sobel edge detection",
      "Integrated Tesseract-OCR engine via pytesseract for text extraction",
      "Built OpenCV pipeline for accurate license plate localization",
      "Achieved high accuracy on diverse image conditions"
    ],
    tech: ["Python", "OpenCV", "Tesseract-OCR", "NumPy", "Image Processing"],
    icon: "🚗"
  },
  {
    id: 'p3',
    title: "Online Job Portal",
    category: "Full Stack Web Application",
    period: "Jul 2018 - Apr 2019",
    description: "University capstone project providing an efficient online platform for job seekers with comprehensive search and application features.",
    highlights: [
      "Built user-friendly interface with Java, JSP, and JavaScript",
      "Implemented job search and application processing backend",
      "Integrated PostgreSQL for efficient data storage and retrieval",
      "Deployed on Tomcat server for optimal performance"
    ],
    tech: ["Java", "JSP", "JavaScript", "PostgreSQL", "Tomcat", "HTML/CSS"],
    icon: "💼"
  },
  {
    id: 'p4',
    title: "Sketchbook",
    category: "Graphics Programming",
    period: "Jul 2018 - Jan 2019",
    description: "Software tool emulating traditional sketching functionalities using computer graphics algorithms.",
    highlights: [
      "Implemented Bresenham's Line and Circle algorithms",
      "Built Rubber-Banding Technique for interactive drawing",
      "Used Mid-Point Circle Algorithm for smooth curves",
      "Developed with OpenGL/GLUT library in C"
    ],
    tech: ["C", "OpenGL", "GLUT", "Graphics Algorithms"],
    icon: "✏️"
  },
  {
    id: 'p5',
    title: "Arduino Ultrasonic Radar",
    category: "Embedded Systems",
    period: "Aug 2017 - Apr 2018",
    description: "Hardware project integrating ultrasonic sensor with Arduino for object detection and distance measurement.",
    highlights: [
      "Interfaced HC-SR04 sensor with Arduino ATmega2560",
      "Built real-time data transmission to computer interface",
      "Calculated distance and angle of detected objects",
      "Created visual radar display for obstacle detection"
    ],
    tech: ["Arduino", "C++", "Ultrasonic Sensors", "Serial Communication"],
    icon: "📡"
  }
];

// Personal/Side Projects
const projects = [
  {
    id: 1,
    title: "Counter-Strike Condition Zero Server",
    category: "Game Server Infrastructure",
    description: "Built and maintained a full-featured CS:CZ dedicated server with custom modifications including ReGameDLL, ReAPI, and ReHLDS for enhanced performance and security.",
    highlights: [
      "Developed custom AMX Mod X plugins in Pawn/C++ for gameplay features",
      "Created custom maps using Hammer Editor and 3D models for CS:CZ/CS 1.6",
      "Implemented DDoS protection with fail2ban, UFW rules, and iptables",
      "Built Discord integration with Steam linking and /calladmin command"
    ],
    tech: ["AMX Mod X", "Pawn", "C++", "Hammer Editor", "3D Modeling", "ReGameDLL", "Linux"],
    icon: "🎮",
    link: "steam://connect/178.156.186.133"
  },
  {
    id: 2,
    title: "HLStatsX Modern UI Redesign",
    category: "Full Stack Development",
    description: "Transformed the legacy HLStatsX player statistics platform with a modern, responsive interface using React and Bootstrap.",
    highlights: [
      "Complete frontend overhaul from legacy PHP templates to React SPA",
      "Responsive Bootstrap design for mobile and desktop",
      "Improved data visualization for player statistics",
      "Maintained backward compatibility with existing database"
    ],
    tech: ["React", "Bootstrap", "PHP", "MySQL", "REST API"],
    icon: "📊"
  },
  {
    id: 3,
    title: "YapB AI Bot Integration",
    category: "AI & Automation",
    description: "Created an intelligent bot system that uses Grok AI to make game bots react dynamically to in-game events and player messages.",
    highlights: [
      "Node.js backend connecting game server to Grok API",
      "Real-time event processing for contextual bot responses",
      "Natural language processing for player interactions",
      "Custom personality and response patterns"
    ],
    tech: ["Node.js", "Grok AI", "WebSockets", "REST API"],
    icon: "🤖"
  },
  {
    id: 4,
    title: "Smart Home Automation",
    category: "IoT & Home Automation",
    description: "Set up Homebridge integration for Google Nest devices using Google Cloud Pub/Sub for real-time home automation control.",
    highlights: [
      "Configured Homebridge server for Apple HomeKit compatibility",
      "Integrated Google Nest devices via Google Cloud Pub/Sub",
      "Created automation routines and scenes",
      "Enabled cross-platform smart home control"
    ],
    tech: ["Homebridge", "Google Cloud", "Pub/Sub", "Node.js", "HomeKit"],
    icon: "🏠"
  },
  {
    id: 5,
    title: "Custom OpenWRT Router Build",
    category: "Networking & Embedded Systems",
    description: "Built custom OpenWRT firmware for BananaPi BPi-R3 router with automated thermal management and network security hardening.",
    highlights: [
      "Custom OpenWRT build for BPi-R3 hardware",
      "Automated fan speed control based on CPU temperature",
      "Network security hardening and firewall configuration",
      "VPN setup and traffic management"
    ],
    tech: ["OpenWRT", "Linux", "Shell Scripting", "BPi-R3", "Networking"],
    icon: "📡"
  },
  {
    id: 6,
    title: "Home Network Security",
    category: "DevOps & Security",
    description: "Comprehensive security infrastructure protecting home network with enterprise-grade measures.",
    highlights: [
      "Multi-layer firewall with custom iptables rules",
      "Intrusion detection and automated threat response",
      "Network segmentation and VLAN configuration",
      "DDoS mitigation and rate limiting"
    ],
    tech: ["Linux", "fail2ban", "iptables", "UFW", "VLANs", "OpenWRT"],
    icon: "🛡️"
  },
  {
    id: 7,
    title: "Discord-Game Server Bridge",
    category: "Integration & Automation",
    description: "Comprehensive Discord bot system that bridges game server functionality with Discord community management.",
    highlights: [
      "Steam ID verification and linking via Discord",
      "Real-time chat sync between game and Discord channels",
      "Admin notification system with /calladmin command",
      "Player statistics dashboard integration"
    ],
    tech: ["Discord.js", "Node.js", "MySQL", "Steam API"],
    icon: "🔗"
  },
  {
    id: 8,
    title: "Drone Flight Planner",
    category: "Full Stack Development",
    description: "Comprehensive flight planning platform for drone pilots that consolidates weather analysis, airspace intelligence, and pre-flight checklists into one unified tool.",
    highlights: [
      "Multi-source weather aggregation with wind profiles and 7-day forecasting",
      "FAA airspace maps, TFRs, NOTAMs, and LAANC grid visualization",
      "Interactive Leaflet-based flight path planning with waypoints",
      "Pre-flight checklists with drone-specific templates and PDF export"
    ],
    tech: ["Vue 3", "Pinia", "Tailwind CSS", "Leaflet.js", "Chart.js", "OpenWeatherMap API", "FAA APIs"],
    icon: "🚁",
    status: "In Progress"
  }
];

const hobbies = [
  {
    icon: "🎬",
    title: "Cinematic Video Making",
    description: "Creating visually stunning videos with cinematic techniques and storytelling",
    link: "https://www.youtube.com/@banekarlabzstudios"
  },
  {
    icon: "🔭",
    title: "Astronomy",
    description: "Exploring planets and stars through my telescope, capturing the wonders of the night sky"
  },
  {
    icon: "💪",
    title: "Fitness",
    description: "Dedicated workout routine to maintain physical and mental well-being"
  },
  {
    icon: "🎮",
    title: "Game Server Hosting",
    description: "Building and managing multiplayer game servers with custom plugins"
  },
  {
    icon: "🗺️",
    title: "Level Design",
    description: "Creating custom maps for CS:CZ and CS 1.6 using Hammer Editor"
  },
  {
    icon: "🎨",
    title: "3D Modeling",
    description: "Designing custom player and weapon models for Counter-Strike games"
  },
  {
    icon: "🏠",
    title: "Smart Home Tinkering",
    description: "Automating home with Homebridge, Google Nest, and custom integrations"
  },
  {
    icon: "📡",
    title: "Networking & Security",
    description: "Building custom routers with OpenWRT and securing home infrastructure"
  }
];

export const Projects = () => {
  const { isDark } = useTheme();

  // Theme-aware colors
  const textPrimary = isDark ? 'white' : '#1d1d1f';
  const textSecondary = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';
  const textMuted = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
  const tagBg = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)';

  return (
    <div style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px', position: 'relative', zIndex: 1 }}>
      {/* Background Glows */}
      <div style={{
        position: 'fixed',
        top: '5%',
        left: '20%',
        width: '450px',
        height: '450px',
        background: '#5B4CDB',
        borderRadius: '50%',
        filter: 'blur(150px)',
        opacity: 0.16,
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'fixed',
        top: '10%',
        right: '15%',
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
        top: '30%',
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
        top: '45%',
        right: '25%',
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
        bottom: '25%',
        left: '15%',
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
        right: '20%',
        width: '500px',
        height: '500px',
        background: '#FF6B35',
        borderRadius: '50%',
        filter: 'blur(160px)',
        opacity: 0.14,
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'fixed',
        bottom: '5%',
        left: '40%',
        width: '300px',
        height: '300px',
        background: '#5B4CDB',
        borderRadius: '50%',
        filter: 'blur(130px)',
        opacity: 0.08,
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{
              color: '#5B4CDB',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Portfolio
            </p>
            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: '800',
              lineHeight: '1.2',
              marginBottom: '24px'
            }}>
              <span style={{ color: textPrimary }}>Professional & </span>
              <span style={{
                background: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Academic</span>
            </h1>
            <p style={{
              fontSize: '18px',
              color: textSecondary,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Enterprise applications and academic projects showcasing real-world impact
            </p>
          </div>
        </ScrollReveal>

        {/* Professional & Academic Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
          gap: '24px',
          marginBottom: '80px'
        }}>
          {professionalProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <GlassCard style={{ padding: '32px', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '40px' }}>{project.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                      <span style={{
                        color: '#FF6B35',
                        fontSize: '12px',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}>
                        {project.category}
                      </span>
                      <span style={{
                        color: textMuted,
                        fontSize: '12px'
                      }}>
                        {project.period}
                      </span>
                    </div>
                    <h3 style={{
                      fontSize: '22px',
                      fontWeight: '700',
                      color: textPrimary,
                      marginTop: '4px'
                    }}>
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p style={{
                  color: textSecondary,
                  lineHeight: '1.7',
                  marginBottom: '20px',
                  fontSize: '15px'
                }}>
                  {project.description}
                </p>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 20px 0'
                }}>
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} style={{
                      color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                      fontSize: '14px',
                      marginBottom: '8px',
                      paddingLeft: '20px',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#5B4CDB'
                      }}>▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  alignItems: 'center'
                }}>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="glass-pill"
                      style={{
                        padding: '6px 12px',
                        borderRadius: '16px',
                        fontSize: '12px',
                        fontWeight: '500',
                        color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        marginLeft: 'auto',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: 'white',
                        textDecoration: 'none',
                        background: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
                        transition: 'transform 0.2s ease'
                      }}
                      onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                    >
                      View Live
                    </a>
                  )}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Personal Projects Section */}
        <section style={{ marginBottom: '80px' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <p style={{
                color: '#5B4CDB',
                fontSize: '14px',
                fontWeight: '600',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                Beyond the Day Job
              </p>
              <h2 style={{
                fontSize: 'clamp(36px, 5vw, 52px)',
                fontWeight: '800',
                lineHeight: '1.2',
                marginBottom: '24px'
              }}>
                <span style={{ color: textPrimary }}>Personal </span>
                <span style={{
                  background: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Projects</span>
              </h2>
              <p style={{
                fontSize: '18px',
                color: textSecondary,
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Side projects that showcase my passion for building things outside of work
              </p>
            </div>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
            gap: '24px'
          }}>
            {projects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.1}>
                <GlassCard style={{ padding: '32px', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '40px' }}>{project.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                        <span style={{
                          color: '#FF6B35',
                          fontSize: '12px',
                          fontWeight: '600',
                          textTransform: 'uppercase',
                          letterSpacing: '1px'
                        }}>
                          {project.category}
                        </span>
                        {project.status && (
                          <span style={{
                            padding: '3px 10px',
                            borderRadius: '12px',
                            fontSize: '10px',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            color: '#0a0a0a',
                            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
                          }}>
                            {project.status}
                          </span>
                        )}
                      </div>
                      <h3 style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        color: textPrimary,
                        marginTop: '4px'
                      }}>
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p style={{
                    color: textSecondary,
                    lineHeight: '1.7',
                    marginBottom: '20px',
                    fontSize: '15px'
                  }}>
                    {project.description}
                  </p>

                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 20px 0'
                  }}>
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} style={{
                        color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                        fontSize: '14px',
                        marginBottom: '8px',
                        paddingLeft: '20px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: '#5B4CDB'
                        }}>▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    alignItems: 'center'
                  }}>
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="glass-pill"
                        style={{
                          padding: '6px 12px',
                          borderRadius: '16px',
                          fontSize: '12px',
                          fontWeight: '500',
                          color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.link && (
                      <a
                        href={project.link}
                        style={{
                          marginLeft: 'auto',
                          padding: '8px 16px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: 'white',
                          textDecoration: 'none',
                          background: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
                          transition: 'transform 0.2s ease'
                        }}
                        onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                      >
                        Connect to Server
                      </a>
                    )}
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Hobbies Section */}
        <section>
          <ScrollReveal>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '40px'
            }}>
              <span style={{ color: textPrimary }}>When I'm </span>
              <span style={{
                background: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Not Coding</span>
            </h2>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {hobbies.map((hobby, i) => (
              <ScrollReveal key={hobby.title} delay={i * 0.1}>
                {hobby.link ? (
                  <a href={hobby.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                    <GlassCard style={{
                      padding: '28px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      minHeight: '220px'
                    }}>
                      <span style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>
                        {hobby.icon}
                      </span>
                      <h3 style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: textPrimary,
                        marginBottom: '8px'
                      }}>
                        {hobby.title}
                      </h3>
                      <p style={{
                        color: textMuted,
                        fontSize: '14px',
                        lineHeight: '1.6',
                        marginBottom: '12px'
                      }}>
                        {hobby.description}
                      </p>
                      <span style={{
                        display: 'inline-block',
                        padding: '6px 14px',
                        borderRadius: '16px',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: 'white',
                        background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)'
                      }}>
                        Watch on YouTube
                      </span>
                    </GlassCard>
                  </a>
                ) : (
                  <GlassCard style={{
                    padding: '28px',
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    minHeight: '220px'
                  }}>
                    <span style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>
                      {hobby.icon}
                    </span>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: textPrimary,
                      marginBottom: '8px'
                    }}>
                      {hobby.title}
                    </h3>
                    <p style={{
                      color: textMuted,
                      fontSize: '14px',
                      lineHeight: '1.6'
                    }}>
                      {hobby.description}
                    </p>
                  </GlassCard>
                )}
              </ScrollReveal>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
