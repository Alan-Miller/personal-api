var alan = require('../people/aam.js');

module.exports = {

  addHeaders: function(req, res, next) {
    res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });
    next();
  },
  createId: function(req, res, next) {
    var alanSkills = alan.skills;
    alanSkills.map(function(skill) {
      skill.id = alanSkills.indexOf(skill) + 1;
    });
    req.body.id = alanSkills.length + 1;
    next();
  },
  verifyUser: function(req, res, next) {
    if (req.params.username === 'alanashman' && req.params.pin === '1118') {
      res.status(200).json(alan.secrets);
    } else {
      console.log(new Error('boom!'));
    }
    next();
  }

};
