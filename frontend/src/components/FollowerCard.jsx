// FollowerCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const FollowerCard = ({ follower }) => {
  return (
    <>
    <Link to={`/repos/${follower.login}`} style={{ textDecoration: 'none', color: '#007BFF' }}>

    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '10px',
        marginBottom: '10px',
        cursor: 'pointer',
      }}
    >

      <img
        src={follower.avatar_url}
        alt={`${follower.login}'s avatar`}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          marginRight: '20px',
        }}
      />
      <div>
        <h4>{follower.login}</h4>
      </div>
     
    </div>
    </Link>
    </>
  );
};

export default FollowerCard;

