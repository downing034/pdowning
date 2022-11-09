import React from 'react';
import {
  SectionDivider,
  SectionHeading,
} from './';

export interface SectionHeaderProps {
  headingText: string;
};

const SectionHeader = ({headingText}: SectionHeaderProps) => {
  return (
    <div>
      <SectionHeading headingText={headingText}/>
      <SectionDivider />
      <br />
    </div>
  )
};

export default SectionHeader;