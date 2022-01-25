let gnbTit = document.querySelectorAll(".gnb_tit");

function gnbOpen() {
  const gnbBg = document.querySelector(".gnb_bg");

  gnbBg.classList.add("open");
}
[].forEach.call(gnbTit, function (gnbTit) {
  gnbTit.addEventListener("mouseenter", gnbOpen);
});
