import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({

    customerRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    supplierRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'suppliers',
        required: true
    },
    paymentDate: {
        type: Date,
        required: true
    },
    amountEntered: {
        type: Number,
        required: true
    },
    paymentMode: {
        type: String,
        required: true
    },
    chequeNumber: {
        type: String
    },
    adjustments: [{
        invoiceNo: String,
        adjust: Number,
        discount: Number,
        interest: Number,
        remaining: Number
    }],
    newReference: {
        currentBalance: Number,
        adjust: Number,
        newBalance: Number
    }

}, { timestamps: true });

const Payment = mongoose.model('Payment', PaymentSchema);

export default Payment;