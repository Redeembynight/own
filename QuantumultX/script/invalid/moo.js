/*
Unlocks by cuttlefish 公众号：墨鱼手记
# > 009 moo 日记永久会员 (20200831) ⭐️
https://diary.7english.cn:2433//api/user/userInfo url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/moo.js

diary.7english.cn, 
*/

re('"userType":\\d@"radishQty":\\d','"userType":2@"radishQty":999')

function re() {
 var body = $response.body;
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done(body);
} 
