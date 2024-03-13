const Book = require("../models/book");

const initialBooks = [
  {
    title: "Test1",
    author: "Henry",
    pages: "123",
    imageSrc: "",
  },
  {
    title: "Test2",
    author: "Lily",
    pages: "456",
    imageSrc: "",
  },
];

// Create non-existing book id by create and delete a book in the db
const nonExistingBookId = async () => {
  const book = new Book({
    title: "To be removed",
    author: "Harold",
    pages: "0",
    imageSrc: "",
  });
  await book.save();
  await book.deleteOne();
  return book._id.toString();
};

// Return all books in the db
const booksInDb = async () => {
  const books = await Book.find({});
  return books.map((book) => book.toJSON());
};

module.exports = { initialBooks, nonExistingBookId, booksInDb };
