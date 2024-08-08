import express from "express";
import Supplierpayment from "../models/SupplierPaymentModel.js"
const router = express.Router();

// Create width
router.post("/create-supplierpayment", async (req, res, next) => {
    try {
        const supplierpaymentDoc = await Supplierpayment.create(req.body);

        res.status(201).json({
            message: "Create Successfully",
            success: true,
            supplierpaymentDoc,
        });
    } catch (error) {
        res.json({
            message : "supplierpayment not be empty",
            success: false,
            error: error.message,
        }).status(404);
    }
});


// Get all widths
router.get("/get-all-supplierpayments", async (req, res, next) => {
    try {
        const supplierpayments = await Supplierpayment.find({});

        res.status(200).json({
            success: true,
            supplierpayments,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

// Delete width
router.delete("/delete-supplierpayment/:id", async (req, res, next) => {
   
    try {
        const supplierpaymentId = req.params.id;
        console.log(supplierpaymentId)
     
        const supplierpayment = await Supplierpayment.findByIdAndDelete(supplierpaymentId);
        if (!supplierpayment) {
            return res.status(404).json({
                success: false,
                error: "supplierpayment not found with this id",
            });
        }

        res.status(200).json({
            success: true,
            message: "supplierpayment deleted successfully!",
            supplierpayment,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

// Update width
router.put("/update-supplierpayment/:id", async (req, res, next) => {
    try {
        const supplierpaymentId = req.params.id;

        const supplierpayment = await Supplierpayment.findByIdAndUpdate(
            supplierpaymentId,
            req.body,
            { new: true } // Add this option to return the updated document
        );

        if (!supplierpayment) {
            return res.status(404).json({
                success: false,
                error: "supplierpayment not found with this id",
            });
        }

        res.status(200).json({
            success: true,
            message: "supplierpayment updated successfully!",
            supplierpayment,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

export default router;
