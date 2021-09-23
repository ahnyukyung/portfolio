// main_slider
const mainSlider = new Swiper(".main_slider", {
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
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

  // banner
  $(".banner_prev,.banner_next").on("click", function () {
    $(".never_stop").fadeToggle();
  });

  // section03
  $(".indi_box").hide();
  $(".indi_tab").on("click", function () {
    $(".indi_box").show();
    $(".corp_box").hide();
    $(this).addClass("on");
    $(".corp_tab").removeClass("on");
  });
  $(".corp_tab").on("click", function () {
    $(".corp_box").show();
    $(".indi_box").hide();
    $(this).addClass("on");
    $(".indi_tab").removeClass("on");
  });
});
