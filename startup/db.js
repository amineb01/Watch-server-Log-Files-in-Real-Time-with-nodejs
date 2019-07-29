const mongoose = require('mongoose');

module.exports=function(){

 mongoose.connect(process.env.search_db ||"mongodb://localhost:27017/logs", { useNewUrlParser: true })
    .then(()=>console.log('connect to logs database ..'))
    .catch((err)=>console.log(err));
}

