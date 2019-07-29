
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const http = require('http');

Tail = require('tail').Tail;
 
tail = new Tail("./assets/log.txt");
const { Log } = require('./models/log')



const app=express();
const PORT =process.env.PORT ||3000
const server = http.createServer(app);

tail.on("line", function(data) {
  obj={}
  stringArray = data.split(' ')
  stringArray.forEach(function (info) {
    let key=info.split('=')[0]
    let value=info.split('=')[1]
    if (value == undefined){
     var keys = Object.keys(obj);
     var last = keys.slice(-1)[0];
     obj[last]+=" "+key
    }else{
      obj[key]=value
    }
    
  });
  let log = new Log( obj );
  log.save()
});
   
tail.on("error", function(error) {
  console.log('ERROR: ', error);
});

app.use(express.json());
require('./startup/routes')(app)
require('./startup/db')()

server.listen(PORT,()=>console.log("listen to "+PORT));
