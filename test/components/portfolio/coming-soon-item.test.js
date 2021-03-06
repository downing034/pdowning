import React from 'react';
import { shallow } from 'enzyme';
import ComingSoonPortfolioItem from 'components/portfolio/coming-soon-item';

describe('ComingSoonPortfolioItem', () => {
  let props = {
    image: 'dog.png',
    altText: 'DOG',
    description: 'it is a dog'
  }

  it('renders ComingSoonPortfolioItem', () => {
    let wrapper = shallow(<ComingSoonPortfolioItem {...props} />)
    expect(wrapper).toHaveClassName('box')

    let icon = wrapper.find('img')
    expect(icon).toHaveClassName('portfolio-icon')
    expect(icon).toHaveProp('src', 'dog.png')
    expect(icon).toHaveProp('alt', 'DOG')

    let middleDescription = wrapper.find('div.middle1')
    expect(middleDescription).toHaveText('it is a dog')

    let comingSoon = wrapper.find('div.soon-text')
    expect(comingSoon).toHaveText('Coming soon...')
  });
});
