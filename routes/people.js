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
    console.log(req.body);  
    console.log('in post listOfPeople route', newPerson);
    listOfPeople.push(newPerson);
    res.sendStatus(201);
    res.send(newPerson);
    //console.log('back from the server with', listOfPeople)
 });

 module.exports = router;