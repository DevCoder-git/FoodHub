import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../stores/authStore';
import ProfileForm from '../components/profile/ProfileForm';

const Profile = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  if (!user) {
    navigate('/auth');
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
      <div className="bg-white rounded-xl shadow-md p-6">
        <ProfileForm />
      </div>
    </div>
  );
};

export default Profile;