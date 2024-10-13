// src/components/SearchBar/SearchBar.js
import React, { useEffect, useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm, setFilter }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Fetch unique cities from profiles.json
    fetch('/profiles.json')
      .then(response => response.json())
      .then(data => {
        const uniqueCities = [...new Set(data.map(profile => profile.address.city))];
        setCities(uniqueCities);
      })
      .catch(error => console.error('Error fetching cities:', error));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select className="filter-dropdown" onChange={handleFilterChange} defaultValue="">
        <option value="">Filter by City</option>
        {cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
