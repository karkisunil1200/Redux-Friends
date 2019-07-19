import React, {useEffect, useState} from 'react';
import {axiosWithAuth} from '../axiosAuth';

import Friend from '../Friend/Friend';

function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:5000/api/friends';
    axiosWithAuth()
      .get(url)
      .then(res => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {friends.map(friend => {
        return <Friend friend={friend} />;
      })}
    </div>
  );
}

export default FriendsList;
