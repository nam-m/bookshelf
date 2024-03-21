const bookRouter = require("express").Router();
const Book = require("../models/book");

bookRouter.get("/", async (request, response) => {
  const books = await Book.find({});
  response.json(books);
});

bookRouter.get("/:id", async (request, response) => {
  const book = await Book.findById(request.params.id);
  if (book) {
    response.json(book);
  } else {
    response.status(404).end();
  }
});

bookRouter.post("/", async (request, response) => {
  const body = request.body;
  if (!body.title || !body.author || !body.pages) {
    return response.status(400).json({
      Error: "Missing book title/author/pages",
    });
  }
  const book = new Book({
    title: body.title,
    author: body.author,
    pages: body.pages,
    imageSrc: body.imageSrc,
  });

  const savedBook = await book.save();
  if (savedBook) {
    response.status(201).json(savedBook);
  }
});

bookRouter.delete("/:id", async (request, response) => {
  await Book.findByIdAndDelete(request.params.id);
  response.status(204).end();
});

module.exports = bookRouter;
