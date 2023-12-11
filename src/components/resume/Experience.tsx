import React from 'react';
import {
  ExperienceItem,
  PaddingContainer,
  SectionHeader,
} from './';

import { JOBS } from 'constants/index';

const Experience = () => {
  return (
    <div>
      <PaddingContainer>
        { JOBS.map((job, index) => <ExperienceItem key={index} job={job}/> )}
      </PaddingContainer>
    </div>
  )
};

export default Experience;