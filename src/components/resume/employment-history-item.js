import React from 'react';

export default function EmploymentHistoryItem(props) {
  const { companyName, city, state, jobTitle, startYear, endYear } = props;
  return (
    <div className="row">
      <div className="col-md-7 offset-1">
        <ul className="job-list">
          <li><span className="font-weight-bold">{companyName}</span>: {city}, {state}</li>
          <li><span className="underline">{jobTitle}</span></li>
        </ul>
      </div>
      <div className="col-md-3 text-right">
        <ul className="job-list">
          <li><span className="font-weight-bold">{startYear} - {endYear}</span></li>
        </ul>
      </div>
    </div>
  )
}
