/*
piacata动态壁纸解锁VIP-Eric
https\:\/\/api\.revenuecat\.com\/v1\/receipts
hostname=api.revenuecat.com
*/
let obj = JSON["parse"]($response["body"]);
obj = {
    "request_date": "2022-09-20T00:04:53Z",
    "request_date_ms": 1663632293347,
    "subscriber": {
        "entitlements": {
            "Premium": {
                "expires_date": "2099-09-21T03:39:45Z",
                "grace_period_expires_date": null,
                "product_identifier": "pic.yearly.02",
                "purchase_date": "2022-09-18T03:39:45Z"
            }
        },
        "first_seen": "2022-09-18T03:03:58Z",
        "last_seen": "2022-09-19T23:52:02Z",
        "management_url": "https://apps.apple.com/account/subscriptions",
        "non_subscriptions": {},
        "original_app_user_id": "10EC79AF-3ACF-4109-A08B-57A74019987B",
        "original_application_version": "55",
        "original_purchase_date": "2022-09-18T03:03:16Z",
        "other_purchases": {},
        "subscriptions": {
            "pic.yearly.02": {
                "billing_issues_detected_at": null,
                "expires_date": "2099-09-21T03:39:45Z",
                "grace_period_expires_date": null,
                "is_sandbox": false,
                "original_purchase_date": "2022-09-18T03:39:46Z",
                "ownership_type": "PURCHASED",
                "period_type": "trial",
                "purchase_date": "2022-09-18T03:39:45Z",
                "store": "app_store",
                "unsubscribe_detected_at": "2022-09-18T03:47:29Z"
            }
        }
    }
};
$done({
    body: JSON["stringify"](obj)
})