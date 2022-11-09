import React, { ReactNode } from 'react';

export interface PaddingContainerProps {
  children: ReactNode
};

const PaddingContainer = ({children}: PaddingContainerProps) => {
  return (
    <div className="text-left resume-padding">{children}</div>
  )
};

export default PaddingContainer;