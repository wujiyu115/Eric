let obj = JSON.parse($response.body);
obj.subscription = [{
    "originalTransactionID": 550001242190807,
    "productID": "droom.sleepIfUCanFree.premium.yearly01.4",
    "willAutoRenew": false,
    "isActive": true,
    "expiresDateMs": 4669109147000,
    "periodType": "TRIAL",
    "latestPurchaseDateMs": 1668504347000,
    "originalPurchaseDateMs": 1668504348000
}];
$done({ body: JSON.stringify(obj) });
