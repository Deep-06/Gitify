// FollowerCard.js
import React from 'react';

const FollowerCard = ({ follower }) => {
  return (
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
        <a href={follower.html_url} target="_blank" rel="noopener noreferrer">
          View Profile
        </a>
      </div>
    </div>
  );
};

export default FollowerCard;

