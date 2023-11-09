const Book = require("../models/Book");

// View all books
const viewAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({ books });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// Adding New Book
const addNewBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ book });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// Will view a particular book if it exist
const viewBook = async (req, res) => {
  try {
    const { id: bookId } = req.params;
    const book = await Book.findOne({ _id: bookId });
    if (!book) {
      return res.status(404).json({ msg: `No book found with id: ${bookId}` });
    }
    res.status(200).json({ book });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// Will update book with given i'd if it exist
const updateBook = async (req, res) => {
  try {
    const { id: bookId } = req.params;
    const book = await Book.findOneAndUpdate({ _id: bookId }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!book) {
      return res.status(404).json({ msg: `No book found with id:${bookId}` });
    }
    res.status(200).json({ book });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// Will delete book with given i'd if it exist
const deleteBook = async (req, res) => {
  try {
    const { id: bookId } = req.params;
    const book = await Book.findOneAndDelete({ _id: bookId });
    if (!book) {
      return res.status(404).json({ msg: `No book with id: ${bookId}` });
    }
    res.status(200).json({ book });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { viewAllBooks, addNewBook, viewBook, updateBook, deleteBook };
