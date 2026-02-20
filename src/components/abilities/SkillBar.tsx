import React from 'react';
import { motion } from 'framer-motion';

const LEVEL_LABELS: Record<number, string> = {
  5: 'Expert',
  4: 'Advanced',
  3: 'Proficient',
  2: 'Familiar',
  1: 'Exploring',
};

interface SkillBarProps {
  name: string;
  level: number;
  animate: boolean;
  delay?: number;
}

const SkillBar = ({ name, level, animate, delay = 0 }: SkillBarProps) => {
  const percentage = (level / 5) * 100;

  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-white/70 group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-xs text-white/30 group-hover:text-primary-light transition-colors">
          {LEVEL_LABELS[level]}
        </span>
      </div>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={animate ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light"
        />
      </div>
    </div>
  );
};

export default SkillBar;
