const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: true
  },
  price: {
    type: String
  },
   image:{
    type:String
  },
  
});

const product = mongoose.model('product', userSchema);

module.exports = product;
