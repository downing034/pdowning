import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../../styles/profile.css';
import PortfolioItem from './portfolio-item';
import EmptyPortfolioItem from './empty-item';
import ComingSoonPortfolioItem from './coming-soon-item';

// project images
import Yelp          from '../../images/yelp-photo.jpg';
import Bachelorette  from '../../images/bachelorette-jeopardy.jpg';
import Punterest     from '../../images/punterest.jpg';
import PortfolioSite from '../../images/this-site.jpg';
import TwitterApp    from '../../images/twitter-app.jpg';
import Increment     from '../../images/increment.jpg';
import Calculator    from '../../images/calculator.jpg';
import PlayIcon      from '../../images/play-icon.jpg';
import RocketLeague  from '../../images/rocket-league.jpg';

export default function Portfolio() {
  const imageArray = ['yelp', 'bachelorette']
  return (
    <ScrollableAnchor id={'portfolio-panel'}>
      <div className="grey-container">
        <div className="container">
          <h1>Deployed Projects</h1>
          <div className="row">
            <PortfolioItem
              image={Yelp}
              altText="Yelp Demo"
              description="A small clone of the Yelp! restaurant review site."
              githubUrl="https://github.com/downing034/yelpdemo"
              siteUrl="https://yelpdemo34.herokuapp.com/"
             />
            <PortfolioItem
              image={Bachelorette}
              altText="Bachelorette Quiz Game"
              description="Jeopardy style question site for bachelorette parties."
              githubUrl="https://github.com/downing034/angela-bachelorette"
              siteUrl="https://angela-bachelorette.herokuapp.com/"
            />
            <PortfolioItem
              image={Punterest}
              altText="Punterest"
              description="A place to share pun memes and have a good laugh."
              githubUrl="https://github.com/downing034/pinterested"
              siteUrl="https://punterest.herokuapp.com/"
            />
          </div>
          <div className="row">
            <PortfolioItem
              image={PortfolioSite}
              altText="Site Logo"
              description="This. Very. Site. It's built using React without Redux."
              githubUrl="https://github.com/downing034/pdowning"
              siteUrl="https://pdowning.herokuapp.com/"
            />
            <PortfolioItem
              image={TwitterApp}
              altText="Bird"
              description="Ruby on Rails Twitter clone based on the Rails Tutorial."
              githubUrl="https://github.com/downing034/twitter-app"
              siteUrl="https://sample-twitter-app-demo.herokuapp.com/"
            />
            <ComingSoonPortfolioItem
              image={RocketLeague}
              altText="Rocket League"
              description="My Rocket League Game Profile using their api."
            />
          </div>
        </div>

        <div className="spacer"></div>

        <div className="container">
          <h1>Code Only Projects</h1>
          <div className="row">
            <PortfolioItem
              image={Increment}
              altText="calculator"
              description="A small react/redux incrementor with jest testing."
              githubUrl="https://github.com/downing034/simple-counter"
             />
            <PortfolioItem
              image={PlayIcon}
              altText="Video Icon"
              description="React YouTube search app using YouTube's api"
              githubUrl="https://github.com/downing034/react-redux-youtube-player"
            />
            <PortfolioItem
              image={Calculator}
              altText="Calculator"
              description="Ruby script designed to calculate Reverse Polish Notation"
              githubUrl="https://github.com/downing034/RPN-Calculator"
            />
          </div>
          {
            /* Leave these here for future use when projects don't have exactly
               3 projects to a row as a filler
            */
          }
          <div className="row">
            <EmptyPortfolioItem />
            <EmptyPortfolioItem />
            <EmptyPortfolioItem />
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  )
};

