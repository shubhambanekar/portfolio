import { motion } from 'framer-motion';
import { RectangleCharacter } from './RectangleCharacter';
import { CircleCharacter } from './CircleCharacter';
import { PacmanCharacter } from './PacmanCharacter';
import { SmallRectCharacter } from './SmallRectCharacter';

export const CharacterGroup = ({ className = '' }) => {
  return (
    <motion.div 
      className={`relative flex items-end justify-center ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Orange Circle - Bottom Left */}
      <CircleCharacter 
        color="#FF6B35" 
        size={180} 
        className="absolute -left-10 bottom-0 z-10"
        showMouth={true}
      />
      
      {/* Blue/Purple Rectangle - Center Back */}
      <RectangleCharacter 
        color="#5B4CDB" 
        width={100} 
        height={200}
        className="relative z-20 -ml-8"
      />
      
      {/* Black Small Rectangle - Center */}
      <SmallRectCharacter 
        color="#1a1a1a" 
        width={50} 
        height={120}
        className="relative z-30 -ml-6"
      />
      
      {/* Yellow Pacman - Right */}
      <PacmanCharacter 
        color="#FFD93D" 
        size={120}
        className="relative z-20 -ml-4 mb-2"
      />
    </motion.div>
  );
};
