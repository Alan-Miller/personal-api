var alan = require('../people/aam.js');

module.exports = {
  getName: function(req, res, next) {
    res.status(200).json(alan.name);
  },
  getLocation: function(req, res, next) {
    res.status(200).json(alan.location);
  },
  getOccupations: function(req, res, next) {
    res.status(200).json(alan.occupations);
  },
  getOccupationsLatest: function(req, res, next) {
    res.status(200).json(alan.occupations.reverse()[0]);
  },
  getHobbies: function(req, res, next) {
    res.status(200).json(alan.hobbies);
  },
  getHobbiesByType: function(req, res, next) {
    req.params.type
    res.status(200).json(alan.hobbies);
  }
};
