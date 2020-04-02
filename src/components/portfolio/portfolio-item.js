import React from 'react';
import '../../styles/profile.css';

export default function PortfolioItem(props) {
  const { image, altText, description, githubUrl, siteUrl } = props;

  return (
    <div className="box">
      <img className="portfolio-icon" src={image} alt={altText}/>

      <div className="middle1">
        <div>{description}</div>
        <br />
        <a id="github" className="text" target="_blank" href={githubUrl}>VIEW CODE</a>
      </div>

      { siteUrl && (
        <div className="middle2">
          <a id="site" className="text" target="_blank" href={siteUrl}>VIEW SITE</a>
        </div>
      )}
    </div>
  )
}
