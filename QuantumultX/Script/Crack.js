
[rewrite_local]
#头脑吃鸡
#感谢[@LeeeMooo](https://github.com/LeeeMooo)
^https://tncj.hortorgames.com/chicken/fight/(answer|findQuiz) url script-response-body tncj.min.js

#bilibili fan drama open 1080P+
https:\/\/ap(p|i)\.bilibili\.com\/((pgc\/player\/api\/playurl)|(x\/v2\/account\/myinfo\?)|(x\/v2\/account/mine\?)) url script-response-body BiliHD.js

#weibo去广告
^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body wb_launch.js
^https?://m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)(mix)?timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|!/photos/pic_recommend_status|video/tiny_stream_video_list|photo/info) url script-response-body wb_ad.js

# 幕布 @ZhiYi-N
http-response https:\/\/api2\.mubu\.com\/v3\/api\/user\/current_user script-path=https://raw.githubusercontent.com/ZhiYi-N/Loon/master/mb.js, requires-body=true, timeout=10, tag=幕布

# 联通轮播 @Wangsc1
;http-response ^https?://m.client.10010.com/uniAdmsInterface/getHomePageAd script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/china_unicom.js, tag=联通轮播去广告

# bear熊掌记 @Miao Miao
http-response ^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/bear.js, tag=Bear熊掌记

# nono笔记 @Alex0510
http-response https://api.revenuecat.com/v1/receipts script-path=https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/noto.js, requires-body=1, tag=noto笔记

#皮皮虾去水印  @Liquor030
http-response ^https?://.*\.snssdk\.com/bds/(feed/stream|comment/cell_reply|cell/cell_comment|cell/detail|ward/list|user/favorite|user/cell_coment|user/cell_userfeed|user/publish_list) requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/Liquor030/Sub_Ruleset/master/Script/Super.js, tag=皮皮虾去水印广告

# endlessGoogle  @langkhach270389
http-response http:\/\/www\.google\..* requires-body=1, script-path=https://raw.githubusercontent.com/langkhach270389/Quantumult-X-LK/master/Scripts/langkhach/endlessgoogle.js, tag=endlessgoogle

# it之家去广告  @toulanboy
http-response https:\/\/api\.ithome\.com\/json\/newslist\/news script-path=https://raw.githubusercontent.com/toulanboy/scripts/master/ithome_ad/ithome_ad.js,requires-body=true, tag=ithome_ad

#在微信中打开淘宝等被屏蔽链接，点击 Surge/QuantumultX 通知跳转到 Safari 或淘宝 App @HotKids & @XIAO_KOP,修改自 @江湖中人
^https?:\/\/weixin110\.qq\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi url script-response-body https://raw.githubusercontent.com/HotKids/Rules/master/Script/weixin110.js

# Choler 
http-request ^https://mp\.weixin\.qq\.com/mp/getappmsgad script-path=https://raw.githubusercontent.com/Choler/Surge/master/Script/WeChat.js, tag=WeChat
http-response ^https://r\.inews\.qq.com\/get(QQNewsUnreadList|RecommendList) requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/Choler/Surge/master/Script/QQNews.js, tag=QQNews

# photonmang (*.xxjjappss.com,*.huaerdadi.com)
http-response https:\/\/.*\..*\.com\/(ssp-svr\/ssp\/list3|ucp/index|getGlobalData) requires-body=1,script-path= https://raw.githubusercontent.com/photonmang/quantumultX/master/xxys.js, tag=小小影视 旧版本去广告

# 公众号墨鱼手记    https://github.com/ddgksf2013
# > 051 彩云天气 解锁会员权限（20201121）Author: blackmatrix7 
https?:\/\/biz\.caiyunapp\.com\/(membership_rights|v2\/user) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/caiyun.js

# > 050 豌豆清单 为你的日程好好规划一下(20201112)
^https:\/\/www\.40sishi\.com\/list\/user\/profile$ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/wdqd.js

# > 049 Quicut 体验大片视频编辑的感觉 (20201112)
http://outcut.szsszykj.com/api/OverseasPay/GetVip url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/qc.js

# > 048 伴鱼绘本 孩子你可或缺的英语绘本读物(20201109) 
https://picturebook.ipalfish.com/pfapi(/profile/picturebook/get|/base/growthsystem/user/vip/equity/get) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/byhb.js

# > 047 Document 解锁PDF会员编辑功能 一次性解锁（20201108）
https:\/\/license\.pdfexpert\.com\/api\/.+\/subscription\/(refresh$|check$) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/documents.js

# > 046 Fitplan 要不要做做Vip专属有氧运动 登录使用（20201107）
https://api2.fitplanapp.com/fitplan-server/v2/user/profile url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/fitplan.js

# > 045 鲨鱼记账 需要登录 解锁会员记账权限（20201104）
https://api.shayujizhang.com/account/detail/info/ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/syjz.js

# > 044 万年历 解锁会员权限 出门看下黄历今天是个好日子（20201028）
https://r.51wnl-cq.com/Api/User/GetExtInfo url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/wnl.js

# > 043 森茂雅苑 微信小程序解锁隐藏内容 去除广告直接查看内容（20201027）
https://d.smkj33.top/wp-json/wp/v2/posts/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js

# > 042 樊登读书 解锁会员的课程音频 畅游知识的海洋（20201026）
https://api.dushu.io/Album/Info url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/fdds.js

# > 041 云听 解锁会员专属音频 舒舒服服躺着听（20201020）
http://getway.radio.cn/app* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/yt.js

# > 040 Reface 解锁会员权限 随心移花接木（20201013）
https://api.reface.video/api/reface/v1/iosSubscription url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/reface.js

# > 039 睡眠助手 解锁VIP独享的白噪音乐（20201010）
https://www.helloshiyu.com/sleep/user/profile url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/smzs.js

# > 038 纸塘壁纸 微信小程序 免广告直接下载原图壁纸（20201006）Attention：登录使用⭐️
https://api.bspapp.com/client url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/ztbz.js

# > 037 汉字的故事 解锁会员字体 探寻古汉字之美（20201002）
https://avoscloud.com/1.1/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/hzdgs.js

# > 036 小妖精美化 解锁会员 美化桌面widget（20201002）
https://bbs.maibaapp.com/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xyjmh.js 

# > 035 色采 Unlock VIP (20200929) Attention：恢复购买
;The content is consistent with rcam, no longer repeated.

# > 034 英语阅读 解锁永久会员 （20200926）Attention：登录使用 ⭐️
^http:\/\/duoting\.tatatimes\.com\/tataeraapi\/api\.s\?h=QueryVipUser url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/englishread.js 

# > 033 趣制作 解锁会员模板视频（20200925）Attention：登录使用
https://cm.szsszykj.com/interface/GetVip.php url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/qzz.js

# > 032 Fantastical 解锁SVIP会员订阅 （20200924）⭐️
^https:\/\/api\.flexibits\.com\/(v1\/auth\/device|v1\/account\/details) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/fantastical.js

# > 031 西窗烛 解锁终身会员 文艺范的福音（20200924）Attention：登录使用
https://avoscloud.com/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcz.js

# > 030 老胡工具箱 微信小程序解除隐藏内容 （20200916）
https://d.syshhc.top/wp-json/wp/v2/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js

# > 029 一言 解锁终身会员 （20200916）Attention:登录使用
http://115.28.168.103:8080/yiyan/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/yiyan.js

# > 028 done 解锁会员功能 PRO （20200914）Attention：登录使用
http://dbapi.ganbuguo.com/user/userinfo url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/done.js

# > 027 emby 流媒体解锁订阅（20200913）Attention: 配合普拉斯影业提供的账号可进行观影：域名: https://movie.xeton.dev 端口: 443 账号：普拉斯影业 密码：plusisbest
^https:\/\/mb3admin\.com\/admin\/service(\/registration\/validateDevice|\/appstore\/register|\/registration\/validate|\/registration\/getStatus|\/supporter\/retrievekey) url script-echo-response https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/emby.js

# > 026 VCUS Unlock VIP (20200912)
;The content is consistent with rcam, no longer repeated.

# > 025 手机硬件管家 高级VIP (20200912)
http:\/\/api\.591master\.com\:8081\/(1.0|3.6.8)\/ui(forum|common)\/(downloadwallpaper|getuser) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/phoneyjgj.js

# > 024 MeisterTask Premium(20200910)
https://www.mindmeister.com/api/v2/licenses/meistertask url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/meistertask.js

# > 023 实时天气 解锁VIP功能（20200909）-----失效已加密
;^https:\/\/subs\.platforms\.team\/apple\/verifyTransaction$ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/sstq.js

# > 022 乐心健康 步数修改 （20200908）Attention：APP里面数据共享，打开微信和支付宝，需要修改步数的时候，打开乐心健康
^https:\/\/sports\.lifesense\.com\/sport_service\/sport\/sport\/uploadMobileStepV2 url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/lxhealth.js

# > 021 pushover 解锁会员（20200905）
^https://api.pushover.net/1/messages.json url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/pushover.js

# > 020 productive Unblock（20200905）
^https:\/\/subs\.platforms\.team\/.+\/apple\/verify$ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/productive.js

# > 019 葫芦时刻 解锁SVIP（20200905）
^https:\/\/api\.hulusaas\.com\/api\/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/hulu.js

# > 018 蜗牛睡眠 解锁会员音乐（20200906）
^https:\/\/(snailsleep\.net\/|(music|community)\.snailsleep\.net\/)(snail\/v1\/profile\/get|snail-music\/music\/(sleeping|meditation)\/single\/list) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/wnsm.js

# > 017 菜谱大全 解锁VIP功能（20200906）
https?:\/\/api\.jiaonizuocai\.com url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/cpdq.js

# > 016 大象冥想 解锁会员音乐（20200904）
^https?:\/\/nmeditation\.snailsleep\.net\/meditation-(audio|user|order|audio)\/(api|user)\/(audio\/master\/detail|get\/info|order/user\/vip\/info|ad\/get) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/dxmx.js

# > 015 京东APP商品显示历史价格（20200904）
;^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/jd_price.js

# > 014 滴答清单 解锁会员功能（20200903）仅适用旧版 V5.2.51 ID:832943581
^https:\/\/(ticktick|dida365)\.com\/api\/v2\/user\/status url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/ddqd.js

# > 013 克拉壁纸 解锁付费壁纸（20200903）仅适用旧版 V4.7.3 ID:833188498 ⭐️
^https:\/\/claritywallpaper\.com\/clarity\/api\/(userInfo|special\/queryByCatalogAll) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/clarity.js

# > 012 剪影 解锁订阅（20200902）
;The content is consistent with rcam, no longer repeated.    

# > 011 lensa 人像修图解锁（20200902）
^https?:\/\/subscription-service\.neuralprisma\.com\/subscription_get url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/lensa.js

# > 010 财新 解锁付费文章（20200901）
https://mappsv5.caixin.com/articlev5/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/caixin.js

# > 009 moo 日记永久会员 (20200831) ⭐️
https://diary.7english.cn:2433//api/user/userInfo url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/moo.js

# > 008 Geist  Picsew 二者解锁会员功能（20200831）
;The content is consistent with rcam, no longer repeated.

# > 007 RCam 解锁会员功能（20201108）已注释，需要的自行添加
;^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/receipt.js

# > 006 酸鸡汤,老爷花苑（光头的小程序，两个通用）（20200916）
https://[a-z]+.ddly666.top/wp-json/wp/v2/posts/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js

# > 005 黑科技软件（20200901）小程序解除隐藏内容
^https:\/\/hkj178.com/wp-json/mp/v2/posts/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js

# > 004 天泽后花园（20200901）小程序解除隐藏内容
^https:\/\/a.jxjt888.top/wp-json/wp/v2/posts/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js

# > 003 小野分享（20200901）小程序解除隐藏内容
^https:\/\/lysl2020.com/wp-json/wp/v2/posts/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js

# > 002 搜罗好货（20200901）小程序解除隐藏内容
^https:\/\/www.i3zh.com/wp-json/wp/v2/posts/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js

# > 001 最新版keep（20200819）小程序解除隐藏内容
^https:\/\/api\.gotokeep\.com\/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/keep.js


[MITM]
hostname= tncj.hortorgames.com, api.bilibili.com, api.weibo.cn, mapi.weibo.com, *.uve.weibo.com, api2.mubu.com, m.client.10010.com, buy.itunes.apple.com, api.revenuecat.com, *.snssdk.com, www.google.*, api.ithome.com
, weixin110.qq.com, mp.weixin.qq.com, r.inews.qq.com, *.xxjjappss.com,*.huaerdadi.com, biz.caiyunapp.com, www.40sishi.com, outcut.szsszykj.com, picturebook.ipalfish.com, license.pdfexpert.com, api2.fitplanapp.com, api.shayujizhang.com, r.51wnl-cq.com, d.smkj33.top, api.dushu.io, getway.radio.cn, api.reface.video, www.helloshiyu.com, api.bspapp.com, avoscloud.com, bbs.maibaapp.com, duoting.tatatimes.com, cm.szsszykj.com, avoscloud.com, api.flexibits.com, d.syshhc.top, 115.28.168.103, dbapi.ganbuguo.com, mb3admin.com, api.591master.com, www.mindmeister.com, subs.platforms.team, sports.lifesense.com, api.pushover.net, subs.platforms.team, api.hulusaas.com, snailsleep.net,music.snailsleep.net,community.snailsleep.net, api.jiaonizuocai.com, nmeditation.snailsleep.net, api.m.jd.com, claritywallpaper.com, subscription-service.neuralprisma.com, mappsv5.caixin.com, diary.7english.cn, buy.itunes.apple.com, api.gotokeep.com, *.ddly666.top, hkj178.com, a.jxjt888.top, lysl2020.com, www.i3zh.com, 


