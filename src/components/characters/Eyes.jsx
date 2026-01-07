import { useRef, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export const Eyes = ({
  eyeColor = '#ffffff',
  pupilColor = '#000000',
  size = 20,
  spacing = 30,
  className = ''
}) => {
  const containerRef = useRef(null);

  const pupilX = useSpring(0, { stiffness: 300, damping: 30 });
  const pupilY = useSpring(0, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const maxDistance = size * 0.2;
      const distance = Math.min(
        Math.hypot(e.clientX - centerX, e.clientY - centerY) / 30,
        maxDistance
      );

      pupilX.set(Math.cos(angle) * distance);
      pupilY.set(Math.sin(angle) * distance);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [size, pupilX, pupilY]);

  const Eye = () => (
    <div
      className="relative rounded-full flex items-center justify-center"
      style={{
        width: size,
        height: size,
        backgroundColor: eyeColor,
      }}
    >
      <motion.div
        className="rounded-full"
        style={{
          width: size * 0.5,
          height: size * 0.5,
          backgroundColor: pupilColor,
          x: pupilX,
          y: pupilY
        }}
      />
    </div>
  );

  return (
    <div ref={containerRef} className={`flex items-center ${className}`} style={{ gap: spacing }}>
      <Eye />
      <Eye />
    </div>
  );
};
