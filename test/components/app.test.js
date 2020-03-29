import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/app';

describe('App', () => {
  it('renders app', () => {
    let wrapper = shallow(<App />)
    expect(wrapper).toHaveClassName('App')
  });
});
