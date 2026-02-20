import { useRef, useState, useEffect, useCallback } from 'react';
import { GameDayOracle, RecipesScreenshot, HomeScreenshot } from 'images';

// ── Types ────────────────────────────────────────────────────────────────────
interface Project {
  id: string;
  name: string;
  oneliner: string;
  stat: string;
  statLabel: string;
  statSub: string;
  accent: string;
  accentDark: string;
  accentBg: string;
  image: string;
  tags: string[];
  github: string;
  githubPrivate: boolean;
  live: string;
  story: string;
}

// ── Data ─────────────────────────────────────────────────────────────────────
const PROJECTS: Project[] = [
  {
    id: 'gdo',
    name: 'Game Day Oracle',
    oneliner:
      'Sports prediction engine with real statistical models for MLB and NCAAM — accuracy that actually moves lines.',
    stat: '77%',
    statLabel: 'NCAAM Accuracy',
    statSub: '68% MLB · models in production',
    accent: '#00c8ff',
    accentDark: '#0090bb',
    accentBg: 'rgba(0,200,255,0.07)',
    image: GameDayOracle,
    tags: [
      'React',
      'TypeScript',
      'Ruby on Rails',
      'Python',
      'Heroku',
      'Netlify',
      'ML Models',
      'REST API',
    ],
    github: 'https://github.com/downing034/gdo-api',
    githubPrivate: true,
    live: 'https://sports-predictions.pdowning.com',
    story:
      'Full stack from the ground up. Rails API backend, Python statistical models trained on real game data, React/TS frontend. Currently predicts MLB and NCAAM. More leagues in progress.',
  },
  {
    id: 'recipes',
    name: 'Wedding Recipe Book',
    oneliner:
      'A digital cookbook built as a wedding favor — guests submitted recipes, we shipped them an app.',
    stat: '100+',
    statLabel: 'Recipes',
    statSub: 'search · tags · keep screen on',
    accent: '#f59e0b',
    accentDark: '#b45309',
    accentBg: 'rgba(245,158,11,0.07)',
    image: RecipesScreenshot,
    tags: [
      'React',
      'TypeScript',
      'Netlify',
      'Static JSON',
      'Mobile Friendly',
      'Jest',
      'React Testing Library',
    ],
    github: 'https://github.com/downing034/nfl_data',
    githubPrivate: false,
    live: 'https://recipes.pdowning.com',
    story:
      'Wedding guests submitted family recipes. We turned them into a searchable, tagged, mobile-first app and sent it out as the party favor. Fully static — no backend needed.',
  },
  {
    id: 'portfolio',
    name: 'This Portfolio',
    oneliner:
      "The site you're currently on. Dark theme, terminal aesthetic, built obsessively from scratch.",
    stat: '∞',
    statLabel: 'In Progress',
    statSub: 'always shipping',
    accent: '#a78bfa',
    accentDark: '#7c3aed',
    accentBg: 'rgba(167,139,250,0.07)',
    image: HomeScreenshot,
    tags: [
      'React',
      'TypeScript',
      'Netlify',
      'CSS Animations',
      'Canvas API',
      'IntersectionObserver',
      'Jest',
      'Enzyme',
    ],
    github: 'https://github.com/downing034/pdowning',
    githubPrivate: false,
    live: 'https://home.pdowning.com',
    story:
      'Designed and built with Claude as a creative partner. Every section, animation, and interaction iterated in conversation. Contexts for state, custom CSS throughout.',
  },
];

// ── Hidden back-face measurer — renders the back content offscreen to get its natural height
function BackMeasurer({ project, onHeight }: { project: Project; onHeight: (h: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { name, tags, githubPrivate, live, story } = project;

  useEffect(() => {
    if (ref.current) onHeight(ref.current.offsetHeight);
  }, [onHeight]);

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        visibility: 'hidden',
        pointerEvents: 'none',
        width: 'calc((100% - 4rem) / 3)', // matches 3-col grid with 2rem gap
        left: 0,
        top: 0,
      }}
    >
      <div
        style={{
          borderRadius: 14,
          overflow: 'hidden',
          background: '#06060e',
          border: '1.5px solid rgba(255,255,255,0.2)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            padding: '0.5rem 0.85rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: '0.82rem', fontFamily: 'monospace' }}>{name}</span>
          <span style={{ fontSize: '0.75rem', fontFamily: 'monospace' }}>Details</span>
        </div>
        <div
          style={{ padding: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
        >
          <div>
            <div style={{ fontSize: '0.78rem', fontFamily: 'monospace', marginBottom: '0.4rem' }}>
              About
            </div>
            <p
              style={{
                fontSize: '0.95rem',
                lineHeight: 1.65,
                margin: 0,
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              {story}
            </p>
          </div>
          <div>
            <div style={{ fontSize: '0.78rem', fontFamily: 'monospace', marginBottom: '0.4rem' }}>
              Stack
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
              {tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: '0.72rem',
                    padding: '0.18rem 0.5rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: 3,
                    fontFamily: 'monospace',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            <div
              style={{
                padding: '0.55rem 0.75rem',
                borderRadius: 5,
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              <div style={{ fontSize: '0.75rem', fontFamily: 'monospace' }}>Live Site</div>
              <div style={{ fontSize: '0.9rem', fontFamily: 'monospace' }}>
                {live.replace('https://', '')}
              </div>
            </div>
            <div
              style={{
                padding: '0.55rem 0.75rem',
                borderRadius: 5,
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div style={{ fontSize: '0.75rem', fontFamily: 'monospace' }}>
                GitHub {githubPrivate ? '· Private' : '· Public'}
              </div>
              <div style={{ fontSize: '0.9rem', fontFamily: 'monospace' }}>downing034</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Card component ───────────────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
  visible,
  cardHeight,
}: {
  project: Project;
  index: number;
  visible: boolean;
  cardHeight: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [flipped, setFlipped] = useState(false);
  const [hovering, setHovering] = useState(false);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const {
    accent,
    accentDark,
    image,
    name,
    stat,
    statLabel,
    statSub,
    oneliner,
    tags,
    github,
    githubPrivate,
    live,
    story,
  } = project;

  // Smooth lerp
  useEffect(() => {
    const animate = () => {
      const cur = currentRef.current;
      const tgt = targetRef.current;
      cur.x += (tgt.x - cur.x) * 0.08;
      cur.y += (tgt.y - cur.y) * 0.08;
      setRot({ x: cur.x, y: cur.y });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (flipped) return;
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    targetRef.current = { x: dy * -12, y: dx * 12 };
  };

  const handleMouseLeave = () => {
    targetRef.current = { x: 0, y: 0 };
    setHovering(false);
  };

  const sheenX = 50 - rot.y * 3.2;
  const sheenY = 30 - rot.x * 3.2;
  const tiltX = flipped ? 0 : rot.x;
  const tiltY = flipped ? 0 : rot.y;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Flip project card"
      style={{
        perspective: 1000,
        width: '100%',
        cursor: 'pointer',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.5s ease ${index * 0.15}s, transform 0.5s ease ${index * 0.15}s`,
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: cardHeight || 600,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.7s cubic-bezier(0.23,1,0.32,1)',
          transform: flipped
            ? `rotateY(180deg) rotateX(0deg)`
            : `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          animationName: !hovering && !flipped ? 'cardFloat' : 'none',
          animationDuration: '4s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationDelay: `${index * 0.8}s`,
        }}
      >
        {/* ── FRONT ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden' as const,
            transform: 'translateZ(1px)',
            borderRadius: 14,
            overflow: 'hidden',
            background: '#0a0a0f',
            border: `1.5px solid ${accent}55`,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: hovering
              ? `0 24px 60px rgba(0,0,0,0.7), 0 0 0 1px ${accent}22, 0 0 40px ${accent}18`
              : '0 8px 30px rgba(0,0,0,0.5)',
            transition: 'box-shadow 0.3s',
          }}
        >
          {/* Header bar */}
          <div
            style={{
              background: `linear-gradient(135deg, ${accentDark}, ${accent}88)`,
              padding: '0.5rem 0.85rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: '0.82rem',
                letterSpacing: '0.18em',
                color: 'rgba(255,255,255,0.9)',
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}
            >
              Project
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.65)',
                fontFamily: 'monospace',
                letterSpacing: '0.08em',
              }}
            >
              {githubPrivate ? 'PRIVATE REPO' : 'OPEN SOURCE'}
            </span>
          </div>

          {/* Screenshot — flex:1 so it takes all remaining space after body */}
          <div style={{ position: 'relative', flex: 1, minHeight: 0, overflow: 'hidden' }}>
            <img
              src={image}
              alt={name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent 50%, #0a0a0f)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                background: `radial-gradient(ellipse 80% 60% at ${sheenX}% ${sheenY}%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 40%, transparent 70%)`,
                mixBlendMode: 'screen',
                transition: 'background 0.05s',
              }}
            />
          </div>

          {/* Full-card specular overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 10,
              borderRadius: 14,
              background: `radial-gradient(ellipse 100% 80% at ${sheenX}% ${sheenY}%, rgba(255,255,255,0.07) 0%, transparent 60%)`,
              mixBlendMode: 'screen',
            }}
          />

          {/* Body */}
          <div
            style={{
              padding: '0.75rem 0.85rem 0.85rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.45rem',
              flexShrink: 0,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 'clamp(1.1rem,2.8vw,1.35rem)',
                  fontWeight: 900,
                  color: '#fff',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.1,
                  marginBottom: '0.25rem',
                }}
              >
                {name}
              </div>
              <div
                style={{
                  fontSize: '0.95rem',
                  color: 'rgba(255,255,255,0.62)',
                  lineHeight: 1.5,
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                {oneliner}
              </div>
            </div>

            {/* Stat */}
            <div
              style={{
                padding: '0.6rem 0',
                borderTop: `1px solid ${accent}22`,
                borderBottom: `1px solid ${accent}22`,
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.5rem',
              }}
            >
              <span
                style={{
                  fontSize: 'clamp(1.6rem,4vw,2rem)',
                  fontWeight: 900,
                  color: accent,
                  fontFamily: 'monospace',
                  lineHeight: 1,
                  textShadow: `0 0 20px ${accent}66`,
                }}
              >
                {stat}
              </span>
              <div>
                <div
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.7)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontFamily: 'monospace',
                  }}
                >
                  {statLabel}
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.4)',
                    fontFamily: 'monospace',
                    letterSpacing: '0.06em',
                    marginTop: '0.1rem',
                  }}
                >
                  {statSub}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
              {tags.slice(0, 5).map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: '0.72rem',
                    padding: '0.15rem 0.45rem',
                    border: `1px solid ${accent}33`,
                    borderRadius: 3,
                    color: `${accent}cc`,
                    fontFamily: 'monospace',
                    letterSpacing: '0.06em',
                  }}
                >
                  {t}
                </span>
              ))}
              {tags.length > 5 && (
                <span
                  style={{
                    fontSize: '0.72rem',
                    color: 'rgba(255,255,255,0.35)',
                    fontFamily: 'monospace',
                    padding: '0.15rem 0.2rem',
                  }}
                >
                  +{tags.length - 5}
                </span>
              )}
            </div>

            <div
              style={{
                fontSize: '0.7rem',
                color: `${accent}77`,
                fontFamily: 'monospace',
                letterSpacing: '0.1em',
                textAlign: 'right',
                marginTop: '0.15rem',
              }}
            >
              flip to see more →
            </div>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden' as const,
            transform: 'rotateY(180deg) translateZ(0.5px)',
            borderRadius: 14,
            overflow: 'hidden',
            background: '#06060e',
            border: `1.5px solid ${accent}44`,
            boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Back header */}
          <div
            style={{
              background: `linear-gradient(135deg, ${accentDark}cc, ${accent}44)`,
              padding: '0.5rem 0.85rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: '0.82rem',
                letterSpacing: '0.14em',
                color: 'rgba(255,255,255,0.9)',
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}
            >
              {name}
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.55)',
                fontFamily: 'monospace',
              }}
            >
              Details
            </span>
          </div>

          <div
            style={{
              padding: '0.85rem',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '0.75rem',
            }}
          >
            {/* Story */}
            <div>
              <div
                style={{
                  fontSize: '0.78rem',
                  color: `${accent}aa`,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontFamily: 'monospace',
                  marginBottom: '0.4rem',
                }}
              >
                About
              </div>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'rgba(255,255,255,0.68)',
                  lineHeight: 1.65,
                  margin: 0,
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                {story}
              </p>
            </div>

            {/* All tags */}
            <div>
              <div
                style={{
                  fontSize: '0.78rem',
                  color: `${accent}aa`,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontFamily: 'monospace',
                  marginBottom: '0.4rem',
                }}
              >
                Stack
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                {tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: '0.72rem',
                      padding: '0.18rem 0.5rem',
                      border: `1px solid ${accent}33`,
                      borderRadius: 3,
                      color: `${accent}cc`,
                      fontFamily: 'monospace',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.55rem 0.75rem',
                  background: `${accent}18`,
                  border: `1px solid ${accent}44`,
                  borderRadius: 5,
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = `${accent}30`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = `${accent}18`;
                }}
              >
                <span style={{ fontSize: '0.8rem' }}>↗</span>
                <div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'rgba(255,255,255,0.45)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      fontFamily: 'monospace',
                    }}
                  >
                    Live Site
                  </div>
                  <div style={{ fontSize: '0.9rem', color: accent, fontFamily: 'monospace' }}>
                    {live.replace('https://', '')}
                  </div>
                </div>
              </a>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.55rem 0.75rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 5,
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    'rgba(255,255,255,0.07)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    'rgba(255,255,255,0.03)';
                }}
              >
                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>{'{}'}</span>
                <div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'rgba(255,255,255,0.45)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      fontFamily: 'monospace',
                    }}
                  >
                    GitHub {githubPrivate ? '· Private' : '· Public'}
                  </div>
                  <div
                    style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255,255,255,0.6)',
                      fontFamily: 'monospace',
                    }}
                  >
                    downing034
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hint below card */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '0.75rem',
          fontSize: '0.72rem',
          letterSpacing: '0.12em',
          color: flipped ? `${accent}aa` : 'rgba(255,255,255,0.35)',
          fontFamily: 'monospace',
          textTransform: 'uppercase',
          transition: 'color 0.3s',
        }}
      >
        {flipped ? 'click to flip back' : 'click to flip'}
      </div>
    </div>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [cardHeight, setCardHeight] = useState(0);
  const heightsRef = useRef<number[]>([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleBackHeight = useCallback((index: number, h: number) => {
    heightsRef.current[index] = h;
    if (heightsRef.current.filter(Boolean).length === PROJECTS.length) {
      const maxH = Math.max(...heightsRef.current);
      setCardHeight(maxH);
    }
  }, []);

  return (
    <section
      id="portfolio"
      ref={ref}
      style={{
        width: '100%',
        background: '#0a0a0f',
        padding: '6rem 1.5rem',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'clip',
      }}
    >
      <style>{`
        @keyframes cardFloat {
          0%,100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          50%      { transform: translateY(-6px) rotateX(0deg) rotateY(0deg); }
        }
        * { box-sizing: border-box; }
        @media (max-width: 860px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .projects-grid > div { max-width: 400px; margin: 0 auto; width: 100%; }
        }
      `}</style>

      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(167,139,250,0.03), transparent)',
        }}
      />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        {/* Hidden measurers — render all back faces offscreen to get max height */}
        {PROJECTS.map((p, i) => (
          <BackMeasurer
            key={`measure-${p.id}`}
            project={p}
            onHeight={(h) => handleBackHeight(i, h)}
          />
        ))}

        {/* Section label */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s',
            fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)',
            letterSpacing: '0.35em',
            color: 'rgba(255,255,255,0.5)',
            textTransform: 'uppercase',
            fontWeight: 500,
            fontFamily: 'monospace',
            marginBottom: '3.5rem',
          }}
        >
          Things I Built
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            alignItems: 'start',
          }}
          className="projects-grid"
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              visible={visible}
              cardHeight={cardHeight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
