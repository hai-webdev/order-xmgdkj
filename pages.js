// 多页配置
module.exports = {
  // 页面名称（对应 chunk 名）
  index: {
    js: "./src/pages/index", // 页面入口js
    html: "./src/pages/index/index.html", // 页面使用的html模板
    out: "index.html", // 输出目录中的页面文件名
  },
  product_tmp: {
    js: "./src/pages/product_tmp",
    html: "./src/pages/product_tmp/index.html",
    out: "product_tmp.html",
  },
  product_view: {
    js: "./src/pages/product_view",
    html: "./src/pages/product_view/index.html",
    out: "product_view.html",
  },
  partner: {
    js: "./src/pages/partner",
    html: "./src/pages/partner/index.html",
    out: "partner.html",
  },
  about: {
    js: "./src/pages/about",
    html: "./src/pages/about/index.html",
    out: "about.html",
  },
  honor: {
    js: "./src/pages/honor",
    html: "./src/pages/honor/index.html",
    out: "honor.html",
  },
  news_list: {
    js: "./src/pages/news_list",
    html: "./src/pages/news_list/index.html",
    out: "news_list.html",
  },
  news_view: {
    js: "./src/pages/news_view",
    html: "./src/pages/news_view/index.html",
    out: "news_view.html",
  },
  surport_list: {
    js: "./src/pages/surport_list",
    html: "./src/pages/surport_list/index.html",
    out: "surport_list.html",
  },
  download_list: {
    js: "./src/pages/download_list",
    html: "./src/pages/download_list/index.html",
    out: "download_list.html",
  },
  job: {
    js: "./src/pages/job",
    html: "./src/pages/job/index.html",
    out: "job.html",
  },
  contact: {
    js: "./src/pages/contact",
    html: "./src/pages/contact/index.html",
    out: "contact.html",
  },
};
