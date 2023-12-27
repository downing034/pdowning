import React from 'react';
import { shallow } from "enzyme";
import Profile from './Profile';

describe('Profile', () => {
  test('renders Profile with image', () => {
    let wrapper = shallow(<Profile />)

    let name = wrapper.find('.nameplate')
    expect(name.text()).toBe('Paul Downing')

    let title = wrapper.find('.subplate-text')
    expect(title.text()).toBe('—— Sr. Software Engineer II ——')

    let profilePhoto = wrapper.find('ProfilePhoto');
    expect(profilePhoto).toHaveLength(1)
  });
});
