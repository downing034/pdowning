import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import TerminalAnimation from './TerminalAnimation';
import ParticleBackground from './ParticleBackground';

const Profile = () => {
  return (
    <section id="hero" style={{ background: '#04040c' }}>
      {/* Hero: full viewport, particle name centered */}
      <div className="relative h-screen min-h-[400px] flex flex-col overflow-hidden pt-2 md:pt-16">
        {/* Particle name fills available space */}
        <div className="relative flex-1 min-h-[250px] sm:min-h-[350px]">
          <ParticleBackground />
        </div>

        {/* Subtitle */}
        <div
          className="relative z-10 text-center py-3 sm:py-4 px-4 font-mono text-xs min-[480px]:text-sm sm:text-base md:text-lg tracking-[0.15em] min-[480px]:tracking-[0.25em] sm:tracking-[0.35em] uppercase"
          style={{
            color: 'rgba(0,230,255,0.75)',
            textShadow: '0 0 12px rgba(0,210,255,0.5)',
          }}
        >
          Engineering Manager · Senior Software Engineer
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="relative z-10 pb-4 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2.5, duration: 0.5 },
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' as const },
          }}
        >
          <a href="#about" className="text-white/20 hover:text-cyan-400 transition-colors">
            <FontAwesomeIcon icon={faChevronDown} size="2x" />
          </a>
        </motion.div>
      </div>

      {/* Terminal: below the fold, scroll to see */}
      <div className="relative z-10 w-full px-3 sm:px-6 py-8 sm:py-12 pb-16 sm:pb-20">
        <TerminalAnimation />
      </div>
    </section>
  );
};

export default Profile;
