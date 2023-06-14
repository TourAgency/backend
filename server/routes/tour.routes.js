const { Router } = require("express");

// Import the getPostController module
const getPostController = require("../controllers/getTourController");

// Create a new instance of the Router class
const tourRoutes = Router();

// Define a GET route "/" and assign the getPostController as the route handler
tourRoutes.get("/", getPostController);

// Export the tourRoutes module to be used in other parts of the application
module.exports = tourRoutes;
