import React from 'react';
import useProject from './useProject';


export interface PortfolioItemDetailsProps {
  projectTitle: string;
};

const PortfolioItemDetails = ({projectTitle}: PortfolioItemDetailsProps) => {
	const { language, framework, stateManagement, designTools, testingTools } = useProject(projectTitle);

	return (
		<div className="project-details">
      <p><strong>Language:</strong>{` ${language}`}</p>
      <p><strong>Framework:</strong>{` ${framework}`}</p>
      <p><strong>State Management:</strong>{` ${stateManagement}`}</p>
      <p><strong>Design Tools:</strong>{` ${designTools}`}</p>
      <p><strong>Testing Tools:</strong>{` ${testingTools}`}</p>
    </div>
	)
};

export default PortfolioItemDetails;