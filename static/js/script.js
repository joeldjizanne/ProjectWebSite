

$(document).ready(function () {
  $(".rotate-btn").on("click", function () {
    var t = $(this).attr("data-card");
    $("#" + t).toggleClass("flipped")
  })
  $('.dropdown-toggle').dropdown()
})

