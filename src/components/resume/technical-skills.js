import React from 'react';
import SectionHeader from './section-header';
import PaddingContainer from './padding-container';

export default function TechnicalSkills() {
  return (
    <div>
      <SectionHeader headingText="TECHNICAL SKILLS/TOOLS"/>
      <div className="row text-left">
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <ul>
            <li>React/Redux</li>
            <li>Ruby on Rails</li>
            <li>TDD using jest (react), rspec, capybara, and cucumber with Selenium WebDriver</li>
            <li>Git</li>
            <li>Basic SQL query knowledge</li>
          </ul>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-4">
          <ul>
            <li>Agile Development using Jira</li>
            <li>Heroku deployments</li>
            <li>Gitlab | Github and Jenkins CI</li>
            <li>Some AWS experience with S3 bucks and EC2 instances</li>
            <li>Some Docker experience</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
