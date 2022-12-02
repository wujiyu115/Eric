let obj = JSON["parse"]($response["body"]);
obj = {
    "data": {
        "processAppleReceipt": {
            "error": 0,
            "subscription": {
                "status": "active",
                "expirationDate": "2099-11-16T12:49:50.000Z",
                "originalTransactionId": "20000937805019",
                "productId": "com.gingerlabs.Notability.premium_subscription",
                "originalPurchaseDate": "2021-11-02T11:49:50.000Z",
                "refundedDate": null,
                "user": null,
                "tier": "premium",
                "overDeviceLimit": false,
                "__typename": "AppStoreSubscription",
                "refundedReason": null
            },
            "__typename": "SubscriptionResult"
        }
    }
};
$done({
    body: JSON["stringify"](obj)
})