let obj = JSON["parse"]($response["body"]);
obj["products"] = [{
    "vendor": "apple",
    "product": "DuetAirAnnual",
    "subscriptionId": 293174,
    "purchaseDate": "2022-11-15T12:37:52Z",
    "cancelled": false,
    "expiresDate": "2099-11-22T12:37:46Z",
    "inTrial": false
}];
$done({
    body: JSON["stringify"](obj)
})