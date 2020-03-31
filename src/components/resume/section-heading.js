import React from 'react';

export default function SectionHeading(props) {
  const { headingText } = props;
  return (
    <h4 className="text-center strong">{headingText}</h4>
  )
}
