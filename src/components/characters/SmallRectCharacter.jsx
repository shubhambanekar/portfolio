import { motion } from 'framer-motion';
import { Eyes } from './Eyes';

export const SmallRectCharacter = ({ 
  color = '#1a1a1a', 
  width = 60, 
  height = 100,
  className = '',
  animate = true
}) => {
  return (
    <motion.div
      className={`relative flex flex-col items-center justify-center ${className}`}
      style={{ 
        width, 
        height, 
        backgroundColor: color,
        borderRadius: '8px'
      }}
      initial={{ y: 0 }}
      animate={animate ? { 
        y: [0, -5, 0],
      } : {}}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 0.5
      }}
    >
      <Eyes size={10} spacing={12} className="mb-2" />
    </motion.div>
  );
};
