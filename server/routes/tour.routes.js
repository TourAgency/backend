const { Router } = require("express");

// Import the getPostController module
const getPostController = require("../controllers/tours/getTourController");
const postTourController = require("../controllers/tours/postTourController")
const getTourById = require("../controllers//tours/getTourById")
// Create a new instance of the Router class
const tourRoutes = Router();

// Define a GET route "/" and assign the getPostController as the route handler
tourRoutes.get("/", getPostController);

tourRoutes.post("/", postTourController)

tourRoutes.get("/:id", getTourById)
// Export the tourRoutes module to be used in other parts of the application
module.exports = tourRoutes;
