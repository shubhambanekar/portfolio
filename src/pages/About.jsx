import { TechLogoGroup } from '../components/characters/TechLogoGroup';
import { GlassCard } from '../components/GlassCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { useTheme } from '../context/ThemeContext';

// Your resume data - edit this file directly to update your portfolio
const resumeData = {
  education: [
    {
      id: 1,
      school: "California State University Long Beach",
      location: "Long Beach, CA",
      degree: "Master of Science in Computer Science",
      gpa: "3.61"
    },
    {
      id: 2,
      school: "Savitribai Phule Pune University",
      location: "Pune, MH, India",
      degree: "Bachelor of Science in Computer Science",
      gpa: "3.00"
    }
  ],
  experiences: [
    {
      id: 1,
      company: "Maantic Inc (SunRun)",
      role: "Software Engineer",
      location: "Tampa, FL",
      period: "October 2024 – Present"
    },
    {
      id: 2,
      company: "State of California, Franchise Tax Board",
      role: "Sr. Full Stack Engineer",
      location: "Sacramento, CA",
      period: "January 2024 – September 2024"
    },
    {
      id: 3,
      company: "California State University Long Beach",
      role: "Graduate Teaching Assistant",
      location: "Long Beach, CA",
      period: "October 2021 – May 2023"
    },
    {
      id: 4,
      company: "Maantic Technologies",
      role: "Software Engineer",
      location: "Pune, MH, India",
      period: "May 2020 – July 2021"
    },
    {
      id: 5,
      company: "Dreamwarez Software",
      role: "Software Engineer",
      location: "Pune, MH, India",
      period: "July 2018 – April 2020"
    }
  ],
  skillCategories: [
    {
      category: "Programming Languages",
      skills: ["C", "C++", "C#", "Java", "Python", "PHP", "Golang", "JavaScript", "TypeScript", "Kotlin", "Ruby", "Scala"]
    },
    {
      category: "Frontend Development",
      skills: ["React", "Angular", "Vue", "Next.js", "Node.js", "Bootstrap", "Tailwind CSS", "HTML5", "CSS3", "SASS", "jQuery", "Redux"]
    },
    {
      category: "Backend & Frameworks",
      skills: ["Spring Boot", "Spring MVC", ".NET Core", ".NET Framework", "Hibernate", "Express.js", "Django", "Flask", "FastAPI", "Ruby on Rails"]
    },
    {
      category: "API & Integration",
      skills: ["REST", "RESTful APIs", "SOAP", "GraphQL", "OAuth 2.0", "JWT", "JSON", "XML", "Swagger", "Postman", "WebSockets"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins", "GitLab CI", "GitHub Actions", "Terraform", "Ansible", "CI/CD Pipelines", "Microservices", "Serverless"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "SQL Server", "PostgreSQL", "Oracle", "NoSQL", "MongoDB", "Redis", "Cassandra", "DynamoDB", "T-SQL", "DB2", "Elasticsearch"]
    },
    {
      category: "Testing & Quality",
      skills: ["JUnit", "Mockito", "Selenium", "Jest", "Cypress", "TestNG", "TDD", "BDD", "Unit Testing", "Integration Testing", "E2E Testing"]
    },
    {
      category: "Version Control & Tools",
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "SVN", "Maven", "Gradle", "npm", "yarn", "Webpack"]
    },
    {
      category: "Message Queues & Streaming",
      skills: ["Apache Kafka", "RabbitMQ", "AWS SQS", "Azure Service Bus", "Redis Pub/Sub", "ActiveMQ"]
    },
    {
      category: "Monitoring & Observability",
      skills: ["Splunk", "ELK Stack", "Prometheus", "Grafana", "Datadog", "New Relic", "CloudWatch", "Application Insights"]
    },
    {
      category: "Architecture & Design",
      skills: ["Design Patterns", "SOLID Principles", "MVC", "MVVM", "Event-Driven", "Domain-Driven Design", "Clean Architecture", "System Design"]
    },
    {
      category: "Methodologies & Soft Skills",
      skills: ["Agile", "Scrum", "Kanban", "JIRA", "Confluence", "Rally", "Code Reviews", "Technical Documentation", "Mentoring"]
    }
  ]
};

export const About = () => {
  const { education, experiences, skillCategories } = resumeData;
  const { isDark } = useTheme();

  // Theme-aware colors
  const textPrimary = isDark ? 'white' : '#1d1d1f';
  const textSecondary = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';
  const textMuted = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)';
  const textLight = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
  const pillText = isDark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.85)';

  return (
    <div style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px', position: 'relative', zIndex: 1 }}>
      {/* Background Glows */}
      <div style={{
        position: 'fixed',
        top: '5%',
        left: '10%',
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
        top: '8%',
        right: '15%',
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
        right: '30%',
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
        top: '50%',
        left: '25%',
        width: '400px',
        height: '400px',
        background: '#FF6B35',
        borderRadius: '50%',
        filter: 'blur(150px)',
        opacity: 0.1,
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'fixed',
        bottom: '20%',
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
        bottom: '10%',
        left: '15%',
        width: '380px',
        height: '380px',
        background: '#5B4CDB',
        borderRadius: '50%',
        filter: 'blur(140px)',
        opacity: 0.1,
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>

        {/* Header Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '60px',
          marginBottom: '80px',
          flexWrap: 'wrap'
        }}>
          {/* Tech Logos */}
          <div style={{
            flex: '1',
            minWidth: '280px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <TechLogoGroup
              logos={['purpleCircle', 'gradientRect', 'orangeCircle']}
              sizes={[70, 90, 70]}
            />
          </div>

          {/* About Text */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <p style={{
              color: '#5B4CDB',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              About Me
            </p>

            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: '800',
              lineHeight: '1.2',
              marginBottom: '24px'
            }}>
              <span style={{ color: textPrimary }}>Full Stack </span>
              <span style={{
                background: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Software Engineer</span>
            </h1>

            <p style={{
              fontSize: '17px',
              color: textSecondary,
              lineHeight: '1.8',
              marginBottom: '20px'
            }}>
              I'm a software engineer with 6+ years of experience building scalable microservices,
              enterprise applications, and cloud-native solutions. I specialize in Java, Spring Boot,
              React, and Angular with expertise in AWS and Azure deployments.
            </p>

            <p style={{
              fontSize: '17px',
              color: textSecondary,
              lineHeight: '1.8'
            }}>
              Currently working at Maantic Inc (SunRun) in Tampa, FL, architecting distributed systems
              and leading agile development teams.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <section style={{ marginBottom: '80px' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '40px'
            }}>
              <span style={{ color: textPrimary }}>Education</span>
            </h2>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {education.map((edu, i) => (
              <ScrollReveal key={edu.id} delay={i * 0.1}>
                <GlassCard
                  style={{
                    padding: '28px'
                  }}
                >
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: textPrimary, marginBottom: '8px' }}>
                    {edu.school}
                  </h3>
                  <p style={{ color: '#5B4CDB', fontWeight: '500', marginBottom: '8px' }}>{edu.degree}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: textMuted, fontSize: '14px' }}>{edu.location}</span>
                    <span style={{
                      color: '#FF6B35',
                      fontWeight: '600',
                      fontSize: '14px'
                    }}>GPA: {edu.gpa}</span>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section style={{ marginBottom: '80px' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '40px'
            }}>
              <span style={{ color: textPrimary }}>Technical </span>
              <span style={{
                background: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Skills</span>
            </h2>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '24px'
          }}>
            {skillCategories.map((cat, i) => (
              <ScrollReveal key={cat.category} delay={(i % 3) * 0.1}>
                <GlassCard
                  style={{
                    padding: '24px'
                  }}
                >
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: '#5B4CDB',
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                  {cat.category}
                </h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="glass-pill"
                      style={{
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '13px',
                        fontWeight: '500',
                        color: pillText
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <ScrollReveal>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '40px'
            }}>
              <span style={{ color: textPrimary }}>Work </span>
              <span style={{
                background: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Experience</span>
            </h2>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {experiences.map((exp, i) => (
              <ScrollReveal key={exp.id} delay={i * 0.1}>
                <GlassCard
                  style={{
                    padding: '28px',
                    borderLeft: i === 0 ? '4px solid #5B4CDB' : undefined
                  }}
                >
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: textPrimary, marginBottom: '4px' }}>
                      {exp.role}
                    </h3>
                    <p style={{ color: '#5B4CDB', fontWeight: '600', fontSize: '15px', margin: 0 }}>{exp.company}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{
                      color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                      fontSize: '14px',
                      display: 'block',
                      marginBottom: '4px'
                    }}>{exp.period}</span>
                    <span style={{
                      color: textLight,
                      fontSize: '13px'
                    }}>{exp.location}</span>
                  </div>
                </div>
              </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
