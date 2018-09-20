// Cargar modulos y crear nueva aplicacion
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

// var cors = require('cors')

// var app = express()
// app.use(cors())

app.use(bodyParser.json({ limit: '50mb', extended: true })); // soporte para bodies codificados en jsonsupport
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); // soporte para bodies codificados



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//Ejemplo: GET http://localhost:8080/items
app.get('/items', function(req, res, next) {
    if (req.query.filter) {
        next();
        return;
    }
    res.send('Get all');
});

//Ejemplo: GET http://localhost:8080/items?filter=ABC
app.get('/items', function(req, res) {
    var filter = req.query.filter;
    res.send('Get filter ' + filter);
});

//Ejemplo: GET http://localhost:8080/items/10
app.get('/items/:id', function(req, res, next) {
    var itemId = req.params.id;
    res.send('Get ' + req.params.id);
});

//Ejemplo: POST http://localhost:8080/items
app.post('/items', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var data = req.body;

    res.json(data);
});

//Ejemplo: PUT http://localhost:8080/items
app.put('/items', function(req, res) {
    var itemId = req.body.id;
    var data = req.body.data;
    res.send('Update ' + itemId + ' with ' + data);
});

//Ejemplo: DELETE http://localhost:8080/items
app.delete('/items/:id', function(req, res) {
    var itemId = req.params.id;
    res.send('Delete ' + itemId);
});

// var server = app.listen(8080, function() {
//     console.log('Server is running..');
// });

app.listen(8080, '0.0.0.0', function() {
    console.log('Server is running..');
});