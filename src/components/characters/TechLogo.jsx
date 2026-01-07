import { useRef, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

// SVG paths for tech logos
const logoSVGs = {
  // Pure geometric shapes - no icons
  purpleCircle: {
    color: '#5B4CDB',
    bgColor: '#5B4CDB',
    shape: 'circle'
  },
  orangeCircle: {
    color: '#FF6B35',
    bgColor: '#FF6B35',
    shape: 'circle'
  },
  gradientCircle: {
    color: '#5B4CDB',
    bgColor: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
    shape: 'circle',
    gradient: true
  },
  purpleRect: {
    color: '#5B4CDB',
    bgColor: '#5B4CDB',
    shape: 'rectangle'
  },
  orangeRect: {
    color: '#FF6B35',
    bgColor: '#FF6B35',
    shape: 'rectangle'
  },
  gradientRect: {
    color: '#5B4CDB',
    bgColor: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
    shape: 'rectangle',
    gradient: true
  },
  purpleSquare: {
    color: '#5B4CDB',
    bgColor: '#5B4CDB',
    shape: 'square'
  },
  orangeSquare: {
    color: '#FF6B35',
    bgColor: '#FF6B35',
    shape: 'square'
  },
  // Theme-colored logos for Contact page
  mail: {
    color: '#FF6B35',
    bgColor: '#FF6B35',
    text: '✉️',
    textColor: '#fff',
    shape: 'circle'
  },
  chat: {
    color: '#5B4CDB',
    bgColor: '#5B4CDB',
    text: '💬',
    textColor: '#fff',
    shape: 'circle'
  },
  rocket: {
    color: '#FF6B35',
    bgColor: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
    text: '🚀',
    textColor: '#fff',
    shape: 'circle',
    gradient: true
  },
  code: {
    color: '#5B4CDB',
    bgColor: '#5B4CDB',
    text: '</>',
    textColor: '#fff',
    shape: 'square'
  },
  star: {
    color: '#FF6B35',
    bgColor: '#FF6B35',
    text: '⭐',
    textColor: '#fff',
    shape: 'circle'
  },
  // About page themed logos
  briefcase: {
    color: '#5B4CDB',
    bgColor: '#5B4CDB',
    text: '💼',
    textColor: '#fff',
    shape: 'circle'
  },
  graduation: {
    color: '#FF6B35',
    bgColor: '#FF6B35',
    text: '🎓',
    textColor: '#fff',
    shape: 'circle'
  },
  sparkles: {
    color: '#5B4CDB',
    bgColor: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
    text: '✨',
    textColor: '#fff',
    shape: 'circle',
    gradient: true
  },
  laptop: {
    color: '#5B4CDB',
    bgColor: '#5B4CDB',
    text: '💻',
    textColor: '#fff',
    shape: 'square'
  },
  brain: {
    color: '#FF6B35',
    bgColor: '#FF6B35',
    text: '🧠',
    textColor: '#fff',
    shape: 'circle'
  },
  react: {
    color: '#61DAFB',
    bgColor: '#20232a',
    viewBox: '0 0 100 100',
    path: `M50 35c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 24c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z
           M50 20c-1.7 0-3 1.3-3 3v4c0 1.7 1.3 3 3 3s3-1.3 3-3v-4c0-1.7-1.3-3-3-3z
           M50 70c-1.7 0-3 1.3-3 3v4c0 1.7 1.3 3 3 3s3-1.3 3-3v-4c0-1.7-1.3-3-3-3z`,
    shape: 'circle'
  },
  javascript: {
    color: '#F7DF1E',
    bgColor: '#F7DF1E',
    textColor: '#000',
    text: 'JS',
    shape: 'square'
  },
  typescript: {
    color: '#3178C6',
    bgColor: '#3178C6',
    textColor: '#fff',
    text: 'TS',
    shape: 'square'
  },
  vue: {
    color: '#4FC08D',
    bgColor: '#35495e',
    shape: 'triangle'
  },
  angular: {
    color: '#DD0031',
    bgColor: '#DD0031',
    shape: 'shield'
  },
  python: {
    color: '#3776AB',
    bgColor: '#FFD43B',
    text: 'Py',
    textColor: '#3776AB',
    shape: 'square'
  },
  java: {
    color: '#007396',
    bgColor: '#007396',
    text: '☕',
    textColor: '#fff',
    shape: 'square'
  },
  cpp: {
    color: '#00599C',
    bgColor: '#00599C',
    text: 'C++',
    textColor: '#fff',
    shape: 'square'
  },
  php: {
    color: '#777BB4',
    bgColor: '#777BB4',
    text: 'PHP',
    textColor: '#fff',
    shape: 'ellipse'
  },
  nodejs: {
    color: '#339933',
    bgColor: '#339933',
    text: 'N',
    textColor: '#fff',
    shape: 'hexagon'
  }
};

export const TechLogo = ({
  tech = 'react',
  size = 80,
  showEyes = true,
  isShaking = false,
  isNodding = false,
  lookAt = null // { x: number, y: number } or 'right' | 'left' | 'up' | 'down' | null (follow mouse)
}) => {
  const containerRef = useRef(null);
  const logo = logoSVGs[tech] || logoSVGs.react;

  const pupilX = useSpring(0, { stiffness: 300, damping: 30 });
  const pupilY = useSpring(0, { stiffness: 300, damping: 30 });

  useEffect(() => {
    // If lookAt is specified, set fixed direction
    if (lookAt) {
      const maxDistance = size * 0.06;
      if (lookAt === 'right') {
        pupilX.set(maxDistance);
        pupilY.set(0);
      } else if (lookAt === 'left') {
        pupilX.set(-maxDistance);
        pupilY.set(0);
      } else if (lookAt === 'up') {
        pupilX.set(0);
        pupilY.set(-maxDistance);
      } else if (lookAt === 'down') {
        pupilX.set(0);
        pupilY.set(maxDistance);
      } else if (typeof lookAt === 'object' && lookAt.x !== undefined) {
        // Look at specific coordinates
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angle = Math.atan2(lookAt.y - centerY, lookAt.x - centerX);
        pupilX.set(Math.cos(angle) * maxDistance);
        pupilY.set(Math.sin(angle) * maxDistance);
      }
      return;
    }

    // Default: follow mouse
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const maxDistance = size * 0.06;
      const distance = Math.min(
        Math.hypot(e.clientX - centerX, e.clientY - centerY) / 50,
        maxDistance
      );

      pupilX.set(Math.cos(angle) * distance);
      pupilY.set(Math.sin(angle) * distance);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [size, pupilX, pupilY, lookAt]);

  const eyeSize = size * 0.18;
  const pupilSize = eyeSize * 0.55;
  const eyeSpacing = size * 0.22;

  const renderShape = () => {
    const shapeStyle = {
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      fontSize: size * 0.35,
      fontWeight: '800',
      color: logo.textColor || '#fff'
    };

    switch (logo.shape) {
      case 'circle':
        return (
          <div style={{
            ...shapeStyle,
            borderRadius: '50%',
            background: logo.gradient ? logo.bgColor : logo.bgColor
          }}>
            {logo.text && <span>{logo.text}</span>}
          </div>
        );

      case 'square':
        return (
          <div style={{
            ...shapeStyle,
            borderRadius: size * 0.15,
            background: logo.bgColor
          }}>
            {logo.text && <span>{logo.text}</span>}
          </div>
        );

      case 'rectangle':
        return (
          <div style={{
            ...shapeStyle,
            width: size * 1.4,
            height: size * 0.85,
            borderRadius: size * 0.15,
            background: logo.bgColor
          }}>
            {logo.text && <span>{logo.text}</span>}
          </div>
        );

      case 'triangle':
        return (
          <div style={{
            ...shapeStyle,
            background: 'transparent'
          }}>
            <svg width={size} height={size} viewBox="0 0 100 100">
              <polygon
                points="50,10 90,85 10,85"
                fill={logo.bgColor}
              />
              <polygon
                points="50,25 75,75 25,75"
                fill={logo.color}
              />
            </svg>
          </div>
        );

      case 'shield':
        return (
          <div style={{
            ...shapeStyle,
            background: 'transparent'
          }}>
            <svg width={size} height={size} viewBox="0 0 100 100">
              <path
                d="M50 5 L90 20 L90 50 Q90 80 50 95 Q10 80 10 50 L10 20 Z"
                fill={logo.bgColor}
              />
              <text
                x="50" y="60"
                textAnchor="middle"
                fill="#fff"
                fontSize="28"
                fontWeight="bold"
              >A</text>
            </svg>
          </div>
        );

      case 'hexagon':
        return (
          <div style={{
            ...shapeStyle,
            background: 'transparent'
          }}>
            <svg width={size} height={size} viewBox="0 0 100 100">
              <polygon
                points="50,5 90,25 90,75 50,95 10,75 10,25"
                fill={logo.bgColor}
              />
            </svg>
            <span style={{ position: 'absolute', color: logo.textColor }}>{logo.text}</span>
          </div>
        );

      case 'ellipse':
        return (
          <div style={{
            ...shapeStyle,
            width: size * 1.3,
            borderRadius: '50%',
            background: logo.bgColor,
            fontSize: size * 0.25
          }}>
            {logo.text && <span>{logo.text}</span>}
          </div>
        );

      default:
        return (
          <div style={{
            ...shapeStyle,
            borderRadius: '50%',
            background: logo.bgColor
          }}>
            {logo.text && <span>{logo.text}</span>}
          </div>
        );
    }
  };

  const Eye = ({ offsetX = 0 }) => (
    <div
      style={{
        width: eyeSize,
        height: eyeSize,
        borderRadius: '50%',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
        position: 'absolute',
        top: '30%',
        left: `calc(50% + ${offsetX}px - ${eyeSize/2}px)`
      }}
    >
      <motion.div
        style={{
          width: pupilSize,
          height: pupilSize,
          borderRadius: '50%',
          backgroundColor: '#1a1a1a',
          x: pupilX,
          y: pupilY
        }}
      />
    </div>
  );

  const getAnimation = () => {
    if (isShaking) return { animation: 'headShake 0.6s ease-in-out' };
    if (isNodding) return { animation: 'headNod 0.5s ease-in-out' };
    return {};
  };

  return (
    <>
      <style>{`
        @keyframes headShake {
          0% { transform: translateX(0) rotate(0); }
          15% { transform: translateX(-8px) rotate(-5deg); }
          30% { transform: translateX(6px) rotate(4deg); }
          45% { transform: translateX(-6px) rotate(-3deg); }
          60% { transform: translateX(4px) rotate(2deg); }
          75% { transform: translateX(-2px) rotate(-1deg); }
          100% { transform: translateX(0) rotate(0); }
        }
        @keyframes headNod {
          0% { transform: translateY(0) rotate(0); }
          25% { transform: translateY(4px) rotate(3deg); }
          50% { transform: translateY(0) rotate(0); }
          75% { transform: translateY(4px) rotate(3deg); }
          100% { transform: translateY(0) rotate(0); }
        }
      `}</style>
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          display: 'inline-block',
          ...getAnimation()
        }}
      >
        {renderShape()}
        {showEyes && (
          <>
            <Eye offsetX={-eyeSpacing / 2} />
            <Eye offsetX={eyeSpacing / 2} />
          </>
        )}
      </div>
    </>
  );
};
