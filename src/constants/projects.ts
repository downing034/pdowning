import {
	Projects
} from './types';

// project images could probably be hosted somewhere, some day
import {
	BacheloretteQuizGame,
	Calculator,
	Increment,
	PlayIcon,
	Punterest,
	RocketLeague,
	ThisSite,
	TwitterApp,
	YelpDemo
} from 'images';

export const DEPLOYED_PROJECTS_ROW_ONE: Projects = [
	{
		image: ThisSite,
		altText: "Site Logo",
    description: "This. Very. Site. It's built using React without Redux.",
    githubUrl: "https://github.com/downing034/pdowning",
    siteUrl: "https://pdowning.netlify.app",
	},
	{
		image: YelpDemo,
		altText: "Yelp Demo",
    description: "A small clone of the Yelp! restaurant review site.",
    githubUrl: "https://github.com/downing034/yelpdemo",
    siteUrl: "https://yelpdemo34.herokuapp.com/",
	},
	{
		image: Punterest,
		altText: "Punterest",
    description: "A place to share pun memes and have a good laugh.",
    githubUrl: "https://github.com/downing034/pinterested",
    siteUrl: "https://punterest.herokuapp.com/",
	},
];

export const DEPLOYED_PROJECTS_ROW_TWO: Projects = [
	{
		image: TwitterApp,
		altText: "Bird",
    description: "Ruby on Rails Twitter clone based on the Rails Tutorial.",
    githubUrl: "https://github.com/downing034/twitter-app",
    siteUrl: "https://sample-twitter-app-demo.herokuapp.com/",
	},
	{
		image: RocketLeague,
		altText: "Rocket League",
    description: "My Rocket League Game Profile using their api.",
    comingSoon: true,
	},
];

export const CODE_ONLY_PROJECTS_ROW_ONE: Projects = [
	{
		image: Increment,
	  altText: "calculator",
	  description: "A small react/redux incrementor with jest testing.",
	  githubUrl: "https://github.com/downing034/simple-counter",
	},
	{
		image: PlayIcon,
    altText: "Video Icon",
    description: "React YouTube search app using YouTube's api",
    githubUrl: "https://github.com/downing034/react-redux-youtube-player",
	},
	{
		image: Calculator,
    altText: "Calculator",
    description: "Ruby script designed to calculate Reverse Polish Notation",
    githubUrl: "https://github.com/downing034/RPN-Calculator",
	},
];

export const CODE_ONLY_PROJECTS_ROW_TWO: Projects = [
	{
		image: BacheloretteQuizGame,
    altText: "Bachelorette Quiz Game",
    description: "Jeopardy style question site for bachelorette parties.",
    githubUrl: "https://github.com/downing034/angela-bachelorette",
	},
];