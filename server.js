var express = require("express");
var app = express();
var cors = require('cors');
var config = require('./config')
var userCtrl = require('./controllers/userCtrl');
var profileCtrl = require('./controllers/profileCtrl');
var bodyParser = require('body-parser');
var session = require('express-session');
var port = 7433;
var corsOptions = {
  origin: 'http://localhost:7433'
};
app.use(express.static(__dirname + '/public'));
console.log(__dirname);
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret}));

app.post('/api/login', userCtrl.login);

app.get('/api/profiles', profileCtrl.friends);

app.listen(port, function(){
  console.log("this is the " + port + " port");
});
