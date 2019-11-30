const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const OrderScheme = new Schema ({
   firstName  : { type: String, required: true, trim: true},
   lastName   : { type: String, required: true, trim: true},
   email      : { type: String, required: false, trim: true},
   phone      : { type: String, required: true, trim: true},
   notification: { type: String, required: true, trim: true},
   orderType1 : { type: String, required: false, trim: true},
   orderType2 : { type: String, required: false, trim: true},
   orderType3 : { type: String, required: false, trim: true},
   orderType4 : { type: String, required: false, trim: true},
   servings : { type: String, required: true, trim: true},
   occassion  : { type: String, required: false, trim: true},
   dateOfOccassion: { type: Date, required: false, trim: true},
   dateOfApplication: { type: Date, required: true, trim: true},
   theme      : { type: String, required: false, trim: true},
   productId  : { type: String, required: false, trim: true},
   productImage: { type: Buffer, required: false, trim: false}

});

module.exports = mongoose.model('Order', OrderScheme, 'orders');
