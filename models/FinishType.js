import mongoose from "mongoose";

const { model, models, Schema } = mongoose;


const FinishTypeSchema = new Schema({
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

const FinishType = models?.FinishTypes || model('finishtypes', FinishTypeSchema);

export default FinishType; // Change this line to use default export
