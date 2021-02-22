/*
Unlocks by Cuttlefish 公众号：墨鱼手记
# > 042 樊登读书 解锁会员的课程音频 畅游知识的海洋（20201026）
https://api.dushu.io/Album/Info url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/fdds.js

api.dushu.io, 
*/
var body = $response.body.replace(/\u0075\u0079\u0065\u0064\u0022\u003A\u0066\u0061\u006C\u0073\u0065/g, '\u0075\u0079\u0065\u0064\u0022\u003A\u0074\u0072\u0075\u0065').replace(/\u0066\u0072\u0065\u0065\u0022\u003A\u0066\u0061\u006C\u0073\u0065/g, '\u0066\u0072\u0065\u0065\u0022\u003A\u0074\u0072\u0075\u0065').replace(/\u0074\u0072\u0069\u0061\u006C\u0022\u003A\u0066\u0061\u006C\u0073\u0065/g, '\u0074\u0072\u0069\u0061\u006C\u0022\u003A\u0074\u0072\u0075\u0065')
$done({ body });
