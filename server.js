var express = require('express');

var app = express();
var port = process.env.PORT || 3000;


var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/app/'));

var course = require('./lib/courseInfo');
var f2search = require("./lib/f2search");
var helpers = require('./lib/helpers');

app.get('/', function (req, res) {
  res.sendFile();
});

app.post('/search', function (req, res) {
    var searchResults = []; 
    req.body.searchText.forEach(function(searchText){
        searchResults.push(f2search(searchText));
    });
    res.json(searchResults);
});

app.get('/ifeellucky', function (req, res) {
    res.send(helpers.selectRandomItem(course.getAllNotes()))
});

app.get('/:type', function (req, res){

    switch (req.params.type) {
        case 'labs':
            res.json(course.labs);
            break;
        case 'lectures':
            res.json(course.lectures);
            break;
        case 'random':
            var responseItem = helpers.getRandomItem()
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

app.listen(port, function () {
  console.log('server started on port ' + port + "; Ctrl c to stop.");
});

