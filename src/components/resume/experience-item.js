import React from 'react';

export default function ExperienceItem(props) {
  const { job } = props;

  let experienceName = job.companyName != '' ?
    `${job.title} – ${job.companyName}` :
    `${job.title}`
  return (
    <div>
      <h5>{experienceName}</h5>
      <ul>
        {
          job.experienceList.map(function(experience, idx) {
            return <li key={idx}>{experience}</li>
          })
        }
      </ul>
    </div>
  )
}
