

/***
flightradar24高级解锁--Eric

[rewrite_local]
^https://mobile.flightradar24.com/mobile/(user-session|subscribe) url script-response-body https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/flightradar24.js

[mitm] 
hostname = %APPEND% mobile.flightradar24.com

***/

let obj = JSON["parse"]($response["body"]);
obj = {
    "status": "success",
    "userData": {
        "oAuthId": null,
        "idUser": 10350270,
        "dateExpires": 4667755225,
        "subscriptionKey": "wNxX9JZxf9BafW5nXRHZQ-BMCAnO5b68Vzl9MxETIgQ",
        "countryCode": null,
        "dateLastLogin": "2022-10-23 16:18:03",
        "oAuthType": null,
        "isActive": true,
        "hasConsented": true,
        "localeCode": "en_GB",
        "name": "Eric",
        "typeSource": "facebook",
        "subscriptions": {
            "0": {
                "dateExpires": 4667755225,
                "sku": "subscription.premium.gold.annual",
                "originalBillingPeriod": 365,
                "typePlatform": "ios",
                "typeStatus": "active",
                "name": "Gold",
                "typeSubscription": "annual"
            }
        },
        "tokenLogin": "wNxX9JZxf9BafW5nXRHZQ-KOai5no04AbGbKvy_aKNeIkBsVAp6FCaVtPbYtzj8GsyWcyEujdbriyR7qtqsimOpuMZYm9Mk0mUUbCPBDyzB_vMoHN8AlxQzYVjfVlIY-WVaCWA_CPtcwy3JxEDnwH6oG7NSmVqxu0yeO9lw4l5fEvJ172p35HDlatXJaj4EzxfaqeZbtNkWGgYOS63rcV7w7uraAr0I0dahwZCXEXkqDzQeeMLk1NF2XnLuq3VoVFC7k_isOQL14ORr4D_Ga_NoxAY8rMXnLHiyvLRkYt-mkc10MX4lWipC7S7R9T95XwBZiDQkYS74cBP1TYxNkhgHqhiy6SDkzeVnGNPVxQ9FmE7iAnRsT4Tt2ACrsHkA4BPbA8Npb8_Up2ZNtyZrrZPC3OdCv6dUehoRYoZvWlCmcQaFlfoZvPwZ8FQI7qiX_",
        "accessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmbGlnaHRyYWRhcjI0LmNvbSIsImV4cCI6MTY2OTEzNDAzMCwiaWF0IjoxNjY2NTQyMDMwLCJlbWFpbCI6IjM5ODIwMTAzNEBxcS5jb20iLCJ1c2VySWQiOjEwMzUwMjcwLCJrZXlTZXNzaW9uIjoiYzY0OGQ4MWQyZThlODRiMzgxMzJmYmQ2OWY2NDZjMjk5NjY2ZGFjYzQxYmEyZGIxOWEwZTNjNmU4ZGVhOTI1MSIsInNsIjoiRyIsInBrIjpudWxsfQ.sLwJ9xqR4JKb-cRMd6dknOfhRuqftfsK1ezlgGlhbWQ",
        "publicKey": null,
        "identity": "Eric888@qq.com",
        "isLoggedin": true,
        "accountType": "subscriber",
        "isAnonymousAccount": false,
        "hasPassword": false,
        "features": {
            "app.ios": "enabled",
            "map.info.flight.ems.mach": "enabled",
            "map.layer.ndb.alt.high": "enabled",
            "map.filters.max": 25,
            "user.fleets.max.aircraft": 1000,
            "map.layer.atc": "enabled",
            "map.info.flight.ground-speed": "enabled",
            "map.view.list": "enabled",
            "map.info.flight.track": "enabled",
            "map.info.flight.ems.tas": "enabled",
            "map.layer.waypoints": "enabled",
            "map.layer.weather.auradar": "enabled",
            "map.info.flight.airspace": "enabled",
            "map.info.aircraft.type": "enabled",
            "history.playback.flight.days": 365,
            "history.playback.global.days": 365,
            "map.data.delaystats": "enabled",
            "user.fleets.max": 3,
            "map.data.flarm": "enabled",
            "map.info.flight.ems.ias": "enabled",
            "map.layer.weather.radar.global": "enabled",
            "support.platform": "Limited",
            "map.view.3d.basic": 3,
            "map.info.aircraft.msn": "enabled",
            "map.data.satellite": "enabled",
            "support.level": "Yes",
            "map.info.flight.ems.wind": "enabled",
            "map.layer.ndb.charts": "enabled",
            "map.view.radar": "enabled",
            "history.flight.days": 365,
            "map.view.multi": "enabled",
            "map.info.aircraft.code": "enabled",
            "map.widgets.last_clicked_flights": "enabled",
            "map.info.flight.calibrated-altitude": "enabled",
            "user.alerts.max": 25,
            "map.layer.tracks.oceanic": "enabled",
            "map.info.airport.arrivals": "enabled",
            "map.info.flight.ems.oat": "enabled",
            "map.view.delay": "enabled",
            "map.layer.weather.naradar": "enabled",
            "map.widgets.bookmarks.max": 25,
            "user.sessions.max": 3,
            "map.info.airport.departures": "enabled",
            "map.info.aircraft": "full",
            "map.data.ads-b": "enabled",
            "history.playback.days": 365,
            "map.data.mlat": "enabled",
            "map.view.3d": "enabled",
            "map.info.flight.position": "enabled",
            "adverts": "disabled",
            "map.view.fullscreen": "enabled",
            "map.layer.ndb.alt.low": "enabled",
            "map.layer.weather.satellite": "enabled",
            "map.layer.weather.volcano": "enabled",
            "app.android": "enabled",
            "map.data.faa": "enabled",
            "user.users": 1,
            "usage.rights": "Private",
            "map.search": "enabled",
            "map.timeout.mins": -1,
            "map.info.flight.squawk": "enabled",
            "map.layer.weather": "enabled",
            "map.info.flight": "full",
            "history.aircraft.days": 365,
            "map.info.aircraft.registration": "enabled",
            "map.tracking.live": "enabled",
            "map.layer.navdata": "enabled",
            "history.flight.kml": 25,
            "map.info.flight.ems": "enabled",
            "map.info.flight.vertical-speed": "enabled",
            "map.widgets.bookmarks": "enabled",
            "map.labels.rows": 4,
            "map.status.flight": "enabled",
            "map.info.aircraft.age": "enabled",
            "map.info.flight.ems.alt.gps": "enabled",
            "map.layer.ndb": "enabled",
            "map.info.airport.onground.hours": 720,
            "map.layer.vor": "enabled",
            "map.view.fleet.onground": 1,
            "map.layer.weather.radar": "enabled",
            "user.bookmarks.max": 25
        },
        "oAuth": null
    },
    "transactions": {
        "20001133865890": {
            "status": "valid",
            "match": "self",
            "expires": 4667755225000,
            "started": 1666542025000
        }
    },
    "message": "Subscription has been successfully created",
    "msg": "Subscription has been successfully created",
    "response_code": 100,
    "success": true,
    "token": "c648d81d2e8e84b38132fbd69f646c299666dacc41ba2db19a0e3c6e8dea9251",
    "responseCode": 100,
    "accessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmbGlnaHRyYWRhcjI0LmNvbSIsImV4cCI6MTY2OTEzNDAzMCwiaWF0IjoxNjY2NTQyMDMwLCJlbWFpbCI6IjM5ODIwMTAzNEBxcS5jb20iLCJ1c2VySWQiOjEwMzUwMjcwLCJrZXlTZXNzaW9uIjoiYzY0OGQ4MWQyZThlODRiMzgxMzJmYmQ2OWY2NDZjMjk5NjY2ZGFjYzQxYmEyZGIxOWEwZTNjNmU4ZGVhOTI1MSIsInNsIjoiRyIsInBrIjpudWxsfQ.sLwJ9xqR4JKb-cRMd6dknOfhRuqftfsK1ezlgGlhbWQ"
};
$done({
    body: JSON["stringify"](obj)
})
