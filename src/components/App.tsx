import React from 'react';
import 'styles/app.css';

import { About } from './about';
import { Abilities } from './abilities';
import { Contact } from './contact';
import { Portfolio } from './portfolio';
import { Resume } from './resume';
import { Profile } from './profile';

const App = () => {
  
  return (
    <div className="app">
      <div className="banner-image">
        <Profile />
      </div>
      <About />
      <Portfolio />
      <Abilities />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;