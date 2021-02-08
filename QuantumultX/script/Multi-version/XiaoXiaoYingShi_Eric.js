/*
# 小小影视 (By Eric)
# 会员
https:\/\/.*.xiao*(img|apps|appxs).com url request-header (\r\n)Cookie:.+(\r\n) request-header $1Cookie: xxx_api_auth=6131333537653261363463323331666265663763396239663835636662373930$2

# 去广告
https:\/\/.*\..*\.com\/(vod\/reqplay\/|ucp/index|getGlobalData) url script-response-body https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/xxysad.js

*/


let obj = JSON.parse($response.body);
delete obj.data.adrows
delete obj.data.iOS_adgroups
$done({body: JSON.stringify(obj)});
