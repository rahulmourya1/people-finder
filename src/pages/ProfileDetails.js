// src/pages/ProfileDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import GoogleMapComponent from '../components/GoogleMapComponent/GoogleMapComponent';

import './ProfileDetails.css';

const ProfileDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [profile, setProfile] = useState(null);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('summary') === 'true') {
      setShowSummary(true);
    }

    fetch('/profiles.json')
      .then(response => response.json())
      .then(data => {
        const foundProfile = data.find(p => p.id === parseInt(id, 10));
        setProfile(foundProfile);
      })
      .catch(error => console.error('Error fetching profile:', error));
  }, [id, location.search]);

  if (!profile) {
    return <div className="profile-details"><p>Loading profile...</p></div>;
  }

  const { name, photo, description, address } = profile;
  const { street, city, state, zipcode, geo } = address;
  const position = [parseFloat(geo.lat), parseFloat(geo.lng)];
   
  return (
    <div className="profile-details">
      <img src={photo} alt={`${name}`} className="profile-photo" />
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>Address:</h3>
      <p>{`${street}, ${city}, ${state} - ${zipcode}`}</p>
      
      {showSummary && <GoogleMapComponent position={position} name={name} />}
      
    </div>
  );
};

export default ProfileDetails;
