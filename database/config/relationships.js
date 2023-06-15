const Reviews = require("../models/reviews.model")
const User = require("../models/user.model")
const Tours = require("../models/tours.model")
const Bookings = require("../models/bookings.model")
const Invoices = require("../models/invoices.model")

User.hasMany(Reviews, { foreignKey: "userId" })
Reviews.belongsTo(User, {foreignKey: "userId"})

Reviews.hasMany(Tours, {foreignKey: "reviewsId"})
Tours.belongsTo(Reviews, {foreignKey: "reviewsId"})

Bookings.hasMany(Tours, {foreignKey: "bookingId"})
Tours.belongsTo(Bookings, {foreignKey: "bookingId"})

User.hasMany(Bookings, {foreignKey: "userId"})
Bookings.belongsTo(User, {foreignKey: "userId"})

Invoices.hasOne(Bookings, {foreignKey: "invoiceId"})
Bookings.belongsTo(Invoices, {foreignKey: "invoiceId"})

module.exports = {
    Reviews,
    User,
    Tours,
    Bookings,
    Invoices
}