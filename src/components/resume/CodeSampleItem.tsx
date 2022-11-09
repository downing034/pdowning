import React from 'react';
import { CodeSample } from 'constants/types';

const CodeSampleItem = ({ appName, appDescription, herokuLink, githubLink }: CodeSample) => {
  return (
    <p>
      <strong>{appName}</strong> – {appDescription}
      <br/>
      Heroku:
      <a id="sample-heroku-link" target="_blank" href={herokuLink}> {herokuLink}</a>
      <br/>
      Github:
      <a id="sample-github-link" target="_blank" href={githubLink}> {githubLink}</a>
    </p>
  )
};

export default CodeSampleItem;