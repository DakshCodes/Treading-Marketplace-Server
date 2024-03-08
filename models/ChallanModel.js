import mongoose from "mongoose";

const { model, models, Schema } = mongoose;

const ProductSchema = new Schema({
    product: {
        type: String,
        required: true,
    },
    cut: {
        type: String,
        required: true,
    },
    qty: {
        type: String,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    overall: {
        type: Number,
        required: true,
    },
});

const ChallanSchema = new Schema({
    name: {
        type: String,
    },
    products: [ProductSchema],
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "suppliers",
    },
    type: {
        type: String,
        enum: ["supplier", "customer"], // Assuming there are only two types of Challans
    },
    verified: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const Challan = models?.Challan || model('Challan', ChallanSchema);

export default Challan;
