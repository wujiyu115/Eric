let obj = JSON["parse"]($response["body"]);
obj["subscription"] = {
    "promo_type": "DEFAULT",
    "period": "NOPERIOD",
    "store_trial": true,
    "time_left": 4685854580,
    "price_id": "unknown",
    "valid_until": 1669710512,
    "type": "ACTIVE",
    "trial_type": "CALENDAR_BASED",
    "cancel_at_period_end": true,
    "multiple_subscriptions": true,
    "store": "APP_STORE",
    "trial_canceled": true
};
$done({
    body: JSON["stringify"](obj)
})