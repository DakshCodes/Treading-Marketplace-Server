import mongoose from "mongoose";

const { model, models, Schema } = mongoose;

const supplierLedgerSchema = new Schema({
    supplierRef: {
        type: Schema.Types.ObjectId,
        ref: "Supplier",
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
    
    const SupplierLedger = models?.Suppliers || model('suppliers', supplierLedgerSchema);
    
    export default SupplierLedger; // Change this line to use default export
    