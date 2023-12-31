const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchmea = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
});

const Product = mongoose.model("alpha", ProductSchmea);

module.exports = Product;
