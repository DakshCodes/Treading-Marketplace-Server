import express from "express";
import Category from "../models/Category.js";

const router = express.Router();

// Create quality
router.post("/create-quality", async (req, res, next) => {
    try {
        const qualityDoc = await Category.create(req.body);

        res.status(201).json({
            message: "Create Successfully",
            success: true,
            qualityDoc,
        });
    } catch (error) {
        return res.status(404).json({
            success: false,
            error: error.message,
        });
    }
});


// Get all qualitys
router.get("/get-all-quality", async (req, res, next) => {
    try {
        const qualitys = await Category.find({});

        res.status(200).json({
            success: true,
            qualitys,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

// Delete quality
router.delete("/delete-quality/:id", async (req, res, next) => {
    try {
        const qualityId = req.params.id;

        const quality = await Category.findByIdAndDelete(qualityId);

        if (!quality) {
            return res.status(404).json({
                success: false,
                error: "quality not found with this id",
            });
        }

        res.status(200).json({
            success: true,
            message: "quality deleted successfully!",
            quality,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

// Update quality
router.put("/update-quality/:id", async (req, res, next) => {
    try {
        const qualityId = req.params.id;


        const quality = await Category.findByIdAndUpdate(qualityId, req.body);

        if (!quality) {
            return res.status(404).json({
                success: false,
                error: "quality not found with this id",
            });
        }
        res.status(200).json({
            success: true,
            message: "quality updated successfully!",
            quality,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

export default router;
