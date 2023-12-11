import React from 'react';
import { Ability as AbilityType } from '../../constants/types';
import { shallow } from 'enzyme';
import { Ability } from './';

describe('Ability', () => {
  const ability: AbilityType = { name: 'ruby on rails', skillLevel: 4 };
  test('renders Ability', () => {
    let wrapper = shallow(<Ability ability={ability} />)

    let abilityName = wrapper.find('small.ability-name');
    expect(abilityName.text()).toBe('ruby on rails');

    let ratingSection = wrapper.find('Rating');
    expect(ratingSection).toHaveLength(1);
  });
});