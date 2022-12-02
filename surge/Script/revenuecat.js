var head = $request["headers"];
var ua = head["User-Agent"];
var obj = JSON["parse"]($response["body"]);
if (ua.indexOf("Fileball") != -1) {
    obj = {
        "request_date_ms": 1666618170880,
        "request_date": "2022-10-24T13:29:30Z",
        "subscriber": {
            "non_subscriptions": {},
            "first_seen": "2022-10-24T13:29:30Z",
            "original_application_version": null,
            "entitlement": {},
            "other_purchases": {},
            "management_url": null,
            "subscriptions": {
                "com.filebox.premium": {
                    "name": "Eric",
                    "purchase_date": "2022-02-02T09:09:09Z",
                    "original_purchase_date": "2022-02-02T09:09:09Z",
                    "feedback": "Eric",
                    "expires_date": "2099-10-23T09:09:09Z"
                }
            },
            "entitlements": {
                "filebox_pro": {
                    "name": "Eric",
                    "product_identifier": "com.filebox.premium",
                    "feedback": "Eric",
                    "expires_date": "2099-10-23T09:09:09Z",
                    "original_purchase_date": "2022-02-02T09:09:09Z",
                    "purchase_date": "2022-02-02T09:09:09Z"
                }
            },
            "original_purchase_date": null,
            "original_app_user_id": "$RCAnonymousID:547f01bad4e540678069f8a8ee71f826",
            "last_seen": "2022-10-24T13:29:30Z"
        }
    };
}
;
if (ua.indexOf("Taio") != -1) {
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
                        "id": "Eric",
                        "is_sandbox": false,
                        "purchase_date": "2022-02-11T09:48:56Z",
                        "original_purchase_date": "2022-02-11T09:48:56Z",
                        "store": "app_store"
                    }]
            },
            "original_app_user_id": "$RCAnonymousID:ba57a114baf5475787adff5ccd804b77",
            "original_application_version": "1052",
            "original_purchase_date": "2022-02-11T09:48:52Z",
            "other_purchases": { "taio_3799_lifetime_std_v2": { "purchase_date": "2022-02-11T09:48:56Z" } },
            "subscriptions": {}
        }
    };
}
;
if (ua.indexOf("谜底时钟") != -1) {
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
}
;
if (ua.indexOf("目标地图") != -1) {
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
    };
}
;
if (ua.indexOf("WhiteCloud") != -1) {
    obj = {
        "request_date": "2022-09-11T13:46:46Z",
        "request_date_ms": 1662904006346,
        "subscriber": {
            "entitlements": {
                "allaccess": {
                    "expires_date": "9999-09-08T01:16:31Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "wc_pro_1y",
                    "purchase_date": "2022-09-11T13:45:06Z"
                }
            },
            "first_seen": "2022-09-11T13:44:09Z",
            "last_seen": "2022-09-11T13:44:09Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:abad66a1510e4f37a529a7c26f893b97",
            "original_application_version": "70",
            "original_purchase_date": "2022-09-11T13:29:47Z",
            "other_purchases": {},
            "subscriptions": {
                "wc_pro_1y": {
                    "billing_issues_detected_at": null,
                    "expires_date": "9999-09-08T01:16:31Z",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-09-11T13:45:07Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "trial",
                    "purchase_date": "2022-09-11T13:45:06Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("VSCO") != -1) {
    obj = {
        "request_date_ms": 1662617472602,
        "request_date": "2022-09-08T06:11:12Z",
        "subscriber": {
            "non_subscriptions": {},
            "first_seen": "2021-08-11T18:08:19Z",
            "original_application_version": "16420",
            "other_purchases": {},
            "management_url": "https://apps.apple.com/account/subscriptions",
            "subscriptions": {
                "VSCOANNUAL": {
                    "is_sandbox": false,
                    "ownership_type": "PURCHASED",
                    "billing_issues_detected_at": null,
                    "period_type": "trial",
                    "expires_date": "2099-09-15T06:01:28Z",
                    "grace_period_expires_date": null,
                    "unsubscribe_detected_at": "2022-09-08T06:03:04Z",
                    "original_purchase_date": "2022-09-08T06:01:29Z",
                    "purchase_date": "2022-09-08T06:01:28Z",
                    "store": "app_store"
                }
            },
            "entitlements": {
                "membership": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-09-08T06:01:28Z",
                    "product_identifier": "VSCOANNUAL",
                    "expires_date": "2099-09-15T06:01:28Z"
                }
            },
            "original_purchase_date": "2020-05-20T09:12:36Z",
            "original_app_user_id": "$RCAnonymousID:46d692d9ad2c4c9194dc29eefd73ca42",
            "last_seen": "2022-09-08T05:57:44Z"
        }
    };
}
;
if (ua.indexOf("Planny") != -1) {
    obj = {
        "request_date": "2022-09-24T03:55:21Z",
        "request_date_ms": 1663991721341,
        "subscriber": {
            "entitlements": {
                "premium": {
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "product_identifier": "com.kevinreutter.Sagittarius.FamilyPremiumLifetime",
                    "purchase_date": "2022-09-24T03:53:09Z"
                }
            },
            "first_seen": "2022-09-24T03:10:31Z",
            "last_seen": "2022-09-24T03:10:31Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:1b0860a86963473592b911a17ad80ff4",
            "original_application_version": "8145",
            "original_purchase_date": "2022-09-24T03:08:21Z",
            "other_purchases": {},
            "subscriptions": {
                "com.kevinreutter.Sagittarius.FamilyPremiumLifetime": {
                    "billing_issues_detected_at": null,
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-09-24T03:53:13Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "normal",
                    "purchase_date": "2022-09-24T03:53:09Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": "2022-09-24T03:55:14Z"
                }
            }
        }
    };
}
;
if (ua.indexOf("Pillow") != -1) {
    obj = {
        "request_date": "2022-09-25T15:13:46Z",
        "request_date_ms": 1664118826555,
        "subscriber": {
            "entitlements": {
                "premium": {
                    "expires_date": "9999-09-09T02:11:47Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "com.neybox.pillow.premium.year",
                    "purchase_date": "2022-09-08T02:28:41Z"
                }
            },
            "first_seen": "2022-09-08T02:25:28Z",
            "last_seen": "2022-09-25T15:13:46Z",
            "management_url": null,
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:9359319d54534d648b320510f5c0f38b",
            "original_application_version": "244",
            "original_purchase_date": "2020-09-18T01:55:25Z",
            "other_purchases": {},
            "subscriptions": {
                "com.neybox.pillow.premium.year": {
                    "billing_issues_detected_at": null,
                    "expires_date": "9999-09-09T02:11:47Z",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-09-08T02:28:41Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "trial",
                    "purchase_date": "2022-09-08T02:28:41Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": "2022-09-08T02:30:14Z"
                }
            }
        }
    };
}
;
if (ua.indexOf("Usage") != -1) {
    obj = {
        "request_date": "2022-09-22T02:28:50Z",
        "request_date_ms": 1663813730272,
        "subscriber": {
            "entitlements": {
                "pro": {
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "product_identifier": "com.olegst.usage.pro",
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
                "com.olegst.usage.pro": {
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
    };
}
;
if (ua.indexOf("Airmail") != -1) {
    obj = {
        "request_date": "2022-08-30T15:14:08Z",
        "request_date_ms": 1664550848090,
        "subscriber": {
            "entitlements": {
                "Airmail Premium": {
                    "expires_date": "2099-10-03T15:14:01Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "Airmail_iOS_Yearly",
                    "purchase_date": "2022-08-30T15:14:01Z"
                }
            },
            "first_seen": "2022-08-30T15:07:25Z",
            "last_seen": "2022-08-30T15:07:25Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "DD361C86-2727-40C4-BA2D-24B1CA13C30D",
            "original_application_version": "718",
            "original_purchase_date": "2022-08-30T15:03:04Z",
            "other_purchases": {},
            "subscriptions": {
                "Airmail_iOS_Yearly": {
                    "billing_issues_detected_at": null,
                    "expires_date": "2099-10-03T15:14:01Z",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-08-30T15:14:02Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "trial",
                    "purchase_date": "2022-08-30T15:14:01Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("Fin") != -1) {
    obj = {
        "request_date": "2022-09-21T06:44:42Z",
        "request_date_ms": 1663742682606,
        "subscriber": {
            "entitlements": {
                "premium": {
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "product_identifier": "com.circles.fin.premium.lifetime",
                    "purchase_date": "2022-09-21T06:42:21Z"
                }
            },
            "first_seen": "2022-09-21T06:40:28Z",
            "last_seen": "2022-09-21T06:40:28Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:5f2163c2fb8547ec8031030c3982d067",
            "original_application_version": "69",
            "original_purchase_date": "2022-09-21T06:39:58Z",
            "other_purchases": {},
            "subscriptions": {
                "com.circles.fin.premium.lifetime": {
                    "billing_issues_detected_at": null,
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-09-21T06:42:22Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "mixed",
                    "purchase_date": "2022-09-21T06:42:21Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": "2022-09-21T06:43:50Z"
                }
            }
        }
    };
}
;
if (ua.indexOf("Percento") != -1) {
    obj = {
        "request_date": "2022-09-21T06:44:42Z",
        "request_date_ms": 1663742682606,
        "subscriber": {
            "entitlements": {
                "premium": {
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "product_identifier": "app.percento.premium.168.lifetime",
                    "purchase_date": "2022-09-21T06:42:21Z"
                }
            },
            "first_seen": "2022-09-21T06:40:28Z",
            "last_seen": "2022-09-21T06:40:28Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:5f2163c2fb8547ec8031030c3982d067",
            "original_application_version": "350",
            "original_purchase_date": "2022-09-21T06:39:58Z",
            "other_purchases": {},
            "subscriptions": {
                "app.percento.premium.168.lifetime": {
                    "billing_issues_detected_at": null,
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-09-21T06:42:22Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "default-3.0",
                    "purchase_date": "2022-09-21T06:42:21Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": "2022-09-21T06:43:50Z"
                }
            }
        }
    };
}
;
if (ua.indexOf("totowallet") != -1) {
    obj = {
        "request_date": "2020-06-05T11:54:41Z",
        "request_date_ms": 1591358081473,
        "subscriber": {
            "entitlements": {
                "all": {
                    "expires_date": "2099-09-18T07:52:54Z",
                    "product_identifier": "com.premium.yearly",
                    "purchase_date": "2021-08-11T07:52:54Z"
                }
            },
            "first_seen": "2021-05-29T07:59:41Z",
            "last_seen": "2021-06-05T11:46:28Z",
            "management_url": null,
            "non_subscriptions": {},
            "original_app_user_id": "RbhyxwVVYSgnnUEtme2444PjccJ3",
            "original_application_version": "5",
            "original_purchase_date": "2021-05-29T07:47:32Z",
            "other_purchases": {},
            "subscriptions": {
                "com.premium.yearly": {
                    "billing_issues_detected_at": null,
                    "expires_date": "2099-02-18T07:52:54Z",
                    "is_sandbox": false,
                    "original_purchase_date": "2021-02-11T07:52:55Z",
                    "period_type": "normal",
                    "purchase_date": "2021-08-11T07:52:54Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("Grow") != -1) {
    obj = {
        "request_date": "2022-05-10T06:13:40Z",
        "subscriber": {
            "non_subscriptions": {},
            "first_seen": "2022-05-10T04:16:35Z",
            "original_application_version": "176",
            "other_purchases": {},
            "management_url": "itms-apps://apps.apple.com/account/subscriptions",
            "subscriptions": {
                "grow_lifetime": {
                    "is_sandbox": false,
                    "ownership_type": "PURCHASED",
                    "billing_issues_detected_at": null,
                    "period_type": "premium",
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "unsubscribe_detected_at": null,
                    "original_purchase_date": "2022-05-10T06:12:56Z",
                    "purchase_date": "2022-05-10T06:12:55Z",
                    "store": "app_store"
                }
            },
            "entitlements": {
                "grow.pro": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-05-10T06:12:55Z",
                    "product_identifier": "grow_lifetime",
                    "expires_date": null
                }
            },
            "original_purchase_date": "2022-05-10T01:08:16Z",
            "original_app_user_id": "$RCAnonymousID:Eric",
            "last_seen": "2022-05-10T04:16:35Z"
        }
    };
}
;
if (ua.indexOf("ScannerPro") != -1) {
    obj = {
        "request_date": "2021-06-05T11:54:41Z",
        "request_date_ms": 1591358081473,
        "subscriber": {
            "non_subscriptions": {},
            "first_seen": "2021-05-29T07:59:41Z",
            "original_application_version": "514",
            "other_purchases": {},
            "management_url": null,
            "subscriptions": {
                "com.readdle.Scanner.subscription.year25": {
                    "is_sandbox": false,
                    "period_type": "normal",
                    "billing_issues_detected_at": null,
                    "unsubscribe_detected_at": null,
                    "expires_date": "2099-09-18T07:52:54Z",
                    "original_purchase_date": "2021-02-11T07:52:55Z",
                    "purchase_date": "2021-02-11T07:52:54Z",
                    "store": "app_store"
                }
            },
            "entitlements": {
                "plus": {
                    "expires_date": "2099-02-18T07:52:54Z",
                    "product_identifier": "com.readdle.Scanner.subscription.year25",
                    "purchase_date": "2021-02-11T07:52:54Z"
                }
            },
            "original_purchase_date": "2021-05-29T07:47:32Z",
            "original_app_user_id": "Eric",
            "last_seen": "2021-06-05T11:46:28Z"
        }
    };
}
;
if (ua.indexOf("widget_art") != -1) {
    obj = {
        "request_date": "2020-06-05T11:54:41Z",
        "request_date_ms": 1591358081473,
        "subscriber": {
            "entitlements": {
                "all": {
                    "expires_date": null,
                    "product_identifier": "com.ziheng.widgetart.onetime",
                    "purchase_date": "2021-08-11T07:52:54Z"
                }
            },
            "first_seen": "2021-05-29T07:59:41Z",
            "last_seen": "2021-06-05T11:46:28Z",
            "management_url": null,
            "non_subscriptions": {},
            "original_app_user_id": "RbhyxwVVYSgnnUEtme2444PjccJ3",
            "original_application_version": "5",
            "original_purchase_date": "2021-05-29T07:47:32Z",
            "other_purchases": {},
            "subscriptions": {
                "com.ziheng.widgetart.onetime": {
                    "billing_issues_detected_at": null,
                    "expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2021-02-11T07:52:55Z",
                    "period_type": "normal",
                    "purchase_date": "2021-08-11T07:52:54Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("Aphrodite") != -1) {
    obj = {
        "request_date": "2020-06-05T11:54:41Z",
        "request_date_ms": 1591358081473,
        "subscriber": {
            "entitlements": {
                "all": {
                    "expires_date": null,
                    "product_identifier": "com.ziheng.aphrodite.onetime",
                    "purchase_date": "2021-08-11T07:52:54Z"
                }
            },
            "first_seen": "2021-05-29T07:59:41Z",
            "last_seen": "2021-06-05T11:46:28Z",
            "management_url": null,
            "non_subscriptions": {},
            "original_app_user_id": "RbhyxwVVYSgnnUEtme2444PjccJ3",
            "original_application_version": "5",
            "original_purchase_date": "2021-05-29T07:47:32Z",
            "other_purchases": {},
            "subscriptions": {
                "com.ziheng.aphrodite.onetime": {
                    "billing_issues_detected_at": null,
                    "expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2021-02-11T07:52:55Z",
                    "period_type": "normal",
                    "purchase_date": "2021-08-11T07:52:54Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("apollo") != -1) {
    obj = {
        "request_date": "2020-06-05T11:54:41Z",
        "request_date_ms": 1591358081473,
        "subscriber": {
            "entitlements": {
                "all": {
                    "expires_date": null,
                    "product_identifier": "com.ziheng.apollo.onetime",
                    "purchase_date": "2021-08-11T07:52:54Z"
                }
            },
            "first_seen": "2021-05-29T07:59:41Z",
            "last_seen": "2021-06-05T11:46:28Z",
            "management_url": null,
            "non_subscriptions": {},
            "original_app_user_id": "RbhyxwVVYSgnnUEtme2444PjccJ3",
            "original_application_version": "5",
            "original_purchase_date": "2021-05-29T07:47:32Z",
            "other_purchases": {},
            "subscriptions": {
                "com.ziheng.apollo.onetime": {
                    "billing_issues_detected_at": null,
                    "expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2021-02-11T07:52:55Z",
                    "period_type": "normal",
                    "purchase_date": "2021-08-11T07:52:54Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("OneBox") != -1) {
    obj = {
        "request_date": "2020-06-05T11:54:41Z",
        "request_date_ms": 1591358081473,
        "subscriber": {
            "entitlements": {
                "all": {
                    "expires_date": null,
                    "product_identifier": "com.ziheng.pandora.lifetime",
                    "purchase_date": "2021-08-11T07:52:54Z"
                }
            },
            "first_seen": "2021-05-29T07:59:41Z",
            "last_seen": "2021-06-05T11:46:28Z",
            "management_url": null,
            "non_subscriptions": {},
            "original_app_user_id": "RbhyxwVVYSgnnUEtme2444PjccJ3",
            "original_application_version": "5",
            "original_purchase_date": "2021-05-29T07:47:32Z",
            "other_purchases": {},
            "subscriptions": {
                "com.ziheng.pandora.lifetime": {
                    "billing_issues_detected_at": null,
                    "expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2021-02-11T07:52:55Z",
                    "period_type": "normal",
                    "purchase_date": "2021-08-11T07:52:54Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("OneWidget") != -1) {
    obj = {
        "request_date": "2022-10-12T14:43:17Z",
        "request_date_ms": 1665585797131,
        "subscriber": {
            "entitlements": {
                "allaccess": {
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "product_identifier": "com.onewidget.vip",
                    "purchase_date": "2022-10-12T14:43:02Z"
                }
            },
            "first_seen": "2022-10-12T14:33:22Z",
            "last_seen": "2022-10-12T14:33:22Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:dac1b7ff6a0a4bf9a7557a4c71db12d4",
            "original_application_version": "63",
            "original_purchase_date": "2022-10-12T14:28:08Z",
            "other_purchases": {},
            "subscriptions": {
                "com.onewidget.vip": {
                    "billing_issues_detected_at": null,
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-10-12T14:43:03Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "Eric",
                    "purchase_date": "2022-10-12T14:43:02Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("1Blocker") != -1) {
    obj = {
        "request_date": "2022-06-25T07:36:54Z",
        "request_date_ms": 1656142614383,
        "subscriber": {
            "entitlements": {
                "premium": {
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "product_identifier": "blocker.ios.iap.lifetime",
                    "purchase_date": "2020-11-14T01:01:01Z"
                }
            },
            "first_seen": "2020-11-14T01:01:01Z",
            "last_seen": "2020-11-14T01:01:01Z",
            "management_url": "itms-apps://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "9C57FE95-67YU-999B-09CB-GH89HJK89",
            "original_application_version": "900",
            "original_purchase_date": "2020-11-14T12:43:04Z",
            "other_purchases": {},
            "subscriptions": {
                "blocker.ios.iap.lifetime": {
                    "billing_issues_detected_at": null,
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2020-11-14T12:45:21Z",
                    "period_type": "trial",
                    "purchase_date": "2020-11-14T12:45:20Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("Spark") != -1) {
    obj = {
        "request_date_ms": 1662599120248,
        "request_date": "2022-09-08T01:05:20Z",
        "subscriber": {
            "last_seen": "2022-09-08T01:04:03Z",
            "first_seen": "2022-09-08T01:04:03Z",
            "original_application_version": "8",
            "other_purchases": {},
            "management_url": "https://apps.apple.com/account/subscriptions",
            "subscriptions": {
                "spark_5999_1y_1w0": {
                    "is_sandbox": false,
                    "ownership_type": "PURCHASED",
                    "billing_issues_detected_at": null,
                    "period_type": "normal",
                    "expires_date": "2099-12-18T01:04:17Z",
                    "grace_period_expires_date": null,
                    "unsubscribe_detected_at": null,
                    "original_purchase_date": "2022-09-08T01:04:18Z",
                    "purchase_date": "2022-09-08T01:04:17Z",
                    "store": "app_store"
                }
            },
            "entitlements": {
                "premium": {
                    "expires_date": "2099-12-18T01:04:17Z",
                    "purchase_date": "2022-09-08T01:04:17Z",
                    "product_identifier": "spark_5999_1y_1w0",
                    "grace_period_expires_date": null
                }
            },
            "original_purchase_date": "2022-09-07T13:05:43Z",
            "original_app_user_id": "$RCAnonymousID:Eric",
            "non_subscriptions": {}
        }
    };
}
;
if (ua.indexOf("Vision") != -1) {
    obj = {
        "request_date": "2022-10-02T04:41:04Z",
        "request_date_ms": 1664685664562,
        "subscriber": {
            "entitlements": {
                "pro": {
                    "expires_date": "2099-12-18T01:04:17Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "vis_lifetime_unlock",
                    "purchase_date": "2022-08-03T12:22:48Z"
                }
            },
            "first_seen": "2022-08-03T12:18:43Z",
            "last_seen": "2022-10-02T03:59:06Z",
            "management_url": null,
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:Eric",
            "original_application_version": "319",
            "original_purchase_date": "2022-08-03T12:17:40Z",
            "other_purchases": {},
            "subscriptions": {
                "vis_lifetime_unlock": {
                    "billing_issues_detected_at": null,
                    "expires_date": "2099-12-18T01:04:17Z",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-08-03T12:22:48Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "Eric",
                    "purchase_date": "2022-08-03T12:22:48Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": "2022-08-03T12:28:20Z"
                }
            }
        }
    };
}
;
if (ua.indexOf("Gear") != -1) {
    obj = {
        "request_date": "2020-06-05T11:54:41Z",
        "request_date_ms": 1591358081473,
        "subscriber": {
            "entitlements": {
                "all": {
                    "expires_date": null,
                    "product_identifier": "com.gear.app.yearly",
                    "purchase_date": "2021-08-11T07:52:54Z"
                }
            },
            "first_seen": "2021-05-29T07:59:41Z",
            "last_seen": "2021-06-05T11:46:28Z",
            "management_url": null,
            "non_subscriptions": {},
            "original_app_user_id": "RbhyxwVVYSgnnUEtme2444PjccJ3",
            "original_application_version": "5",
            "original_purchase_date": "2021-05-29T07:47:32Z",
            "other_purchases": {},
            "subscriptions": {
                "com.gear.app.yearly": {
                    "billing_issues_detected_at": null,
                    "expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2021-02-11T07:52:55Z",
                    "period_type": "normal",
                    "purchase_date": "2021-08-11T07:52:54Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("谜底黑胶") != -1) {
    obj = {
        "request_date": "2022-09-19T14:08:44Z",
        "request_date_ms": 1663596524426,
        "subscriber": {
            "entitlements": {
                "Entitlement.Pro": {
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "product_identifier": "tech.miidii.MDVinyl.lifetime",
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
                "tech.miidii.MDVinyl.lifetime": {
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
}
;
if (ua.indexOf("PDF Viewer") != -1) {
    obj = {
        "request_date_ms": 1662599120248,
        "request_date": "2022-10-08T01:05:20Z",
        "subscriber": {
            "last_seen": "2022-10-08T01:04:03Z",
            "first_seen": "2022-10-08T01:04:03Z",
            "original_application_version": "18",
            "other_purchases": {},
            "management_url": "https://apps.apple.com/account/subscriptions",
            "subscriptions": {
                "com.pspdfkit.viewer.sub.pro.yearly": {
                    "is_sandbox": false,
                    "ownership_type": "PURCHASED",
                    "billing_issues_detected_at": null,
                    "period_type": "normal",
                    "expires_date": "2029-08-18T01:04:17Z",
                    "grace_period_expires_date": null,
                    "unsubscribe_detected_at": null,
                    "original_purchase_date": "2022-10-08T01:04:18Z",
                    "purchase_date": "2022-10-08T01:04:17Z",
                    "store": "app_store"
                }
            },
            "entitlements": {
                "sub.pro": {
                    "expires_date": "2029-08-18T01:04:17Z",
                    "purchase_date": "2022-10-08T01:04:17Z",
                    "product_identifier": "com.pspdfkit.viewer.sub.pro.yearly",
                    "grace_period_expires_date": null
                }
            },
            "original_purchase_date": "2022-10-07T13:05:43Z",
            "original_app_user_id": "$RCAnonymousID:Eric",
            "non_subscriptions": {}
        }
    };
}
;
if (ua.indexOf("audiomack-iphone") != -1) {
    obj = {
        "request_date": "2022-10-13T09:46:38Z",
        "request_date_ms": 1665654398884,
        "subscriber": {
            "entitlements": {
                "Premium1": {
                    "expires_date": "2029-10-20T09:46:17Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "com.audiomack.premium.2018",
                    "purchase_date": "2022-10-13T09:46:17Z"
                }
            },
            "first_seen": "2022-10-13T09:35:49Z",
            "last_seen": "2022-10-13T09:36:05Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:Eric",
            "original_application_version": "9348",
            "original_purchase_date": "2022-10-13T08:58:31Z",
            "other_purchases": {},
            "subscriptions": {
                "com.audiomack.premium.2018": {
                    "billing_issues_detected_at": null,
                    "expires_date": "2029-10-20T09:46:17Z",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-10-13T09:46:18Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "Eric",
                    "purchase_date": "2022-10-13T09:46:17Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("Darkroom") != -1) {
    obj = {
        "request_date": "2022-09-19T14:08:44Z",
        "request_date_ms": 1663596524426,
        "subscriber": {
            "entitlements": {
                "Entitlement.Pro": {
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "product_identifier": "co.bergen.Darkroom.product.forever.everything",
                    "purchase_date": "2022-09-19T13:58:44Z"
                }
            },
            "first_seen": "2022-09-19T13:57:54Z",
            "last_seen": "2022-09-19T13:57:54Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:Eric",
            "original_application_version": "599",
            "original_purchase_date": "2022-09-11T05:42:36Z",
            "other_purchases": {},
            "subscriptions": {
                "co.bergen.Darkroom.product.forever.everything": {
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
}
;
if (ua.indexOf("CPUMonitor") != -1) {
    obj = {
        "request_date": "2022-10-13T10:23:32Z",
        "request_date_ms": 1665656612116,
        "subscriber": {
            "entitlements": {
                "Pro": {
                    "expires_date": "2029-10-20T10:23:26Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "pro_annual",
                    "purchase_date": "2022-10-13T10:23:26Z"
                }
            },
            "first_seen": "2022-10-13T10:21:51Z",
            "last_seen": "2022-10-13T10:21:51Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:53900573d00c476abb4d738e4e275c8f",
            "original_application_version": "373",
            "original_purchase_date": "2020-03-05T06:55:08Z",
            "other_purchases": {},
            "subscriptions": {
                "pro_annual": {
                    "billing_issues_detected_at": null,
                    "expires_date": "2029-10-20T10:23:26Z",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-10-13T10:23:27Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "Eric",
                    "purchase_date": "2022-10-13T10:23:26Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("Lazy Bones") != -1) {
    obj = {
        "request_date": "2022-10-14T05:21:24Z",
        "request_date_ms": 1665724884562,
        "subscriber": {
            "entitlements": {
                "Premium": {
                    "expires_date": "2099-10-21T05:08:53Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "halfyearsubscription",
                    "purchase_date": "2022-10-14T05:08:53Z"
                }
            },
            "first_seen": "2022-10-14T03:51:07Z",
            "last_seen": "2022-10-14T03:51:07Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:b2e5ed6ee3b34e51927d8e6bc6576adb",
            "original_application_version": "2482",
            "original_purchase_date": "2022-10-14T03:41:31Z",
            "other_purchases": {},
            "subscriptions": {
                "halfyearsubscription": {
                    "billing_issues_detected_at": null,
                    "expires_date": "2099-10-21T05:08:53Z",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-10-14T05:08:54Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "trial",
                    "purchase_date": "2022-10-14T05:08:53Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": "2022-10-14T05:18:01Z"
                }
            }
        }
    };
}
;
if (ua.indexOf("MagicFX") != -1) {
    obj = {
        "request_date": "2022-10-14T05:09:05Z",
        "request_date_ms": 1665724145444,
        "subscriber": {
            "entitlements": {
                "Premium": {
                    "expires_date": "2099-10-21T05:08:53Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "halfyearsubscription",
                    "purchase_date": "2022-10-14T05:08:53Z"
                }
            },
            "first_seen": "2022-10-14T03:51:07Z",
            "last_seen": "2022-10-14T03:51:07Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:Eric",
            "original_application_version": "2482",
            "original_purchase_date": "2022-10-14T03:41:31Z",
            "other_purchases": {},
            "subscriptions": {
                "halfyearsubscription": {
                    "billing_issues_detected_at": null,
                    "expires_date": "2099-10-21T05:08:53Z",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-10-14T05:08:54Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "subscription",
                    "purchase_date": "2022-10-14T05:08:53Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("Noto 笔记") != -1) {
    obj = {
        "request_date": "2022-10-14T06:24:23Z",
        "request_date_ms": 1665728663210,
        "subscriber": {
            "entitlements": {
                "pro": {
                    "expires_date": "",
                    "grace_period_expires_date": null,
                    "product_identifier": "com.mlobodzinski.Stoic.lifetime",
                    "purchase_date": "2022-10-14T06:23:53Z"
                }
            },
            "first_seen": "2022-10-14T06:20:43Z",
            "last_seen": "2022-10-14T06:20:43Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:4024fefebf014458bef29f2e013c5124",
            "original_application_version": "251",
            "original_purchase_date": "2022-10-14T06:18:56Z",
            "other_purchases": {},
            "subscriptions": {
                "com.mlobodzinski.Stoic.lifetime": {
                    "billing_issues_detected_at": null,
                    "expires_date": "",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-10-14T06:23:55Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "pro",
                    "purchase_date": "2022-10-14T06:23:53Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("stoic") != -1) {
    obj = {
        "request_date": "2022-10-14T07:50:01Z",
        "request_date_ms": 1665733801390,
        "subscriber": {
            "entitlements": {
                "premium": {
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "product_identifier": "com.mlobodzinski.Stoic.lifetime",
                    "purchase_date": "2022-10-14T07:49:44Z"
                }
            },
            "first_seen": "2022-10-14T07:45:36Z",
            "last_seen": "2022-10-14T07:45:36Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:e54b3dbc03ab4d749d5a2da01a96a972",
            "original_application_version": "471",
            "original_purchase_date": "2022-10-14T07:26:13Z",
            "other_purchases": {},
            "subscriptions": {
                "com.mlobodzinski.Stoic.lifetime": {
                    "billing_issues_detected_at": null,
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-10-14T07:49:45Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "Eric",
                    "purchase_date": "2022-10-14T07:49:44Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("Anybox") != -1) {
    obj = {
        "request_date": "2022-10-14T07:50:01Z",
        "request_date_ms": 1665733801390,
        "subscriber": {
            "entitlements": {
                "pro": {
                    "expires_date": "2029-10-14T07:49:44Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "cc.anybox.Anybox.annual",
                    "purchase_date": "2022-10-14T07:49:44Z"
                }
            },
            "first_seen": "2022-10-14T07:45:36Z",
            "last_seen": "2022-10-14T07:45:36Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:Eric",
            "original_application_version": "47",
            "original_purchase_date": "2022-10-14T07:26:13Z",
            "other_purchases": {},
            "subscriptions": {
                "cc.anybox.Anybox.annual": {
                    "billing_issues_detected_at": null,
                    "expires_date": "2029-10-14T07:49:44Z",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-10-14T07:49:45Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "annual",
                    "purchase_date": "2022-10-14T07:49:44Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("Upnext") != -1) {
    obj = {
        "request_date": "2022-10-15T07:13:17Z",
        "request_date_ms": 1665817997435,
        "subscriber": {
            "entitlements": {
                "full_access": {
                    "expires_date": "2099-10-29T07:12:03Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "un_premium_plan_annual",
                    "purchase_date": "2022-10-15T07:12:03Z"
                }
            },
            "first_seen": "2022-10-15T07:01:59Z",
            "last_seen": "2022-10-15T07:02:08Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:Eric",
            "original_application_version": "1",
            "original_purchase_date": "2022-10-15T07:01:30Z",
            "other_purchases": {},
            "subscriptions": {
                "un_premium_plan_annual": {
                    "billing_issues_detected_at": null,
                    "expires_date": "2099-10-29T07:12:03Z",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-10-15T07:12:04Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "un_premium_plan",
                    "purchase_date": "2022-10-15T07:12:03Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("MoneyThings") != -1) {
    obj = {
        "request_date": "2022-09-12T06:19:44Z",
        "request_date_ms": 1662963584281,
        "subscriber": {
            "entitlements": {
                "Premium": {
                    "expires_date": "2099-9-9T06:06:52Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "com.lishaohui.cashflow.lifetime",
                    "purchase_date": "2022-09-12T06:06:52Z"
                }
            },
            "first_seen": "2022-08-10T05:38:55Z",
            "last_seen": "2022-09-12T02:54:04Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:Eric",
            "original_application_version": "318",
            "original_purchase_date": "2022-08-09T15:58:31Z",
            "other_purchases": {},
            "subscriptions": {
                "com.lishaohui.cashflow.lifetime": {
                    "billing_issues_detected_at": null,
                    "expires_date": "2099-9-9T06:06:52Z",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "9999-09-12T06:06:53Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "normal",
                    "purchase_date": "9999-09-12T06:06:52Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("Focus") != -1) {
    obj = {
        "request_date": "2022-09-12T06:19:44Z",
        "request_date_ms": 1662963584281,
        "subscriber": {
            "entitlements": {
                "Premium": {
                    "expires_date": "9999-9-9T06:06:52Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "iap.io.masterbuilders.focus.pro_one_year",
                    "purchase_date": "2022-09-12T06:06:52Z"
                }
            },
            "first_seen": "2022-08-10T05:38:55Z",
            "last_seen": "2022-09-12T02:54:04Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:5a03aabdc1f349a0a719b60399965010",
            "original_application_version": "318",
            "original_purchase_date": "2022-08-09T15:58:31Z",
            "other_purchases": {},
            "subscriptions": {
                "iap.io.masterbuilders.focus.pro_one_year": {
                    "billing_issues_detected_at": null,
                    "expires_date": "9999-9-9T06:06:52Z",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "9999-09-12T06:06:53Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "normal",
                    "purchase_date": "9999-09-12T06:06:52Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("Focuskeeper") != -1) {
    obj = {
        "request_date": "2022-10-14T07:50:01Z",
        "request_date_ms": 1665733801390,
        "subscriber": {
            "entitlements": {
                "premium": {
                    "expires_date": "2029-10-14T07:49:44Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "com.limepresso.pomodorofree.subscription.year",
                    "purchase_date": "2022-10-14T07:49:44Z"
                }
            },
            "first_seen": "2022-10-14T07:45:36Z",
            "last_seen": "2022-10-14T07:45:36Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:Eric",
            "original_application_version": "47",
            "original_purchase_date": "2022-10-14T07:26:13Z",
            "other_purchases": {},
            "subscriptions": {
                "com.limepresso.pomodorofree.subscription.year": {
                    "billing_issues_detected_at": null,
                    "expires_date": "2029-10-14T07:49:44Z",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-10-14T07:49:45Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "default",
                    "purchase_date": "2022-10-14T07:49:44Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("WeNote") != -1) {
    obj = {
        "request_date": "2022-10-14T07:50:01Z",
        "request_date_ms": 1665733801390,
        "subscriber": {
            "entitlements": {
                "pro": {
                    "expires_date": "2099-10-14T07:49:44Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "LifetimeMembership",
                    "purchase_date": "2022-10-14T07:49:44Z"
                }
            },
            "first_seen": "2022-10-14T07:45:36Z",
            "last_seen": "2022-10-14T07:45:36Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:Eric",
            "original_application_version": "47",
            "original_purchase_date": "2022-10-14T07:26:13Z",
            "other_purchases": {},
            "subscriptions": {
                "LifetimeMembership": {
                    "billing_issues_detected_at": null,
                    "expires_date": "2099-10-14T07:49:44Z",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-10-14T07:49:45Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "default",
                    "purchase_date": "2022-10-14T07:49:44Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("Launch") != -1) {
    obj = {
        "request_date": "2022-10-14T07:50:01Z",
        "request_date_ms": 1665733801390,
        "subscriber": {
            "entitlements": {
                "premium": {
                    "expires_date": "2099-10-14T07:49:44Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "com.appcubby.launchpro.forever",
                    "purchase_date": "2022-10-14T07:49:44Z"
                }
            },
            "first_seen": "2022-10-14T07:45:36Z",
            "last_seen": "2022-10-14T07:45:36Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:Eric",
            "original_application_version": "47",
            "original_purchase_date": "2022-10-14T07:26:13Z",
            "other_purchases": {},
            "subscriptions": {
                "com.appcubby.launchpro.forever": {
                    "billing_issues_detected_at": null,
                    "expires_date": "2099-10-14T07:49:44Z",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-10-14T07:49:45Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "lifetime",
                    "purchase_date": "2022-10-14T07:49:44Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("ProFit") != -1) {
    obj = {
        "request_date": "2022-10-20T04:45:44Z",
        "request_date_ms": 1666241144415,
        "subscriber": {
            "entitlements": {},
            "first_seen": "2022-10-19T14:25:25Z",
            "last_seen": "2022-10-19T14:25:25Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "34030869-25e2-4ebb-a29c-7a027e6d1568",
            "original_application_version": "7.7",
            "original_purchase_date": "2022-10-19T14:18:11Z",
            "other_purchases": {},
            "subscriptions": {
                "com.maxty.gofitness.3monthsplan": {
                    "billing_issues_detected_at": null,
                    "expires_date": "2099-10-23T04:45:30Z",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-10-20T04:45:31Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "yearly",
                    "purchase_date": "2022-10-20T04:45:30Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("Craft") != -1) {
    obj = {
        "request_date": "2022-10-20T05:49:08Z",
        "request_date_ms": 1666244948747,
        "subscriber": {
            "entitlements": {},
            "first_seen": "2022-09-01T10:01:28Z",
            "last_seen": "2022-10-20T05:44:24Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:e7e94e2828a744568592504b7171db85",
            "original_application_version": "597",
            "original_purchase_date": "2022-09-01T09:56:07Z",
            "other_purchases": {},
            "subscriptions": {
                "com.lukilabs.lukiapp.pro.sub.yearly": {
                    "billing_issues_detected_at": null,
                    "expires_date": "2099-11-03T05:49:03Z",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-10-20T05:49:05Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "trial",
                    "purchase_date": "2022-10-20T05:49:03Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("DarkLooker") != -1) {
    obj = {
        "request_date": "2022-09-22T02:28:50Z",
        "request_date_ms": 1663813730272,
        "subscriber": {
            "entitlements": {
                "premium": {
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "product_identifier": "com.boleStudio.safaridarkmode.permanent",
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
                "com.boleStudio.safaridarkmode.permanent": {
                    "billing_issues_detected_at": null,
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-09-22T02:19:33Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "premium",
                    "purchase_date": "2022-09-22T02:19:32Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": "2022-09-22T02:21:43Z"
                }
            }
        }
    };
}
;
if (ua.indexOf("Harukong") != -1) {
    obj = {
        "request_date": "2022-09-22T02:28:50Z",
        "request_date_ms": 1663813730272,
        "subscriber": {
            "entitlements": {
                "premium": {
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "product_identifier": "com.bluesignum.harukong.lifetime.premium",
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
                "com.bluesignum.harukong.lifetime.premium": {
                    "billing_issues_detected_at": null,
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-09-22T02:19:33Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "premium",
                    "purchase_date": "2022-09-22T02:19:32Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": "2022-09-22T02:21:43Z"
                }
            }
        }
    };
}
;
if (ua.indexOf("djay") != -1) {
    obj = {
        "request_date": "2022-09-22T02:28:50Z",
        "request_date_ms": 1663813730272,
        "subscriber": {
            "entitlements": {
                "pro": {
                    "expires_date": "2099-10-14T07:49:44Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "com.algoriddim.djay_iphone_free.pro_loyalty_2.yearly",
                    "purchase_date": "2022-09-22T02:19:32Z"
                }
            },
            "first_seen": "2022-09-22T02:12:43Z",
            "last_seen": "2022-09-22T02:12:43Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:Eric",
            "original_application_version": "322",
            "original_purchase_date": "2022-09-10T12:59:20Z",
            "other_purchases": {},
            "subscriptions": {
                "com.algoriddim.djay_iphone_free.pro_loyalty_2.yearly": {
                    "billing_issues_detected_at": null,
                    "expires_date": "2099-10-14T07:49:44Z",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-09-22T02:19:33Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "pro",
                    "purchase_date": "2022-09-22T02:19:32Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": "2022-09-22T02:21:43Z"
                }
            }
        }
    };
}
;
if (ua.indexOf("Anime Karma List") != -1) {
    obj = {
        "request_date": "2022-10-26T05:13:39Z",
        "request_date_ms": 1666761219061,
        "subscriber": {
            "entitlements": {
                "allaccess": {
                    "expires_date": "2099-11-02T05:13:34Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "akl_1999_1y",
                    "purchase_date": "2022-10-26T05:13:34Z"
                }
            },
            "first_seen": "2022-10-26T05:10:13Z",
            "last_seen": "2022-10-26T05:10:13Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:feed7b3189874016913624d960650e0f",
            "original_application_version": "2",
            "original_purchase_date": "2022-10-26T05:09:34Z",
            "other_purchases": {},
            "subscriptions": {
                "akl_1999_1y": {
                    "billing_issues_detected_at": null,
                    "expires_date": "2099-11-02T05:13:34Z",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-10-26T05:13:35Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "pro",
                    "purchase_date": "2022-10-26T05:13:34Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("计算器 Air") != -1) {
    obj = {
        "request_date_ms": 1667974179683,
        "request_date": "2022-11-09T06:09:39Z",
        "subscriber": {
            "non_subscriptions": {},
            "first_seen": "2022-11-05T10:45:44Z",
            "original_application_version": "2.0.7.1",
            "other_purchases": {},
            "management_url": null,
            "subscriptions": {
                "co.airapps.calculator.year": {
                    "original_purchase_date": "2022-10-03T13:26:06Z",
                    "expires_date": "2029-10-06T13:26:04Z",
                    "is_sandbox": false,
                    "refunded_at": null,
                    "unsubscribe_detected_at": "2022-11-05T10:45:46Z",
                    "grace_period_expires_date": null,
                    "period_type": "trial",
                    "purchase_date": "2022-10-03T13:26:04Z",
                    "billing_issues_detected_at": null,
                    "ownership_type": "PURCHASED",
                    "store": "app_store",
                    "auto_resume_date": null
                }
            },
            "entitlements": {
                "AirAppsOne": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-10-03T13:26:04Z",
                    "product_identifier": "co.airapps.calculator.year",
                    "expires_date": "2029-10-06T13:26:04Z"
                }
            },
            "original_purchase_date": "2020-05-21T06:59:46Z",
            "original_app_user_id": "611737395-C57FEA14-0511-4E36-8568-D1539CF1256E",
            "last_seen": "2022-11-09T06:05:03Z"
        }
    };
}
;
if (ua.indexOf("Mojo") != -1) {
    obj = {
        "request_date": "2022-09-11T13:46:46Z",
        "request_date_ms": 1662904006346,
        "subscriber": {
            "entitlements": {
                "pro": {
                    "expires_date": "2029-05-26T05:05:04Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "video.mojo.pro.yearly",
                    "purchase_date": "2022-09-11T13:45:06Z"
                }
            },
            "first_seen": "2022-09-11T13:44:09Z",
            "last_seen": "2022-09-11T13:44:09Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:abad66a1510e4f37a529a7c26f893b97",
            "original_application_version": "70",
            "original_purchase_date": "2022-09-11T13:29:47Z",
            "other_purchases": {},
            "subscriptions": {
                "video.mojo.pro.yearly": {
                    "billing_issues_detected_at": null,
                    "expires_date": "2029-05-26T05:05:04Z",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-09-11T13:45:07Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "normal",
                    "purchase_date": "2022-09-11T13:45:06Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("APTV") != -1) {
    obj = {
        "request_date": "2022-09-11T13:46:46Z",
        "request_date_ms": 1662904006346,
        "subscriber": {
            "entitlements": {
                "pro": {
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "product_identifier": "com.kimen.aptvpro.lifetime",
                    "purchase_date": "2022-09-11T13:45:06Z"
                }
            },
            "first_seen": "2022-09-11T13:44:09Z",
            "last_seen": "2022-09-11T13:44:09Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:abad66a1510e4f37a529a7c26f893b97",
            "original_application_version": "70",
            "original_purchase_date": "2022-09-11T13:29:47Z",
            "other_purchases": {},
            "subscriptions": {
                "com.kimen.aptvpro.lifetime": {
                    "billing_issues_detected_at": null,
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-09-11T13:45:07Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "normal",
                    "purchase_date": "2022-09-11T13:45:06Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("Tangerine") != -1) {
    obj = {
        "request_date_ms": 1668158979333,
        "request_date": "2022-11-11T09:29:39Z",
        "subscriber": {
            "non_subscriptions": {},
            "first_seen": "2022-11-11T09:29:05Z",
            "original_application_version": "700",
            "other_purchases": {},
            "management_url": null,
            "subscriptions": {
                "PremiumMonthly": {
                    "billing_issues_detected_at": null,
                    "expires_date": "2099-10-26T05:05:04Z",
                    "is_sandbox": false,
                    "original_purchase_date": "2022-09-09T05:05:04Z",
                    "period_type": "normal",
                    "purchase_date": "2023-04-09T05:05:04Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            },
            "entitlements": {
                "Premium": {
                    "expires_date": "2099-10-26T05:05:04Z",
                    "product_identifier": "PremiumMonthly",
                    "purchase_date": "2022-09-09T05:05:04Z"
                }
            },
            "original_purchase_date": "2022-11-11T09:27:56Z",
            "original_app_user_id": "$RCAnonymousID:cb39ca0ed5744a7e83b0626d36bfb517",
            "last_seen": "2022-11-11T09:29:05Z"
        }
    };
}
;
if (ua.indexOf("Endel") != -1) {
    obj = {
        "request_date": "2022-11-15T08:29:07Z",
        "request_date_ms": 1668500947922,
        "subscriber": {
            "entitlements": {
                "pro": {
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "product_identifier": "lifetime",
                    "purchase_date": "2022-11-15T08:28:32Z"
                }
            },
            "first_seen": "2022-11-15T08:20:47Z",
            "last_seen": "2022-11-15T08:20:49Z",
            "management_url": "https://apps.apple.com/account/subscriptions",
            "non_subscriptions": {},
            "original_app_user_id": "$RCAnonymousID:d34797c782084a5083779524e819c770",
            "original_application_version": "1000002461",
            "original_purchase_date": "2022-11-15T07:53:36Z",
            "other_purchases": {},
            "subscriptions": {
                "lifetime": {
                    "auto_resume_date": null,
                    "billing_issues_detected_at": null,
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2022-11-15T08:28:33Z",
                    "ownership_type": "PURCHASED",
                    "period_type": "normal",
                    "purchase_date": "2022-11-15T08:28:32Z",
                    "refunded_at": null,
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };
}
;
if (ua.indexOf("GoodThing") != -1) {
    obj = {
        "request_date_ms": 1668519721073,
        "request_date": "2022-11-15T13:42:01Z",
        "subscriber": {
            "non_subscriptions": {},
            "first_seen": "2022-11-15T13:37:45Z",
            "original_application_version": "12",
            "other_purchases": {},
            "management_url": "https://apps.apple.com/account/subscriptions",
            "subscriptions": {
                "goodhappens_basic_forever": {
                    "original_purchase_date": "2022-11-15T13:41:31Z",
                    "expires_date": "2099-11-22T13:41:30Z",
                    "is_sandbox": false,
                    "refunded_at": null,
                    "unsubscribe_detected_at": null,
                    "grace_period_expires_date": null,
                    "period_type": "trial",
                    "purchase_date": "2022-11-15T13:41:30Z",
                    "billing_issues_detected_at": null,
                    "ownership_type": "PURCHASED",
                    "store": "app_store",
                    "auto_resume_date": null
                }
            },
            "entitlements": {
                "pro": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-11-15T13:41:30Z",
                    "product_identifier": "goodhappens_basic_forever",
                    "expires_date": "2099-11-22T13:41:30Z"
                }
            },
            "original_purchase_date": "2022-11-15T13:36:14Z",
            "original_app_user_id": "$RCAnonymousID:634bd7bc33e2403d90bdaf9bd4f5ef69",
            "last_seen": "2022-11-15T13:37:45Z"
        }
    };
}
;
if (ua.indexOf("SleepDown") != -1) {
    obj = {
        "request_date_ms": 1668519721073,
        "request_date": "2022-11-15T13:42:01Z",
        "subscriber": {
            "last_seen": "2022-11-15T13:37:45Z",
            "first_seen": "2022-11-15T13:37:45Z",
            "original_application_version": "12",
            "other_purchases": {},
            "management_url": "https://apps.apple.com/account/subscriptions",
            "subscriptions": {
                "pro_standard_0926": {
                    "unsubscribe_detected_at": null,
                    "expires_date": null,
                    "is_sandbox": false,
                    "refunded_at": null,
                    "auto_resume_date": null,
                    "grace_period_expires_date": null,
                    "period_type": "Pro",
                    "purchase_date": "2022-11-15T13:41:30Z",
                    "billing_issues_detected_at": null,
                    "ownership_type": "PURCHASED",
                    "store": "app_store",
                    "original_purchase_date": "2022-11-15T13:41:31Z"
                }
            },
            "entitlements": {
                "Pro": {
                    "expires_date": null,
                    "purchase_date": "2022-11-15T13:41:30Z",
                    "product_identifier": "pro_standard_0926",
                    "grace_period_expires_date": null
                }
            },
            "original_purchase_date": "2022-11-15T13:36:14Z",
            "original_app_user_id": "$RCAnonymousID:634bd7bc33e2403d90bdaf9bd4f5ef69",
            "non_subscriptions": {}
        }
    };
}
;
if (ua.indexOf("andyworks-calculator") != -1) {
    obj = {
        "request_date_ms": 1668658838144,
        "request_date": "2022-11-17T04:20:38Z",
        "subscriber": {
            "non_subscriptions": {},
            "first_seen": "2022-11-17T04:18:00Z",
            "original_application_version": "0",
            "other_purchases": {},
            "management_url": "https://apps.apple.com/account/subscriptions",
            "subscriptions": {
                "com.andyworks.weather.yearlyPatron": {
                    "original_purchase_date": "2022-11-17T04:20:11Z",
                    "expires_date": "2117-12-18T04:20:10Z",
                    "is_sandbox": false,
                    "refunded_at": null,
                    "unsubscribe_detected_at": null,
                    "grace_period_expires_date": null,
                    "period_type": "false",
                    "purchase_date": "2022-11-17T04:20:10Z",
                    "billing_issues_detected_at": null,
                    "ownership_type": "PURCHASED",
                    "store": "app_store",
                    "auto_resume_date": null
                }
            },
            "entitlements": {
                "patron": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-11-17T04:20:10Z",
                    "product_identifier": "com.andyworks.weather.yearlyPatron",
                    "expires_date": "2117-12-18T04:20:10Z"
                },
                "skinAndy": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-11-17T04:20:10Z",
                    "product_identifier": "com.andyworks.weather.yearlyPatron",
                    "expires_date": "2117-12-18T04:20:10Z"
                },
                "skinMonster": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-11-17T04:20:10Z",
                    "product_identifier": "com.andyworks.weather.yearlyPatron",
                    "expires_date": "2117-12-18T04:20:10Z"
                },
                "skinCedar": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-11-17T04:20:10Z",
                    "product_identifier": "com.andyworks.weather.yearlyPatron",
                    "expires_date": "2117-12-18T04:20:10Z"
                },
                "skinKarat": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-11-17T04:20:10Z",
                    "product_identifier": "com.andyworks.weather.yearlyPatron",
                    "expires_date": "2117-12-18T04:20:10Z"
                },
                "skinOpal": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-11-17T04:20:10Z",
                    "product_identifier": "com.andyworks.weather.yearlyPatron",
                    "expires_date": "2117-12-18T04:20:10Z"
                },
                "skinPresstube": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-11-17T04:20:10Z",
                    "product_identifier": "com.andyworks.weather.yearlyPatron",
                    "expires_date": "2022-11-24T04:20:10Z"
                },
                "skinChroma": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-11-17T04:20:10Z",
                    "product_identifier": "com.andyworks.weather.yearlyPatron",
                    "expires_date": "2117-12-18T04:20:10Z"
                }
            },
            "original_purchase_date": "2022-09-28T06:34:53Z",
            "original_app_user_id": "3D04B7A9-A5AF-44B9-9E0D-BCFF427C36A5",
            "last_seen": "2022-11-17T04:18:00Z"
        }
    };
}
;
if (ua.indexOf("simple") != -1) {
    obj = {
        "request_date_ms": 1668658838144,
        "request_date": "2022-11-17T04:20:38Z",
        "subscriber": {
            "non_subscriptions": {},
            "first_seen": "2022-11-17T04:18:00Z",
            "original_application_version": "0",
            "other_purchases": {},
            "management_url": "https://apps.apple.com/account/subscriptions",
            "subscriptions": {
                "com.andyworks.weather.yearlyPatron": {
                    "original_purchase_date": "2022-11-17T04:20:11Z",
                    "expires_date": "2117-12-18T04:20:10Z",
                    "is_sandbox": false,
                    "refunded_at": null,
                    "unsubscribe_detected_at": null,
                    "grace_period_expires_date": null,
                    "period_type": "false",
                    "purchase_date": "2022-11-17T04:20:10Z",
                    "billing_issues_detected_at": null,
                    "ownership_type": "PURCHASED",
                    "store": "app_store",
                    "auto_resume_date": null
                }
            },
            "entitlements": {
                "patron": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-11-17T04:20:10Z",
                    "product_identifier": "com.andyworks.weather.yearlyPatron",
                    "expires_date": "2117-12-18T04:20:10Z"
                },
                "skinAndy": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-11-17T04:20:10Z",
                    "product_identifier": "com.andyworks.weather.yearlyPatron",
                    "expires_date": "2117-12-18T04:20:10Z"
                },
                "skinMonster": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-11-17T04:20:10Z",
                    "product_identifier": "com.andyworks.weather.yearlyPatron",
                    "expires_date": "2117-12-18T04:20:10Z"
                },
                "skinCedar": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-11-17T04:20:10Z",
                    "product_identifier": "com.andyworks.weather.yearlyPatron",
                    "expires_date": "2117-12-18T04:20:10Z"
                },
                "skinKarat": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-11-17T04:20:10Z",
                    "product_identifier": "com.andyworks.weather.yearlyPatron",
                    "expires_date": "2117-12-18T04:20:10Z"
                },
                "skinOpal": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-11-17T04:20:10Z",
                    "product_identifier": "com.andyworks.weather.yearlyPatron",
                    "expires_date": "2117-12-18T04:20:10Z"
                },
                "skinPresstube": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-11-17T04:20:10Z",
                    "product_identifier": "com.andyworks.weather.yearlyPatron",
                    "expires_date": "2117-12-18T04:20:10Z"
                },
                "skinChroma": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-11-17T04:20:10Z",
                    "product_identifier": "com.andyworks.weather.yearlyPatron",
                    "expires_date": "2117-12-18T04:20:10Z"
                }
            },
            "original_purchase_date": "2022-09-28T06:34:53Z",
            "original_app_user_id": "3D04B7A9-A5AF-44B9-9E0D-BCFF427C36A5",
            "last_seen": "2022-11-17T04:18:00Z"
        }
    };
}
;
if (ua.indexOf("NotePlan 3") != -1) {
    obj = {
        "request_date_ms": 1668519721073,
        "request_date": "2022-11-15T13:42:01Z",
        "subscriber": {
            "last_seen": "2022-11-15T13:37:45Z",
            "first_seen": "2022-11-15T13:37:45Z",
            "original_application_version": "12",
            "other_purchases": {},
            "management_url": "https://apps.apple.com/account/subscriptions",
            "subscriptions": {
                "co.noteplan.subscription.personal.annual3": {
                    "unsubscribe_detected_at": null,
                    "expires_date": null,
                    "is_sandbox": false,
                    "refunded_at": null,
                    "auto_resume_date": null,
                    "grace_period_expires_date": null,
                    "period_type": "Pro",
                    "purchase_date": "2022-11-15T13:41:30Z",
                    "billing_issues_detected_at": null,
                    "ownership_type": "PURCHASED",
                    "store": "app_store",
                    "original_purchase_date": "2022-11-15T13:41:31Z"
                }
            },
            "entitlements": {
                "Pro": {
                    "expires_date": null,
                    "purchase_date": "2022-11-15T13:41:30Z",
                    "product_identifier": "co.noteplan.subscription.personal.annual3",
                    "grace_period_expires_date": null
                }
            },
            "original_purchase_date": "2022-11-15T13:36:14Z",
            "original_app_user_id": "$RCAnonymousID:634bd7bc33e2403d90bdaf9bd4f5ef69",
            "non_subscriptions": {}
        }
    };
}
;
if (ua.indexOf("WidgetSmith") != -1) {
    obj = {
        "request_date_ms": 1668519721073,
        "request_date": "2022-11-15T13:42:01Z",
        "subscriber": {
            "last_seen": "2022-11-15T13:37:45Z",
            "first_seen": "2022-11-15T13:37:45Z",
            "original_application_version": "12",
            "other_purchases": {},
            "management_url": "https://apps.apple.com/account/subscriptions",
            "subscriptions": {
                "PremiumAnnualWidget": {
                    "unsubscribe_detected_at": null,
                    "expires_date": "2099-11-15T13:37:45Z",
                    "is_sandbox": false,
                    "refunded_at": null,
                    "auto_resume_date": null,
                    "grace_period_expires_date": null,
                    "period_type": "premium",
                    "purchase_date": "2022-11-15T13:41:30Z",
                    "billing_issues_detected_at": null,
                    "ownership_type": "PURCHASED",
                    "store": "app_store",
                    "original_purchase_date": "2022-11-15T13:41:31Z"
                }
            },
            "entitlements": {
                "Premium": {
                    "expires_date": "2099-11-15T13:37:45Z",
                    "purchase_date": "2022-11-15T13:41:30Z",
                    "product_identifier": "PremiumAnnualWidget",
                    "grace_period_expires_date": null
                }
            },
            "original_purchase_date": "2022-11-15T13:36:14Z",
            "original_app_user_id": "$RCAnonymousID:634bd7bc33e2403d90bdaf9bd4f5ef69",
            "non_subscriptions": {}
        }
    };
}
;
if (ua.indexOf("Watchsmith") != -1) {
    obj = {
        "request_date_ms": 1668519721073,
        "request_date": "2022-11-15T13:42:01Z",
        "subscriber": {
            "last_seen": "2022-11-15T13:37:45Z",
            "first_seen": "2022-11-15T13:37:45Z",
            "original_application_version": "12",
            "other_purchases": {},
            "management_url": "https://apps.apple.com/account/subscriptions",
            "subscriptions": {
                "PremiumAnnual": {
                    "unsubscribe_detected_at": null,
                    "expires_date": "2099-11-15T13:37:45Z",
                    "is_sandbox": false,
                    "refunded_at": null,
                    "auto_resume_date": null,
                    "grace_period_expires_date": null,
                    "period_type": "premium",
                    "purchase_date": "2022-11-15T13:41:30Z",
                    "billing_issues_detected_at": null,
                    "ownership_type": "PURCHASED",
                    "store": "app_store",
                    "original_purchase_date": "2022-11-15T13:41:31Z"
                }
            },
            "entitlements": {
                "Premium": {
                    "expires_date": "2099-11-15T13:37:45Z",
                    "purchase_date": "2022-11-15T13:41:30Z",
                    "product_identifier": "PremiumAnnual",
                    "grace_period_expires_date": null
                }
            },
            "original_purchase_date": "2022-11-15T13:36:14Z",
            "original_app_user_id": "$RCAnonymousID:634bd7bc33e2403d90bdaf9bd4f5ef69",
            "non_subscriptions": {}
        }
    };
}
;
if (ua.indexOf("PastePal") != -1) {
    obj = {
        "request_date_ms": 1662599120248,
        "request_date": "2022-09-08T01:05:20Z",
        "subscriber": {
            "last_seen": "2022-09-08T01:04:03Z",
            "first_seen": "2022-09-08T01:04:03Z",
            "original_application_version": "8",
            "other_purchases": {},
            "management_url": "https://apps.apple.com/account/subscriptions",
            "subscriptions": {
                "com.onmyway133.PastePal.pro": {
                    "is_sandbox": false,
                    "ownership_type": "PURCHASED",
                    "billing_issues_detected_at": null,
                    "period_type": "default",
                    "expires_date": "2099-12-18T01:04:17Z",
                    "grace_period_expires_date": null,
                    "unsubscribe_detected_at": null,
                    "original_purchase_date": "2022-09-08T01:04:18Z",
                    "purchase_date": "2022-09-08T01:04:17Z",
                    "store": "app_store"
                }
            },
            "entitlements": {
                "premium": {
                    "expires_date": "2099-12-18T01:04:17Z",
                    "purchase_date": "2022-09-08T01:04:17Z",
                    "product_identifier": "com.onmyway133.PastePal.pro",
                    "grace_period_expires_date": null
                }
            },
            "original_purchase_date": "2022-09-07T13:05:43Z",
            "original_app_user_id": "$RCAnonymousID:Eric",
            "non_subscriptions": {}
        }
    };
}

$done({ body: JSON["stringify"](obj) })