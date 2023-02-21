import React from 'react';
import { shallow } from 'enzyme';
import { Contact } from './';

describe('contact', () => {
  test('renders with anchor point', () => {
    let wrapper = shallow(<Contact />)
    expect(wrapper).toHaveDisplayName('ScrollableAnchor')
    expect(wrapper).toHaveProp('id', 'contact')

    let linkedIn = wrapper.find('img#linkedin')
    expect(linkedIn).toHaveProp('src', 'linkedin.png')

    let emailLink = wrapper.find('a#email-link')
    expect(emailLink).toHaveProp('href', 'mailto:downing034@gmail.com?subject=Resume%20Inquiry')

    let gmail = wrapper.find('img#email')
    expect(gmail).toHaveProp('src', 'email.png')

    let copywrite = wrapper.find('div#copywrite')
    expect(copywrite).toHaveText('© 2023 Paul Downing. All rights reserved.')
  });
});
