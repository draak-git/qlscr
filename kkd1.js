	/*
	��ë�Լ�ȡ�ᣬÿ��2-3ë
	���ߣ�����-�׻�
	��ǰ������
	��������
	��ת��
	�����
	�����������
	
	#��ȡһ����ѻ�ȡcookie
	kkdheader��kkdcookie
	
	���� YML
	KKDHEADER-kkdheader
	KKDCOOKIE-kkdcookie
	[�м���]
	������ = api.yuncheapp.cn
	#Ȧx
	[��д����]
	^https:\/\/api\.yuncheapp\.cn\/pearl-incentive\/api\/v1\/task\/intervalAward\/receive url script-request-header https://raw.githubusercontent.com/ ZhiYi-N/Private-Script/master/Scripts/kkd.js
	#��
	http-request ^https:\/\/api\.yuncheapp\.cn\/pearl-incentive\/api\/v1\/task\/intervalAward\/receive script-path=https://raw.githubusercontent.com /ZhiYi-N/Private-Script/master/Scripts/kkd.js, requires-body=true, timeout=10, tag=����cookie
	��ӿ
	kkdcookie = type=http-request,pattern=^https:\/\/api\.yuncheapp\.cn\/pearl-incentive\/api\/v1\/task\/intervalAward\/receive,requires-body=1 ,max-size=0,script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/kkd.js,script-update-interval=0
	*/
	const jsname = '�쿴��'
	���� $ = ����( jsname )
	���� ֪ͨ = $ ���ǽڵ㣨����Ҫ��'./sendNotify' ����'' ��
	���� kkdheaderArr = [ ]
	���� kkdcookieArr = [ ]
	���� kkdbodyArr = [ ]
	�� kkdheader = $ ����ȡ���ݣ� ' kkdheader ' ��
	�� kkdcookie = $ ����ȡ���ݣ� ' kkdcookie ' ��
	�� kkdbody = $ ����ȡ���ݣ� ' kkdbody ' ��
	const logs = false //��־
	���� ���� = 1 ; // ������1Ϊ����
	�� tz = ( $ .getval ( ' tz' ) || '1' ) ; //֪ͨ
	���� ���� = '' ;
	�� lTadlist = '15884282854261489762' ;
	�� gRadlist = '15884282854261489762' ;
	�� eXadlist = '15884282854261489762' ;
	var ��Ϣ= '' ;
	
	if ( $ . isNode ( ) ) {
	Сʱ = �� ���ڣ� �� ���ڣ�����getTime ����+ 8 * 60 * 60 * 1000 ����_ ��ȡʱ�䣨���� 
	���� = �� ���ڣ� �� ���ڣ�����getTime ����+ 8 * 60 * 60 * 1000 ����_ ��ȡ���ӣ����� 
	}����{
	Сʱ = ���� ���ڣ���������ȡʱ�䣨����
	���� = ���� ���ڣ���������ȡ���ӣ�����
	}
	//CK����
	
	�� isGetCookie = typeof $request !== 'undefined'
	��� ��isGetCookie �� {
	��ȡCookie ( ) ;
	$ . ���( )
	} 
	if ( $ . isNode ( ) ) {
	��� �����̡�������KKDHEADER &&���̡�������KKDHEADER��indexOf ��' # ' ��> - 1 ��{ _ _ 
	kkdheader = ���̡�������KKDH ͷ����֣�'#' ����
	����̨����־��`����ѡ������"#"��\n` ��
	}
	���� if (����. env . KKDHEADER && ����. env . KKDHEADER . indexOf ( '\n' ) > - 1 ) {
	kkdheader = ���̡�������KKDH ͷ�����( '\n' ) ;
	����̨����־��`��ѡ�����û��и���\n` ��
	} ���� {
	kkdheader = ���̡�������KKDH ͷ�����( )
	} ;
	��� �����̡�������KKDCOOKIE &&���̡� ������KKDCOOKIE��indexOf ��' # ' ��> - 1 ��{ _ _ 
	kkdcookie = ���̡�������KKDCOOKIE ����֣�'#' ����
	}
	���� if (����.env .KKDCOOKIE &&����.env .KKDCOOKIE .split ( ' \ n ' ) .length > 0 ) { _ _ _ 
	kkdcookie = ���̡�������KKDCOOKIE �����( '\n' ) ;
	} ���� {
	kkdcookie = ���̡�������KKDCOOKIE �����( )
	} ;
	���󡣼���kkdheader ����forEach ( (��Ŀ) => {
	��� ��kkdheader [��Ŀ] �� {
	kkdheaderArr ���ƣ�kkdheader [��Ŀ] ��
	}
	} ) ;
	���󡣼���kkdcookie ����forEach ( (��Ŀ) => {
	if ( kkdcookie [��Ŀ] ) {
	kkdcookieArr ���ƣ�kkdcookie [��Ŀ] ��
	}
	} ) ;
	
	����̨��log ( `============ �ű�ִ��-���ʱ�׼ʱ��(UTC)��${ new Date ( ) . toLocaleString ( ) } =============\ n` )
	����̨��log ( `============ �ű�ִ��-����ʱ��(UTC+8)��${ new Date ( new Date ( ) . getTime ( ) + 8 * 60 * 60 * 1000 ) . toLocaleString ( ) } =============\n` )
	} ���� {
	kkdheaderArr ���ƣ�$ .getdata ��'kkdheader ' ����
	kkdcookieArr ���ƣ�$ .getdata ��'kkdcookie ' ����
	�� kkdcount = ( $ .getval ( 'kkdcount' ) || ' 1' ) ; 
	for (�� i = 2 ; i <= kkdcount ; i ++ ) {
	kkdheaderArr ���ƣ�$ .getdata ��`kkdheader $ { i } ` ����
	kkdcookieArr �����ͣ�$ .getdata ��`kkdcookie $ { i } ` ����
	}
	}
	�����첽 ���� => {
	��� ����kkdcookieArr [ 0 ] �� {
	$ . msg ( $ . name , '����ʾ�����Ȼ�ȡ�쿴��һcookie' )
	���أ�
	}
	����̨����־��`-------------��${ kkdcookieArr .length }���ռ�---------------- \ n`��
	for (�� i = 0 ; i < kkdcookieArr .����; i ++ ) {
	if ( kkdcookieArr [ i ] ) {
	���� = ''
	kkdheader = kkdheaderArr [��] ;
	kkdcookie = kkdcookieArr [��] ;
	$ . ָ�� = �� + 1 ;
	����̨��log ( `\n��ʼ���쿴��${ $ . index }��` )
	�ȴ� �û���Ϣ( )
	�ȴ� ����( )
	�ȴ� ʱ��������( )
	�ȴ� ��Ʊ����
	�ȴ� lotteryTable_getcoins ( )
	//�����Դ��ת��
	�ȴ� lotteryTable1 ( )
	�ȴ� extra_getcoins ( )
	�ȴ� ������( )
	�ȴ� giftRain_getcoins ( )
	�ȴ� showmsg ( )
	}
	}
	} ) ( )
	. ��׽( ( e ) => $ . logErr ( e ) )
	. ���( ( ) => $ .���( ) )
	���� GetCookie ( ) {
	if ( $request && $request . url . indexOf ( "intervalAward" ) >= 0 ) {
	���� kkdheader = $request ����ַ����֣�`?` ��[ 1 ]
	��� ��kkdheader �� $ ���������ݣ�kkdheader ��'kkdheader' ��
	$ . log ( `[ ${ jsname } ] ��ȡkkdheader����: �ɹ�,kkdheader: ${ kkdheader } ` )
	$ . msg ( `��ȡkkdheader: �ɹ�, `` )
	���� kkdcookie = $request ����ͷ[ 'Cookie' ]
	��� ��kkdcookie �� $ ����������( kkdcookie , 'kkdcookie' )
	$ . log ( `[ ${ jsname } ] ��ȡkkdcookie����: �ɹ�,kkdcookie: ${ kkdcookie } ` )
	$ . msg ( `��ȡkkdcookie: �ɹ�, `` )
	}
	if ( $request && $request . url . indexOf ( "finish" ) >= 0 ) {
	���� kkdbody = $request ������
	��� ��kkdbody �� $ ���������ݣ�kkdbody ��'kkdbody' ��
	$ . log ( `[ ${ jsname } ] ��ȡkkdbody����: �ɹ�,kkdbody: ${ kkdbody } ` )
	$ . msg ( `��ȡkkdbody: �ɹ�, ` )
	}
	}
	�첽 ���� ����( ) {
	��������� == 1 ��{
	�ȴ� ����( ) ;
	}
	}
	���� ����( ) {
	return new Promise ( ( resolve , reject ) => {
	�� ������ַ = {
	��ַ��`https://api.yuncheapp.cn/pearl-incentive/api/v1/task/invite/verify? ${ kkdheader } ` ,
	���⣺{
	���ɣ�kkdcookie ��
	'����' : '���ֻ״̬' ,
	���������͡�����Ӧ�ó���/json�� ��
	'����' : 'api.yuncheapp.cn' ,
	'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
	} ,
	���ģ�'{�����롱����JFN4M3��}'
	}
	$ . ������������ַ�������� ��Ӧ�� ���ݣ� => {
	���� ��� = JSON �����������ݣ�
	�������
	} )
	} )
	} 
	//������Ϣ
	���� �û���Ϣ���� {
	return new Promise ( ( resolve , reject ) => {
	�� userinfourl = {
	��ַ��`https://api.yuncheapp.cn/pearl-incentive/api/v1/user/tabV2? ${ kkdheader } ` ,
	���⣺{
	���ɣ�kkdcookie ��
	'����' : '���ֻ״̬' ,
	���������͡�����Ӧ�ó���/json�� ��
	'����' : 'api.yuncheapp.cn' ,
	'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
	} ,
	���ģ�'{}'
	}
	$ . ����(�û���Ϣ, (����, ��Ӧ, ����) => {
	���� ��� = JSON �����������ݣ�
	�������־�� $ ����־�����ݣ�
	������������Ϣ == '�ɹ�' �� {
	��Ϣ += '+��������ݡ��û���Ϣ���ǳ�+ '-�����ѵã�' +��������ݡ��û���Ϣ��todayCoins + '-������' + result . ���ݡ��û���Ϣ��Ӳ��+ '\n'
	
	} ����{
	other += '??�쳣'
	}
	�������
	} )
	} )
	} 
	//��ת��
	���� ��Ʊ���� {
	return new Promise ( ( resolve , reject ) => {
	�� lotteryTableurl = {
	��ַ��`https://api.yuncheapp.cn/pearl-incentive/api/v1/lotteryTable/drawV2? ${ kkdheader } ` ,
	���⣺{
	���ɣ�kkdcookie ��
	'����' : '���ֻ״̬' ,
	���������͡�����Ӧ�ó���/json�� ��
	'����' : 'api.yuncheapp.cn' ,
	'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
	} ,
	���ģ�'{}'
	}
	
	$ . ������lotteryTableurl �������� ��Ӧ�� ���ݣ� => {
	���� ��� = JSON �����������ݣ�
	�������־�� $ ����־�����ݣ�
	message += '
	������������Ϣ == '�ɹ�' �� {
	message += '+ result . ���ݡ�����+ ','
	lTadlist = ��������ݡ�������Ϣ�������Ϣ[ 0 ] ����ù��
	}
	����{
	message += '??�쳣��' + result . ��Ϣ+ '\n'
	}
	�������
	} )
	} )
	} 
	
	//��ת��˫�������ر���
	���� lotteryTable_getcoins ( ) {
	//const lTbody = kkdbody.replace("GIFTRAIN_INCENTIVE","LOTTERYTABLE_INCENTIVE");
	//const lTbody = kkdbody.replace(/adLlsid":"\d+/,`adLlsid":"${lTadlist}`);
	//$.log('111111'+lTadlist)
	return new Promise ( ( resolve , reject ) => {
	�� lotteryTable_getcoinsurl = {
	��ַ��`https://api.yuncheapp.cn/pearl-incentive/api/v1/ad/finish? ${ kkdheader } ` ,
	���⣺{
	���ɣ�kkdcookie ��
	'����' : '���ֻ״̬' ,
	���������͡�����Ӧ�ó���/json�� ��
	'����' : 'api.yuncheapp.cn' ,
	'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
	} ,
	���ģ�`{"adPositionType":"LOTTERYTABLE_INCENTIVE","insertCnt":0,"adCodeId":"1300213002001","serverEcpm":0,"ttl":0,"requestCnt":0,"adProvider":"KS_NEW ","adRet":true,"resultExpire":0,"keyString":"1300213002001KS_NEW","endAd":false,"requestStartTime":0,"adBizType":"LOTTERY_TABLE","re??nderType":0,"adToken ":"","adLlsid":" ${ lTadlist } ","isPreload":false,"adAward":0}`
	}
	
	$ . ������lotteryTable_getcoinsurl �������� ��Ӧ�� ���ݣ� => {
	���� ��� = JSON �����������ݣ�
	�������־�� $ ����־�����ݣ�
	������������Ϣ == '�ɹ�' �� {
	��Ϣ += +��������ݡ�coin + '���\n'
	}
	����{
	message += '??�쳣��' + result . ��Ϣ+ '\n'
	}
	�������
	} )
	} )
	} 
	// ��������
	���� ���佱( ) {
	return new Promise ( ( resolve , reject ) => {
	�� intervalAwardurl = {
	��ַ��`https://api.yuncheapp.cn/pearl-incentive/api/v1/task/intervalAward/receive? ${ kkdheader } ` ,
	���⣺{
	���ɣ�kkdcookie ��
	'����' : '���ֻ״̬' ,
	���������͡�����Ӧ�ó���/json�� ��
	'����' : 'api.yuncheapp.cn' ,
	'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
	}
	}
	$ . post ( intervalAwardurl , ( error , response , data ) => {
	���� ��� = JSON �����������ݣ�
	�������־�� $ ����־�����ݣ�
	message += '
	������������Ϣ == '�ɹ�' �� {
	��Ϣ += ��������ݡ�����+ '����ã�' +��������ݡ�coin + '���\n'
	}
	����{
	message += '??�쳣��' + result . ��Ϣ+ '\n'
	}
	�������
	} )
	} )
	} 
	//�����
	���� �����꣨�� {
	return new Promise ( ( resolve , reject ) => {
	�� giftRainurl = {
	��ַ��`https://api.yuncheapp.cn/pearl-incentive/api/v1/giftRain/receive? ${ kkdheader } ` ,
	���⣺{
	���ɣ�kkdcookie ��
	'����' : '���ֻ״̬' ,
	���������͡�����Ӧ�ó���/json�� ��
	'����' : 'api.yuncheapp.cn' ,
	'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
	} ,
	���ģ�'{��Ӳ�ҡ���40}'
	}
	
	$ . ������giftRainurl �������� ��Ӧ�� ���ݣ� => {
	���� ��� = JSON �����������ݣ�
	�������־�� $ ����־�����ݣ�
	message += '
	������������Ϣ == '�ɹ�' �� {
	��Ϣ += ��������ݡ�������Ϣ����ť�ı�+ '\n'
	gRadlist = ��������ݡ�������Ϣ�������Ϣ[ 0 ] ����ù��
	}����{
	message += '??�쳣��' + result . ��Ϣ+ '\n'
	}
	�������
	} )
	} )
	} 
	//���������
	���� giftRain_getcoins ( ) {
	return new Promise ( ( resolve , reject ) => {
	�� giftRain_getcoinsurl = {
	��ַ��`https://api.yuncheapp.cn/pearl-incentive/api/v1/ad/finish? ${ kkdheader } ` ,
	���⣺{
	���ɣ�kkdcookie ��
	'����' : '���ֻ״̬' ,
	���������͡�����Ӧ�ó���/json�� ��
	'����' : 'api.yuncheapp.cn' ,
	'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
	} ,
	���ģ�`{"adPositionType":"GIFTRAIN_INCENTIVE","insertCnt":0,"adCodeId":"1300213002003","serverEcpm":0,"ttl":0,"requestCnt":0,"adProvider":"KS_NEW ","adRet":true,"resultExpire":0,"keyString":"1300213002003KS_NEW","endAd":false,"requestStartTime":0,"renderType":0,"adToken":"","adLlsid" :" ${ gRadlist } ","isPreload":false,"adAward":0}`
	}
	$ . ������giftRain_getcoinsurl �������� ��Ӧ�� ���ݣ� => {
	���� ��� = JSON �����������ݣ�
	�������־�� $ ����־�����ݣ�
	������������Ϣ == '�ɹ�' �� {
	��Ϣ += ��������ݡ�coin + '���\n'
	}
	����{
	message += '??�쳣��' + result . ��Ϣ+ '\n'
	}
	�������
	} )
	} )
	} 
	//��ת��
	���� ��Ʊ��1 ���� {
	return new Promise ( ( resolve , reject ) => {
	�� lotteryTableurl = {
	��ַ��`https://api.yuncheapp.cn/pearl-incentive/api/v1/lotteryTable/drawV2? ${ kkdheader } ` ,
	���⣺{
	���ɣ�kkdcookie ��
	'����' : '���ֻ״̬' ,
	���������͡�����Ӧ�ó���/json�� ��
	'����' : 'api.yuncheapp.cn' ,
	'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
	} ,
	���ģ�'{}'
	}
	
	$ . ������lotteryTableurl �������� ��Ӧ�� ���ݣ� => {
	���� ��� = JSON �����������ݣ�
	�������־�� $ ����־�����ݣ�
	//message += '
	������������Ϣ == '�ɹ�' �� {
	//message += '
	eXadlist = ��������ݡ�������Ϣ�������Ϣ[ 0 ] ����ù��
	}
	����{
	//message += '??�쳣:'+result.message+'\n'
	}
	�������
	} )
	} )
	} 
	
	//�����������
	���� extra_getcoins ( ) {
	return new Promise ( ( resolve , reject ) => {
	�� giftRain_getcoinsurl = {
	��ַ��`https://api.yuncheapp.cn/pearl-incentive/api/v1/ad/finish? ${ kkdheader } ` ,
	���⣺{
	���ɣ�kkdcookie ��
	'����' : '���ֻ״̬' ,
	���������͡�����Ӧ�ó���/json�� ��
	'����' : 'api.yuncheapp.cn' ,
	'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
	} ,
	���ģ�`{"adRet":true,"adCodeId":"1300213002001","adProvider":"KS_NEW","adLlsid":" ${ eXadlist } ","adToken":"","adPositionType":"COIN_REWARD_INCENTIVE ","adBizType":"COIN_REWARD"}`
	}
	$ . ������giftRain_getcoinsurl �������� ��Ӧ�� ���ݣ� => {
	���� ��� = JSON �����������ݣ�
	�������־�� $ ����־�����ݣ�
	message += '
	������������Ϣ == '�ɹ�' �� {
	��Ϣ += ��������ݡ���˾+ '\n'
	}
	����{
	message += '??�쳣��' + result . ��Ϣ+ '\n'
	}
	�������
	} )
	} )
	} 
	�첽 ���� showmsg ( ) {
	���( tz == 1 ) {
	if ( $ . isNode ( ) ) {
	$ . ��־����Ϣ��
	if ( (Сʱ == 12 && ���� <= 20 ) || (Сʱ == 23 && ���� >= 40 ) ) {
	�ȴ� ֪ͨ��sendNotify ( $ .name , message ) _
	}
	}����{
	$ . ��־����Ϣ��
	if ( (Сʱ == 12 && ���� <= 20 ) || (Сʱ == 23 && ���� >= 40 ) ) {
	$ . ζ����jsname ��'' ����Ϣ��
	}
	}
	}����{
	$ . ��־����Ϣ��
	}
	}
	���� Env ��t ��e ��{�� s {���캯����t ��{ this ��env = t }���ͣ�t ��e = "GET" ��{ t = "string" == typeof t��{��ַ��t }��t ���� s =������õ������ء�POST�� ===e && ( s = this . post ) , new Promise ( ( e , i ) => { s . call ( this , t , ( t , s , r ) => { t ? i ( t ) : e ( s ) } ) } ) }�õ�( t ) {���� this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise( e => { this .get ( { url : t } , ( t , s , i ) => e ( i ) ) } ) } runScript ( t , e ) { return new Promise ( s = > { let i = this.getdata ( " @chavy_boxjs_userCfgs.httpapi " ) ; i = �ң��ҡ��滻( / \n / g , "" ) ���޼�( ) : i ; �� r =�������ȡ���ݣ���@chavy_boxjs_userCfgs.httpapi_timeout �� ����r = r ? 1 * r : 20 , r = e && e ����ʱ��e . ��ʱ��r ������[ o , h ] = i ����֣���@�� ����a = { url��`http:// ${ h } /v1/scripting/evaluate` �����ģ�{ script_text��t ��mock_type����cron�� ����ʱ��r } �����⣺{ "X-Key" : o ,����: "*/*" } } ; ��.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs? �����fs����Ҫ����fs�� ���������·��=�����·���������·������Ҫ����·���� �������� t =�����·����������this.dataFile ����e = this . _ _ ·������������̡�cwd ������_����������ļ�����s =�����FS ������ͬ��( t ) , i = ! s &&�����FS ������ͬ��( e ) ; if ( ! s && ! i )����{ } ; {���� i = s ? t : e ; ����{���� JSON ������( this.fs.readFileSync ( i ) ) } catch ( t ) { return { } } } } } } writedata ( ) { if ( this.isNode ( ) ) { this . _ _ _ _ _ fs =�����FS�������fs����Ҫ����fs�� ���������·��=�����·���������·������Ҫ����·���� �������� t =�����·����������this.dataFile ����e = this . _ _ ·��������������.cwd ������this.dataFile ����s = this . _ _ _ FS ������ͬ��( t ) , i = ! s &&�����FS ������ͬ����e ����r = JSON ���ַ���������������ݣ�������������FS ��writeFileSync ��t ��r �����ң������FS ��writeFileSync ��e ��r ����this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i) if ( r = Object ( r ) [ t ] , void 0 === r )���� s ; ���� r } lodash_set ( t , e , s ) {���� ����( t ) !== t ? t : (����.isArray ( e ) || ( e = e . toString _( ) ��ƥ��( / [ ^.[ \] ] + / g ) || [ ] ) , e . ��Ƭ��0 ��-1 ����_ ����( ( t , s , i ) =>����( t [ s ] ) === t [ s ] ? t [ s ] : t [s ] =��ѧ������ֵ( e [ i + 1 ] ) >> 0 == + e [ i + 1 ]��[ ] : { } , t ) [ e [ e . ����- 1 ] ] = s , t ) } getdata ( t ) {�� e = this .getval ( t ) ; if ( / ^ @ / . test ( t ) ) { const [ , s , i ] = / ^ @ ( . * ? ) \. ( . * ? ) $ / . ִ��( t ) , r = s ? �����getval ( s ) :"" ; if ( r )����{ const t = JSON ��������r ����e = t ? �����lodash_get ( t , i , "" ) : e } catch ( t ) { e = "" } }���� e } setdata ( t , e ) {�� s =��1 ; if ( / ^ @ / . test ( e ) ) { const [ , i , r ] = / ^ @ ( . * ? ) \. ( . * ? ) $ / . ִ�У�e ����o =�����getval ( i ) , h = i ?���ա� === o���գ�o || "{}" : "{}" ; ����{���� e = JSON ��������h ���������lodash_set ( e , r , t ) , s = this ��setval ( JSON . stringify ( e ) , i ) } catch ( e ) {const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this. isSurge ( ) || �����isLoon ( ) ? $persistentStore ������t �����������ȫX ( ) ? $��ѡ�valueForKey ( t )��������ǽڵ㣨������this.data = this.loaddata ������this.data [ t ] ��_ _ _ _ _ _:���������&&���������[ t ] || ��} setval ( t , e ) {���� �����isSurge ( ) || �����isLoon ( ) ? $persistentStore ��д��t ��e �����������ȫX ( ) ? $��ѡ�setValueForKey ( t, e ) :������ǽڵ㣨������this.data = this.loaddata ( ) , this.data [ e ] = t , this.writedata ( ) ,! 0 ����this.data [ e ] = t _ _ _ _ _ ����&&���������[ e ] || ��} initGotEnv ����) {���. �õ�=���������������õ�����Ҫ�����õ��� ���������cktough =�����ǿӲ�������cktough����Ҫ����tough-cookie�� ���������ckjar =������˼ֶ��������ckjar���� ��������ѡ�CookieJar , t && ( t . headers = t . headers ? t . headers : { } , void 0 === t . headers . Cookie && void 0 === t . cookieJar && ( t . cookieJar = this . ckjar ) ) }�õ�( t , e = ( ( )=> { } ) ) { t ��headers && ( delete t.headers [ " Content-Type" ] , delete t.headers [ " Content -Length " ] ) , this . isSurge ( ) || �����isLoon ( ) ? ( this .isSurge ( ) && this .isNeedRewrite && ( t . _ _ ����= t ������|| { } �����󡣷��䣨t.headers ��{ �� X-Surge-Skip-Scripting������1 } ������$ httpClient ���õ�( t , ( t , s , i ) => { ! t && s && ( s . body = i , s .״̬��= s ��״̬����e ��t ��s ��i ��} �������������ȫX ( ) ? ( this .isNeedRewrite && ( t .opts = t .opts || { } , Object .assign ( t .opts , { hints : ! 1 } _ _ _ _ _������$���񡣻�ȡ( t ) ��Ȼ��( t => { const { statusCode : s , statusCode : i , headers : r , body : o } = t ; e ( null , { status : s , statusCode : i , headers : r , body : o} , o ) } , t => e ( t ) ) ) :�����isNode ( ) && ( this.initGotEnv ( t ) , this.got ( t ) .on ( " redirect " , ( t , e ) = > { try { if ( t.headers [ " set - cookie " ]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr ( t ) } } ) ��Ȼ��( t => { const { statusCode : s , statusCode : i , headers : r , body : o } = t ; e ( null , { status : s , statusCode : i , headers : r , body : o } ,o ) } , t => { const {��Ϣ: s ,��Ӧ: i } = t ; e ( s , i , i && i . body ) } ) ) } post ( t , e = ( ( ) => { } ) ) { if ( t . body && t .headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&�����isNeedRewrite && ( t.headers = t.headers || { } , Object.assign ( t.headers , { " X - Surge - Skip - Scripting " : ! 1 } ) ) , $ httpClient . ����( t , ( t , s , i ) => { ! t && s && ( s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},���󡣷��䣨t.opts ��{��ʾ����1 } ������$ task ��_ ��ȡ( t ) ��Ȼ��( t => { const { statusCode : s , statusCode : i , headers : r , body : o } = t ; e ( null , { status: s , statusCode : i , headers : r , body : o } , o ) } , t => e ( t ) ) ; ���� ����������isNode ������{�����_ initGotEnv ( t ) ; ����{ url : s , ... i } = t ;������õ�������( s , i ) ��Ȼ��( t => { const { statusCode : s , statusCode : i , headers : r , body : o } = t ; e ( null , { status : s , statusCode : i , headers : r , body :o } , o ) } , t => { const { message : s , response : i } = t ; e ( s , i , i && i.body ) } ) } } time ( t ) { let e = { " M + " : ( new Date ) . ��ȡ�·�( ) + 1 ����d+ �������� ���ڣ���getDate ( ) ����H+ �������� ���ڣ���getHours ( ) ����m+ �������� ���ڣ���getMinutes ( ) ����s+ �������� ���ڣ���getSeconds ( ) , "q+" :��ѧ��¥( ( (�� ���ڣ���getMonth ( ) + 3 ) / 3 ) , S :(������) ��_ ��ȡ���루��} ; / ( y + ) / . ����( t ) && ( t = t .�滻( RegExp . $1 , ( (������) . getFullYear ( ) +"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length? e [ s ] : ( "00" + e [ s ] ) ��substr ( ( "" + e [ s ] ) .����) ) ) ; ���� t } msg ( e = t , s = "" , i = "" , r ) { const o = t => { if (��t )���� t ; if ( "string" == typeof t )���� this ��isLoon ( ) ? �֣��������ȫX ( ) ? { ��������ַ����t }�����������ӿ( ) ? {��ַ��t }����Ч 0 ��if ( "object" == typeof t) { if ( this .isLoon ( ) ) {��e = t . _ ����ַ|| �֡���ַ|| t [ ��������ַ�� ] ��s = t ��ý����ַ|| t [ ��ý����ַ�� ] ��return { openUrl : e , mediaUrl : s } } if ( this .isQuanX ( ) _ ) {�� e = t [ "open-url" ] || �֡���ַ|| �֡�openUrl , s = t [ "ý�� URL" ] || �֡�ý����ַ��return { "open-url" : e , "media-url " : s } } if ( this .isSurge ( ) ) { let e = t . ��ַ || �֡�����ַ|| t [ ��������ַ�� ] ������{��ַ��e } } } } ; ���������|| ( this.isSurge ( ) || this.isLoon ( ) ? $ notification.post ( e , s , i , o ( r ) ) : this.isQuanX _ _ _ _ _ _ _()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log ( h.join ( " \ n " ) ) ���������־=�������־������( h ) }��־( ... t ) { t . ����> 0 && ( this.logs = [ ... this.logs , ... t ] ) ������̨�� _ _ _ _ ��־( t .���루this.logSeparator ����} logErr ��t ��e ��{ const s = ��_ _ �����isSurge ( ) && ! �����isQuanX ( ) && ! �����isLoon ( ) ; ������������־( "" , `\u2757\ufe0f ${ this.name } , \ u9519 \ u8bef !` , t ����ջ���������log ( "" , `\u2757\ufe0f ${ this.name } , \ u9519 \ u8bef !` , t ) } wait ( t ) { return new Promise ( e => setTimeout ( e , t ) ) } done ( t = { } ) {���� e = (�� Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.��ȫX ( ) || �����isLoon ( ) ) && $done ( t ) } } ( t , e ) }
