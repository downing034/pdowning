import React from 'react';
import 'styles/app.css';


import { About } from './about';
import { Contact } from './contact';
import { Portfolio } from './portfolio';
import { Resume } from './resume';
import { Profile } from './profile';
import { History } from './history';


const App = () => {
  
  return (
    <div className="App">
      <div className="banner-image">
        <Profile />
      </div>
      <About />
      <Portfolio />
      <History />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
