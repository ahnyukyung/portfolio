$(function () {
  //bxslider
  $(".bxslider").bxSlider({
    mode: "horizontal",
    speed: 600,
    pager: true,
    moveSlides: 3,
    minSlides: 1,
    maxSlides: 3,
    auto: true,
    autoHover: false,
    autoControls: true,
    controls: false,
  });

  //language
  $(".lang_li").hide();
  $(".lang").on("click", function (e) {
    e.preventDefault();
    $(".lang_li").slideToggle(500);
  });

  //gnb
  $(".gnb >li").on({
    mouseenter: function () {
      $(".depth_2").stop().slideDown(550);
      $(".gnb_bg").stop().slideDown(400);
    },
    mouseleave: function () {
      $(".depth_2").stop().slideUp(400);
      $(".gnb_bg").stop().slideUp(550);
      $(this).find(">a").addClass("change_color");

      var _this = $(this).find(">a");
      setTimeout(function () {
        console.log(_this);
        _this.removeClass("change_color");
      }, 0);
    },
  });

  //m_gnb
  $(".m_hamburger").on("click", function () {
    $(".m_gnb_wrap , .m_hamburger , .m_lang_list").toggleClass("on");
    $(".m_dimm").fadeToggle();
  });
  $(".m_depth_2").hide();
  $(".m_gnb_tit").on("click", function () {
    $(this).toggleClass("on").parent().siblings().find(">a").removeClass("on");
    $(this)
      .next()
      .slideToggle()
      .parent()
      .siblings()
      .find(".m_depth_2")
      .slideUp();
  });

  //product
  $(".product_pager a").on("click", function (e) {
    e.preventDefault();
    if ($(".product_list li.on").is(":animated") == false) {
      var num = $(this).parent().index();
      var curretNum = $(".product_pager li.on").index();
      if (num != curretNum) {
        $(".product_pager li.on").removeClass("on");
        $(".product_pager li:eq(" + num + ")").addClass("on");

        $(".product_list li:eq(" + num + ")").show();
        $(".product_list li:eq(" + num + ")").css("left", "525px");

        $(".product_list li.on").animate(
          {
            left: "-525px",
          },
          1000,
          function () {
            $(this).removeClass("on");
            $(this).hide();
          }
        );
        $(".product_list li:eq(" + num + ")").animate(
          {
            left: "0",
          },
          1000,
          function () {
            $(this).addClass("on");
          }
        );
      }
    }
  });

  $(".product_next").on("click", function (e) {
    e.preventDefault();
    if ($(".product_list li.on").is(":animated") == false) {
      var curretNum = $(".product_pager li.on").index();
      var num = curretNum + 1;
      if (num > $(".product_pager li").length - 1) {
        num = 0;
      }

      $(".product_pager li.on").removeClass("on");
      $(".product_pager li:eq(" + num + ")").addClass("on");

      $(".product_list li:eq(" + num + ")").show();
      $(".product_list li:eq(" + num + ")").css("left", "525px");

      $(".product_list li.on").animate(
        {
          left: "-525px",
        },
        1000,
        function () {
          $(this).removeClass("on");
          $(this).hide();
        }
      );

      $(".product_list li:eq(" + num + ")").animate(
        {
          left: 0,
        },
        1000,
        function () {
          $(this).addClass("on");
        }
      );
    }
  });

  $(".product_prev").on("click", function (e) {
    e.preventDefault();
    if ($(".product_list li.on").is(":animated") == false) {
      var curretNum = $(".product_pager li.on").index();
      var num = curretNum - 1;
      if (num < 0) {
        num = $(".product_pager li").length - 1;
      }

      $(".product_pager li.on").removeClass("on");
      $(".product_pager li:eq(" + num + ")").addClass("on");

      $(".product_list li:eq(" + num + ")").show();
      $(".product_list li:eq(" + num + ")").css("left", "-525px");

      $(".product_list li.on").animate(
        {
          left: "525px",
        },
        1000,
        function () {
          $(this).removeClass("on");
          $(this).hide();
        }
      );

      $(".product_list li:eq(" + num + ")").animate(
        {
          left: 0,
        },
        1000,
        function () {
          $(this).addClass("on");
        }
      );
    }
  });

  var si = setInterval(productSlide, 3500);
  function productSlide() {
    $(".product_next").trigger("click");
  }

  $(".product_prev,.product_next").hide();
  $(".product_box").on({
    mouseenter: function () {
      clearInterval(si);
      $(".product_prev,.product_next").fadeIn(300);
    },
    mouseleave: function () {
      clearInterval(si);
      si = setInterval(productSlide, 3500);
      $(".product_prev,.product_next").fadeOut(300);
    },
  });

  // newletter
  var userEmail = RegExp(
    /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/
  );
  $(".e_mail_btn").on("click", function (e) {
    e.preventDefault();
    if (!userEmail.test($("#e_mail").val())) {
      alert("이메일 주소를 다시 확인해 주세요.");
      $("#e_mail").val("");
      $("#e_mail").focus();
      return;
    }
  });

  //news
  setInterval(newsMove, 4000);
  function newsMove() {
    $(".news_list").animate({ top: -120 }, 900, function () {
      $(".news_list").append($(".news_list li:first"));
      $(".news_list").css("top", 0);
    });
  }

  //footer
  $(".f_select_wrap ul").hide();
  $(".fam_tit,.sns_tit").on("click", function () {
    $(this).next("ul").stop().slideToggle(500);
    $(this).toggleClass("on");
  });
});
