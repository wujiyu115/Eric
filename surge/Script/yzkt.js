let body = $response["body"]["replace"](/\"is_free":\d/g, "\"is_free\":1")["replace"](/\"unlock":\d/g, "\"unlock\":1");
$done({ body });
