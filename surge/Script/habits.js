let obj = JSON["parse"]($response["body"]);
obj = {
    "latestSubscriptionReceipts": [{
        "productId": "com.andyworks.streaks.yearlyPatron",
        "autoRenewProductId": "com.andyworks.streaks.yearlyPatron",
        "authToken": "5B4F4BF1-5B30-4736-B0FF-C564A424DB1A",
        "purchaseDateMs": 1668664580000,
        "autoRenewStatus": "1",
        "originalTransactionId": "RevenueCat",
        "sourceBundleId": "com.andyworks.streaks",
        "expiresDateMs": 4669269380000,
        "isInBillingRetryPeriod": false,
        "cancellationDateMs": null,
        "isOriginalBeliever": false,
        "isTrialPeriod": false,
        "originalPurchaseDateMs": 1668664581000,
        "groupId": "RevenueCat",
        "expirationIntent": "5",
        "lastRefreshDateMs": 1668664601809
    }]
};
$done({
    body: JSON["stringify"](obj)
})