import React from 'react';
import ProfilePhoto from './ProfilePhoto';

const Profile = () => {
	const dash = '—'

	return (
		<div className="text-center">
      <h1 className="nameplate">Paul Downing</h1>
      <p className="subplate-text">{dash}{dash} Software Engineering Manager {dash}{dash}</p>
      <p className="subplate-text">{dash}{dash} Senior Software Engineer II {dash}{dash}</p>
      <ProfilePhoto />
		</div>
	)
};

export default Profile;
