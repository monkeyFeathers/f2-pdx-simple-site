$(function () {
  // Menu Button click handler
  $(".getCourseInfo").on('click',function(e){
    e.preventDefault();

    $button = $(e.target);
    if ($button.hasClass('btn-success') && !($button.hasClass('getRandom'))){

    } else {
        clearCourseInfo();
        clearButtons();
        $button.addClass('btn-success');
      switch ($button.attr('data-req')) {
          case 'labs':
            getCourseInfo('labs');
            break;
          case 'lectures':
            getCourseInfo('lectures');
            break;
          case 'random':
            $.get('/random', function(data){
              createContentPanel("#course-content-display",data);
            });
            break;
      }
    }

  });

    // click handler for list items created from course info lists
  $("#course-info-menu").click(function(e){
    e.preventDefault();
    var trigger = $(e.target);
    if (trigger.is('a') ) {
      $.get(trigger.attr('href'), function(data){
        createContentPanel("#course-content-display", data);
      });
    }
  });

  // form submit handler
  $("#search").on("submit", function(e) {
  // TODO: Prevent the form from submitting the default way.
    e.preventDefault();
    // handle style elements
    clearButtons();
    clearCourseInfo();
    $('#course-info-menu').empty();
    $("#search :button").addClass('btn-success');

    // check if I feel lucky is clicked

    if ($("#lucky").is(':checked')) {
        $.get('/ifeellucky',function(data){
        console.log(data)
        createContentPanel("#course-content-display", data);
        $("#course-content-display").prepend('<h2>Did you get lucky?</h2>')
      });
    } else {
      // perform search
      if ($("#search :text").val().length > 0) {
        var url = "/search";
            var data = {"searchText":$("#search :text").val().split(',')};
            $.post(url, data, function(response) {
      
              var searchResultsString = '<div class="panel"><h3 class="panel-header">Search Results</h3>';
              response.forEach(function(item) {
                if (item.searchResults === null) {
                  searchResultsString += '<h4>Your search for "' + item.searchText + '" return no results.</h4>';
                } else {
                  searchResultsString += '<h4>Your search for "' + item.searchText + '" return the following results:</h4>'
                  
                  item.searchResults.forEach(function(resultItem){
                    console.log('search text: ' + item.searchText)
                    var re = new RegExp(item.searchText.trim(), 'i');
                    searchResultsString += '<h5>' + resultItem.title + ' <small>' + resultItem.topic + '</small></h5>';
                    var splitNote = resultItem.note.split(' ')
                    
                    for (var i = 0; i < splitNote.length; i++ ) {
                      if (splitNote[i].match(re)){
                        splitNote[i] = '<mark>' + splitNote[i] + '</mark>';
                      }
                    }
                    
                    var markedNote = splitNote.join(' ');
                    searchResultsString += '<p>'+ markedNote + '</p>'
                  
                  })
                  
                }
              })
              searchResultsString += "</div>";
      
              $("#course-content-display").html(searchResultsString);
            });
          }
    } 
  });

/**************************************************************/
/**************************************************************/

  // helpers
  function clearButtons() {
    $('button').removeClass('btn-success').addClass('btn-default');
  }
  function clearCourseInfo() {
    $('#course-content-display').empty();
    $('#course-info-menu').empty();
  }

  function getCourseInfo(courseInfoType){
    $.get('/' + courseInfoType, function(data){
      $("#course-info-menu").html(makeList(data, courseInfoType));
    });
  }

   function makeList(objectArray, type){
    var outputString = '<ul class="nav nav-pills">';
    objectArray.forEach(function(obj){
        outputString += '<li><a href="/' + type + '/' + objectArray.indexOf(obj) + '">' + obj.title + '</a></li>'
    });
    outputString += "</ul>"
    return outputString;
  }
  function createContentPanel (enclosingDiv, data) {
    var outputString = '<div class="panel">'
    switch (typeof data) {
      case 'string':
        outputString += '<h3 class="panel-header">' + data + "</h3><p>-- Master Yoda</p>";
        $(enclosingDiv).html(outputString);
        break;
      case 'object':
        outputString += '<h3 class="panel-header">' + data.title + " <small>"+data.topic+"</small></h3>";
        if (data.notes) {
          outputString += "<ul>"
          data.notes.forEach(function(note){
            outputString += "<li>" + note + "</li>"
          })
          outputString += "</ul>"
        }
        outputString += '</div>'
        $(enclosingDiv).html(outputString);
        break;
    }
  }

/**************************************************************/
/**************************************************************/

});
