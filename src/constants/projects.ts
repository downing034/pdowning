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
    title: "This Project Site",
    description: "This. Very. Site.",
    githubUrl: "https://github.com/downing034/pdowning",
    siteUrl: "https://home.pdowning.com",
    language: "Typescript, HTML5, CSS",
    framework: "React (using CRA), Webpack",
    stateManagement: 'Contexts',
    designTools: "Bootstrap and custom CSS",
    testingTools: "Jest, Enzyme",

	},
	{
		image: QuizGame,
		altText: "Quiz Game",
		title: "Quiz Game",
    description: "America's favorite answer-and-question game",
    comingSoon: true,
    githubUrl: "https://github.com/downing034/quiz-game",
    // siteUrl: "https://quiz.pdowning.com",
    language: "Typescript, HTML5, CSS",
    framework: "React (using CRA), Webpack",
    stateManagement: 'Contexts',
    designTools: "Material UI",
    testingTools: "Jest, React Testing Library",
	},
	{
		image: SportsBoard,
		altText: "Wagerly",
		title: "Wagerly",
    description: "A personalized bet and parlay tracker",
    comingSoon: true,
    githubUrl: "https://github.com/downing034/wagerly",
    language: "Typescript, HTML5, CSS",
    framework: "React, NodeJS, Express, Mongo, Docker Kubernetes",
    stateManagement: 'Redux',
    designTools: "Bootstrap and custom CSS",
    testingTools: "Jest, Enzyme",
	},
];
