const Reviews = require("../models/reviews.model")
const User = require("../models/user.model")
const Post = require("../models/posts.model")
const Bookings = require("../models/bookings.model")
const Invoices = require("../models/invoices.model")

User.hasMany(Reviews, { foreignKey: "userId" })
Reviews.belongsTo(User, {foreignKey: "userId"})

Reviews.belongsToMany(Post, {through: "post_reviews"})
Post.belongsToMany(Reviews, {through: "post_reviews"})

Bookings.hasMany(Post, {foreignKey: "bookingId"})
Post.belongsTo(Bookings, {foreignKey: "bookingId"})

User.hasMany(Bookings, {foreignKey: "userId"})
Bookings.belongsTo(User, {foreignKey: "userId"})

Invoices.hasOne(Bookings, {foreignKey: "invoiceId"})
Bookings.belongsTo(Invoices, {foreignKey: "invoiceId"})

module.exports = {
    Reviews,
    User,
    Post,
    Bookings,
    Invoices
}