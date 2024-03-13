const supertest = require("supertest");
const { test, beforeEach, after } = require("node:test");
const assert = require("node:assert");
const Book = require("../models/book");
const helper = require("./test_helper");
const mongoose = require("mongoose");
const app = require("../app");
// const BOOKS = require("../data/BookData");
const api = supertest(app);

beforeEach(async () => {
  await Book.deleteMany({});
  // await Book.insertMany(BOOKS);
  const initialBooks = helper.initialBooks.map((book) => new Book(book));
  const promiseBooks = initialBooks.map((book) => book.save());
  await Promise.all(promiseBooks);
});

test("books are returned as json", async () => {
  await api.get("/api/books").expect("Content-Type", /json/).expect(200);
});

test("all books are returned", async () => {
  const response = await api.get("/api/books");
  assert.strictEqual(response.body.length, helper.initialBooks.length);
});

test("create new valid book", async () => {
  const newBook = new Book({
    title: "New Book",
    author: "James",
    pages: "789",
    imageSrc: "",
  });

  await api
    .post("/api/books")
    .send(newBook.toJSON())
    .expect("Content-Type", /application\/json/)
    .expect(201);

  const booksAtEnd = await helper.booksInDb();
  assert.strictEqual(booksAtEnd.length, helper.initialBooks.length + 1);

  const titles = booksAtEnd.map((book) => book.title);
  assert(titles.includes("New Book"));
});

test("invalid book is not created", async () => {
  const newBook = new Book({
    title: "Title only",
  });

  await api
    .post("/api/books")
    .send(newBook.toJSON())
    .expect("Content-Type", /application\/json/)
    .expect(400);

  const booksAtEnd = await helper.booksInDb();
  assert.strictEqual(booksAtEnd.length, helper.initialBooks.length);
});

test("a specific book can be viewed", async () => {
  const booksAtStart = await helper.booksInDb();
  const bookToView = booksAtStart[0];

  const resultBook = await api
    .get(`/api/books/${bookToView.id}`)
    .expect(200)
    .expect("Content-Type", /application\/json/);

  assert.deepStrictEqual(resultBook.body, bookToView);
});

test("a book can be deleted", async () => {
  const booksAtStart = await helper.booksInDb();
  const bookToDelete = booksAtStart[0];

  await api.delete(`/api/books/${bookToDelete.id}`).expect(204);

  const booksAtEnd = await helper.booksInDb();

  const titles = booksAtEnd.map((book) => book.title);
  assert(!titles.includes(bookToDelete.title));

  assert.strictEqual(booksAtEnd.length, helper.initialBooks.length - 1);
});

after(async () => {
  await mongoose.connection.close();
});
