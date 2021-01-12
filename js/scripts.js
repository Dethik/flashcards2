$(document).ready(function() {

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
  
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("#clickable").click(function() {
    $("p").removeClass();
    $("p").addClass("highlight")
  });

  $(".js").click(function() {
    $(".javascript-hidden").toggle();
  });

  $(".operator").click(function() {
    $(".operators-hidden").toggle();
  });


});