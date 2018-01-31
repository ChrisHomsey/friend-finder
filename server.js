var express = require("express");

var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

var PORT = process.env.PORT || 3000;

var app = express();
app.use([htmlRoutes, apiRoutes]);

app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);
})

