// THird Party Dependencies.
const { DataTypes } = require("sequelize");

// Local Dependencies.
const sequelize = require("../config");

// Users Model.
const Posts = sequelize.define("posts",
{   
    post_id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    title:{
        type: DataTypes.STRING,        
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    language: {
        type: DataTypes.ENUM,
        values: ["Español","English","Français","Italiano","Português","Deutsch"]
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
    cost: {
        type: DataTypes.FLOAT,
    }
},
{
    freezeTableName: false
}

)
module.exports = Posts;