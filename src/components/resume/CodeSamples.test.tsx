import React from 'react';
import { shallow } from 'enzyme';
import { CodeSamples } from './';

describe('CodeSamples', () => {
  test('renders CodeSamples', () => {
    let wrapper = shallow(<CodeSamples />)

    let sectionHeader = wrapper.find('SectionHeader')
    expect(sectionHeader).toHaveProp('headingText', 'CODING SAMPLES')

    let codingSamples = wrapper.find('CodeSampleItem')
    expect(codingSamples).toHaveLength(3)
  });
});
