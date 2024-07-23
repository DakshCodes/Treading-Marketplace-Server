import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({

    customerRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },

    supplierRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
        required: true
    },

    amountEntered: {
        type: Number,
        required: true,
        min: 0
    },

    // newTotalAmountEntered: {
    //     type: Number,
    //     required: true,
    //     min: 0
    // },

    interestAmount: {
        type: Number,
        default: 0,
        min: 0
    },

    newReferenceAdjust: {
        type: Number,
        default: 0,
        min: 0
    },

    invoiceAdjustments: [{
        invoiceId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Invoice'
        },
        originalAmount: Number,
        adjustedAmount: Number,
        remainingAmount: Number
    }],

    overAllDueAmount: {
        type: Number,
        default: 0,
        min: 0
    },

    paymentDate: {
        type: Date,
        default: Date.now
    },

    //   paymentStatus: {
    //     type: String,
    //     enum: ['Pending', 'Completed', 'Failed'],
    //     default: 'Pending'
    //   },
    paymentMethod: {
        type: String,
        required: true
    },
    notes: String
}, { timestamps: true });

const Payment = mongoose.model('Payment', PaymentSchema);

export default Payment;