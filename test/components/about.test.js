import React from 'react';
import { shallow } from 'enzyme';
import About from 'components/about';

describe('about', () => {
  it('renders about with anchor point', () => {
    let wrapper = shallow(<About />)
    expect(wrapper).toHaveDisplayName('ScrollableAnchor')
    expect(wrapper).toHaveProp('id', 'about')

    let dogPhoto = wrapper.find('img')
    expect(dogPhoto).toHaveClassName('potato')
    expect(dogPhoto).toHaveProp('src', 'potato.jpg')
  });
});
