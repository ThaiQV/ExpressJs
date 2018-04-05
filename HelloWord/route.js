var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send('GET route on things.');
});
router.post('/', function (req, res) {
    res.send('POST route on things.');
});
router.get('/hello', function (req, res) {
    res.send("Hello world!");
});

router.post('/login', function (req, res) {
    res.send("username: \npassword: ");
});

router.all('/testall', function (req, res) {
    res.send("HTTP method doesn't have any effect on this route!");
});

router.get('/:id([0-9]{3})', function (req, res) {
    res.send("Get id:" + req.params.id);
});

router.get('*', function (req, res) {
    res.send("Sorry, this is an invalid url");
});

//export this router to use in our index.js
module.exports = router;