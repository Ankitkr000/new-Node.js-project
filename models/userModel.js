const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Username: {
        type: String,
        minlength: 1,
    },
    Email: {
        type: String,
        minlength: 1,
    },
    Password: {
        type: String,
        minlength: 8,
        maxlength: 16
    },
    DateOfBirth: {
        type: String,
        minlength: 1
    }
});

module.exports = mongoose.model("User", userSchema);
