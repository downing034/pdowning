import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import '../../styles/resume.css';
import ResumeDownload from '../../files/P_W_Downing_Resume_2020.pdf';

// resume sections
import ResumeMainHeader from './resume-main-header';
import Objective from './objective';
import TechnicalSkills from './technical-skills';
import Experience from './experience';
import CodeSamples from './code-samples';
import Awards from './awards';
import EmploymentHistory from './employment-history';
import Education from './education';

export default function Resume() {
  return (
    <ScrollableAnchor id={'resume'}>
      <div className="white-container resume-container">
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
              <ResumeMainHeader /><br />
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
}
