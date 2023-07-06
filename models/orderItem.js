const { sq } = require("../config/db");

const { DataTypes } = require("sequelize");
const Order = require('./orderModel');
const Product = require('./productModel');
const OrderItem = sq.define('OrderItem', {

  productId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'productId',
  },
  orderId:{
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'orderId',
  },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
  
  OrderItem.associate = function (models) {
    OrderItem.belongsTo(Order);
    OrderItem.belongsTo(Product);
  }
  OrderItem.sync().then(() => {
    console.log("Orderitem Model synced");
  });
  module.exports=OrderItem;