/*
#duolingo_test
^https:\/\/duolingo-leaderboards-prod\.duolingo\.com\/leaderboards* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/duolingo.js

duolingo-leaderboards-prod.duolingo.com,
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
obj['num_sessions_remaining_to_unlock'] = 0;
obj['tier'] = 4;
if(!obj['active'])
{
 obj['active'] = {};
}
obj['active']['collab_goal_accepted'] = false;
obj['active']['complete'] = false;
if(!obj['active']['contest']){
 obj['active']['contest'] = {}
}
obj['active']['contest']['contest_end'] = '2099-11-04T00:00:00Z'
obj['active']['contest']['contest_start'] = '2019-10-28T00:00:00Z'
obj['active']['contest']['contest_state'] = 'ACTIVE'
obj['active']['contest']['registration_end'] = '2099-11-03T00:00:00Z'
obj['active']['contest']['registration_state'] = 'OPEN'
body = JSON.stringify(obj);
$done({body});
