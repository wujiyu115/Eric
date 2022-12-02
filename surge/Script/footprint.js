/***
灵感足迹高级解锁--Eric

[rewrite_local]
^https://footprint-api.quthing.com/vip/(is/expire|state) url script-response-body https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/footprint.js

[mitm] 
hostname = %APPEND% footprint-api.quthing.com

***/

let body = $response.body
    .replace(/\"checkIsVip\":false/, "\"checkIsVip\":true")
    .replace(/\"validVip\":false/, "\"validVip\":true")
    .replace(/\"expireTime\":\d+/, "\"expireTime\":4666344656160");
$done({
    body
})