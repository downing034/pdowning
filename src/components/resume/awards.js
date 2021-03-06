import React from 'react';
import SectionHeader from './section-header';
import PaddingContainer from './padding-container';

export default function Awards() {
  return (
    <div>
      <SectionHeader headingText="AWARDS"/>

      <PaddingContainer>
        <h5>Awards</h5>
        <ul>
          <li>Nominated for 5 "Grannie" Awards - award voted by peers for outstanding work</li>
          <li>Four-time employee of the quarter nominee</li>
          <li>Maintained 97.5% customer satisfaction rating over 1.5yrs in customer support, 2000+ cases</li>
        </ul>
      </PaddingContainer>
    </div>
  )
}
