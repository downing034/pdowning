import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from 'constants/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons';

const githubIcon = faGithub as IconProp;

export interface PortfolioItemProps {
  project: Project;
  index: number;
}

const PortfolioItem = ({ project, index }: PortfolioItemProps) => {
  const {
    image,
    altText,
    title,
    description,
    githubUrl,
    siteUrl,
    comingSoon,
    language,
    framework,
    stateManagement,
    designTools,
    testingTools,
  } = project;
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const tags = [language, framework, stateManagement, designTools, testingTools]
    .join(', ')
    .split(', ')
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsExpanded(true)}
        className="relative rounded-2xl overflow-hidden bg-surface-light border border-white/10 cursor-pointer group"
      >
        {/* Spotlight overlay */}
        <div
          className="absolute inset-0 z-10 transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(191,87,0,0.15) 0%, transparent 60%)`,
          }}
        />

        {/* Border glow on hover */}
        <div
          className="absolute inset-0 z-10 rounded-2xl transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            boxShadow: 'inset 0 0 0 1px rgba(191,87,0,0.3)',
          }}
        />

        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden bg-black">
          <img
            src={image}
            alt={altText}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 p-6">
          <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
          <p className="text-white/50 text-sm mb-4">{description}</p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 6).map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs rounded-full border border-white/10 text-white/50"
              >
                {tag}
              </span>
            ))}
            {tags.length > 6 && (
              <span className="px-2.5 py-1 text-xs rounded-full border border-white/10 text-white/30">
                +{tags.length - 6}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full border border-white/20 text-white/70 hover:border-primary hover:text-primary transition-colors no-underline"
              >
                <FontAwesomeIcon icon={githubIcon} />
                Code
              </a>
            )}
            {comingSoon ? (
              <span className="px-4 py-2 text-xs font-medium rounded-full border border-white/10 text-white/30">
                Coming soon
              </span>
            ) : siteUrl ? (
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors no-underline"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                Live Site
              </a>
            ) : null}
          </div>
        </div>
      </motion.div>

      {/* Expanded detail modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface-light border border-white/10 rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-8"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-white/40 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
                >
                  <FontAwesomeIcon icon={faXmark} size="lg" />
                </button>
              </div>

              <p className="text-white/60 mb-6">{description}</p>

              <div className="space-y-4">
                <DetailRow label="Language(s)" value={language} />
                <DetailRow label="Framework(s)" value={framework} />
                <DetailRow label="State Management" value={stateManagement} />
                <DetailRow label="Design Tools" value={designTools} />
                <DetailRow label="Testing Tools" value={testingTools} />
              </div>

              <div className="flex gap-3 mt-8">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full border border-white/20 text-white hover:border-primary hover:text-primary transition-colors no-underline"
                  >
                    <FontAwesomeIcon icon={githubIcon} />
                    View Code
                  </a>
                )}
                {!comingSoon && siteUrl && (
                  <a
                    href={siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full bg-primary text-white hover:bg-primary-light transition-colors no-underline"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    View Site
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">{label}</p>
    <p className="text-white/70 text-sm">{value}</p>
  </div>
);

export default PortfolioItem;
