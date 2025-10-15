// models/Book.js
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  available: { type: Boolean, default: true },
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);
export default Book; // ✅ ESM export
