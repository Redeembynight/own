/*
#酷我换肤(已经有的皮肤需要先从本地皮肤删除再换 By@ s y)
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/theme)  url script-response-body   https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/themekuwo.js

vip1.kuwo.cn
*/
var obj = JSON.parse($response.body);
 obj.data.vipTheme.type="free";
 obj.data.needBieds=null;
$done({body: JSON.stringify(obj)});
//
