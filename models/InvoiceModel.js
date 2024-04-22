import mongoose from "mongoose";

const { model, models, Schema } = mongoose;


const InvoiceSchema = new Schema({
    challanRef: [{
        type: Schema.Types.ObjectId,
        ref: "challan",
        required: [true, "please provide name"]
 } ],

    products: [
        {
            product :{
                type: Schema.Types.ObjectId,
                ref: "Product",
                required: [true, "please provide name"]
            },
            cut: {
                type: Schema.Types.ObjectId,
                ref: "Cut",
                required: true,
            },
            qtyPcs :{
             type : String || Number,
            },
            qtyMtr :{
             type : String || Number,
                
            },
            bales:{
             type : String || Number,
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
            total: {
                type: Number,
            },
            markAsCompleted: {
                type: Boolean,
                default : false
            },
        },
    ],
    markOverallCompleted :{
        type : Boolean,
        default : false
    },

    createdAt: {
        type: Date,
        default: Date.now(),
    },

})

const Invoice = models?.Invoices || model('invoices', InvoiceSchema);

export default Invoice; // Change this line to use default export
