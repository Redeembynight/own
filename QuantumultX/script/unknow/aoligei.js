/*
微信公众号：少年歌行PRO 制作
原创代码作者：浥轻尘

电报资源发布群（禁言纯净）@shao66 
电报水友交流群（资源同步）@sngxpro
电报私聊 @shaogebot

QQ群：654371081

app下载地址 Link : https://ok6.app/

圈X配置：
[rewrite_local]
^https?:\/\/1008610010\.yohui\.vip\/index\.php\/Api\/LiveApi\/getMovietime url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/aoligei/aoligei.js
[mitm]
hostname = a1008610010.yohui.vip
*/

let obj = JSON.parse($response.body);
obj.data.status = 1;  
$done({body: JSON.stringify(obj)});
