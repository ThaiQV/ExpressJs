var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_db');

var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
 });
 var Person = mongoose.model("Person", personSchema);

 app.get('/person', function(req, res){
    res.render('person');
 });


app.get('/', function(req, res){
   res.render('form');
});

app.set('view engine', 'pug');
app.set('views', './');

// for parsing application/json
app.use(bodyParser.json()); 


//The extended option allows to choose between parsing
// the URL-encoded data with the querystring library (when false)
// or the qs library (when true). 
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/', function(req, res){
   console.log(public.array);
   res.send("recieved your request!");
});
app.listen(3000);