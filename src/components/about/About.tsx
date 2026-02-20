import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

// ── Types ────────────────────────────────────────────────────────────────────
interface Panel {
  number: string;
  heading: string;
  body: string;
  stat: string;
  statLabel: string;
}

interface Team {
  name: string;
  sport: string;
  color: string;
  accent: string;
}

// ── Data ─────────────────────────────────────────────────────────────────────
const PANELS: Panel[] = [
  {
    number: '01',
    heading: 'From product planning to deployment and everything in between.',
    body: "I've scoped the work, written the PRD, built the feature, and answered the support ticket.",
    stat: '10+',
    statLabel: 'Years',
  },
  {
    number: '02',
    heading: "I've managed engineers and I've been managed.",
    body: "That experience makes me easier to work with at every level. I reduce friction, I don't create it.",
    stat: '4',
    statLabel: 'Companies',
  },
  {
    number: '03',
    heading: 'I want to work on something people care about.',
    body: 'Sports tech, fan experience, real-time products. I do better work when the mission means something.',
    stat: '3',
    statLabel: 'Roles',
  },
];

const ACCENTS = ['#00c8ff', '#a78bfa', '#BF5700'];

const TEAMS: Team[] = [
  { name: 'Packers', sport: 'NFL', color: '#203731', accent: '#FFB612' },
  { name: 'Astros', sport: 'MLB', color: '#002D62', accent: '#EB6E1F' },
  { name: 'Longhorns', sport: 'NCAAF', color: '#BF5700', accent: '#fff' },
  { name: 'Gophers', sport: 'NCAAF', color: '#7A0019', accent: '#FFCC33' },
  { name: 'Nuggets', sport: 'NBA', color: '#0E2240', accent: '#FEC524' },
  { name: 'Avalanche', sport: 'NHL', color: '#6F263D', accent: '#236192' },
  { name: 'Buffaloes', sport: 'NCAAF', color: '#CFB87C', accent: '#000' },
  { name: 'Bucks', sport: 'NBA', color: '#00471B', accent: '#EEE1C6' },
  { name: 'Wild', sport: 'NHL', color: '#154734', accent: '#A6192E' },
];

// ── Hooks ────────────────────────────────────────────────────────────────────
function useVisible(ref: React.RefObject<HTMLElement | null>, threshold = 0.15) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setV(true);
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return v;
}

// ── Per-panel observer — fires from either scroll direction ──────────────────
function BroadcastPanel({ p, i }: { p: Panel; i: number }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (timerRef.current) clearTimeout(timerRef.current);
        if (entry.isIntersecting) {
          timerRef.current = setTimeout(() => setShown(true), 80);
        } else {
          setShown(false);
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div ref={panelRef} style={{ position: 'relative', overflow: 'hidden', minHeight: 80 }}>
      {shown && (
        <div>
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 3,
              background: ACCENTS[i],
              boxShadow: `0 0 12px ${ACCENTS[i]}`,
              animation: 'slideInLeft 0.3s ease both',
            }}
          />
          <div
            style={{
              paddingLeft: '1.5rem',
              animation: 'slideInRight 0.4s ease 0.15s both',
              opacity: 0,
            }}
          >
            <div
              style={
                {
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '0.6rem',
                  background: `${ACCENTS[i]}18`,
                  border: `1px solid ${ACCENTS[i]}33`,
                  borderRadius: '2px 2px 0 0',
                  padding: '0.25rem 0.75rem',
                } as CSSProperties
              }
            >
              <span
                style={{
                  fontSize: '0.8rem',
                  letterSpacing: '0.2em',
                  color: ACCENTS[i],
                  fontFamily: 'monospace',
                  textTransform: 'uppercase',
                }}
              >
                {p.number}
              </span>
              <div style={{ width: 1, height: 10, background: `${ACCENTS[i]}44`, flexShrink: 0 }} />
              <span
                style={{
                  fontSize: 'clamp(1.1rem,4vw,1.4rem)',
                  fontWeight: 900,
                  color: '#fff',
                  fontFamily: 'monospace',
                  lineHeight: 1,
                }}
              >
                {p.stat}
              </span>
              <span
                style={{
                  fontSize: '0.82rem',
                  color: 'rgba(255,255,255,0.6)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  fontFamily: 'monospace',
                }}
              >
                {p.statLabel}
              </span>
            </div>
            <div
              style={{
                background: 'rgba(0,0,0,0.75)',
                backdropFilter: 'blur(4px)',
                borderLeft: `3px solid ${ACCENTS[i]}`,
                borderBottom: `1px solid ${ACCENTS[i]}33`,
                borderRight: `1px solid ${ACCENTS[i]}22`,
                padding: '0.75rem 1rem',
              }}
            >
              <p
                style={{
                  fontSize: 'clamp(1rem,2.4vw,1.15rem)',
                  fontWeight: 700,
                  color: '#fff',
                  margin: '0 0 0.3rem',
                  lineHeight: 1.4,
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                {p.heading}
              </p>
              <p
                style={{
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.6)',
                  margin: 0,
                  lineHeight: 1.6,
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                {p.body}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Personal intro block ─────────────────────────────────────────────────────
function NameVariants({ visible }: { visible: boolean }) {
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        animation: visible ? 'fadeUp 0.6s ease both' : 'none',
        marginBottom: '1.5rem',
        position: 'relative',
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
      }}
    >
      {/* Watermark */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '-1rem',
          transform: 'translateY(-50%)',
          fontSize: 'clamp(4rem,12vw,8rem)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          color: 'rgba(255,255,255,0.03)',
          fontFamily: 'system-ui, sans-serif',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          pointerEvents: 'none',
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        PAUL DOWNING
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: '0.6rem' }}>
          <span
            style={{
              fontSize: '0.95rem',
              letterSpacing: '0.22em',
              color: 'rgba(255,255,255,0.5)',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
            }}
          >
            Denver, CO
          </span>
        </div>
        <p
          style={{
            fontSize: 'clamp(1.1rem,2.6vw,1.3rem)',
            color: 'rgba(255,255,255,0.65)',
            fontFamily: 'system-ui, sans-serif',
            lineHeight: 1.6,
            margin: 0,
            maxWidth: 520,
          }}
        >
          Caring engineer, excellent communicator, always willing to help. Team player in every
          sense of the word
          <span style={{ animation: 'cursorBlink 1s steps(1) infinite', color: '#BF5700' }}>_</span>
        </p>
      </div>
    </div>
  );
}

// ── Personal break ───────────────────────────────────────────────────────────
function PersonalBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useVisible(ref, 0.1);

  return (
    <div
      ref={ref}
      style={{
        marginTop: 0,
        paddingTop: 0,
        borderTop: 'none',
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes teamIn {
          from { opacity: 0; transform: translateY(8px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes cursorBlink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
      `}</style>

      {/* Name variant switcher */}
      <NameVariants visible={visible} />

      {/* Divider with label */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1.5rem',
          opacity: visible ? 1 : 0,
          animation: visible ? 'fadeUp 0.6s ease 0.2s both' : 'none',
        }}
      >
        <span
          style={{
            fontSize: '0.85rem',
            letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.4)',
            fontFamily: 'monospace',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          My Teams
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
        <span
          style={{
            fontSize: '0.78rem',
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.28)',
            fontFamily: 'monospace',
            whiteSpace: 'nowrap',
          }}
        >
          Yes, all of them
        </span>
      </div>

      {/* Team badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {TEAMS.map((t, i) => (
          <div
            key={t.name}
            role="presentation"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.85rem 0.4rem 0.6rem',
              borderRadius: 4,
              background: `${t.color}cc`,
              border: `1px solid ${t.accent}33`,
              opacity: visible ? 1 : 0,
              animation: visible ? `teamIn 0.4s ease ${0.3 + i * 0.06}s both` : 'none',
              cursor: 'default',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 16px ${t.color}66`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
            }}
          >
            {/* Sport pill */}
            <span
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                color: `${t.accent}99`,
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                background: 'rgba(0,0,0,0.3)',
                padding: '0.12rem 0.38rem',
                borderRadius: 2,
              }}
            >
              {t.sport}
            </span>
            <span
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: t.accent,
                fontFamily: 'system-ui, sans-serif',
                letterSpacing: '0.01em',
              }}
            >
              {t.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Full section ─────────────────────────────────────────────────────────────
export default function About() {
  return (
    <section
      id="about"
      style={{
        width: '100%',
        background: '#0a0a0f',
        padding: '6rem 1.5rem',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes slideInLeft  { from { transform: translateX(-100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slideInRight { from { transform: translateX(40px);  opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        * { box-sizing: border-box; }
      `}</style>

      {/* Ambient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 70% 40% at 50% 90%, rgba(191,87,0,0.04), transparent)',
        }}
      />

      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
        {/* Personal break — comes first */}
        <PersonalBreak />

        {/* Divider before panels */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '4rem 0 3.5rem' }} />

        {/* Panels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {PANELS.map((p, i) => (
            <BroadcastPanel key={i} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
