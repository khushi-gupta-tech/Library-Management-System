import { useState } from "react";

const PayFine = ({ onComplete }) => {
  const [finePaid, setFinePaid] = useState(false);
  const [remarks, setRemarks] = useState('');
  const [error, setError] = useState('');
  const calculatedFine = 50;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (calculatedFine > 0 && !finePaid) {
      setError('Please check the Fine Paid checkbox to complete the return');
      return;
    }

    setError('');
    alert('Book returned successfully!');
    onComplete();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Pay Fine</h2>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Book Name</label>
          <input
            type="text"
            value="The Great Gatsby"
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Member Name</label>
          <input
            type="text"
            value="John Doe"
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Calculated Fine (₹)</label>
          <input
            type="text"
            value={calculatedFine}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>

        {calculatedFine > 0 && (
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={finePaid}
                onChange={(e) => setFinePaid(e.target.checked)}
                className="mr-2 w-4 h-4"
              />
              <span className="text-gray-700 font-semibold">Fine Paid</span>
            </label>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Remarks</label>
          <textarea
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="3"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default PayFine;