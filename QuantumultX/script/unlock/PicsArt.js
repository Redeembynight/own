/*
PicsArt app unlocks pro
NobyDa

下载地址 https://apps.apple.com/us/app/picsart-photo-video-editor/id587366035

Surge4.0:
http-response https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/PicsArt.js

QX1.0.0
^https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/PicsArt.js

Surge & QX Mitm = api.picsart.c*, api.meiease.c*
*/

let obj = JSON.parse($response.body);
obj.subscription.granted = "true";
$done({body: JSON.stringify(obj)});
