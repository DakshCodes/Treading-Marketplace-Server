import express from "express";
import Customerpayment from "../models/CustomerPaymentModel.js"
const router = express.Router();

// Create width
router.post("/create-customerpayment", async (req, res, next) => {
    try {
        const customerpaymentDoc = await Customerpayment.create(req.body);

        res.status(201).json({
            message: "Create Successfully",
            success: true,
            customerpaymentDoc,
        });
    } catch (error) {
        res.json({
            message : "customerpayment not be empty",
            success: false,
            error: error.message,
        }).status(404);
    }
});


// Get all widths
router.get("/get-all-customerpayments", async (req, res, next) => {
    try {
        const customerpayments = await Customerpayment.find({});

        res.status(200).json({
            success: true,
            customerpayments,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

// Delete width
router.delete("/delete-customerpayment/:id", async (req, res, next) => {
   
    try {
        const customerpaymentId = req.params.id;
        console.log(customerpaymentId)
     
        const customerpayment = await Customerpayment.findByIdAndDelete(customerpaymentId);
        if (!customerpayment) {
            return res.status(404).json({
                success: false,
                error: "customerpayment not found with this id",
            });
        }

        res.status(200).json({
            success: true,
            message: "customerpayment deleted successfully!",
            customerpayment,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

// Update width
router.put("/update-customerpayment/:id", async (req, res, next) => {
    try {
        const customerpaymentId = req.params.id;

        const customerpayment = await Customerpayment.findByIdAndUpdate(
            customerpaymentId,
            req.body,
            { new: true } // Add this option to return the updated document
        );

        if (!customerpayment) {
            return res.status(404).json({
                success: false,
                error: "customerpayment not found with this id",
            });
        }

        res.status(200).json({
            success: true,
            message: "customerpayment updated successfully!",
            customerpayment,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

export default router;
