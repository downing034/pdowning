import React from 'react';
import '../styles/app.css';
import { Button } from 'react-bootstrap';
import Navbar from './navbar';

function App() {
  const dash = '—'
  return (
    <div className="App">
      <div className="banner-image">
        <Navbar />

        <h1 className="nameplate">Paul Downing</h1>
        <p className="subplate-text">{dash}{dash} Software Engineer {dash}{dash}</p>
      </div>
    </div>
  );
}

export default App;
