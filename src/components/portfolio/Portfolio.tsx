import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { PortfolioItem } from './';
import { ACTIVE_PROJECTS } from 'constants/index';

const Portfolio = () => {
  return (
    <ScrollableAnchor id={'portfolio'}>
      <div className="grey-container">
        <div className="container">
          <h1 className="text-center">Active Projects</h1>
          <div className="row">
            {
              ACTIVE_PROJECTS.map((project, index) =>
                <PortfolioItem key={index} project={project} />
              )
            }
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  )
};

export default Portfolio;

