const Book = require("../models/book");
const Shelf = require("../models/shelf");

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

const initialShelves = [
  {
    name: "to read",
  },
  {
    name: "reading",
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

const nonExistingShelfId = async () => {
  const shelf = new Shelf({
    name: "to be removed",
  });
  await shelf.save();
  await shelf.deleteOne();
  return shelf._id.toString();
};

const shelvesInDb = async () => {
  const shelves = await Shelf.find({});
  return shelves.map((shelf) => shelf.toJSON());
};

module.exports = {
  initialBooks,
  initialShelves,
  nonExistingBookId,
  booksInDb,
  nonExistingShelfId,
  shelvesInDb,
};
