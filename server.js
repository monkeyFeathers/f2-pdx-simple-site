var express = require("express");
var app = express(); 
var port = process.env.PORT || 3000; 

var course = {
    "level": 201, 
    "name": "Foundations II: JavaScript", 
    "lectures": [
    {"topic": "1"}, {"topic": "2"},
    {"topic": "3"}, {"topic": "4"},
    {"topic": "5"}, {"topic": "6"},
    {"topic": "7"}, {"topic": "8"}
    ],
    "labs": [{"topic": "Zoo Animals"}, {"topic": "Blobs, Aliens and Sorting"},
    {"topic": "???"}, {"topic": "Pizza"}]
}

function getRandomThingy(thingiesArray) {
	return thingiesArray[Math.floor(Math.random() * thingiesArray.length)]
}

var retval = "string"

app.listen(port, function() { 
    console.log('server started on port' + port) 
});

app.get("/", function(req, res){
	res.send("hello anna and javier! and pizza <h1> hello! </h1>");
});

app.get("/annas_awesome_site_page", function(req, res){
    res.send("This is the best page EVAR! so 1334!");
})

app.get("/lectures", function(req, res){
	res.json(getRandomThingy(course.lectures).topic);
});
app.get("/labs",function(req, res){
	res.send("<h1>Random Labs</h1><h2>The lab you got was: "+getRandomThingy(course.labs).topic+"</h2>");
});
