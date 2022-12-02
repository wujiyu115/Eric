/***
谜底时钟解锁终身VIP-Eric
https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$
hostname=api.revenuecat.com
[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/mdsz.js

[mitm] 

hostname = api.revenuecat.com

***/
let obj = JSON["parse"]($response["body"]);
obj = {
    "request_date": "2022-09-19T14:08:44Z",
    "request_date_ms": 1663596524426,
    "subscriber": {
        "entitlements": {
            "Entitlement.Pro": {
                "expires_date": null,
                "grace_period_expires_date": null,
                "product_identifier": "tech.miidii.MDClock.pro",
                "purchase_date": "2022-09-19T13:58:44Z"
            }
        },
        "first_seen": "2022-09-19T13:57:54Z",
        "last_seen": "2022-09-19T13:57:54Z",
        "management_url": "https://apps.apple.com/account/subscriptions",
        "non_subscriptions": {},
        "original_app_user_id": "$RCAnonymousID:d855e7acfaf842a291002eef65924eb8",
        "original_application_version": "599",
        "original_purchase_date": "2022-09-11T05:42:36Z",
        "other_purchases": {},
        "subscriptions": {
            "tech.miidii.MDClock.pro": {
                "billing_issues_detected_at": null,
                "expires_date": null,
                "grace_period_expires_date": null,
                "is_sandbox": false,
                "original_purchase_date": "2022-09-19T13:58:48Z",
                "ownership_type": "PURCHASED",
                "period_type": "normal",
                "purchase_date": "2022-09-19T13:58:44Z",
                "store": "app_store",
                "unsubscribe_detected_at": null
            }
        }
    }
};
$done({
    body: JSON["stringify"](obj)
})