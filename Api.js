const express = require('express');
const app = express();
const data = require('./data');
const port = process.env.PORT || 8000;


app.get('/',(req,res)=>{
    res.send(data)
})



app.listen(port, function() {
    console.log(`we are listing at ${port}`);
  });