import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import {
  LinkedIn,
  Email
} from 'images';

const Contact = () => {
  const emailString = 'mailto:downing034@gmail.com?subject=Resume%20Inquiry';

  return (
    <ScrollableAnchor id={'contact'}>
      <div className="dark-slate-container text-center">
        <div className="row">

          <div className="col-md-12 text-center" id="contact-text">
            <h3>Now that you know a little about me and my work, feel free to reach out
              and start a conversation on what I can do for you.
            </h3>
          </div>
        

          <div className="col-12 col-sm-6 col-md-4 offset-md-2">
            <div className="contact-card">
              <a
                className="contact-card-icon"
                href="https://www.linkedin.com/in/paul-w-downing/"
                target="_blank"
              >
                <img alt="linkedin" id="linkedin" src={LinkedIn} />
              </a>

              <div className="contact-card-text">/in/paul-w-downing</div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <div className="contact-card">
              <a
                id="email-link"
                className="contact-card-icon"
                href={emailString}
                target="_blank"
              >
                <img alt="email" id="email" src={Email} />
              </a>

              <div className="contact-card-text">downing034@gmail.com</div>
            </div>
          </div>
        
          <div id="copywrite" className="col-lg-12">
            © 2023 Paul Downing. All rights reserved.
          </div>
        
        </div>
      </div>
        
      
    </ScrollableAnchor>
  )
};

export default Contact;
