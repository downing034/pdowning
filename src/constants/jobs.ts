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
  blurb: "As an Engineering Manager, I manage a team of three developers, providing task management, roadmap definition, and development guidance. I've improved product workflows and helped the product organization better understand our users through A/B testing and Google Analytics.",
  description: [
    "As an Engineering Manager, I manage a team of three developers, providing task management, roadmap definition, and development guidance. I've spent time improving product workflows and opening lines of communication between engineers and other departments.",
    "To help shorten cycle time for bugs, I created a bug workflow process which included user impact and severity assessment. This process included a bi-weekly on-call handoff meeting and created clear ownership of bug tasks.",
    "I helped implement a CI/CD pipeline that ensured each of our tests suites were run prior to deployment resulting in a direct reduction of regressions.",
  ],
  technologiesUsed: {
    languages: 'Typescript',
    frameWorks: 'React',
    environment: 'Single Api Service',
    testingTechnologies: 'Jest, Enzyme, Cypress, Playwright',
    otherTechnologies: 'Github, Netlify, Figma, Material-UI, Webpack'
  },
  experienceList: [
    "Implemented a CI/CD pipeline that ensured each of our tests suites were run prior to deployment and reduced cycle time and regressions",
    "Collaborated with designers, developers, and business development to ensure delivered products meet requirements",
    'Cultivated partnerships between engineering, product and UX personnel to create holistically designed final products',
    'Drove high-level strategic planning of development efforts across multiple projects to optimize resource utilization and shorten development times',
    'Provided regular feedback to both junior engineers and senior leadership on individual performance metrics and observations including conducting 1:1s and performance reviews',
    'Continued work as a Senior Software Engineer II in addition to management duties',
  ],
};

export const KAVA_LABS_SR_SOFTWARE_ENGINEER: Job = {
  title: 'Senior Software Engineer II',
  companyName: 'Kava Labs',
  location: 'Remote',
  website: 'https://app.kava.io',
  startDate: new Date('10/15/2020'),
  endDate: new Date('10/01/2023'),
  blurb: "As a Senior Software Engineer (Team Lead), I primarily architected the Kava Labs webapp (a realtime interface to Kava's blockchain). I also spent time improving our processes (like adding a CI/CD pipeline) which reduced feature turnaround time.",
  description: [
    "As a Senior Software Engineer (Team Lead), I primarily architected the Kava Labs webapp (a realtime interface to Kava's blockchain).  Since Kava was a small startup in crypto, I often wore many hats across design, product, and engineering.",
    "As we hired additional lower level engineers, I onboarded and mentored three separate engineers who were each later promoted.  As the team grew, I began to focus more on architecture and scaling.",
    "While my programming focus at Kava was very frontend focused, I served as an engineering contact point for multiple, non-product departments which opened lines of communication and made the company more cohesive.",
  ],
  technologiesUsed: {
    languages: 'Typescript',
    frameWorks: 'React',
    environment: 'Single Api Service',
    testingTechnologies: 'Jest, Enzyme, Cypress, Playwright',
    otherTechnologies: 'Github, Netlify, Figma, Material-UI, Webpack'
  },
  experienceList: [
    "Built a well-factored codebase using react/redux, react testing library, and playwright with 80% test coverage, resulting in a more reliable product",
    "Setup Sentry for error monitoring and posted errors to slack resulting in faster turn around time on bugs",
    "Contributed to 3rd party crypto packages to help keep community packages updated",
    "Worked with UX to design concepts for future app features, and translated those designs into smaller deliverable, sequeuenced tickets",
    "Built A/B testing and google analytics event tracking to assist design/product with user metric tracking and conversions",
    "Built a pair programming exercise for F.E. engineering which was used to screen multiple developers at different skill levels",
    "Converted the majority of the application from javascript to typescript",
    "Managed sprints for the front-end team working closely with product to ensure features driving business goals were completed on time",
    "Created a new-hire onboarding guide which helped reduce technical setup and basic onboarding by multiple days",
    "Collaborated with designers, developers, and business development to ensure delivered products meet requirements",
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
    "Replaced Mobx with Redux and ReduxForm in a major frontend application in order to align our app with the company's other frontend projects",
    'Setup frontend CI/CD and unit testing through jest/enzyme in multiple projects to start tracking and increasing code coverage which increased code quality and documentation',
    'Ideated with product and UX to help implement a new design library to be used across mutliple frontend projects, making it easier to stay on brand and helping unify the design across apps',
    'Implemented specific client registration forms using Rails and JQuery which simplified our customer onboarding process',
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
