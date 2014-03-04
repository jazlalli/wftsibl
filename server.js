var express = require('express');
var app = express();
var port = 4321 || node.env.PORT;

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.listen(port, function() {
  console.log('app started');
});