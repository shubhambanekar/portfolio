import { motion } from 'framer-motion';
import { Eyes } from './Eyes';

export const RectangleCharacter = ({ 
  color = '#5B4CDB', 
  width = 120, 
  height = 180,
  className = '',
  animate = true
}) => {
  return (
    <motion.div
      className={`relative flex flex-col items-center justify-center rounded-lg ${className}`}
      style={{ 
        width, 
        height, 
        backgroundColor: color,
        borderRadius: '12px'
      }}
      initial={{ y: 0 }}
      animate={animate ? { 
        y: [0, -10, 0],
      } : {}}
      transition={{ 
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      <Eyes size={16} spacing={20} className="mb-4" />
    </motion.div>
  );
};
