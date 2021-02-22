/*
#睡眠助手 解锁VIP独享的白噪音乐（20201010）
Unlocks by Cuttlefish 公众号：墨鱼手记\

下载地址 https://apps.apple.com/cn/app/%E7%9D%A1%E7%9C%A0%E5%8A%A9%E6%89%8B-%E4%B8%93%E6%B3%A8%E7%99%BD%E5%99%AA%E9%9F%B3%E5%86%A5%E6%83%B3%E5%8A%A9%E7%9C%A0/id1521012793

https://www.helloshiyu.com/sleep/user/profile url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/smzs.js

www.helloshiyu.com, 
*/
let body= $response.body; 
var obj = JSON.parse(body); 
obj={"data":{"userId":"1fdbhfn","name":null,"gender":0,"avatar":null,"birthday":null,"mobile":null,"vipState":{"state":1,"forever":false,"startTime":1600334263000,"expireTime":1884343967000}},"code":1}
$done({body: JSON.stringify(obj)});
