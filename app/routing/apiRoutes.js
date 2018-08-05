var path = require('path')
var friendsList = require('../data/friends.js')

module.exports = function(app) {

  app.post("/api/friends", function(req, res) {
    var postData = req.body;
    var postScore = postData.scores;
    var difference;
    var match = {
      name: "",
      pic: "",
      scoreDiff: Infinity
    };

    for (var i=0; i < friendsList.length; i++) {
      var currentFriend = friendsList[i];
      difference = 0;


      for (var j=0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentPostScore = postScore[j];

        difference += Math.abs(parseInt(currentPostScore) - parseInt(currentFriendScore));
      }

      if (difference <= match.scoreDiff) {
        match.name = currentFriend.name;
        match.photo = currentFriend.photo;
        match.scoreDiff = difference;
      }
    }
    res.json(match);
  });
};