/***
熊掌记
[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/xzj.js

[mitm] 

hostname = buy.itunes.apple.com

***/
let obj = JSON["parse"]($response["body"]);
obj = {
    "environment": "Production",
    "receipt": {
        "receipt_type": "Production",
        "adam_id": 1016366447,
        "app_item_id": 1016366447,
        "bundle_id": "net.shinyfrog.bear-iOS",
        "application_version": "9048",
        "download_id": 83067705285576,
        "version_external_identifier": 848214815,
        "receipt_creation_date": "2022-09-14 02:48:29 Etc/GMT",
        "receipt_creation_date_ms": "1663123709000",
        "receipt_creation_date_pst": "2022-09-13 19:48:29 America/Los_Angeles",
        "request_date": "2022-09-14 02:50:50 Etc/GMT",
        "request_date_ms": "1663123850720",
        "request_date_pst": "2022-09-13 19:50:50 America/Los_Angeles",
        "original_purchase_date": "2020-07-06 01:50:15 Etc/GMT",
        "original_purchase_date_ms": "1594000215000",
        "original_purchase_date_pst": "2020-07-05 18:50:15 America/Los_Angeles",
        "original_application_version": "8457",
        "in_app": [{
            "quantity": "1",
            "product_id": "net.shinyfrog.bear_iOS.pro_yearly_subscription_bis",
            "transaction_id": "430000659572416",
            "original_transaction_id": "430000659572416",
            "purchase_date": "2020-07-06 01:53:42 Etc/GMT",
            "purchase_date_ms": "1594000422000",
            "purchase_date_pst": "2020-07-05 18:53:42 America/Los_Angeles",
            "original_purchase_date": "2020-07-06 01:53:43 Etc/GMT",
            "original_purchase_date_ms": "1594000423000",
            "original_purchase_date_pst": "2020-07-05 18:53:43 America/Los_Angeles",
            "expires_date": "9999-08-06 01:53:42 Etc/GMT",
            "expires_date_ms": "1596678822000",
            "expires_date_pst": "9999-08-05 18:53:42 America/Los_Angeles",
            "web_order_line_item_id": "430000254060883",
            "is_trial_period": "true",
            "is_in_intro_offer_period": "false",
            "in_app_ownership_type": "PURCHASED"
        }]
    },
    "latest_receipt_info": [{
        "quantity": "1",
        "product_id": "net.shinyfrog.bear_iOS.pro_yearly_subscription_bis",
        "transaction_id": "430000659572416",
        "original_transaction_id": "430000659572416",
        "purchase_date": "2020-07-06 01:53:42 Etc/GMT",
        "purchase_date_ms": "1594000422000",
        "purchase_date_pst": "2020-07-05 18:53:42 America/Los_Angeles",
        "original_purchase_date": "2020-07-06 01:53:43 Etc/GMT",
        "original_purchase_date_ms": "1594000423000",
        "original_purchase_date_pst": "2020-07-05 18:53:43 America/Los_Angeles",
        "expires_date": "9999-08-06 01:53:42 Etc/GMT",
        "expires_date_ms": "9996678822000",
        "expires_date_pst": "9999-08-05 18:53:42 America/Los_Angeles",
        "web_order_line_item_id": "430000254060883",
        "is_trial_period": "true",
        "is_in_intro_offer_period": "false",
        "in_app_ownership_type": "PURCHASED",
        "subscription_group_identifier": "20354566"
    }],
    "latest_receipt": "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",
    "pending_renewal_info": [{
        "expiration_intent": "1",
        "auto_renew_product_id": "net.shinyfrog.bear_iOS.pro_yearly_subscription_bis",
        "is_in_billing_retry_period": "0",
        "product_id": "net.shinyfrog.bear_iOS.pro_yearly_subscription_bis",
        "original_transaction_id": "430000659572416",
        "auto_renew_status": "0"
    }],
    "status": 0
};
$done({ body: JSON["stringify"](obj) });
