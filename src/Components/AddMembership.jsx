import { useState } from "react";

const AddMembership = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    duration: '6months'
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      setError('All fields are mandatory');
      return;
    }

    setError('');
    alert('Membership added successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Membership</h2>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Address *</label>
          <textarea
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="3"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Membership Duration *</label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                value="6months"
                checked={formData.duration === '6months'}
                onChange={(e) => setFormData({...formData, duration: e.target.value})}
                className="mr-2"
              />
              6 Months
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="1year"
                checked={formData.duration === '1year'}
                onChange={(e) => setFormData({...formData, duration: e.target.value})}
                className="mr-2"
              />
              1 Year
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="2years"
                checked={formData.duration === '2years'}
                onChange={(e) => setFormData({...formData, duration: e.target.value})}
                className="mr-2"
              />
              2 Years
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Add Membership
        </button>
      </form>
    </div>
  );
};

export default AddMembership;