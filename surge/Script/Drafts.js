
/***
灵感足迹高级解锁--Eric

[rewrite_local]
^https://backend.getdrafts.com/api/v1/verification/verify_receipt url script-response-body https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/Drafts.js

[mitm] 
hostname = %APPEND% backend.getdrafts.com

***/



let obj = JSON["parse"]($response["body"]);
obj = {
    "active_expires_at": "2099-01-01T00:00:00Z",
    "is_subscription_active": true,
    "active_subscription_type": "pro",
    "is_blocked": false,
    "has_had_free_trial": false
};
$done({
    body: JSON["stringify"](obj)
})