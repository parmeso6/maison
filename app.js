var express = require('express');

var app = express();
var port = 3000;


//Settings
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

//Routing
app.get('/', function (req, res) {
  console.log('Index');
  res.render('index');
});

//Server
app.listen(port);
console.log("Serveur lancé à l'adresse http://local.dev:" +port);
