import React from 'react';
import { shallow } from 'enzyme';
import { ACTIVE_PROJECTS } from 'constants/index';
import PortfolioItemDetails, { PortfolioItemDetailsProps } from './PortfolioItemDetails';

describe('PortfolioItemDetails', () => {
  const firstProject = ACTIVE_PROJECTS[0];

  const props: PortfolioItemDetailsProps = {
    project: firstProject,
  };

  test('renders project details', () => {
    let wrapper = shallow(<PortfolioItemDetails {...props} />);
    expect(wrapper).toHaveClassName('project-details-wrapper');

    let detailsNodeArray = wrapper.find('.project-details-info');
    
    // languages
    expect(detailsNodeArray.at(0).text()).toBe('Typescript, HTML5, CSS');

    // frameworks
    expect(detailsNodeArray.at(1).text()).toBe('React (using CRA), Webpack');

    // state management
    expect(detailsNodeArray.at(2).text()).toBe('Contexts');

    // design tools
    expect(detailsNodeArray.at(3).text()).toBe('Bootstrap and custom CSS');

    // testing tools
    expect(detailsNodeArray.at(4).text()).toBe('Jest, Enzyme');
  });
});