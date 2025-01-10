// FollowerList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFollowers } from '../redux/action';  
import FollowerCard from '../components/FollowerCard';
import { useParams } from 'react-router-dom';

const FollowerList = () => {
  const dispatch = useDispatch();
  const followers = useSelector((state) => state.followers);
  const { username } = useParams(); 

  useEffect(() => {
    console.log('Dispatching fetchFollowers for username:', username);
    dispatch(fetchFollowers(username));  
  }, [dispatch, username]);

  console.log('Followers from Redux:', followers);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h3>Followers of {username}</h3>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {followers?.map((follower) => (
          <li key={follower.id}>
            <FollowerCard follower={follower} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowerList;

