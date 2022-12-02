let obj = JSON["parse"]($response["body"]);
obj = {
    "message": "",
    "data": {
        "id": 866009,
        "referee_pro_days": 99999,
        "register_via": "ios",
        "apple_subscription": null,
        "created_at": "2022-10-15 12:30:50",
        "wechat_nickname": null,
        "email_verified_at": "2022-10-15 12:30:50",
        "pro_expired_at": "2099-10-29 23:59:59",
        "api_token": "f3e926393922331c59f71ed8486e75b5",
        "language": "zh",
        "slug": "ODY2MDA5",
        "google_play_subscription": null,
        "email": "Eric",
        "name": "Eric",
        "referer_id": null
    },
    "code": 0
};
$done({
    body: JSON["stringify"](obj)
})