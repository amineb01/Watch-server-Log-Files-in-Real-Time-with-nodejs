var localisations = require('../routes/localisations')
var logs = require('../routes/logs')


module.exports=function(app){
    app.use('/api/logs',logs);
}
