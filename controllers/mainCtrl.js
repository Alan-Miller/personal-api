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
    if (req.query.order === 'desc') {
      jobs.sort();
    } else if (req.query.order === 'asc') {
      jobs.sort().reverse();
    }
    res.status(200).json(jobs);
  },
  getOccupationsLatest: function(req, res, next) {
    res.status(200).json(alan.occupations[alan.occupations.length - 1]);
  },
  getHobbies: function(req, res, next) {
    var type = req.params.type;
    if (!req.params.type || req.params.type === 'all') {
      res.status(200).json(alan.hobbies);
    }
    var typeArray = [];
    for (var i = 0; i < alan.hobbies.length; i++) {
      if (alan.hobbies[i].type === type) {
        typeArray.push(alan.hobbies[i]);
      }
    }
    res.status(200).json(typeArray);
  },

  changeName: function(req, res, next) {
    alan.name = req.body;
    res.status(200).json(alan);
  },
  changeLocation: function(req, res, next) {
    alan.location = req.body;
    res.status(200).json(alan);
  },
  addHobby: function(req, res, next) {
    alan.hobbies.push(req.body);
    res.status(200).json(alan.hobbies);
  },
  addOccupation: function(req, res, next) {
    var jobsArray = alan.occupations.concat(req.body);
    res.status(200).json(jobsArray);
  },

  getSkills: function(req, res, next) {
    var expArray = [];
    var exp = req.query.exp;
    if (req.query.exp) {
      for (var i = 0; i < alan.skills.length; i++) {
        if (alan.skills[i].experience === req.query.exp) {
          expArray.push(alan.skills[i]);
        }
      }
      res.status(200).json(expArray);
    } else {
      res.status(200).json(alan.skills);
    }
  },
  addSkills: function(req, res, next) {
    alan.skills.push(req.body);
    res.status(200).json(alan.skills);
  }

};
