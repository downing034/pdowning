import React from 'react';

export interface SectionHeadingProps {
  headingText: string;
};

const SectionHeading = ({headingText}: SectionHeadingProps) => {
  return (
    <h4 className="text-center strong">{headingText}</h4>
  )
};

export default SectionHeading;