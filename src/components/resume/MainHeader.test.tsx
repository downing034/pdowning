import React from 'react';
import { shallow } from 'enzyme';
import { MainHeader } from './';

describe('MainHeader', () => {
  test('renders MainHeader', () => {
    let wrapper = shallow(<MainHeader />)
    let contact = wrapper.find('li')
    expect(contact).toHaveText('PLEASE REACH OUT FOR ADDITIONAL CONTACT INFORMATION: downing034@gmail.com')

    let divider = wrapper.find('HeaderDivider')
    expect(divider).toHaveLength(1)

    let namePlate = wrapper.find('h1')
    expect(namePlate).toHaveText('PAUL WILLIAM DOWNING')
  });
});
