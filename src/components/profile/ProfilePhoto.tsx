import React from 'react';
import { PaulPhoto } from 'images';

const ProfilePhoto = () => {
  return (
    <img className="profile-photo" src={PaulPhoto} alt="Paul"/>
  )
};

export default ProfilePhoto;