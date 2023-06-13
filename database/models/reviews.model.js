// THird Party Dependencies.
const { DataTypes } = require("sequelize");

// Local Dependencies.
const sequelize = require("../config");

// Users Model.
const Reviews = sequelize.define("reviews",
{   
    review_id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    raiting:{
        type: DataTypes.INTEGER
        
        
    },
    comment:{
        type: DataTypes.TEXT,
        
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
},
{
    freezeTableName: false
}

)
module.exports = Reviews;