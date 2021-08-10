$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });
  // $("#clickHide").click(function() {
  //   $("#walrus-showing").slideToggle();
  //   $("#walrus-hidden").slideToggle();
  // });
});