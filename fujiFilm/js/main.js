// main_slider
const mainSlider = new Swiper(".main_slider", {
  autoplay: {
    delay: 10000,
  },
  speed: 400,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});
$(function () {
  $(".depth2").hide();
  $(".depth1_tit")
    .on("mouseover", function () {
      $(".depth2").hide();
      $(this).next().show();
      $("#header").addClass("on");
      $(this).addClass("over");
    })
    .on("mouseleave", function () {
      $(".depth2").hide();
      $("#header").removeClass("on");
      $(this).removeClass("over");
    });

  function gnbShow() {
    $(this).parents("ul").show();
    $(this).next().show();
  }
  function gnbHide() {
    $(this).parents("ul").hide();
    $(this).next().hide();
  }
  $(".depth2 > li > a")
    .on("mouseover", function () {
      $(this).parents("ul").show();
      $(this).next().show();
      $("#header").addClass("on");
      $(this).addClass("over");
    })
    .on("mouseleave", function () {
      $(this).parents("ul").hide();
      $(this).next().hide();
      $("#header").removeClass("on");
      $(this).removeClass("over");
    });
  $(".depth3 > li > a")
    .on("mouseover", function () {
      $(this).parents("ul").show();
      $(this).next().show();
      $("#header").addClass("on");
    })
    .on("mouseleave", function () {
      $(this).parents("ul").hide();
      $(this).next().hide();
      $("#header").removeClass("on");
    });
});
