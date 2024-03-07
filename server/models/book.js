const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  pages: String,
  imageSrc: String,
});

// Use id instead of _id
// and remove auto-generated _id and __v for each object
BookSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    // document: the mongoose document being converted
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Book", BookSchema);
