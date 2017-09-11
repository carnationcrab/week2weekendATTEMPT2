var express = require('express');
var app = express();

var path = require('path');
var port = 5000;

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

var peopleRouter = require('./routes/people')

app.get('/', function(req, res) {
    var indexPath = path.join(__dirname, './public/views/index.html');
    res.sendFile(indexPath);
});

app.use('/person', peopleRouter);

app.listen(port, function() {
    console.log('listening on ' + port);
});