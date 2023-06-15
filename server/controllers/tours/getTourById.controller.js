const Tours = require("../../../database/models/tours.model");

// Function to get a tour by its ID
const getTourById = async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the request parameter

    // Check if the ID 
    if (id) {
      res.status(400).json({
        status: 400,
        message: "You must send the required id."
      });
    }

    // Search for the tour in the database by its ID
    const tour = await Tours.findOne({
      where: {
        id
      }
    });

    // Check if the tour does not exist in the database
    if (!tour) {
      res.status(400).json({
        status: 404,
        message: "The requested tour does not exist in the database."
      });
    }

    // Send the successful response with the found tour
    res.status(200).json({
      status: 200,
      response: tour
    });
  } catch (error) {
    // Catch any errors and send an internal error response
    res.status(500).json({
      status: 500,
      error: "Internal Server Error"
    });
  }
};

module.exports = getTourById;
