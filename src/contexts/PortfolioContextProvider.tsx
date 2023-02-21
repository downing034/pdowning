import React, { createContext, useState, useEffect, Dispatch, ReactNode } from 'react';
import { Project, Projects, PortfolioContextType } from 'constants/types';
import { ACTIVE_PROJECTS } from 'constants/index';

export const newEmptyProject = ():Project => {
  return ({
    image: '',
    altText: '',
    title: '',
    description: '',
    githubUrl: '',
    siteUrl: '',
    comingSoon: true,
    language: '',
    framework: '',
    stateManagement: '',
    designTools: '',
    testingTools: '',
  })
};



export const PortfolioContext = createContext<{ projects: Projects }>({ projects: [] });

const PortfolioContextProvider = ({ children }: { children: ReactNode }) => {

  const data: PortfolioContextType = { projects: ACTIVE_PROJECTS };

  return (
    <PortfolioContext.Provider value={data}>
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioContextProvider;