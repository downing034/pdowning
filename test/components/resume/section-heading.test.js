import React from 'react';
import { shallow } from 'enzyme';
import SectionHeading from 'components/resume/section-heading';

describe('SectionHeading', () => {
  const props = { headingText: 'DENNIS System' }
  it('renders SectionHeading', () => {
    let wrapper = shallow(<SectionHeading {...props} />)
    expect(wrapper).toHaveLength(1)
    expect(wrapper).toHaveClassName('text-center strong')
    expect(wrapper).toHaveText('DENNIS System')
  });
});
