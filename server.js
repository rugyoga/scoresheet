var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.static('bower_components'));
app.listen( 8080, '127.0.0.1' );