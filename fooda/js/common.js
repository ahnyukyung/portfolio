$(function () {
  // header
  $(".member_wrap .user_menu").hide();
  $(".user_name").click(function () {
    $(".member_wrap .user_menu").toggle();
    $(".member_wrap .user_name").toggleClass("on");
  });
});

// popup
// 팝업닫기 공통
$(".popup_close").on("click", function () {
  $(".popup_box").hide();
  $(".popup_wrap").removeClass("on");
  $("#popup_wrap .dimm").hide();
});

// dimm 눌렀을 때 close 버튼 trigger
$("#popup_wrap .dimm").on("click", function () {
  $(".popup_close").trigger("click");
});

// 팝업 보이기
$(".popup_box > .tab_content").hide();
$(".popup_box").each(function () {
  $(this).children(".popup_tab li:first").addClass("on");
  $(this).children(".tab_content").first().show();
});
$(".popup_tab li a").on("click", function () {
  $(this).parent().siblings("li").removeClass("on");
  $(this).parent().addClass("on");
  $(this).parent().parent().siblings(".tab_content").hide();
  let onTab = $(this).attr("rel");
  $("#" + onTab).show();
  return;
});

// 뉴스 최신순,오래된순 셀렉트박스
$(".news_select .btn_old").hide();
$(".btn_recent").on("click", function () {
  $(this).toggleClass("on");
  if ($(this).hasClass("on")) {
    $(".news_select .btn_old").show();
  } else {
    $(".news_select .btn_old").hide();
  }
});

//insight tab, support tab 공통
let currentNum = 0;
let tabNum = 0;

function tabMove() {
  let tabList = document.getElementById("tabList").getElementsByTagName("li");
  let tabCont = document.getElementById("tabCont").getElementsByClassName("tab_cont");
  for (let i = 0; i < tabList.length; i++) {
    tabList[i].getElementsByTagName("a")[0].num = i;
    tabList[i].getElementsByTagName("a")[0].onclick = function () {
      tabNum = this.num;
      selectTab(tabNum);
    };
  }
  function selectTab(num) {
    if (currentNum != num) {
      tabList[currentNum].classList.remove("on");
      tabList[num].classList.add("on");
      tabCont[currentNum].classList.add("none");
      tabCont[num].classList.remove("none");

      currentNum = num;
    }
  }
}
window.onload = tabMove;

//top버튼
$(document).ready(function () {
  // 1. 특정 위치에서 부터 버튼 나타고, 맨위로 올라가면 사라지는 효과 fade로
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#btn_box").fadeIn(200);
    } else {
      $("#btn_box").fadeOut(200);
    }
  });

  // 2. 버튼 클릭하면 footer 위치로 이동
  $(".up").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 300);
  });
  $(".down").click(function () {
    $("html").animate({ scrollTop: $("footer").offset().top }, 600);
  });
});
