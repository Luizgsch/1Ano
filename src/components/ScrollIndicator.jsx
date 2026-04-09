import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
      className="fixed bottom-6 sm:bottom-12 right-4 sm:right-12 flex flex-col items-center z-50 px-2"
    >
      <div className="flex flex-col items-center gap-6">
        <span className="text-[10px] font-sans text-clay tracking-[0.4em] uppercase [writing-mode:vertical-rl] leading-none mb-4">
          S C R O L L
        </span>
        <div className="w-[1px] h-32 bg-terracotta/20 relative">
          <motion.div 
            style={{ scaleY }}
            className="absolute top-0 left-0 w-full h-full bg-terracotta origin-top"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
