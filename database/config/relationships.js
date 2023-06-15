const Reviews = require("../models/reviews.model")
const User = require("../models/user.model")
const Tour = require("../models/tours.model")
const Bookings = require("../models/bookings.model")
const Invoices = require("../models/invoices.model")

User.hasMany(Reviews, { foreignKey: "userId" })
Reviews.belongsTo(User, {foreignKey: "userId"})

Reviews.hasMany(Tour, {foreignKey: "reviewsId"})
Tour.belongsTo(Reviews, {foreignKey: "reviewsId"})

Bookings.hasMany(Tour, {foreignKey: "bookingId"})
Tour.belongsTo(Bookings, {foreignKey: "bookingId"})

Bookings.hasMany(User, {foreignKey: "bookingId"})
User.belongsTo(Bookings, {foreignKey: "bookingId"})

Invoices.hasOne(Bookings, {foreignKey: "invoiceId"})
Bookings.belongsTo(Invoices, {foreignKey: "invoiceId"})

module.exports = {
    Reviews,
    User,
    Tour,
    Bookings,
    Invoices
}