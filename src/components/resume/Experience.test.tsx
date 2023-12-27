import React from 'react';
import { shallow } from 'enzyme';

import { Experience } from './';

describe('Experience', () => {
  test('renders Experience', () => {
    let wrapper = shallow(<Experience />)

    let sectionHeader = wrapper.find('SectionHeader')
    expect(sectionHeader).toHaveProp('headingText', 'EXPERIENCE')

    let paddingContainer = wrapper.find('PaddingContainer')
    expect(paddingContainer).toHaveLength(1)

    let experiences = wrapper.find('ExperienceItem')
    expect(experiences).toHaveLength(5)
  })

});
