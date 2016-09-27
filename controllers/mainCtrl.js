var alan = require('../people/aam.js');

module.exports = {
  getName: function(req, res, next) {
    res.status(200).json(alan.name);
  },
  getLocation: function(req, res, next) {
    res.status(200).json(alan.location);
  },
  getOccupations: function(req, res, next) {
    var jobs = alan.occupations;
    if (req.query.order === 'asc') {
      jobs = jobs.sort();
    } else if (req.query.order === 'desc') {
      jobs = jobs.sort().reverse();
    }
    res.status(200).json(jobs);
  },
  getOccupationsLatest: function(req, res, next) {
    res.status(200).json(alan.occupations.reverse()[0]);
  },
  getHobbies: function(req, res, next) {
    res.status(200).json(alan.hobbies);
  },
  getHobbiesByType: function(req, res, next) {
    var typeArray = [];
    alan.hobbies.forEach(function(elem, index) {
      if (elem.type === req.params.type) {
        typeArray.push(elem.hobby);
      }
    });
    res.status(200).json(typeArray);
  },
  changeName: function(req, res, next) {
    alan.name = req.body.name;
    res.status(200).json(alan);
  },
  changeLocation: function(req, res, next) {
    alan.location = req.body.location;
    res.status(200).json(alan);
  },
  addHobby: function(req, res, next) {
    alan.hobbies.push(req.body);
    res.status(200).json(alan.hobbies);
  },
  addOccupation: function(req, res, next) {
    alan.occupations.push(req.body[0]);
    res.status(200).json(alan.occupations);
  }
};
