# Welcome to Paul's Portfolio

A simple React.js project serving as a personal portfolio website for myself. This project was built using [Create React App](https://github.com/facebook/create-react-app), but was nearly, immediately ejected so I could add test tooling not supported by Create React App.

**Project is Currently Deployed on Heroku:** [Paul's Portfolio](https://pdowning.herokuapp.com/)
*NOTE: Project may take an extra few seconds to load on heroku since it's on the free version. Heroku sleeps apps that haven't been immediately visited to save money.*

Prerequisites:
 - You must have  [Node](https://nodejs.org/en/download/)
 - [Yarn]([https://yarnpkg.com/](https://yarnpkg.com/)) or some other javascript package manager (like npm) must be installed

## Run the Project

From the root directory:
- `yarn install` to install the necessary packages for the project
- `yarn start` Runs the app in the development mode.  Open  [http://localhost:3000](http://localhost:3000/)  to view it in the browser.

Page will hot reload if you make edits and lint errors will show in the console.


## Build the Project
From the root directory:
- `yarn build` Builds the app for production to the  `build`  folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  Your app is ready to be deployed!


## Run the Tests

Testing is written using Jest, Jest-Enzyme, Rosie (factories), and Chancejs. This project has full test coverage on all components.
From the root directory:
- `yarn test` to run all the tests in the project
- `yarn test path/to/test` replace 'path/to/test' with a specific test file to run
- `yarn test --coverage` to run all the tests in the project and get a full coverage report on each file/line. Coverage can be viewed in the terminal or by navigating to `test/coverage/lcov-report/index.html` on your computer and opening the file in a browser.
