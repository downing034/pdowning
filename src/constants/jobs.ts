import {
  Job
} from './types';

export const KAVA_LABS_SOFTWARE_ENGINEERING_MANAGER: Job = {
  title: 'Software Engineering Manager',
  companyName: 'Kava Labs',
  location: 'Remote',
  website: 'https://app.kava.io',
  startDate: new Date('10/01/2023'),
  endDate: 'Current',
  blurb: 'As the Application Team Engineering Manager, I manage and mentor a team of three mid-level engineers. I also work with other product team leaders to plan, manage, and coordinate work and I am still a code contrbutor.',
  description: [
    "As the Application Team Engineering Manager, I manage and mentor a team of three mid-level engineers. I am responsible for handling 1:1 meetings, fostering career growth, and finding ways to enhance team processes.",
    "I also work with other product and engineering team leaders to plan, manage, and coordinate work or releases.",
    "While doing these management duties, I am also remaining a part time indvidual contributor to the team, filling in as team needs arise and architecting new feature work."
  ],
  technologiesUsed: {
    languages: 'Typescript',
    frameWorks: 'React',
    environment: 'Single Api Service',
    testingTechnologies: 'Jest, Enzyme, Cypress, Playwright',
    otherTechnologies: 'Github, Netlify, Figma, Material-UI, Webpack'
  },
  experienceList: [
    'Cultivated partnerships between engineering, product and UX personnel to create holistically designed final products.',
    'Drove high-level strategic planning of development efforts across multiple projects to optimize resource utilization and shorten development times.',
    'Provided regular feedback to both junior engineers and senior leadership on individual performance metrics and observations including conducting 1:1s and performance reviews.',
    'Continued work as a Senior Software Engineer II in addition to management duties.',
  ],
};

export const KAVA_LABS_SR_SOFTWARE_ENGINEER: Job = {
  title: 'Senior Software Engineer II',
  companyName: 'Kava Labs',
  location: 'Remote',
  website: 'https://app.kava.io',
  startDate: new Date('10/15/2020'),
  endDate: new Date('10/01/2023'),
  blurb: "As a Senior Software Engineer (Team Lead), I primarily architected the Kava Labs webapp (a realtime interface to Kava's blockchain). I also spent time not only working on development, but also by improving the way we we're working.",
  description: [
    "As a Senior Software Engineer (Team Lead), I primarily architected the Kava Labs webapp (a realtime interface to Kava's blockchain).  Since Kava was a small startup in crypto, I often wore many hats across design, product, and engineering.",
    "As we hired additional lower level engineers, I onboarded and mentored three separate engineers who were each later promoted.  As the team grew, I began to focus more on architecture and scaling.",
    "I also spent time not only working on development, but also by improving the way we we're working through process change.",
  ],
  technologiesUsed: {
    languages: 'Typescript',
    frameWorks: 'React',
    environment: 'Single Api Service',
    testingTechnologies: 'Jest, Enzyme, Cypress, Playwright',
    otherTechnologies: 'Github, Netlify, Figma, Material-UI, Webpack'
  },
  experienceList: [
    'Assisted in architecting Kava-Labs’ web app using react/redux, react testing library, enzyme, and material-ui',
    'Setup Sentry for web app error monitoring and contributed to 3rd party crypto packages to fix bugs',
    'Worked with UX to design and wireframe concepts for future app features, sometimes through multiple iterations',
    'Built A/B testing and google analytics event tracking to assist design/product with user metric tracking and conversions',
    'Built a pair programming exercise for F.E. engineering that served all skill levels of engineer hiring (using react)',
    'Converted the majority of the application from javascript to typescript',
    'Managed sprints for the front-end team working closely with product to ensure features driving business goals were completed on time.',
    'Lead and mentored a team of 4 frontend engineers, (2 S.E.’s, 1 Jr. S.E.)',
  ]
};

export const TEAMSNAP_SOFTWARE_ENGINEER: Job = {
  title: 'Software Engineer',
  companyName: 'TeamSnap',
  location: 'Boulder, CO (Remote)',
  website: 'https://www.teamsnap.com',
  startDate: new Date('10/12/2019'),
  endDate: new Date('04/01/2020'),
  blurb: "As a Frontend Software Engineer, I helped rebuild TeamSnap's account management interface for their web portal. This consisted of data remodling as well as a Mobx to Redux replacement.",
  description: [
    "As a Frontend Software Engineer, I helped rebuild TeamSnap's account management interface for their web portal. This interface had to consume multiple api endpoints to build the user's account view.",
    "While rebuilding the frontend to interact with the new apis, I also replaced the state management (Mobx) to Redux so the application aligned better with the rest of the tech stack.",
  ],
  technologiesUsed: {
    languages: 'Typescript',
    frameWorks: 'React',
    environment: 'Microservices',
    testingTechnologies: 'Jest, Enzyme',
    otherTechnologies: 'Github, Netlify, Figma, Material-UI, Webpack'
  },
  experienceList: [
    'Replaced Mobx with Redux and ReduxForm in a major frontend application',
    'Setup frontend automation in multiple projects to start tracking and increasing code coverage',
    'Participated in discussions with product and UX leads to redesign application',
    'Implemented specific client registration forms using Rails and JQuery'
  ]
};

export const GRANICUS_SOFTWARE_ENGINEER: Job = {
  title: 'Software Engineer',
  companyName: 'Granicus',
  location: 'Denver, CO (Remote)',
  website: 'https://granicus.com',
  startDate: new Date('03/01/2017'),
  endDate: new Date('10/12/2019'),
  blurb: 'As a full-stack Software Engineer, I worked across multiple business lines and teams primarily in Ruby on Rails or React.',
  description: [
    "As a full-stack Software Engineer, I worked across multiple business lines and teams primarily in Ruby on Rails or React. I participated in standard scrum processes (grooming, planning, retros, etc.) and often served as a quality assurance resource when needed.",
  ],
  technologiesUsed: {
    languages: 'Ruby, Typescript',
    frameWorks: 'Rails, React',
    environment: 'Microservices',
    testingTechnologies: 'Rspec, Capybara, Jest, Enzyme, Mocha',
    otherTechnologies: 'Jenkins, Gitlab, Github, Netlify'
  },
  experienceList: [
    'Rewrote the entire frontend of application from Ember.js into React.js using axios to make request to the backend ruby on rails api and redux for state management',
    'Implemented Jest testing for react applications to provide fellow engineers the toolkit and design patterns to complete frontend testing while increasing overall react code coverage from 30% to 70%',
    'Implemented Ruby on Rails feature code on two flagship products, one of which I helped architect',
    'Taught a colleague with no Ruby or Rails experience how to write quality assurance automation tests using Ruby and Capybara',
    'Served as development and quality assurance resource for datacenter failovers making sure applications are successfully deployed after the process'
  ]
};

export const GRANICUS_SOFTWARE_AUTOMATION_ENGINEER: Job = {
  title: 'Software Automation Engineer',
  companyName: 'Grancius',
  location: 'Saint Paul, MN',
  website: 'https://granicus.com',
  startDate: new Date('10/12/2015'),
  endDate: new Date('03/01/2017'),
  blurb: 'As a Software Automation Engineer, I primarily wrote UI driven end to end tests utilizing Ruby, Capybara, and Selenium Webdriver and automated over 1500 manual test cases.',
  description: [
    "As a Software Automation Engineer, I primarily wrote UI driven end to end tests utilizing Ruby, Capybara, and Selenium Webdriver and automated over 1500 manual test cases.",
    "Additionally, I assisted other manual quality assurance analysts with writing automated tests.",
  ],
  technologiesUsed: {
    languages: 'Ruby',
    frameWorks: 'Rails',
    environment: 'Single API Service',
    testingTechnologies: 'Rspec, Selenium Web Driver, Cucumber, Capybara',
    otherTechnologies: 'Jenkins, Gitlab, Github'
  },
  experienceList: [
    'Wrote automation test cases in Cucumber; utilizing Ruby with the capybara library and selenium webdriver',
    'Automated over 1500 backlog test cases by writing them into integration, controller, and model tests. This reduced our regression cycle by 10 days',
    'Created Jenkins builds to run test suites on a regular basis and organized fashion.',
    'Participated in both bug review processes and worked regularly using agile development methods.',
    'Rewrote an entire test suite from cucumber to Rspec to increase test consistency and reliability.',
    'Preformed manual testing on some features when necessary.'
  ]
};

export const JOBS = [
  KAVA_LABS_SOFTWARE_ENGINEERING_MANAGER,
  KAVA_LABS_SR_SOFTWARE_ENGINEER,
  TEAMSNAP_SOFTWARE_ENGINEER,
  GRANICUS_SOFTWARE_ENGINEER,
  GRANICUS_SOFTWARE_AUTOMATION_ENGINEER,
];
