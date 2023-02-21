import {
	Projects
} from './types';

// project images could probably be hosted somewhere, some day
import {
	QuizGame,
	SportsBoard,
	LogoTransparent,
} from 'images';

export const ACTIVE_PROJECTS: Projects = [
	{
		image: LogoTransparent,
		altText: "Site Logo",
    title: "This Portfolio Site",
    description: "This. Very. Site.",
    githubUrl: "https://github.com/downing034/pdowning",
    siteUrl: "https://home.pdowning.com",
    language: "Typescript",
    framework: "React (using CRA)",
    stateManagement: 'Contexts',
    designTools: "N/A",
    testingTools: "Jest, Enzyme",

	},
	{
		image: QuizGame,
		altText: "Quiz Game",
		title: "Quiz Game",
    description: "Simple, single board of America's favorite answer-and-question game",
    githubUrl: "https://github.com/downing034/quiz-game",
    siteUrl: "https://quiz.pdowning.com",
    language: "Typescript",
    framework: "React (using CRA)",
    stateManagement: 'Contexts',
    designTools: "Material UI",
    testingTools: "Jest, React Testing Library",
	},
	{
		image: SportsBoard,
		altText: "Sports Board",
		title: "Sports Board",
    description: "A personalized view of my favorite sports teams",
    comingSoon: true,
    githubUrl: "https://github.com/downing034/sports-board",
    language: "Typescript",
    framework: "React (using CRA)",
    stateManagement: 'Redux',
    designTools: "Tailwind",
    testingTools: "Jest, Enzyme",
	},
];