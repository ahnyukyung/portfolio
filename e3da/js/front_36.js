$(".answer ").hide();
$(".question").on("click", function (e) {
  e.preventDefault();
  $(this).siblings(".answer").slideToggle();
  $(this).toggleClass("active");
});
