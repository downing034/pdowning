import React from 'react';
import { shallow } from 'enzyme';
import Education from 'components/resume/education';

describe('Education', () => {
  it('renders Education', () => {
    let wrapper = shallow(<Education />)

    let sectionHeader = wrapper.find('SectionHeader')
    expect(sectionHeader).toHaveProp('headingText', 'EDUCATION')

    let paddingContainer = wrapper.find('PaddingContainer')
    expect(paddingContainer).toHaveLength(1)
  });
});
