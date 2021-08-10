$(document).ready(function() {
  $("#clickShow").click(function() {
    $("#walrus-showing").fadeIn();
    $("#walrus-hidden").fadeOut();
  });
  $("#clickHide").click(function() {
    $("#walrus-showing").fadeOut();
    $("#walrus-hidden").fadeIn();
  });
});