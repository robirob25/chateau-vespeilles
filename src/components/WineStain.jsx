import { motion } from 'framer-motion';

export default function WineStain({ className, style, staticShape = false }) {
  // CSS animated abstract organic blob acting as a diffused wine stain
  
  const animationProps = staticShape ? {} : {
    animate: { 
      scale: [1, 1.1, 1], 
      rotate: [0, 90, 0],
      borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
    },
    transition: { duration: 15, repeat: Infinity, ease: "linear" }
  };

  return (
    <motion.div 
      className={`absolute pointer-events-none mix-blend-multiply blur-[60px] bg-vespeille_red/15 aspect-square ${className}`}
      style={{
        borderRadius: staticShape ? "40% 60% 70% 30% / 40% 50% 60% 50%" : undefined,
        ...style
      }}
      {...animationProps}
    />
  );
}
