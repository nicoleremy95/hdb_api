var express = require('express');

var app = express();
var PORT = process.env.PORT || 8080;
var allRoutes = require('./controllers');

var db = require('./models');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', allRoutes);

db.sequelize.sync({force:true}).then(function(){
    app.listen(PORT, function(){
        console.log('App listening on PORT', + PORT)
    })
});