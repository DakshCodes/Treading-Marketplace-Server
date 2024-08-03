import mongoose from "mongoose";

const { model, models, Schema } = mongoose;

const customerLedgerSchema = new Schema({
    customerRef: {
        type: Schema.Types.ObjectId,
        ref: "Customer",
    },

    paymentRef: {
        type: Schema.Types.ObjectId,
        ref: "Payment",
    },
    invoiceRef: {
        type: Schema.Types.ObjectId,
        ref: "Invoice",
    },
    
    credit : {
        type: Number,
    },
    debit : {
        type: Number,
    },

    Balance : {
        type: Number,
    },

    createdAt: {
        type: Date,
        default: Date.now(),
      },
    
    })
    
    const CustomerLedger = models?.Customers || model('CustomerLedger', customerLedgerSchema);
    
    export default CustomerLedger; // Change this line to use default export
    