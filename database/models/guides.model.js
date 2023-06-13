// THird Party Dependencies.
const { DataTypes } = require("sequelize");

// Local Dependencies.
const sequelize = require("../config");

// Users Model.
const Guides = sequelize.define(
  "guides",
  {
    guide_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(),
    },
    surname: {
        type: DataTypes.STRING(),
    },
    age: {
        type: DataTypes.INTEGER,
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

module.exports = Guide;
