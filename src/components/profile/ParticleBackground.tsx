import { useEffect, useRef, useState, useCallback } from 'react';

interface Particle {
  tx: number;
  ty: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
  sat: number;
  lit: number;
  delay: number;
  settled: boolean;
}

interface DustParticle {
  x: number;
  y: number;
  r: number;
  angle: number;
  speed: number;
  phase: number;
  hue: number;
  twinkleSpeed: number;
}

interface NebulaBlob {
  x: number;
  y: number;
  r: number;
  hue: number;
  alpha: number;
  sx: number;
  sy: number;
  phase: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const glowCanvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);
  const bgAnimRef = useRef<number>(0);
  const [mxy, setMxy] = useState({ x: -9999, y: -9999 });

  const buildParticles = useCallback((W: number, H: number) => {
    const SCALE = 2;
    const off = document.createElement('canvas');
    off.width = W * SCALE;
    off.height = H * SCALE;
    const octx = off.getContext('2d');
    if (!octx) return;

    // Font scales with width, capped at max
    const fs = Math.min(W * SCALE * 0.165, 240);
    octx.fillStyle = 'white';
    octx.font = `900 ${fs}px 'Arial Black','Impact',sans-serif`;
    octx.textAlign = 'center';
    octx.textBaseline = 'middle';
    // Center the two lines vertically in the canvas with a small gap
    const gap = fs * 0.15;
    const totalHeight = fs * 2 + gap;
    const startY = (H * SCALE - totalHeight) / 2;
    octx.fillText('PAUL', (W * SCALE) / 2, startY + fs * 0.5);
    octx.fillText('DOWNING', (W * SCALE) / 2, startY + fs * 1.5 + gap);

    const data = octx.getImageData(0, 0, W * SCALE, H * SCALE).data;
    const step = Math.max(5, Math.floor((W * SCALE) / 170));
    const pts: { x: number; y: number }[] = [];

    for (let y = 0; y < H * SCALE; y += step) {
      for (let x = 0; x < W * SCALE; x += step) {
        if (data[(y * W * SCALE + x) * 4 + 3] > 140) {
          pts.push({ x: x / SCALE, y: y / SCALE });
        }
      }
    }

    particlesRef.current = pts.map((p) => {
      const isAccent = Math.random() < 0.05;
      const hue = isAccent ? 270 : 190 + (Math.random() - 0.5) * 18;
      const sat = isAccent ? 100 : 100 + (Math.random() - 0.5) * 5;
      const lit = isAccent ? 80 : 75 + (Math.random() - 0.5) * 10;
      return {
        tx: p.x,
        ty: p.y,
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        size: 1.3 + Math.random() * 1.1,
        hue,
        sat,
        lit,
        delay: performance.now() + Math.random() * 1800,
        settled: false,
      };
    });
  }, []);

  // Background: slow-drifting ambient particles + nebula blobs
  useEffect(() => {
    const bg = bgCanvasRef.current;
    if (!bg) return;
    const bgCtx = bg.getContext('2d');
    if (!bgCtx) return;

    let W = (bg.width = bg.offsetWidth);
    let H = (bg.height = bg.offsetHeight);
    let t = 0;

    const dust: DustParticle[] = Array.from({ length: 120 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: 0.4 + Math.random() * 1.0,
      angle: Math.random() * Math.PI * 2,
      speed: 0.08 + Math.random() * 0.18,
      phase: Math.random() * Math.PI * 2,
      hue: Math.random() < 0.3 ? 270 : 190,
      twinkleSpeed: 0.006 + Math.random() * 0.012,
    }));

    const blobs: NebulaBlob[] = [
      { x: 0.25, y: 0.3, r: 0.38, hue: 190, alpha: 0.052, sx: 0.18, sy: 0.12, phase: 0 },
      { x: 0.72, y: 0.55, r: 0.32, hue: 200, alpha: 0.038, sx: -0.14, sy: 0.16, phase: 1.2 },
      { x: 0.5, y: 0.7, r: 0.28, hue: 270, alpha: 0.038, sx: 0.1, sy: -0.1, phase: 2.4 },
      { x: 0.15, y: 0.65, r: 0.22, hue: 185, alpha: 0.032, sx: -0.08, sy: 0.09, phase: 3.6 },
      { x: 0.85, y: 0.25, r: 0.24, hue: 275, alpha: 0.032, sx: 0.11, sy: -0.12, phase: 0.7 },
    ];

    const drawBg = () => {
      t += 0.003;
      bgCtx.fillStyle = 'rgba(4,4,12,0.88)';
      bgCtx.fillRect(0, 0, W, H);

      // Nebula blobs
      blobs.forEach((b) => {
        const bx = (b.x + Math.sin(t * b.sx + b.phase) * 0.12) * W;
        const by = (b.y + Math.cos(t * b.sy + b.phase * 0.7) * 0.09) * H;
        const br = b.r * Math.min(W, H) * (0.92 + Math.sin(t * 0.4 + b.phase) * 0.08);
        const g = bgCtx.createRadialGradient(bx, by, 0, bx, by, br);
        g.addColorStop(0, `hsla(${b.hue},90%,55%,${b.alpha})`);
        g.addColorStop(0.5, `hsla(${b.hue},80%,45%,${b.alpha * 0.5})`);
        g.addColorStop(1, 'transparent');
        bgCtx.beginPath();
        bgCtx.arc(bx, by, br, 0, Math.PI * 2);
        bgCtx.fillStyle = g;
        bgCtx.fill();
      });

      // Drifting dust particles
      dust.forEach((d) => {
        d.angle += Math.sin(t * 0.4 + d.phase) * 0.012;
        d.x += Math.cos(d.angle) * d.speed;
        d.y += Math.sin(d.angle) * d.speed;
        if (d.x < -5) d.x = W + 5;
        if (d.x > W + 5) d.x = -5;
        if (d.y < -5) d.y = H + 5;
        if (d.y > H + 5) d.y = -5;
        const a = 0.08 + Math.sin(t * d.twinkleSpeed * 40 + d.phase) * 0.07;
        bgCtx.beginPath();
        bgCtx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        bgCtx.fillStyle = `hsla(${d.hue},90%,75%,${Math.max(0.01, a)})`;
        bgCtx.fill();
      });

      bgAnimRef.current = requestAnimationFrame(drawBg);
    };

    drawBg();

    const ro = new ResizeObserver(() => {
      W = bg.width = bg.offsetWidth;
      H = bg.height = bg.offsetHeight;
      dust.forEach((d) => {
        d.x = Math.random() * W;
        d.y = Math.random() * H;
      });
    });
    ro.observe(bg);

    return () => {
      cancelAnimationFrame(bgAnimRef.current);
      ro.disconnect();
    };
  }, []);

  // Main particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const gCanvas = glowCanvasRef.current;
    if (!canvas || !gCanvas) return;
    const ctx = canvas.getContext('2d');
    const gCtx = gCanvas.getContext('2d');
    if (!ctx || !gCtx) return;

    let W = (canvas.width = gCanvas.width = canvas.offsetWidth);
    let H = (canvas.height = gCanvas.height = canvas.offsetHeight);
    let glowRendered = false;
    let totalPts = 0;

    buildParticles(W, H);
    totalPts = particlesRef.current.length;

    const renderGlow = () => {
      gCtx.clearRect(0, 0, W, H);
      particlesRef.current.forEach((p) => {
        const g = gCtx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        g.addColorStop(0, `hsla(${p.hue},${p.sat}%,${p.lit + 15}%,0.1)`);
        g.addColorStop(0.5, `hsla(${p.hue},${p.sat}%,${p.lit}%,0.05)`);
        g.addColorStop(1, 'transparent');
        gCtx.beginPath();
        gCtx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        gCtx.fillStyle = g;
        gCtx.fill();
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const now = performance.now();
      const { x: mx, y: my } = mouseRef.current;
      let settled = 0;

      particlesRef.current.forEach((p) => {
        if (now < p.delay) {
          p.x += p.vx * 0.2;
          p.y += p.vy * 0.2;
        } else {
          const dx = p.tx - p.x;
          const dy = p.ty - p.y;
          p.vx += dx * 0.1;
          p.vy += dy * 0.1;

          const mdx = p.x - mx;
          const mdy = p.y - my;
          const md = Math.sqrt(mdx * mdx + mdy * mdy);
          const R = 42;
          if (md < R && md > 0) {
            const s = (1 - md / R) * 5.5;
            p.vx += (mdx / md) * s;
            p.vy += (mdy / md) * s;
          }

          p.vx *= 0.78;
          p.vy *= 0.78;
          p.x += p.vx;
          p.y += p.vy;
          p.settled =
            Math.sqrt(dx * dx + dy * dy) < 0.8 && Math.abs(p.vx) < 0.25 && Math.abs(p.vy) < 0.25;
        }

        if (p.settled) settled++;
        const alpha = p.settled ? 0.93 : 0.6;
        const sz = p.settled ? p.size * 1.1 : p.size;

        ctx.beginPath();
        ctx.arc(p.x, p.y, sz, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},${p.sat}%,${p.lit}%,${alpha})`;
        ctx.shadowBlur = p.settled ? 7 : 2;
        ctx.shadowColor = `hsla(${p.hue},${p.sat}%,${p.lit + 15}%,0.9)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      const allSettled = settled >= totalPts * 0.98 && totalPts > 0;
      if (allSettled && !glowRendered) {
        renderGlow();
        glowRendered = true;
      }
      if (allSettled && glowRendered) {
        ctx.globalAlpha = 0.45;
        ctx.drawImage(gCanvas, 0, 0);
        ctx.globalAlpha = 1;
      }
      if (!allSettled) glowRendered = false;

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    const ro = new ResizeObserver(() => {
      W = canvas.width = gCanvas.width = canvas.offsetWidth;
      H = canvas.height = gCanvas.height = canvas.offsetHeight;
      glowRendered = false;
      buildParticles(W, H);
      totalPts = particlesRef.current.length;
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, [buildParticles]);

  const explode = useCallback(() => {
    particlesRef.current.forEach((p) => {
      p.vx = (Math.random() - 0.5) * 32;
      p.vy = (Math.random() - 0.5) * 32;
      p.settled = false;
      p.delay = performance.now() + 400 + Math.random() * 1600;
    });
    const g = glowCanvasRef.current;
    if (g) {
      const gCtx = g.getContext('2d');
      if (gCtx) gCtx.clearRect(0, 0, g.width, g.height);
    }
  }, []);

  return (
    <div
      onMouseMove={(e) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const r = canvas.getBoundingClientRect();
        const pos = { x: e.clientX - r.left, y: e.clientY - r.top };
        mouseRef.current = pos;
        setMxy(pos);
      }}
      onTouchMove={(e) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const r = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        const pos = { x: touch.clientX - r.left, y: touch.clientY - r.top };
        mouseRef.current = pos;
      }}
      onMouseLeave={() => {
        mouseRef.current = { x: -9999, y: -9999 };
        setMxy({ x: -9999, y: -9999 });
      }}
      onClick={explode}
      role="presentation"
      className="absolute inset-0 overflow-hidden"
      style={{ background: '#04040c', cursor: 'none' }}
    >
      <canvas ref={bgCanvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
      <canvas ref={glowCanvasRef} style={{ display: 'none' }} aria-hidden="true" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />

      {/* Custom cursor */}
      {mxy.x > 0 && (
        <div
          className="pointer-events-none absolute z-20"
          style={{
            left: mxy.x,
            top: mxy.y,
            width: 20,
            height: 20,
            borderRadius: '50%',
            border: '1.5px solid rgba(0,212,255,0.65)',
            transform: 'translate(-50%,-50%)',
            boxShadow: '0 0 10px rgba(0,200,255,0.25)',
          }}
        >
          <div
            className="absolute rounded-full"
            style={{
              inset: 5,
              background: 'rgba(0,200,255,0.2)',
            }}
          />
        </div>
      )}

      {/* Hint text */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-4 pointer-events-none z-10 whitespace-nowrap font-mono tracking-[0.2em] uppercase"
        style={{
          fontSize: '0.78rem',
          color: 'rgba(0,200,255,0.55)',
          textShadow: '0 0 8px rgba(0,200,255,0.3)',
        }}
      >
        Move to repel · Click to explode
      </div>
    </div>
  );
};

export default ParticleBackground;
