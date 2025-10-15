

const Reports = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Reports</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Active Issues</h3>
          <p className="text-gray-600 mb-4">View all currently issued books</p>
          <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
            View Report
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Master List of Memberships</h3>
          <p className="text-gray-600 mb-4">View all library memberships</p>
          <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
            View Report
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Master List of Books</h3>
          <p className="text-gray-600 mb-4">View complete book inventory</p>
          <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
            View Report
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Master List of Movies</h3>
          <p className="text-gray-600 mb-4">View complete movie inventory</p>
          <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
            View Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;