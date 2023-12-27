import React from 'react';
import { shallow } from "enzyme";
import { ACTIVE_PROJECTS } from 'constants/index';
import PortfolioItem, { PortfolioItemProps } from './PortfolioItem';

describe('PortfolioItem', () => {
  let props: PortfolioItemProps = {
    project: ACTIVE_PROJECTS[0],
  }

  test('renders PortfolioItem with site url and github url', () => {
    let wrapper = shallow(<PortfolioItem {...props} />);

    let icon = wrapper.find('.portfolio-icon')
    expect(icon).toHaveProp('src', 'logoTransparent.png')
    expect(icon).toHaveProp('alt', 'Site Logo')

    let description = wrapper.find('.portfolio-item-hover-description')
    expect(description.text()).toBe('This. Very. Site.')

    let githubLink = wrapper.find('a#github')
    expect(githubLink).toHaveProp('href', 'https://github.com/downing034/pdowning')
    expect(githubLink.text()).toBe('VIEW CODE')

    let siteLink = wrapper.find('a#site')
    expect(siteLink).toHaveProp('href', 'https://home.pdowning.com')
    expect(siteLink.text()).toBe('VIEW SITE')
  });

  test('renders PortfolioItem with coming soon site url', () => {
    props = { project: ACTIVE_PROJECTS[2] };

    let wrapper = shallow(<PortfolioItem {...props} />);

    let icon = wrapper.find('.portfolio-icon')
    expect(icon).toHaveProp('src', 'sportsBoard.png')
    expect(icon).toHaveProp('alt', 'Sports Board')

    let description = wrapper.find('.portfolio-item-hover-description')
    expect(description.text()).toBe('A personalized view of my favorite sports teams')

    let githubLink = wrapper.find('a#github')
    expect(githubLink).toHaveProp('href', 'https://github.com/downing034/sports-board')
    expect(githubLink.text()).toBe('VIEW CODE')

    let siteLink = wrapper.find('div.soon-text')
    expect(siteLink.text()).toBe('Coming soon...')
  });
});
