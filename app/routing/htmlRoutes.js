var path = require('path')
var friendsList = require('../data/friends.js')

module.exports = function (app) {
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"))
  });

  app.get('/api/friends', function (req, res) {
    res.json(friendsList);
  });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
