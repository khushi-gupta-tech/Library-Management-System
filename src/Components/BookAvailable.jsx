import { useState } from "react";

const BookAvailable = () => {
  const [searchType, setSearchType] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");
  const [, setSelectedBook] = useState(null);

  const mockBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Fiction",
      available: true,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      category: "Fiction",
      available: true,
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Fiction",
      available: false,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Romance",
      available: true,
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchType || !searchValue) {
      setError("Please select a search type and enter a value");
      return;
    }
    setError("");
    setSearchResults(mockBooks);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Check Book Availability
      </h2>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSearch}
        className="bg-white p-6 rounded-lg shadow-md mb-6"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Search By:
          </label>
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select search type</option>
            <option value="title">Book Title</option>
            <option value="author">Author Name</option>
            <option value="category">Category</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Search Value:
          </label>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter search value"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Search
        </button>
      </form>

      {searchResults.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Search Results</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Title</th>
                  <th className="px-4 py-2 text-left">Author</th>
                  <th className="px-4 py-2 text-left">Category</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Select</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((book) => (
                  <tr key={book.id} className="border-b">
                    <td className="px-4 py-2">{book.title}</td>
                    <td className="px-4 py-2">{book.author}</td>
                    <td className="px-4 py-2">{book.category}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded text-sm ${
                          book.available
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {book.available ? "Available" : "Not Available"}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      {book.available && (
                        <input
                          type="radio"
                          name="selectedBook"
                          onChange={() => setSelectedBook(book)}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookAvailable;
