/* Quantumult X 脚本: 

#闪电下载vip
# by 凉意  

#下载链接🔗 http://bbs.xiaokanba.com

[rewrite_local] 
#闪电下载vip
^http\:\/\/app\.flashdown365\.com\/ios\/login url script-response-body https://raw.githubusercontent.com/Redeembynight/own/main/QuantumultX/script/unlock/sdxz.js

[mitm] hostname = app.flashdown365.com,

*/

let obj = JSON.parse($response.body);
obj.body.isvip = true
$done({body: JSON.stringify(obj)});
