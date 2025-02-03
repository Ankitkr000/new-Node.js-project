const mongoose = require("mongoose");

const signSchema = new mongoose.Schema({
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
        type: Date,
        required: true
    }
});

module.exports = mongoose.model("Signup", signSchema);
