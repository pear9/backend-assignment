const { sq } = require("../config/db");

const { DataTypes } = require("sequelize");
const order = require("../models/orderModel")
const User = sq.define("User", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
      email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
    fullName: {
      type: DataTypes.STRING,
    },
    
    contact_no: {
      type: DataTypes.INTEGER,
    },
  
    password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
  });


  User.associate = function (models) {
    User.hasMany(order)
  };
  User.sync().then(() => {
    console.log("User Model synced");
  });
  module.exports=User;