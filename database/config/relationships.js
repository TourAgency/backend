const Reviews = require("../models/reviews.model")
const User = require("../models/user.model")
const Post = require("../models/posts.model")

User.hasMany(Reviews, { foreignKey: "userId" })
Reviews.belongsTo(User, {foreignKey: "userId"})

Reviews.hasMany(Post, {foreignKey: "reviewsId"})
Post.belongsTo(Reviews, {foreignKey: "reviewsId"})

module.exports = {
    Reviews,
    User,
    Post
}