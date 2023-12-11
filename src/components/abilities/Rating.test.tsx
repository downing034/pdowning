import React from 'react';
import { shallow } from 'enzyme';
import { Rating } from './';

describe('Rating', () => {
  
  test('renders Rating', () => {
    let wrapper = shallow(<Rating skillLevel={4} />)

    let totalStars = wrapper.find('FontAwesomeIcon')
    expect(totalStars).toHaveLength(5)
  });
});