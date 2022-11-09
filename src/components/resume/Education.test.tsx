import React from 'react';
import { shallow } from 'enzyme';
import { Education } from './';

describe('Education', () => {
  test('renders Education', () => {
    let wrapper = shallow(<Education />)

    let sectionHeader = wrapper.find('SectionHeader')
    expect(sectionHeader).toHaveProp('headingText', 'EDUCATION')

    let paddingContainer = wrapper.find('PaddingContainer')
    expect(paddingContainer).toHaveLength(1)
  });
});
