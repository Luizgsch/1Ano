import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollSection = ({ phrase, imagePath, index }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Creative Parallax Effects
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1.1, 1]);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-6 sm:px-12 py-24"
    >
      {/* Narrative Phrase */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="z-20 mb-8"
      >
        <h2 className="text-[5vw] sm:text-[3vw] font-serif text-terracotta text-center leading-tight max-w-lg">
          {phrase}
        </h2>
      </motion.div>

      {/* Image Container with Creative Reveal */}
      <motion.div 
        style={{ scale, opacity }}
        className="relative z-10 w-full max-w-2xl aspect-square overflow-hidden rounded-sm shadow-2xl"
      >
        <motion.img
          src={imagePath}
          alt={phrase}
          style={{ y: imageY }}
          className="w-full h-[120%] object-cover absolute top-[-10%]"
        />

        {/* Subtle Decorative Overlay (Linen Texture feel) */}
        <div className="absolute inset-0 bg-linen/10 pointer-events-none mix-blend-overlay" />
      </motion.div>

      {/* Section Indicator/Index */}
      <div className="absolute left-6 sm:left-12 bottom-6 sm:bottom-12 text-[10px] font-sans text-clay tracking-[0.5em] uppercase">
        0{index + 1} / 04
      </div>
    </section>
  );
};

export default ScrollSection;
