import mongoose from "mongoose";

const { model, models, Schema } = mongoose;


const InvoiceSchema = new Schema({
    challanRef: [{
        type: Schema.Types.ObjectId,
        ref: "Challan",
        required: [true, "please provide name"]
 } ],

    products: [
        {
            product :{
                type: String,
                required: [true, "please provide name"]
            },
            cut: {
                type: String || Number,
                
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
