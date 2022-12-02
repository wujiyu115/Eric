
var request_url = $request.url;
var request_body = $response.body;
var request_method = $request.method;
const _serv = 'Serv';
const _ap = '/a.p';
const music_pay = '/music.pay';
const v2vip = '/vip/v2/user/vip';
const uservip = '/vip/enc/user/vip';
const v2theme = '/vip/v2/theme';
if (request_url.indexOf(_serv) != -1 && request_method == 'GET') {
    var data = {};
    data.body = '{}';
    $done(data);
}
if (request_url.indexOf(_ap) != -1 && request_method == 'POST') {
    var request_body = $response.body['replace'](/"playright":\d+/g, '"playright":1')['replace'](/"downright":\d+/g, '"downright":1')['replace'](/"policytype":\d+/g, '"policytype":3')['replace'](/"policy":\d+/g, '"policy":5');
    var data = {};
    data.body = request_body;
    $done(data);
} else if (request_url.indexOf(_ap) != -1 && request_url.indexOf('getvip') != -1) {
    var data = JSON.parse(request_body);
    var getvip = {};
    getvip.end = 32495443200;
    getvip.bought_vip = 1;
    getvip.type = 1;
    getvip.period = 31;
    getvip.bought_vip_end = 32495443200;
    data.packs = getvip;
    request_body = JSON.stringify(data);
    var b = {};
    b.body = request_body;
    $done(b);
} else if (request_url.indexOf(_ap) != -1 && request_url.indexOf('advertright') != -1) {
    $done({});
}
if (request_url.indexOf(uservip) != -1 && request_method == 'GET') {
    var b = {};
    const d = 'Vo4m6X2hTph/vfpPmau8PTT0sFN6JCgzxSLVH/u3sbEt7VniYsVHbRFgOgN+Uvs39rAI7R3C5HVpaSj8tr8U8dLYwYdDCjMILuUorh3z0BiQToiWxudHkcASIPHNrmZHZYC/yv3DP4b89hbzfqU5UUDUqaZpEBZr76sDF2wNPmYjUEFSVCMGyTl1F6j1DBmKJ1Tik0YuG/2UBa/Ilz12a1KneXsNs5x5EE41bXDke7EygIB3I+6SoITZXOLFAFQFZujdI0GzClNglDKtclpUxpjN3uVeJxHLU40FTwNWo3ZDNv8KSdZpYZ5BDEOCyZkifmHlf1wnocX2zTr2xRAM6JhAD2WaSSNQQVJUI5lv72QNZSN43Pj/qdzatHQP4Pp/H1YxyP36rv3qBcnnJy/55YouIczRc3eJjXExRgo54qdyTYRMYoS9GzNn/edR3hSNnMn9PnElBCfZhkL0R5kZ9JBFCM3vNOy7Cnp6RVyAG0GFHv/g2q1yqkJxibyDro5nlnnvHjhZrsOvSvTXI1BBUlQjGoRqqCTDUvHLoiNwWMoKKfxtswWQiXjoQ6mL5dazxjUsbsHzC1N8YNMVtzf8gBryr3nMWS44wyUpi1/0WhGTRW1wsCllO1DB24+ibTFH/yftWN+/apM9vbQAkc/J+aFy/01plK7rsGNwWYYKG0sr6CS8dGQzy0On6aFo07hiU+wjUEFSVCOf/wKzzX5Cn/OLMKeVa1BPDxV5tm39vCrsxIG6T29VHWx8ck93S/nXCm2dHfojuLySZKJ50B1FaN5uFIY+LA1RbO/0sL+CoSJhoNOLibzt75c5dleW+lbwxLAAdBh5AFq4Z1Uj8bPjm5mHcGWQuBAyZIO+ie8wP4yvWwQFf1ENJiNQQVJUIzwCo22cpAtoAzYZWm3XFPfSlov4G15JGaaHL2X5FG5BTeUwwbBiQfwUpcb6oT8dbIKh2SsUZCeJZW43lLI0UIo9u3y1+P4GMtOKEZ7Sx0aQ3ewknthU2tpL0gnykFtiEtKBxcfHjJEen158zVXrbxxC0W35SmaYOOwgAmEMfxwHI1BBUlQjhVUHnBabnJcnmXCICcyUBglrZkXcNLwg91p4889vKFTLlzROHTt20UzjfKWsNK3U8pYgKYXPbQtSzIuRheEEQDFhLvEhIGKaB6yDoacDLJZ0jgFRIKKFBkbK0VE4nIABi1qgQOXvq1sG4QeupjfEWYqMX8EyyqPHrsDiCltAF1wjUEFSVCNybeUusnxJF2zswj8xQtfPiwfDj3TwKWxKXCmkheqHy7/0Qpyc84xWvq+YXktsU97wUZLHrgJmARudJmQNEwAweIdHMafcwreBy731z6kGLojy5TLgTN7XSm5Ar+hgOW+1ZwkWLyrVvaCdO/8/zdYl1w/PQUCs6dw0ThIeahwjpQ==';
    b.body = d;
    $done(b);
}
if (request_url.indexOf(v2vip) != -1 && request_url.indexOf('op=ui') != -1) {
    var body = JSON.parse(request_body);
    var v = {};
    v.vipIcon = 'https://image.kuwo.cn/fe/f2d09ac0-b959-404f-86fa-dc65c715c0e96.png';
    v.iconJumpUrl = 'http://vip1.kuwo.cn/vip/vue/anPay/pay/index.html?pageType=avip&MBOX_WEBCLOSE=1&FULLHASARROW=1';
    v.growthValue = '21600';
    v.vipTag = 'VIP6';
    v.vipOverSeasExpire = '0';
    v.time = '1659582730304';
    v.goSvipPage = '1';
    v.isNewUser = '1';
    v.vipmIcon = 'https://image.kuwo.cn/fe/34ad47f8-da7f-43e4-abdc-e6c995666368yyb.png';
    v.svipIcon = 'https://image.kuwo.cn/fe/f2d09ac0-b959-404f-86fa-dc65c715c0e96.png';
    v.vipmExpire = '32495443200000';
    v.biedSong = '0';
    v.luxuryIcon = 'https://image.kuwo.cn/fe/2fae68ff-de2d-4473-bf28-8efc29e44968vip.png';
    v.userType = '3';
    v.isYearUser = '2';
    v.vip3Expire = '0';
    v.experienceExpire = '0';
    v.luxAutoPayUser = '2';
    v.biedAlbum = '1';
    v.vipLuxuryExpire = '32495443200000';
    v.vipmAutoPayUser = '2';
    v.svipAutoPayUser = '2';
    v.vipExpire = '32495443200000';
    v.svipExpire = '32495443200000';
    body.data = v;
    request_body = JSON.stringify(body);
    var b = {};
    b.body = request_body;
    $done(b);
} else if (request_url.indexOf(v2vip) != -1 && request_url.indexOf('jsonpcallback') != -1) {
    $done({});
}
if (request_url.indexOf(music_pay) != -1 && request_method == 'POST') {
    if (request_body.indexOf('audio') != -1) {
        var body = JSON.parse(request_body);
        var id = body.songs[0]['id'];
        var pid = body.songs[0]['audio'][0]['pid'];
        var price = body.songs[0]['audio'][0]['price'];
        var policy = body.songs[0]['audio'][0]['policy'];
        var policy_1 = policy + '_1';
        var length = body.songs[0]['audio']['length'];
        for (var idx = 0; idx < length; idx++) {
            body.songs[0]['audio'][idx]['st'] = 0;
        }
        var info = body.songs[0];
        var user = {};
        user.pid = pid;
        user.type = policy;
        user.name = policy_1;
        user.categray = policy_1;
        user.id = id;
        user.order = 375787919;
        user.final = [];
        user.buy = 1657425321;
        user.begin = 1657425321;
        user.end = 4180305321;
        user.CurEnd = 0;
        user.playCnt = 0;
        user.playUpper = 300;
        user.downCnt = 0;
        user.downUpper = 300;
        user.playVideoCnt = 0;
        user.playVideoUpper = 3000;
        user.downVideoCnt = 0;
        user.downVideoUpper = 3000;
        user.price = price;
        user.period = 1000;
        user.feetype = 0;
        user.info = info;
        body.user = [user];
        var b = {};
        b.body = JSON.stringify(body);
        $done(b);
    } else {
        $done({});
    }
} else if (request_url.indexOf(music_pay) != -1 && request_method == 'GET') {
    $done({});
}
if (request_url.indexOf(v2theme) != -1 && request_url.indexOf('op=gd') != -1) {
    var body = JSON.parse(request_body);
    body.data['needBieds'] = null;
    var b = {};
    b.body = JSON.stringify(body);
    $done(b);
};