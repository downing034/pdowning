import React from 'react';
import SectionHeader from './section-header';
import PaddingContainer from './padding-container';
import CodeSampleItem from './code-sample-item';

export default function CodeSamples() {
  return (
    <div>
      <SectionHeader headingText="CODING SAMPLES" />
      <PaddingContainer>
        <CodeSampleItem
          appName="Paul Downing"
          appDescription="A React application used to showcase my work and info about myself"
          herokuLink="https://pdowning.herokuapp.com/"
          githubLink="https://github.com/downing034/pdowning"
        />
        <CodeSampleItem
          appName="Yelpdemo"
          appDescription="A replication of Yelp! and a few of their features built with Rails"
          herokuLink="https://yelpdemo34.herokuapp.com/"
          githubLink="https://github.com/downing034/yelpdemo"
        />
        <CodeSampleItem
          appName="Twitter App"
          appDescription="A scaled-back version of Twitter based on the Rails Tutorial"
          herokuLink="https://sample-twitter-app-demo.herokuapp.com/"
          githubLink="https://github.com/downing034/twitter-app"
        />
      </PaddingContainer>
    </div>
  )
}
