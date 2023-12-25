import React from 'react';
import 'styles/app.css';

import { About } from './about';
import { Abilities } from './abilities';
import { Contact } from './contact';
import { Portfolio } from './portfolio';
import { Profile } from './profile';
import { WorkHistory } from './workHistory';
import { ModalContextProvider } from 'contexts';

const App = () => {
  
  return (
    <ModalContextProvider>
      <div className="app">
        <Profile />
        <About />
        <Portfolio />
        <Abilities />
        <WorkHistory />
        <Contact />
      </div>
    </ModalContextProvider>
  );
}

export default App;