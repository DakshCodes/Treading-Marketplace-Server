import express from "express";
import Challan from "../models/challanModel.js";

const router = express.Router();

// Create challan
router.post("/create-challan", async (req, res, next) => {
    try {

        console.log(req.body)
        const challanDoc = await Challan.create(req.body);

        res.status(201).json({
            message: "Created Successfully",
            success: true,
            challanDoc,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

// Get all challans
router.get("/get-all-challan", async (req, res, next) => {
    try {
        const challans = await Challan.find({});

        res.status(200).json({
            success: true,
            challans,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

// Delete challan
router.delete("/delete-challan/:id", async (req, res, next) => {
    try {
        const challanId = req.params.id;

        const challan = await Challan.findByIdAndDelete(challanId);

        if (!challan) {
            return res.status(404).json({
                success: false,
                error: "Challan not found with this id",
            });
        }

        res.status(200).json({
            success: true,
            message: "Challan deleted successfully!",
            challan,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

// Update challan
router.put("/update-challan/:id", async (req, res, next) => {
    try {
        const challanId = req.params.id;

        const challan = await Challan.findByIdAndUpdate(challanId, req.body, { new: true });

        if (!challan) {
            return res.status(404).json({
                success: false,
                error: "Challan not found with this id",
            });
        }

        res.status(200).json({
            success: true,
            message: "Challan updated successfully!",
            challan,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

export default router;