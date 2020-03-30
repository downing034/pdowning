import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../styles/about.css';
import PaulPhoto from '../images/paul.jpg';
import Potato from '../images/potato.jpg';

export default function Portfolio() {
  return (
    <ScrollableAnchor id={'portfolio'}>
      <div className="white-container">
        <div className="container">
          <h1>Portfolio</h1>
          <div className="row">
            <div className="col-sm-4">
              <img className="potato" src={Potato} alt="dog" />
            </div>
            <div className="col-sm-4">
              <img className="potato" src={Potato} alt="dog" />
            </div>
            <div className="col-sm-4">
              <img className="potato" src={Potato} alt="dog" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4">
              <img className="potato" src={Potato} alt="dog" />
            </div>
            <div className="col-sm-4">
              <img className="potato" src={Potato} alt="dog" />
            </div>
            <div className="col-sm-4">
              <img className="potato" src={Potato} alt="dog" />
            </div>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  )
};

