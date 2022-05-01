	/*
	羊毛自己取舍，每天2-3毛
	作者：青龙-白虎
	当前包含：
	奖励奖励
	大转盘
	红包雨
	金币悬赏任务
	
	#获取一次免费获取cookie
	kkdheader和kkdcookie
	
	动作 YML
	KKDHEADER-kkdheader
	KKDCOOKIE-kkdcookie
	[中间人]
	主机名 = api.yuncheapp.cn
	#圈x
	[重写本地]
	^https:\/\/api\.yuncheapp\.cn\/pearl-incentive\/api\/v1\/task\/intervalAward\/receive url script-request-header https://raw.githubusercontent.com/ ZhiYi-N/Private-Script/master/Scripts/kkd.js
	#龙
	http-request ^https:\/\/api\.yuncheapp\.cn\/pearl-incentive\/api\/v1\/task\/intervalAward\/receive script-path=https://raw.githubusercontent.com /ZhiYi-N/Private-Script/master/Scripts/kkd.js, requires-body=true, timeout=10, tag=看点cookie
	＃涌
	kkdcookie = type=http-request,pattern=^https:\/\/api\.yuncheapp\.cn\/pearl-incentive\/api\/v1\/task\/intervalAward\/receive,requires-body=1 ,max-size=0,script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/kkd.js,script-update-interval=0
	*/
	const jsname = '快看点'
	常量 $ = 环境( jsname )
	常量 通知 = $ 。是节点（）？要求（'./sendNotify' ）：'' ；
	常量 kkdheaderArr = [ ]
	常量 kkdcookieArr = [ ]
	常量 kkdbodyArr = [ ]
	让 kkdheader = $ 。获取数据（ ' kkdheader ' ）
	让 kkdcookie = $ 。获取数据（ ' kkdcookie ' ）
	让 kkdbody = $ 。获取数据（ ' kkdbody ' ）
	const logs = false //日志
	常量 邀请 = 1 ; // 邀请码1为邀请
	让 tz = ( $ .getval ( ' tz' ) || '1' ) ; //通知
	常量 邀请 = '' ;
	让 lTadlist = '15884282854261489762' ;
	让 gRadlist = '15884282854261489762' ;
	让 eXadlist = '15884282854261489762' ;
	var 消息= '' ;
	
	if ( $ . isNode ( ) ) {
	小时 = 新 日期（ 新 日期（）。getTime （）+ 8 * 60 * 60 * 1000 ）。_ 获取时间（）； 
	分钟 = 新 日期（ 新 日期（）。getTime （）+ 8 * 60 * 60 * 1000 ）。_ 获取分钟（）； 
	}其他{
	小时 = （新 日期（））。获取时间（）；
	分钟 = （新 日期（））。获取分钟（）；
	}
	//CK运行
	
	让 isGetCookie = typeof $request !== 'undefined'
	如果 （isGetCookie ） {
	获取Cookie ( ) ;
	$ . 完成( )
	} 
	if ( $ . isNode ( ) ) {
	如果 （进程。环境。KKDHEADER &&进程。环境。KKDHEADER。indexOf （' # ' ）> - 1 ）{ _ _ 
	kkdheader = 进程。环境。KKDH 头。拆分（'#' ）；
	控制台。日志（`隔你选择是用"#"开\n` ）
	}
	否则 if (进程. env . KKDHEADER && 进程. env . KKDHEADER . indexOf ( '\n' ) > - 1 ) {
	kkdheader = 进程。环境。KKDH 头。拆分( '\n' ) ;
	控制台。日志（`您选择是用换行隔开\n` ）
	} 其他 {
	kkdheader = 进程。环境。KKDH 头。拆分( )
	} ;
	如果 （进程。环境。KKDCOOKIE &&进程。 环境。KKDCOOKIE。indexOf （' # ' ）> - 1 ）{ _ _ 
	kkdcookie = 进程。环境。KKDCOOKIE 。拆分（'#' ）；
	}
	否则 if (进程.env .KKDCOOKIE &&进程.env .KKDCOOKIE .split ( ' \ n ' ) .length > 0 ) { _ _ _ 
	kkdcookie = 进程。环境。KKDCOOKIE 。拆分( '\n' ) ;
	} 其他 {
	kkdcookie = 进程。环境。KKDCOOKIE 。拆分( )
	} ;
	对象。键（kkdheader ）。forEach ( (项目) => {
	如果 （kkdheader [项目] ） {
	kkdheaderArr 。推（kkdheader [项目] ）
	}
	} ) ;
	对象。键（kkdcookie ）。forEach ( (项目) => {
	if ( kkdcookie [项目] ) {
	kkdcookieArr 。推（kkdcookie [项目] ）
	}
	} ) ;
	
	控制台。log ( `============ 脚本执行-国际标准时间(UTC)：${ new Date ( ) . toLocaleString ( ) } =============\ n` )
	控制台。log ( `============ 脚本执行-北京时间(UTC+8)：${ new Date ( new Date ( ) . getTime ( ) + 8 * 60 * 60 * 1000 ) . toLocaleString ( ) } =============\n` )
	} 其他 {
	kkdheaderArr 。推（$ .getdata （'kkdheader ' ））
	kkdcookieArr 。推（$ .getdata （'kkdcookie ' ））
	让 kkdcount = ( $ .getval ( 'kkdcount' ) || ' 1' ) ; 
	for (让 i = 2 ; i <= kkdcount ; i ++ ) {
	kkdheaderArr 。推（$ .getdata （`kkdheader $ { i } ` ））
	kkdcookieArr 。推送（$ .getdata （`kkdcookie $ { i } ` ））
	}
	}
	！（异步 （） => {
	如果 （！kkdcookieArr [ 0 ] ） {
	$ . msg ( $ . name , '【提示】请先获取快看点一cookie' )
	返回；
	}
	控制台。日志（`-------------共${ kkdcookieArr .length }个日记---------------- \ n`）
	for (让 i = 0 ; i < kkdcookieArr .长度; i ++ ) {
	if ( kkdcookieArr [ i ] ) {
	其他 = ''
	kkdheader = kkdheaderArr [我] ;
	kkdcookie = kkdcookieArr [我] ;
	$ . 指数 = 我 + 1 ;
	控制台。log ( `\n开始【快看点${ $ . index }】` )
	等待 用户信息( )
	等待 控制( )
	等待 时间间隔奖励( )
	等待 彩票表（）
	等待 lotteryTable_getcoins ( )
	//广告来源大转盘
	等待 lotteryTable1 ( )
	等待 extra_getcoins ( )
	等待 礼物雨( )
	等待 giftRain_getcoins ( )
	等待 showmsg ( )
	}
	}
	} ) ( )
	. 捕捉( ( e ) => $ . logErr ( e ) )
	. 最后( ( ) => $ .完成( ) )
	函数 GetCookie ( ) {
	if ( $request && $request . url . indexOf ( "intervalAward" ) >= 0 ) {
	常量 kkdheader = $request 。网址。拆分（`?` ）[ 1 ]
	如果 （kkdheader ） $ 。设置数据（kkdheader ，'kkdheader' ）
	$ . log ( `[ ${ jsname } ] 获取kkdheader请求: 成功,kkdheader: ${ kkdheader } ` )
	$ . msg ( `获取kkdheader: 成功, `` )
	常量 kkdcookie = $request 。标头[ 'Cookie' ]
	如果 （kkdcookie ） $ 。设置数据( kkdcookie , 'kkdcookie' )
	$ . log ( `[ ${ jsname } ] 获取kkdcookie请求: 成功,kkdcookie: ${ kkdcookie } ` )
	$ . msg ( `获取kkdcookie: 成功, `` )
	}
	if ( $request && $request . url . indexOf ( "finish" ) >= 0 ) {
	常量 kkdbody = $request 。身体
	如果 （kkdbody ） $ 。设置数据（kkdbody ，'kkdbody' ）
	$ . log ( `[ ${ jsname } ] 获取kkdbody请求: 成功,kkdbody: ${ kkdbody } ` )
	$ . msg ( `获取kkdbody: 成功, ` )
	}
	}
	异步 函数 控制( ) {
	如果（邀请 == 1 ）{
	等待 邀请( ) ;
	}
	}
	函数 邀请( ) {
	return new Promise ( ( resolve , reject ) => {
	让 邀请网址 = {
	网址：`https://api.yuncheapp.cn/pearl-incentive/api/v1/task/invite/verify? ${ kkdheader } ` ,
	标题：{
	饼干：kkdcookie ，
	'连接' : '保持活动状态' ,
	“内容类型”：“应用程序/json” ，
	'主机' : 'api.yuncheapp.cn' ,
	'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
	} ,
	正文：'{“代码”：“JFN4M3”}'
	}
	$ . 发布（邀请网址，（错误， 响应， 数据） => {
	常量 结果 = JSON 。解析（数据）
	解决（）
	} )
	} )
	} 
	//个人信息
	功能 用户信息（） {
	return new Promise ( ( resolve , reject ) => {
	让 userinfourl = {
	网址：`https://api.yuncheapp.cn/pearl-incentive/api/v1/user/tabV2? ${ kkdheader } ` ,
	标题：{
	饼干：kkdcookie ，
	'连接' : '保持活动状态' ,
	“内容类型”：“应用程序/json” ，
	'主机' : 'api.yuncheapp.cn' ,
	'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
	} ,
	正文：'{}'
	}
	$ . 发布(用户信息, (错误, 响应, 数据) => {
	常量 结果 = JSON 。解析（数据）
	如果（日志） $ 。日志（数据）
	如果（结果。消息 == '成功' ） {
	消息 += '+结果。数据。用户信息。昵称+ '-今日已得：' +结果。数据。用户信息。todayCoins + '-现有余额：' + result . 数据。用户信息。硬币+ '\n'
	
	} 其他{
	other += '??异常'
	}
	解决（）
	} )
	} )
	} 
	//大转盘
	函数 彩票表（） {
	return new Promise ( ( resolve , reject ) => {
	让 lotteryTableurl = {
	网址：`https://api.yuncheapp.cn/pearl-incentive/api/v1/lotteryTable/drawV2? ${ kkdheader } ` ,
	标题：{
	饼干：kkdcookie ，
	'连接' : '保持活动状态' ,
	“内容类型”：“应用程序/json” ，
	'主机' : 'api.yuncheapp.cn' ,
	'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
	} ,
	正文：'{}'
	}
	
	$ . 发布（lotteryTableurl ，（错误， 响应， 数据） => {
	常量 结果 = JSON 。解析（数据）
	如果（日志） $ 。日志（数据）
	message += '
	如果（结果。消息 == '成功' ） {
	message += '+ result . 数据。内容+ ','
	lTadlist = 结果。数据。广告池信息。广告信息[ 0 ] 。阿霉素
	}
	否则{
	message += '??异常：' + result . 消息+ '\n'
	}
	解决（）
	} )
	} )
	} 
	
	//大转盘双倍或神秘宝箱
	函数 lotteryTable_getcoins ( ) {
	//const lTbody = kkdbody.replace("GIFTRAIN_INCENTIVE","LOTTERYTABLE_INCENTIVE");
	//const lTbody = kkdbody.replace(/adLlsid":"\d+/,`adLlsid":"${lTadlist}`);
	//$.log('111111'+lTadlist)
	return new Promise ( ( resolve , reject ) => {
	让 lotteryTable_getcoinsurl = {
	网址：`https://api.yuncheapp.cn/pearl-incentive/api/v1/ad/finish? ${ kkdheader } ` ,
	标题：{
	饼干：kkdcookie ，
	'连接' : '保持活动状态' ,
	“内容类型”：“应用程序/json” ，
	'主机' : 'api.yuncheapp.cn' ,
	'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
	} ,
	正文：`{"adPositionType":"LOTTERYTABLE_INCENTIVE","insertCnt":0,"adCodeId":"1300213002001","serverEcpm":0,"ttl":0,"requestCnt":0,"adProvider":"KS_NEW ","adRet":true,"resultExpire":0,"keyString":"1300213002001KS_NEW","endAd":false,"requestStartTime":0,"adBizType":"LOTTERY_TABLE","re??nderType":0,"adToken ":"","adLlsid":" ${ lTadlist } ","isPreload":false,"adAward":0}`
	}
	
	$ . 发布（lotteryTable_getcoinsurl ，（错误， 响应， 数据） => {
	常量 结果 = JSON 。解析（数据）
	如果（日志） $ 。日志（数据）
	如果（结果。消息 == '成功' ） {
	消息 += +结果。数据。coin + '金币\n'
	}
	否则{
	message += '??异常：' + result . 消息+ '\n'
	}
	解决（）
	} )
	} )
	} 
	// 奖励奖励
	函数 区间奖( ) {
	return new Promise ( ( resolve , reject ) => {
	让 intervalAwardurl = {
	网址：`https://api.yuncheapp.cn/pearl-incentive/api/v1/task/intervalAward/receive? ${ kkdheader } ` ,
	标题：{
	饼干：kkdcookie ，
	'连接' : '保持活动状态' ,
	“内容类型”：“应用程序/json” ，
	'主机' : 'api.yuncheapp.cn' ,
	'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
	}
	}
	$ . post ( intervalAwardurl , ( error , response , data ) => {
	常量 结果 = JSON 。解析（数据）
	如果（日志） $ 。日志（数据）
	message += '
	如果（结果。消息 == '成功' ） {
	消息 += 结果。数据。标题+ '，获得：' +结果。数据。coin + '金币\n'
	}
	否则{
	message += '??异常：' + result . 消息+ '\n'
	}
	解决（）
	} )
	} )
	} 
	//红包雨
	功能 礼物雨（） {
	return new Promise ( ( resolve , reject ) => {
	让 giftRainurl = {
	网址：`https://api.yuncheapp.cn/pearl-incentive/api/v1/giftRain/receive? ${ kkdheader } ` ,
	标题：{
	饼干：kkdcookie ，
	'连接' : '保持活动状态' ,
	“内容类型”：“应用程序/json” ，
	'主机' : 'api.yuncheapp.cn' ,
	'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
	} ,
	正文：'{“硬币”：40}'
	}
	
	$ . 发布（giftRainurl ，（错误， 响应， 数据） => {
	常量 结果 = JSON 。解析（数据）
	如果（日志） $ 。日志（数据）
	message += '
	如果（结果。消息 == '成功' ） {
	消息 += 结果。数据。广告池信息。按钮文本+ '\n'
	gRadlist = 结果。数据。广告池信息。广告信息[ 0 ] 。阿霉素
	}其他{
	message += '??异常：' + result . 消息+ '\n'
	}
	解决（）
	} )
	} )
	} 
	//红包奖励雨
	函数 giftRain_getcoins ( ) {
	return new Promise ( ( resolve , reject ) => {
	让 giftRain_getcoinsurl = {
	网址：`https://api.yuncheapp.cn/pearl-incentive/api/v1/ad/finish? ${ kkdheader } ` ,
	标题：{
	饼干：kkdcookie ，
	'连接' : '保持活动状态' ,
	“内容类型”：“应用程序/json” ，
	'主机' : 'api.yuncheapp.cn' ,
	'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
	} ,
	正文：`{"adPositionType":"GIFTRAIN_INCENTIVE","insertCnt":0,"adCodeId":"1300213002003","serverEcpm":0,"ttl":0,"requestCnt":0,"adProvider":"KS_NEW ","adRet":true,"resultExpire":0,"keyString":"1300213002003KS_NEW","endAd":false,"requestStartTime":0,"renderType":0,"adToken":"","adLlsid" :" ${ gRadlist } ","isPreload":false,"adAward":0}`
	}
	$ . 发布（giftRain_getcoinsurl ，（错误， 响应， 数据） => {
	常量 结果 = JSON 。解析（数据）
	如果（日志） $ 。日志（数据）
	如果（结果。消息 == '成功' ） {
	消息 += 结果。数据。coin + '金币\n'
	}
	否则{
	message += '??异常：' + result . 消息+ '\n'
	}
	解决（）
	} )
	} )
	} 
	//大转盘
	函数 彩票表1 （） {
	return new Promise ( ( resolve , reject ) => {
	让 lotteryTableurl = {
	网址：`https://api.yuncheapp.cn/pearl-incentive/api/v1/lotteryTable/drawV2? ${ kkdheader } ` ,
	标题：{
	饼干：kkdcookie ，
	'连接' : '保持活动状态' ,
	“内容类型”：“应用程序/json” ，
	'主机' : 'api.yuncheapp.cn' ,
	'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
	} ,
	正文：'{}'
	}
	
	$ . 发布（lotteryTableurl ，（错误， 响应， 数据） => {
	常量 结果 = JSON 。解析（数据）
	如果（日志） $ 。日志（数据）
	//message += '
	如果（结果。消息 == '成功' ） {
	//message += '
	eXadlist = 结果。数据。广告池信息。广告信息[ 0 ] 。阿霉素
	}
	否则{
	//message += '??异常:'+result.message+'\n'
	}
	解决（）
	} )
	} )
	} 
	
	//金币悬赏任务
	函数 extra_getcoins ( ) {
	return new Promise ( ( resolve , reject ) => {
	让 giftRain_getcoinsurl = {
	网址：`https://api.yuncheapp.cn/pearl-incentive/api/v1/ad/finish? ${ kkdheader } ` ,
	标题：{
	饼干：kkdcookie ，
	'连接' : '保持活动状态' ,
	“内容类型”：“应用程序/json” ，
	'主机' : 'api.yuncheapp.cn' ,
	'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
	} ,
	正文：`{"adRet":true,"adCodeId":"1300213002001","adProvider":"KS_NEW","adLlsid":" ${ eXadlist } ","adToken":"","adPositionType":"COIN_REWARD_INCENTIVE ","adBizType":"COIN_REWARD"}`
	}
	$ . 发布（giftRain_getcoinsurl ，（错误， 响应， 数据） => {
	常量 结果 = JSON 。解析（数据）
	如果（日志） $ 。日志（数据）
	message += '
	如果（结果。消息 == '成功' ） {
	消息 += 结果。数据。吐司+ '\n'
	}
	否则{
	message += '??异常：' + result . 消息+ '\n'
	}
	解决（）
	} )
	} )
	} 
	异步 函数 showmsg ( ) {
	如果( tz == 1 ) {
	if ( $ . isNode ( ) ) {
	$ . 日志（消息）
	if ( (小时 == 12 && 分钟 <= 20 ) || (小时 == 23 && 分钟 >= 40 ) ) {
	等待 通知。sendNotify ( $ .name , message ) _
	}
	}其他{
	$ . 日志（消息）
	if ( (小时 == 12 && 分钟 <= 20 ) || (小时 == 23 && 分钟 >= 40 ) ) {
	$ . 味精（jsname ，'' ，消息）
	}
	}
	}其他{
	$ . 日志（消息）
	}
	}
	函数 Env （t ，e ）{类 s {构造函数（t ）{ this 。env = t }发送（t ，e = "GET" ）{ t = "string" == typeof t？{网址：t }：t ；让 s =这个。得到；返回“POST” ===e && ( s = this . post ) , new Promise ( ( e , i ) => { s . call ( this , t , ( t , s , r ) => { t ? i ( t ) : e ( s ) } ) } ) }得到( t ) {返回 this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise( e => { this .get ( { url : t } , ( t , s , i ) => e ( i ) ) } ) } runScript ( t , e ) { return new Promise ( s = > { let i = this.getdata ( " @chavy_boxjs_userCfgs.httpapi " ) ; i = 我？我。替换( / \n / g , "" ) 。修剪( ) : i ; 让 r =这个。获取数据（“@chavy_boxjs_userCfgs.httpapi_timeout ” ）；r = r ? 1 * r : 20 , r = e && e 。超时？e . 超时：r ；常量[ o , h ] = i 。拆分（“@” ），a = { url：`http:// ${ h } /v1/scripting/evaluate` ，正文：{ script_text：t ，mock_type：“cron” ，超时：r } ，标题：{ "X-Key" : o ,接受: "*/*" } } ; 这.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs? 这个。fs：需要（“fs” ），这个。路径=这个。路径？这个。路径：需要（“路径” ）；常量 t =这个。路径。解析（this.dataFile ），e = this . _ _ 路径。解决（过程。cwd （），_这个。数据文件），s =这个。FS 。存在同步( t ) , i = ! s &&这个。FS 。存在同步( e ) ; if ( ! s && ! i )返回{ } ; {常量 i = s ? t : e ; 尝试{返回 JSON 。解析( this.fs.readFileSync ( i ) ) } catch ( t ) { return { } } } } } } writedata ( ) { if ( this.isNode ( ) ) { this . _ _ _ _ _ fs =这个。FS？这个。fs：需要（“fs” ），这个。路径=这个。路径？这个。路径：需要（“路径” ）；常量 t =这个。路径。解析（this.dataFile ），e = this . _ _ 路径。解析（进程.cwd （），this.dataFile ），s = this . _ _ _ FS 。存在同步( t ) , i = ! s &&这个。FS 。存在同步（e ），r = JSON 。字符串化（这个。数据）；年代？这个。FS 。writeFileSync （t ，r ）：我？这个。FS 。writeFileSync （e ，r ）：this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i) if ( r = Object ( r ) [ t ] , void 0 === r )返回 s ; 返回 r } lodash_set ( t , e , s ) {返回 对象( t ) !== t ? t : (数组.isArray ( e ) || ( e = e . toString _( ) 。匹配( / [ ^.[ \] ] + / g ) || [ ] ) , e . 切片（0 ，-1 ）。_ 减少( ( t , s , i ) =>对象( t [ s ] ) === t [ s ] ? t [ s ] : t [s ] =数学。绝对值( e [ i + 1 ] ) >> 0 == + e [ i + 1 ]？[ ] : { } , t ) [ e [ e . 长度- 1 ] ] = s , t ) } getdata ( t ) {让 e = this .getval ( t ) ; if ( / ^ @ / . test ( t ) ) { const [ , s , i ] = / ^ @ ( . * ? ) \. ( . * ? ) $ / . 执行( t ) , r = s ? 这个。getval ( s ) :"" ; if ( r )尝试{ const t = JSON 。解析（r ）；e = t ? 这个。lodash_get ( t , i , "" ) : e } catch ( t ) { e = "" } }返回 e } setdata ( t , e ) {让 s =！1 ; if ( / ^ @ / . test ( e ) ) { const [ , i , r ] = / ^ @ ( . * ? ) \. ( . * ? ) $ / . 执行（e ），o =这个。getval ( i ) , h = i ?“空” === o？空：o || "{}" : "{}" ; 尝试{常量 e = JSON 。解析（h ）；这个。lodash_set ( e , r , t ) , s = this 。setval ( JSON . stringify ( e ) , i ) } catch ( e ) {const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this. isSurge ( ) || 这个。isLoon ( ) ? $persistentStore 。读（t ）：这个。是全X ( ) ? $首选项。valueForKey ( t )：这个。是节点（）？（this.data = this.loaddata （），this.data [ t ] ）_ _ _ _ _ _:这个。数据&&这个。数据[ t ] || 空} setval ( t , e ) {返回 这个。isSurge ( ) || 这个。isLoon ( ) ? $persistentStore 。写（t ，e ）：这个。是全X ( ) ? $首选项。setValueForKey ( t, e ) :这个。是节点（）？（this.data = this.loaddata ( ) , this.data [ e ] = t , this.writedata ( ) ,! 0 ）：this.data [ e ] = t _ _ _ _ _ 数据&&这个。数据[ e ] || 空} initGotEnv （吨) {这个. 得到=这个。有吗？这个。得到：需要（“得到” ），这个。cktough =这个。强硬？这个。cktough：需要（“tough-cookie” ），这个。ckjar =这个。克贾尔？这个。ckjar：新 这个。艰难。CookieJar , t && ( t . headers = t . headers ? t . headers : { } , void 0 === t . headers . Cookie && void 0 === t . cookieJar && ( t . cookieJar = this . ckjar ) ) }得到( t , e = ( ( )=> { } ) ) { t 。headers && ( delete t.headers [ " Content-Type" ] , delete t.headers [ " Content -Length " ] ) , this . isSurge ( ) || 这个。isLoon ( ) ? ( this .isSurge ( ) && this .isNeedRewrite && ( t . _ _ 标题= t 。标题|| { } ，对象。分配（t.headers ，{ “ X-Surge-Skip-Scripting”：！1 } ）），$ httpClient 。得到( t , ( t , s , i ) => { ! t && s && ( s . body = i , s .状态码= s 。状态），e （t ，s ，i ）} ））：这个。是全X ( ) ? ( this .isNeedRewrite && ( t .opts = t .opts || { } , Object .assign ( t .opts , { hints : ! 1 } _ _ _ _ _）），$任务。获取( t ) 。然后( t => { const { statusCode : s , statusCode : i , headers : r , body : o } = t ; e ( null , { status : s , statusCode : i , headers : r , body : o} , o ) } , t => e ( t ) ) ) :这个。isNode ( ) && ( this.initGotEnv ( t ) , this.got ( t ) .on ( " redirect " , ( t , e ) = > { try { if ( t.headers [ " set - cookie " ]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr ( t ) } } ) 。然后( t => { const { statusCode : s , statusCode : i , headers : r , body : o } = t ; e ( null , { status : s , statusCode : i , headers : r , body : o } ,o ) } , t => { const {消息: s ,响应: i } = t ; e ( s , i , i && i . body ) } ) ) } post ( t , e = ( ( ) => { } ) ) { if ( t . body && t .headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&这个。isNeedRewrite && ( t.headers = t.headers || { } , Object.assign ( t.headers , { " X - Surge - Skip - Scripting " : ! 1 } ) ) , $ httpClient . 发布( t , ( t , s , i ) => { ! t && s && ( s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},对象。分配（t.opts ，{提示：！1 } ）），$ task 。_ 获取( t ) 。然后( t => { const { statusCode : s , statusCode : i , headers : r , body : o } = t ; e ( null , { status: s , statusCode : i , headers : r , body : o } , o ) } , t => e ( t ) ) ; 否则 如果（这个。isNode （））{这个。_ initGotEnv ( t ) ; 常量{ url : s , ... i } = t ;这个。得到。发布( s , i ) 。然后( t => { const { statusCode : s , statusCode : i , headers : r , body : o } = t ; e ( null , { status : s , statusCode : i , headers : r , body :o } , o ) } , t => { const { message : s , response : i } = t ; e ( s , i , i && i.body ) } ) } } time ( t ) { let e = { " M + " : ( new Date ) . 获取月份( ) + 1 ，“d+ ”：（新 日期）。getDate ( ) ，“H+ ”：（新 日期）。getHours ( ) ，“m+ ”：（新 日期）。getMinutes ( ) ，“s+ ”：（新 日期）。getSeconds ( ) , "q+" :数学。楼( ( (新 日期）。getMonth ( ) + 3 ) / 3 ) , S :(新日期) 。_ 获取毫秒（）} ; / ( y + ) / . 测试( t ) && ( t = t .替换( RegExp . $1 , ( (新日期) . getFullYear ( ) +"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length? e [ s ] : ( "00" + e [ s ] ) 。substr ( ( "" + e [ s ] ) .长度) ) ) ; 返回 t } msg ( e = t , s = "" , i = "" , r ) { const o = t => { if (！t )返回 t ; if ( "string" == typeof t )返回 this 。isLoon ( ) ? 吨：这个。是全X ( ) ? { “开放网址”：t }：这个。是浪涌( ) ? {网址：t }：无效 0 ；if ( "object" == typeof t) { if ( this .isLoon ( ) ) {让e = t . _ 打开网址|| 吨。网址|| t [ “开放网址” ] ，s = t 。媒体网址|| t [ “媒体网址” ] ；return { openUrl : e , mediaUrl : s } } if ( this .isQuanX ( ) _ ) {让 e = t [ "open-url" ] || 吨。网址|| 吨。openUrl , s = t [ "媒体 URL" ] || 吨。媒体网址；return { "open-url" : e , "media-url " : s } } if ( this .isSurge ( ) ) { let e = t . 网址 || 吨。打开网址|| t [ “开放网址” ] ；返回{网址：e } } } } ; 这个。静音|| ( this.isSurge ( ) || this.isLoon ( ) ? $ notification.post ( e , s , i , o ( r ) ) : this.isQuanX _ _ _ _ _ _ _()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log ( h.join ( " \ n " ) ) ，这个。日志=这个。日志。连接( h ) }日志( ... t ) { t . 长度> 0 && ( this.logs = [ ... this.logs , ... t ] ) ，控制台。 _ _ _ _ 日志( t .加入（this.logSeparator ））} logErr （t ，e ）{ const s = ！_ _ 这个。isSurge ( ) && ! 这个。isQuanX ( ) && ! 这个。isLoon ( ) ; 年代？这个。日志( "" , `\u2757\ufe0f ${ this.name } , \ u9519 \ u8bef !` , t 。堆栈）：这个。log ( "" , `\u2757\ufe0f ${ this.name } , \ u9519 \ u8bef !` , t ) } wait ( t ) { return new Promise ( e => setTimeout ( e , t ) ) } done ( t = { } ) {常量 e = (新 Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.是全X ( ) || 这个。isLoon ( ) ) && $done ( t ) } } ( t , e ) }
