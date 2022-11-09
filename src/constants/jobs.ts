import {
  Job
} from './types';

export const GRANICUS_SOFTWARE_AUTOMATION_ENGINEER:Job = {
  title: 'Software Automation Engineer',
  companyName: 'Grancius',
  experienceList: [
    'Wrote automation test cases in Cucumber; utilizing Ruby with the capybara library and selenium webdriver',
    'Automated over 1500 backlog test cases by writing them into integration, controller, and model tests. This reduced our regression cycle by 10 days',
    'Created Jenkins builds to run test suites on a regular basis and organized fashion.',
    'Participated in both bug review processes and worked regularly using agile development methods.',
    'Rewrote an entire test suite from cucumber to Rspec to increase test consistency and reliability.',
    'Preformed manual testing on some features when necessary'
  ]
};

export const GRANICUS_SOFTWARE_ENGINEER: Job = {
  title: 'Software Engineer',
  companyName: 'Granicus',
  experienceList: [
    'Rewrote the entire frontend of application from Ember.js into React.js using axios to make request to the backend ruby on rails api and redux for state management',
    'Implemented Jest testing for react applications to provide fellow engineers the toolkit and design patterns to complete frontend testing while increasing overall react code coverage from 30% to 70%',
    'Implemented Ruby on Rails feature code and trained a colleague with no ruby or rails experience to do the same',
    'Served as DEV and QA resource for datacenter failovers making sure applications are successfully deployed'
  ]
};

export const KAVA_LABS_SR_SOFTWARE_ENGINEER: Job = {
  title: 'Sr Software Engineer II',
  companyName: 'Kava Labs',
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

export const PERSONAL_WORK: Job = {
  title: 'Personal Work',
  companyName: '',
  experienceList: [
    'Developed some sample application to teach myself Ruby on Rails development with a focus on Test-Driven Development and MVC Restful architecture.',
    'Wrote test cases in Ruby on Rails to ensure pages, features, and database validation were constantly tested, while new features were implemented and existing code was refactored.',
    'Used bootstrap and custom CSS/JavaScript to develop dynamic and responsive web applications'
  ]
};

export const TEAMSNAP_SOFTWARE_ENGINEER: Job = {
  title: 'Software Engineer',
  companyName: 'TeamSnap',
  experienceList: [
    'Replaced Mobx with Redux and ReduxForm in a major frontend application',
    'Setup frontend automation in multiple projects to start tracking and increasing code coverage',
    'Participated in discussions with product and UX leads to redesign application',
    'Implemented specific client registration forms using Rails and JQuery'
  ]
};

export const JOBS = [
  KAVA_LABS_SR_SOFTWARE_ENGINEER,
  TEAMSNAP_SOFTWARE_ENGINEER,
  GRANICUS_SOFTWARE_ENGINEER,
  GRANICUS_SOFTWARE_AUTOMATION_ENGINEER,
  PERSONAL_WORK
];
