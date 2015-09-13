//
$(function(){
  $("button").on('click',function(e){
      switch ($(this).attr('id')) {
        case 'labsButton':
            $.get('/labs',function(data){
                $("#labList").html(makeList(data, 'labs'));
            });
            
            break;
        case 'lecturesButton':
            $.get('/lectures',function(data){
                $("#lectureList").html(makeList(data, 'lectures'));
            });
            break;
      }
    });
  function makeList(objectArray, type){
    var outputString = '<ol>';
    objectArray.forEach(function(obj){
        outputString += '<li><a href="/' + type + '/' + objectArray.indexOf(obj) + '">' + obj.title + '</a></li>'
    });
    outputString += "</ol>"
    return outputString;
  }
  $(".content").click(function(e){
    e.preventDefault();
    var trigger = $(e.target);
    var type = trigger.parent().parent().parent().attr('id').split('List')[0];
    $.get(trigger.attr('href'), function(data){
        var string = "<h3>" + data.title + "</h3><p>"+data.topic+"</p>"
        $("#"+type+"Description").html(string);
    });
  })

});


// Example 1: getElementsByTagName()
//
// Vanilla JS Task:
//        Using JavaScript, add a descriptive page title.


//
// Example 2: getElementById()
//
// Vanilla JS Task:
//       Use getElementById to add a style attribute to the <ul>
//       that removes the bullets to the left of the images.
//
// Resources:
// https://developer.mozilla.org/en-US/docs/Web/API/Element.setAttribute
// https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
//


// Alternate:
// picsUl.setAttribute("style", "list-style-type: none;");

//
// Example 3: querySelectorAll()
//
// Vanilla JS Task:
//       Make the images all have a maximum width of 200px.
//


//
// Example 4: querySelector() + createElement() + appendChild()
//
// Vanilla JS Task:
//       Find another picture to illustrate one of the labs.
//       Use JavaScript to add a new <li> element in your existing <ul>.
//       Then add a new <img> element to the <li> and specify its src.
//       You can use the URL of the image you found as the src,
//       or you can download the new image to your assets/img folder.
//
// You’ll need: document.createElement() and element.appendChild()
//


//
// Example 5: window.addEventListener("load")
//
// Vanilla JS Task:
//        Open an alert dialog on page load to welcome the user to the page.
//

//
// Example 6: Handling the resize event
//
//            resize = An event on the window object.
//            Signifies the user changed the viewing dimensions.
//            Use it to implement "responsive design": adjust layout, styling, and element visibility.
//
// Vanilla JS Task:
//        Make the images half the window width each time the resize event triggers.
//
// You’ll need: window.innerWidth and window.innerHeight
//


//
// jQuery Task:
//        Repeat the previous task, this time using jQuery.
//
// You'll need: $(window).on()
//              $(window).width()
//              $(element).height(desiredHeight)


//
// Example 7: Handling a click event
//
//            click = An event on a DOM element.
//            Signifies the user clicked that element with a mouse or trackpad.
//            Use it to interact with the user: open a menu,respond to a button-click, etc.
//
// Vanilla JS Task:
//        Every time an image is clicked, move it to the end of the <ul>.
//
// You’ll need: event.target.parentNode
//              element.remove()
//              element.appendChild()
//

//
// jQuery Task:
//        Repeat the previous task, this time using jQuery.

//
// jQuery Task:
//       Hide all the lab images on page load.
//       When a button is clicked, show the corresponding list item (and only that list item)
//
