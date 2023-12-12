import React from 'react';
import useProject from './useProject';


export interface PortfolioItemDetailsProps {
  projectTitle: string;
};

const PortfolioItemDetails = ({projectTitle}: PortfolioItemDetailsProps) => {
	const { language, framework, stateManagement, designTools, testingTools } = useProject(projectTitle);

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