import React from 'react';
import { Abilities } from 'constants/types';
import Ability from './Ability';
import 'styles/ability.css';

export interface AbilitySectionProps {
  header: string;
  abilities: Abilities;
};

const AbilitySection = ({ header, abilities }: AbilitySectionProps) => {
  return (
    <div className="abilities-section-wrapper">
      <h5 className="ability-header">{header}</h5>
      {
        abilities.map((ability, index) =>
          <Ability key={index} ability={ability} />
        )
      }
    </div>
  )
};

export default AbilitySection;