import React from 'react';
import { shallow } from 'enzyme';
import { SectionHeading } from './';
import { SectionHeadingProps } from './SectionHeading';

describe('SectionHeading', () => {
  const props: SectionHeadingProps = { headingText: 'DENNIS System' }
  test('renders SectionHeading', () => {
    let wrapper = shallow(<SectionHeading {...props} />)
    expect(wrapper).toHaveLength(1)
    expect(wrapper).toHaveClassName('text-center strong')
    expect(wrapper).toHaveText('DENNIS System')
  });
});
