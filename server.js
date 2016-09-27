var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getOccupationsLatest);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbies);

app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);

app.post('/hobbies', mainCtrl.addHobby);
app.post('/hobbies/:exp', mainCtrl.addHobby);
app.post('/occupations', mainCtrl.addOccupation);

app.get('/skills', mainCtrl.getSkills);
app.post('/skills', middleware.createId, mainCtrl.addSkills);

app.get('/secrets/:username/:pin', middleware.verifyUser);

app.listen(3000, function() {
  console.log('I can hear you. I am always listening.');
});
