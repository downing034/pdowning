import React from 'react';
import { shallow } from 'enzyme';
import Navbar from 'components/navbar/index';

describe('Navbar index', () => {
  it('renders Navbar with NavbarLinks', () => {
    let wrapper = shallow(<Navbar />)
    expect(wrapper).toHaveLength(1)
    expect(wrapper).toHaveClassName('navbar fixed-top')

    let navbarLinks = wrapper.find('NavbarLink')
    expect(navbarLinks).toHaveLength(4)
  });
});
