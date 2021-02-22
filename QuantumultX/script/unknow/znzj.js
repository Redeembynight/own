/*
#智能证件照相机 (by @superuv)
^https:\/\/app\.xunjiepdf\.com\/api\/v4\/virtualactregister url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/znzj.js

app.xunjiepdf.com, 
*/
var obj = JSON.parse($response.body);
 obj={
  "vip": [
   {
    "id": 9005757,
    "auth_type": 1,
    "auth_value": 1999999999
   }
  ]
};
$done({body: JSON.stringify(obj)});
//
