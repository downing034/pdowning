import { useEffect, useRef, useState } from 'react';

// ── Types ────────────────────────────────────────────────────────────────────
interface Transaction {
  key: string;
  value: string;
}

interface ContactLink {
  label: string;
  value: string;
  href: string;
  short: string;
}

// ── Data ─────────────────────────────────────────────────────────────────────
const TICKER_ITEMS = [
  'PAUL DOWNING HAS CLEARED WAIVERS',
  'AVAILABLE IMMEDIATELY · DENVER, CO',
  '10+ YEARS EXPERIENCE · FULL STACK',
  'SPORTS TECH TARGET · OPEN TO OFFERS',
  'LAST TEAM: KAVA LABS · DEC 2025',
];

const TRANSACTIONS: Transaction[] = [
  { key: 'Position', value: 'Full Stack Engineer' },
  { key: 'Experience', value: '10+ Years' },
  { key: 'Location', value: 'Denver, CO' },
  { key: 'Last Team', value: 'Kava Labs' },
  { key: 'Status', value: 'Unrestricted Free Agent' },
  { key: 'Available', value: 'Immediately' },
];

const LINKS: ContactLink[] = [
  {
    label: 'Email',
    value: 'downing034@gmail.com',
    href: 'mailto:downing034@gmail.com',
    short: 'downing034@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: '/in/paul-w-downing',
    href: 'https://www.linkedin.com/in/paul-w-downing/',
    short: 'linkedin.com/in/paul-w-downing',
  },
  {
    label: 'GitHub',
    value: 'github.com/downing034',
    href: 'https://github.com/downing034',
    short: 'github.com/downing034',
  },
];

// ── Hook ─────────────────────────────────────────────────────────────────────
function useVisible(ref: React.RefObject<HTMLElement | null>, threshold = 0.1) {
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

const ACCENT = '#1a6edb';
const ACCENT_DARK = '#0f4fa8';
const ACCENT_HOVER = 'rgba(26,110,219,0.08)';

// ── Component ────────────────────────────────────────────────────────────────
export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const visible = useVisible(ref);
  const [txIndex, setTxIndex] = useState(0);
  const [fading, setFading] = useState(false);

  // Cycle through transaction stats
  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setTxIndex((i) => (i + 1) % TRANSACTIONS.length);
        setFading(false);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, [visible]);

  const tx = TRANSACTIONS[txIndex];

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        width: '100%',
        background: '#06060e',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes tickerMove {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes txFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes breakFlash {
          0%,100% { opacity: 1; }
          50%     { opacity: 0.4; }
        }
        @keyframes sectionIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes linkHover {
          from { width: 0; }
          to   { width: 100%; }
        }
        @media (min-width: 700px) {
          .contact-links-row { flex-wrap: nowrap !important; }
          .contact-link-item { flex: 1 1 0 !important; border-right: 1px solid rgba(255,255,255,0.05) !important; border-top: none !important; }
          .contact-link-item:last-child { border-right: none !important; }
        }
        .contact-link:hover .link-underline { width: 100% !important; }
        .contact-link:hover .link-label { color: #fff !important; }
        .contact-link:hover .link-value { color: #fff !important; }
      `}</style>

      {/* ── TOP BREAKING NEWS BAR ── */}
      <div
        style={{
          background: ACCENT,
          display: 'flex',
          alignItems: 'stretch',
          overflow: 'hidden',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        {/* Badge */}
        <div
          style={{
            background: ACCENT_DARK,
            padding: '0.7rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
            gap: '0.5rem',
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#fff',
              animation: 'breakFlash 1s steps(1) infinite',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: 'clamp(0.6rem,1.8vw,0.85rem)',
              fontWeight: 900,
              color: '#fff',
              letterSpacing: '0.18em',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            Breaking News
          </span>
        </div>

        {/* Scrolling text */}
        <div style={{ overflow: 'hidden', flex: 1, display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              animation: 'tickerMove 22s linear infinite',
              whiteSpace: 'nowrap',
            }}
          >
            {[...Array(2)].map((_, ri) => (
              <span
                key={ri}
                style={{
                  fontSize: 'clamp(0.65rem,1.6vw,0.88rem)',
                  fontWeight: 700,
                  color: '#fff',
                  letterSpacing: '0.12em',
                  fontFamily: 'monospace',
                  paddingRight: '5rem',
                }}
              >
                {TICKER_ITEMS.join('   ·   ')} · &nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN TRANSACTION AREA ── */}
      <div
        style={{
          padding: '3rem 1.5rem 4rem',
          opacity: visible ? 1 : 0,
          animation: visible ? 'sectionIn 0.6s ease 0.2s both' : 'none',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Network bug + date */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2.5rem',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                background: ACCENT,
                padding: '0.25rem 0.65rem',
                borderRadius: 2,
                fontSize: 'clamp(0.6rem,1.5vw,0.75rem)',
                fontWeight: 900,
                color: '#fff',
                letterSpacing: '0.12em',
                fontFamily: 'monospace',
              }}
            >
              FA
            </div>
            <span
              style={{
                fontSize: 'clamp(0.65rem,1.5vw,0.78rem)',
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: '0.22em',
                fontFamily: 'monospace',
                textTransform: 'uppercase',
              }}
            >
              Free Agent Transaction · 2025
            </span>
            <div
              style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)', minWidth: 20 }}
            />
            <span
              style={{
                fontSize: 'clamp(0.6rem,1.4vw,0.72rem)',
                color: 'rgba(255,255,255,0.45)',
                fontFamily: 'monospace',
                letterSpacing: '0.1em',
              }}
            >
              EFFECTIVE IMMEDIATELY
            </span>
          </div>

          {/* Player name */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div
              style={{
                fontSize: 'clamp(0.65rem,1.5vw,0.78rem)',
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: '0.28em',
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}
            >
              Player
            </div>
            <div
              style={{
                fontSize: 'clamp(2.8rem,8vw,6rem)',
                fontWeight: 900,
                color: '#fff',
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}
            >
              Paul Downing
            </div>
            <div
              style={{
                fontSize: 'clamp(0.8rem,2vw,1.1rem)',
                color: ACCENT,
                fontFamily: 'monospace',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginTop: '0.5rem',
                fontWeight: 700,
              }}
            >
              Unrestricted Free Agent
            </div>
          </div>

          {/* Cycling stat */}
          <div
            aria-live="polite"
            style={{
              borderLeft: '4px solid #c00',
              paddingLeft: '1.5rem',
              marginBottom: '3.5rem',
              minHeight: 72,
            }}
          >
            <div
              style={{
                fontSize: 'clamp(0.6rem,1.4vw,0.72rem)',
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: '0.28em',
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                marginBottom: '0.4rem',
                transition: 'opacity 0.3s',
                opacity: fading ? 0 : 1,
              }}
            >
              {tx.key}
            </div>
            <div
              style={{
                fontSize: 'clamp(1.6rem,5vw,3rem)',
                fontWeight: 900,
                color: '#fff',
                letterSpacing: '-0.01em',
                lineHeight: 1.1,
                transition: 'opacity 0.3s, transform 0.3s',
                opacity: fading ? 0 : 1,
                transform: fading ? 'translateY(6px)' : 'translateY(0)',
              }}
            >
              {tx.value}
            </div>

            {/* Dot indicators */}
            <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.85rem' }}>
              {TRANSACTIONS.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: i === txIndex ? 18 : 6,
                    height: 3,
                    borderRadius: 2,
                    background: i === txIndex ? ACCENT : 'rgba(255,255,255,0.4)',
                    transition: 'width 0.3s, background 0.3s',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM CONTACT BANNER ── */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(0,0,0,0.4)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.6s ease 0.4s',
        }}
      >
        {/* Contact label bar */}
        <div
          style={{
            background: '#111',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            padding: '0.5rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <span
            style={{
              fontSize: 'clamp(0.6rem,1.4vw,0.72rem)',
              fontWeight: 900,
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.28em',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
            }}
          >
            Contact Agent
          </span>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
        </div>

        {/* Links row */}
        <div
          className="contact-links-row"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          {LINKS.map((l, i) => (
            <a
              key={i}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${l.label}: ${l.short}`}
              className="contact-link contact-link-item"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '1.5rem 1.75rem',
                textDecoration: 'none',
                position: 'relative',
                transition: 'background 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = ACCENT_HOVER;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              }}
            >
              <span
                className="link-label"
                style={{
                  fontSize: 'clamp(0.55rem,1.2vw,0.65rem)',
                  letterSpacing: '0.25em',
                  color: 'rgba(255,255,255,0.55)',
                  fontFamily: 'monospace',
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem',
                  transition: 'color 0.2s',
                }}
              >
                {l.label}
              </span>
              <span
                className="link-value"
                style={{
                  fontSize: 'clamp(0.78rem,1.9vw,0.95rem)',
                  color: 'rgba(255,255,255,0.65)',
                  fontFamily: 'monospace',
                  letterSpacing: '0.02em',
                  transition: 'color 0.2s',
                }}
              >
                {l.short}
              </span>
              {/* Underline on hover */}
              <div
                className="link-underline"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: 2,
                  width: 0,
                  background: ACCENT,
                  transition: 'width 0.25s ease',
                }}
              />
            </a>
          ))}
        </div>

        {/* Footer line */}
        <div
          style={{
            padding: '0.85rem 1.75rem',
            borderTop: '1px solid rgba(255,255,255,0.04)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              fontSize: '0.56rem',
              color: 'rgba(255,255,255,0.15)',
              fontFamily: 'monospace',
              letterSpacing: '0.1em',
            }}
          >
            &copy; 2026 PAUL DOWNING
          </span>
          <span
            style={{
              fontSize: '0.56rem',
              color: 'rgba(255,255,255,0.15)',
              fontFamily: 'monospace',
              letterSpacing: '0.1em',
            }}
          >
            DENVER SERIES · #001
          </span>
        </div>
      </div>
    </section>
  );
}
