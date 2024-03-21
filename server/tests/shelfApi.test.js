const supertest = require("supertest");
const { test, beforeEach, after, describe } = require("node:test");
const assert = require("node:assert");
const Shelf = require("../models/shelf");
const helper = require("./test_helper");
const mongoose = require("mongoose");
const app = require("../app");

const api = supertest(app);

describe("Shelves api tests", () => {
  beforeEach(async () => {
    await Shelf.deleteMany({});
    await Shelf.insertMany(helper.initialShelves);
  });

  test("shelves are returned as json", async () => {
    await api.get("/api/shelves").expect("Content-Type", /json/).expect(200);
  });

  test("all shelves are returned", async () => {
    const response = await api.get("/api/shelves");
    assert.strictEqual(response.body.length, helper.initialShelves.length);
  });

  describe("viewing a specific shelf", () => {
    test("succeeds with valid id", async () => {
      const shelvesAtStart = await helper.shelvesInDb();
      const shelfToView = shelvesAtStart[0];

      const resultShelf = await api
        .get(`/api/shelves/${shelfToView.id}`)
        .expect(200)
        .expect("Content-Type", /application\/json/);

      assert.deepStrictEqual(resultShelf.body, shelfToView);
    });

    test("fails with status code 404 if shelf does not exist", async () => {
      const nonExistingShelfId = await helper.nonExistingShelfId();
      await api.get(`/api/shelves/${nonExistingShelfId}`).expect(404);
    });

    test("fails with status code 400 if shelf id is invalid", async () => {
      const invalidShelfId = "5a3d5da59070081a82a3445";
      await api.get(`/api/shelves/${invalidShelfId}`).expect(400);
    });
  });

  describe("adding a new shelf", () => {
    test("succeeds with valid shelf data", async () => {
      const newShelf = new Shelf({
        name: "New Shelf",
      });

      await api
        .post("/api/shelves")
        .send(newShelf.toJSON())
        .expect("Content-Type", /application\/json/)
        .expect(201);

      const shelvesAtEnd = await helper.shelvesInDb();
      assert.strictEqual(shelvesAtEnd.length, helper.initialShelves.length + 1);

      const names = shelvesAtEnd.map((shelf) => shelf.name);
      assert(names.includes("New Shelf"));
    });

    test("fails with status code 400 if shelf data is invalid", async () => {
      const newShelf = new Shelf({});

      await api
        .post("/api/shelves")
        .send(newShelf.toJSON())
        .expect("Content-Type", /application\/json/)
        .expect(400);

      const shelvesAtEnd = await helper.shelvesInDb();
      assert.strictEqual(shelvesAtEnd.length, helper.initialShelves.length);
    });
  });

  describe("deleting a shelf", () => {
    test("a shelf can be deleted", async () => {
      const shelvesAtStart = await helper.shelvesInDb();
      const shelfToDelete = shelvesAtStart[0];

      await api.delete(`/api/shelves/${shelfToDelete.id}`).expect(204);

      const shelvesAtEnd = await helper.shelvesInDb();

      const names = shelvesAtEnd.map((shelf) => shelf.name);
      assert(!names.includes(shelfToDelete.name));

      assert.strictEqual(shelvesAtEnd.length, helper.initialShelves.length - 1);
    });
  });
});

after(async () => {
  await mongoose.connection.close();
});
