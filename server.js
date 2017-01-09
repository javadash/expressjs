var fs = require('fs');
var express = require('express');


var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;
var app = express();

app.use(express.static(__dirname + "/public"));
 
 app.get("/", function(request, response) {
	 response.send("Hello world!");
 });
 
 app.listen(port, host, function() {
	 console.log("Now listening on " + host + ":" + port);
 });;
 
 app.get("/hello/:text", function(request, response){
	 response.send("Hello " + request.params.text);
 });
 
var users = {
	 "1":{
		 "name": "Ollie Parsley",
		 "twitter": "ollieparsley"
	 },
	 "2":{
		 "name": "Jeffrey Way",
		 "twitter":"jefferey_way"
	 }
 };
 
app.get("/user/:id", function(request, response){
	 var user = users[request.params.id];
	 if(user) {
		 response.send("<a href='http://twitter.com" + user.twitter + "'>Follow " + user.name + " on twitter</a>");
	 } else {
		 response.send("Sorry! we cannot find the user :(", 404);
	 }
 });