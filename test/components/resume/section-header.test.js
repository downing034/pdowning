import React from 'react';
import { shallow } from 'enzyme';
import SectionHeader from 'components/resume/section-header';

describe('SectionHeader', () => {
  let props = { headingText: 'Freak Flag' }

  it('renders SectionHeader', () => {
    let wrapper = shallow(<SectionHeader {...props} />)
    expect(wrapper).toHaveLength(1)

    let sectionHeading = wrapper.find('SectionHeading')
    expect(sectionHeading).toHaveLength(1)
    expect(sectionHeading).toHaveProp('headingText', 'Freak Flag')

    let sectionDivider = wrapper.find('SectionDivider')
    expect(sectionDivider).toHaveLength(1)
  });
});
