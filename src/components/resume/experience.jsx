import React from 'react';
import SectionHeader from './section-header';
import PaddingContainer from './padding-container';
import ExperienceItem from './experience-item';

// jobs
import { KAVA_LABS_SR_SOFTWARE_ENGINEER } from './jobs/kava_labs_sr_software_engineer';
import { TEAMSNAP_SOFTWARE_ENGINEER } from './jobs/teamsnap_software_engineer';
import { GRANICUS_SOFTWARE_ENGINEER } from './jobs/granicus_software_engineer';
import { GRANICUS_SOFTWARE_AUTOMATION_ENGINEER } from './jobs/granicus_software_automation_engineer';
import { PERSONAL_WORK } from './jobs/personal_work';

export default function Experience() {
  const jobs = [
    KAVA_LABS_SR_SOFTWARE_ENGINEER,
    TEAMSNAP_SOFTWARE_ENGINEER,
    GRANICUS_SOFTWARE_ENGINEER,
    GRANICUS_SOFTWARE_AUTOMATION_ENGINEER,
    PERSONAL_WORK
  ];

  return (
    <div>
      <SectionHeader headingText="EXPERIENCE" />
      <PaddingContainer>
        { jobs.map((job) => <ExperienceItem job={job}/> )}
      </PaddingContainer>
    </div>
  )
}
