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
    remarkDesc: {
        type: String,
    },
    bales: {
        type: String,
        required: true,
    },
    unit: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const QuickChallanSchema = new Schema({
    products: [ProductSchema],
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "suppliers",
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer",
    },
    quickchallanNo: {
        type: String,
        required: true,
    },
    totalBill: {
        type: String,
        required: true,
    },
    quickchallanDate: {
        type: Date,
        required: true,
    },
    type: {
        type: String,
        enum: ["supplier", "product"],
    },
    verified: {
        type: Boolean,
        default: false,
    },
    overallremarks : {
        type : String,
        required : true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const QuickChallan = models?.QuickChallan || model('QuickChallan', QuickChallanSchema);

export default QuickChallan;
