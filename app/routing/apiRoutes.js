var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var friends = require('./../data/friends.js');

var apiRoutes = express();

apiRoutes.use(bodyParser.urlencoded({ extended: true }));
apiRoutes.use(bodyParser.json());


apiRoutes.get("/api/friends", function(req, res) {
	res.send(friends);
});

apiRoutes.post("/api/friends", function(req,res) {
	var newFriend = req.body;

	//Parse all scores values into integers
	for (var i = 0; i < newFriend.scores.length; i++){
		newFriend.scores[i] = parseInt(newFriend.scores[i]);
	}

	

	for (var i = 0; i < friends.length; i++){
		for (var s = 0; s < 10; s++) {
			
		}
	}

	friends.push(newFriend);
	console.log(friends);
})


module.exports = apiRoutes;