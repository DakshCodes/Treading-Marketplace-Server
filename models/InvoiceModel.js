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
            product :{
                type: Schema.Types.ObjectId,
                ref: "Product",
                required: [true, "please provide name"]
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
