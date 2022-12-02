let body = $response.body.replace(/\"vip_endtime\":0/, "\"vip_endtime\":2698587480\"")
    .replace(/\"is_vip\":0/, "\"is_vip\":1")
    .replace(/\"is_vip_lesson\":1/g, "\"is_vip_lesson\":\"0\"")
    .replace(/\"vip_level\":\"free"/, "\"vip_level\":\"vip\"")
    .replace(/\"member_vip\":\"普通用户"/, "\"member_vip\":\"高级用户\"")
    .replace(/\"meditation_total_days\":\0/, "\"meditation_total_days\":\"9999\"");
$done({
    body
})