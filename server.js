const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());



const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

app.get("/", (req, res) => {
    res.send("Working");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
