import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import milestoneImg from '../assets/milestone.png';

const MilestoneSection = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    const startDate = new Date('2025-04-12T00:00:00');
    
    const updateCounter = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    updateCounter();
    const timer = setInterval(updateCounter, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-6"
    >
      <motion.div 
        style={{ scale, opacity, y }}
        className="relative z-10 w-full max-w-2xl flex flex-col items-center"
      >
        {/* Refined UI Panel - matching the project's minimalist aesthetic */}
        <div className="w-full backdrop-blur-sm bg-watercolor-light/40 border border-terracotta/10 rounded-sm p-12 shadow-sm flex flex-col items-center gap-8">
          {/* Top Text - using project's typography */}
          <span className="text-[10px] font-sans text-clay tracking-[0.4em] uppercase">
            Desde: 12 de Abril de 2025
          </span>

          {/* Middle Text */}
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-terracotta font-serif text-[4vw] sm:text-[2.5vw] italic">
              Estamos Juntos Há
            </h2>
            
            {/* Counter - cleaner typography */}
            <div className="flex gap-4 sm:gap-8 mt-4">
              {[
                { label: 'd', value: timeElapsed.days },
                { label: 'h', value: timeElapsed.hours },
                { label: 'm', value: timeElapsed.minutes },
                { label: 's', value: timeElapsed.seconds }
              ].map((item, i) => (
                <div key={i} className="flex flex-baseline gap-1">
                  <span className="text-4xl sm:text-6xl font-serif text-terracotta leading-none">
                    {item.value}
                  </span>
                  <span className="text-xs sm:text-sm font-sans text-clay uppercase tracking-widest mt-auto mb-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative element to match the rest of the site */}
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12 w-1.5 h-1.5 bg-terracotta/40 rotate-45"
          />
      </motion.div>

      {/* Subtle watercolor textures to blend in */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
          <div className="absolute top-[10%] left-[-10%] w-[40%] aspect-square bg-watercolor-dark/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] right-[-10%] w-[40%] aspect-square bg-watercolor-dark/30 rounded-full blur-[100px]" />
      </div>
    </section>
  );
};

export default MilestoneSection;
