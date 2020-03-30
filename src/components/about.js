import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import '../styles/about.css';
import PaulPhoto from '../images/paul.jpg';
import Potato from '../images/potato.jpg';

export default function About() {
  return (
    <ScrollableAnchor id={'about-panel'}>
      <div className="about-container white-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <img className="potato" src={Potato} alt="dog" />
            </div>
            <div className="col-sm-5">
              <h1 className="section-header">A few fun facts about myself</h1>
              <p className="section-description">I work out of Minneapolis MN, I have a dog named Potato, my favorite number is 34, sour beers are my jam, I play Rocket League like it's going out of style, I enjoy running, metal is my top Spotify genre.</p>
            </div>
          </div>
        </div>
      </div>
      </ScrollableAnchor>
  )
};

