const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Menu = new Schema({
  product_image: {
    type: String
  },
  product_name: {
    type: String
  },
  product_description: {
    type: String
  },
  product_price: {
    type: Number
  }
});

module.exports = mongoose.model('Menu', Menu);