$(".gnb >li > a")
  .on("mouseenter", function () {
    $(".header_inner").addClass("open");
    $(".header_inner h1 img").attr("src", "images/logo_02.svg");
  })
  .on("mouseleave", function () {
    $(".header_inner").removeClass("open");
    if ($(this).parents("#header").hasClass("main")) {
      $(".header_inner h1 img").attr("src", "images/logo_01.svg");
    }
  });
$(".depth02 a")
  .on("mouseenter", function () {
    $(this).parents("li").addClass("active");
    $(this).parents(".depth02").addClass("active");
  })
  .on("mouseleave", function () {
    $(this).parents("li").removeClass("active");
    $(this).parents(".depth02").removeClass("active");
  });
$(".depth02").on("mouseover", function () {
  $(".gnb >li > a").trigger("mouseenter");
});
$(".depth02").on("mouseleave", function () {
  $(".gnb >li > a").trigger("mouseleave");
});
$(".m_gnb_tit").on("click", function (event) {
  event.preventDefault();
  $(this).toggleClass("active").siblings("ul").slideToggle("fast");
});
$(".gnb_open").on("click", function () {
  $("body").css("overflow", "hidden");
});
$(".gnb_close").on("click", function () {
  $("body").css("overflow", "auto");
});
