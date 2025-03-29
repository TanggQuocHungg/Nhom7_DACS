import React from 'react';
import { useAuth } from '../authContext';

const Profile: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600 text-lg">
        Bạn chưa đăng nhập.
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center transition-all duration-300 hover:scale-[1.01]">
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-full bg-purple-200 flex items-center justify-center text-4xl text-white font-bold shadow-inner">
            {user.name.charAt(0).toUpperCase()}
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Xin chào, {user.name}!</h2>
        <p className="text-gray-600 mb-6">📧 {user.email}</p>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition"
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

export default Profile;
