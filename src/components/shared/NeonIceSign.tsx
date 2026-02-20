import { useEffect, useRef, useState } from 'react';

/**
 * Neon ice sign with flickering name + pull-chain light toggle.
 * Self-contained — can be dropped into any section.
 */
const NeonIceSign = () => {
  const [dimmed, setDimmed] = useState(false);
  const [pulling, setPulling] = useState(false);
  const signRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const [chainOrigin, setChainOrigin] = useState({ x: 0, y: 0 });

  // Measure the sign's bottom-right corner for chain positioning
  useEffect(() => {
    const measure = () => {
      if (!signRef.current || !sceneRef.current) return;
      const rect = signRef.current.getBoundingClientRect();
      const parentRect = sceneRef.current.getBoundingClientRect();
      setChainOrigin({
        x: rect.right - parentRect.left - 32,
        y: rect.bottom - parentRect.top,
      });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const handleChainClick = () => {
    setPulling(true);
    setTimeout(() => {
      setPulling(false);
      setDimmed((d) => !d);
    }, 380);
  };

  const CHAIN_LINKS = 9;

  return (
    <div
      ref={sceneRef}
      className="relative w-full h-full overflow-hidden flex flex-col items-center justify-center font-mono"
      style={{
        background: dimmed ? '#010305' : '#030810',
        transition: 'background 0.6s',
      }}
    >
      {/* Brick-like wall texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg,transparent,transparent 28px,rgba(0,0,0,0.35) 28px,rgba(0,0,0,0.35) 30px),repeating-linear-gradient(90deg,transparent,transparent 56px,rgba(0,0,0,0.2) 56px,rgba(0,0,0,0.2) 58px)',
          backgroundColor: dimmed ? '#040608' : '#060c16',
          opacity: 0.85,
          transition: 'background-color 0.6s',
        }}
      />

      <style>{`
        @keyframes paulIce {
          0%,17%,19%,21%,53%,57%,100%{color:#00d4ff;text-shadow:0 0 7px #00d4ff,0 0 22px #00d4ff,0 0 50px #00d4ff,0 0 90px rgba(0,212,255,0.4);}
          18%,20%{color:rgba(0,212,255,0.1);text-shadow:none;}
          55%{color:#00d4ff;text-shadow:0 0 5px #00d4ff,0 0 12px #00d4ff;}
        }
        @keyframes downingIce {
          0%,37%,41%,70%,100%{color:#ffffff;text-shadow:0 0 7px #8af0ff,0 0 22px #8af0ff,0 0 50px #8af0ff,0 0 90px rgba(138,240,255,0.4);}
          39%,40%{color:rgba(200,240,255,0.1);text-shadow:none;}
          71%,72%{color:rgba(200,240,255,0.55);text-shadow:0 0 4px #8af0ff;}
        }
        @keyframes frameIce {
          0%,9%,11%,13%,44%,46%,67%,69%,88%,90%,100%{opacity:1;}
          10%{opacity:0.08;} 12%{opacity:0.6;}
          45%{opacity:0.15;} 68%{opacity:0.4;}
          89%{opacity:0.05;}
        }
        @keyframes haloIce {
          0%,100%{opacity:0.55;transform:scale(1);}
          50%{opacity:0.8;transform:scale(1.008);}
        }
        @keyframes chainSway {
          0%,100%{transform:rotate(-2deg);} 50%{transform:rotate(2deg);}
        }
        @keyframes chainPull {
          0%{transform:rotate(-2deg) translateY(0);}
          30%{transform:rotate(5deg) translateY(20px);}
          60%{transform:rotate(-4deg) translateY(8px);}
          80%{transform:rotate(2deg) translateY(2px);}
          100%{transform:rotate(-2deg) translateY(0);}
        }
        @keyframes bulbOn {
          0%,100%{filter:drop-shadow(0 0 4px rgba(0,212,255,0.7)) drop-shadow(0 0 12px rgba(0,212,255,0.4));}
          50%{filter:drop-shadow(0 0 8px rgba(0,212,255,1)) drop-shadow(0 0 20px rgba(0,212,255,0.6));}
        }
        @keyframes bulbOff {
          0%,100%{filter:drop-shadow(0 0 2px rgba(0,212,255,0.15));}
        }
      `}</style>

      {/* Ceiling wires */}
      <div
        className="absolute top-0"
        style={{
          left: '18%',
          width: 2,
          height: '14%',
          background: 'linear-gradient(to bottom,#1a1a1a,#444)',
        }}
      />
      <div
        className="absolute top-0"
        style={{
          right: '18%',
          width: 2,
          height: '14%',
          background: 'linear-gradient(to bottom,#1a1a1a,#444)',
        }}
      />

      {/* Sign */}
      <div
        ref={signRef}
        className="relative z-10 text-center"
        style={{ padding: '1.8rem 3rem', borderRadius: 10, background: 'rgba(0,0,0,0.15)' }}
      >
        {/* Outer halo */}
        <div
          className="pointer-events-none absolute"
          style={{
            inset: -8,
            borderRadius: 18,
            border: '1px solid rgba(0,212,255,0.08)',
            boxShadow: '0 0 40px rgba(0,212,255,0.08)',
            animation: 'haloIce 3s ease-in-out infinite',
            opacity: dimmed ? 0 : 1,
            transition: 'opacity 0.6s',
          }}
        />
        {/* Neon frame */}
        <div
          className="pointer-events-none absolute"
          style={{
            inset: -3,
            borderRadius: 12,
            border: '3px solid #00d4ff',
            boxShadow: dimmed
              ? '0 0 3px rgba(0,212,255,0.15),0 0 8px rgba(0,212,255,0.08)'
              : '0 0 8px #00d4ff,0 0 22px #00d4ff,0 0 60px rgba(0,212,255,0.3),inset 0 0 18px rgba(0,212,255,0.04)',
            animation: dimmed ? 'none' : 'frameIce 7s infinite',
            opacity: dimmed ? 0.2 : 1,
            transition: 'box-shadow 0.6s, opacity 0.4s',
          }}
        />

        <span
          className="block font-serif italic leading-none"
          style={{
            fontSize: 'clamp(4rem, 11vw, 8.5rem)',
            animation: dimmed ? 'none' : 'paulIce 11s infinite',
            color: dimmed ? 'rgba(0,212,255,0.15)' : '#00d4ff',
            textShadow: dimmed ? 'none' : undefined,
            transition: 'color 0.5s',
          }}
        >
          Paul
        </span>
        <span
          className="block font-serif italic leading-none"
          style={{
            fontSize: 'clamp(4rem, 11vw, 8.5rem)',
            marginTop: '-0.1em',
            animation: dimmed ? 'none' : 'downingIce 14s infinite',
            color: dimmed ? 'rgba(200,240,255,0.12)' : '#ffffff',
            textShadow: dimmed ? 'none' : undefined,
            transition: 'color 0.5s',
          }}
        >
          Downing
        </span>

        {/* Floor reflection glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: -55,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '50%',
            height: 55,
            background: 'radial-gradient(ellipse,rgba(0,212,255,0.1) 0%,transparent 70%)',
            filter: 'blur(8px)',
            opacity: dimmed ? 0 : 1,
            transition: 'opacity 0.6s',
          }}
        />
      </div>

      {/* Chain — positioned from bottom-right corner of sign */}
      {chainOrigin.y > 0 && (
        <div
          onClick={handleChainClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleChainClick();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={dimmed ? 'Turn neon sign on' : 'Turn neon sign off'}
          className="absolute z-30 flex flex-col items-center select-none"
          style={{
            left: chainOrigin.x,
            top: chainOrigin.y,
            cursor: 'pointer',
            transformOrigin: 'top center',
            animation: pulling
              ? 'chainPull 0.38s ease-in-out'
              : 'chainSway 4s ease-in-out infinite',
          }}
        >
          {/* Chain links */}
          {Array.from({ length: CHAIN_LINKS }).map((_, i) => (
            <div
              key={i}
              style={{
                width: i % 2 === 0 ? 10 : 7,
                height: i % 2 === 0 ? 6 : 9,
                borderRadius: '50%',
                border: `1.5px solid ${dimmed ? '#2a3a4a' : '#4a7090'}`,
                background: 'transparent',
                marginBottom: 1,
                transition: 'border-color 0.5s',
                boxShadow: dimmed ? 'none' : '0 0 3px rgba(0,180,255,0.15)',
              }}
            />
          ))}
          {/* Light bulb */}
          <svg
            width="20"
            height="28"
            viewBox="0 0 20 28"
            style={{
              marginTop: 2,
              animation: dimmed
                ? 'bulbOff 2s ease-in-out infinite'
                : 'bulbOn 2s ease-in-out infinite',
            }}
          >
            {!dimmed && <ellipse cx="10" cy="13" rx="9" ry="10" fill="rgba(0,212,255,0.06)" />}
            <ellipse
              cx="10"
              cy="12"
              rx="7.5"
              ry="8.5"
              fill={dimmed ? '#0d1820' : '#0a1824'}
              stroke={dimmed ? 'rgba(0,212,255,0.2)' : '#00d4ff'}
              strokeWidth="1.2"
            />
            <rect
              x="6.5"
              y="19.5"
              width="7"
              height="5"
              rx="1.2"
              fill={dimmed ? '#0d1820' : '#112030'}
              stroke={dimmed ? 'rgba(0,212,255,0.15)' : 'rgba(0,212,255,0.45)'}
              strokeWidth="1"
            />
            {!dimmed && (
              <>
                <path
                  d="M8 17 Q10 14 12 17"
                  stroke="rgba(0,212,255,0.5)"
                  strokeWidth="0.8"
                  fill="none"
                />
                <path
                  d="M9 14 Q10 11 11 14"
                  stroke="rgba(0,212,255,0.5)"
                  strokeWidth="0.8"
                  fill="none"
                />
              </>
            )}
            {!dimmed && (
              <ellipse
                cx="7.5"
                cy="9"
                rx="2"
                ry="2.5"
                fill="rgba(255,255,255,0.15)"
                transform="rotate(-15 7.5 9)"
              />
            )}
          </svg>
          <div
            className="whitespace-nowrap font-mono uppercase"
            style={{
              fontSize: '0.36rem',
              letterSpacing: '0.12em',
              color: dimmed ? 'rgba(0,212,255,0.22)' : 'rgba(0,212,255,0.45)',
              marginTop: 3,
              transition: 'color 0.5s',
            }}
          >
            {dimmed ? '\u2191 on' : '\u2193 off'}
          </div>
        </div>
      )}

      {/* Title */}
      <div
        className="z-10 text-center uppercase"
        style={{
          marginTop: '2rem',
          fontSize: 'clamp(0.45rem, 1.2vw, 0.72rem)',
          letterSpacing: '0.45em',
          opacity: dimmed ? 0.15 : 1,
          transition: 'opacity 0.6s',
        }}
      >
        <span style={{ color: '#00d4ff', textShadow: '0 0 10px rgba(0,212,255,0.4)' }}>
          Engineering Manager
        </span>
        <span style={{ color: 'rgba(255,255,255,0.18)', margin: '0 0.5em' }}>·</span>
        <span style={{ color: '#8af0ff', textShadow: '0 0 10px rgba(138,240,255,0.4)' }}>
          Senior Engineer
        </span>
      </div>
    </div>
  );
};

export default NeonIceSign;
