import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useScrollSpy } from 'hooks/useScrollSpy';
import ResumeDownload from 'files/Paul_Downing_Resume.pdf';

// Inline SVG icons — guarantees consistent sizing, no FontAwesome flex quirks
const IconEnvelope = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'block', flexShrink: 0 }}
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconLinkedIn = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ display: 'block', flexShrink: 0 }}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconGitHub = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ display: 'block', flexShrink: 0 }}
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

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
      <div className="flex flex-nowrap items-center gap-1 px-2 py-2 rounded-full bg-darkSlate/70 backdrop-blur-xl border border-white/10 shadow-2xl">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative flex-shrink-0 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full no-underline"
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
          className="flex-shrink-0 ml-2 px-4 py-2 text-sm font-medium text-white rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg no-underline whitespace-nowrap inline-flex items-center gap-1.5"
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
          <Download size={14} strokeWidth={2.5} style={{ flexShrink: 0 }} /> Resume
        </a>

        {/* Contact icons */}
        <div className="flex-shrink-0 w-px h-5 bg-white/10 mx-1" />
        <a
          href="mailto:downing034@gmail.com"
          aria-label="Email"
          className="flex-shrink-0 p-1.5 rounded-full text-white/40 hover:text-[#00c8ff] transition-colors duration-200"
        >
          <IconEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/paul-w-downing/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex-shrink-0 p-1.5 rounded-full text-white/40 hover:text-[#00c8ff] transition-colors duration-200"
        >
          <IconLinkedIn />
        </a>
        <a
          href="https://github.com/downing034"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex-shrink-0 p-1.5 rounded-full text-white/40 hover:text-[#00c8ff] transition-colors duration-200"
        >
          <IconGitHub />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navigation;
