import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import 'styles/resume.css';
import ResumeDownload from 'files/P_W_Downing_Resume_2023.pdf';

import {
  Awards,
  CodeSamples,
  Education,
  EmploymentHistory,
  Experience,
  MainHeader,
  Objective,
  TechnicalSkills
} from './';

const Resume = () => {
  return (
    <ScrollableAnchor id={'resume'}>
      <div className="white-container">
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-4">
              <h1>Resume</h1>
            </div>
            <div className="col-md-4">
              <a id="resume-download" className="resume-download" href={ResumeDownload} download>DOWNLOAD RESUME →</a>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="resume-shadow">
              <MainHeader /><br />
              <Objective /><br />
              <TechnicalSkills /><br />
              <Experience /><br />
              <CodeSamples /><br/>
              <Awards /><br/>
              <EmploymentHistory /><br />

              <Education />
            </div>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  )
};

export default Resume;