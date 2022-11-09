import React from 'react';
import {
  CodeSampleItem,
  PaddingContainer,
  SectionHeader
} from './';

import { CODE_SAMPLES } from 'constants/index'; 

const CodeSamples = () => {

  return (
    <div>
      <SectionHeader headingText="CODING SAMPLES" />
      <PaddingContainer>
        {
          CODE_SAMPLES.map((sample, index) => 
            <CodeSampleItem
              key={index}
              appName={sample.appName}
              appDescription={sample.appDescription}
              herokuLink={sample.herokuLink}
              githubLink={sample.githubLink}
            />
          )
        }
      </PaddingContainer>
    </div>
  )
};

export default CodeSamples;