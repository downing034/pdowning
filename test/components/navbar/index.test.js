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

  it('listenScrollEvent when scrolly < 360', () => {
    let wrapper = shallow(<Navbar />)
    expect(wrapper).toHaveState('navbarClasses', 'navbar-no-color')
    window.scrollY = 200

    let e = {}
    wrapper.instance().listenScrollEvent(e);
    expect(wrapper).toHaveState('navbarClasses', 'navbar-no-color')
  });

  it('listenScrollEvent when scrolly > 360', () => {
    let wrapper = shallow(<Navbar />)
    expect(wrapper).toHaveState('navbarClasses', 'navbar-no-color')
    window.scrollY = 500

    let e = {}
    wrapper.instance().listenScrollEvent(e);
    expect(wrapper).toHaveState('navbarClasses', 'navbar-darken')
  });
});
