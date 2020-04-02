import React from 'react';
import { shallow } from 'enzyme';
import PortfolioItem from 'components/portfolio/portfolio-item';

describe('PortfolioItem', () => {
  let props = {
    image: 'dog.png',
    altText: 'DOG',
    description: 'it is a dog',
    githubUrl: 'github.example.com',
    siteUrl: 'example.com'
  }

  it('renders PortfolioItem', () => {
    let wrapper = shallow(<PortfolioItem {...props} />)
    expect(wrapper).toHaveClassName('box')

    let icon = wrapper.find('img')
    expect(icon).toHaveClassName('portfolio-icon')
    expect(icon).toHaveProp('src', 'dog.png')
    expect(icon).toHaveProp('alt', 'DOG')

    let middleDescription = wrapper.find('div.middle1')
    let subDiv = middleDescription.childAt(0)
    expect(subDiv).toHaveText('it is a dog')

    let githubLink = wrapper.find('a#github')
    expect(githubLink).toHaveProp('href', 'github.example.com')
    expect(githubLink).toHaveText('VIEW CODE')

    let siteLink = wrapper.find('a#site')
    expect(siteLink).toHaveProp('href', 'example.com')
    expect(siteLink).toHaveText('VIEW SITE')
  });
});
