import { useState, useRef, useEffect } from 'react';
import type { ReactNode, CSSProperties } from 'react';

// ── Types ────────────────────────────────────────────────────────────────────
interface Role {
  color: string;
  neonColor: string;
  role: string;
  company: string;
  period: string;
  stat: string;
  statLabel: string;
  tagline: string;
  bullets: string[];
  stack: string[];
}

interface NeonTextProps {
  children: ReactNode;
  color: string;
  size?: string;
  weight?: number;
  flicker?: boolean;
  delay?: number;
  style?: CSSProperties;
}

interface NeonCardProps {
  r: Role;
}

// ── Data ─────────────────────────────────────────────────────────────────────
const ROLES: Role[] = [
  {
    color: '#00c8ff',
    neonColor: '#00c8ff',
    role: 'Engineering Manager',
    company: 'Kava Labs',
    period: '2023 — 2025',
    stat: '3',
    statLabel: 'Engineers hired & retained — 0 attrition',
    tagline: 'Built the team. Built the process. Nobody left.',
    bullets: [
      'Led full engineering org — strategy, planning, and execution across every initiative',
      'Designed structured interview rubric — standardized scoring eliminated hearsay from hiring',
      '4/4 hires retained after rebuild vs. 0/6 before; zero attrition on my watch',
      'Regular 1:1s, performance reviews, and ceremonies bridging product, UX, and engineering',
    ],
    stack: ['React', 'TypeScript', 'Agile', 'People Management'],
  },
  {
    color: '#a78bfa',
    neonColor: '#bf9fff',
    role: 'Sr. Software Engineer II',
    company: 'Kava Labs',
    period: '2020 — 2025',
    stat: '$300M',
    statLabel: 'Increase in Chain Value',
    tagline: 'Architected the interface that moved real money.',
    bullets: [
      'Architected cross-chain transfer UI — $1.6M processed in first 2 months',
      'Launched 3 protocol interfaces driving $300M in chain value',
      'Onboarded 4 wallet integrations; maintained 95% SLA success rate',
      'Optimized CI/CD pipeline reducing cycle times by 10%',
    ],
    stack: ['React', 'TypeScript', 'Redux', 'Node.js', 'Docker', 'K8s'],
  },
  {
    color: '#4ade80',
    neonColor: '#39ff8a',
    role: 'Software Engineer',
    company: 'TeamSnap',
    period: '2019 — 2020',
    stat: '9%→78%',
    statLabel: 'Test Coverage',
    tagline: 'Cleaned house. Built the design system. Left it better.',
    bullets: [
      'Built shared design system across 6 frontend applications',
      'Grew test coverage from 9% to 78%; CI/CD across 3 projects',
      'Migrated key app from MobX to Redux for stack coherence',
    ],
    stack: ['React', 'Redux', 'Jest', 'CI/CD', 'Storybook'],
  },
  {
    color: '#fb923c',
    neonColor: '#ff8c2a',
    role: 'Software Engineer',
    company: 'Granicus',
    period: '2017 — 2019',
    stat: '2wk→4d',
    statLabel: 'Regression Cycle Cut',
    tagline: 'Modernized a legacy stack. Automated everything.',
    bullets: [
      'Rewrote Ember.js app to React post-acquisition',
      'Co-built WYSIWYG email editor with WebSocket live-edit',
      'Automated 300+ manual test cases; cut regression from 2 weeks to 4 days',
    ],
    stack: ['React', 'Ruby on Rails', 'WebSockets', 'RSpec'],
  },
];

const CARD_H = 296;

// ── Neon text component — flickers on mount then settles ─────────────────────
function NeonText({
  children,
  color,
  size = '1rem',
  weight = 700,
  delay = 0,
  style = {},
}: NeonTextProps) {
  const [on, setOn] = useState(false);
  const [flickering, setFlickering] = useState(false);

  useEffect(() => {
    const seq = [80, 60, 120, 40, 200, 60, 100];
    let total = delay;
    const timers: ReturnType<typeof setTimeout>[] = [];
    seq.forEach((d, i) => {
      total += d;
      timers.push(setTimeout(() => setFlickering(i % 2 === 0), total));
    });
    timers.push(
      setTimeout(() => {
        setFlickering(false);
        setOn(true);
      }, total + 120),
    );
    return () => timers.forEach(clearTimeout);
  }, [delay]);

  const glow = on && !flickering;
  return (
    <span
      style={{
        fontSize: size,
        fontWeight: weight,
        color: glow ? color : flickering ? `${color}88` : `${color}44`,
        textShadow: glow
          ? `0 0 2px #fff8, 0 0 8px ${color}cc, 0 0 20px ${color}88, 0 0 40px ${color}44`
          : flickering
            ? `0 0 3px ${color}55, 0 0 8px ${color}33`
            : 'none',
        transition: 'color 0.05s, text-shadow 0.05s',
        fontFamily: "'Courier New', monospace",
        letterSpacing: '0.04em',
        ...style,
      }}
    >
      {children}
    </span>
  );
}

// ── Single neon card ─────────────────────────────────────────────────────────
function NeonCard({ r }: NeonCardProps) {
  const [revealed, setRevealed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [borderPct, setBorderPct] = useState(0);
  const borderRef = useRef<number | null>(null);
  const pctRef = useRef(0);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 860px)').matches,
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 860px)');
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (revealed) return;
    if (borderRef.current !== null) cancelAnimationFrame(borderRef.current);
    if (hovered) {
      const grow = () => {
        pctRef.current = Math.min(pctRef.current + 0.055, 1);
        setBorderPct(pctRef.current);
        if (pctRef.current < 1) borderRef.current = requestAnimationFrame(grow);
      };
      borderRef.current = requestAnimationFrame(grow);
    } else {
      const shrink = () => {
        pctRef.current = Math.max(pctRef.current - 0.07, 0);
        setBorderPct(pctRef.current);
        if (pctRef.current > 0) borderRef.current = requestAnimationFrame(shrink);
      };
      borderRef.current = requestAnimationFrame(shrink);
    }
    return () => {
      if (borderRef.current !== null) cancelAnimationFrame(borderRef.current);
    };
  }, [hovered, revealed]);

  useEffect(
    () => () => {
      if (borderRef.current !== null) cancelAnimationFrame(borderRef.current);
    },
    [],
  );

  const c = r.neonColor;

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => !revealed && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="presentation"
    >
      <style>{`
        @keyframes neonPulse {
          0%,100% { opacity:1 }
          92%      { opacity:1 }
          93%      { opacity:0.7 }
          94%      { opacity:1 }
          96%      { opacity:0.85 }
          97%      { opacity:1 }
        }
        @keyframes tubeOn {
          0%   { opacity:0; filter:brightness(3) }
          15%  { opacity:0.6; filter:brightness(2) }
          20%  { opacity:0.3; filter:brightness(1) }
          35%  { opacity:0.9; filter:brightness(2.5) }
          40%  { opacity:0.5; filter:brightness(1) }
          60%  { opacity:1; filter:brightness(1.8) }
          100% { opacity:1; filter:brightness(1) }
        }
        .neon-detail { animation: tubeOn 0.7s ease-out both; }
        .chip-n { display:inline-block;padding:0.2rem 0.55rem;border-radius:3px;font-size:0.75rem;font-family:monospace;border:1px solid;margin:0.15rem 0.15rem 0 0 }
      `}</style>

      {/* SVG border trace */}
      {!revealed && (
        <svg
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 10,
          }}
          overflow="visible"
        >
          <rect
            x="0.5"
            y="0.5"
            width="calc(100% - 1px)"
            height="calc(100% - 1px)"
            rx="9.5"
            fill="none"
            stroke={c}
            strokeWidth="1.5"
            strokeDasharray="1000"
            strokeDashoffset={1000 * (1 - borderPct)}
            style={{ filter: `drop-shadow(0 0 5px ${c})`, transition: 'none' }}
          />
        </svg>
      )}

      {/* Card shell */}
      <div
        style={
          {
            position: 'relative',
            height: revealed ? 'auto' : CARD_H,
            borderRadius: 10,
            overflow: 'hidden',
            boxSizing: 'border-box' as const,
            border: revealed
              ? `1px solid ${c}66`
              : hovered
                ? '1px solid rgba(255,255,255,0.18)'
                : '1px solid rgba(255,255,255,0.08)',
            background: revealed
              ? '#02040a'
              : 'linear-gradient(135deg,rgba(255,255,255,0.065) 0%,rgba(255,255,255,0.018) 100%)',
            cursor: 'pointer',
            transition: 'border-color 0.3s, background 0.5s',
            boxShadow: revealed ? `inset 0 0 60px ${c}08, 0 0 30px ${c}18` : 'none',
          } as CSSProperties
        }
      >
        {/* ── COMPACT face ── */}
        {!revealed && (
          <div
            onClick={() => setRevealed(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setRevealed(true);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Expand work history card"
            style={{ position: 'absolute', inset: 0, padding: '1.3rem 1.5rem' }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '38%',
                background: 'linear-gradient(180deg,rgba(255,255,255,0.05) 0%,transparent 100%)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 52,
                height: 52,
                background: `linear-gradient(225deg,${c}28,transparent)`,
                pointerEvents: 'none',
              }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div
                style={{
                  fontSize: '0.85rem',
                  letterSpacing: '0.22em',
                  color: c,
                  opacity: 0.65,
                  textTransform: 'uppercase',
                  fontFamily: 'monospace',
                  marginBottom: '0.3rem',
                  fontWeight: 300,
                  textShadow: `0 0 8px ${c}44`,
                }}
              >
                {r.company} · {r.period}
              </div>
              <div
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: c,
                  marginBottom: '0.28rem',
                  lineHeight: 1.2,
                  fontFamily: "'Courier New', monospace",
                  letterSpacing: '0.04em',
                  textShadow: `0 0 2px #fff8, 0 0 8px ${c}cc, 0 0 20px ${c}88, 0 0 40px ${c}44`,
                }}
              >
                {r.role}
              </div>
              <div
                style={{
                  borderTop: `1px solid ${c}33`,
                  paddingTop: '0.6rem',
                  marginTop: '0.6rem',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.45rem',
                  marginBottom: '0.6rem',
                }}
              >
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    color: c,
                    lineHeight: 1,
                    fontFamily: "'Courier New', monospace",
                    letterSpacing: '0.04em',
                    textShadow: `0 0 2px #fff8, 0 0 8px ${c}cc, 0 0 20px ${c}88`,
                  }}
                >
                  {r.stat}
                </span>
                <span
                  style={{
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.85)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontFamily: 'monospace',
                    fontWeight: 300,
                  }}
                >
                  {r.statLabel}
                </span>
              </div>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.45,
                  margin: 0,
                  fontStyle: 'italic',
                }}
              >
                {r.tagline}
              </p>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '0.85rem',
                right: '0.9rem',
                fontSize: '0.58rem',
                letterSpacing: '0.14em',
                color: hovered || isMobile ? `${c}${hovered ? '' : '88'}` : 'transparent',
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <span
                style={{
                  width: 12,
                  height: 1,
                  background: hovered || isMobile ? `${c}${hovered ? '' : '88'}` : 'transparent',
                  transition: 'background 0.2s',
                  display: 'inline-block',
                }}
              />
              click to reveal
            </div>
          </div>
        )}

        {/* ── NEON DETAIL face ── */}
        {revealed && (
          <div
            className="neon-detail"
            onClick={() => setRevealed(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setRevealed(false);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Collapse work history card"
            style={{
              position: 'relative',
              padding: '1.3rem 1.5rem',
              cursor: 'pointer',
              animation: 'neonPulse 6s ease-in-out infinite',
            }}
          >
            {/* Tube glow ambient */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(ellipse 80% 60% at 50% 40%, ${c}0a, transparent)`,
                pointerEvents: 'none',
              }}
            />
            {/* Horizontal tube reflection line */}
            <div
              style={{
                position: 'absolute',
                top: '28%',
                left: '5%',
                right: '5%',
                height: 1,
                background: `linear-gradient(90deg,transparent,${c}22,${c}44,${c}22,transparent)`,
                pointerEvents: 'none',
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Company / period */}
              <div
                style={{
                  fontSize: '0.85rem',
                  letterSpacing: '0.22em',
                  color: c,
                  opacity: 0.65,
                  textTransform: 'uppercase',
                  fontFamily: 'monospace',
                  marginBottom: '0.3rem',
                  fontWeight: 300,
                  textShadow: `0 0 8px ${c}44`,
                }}
              >
                {r.company} · {r.period}
              </div>

              {/* Role — full neon treatment */}
              <NeonText
                color={c}
                size="1.25rem"
                weight={800}
                delay={0}
                style={{ display: 'block', lineHeight: 1.2, marginBottom: '0.6rem' }}
              >
                {r.role}
              </NeonText>

              {/* Stat */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'baseline',
                  gap: '0.5rem',
                  marginBottom: '0.75rem',
                  borderTop: `1px solid ${c}22`,
                  paddingTop: '0.5rem',
                  marginTop: '0.1rem',
                }}
              >
                <NeonText color={c} size="1.5rem" weight={900} delay={200}>
                  {r.stat}
                </NeonText>
                <span
                  style={{
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.85)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontFamily: 'monospace',
                    fontWeight: 300,
                  }}
                >
                  {r.statLabel}
                </span>
              </div>

              {/* Bullets */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.32rem',
                  marginBottom: '0.6rem',
                }}
              >
                {r.bullets.map((b, bi) => (
                  <div
                    key={bi}
                    style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}
                  >
                    <div
                      style={{
                        width: 2,
                        flexShrink: 0,
                        marginTop: '0.35rem',
                        alignSelf: 'stretch',
                        background: `linear-gradient(to bottom,${c}88,transparent)`,
                        borderRadius: 2,
                        minHeight: 10,
                        boxShadow: `0 0 4px ${c}44`,
                      }}
                    />
                    <p
                      style={{
                        fontSize: '0.92rem',
                        color: 'rgba(255,255,255,0.68)',
                        lineHeight: 1.45,
                        margin: 0,
                      }}
                    >
                      {b}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div style={{ marginBottom: '0.75rem' }}>
                {r.stack.map((s) => (
                  <span
                    key={s}
                    className="chip-n"
                    style={{
                      color: `${c}cc`,
                      borderColor: `${c}33`,
                      background: `${c}0a`,
                      boxShadow: `0 0 4px ${c}22`,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Collapse hint */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  opacity: 0.4,
                  paddingTop: '0.4rem',
                  borderTop: `1px solid ${c}18`,
                }}
              >
                <span
                  style={{
                    fontSize: '0.58rem',
                    fontFamily: 'monospace',
                    letterSpacing: '0.18em',
                    color: c,
                    textTransform: 'uppercase',
                  }}
                >
                  &#9650; click to collapse
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main export ──────────────────────────────────────────────────────────────
export default function WorkHistory() {
  return (
    <section
      id="work-history"
      style={{
        width: '100%',
        background: '#02040a',
        fontFamily: 'system-ui,-apple-system,sans-serif',
      }}
    >
      <style>{`
        .wh-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 1200px) {
          .wh-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        <div
          style={{
            fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)',
            letterSpacing: '0.35em',
            color: 'rgba(255,255,255,0.5)',
            textTransform: 'uppercase',
            fontFamily: 'monospace',
            marginBottom: '1.5rem',
            fontWeight: 500,
          }}
        >
          Work History
        </div>
        <div className="wh-grid">
          {ROLES.map((r, i) => (
            <NeonCard key={i} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
