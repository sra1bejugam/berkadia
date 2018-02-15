const express= require('express');
const app=express();
const cors=require('cors');
const body=require('body-parser');
const path = require('path');
require('dotenv').config();


const routes=require('./routes/routes.js');
//cors is to run both node and angular by importing cors
app.use(cors());
app.use(body.json());
app.use(body.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'dist')));

app.use('/api',routes);
//routing to the apis


app.listen(3000,()=>{
    console.log("Server started at 3000 port");
})
//exporting app to use if wants in another 
module.exports=app;

