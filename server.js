var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/'));

// app.get('/course', function (req, res) {
//   res.sendFile('lecture_summary.html', { root: __dirname + '/app/' });
// });

var course = {
  level: 201,
  name: 'Foundations 2: JavaScript',
  lectures: [
    { "topic": "Intro, Basics 1" },
    { "topic": "Basics 2" },
    { "topic": "Array Methods, Functions, Scope" },
    { "topic": "Object Oriented Programming" },
    { "topic": "JavaScript in the Browser" },
    { "topic": "Node.js and Express" },
    { "topic": "Workshop" },
    { "topic": "lodash" }
  ],
  labs: [
    { "topic": "Basics" },
    { "topic": "Object Oriented Programming"},
    { "topic": "Project"}
  ]
};

app.get('/lectures', function (req, res) {
  res.json(course.lectures);
});

app.get('/labs', function (req, res) {
  res.json(course.labs);
});

app.get('/', function (req, res) {
  res.sendFile();
});

app.listen(port, function () {
  console.log('server started on port ' + port);
});
