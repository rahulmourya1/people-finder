// src/context/ProfilesContext.js
import React, { createContext, useState, useEffect } from 'react';

export const ProfilesContext = createContext();

export const ProfilesProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/profiles.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProfiles(data))
      .catch(error => console.error('Error fetching profiles:', error));
  }, []);

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ProfilesContext.Provider
      value={{
        profiles: filteredProfiles,
        selectedProfile,
        setSelectedProfile,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </ProfilesContext.Provider>
  );
};