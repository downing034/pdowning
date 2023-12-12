import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Potato } from 'images';

const About = () => {
  return (
    <ScrollableAnchor id={'about'}>
      <div className="about-container white-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-7 col-xl-7">
              <img className="potato" src={Potato} alt="dog" />
            </div>
            <div className="col-sm-12 col-lg-5 col-xl-5">
              <h1 className="section-header">About Me</h1>
              <p className="section-description">I work out of Denver, CO, I have a dog named Potato, my favorite number is 34, sour beers are my jam, I play Rocket League like it's going out of style, I enjoy running, metal is my top Spotify genre, I make/sell candles, I'm an avid cross-stitcher.</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  )
};

export default About;
