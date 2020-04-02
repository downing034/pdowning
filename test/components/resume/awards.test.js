import React from 'react';
import { shallow } from 'enzyme';
import Awards from 'components/resume/awards';

describe('Awards', () => {
  it('renders Awards', () => {
    let wrapper = shallow(<Awards />)

    let sectionHeader = wrapper.find('SectionHeader')
    expect(sectionHeader).toHaveProp('headingText', 'AWARDS')

    let paddingContainer = wrapper.find('PaddingContainer')
    expect(paddingContainer).toHaveLength(1)
  });
});
