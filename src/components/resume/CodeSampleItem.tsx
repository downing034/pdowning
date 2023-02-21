import React from 'react';
import { CodeSample } from 'constants/types';

export interface CodeSampleItemProps {
  sample: CodeSample;
};

const CodeSampleItem = ({ sample }: CodeSampleItemProps) => {
    const { appName, appDescription, siteUrl, githubLink } = sample;

  return (
    <p>
      <strong>{appName}</strong> – {appDescription}
      <br/>
      { siteUrl &&
        <>
          Heroku:
          <a id="sample-site-url" target="_blank" href={siteUrl}> {siteUrl}</a>
          <br/>
        </>
      }
      
      Github:
      <a id="sample-github-link" target="_blank" href={githubLink}> {githubLink}</a>
    </p>
  )
};

export default CodeSampleItem;