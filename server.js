const express =require("express");
const { testDbConnection } = require("./config/db");
require('dotenv').config();
const app= express();
const port = process.env.PORT;



app.use(express.json());
app.use('/product/',require('./routes/productroutes'));
app.use('/user/',require('./routes/Userroutes'));
app.use('/order/',require('./routes/orderroutes'));
testDbConnection();

app.listen(port, () =>{
console.log('server running on',port);
}) ;