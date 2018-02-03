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

	

	//Compare answers to the answers of other users

	function compareDiff(a,b){return Math.abs(a-b);}
	var totalArray = [];

	//Run through each friend
	for (var i = 0; i < friends.length; i++){
		var userDiff = 0;
		var totalDifference = 0;
		//Run through each friend's scores
		for (var s = 0; s < 10; s++) {
			//compares each score value and then adds the difference to a total.
			totalDifference += compareDiff(newFriend.scores[s],	friends[i].scores[s]);
		}
		// Pushes each existing user's total difference into an array- now the user with the least difference can be selected
		totalArray.push(totalDifference); 

	}

	console.log(totalArray);

	//Stores the index position of the friend with the least difference into var "chosen"
	var chosen = totalArray.indexOf(Math.min.apply(null,totalArray));

	res.json(friends[chosen]);

	friends.push(newFriend);

})


module.exports = apiRoutes;