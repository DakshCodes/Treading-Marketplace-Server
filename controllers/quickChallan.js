import express from "express";
import QuickChallan from "../models/QuickChallan.js";

const router = express.Router();

// Create quickchallan
router.post("/create-quickchallan", async (req, res, next) => {
    try {

        console.log(req.body,'quickchallan')
        const quickchallanDoc = await QuickChallan.create(req.body);

        res.status(201).json({
            message: "Created Successfully",
            success: true,
            quickchallanDoc,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

// Get all quickchallans
router.get("/get-all-quickchallan", async (req, res, next) => {
    try {
        const quickchallans = await QuickChallan.find({});

        res.status(200).json({
            success: true,
            quickchallans,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

// Delete quickchallan
router.delete("/delete-quickchallan/:id", async (req, res, next) => {
    try {
        const quickchallanId = req.params.id;

        const quickchallan = await QuickChallan.findByIdAndDelete(quickchallanId);

        if (!quickchallan) {
            return res.status(404).json({
                success: false,
                error: "quickchallan not found with this id",
            });
        }

        res.status(200).json({
            success: true,
            message: "quickchallan deleted successfully!",
            quickchallan,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

// Update quickchallan
router.put("/update-quickchallan/:id", async (req, res, next) => {
    try {
        const quickchallanId = req.params.id;

        const quickchallan = await QuickChallan.findByIdAndUpdate(quickchallanId, req.body, { new: true });

        if (!quickchallan) {
            return res.status(404).json({
                success: false,
                error: "quickchallan not found with this id",
            });
        }

        res.status(200).json({
            success: true,
            message: "quickchallan updated successfully!",
            quickchallan,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

export default router;
