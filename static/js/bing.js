
console.log("\n %c 背景引用 \n", "color: #ffffff; background: #f1404b; padding:5px 0;", "background: #030307; padding:5px 0;");

var imgArr = [
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/72881079-9eaf-47fd-91d6-b145a579e5f9.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/7db2c853-50d1-40e0-bbff-f8a8e7a715b5.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/c0579235-5a15-4f22-b337-a567fc6fe047.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/460d4472-5814-4753-acb4-7f662a10da62.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/6c21c9b5-2b20-45ce-bda8-a58a5cd16ad3.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/bbdd42b8-1b83-46e3-b260-2900aeca6b51.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/a1eb59cf-7ef4-436c-8bcb-adfd8915b0c8.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/7344f284-97b6-4483-b434-0987b051b21f.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/5d86d435-a90b-42d4-a364-e4d83fcb933e.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/5d86d435-a90b-42d4-a364-e4d83fcb933e.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/6a2dd307-719a-443b-8f91-7c96c56d435e.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/e2b7a0f5-509f-4f3a-a44d-534bde4ca963.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/0daeac08-4fa6-4fde-bfc8-4aa68e19f5f5.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/f16a9d97-e4b4-40e8-b0b2-c2232a05fc91.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/3ace3f1c-d390-49a2-9789-45160cd196ea.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/ba2ec9a3-93e0-4f69-8492-381c146f9b3e.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/1e11ef54-6625-451a-88fb-6789b37f3532.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/a5ce7b54-fa01-49d1-8095-38150c7c7bad.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/421ab461-c1be-4edd-8ebf-7527efaa9c14.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/179a2456-0e94-48d0-a6bc-767e96b948b3.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/20ccb48a-f01b-40e2-b3e7-068be5f6527e.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/d42a8d1a-b295-4941-b52c-d3f37f26450a.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/d42a8d1a-b295-4941-b52c-d3f37f26450a.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/c2666bc4-551e-4534-bd3a-c2e261c06e7b.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/c2666bc4-551e-4534-bd3a-c2e261c06e7b.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/c2666bc4-551e-4534-bd3a-c2e261c06e7b.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/545d8766-f122-40db-b33f-a5fd26bc2c82.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/57b73f3f-2f7f-4b8f-95fa-6dbe5f8933fd.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/43984777-f0fe-4ebc-9c98-fbddc9419d90.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/7ef02de7-3fd7-4e3b-8eb0-10d0014ff4a2.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/b217680a-3437-4c29-86e2-c202e7118682.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/c4f21394-752b-423d-8244-f65b301e55f7.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/0e8c8aa6-67a8-4187-b5b8-f2727336ecfc.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/3d5f40b7-4413-418c-b4c5-64955233d962.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/05cee7dc-aefe-4770-b4ae-cb27cdcdfed8.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/970b36cc-cbcc-405c-a976-4e88f56fe26a.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/962de062-a6a2-4889-86c1-ae3e8207bd4f.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/d0a3e31f-e37d-4965-a52e-51b19b1092c3.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/d6e40925-a396-4582-819e-5553772876cf.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/e841e0ae-08f5-4fcf-a66d-b1493e2860f9.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/51d14816-89c5-42f2-9d5a-f8f91804d9a8.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/4203caa0-3b3a-4eec-801b-ea34504bd19f.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/4203caa0-3b3a-4eec-801b-ea34504bd19f.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/eab416d1-942c-4f5e-98bb-e00212eaf1a1.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/c36c7426-a85b-4173-a555-116e023785c6.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/78ecc46c-9346-4b2d-8735-871eff664693.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/1c831b9d-37b8-4cb9-b04b-1ab2e222b15a.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/5942ec41-969e-4c42-b136-a05e7febb388.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/5e29b208-579d-42ab-a867-15adf70aefe8.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/9c38369a-07df-409f-96e5-34cb8ac30c04.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/d8ea2d92-a385-49d9-96f5-5c093f5d60c6.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/c7c4b8a7-7759-4678-9ca7-506571542b3c.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/963f38e7-2b11-487e-a869-15f9afddb479.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/ec085aa8-5d82-4add-85d4-455d3de71c00.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/b7e113cb-ec19-4b77-a6d1-9bc0f92b6769.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/9e57e538-d064-4b18-866a-79e550ef51c7.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/d1124778-1e9d-4637-a702-dcb09594d636.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/35d5c57f-9717-458e-9d09-6b0eeec85067.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/2061cb58-ce03-488b-b342-bc09bc4f08e3.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/cf6541db-9e7c-4065-98ba-cebd7206cf41.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/864929f3-2765-4306-a8b2-9f26abe23d3e.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/a6f1b25e-5418-4427-b628-7ba5928a1c61.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/c8307b9e-1332-4b63-8f38-7eb95066ca17.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/abd961d5-27da-4b0d-b155-3bc84ba23972.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/e2a3d279-7fa7-4491-85e9-8de5f85c735b.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/e2a3d279-7fa7-4491-85e9-8de5f85c735b.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/a6068e5b-84a5-4a95-953f-4b593c777639.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/1a1cc135-85aa-4d0e-80ca-5d1f6e05a8cc.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/57d2adb4-eb74-4580-9b53-b7b8bb94bdd7.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/49b3447d-c328-4535-b91e-7748870868c3.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/49b3447d-c328-4535-b91e-7748870868c3.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/e8a3202b-bbf6-472c-bf91-b3ff18a7cb2c.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/ae1f7534-d992-4f9a-a781-07cf48b9627c.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/5df82153-4b85-4d91-bcc2-3caebbffe0bd.jpg',
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/2dc397f1-d649-4db8-91dc-acfd1576d40f.jpg'
]
bgImg = imgArr[Math.floor(Math.random() * imgArr.length)];
$('.img-bg').css('background-image', 'url(' + bgImg + ')');
var theme = {
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
var localize = {
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