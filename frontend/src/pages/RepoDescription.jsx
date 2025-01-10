import React from 'react';
import { useSelector } from 'react-redux';

export const RepoDescription = () => {
  const repo = useSelector((state) => state.selectedRepo); 


  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      
      <h2>{repo.name}</h2>
      <p>
        <strong>Description:</strong> {repo.description || 'No description provided'}
      </p>
      <p>
        <strong>Owner:</strong> {repo.owner.login}
      </p>
      <img
        src={repo.owner.avatar_url}
        alt={`${repo.owner.login}'s avatar`}
        style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '20px' }}
      />
      <p>
        <strong>Visibility:</strong> {repo.visibility}
      </p>
      <p>
        <strong>Default Branch:</strong> {repo.default_branch}
      </p>
      <p>
        <strong>Language:</strong> {repo.language || 'Not specified'}
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
  );
};


