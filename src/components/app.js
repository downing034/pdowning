import React from 'react';
import '../styles/app.css';
import { Button } from 'react-bootstrap';
import Navbar from './navbar';

function App() {
  return (
    <div className="App">
      <div className="banner-image">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
