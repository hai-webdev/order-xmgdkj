import "swiper/css/swiper.min.css";
// 头部的js代码
import "./index.less";
import $ from "jquery";

// const pcLink = $(".pc-link").val();
// const deviceWidth = $(window).outerWidth(true, true)
// if(deviceWidth > 800){
//   location.href = pcLink;
// }

$(".menu").on("click", function () {
  $(this).toggleClass("active");
  $("header").toggleClass("active");
  $(".nav-list").slideToggle();
});
$(".nav-item").on("click", function () {
  $(this).find(".sub-nav-list").slideToggle();
  $(this).find("i").toggleClass("active");
});
