var express = require('express');

var app = express();

var port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.get('/', function(req, res) {
  res.render('index');
})



app.listen(port, function(err) {
  console.log("We are live on Port" + port);
})