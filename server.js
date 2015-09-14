
var express = require("express");
var app = express(); 
var port = process.env.PORT || 3000; 


var course = {
    "level": 201, 
    "name": "Foundations II: JavaScript", 
    "lectures": [ 
        {title: "lecture 1", topic: "Paperwork, SetupPreview the documentView in a new window & Javascript Basics (Part 1)"},
        {title: "lecture 2", topic: "JavaScript Basics (Part 2) & Intro to Node"},
        {title: "lecture 3", topic: "Array Methods, Functions & Scope/Hoisting"},
        {title: "lecture 4", topic: "OOP in JavaScript and Classes/Inheritance"},
        {title: "lecture 5", topic: "JavaScript in the Browser & Intro to jQuery"},
        {title: "lecture 6", topic: "Building a Server & Using Ajax"},
        {title: "lecture 7", topic: "Build & Deploy an App"},
        {title: "lecture 8", topic: "Functional Programming with lodash"}
    ],
    "labs": [
        {title: "lab 1", "topic": "Zoo Animals"}, 
        {title: "lab 2", "topic": "Blobs, Aliens and Sorting"},
        {title: "lab 3", "topic": "???"},
        {title: "lab 4", "topic": "Pizza"}
    ]
}
var yodaQuotes = ["Do or do not. There is no try.", "My ally is the force.", "Slimy!? Mudhole!? My home this is!", "Wars not make one great."]

function getRandomThingy(thingiesArray) {
	return thingiesArray[Math.floor(Math.random() * thingiesArray.length)]
}

var retval = "string"

app.listen(port, function() { 
    console.log("server started on port " + port + "; Ctrl C to stop.") 
});

app.use(express.static(__dirname+"/app/"));

app.get("/", function(req, res){
	res.sendFile();

    //res.send("hello anna and javier! and pizza <h1> hello! </h1>");
});

app.get("/annas_awesome_site_page", function(req, res){
    res.send("This is the best page EVAR! so 1334!");
})
app.get('/:type', function (req, res){

    switch (req.params.type) {
        case 'labs':
            res.json(course.labs);
            break;
        case 'lectures':
            res.json(course.lectures);
            break;
        case 'random':
            var responseItem = getRandomItem()
            switch (typeof responseItem) {
                case 'string':
                    res.send(responseItem);
                    break;
                case 'object':
                    res.json(responseItem);
                    break
            }
            break;
        default:
            res.status(404).send("404 not Found");
    }
});
app.get('/:type/:id', function (req, res) {
    switch(req.params.type){
        case 'labs':
            res.send(course.labs[req.params.id])
            break;
        case 'lectures':
            res.send(course.lectures[req.params.id])
            break;
        default:
            res.status(404).send('404 not found');
    }

});

function getRandomItem() {
    switch (Math.floor(Math.random()*3)) {
        case 0:
            return selectRandomItem(course.lectures);
        case 1:
            return selectRandomItem(course.labs);
        case 2:
            return selectRandomItem(yodaQuotes);
    }

}
function selectRandomItem(array) {
    return array[Math.floor(Math.random()*array.length)]
}
// app.get("/lectures", function(req, res){
// 	res.json(getRandomThingy(course.lectures).topic);
// });
// app.get("/labs",function(req, res){
// 	res.send("<h1>Random Labs</h1><h2>The lab you got was: "+getRandomThingy(course.labs).topic+"</h2>");
// });
