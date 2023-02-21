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
            <CodeSampleItem key={index} sample={sample} />
          )
        }
      </PaddingContainer>
    </div>
  )
};

export default CodeSamples;