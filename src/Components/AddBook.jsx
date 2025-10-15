import { useState } from "react";

const AddBook = () => {
  const [itemType, setItemType] = useState('book');
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    category: '',
    quantity: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.author || !formData.isbn || !formData.category || !formData.quantity) {
      setError('All fields are mandatory');
      return;
    }

    setError('');
    alert(`${itemType === 'book' ? 'Book' : 'Movie'} added successfully!`);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add {itemType === 'book' ? 'Book' : 'Movie'}</h2>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Item Type *</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="book"
                checked={itemType === 'book'}
                onChange={(e) => setItemType(e.target.value)}
                className="mr-2"
              />
              Book
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="movie"
                checked={itemType === 'movie'}
                onChange={(e) => setItemType(e.target.value)}
                className="mr-2"
              />
              Movie
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Title *</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">{itemType === 'book' ? 'Author' : 'Director'} *</label>
          <input
            type="text"
            value={formData.author}
            onChange={(e) => setFormData({...formData, author: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">{itemType === 'book' ? 'ISBN' : 'ID'} *</label>
          <input
            type="text"
            value={formData.isbn}
            onChange={(e) => setFormData({...formData, isbn: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Category *</label>
          <input
            type="text"
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Quantity *</label>
          <input
            type="number"
            value={formData.quantity}
            onChange={(e) => setFormData({...formData, quantity: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Add {itemType === 'book' ? 'Book' : 'Movie'}
        </button>
      </form>
    </div>
  );
};
export default AddBook;