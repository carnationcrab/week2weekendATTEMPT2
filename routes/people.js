var router = require('express').Router();

var listOfPeople = [];

router.get('/', function(req, res) {
    console.log('in get listOfPeople route');
    res.send(listOfPeople);
 });

router.post('/', function(req, res) {
    var newPerson = {
        name: req.body.name,
        fact: req.body.fact
    };    
    console.log('in post listOfPeople route', newPerson);
    listOfPeople.push(newPerson);
    res.sendStatus(201);
    res.send(newPerson);
 });

 module.exports = router;