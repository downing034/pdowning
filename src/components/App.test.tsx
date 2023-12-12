import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';

describe('App', () => {
  test('renders app', () => {
    let wrapper = shallow(<App />)

    let profile = wrapper.find('Profile');
    expect(profile).toHaveLength(1);

    let about = wrapper.find('About');
    expect(about).toHaveLength(1);

    let portfolio = wrapper.find('Portfolio');
    expect(portfolio).toHaveLength(1);

    let resume = wrapper.find('Resume');
    expect(resume).toHaveLength(1);

    let contact = wrapper.find('Contact');
    expect(contact).toHaveLength(1);
  });
});
