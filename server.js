var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();

app.use(middleware.addHeaders);

app.listen(3000, function() {
  console.log('Listening on 3000');
});
