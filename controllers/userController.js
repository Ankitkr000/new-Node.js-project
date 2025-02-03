const User = require("../models/userModel");

const signupUser = async (req, res) => {
    const { Username, Email, Password, DateOfBirth } = req.body;

    if (!Username) {
        return res.status(400).send("Username cannot be empty");
    }
    if (!Email) {
        return res.status(400).send("Email cannot be empty");
    }
    if (Password.length < 8 || Password.length > 16) {
        return res.status(400).send("Password length should be greater than 8 or less than or equal to 16");
    }
    if (!DateOfBirth) {
        return res.status(400).send("Date of Birth cannot be empty");
    }

    try {
        const existingUser = await User.findOne({ Email });
        if (existingUser) {
            return res.status(400).send("Email is already registered");
        }

        const newUser = new User({ Username, Email, Password, DateOfBirth });
        await newUser.save();
        res.status(201).send("User registered successfully");
    } catch (error) {
        res.status(500).send("Server error: " + error.message);
    }
};

module.exports = { signupUser };
