/***
infuse解锁pro--Eric首发
[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/infusePro.js

[mitm] 

hostname = buy.itunes.apple.com

***/




let obj = JSON["parse"]($response["body"]);
obj = {
    "environment": "Production",
    "receipt": {
        "receipt_type": "Production",
        "adam_id": 1136220934,
        "app_item_id": 1136220934,
        "bundle_id": "com.firecore.infuse",
        "application_version": "7.4.4251",
        "download_id": 500555473092627744,
        "version_external_identifier": 852095056,
        "receipt_creation_date": "2022-09-21 02:19:23 Etc/GMT",
        "receipt_creation_date_ms": "1663726763000",
        "receipt_creation_date_pst": "2022-09-20 19:19:23 America/Los_Angeles",
        "request_date": "2022-09-21 02:19:41 Etc/GMT",
        "request_date_ms": "1663726781351",
        "request_date_pst": "2022-09-20 19:19:41 America/Los_Angeles",
        "original_purchase_date": "2021-07-20 09:48:40 Etc/GMT",
        "original_purchase_date_ms": "1626774520000",
        "original_purchase_date_pst": "2021-07-20 02:48:40 America/Los_Angeles",
        "original_application_version": "7.0.3737",
        "in_app": [{
            "quantity": "1",
            "product_id": "com.firecore.infuse.pro.365",
            "transaction_id": "20001114262095",
            "original_transaction_id": "20001114262095",
            "purchase_date": "2022-09-21 02:18:34 Etc/GMT",
            "purchase_date_ms": "1663726714000",
            "purchase_date_pst": "2022-09-20 19:18:34 America/Los_Angeles",
            "original_purchase_date": "2022-09-21 02:18:35 Etc/GMT",
            "original_purchase_date_ms": "1663726715000",
            "original_purchase_date_pst": "2022-09-20 19:18:35 America/Los_Angeles",
            "expires_date": "2099-10-21 02:18:34 Etc/GMT",
            "expires_date_ms": "1666318714000",
            "expires_date_pst": "2099-10-20 19:18:34 America/Los_Angeles",
            "web_order_line_item_id": "20000467490529",
            "is_trial_period": "true",
            "is_in_intro_offer_period": "false",
            "in_app_ownership_type": "PURCHASED"
        }]
    },
    "latest_receipt_info": [{
        "quantity": "1",
        "product_id": "com.firecore.infuse.pro.365",
        "transaction_id": "20001114262095",
        "original_transaction_id": "20001114262095",
        "purchase_date": "2022-09-21 02:18:34 Etc/GMT",
        "purchase_date_ms": "1663726714000",
        "purchase_date_pst": "2022-09-20 19:18:34 America/Los_Angeles",
        "original_purchase_date": "2022-09-21 02:18:35 Etc/GMT",
        "original_purchase_date_ms": "1663726715000",
        "original_purchase_date_pst": "2022-09-20 19:18:35 America/Los_Angeles",
        "expires_date": "2099-10-21 02:18:34 Etc/GMT",
        "expires_date_ms": "1666318714000",
        "expires_date_pst": "2099-10-20 19:18:34 America/Los_Angeles",
        "web_order_line_item_id": "20000467490529",
        "is_trial_period": "true",
        "is_in_intro_offer_period": "false",
        "in_app_ownership_type": "PURCHASED",
        "subscription_group_identifier": "20337171"
    }],
    "latest_receipt": "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",
    "pending_renewal_info": [{
        "auto_renew_product_id": "com.firecore.infuse.pro.365",
        "product_id": "com.firecore.infuse.pro.365",
        "original_transaction_id": "20001114262095",
        "auto_renew_status": "1"
    }],
    "status": 0
};
$done({
    body: JSON["stringify"](obj)
})
