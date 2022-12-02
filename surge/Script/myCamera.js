/*
美颜相机解锁VIP--Eric
支持最新版11.1.90

[rewrite_local]
^https://.*.mei(yan|tu).com\/.* url script-response-body https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/myCamera.js

[mitm] 
hostname = %APPEND% *.meiyan.com *.meitu.com

*/

body = $response.body.replace(/\"expire_date\":\"\"/, "\"expire_date\":\"2029-10-25\"")
    .replace(/\"expire_time\":\"\"/, "\"expire_time\":\"4258632580\"")
    .replace(/\"type\":0/, "\"type\":1")
    .replace(/\"period_type\":0/, "\"period_type\":3")
    .replace(/\"product_type\":0/, "\"product_type\":1")
    .replace(/\"status\":0/, "\"status\":1")
    .replace(/\"ad_vip_type\":0/, "\"ad_vip_type\":1")
    .replace(/\"screen_name\":".*",/, "\"screen_name\":\"Eric专属\",");
$done({ 'body': body })