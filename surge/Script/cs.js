var head = $request["headers"];
var ua = head["User-Agent"];
var obj = JSON["parse"]($response["body"]);
if (ua["indexOf"]("Fileball") != -1) {
    obj = {
        "request_date_ms": 416505600000,
        "request_date": "1983-03-15T00:00:00Z",
        "subscriber": {
            "non_subscriptions": {
                "filebox_pro": [{
                    "id": "yingzi",
                    "is_sandbox": false,
                    "purchase_date": "1983-03-15T00:00:00Z",
                    "original_purchase_date": "1983-03-15T00:00:00Z",
                    "store": "app_store"
                }]
            },
            "first_seen": "1983-03-15T00:00:00Z",
            "original_application_version": "170",
            "other_purchases": {
                "filebox_pro": {
                    "purchase_date": "1983-03-15T00:00:00Z"
                }
            },
            "management_url": null,
            "subscriptions": {},
            "entitlements": {
                "filebox_pro": {
                    "grace_period_expires_date": null,
                    "purchase_date": "1983-03-15T00:00:00Z",
                    "product_identifier": "filebox_pro",
                    "expires_date": null
                }
            },
            "original_purchase_date": "1983-03-15T00:00:00Z",
            "original_app_user_id": "$RCAnonymousID%3A8e5a11e56b4246f2ab2b17058c01db1e",
            "last_seen": "1983-03-15T00:00:00Z"
        }
    }
};
if (ua["indexOf"]("Taio") != -1) {
    obj = {
        "request_date": "2022-09-02T02:49:16Z",
        "request_date_ms": 1662086956428,
        "subscriber": {
            "entitlements": {
                "full-version": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-02-11T09:48:56Z",
                    "product_identifier": "taio_3799_lifetime_std_v2",
                    "expires_date": null
                }
            },
            "first_seen": "2022-08-31T15:03:00Z",
            "last_seen": "2022-09-01T13:58:19Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {
                "taio_3799_lifetime_std_v2": [{
                    "id": "dake",
                    "is_sandbox": false,
                    "purchase_date": "2022-02-11T09:48:56Z",
                    "original_purchase_date": "2022-02-11T09:48:56Z",
                    "store": "app_store"
                }]
            },
            "original_app_user_id": "$RCAnonymousID:ba57a114baf5475787adff5ccd804b77",
            "original_application_version": "1052",
            "original_purchase_date": "2022-02-11T09:48:52Z",
            "other_purchases": {
                "taio_3799_lifetime_std_v2": {
                    "purchase_date": "2022-02-11T09:48:56Z"
                }
            },
            "subscriptions": {}
        }
    }
};
if (ua["indexOf"]("%E8%B0%9C%E5%BA%95%E6%97%B6%E9%92%9F") != -1) {
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
    }
};
if (ua["indexOf"]("%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE") != -1) {
    obj = {
        "request_date": "2022-09-22T02:28:50Z",
        "request_date_ms": 1663813730272,
        "subscriber": {
            "entitlements": {
                "pro": {
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "product_identifier": "com.happydogteam.relax.lifetimePro",
                    "purchase_date": "2022-09-22T02:19:32Z"
                }
            },
            "first_seen": "2022-09-22T02:12:43Z",
            "last_seen": "2022-09-22T02:12:43Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:fe9dc27c6cd44b908576a7bd2eae8e24",
            "original_application_version": "322",
            "original_purchase_date": "2022-09-10T12:59:20Z",
            "other_purchases": {},
            "subscriptions": {
                "com.happydogteam.relax.lifetimePro": {
                    "billing_issues_detected_at": null,
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-09-22T02:19:33Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "trial",
                    "purchase_date": "2022-09-22T02:19:32Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": "2022-09-22T02:21:43Z"
                }
            }
        }
    }
};
$done({
    body: JSON["stringify"](obj)
})