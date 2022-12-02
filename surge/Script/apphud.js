var head = $request["headers"];
var ua = head["User-Agent"];
var obj = JSON["parse"]($response["body"]);
if (ua["indexOf"]("LifeViewer") != -1) {
    obj = {
        "data": {
            "results": {
                "locale": "zh_CN",
                "id": "b30be9b5-850d-4e49-90b8-afc318cc4941",
                "created_at": "2022-10-07T10:53:35.762Z",
                "subscriptions": [{
                    "id": "c48cd6ad-0fb8-4bac-89f6-68360fac6d15",
                    "unit": "year",
                    "group_id": "9a06b455",
                    "autorenew_enabled": true,
                    "expires_at": "2099-11-17T13:12:02.000Z",
                    "in_retry_billing": false,
                    "introductory_activated": true,
                    "cancelled_at": null,
                    "platform": "ios",
                    "product_id": "002",
                    "retries_count": 0,
                    "started_at": "2022-11-10T13:12:03.000Z",
                    "local": false,
                    "next_check_at": "2099-11-17T13:19:02.000Z",
                    "kind": "autorenewable",
                    "units_count": 1,
                    "environment": "production",
                    "status": "trial"
                }],
                "paywalls": [{
                    "variation_name": null,
                    "items": [{
                        "product_id": "com.wiheads.paste.macos.subscription.monthly",
                        "id": "661199d9",
                        "store": "app_store",
                        "name": "Monthly Subscription"
                    }, {
                        "product_id": "com.wiheads.paste.macos.subscription.annual",
                        "id": "516a4f97",
                        "store": "app_store",
                        "name": "Annual Subscription"
                    }, {
                        "product_id": "com.wiheads.paste.macos.subscription.annual.family",
                        "id": "b2cd7cfe",
                        "store": "app_store",
                        "name": "Annual Family Subscription"
                    }],
                    "json": null,
                    "id": "e8f6c54e",
                    "name": "Default Paywall",
                    "from_paywall": null,
                    "identifier": "default",
                    "experiment_id": null,
                    "experiment_name": null,
                    "variation_identifier": null,
                    "default": true
                }],
                "user_id": "C9FF6814-81F9-3695-8FCC-1217B208CB30",
                "currency": {
                    "id": "08f6985e-67e8-3695-90b6-10beee51f9be",
                    "country_code": "US",
                    "code": "USD"
                },
                "devices": []
            },
            "meta": null
        },
        "errors": null
    }
};
if (ua["indexOf"]("Prequel") != -1) {
    obj = {
        "data": {
            "results": {
                "locale": "zh_CN",
                "id": "46c43a0b-462f-48bb-9a09-57b265a26fbe",
                "created_at": "2022-11-16T10:47:45.563Z",
                "subscriptions": [{
                    "id": "5c0d190b-1b7a-4602-b48c-b22ebcec6064",
                    "unit": "day",
                    "group_id": "e9359adb",
                    "autorenew_enabled": true,
                    "expires_at": "2099-11-19T10:51:56.000Z",
                    "in_retry_billing": false,
                    "introductory_activated": true,
                    "cancelled_at": null,
                    "platform": "ios",
                    "product_id": "com.aiarlabs.prequel.subscription.weekly",
                    "retries_count": 0,
                    "started_at": "2022-11-16T10:51:57.000Z",
                    "local": false,
                    "next_check_at": "2099-11-19T10:58:56.000Z",
                    "kind": "autorenewable",
                    "units_count": 7,
                    "environment": "production",
                    "status": "trial"
                }],
                "paywalls": [{
                    "default": false,
                    "variation_identifier": null,
                    "variation_name": null,
                    "id": "b5639f76",
                    "items": [{
                        "product_id": "com.aiarlabs.prequel.subscription.all_year_29.99_notrial_test06202",
                        "id": "3d966428",
                        "store": "app_store",
                        "name": "Product 6"
                    }],
                    "from_paywall": null,
                    "identifier": "testsss",
                    "experiment_id": null,
                    "experiment_name": null,
                    "json": null,
                    "name": "test"
                }, {
                    "default": true,
                    "variation_identifier": null,
                    "variation_name": null,
                    "id": "48a82fed",
                    "items": [],
                    "from_paywall": null,
                    "identifier": "23456u7i",
                    "experiment_id": null,
                    "experiment_name": null,
                    "json": null,
                    "name": "ewrty"
                }],
                "user_id": "KCH-3A2B6320-3F4C-4FF7-97E9-77BC49748B95",
                "currency": {
                    "id": "08f6985e-67e8-4889-90b6-10beee51f9be",
                    "country_code": "US",
                    "code": "USD"
                },
                "devices": []
            },
            "meta": null
        },
        "errors": null
    }
};
$done({
    body: JSON["stringify"](obj)
})