import React from 'react';
import { shallow } from 'enzyme';
import NavbarLink from 'components/navbar/navbar-link';

describe('NavbarLink', () => {
  const props = {
    linkText: 'wolfcola',
    href: 'wolfcola/bark'
  }

  it('renders NavbarLink', () => {
    let wrapper = shallow(<NavbarLink {...props} />)
    expect(wrapper).toHaveLength(1)

    let link = wrapper.find('a')
    expect(link).toHaveProp('href', 'wolfcola/bark')
    expect(link).toHaveText('wolfcola')
  });
});
