import React from 'react';
import { Ability as AbilityType } from 'constants/types';
import { Rating } from 'components/abilities';

export interface AbilityProps {
  ability: AbilityType;
};

const Ability = ({ ability }: AbilityProps) => {

  return (
    <div className="ability-section-item-container">
      <small className="ability-name">{ability.name}</small>

      <div className="rating-wrapper">
        <Rating skillLevel={ability.skillLevel} />
      </div>
      
    </div>
  )
};

export default Ability;