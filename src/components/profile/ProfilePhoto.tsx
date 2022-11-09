import React from 'react';
import 'styles/about.css';
import { PaulPhoto } from 'images';

const ProfilePhoto = () => {
  return (
    <img className="profile-photo" src={PaulPhoto} alt="Paul"/>
  )
};

export default ProfilePhoto;