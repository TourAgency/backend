const {Router} = require("express")

const postUser = require("../controllers/user/registerUser")

const userRoutes = Router()
userRoutes.post("/", postUser)

module.exports = userRoutes;