import React from 'react';
import SectionHeader from './section-header';
import PaddingContainer from './padding-container';

export default function Education() {
  return (
    <div>
      <SectionHeader headingText="EDUCATION"/>
      <PaddingContainer>
        <div className="col-md-10">
          <ul className="job-list school">
            <li><span><strong>B.S., Sports Management &amp; Business, University of Minnesota, Minneapolis, Minnesota</strong></span></li>
            <li><span><strong>Graduation: Spring 2012</strong></span></li>
            <li>Focus on Marketing, Community Relations, Brand Management, and Consumer Relations</li>
          </ul>
        </div>
      </PaddingContainer>
    </div>
  )
}
