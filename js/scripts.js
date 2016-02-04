$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle("slow");
    $("#walrus-hidden").fadeToggle(8000);

  });
});
