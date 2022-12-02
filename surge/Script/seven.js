let obj = JSON["parse"]($response["body"]);
obj = {
    "buyer_identifier": "b2fc0a6c-4a1e-4b80-8a67-17125e132d4d",
    "subscription_purchases_state": 313467711,
    "has_valid_purchases": true,
    "subscription_purchases": [{
            "sku_identifier": "S_Club_G_12Months",
            "period": "P1Y",
            "period": "P1Y",
            "purchased_at": {
                "timestamp": 2665732429,
                "offset": 0
            },
            "expires_at": {
                "timestamp": 2666337229,
                "offset": 0
            },
            "grace_period_days": 0,
            "auto_renew": false,
            "status": "normal",
            "store": "app_store",
            "cancelled_at": {
                "timestamp": 1665732564,
                "offset": 0
            },
            "sandbox": false,
            "ownership": "purchased",
            "is_referral": false
        }],
    "in_app_purchases": []
};
$done({ body: JSON["stringify"](obj) });