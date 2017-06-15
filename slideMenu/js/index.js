/* 
  Licensing & Terms of Use
  
  You are not allowed to take this work “as-is” and sell it, redistribute or re-publish it (with the exception of forking our GitHub repos), or sell “pluginized” versions of it.
*/

$(document).ready(function() {
  $(".nav-item, .fa-arrow-right, .fa-arrow-left").mouseover(function() {
    $(this).addClass("increase-size");
    $(this).removeClass("decrease-size");
  });

  $(".nav-item, .fa-arrow-right, .fa-arrow-left").mouseout(function() {
    $(this).removeClass("increase-size");
    $(this).addClass("decrease-size");
  });

  $(".nav-item").click(function() {
    var currentNav = $(this),
      navLinkId = $(this).attr("id"),
      slides = $(".slide"),
      currentSlide = $(slides)[navLinkId],
      slideBg = $(currentSlide).css("background-color");

    $(currentSlide).removeClass("shrink").addClass("current unshrink");
    $(".slide").not(currentSlide).addClass("shrink").removeClass("current unshrink");
    $(currentNav).css("background-color", slideBg);
    $(".nav-item").not(currentNav).css("background-color", "white");
  });

  $(this).on("keydown", function(e) {
    var code = e.keyCode || e.which;
    var currentSlide = $(".slide.current");
    var currentSlideId = $(currentSlide).attr("id");
    var currentNav = $(".nav-item")[currentSlideId];
    var previousSlide = currentSlide.prev();
    var previousSlideId = $(previousSlide).attr("id");
    var previousSlideBg = $(previousSlide).css("background-color");
    var previousNav = $(".nav-item")[previousSlideId];
    var nextSlide = $(".current").next();
    var nextSlideId = $(nextSlide).attr("id");
    var nextSlideBg = $(nextSlide).css("background-color");
    var nextNav = $(".nav-item")[nextSlideId];

    if (code == 37) {

      console.log(previousSlide)
      console.log(currentSlide)
      if ($(previousSlide).hasClass("slide")) {
        console.log("2")
        console.log(previousSlide)
        $(currentSlide).removeClass("current unshrink").addClass("shrink");
        $(previousSlide).addClass("current unshrink").removeClass("shrink");
        $(previousNav).css("background-color", previousSlideBg);
        $(currentNav).css("background-color", "white");
      }
    }

    if (code == 39) {
      console.log("net")
      if ($(nextSlide).hasClass("slide")) {
        $(currentSlide).removeClass("current unshrink").addClass("shrink");
        $(nextSlide).addClass("current unshrink").removeClass("shrink");
        $(nextNav).css("background-color", nextSlideBg);
        $(currentNav).css("background-color", "white");
      }
    }
  });
});