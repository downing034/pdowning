import React from 'react';
import { shallow } from 'enzyme';
import { Portfolio } from 'components/portfolio';

describe('Portfolio', () => {
  test('renders Portfolio', () => {
    let wrapper = shallow(<Portfolio />)
    let items = wrapper.find('PortfolioItem')
    expect(items).toHaveLength(3);
  });
});
