import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Project } from 'constants/types';
import { PortfolioItem } from './';
import { ACTIVE_PROJECTS } from 'constants/index';

import { PortfolioContextProvider } from 'contexts';

const Portfolio = () => {
  return (
    <PortfolioContextProvider>
      <ScrollableAnchor id={'portfolio'}>
        <div className="grey-container">
          <div className="container">
            <h1 className="text-center">Active Projects</h1>
            <div className="row">
              {
                ACTIVE_PROJECTS.map((project, index) =>
                  <PortfolioItem key={index} projectTitle={project.title} />
                )
              }
            </div>
          </div>
        </div>
      </ScrollableAnchor>
    </PortfolioContextProvider>
  )
};

export default Portfolio;

