var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views','./views');

var routes = require('./route.js')

//Simple request time logger
app.use(function (req, res, next) {
    console.log("A new request received at " + Date.now());

    //This function call is very important. It tells that more processing is
    //required for the current request and is in the next middleware
    //function//route handler.
    next();
});
app.get('/first_template', function(req, res){
    res.render('first_view');
 });
app.use('/', routes)

app.listen(3000);