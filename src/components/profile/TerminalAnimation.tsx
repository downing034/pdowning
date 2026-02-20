import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TerminalLine {
  prompt?: string;
  text: string;
  isOutput?: boolean;
}

const LINES: TerminalLine[] = [
  { prompt: '>', text: ' const paul = new Engineer();' },
  { prompt: '>', text: ' paul.role' },
  { text: '  "Software Engineering Manager"', isOutput: true },
  { prompt: '>', text: ' paul.location' },
  { text: '  "Denver, CO"', isOutput: true },
  { prompt: '>', text: ' paul.passion' },
  { text: '  "Building teams & shipping products"', isOutput: true },
  { prompt: '>', text: ' paul.status' },
  { text: '  "Open to opportunities"', isOutput: true },
];

const TerminalAnimation = () => {
  const [displayedLines, setDisplayedLines] = useState<
    { text: string; isOutput?: boolean; prompt?: string }[]
  >([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [started, setStarted] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Start typing only when visible in viewport
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Typing effect — only runs after started
  useEffect(() => {
    if (!started) return;
    if (currentLineIndex >= LINES.length) return;

    const line = LINES[currentLineIndex];
    const fullText = line.text;

    if (currentText.length < fullText.length) {
      const timeout = setTimeout(
        () => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        },
        line.isOutput ? 12 : 28 + Math.random() * 20,
      );
      return () => clearTimeout(timeout);
    } else {
      // Line complete, move to next
      const timeout = setTimeout(
        () => {
          setDisplayedLines((prev) => [
            ...prev,
            { text: fullText, isOutput: line.isOutput, prompt: line.prompt },
          ]);
          setCurrentText('');
          setCurrentLineIndex((prev) => prev + 1);
        },
        line.isOutput ? 60 : 180,
      );
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentLineIndex, started]);

  const currentLine = started && currentLineIndex < LINES.length ? LINES[currentLineIndex] : null;

  return (
    <motion.div
      ref={wrapperRef}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full max-w-2xl mx-auto"
    >
      {/* Terminal window */}
      <div className="rounded-xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10">
        {/* Title bar */}
        <div className="bg-[#2d2d3f] px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-1.5 sm:gap-2">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28c840]" />
          <span className="ml-2 sm:ml-3 text-xs sm:text-sm text-white/40 font-mono">
            paul@portfolio ~ %
          </span>
        </div>

        {/* Terminal body */}
        <div
          ref={terminalRef}
          className="bg-surface-light p-3 min-[480px]:p-4 sm:p-6 font-mono text-xs min-[480px]:text-sm sm:text-base md:text-lg min-h-0 sm:min-h-[280px] leading-relaxed"
        >
          {/* Already typed lines */}
          {displayedLines.map((line, i) => (
            <div
              key={i}
              className={`${line.isOutput ? 'text-primary-light mb-1.5 sm:mb-3' : 'text-white/90 mt-0.5 sm:mt-1'}`}
            >
              {line.prompt && <span className="text-primary">{line.prompt}</span>}
              {line.text}
            </div>
          ))}

          {/* Currently typing line */}
          {currentLine && (
            <div
              className={`${currentLine.isOutput ? 'text-primary-light mb-1.5 sm:mb-3' : 'text-white/90 mt-0.5 sm:mt-1'}`}
            >
              {currentLine.prompt && <span className="text-primary">{currentLine.prompt}</span>}
              {currentText}
              <span
                className={`inline-block w-2 h-4 ml-0.5 align-middle ${showCursor ? 'bg-primary' : 'bg-transparent'}`}
              />
            </div>
          )}

          {/* Blinking cursor — shows before typing starts and after it finishes */}
          {(!started || currentLineIndex >= LINES.length) && (
            <div className="text-white/90">
              <span className="text-primary">{'>'}</span>
              <span
                className={`inline-block w-2 h-4 ml-1 align-middle ${showCursor ? 'bg-primary' : 'bg-transparent'}`}
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalAnimation;
