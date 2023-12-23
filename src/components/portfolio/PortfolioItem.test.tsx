import React from 'react';
import { mount } from "enzyme";
import { ACTIVE_PROJECTS } from 'constants/index';
import PortfolioItem, { PortfolioItemProps } from './PortfolioItem';

describe('PortfolioItem', () => {

  let props: PortfolioItemProps = {
    project: ACTIVE_PROJECTS[0],
  }

  // todo: fix mount not playing well with typescript
  test.skip('renders PortfolioItem with site url and github url', () => {
    let wrapper = mount(<PortfolioItem {...props} />);

    let icon = wrapper.find('img')
    expect(icon).toHaveClassName('portfolio-icon')
    expect(icon).toHaveProp('src', 'dog.png')
    expect(icon).toHaveProp('alt', 'DOG')

    let middleDescription = wrapper.find('div.middle1')
    let subDiv = middleDescription.childAt(0)
    expect(subDiv.text()).toBe('it is a dog')

    let githubLink = wrapper.find('a#github')
    expect(githubLink).toHaveProp('href', 'github.example.com')
    expect(githubLink.text()).toBe('VIEW CODE')

    let siteLink = wrapper.find('a#site')
    expect(siteLink).toHaveProp('href', 'example.com')
    expect(siteLink.text()).toBe('VIEW SITE')
  });
});
