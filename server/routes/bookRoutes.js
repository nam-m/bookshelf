require("dotenv").config();
const bookRouter = require("express").Router();
const Book = require("../models/book");
// const { getImageSrc } = require("../../client/src/services/ImageService");
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
// const User = require("../models/user");
// const Shelf = require("../models/shelf");
// const jwt = require("jsonwebtoken");
// const token = require("../utils/token");

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

bookRouter.get("/", async (request, response) => {
  // const books = await Book.find({}).populate("user", {
  //   username: 1,
  //   name: 1,
  // });
  try {
    const books = await Book.find({});

    const booksWithSignedUrls = await Promise.all(
      books.map(async (book) => {
        const params = {
          Bucket: process.env.S3_BUCKET_NAME,
          Key: `${process.env.S3_BUCKET_IMAGE_FOLDER}/${book.imageSrc}`,
        };

        const command = new GetObjectCommand(params);
        const signedUrl = await getSignedUrl(s3Client, command, {
          expiresIn: 3600,
        });

        return {
          ...book.toObject(),
          imageSrc: signedUrl,
        };
      })
    );
    response.json(booksWithSignedUrls);
  } catch (error) {
    console.error("Error fetching books: ", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

bookRouter.get("/:id", async (request, response) => {
  try {
    const book = await Book.findById(request.params.id);
    if (book) {
      response.json(book);
    } else {
      response.status(404).end();
    }
    // Generate signed URL for the image
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: `${process.env.S3_BUCKET_IMAGE_FOLDER}/${book.imageSrc}`,
    };

    const command = new GetObjectCommand(params);
    const signedUrl = await getSignedUrl(s3Client, command, {
      expiresIn: 3600,
    });

    // Include the signed URL in the response
    const bookWithImage = {
      ...book.toObject(),
      imageSrc: signedUrl,
    };

    response.json(bookWithImage);
  } catch (error) {
    console.error("Error fetching book: ", error);
    response.status(500).json({ error: "Internal Server Error" });
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
    imageSrc: body.imageName,
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
