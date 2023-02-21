import React from 'react';
import { Project } from 'constants/types';
import useProject from './useProject';
import PortfolioItemDetails from './PortfolioItemDetails';
import 'styles/profile.css';

export interface PortfolioItemProps {
  projectTitle: string;
};


const PortfolioItem = ({ projectTitle }: PortfolioItemProps) => {
  const { image, altText, title, description, githubUrl, siteUrl, comingSoon } = useProject(projectTitle);
  return (
    <div className="box">
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

      <PortfolioItemDetails projectTitle={title} />
    </div>
  )
};

export default PortfolioItem;
