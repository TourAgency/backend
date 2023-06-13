// THird Party Dependencies.
const { DataTypes } = require("sequelize");

// Local Dependencies.
const sequelize = require("../config");

// Users Model.
const User = sequelize.define(
  "user",
  {
    post_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(),
    },
    content: {
      type: DataTypes.STRING(),
    },
    language: {
      type: DataTypes.STRING(),
      unique: true,
    },
    profile_picture: {
      type: DataTypes.STRING,
      defaultValue: "https://ionicframework.com/docs/img/demos/avatar.svg",
      allowNull: true,
    },
    date_from: {
      type: DataTypes.DATEONLY,
    },
    date_to: {
        type: DataTypes.DATEONLY,
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: "Your description here...",
      allowNull: true,
    },
  },
  {
    // No pluralization.
    freezeTableName: true,
  }
);

module.exports = User;
