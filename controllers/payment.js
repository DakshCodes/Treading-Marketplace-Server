import express from "express";
import Payment from "../models/PaymentModel.js";

const router = express.Router();

// Create width
router.post("/create-payment", async (req, res, next) => {
    try {
        const paymentDoc = await Payment.create(req.body);

        res.status(201).json({
            message: "Create Successfully",
            success: true,
            paymentDoc,
        });
    } catch (error) {
        res.json({
            message : "payment not be empty",
            success: false,
            error: error.message,
        }).status(404);
    }
});


// Get all widths
router.get("/get-all-payment", async (req, res, next) => {
    try {
        const payments = await Payment.find({});

        res.status(200).json({
            success: true,
            payments,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

// Delete width
router.delete("/delete-payment/:id", async (req, res, next) => {
   
    try {
        const paymentId = req.params.id;
        console.log(paymentId)
     
        const payment = await Payment.findByIdAndDelete(paymentId);
        if (!payment) {
            return res.status(404).json({
                success: false,
                error: "payment not found with this id",
            });
        }

        res.status(200).json({
            success: true,
            message: "payment deleted successfully!",
            payment,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

// Update width
router.put("/update-payment/:id", async (req, res, next) => {
    try {
        const paymentId = req.params.id;

        const payment = await Payment.findByIdAndUpdate(
            paymentId,
            req.body,
            { new: true } // Add this option to return the updated document
        );

        if (!payment) {
            return res.status(404).json({
                success: false,
                error: "payment not found with this id",
            });
        }

        res.status(200).json({
            success: true,
            message: "payment updated successfully!",
            payment,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

export default router;
