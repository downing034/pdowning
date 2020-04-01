import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../styles/contact.css';

import LinkedIn from '../images/linkedin.png';
import Email from '../images/email.png';

export default function Contact() {
  const emailString = 'mailto:downing034@gmail.com?subject=Resume%20Inquiry'
  return (
    <ScrollableAnchor id={'contact'}>
      <div className="black-container credits">
        <div className="row">
          <div className="col-md-8 offset-2">
            <h3>Now that you know a little about me and my work, feel free to reach out
              and start a conversation on what I can do for you.
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 offset-2">
            <a href="https://www.linkedin.com/in/paul-w-downing/" target="_blank">
              <img alt="linkedin" id="linkedin" src={LinkedIn} />
            </a>
          </div>
            <div className="col-md-4">
              <a href={emailString} target="_blank">
                <img alt="email" id="email" src={Email} />
              </a>
            </div>
        </div>
        <div className="row">
          <div className="col-md-4 offset-6">downing034@gmail.com</div>
        </div>
        <div className="row">
          <div id="copywrite" className="col-md-4">
            © 2020 Paul Downing. All rights reserved.
          </div>
          <div className="col-md-2 offset-6">
            <a href="Logo source Logodesign.net" target="_blank">Logo source Logodesign.net</a>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  )
}
