const { sq } = require("../config/db");

const { DataTypes } = require("sequelize");
const User = require('./userModel');

const Order = sq.define('Order', {
    totalAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    orderDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    ordered:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
    }
  });
  
  Order.belongsTo(User);

  Order.sync().then(() => {
    console.log("Order Model synced");
  });
  module.exports=Order;