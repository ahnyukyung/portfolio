// main_slider
const mainSlider = new Swiper('.main_slider', {
  autoplay: {
    // delay: 3000,
  },
  speed: 1000,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

$(function () {
  $('.depth2').hide();
  $('.depth1_tit')
    .on('mouseover', function () {
      $('.depth2').hide();
      $(this).next().show();
      $('#header').addClass('on');
      $(this).addClass('over');
    })
    .on('mouseleave', function () {
      $('.depth2').hide();
      $('#header').removeClass('on');
      $(this).removeClass('over');
    });

  function gnbShow() {
    $(this).parents('ul').show();
    $(this).next().show();
  }
  function gnbHide() {
    $(this).parents('ul').hide();
    $(this).next().hide();
  }
  $('.depth2 > li > a')
    .on('mouseover', function () {
      $(this).parents('ul').show();
      $(this).next().show();
      $('#header').addClass('on');
      $(this).addClass('over');
    })
    .on('mouseleave', function () {
      $(this).parents('ul').hide();
      $(this).next().hide();
      $('#header').removeClass('on');
      $(this).removeClass('over');
    });
  $('.depth3 > li > a')
    .on('mouseover', function () {
      $(this).parents('ul').show();
      $(this).next().show();
      $('#header').addClass('on');
    })
    .on('mouseleave', function () {
      $(this).parents('ul').hide();
      $(this).next().hide();
      $('#header').removeClass('on');
    });

  // banner
  $('.banner_prev,.banner_next').on('click', function () {
    $('.never_stop').fadeToggle();
  });

  // section03
  $('.indi_box').hide();
  $('.indi_tab').on('click', function () {
    $('.indi_box').show();
    $('.corp_box').hide();
    $(this).addClass('on');
    $('.corp_tab').removeClass('on');
  });
  $('.corp_tab').on('click', function () {
    $('.corp_box').show();
    $('.indi_box').hide();
    $(this).addClass('on');
    $('.indi_tab').removeClass('on');
  });

  // pickup_slider
  var pickupSlider = new Swiper('.pickup_slider', {
    autoplay: {
      delay: 0,
    },
    speed: 3000,
    loop: true,
    // centeredSlides 사용시 루프를 걸어야 양옆이 비지 않음
    centeredSlides: true,
    spaceBetween: 15,
    // css에 지정한 크기로 잡을 경우 slidesPerView
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
});
