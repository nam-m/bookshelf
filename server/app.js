const express = require("express");
const cors = require("cors");
const app = express();
const bookRouter = require("./routes/bookRoutes");
const middleware = require("./utils/middleware");
const config = require("./utils/config");
const logger = require("./utils/logger");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const url = config.MONGODB_URI;

mongoose
  .connect(url)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB: ", error.message);
  });

app.use(cors());
app.use(express.json());
app.use(express.static("build"));

app.use("/api/books", bookRouter);

// handler of requests with unknown endpoint
app.use(middleware.unknownEndpoint);

app.use(middleware.errorHandler);

module.exports = app;
