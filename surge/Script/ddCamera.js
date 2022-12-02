/***
叮叮相机解锁VIP--Eric
[MITM]
hostname = %APPEND% zip.jinzitao.com
[Script]
sevenPro = type=http-response,pattern= https://zip.jinzitao.com/refreshuinfo,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/ddCamera.js
***/



var obj = JSON["parse"]($response["body"]);
obj = {
    "code": 1,
    "data": {
        "userinfo": {
            "sign_up_for_vip_text": "",
            "userId": "Eric",
            "showvideogetvip": "1",
            "id": "Eric",
            "tokenvv": "509d25676b823b3232c069ebf58293d4",
            "cloud_ss_et": "0",
            "square_show_button": "0",
            "state": "0",
            "nickname": "小情绪",
            "createtime": "1666192301",
            "score": "0",
            "type": "1",
            "email": "",
            "max_money": {
                "max_lq": "99999",
                "max_fenfu": "99999",
                "max_ye": "99999",
                "max_wx_bank": "50000",
                "max_yeb": "99999",
                "tixian_status": "1",
                "max_ali_zhuanzhang": "99999",
                "max_lqt": "99999",
                "max_wx_zhuanzhang": "99999",
                "max_ali_bill": "99999",
                "max_wx_bill": "99999"
            },
            "register_source": "ios",
            "qqq_num": "",
            "cloud_et": "0",
            "vip_et_t": "2029-10-15",
            "avatar": "https://static.jietushuiyin.com/images/default_avatar.png",
            "cloud_size": "0",
            "firstlogin": "0",
            "mobile": "",
            "vip_et": "2029-10-15",
            "qqq_key": "",
            "user_id": "15289644",
            "expiretime": "3697342952",
            "watermark_count": "0",
            "token": "9dd19ecd-ead9-485f-9644-312c9d8ff080",
            "vip_level": "1",
            "expires_in": "31104000",
            "isshare": "1",
            "vip": "1",
            "tjr": "",
            "vip_type": "1",
            "used_cloud_size": "0"
        }
    },
    "msg": "用户信息",
    "time": "1666238952"
};
$done({
    body: JSON["stringify"](obj)
})