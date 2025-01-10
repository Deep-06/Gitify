// FollowerList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFollowers } from '../redux/action';  
import FollowerCard from '../components/FollowerCard';

const FollowerList = ({ username }) => {
  const dispatch = useDispatch();
  const followers = useSelector((state) => state.followers);

  useEffect(() => {
    dispatch(fetchFollowers(username));  // Fetch followers for the user
  }, [dispatch, username]);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h3>Followers of {username}</h3>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {followers.map((follower) => (
          <li key={follower.id}>
            <FollowerCard follower={follower} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowerList;

