// $(function(){
//   $("button").on('click',function(e){
    
//     alert(e.type);
//   });


// });
// var course = {
//   level: 201,
//   name: "Foundations 2: JavaScript",
//   lectures:[ 
//     {topic: "Paperwork, SetupPreview the documentView in a new window & Javascript Basics (Part 1)"},
//     {topic: "JavaScript Basics (Part 2) & Intro to Node"},
//     {topic: "Array Methods, Functions & Scope/Hoisting"},
//     {topic: "OOP in JavaScript and Classes/Inheritance"},
//     {topic: "JavaScript in the Browser & Intro to jQuery"},
//     {topic: "Building a Server & Using Ajax"},
//     {topic: "Build & Deploy an App"},
//     {topic: "Functional Programming with lodash"}],
//   labs: [{topic:"zoo animals"},{topic:"monsters, aliens and sorting"}]
// }

// //
// // Example 1: getElementsByTagName()
// //
// // Vanilla JS Task:
// //        Using JavaScript, add a descriptive page title.
// var titleTags = document.getElementsByTagName('title');
// var title = titleTags[0];
// title.text = "F2: JavaScript | Class Summary";


// //
// // Example 2: getElementById()
// //
// // Vanilla JS Task:
// //       Use getElementById to add a style attribute to the <ul>
// //       that removes the bullets to the left of the images.
// //
// // Resources:
// // https://developer.mozilla.org/en-US/docs/Web/API/Element.setAttribute
// // https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
// //
// var picsUl = document.getElementById('lab-images');
// picsUl.setAttribute('style','list-style-type: none;')

// // Alternate:
// // picsUl.setAttribute("style", "list-style-type: none;");

// //
// // Example 3: querySelectorAll()
// //
// // Vanilla JS Task:
// //       Make the images all have a maximum width of 200px.
// //
// var imgTags = document.querySelectorAll('li img');

// // for(var i = 0; i < imgTags.length; i++) {
// //   imgTags[i].setAttribute( 'style', 'max-width: 200px;');
// // }

// //
// // Example 4: querySelector() + createElement() + appendChild()
// //
// // Vanilla JS Task:
// //       Find another picture to illustrate one of the labs.
// //       Use JavaScript to add a new <li> element in your existing <ul>.
// //       Then add a new <img> element to the <li> and specify its src.
// //       You can use the URL of the image you found as the src,
// //       or you can download the new image to your assets/img folder.
// //
// // You’ll need: document.createElement() and element.appendChild()
// //
// var klingonImg = document.createElement('img');
// var klingonLi = document.createElement('li');
// klingonImg.setAttribute('src','http://wittswallpapers.com/StarTrek/klingon055.jpg');
// //klingonImg.setAttribute('style','max-width: 200px;')
// klingonLi.appendChild(klingonImg);
// var klingonSpan = document.createElement('span');
// klingonSpan.appendChild(document.createTextNode('Lab 2: Universal Translator'));
// klingonLi.appendChild(klingonSpan);
// picsUl.appendChild(klingonLi);




// //
// // Example 5: window.addEventListener("load")
// //
// // Vanilla JS Task:
// //        Open an alert dialog on page load to welcome the user to the page.
// //
// function welcomeUserToPage() {
//   alert("I fight for the user!");
// }
// window.addEventListener('load', welcomeUserToPage);

// //
// // Example 6: Handling the resize event
// //
// //            resize = An event on the window object.
// //            Signifies the user changed the viewing dimensions.
// //            Use it to implement "responsive design": adjust layout, styling, and element visibility.
// //
// // Vanilla JS Task:
// //        Make the images half the window width each time the resize event triggers.
// //
// // You’ll need: window.innerWidth and window.innerHeight
// //
// window.addEventListener('resize', function(){

//   imgTags = document.querySelectorAll('img');
//   var previousStyle;
//   var imgWidth = window.innerWidth / 2;
//   var imgHeight = window.innerHeight * 0.8;

//   for(var i = 0; i < imgTags.length; i++) {
//     previousStyle = imgTags[i].getAttribute('style') || "";
//     var newStyle = previousStyle + " height: " + imgHeight + "px; width: " + imgWidth +"px;";
//     imgTags[i].setAttribute( 'style', newStyle);
//   }
// });

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
