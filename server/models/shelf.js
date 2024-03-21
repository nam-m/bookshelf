const mongoose = require("mongoose");

const shelfSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

// Use id instead of _id
// and remove auto-generated _id and __v for each object
shelfSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    // document: the mongoose document being converted
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Shelf", shelfSchema);
