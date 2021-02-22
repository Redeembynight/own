/*
#趣制作 解锁会员模板视频（20200925）Attention：登录使用
Unlocks by Cuttlefish 公众号：墨鱼手记

下载地址 https://apps.apple.com/cn/app/%E8%B6%A3%E8%A7%86%E9%A2%91%E5%88%B6%E4%BD%9C-%E8%A7%86%E9%A2%91%E7%BC%96%E8%BE%91-%E8%A7%86%E9%A2%91%E6%8A%A0%E5%9B%BE-%E5%89%AA%E8%BE%91%E5%B7%A5%E5%85%B7/id1449242864

https://cm.szsszykj.com/interface/GetVip.php url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/qzz.js

cm.szsszykj.com, 
*/
let body= $response.body; 
var obj = JSON.parse(body); 
obj={
  "Header": {
    "Result": 0,
    "Msg": "67e58be26210529f"
  },
  "Content": {
    "style": [],
    "end_time": "2029-10-10 22:08:05",
    "type": 2,
    "facility_list": [],
    "system_time": "2020-09-17 22:08:43"
  }
}
$done({body: JSON.stringify(obj)});
