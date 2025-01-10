import React from 'react';
import { useSelector } from 'react-redux';

export const RepoDescription = () => {
  const repo = useSelector((state) => state.selectedRepo); 


  return (
    <div style={{ padding: '20px', maxWidth: '80%', margin: '0 auto',display:'flex', justifyContent:'space-between', fontSize:'20px' }}>
      <div style={{width:'30%'}}>
      <img
        src={repo.owner.avatar_url}
        alt={`${repo.owner.login}'s avatar`}
        style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '20px' }}
      />
      <div style={{textAlign:'left', paddingLeft:'10%'}}>
      <p>
        <strong>Owner:</strong> {repo.owner.login}
      </p>
      <p>
        <strong>Language:</strong> {repo.language || 'Not specified'}
      </p>
      <p>
        <strong>Visibility:</strong> {repo.visibility}
      </p>
      </div>
      
      </div>

      <div style={{textAlign:'left', width:'70%'}}>
      <h2 style={{fontSize:'36px'}}>{repo.name}</h2>
      <button style={{
            padding: '10px',
            width: '250px',
            marginRight: '10px',
            backgroundColor: '#0d7f25',
            color: '#fff',
            fontSize: '18px',
            border: '1px solid #fff',
            borderRadius: '4px',
            cursor: 'pointer',
          }}>Set up a plan</button>
      <p>
        <strong>Description:</strong> {repo.description || 'No description provided'}
      </p>
      <p>
        <strong>Default Branch:</strong> {repo.default_branch}
      </p>
      <p>
        <strong>Forks:</strong> {repo.forks_count}
      </p>
      <p>
        <strong>Open Issues:</strong> {repo.open_issues_count}
      </p>
      <p>
        <strong>Watchers:</strong> {repo.watchers_count}
      </p>
      <p>
        <strong>License:</strong> {repo.license?.name || 'No license specified'}
      </p>
      <p>
        <strong>Git URL:</strong> <a href={repo.git_url}>{repo.git_url}</a>
      </p>
      <p>
        <strong>Clone URL:</strong> <a href={repo.clone_url}>{repo.clone_url}</a>
      </p>
      <p>
        <strong>Repository URL:</strong> <a href={repo.html_url}>{repo.html_url}</a>
      </p>
      </div>

    </div>
  );
};


