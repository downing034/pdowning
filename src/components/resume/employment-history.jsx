import React from 'react';
import SectionHeader from './section-header';
import PaddingContainer from './padding-container';
import EmploymentHistoryItem from './employment-history-item';
import { EMPLOYMENT_HISTORY } from './employment_history';

export default function EmploymentHistory() {
  return (
    <div>
      <SectionHeader headingText="EMPLOYMENT HISTORY"/>
      <PaddingContainer>
        {
          EMPLOYMENT_HISTORY.map((employment) =>
          <EmploymentHistoryItem
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
