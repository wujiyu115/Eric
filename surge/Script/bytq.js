var modifiedHeaders = $request["headers"];
modifiedHeaders["X-RevenueCat-ETag"] = "";
$done({
    headers: modifiedHeaders
})