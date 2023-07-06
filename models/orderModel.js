const { sq } = require("../config/db");

const { DataTypes } = require("sequelize");
const User = require('./userModel');
const OrderItem=require('./orderItem')
const Order = sq.define('Order', {
      id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },

        userId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'userId',
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
  
   Order.associate = (models) => {
        Order.belongsTo(User, {foreignKey: 'userId'});
        // Order.belongsTo(models.Address, {foreignKey: 'addressId'});
    };
  Order.sync().then(() => {
    console.log("Order Model synced");
  });
  module.exports=Order;