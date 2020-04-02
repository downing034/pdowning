import React from 'react';
import { shallow } from 'enzyme';
import EmptyPortfolioItem from 'components/portfolio/empty-item';

describe('EmptyPortfolioItem', () => {
  it('renders EmptyPortfolioItem', () => {
    let wrapper = shallow(<EmptyPortfolioItem />)
    expect(wrapper).toHaveLength(1)
    expect(wrapper).toHaveClassName('box white-box')
  });
});
