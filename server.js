const express =require("express");
const dotenv = require("dotenv"). config();
const app= express();
const port = process.env.PORT || 6000;

app.use(express.json);
app.use('/product/',require('./routes/productroutes'));
// app.use('/user/',require('./routes/Userroutes'));
// app.use('/order/',require('./routes/orderroutes'));
app.listen(port, () =>{
console.log(port);
}) ;