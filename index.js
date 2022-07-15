const express = require('express');


const app =express();

app.get('/',(req,res)=>{
  return response.json({message:'Server'});
})

app.listen(3333);