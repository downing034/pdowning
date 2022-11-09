import React from 'react';
import { shallow } from 'enzyme';
import { HeaderDivider } from './';

describe('HeaderDivider', () => {
  test('renders HeaderDivider', () => {
    let wrapper = shallow(<HeaderDivider />)
    expect(wrapper).toHaveLength(1)
    expect(wrapper).toHaveClassName('bold-bar')
  });
});
