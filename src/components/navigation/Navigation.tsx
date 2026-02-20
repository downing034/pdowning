import React from 'react';
import { motion } from 'framer-motion';
import { useScrollSpy } from 'hooks/useScrollSpy';
import ResumeDownload from 'files/Paul_Downing_Resume.pdf';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home', color: '#1a6edb' }, // blue
  { id: 'about', label: 'About', color: '#a78bfa' }, // purple
  { id: 'portfolio', label: 'Projects', color: '#f59e0b' }, // orange/amber
  { id: 'abilities', label: 'Skills', color: '#00c8ff' }, // cyan
  { id: 'work-history', label: 'Experience', color: '#4ade80' }, // green
  { id: 'contact', label: 'Contact', color: '#fb923c' }, // warm orange
];

const Navigation = () => {
  const activeSection = useScrollSpy();
  const activeItem = NAV_ITEMS.find((i) => i.id === activeSection);
  const activeColor = activeItem?.color ?? '#1a6edb';
  const activeColorLight = activeColor + 'cc'; // slightly transparent for hover

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' as const }}
      className="fixed top-4 left-1/2 z-50 hidden md:block"
      aria-label="Main navigation"
    >
      <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-darkSlate/70 backdrop-blur-xl border border-white/10 shadow-2xl">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full no-underline"
              style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.5)' }}
              {...(isActive ? { 'aria-current': 'page' as const } : {})}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `${item.color}33`,
                    border: `1px solid ${item.color}4d`,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          );
        })}

        <a
          href={ResumeDownload}
          download
          className="ml-2 px-4 py-2 text-sm font-medium text-white rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg no-underline"
          style={{
            background: activeColor,
            boxShadow: `0 0 0 0 transparent`,
            transition: 'background 0.4s, box-shadow 0.2s',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = activeColorLight;
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 10px 25px ${activeColor}4d`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = activeColor;
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 0 0 transparent';
          }}
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
};

export default Navigation;
