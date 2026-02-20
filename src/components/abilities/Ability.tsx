import React from 'react';
import { Ability as AbilityType } from 'constants/types';
import SkillBar from './SkillBar';

export interface AbilityProps {
  ability: AbilityType;
}

const Ability = ({ ability }: AbilityProps) => {
  return <SkillBar name={ability.name} level={ability.skillLevel} animate={true} />;
};

export default Ability;
