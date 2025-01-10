import React from 'react';

export const RepoCard = ({ repo, onClick }) => {
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
      onClick={onClick}
    >
      <img
        src={repo.owner.avatar_url}
        alt={`${repo.owner.login}'s avatar`}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          marginRight: '10px',
        }}
      />
      <div style={{ flex: 1 }}>
        <h4 style={{ margin: '0 0 5px', fontSize: '1.2rem' }}>{repo.name}</h4>
        <p style={{ margin: '0', color: '#555' }}>
          {repo.description || 'No description provided'}
        </p>
      </div>
    </div>
  );
};

