const mongoose = require('mongoose'),
      Schema = mongoose.Schema;


const ProductSchema = new Schema({
  productName        : { type : String, required: true, trim: true },
  productCovering    : { type : String, required: true, trim: true },
  productDimensions  : { type : String, required: true, trim: true },
  productServings    : { type : Number, required: true, trim: true },
  category           : { type : String, required: true, trim: true },
  description        : { type : String, required: true, trim: true },
  imageUrl           : { type : String, required: true }

});

module.exports = mongoose.model('Product', ProductSchema, 'products');
