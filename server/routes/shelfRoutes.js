const shelfRouter = require("express").Router();
const Shelf = require("../models/shelf");

shelfRouter.get("/", async (request, response) => {
  const shelves = await Shelf.find({});
  response.json(shelves);
});

shelfRouter.get("/:id", async (request, response) => {
  const shelf = await Shelf.findById(request.params.id);
  if (shelf) {
    response.json(shelf);
  } else {
    response.status(404).end();
  }
});

shelfRouter.post("/", async (request, response) => {
  const body = request.body;
  if (!body.name) {
    return response.status(400).json({
      Error: "Missing shelf name",
    });
  }

  const newShelf = new Shelf({
    name: body.name,
  });

  const savedShelf = await newShelf.save();
  if (savedShelf) {
    response.status(201).json(savedShelf);
  }
});

shelfRouter.delete("/:id", async (request, response) => {
  await Shelf.findByIdAndDelete(request.params.id);
  response.status(204).end();
});

module.exports = shelfRouter;
