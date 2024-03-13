const bookRouter = require("express").Router();
const Book = require("../models/book");

bookRouter.get("/", (request, response) => {
  Book.find({}).then((books) => {
    response.json(books);
  });
});

bookRouter.get("/:id", (request, response, next) => {
  Book.findById(request.params.id)
    .then((book) => {
      if (book) {
        response.json(book);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

bookRouter.post("/", (request, response, next) => {
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

  book
    .save()
    .then((savedBook) => {
      response.status(201).json(savedBook);
    })
    .catch((error) => next(error));
});

bookRouter.delete("/:id", (request, response, next) => {
  Book.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

module.exports = bookRouter;
