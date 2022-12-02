/***
effie解锁订阅--Eric

[rewrite_local]
^https://api.effie.(co|pro)/api/v1/user/member url script-response-body https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/effie.js

[mitm] 
hostname = %APPEND% api.effie.pro,api.effie.co
***/

let obj = JSON["parse"]($response["body"]);
obj["data"]["status"] = 1, obj["data"]["end_at"] = "4365485410";
$done({
    body: JSON["stringify"](obj)
})