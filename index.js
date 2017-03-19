'use strict';
require('babel-register');

var app=require('./server/app').app;
var PORT=process.env.PORT||8000;

app.listen(PORT,function(){
  console.log('Port is listening:',PORT);
});
