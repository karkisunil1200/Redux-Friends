import React from 'react';

import FriendForm from '../components/FriendForm/FriendForm';
import FriendsList from '../components/FriendsList/FriendsList';

function Profile() {
  return (
    <div>
      <h1>Welcome to your Profile</h1>
      <h3>Add a friend!</h3>
      <FriendsList />
      <FriendForm />
    </div>
  );
}

export default Profile;
