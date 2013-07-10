var fs = require ('fs');
var message = fs.readFileSync(index.html);
var buffer = new Buffer(message); 
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
