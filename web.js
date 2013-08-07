var fs = require ('fs');
var buffer = new Buffer(fs.readFileSync('index-fluid.html'),'utf-8');
  
var express = require('express');

var app = express();

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
