import React from 'react';
import { shallow } from 'enzyme';
import { NavbarLink } from './';
import { NavbarLinkProps } from './NavbarLink';

describe('NavbarLink', () => {
  const props: NavbarLinkProps = {
    linkText: 'wolfcola',
    href: 'wolfcola/bark'
  }

  test('renders NavbarLink', () => {
    let wrapper = shallow(<NavbarLink {...props} />)
    expect(wrapper).toHaveLength(1)

    let link = wrapper.find('a')
    expect(link).toHaveProp('href', 'wolfcola/bark')
    expect(link).toHaveText('wolfcola')
  });
});
