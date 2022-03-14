$(".answer ").hide();
$(".question").on("click", function (e) {
  e.preventDefault();
  $(this).siblings(".answer").slideToggle();
  $(this).parent().siblings().children(".answer").slideUp();
  $(this).parent().siblings().children(".question").removeClass("active");
  $(this).toggleClass("active");
});
