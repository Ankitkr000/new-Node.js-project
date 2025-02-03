const express = require("express");
const router = express.Router();
const signSchema = require("../models/userModel");

router.post("/signup", async (req, res) => {
    const { Username, Email, Password, DateOfBirth } = req.body;

    if (!Username) {
        return res.status(400).send("Username cannot be empty");
    }
    if (!Email) {
        return res.status(400).send("Email cannot be empty");
    }
    if (Password.length < 8 || Password.length > 16) {
        return res.status(400).send("Password must be between 8 to 16 characters");
    }
    if (!DateOfBirth) {
        return res.status(400).send("Date of Birth cannot be empty");
    }

    try {
        const existingUser = await signSchema.findOne({ Email });
        if (existingUser) {
            return res.status(400).send("Email is already registered");
        }

        const newUser = new signSchema({ Username, Email, Password, DateOfBirth });
        await newUser.save();
        res.status(201).send("User registered successfully");
    } catch (error) {
        res.status(500).send("Server error: " + error.message);
    }
});

module.exports = router;
