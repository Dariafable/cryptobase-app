import React from 'react';
import SavedCoin from '../components/SavedCoin';
import { UserAuth } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  if (user) {
    return (
      <div className='max-w-[1140px] mx-auto'>
        <div className='my-12 py-8 rounded-div flex items-center justify-between'>
          <div>
            <h1 className='text-2xl font-bold'>Account</h1>
            <p>Welcome, {user?.email}</p>
          </div>
          <div>
            <button
              onClick={handleSignOut}
              className='px-6 py-2 border rounded-2xl shadow-lg hover:shadow-2xl font-bold'
            >
              Sign Out
            </button>
          </div>
        </div>
        <div className='my-12 py-8 rounded-div flex items-center justify-between'>
          <div className='w-full min-h-[300px]'>
            <h1 className='py-4 text-2xl font-bold'>Watch List</h1>
            <SavedCoin />
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to='/signin' />;
  }
};

export default Account;
