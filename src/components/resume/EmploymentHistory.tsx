import React from 'react';
import {
  EmploymentHistoryItem,
  PaddingContainer,
  SectionHeader,
} from './';

import { EMPLOYMENT_HISTORY } from 'constants/index';

const EmploymentHistory = () => {
  return (
    <div>
      <SectionHeader headingText="EMPLOYMENT HISTORY"/>
      <PaddingContainer>
        {
          EMPLOYMENT_HISTORY.map((employment, index) =>
          <EmploymentHistoryItem
            key={index}
            companyName={employment.companyName}
            city={employment.city}
            state={employment.state}
            jobTitle={employment.jobTitle}
            startYear={employment.startYear}
            endYear={employment.endYear}
          />
        )}
      </PaddingContainer>
    </div>
  )
};

export default EmploymentHistory;
