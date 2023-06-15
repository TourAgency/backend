const {Tours} = require("../../../database/config/relationships")


const postTourController = async (req,res) =>{

  try {
    
    // If the ID is not provided, return an error.
    if (!req.query)
      return res.status(412).json({
        status: 412,
        message: "All fields are required.!!!",
      });
      
    // Destructure the course.
    const { title, description, language, category, background_image, duration, time, available_dates, price } = req.body;

    // Langauge validation.
    if (
      language !== "spanish" &&
      language !== "english" &&
      language !== "french" &&
      language !== "italian" &&
      language !== "portuguese" &&
      language !== "german"
    )
      return res.status(412).json({
        status: 412,
        message: "Invalid language!!!",
      });
      
    // Category validation.
    if (
        category !== "eco_tourism" &&
        category !== "camping" &&
        category !== "share_excursion" &&
        category !== "museum" &&
        category !== "backpacking"
      )
      return res.status(404).json({
        status: 404,
        message: "Category does not exist!!!",
      });

    

    // Validate field lengths.
    if (
      // Title Length.
      title.length < 3 || title.length > 50 ||
      // Description Length.
      description.length < 10 || description.length > 500 ||
      // Background Image Length.
      background_image.length < 10 || background_image.length > 500 ||
      // Price Length.
      price < 0 || price > 1000000.00
    )
      return res.status(412).json({
        status: 412,
        message: "Invalid field length!!!",
      });

    

    
      const post = await Tours.findAll()

    // If the course already exists, return an error.
    if (
      post.find(
        (posts) => posts.title.toUpperCase() === title.toUpperCase()
      )
    )
      return res.status(409).json({
        status: 409,
        message: "Tour already exists!!!",
      });

    const postCreated = await Tours.create({
      title,
      description,
      language,
      background_image,
      price,
      duration,
      time,
      category,
      available_dates
    });

    // Return the course.
    res.status(201).json({
      status: 201,
      message: "Tour created successfully!!!",
    });

  } catch (error) {
    // If there is an error, return it.
    res.json({
      status: error.status || 500,
      message: error.message || "Internal server error!!!",
    });
  }
}

module.exports = postTourController;