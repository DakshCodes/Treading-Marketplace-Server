import mongoose from "mongoose";

const { model, models, Schema } = mongoose;


const DesignSchema = new Schema({
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

const Design = models?.Designs || model('designs', DesignSchema);

export default Design; // Change this line to use default export
