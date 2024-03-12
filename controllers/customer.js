import express from "express";
import Customer from "../models/Customer.js";


const router = express.Router();

// Create width
router.post("/create-customer", async (req, res, next) => {
    try {
        const customerDoc = new Customer(req.body);
        await customerDoc.save();
        console.log(req.body, 'hiiiiiiiiiiiiiiiii')
        res.status(201).json({
            message: "Create Successfully",
            success: true,
            customerDoc,
        });
    } catch (error) {
        res.status(404).json({
            message: "customer name not be empty",
            success: false,
            error: error.message,
        });
    }
});


// Get all widths
router.get("/get-all-customers", async (req, res, next) => {
    try {
        const customers = await Customer.find({});

        res.status(200).json({
            success: true,
            customers,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

// Delete width
router.delete("/delete-customer/:id", async (req, res, next) => {
   
    try {
        const customerId = req.params.id;
        console.log(customerId)
     
        const customer = await Customer.findByIdAndDelete(customerId);
        if (!customer) {
            return res.status(404).json({
                success: false,
                error: "customer not found with this id",
            });
        }

        res.status(200).json({
            success: true,
            message: "customer deleted successfully!",
            customer,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

// Update width
router.put("/update-customer/:id", async (req, res, next) => {
    try {
        const customerId = req.params.id;

        const customer = await Customer.findByIdAndUpdate(
            customerId,
            req.body,
            { new: true } // Add this option to return the updated document
        );

        if (!customer) {
            return res.status(404).json({
                success: false,
                error: "customername not found with this id",
            });
        }

        res.status(200).json({
            success: true,
            message: "customer updated successfully!",
            customer,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

export default router;
