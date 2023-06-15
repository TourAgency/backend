const { Router } = require("express");

// Create a new instance of the Router class
const router = Router();

// Import the tourRoutes module
const tourRoutes = require("./tour.routes");
const userRoutes = require("./user.routes");

// Mount the tourRoutes module under the "/tour" base path
router.use("/tour", tourRoutes);
// router.use("/user", userRoutes);

router.use("/user", userRoutes)

// Export the router module to be used in other parts of the application
module.exports = router;
