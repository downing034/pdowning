import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import '../styles/resume.css';

export default function Resume() {
  return (
    <ScrollableAnchor id={'resume'}>
      <div className="white-container">
        <div className="container">
          <div className="row">
            <div className="resume-shadow">
              <ul className="list-inline text-center resume-contact">
                <li className="list-inline-item resume-contact-text">PLEASE REACH OUT FOR ADDITIONAL CONTACT INFORMATION: downing034@gmail.com</li>
              </ul>
              <div className="bold-bar"></div>
              <h1>PAUL WILLIAM DOWNING</h1>

              <h4 className="text-center strong">OBJECTIVE</h4>
              <div className="black-bar"></div>
              <br />
              <p className="text-center resume-padding">Looking for Software Engineer work that prioritizes writing reliable feature code, with a strong focus on test-driven
                 development. I strive hard to create quality code with comprehensive tests in order to deliver quality features to customers in a timely manner.
                 I want to work with a vibrant company to develop their software footprint.
              </p>
              <br />

              <h4 className="text-center strong">TECHNICAL SKILLS/TOOLS</h4>
              <div className="black-bar"></div>
              <br />

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

              <br />
              <h4 className="text-center strong">EXPERIENCE</h4>
              <div className="black-bar"></div>
              <br />

              <div className="text-left resume-padding">
                <h5>Software Engineer – TeamSnap</h5>
                <ul>
                  <li>Replaced Mobx with Redux and ReduxForm in a major frontend application.</li>
                  <li>Setup frontend automation in multiple projects to start tracking and increasing code coverage.</li>
                  <li>Participated in discussions with product and UX leads to redesign application.</li>
                  <li>Implemented specific client registration forms using Rails and JQuery</li>
                </ul>

                <h5>Software Engineer – Granicus</h5>
                <ul>
                  <li>Rewrote the entire frontend of application from Ember.js into React.js using axios to make request to the backend ruby on rails api and redux for state management.</li>
                  <li>Implemented Jest testing for react applications to provide fellow engineers the toolkit and design patterns to complete frontend testing while increasing overall react code coverage from 30% to 70%.</li>
                  <li>Implemented Ruby on Rails feature code and trained a colleague with no ruby or rails experience to do the same.</li>
                  <li>Served as DEV and QA resource for datacenter failovers making sure applications are successfully deployed.</li>
                </ul>

                <h5>Software Automation Engineer – Granicus</h5>
                <ul>
                  <li>Wrote automation test cases in Cucumber; utilizing Ruby with the capybara library and selenium webdriver.</li>
                  <li>Automated over 1500 backlog test cases by writing them into integration, controller, and model tests. This reduced our regression cycle by 10 days.</li>
                  <li>Created Jenkins builds to run test suites on a regular basis and organized fashion.</li>
                  <li>Participated in both bug review processes and worked regularly using agile development methods.</li>
                  <li>Rewrote an entire test suite from cucumber to Rspec to increase test consistency and reliability.</li>
                  <li>Preformed manual testing on some features when necessary.</li>
                </ul>

                <h5>Personal Work</h5>
                <ul>
                  <li>Developed some sample application to teach myself Ruby on Rails development with a focus on Test-Driven Development and MVC Restful architecture.</li>
                  <li>Wrote test cases in Ruby on Rails to ensure pages, features, and database validation were constantly tested, while new features were implemented and existing code was refactored.</li>
                  <li>Used bootstrap and custom CSS/JavaScript to develop dynamic and responsive web applications.</li>
                </ul>
                <br />
              </div>

              <h4 className="text-center strong">CODING SAMPLES</h4>
              <div className="black-bar"></div>
              <br />

              <div className="text-left resume-padding">
                <p>
                  <strong>Paul Downing</strong> – A React application used to showcase my work and info about myself.
                  <br/>
                  Heroku:
                  <a target="_blank" href="https://pdowning.herokuapp.com/"> https://pdowning.herokuapp.com/</a>
                  <br/>
                  Github:
                  <a target="_blank" href="https://github.com/downing034/pdowning">https://github.com/downing034/pdowning</a>
                </p>

                <p>
                  <strong>Yelpdemo</strong> – A replication of Yelp! and a few of their features built with Rails.
                  <br/>
                  Heroku:
                  <a target="_blank" href="https://yelpdemo34.herokuapp.com/"> https://yelpdemo34.herokuapp.com/</a>
                  <br/>
                  Github:
                  <a target="_blank" href="https://github.com/downing034/yelpdemo"> https://github.com/downing034/yelpdemo</a>
                </p>

                <p>
                  <strong>Twitter App</strong> – A scaled-back version of Twitter based on the Rails Tutorial
                  <br/>
                  Heroku:
                  <a target="_blank" href="https://sample-twitter-app-demo.herokuapp.com/"> https://sample-twitter-app-demo.herokuapp.com/</a>
                  <br/>
                  Github:
                  <a target="_blank" href="https://github.com/downing034/twitter-app"> https://github.com/downing034/twitter-app</a>
                </p>
              </div>
              <br/>

              <h4 className="text-center strong">AWARDS</h4>
              <div className="black-bar"></div>
              <br />

              <div className="text-left resume-padding">
                <h5>Awards</h5>
                <ul>
                  <li>Nominated for 5 "Grannie" Awards - award voted by peers for outstanding work</li>
                  <li>Four-time employee of the quarter nominee</li>
                  <li>Maintained 97.5% customer satisfaction rating over 1.5yrs in customer support, 2000+ cases</li>
                </ul>
              </div>
              <br/>

              <h4 className="text-center strong">EMPLOYMENT HISTORY</h4>
              <div className="black-bar"></div>
              <br />

              <div className="text-left resume-padding">

                <div className="row">
                  <div className="col-md-7 offset-1">
                    <ul className="job-list">
                      <li><span className="font-weight-bold">TeamSnap</span>, Boulder, Colorado</li>
                      <li><span className="underline">Software Engineer</span></li>
                    </ul>
                  </div>
                  <div className="col-md-3 text-right">
                    <ul className="job-list">
                      <li><span className="font-weight-bold">2019 - Present</span></li>
                    </ul>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-7 offset-1">
                    <ul className="job-list">
                      <li><span className="font-weight-bold">Granicus</span>, Denver, Colorado</li>
                      <li><span className="underline">Software Engineer</span></li>
                    </ul>
                  </div>
                  <div className="col-md-3 text-right">
                    <ul className="job-list">
                      <li><span className="font-weight-bold">2017 - 2019</span></li>
                    </ul>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-7 offset-1">
                    <ul className="job-list">
                      <li><span className="font-weight-bold">Granicus</span>, Denver, Colorado</li>
                      <li><span className="underline">Quality Assurance Engineer</span></li>
                    </ul>
                  </div>
                  <div className="col-md-3 text-right">
                    <ul className="job-list">
                      <li><span className="font-weight-bold">2015 - 2017</span></li>
                    </ul>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-7 offset-1">
                    <ul className="job-list">
                      <li><span className="font-weight-bold">SPS Commerce</span>, Minneapolis, Minnesota</li>
                      <li><span className="underline">Quality Assurance Analyst</span></li>
                    </ul>
                  </div>
                  <div className="col-md-3 text-right">
                    <ul className="job-list">
                      <li><span className="font-weight-bold">2014 - 2015</span></li>
                    </ul>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-7 offset-1">
                    <ul className="job-list">
                      <li><span className="font-weight-bold">SPS Commerce</span>, Minneapolis, Minnesota</li>
                      <li><span className="underline">Support Center Lead</span></li>
                    </ul>
                  </div>
                  <div className="col-md-3 text-right">
                    <ul className="job-list">
                      <li><span className="font-weight-bold">2013 - 2014</span></li>
                    </ul>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-7 offset-1">
                    <ul className="job-list">
                      <li><span className="font-weight-bold">SPS Commerce</span>, Minneapolis, Minnesota</li>
                      <li><span className="underline">Senior Customer Operations Analyst</span></li>
                    </ul>
                  </div>
                  <div className="col-md-3 text-right">
                    <ul className="job-list">
                      <li><span className="font-weight-bold">2013 - 2013</span></li>
                    </ul>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-7 offset-1">
                    <ul className="job-list">
                      <li><span className="font-weight-bold">SPS Commerce</span>, Minneapolis, Minnesota</li>
                      <li><span className="underline">Customer Operations Analyst</span></li>
                    </ul>
                  </div>
                  <div className="col-md-3 text-right">
                    <ul className="job-list">
                      <li><span className="font-weight-bold">2012 - 2013</span></li>
                    </ul>
                  </div>
                </div>
                <br />

                <h4 className="text-center strong">EDUCATION</h4>
                <div className="black-bar"></div>
                <br />

                <div className="col-md-10">
                  <ul className="job-list school">
                    <li><span className="font-weight-bold">B.S., Sports Management &amp; Business, University of Minnesota, Minneapolis, Minnesota</span></li>
                    <li><span className="font-weight-bold">Graduation: Spring 2012</span></li>
                    <li>Focus on Marketing, Community Relations, Brand Management, and Consumer Relations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  )
}
