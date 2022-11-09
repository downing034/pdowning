import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import 'styles/profile.css';
import { ComingSoonItem, EmptyItem, PortfolioItem } from './';
import {
  DEPLOYED_PROJECTS_ROW_ONE,
  DEPLOYED_PROJECTS_ROW_TWO,
  CODE_ONLY_PROJECTS_ROW_ONE,
  CODE_ONLY_PROJECTS_ROW_TWO
} from 'constants/index';

const Portfolio = () => {
  return (
    <ScrollableAnchor id={'portfolio'}>
      <div className="grey-container">
        <div className="container">
          <h1>Deployed Projects</h1>
          <div className="row">
            {
              DEPLOYED_PROJECTS_ROW_ONE.map((project, index) =>
                <PortfolioItem
                  key={index}
                  image={project.image}
                  altText={project.altText}
                  description={project.description}
                  githubUrl={project.githubUrl}
                  siteUrl={project.siteUrl}
                />
              )
            }
          </div>
          <div className="row">
            {
              DEPLOYED_PROJECTS_ROW_TWO.map((project, index) =>
                project.comingSoon ?
                (
                  <ComingSoonItem
                    key={index}
                    image={project.image}
                    altText={project.altText}
                    description={project.description}
                  />
                ) : (
                  <PortfolioItem
                    key={index}
                    image={project.image}
                    altText={project.altText}
                    description={project.description}
                    githubUrl={project.githubUrl}
                    siteUrl={project.siteUrl}
                  />
                )
              )
            }

            <EmptyItem />
          </div>
        </div>

        <div className="spacer"></div>

        <div className="container">
          <h1>Code Only Projects</h1>
          <div className="row">
            {
              CODE_ONLY_PROJECTS_ROW_ONE.map((project, index) =>
                <PortfolioItem
                  key={index}
                  image={project.image}
                  altText={project.altText}
                  description={project.description}
                  githubUrl={project.githubUrl}
                  siteUrl={project.siteUrl}
                />
              )
            }
          </div>
          <div className="row">
            {
              CODE_ONLY_PROJECTS_ROW_TWO.map((project, index) =>
                <PortfolioItem
                  key={index}
                  image={project.image}
                  altText={project.altText}
                  description={project.description}
                  githubUrl={project.githubUrl}
                  siteUrl={project.siteUrl}
                />
              )
            }

            <EmptyItem />
            <EmptyItem />
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  )
};

export default Portfolio;

