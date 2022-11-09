import React from 'react';
import { shallow } from 'enzyme';
import { ProfilePhoto } from './';

describe('ProfilePhoto', () => {
  test('renders ProfilePhoto', () => {
    let wrapper = shallow(<ProfilePhoto />)
    expect(wrapper).toHaveDisplayName('img')
    expect(wrapper).toHaveClassName('profile-photo')
    expect(wrapper).toHaveProp('src', 'paul.jpg')
  });
});
