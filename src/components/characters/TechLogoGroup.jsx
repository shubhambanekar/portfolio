import { motion } from 'framer-motion';
import { TechLogo } from './TechLogo';

// Entrance animations for each shape
const entranceVariants = {
  hidden: (index) => {
    const animations = [
      { opacity: 0, y: -100, rotate: -15 }, // First shape drops from top-left
      { opacity: 0, scale: 0, y: 50 },      // Middle shape pops up from below
      { opacity: 0, x: 100, rotate: 15 }     // Last shape slides from right
    ];
    return animations[index % 3];
  },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    y: index === 1 ? -20 : 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
      delay: index * 0.15
    }
  })
};

export const TechLogoGroup = ({
  logos = ['javascript', 'react', 'python'],
  sizes = [70, 90, 70],
  className = '',
  isShaking = false,
  isNodding = false,
  lookAt = null,
  animate = true
}) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px'
      }}
    >
      {logos.map((tech, index) => (
        <motion.div
          key={tech}
          custom={index}
          initial={animate ? "hidden" : false}
          animate="visible"
          variants={entranceVariants}
        >
          <TechLogo
            tech={tech}
            size={sizes[index] || 80}
            showEyes={true}
            isShaking={isShaking}
            isNodding={isNodding}
            lookAt={lookAt}
          />
        </motion.div>
      ))}
    </div>
  );
};
