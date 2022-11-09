import React from 'react';
import { PaddingContainer, SectionHeader } from './';

import { TECHNICAL_SKILLS } from 'constants/index';

const TechnicalSkills = () => {
  // we want to display the list in two columns so we
  // can figure out how many are in half the array and
  // slice the list in two at that point.
  const half = Math.ceil(TECHNICAL_SKILLS.length / 2);

  const leftList = TECHNICAL_SKILLS.slice(0, half);
  const rightList = TECHNICAL_SKILLS.slice(half);

  return (
    <div>
      <SectionHeader headingText="TECHNICAL SKILLS/TOOLS"/>
      <div className="row text-left">
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <ul>
            {
              leftList.map(item =>
                <li key={item}>{item}</li>
              )
            }
          </ul>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-4">
          <ul>
            {
              rightList.map(item =>
                <li key={item}>{item}</li>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )
};

export default TechnicalSkills;