import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectRepo } from '../redux/action';
import { RepoCard } from '../components/RepoCard';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const RepoList = () => {
  const userData = useSelector((state) => state.userData); // User's GitHub data
  const repos = useSelector((state) => state.repos); // List of repositories
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(userData);
  console.log(repos);

  if (!userData) {
    return <div>Loading user data...</div>;  
  }

  const handleRepoClick = (repo) => {
    dispatch(selectRepo(repo));
    navigate('/repo_desc');
    console.log(`Navigating to details of repo: ${repo.name}`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      {/* User Info */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img
          src={userData.avatar_url}
          alt={`${userData.username}'s avatar`}
          style={{ width: '80px', height: '80px', borderRadius: '50%', marginRight: '20px' }}
        />
        <div>
          <h2>{userData.username}</h2>
          <p>{userData.bio || 'No bio available'}</p>
          <p>
            <strong>Location:</strong> {userData.location || 'Not specified'}
          </p>
          <p>
            <strong>Public Repos:</strong> {userData.public_repos}
          </p>
          {/* Button/Link to Followers Page */}
          <Link to={`/followers/${userData.username}`} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', textDecoration: 'none' }}>
            View Followers
          </Link>
        </div>
      </div>

      {/* Repository List */}
      <h3>Repositories</h3>
      <ul style={{ listStyle: 'none', padding: '0' }}>
          {repos?.map((repo) => (
            <li key={repo.id} style={{ marginBottom: '10px' }}>
              <RepoCard repo={repo} onClick={() => handleRepoClick(repo)} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};
