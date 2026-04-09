import React from 'react';
import { motion, useScroll } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const showNavbar = scrollY < 100;

  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden">
      <div className={`absolute top-0 left-0 w-full px-6 sm:px-12 py-6 sm:py-10 flex justify-between items-start z-50 mix-blend-multiply transition-opacity duration-300 ${showNavbar ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col">
          <span className="text-xl font-serif text-terracotta leading-none tracking-tight">CRIADO POR</span>
          <span className="text-[20px] font-sans text-clay mt-1 tracking-[0.2em]">LUIZGSCH</span>
        </div>
        <div className="flex space-x-12">
          <span className="text-[10px] font-sans text-clay tracking-[0.2em]"></span>
        </div>
        <div className="flex items-center">
          <span className="text-[10px] font-sans text-terracotta border-b border-terracotta/40 tracking-[0.2em] cursor-pointer"></span>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center px-12 relative">
        <div className="relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col leading-[1.00]"
          >
            <h1 className="text-[12vw] sm:text-[10vw] font-serif text-terracotta tracking-tightest md:col-span-2">
              O QUE EU
            </h1>
            <h1 className="text-[12vw] sm:text-[10vw] font-serif text-terracotta tracking-tightest uppercase">
              FARIA POR
            </h1>

            <h1 className="text-[12vw] sm:text-[10vw] font-serif text-outline tracking-tightest uppercase">
              Amor
            </h1>
          </motion.div>

          {/* Subtle dot ornament usually found in such designs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="mt-12 w-1.5 h-1.5 bg-terracotta rotate-45"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
