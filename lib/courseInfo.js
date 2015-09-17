var course = {
  level: 201,
  name: "Foundations 2: JavaScript",
  lectures: [
    { "title":"Lecture 1", "date":"", "topic": "Intro, Basics 1",
      "notes": [ "The primitive data types are Boolean, Null, Undefined, Number, and String.",
                 "Parameters become variables inside their function.",
                 "A method is a function that is also the value of an object property."
               ]
    },
    { "title":"Lecture 2", "date":"", "topic": "Basics 2",
      "notes": [ "Logical operators return the result of the last expression evaluated.",
                 "Loops execute the same instructions multiple times.",
                 "An infinite loop is a loop that never satisfies its exit condition."
               ]
    },
    { "title":"Lecture 3", "date":"", "topic": "Array Methods, Functions, Scope",
      "notes": [ "join() takes a delimiter, returns a string.",
                 "Generally useful code is often packaged up as a collection of functions and data in libraries.",
                 "JavaScript is function-scoped."
               ] },
    { "title":"Lecture 4", "date":"", "topic": "Object Oriented Programming" },
    { "title":"Lecture 5", "date":"", "topic": "JavaScript in the Browser" },
    { "title":"Lecture 6", "date":"", "topic": "Node.js and Express" },
    { "title":"Lecture 7", "date":"", "topic": "Workshop" },
    { "title":"Lecture 8", "date":"", "topic": "lodash" }
  ],
  labs: [
    { "title":"Lab 1", "topic": "Basics" },
    { "title":"Lab 2", "topic": "Object Oriented Programming" },
    { "title":"Lab 3", "topic": "Project" },
    { "title":"Lab 4", "topic": "Pizza" }
  ],
  getAllNotes: function() {
    results = [];
    this.lectures.forEach(function(lecture) {
      if (lecture.notes) {
        results.push(lecture);
      }
    });
    return results;
  }
};
module.exports = course;
