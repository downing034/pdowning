import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';

describe('App', () => {
  test('renders app', () => {
    let wrapper = shallow(<App />)
    expect(wrapper).toHaveClassName('App')

    let navbar = wrapper.find('Navbar');
    expect(navbar).toHaveLength(1);
  });
});
