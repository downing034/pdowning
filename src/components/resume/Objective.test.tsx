import React from 'react';
import { shallow } from 'enzyme';
import { Objective } from './';

describe('Objective', () => {
  test('renders Objective', () => {
    let wrapper = shallow(<Objective />)

    let sectionHeader = wrapper.find('SectionHeader')
    expect(sectionHeader).toHaveProp('headingText', 'OBJECTIVE')

    let paddingContainer = wrapper.find('PaddingContainer')
    expect(paddingContainer).toHaveLength(1)

    let text = wrapper.find('p')
    expect(text).toHaveLength(1)
  });
});
