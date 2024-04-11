import express from "express";
import Invoice from "../models/InvoiceModel.js";

const router = express.Router();

// Create invoice
router.post("/create-invoice", async (req, res, next) => {
    try {

        console.log(req.body,'invoice')
        const invoiceDoc = await Invoice.create(req.body);

        res.status(201).json({
            message: "Created Successfully",
            success: true,
            invoiceDoc,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

// Get all invoices
router.get("/get-all-invoice", async (req, res, next) => {
    try {
        const invoices = await Invoice.find({});

        res.status(200).json({
            success: true,
            invoices,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

// Delete invoice
router.delete("/delete-invoice/:id", async (req, res, next) => {
    try {
        const invoiceId = req.params.id;

        const invoice = await Invoice.findByIdAndDelete(invoiceId);

        if (!invoice) {
            return res.status(404).json({
                success: false,
                error: "invoice not found with this id",
            });
        }

        res.status(200).json({
            success: true,
            message: "invoice deleted successfully!",
            invoice,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

// Update invoice
router.put("/update-invoice/:id", async (req, res, next) => {
    try {
        const invoiceId = req.params.id;

        const invoice = await Invoice.findByIdAndUpdate(invoiceId, req.body, { new: true });

        if (!invoice) {
            return res.status(404).json({
                success: false,
                error: "invoice not found with this id",
            });
        }

        res.status(200).json({
            success: true,
            message: "invoice updated successfully!",
            invoice,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

export default router;
