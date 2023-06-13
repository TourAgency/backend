// THird Party Dependencies.
const { DataTypes } = require("sequelize");

// Local Dependencies.
const sequelize = require("../config");

// Users Model.
const Places = sequelize.define(
  "places",
  {
    place_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    city: {
      type: DataTypes.STRING(),
    },
    country: {
      type: DataTypes.FLOAT,
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

module.exports = Places;
