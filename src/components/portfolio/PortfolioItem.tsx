import React from 'react';
import { Project } from 'constants/types';
import PortfolioItemDetails from './PortfolioItemDetails';

export interface PortfolioItemProps {
  project: Project;
};

const PortfolioItem = ({ project }: PortfolioItemProps) => {
  const { image, altText, description, githubUrl, siteUrl, comingSoon } = project;
  
  return (
    <div className="portfolio-item-wrapper">
      
      <div className="portfolio-icon-container">
        <div className="box-background">
          <img className="portfolio-icon" src={image} alt={altText}/>

          <div className="portfolio-item-hover-description">
            <div>{description}</div>
          </div>

          <div className="portfolio-item-hover-view-code">
            <a id="github" className="text" target="_blank" href={githubUrl}>VIEW CODE</a>
            
          </div>

          <div className="portfolio-item-hover-view-site">

            {comingSoon && <div className="soon-text">Coming soon...</div>}

            {!comingSoon && <a id="site" className="text" target="_blank" href={siteUrl}>VIEW SITE</a>}
            
          </div>
        </div>
      </div>
      
      <div className="profile-item-details">
        <PortfolioItemDetails project={project} />
      </div>
    </div>
  )
};

export default PortfolioItem;