$(function () {

  var next = $(".next");
  var prev = $(".prev");
  next.click(function () {
    if ($(".last").hasClass("active")) {
      $(".last").removeClass("active");
      $(".first").addClass("active");
    } else {
      $(".active").next().addClass("active");
      $(".active").prev().removeClass("active");
    }
  });

  prev.click(function () {
    if ($(".first").hasClass("active")) {
      $(".first").removeClass("active");
      $(".last").addClass("active");
    } else {
      $(".active").prev().addClass("active");
      $(".active").next().removeClass("active");
    }
  });

  $("i.first").click(function () {
    $(".images > img, .nav > i").removeClass("active");
    $(".images > img.first, .nav > i.first").addClass("active");
  });

  $("i.first").next().click(function () {
    $(".images > img, .nav > i").removeClass("active");
    $(".images > img.first, .nav > i.first").next().addClass("active");
  });

  $("i.last").prev().click(function () {
    $(".images > img, .nav > i").removeClass("active");
    $(".images > img.last, .nav > i.last").prev().addClass("active");
  });

  $("i.last").click(function () {
    $(".images > img, .nav > i").removeClass("active");
    $(".images > img.last, .nav > i.last").addClass("active");
  });

});
