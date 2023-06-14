// THird Party Dependencies.
const { DataTypes } = require("sequelize");

// Local Dependencies.
const sequelize = require("../config");

// Users Model.
const Invoices = sequelize.define(
  "invoices",
  {
    invoice_number: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    money_type: {
      type: DataTypes.STRING(),
    },
    price: {
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

module.exports = Invoices;
