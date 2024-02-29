require("dotenv").config();
// const BOOKS = require("./data/BookData");
const express = require("express");
const cors = require("cors");
const Book = require("./models/book");
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (error, request, response, next) => {
  console.error(error.message);
  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name == "ValidationError") {
    return response.status(400).json({ error: error.message });
  }
  next(error);
};

// // Insert all books
// Book.insertMany(BOOKS).then(() => console.log("insert all books"));

// Get all books
app.get("/api/books", (request, response) => {
  Book.find({}).then((books) => {
    response.json(books);
  });
});

// Get book with specific id
app.get("/api/books/:id", (request, response, next) => {
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

app.post("/api/books", (request, response, next) => {
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
      response.json(savedBook);
    })
    .catch((error) => next(error));
});

app.delete("/api/books/:id", (request, response, next) => {
  Book.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

// handler of requests with unknown endpoint
app.use(unknownEndpoint);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
