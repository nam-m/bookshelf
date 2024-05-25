const express = require("express");
const cors = require("cors");
const app = express();
require("express-async-errors");
// const userRouter = require("./routes/userRoutes");
const bookRouter = require("./routes/bookRoutes");
const shelfRouter = require("./routes/shelfRoutes");
const middleware = require("./utils/middleware");
const config = require("./utils/config");
const logger = require("./utils/logger");
const mongoose = require("mongoose");
// const loginRouter = require("./routes/loginRoutes");

mongoose.set("strictQuery", false);

const mongodb_url = config.MONGODB_URI;

mongoose
  .connect(mongodb_url)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB: ", error.message);
  });

app.use(cors());
app.use(express.json());
app.use(express.static("build"));
app.use(middleware.requestLogger);

// app.use("/api/login", loginRouter);
// app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);
app.use("/api/shelves", shelfRouter);

// handler of requests with unknown endpoint
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
