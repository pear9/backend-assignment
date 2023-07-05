const { sq } = require("../config/db");

const { DataTypes } = require("sequelize");
const Order = require('./orderModel');
const Product = require('./productModel');
const OrderItem = sq.define('OrderItem', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
  
  OrderItem.belongsTo(Order);
  OrderItem.belongsTo(Product);

  OrderItem.sync().then(() => {
    console.log("Orderitem Model synced");
  });
  module.exports=OrderItem;