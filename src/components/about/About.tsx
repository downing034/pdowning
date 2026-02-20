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

      <NameVariants visible={visible} />
    </div>
  );
}

// ── Summary snapshot ────────────────────────────────────────────────────────
const SNAPSHOT_ITEMS = [
  { label: 'Teams Led', value: '3\u20135 Engineers', accent: '#00c8ff' },
  { label: 'Core Stack', value: 'React \u00b7 TypeScript \u00b7 Rails', accent: '#a78bfa' },
  { label: 'Products', value: 'DeFi \u00b7 Sports Tech \u00b7 GovTech', accent: '#BF5700' },
  { label: 'Approach', value: 'Ship Fast \u00b7 Test Well \u00b7 Communicate', accent: '#00c8ff' },
];

function SummarySnapshot() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useVisible(ref, 0.15);

  return (
    <div
      ref={ref}
      style={{
        marginTop: '3rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '1rem',
      }}
    >
      {SNAPSHOT_ITEMS.map((item, i) => (
        <div
          key={item.label}
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderLeft: `3px solid ${item.accent}`,
            borderRadius: 4,
            padding: '1rem 1.25rem',
            opacity: visible ? 1 : 0,
            animation: visible ? `fadeUp 0.5s ease ${0.1 + i * 0.1}s both` : 'none',
          }}
        >
          <div
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              color: 'rgba(255,255,255,0.4)',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              marginBottom: '0.4rem',
            }}
          >
            {item.label}
          </div>
          <div
            style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
              color: '#fff',
              fontWeight: 600,
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            {item.value}
          </div>
        </div>
      ))}
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
        {/* Personal intro */}
        <PersonalBreak />

        {/* Divider before panels */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '4rem 0 3.5rem' }} />

        {/* Stat panels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {PANELS.map((p, i) => (
            <BroadcastPanel key={i} p={p} i={i} />
          ))}
        </div>

        {/* Quick snapshot */}
        <SummarySnapshot />
      </div>
    </section>
  );
}
