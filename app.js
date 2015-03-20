var express = require('express');
var http = require('http');

var app = express();
app.get('/', function (req, res){

  res.send('Welcome to my super nice nodejs app on port ' + server.address().port);
});

var server = http.createServer(app);
server.listen(3000, function(){
  console.log('Express server listening on port ' + server.address().port );
});
