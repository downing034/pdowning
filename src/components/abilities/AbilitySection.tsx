import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Abilities as AbilitiesType } from 'constants/types';
import SkillBar from './SkillBar';

export interface AbilitySectionProps {
  header: string;
  abilities: AbilitiesType;
  delay?: number;
}

const AbilitySection = ({ header, abilities, delay = 0 }: AbilitySectionProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 rounded-full bg-primary" />
        <h3 className="text-white font-semibold text-lg">{header}</h3>
      </div>

      <div className="space-y-3">
        {abilities.map((ability, index) => (
          <SkillBar
            key={ability.name}
            name={ability.name}
            level={ability.skillLevel}
            animate={inView}
            delay={delay + index * 0.05}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default AbilitySection;
