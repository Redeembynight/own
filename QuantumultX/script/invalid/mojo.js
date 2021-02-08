/*
#mojo

下载地址 https://apps.apple.com/us/app/mojo-insta-story-editor/id1434861974

#^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[a-zA-Z0-9_-]*$) url script-response-body https://raw.githubusercontent.com/Redeembynight/own/main/QuantumultX/script/mojo.js

api.revenuecat.com, 
*/
let obj["subscriber"]["entitlements"]= {
      "pro": {
        "expires_date": "2099-12-01T03:51:32Z",
        "product_identifier": "revenuecat.pro.yearly",
        "purchase_date": "2019-10-31T02:51:32Z"
      }
    };
$done({body: JSON.stringify(obj)});
