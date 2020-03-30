import React from 'react';
import '../styles/about.css';
import PaulPhoto from '../images/paul.jpg';

export default function ProfilePhoto() {
  return (
    <img className="profile-photo" src={PaulPhoto} alt="Paul"/>
  )
};

