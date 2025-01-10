import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../redux/action';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!username.trim()) {
      setError('Please enter a GitHub username.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      await dispatch(fetchUserData(username));
      navigate(`/repos/${username}`);
    } catch (error) {
      setError('Failed to fetch user data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>GitHub</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: '10px',
            width: '250px',
            marginRight: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '18px',
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            padding: '10px',
            width: '270px',
            marginRight: '10px',
            backgroundColor: '#0d7f25',
            color: '#fff',
            fontSize: '18px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};