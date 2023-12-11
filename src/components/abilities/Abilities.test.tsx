import React from 'react';
import { shallow } from 'enzyme';
import { Abilities } from './';

describe('Abilities', () => {
  test('renders Abilities', () => {
    let wrapper = shallow(<Abilities />)

    let allAbilitySections = wrapper.find('AbilitySection');
    expect(allAbilitySections).toHaveLength(5);
  });
});