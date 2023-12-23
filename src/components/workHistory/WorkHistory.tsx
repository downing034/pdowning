import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { WorkHistoryItem } from './WorkHistoryItem';
import { JOBS } from 'constants/index';
import ResumeDownload from 'files/Paul_Downing_Resume.pdf';
import 'styles/app.css';

const WorkHistory = () => {
  return (
    <ScrollableAnchor id={'work-history'}>
      <div id="work-history" className="grey-container">
        <div className="container">
          <h1 className="text-center">Work History</h1>
          <h4 id="work-history-subtext" className="text-center">Click on a title or description to learn more or download a copy of my resume.</h4>

          <div id="resume-container" className="row justify-content-center">
            <a
              id="resume-download"
              href={ResumeDownload}
              download
            >
              <button
                type="button"
                className="resume-button"
              >
              DOWNLOAD RESUME →
              </button>
              
            </a>
          </div>

          <ul className="history-timeline">
            {
              JOBS.map((job, index) =>
                <WorkHistoryItem key={index} job={job} isFirstItem={index === 0}/>
              )
            }
          </ul>
        </div>
      </div>
    </ScrollableAnchor>
  )
};

export default WorkHistory;