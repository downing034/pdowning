import React from 'react';

export default function PaddingContainer(props) {
  const { children } = props;
  return (
    <div className="text-left resume-padding">{children}</div>
  )
};
