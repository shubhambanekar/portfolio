import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Outer circle - follows almost immediately (high stiffness = less delay)
  const cursorX = useSpring(0, { stiffness: 800, damping: 40 });
  const cursorY = useSpring(0, { stiffness: 800, damping: 40 });

  // Inner dot - follows immediately
  const dotX = useSpring(0, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(0, { stiffness: 1000, damping: 50 });

  useEffect(() => {
    // Check if touch device
    const checkTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(checkTouch);

    if (checkTouch) return;

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a, button, [data-hover]') ||
        target.classList.contains('glass-button') ||
        target.classList.contains('glass-card') ||
        target.classList.contains('glass-pill') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (
        target.closest('a, button, [data-hover]') ||
        target.classList.contains('glass-button') ||
        target.classList.contains('glass-card') ||
        target.classList.contains('glass-pill')
      ) {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Outer ring - circle border */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 55 : 40,
          height: isHovering ? 55 : 40,
          borderRadius: '50%',
          border: isHovering ? '2px solid #FF6B35' : '2px solid rgba(91, 76, 219, 0.7)',
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: isVisible ? (isHovering ? 0.9 : 0.6) : 0,
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{
          width: { duration: 0.2 },
          height: { duration: 0.2 },
          border: { duration: 0.2 },
          opacity: { duration: 0.2 },
          scale: { type: 'spring', stiffness: 400, damping: 20 }
        }}
      />

      {/* Inner dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 8 : 6,
          height: isHovering ? 8 : 6,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #5B4CDB 0%, #FF6B35 100%)',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          width: { duration: 0.2 },
          height: { duration: 0.2 },
          opacity: { duration: 0.2 }
        }}
      />
    </>
  );
};
