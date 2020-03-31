import React from 'react';
import SectionHeading from './section-heading';
import SectionDivider from './section-divider';

export default function SectionHeader(props) {
  const { headingText } = props;
  return (
    <div>
      <SectionHeading headingText={headingText}/>
      <SectionDivider />
      <br />
    </div>
  )
}
