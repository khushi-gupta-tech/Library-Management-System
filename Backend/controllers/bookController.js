import Book from '../models/Book.js';

// Get all books
export async function getBooks(req, res) {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}

// Add a book
export async function addBook(req, res) {
  const { title, author, category, available } = req.body;
  try {
    const book = new Book({ title, author, category, available });
    await book.save();
    res.status(201).json({ message: 'Book added', book });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}
