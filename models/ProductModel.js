// Backend - Product Model Schema
import mongoose from 'mongoose';
const { model, models, Schema } = mongoose;

const productSchema = new Schema({
    supplierName: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "suppliers"
    },
    productName: {
        type: String,
        required: true
    },

    quality: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'qualities',
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
        required: true
    },

    design: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'designs',
        
    },

    weave: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'weaves',
        
    },

    width: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'widths',
        
    },

    finishtype: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'finishtypes',
        
    },

    feeltype: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'feeltypes',
        
    },

    pricePerPiece: {
        type: Number,
        required: true
    },

});

const Product = models?.Product || model('Product', productSchema);

export default Product;
