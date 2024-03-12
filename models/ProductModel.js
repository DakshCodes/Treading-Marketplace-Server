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
        default : null,
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
        required: true
    },

    design: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'designs',
        default : null,
        
    },

    weave: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'weaves',
        default : null,
        
    },

    width: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'widths',
        default : null,
        
    },

    finishtype: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'finishtypes',
        default : null,
        
    },

    feeltype: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'feeltypes',
        default : null,
        
    },

    pricePerUnit: {
        magnitude : {
            type : Number,
            required : true
        },
        unit : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "unit",
            required : true
        }
    },

});

const Product = models?.Product || model('Product', productSchema);

export default Product;
