import { motion } from 'framer-motion';
import { Eyes } from './Eyes';

export const CircleCharacter = ({ 
  color = '#FF8C42', 
  size = 150,
  className = '',
  animate = true,
  showMouth = true
}) => {
  return (
    <motion.div
      className={`relative flex flex-col items-center justify-center rounded-full ${className}`}
      style={{ 
        width: size, 
        height: size, 
        backgroundColor: color 
      }}
      initial={{ scale: 1 }}
      animate={animate ? { 
        scale: [1, 1.05, 1],
      } : {}}
      transition={{ 
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      <div className="flex flex-col items-center" style={{ marginTop: -size * 0.1 }}>
        <Eyes size={size * 0.08} spacing={size * 0.15} />
        {showMouth && (
          <motion.div 
            className="rounded-full mt-2"
            style={{ 
              width: size * 0.15, 
              height: size * 0.15, 
              backgroundColor: '#000'
            }}
            animate={{ 
              scaleY: [1, 0.7, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        )}
      </div>
    </motion.div>
  );
};
