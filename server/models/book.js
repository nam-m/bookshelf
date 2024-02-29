const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const url = process.env.MONGODB_URI;

mongoose
  .connect(url)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting ton MongoDB: ", error.message);
  });

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  pages: String,
  bookCoverLink: String,
});

// Use id instead of _id
// and remove auto-generated _id and __v for each object
bookSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    // document: the mongoose document being converted
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Book", bookSchema);
