//gnb
$(function () {
  $('.gnb_depth2 ,.depth2_bg').hide();
  $('.gnb').on({
    mouseenter: function () {
      $('.gnb_depth2,.depth2_bg').slideDown();
      $(this).addClass('on');
    },
    mouseleave: function () {
      $('.gnb_depth2,.depth2_bg').hide();
      $(this).removeClass('on');
    },
  });

  $('.gnb_depth2').on({
    mouseenter: function () {
      $('.gnb_depth2 ,.depth2_bg').show();
      $(this).prev().addClass('on');
    },
    mouseleave: function () {
      $(this).prev().removeClass('on');
    },
  });

  $('.depth2_bg').on({
    mouseenter: function () {
      $('.gnb_depth2').show();
      $(this).show();
    },
    mouseleave: function () {
      $('.gnb_depth2').hide();
      $(this).hide();
    },
  });

  //section1//
  $('.can').hide();
  $('.color_box').on('mouseenter', function () {
    $(this).find('.beer').stop().fadeOut(100);
    $(this).find('.can').stop().fadeIn(200);
  });

  $('.color_box').on('mouseleave', function () {
    $(this).find('.beer').stop().fadeIn(200);
    $(this).find('.can').stop().fadeOut(100);
  });

  //brewing-box
  if ($('.section_2').length) {
    $(window).scroll(function () {
      var scrollPos = $(window).scrollTop();
      var conTop = $('.section_2').offset().top; //1200

      if (scrollPos > conTop - 250) {
        $('.content_box_2').addClass('on');
      } else {
        $('.content_box_2').removeClass('on');
      }
      if (scrollPos > conTop - 150) {
        $('.content_box_3,.content_box_1').addClass('on');
      } else {
        $('.content_box_3,.content_box_1').removeClass('on');
      }
    });
  }

  //what's New//
  $('.new_wrap_bg2').hide();
  $('.new_btn').on('click', function () {
    $('.new_wrap_bg2').fadeToggle('slow');
  });

  //youtubebox
  if ($('.section_5').length) {
    var youtubeSlider = new Swiper('.swiper-container', {
      speed: 400,
      spaceBetween: 100,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  //login
  $('.login_box2').hide();
  $('.login_tab1').on('click', function (e) {
    e.preventDefault();
    $('.login_box2').hide();
    $('.login_box1').show();
    $('.login_tab2>.login_tab_tit').removeClass('on');
    $('.login_tab1>.login_tab_tit').addClass('on');
  });
  $('.login_tab2').on('click', function (e) {
    e.preventDefault();
    $('.login_box1').hide();
    $('.login_box2').show();
    $('.login_tab1>.login_tab_tit').removeClass('on');
    $('.login_tab2>.login_tab_tit').addClass('on');
  });

  //join_checkbox
  $('.all_check').click(function () {
    var chk = $(this).is(':checked');
    if (chk) {
      $('.check_a').prop('checked', true);
    } else {
      $('.check_a').prop('checked', false);
    }
  });

  $('.all_check_add').click(function () {
    var chk = $(this).is(':checked');
    if (chk) {
      $('.check_add').prop('checked', true);
    } else {
      $('.check_add').prop('checked', false);
    }
  });

  $('.check_a').click(function () {
    var chk = $(this).is(':checked');
    if (!chk) {
      $('.all_check').prop('checked', false);
    }
  });
  $('.check_add').click(function () {
    var chk = $(this).is(':checked');
    if (!chk) {
      $('.all_check_add').prop('checked', false);
    }
  });

  $('.join_btn').click(function () {
    var idReg = /^[A-Za-z]{1}[A-Za-z0-9_-]{5,17}$/;
    if (!idReg.test($('.join_id').val())) {
      alert('아이디는 영문자로 시작하는 6~16자이어야 합니다.');
      $('.join_id').focus();
    } else {
      var pwReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,17}$/;
      if (!pwReg.test($('.join_pw').val())) {
        alert('비밀번호는  숫자, 문자, 특수문자가 포함된 8~16자이어야 합니다.');
        $('.join_pw').focus();
        return;
      } else {
        if ($('.check_a').prop('checked', false)) {
          alert('회원가입약관 및 개인정보처리방침안내 내용에 모두 동의하셔야 가입하실 수 있습니다.');
          return;
        }
      }
    }
  });
  //login
});
// notice
const noticeSrc = document.querySelector('.notice_src input');

noticeSrc.addEventListener('focusin', function () {
  this.classList.add('active');
});
noticeSrc.addEventListener('focusout', function () {
  this.classList.remove('active');
});
