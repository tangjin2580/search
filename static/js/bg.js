
console.log("\n %c 你要看啥?不给你看 \n", "color: #ffffff; background: #f1404b; padding:5px 0;");

const imgArr = [
    "https://api.dujin.org/bing/1920.php",
    "http://www.dmoe.cc/random.php",
    "https://api.lyiqk.cn/acg",
    "https://api.lyiqk.cn/acg",
    "https://api.lyiqk.cn/scenery"
];
bgImg = imgArr[Math.floor(Math.random() * imgArr.length)];
$('.img-bg').css('background-image', 'url(' + bgImg + ')');
const theme = {
    "ajaxurl": "",
    "addico": "/static/index/picture/add.png",
    "order": "asc",
    "formpostion": "top",
    "defaultclass": "io-grey-mode",
    "isCustomize": "1",
    "icourl": "",
    "icopng": ".png",
    "urlformat": "1",
    "customizemax": "10",
    "newWindow": "0",
    "lazyload": "1",
    "minNav": "1",
    "loading": "1",
    "hotWords": "baidu",
    "classColumns": " col-sm-6 col-md-4 col-xl-5a col-xxl-6a ",
    "apikey": ""
};
const localize = {
    "liked": "您已经赞过了!",
    "like": "谢谢点赞!",
    "networkerror": "网络错误 --.",
    "selectCategory": "为什么不选分类。",
    "addSuccess": "添加成功。",
    "timeout": "访问超时，请再试试，或者手动填写。",
    "lightMode": "日间模式",
    "nightMode": "夜间模式",
    "editBtn": "编辑",
    "okBtn": "确定",
    "urlExist": "该网址已经存在了 --.",
    "cancelBtn": "取消",
    "successAlert": "成功",
    "infoAlert": "信息",
    "warningAlert": "警告",
    "errorAlert": "错误",
    "extractionCode": "网盘提取码已复制，点“确定”进入下载页面。"
};