import React from 'react';

import { EmploymentHistory } from 'constants/types';

const EmploymentHistoryItem = ({ companyName, city, state, jobTitle, startYear, endYear }: EmploymentHistory) => {

  return (
    <div className="row">
      <div className="col-md-7 offset-1">
        <ul className="job-list">
          <li><span><strong>{companyName}</strong></span>: {city}, {state}</li>
          <li><span className="underline">{jobTitle}</span></li>
        </ul>
      </div>
      <div className="col-md-3 text-right">
        <ul className="job-list">
          <li><span><strong>{startYear} - {endYear}</strong></span></li>
        </ul>
      </div>
    </div>
  )
};

export default EmploymentHistoryItem;