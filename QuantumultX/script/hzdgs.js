/*
Unlocks by Cuttlefish 公众号：墨鱼手记
# > 037 汉字的故事 解锁会员字体 探寻古汉字之美（20201002）
https://avoscloud.com/1.1/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/hzdgs.js

avoscloud.com, 
*/
var body = $response.body.replace(/\u006D\u0065\u006D\u0062\u0065\u0072\u0073\u0068\u0069\u0070\u0022\u003A\u0066\u0061\u006C\u0073\u0065/g, '\u006D\u0065\u006D\u0062\u0065\u0072\u0073\u0068\u0069\u0070\u0022\u003A\u0074\u0072\u0075\u0065').replace(/\u006E\u0065\u0065\u0064\u004D\u0065\u006D\u0062\u0065\u0072\u0073\u0068\u0069\u0070\u0022\u003A\u0074\u0072\u0075\u0065/g, '\u006E\u0065\u0065\u0064\u004D\u0065\u006D\u0062\u0065\u0072\u0073\u0068\u0069\u0070\u0022\u003A\u0074\u0072\u0075\u0065').replace(/\u0075\u006E\u006C\u006F\u0063\u006B\u0022\u003A\u0066\u0061\u006C\u0073\u0065/g, '\u0075\u006E\u006C\u006F\u0063\u006B\u0022\u003A\u0074\u0072\u0075\u0065')
$done({ body });
