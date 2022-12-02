var obj = JSON["parse"]($response["body"]);
var bundle_id = obj["receipt"]["bundle_id"];
if (bundle_id == "com.sugarmo.ScrollClip") {
    obj = {
        "receipt": {
            "receipt_type": "Production",
            "adam_id": 1208145167,
            "app_item_id": 1208145167,
            "bundle_id": "com.sugarmo.ScrollClip",
            "application_version": "3111",
            "download_id": 75039104621192,
            "version_external_identifier": 845742650,
            "receipt_creation_date": "2021-12-20 00:59:16 Etc/GMT",
            "receipt_creation_date_ms": "1639961956000",
            "receipt_creation_date_pst": "2021-12-19 16:59:16 America/Los_Angeles",
            "request_date": "2021-12-20 01:03:52 Etc/GMT",
            "request_date_ms": "1639962232562",
            "request_date_pst": "2021-12-19 17:03:52 America/Los_Angeles",
            "original_purchase_date": "2018-11-13 13:54:02 Etc/GMT",
            "original_purchase_date_ms": "1542117242000",
            "original_purchase_date_pst": "2018-11-13 05:54:02 America/Los_Angeles",
            "original_application_version": "2911",
            "in_app": [{
                "quantity": "1",
                "product_id": "com.sugarmo.ScrollClip.pro",
                "transaction_id": "350000551516724",
                "original_transaction_id": "350000551516724",
                "purchase_date": "2019-11-29 00:08:37 Etc/GMT",
                "purchase_date_ms": "1574986117000",
                "purchase_date_pst": "2019-11-28 16:08:37 America/Los_Angeles",
                "original_purchase_date": "2019-11-29 00:08:37 Etc/GMT",
                "original_purchase_date_ms": "1574986117000",
                "original_purchase_date_pst": "2019-11-28 16:08:37 America/Los_Angeles",
                "is_trial_period": "false",
                "in_app_ownership_type": "PURCHASED"
            }]
        },
        "latest_receipt": "5L2c6ICFQGtpbmc=",
        "environment": "Production",
        "status": 0
    }
};
if (bundle_id == "com.heliang.super.widget") {
    obj = {
        "receipt": {
            "receipt_type": "Production",
            "adam_id": 1569291816,
            "app_item_id": 1569291816,
            "bundle_id": "com.heliang.super.widget",
            "application_version": "40",
            "download_id": 500935934584949171,
            "version_external_identifier": 846821007,
            "receipt_creation_date": "2022-01-26 02:55:19 Etc/GMT",
            "receipt_creation_date_ms": "1643165719000",
            "receipt_creation_date_pst": "2022-01-25 18:55:19 America/Los_Angeles",
            "request_date": "2022-02-05 17:13:48 Etc/GMT",
            "request_date_ms": "1644081228639",
            "request_date_pst": "2022-02-05 09:13:48 America/Los_Angeles",
            "original_purchase_date": "2021-12-01 19:01:34 Etc/GMT",
            "original_purchase_date_ms": "1638385294000",
            "original_purchase_date_pst": "2021-12-01 11:01:34 America/Los_Angeles",
            "original_application_version": "22",
            "in_app": [{
                "quantity": "1",
                "product_id": "com.focoslive",
                "transaction_id": "730000766600650",
                "original_transaction_id": "730000766600650",
                "purchase_date": "2021-11-25 17:07:45 Etc/GMT",
                "purchase_date_ms": "1637860065000",
                "purchase_date_pst": "2021-11-25 09:07:45 America/Los_Angeles",
                "original_purchase_date": "2021-11-25 17:07:48 Etc/GMT",
                "original_purchase_date_ms": "1637860068000",
                "original_purchase_date_pst": "2021-11-25 09:07:48 America/Los_Angeles",
                "expires_date": "2099-09-09 17:07:45 Etc/GMT",
                "expires_date_ms": "4092647115000",
                "expires_date_pst": "2099-09-09 09:07:45 America/Los_Angeles",
                "web_order_line_item_id": "730000330755327",
                "is_trial_period": "false",
                "is_in_intro_offer_period": "false",
                "in_app_ownership_type": "PURCHASED"
            }]
        },
        "latest_receipt_info": [{
            "quantity": "1",
            "product_id": "com.focoslive",
            "transaction_id": "730000766600650",
            "original_transaction_id": "730000766600650",
            "purchase_date": "2021-11-25 17:07:45 Etc/GMT",
            "purchase_date_ms": "1637860065000",
            "purchase_date_pst": "2021-11-25 09:07:45 America/Los_Angeles",
            "original_purchase_date": "2021-11-25 17:07:48 Etc/GMT",
            "original_purchase_date_ms": "1637860068000",
            "original_purchase_date_pst": "2021-11-25 09:07:48 America/Los_Angeles",
            "expires_date": "2099-09-09 17:07:45 Etc/GMT",
            "expires_date_ms": "4092647115000",
            "expires_date_pst": "2099-09-09 09:07:45 America/Los_Angeles",
            "web_order_line_item_id": "730000330755327",
            "is_trial_period": "false",
            "is_in_intro_offer_period": "false",
            "in_app_ownership_type": "PURCHASED",
            "subscription_group_identifier": "20902245"
        }],
        "latest_receipt": "",
        "pending_renewal_info": [{
            "auto_renew_product_id": "com.focoslive",
            "product_id": "com.focoslive",
            "original_transaction_id": "730000766600650",
            "auto_renew_status": "1"
        }],
        "status": 0
    }
};
$done({
    body: JSON["stringify"](obj)
})
