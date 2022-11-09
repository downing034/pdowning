import React from 'react';
import { shallow } from 'enzyme';
import { EmptyItem } from 'components/portfolio';

describe('EmptyPortfolioItem', () => {
  test('renders EmptyPortfolioItem', () => {
    let wrapper = shallow(<EmptyItem />)
    expect(wrapper).toHaveLength(1)
    expect(wrapper).toHaveClassName('box white-box')
  });
});
