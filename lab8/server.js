const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;


// Middleware to read JSON data
app.use(express.json());


// Serve static files
app.use(express.static(__dirname));


// POST API
app.post("/addStudent", (req, res) => {

    console.log("Received Student Data:");

    console.log(req.body);

    res.json({
        message: "Student data received successfully!",
        student: req.body
    });

});


// Start server
app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});