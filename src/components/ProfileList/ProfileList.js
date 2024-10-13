// src/components/ProfileList/ProfileList.js
import React from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';
import './ProfileList.css';

const ProfileList = ({ profiles }) => {
  return (
    <div className="profile-list">
      {profiles.map(profile => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileList;
