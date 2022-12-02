const path1 = "/useraccountstats";
const path2 = "/api/v1/subscription/get";
let obj = JSON["parse"]($response["body"]);
if ($request["url"]["indexOf"](path1) != -1) {
    obj = {
        "status": "ok",
        "receipt": {
            "renewal_state": false,
            "renewal_info": [{
                    "product_id": "onlinebackup_h_1y",
                    "original_transaction_id": "2000000188092666",
                    "expiration_intent": "1",
                    "auto_renew_product_id": "onlinebackup_h_1y",
                    "auto_renew_status": "0",
                    "is_in_billing_retry_period": "0"
                }],
            "estimated_renewal": 1666931474,
            "valid": true,
            "in_billing_retry": false,
            "timestamp": 1666974908,
            "expires": 3668313874
        },
        "created": 1666925570,
        "uid": "VTo1NjY4NjAwMzc3OTAxMDU2",
        "sessions": {
            "status": "ok",
            "created": 1666928567,
            "modified": 1666928567,
            "sessions": 0
        }
    };
}
;
if ($request["url"]["indexOf"](path2) != -1) {
    obj["subscription"] = {
        "product_id": "onlinebackup_h_1y",
        "transaction_id": "2000000188092666",
        "campaign": null,
        "features_rich": [
            {
                "source": "subscription",
                "name": "online-backup",
                "source_value": "premium",
                "expire_date": 3666924274
            },
            {
                "source": "subscription",
                "name": "smart-alarm",
                "source_value": "premium",
                "expire_date": 3666924274
            },
            {
                "source": "subscription",
                "name": "sleep-aid",
                "source_value": "premium",
                "expire_date": 3666924274
            },
            {
                "source": "subscription",
                "name": "analysis",
                "source_value": "premium",
                "expire_date": 3666924274
            },
            {
                "source": "subscription",
                "name": "snore",
                "source_value": "premium",
                "expire_date": 3666924274
            },
            {
                "source": "subscription",
                "name": "sleep-notes",
                "source_value": "premium",
                "expire_date": 3666924274
            },
            {
                "source": "subscription",
                "name": "premium-sounds",
                "source_value": "premium",
                "expire_date": 3666924274
            },
            {
                "source": "subscription",
                "name": "user-sounds",
                "source_value": "premium",
                "expire_date": 3666924274
            },
            {
                "source": "subscription",
                "name": "wake-up-mood",
                "source_value": "premium",
                "expire_date": 3666924274
            },
            {
                "source": "subscription",
                "name": "heart-rate",
                "source_value": "premium",
                "expire_date": 3666924274
            },
            {
                "source": "subscription",
                "name": "weather",
                "source_value": "premium",
                "expire_date": 3666924274
            },
            {
                "source": "subscription",
                "name": "health-kit",
                "source_value": "premium",
                "expire_date": 3666924274
            },
            {
                "source": "subscription",
                "name": "google-fit",
                "source_value": "premium",
                "expire_date": 3666924274
            },
            {
                "source": "subscription",
                "name": "statistics",
                "source_value": "premium",
                "expire_date": 3666924274
            },
            {
                "source": "subscription",
                "name": "philips-hue",
                "source_value": "premium",
                "expire_date": 3666924274
            },
            {
                "source": "subscription",
                "name": "home-kit",
                "source_value": "premium",
                "expire_date": 3666924274
            },
            {
                "source": "subscription",
                "name": "weekly-report",
                "source_value": "premium",
                "expire_date": 3666924274
            },
            {
                "source": "subscription",
                "name": "auto-sleep-tracking",
                "source_value": "premium",
                "expire_date": 3666924274
            },
            {
                "source": "subscription",
                "name": "sleep-training",
                "source_value": "premium",
                "expire_date": 3666924274
            }
        ],
        "campaigns": [],
        "package_id": "premium",
        "features": [
            "online-backup",
            "smart-alarm",
            "sleep-aid",
            "analysis",
            "snore",
            "sleep-notes",
            "premium-sounds",
            "user-sounds",
            "wake-up-mood",
            "heart-rate",
            "weather",
            "health-kit",
            "google-fit",
            "statistics",
            "philips-hue",
            "home-kit",
            "weekly-report",
            "auto-sleep-tracking",
            "sleep-training"
        ],
        "trial": null,
        "expire_date": 3666924274
    };
}
;
$done({ body: JSON["stringify"](obj) });