import React from 'react';
import SectionHeader from './section-header';
import PaddingContainer from './padding-container';
import ExperienceItem from './experience-item';

// jobs
import {
  TEAMSNAP_SOFTWARE_ENGINEER,
  GRANICUS_SOFTWARE_ENGINEER,
  GRANICUS_SOFTWARE_AUTOMATION_ENGINEER,
  PERSONAL_WORK
} from './jobs/teamsnap_software_engineer';

export default function Experience() {
  return (
    <div>
      <SectionHeader headingText="EXPERIENCE" />
      <PaddingContainer>
        <ExperienceItem job={TEAMSNAP_SOFTWARE_ENGINEER}/>
        <ExperienceItem job={GRANICUS_SOFTWARE_ENGINEER}/>
        <ExperienceItem job={GRANICUS_SOFTWARE_AUTOMATION_ENGINEER}/>
        <ExperienceItem job={PERSONAL_WORK}/>
      </PaddingContainer>
    </div>
  )
}
