import mongoose from "mongoose";

const { model, models, Schema } = mongoose;


const FeelTypeSchema = new Schema({
    name: {
        type: String,
        required: [true, "please provide name"]
    },
    verified: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },

})

const FeelType = models?.FeelTypes || model('feeltypes', FeelTypeSchema);

export default FeelType; // Change this line to use default export
