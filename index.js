var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;

console.log('server running at http://localhost:' + port);

var app = express();

app.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


module.exports = app;