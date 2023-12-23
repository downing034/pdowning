import React from 'react';
import { Job } from 'constants/types';
import { formatJobDate } from 'components/helpers';

export interface ExpandedHistoryModalProps {
  job: Job;
};

const ExpandedHistoryModal = ({ job }: ExpandedHistoryModalProps) => {
  let includeDay = true;
  const formattedStartDate = formatJobDate(job.startDate, 'long', includeDay);
  const formattedEndDate = formatJobDate(job.endDate, 'long', includeDay);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h6><strong>Job Title</strong></h6>
          <p>{job.title}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h6><strong>Company</strong></h6>
          <p>{job.companyName}</p>
        </div>
        <div className="col-md-6">
          <h6><strong>Location</strong></h6>
          <p>{job.location}</p>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-6">
          <h6><strong>Start Date</strong></h6>
          <p>{formattedStartDate}</p>
        </div>
        <div className="col-md-6">
          <h6><strong>End Date</strong></h6>
          <p>{formattedEndDate}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <h6><strong>Description</strong></h6>
          <ul>
            {
              job.description.map((para, index) => <li className="history-description" key={index}>{para}</li>)
            }
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <h6><strong>Duties / Outcomes</strong></h6>
          <ul>
            {
              job.experienceList.map((exp, index) => <li className="history-experience" key={index}>{exp}</li>)
            }
          </ul>
        </div>
      </div>
    </>
  )
};

export default ExpandedHistoryModal;