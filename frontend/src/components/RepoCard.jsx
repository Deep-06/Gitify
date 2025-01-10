import React from 'react';

export const RepoCard = ({ repo, onClick }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #f2ecec',
        borderRadius: '4px',
        padding: '10px',
        marginBottom: '10px',
        cursor: 'pointer',
        height:'80px'
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
      <div style={{ textAlign:'left',  padding:'5px'}}>
        <h4 style={{ margin: '0 0 5px', fontSize: '1.2rem', color: '#3e76f0' }}>{repo.name} </h4>
        <p style={{ margin: '0', color: '#797676' }}>
          {repo.description || 'No description provided'}
        </p>
      </div>
    </div>
  );
};

