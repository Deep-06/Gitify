import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData, selectRepo } from '../redux/action';
import { RepoCard } from '../components/RepoCard';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const RepoList = () => {
  const userData = useSelector((state) => state.userData); // User's GitHub data
  const repos = useSelector((state) => state.repos); // List of repositories
  const navigate = useNavigate();
  const { username } = useParams();
  const dispatch = useDispatch();

  console.log(userData);
  console.log(repos);

  useEffect(() => {
    if (username) {
      dispatch(fetchUserData(username));
    }
  }, [dispatch, username]);

  const handleRepoClick = (repo) => {
    dispatch(selectRepo(repo));
    navigate('/repo_desc');
  };

  if (!userData) {
    return <div>Loading user data...</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '80%', margin: '0 auto' }}>
      {/* User Info */}
      <div style={{ display: 'flex', justifyContent:'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <img
          src={userData.avatar_url}
          alt={`${userData.username}'s avatar`}
          style={{ width: '130px', height: '130px', borderRadius: '50%', marginRight: '20px' }}
        />
        <div style={{textAlign:'left'}}>
          <h2>{userData.username}</h2>
          <p style={{width:'200px'}}>{userData.bio || 'No bio available'}</p>
          <p>
            <strong>Location:</strong> {userData.location || 'Not specified'}
          </p>
         </div>
         <div style={{textAlign:'left'}}>
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
          <div style={{textAlign:'left', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          {/* Button/Link to Dashboard Page */}
          <Link to={`/`} style={{ padding: '12px', border: '1px solid #ccc', 
          borderRadius: '4px', textDecoration: 'none', fontSize:'15px' , backgroundColor:'green',color:'white'}}>
            Back to Home
          </Link>
          {/* Button/Link to Followers Page */}
          <Link to={`/followers/${userData.username}`} style={{ padding: '12px', border: '1px solid #ccc', 
          borderRadius: '4px', textDecoration: 'none', fontSize:'15px' , backgroundColor:'green',color:'white'}}>
            View Followers
          </Link>
        </div>
      </div>

      {/* Repository List */}
      <h3>Repositories</h3>

      <div style={{display:'grid', 
            gridTemplateColumns:"repeat(2, 1fr)" , gap:'15px'}}>
      {repos.length === 0 ? (
        <h4>No repository found</h4>
      ) : (
        repos.map((repo) => (
            <div key={repo.id} onClick={() => handleRepoClick(repo)} >
              <RepoCard repo={repo}  />
            </div>
          ))
      )}
          
      </div>
    </div>
  );
};
