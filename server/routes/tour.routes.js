const { Router } = require("express");

// Import the getTourController module
const getTourController = require("../controllers/tours/getTour.controller");
const postTourController = require("../controllers/tours/postTour.controller");
const getTourById = require("../controllers/tours/getTourById.controller");
const getTourByName = require("../controllers/tours/getTourByName.controller");
const { upload } = require("../cloud/index");
const path = require("path");

// Create a new instance of the Router class
const tourRoutes = Router();

// Middleware for uploading a single file named "background_image"
tourRoutes.use(upload.single("background_image"));

// Define a GET route "/" and assign the getTourController as the route handler
tourRoutes.get("/", getTourController);

// Define a GET route "/name" and assign the getTourByName controller as the route handler
tourRoutes.get("/name", getTourByName);

// Define a POST route "/" and assign the postTourController as the route handler
tourRoutes.post("/", postTourController);

// Define a GET route "/:id" and assign the getTourById controller as the route handler
tourRoutes.get("/:id", getTourById);

// Export the tourRoutes module to be used in other parts of the application
module.exports = tourRoutes;
