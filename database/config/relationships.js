const Reviews = require("../models/reviews.model")
const User = require("../models/user.model")
const Post = require("../models/posts.model")
const Bookings = require("../models/bookings.model")
const Invoices = require("../models/invoices.model")

User.hasMany(Reviews, { foreignKey: "userId" })
Reviews.belongsTo(User, {foreignKey: "userId"})

Reviews.hasMany(Post, {foreignKey: "reviewsId"})
Post.belongsTo(Reviews, {foreignKey: "reviewsId"})

Bookings.hasMany(Post, {foreignKey: "bookingId"})
Post.belongsTo(Bookings, {foreignKey: "bookingId"})

Bookings.hasMany(User, {foreignKey: "bookingId"})
User.belongsTo(Bookings, {foreignKey: "bookingId"})

Invoices.hasOne(Bookings, {foreignKey: "invoiceId"})
Bookings.belongsTo(Invoices, {foreignKey: "invoiceId"})

module.exports = {
    Reviews,
    User,
    Post
}