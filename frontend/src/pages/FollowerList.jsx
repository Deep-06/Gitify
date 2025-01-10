// FollowerList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFollowers } from '../redux/action';  
import FollowerCard from '../components/FollowerCard';
import { useParams } from 'react-router-dom';

const FollowerList = () => {
  const dispatch = useDispatch();
  const followers = useSelector((state) => state.followers);
   const userData = useSelector((state) => state.userData);
  const { username } = useParams(); 

  useEffect(() => {
    console.log('Dispatching fetchFollowers for username:', username);
    dispatch(fetchFollowers(username));  
  }, [dispatch, username]);

  console.log('Followers from Redux:', followers);


  return (
    <div style={{ padding: '20px', maxWidth: '80%', margin: 'auto' , display:'flex', justifyContent:'center',gap:'10%'}}>
      <div style={{  textAlign: 'left', marginBottom: '20px' }}>
        <img
          src={userData.avatar_url}
          alt={`${userData.username}'s avatar`}
          style={{ width: '80px', height: '80px', borderRadius: '50%', marginRight: '20px' }}
        />
          <h2>{userData.username}</h2>
          <p style={{width:'200px'}}>{userData.bio || 'No bio available'}</p>
         
          <p>
            <strong>Location:</strong> {userData.location || 'Not specified'}
          </p>
          <p>
            <strong>Public Repos:</strong> {userData.public_repos}
          </p>
          <p>
            <strong>Following:</strong> {userData.following}
          </p>
        
          
          <p>
            <strong>Followers:</strong> {userData.followers}
          </p>
      
        
      </div>
      <div style={{width:'40%'}}>
      <h3>Followers of {username}</h3>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {followers?.map((follower) => (
          <li key={follower.id}>
            <FollowerCard follower={follower} />
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default FollowerList;

