const { sq } = require("../config/db");

const { DataTypes } = require("sequelize");
const orderItem=require("../models/orderItem")
const Product = sq.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
  Product.associate = function (models) {
    Product.hasMany(orderItem)
  }
  Product.sync().then(() => {
    console.log("Product Model synced");
  });
  
  module.exports = Product;