const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema(
    {
        name: String,
        category: String,
        price: Number,
        ratings: Number,
        discount: String,
        images: [String]
    }
);

exports.Product = mongoose.model('Product', productSchema);
