var COURSE_INFO = require("./courseInfo");

var search = function(searchText) {

  var course = COURSE_INFO;
  var findPhrase = function(searchText) {
    var results = {
      lectures: [],
      labs: []
    };

    var notes = [];
    notes = searchCourseSection("lectures", searchText);
    notes.concat(searchCourseSection("labs", searchText));

    // vary the output based on whether any search results are returned
    if (notes.length > 0) {
      results =  { searchText: searchText, searchResults: notes };
    } else {
      results = { searchText: searchText, searchResults: null };
    }
    return results;
  };

  var searchCourseSection = function(section, searchText) {
    var results = [],
        noteLc = "";

    for (var i = 0; i < course[section].length; i++) {
      if (course[section][i].notes && course[section][i].notes.constructor === Array) {
        for (var j = 0; j < course[section][i].notes.length; j++) {
          noteLc = course[section][i].notes[j].toLowerCase();
          if (noteLc.indexOf(searchText.toLowerCase()) >= 0) {
            var resultsObj = {
              title: course[section][i].title,
              note: course[section][i].notes[j],
              section: section,
              topic: course[section][i].topic
            };

            results.push(resultsObj);
          }
        }
      }
    }

    return results;
  };

  return findPhrase(searchText);

};
module.exports = search;
