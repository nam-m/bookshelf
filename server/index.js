const express = require("express");
const cors = require("cors");
const PORT = 3002;

const app = express();
app.use(cors());
app.use(express.json());

let BOOKS = [
  {
    title: "Aislyn",
    author: "Suzanne Walters",
    pages: 300,
    imageSrc: "/assets/covers/aislyn.jpg",
  },
  {
    title: "All Plants Can't Live",
    author: "Ryan Jacson",
    pages: 230,
    imageSrc: "/assets/covers/all_plants_cant_live.jpg",
  },
  {
    title: "The Great Azulene Casino",
    author: "Freddie Pearce",
    pages: 137,
    imageSrc: "/assets/covers/azulene_casino.jpg",
  },
  {
    title: "Passing Clouds Of Silver",
    author: "River Kirk",
    pages: 590,
    imageSrc: "/assets/covers/clouds_of_silver.jpg",
  },
  {
    title: "Cluster",
    author: "Jessica D. Palma",
    pages: 219,
    imageSrc: "/assets/covers/cluster.jpg",
  },
  {
    title: "Crack The Code",
    author: "Patrick C. Harless",
    pages: 345,
    imageSrc: "/assets/covers/crack_the_code.jpg",
  },
  {
    title: "Fascination",
    author: "Kailee Singleton",
    pages: 182,
    imageSrc: "/assets/covers/fascination.jpg",
  },
  {
    title: "The Lobster Shack",
    author: "Aileen Slater",
    pages: 92,
    imageSrc: "/assets/covers/lobster_shack.jpg",
  },
  {
    title: "Praying Mantises",
    author: "Denny Mckenzie",
    pages: 329,
    imageSrc: "/assets/covers/praying_mantises.jpg",
  },
  {
    title: "Quality design",
    author: "Jude Combs",
    pages: 129,
    imageSrc: "/assets/covers/quality_design.jpg",
  },
  // {
  //   title: "Reflect",
  //   author: "Jeffrey R. Reid",
  //   pages: 1028,
  //   imageSrc: "/assets/covers/reflect.jpg",
  // },
  {
    title: "Unleash The Dragon",
    author: "Robbie E. Pearson",
    pages: 342,
    imageSrc: "/assets/covers/unleash_the_dragon.jpg",
  },
  {
    title: "Washoku",
    author: "",
    pages: 184,
    imageSrc: "/assets/covers/washoku.jpg",
  },
];

app.get("/books", (request, response) => {
  response.json(BOOKS);
});

app.post("/books", (request, response) => {
  const body = request.body;
  if (!body.title || !body.author || !body.pages) {
    return response.status(400).json({
      Error: "Missing book title/author/pages",
    });
  }
  const book = {
    title: body.title,
    author: body.author,
    pages: body.pages,
    imageSrc: body.imageSrc,
  };

  BOOKS = BOOKS.concat(book);
  response.json(book);
});

app.delete("/books/:id", (request, response) => {
  const id = Number(request.params.id);
  BOOKS = BOOKS.filter((book) => book.id !== id);
  response.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
