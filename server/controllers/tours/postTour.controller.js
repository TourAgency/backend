const { log } = require("console");
const { Tours } = require("../../../database/config/relationships");
const { cloudinary } = require("../../cloud/index");
const fs = require("fs");

//A promise-based function is created
const unlinkFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

const postTourController = async (req, res) => {
 
  let modification;
  try {


    // Destructure the tour.
    const { title, description, language, category, duration, time, available_dates, price } = req.body;
    const { background_image } = req.body;
    const image = req.file;

    const post = await Tours.findAll();
    modification = "./statics/img/" + image?.filename;

    // If the Tour already exists, return an error.
    if (post.find((posts) => posts.title.toUpperCase() === title.toUpperCase())) {
      if (image) unlinkFile(modification);
      return res.status(409).json({
        status: 409,
        message: "Tour already exists!!!",
      });
    }

    // Language validation.
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
      title.length < 3 ||
      title.length > 50 ||
      // Description Length.
      description.length < 10 ||
      description.length > 500 ||
      // Background Image Length.
      (background_image?.length < 10 || background_image?.length > 500) ||
      // Price Length.
      price < 0 ||
      price > 1000000.0
    )
      return res.status(412).json({
        status: 412,
        message: "Invalid length data sent!!!",
      });

    if (image === undefined && background_image === undefined) {
      return res.status(412).json({
        status: 412,
        message: "background_image must be different from undefined!!!",
      });
    }

    if (background_image === undefined && image !== undefined) {
      // Upload the image to Cloudinary.
      await cloudinary.uploader.upload(modification, { folder: "uploads" }, async (error, result) => {
        if (error) {
          // In case of error.
          console.error('Error uploading image to Cloudinary:', error);
          await unlinkFile(modification);
          return res.status(500).json({ message: 'Error uploading image to Cloudinary' });
        }

        // Create the tour with the secure_url sent by Cloudinary.
        const createPost = await Tours.create({
          title,
          description,
          language,
          background_image: result.secure_url,
          price,
          duration,
          time,
          category,
          available_dates,
        });

        // Delete the file saved by Multer on the server.
        await unlinkFile(modification);
        return res.status(201).json("Tour created successfully!!!");
      });
    } else if (typeof background_image === "string") {
      // Create the tour with the provided background_image.
      const postCreated = await Tours.create({
        title,
        description,
        language,
        background_image,
        price,
        duration,
        time,
        category,
        available_dates,
      });

      // Return the tour.
      res.status(201).json({
        status: 201,
        message: "Tour created successfully!!!",
      });
    }
  } catch (error) {
    // If there is an error, return it.
    unlinkFile(modification);
    res.json({
      status: error.status || 500,
      message: error.message || "Internal server error!!!",
    });
  }
};

module.exports = postTourController;
