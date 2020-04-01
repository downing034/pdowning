import React from 'react';
import '../styles/app.css';
import { Button } from 'react-bootstrap';
import Navbar from './navbar';
import ProfilePhoto from './profile-photo';
import Portfolio from './portfolio';
import About from './about';
import Resume from './resume';
import Contact from './contact';

function App() {
  const dash = '—'
  return (
    <div className="App">
      <div className="banner-image">
        <Navbar />
        <h1 className="nameplate">Paul Downing</h1>
        <p className="subplate-text">{dash}{dash} Software Engineer {dash}{dash}</p>
        <ProfilePhoto />
      </div>
      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
