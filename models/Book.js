const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
  },
  author: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
  },
});

module.exports = mongoose.model("Book", BookSchema);
