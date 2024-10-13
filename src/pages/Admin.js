// src/pages/Admin.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import './Admin.css'; // We'll create this CSS file later

const Admin = () => {
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = db.collection('profiles').onSnapshot(
      (snapshot) => {
        const fetchedProfiles = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProfiles(fetchedProfiles);
      },
      (error) => {
        console.error('Error fetching profiles:', error);
        setError('Failed to load profiles.');
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      {error && <p className="error">{error}</p>}
      {/* Add functionality to add, edit, delete profiles here */}
      {/* This can be expanded based on your requirements */}
    </div>
  );
};

export default Admin;
