// Backend - Product Model Schema
import mongoose from 'mongoose';
const { model, models, Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    quality: {
        type: String,
        required: true
    },

    design: {

        type: String,
        required: true

        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Design',
        // required: true
    },

    weight: {

        type: String,
        required: true

        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Weight',
        // required: true
    },

    remarks: {
        type: String
    },

    finishtype: {

        type: String,
        required: true

        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'FinishType',
        // required: true
    },

    feeltype: {

        type: String,
        required: true

        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'FeelType',
        // required: true
    },

});

const Product = models?.Product || model('Product', productSchema);

export default Product;
