import React from 'react';
import '../../styles/profile.css';

export default function ComingSoonPortfolioItem(props) {
  const { image, altText, description } = props;

  return (
    <div className="box">
      <img className="portfolio-icon" src={image} alt={altText}/>

      <div className="middle1">
        <div>{description}</div>
        <br />
      </div>

      <div className="middle2">
        <div className="soon-text">Coming soon...</div>
      </div>
    </div>
  )
}
