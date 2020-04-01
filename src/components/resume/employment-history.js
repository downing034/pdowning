import React from 'react';
import SectionHeader from './section-header';
import PaddingContainer from './padding-container';
import EmploymentHistoryItem from './employment-history-item';

export default function EmploymentHistory() {
  return (
    <div>
      <SectionHeader headingText="EMPLOYMENT HISTORY"/>
      <PaddingContainer>
        <EmploymentHistoryItem
          companyName="TeamSnap"
          city="(Remote)"
          state="Boulder, Colorado"
          jobTitle="Software Engineer"
          startYear="2019"
          endYear="Present"
        />
        <EmploymentHistoryItem
          companyName="Granicus"
          city="Denver"
          state="Colorado"
          jobTitle="Software Engineer"
          startYear="2017"
          endYear="2019"
        />
        <EmploymentHistoryItem
          companyName="Granicus"
          city="Denver"
          state="Colorado"
          jobTitle="Quality Assurance Engineer"
          startYear="2015"
          endYear="2017"
        />
        <EmploymentHistoryItem
          companyName="SPS Commerce"
          city="Minneapolis"
          state="Minnesota"
          jobTitle="Quality Assurance Analyst"
          startYear="2014"
          endYear="2015"
        />
        <EmploymentHistoryItem
          companyName="SPS Commerce"
          city="Minneapolis"
          state="Minnesota"
          jobTitle="Support Center Lead"
          startYear="2013"
          endYear="2014"
        />
        <EmploymentHistoryItem
          companyName="SPS Commerce"
          city="Minneapolis"
          state="Minnesota"
          jobTitle="Senior Customer Operations Analyst"
          startYear="2013"
          endYear="2013"
        />
        <EmploymentHistoryItem
          companyName="SPS Commerce"
          city="Minneapolis"
          state="Minnesota"
          jobTitle="Customer Operations Analyst"
          startYear="2012"
          endYear="2013"
        />
      </PaddingContainer>
    </div>
  )
};
