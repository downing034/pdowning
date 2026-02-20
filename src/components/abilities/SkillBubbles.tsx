/* eslint-disable react-hooks/refs -- legacy unused component, ref access during render is acceptable */
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ability } from 'constants/types';

interface SkillGroup {
  name: string;
  color: string;
  skills: Ability[];
}

interface Bubble {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  skill: Ability;
  group: string;
  color: string;
  targetX: number;
  targetY: number;
}

interface SkillBubblesProps {
  groups: SkillGroup[];
}

const LEVEL_LABELS: Record<number, string> = {
  5: 'Expert',
  4: 'Advanced',
  3: 'Proficient',
  2: 'Familiar',
  1: 'Exploring',
};

/**
 * Parse "rgb(r, g, b)" into [r, g, b]
 */
const parseColor = (color: string): [number, number, number] => {
  const match = color.match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
  if (match) return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
  return [191, 87, 0];
};

const SkillBubbles = ({ groups }: SkillBubblesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const hoveredRef = useRef<Bubble | null>(null);
  const [hovered, setHovered] = useState<{
    skill: Ability;
    group: string;
    x: number;
    y: number;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef(0);

  const getRadius = useCallback((level: number, baseSize: number) => {
    const minR = baseSize * 0.45;
    const maxR = baseSize * 0.95;
    return minR + ((level - 1) / 4) * (maxR - minR);
  }, []);

  const initBubbles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const container = containerRef.current;
    if (!container) return;
    const w = container.clientWidth;
    const h = container.clientHeight;

    const totalSkills = groups.reduce((sum, g) => sum + g.skills.length, 0);
    const baseSize = Math.min(w, h) / (Math.sqrt(totalSkills) * 2.8);

    const cols = groups.length <= 3 ? groups.length : Math.min(groups.length, w > 600 ? 4 : 2);
    const rows = Math.ceil(groups.length / cols);
    const cellW = w / cols;
    const cellH = h / rows;

    const bubbles: Bubble[] = [];

    groups.forEach((group, gi) => {
      const col = gi % cols;
      const row = Math.floor(gi / cols);
      const centerX = cellW * col + cellW / 2;
      const centerY = cellH * row + cellH / 2 + 15; // offset for group labels

      group.skills.forEach((skill) => {
        const r = getRadius(skill.skillLevel, baseSize);
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * (Math.min(cellW, cellH) * 0.2);

        bubbles.push({
          x: centerX + Math.cos(angle) * dist,
          y: centerY + Math.sin(angle) * dist,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: r,
          skill,
          group: group.name,
          color: group.color,
          targetX: centerX,
          targetY: centerY,
        });
      });
    });

    bubblesRef.current = bubbles;
  }, [groups, getRadius]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const container = containerRef.current;
      if (!container) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = container.clientWidth * dpr;
      canvas.height = container.clientHeight * dpr;
      canvas.style.width = container.clientWidth + 'px';
      canvas.style.height = container.clientHeight + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initBubbles();
    };

    /**
     * Draw a single 3D glassy bubble
     */
    const drawBubble = (b: Bubble, isHov: boolean, time: number) => {
      const [r, g, bCol] = parseColor(b.color);
      const radius = isHov ? b.radius * 1.06 : b.radius;
      const cx = b.x;
      const cy = b.y;

      // Subtle ambient float
      const floatX = Math.sin(time * 0.8 + b.targetX * 0.01) * 0.5;
      const floatY = Math.cos(time * 1.1 + b.targetY * 0.01) * 0.5;
      const bx = cx + floatX;
      const by = cy + floatY;

      ctx.save();

      // --- Outer glow (hovered) ---
      if (isHov) {
        const glow = ctx.createRadialGradient(bx, by, radius * 0.6, bx, by, radius * 1.8);
        glow.addColorStop(0, `rgba(${r}, ${g}, ${bCol}, 0.25)`);
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.beginPath();
        ctx.arc(bx, by, radius * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      }

      // --- Drop shadow ---
      ctx.beginPath();
      ctx.arc(bx + 2, by + 3, radius * 0.92, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fill();

      // --- Main sphere body ---
      // Dark-to-light radial gradient offset to top-left for 3D depth
      const bodyGrad = ctx.createRadialGradient(
        bx - radius * 0.25,
        by - radius * 0.25,
        radius * 0.05,
        bx + radius * 0.1,
        by + radius * 0.15,
        radius,
      );
      const baseAlpha = isHov ? 0.95 : 0.8;
      // Lighter center (light hitting top-left)
      bodyGrad.addColorStop(
        0,
        `rgba(${Math.min(255, r + 80)}, ${Math.min(255, g + 60)}, ${Math.min(255, bCol + 40)}, ${baseAlpha})`,
      );
      // True color at mid
      bodyGrad.addColorStop(0.45, `rgba(${r}, ${g}, ${bCol}, ${baseAlpha * 0.9})`);
      // Darker edge (shadow side)
      bodyGrad.addColorStop(
        1,
        `rgba(${Math.max(0, r - 60)}, ${Math.max(0, g - 40)}, ${Math.max(0, bCol - 30)}, ${baseAlpha * 0.85})`,
      );

      ctx.beginPath();
      ctx.arc(bx, by, radius, 0, Math.PI * 2);
      ctx.fillStyle = bodyGrad;
      ctx.fill();

      // --- Glass rim / edge highlight ---
      const rimGrad = ctx.createRadialGradient(bx, by, radius * 0.85, bx, by, radius);
      rimGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
      rimGrad.addColorStop(0.7, 'rgba(255, 255, 255, 0)');
      rimGrad.addColorStop(0.88, `rgba(255, 255, 255, ${isHov ? 0.15 : 0.08})`);
      rimGrad.addColorStop(1, `rgba(255, 255, 255, ${isHov ? 0.25 : 0.12})`);
      ctx.beginPath();
      ctx.arc(bx, by, radius, 0, Math.PI * 2);
      ctx.fillStyle = rimGrad;
      ctx.fill();

      // --- Specular highlight (top-left crescent) ---
      ctx.save();
      const hlX = bx - radius * 0.3;
      const hlY = by - radius * 0.32;
      const hlR = radius * 0.55;

      const specGrad = ctx.createRadialGradient(hlX, hlY, 0, hlX, hlY, hlR);
      specGrad.addColorStop(0, `rgba(255, 255, 255, ${isHov ? 0.55 : 0.35})`);
      specGrad.addColorStop(0.4, `rgba(255, 255, 255, ${isHov ? 0.2 : 0.1})`);
      specGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.beginPath();
      ctx.ellipse(hlX, hlY, hlR, hlR * 0.65, -0.5, 0, Math.PI * 2);
      ctx.fillStyle = specGrad;
      ctx.fill();
      ctx.restore();

      // --- Small secondary specular (bottom-right refraction) ---
      const hl2X = bx + radius * 0.25;
      const hl2Y = by + radius * 0.28;
      const hl2R = radius * 0.15;
      const spec2Grad = ctx.createRadialGradient(hl2X, hl2Y, 0, hl2X, hl2Y, hl2R);
      spec2Grad.addColorStop(0, `rgba(255, 255, 255, ${isHov ? 0.25 : 0.12})`);
      spec2Grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.beginPath();
      ctx.arc(hl2X, hl2Y, hl2R, 0, Math.PI * 2);
      ctx.fillStyle = spec2Grad;
      ctx.fill();

      // --- Subtle inner shadow at bottom ---
      const innerShadow = ctx.createRadialGradient(
        bx,
        by + radius * 0.3,
        radius * 0.5,
        bx,
        by,
        radius,
      );
      innerShadow.addColorStop(0, 'rgba(0, 0, 0, 0)');
      innerShadow.addColorStop(0.7, 'rgba(0, 0, 0, 0)');
      innerShadow.addColorStop(1, `rgba(0, 0, 0, ${isHov ? 0.15 : 0.1})`);
      ctx.beginPath();
      ctx.arc(bx, by, radius, 0, Math.PI * 2);
      ctx.fillStyle = innerShadow;
      ctx.fill();

      // --- Border ---
      ctx.beginPath();
      ctx.arc(bx, by, radius, 0, Math.PI * 2);
      ctx.strokeStyle = isHov ? `rgba(255, 255, 255, 0.35)` : `rgba(255, 255, 255, 0.06)`;
      ctx.lineWidth = isHov ? 1.5 : 0.5;
      ctx.stroke();

      // --- Text label ---
      const fontSize = Math.max(8, radius * 0.32);
      ctx.font = `600 ${fontSize}px Inter, system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Text shadow for readability
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      const words = b.skill.name.split(/[\s/]+/);
      const textWidth = ctx.measureText(b.skill.name).width;

      if (words.length > 1 && textWidth > radius * 1.5) {
        const lineHeight = fontSize * 1.2;
        const lines: string[] = [];
        let currentLine = '';
        for (const word of words) {
          const test = currentLine ? `${currentLine} ${word}` : word;
          if (ctx.measureText(test).width > radius * 1.5 && currentLine) {
            lines.push(currentLine);
            currentLine = word;
          } else {
            currentLine = test;
          }
        }
        if (currentLine) lines.push(currentLine);

        const startY = by - ((lines.length - 1) * lineHeight) / 2;
        // Shadow pass
        lines.forEach((line, li) => {
          ctx.fillText(line, bx + 0.5, startY + li * lineHeight + 0.5);
        });
        // White text pass
        ctx.fillStyle = isHov ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.92)';
        lines.forEach((line, li) => {
          ctx.fillText(line, bx, startY + li * lineHeight);
        });
      } else {
        ctx.fillText(b.skill.name, bx + 0.5, by + 0.5);
        ctx.fillStyle = isHov ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.92)';
        ctx.fillText(b.skill.name, bx, by);
      }

      ctx.restore();
    };

    const draw = () => {
      timeRef.current += 0.016;
      const time = timeRef.current;
      const w = containerRef.current?.clientWidth || canvas.width;
      const h = containerRef.current?.clientHeight || canvas.height;
      ctx.clearRect(0, 0, w, h);

      const bubbles = bubblesRef.current;
      const mouse = mouseRef.current;
      let newHovered: Bubble | null = null;

      // --- Physics simulation ---
      // Multiple iterations for stable collision resolution
      for (let iter = 0; iter < 3; iter++) {
        for (let i = 0; i < bubbles.length; i++) {
          const b = bubbles[i];

          if (iter === 0) {
            // Spring force toward group center (only once)
            const dx = b.targetX - b.x;
            const dy = b.targetY - b.y;
            b.vx += dx * 0.002;
            b.vy += dy * 0.002;

            // Mouse interaction
            const mdx = b.x - mouse.x;
            const mdy = b.y - mouse.y;
            const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

            if (mDist < b.radius + 80 && mDist > 0) {
              const force = ((b.radius + 80 - mDist) / (b.radius + 80)) * 2;
              b.vx += (mdx / mDist) * force;
              b.vy += (mdy / mDist) * force;
            }

            if (mDist < b.radius) {
              newHovered = b;
            }
          }

          // Hard constraint: Bubble-bubble collision resolution
          for (let j = i + 1; j < bubbles.length; j++) {
            const other = bubbles[j];
            const ddx = b.x - other.x;
            const ddy = b.y - other.y;
            const dist = Math.sqrt(ddx * ddx + ddy * ddy);
            const minDist = b.radius + other.radius + 3; // 3px gap

            if (dist < minDist && dist > 0.01) {
              // Position correction — push both apart evenly
              const overlap = (minDist - dist) / 2;
              const nx = ddx / dist;
              const ny = ddy / dist;

              b.x += nx * overlap;
              b.y += ny * overlap;
              other.x -= nx * overlap;
              other.y -= ny * overlap;

              // Velocity response (elastic bounce)
              const relVelX = b.vx - other.vx;
              const relVelY = b.vy - other.vy;
              const relVelDot = relVelX * nx + relVelY * ny;

              if (relVelDot < 0) {
                b.vx -= relVelDot * nx * 0.5;
                b.vy -= relVelDot * ny * 0.5;
                other.vx += relVelDot * nx * 0.5;
                other.vy += relVelDot * ny * 0.5;
              }
            }
          }
        }
      }

      // Apply velocity and damping
      for (const b of bubbles) {
        b.x += b.vx;
        b.y += b.vy;
        b.vx *= 0.9;
        b.vy *= 0.9;

        // Wall bounds
        if (b.x - b.radius < 0) {
          b.x = b.radius;
          b.vx = Math.abs(b.vx) * 0.3;
        }
        if (b.x + b.radius > w) {
          b.x = w - b.radius;
          b.vx = -Math.abs(b.vx) * 0.3;
        }
        if (b.y - b.radius < 0) {
          b.y = b.radius;
          b.vy = Math.abs(b.vy) * 0.3;
        }
        if (b.y + b.radius > h) {
          b.y = h - b.radius;
          b.vy = -Math.abs(b.vy) * 0.3;
        }
      }

      // Update hovered state
      if (hoveredRef.current !== newHovered) {
        hoveredRef.current = newHovered;
        if (newHovered) {
          setHovered({
            skill: newHovered.skill,
            group: newHovered.group,
            x: newHovered.x,
            y: newHovered.y,
          });
        } else {
          setHovered(null);
        }
      } else if (newHovered && hoveredRef.current === newHovered) {
        // Update tooltip position to follow bubble
        setHovered({
          skill: newHovered.skill,
          group: newHovered.group,
          x: newHovered.x,
          y: newHovered.y,
        });
      }

      // --- Draw group labels first (behind bubbles) ---
      const cols = groups.length <= 3 ? groups.length : Math.min(groups.length, w > 600 ? 4 : 2);
      const rows = Math.ceil(groups.length / cols);
      const cellW = w / cols;
      const cellH = h / rows;

      ctx.font = '700 11px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.letterSpacing = '2px';
      groups.forEach((group, gi) => {
        const col = gi % cols;
        const row = Math.floor(gi / cols);
        const gx = cellW * col + cellW / 2;
        const gy = cellH * row + 18;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fillText(group.name.toUpperCase(), gx, gy);
      });

      // --- Draw bubbles (sorted: non-hovered first, hovered on top) ---
      const sorted = [...bubbles].sort((a, b_) => {
        if (a === hoveredRef.current) return 1;
        if (b_ === hoveredRef.current) return -1;
        return 0;
      });

      for (const b of sorted) {
        drawBubble(b, hoveredRef.current === b, time);
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
      hoveredRef.current = null;
      setHovered(null);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      mouseRef.current = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };
    };

    const handleTouchEnd = () => {
      mouseRef.current = { x: -1000, y: -1000 };
      hoveredRef.current = null;
      setHovered(null);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('touchend', handleTouchEnd);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, [groups, initBubbles]);

  return (
    <div ref={containerRef} className="relative w-full h-[500px] sm:h-[550px] md:h-[600px]">
      <canvas ref={canvasRef} className="w-full h-full cursor-default" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.15 }}
            className="absolute pointer-events-none z-20 px-4 py-3 rounded-xl bg-surface-light/95 backdrop-blur-md border border-white/10 shadow-2xl"
            style={{
              left: Math.min(
                Math.max(10, hovered.x - 80),
                (containerRef.current?.clientWidth || 400) - 180,
              ),
              top: Math.max(10, hovered.y - 75),
            }}
          >
            <p className="text-white font-semibold text-sm">{hovered.skill.name}</p>
            <p className="text-white/50 text-xs">{hovered.group}</p>
            <div className="flex items-center gap-1.5 mt-1.5">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className="w-3 h-3 rounded-full"
                  style={{
                    background:
                      level <= hovered.skill.skillLevel
                        ? 'linear-gradient(135deg, #FF8C38, #BF5700)'
                        : 'rgba(255, 255, 255, 0.1)',
                  }}
                />
              ))}
              <span className="text-white/40 text-xs ml-1">
                {LEVEL_LABELS[hovered.skill.skillLevel]}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillBubbles;
