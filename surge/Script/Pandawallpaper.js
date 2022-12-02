/****
熊猫壁纸解锁收费下载--Eric首发


[rewrite_local]

https://wallpaper-api.cross2d.com/api/.* url script-response-body https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/Pandawallpaper.js

[mitm]
hostname = wallpaper-api.cross2d.com

****/

let body = $response["body"]
    .replace(/\"diamond\":\d+/g, "\"diamond\":0")
    .replace(/\"scorePoint\":\d+/g, "\"scorePoint\":0");
$done({
    body
})