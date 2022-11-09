import React from 'react';
import 'styles/profile.css';

export interface PortfolioItemProps {
  image: string;
  altText: string;
  description: string;
  githubUrl?: string;
  siteUrl?: string;
};

const PortfolioItem = ({image, altText, description, githubUrl, siteUrl}: PortfolioItemProps) => {
  return (
    <div className="box">
      <img className="portfolio-icon" src={image} alt={altText}/>

      <div className="middle1">
        <div>{description}</div>
        <br />
        { githubUrl && (
          <a id="github" className="text" target="_blank" href={githubUrl}>VIEW CODE</a>
        )}

        { !githubUrl && (<span/>)}
        
      </div>

      { siteUrl && (
        <div className="middle2">
          <a id="site" className="text" target="_blank" href={siteUrl}>VIEW SITE</a>
        </div>
      )}
    </div>
  )
};

export default PortfolioItem;
