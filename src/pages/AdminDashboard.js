// src/pages/AdminDashboard.js
import React, { useContext, useState } from 'react';
import { ProfilesContext } from '../context/ProfilesContext';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import ProfileForm from '../components/ProfileForm/ProfileForm';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { profiles, deleteProfile, addProfile, editProfile } = useContext(ProfilesContext);
  const [editingProfile, setEditingProfile] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const handleEdit = (profile) => {
    setEditingProfile(profile);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this profile?')) {
      deleteProfile(id);
    }
  };

  const handleFormClose = () => {
    setEditingProfile(null);
    setIsAdding(false);
  };

  return (
    <div className="admin-dashboard p-4">
      <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
      <button
        onClick={() => setIsAdding(true)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add New Profile
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {profiles.map(profile => (
          <div key={profile.id} className="relative">
            <ProfileCard profile={profile} onSummaryClick={() => {}} />
            <div className="absolute top-2 right-2 flex space-x-2">
              <button
                onClick={() => handleEdit(profile)}
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(profile.id)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {(editingProfile || isAdding) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 relative w-11/12 md:w-3/4 lg:w-1/2">
            <button
              onClick={handleFormClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &#10005;
            </button>
            <ProfileForm
              profile={editingProfile}
              onClose={handleFormClose}
              onSubmit={editingProfile ? editProfile : addProfile}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
