const bookRouter = require("express").Router();
const Book = require("../models/book");
// const User = require("../models/user");
// const Shelf = require("../models/shelf");
// const jwt = require("jsonwebtoken");
// const token = require("../utils/token");

bookRouter.get("/", async (request, response) => {
  // const books = await Book.find({}).populate("user", {
  //   username: 1,
  //   name: 1,
  // });
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
  // Find user with valid token
  // const decodedToken = jwt.verify(
  //   token.getTokenFrom(request),
  //   process.env.SECRET
  // );
  // if (!decodedToken.id) {
  //   return response.status(401).json({ Error: "Token invalid" });
  // }

  // const user = await User.findById(decodedToken.id);

  const book = new Book({
    title: body.title,
    author: body.author,
    pages: body.pages,
    imageSrc: body.imageSrc,
    // user: user._id,
  });

  const savedBook = await book.save();
  // user.books = user.books.concat(savedBook._id);
  // const savedUser = await user.save();
  response.status(201).json(savedBook);
});

bookRouter.delete("/:id", async (request, response) => {
  await Book.findByIdAndDelete(request.params.id);
  response.status(204).end();
});

module.exports = bookRouter;
