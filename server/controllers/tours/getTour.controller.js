// Local Dependencies.
const Tours = require("../../../database/models/tours.model");
const toursJson = require("../../fixtures/tours.json")

const allTour = async (req, res) => {

  // Get the page and limit from the query.
  let page = req.query.page;
  const limit = req.query.limit || 20;

  try {

    toursJson.map(async (tour)=>{
      await Tours.findOrCreate({where: { 
        title: tour.title,
        description: tour.description,
        language: tour.language,
        category: tour.category,
        background_image: tour.background_image,
        duration: tour.duration,
        time: tour.time,
        available_dates: tour.available_dates,
        price: tour.price
      }})
    })

    // Validate the page and limit.
    if(!page) page = 1;

    if ( page < 1 || limit < 1 || limit > 50 )
      return res.status(412).json({
        status: 412,
        message: "Invalid page or limit!!!",
      });

    // Set the offset
    const offset = (page - 1) * limit;

    // Get all the courses from the limit and offset.
    const tours = await Tours.findAll({
      limit: limit,
      offset: offset
    })

    // Next Page URL.
    const nextPage = parseInt(page) + 1;
    const nextUrl = `/registros?page=${nextPage}&limit=${limit}`;

    // Return the courses.
    res.json({
      status: 200,
      result: tours,
      next: nextUrl
    });
    
  } catch (error) {

    // Return the error.
    res.status(500).json({
      status: 500,
      message: error.message,
    });
    
  }
};

module.exports = allTour;