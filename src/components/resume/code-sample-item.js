import React from 'react';

export default function CodeSampleItem(props) {
  const { appName, appDescription, herokuLink, githubLink } = props;
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
}
