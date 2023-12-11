import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import AbilitySection from './AbilitySection';
import {
  CODING_ABILITIES,
  TESTING_ABILITIES,
  DESIGN_ABILITIES,
  TOOLS_ABILITIES,
  LANGUAGE_ABILITIES,
} from 'constants/index';

const Abilities = () => {
  return (
    <ScrollableAnchor id={'abilities'}>
      <div className="white-container">
        <div className="container">
          <h1 id="main-ability-header">Abilities</h1>
          <div className="row">
            <div className="col-md-5 offset-1">
              <AbilitySection header="Coding" abilities={CODING_ABILITIES} />
              <AbilitySection header="Launguages" abilities={LANGUAGE_ABILITIES} />
            </div>

            <div className="col-md-5 offset-1">
              <AbilitySection header="Testing" abilities={TESTING_ABILITIES} />
              <AbilitySection header="Design Libraries" abilities={DESIGN_ABILITIES} />
              <AbilitySection header="Tools / Others" abilities={TOOLS_ABILITIES} />
              
            </div>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  )
};

export default Abilities;