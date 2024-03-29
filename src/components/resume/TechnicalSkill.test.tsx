import React from 'react';
import { shallow } from 'enzyme';
import { TechnicalSkills } from './';

describe('TechnicalSkills', () => {
  test('renders TechnicalSkills', () => {
    let wrapper = shallow(<TechnicalSkills />)

    let sectionHeader = wrapper.find('SectionHeader')
    expect(sectionHeader).toHaveProp('headingText', 'TECHNICAL SKILLS/TOOLS')

    let columns = wrapper.find('div.col-md-4')
    expect(columns).toHaveLength(2)

    let bullets = wrapper.find('li')
    expect(bullets).toHaveLength(11)
  });
});
