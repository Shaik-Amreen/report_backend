const express = require("express");
const app = express();
const cors = require("cors");
const file=require('./routers/filerouter')
const path=require('path')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(cors())
app.use(express.static(path.join(__dirname,'public')))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'))
})
var port=process.env.PORT || 4000
app.use('/api',file)
app.listen(port,()=>console.log("server listened"))