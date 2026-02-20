import { useState, useRef, useEffect } from 'react';

interface SkillCategory {
  name: string;
  color: string;
  skills: string[];
}

interface SkillItem {
  text: string;
  cat: number;
}

interface PillPosition {
  x: number;
  y: number;
  w: number;
}

interface PillDatum {
  el: HTMLSpanElement | null;
  cat: number;
  bobPhase: number;
  bobAmpX: number;
  bobAmpY: number;
  bobSpeedX: number;
  bobSpeedY: number;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Frontend',
    color: '#00c8ff',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'Redux',
      'HTML5',
      'CSS3/SASS',
      'Vite/CRA',
      'JSON/XML',
      'NextJS',
    ],
  },
  {
    name: 'Testing',
    color: '#a78bfa',
    skills: [
      'Jest',
      'React Testing Lib',
      'Enzyme',
      'RSpec',
      'Capybara',
      'Cucumber',
      'Cypress',
      'Playwright',
    ],
  },
  {
    name: 'Backend',
    color: '#fb923c',
    skills: ['Ruby', 'Rails', 'NodeJS/Express', 'REST APIs', 'WebSockets', 'NATS Streaming'],
  },
  {
    name: 'Design',
    color: '#34d399',
    skills: ['Material UI', 'Bootstrap', 'Storybook', 'Tailwind', 'Framer Motion', 'Figma'],
  },
  {
    name: 'Ops & Tools',
    color: '#f472b6',
    skills: [
      'Git/GitHub',
      'Webpack',
      'Netlify',
      'CI/CD',
      'Docker',
      'Kubernetes',
      'Heroku',
      'Jira',
      'Shortcut',
    ],
  },
  {
    name: 'Leadership',
    color: '#fbbf24',
    skills: ['Eng Management', 'Scrum/Agile', 'OOP', 'Mentoring', 'Stakeholder Comms', 'MacOS'],
  },
];

const LEFT_W = 140;
const PILL_H = 28;
const PAD = 10;

const pillW = (text: string) => Math.ceil(text.length * 7.5 + 26);

function buildLayout(skills: SkillItem[], W: number, H: number): PillPosition[] {
  const x0 = LEFT_W + 16,
    x1 = W - 12;
  const y0 = 48,
    y1 = H - 12;
  if (x1 - x0 < 50 || y1 - y0 < 50) return skills.map(() => ({ x: W / 2, y: H / 2, w: 60 }));

  let seed = 99;
  const rng = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 0xffffffff;
  };
  const order = [...skills.keys()];
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }

  const avgW = skills.reduce((s, sk) => s + pillW(sk.text), 0) / skills.length;
  const cols = Math.max(3, Math.floor((x1 - x0) / (avgW + PAD)));
  const rows = Math.ceil(skills.length / cols);
  const cellW = (x1 - x0) / cols;
  const cellH = (y1 - y0) / rows;

  const pos: PillPosition[] = Array(skills.length);
  order.forEach((si, slot) => {
    const col = slot % cols,
      row = Math.floor(slot / cols);
    const pw = pillW(skills[si].text);
    const jx = (rng() - 0.5) * Math.max(0, cellW - pw - PAD) * 0.7;
    const jy = (rng() - 0.5) * Math.max(0, cellH - PILL_H - PAD) * 0.6;
    pos[si] = {
      x: x0 + col * cellW + cellW / 2 + jx,
      y: y0 + row * cellH + cellH / 2 + jy,
      w: pw,
    };
  });

  for (let iter = 0; iter < 40; iter++) {
    for (let i = 0; i < pos.length; i++) {
      for (let j = i + 1; j < pos.length; j++) {
        const a = pos[i],
          b = pos[j];
        const needX = (a.w + b.w) / 2 + PAD,
          needY = PILL_H + PAD;
        const dx = b.x - a.x,
          dy = b.y - a.y;
        const ox = needX - Math.abs(dx),
          oy = needY - Math.abs(dy);
        if (ox > 0 && oy > 0) {
          if (ox < oy) {
            const p = ox / 2 + 0.5;
            a.x -= dx > 0 ? p : -p;
            b.x += dx > 0 ? p : -p;
          } else {
            const p = oy / 2 + 0.5;
            a.y -= dy > 0 ? p : -p;
            b.y += dy > 0 ? p : -p;
          }
        }
      }
      const p = pos[i];
      p.x = Math.max(x0 + p.w / 2, Math.min(x1 - p.w / 2, p.x));
      p.y = Math.max(y0 + PILL_H / 2, Math.min(y1 - PILL_H / 2, p.y));
    }
  }
  return pos;
}

function ElectricSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pillEls = useRef<(HTMLSpanElement | null)[]>([]);
  const pillData = useRef<PillDatum[]>([]);
  const animRef = useRef<number>(0);
  const hovCatRef = useRef<number | null>(null);
  const [hovCat, setHovCat] = useState<number | null>(null);
  const catBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [mActive, setMActive] = useState(0);
  const [positions, setPositions] = useState<PillPosition[] | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const allSkills: SkillItem[] = SKILL_CATEGORIES.flatMap((cat, ci) =>
    cat.skills.map((s) => ({ text: s, cat: ci })),
  );

  const allSkillsRef = useRef(allSkills);

  useEffect(() => {
    if (isMobile || !containerRef.current) return;
    const el = containerRef.current;
    const compute = () => {
      const W = el.offsetWidth;
      const H = el.offsetHeight;
      if (W > 0 && H > 0) setPositions(buildLayout(allSkillsRef.current, W, H));
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isMobile]);

  useEffect(() => {
    if (!positions) return;
    const t = setTimeout(() => {
      pillData.current = pillEls.current.map((el) => ({
        el,
        cat: el ? +(el.dataset.cat || '0') : 0,
        bobPhase: Math.random() * Math.PI * 2,
        bobAmpX: 0.8 + Math.random() * 1.2,
        bobAmpY: 1.0 + Math.random() * 1.4,
        bobSpeedX: 0.28 + Math.random() * 0.35,
        bobSpeedY: 0.22 + Math.random() * 0.3,
      }));
    }, 80);
    return () => clearTimeout(t);
  }, [positions]);

  useEffect(() => {
    if (isMobile) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let t = 0;
    const resize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };
    resize();

    const makeLightning = (x1: number, y1: number, x2: number, y2: number, segs = 5, jag = 12) => {
      const pts: [number, number][] = [[x1, y1]];
      for (let i = 1; i < segs; i++) {
        const f = i / segs;
        pts.push([
          x1 + (x2 - x1) * f + (Math.random() - 0.5) * jag * 2,
          y1 + (y2 - y1) * f + (Math.random() - 0.5) * jag * 2,
        ]);
      }
      pts.push([x2, y2]);
      return pts;
    };

    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const hc = hovCatRef.current;
      const cr = container.getBoundingClientRect();

      pillData.current.forEach((pd) => {
        if (!pd.el) return;
        const bx = Math.sin(t * pd.bobSpeedX + pd.bobPhase) * pd.bobAmpX;
        const by = Math.cos(t * pd.bobSpeedY + pd.bobPhase * 1.3) * pd.bobAmpY;
        pd.el.style.transform = `translate(calc(-50% + ${bx.toFixed(2)}px),calc(-50% + ${by.toFixed(2)}px))`;
        const isActive = hc === pd.cat;
        const isDimmed = hc !== null && !isActive;
        const cat = SKILL_CATEGORIES[pd.cat];
        pd.el.style.opacity = isDimmed ? '0.1' : isActive ? '1' : '0.55';
        pd.el.style.borderColor = isActive
          ? `${cat.color}cc`
          : isDimmed
            ? 'rgba(255,255,255,0.06)'
            : 'rgba(255,255,255,0.18)';
        pd.el.style.color = isActive
          ? cat.color
          : isDimmed
            ? 'rgba(255,255,255,0.12)'
            : 'rgba(255,255,255,0.72)';
        pd.el.style.background = isActive ? `${cat.color}18` : 'rgba(255,255,255,0.03)';
        pd.el.style.boxShadow = isActive ? `0 0 10px ${cat.color}44` : 'none';
      });

      if (hc !== null) {
        const btn = catBtnRefs.current[hc];
        if (btn) {
          const br = btn.getBoundingClientRect();
          const ax = br.right - cr.left,
            ay = br.top + br.height / 2 - cr.top;
          const cat = SKILL_CATEGORIES[hc];
          pillData.current
            .filter((pd) => pd.cat === hc && pd.el)
            .forEach((pd) => {
              if (Math.random() > 0.45) {
                const pr = pd.el!.getBoundingClientRect();
                const px = pr.left + pr.width / 2 - cr.left,
                  py = pr.top + pr.height / 2 - cr.top;
                const bolts = makeLightning(ax, ay, px, py, 6, 14);
                ctx.beginPath();
                ctx.moveTo(bolts[0][0], bolts[0][1]);
                bolts.slice(1).forEach(([bx, by]) => ctx.lineTo(bx, by));
                ctx.strokeStyle = `${cat.color}${Math.random() > 0.5 ? 'bb' : '66'}`;
                ctx.lineWidth = Math.random() > 0.65 ? 1.5 : 0.7;
                ctx.shadowBlur = 8;
                ctx.shadowColor = cat.color;
                ctx.stroke();
                ctx.shadowBlur = 0;
              }
            });
        }
      }
      animRef.current = requestAnimationFrame(draw);
    };
    draw();
    const ro2 = new ResizeObserver(resize);
    ro2.observe(container);
    return () => {
      cancelAnimationFrame(animRef.current);
      ro2.disconnect();
    };
  }, [isMobile]);

  if (isMobile) {
    const mc = SKILL_CATEGORIES[mActive];
    return (
      <section
        id="abilities"
        style={{ width: '100%', background: '#06060e', fontFamily: 'system-ui,sans-serif' }}
      >
        <style>{`
          @keyframes pillIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
          .sk-cat-btn {
            flex:1; min-width:0; padding:0.5rem 0.25rem;
            font-size:0.58rem; font-family:monospace; letter-spacing:0.04em;
            border:1px solid rgba(255,255,255,0.1); border-radius:6px;
            background:transparent; color:rgba(255,255,255,0.38);
            cursor:pointer; transition:all 0.18s; white-space:nowrap;
            overflow:hidden; text-overflow:ellipsis; text-align:center;
          }
          .sk-cat-btn.on { color:var(--c); border-color:var(--c); background:rgba(255,255,255,0.04); box-shadow:0 0 8px var(--c33); }
          .sk-pill-m { display:inline-block; padding:0.3rem 0.8rem; border-radius:999px; font-size:0.7rem; border:1px solid; margin:0.25rem; }
        `}</style>
        <div style={{ padding: '2rem 1rem 0.5rem' }}>
          <span
            style={{
              fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
              letterSpacing: '0.35em',
              color: 'rgba(255,255,255,0.45)',
              textTransform: 'uppercase',
              fontFamily: 'monospace',
              fontWeight: 500,
            }}
          >
            Skills
          </span>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: '0.4rem',
            padding: '0 1rem 1rem',
          }}
        >
          {SKILL_CATEGORIES.map((c, i) => (
            <button
              key={i}
              className={`sk-cat-btn${mActive === i ? ' on' : ''}`}
              style={{ '--c': c.color, '--c33': `${c.color}33` } as React.CSSProperties}
              onClick={() => setMActive(i)}
            >
              {c.name}
            </button>
          ))}
        </div>
        <div
          style={{
            padding: '0 1rem 0.65rem',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            marginBottom: '0.75rem',
          }}
        >
          <span
            style={{
              fontSize: '0.6rem',
              letterSpacing: '0.18em',
              color: mc.color,
              fontFamily: 'monospace',
              fontWeight: 700,
            }}
          >
            ■ {mc.name.toUpperCase()}
          </span>
          <span
            style={{
              fontSize: '0.55rem',
              color: 'rgba(255,255,255,0.2)',
              fontFamily: 'monospace',
              marginLeft: '0.6rem',
            }}
          >
            {mc.skills.length} skills
          </span>
        </div>
        <div key={mActive} style={{ padding: '0 0.75rem 2rem', display: 'flex', flexWrap: 'wrap' }}>
          {mc.skills.map((s, si) => (
            <span
              key={s}
              className="sk-pill-m"
              style={{
                color: `${mc.color}dd`,
                borderColor: `${mc.color}44`,
                background: `${mc.color}0e`,
                animation: 'pillIn 0.3s ease both',
                animationDelay: `${si * 0.04}s`,
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="abilities">
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          background: '#06060e',
          overflow: 'hidden',
          fontFamily: 'system-ui,sans-serif',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 8,
            top: 0,
            bottom: 0,
            width: 124,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            padding: '0.75rem 0',
            zIndex: 3,
          }}
        >
          {SKILL_CATEGORIES.map((cat, ci) => (
            <button
              key={ci}
              ref={(el) => {
                catBtnRefs.current[ci] = el;
              }}
              onMouseEnter={() => {
                hovCatRef.current = ci;
                setHovCat(ci);
              }}
              onMouseLeave={() => {
                hovCatRef.current = null;
                setHovCat(null);
              }}
              style={{
                background: hovCat === ci ? `${cat.color}18` : 'rgba(255,255,255,0.03)',
                border: `1px solid ${hovCat === ci ? cat.color : 'rgba(255,255,255,0.1)'}`,
                borderRadius: 6,
                padding: '0.38rem 0.6rem',
                color: hovCat === ci ? cat.color : 'rgba(255,255,255,0.45)',
                fontSize: '0.63rem',
                fontFamily: 'monospace',
                letterSpacing: '0.05em',
                cursor: 'pointer',
                transition: 'all 0.15s',
                textAlign: 'left' as const,
                whiteSpace: 'nowrap' as const,
                width: '100%',
                boxSizing: 'border-box' as const,
                boxShadow: hovCat === ci ? `0 0 10px ${cat.color}33` : 'none',
              }}
            >
              ■ {cat.name}
            </button>
          ))}
        </div>
        {positions &&
          allSkills.map((s, i) => (
            <span
              key={i}
              role="button"
              tabIndex={0}
              aria-label={`${s.text} skill`}
              ref={(el) => {
                pillEls.current[i] = el;
              }}
              data-cat={s.cat}
              onMouseEnter={() => {
                hovCatRef.current = s.cat;
                setHovCat(s.cat);
              }}
              onMouseLeave={() => {
                hovCatRef.current = null;
                setHovCat(null);
              }}
              onFocus={() => {
                hovCatRef.current = s.cat;
                setHovCat(s.cat);
              }}
              onBlur={() => {
                hovCatRef.current = null;
                setHovCat(null);
              }}
              style={{
                position: 'absolute',
                left: positions[i].x,
                top: positions[i].y,
                transform: 'translate(-50%,-50%)',
                padding: '0.35rem 0.85rem',
                borderRadius: 999,
                fontSize: '0.78rem',
                border: '1px solid rgba(255,255,255,0.18)',
                color: 'rgba(255,255,255,0.72)',
                background: 'rgba(255,255,255,0.03)',
                whiteSpace: 'nowrap' as const,
                userSelect: 'none' as const,
                cursor: 'default',
                willChange: 'transform',
                transition:
                  'opacity 0.2s,border-color 0.2s,color 0.2s,background 0.2s,box-shadow 0.2s',
              }}
            >
              {s.text}
            </span>
          ))}
        {/* Watermark hint — sits in reserved top band, pills start below */}
        <div
          style={{
            position: 'absolute',
            left: LEFT_W + 16,
            right: 0,
            top: 0,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none' as const,
            zIndex: 2,
            opacity: hovCat !== null ? 0 : 1,
            transition: 'opacity 0.4s ease',
          }}
        >
          <span
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.18)',
              textTransform: 'uppercase' as const,
              userSelect: 'none' as const,
              whiteSpace: 'nowrap' as const,
            }}
          >
            Hover over an item
          </span>
        </div>
      </div>
    </section>
  );
}

export default ElectricSkills;
