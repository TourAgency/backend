const Tours = require("../../../database/models/tours.model");


const getTourByName = async (req, res) => {
    //I receive the title to search for through params
    const { title } = req.query;
    console.log(title)
    try {
        //I fetch all the tours
        const allTours = await Tours.findAll()
        console.log(allTours)
        //I search for the title in the tours
        const tourByName = allTours.filter((tour) => tour.dataValues.title.toLowerCase().includes(title.toLowerCase()));
        //If there are no related tours, i return an error
        if (tourByName.length === 0) return res.status(404).json({ message: "No tour found with that name" })
        //I return all related tours
        res.status(200).json(tourByName)

    } catch (error) {
        console.log("entra a error")
        res.status(404).json({ message: error.message })

    }
}

module.exports = getTourByName;