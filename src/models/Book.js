const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  desc: String,
  qty: Number,
  price: Number
});

module.exports = mongoose.model("Book", BookSchema);
