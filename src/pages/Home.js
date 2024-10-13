// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import ProfileList from '../components/ProfileList/ProfileList';
import SearchBar from '../components/SearchBar/SearchBar';
import './Home.css';

const Home = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCity, setFilterCity] = useState('');

  useEffect(() => {
    fetch('/profiles.json')
      .then(response => response.json())
      .then(data => setProfiles(data))
      .catch(error => console.error('Error fetching profiles:', error));
  }, []);

  const filteredProfiles = profiles.filter(profile => {
    const matchesName = profile.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = filterCity ? profile.address.city === filterCity : true;
    return matchesName && matchesCity;
  });

  return (
    <div className="home">
      <h1>Profile Mapper</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setFilter={setFilterCity}
      />
      <ProfileList profiles={filteredProfiles} />
    </div>
  );
};

export default Home;
