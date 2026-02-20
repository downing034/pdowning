import React from 'react';
import { About } from './about';
import { Abilities } from './abilities';
import { Contact } from './contact';
import { Portfolio } from './portfolio';
import { Profile } from './profile';
import { WorkHistory } from './workHistory';
import { Navigation } from './navigation';

const App = () => {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      <Navigation />
      <Profile />
      <About />
      <Portfolio />
      <Abilities />
      <WorkHistory />
      <Contact />
    </>
  );
};

export default App;
