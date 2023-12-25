import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { PortfolioItem } from './';
import { ACTIVE_PROJECTS } from 'constants/index';

const Portfolio = () => {
  return (
    <ScrollableAnchor id={'portfolio'}>
      <div className="grey-container">
        <h1 className="text-center">Active Projects</h1>
        <h4 id="work-history-subtext" className="text-center">Hover over a project image to view github project or production links.</h4>
        <div className="portfolio-item-container">
          {
            ACTIVE_PROJECTS.map((project, index) =>
              <PortfolioItem key={index} project={project} />
            )
          }
        </div>
      </div>
    </ScrollableAnchor>
  )
};

export default Portfolio;

