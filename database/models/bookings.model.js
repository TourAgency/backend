// THird Party Dependencies.
const { DataTypes } = require("sequelize");

// Local Dependencies.
const sequelize = require("../config");

// Users Model.
const Bookings = sequelize.define(
  "bookings",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    check_in: {
        type: DataTypes.DATEONLY,
    },
    check_out: {
        type: DataTypes.DATEONLY,
    }
  },
  {
    // No pluralization.
    freezeTableName: true,
  }
);

module.exports = Bookings;
