const { Router } = require("express");

// Import the getPostController module
const getTourController = require("../controllers/tours/getTour.controller");
const postTourController = require("../controllers/tours/postTour.controller")
const getTourById = require("../controllers/tours/getTourById.controller")
const getTourByName = require("../controllers/tours/getTourByName.controller");

// Create a new instance of the Router class
const tourRoutes = Router();

// Define a GET route "/" and assign the getPostController as the route handler
tourRoutes.get("/", getTourController);
tourRoutes.get("/name", getTourByName);

tourRoutes.post("/", postTourController)

tourRoutes.get("/:id", getTourById)
// Export the tourRoutes module to be used in other parts of the application
module.exports = tourRoutes;
