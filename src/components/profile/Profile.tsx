import React from 'react';

import { Navbar } from 'components/navbar';
import ProfilePhoto from './ProfilePhoto';

const Profile = () => {
	const dash = '—'

	return (
		<>
			<Navbar />
      <h1 className="nameplate">Paul Downing</h1>
      <p className="subplate-text">{dash}{dash} Sr. Software Engineer II {dash}{dash}</p>
      <ProfilePhoto />
		</>
	)
};

export default Profile;