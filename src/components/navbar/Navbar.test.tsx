import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from './';

describe('Navbar index', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  Object.defineProperty(global.window, 'scrollY', { value: 1 });

  test('renders Navbar with NavbarLinks', () => {
    let wrapper = shallow(<Navbar />)
    expect(wrapper).toHaveLength(1)
    expect(wrapper).toHaveClassName('navbar fixed-top')

    let navbarLinks = wrapper.find('NavbarLink')
    expect(navbarLinks).toHaveLength(4)
  });

  test('listenScrollEvent when scrolly < 360', () => {
    let wrapper = shallow(<Navbar />)
    expect(wrapper).toHaveClassName('navbar-no-color')

    Object.defineProperty(global.window, 'scrollY', { value: 200 });
    expect(wrapper).toHaveClassName('navbar-no-color')
  });

  test.skip('listenScrollEvent when scrolly > 360', () => {
    let wrapper = shallow(<Navbar />)
    expect(wrapper).toHaveClassName('navbar-no-color')
    
    Object.defineProperty(global.window, 'scrollY', { value: 500 });
    expect(wrapper).toHaveClassName('navbar-darken')
  });
});
