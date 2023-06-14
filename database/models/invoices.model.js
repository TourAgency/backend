// THird Party Dependencies.
const { DataTypes } = require("sequelize");

// Local Dependencies.
const sequelize = require("../config");

// Users Model.
const Invoices = sequelize.define(
  "invoices",
  {
    invoiceId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    moneyType: {
      type: DataTypes.STRING(),
    },
    price: {
      type: DataTypes.FLOAT,
    },
    creationDate: {
      type: DataTypes.DATEONLY,
    },
    
  },
  {
    // No pluralization.
    freezeTableName: true,
  }
);

module.exports = Invoices;
