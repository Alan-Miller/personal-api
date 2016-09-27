var alan = require('./people/aam.js');

module.exports = {
  getName: function(req, res, next) {
    res.status(200).json(alan.name);
  }
};
