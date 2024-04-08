import mongoose from "mongoose";

const { model, models, Schema } = mongoose;


const InvoiceSchema = new Schema({
    challanRef: {
        type: Schema.Types.ObjectId,
        ref: "challan",
        required: [true, "please provide name"]
    },

    products: [
        {
            name: {
                type: String,
                required: true,
            },
            received: {
                type: Number,
                required: true,
            },

            due: {
                type: Number,
                default: 0,
            },

            price: {
                type: Number,
                required: true,
            },
            overall: {
                type: Number,
            },
        },
    ],

    createdAt: {
        type: Date,
        default: Date.now(),
    },

})

const Invoice = models?.Invoices || model('invoices', InvoiceSchema);

export default Invoice; // Change this line to use default export
