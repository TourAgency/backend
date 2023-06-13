// THird Party Dependencies.
const { DataTypes } = require("sequelize");

// Local Dependencies.
const sequelize = require("../config");

// Users Model.
const Categories = sequelize.define(
  "categories",
  {
    category_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING(),
    },
    creation_date: {
      type: DataTypes.DATEONLY,
    },
    
  },
  {
    // No pluralization.
    freezeTableName: true,
  }
);

module.exports = Categories;
