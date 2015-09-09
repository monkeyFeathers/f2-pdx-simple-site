$(function () {
  $('button').click(function () {
    var section = $(this).attr('id');

    $.get("http://localhost:3000/" + section, function (response) {
      $("#show-" + section).text(response[0].topic);
    });
  });
});
