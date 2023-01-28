// 首页使用的js
import "swiper";

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
import Swiper from "swiper";

const homeBanner = new Swiper(".home-banner", {
    loop: true,
    autoplay:{
        delay: 5000
    },
    pagination:{
        el:".swiper-pagination"
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
})

$(".tab-item").on("click", function(){
    $(this).addClass("active").siblings().removeClass("active");
    const index = $(this).index();
    $(".news-rslist").eq(index).show().siblings(".news-rslist").hide();
})