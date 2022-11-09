import React from 'react';

import { Job } from 'constants/types';

export interface ExperienceItemProps {
 job: Job;
};

const ExperienceItem = ({ job }: ExperienceItemProps) => {
  let experienceName = job.companyName != '' ?
    `${job.title} – ${job.companyName}` :
    `${job.title}`

  return (
    <div>
      <h5>{experienceName}</h5>
      <ul>
        {
          job.experienceList.map((experience: string, index: number) =>
            <li key={index}>{experience}</li>
          )
        }
      </ul>
    </div>
  )

};

export default ExperienceItem;