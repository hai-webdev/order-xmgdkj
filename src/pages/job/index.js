// 关于页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";

$(".job-item").on("click", ".title", function(){
    $(this).parent(".job-item").find(".more-info").slideToggle();
    $(this).find("i").toggleClass("active");
})