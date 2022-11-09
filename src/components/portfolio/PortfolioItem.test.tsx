import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { PortfolioItem } from './';
import { PortfolioItemProps } from './PortfolioItem';

describe('PortfolioItem', () => {
  let props: PortfolioItemProps = {
    image: 'dog.png',
    altText: 'DOG',
    description: 'it is a dog',
    githubUrl: 'github.example.com',
    siteUrl: 'example.com'
  }

  test('renders PortfolioItem with site url and github url', () => {
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

  test('renders PortfolioItem without site url', () => {
    props = { ...props, siteUrl: undefined };

    let wrapper = shallow(<PortfolioItem {...props} />)
    expect(wrapper.find('a#site')).not.toExist();
  });

  test('renders PortfolioItem without github url', () => {
    props = { ...props, githubUrl: undefined };

    let wrapper = shallow(<PortfolioItem {...props} />)
    expect(wrapper.find('a#github')).not.toExist();
  });
});
