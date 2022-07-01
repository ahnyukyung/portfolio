$(function () {
  // sidebar 클릭 시 하위메뉴 슬라이드
  // $(".panel_box").not(".panel_box:nth-child(1)").hide();
  // $(".panel_box .sub_panel").hide();

  // $("#sidebar .navibar_list li").click(function () {});
  $(".btn_slide").click(function () {
    $(this).parent().toggleClass("hide");
  });
});
