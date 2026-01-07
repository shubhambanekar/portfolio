import { motion } from 'framer-motion';
import { Eyes } from './Eyes';

export const DiamondCharacter = ({ 
  color = '#5B4CDB', 
  size = 100,
  className = '',
  animate = true
}) => {
  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      style={{ 
        width: size, 
        height: size, 
        backgroundColor: color,
        transform: 'rotate(45deg)',
        borderRadius: '12px'
      }}
      animate={animate ? { 
        y: [0, -15, 0],
        rotate: [45, 45, 45]
      } : { rotate: 45 }}
      transition={{ 
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      <div style={{ transform: 'rotate(-45deg)' }}>
        <Eyes size={size * 0.12} spacing={size * 0.2} />
      </div>
    </motion.div>
  );
};
