import { motion } from 'framer-motion';

export const PacmanCharacter = ({ 
  color = '#FFD93D', 
  size = 100,
  className = '',
  animate = true
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={animate ? { 
        rotate: [0, -3, 3, 0],
      } : {}}
      transition={{ 
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <path
          d="M50 50 L95 20 A45 45 0 1 0 95 80 Z"
          fill={color}
        />
        <circle cx="50" cy="25" r="6" fill="#000" />
      </svg>
    </motion.div>
  );
};
