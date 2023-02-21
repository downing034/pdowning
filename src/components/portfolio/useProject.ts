import { useContext } from 'react';
import { Projects, PortfolioContextType } from 'constants/types';
import { PortfolioContext, newEmptyProject } from 'contexts';

const useProject = (title: string) => {
	const data: PortfolioContextType = useContext(PortfolioContext);
	const allProjects: Projects = data.projects;
	const project = allProjects.find((p) => p.title === title) ?? newEmptyProject();

	return project;
};

export default useProject;