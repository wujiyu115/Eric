const path1 = "/verifyReceipt";
const path2 = "/firstrunV2";
let obj = JSON["parse"]($response["body"]);
if ($request["url"]["indexOf"](path1) != -1) {
    obj = {
        "environment": "Production",
        "receipt": {
            "receipt_type": "Production",
            "adam_id": 1173365557,
            "app_item_id": 1173365557,
            "bundle_id": "com.CalculatorForiPad.InternetRocks",
            "application_version": "3.22.0.1001",
            "download_id": 22066688155868,
            "version_external_identifier": 852485684,
            "receipt_creation_date": "2022-10-03 13:31:32 Etc/GMT",
            "receipt_creation_date_ms": "1664803892000",
            "receipt_creation_date_pst": "2022-10-03 06:31:32 America/Los_Angeles",
            "request_date": "2022-10-03 13:54:38 Etc/GMT",
            "request_date_ms": "1664805278092",
            "request_date_pst": "2022-10-03 06:54:38 America/Los_Angeles",
            "original_purchase_date": "2020-05-21 06:59:46 Etc/GMT",
            "original_purchase_date_ms": "1590044386000",
            "original_purchase_date_pst": "2020-05-20 23:59:46 America/Los_Angeles",
            "original_application_version": "2.0.7.1",
            "in_app": [{
                "quantity": "1",
                "product_id": "co.airapps.calculator.year",
                "transaction_id": "20001121977979",
                "original_transaction_id": "20001121977979",
                "purchase_date": "2022-10-03 13:26:04 Etc/GMT",
                "purchase_date_ms": "1664803564000",
                "purchase_date_pst": "2022-10-03 06:26:04 America/Los_Angeles",
                "original_purchase_date": "2022-10-03 13:26:06 Etc/GMT",
                "original_purchase_date_ms": "1664803566000",
                "original_purchase_date_pst": "2022-10-03 06:26:06 America/Los_Angeles",
                "expires_date": "2099-10-06 13:26:04 Etc/GMT",
                "expires_date_ms": "4094719027000",
                "expires_date_pst": "2099-10-06 06:26:04 America/Los_Angeles",
                "web_order_line_item_id": "20000471639424",
                "is_trial_period": "true",
                "is_in_intro_offer_period": "false",
                "in_app_ownership_type": "PURCHASED"
            }]
        },
        "latest_receipt_info": [{
            "quantity": "1",
            "product_id": "co.airapps.calculator.year",
            "transaction_id": "20001121977979",
            "original_transaction_id": "20001121977979",
            "purchase_date": "2022-10-03 13:26:04 Etc/GMT",
            "purchase_date_ms": "1664803564000",
            "purchase_date_pst": "2022-10-03 06:26:04 America/Los_Angeles",
            "original_purchase_date": "2022-10-03 13:26:06 Etc/GMT",
            "original_purchase_date_ms": "1664803566000",
            "original_purchase_date_pst": "2022-10-03 06:26:06 America/Los_Angeles",
            "expires_date": "2099-10-06 13:26:04 Etc/GMT",
            "expires_date_ms": "4094719027000",
            "expires_date_pst": "2099-10-06 06:26:04 America/Los_Angeles",
            "web_order_line_item_id": "20000471639424",
            "is_trial_period": "true",
            "is_in_intro_offer_period": "false",
            "in_app_ownership_type": "PURCHASED",
            "subscription_group_identifier": "20530432"
        }],
        "latest_receipt": "MIIUMgYJKoZIhvcNAQcCoIIUIzCCFB8CAQExCzAJBgUrDgMCGgUAMIID0wYJKoZIhvcNAQcBoIIDxASCA8AxggO8MAoCARQCAQEEAgwAMAsCARkCAQEEAwIBAzAMAgEKAgEBBAQWAjQrMAwCAQ4CAQEEBAICARswDQIBDQIBAQQFAgMCcQIwDgIBAQIBAQQGAgRF8CM1MA4CAQkCAQEEBgIEUDI1NjAOAgELAgEBBAYCBAcWFEcwDgIBEAIBAQQGAgQyz+Y0MBACAQ8CAQEECAIGFBHNG+DcMBECARMCAQEECQwHMi4wLjcuMTAUAgEAAgEBBAwMClByb2R1Y3Rpb24wFQIBAwIBAQQNDAszLjIyLjAuMTAwMTAYAgEEAgECBBBooxofMuLBu6DBzIq9+EdXMBwCAQUCAQEEFIhf4i/HUGgVOaFAjZxGTLCHcmAiMB4CAQgCAQEEFhYUMjAyMi0xMC0wM1QxMzozMTozMlowHgIBDAIBAQQWFhQyMDIyLTEwLTAzVDEzOjU0OjM4WjAeAgESAgEBBBYWFDIwMjAtMDUtMjFUMDY6NTk6NDZaMC0CAQICAQEEJQwjY29tLkNhbGN1bGF0b3JGb3JpUGFkLkludGVybmV0Um9ja3MwOAIBBwIBAQQw4e8GjOMJVUUjkEyX8JWg2wyInZeNlKjVnHrl3g8aY9wAr8Anlg0pPXmGbr8xWyI8MEwCAQYCAQEEROW4TFesSDXtdIiNsahvYj4AjEf0iJBh/tPngd/jqfkgGtojWr0Babuar1t6gH7FDIqjYRXuXJcy5Bw4UNz44O+EBTeCMIIBkwIBEQIBAQSCAYkxggGFMAsCAgatAgEBBAIMADALAgIGsAIBAQQCFgAwCwICBrICAQEEAgwAMAsCAgazAgEBBAIMADALAgIGtAIBAQQCDAAwCwICBrUCAQEEAgwAMAsCAga2AgEBBAIMADAMAgIGpQIBAQQDAgEBMAwCAgarAgEBBAMCAQMwDAICBrECAQEEAwIBATAMAgIGtwIBAQQDAgEAMAwCAga6AgEBBAMCAQAwDwICBq4CAQEEBgIEWlrTCjARAgIGrwIBAQQIAgYSMLkB5YAwGQICBqcCAQEEEAwOMjAwMDExMjE5Nzc5NzkwGQICBqkCAQEEEAwOMjAwMDExMjE5Nzc5NzkwHwICBqgCAQEEFhYUMjAyMi0xMC0wM1QxMzoyNjowNFowHwICBqoCAQEEFhYUMjAyMi0xMC0wM1QxMzoyNjowNlowHwICBqwCAQEEFhYUMjAyMi0xMC0wNlQxMzoyNjowNFowJQICBqYCAQEEHAwaY28uYWlyYXBwcy5jYWxjdWxhdG9yLnllYXKggg5lMIIFfDCCBGSgAwIBAgIIDutXh+eeCY0wDQYJKoZIhvcNAQEFBQAwgZYxCzAJBgNVBAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMSwwKgYDVQQLDCNBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwHhcNMTUxMTEzMDIxNTA5WhcNMjMwMjA3MjE0ODQ3WjCBiTE3MDUGA1UEAwwuTWFjIEFwcCBTdG9yZSBhbmQgaVR1bmVzIFN0b3JlIFJlY2VpcHQgU2lnbmluZzEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxEzARBgNVBAoMCkFwcGxlIEluYy4xCzAJBgNVBAYTAlVTMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApc+B/SWigVvWh+0j2jMcjuIjwKXEJss9xp/sSg1Vhv+kAteXyjlUbX1/slQYncQsUnGOZHuCzom6SdYI5bSIcc8/W0YuxsQduAOpWKIEPiF41du30I4SjYNMWypoN5PC8r0exNKhDEpYUqsS4+3dH5gVkDUtwswSyo1IgfdYeFRr6IwxNh9KBgxHVPM3kLiykol9X6SFSuHAnOC6pLuCl2P0K5PB/T5vysH1PKmPUhrAJQp2Dt7+mf7/wmv1W16sc1FJCFaJzEOQzI6BAtCgl7ZcsaFpaYeQEGgmJjm4HRBzsApdxXPQ33Y72C3ZiB7j7AfP4o7Q0/omVYHv4gNJIwIDAQABo4IB1zCCAdMwPwYIKwYBBQUHAQEEMzAxMC8GCCsGAQUFBzABhiNodHRwOi8vb2NzcC5hcHBsZS5jb20vb2NzcDAzLXd3ZHIwNDAdBgNVHQ4EFgQUkaSc/MR2t5+givRN9Y82Xe0rBIUwDAYDVR0TAQH/BAIwADAfBgNVHSMEGDAWgBSIJxcJqbYYYIvs67r2R1nFUlSjtzCCAR4GA1UdIASCARUwggERMIIBDQYKKoZIhvdjZAUGATCB/jCBwwYIKwYBBQUHAgIwgbYMgbNSZWxpYW5jZSBvbiB0aGlzIGNlcnRpZmljYXRlIGJ5IGFueSBwYXJ0eSBhc3N1bWVzIGFjY2VwdGFuY2Ugb2YgdGhlIHRoZW4gYXBwbGljYWJsZSBzdGFuZGFyZCB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB1c2UsIGNlcnRpZmljYXRlIHBvbGljeSBhbmQgY2VydGlmaWNhdGlvbiBwcmFjdGljZSBzdGF0ZW1lbnRzLjA2BggrBgEFBQcCARYqaHR0cDovL3d3dy5hcHBsZS5jb20vY2VydGlmaWNhdGVhdXRob3JpdHkvMA4GA1UdDwEB/wQEAwIHgDAQBgoqhkiG92NkBgsBBAIFADANBgkqhkiG9w0BAQUFAAOCAQEADaYb0y4941srB25ClmzT6IxDMIJf4FzRjb69D70a/CWS24yFw4BZ3+Pi1y4FFKwN27a4/vw1LnzLrRdrjn8f5He5sWeVtBNephmGdvhaIJXnY4wPc/zo7cYfrpn4ZUhcoOAoOsAQNy25oAQ5H3O5yAX98t5/GioqbisB/KAgXNnrfSemM/j1mOC+RNuxTGf8bgpPyeIGqNKX86eOa1GiWoR1ZdEWBGLjwV/1CKnPaNmSAMnBjLP4jQBkulhgwHyvj3XKablbKtYdaG6YQvVMpzcZm8w7HHoZQ/Ojbb9IYAYMNpIr7N4YtRHaLSPQjvygaZwXG56AezlHRTBhL8cTqDCCBCIwggMKoAMCAQICCAHevMQ5baAQMA0GCSqGSIb3DQEBBQUAMGIxCzAJBgNVBAYTAlVTMRMwEQYDVQQKEwpBcHBsZSBJbmMuMSYwJAYDVQQLEx1BcHBsZSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTEWMBQGA1UEAxMNQXBwbGUgUm9vdCBDQTAeFw0xMzAyMDcyMTQ4NDdaFw0yMzAyMDcyMTQ4NDdaMIGWMQswCQYDVQQGEwJVUzETMBEGA1UECgwKQXBwbGUgSW5jLjEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxRDBCBgNVBAMMO0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyjhUpstWqsgkOUjpjO7sX7h/JpG8NFN6znxjgGF3ZF6lByO2Of5QLRVWWHAtfsRuwUqFPi/w3oQaoVfJr3sY/2r6FRJJFQgZrKrbKjLtlmNoUhU9jIrsv2sYleADrAF9lwVnzg6FlTdq7Qm2rmfNUWSfxlzRvFduZzWAdjakh4FuOI/YKxVOeyXYWr9Og8GN0pPVGnG1YJydM05V+RJYDIa4Fg3B5XdFjVBIuist5JSF4ejEncZopbCj/Gd+cLoCWUt3QpE5ufXN4UzvwDtIjKblIV39amq7pxY1YNLmrfNGKcnow4vpecBqYWcVsvD95Wi8Yl9uz5nd7xtj/pJlqwIDAQABo4GmMIGjMB0GA1UdDgQWBBSIJxcJqbYYYIvs67r2R1nFUlSjtzAPBgNVHRMBAf8EBTADAQH/MB8GA1UdIwQYMBaAFCvQaUeUdgn+9GuNLkCm90dNfwheMC4GA1UdHwQnMCUwI6AhoB+GHWh0dHA6Ly9jcmwuYXBwbGUuY29tL3Jvb3QuY3JsMA4GA1UdDwEB/wQEAwIBhjAQBgoqhkiG92NkBgIBBAIFADANBgkqhkiG9w0BAQUFAAOCAQEAT8/vWb4s9bJsL4/uE4cy6AU1qG6LfclpDLnZF7x3LNRn4v2abTpZXN+DAb2yriphcrGvzcNFMI+jgw3OHUe08ZOKo3SbpMOYcoc7Pq9FC5JUuTK7kBhTawpOELbZHVBsIYAKiU5XjGtbPD2m/d73DSMdC0omhz+6kZJMpBkSGW1X9XpYh3toiuSGjErr4kkUqqXdVQCprrtLMK7hoLG8KYDmCXflvjSiAcp/3OIK5ju4u+y6YpXzBWNBgs0POx1MlaTbq/nJlelP5E3nJpmB6bz5tCnSAXpm4S6M9iGKxfh44YGuv9OQnamt86/9OBqWZzAcUaVc7HGKgrRsDwwVHzCCBLswggOjoAMCAQICAQIwDQYJKoZIhvcNAQEFBQAwYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMB4XDTA2MDQyNTIxNDAzNloXDTM1MDIwOTIxNDAzNlowYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5JGpCR+R2x5HUOsF7V55hC3rNqJXTFXsixmJ3vlLbPUHqyIwAugYPvhQCdN/QaiY+dHKZpwkaxHQo7vkGyrDH5WeegykR4tb1BY3M8vED03OFGnRyRly9V0O1X9fm/IlA7pVj01dDfFkNSMVSxVZHbOU9/acns9QusFYUGePCLQg98usLCBvcLY/ATCMt0PPD5098ytJKBrI/s61uQ7ZXhzWyz21Oq30Dw4AkguxIRYudNU8DdtiFqujcZJHU1XBry9Bs/j743DN5qNMRX4fTGtQlkGJxHRiCxCDQYczioGxMFjsWgQyjGizjx3eZXP/Z15lvEnYdp8zFGWhd5TJLQIDAQABo4IBejCCAXYwDgYDVR0PAQH/BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFCvQaUeUdgn+9GuNLkCm90dNfwheMB8GA1UdIwQYMBaAFCvQaUeUdgn+9GuNLkCm90dNfwheMIIBEQYDVR0gBIIBCDCCAQQwggEABgkqhkiG92NkBQEwgfIwKgYIKwYBBQUHAgEWHmh0dHBzOi8vd3d3LmFwcGxlLmNvbS9hcHBsZWNhLzCBwwYIKwYBBQUHAgIwgbYagbNSZWxpYW5jZSBvbiB0aGlzIGNlcnRpZmljYXRlIGJ5IGFueSBwYXJ0eSBhc3N1bWVzIGFjY2VwdGFuY2Ugb2YgdGhlIHRoZW4gYXBwbGljYWJsZSBzdGFuZGFyZCB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB1c2UsIGNlcnRpZmljYXRlIHBvbGljeSBhbmQgY2VydGlmaWNhdGlvbiBwcmFjdGljZSBzdGF0ZW1lbnRzLjANBgkqhkiG9w0BAQUFAAOCAQEAXDaZTC14t+2Mm9zzd5vydtJ3ME/BH4WDhRuZPUc38qmbQI4s1LGQEti+9HOb7tJkD8t5TzTYoj75eP9ryAfsfTmDi1Mg0zjEsb+aTwpr/yv8WacFCXwXQFYRHnTTt4sjO0ej1W8k4uvRt3DfD0XhJ8rxbXjt57UXF6jcfiI1yiXV2Q/Wa9SiJCMR96Gsj3OBYMYbWwkvkrL4REjwYDieFfU9JmcgijNq9w2Cz97roy/5U2pbZMBjM3f3OgcsVuvaDyEO2rpzGU+12TZ/wYdV2aeZuTJC+9jVcZ5+oVK3G72TQiQSKscPHbZNnF5jyEuAF1CqitXa5PzQCQc3sHV1ITGCAcswggHHAgEBMIGjMIGWMQswCQYDVQQGEwJVUzETMBEGA1UECgwKQXBwbGUgSW5jLjEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxRDBCBgNVBAMMO0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zIENlcnRpZmljYXRpb24gQXV0aG9yaXR5AggO61eH554JjTAJBgUrDgMCGgUAMA0GCSqGSIb3DQEBAQUABIIBADMuicqxpe6ocybMERliA74AykrFrwVb/42L637RrDyCCxlWu3fLBYsxQzGMtLiTm1UAQRvfZ0RVAiKL3V6/xQyjkRRjRD3mdoNrZMxUipaJ0gnUCQpFPzQftq79P6Qdp9ygfCL0m0S5BMcPQZVLeAIQdG2tFK+9BxmF9LXEhyKiPulLIyabLmfhk6DUHG+MJAQMZnRcpLgFdKWmBf7ystlJkoXwALQALHX293q9vVECa4uMj1DuA8T7QGZogNM1DmhP6Jdjlw99HbCe7Jq86PZ9U8eh5PyPQD4B5FMRs1e1vx6fUa8qWQvJDB4uXAZaK4y5qNJ8EJAa7VL6HHkfa4M=",
        "pending_renewal_info": [{
            "auto_renew_product_id": "co.airapps.calculator.year",
            "product_id": "co.airapps.calculator.year",
            "original_transaction_id": "20001121977979",
            "auto_renew_status": "1"
        }],
        "status": 0
    }
};
if ($request["url"]["indexOf"](path2) != -1) {
    obj = {
        "subscriptionStatus": 2,
        "expirationDate": 4094719027000,
        "arrUsedPromoCodes": [Eric解锁]
    }
};
$done({
    body: JSON["stringify"](obj)
})