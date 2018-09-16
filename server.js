// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var friends = require("./app/data/friends.js");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Set up Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routing
var api = new apiRoutes();
var html = new htmlRoutes();
api.returnFriends(app, friends);
api.postNewFriend(app, friends);
html.home(app, path);
html.survey(app, path);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});