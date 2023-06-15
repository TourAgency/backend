// THird Party Dependencies.
const { DataTypes } = require("sequelize");

// Local Dependencies.
const sequelize = require("../config");

// Users Model.
const Posts = sequelize.define("posts",
{   
    
    title:{
        type: DataTypes.STRING,        
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    language: {
        type: DataTypes.ENUM,
        values: ["spanish", "english", "french", "italian", "portuguese", "german"]
    }, 
    category:{
        type: DataTypes.ENUM,
        values: ["eco_tourism", "camping", "share_excursion", "museum", "backpacking"]
    },
    background_image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duration: {
        type: DataTypes.STRING,
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false
    },
     available_dates: {
        type: DataTypes.ARRAY(DataTypes.DATE),
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
    }
},
{
    freezeTableName: false
}

)
module.exports = Posts;