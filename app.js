var express = require('express');
var nodemailer   = require('nodemailer');
var bodyParser   = require('body-parser');

var app = express();
var port = 3000;
var transporter = nodemailer.createTransport();

//Settings
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//Routing
app.get('/', function (req, res) {
  console.log('Index');
  res.render('index');
});

app.post('/', function(req,res){
  transporter.sendMail({
    from: req.body.email,
    to: 'sophie.marie.parmentier@gmail.com',
    subject: 'Contact depuis le site Maison HAVAS.',
    text: req.body.message
  });
  console.log('Send this message: ' + req.body.message + 'from: ' + req.body.email);
  res.redirect('/');
});

//Server
app.listen(port);
console.log("Serveur lancé à l'adresse http://localhost:" +port);
