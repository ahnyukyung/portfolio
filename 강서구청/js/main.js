//gnb//
$(function () {
  $(".depth2-bg,.gnb-depth2").hide();
  $(".depth1-title a").on({
    mouseenter: function () {
      $(this).parent().next().stop().slideDown(400);
      $(".depth2-bg ").stop().slideDown(400);
    },
    mouseleave: function () {
      $(this).parent().next().hide();
      $(".depth2-bg ").hide();
    },
  });
  $(".gnb-depth2").on({
    mouseenter: function () {
      $(this).show();
      $(".depth2-bg").show();
    },
    mouseleave: function () {
      $(this).hide();
      $(".depth2-bg").hide();
    },
  });
});
window.onload = init;

function selectTitle(selectNum) {
  if (curretNum != selectNum) {
    noticeTitle[curretNum].className = "notice-title";
    noticeTitle[selectNum].className = "notice-title over";

    noticeContent[curretNum].className = "notice-contents";
    noticeContent[selectNum].className = "notice-contents on";

    curretNum = selectNum;
  }
}

//검색창
function searchTxt() {
  var frm = document.searchForm;
  if (frm.search_text.value == "검색어를 입력하세요") {
    frm.search_text.value = "";
    return;
  }
}

function searchBtn() {
  var frm = document.searchForm;
  if (
    frm.search_text.value === "검색어를 입력하세요" ||
    frm.search_text.value == ""
  ) {
    alert("검색어를 입력해 주세요.");
    frm.search_text.focus();
    return;
  }
}

//메인배너
var isnum = 0;
var bannerwidth = 590;

function banner_rightBtn() {
  isnum++;
  if (isnum > 4) {
    isnum = 0;
  }
  mainBanner(isnum);
}

function banner_leftBtn() {
  isnum--;
  if (isnum < 0) {
    isnum = 4;
  }
  mainBanner(isnum);
}

function mainBanner(isnum) {
  document.getElementById("banner-list").style.left =
    -(bannerwidth * isnum) + "px";
}
function banner_stopBtn() {
  clearInterval(rol);
}
function banner_playBtn() {
  clearInterval(rol);
  rol = setInterval(rolling, 3000);
}

var rol = setInterval(rolling, 3000);
function rolling() {
  isnum++;
  if (isnum > 4) {
    isnum = 0;
  }
  mainBanner(isnum);
}

//알림판
var imgwidth = 288;
var selectedNum = 0;
function rightBtn() {
  selectedNum++;
  if (selectedNum > 2) {
    selectedNum = 0;
  }
  bannerSlide(selectedNum);
}
function leftBtn() {
  selectedNum--;
  if (selectedNum < 0) {
    selectedNum = 2;
  }

  bannerSlide(selectedNum);
}
function bannerSlide(selectedNum) {
  document.getElementById("banner-contents").style.left =
    -(imgwidth * selectedNum) + "px";
  document.getElementById("current").innerHTML = selectedNum + 1;
}

var notice_rol = setInterval(notice_rolling, 3000);
function notice_rolling() {
  selectedNum++;
  if (selectedNum > 2) {
    selectedNum = 0;
  }
  bannerSlide(selectedNum);
}

function stopBtn() {
  clearInterval(notice_rol);
}
function playBtn() {
  clearInterval(notice_rol);
  notice_rol = setInterval(notice_rolling, 3000);
}

//공지사항
var curretNum = 0;
var noticeTitle;
var noticeContent;

function init() {
  noticeTitle = document
    .getElementById("notice-list")
    .getElementsByTagName("h3");

  noticeContent = [
    document.getElementById("notice-contents_1"),
    document.getElementById("notice-contents_2"),
    document.getElementById("notice-contents_3"),
    document.getElementById("notice-contents_4"),
  ];

  for (var i = 0; i < noticeTitle.length; i++) {
    noticeTitle[i].num = i;
    noticeTitle[i].onclick = function () {
      selectTitle(this.num);
      return false;
    };
  }

  //지금 강서구는
  var newList_a = document
    .getElementById("news-list")
    .getElementsByTagName("a");
  var newList = document.getElementById("news-list");
  var leftBtn = document.getElementById("news-prev");
  var rightBtn = document.getElementById("news-next");
  var nowNum = 0;

  leftBtn.onclick = function () {
    if (nowNum <= 0) return false;
    nowNum--;
    newList.style.left = -295 * nowNum + "px";
    return false;
  };

  rightBtn.onclick = function () {
    if (nowNum >= newList_a.length - 4) return false;
    nowNum++;
    newList.style.left = -295 * nowNum + "px";
    return false;
  };
}
