import mongoose from "mongoose";

const { model, models, Schema } = mongoose;


const QualitySchema = new Schema({
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

const Quality = models?.Qualities || model('qualities', QualitySchema);

export default Quality; // Change this line to use default export
