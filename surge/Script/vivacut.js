let obj = JSON["parse"]($response["body"]);
obj["data"] = {
    "hasIntroOfferProds": [],
    "list": [{
            "autoRenewProductId": "VivaCut_Yearly_Pro_9",
            "orderId": "20001147794139",
            "isTrialPeriod": true,
            "endTime": 4668834727000,
            "productId": "VivaCut_Yearly_Pro_9",
            "productType": 3,
            "startTime": 1668575527000,
            "orderStatus": 1,
            "autoRenewStatus": true,
            "originalOrderId": "20001147794139",
            "sign": "8a3cfa3e046296a19a2611d48e04fedc"
        }],
    "hasFreedTrialProds": ["VivaCut_Yearly_Pro_9"],
    "systemDate": 1668576243240,
    "hasPurchasedProds": ["VivaCut_Yearly_Pro_9"]
};
$done({ body: JSON["stringify"](obj) });