const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const vehicles = JSON.parse(fs.readFileSync("vehicles.json", "utf8"));

// Get all vehicles
app.get("/api/vehicles", (req, res) => {
    res.json(vehicles);
});

// Get single vehicle by ID
app.get("/api/vehicles/:id", (req, res) => {
    const vehicle = vehicles.find(v => v.id == req.params.id);
    vehicle ? res.json(vehicle) : res.status(404).send("Vehicle not found");
});

app.listen(5000, () => console.log("Backend running on port 5000!"));
