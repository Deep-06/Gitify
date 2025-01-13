import React, { useState } from 'react';

export const UpdateForm = ({ username, currentBio, currentLocation, onUpdate }) => {
  const [bio, setBio] = useState(currentBio || '');
  const [location, setLocation] = useState(currentLocation || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting updates:', { bio, location });
    onUpdate({ bio, location });
  };

  return (
    <form  onSubmit={handleSubmit}>
      <label style={{padding:'10px'}} >
        Bio:
        <input
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </label>
      <label style={{padding:'10px'}}>
        Location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <button style={{ padding: '8px', border: '1px solid #eae5e5', 
          borderRadius: '4px', textDecoration: 'none', fontSize:'15px' , backgroundColor:'green',color:'white'}} 
          type="submit">Submit</button>
    </form>
  );
};

