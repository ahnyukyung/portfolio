$(function () {
  /**********작업물 슬라이드**********/
  // var workSlide = new Swiper(".work_slide", {
  //   autoplay: true,
  //   speed: 1000,
  //   loop: true,
  //   slidesPerView: "auto",
  //   centeredSlides: true,
  //   effect: "fade",
  //   fadeEffect: { crossFade: true },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   touchRatio: 0,
  // });

  /**********gnb 클릭시 섹션이동**********/
  var gnbH = $('#header').height();
  $('.gnb li a').on('click', function (e) {
    e.preventDefault();
    var pageNum = $(this).parent().index();
    var section = $('#container section').eq(pageNum);
    var offset = section.offset().top;
    $('html,body').animate(
      {
        scrollTop: offset - gnbH + 1,
      },
      1000,
      'linear'
    );
  });

  $(window).scroll(function () {
    var ws = $(this).scrollTop();
    var gnb = $('.gnb li a');
    var section = $('#container section');
    for (var i = 0; i < section.length; i++) {
      if (ws >= section.eq(i).offset().top - gnbH) {
        gnb.removeClass('on');
        gnb.eq(i).addClass('on');
      }
    }

    /**********skill_wrap**********/
    var sec3 = $('#section3').offset().top;
    if (ws >= sec3 - gnbH) {
      $('.skill_wrap_top,.skill_wrap_btm').addClass('on');
    } else {
      $('.skill_wrap_top,.skill_wrap_btm').removeClass('on');
    }
  });
});
