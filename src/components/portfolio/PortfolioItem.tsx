import React from 'react';
import { Project } from 'constants/types';
import useProject from './useProject';
import PortfolioItemDetails from './PortfolioItemDetails';

export interface PortfolioItemProps {
  projectTitle: string;
};

const PortfolioItem = ({ projectTitle }: PortfolioItemProps) => {
  const { image, altText, title, description, githubUrl, siteUrl, comingSoon } = useProject(projectTitle);
  return (
    <div className="portfolio-item-wrapper row">
      
      <div className="col-md-12 col-lg-6">
        <div className="box-background">
          <h4 className="portfolio-title">{title}</h4>
          <img className="portfolio-icon" src={image} alt={altText}/>

          <div className="middle1">
            <div>{description}</div>
            <br />
            <a id="github" className="text" target="_blank" href={githubUrl}>VIEW CODE</a>
            
          </div>

          <div className="middle2">

            {comingSoon && <div className="soon-text">Coming soon...</div>}

            {!comingSoon && <a id="site" className="text" target="_blank" href={siteUrl}>VIEW SITE</a>}
            
          </div>
        </div>
      </div>
      
      <div className="profile-item-details col-lg-6">
        <PortfolioItemDetails projectTitle={title} />
      </div>
    </div>
  )
};

export default PortfolioItem;