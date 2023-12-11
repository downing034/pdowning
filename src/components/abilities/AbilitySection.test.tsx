import React from 'react';
import { Ability as AbilityType, Abilities } from '../../constants/types';
import { shallow } from 'enzyme';
import AbilitySection, { AbilitySectionProps } from './AbilitySection';

describe('AbilitySection', () => {

  const abilityOne: AbilityType = { name: 'ruby', skillLevel: 4 };
  const abilityTwo: AbilityType = { name: 'rails', skillLevel: 4 };
  const abilities: Abilities = [abilityOne, abilityTwo];

  const props: AbilitySectionProps = {
    header: 'Coding',
    abilities
  }

  test('renders AbilitySection', () => {
    let wrapper = shallow(<AbilitySection {...props} />)

    let header = wrapper.find('.ability-header');
    expect(header.text()).toBe('Coding');

    let ratingSection = wrapper.find('Ability');
    expect(ratingSection).toHaveLength(2);
  });
});