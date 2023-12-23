import React from 'react';
import { Project } from 'constants/types';

export interface PortfolioItemDetailsProps {
  project: Project;
};

const PortfolioItemDetails = ({ project }: PortfolioItemDetailsProps) => {
	const { language, framework, stateManagement, designTools, testingTools } = project;

	return (
    <div className="project-details-wrapper">
      <div className="project-details">
        <strong>Language(s):</strong>
        <p className="project-details-info">{language}</p>
      </div>

      <div className="project-details">
        <strong>Framework(s):</strong>
        <p className="project-details-info">{framework}</p>
      </div>

      <div className="project-details">
        <strong>State Management:</strong>
        <p className="project-details-info">{stateManagement}</p>
      </div>

      <div className="project-details">
        <strong>Design Tools:</strong>
        <p className="project-details-info">{designTools}</p>
      </div>

      <div className="project-details">
        <strong>Testing Tools:</strong>
        <p className="project-details-info">{testingTools}</p>
      </div>
    </div>
	)
};

export default PortfolioItemDetails;