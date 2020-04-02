import React from 'react';
import { shallow } from 'enzyme';
import SectionDivider from 'components/resume/section-divider';

describe('SectionDivider', () => {
  it('renders SectionDivider', () => {
    let wrapper = shallow(<SectionDivider />)
    expect(wrapper).toHaveLength(1)
    expect(wrapper).toHaveClassName('black-bar')
  });
});
