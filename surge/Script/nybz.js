/******************************
奶由壁纸解锁VIP--Eric
[rewrite_local]

https://nz-api.duitang.com/account/me/ url script-response-body https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/nybz.js

[mitm] 

hostname = nz-api.duitang.com

*******************************/
let obj = JSON["parse"]($response["body"]);
obj["data"]["vip"] = true;
$done({
    body: JSON["stringify"](obj)
})