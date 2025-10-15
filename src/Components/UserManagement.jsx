import { useState } from "react";

const UserManagement = () => {
  const [userType, setUserType] = useState('new');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name) {
      setError('Name is mandatory');
      return;
    }

    setError('');
    alert(`User ${userType === 'new' ? 'created' : 'updated'} successfully!`);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">User Management</h2>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">User Type *</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="new"
                checked={userType === 'new'}
                onChange={(e) => setUserType(e.target.value)}
                className="mr-2"
              />
              New User
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="existing"
                checked={userType === 'existing'}
                onChange={(e) => setUserType(e.target.value)}
                className="mr-2"
              />
              Existing User
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          {userType === 'new' ? 'Create' : 'Update'} User
        </button>
      </form>
    </div>
  );
};

export default UserManagement;