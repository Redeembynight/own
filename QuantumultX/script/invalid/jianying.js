/*
Quantumult X 脚本:
Unlocks 公众号：墨鱼手记
[rewrite_local]
#Unlocks
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/receipt.js
[mitm]
hostname = buy.itunes.apple.com,
*/
# > 剪影
if(bundle_id == "com.mediaeditor.video")
{
obj = {"status":0,"environment":"Production","receipt":{"receipt_type":"Production","adam_id":1000000000,"app_item_id":1000000000,"bundle_id":"com.mediaeditor.video","application_version":"437","download_id":99999999999999,"version_external_identifier":999999999,"receipt_creation_date":"2111-11-1111:11:11Etc\\/GMT","receipt_creation_date_ms":"4476655324000","receipt_creation_date_pst":"2111-11-1111:11:11America\\/Los_Angeles","request_date":"2011-11-1111:11:11Etc\\/GMT","request_date_ms":"1555555555555","request_date_pst":"2011-11-1111:11:11America\\/Los_Angeles","original_purchase_date":"2011-11-1111:11:11Etc\\/GMT","original_purchase_date_ms":"1555555555555","original_purchase_date_pst":"2011-11-1111:11:11America\\/Los_Angeles","original_application_version":"433","in_app":[{"quantity":"1","product_id":"yearautorenew","transaction_id":"520000631442654","original_transaction_id":"520000631442654","purchase_date":"2011-11-1111:11:11Etc\\/GMT","purchase_date_ms":"1555555555555","purchase_date_pst":"2011-11-1111:11:11America\\/Los_Angeles","original_purchase_date":"2011-11-1111:11:11Etc\\/GMT","original_purchase_date_ms":"1555555555555","original_purchase_date_pst":"2011-11-1111:11:11America\\/Los_Angeles","expires_date":"2111-11-1111:11:11Etc\\/GMT","expires_date_ms":"4476655324000","expires_date_pst":"2111-11-1111:11:11America\\/Los_Angeles","web_order_line_item_id":"520000240955544","is_trial_period":"true","is_in_intro_offer_period":"false"}]},"latest_receipt_info":[{"quantity":"1","product_id":"yearautorenew","transaction_id":"520000631442654","original_transaction_id":"520000631442654","purchase_date":"2011-11-1111:11:11Etc\\/GMT","purchase_date_ms":"1555555555555","purchase_date_pst":"2011-11-1111:11:11America\\/Los_Angeles","original_purchase_date":"2011-11-1111:11:11Etc\\/GMT","original_purchase_date_ms":"1555555555555","original_purchase_date_pst":"2011-11-1111:11:11America\\/Los_Angeles","expires_date":"2111-11-1111:11:11Etc\\/GMT","expires_date_ms":"4476655324000","expires_date_pst":"2111-11-1111:11:11America\\/Los_Angeles","web_order_line_item_id":"520000000000000","is_trial_period":"true","is_in_intro_offer_period":"false","subscription_group_identifier":"99999999"}],"latest_receipt":"5L2c6ICFQGtpbmc=","pending_renewal_info":[{"auto_renew_product_id":"yearautorenew","original_transaction_id":"520000000000000","product_id":"yearautorenew","auto_renew_status":"1"}]};
}
