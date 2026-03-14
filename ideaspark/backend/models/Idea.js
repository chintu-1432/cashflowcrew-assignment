const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  upvotes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Idea", ideaSchema);