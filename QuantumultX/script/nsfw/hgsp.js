/*

#黄瓜视频完美🔓 by JungegeCN

下载地址：https://849slfm.bpwbel.work/vfr1273.html?pkg=cuke0001&accountCode=666&inviteCode=AQBNNV

电报频道：https://t.me/ThorHCC
QQ资源群：189519867

资源发布：https://www.notion.so/7a95c49260584ac8b438e18bf892531b


圈X：

https:\/\/api1000\.gdqeb\.club\/(user\/info|mov\/browse2*) url script-response-body https://raw.githubusercontent.com/JungegeCN/JGG/master/hgsp.js

Loon:
[Script]
#黄瓜视频VIP
http-response ^https:\/\/api88\.awk2\.work\/(user\/info|mov\/browse2*) script-path=https://raw.githubusercontent.com/JungegeCN/JGG/master/hgsp.js, requires-body=true, timeout=10, tag=黄瓜视频VIP


MITM = api1000.gdqeb.club


*/

var body = $response.body;




body=body.replace(/vipLogo\":\d/g,'vipLogo":4').replace(/gender\":(\-|\+?)\d+/g,'gender":1').replace(/isPaid\":\d+/g,'isPaid":1').replace(/supUserId\":\d+/g,'supUserId":0').replace(/hasBuy\":\w+/g,'hasBuy":true').replace(/vipEndDate\":\"(.*?)\"/g,'vipEndDate":\"2222-02-22\"').replace(/phone\":\"(.*?)\"/g,'phone":\"JungegeCN\"').replace(/userCls\":\d+/g,'userCls":2').replace(/isExpired\":\d+/g,'isExpired":1');


$done({body});
