var express = require('express');
var path = require('path');

var htmlRoutes = express();


htmlRoutes.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/home.html"));
});

htmlRoutes.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/survey.html"));
});


module.exports = htmlRoutes;