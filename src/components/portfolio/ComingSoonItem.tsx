import React from 'react';
import 'styles/profile.css';
import { Project } from 'constants/types';

const ComingSoonItem = ({ image, altText, description }: Project) => {

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
};

export default ComingSoonItem;
