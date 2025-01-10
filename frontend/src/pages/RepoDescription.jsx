import React from 'react';
import { useSelector } from 'react-redux';
import { BsFillPatchCheckFill } from "react-icons/bs";


export const RepoDescription = () => {
  const repo = useSelector((state) => state.selectedRepo);


  return (
    <div style={{ padding: '20px', maxWidth: '80%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', fontSize: '20px' }}>
      <div style={{ width: '28%' }}>
        <img
          src={repo.owner.avatar_url}
          alt={`${repo.owner.login}'s avatar`}
          style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '20px' }}
        />
        <div style={{ textAlign: 'left', paddingLeft: '10%' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <p><BsFillPatchCheckFill style={{ color: 'green' }} /></p>
            <p style={{ color: '#3f3b3b' }}>Verified by GitHub</p>
          </div>
          <p>GitHub Confirms that this app meets the <span style={{ color: 'blue' }}>requirements for verifications.</span></p>
          <p>
            <strong>Owner:</strong> {repo.owner.login}
          </p>
          <p>
            <strong>Language:</strong> {repo.language || 'Not specified'}
          </p>
          <p>
            <strong>Visibility:</strong> {repo.visibility}
          </p>
          <div>
            <p style={{ fontSize: '24px', color: '#4d4b4b' }}>Categories</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
              <button style={{ fontSize: '16px', padding: '8px', color: 'blue' }}>Code review</button>
              <button style={{ fontSize: '16px', padding: '8px', color: 'blue' }}>IDEs</button>
              <button style={{ fontSize: '16px', padding: '8px', color: 'blue', backgroundColor: 'white', border: '1px solid #ede1e1' }}>Free</button>
              <button style={{ fontSize: '16px', padding: '8px', color: 'blue', backgroundColor: 'white', border: '1px solid #ede1e1' }}>Paid</button>
            </div>

          </div>
        </div>

      </div>

      <div style={{ textAlign: 'left', width: '68%' }}>
        <h2 style={{ fontSize: '36px' }}>{repo.name}</h2>
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
          <strong>Repository URL:</strong> <a href={repo.html_url}>{repo.html_url}</a>
        </p>
        <p>
          <strong>Clone URL:</strong> <a href={repo.clone_url}>{repo.clone_url}</a>
        </p>
        <p>
          <strong>Git URL:</strong> <a href={repo.git_url}>{repo.git_url}</a>
        </p>
        <p>
          <strong>Default Branch:</strong> {repo.default_branch}
        </p>
        <p>
          <strong>License:</strong> {repo.license?.name || 'No license specified'}
        </p>
        <p>
          <strong>Open Issues:</strong> {repo.open_issues_count}
        </p>

        <p>
          <strong>Watchers:</strong> {repo.watchers_count}
        </p>
        <p>
          <strong>Forks:</strong> {repo.forks_count}
        </p>



      </div>

    </div>
  );
};


