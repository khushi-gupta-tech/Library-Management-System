import { useState , useEffect } from "react";

const IssueBook = () => {
  const [bookName, setBookName] = useState('');
  const [authorName,] = useState('F. Scott Fitzgerald');
  const [issueDate, setIssueDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [remarks, setRemarks] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setIssueDate(today);
    
    const returnD = new Date();
    returnD.setDate(returnD.getDate() + 15);
    setReturnDate(returnD.toISOString().split('T')[0]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!bookName) {
      setError('Book name is required');
      return;
    }

    const today = new Date().toISOString().split('T')[0];
    if (issueDate < today) {
      setError('Issue date cannot be less than today');
      return;
    }

    const maxReturn = new Date(issueDate);
    maxReturn.setDate(maxReturn.getDate() + 15);
    if (returnDate > maxReturn.toISOString().split('T')[0]) {
      setError('Return date cannot be more than 15 days from issue date');
      return;
    }

    setError('');
    alert('Book issued successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Issue a Book</h2>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Book Name *</label>
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Author Name</label>
          <input
            type="text"
            value={authorName}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Issue Date *</label>
          <input
            type="date"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Return Date *</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

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
          Issue Book
        </button>
      </form>
    </div>
  );
};

export default IssueBook;