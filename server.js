var express = require("express");
var Calculator = require("./calculator");

var app = express();
var c = new Calculator();

app.get('/add/:a/:b', function(req, res) {
    var a = parseInt(req.params.a, 10);
    var b = parseInt(req.params.b, 10);
    var sum = c.add(a, b);
    console.log(sum);
    res.status(200).send(a + ' + ' + b + ' = ' + sum);
});

app.get('/', function (req, res) {
    res.send('Main page');
})

app.listen(process.env.PORT, function() {
    console.log('Server started in the port: ', process.env.PORT);
});
