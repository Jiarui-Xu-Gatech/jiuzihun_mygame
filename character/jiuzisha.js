'use strict';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'jiuzisha',
		connect:true,
        // characterSort:{
		// 	jiuzisha:{
		// 		// jiuzizhihun:['caoyan','hanxin','duomingdong','lenyue','jinshouzhen','shuimiaoer','caoxin','kaer','jiuxiner'],
		// 		xiyuduyufengyun:['hanxin','ouruoling','duomingdong','zhangning_jiuzi','caoxin','caoyan','quanjinfa','meixian','hanshou'],
		// 		nanyuhuatianjiudi:['jiuxiner','chenyingchao','wangyuling','zhurongnv','dingya','wangyueheng'],
		// 		dongyulenxuewangchao:['lenenda','wusheng_wusheng','liyun','lenyue','yawen','shuimiaoer'],
		// 		beiyulanchuanzhizhan:['jinshouzhen','lanmengqi','tushanzuiyue','kaer','kalala'],
		// 	},
		// },
		character:{
            ouruoling:["female","wu",3,['jiuyou','jingling','yongzhuang','mizui'],[]],
            hanxin:["male","wu",3,['guaidao','jingguai','mingwang','huaxiang'],[]],
            jiuxiner:["female","shu",2,['jiuyin','jiuyu','haoqin','zuimei'],[]],
            chenyingchao:["female","shu",3,["nvhao","haoshuang","honglian_chenyingchao","dizhong"],[]],
            wusheng_wusheng:["male","wei",5,['xiaoyue_wusheng','shixue'],[]],
            wangyuling:["female","shu",5,['guao_yuling','guanjiang_yuling','duliang_yuling'],[]],
            liyun: ["female","wei",3,["meigui_liyun","wushi_liyun","luoshen_liyun","jisu_liyun"],[]],
            zhurongnv:["female","shu",6,["yuhuo_nv","chongsheng_nv"],[]],
            lanmengqi:["female","qun","3/5",["leinu_lan","jingtong_lan","minghou_lan","nulian_lan"],[]],
            duomingdong:["male","wu",3,['qinyin_duo','taose_duo','duanxiu_duo','hualuo_duo'],[]],
            tushanzuiyue:["female","qun",3,["haoyin_tushan","tianxian_tushan","mingding_tushan"],[]],
            zhangning_jiuzi:["female","qun",3,['linghu_ning','husao_ning','xuqin_ning','huiyi_ning'],[]],
            caoxin:["male","wu",4,["xinnian_caoxin","yinyang_caoxin","bingxian_caoxin","taiji_caoxin"],[]],
            dingya:["female","shu","2/4",['kuaijiu_ding','kuangyin_ding','yujin_ding','fenfen_ding'],[]],
            caoyan:["male","wu",4,['rongyan_yan','longquan_yan','yuzhong_yan','fanyou_yan'],[]],
            quanjinfa:["male","wu",4,['mingcha_quan','xianfu_quan','zhongcheng_quan'],[]],
            meixian:["female","wu","3/4",['dutian_mei','mantian_mei','xinruan_mei','zuiai_mei'],[]],
            lenyue:["female","wei","3/5",["jianyu_len","yinzhen_len","duoqin_len",'zhuxing_len'],[]],
            lenenda:["male","wei",4,["anmou_enda","kezheng_enda","roufa_enda",'cangxin_enda'],[]],
            shuimiaoer:["female","wei",3,["bihai_shui","chengneng_shui","yilian_shui","baihe_shui"],[]],
            jinshouzhen:["female","qun",4,["lashou_jin","chengting_jin","baoshi_jin","ouni_jin"],[]],
            wangyueheng:["female","shu",3,['yujiu_heng','yini_heng','wenshi_heng','zuizhao_heng'],[]],
            dongxiaorong:["female","shu",4,['qianshang_dong','yexing_dong','aozun_dong'],[]],
            kaer:["male","qun",3,["muniu_kaer","tongzhen_kaer","yuanzhu_kaer","yanhua_kaer"],[]],
            kalala:["female","qun",3,['quanjiu_lala','leyin_lala','lingyu_lala','dunsheng_lala'],[]],
            hanshou:["male","wu",3,['weiyi_shou','huitong_shou','fuyao_shou','jibian_shou'],[]],
            yawen:["female","wei",'3/5',['langnv_yawen','nvfei_yawen','hanbian_yawen'],[]],
            banggu_s:["male","qun",4,["yewang_gu","gushi_gu","kuanglie_gu"],[]],
            guidouzi_z:["male","wei",4,['zhenjiu_gui','qixing_gui','yunv_gui'],[]],
            moke:["male","wu",3,['yanyin_moke','ningwu_moke','xinghuo_moke','huozhong_moke'],[]],
            moke2:["male","wu",3,['yanyin_moke','ningwu_moke','xinghuo_moke','huozhong_moke'],['unseen']],
            // tongxin:["female","shu",5,["fengru_tong","tunfei_tong"],[]],
            monian:["male","qun",4,["lanyong_mo","sanman_mo","shuaixing_mo"],[]],
            // yuner:["female","qun",50,['yuner_shiyan','yuner_selfDamage','yuner_die','yuner_neiVSzhu'],[]],
            
            caiyang:['male','qun',1,['yinka'],['forbidai','unseen']],
        },
		characterIntro:{
			ouruoling:"欧若灵，西域第一美人儿，善于飞行，相貌极其精致，如凌波仙子般水灵秀气，丰姿冶丽，仿佛上天有意细细雕琢出来一般；她秀雅绝俗，自有一股轻灵之气，肌肤娇嫩、神态悠闲、美目流盼、含辞未吐、气若幽兰，说不尽的温柔可人；身材无限接近九昕儿一般的完美，娇躯时常散发着茉莉的清香，除了九昕儿以外无人的颜值能在她之上；她是九幽精灵鸟仅存的后裔；全金发的手下，韩鑫的好友；原西域千门赌场掌管财务的户部尚书，后兼任韩鑫的治粟总长，总管账目和运送粮草，是全金发的得力助手。早年为一绿翅小鸟，被全金发所救，并为他的无私和爱所感动，爱上了全金发；为了全金发加入了千门，由于长得实在太美了，成为无数男人心中的女神，升官极其顺利，很快就成了全金发的副手，单相思着全金发，可是由于害羞和含蓄不敢表露自己的情愫。性格单纯，聪颖，贤惠，含蓄又专情；数学非常好，算账从来没有出过错；大叔控，有时会自作多情，沉浸在自己与全金发的美好幻想之中无法自拔。对爱人非常周到和体贴，也非常容易满足，全金发一个微笑和一句夸赞就能让她开心好几天。",
            hanxin:"韩鑫，九子魂中的螭吻之魂，师从玫贤学习控天之道，在玫贤死后继位西域之主和千门门主，相貌英俊，脾气暴躁但智商特别高。封神图和新月羽毛扇的持有者。荒野神庙之主老方丈的养子，实则是冥王哈迪斯贴身仆人和保镖：帕格尼，的私生子，拥有看透一个人昨日和明日内命运的能力但这种能力会耗费他极大的精力且对神的继承者无用。早年通过算命维持生计。但由于一伙强盗的入侵（实则是雅典娜的阴谋中的一环），将其父亲杀害，使他开始发奋用功。时而会特别暴躁，时而又保持理智，可以玩弄敌人于股掌之间。从小在荒漠中练就了一身强悍的身体和灵巧的身手，并当过一段时间的“怪盗绅士”。跟随法贤先生学习“控欲”，“控念”与“控天”之术，成了一个运筹帷幄的人，极善揣测人心和设计精妙复杂的计划和策略，在与雅典娜大战中取得最后的无尚光明之剑——阿波罗之剑并斩杀雅典娜的心魔，使世界恢复和平，不甘心做哈迪斯的棋子，他闯冥界，得到了哈迪斯的符印，成了新一任的冥神，并完成了十二主神的重新封神的任务。",
            jiuxiner:"九昕儿，九子魂中的椒图之魂，南域之主，江湖四圣之一，“东烟，西赌，南饮，北食”中的“南饮”，七大罪中的色欲之罪，地狱灵魂体为一头梅花鹿，酒神之女，酒神狄俄尼索斯的继承者，历史上以其独创的“酒之领域”而闻名。她的身材天生就是完美的胴体，容颜被韩鑫形容为“拥有不食人间烟火的仙子气质”，且天生就刀枪不入，肚量大的惊人，性格在清醒时很贤淑，善解人意，非常关心韩鑫。好喝酒，无酒不欢，酒后会变成一个好战豪放的人，经常误事所幸有韩鑫帮她收烂摊子。最反感的事就是别人质疑她的酒量，与人拼起酒来命都不要。有一群好酒的女酒友，个个酒量惊人但也只能拜服在她的内裙下。她跟着父亲酒神狄俄尼索斯学习控酒之术，能改变整个战场的法则，将原本刀枪剑戟的对决转变为拼酒量的对决，史称“酒之领域”。是韩鑫最亲近和信赖的人。她也很爱韩鑫，通过自己的声誉招揽了众多女子军和酒友的帮助。",
            chenyingchao:"陈英超，南域五大将之首，后荣升南域第四位女王，巾帼女王，领地为南域西北的荒芜之地。历史上以在西北荒芜之地的“倒喝垂杨柳”，在红缨桥赤水滩的“三雄战英超”而闻名天下。九昕儿于鬼斗子家中收服的名将，“黑煞”，与丁亚并称为“黑白双煞”，开头酒量一般，但性格极度豪爽，酒品与九昕儿不相上下，被九昕儿视为知己，训练她酒量，之后酒量突飞猛进，很快成为酒量仅次于三女王的存在。长相身材英姿飒爽，秀气豪放，颜值仅次于九昕儿，被冠以“巾帼女王”“女中飒爽豪杰”“酒族第一猛将”等称号。被九昕儿赐予两把开瓶匕首，甚是帅气。曾经为救卡尔的对象，只身一人独闯黑虎域，与黑虎王喝了三天三夜的酒，又与雅典娜三千军团对饮，硬是喝出一条酒路，并在喝了那么多之后，又对战雅典娜的三个部下，子龙，冰河，舜，并险胜，几乎是平手，陈英超撑醉的几乎要醉死过去，救出了卡尔的对象卡拉拉，后人为了纪念这场战役，称其为“三雄战英超”！",
            wusheng_wusheng:"无声，东域长老之首，啸月天狼的后裔，喜欢用面纱遮住面容，相貌棱角分明银色的头发配上黝黑的肌肤，非常帅气。先祖为冷月祖父的坐骑双头啸月狼凯奥特。初时为一头雪狼，为冷月所救，就此爱上冷月，在众人都反对的情况下，力排众议帮助冷月稳固了在东域的地位。对冷月无比忠诚，无论什么要求都会尽力帮忙。为了帮助冷月，无声进化为狼人形态。无声的狼人化有四重：第一重为蓝幽狼（坐骑形态）；第二重为兽人蓝月狼（直立形态）；第三重为啸月天狼（成熟形态）；第四重为利爪啸月天狼（完全体形态）；攻击力和速度都阶梯式提升，这种能力很难开发，只有冷月遇到危险时无声才能进化。",
            wangyuling:"王煜灵，南域三女王之一，腰刀女王，领地为南域东北的内陆地区。肚量大得吓人，与九昕儿几乎平分秋色，酒量也很好，但在三女王中酒量算最差的。有个癖好，所有碰到她腰刀的东西都要进她的肚子。有一次她的腰刀碰到了一条大河的水，把整个河都被喝干了，河水，包括所有鱼虾，全部喝进了她的肚子。有一次，她的腰刀掉进了海里，整个海平面都下降了许多，要不是她的肚子已经被撑得再咽下一口水就会撑爆的地步，可能整片海洋都不存在了。开始不服九昕儿，后来被九昕儿的酒品折服，彻底臣服。",
            liyun: "璃韵，美女艺术家，带劲的玫瑰，“东烟”冷恩达麾下杀手军团的一员，身法和速度极快，擅长刺杀，韩鑫为了搞清楚玫贤死亡的真相，叫上曹炎，终于逮到了璃韵，逼问之下问出“暗谋”二字，她便一瞬间毙命。",
            zhurongnv: "祝融女，火神族公主，火神族族长祝融重明的独生女。火神族沿袭开山人祝融族长的传统，生出的女儿只有姓，单名一个“女”字。她有着傲人汹涌的臀部和胸部，头发为火焰，天生对高温免疫；她也是族内唯一拥有练就凤凰涅槃绝技的人，报以厚望。可是此技必须男女双修，可另一个有此天赋的男人上哪里去找？",
            lanmengqi: "潘多拉·蓝梦琦，七大罪中的贪婪之罪，地狱灵魂体为一只黑猫。潘多拉魔盒之主，提线木偶：潘多拉·蓝梦琪（篡夺冥王宝座，成为冥界皇妃）。兔，鱼，狮，熊，猫，蛇，鹿，七个玩偶，只要戳一下，本尊会痛，肢体会不受控制，任人摆布，潘多拉做的，为了追求完美（完美主义），连自己的玩偶也做了，结果被韩鑫利用了，最终不得不放弃玩偶的操纵权。",
            duomingdong: "多名洞，九子魂中的蒲牢之魂，桃花岛岛主，爱情与美丽之神的继承者，精通音律，自称“美男子”好色但有正义感，桃花岛岛主，有着女人般的身材和体香，对韩鑫有着特殊的情愫。他的美貌是北域“蓝川之战”的起因。",
            tushanzuiyue: "涂山醉月，涂山之主，拥有无尽酒壶能够不断续酒，喝酒后会妖力大涨，喝得酩酊大醉时能觉醒最强奥义：九尾！蓝川之战中，以一句“涂山，我罩了！”名留青史，但这美人儿喝得太多了也会神志不清，敌我不分。曾与饕餮夫人交好，一次，涂山醉月过蓝河到饕餮族（饕餮峻）做客，似是要与饕餮一族交好，适逢饕餮夫人金守珍外出奔丧。多名洞接待了她，多名洞这美男子，美艳动人，深深吸引了涂山醉月，涂山族有爱与美丽之神——维纳斯，所遗留的爱情迷迭香，涂山醉月在蓝河豪华游轮船上，和多名洞喝酒（浪漫晚风，多情波浪，夕阳微微染红朦胧的天空，岸边景色宜人，让人神清气爽，心潮澎湃，空气中弥漫着桂花香以及荷尔蒙的味道，将迷迭香用在了多名洞身上，将他强行掰直，爱上自己，然后将他带走。金守珍闻讯赶回，一听此事极度愤怒，但已追赶不上。她向猫族女王单文倩，蜘蛛族女王郭依宁，以及蜂女蒯嘉慧求援，同时号令北域盟友，组成一支拥有1186只战舰和10万大军的号称“珍倩宁”的三族联军，沿着蓝河逆流而上向北直逼涂山城下。蓝河在北域支流形成的爱琴海。饕餮统治的区域与涂山正好隔着爱琴海。涂山依靠蓝河在北域支流形成的爱琴海沿岸地势形成的蓝川天险，稳若泰山，固若金汤，易守难攻。由此，著名的“蓝川之战”因一个美貌的男子拉开了序幕。",
            zhangning_jiuzi: "张宁，原名涂山宁，涂山狐族人，只是她贪图一时之欢，被驱逐出境，才逃到了西域，后被张貂蝉所纳为妾后才改名叫张宁。韩鑫的初恋。在狼女雅雯的战役中与韩鑫摩擦出火花，但后来驱利附势勾搭上了有钱的公子哥韩寿，隧抛弃了韩鑫，但内心深处，她还是过意不去，为了让自己良心安定，她当着韩鑫的面惩罚自己，来表明恩断义绝。",
            caoxin:"曹信，九子魂中的睚眦之魂，战神阿瑞斯的继承者，曹炎的弟弟，皮肤幽蓝色，拥有巨力和以力打力的神通，金刚不坏之身，是领军打仗的奇才，人送外号“兵仙”。早年为雅典娜贴身保镖和男妓，因不满现状和有志不能伸而与哥哥逃出雅典之城。和舜之间有着微秒的感情，一辉是他的劲敌。",
            dingya:"丁亚，南域五大将之一，九昕儿于鬼斗子家中收服的名将，“白煞”，与陈英超并称为“黑白双煞”，喝酒速度极度惊人，最快甚至超过九昕儿，好喝快酒，但酒量跟不上，经常是第一个醉倒的，与陈英超非常合得来，性格也极豪放，最喜欢豪放之人，与人喜欢畅饮，说话语速飞快，喝酒速度也做前锋。后师从董笑蓉学习灌醉百兽的千觞不醉之道，与人决斗拼酒绝不落下风！",
            caoyan:"曹炎，九子魂中的赑屃之魂，火神赫菲斯托斯的继承者，曹信的哥哥，拥有高温的身体和融化万物的“熔炎龙拳”，对锻造之术极为讲究，韩鑫的羽扇，九昕儿的紫砂内衣都由他打造。早年与曹战为侍奉雅典娜的贴身男妓，但后来对雅典娜滥杀生灵感到不满，自己又有志不能伸，于是和弟弟一同逃出雅典之城。雅典娜对其还留着些许微妙的感情。",
            quanjinfa:"全金发，是原西方赌场的老管家，后在西赌大会上结识韩鑫。对法贤和韩鑫都忠心耿耿，特殊能力是一根金头发可以变成任何东西，但他头发长得很慢。",
            meixian:"玫贤，原西域之主，千门原门主，江湖四圣之一，“东烟，西赌，南饮，北食”中的“西赌”，曾化名法贤先生，被人称为神算子，赌神，赌博计算之术无人能及，也是“撒旦之劫”的策划者，曾经拥有自己的势力造孽套多，被人追杀，看到这一切的罪过，她后悔了，在被人追杀的途中，算出自己命不久矣，在荒野之庙的浩劫中救下韩鑫，将自己今生所学托付给他，最后后含笑而终。",
            lenyue:"冷月（韩月），九子魂中的狴犴之魂，东域冷氏皇朝的公主，早年隐姓埋名寄养在韩门，狩猎之神阿尔忒弥斯的继承者，早年性格跋扈，韩门遭灭族后流亡他乡，后结识韩鑫，然后追爱不得后返回东域。“东烟”冷恩达的关门弟子，也是唯一继承人，后为“月夜女王”，主宠是暗蚊和玫瑰花瓣，能够在暗黑空间中自由穿梭，前不见蚊，后不见影，是继恩达之后暗谋军团的总指挥，擅长刺杀之术，“以烟为引杀人于呼吸之间”。对韩鑫有特殊的情愫，为了韩鑫找九昕儿单挑。自己的老师被韩鑫设计所害也没有杀韩鑫而是放走了他，独自饮下苦难的鸩酒。",
            lenenda:"冷恩达，东域之主，“江湖四圣”之一，“东烟，西赌，南饮，北食”中的“东烟”，拥有烟一般虚无缥缈的完美刺杀之术，拥有自己的杀手军团“暗烟”，只接受神的委托，心脏长在左肩上（由一颗碧绿坚硬的钻石保护在其上）,所以被人刺杀从未死去。“撒旦之劫”的参与者之一，后死于镜中自己的刺杀。喜欢带一张面无表情的冷脸面具，一般人看不到他的长相。宠物为独眼（红色）响尾蛇，长得其貌不扬，像一根皮带，善于悄无声息地接近目标，然后一击致命。在东域拥有最恐怖的杀手军团，几乎全是女性，而这些女人都是带刺的玫瑰，只要冷恩达一声令下，就会不顾一切地为冷恩达铲除异己。",
            jinshouzhen:"金守珍，九子魂中的饕餮之魂，史称“饕餮夫人”，北域之主，“江湖四圣”之一的“北食”，七大罪中的暴食之罪，地狱灵魂体为一条巨蟒，赫拉（婚姻和生育之神）的继承者，身姿丰腴性感，拥有300个老公，生了2000个子孙，拥有世人所无法想象的吞噬之术，与九昕儿直接用强悍的肉身将酒喝进腹中不同，饕餮夫人在腹中形成了一个异次元空间的入口，所以虽然她的食量惊人，但并没有进入自己的肚子。用此法，她可以吞下一整个世界，只要是她嘴巴能装下的东西就能从世界上消失，但缺点是不能长期使用吞噬之术，否则腹中一直空空如也会饥饿而亡。有自己的老公孩子食神军团，军团的人都是靠强悍肉身硬吃的。嫉妒九昕儿的容貌，经常找机会和九昕儿较量并设计要铲除她。有一次，被她逮到机会，喝得九昕儿差点撑不住，还好韩鑫在场看穿了饕餮夫人的弱点：由于大战时间太长，她自己一直不进食饿得撑不住只好认输。救了九昕儿。总喜欢做各种化学实验让自己变得更美。后来和多名洞在一起，被多名洞虐腹感到快感。",
            shuimiaoer:"水淼儿，九子魂中的蚣蝮之魂，碧海公主，七大罪中的嫉妒之罪，地狱灵魂体为一条鲨鱼，百合美人儿，深爱着九昕儿，奈何九昕儿爱的是韩鑫，曾经为了得到九昕儿与九昕儿拼酒，用她的原话说：“那本小姐今天就把你灌醉，然后开房把你办了，看你以后从不从我！”结果逞能喝了7大瓶儿威士忌，喝得醉醺醺的，却还是没能将九昕儿灌醉……",
            wangyueheng:"王月蘅，南域三女王之一，沼泽女王，领地为南域西南的沼泽地带。肚量酒量都一级棒，虽然肚量不如腰刀女王，但酒量是绝对没话说，喜欢在酒精沼泽中泡澡，除了酒，什么也不喝，声称酒是她的命。距离她方圆10米内就能闻到浓郁的酒精味。有一次要发大水，她怕酒精沼泽里的酒精被稀释，直接将六个沼泽地的酒精全部喝进腹中，撑得医生都没办法，但说什么也不上厕所，直到大水退了，才又将酒精全部吐回酒精沼泽中，此举令她名扬天下。能在任何地方脱下衣服洗澡，甚至在油锅里也能洗澡。因为她身上纹了一条龙，可以调节温度和湿度，所以沼泽女王的洗澡功力很强。陈英超刚进入南域时不服沼泽女王，与她拼酒。两人超负荷喝下了无数烈酒，陈英超撑得两眼发直，直俞呕吐，突然失去了战意，这股强烈的吐意挡都挡不住。但是在酒族，呕吐是一件很羞耻的事情，有呕吐物在地上的女人一辈子都会有心理阴影甚至种下心魔导致之后的喝酒之路无法再有长进。王月蘅见状，突然温柔地揽过陈英超的纤腰，嘴唇轻轻含住陈英超的嘴“想吐就吐出来吧~”，陈英超：“沼泽女王……”陈英超感受着这股温柔的力量再也把持不住，大口吐起来，只是并没有到地上，而是进了王月蘅本就撑得发硬的肚腹之中。王月蘅娇喉一滚一滚，强忍着腹内剧烈的饱胀之感喝下陈英超的呕吐之物。陈英超喝得虽然已经迷糊了，但依旧能感受到王月蘅那温柔旖旎的力量，心中感动，这是多伟大的姐妹之情！史称：一吻噬恩仇！友情提示：沐浴沼泽女王王月蘅沼泽的酒，然后再被她喝下去，就能加快肌肤生长，促进伤口复原，但过于微小的伤口可能起到反作用。",
            dongxiaorong:"董笑蓉，南域三女王之一，百兽女王，领地为南域东南的丛林地带。酒量肚量一级棒，喜欢在丛林中用狗寻找猎物，一旦发现大型猛兽，就将其抓住，与其拼酒，且拼酒从来都是动物喝一杯，她喝一缸，而且必须喝倒才算完，否则她就会继续喝下去。喝酒喜欢并着双腿，没有并着腿喝下去的酒不算数，不仅如此还要罚喝十缸以赎自己没有并腿的罪，所以被另外两位女王戏称为“并腿女王”。有一次连续抓住了一大群，接近两千多头猛兽，包括巨型猛犸，梁龙兽，宰相兽（拥有海量的巨大肚量），巨腹河马兽等等，她一口气通通都喝倒，竟然还能接着回去在九昕儿的生日派对上豪饮，来者不拒。九昕儿生日时，蛋糕制作在她两条大腿和滚挺的肚皮之上，画着奶油甜蜜蜜，大家你一舌头，我一舌头，一起舔！好酒！好蛋糕！",
            kaer:"卡尔，九子魂中的狻猊之魂，一个天真无邪的北域矮人国小牧童，拥有童真之力，无人可伤他，农业与丰收之神德墨忒尔的继承者,喜欢玩烟花爆竹。",
            kalala:"卡拉拉，矮人国的小公主，娇小可人，卡尔的爱人，被雅典娜困于黑域，后陈英超受九昕儿之命去营救卡拉拉。经过黑虎域时，陈英超与黑虎王定下赌约连喝三天三夜的酒，卡拉拉看热闹不嫌事大，待陈英超喝倒一众黑虎域高手后，还是又劝又灌陈英超喝酒，原本就喝了非常多的陈英超差点没挺住，所幸英超美人酒量实在过硬。",
            hanshou:"韩门公子，家财万贯，是千门的对头，冷月（韩月）的忠实追求者。由于察觉了韩月对韩鑫的感情，将韩鑫视为劲敌。通过金钱的诱惑，从韩鑫手里抢走了初恋张宁的心。",
            yawen:"雅雯，东西域最美的美人儿，生得沉鱼落雁，美若天仙，却身手敏捷，出手狠辣，喜先用美色魅惑路人，然后图财害命！即便是一些强者，也不想跟她纠缠，因为身为地头蛇，对地形的掌握炉火青纯，借着天时地利，强龙也难压过！因此这么多年，她一直都是占据着那里，每一次来往商队，都必须向其缴纳不少的过路费，方才能够顺利通过。韩鑫在张宁和韩月的协助下，钻入雅雯肚子里，令她喝下巨量的酒水，待她昏睡之时，用石头塞满她的肚子，才将这女狼制住。后加入东域杀手军团，与长老无声一同管理东域。拥有狼之皇者的资质，流淌着皇者的血统。",
            banggu_s:"邦古，碧海域著名的海上大盗，七大罪中的暴怒之罪，地狱灵魂体为一头炙焰雄狮，在狂烈暴怒之时，无法控制自己的攻击性，因此有时容易被人利用。初次降世于北域后辗转至南碧海。他是南碧海危机的始作俑者之一，曾禁不住黑暗域的怂恿，率领成百上千艘海盗船，与九幽屠杀鸟一同入侵碧水帘洞。热衷于收集奇形怪状的石头，称为“古石”，并喜欢用古石强行交换其他人的物品，无论对方同不同意，收了他的古石，就要交货。多年的航海生涯，令他练就了站在大海上航行眺望远方就能寻找到方位的能力，即使陷入迷惘也能轻松化解，越危急时，他的直觉就越敏锐。",
            guidouzi_z:'鬼斗子，东域和黑域区域鬼谷城的总督，甚是好酒，手下有五位极擅饮酒的女奴：陈英超、丁亚、彤欣、诗芸、佳男，加上他自己和贴身女伴千心云，总共七人，史称“鬼斗七星”，喝遍各色酒桌无敌手。其中以陈英超的豪放和丁亚的快酒尤其著名，江湖人称“黑白双煞”。对于这些女人，他总结出一套完整的驭女之术，赏罚分明，对乖的女人就宠着，对不乖的就予以惩罚，鬼斗子身边的女人都非常吃这一套。九昕儿拯救韩鑫时，途经鬼谷城，假扮成陪酒女，趁鬼斗子放松警惕时将其灌醉，当然她自己也喝了不少，然后拖着醉醺醺的身子来到鬼斗子家中，用海般的酒量和豪爽的酒品征服了五位女奴，将她们收服为南域五大将，只留下总督鬼斗子孑然一身。',
            moke:'摩可，绰号白眉烟鬼，西域千门最顶尖的千手之一，千术手法与欧若灵不相上下。有烟瘾，烟不离手，在牌局和战场上，善于运用浓烟遮蔽敌人的视线从而创造机会。在助韩鑫成为西域域主的奠基之战——于赌神广场举行的赌神大赛上，他手法形同鬼魅，虚虚实实，以假乱真，立下了汗马功劳！同时，他的烟雾也是危险的，只要他愿意，一点小火星就能将其瞬间引燃，星星火种，便可燎原！不过弥漫的浓浓黑烟散起烟尘也让人看不清前方。原文对他的描述：只见他一身灰色高领长袍，边角都带着羊毛绒边，下着褐色工装裤，脚蹬黑色长筒登山靴，身材高大魁梧，一头油亮的凌乱碎发在风中随意飘散，模样甚是潇洒；而且，他须发包括眉毛竟然全部净白！但他脸却是年轻人的脸，棱角分明的脸甚是俊朗，同样净白，不带一丝皱纹，一双漆黑如墨的眸子透着深邃，看着极有个性。他嘴里吊着一只棕褐色的大雪茄呼呼地抽着，嘴角时不时地吐着一朵一朵的烟圈，隔老远就能闻到一股子烟味儿，漫天飞舞的烟圈使得他浑身烟雾缭绕，给人一种神秘之感。',
            moke2:'摩可，绰号白眉烟鬼，西域千门最顶尖的千手之一，千术手法与欧若灵不相上下。有烟瘾，烟不离手，在牌局和战场上，善于运用浓烟遮蔽敌人的视线从而创造机会。在助韩鑫成为西域域主的奠基之战——于赌神广场举行的赌神大赛上，他手法形同鬼魅，虚虚实实，以假乱真，立下了汗马功劳！同时，他的烟雾也是危险的，只要他愿意，一点小火星就能将其瞬间引燃，星星火种，便可燎原！不过弥漫的浓浓黑烟散起烟尘也让人看不清前方。原文对他的描述：只见他一身灰色高领长袍，边角都带着羊毛绒边，下着褐色工装裤，脚蹬黑色长筒登山靴，身材高大魁梧，一头油亮的凌乱碎发在风中随意飘散，模样甚是潇洒；而且，他须发包括眉毛竟然全部净白！但他脸却是年轻人的脸，棱角分明的脸甚是俊朗，同样净白，不带一丝皱纹，一双漆黑如墨的眸子透着深邃，看着极有个性。他嘴里吊着一只棕褐色的大雪茄呼呼地抽着，嘴角时不时地吐着一朵一朵的烟圈，隔老远就能闻到一股子烟味儿，漫天飞舞的烟圈使得他浑身烟雾缭绕，给人一种神秘之感。',
            monian:'墨念，七大罪中的懒惰之罪，地狱灵魂体为一只混沌熊猫——贝尔芬格。非常慵懒，几乎懒得从地狱来到大陆，最爱吃的食物是鱼。降生北域之后就在昏睡之中，热衷于将事情交给他人来解决而自己就负责养精蓄锐，但他在沉睡时也很难被伤害到。',
        },
		characterTitle:{
            jinshouzhen:"饕餮夫人",
            moke:'白眉烟鬼',
            moke2:'白眉烟鬼',
        },
		perfectPair:{
		},
		skill:{
            jiuyou:{
                audio:2,
                trigger:{
                    global:"judge",
                },
                filter:function(event,player){
                    return true;
                },
                frequent:true,
                direct:false,
                content:function(){
                    "step 0"
                    // 询问玩家是否发动技能
                    player.chooseBool(get.prompt2('jiuyou')).set("ai", function () {
                        // 根据局势设置默认的AI选择
                        return true; // 默认选择发动
                    });
                    "step 1"
                    if(result.bool){
                        // 玩家选择发动技能
                        // player.logSkill('jiuyou'); // 显示技能触发信息
                        player.draw(); // 玩家摸一张牌
                    }
                },
                ai:{
                    judgePro:true,
                    threaten:1.5,
                },
            },

            jingling:{
                audio:2,
                // skillAnimation:true,
                // animationColor:"wood",
                trigger:{
                    global:["useCard","judge"],
                },
                frequent:true,
                direct:false,
                popup:false,
                //priority:0,
                filter:function (event, player) {
                    return (
                        (event.card && get.type(event.card, 'trick') == 'trick') || event.name == 'judge'
                    ) && player.countCards('he') >= 2; // 必须有两张可弃置的牌
                },
                content:function (event) {        
                    "step 0"
                    player.chooseBool(get.prompt2("jingling")).set('ai',function(event,player){

                        if (trigger.name == 'useCard'){
                            if (trigger.player != undefined && (trigger.player == player || get.attitude(player,trigger.player)>2)){
                                return false;
                            }
                            else if (trigger.card.name == "shandian"){
                                return false;
                            }
                            else if (get.tag(trigger.card, 'damage')&trigger.targets.contains(player)&&player.hp <= 1){
                                return true;
                            }
                            else if (get.tag(trigger.card, 'damage')&&trigger.targets.contains(player)&&!player.hasWuxie()&&player.countCards('h')>10){
                                return true;
                            }
                            else if (trigger.card.name == 'lebu'&& trigger.targets.contains(player) && player.countCards('h') >= 4){
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        else if (trigger.name == 'judge'){
                            var trigger2=_status.event.getTrigger();
                            var judging=trigger.player.judging[0];
                            if (trigger.judgestr == "乐不思蜀" && get.attitude(trigger.player,player)>0 && trigger.player.countCards('h') >= trigger.player.hp  && player.countCards('h')>=4&&trigger2.judge(judging)<0){
                                return true;
                            }
                            else if (!(trigger.card) && trigger.getParent() && trigger.getParent().name == "jiuwei_useSha_tushan"){
                                return false;
                            }
                            else if (!(trigger.card) && trigger.getParent() && trigger.getParent().name == "mingwang_selfDying"&&trigger2.judge(judging)<-5){
                                if(lib.config.mode=='identity'&&game.zhu.isZhu&&player.identity=='fan'&&trigger.getParent().player == game.zhu){
                                    return true;
                                }
                                else{
                                    if (player.countCards('he')>=4){
                                        return get.attitude(player,trigger.getParent().player)<-3;
                                    }
                                    else{
                                        return false;
                                    }
                                }
                            }
                            else if (!(trigger.card) && player.countCards('h')>=5&&trigger2.judge(judging)>=0.2&&trigger.getParent().name != "mingwang_selfDying"){
                                return get.attitude(player,trigger.player)<0;
                            }
                            else if (!(trigger.card) && player.countCards('he')>=3&&trigger2.judge(judging)>=10){
                                return get.attitude(player,trigger.player)<0;
                            }
                            else if (!(trigger.card) && player.countCards('he')>=2&&trigger2.judge(judging)<-20){
                                return get.attitude(player,trigger.player)>3;
                            }
                            else if (trigger.judgestr == "闪电"&&trigger2.judge(judging)<0){
                                return get.attitude(player,trigger.player)>0;
                            }
                            else {
                                return false;
                            }
                        }
                        else{
                            return false;
                        }
                    });

                    "step 1"
                    if (result.bool) {
                        game.delay(2);
                        player.chooseToDiscard(2,'he').set('ai',function(card){
                            if (get.subtype(card) == 'equip2') {
                                return 1000;
                            }
                            if (card.name == "shandian"){
                                return -1;
                            }
                            return 100-get.value(card);
                        });
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    game.delay(1);
                    if (result.bool) {
                        // game.playAudio('skill','jingling'+Math.ceil(2*Math.random()));
                        // player.popup(get.translation('jingling'));
                        player.logSkill('jingling');
                        if (trigger.name == 'useCard'){
                            game.log(player,'令',trigger.card,'无效');
                            trigger.targets.length=0;
						    trigger.all_excluded=true;
                        }
                        else if (trigger.name == 'judge'){
                            if (!(trigger.card)){
                                game.log(player,'令',trigger.player,'的判定无效');
                            }
                            else{
                                game.log(player,'令',trigger.card,'的判定无效');
                            }
                            trigger.cancel();
                        }
                    } 
                    else{
                        event.finish();
                    }
                },
                ai:{
                    order: 5,
                    threaten:3,
                    expose: 0.1,
                    rejudge:true,
                    tag:{
                        rejudge:4,
                    },
                    result : {
                        player:function(card,player,target){
                            return 1;
                        },
                    },
                    effect:{
                        target:function(card,player,target,current){
                            if(card.name == 'shandian') return [1,3];
                        },
                    },

                    
                },
            },

            yongzhuang:{
                audio:2,
                trigger:{
                    target:"shaBefore",
                },
                forced:true,
                //locked:true,
                filter:function(event,player){
                    if(player.getEquip(2)) return false;
                    return (event.card.name=='sha'&&get.color(event.card)=='black')
                },
                content:function(){
                    trigger.cancel();
                },
                ai:{
                    effect:{
                        target:function(card,player,target){
                            if(player==target&&get.subtype(card)=='equip2'){
                                if(get.equipValue(card)<=8) return 0;
                            }
                            if(target.getEquip(2)) return;
                            if(card.name=='sha'&&get.color(card)=='black') return 'zerotarget';
                            // if(card.name=='sha'&&get.color(card)=='black') return 1;
                        },
                    },
                },
            },


            mizui:{
                audio:2,
                group:["mizui_target","mizui_damage"],
            },
            mizui_damage:{
                audio:2,
				trigger:{
					player:"damageBegin4",
				},
                frequent:true,
				direct:false,
				filter:function (event, player) {
					return true; // 针对所有伤害触发
				},
				content:function () {
                //    player.judge(function (card) {
                //        var suit2 = get.suit(card);
                //        if (suit2 == 'heart') {
                //            trigger.cancel();
                //        } else {
                           
                //        }
                //    });
                    "step 0"
                    // 询问玩家是否发动技能
                    player.chooseBool(get.prompt2('mizui')).set("ai", function () {
                        // 根据局势设置默认的AI选择
                        return true; // 默认选择发动
                    });
                   "step 1"
                   if (result.bool) {
                        player.judge(function (card) {
                            if(get.suit(card)=='heart'){
                                return 2;
                            } 
                            else{
                                return -0.5;
                            }
                        });
                   }
                   
                   "step 2"
                   if (result.card&&result.bool) {
                        trigger.cancel();
                   }
                   

				},
				ai:{
					"maixie_defend":true,
					effect:{
						target:function (card, player, target) {
							if (player.hasSkillTag('jueqing', false, target)) return;
							if (get.tag(card, 'damage') && target.countCards('he') > 1) return 0.7;
						},
					},
				},
			},
			mizui_target:{
                audio:2,
				trigger:{
					target:"shaBefore",
				},
                frequent:true,
				direct:false,
				filter:function (event, player) {
					
					return (event.card.name=='sha'&&get.color(event.card)!='black')
				},
				content:function () {
					"step 0"
                    // 询问玩家是否发动技能
                    player.chooseBool(get.prompt2('mizui')).set("ai", function () {
                        // 根据局势设置默认的AI选择
                        return true; // 默认选择发动
                    });
                    "step 1"
                   if (result.bool) {
                        player.judge(function (card) {
                            if(get.suit(card)=='heart'){
                                return 2;
                            } 
                            else{
                                return -0.5;
                            }
                        });
                   }
                   
                   "step 2"
                   if (result.card&&result.bool) {
                        trigger.cancel();
                   }

                   
				},
				ai:{
					// "maixie_defend":true,
					effect:{
						target:function (card, player, target) {
							if (player.hasSkillTag('jueqing', false, target)) return;
							if (get.tag(card, 'damage') && target.countCards('he') > 1) return 0.7;
						},
					},
				},
			},

            guaidao:{
                audio:2,
                enable:"chooseToUse",
                forced:false,
                filterCard:function(card){
                    return get.color(card)=='black';
                },
                position:"he",
                viewAs:{
                    name:"shunshou",
                },
                viewAsFilter:function(player){
                    if(!player.countCards('he',{color:'black'})) return false;
                },
                prompt:"将一张黑色牌当顺手牵羊使用",
                check:function(card){
                    var player=_status.currentPhase;
                    if (get.name(card) == 'nanman'||get.name(card) == 'wanjian'||get.name(card) == 'lebu'){
                        return (0.2 - Math.random())*10;
                    }
                    if (get.name(card) == 'juedou' && player.countCards('h','sha') > 2){
                        return (0.2 - Math.random())*10;
                    }
                    return 7-get.value(card)
                },
                ai:{
                    threaten:1.6,
                    expose: 0.15,
                    basic:{
                        order:9,
                        useful:4,
                        value:6,
                    },
                    result:{
                        target:function(player,target){
                            var att=get.attitude(player,target);
                            var nh=target.countCards('h');
                            if(att>0){
                                var js=target.getCards('j');
                                if(js.length){
                                    var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                                    if(jj.name=='guohe'||js.length>1||get.effect(target,jj,target,player)<0){
                                        return 3;
                                    }
                                }
                                if(target.getEquip('baiyin')&&target.isDamaged()&&
                                    get.recoverEffect(target,player,player)>0){
                                    if(target.hp==1&&!target.hujia) return 1.6;
                                    if(target.hp==2) return 0.01;
                                    return 0;
                                }
                            }
                            var es=target.getCards('e');
                            var noe=(es.length==0||target.hasSkillTag('noe'));
                            var noe2=(es.length==1&&es[0].name!='tengjia'&&get.value(es[0])<=0);
                            var noh=(nh==0||target.hasSkillTag('noh'));
                            if(noh&&(noe||noe2)) return 0;
                            if(att<=0&&!target.countCards('he')) return 1.5;
                            return -1.5;
                        },
                        player:function(player,target){
                            if(get.attitude(player,target)<0&&!target.countCards('he')){
                                return 0;
                            }
                            if(get.attitude(player,target)>1){
                                var js=target.getCards('j');
                                if(js.length){
                                    var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                                    if(jj.name=='shunshou') return 1;
                                    if(js.length==1&&get.effect(target,jj,target,player)>=0){
                                        return 0;
                                    }
                                    return 1;
                                }
                                return 0;
                            }
                            return 1;
                        },
                    },
                    tag:{
                        gain:1,
                        loseCard:1,
                    },
                    wuxie:function(target,card,player,viewer){
                        if(get.attitude(viewer,player)>0&&get.attitude(viewer,target)>0){
                            return 0;
                        }
                    },
                },
            },

            jingguai:{
                audio:2,
				group:['jingguai_gaipan','jingguai_panduan','jingguai_fanmian'],
                ai:{
                    threaten:0.3,
                    expose: 0.05,
                    rejudge:true,
                    tag:{
                        rejudge:1,
                    },
                    effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
                                if (target.isTurnedOver()){
                                    if (player.hasSkillTag('damageBonus',true,target)){
                                        var chance = Math.random();
                                        return [chance,-0.1];
                                    }
                                    else{
                                        var chance = 0.2*Math.random();
                                        return [chance,0.1];
                                    }
                                }
							}
						}
					},
                },
            },

            jingguai_gaipan:{
                audio:2,
                trigger:{
                    global:"judge",
                },
                filter:function(event,player){
                    return player.countCards('he',{color:'red'})>0;
                },
                direct:true,
                content:function(){
                    "step 0"
                    player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
                    get.translation(trigger.player.judging[0])+'，'+get.prompt('jingguai_gaipan'),'he',function(card){
                        if(get.color(card)!='red') return false;
                        var player=_status.event.player;
                        var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
                        if(mod2!='unchanged') return mod2;
                        var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
                        if(mod!='unchanged') return mod;
                        return true;
                    }).set('ai',function(card){
                        var trigger=_status.event.getTrigger();
                        var player=_status.event.player;
                        var judging=_status.event.judging;
                        var result=trigger.judge(card)-trigger.judge(judging);
                        var attitude=get.attitude(player,trigger.player);
                        if(attitude==0||result==0) return 0;
                        if(attitude>0){
                            return result;
                        }
                        else{
                            return -result;
                        }
                    }).set('judging',trigger.player.judging[0]);
                    "step 1"
                    if(result.bool){
                        player.respond(result.cards,'highlight','jingguai_gaipan','noOrdering');
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(result.bool){
                        player.$gain2(trigger.player.judging[0]);
                        player.gain(trigger.player.judging[0]);
                        trigger.player.judging[0]=result.cards[0];
                        trigger.orderingCards.addArray(result.cards);
                        game.log(trigger.player,'的判定牌改为',result.cards[0]);
                    }
                    //game.delay(2);
                },
                ai:{
                    rejudge:true,
                    tag:{
                        rejudge:1,
                    },
                },
            },
            

            jingguai_panduan:{
				trigger:{player:'damageBegin3'},
				silent:true,
				firstDo:true,
				filter:function(event,player){
					return player.classList.contains('turnedover');
				},
				content:function(){
					trigger.jingguai_panduan=true;
				}
			},
			jingguai_fanmian:{
				audio:3,
				trigger:{player:'damageEnd'},
				check:function(event,player){
					return player.isTurnedOver();
				},
				prompt:'是否发动【精怪】，将武将牌翻面？',
				filter:function(event,player){
					if(event.jingguai_panduan){
						return true;
					}
					return false;
				},
				content:function(){
					delete trigger.jingguai_panduan;
					player.turnOver();
				}
			},






            mingwang:{
                audio:2,
                skillAnimation:"epic",
                animationColor:"thunder",
                trigger:{
                    global:"dying",
                },
                direct:true,
                priority:20,
                filter:function (event, player) {
                    return (
                        event.player.hp <= 0 &&
                        (player.countCards("he", { suit: "spade" }) >= 3) &&
                        player !== event.player
                    );
                },
                content:function (event) {
                    'step 0'
                    var goon = get.attitude(player, trigger.player) < 0;
                    var next = player.chooseToDiscard(get.translation('mingwang'),get.translation(trigger.player)+"进入濒死状态，是否弃置三张黑桃花色的牌令其立即死亡？",'he');
                    next.ai = function (card) {
                        // if (ui.selected.cards.length) {
                        //     if (ui.selected.cards[0].name == "jiu") return 0;
                        // }
                        if (goon) {
                            // if (card.name == "jiu") return 2;
                            return 15-get.value(card);
                        }
                        return 0;
                    };
                    next.filterCard = function (card) {
                        if (ui.selected.cards.length) {
                            // if (ui.selected.cards[0].name == "jiu") return card.name == "jiu";
                            return get.suit(card) == "spade";
                        }
                        return get.suit(card) == "spade";
                    };
                    next.complexCard = true;
                    next.logSkill = ["mingwang", trigger.player];
                    next.selectCard = function () {
                        if (ui.selected.cards.length) {
                            // if (ui.selected.cards[0].name == "jiu") return [3, 3];
                            return [3, 3];
                        }
                        return [3, 3];
                    };
                    'step 1'
                    if (result.bool) {
                        //改变背景
                        if (game.getUpperBackgroundName('',player) != 'mingwang_bg'){
                            if (!player.hasSkill('mingwang_background')){
                                player.addTempSkill('mingwang_background','phaseJieshu');
                            }
                            player.storage.mingwang_background = game.getUpperBackgroundName('',player);
                            player.syncStorage('mingwang_background');
                            game.createClearBackground('mingwang_bg',player);
                        }
                
                        //效果
                        trigger.player.die(trigger.reason);
                    } else {
                        event.finish();
                    }
                    'step 2'
                    if (!trigger.player.isAlive()) {
                        trigger.cancel(true);
                    }
                },
                group:"mingwang_selfDying",
                ai:{
                    expose: 0.3,
                    threaten:5.5,
                    effect:{
						target:function(card,player,target){
							if(player==target&&target<=0&&get.tag(card,'recover')) {
                                return 1;
                            }
						}
					}
                },
            },

            mingwang_selfDying:{
                silent:true,
                popup:false,
                trigger:{
                    player:"changeHp",
                },
                direct:true,
                priority:21,
                filter:function (event, player) {
                    return player.hp<=0;
                },
                content:function(event){
                    "step 0";
					player.chooseTarget(get.prompt('mingwang'),'当你的体力值≤0时，你可以令一名其他角色进行判定，若结果为♠，则你回满体力；若结果点数为K，则该角色立即死亡并令你失去本技能。',function(card,player,target){
						if(player==target) return false;
						return true;
					}).set('ai',function(target){
                        var player = _status.event.player;
						if(target.hasSkill('hongyan')) return 0;
                        if(lib.config.mode=='identity'&&game.zhu.isZhu&&player.identity=='fan'){
                            if (target == game.zhu){
                                return 1000;
                            }
                        }
                        if (get.attitude(player, target)<0||get.attitude(target,player)<0){
                            return get.threaten(target,player,false)-get.attitude(player, target)-get.attitude(target,player);
                        }
						else{
                            return -1;
                        }
					});
					"step 1"
					if(result.bool){
						player.logSkill('mingwang',result.targets,'thunder');
						event.target=result.targets[0];
						event.target.judge(function(card){
							if(get.number(card)==13) return -40;
                            if(get.suit(card)=='spade') return -9;
							return 0;
						});
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.card&&result.bool==false){
                        
                        
                        if (get.suit(result.card)=='spade'){
                            player.popup('天助');
                            game.log(player,'#g【冥王】','判定成功');
                            player.recover(player.maxHp - player.hp);
                        }
                        if (get.number(result.card)==13){
                            player.popup('终结');
                            game.log(player,'#g【冥王】','判定成功');
                            //改变背景
                            if (game.getUpperBackgroundName('',player) != 'mingwang_bg'){
                                if (!player.hasSkill('mingwang_background')){
                                    player.addTempSkill('mingwang_background','phaseJieshu');
                                }
                                player.storage.mingwang_background = game.getUpperBackgroundName('',player);
                                player.syncStorage('mingwang_background');
                                game.createClearBackground('mingwang_bg',player);
                            }

                            event.target.die();
                            if (player.hasSkill('mingwang')){
                                player.removeSkill('mingwang');
                                game.log(player,'失去技能','#g【冥王】');
                            }
                        }
						
					}
                    else{
                        player.popup('判定失败');
                        game.log(player,'#g【冥王】','判定失败');
						event.finish();
					}
                },
            },

            mingwang_selfDying_limit:{
                silent:true,
                popup:false,
                forced:true,
            },

            mingwang_background:{
                silent:true,
                popup:false,
                forced:true,
                onremove:function(player){
                    //改回背景
                    if (game.getUpperBackgroundName('',player) == 'mingwang_bg'){
                        game.createClearBackground(player.storage.mingwang_background,player);
                        player.storage.mingwang_background = '';
                    }
                    else{
                        game.createClearBackground('',player);
                    }
                },
            },

            huaxiang:{
                audio:2,
                group:["huaxiang4","huaxiang1","huaxiang2"],
                ai:{
                    threaten:0.7,
                    expose: 0.1,
                    // result: {
                    //     player: function (player) {
                    //         if (player.num('j') > 0) {
                    //             return 1; // 如果判定区有牌，提高技能使用的优先级
                    //         }
                    //         if (Math.random<0.5){
                    //             return 1;
                    //         }else{
                    //             return 0;
                    //         } // 默认情况下没有特殊倾向
                    //     },
                    // },
                },
            },
            huaxiang1:{
                audio:2,
				trigger:{player:'phaseJudgeBefore'},
				direct:true,
                filter:function(event,player){
					return true;
				},
				content:function(){
                    "step 0"
					var check= player.countCards('h')>2||player.countCards('j','lebu')>0;
					player.chooseTarget(get.prompt("huaxiang"),"跳过判定阶段和摸牌阶段，视为对一名其他角色使用一张【杀】",function(card,player,target){
						if(player==target) return false;
						return player.canUse({name:'sha'},target,false);
					}).set('check',check).set('ai',function(target){
						if(!_status.event.check) return 0;
                        if (target.hasSkill('forbidNoSuit')||target.hasSkillTag('forbidNoNumber',true,_status.event.player)){
                            return 0;
                        }
						return get.effect(target,{name:'sha'},_status.event.player);
					});
                    "step 1"
					if(result.bool){
						player.logSkill('huaxiang1',result.targets);
						player.useCard({name:'sha',isCard:true,cardid:'huaxiang1_id'},result.targets[0],false);
						trigger.cancel();
						player.skip('phaseDraw');
					}
				},
                ai:{
                    threaten:1.5,
                    skillTagFilter: function (player) {
                        // 如果判定区有牌，AI 更倾向于发动技能
                        return player.num('j') > 0; // `num('j')` 表示判定区的牌数
                    },
                    result: {
                        player: function (player) {
                            if (player.num('j') > 0) {
                                return 2; // 如果判定区有牌，提高技能使用的优先级
                            }
                            return 0; // 默认情况下没有特殊倾向
                        },
                    },
                },

            },
            huaxiang2:{
				audio:2,
				trigger:{player:'phaseUseBefore'},
				direct:true,
				filter:function(event,player){
					return player.countCards('he',{type:'equip'})>0;
				},
				content:function(){
                    "step 0"
					var check=(player.hasSkill('dutian_mei_nan')&&player.countCards('h')>=2) || player.countCards('h')>=4||player.countCards('he',{color:'black'})>=2;
					player.chooseCardTarget({
						prompt:get.prompt('huaxiang'),
						prompt2:"弃置一张装备牌并跳过出牌阶段，视为对一名其他角色使用一张【杀】",
						filterCard:function(card,player){
							return get.type(card)=='equip'&&lib.filter.cardDiscardable(card,player)
						},
						position:'he',
						filterTarget:function(card,player,target){
							if(player==target) return false;
							return player.canUse({name:'sha'},target,false);
						},
						ai1:function(card){
                            var player=_status.currentPhase;
                            if (player.hasSkill('dutian_mei_nan')&&player.countCards('h')>=2){
                                return 0;
                            }
                            if (player.countCards('h')>=10 ){
                                return 0;
                            }
							if(_status.event.check) return 0;
							return 6-get.value(card);
						},
						ai2:function(target){
							if(_status.event.check) return 0;
                            if (target.hasSkill('forbidNoSuit')||target.hasSkillTag('forbidNoNumber',true,_status.event.player)){
                                return 0;
                            }
							return get.effect(target,{name:'sha'},_status.event.player);
						},
						check:check
					});
                    "step 1"
					if(result.bool){
						player.logSkill('huaxiang2',result.targets);
						player.discard(result.cards[0]);
						player.useCard({name:'sha',isCard:true,cardid:'huaxiang2_id'},result.targets[0]);
						trigger.cancel();
					}
				}
			},

            huaxiang4:{
				audio:2,
				trigger:{player:'phaseDiscardBefore'},
				direct:true,
                filter:function(event,player){
					return true;
				},
				content:function(){
                    "step 0"
					var check=player.needsToDiscard()||player.isTurnedOver()||Math.random()<0.8;
					player.chooseTarget(get.prompt('huaxiang'),"跳过弃牌阶段并将武将牌翻面，视为对一名其他角色使用一张【杀】",function(card,player,target){
						if(player==target) return false;
						return player.canUse({name:'sha'},target,false);
					}).set('check',check).set('ai',function(target){
                        // console.log(target);
                        // console.log(get.effect(target,{name:'sha'},player));
                        if (target.hasSkill('forbidNoSuit')||target.hasSkillTag('forbidNoNumber',true,_status.event.player)){
                            return 0 + 3;
                        }
                        return get.effect(target,{name:'sha'},player) + 3+Math.random();
                    });

                    // .set('ai',function(target){
					// 	if(!_status.event.check) return 0;
					// 	return get.effect(target,{name:'sha'},_status.event.player,_status.event.player);
					// });
                    
                    "step 1"
                    player.storage.result1 = false;
					if(result.bool){
						player.logSkill('huaxiang4',result.targets);
                        player.storage.result1 = true;
                        player.turnOver();
                        
						
					}
                    "step 2"
                    if (player.storage.result1){
                        player.useCard({name:'sha',isCard:true,cardid:"huaxiang4_id"},result.targets[0],false);
                        player.draw(5);
                        
                    }

                    "step 3"
                    if (player.storage.result1){
                        player.chooseCard('h',true,'弃置一张手牌，若以此法弃置的是装备牌，则你改为使用之').set('ai',function(card){
                            if(get.type(card)=='equip'){
                                var equipType = get.subtype(card);
                                if (player.countCards('e',{subtype:equipType})>0){
                                    var theEquip = player.getCards('e',{subtype:equipType});
                                    if (get.color(theEquip[0]) == 'black'){
                                        return -3-get.value(theEquip[0]);
                                    }
                                    else{
                                        return -get.value(theEquip[0]);
                                    }
                                }
                                else{
                                    return 15-get.value(card);
                                }
                            }
                            return -get.value(card);
                        }).set('filterCard',lib.filter.cardDiscardable);
                    }
                    "step 4"
                    if (player.storage.result1&&result.bool&&result.cards.length){
                        player.storage.result2 = result;
                        if(get.type(result.cards[0])=='equip'&&!player.isDisabled(get.subtype(result.cards[0]))){
                            player.chooseUseTarget(result.cards[0],true,'nopopup');
                        }
                        else{
                            player.discard(result.cards[0]);
                        }

                    }
                    "step 5"
                    if (player.storage.result1&&player.storage.result2.bool&&player.storage.result2.cards.length){
                        if (player.storage.result1){
                            delete player.storage.result1;
                        }
                        if (player.storage.result2){
                            delete player.storage.result2;
                        }

                        
                        trigger.cancel();
                    }
                    else{
                        if (player.storage.result1){
                            delete player.storage.result1;
                        }
                        if (player.storage.result2){
                            delete player.storage.result2;
                        }
                    }

				}
			},



            jiuyin:{
                audio:2,
                enable:"chooseToUse",
                forced:false,
                filterCard:function(card){
                    return true;//get.suit(card)=='spade';
                },
                position:'h',
                viewAs:{
                    name:"jiu",
                },
                viewAsFilter:function(player){
                    return player.countCards('h')>0;
                },
                prompt:"将一张手牌当【酒】使用",
                check:function(card){
                    if(_status.event.type=='dying') return 200-get.value(card);
                    return 4-get.value(card);
                },
                ai:{
                    skillTagFilter:function(player){
                        return player.countCards('h')>0&&player.hp<=0;
                    },
                    threaten:function(player,target){
						if(target.hp==1) return 2;
						return 1.5;
					},
                    save:true,
                    basic:{
                        useful:function(card,i){
                            if(_status.event.player.hp>1){
                                if(i==0) return 4;
                                return 1;
                            }
                            if(i==0) return 7.3;
                            return 3;
                        },
                        value:function(card,player,i){
                            if(player.hp>1){
                                if(i==0) return 5;
                                return 1;
                            }
                            if(i==0) return 7.3;
                            return 3;
                        },
                    },
                    order:function(){
                        return get.order({name:'sha'})+0.2;
                    },
                    result:{
                        target:function(player,target){
                            if(target&&target.isDying()) return 2;
                            if(target&&!target.isPhaseUsing()) return 0;
                            if(lib.config.mode=='stone'&&!player.isMin()){
                                if(player.getActCount()+1>=player.actcount) return 0;
                            }
                            var shas=player.getCards('h','sha');
                            if(shas.length>1&&(player.getCardUsable('sha')>1||player.countCards('h','zhuge'))){
                                return 0;
                            }
                            shas.sort(function(a,b){
                                return get.order(b)-get.order(a);
                            })
                            var card;
                            if(shas.length){
                                for(var i=0;i<shas.length;i++){
                                    if(lib.filter.filterCard(shas[i],target)){
                                        card=shas[i];break;
                                    }
                                }
                            }
                            else if(player.hasSha()&&player.needsToDiscard()){
                                if(player.countCards('h','hufu')!=1){
                                    card={name:'sha'};
                                }
                            }
                            if(card){
                                if(game.hasPlayer(function(current){
                                    return (get.attitude(target,current)<0&&
                                        target.canUse(card,current,true,true)&&
                                        !current.hasSkillTag('filterDamage',null,{
                                            player:player,
                                            card:card,
                                            jiu:true,
                                        })&&
                                        get.effect(current,card,target)>0);
                                })){
                                    return 1;
                                }
                            }
                            return 0;
                        },
                    },
                    tag:{
                        save:1,
                    },
                    effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')==1||get.tag(card,'loseHp')){
								if (target.countCards('h') > 0 && !target.hasSkill('fengyin') && target.hp == 1){
                                    return [0,0.2];
                                }
                                else if (target.countCards('h') > 0 && !target.hasSkill('fengyin') && target.hp > 1){
                                    return [0,0];
                                }
                                else{
                                    return [1,-2];
                                }
							}
                            if (get.tag(card,'recover') || get.tag(card,'save')){
                                if(get.tag(card,'recover')&&target.hp>=1) return [0,0];
                                if (target.countCards('h') > 0 && !target.hasSkill('fengyin') && _status.currentPhase != target && player!=target){
                                    return 0;
                                }
                            }
						}
					},

                },
            },
            jiuyu:{
                // trigger:{
                //     player:"phaseBegin",
                // },
                // forced:true,
                enable:"phaseUse",
                usable:1,
                audio:2,
                skillAnimation:'epic',
                animationColor:'fire',
                filterTarget:function(card,player,target){
                    return target!=player;
                },
                line:'fire',
                selectTarget:-1,
                multitarget:true,
                multiline:true,
                content:function(event){
                    "step 0"
                    //改变背景
                    event.background = game.getUpperBackgroundName('',player);
                    game.createClearBackground('jiuyu_bg',player);
                    //效果
                    // player.awakenSkill('jiuyu');
                    player.removeSkill('zuimei');
                    player.addSkill('zuimei2');
                    game.log(player,"令技能","#g【醉美】","摸牌数-1");
                    var has=game.hasPlayer(function(current){
                        if (!current.hasSkill('jiuyu_jiu')){
                            current.addTempSkill('jiuyu_jiu','phaseBefore');
                        }
                    });
                    event.current=player.next;
                    event.currented=[];
                    "step 1"                   
                    event.currented.push(event.current);
                    event.current.animate('target');
                    player.chooseToUse('【酒域】：使用一张【酒】或流失一点体力',{name:'jiu'}).set('ai',function(card){
                        return 100 - get.value(card);
                    });
                    "step 2"
                    event.result = result;
                    if(event.result.bool==false) {
                        player.loseHp();
                        game.playAudio('skill','jiuyu_saoxing'+1);
                    }
                    else{
                        game.playAudio('skill','jiuyin'+Math.ceil(2*Math.random()));
                        // player.line(event.current);
                    }
                    "step 3"
                    event.current.chooseCard('【酒域】：使用一张【酒】或流失一点体力',1,'h',function(card){return get.name(card)=='jiu';}).set('ai',function(card){  
                        if (event.current.hasSkillTag('maihp')){
                            return -10;
                        }
                        if (event.current.hasSkill('yujiu_heng')&&!event.current.hasSkill('yujiu_hp_heng')&&event.current.countCards('e')==0){
                            return 25 - get.value(card);
                        }
                        return Math.ceil(15*Math.random()) - get.value(card);
                    });
                    // .chooseToDiscard('【酒域】：使用一张酒或流失一点体力','h',function(card){
                    //     return get.name(card) == 'jiu';
                    // }).set('ai',function(card){
                    //     return Math.ceil(100*Math.random())-get.value(card);
                    // });
                    // .chooseToUse('【酒域】：使用一张酒或流失一点体力',{name:'jiu'}).set('ai',function(card){
                    //     return Math.ceil(100*Math.random()) - get.value(card);
                    // });
                    "step 4"
                    event.result = result;
                    if(event.result.bool == false) {
                        event.current.loseHp();
                        game.playAudio('skill','jiuyu_saoxing'+1);
                    }
                    else {
                        event.current.useCard(result.cards[0],event.current);
                        game.playAudio('skill','jiuyin'+Math.ceil(2*Math.random()));
                    }
                    game.delay(0.5);
                    "step 5"
                    event.current=event.current.next;
                    if(event.current!=player&&!event.currented.contains(event.current)){
                        game.delay(0.5);
                        event.goto(1);
                    }
                    else{
                        event.goto(6);
                    }
                    "step 6"
                    player.logSkill('jiuyu');
                    event.current=player.next;
                    event.currented=[];
                    "step 7"
                    event.currented.push(event.current);
                    event.current.animate('target');
                    event.current.chooseToUse('【酒域】：使用一张【杀】或回复一点体力',{name:'sha'},function(card,player,target){
						if(player==target) return false;
						if(!player.canUse('sha',target)) return false;
						if(get.distance(player,target)<=1) return true;
                        if(game.hasPlayer(function(current){
							return current!=player&&get.distance(player,current)<get.distance(player,target);
						})){
							return false;
						}
						return true;
					});
                    "step 8"
                    if(result.bool==false) event.current.recover(1);
					event.current=event.current.next;
					if(event.current!=player&&!event.currented.contains(event.current)){
						game.delay(0.5);
						event.goto(7);
					}
                    else{
                        event.goto(9);
                    }
                    "step 9"
                    //改回背景
                    if (game.getUpperBackgroundName('',player) == 'jiuyu_bg'){
                        game.createClearBackground(event.background,player);
                    }
                    else{
                        game.createClearBackground('',player);
                    }
                    "step 10"
                    var has=game.hasPlayer(function(current){
                        if (current.hasSkill('jiuyu_jiu')){
                            current.removeSkill('jiuyu_jiu');
                        }
                    });
                    "step 11"
                    player.addSkill('zuimei');
                    player.removeSkill('zuimei2');
                    game.log(player,"恢复技能","#g【醉美】");
                    event.finish();
                },
                ai:{
                    order:function(){
						return get.order({name:'sha'})+0.2;
					},
                    result:{
                        player:function(player){
                            if(lib.config.mode=='identity'&&game.zhu.isZhu&&player.identity=='fan'){
                                if(game.zhu.hp==1&&game.zhu.countCards('h')<=2) return 1;
                            }
                            if(lib.config.mode=='identity'&&game.zhu.isZhu&&player.identity=='zhong'){
                                if(game.zhu.hp==1&&game.zhu.countCards('h')<=1) return -1;
                            }
                            if (player.countCards('h')==0) return 0;
                            if (player.countCards('h')<3) return 0.1- Math.random();
                            return 0.58 - Math.random();
                            // var num=0;
                            // var players=game.filterPlayer();
                            // for(var i=0;i<players.length;i++){
                            //     var att=get.attitude(player,players[i]);
                            //     if(att>0) att=1;
                            //     if(att<0) att=-1;
                            //     if(players[i]!=player&&players[i].hp<=3){
                            //         if(players[i].countCards('h')==0) num+=att/players[i].hp;
                            //         else if(players[i].countCards('h')==1) num+=att/2/players[i].hp;
                            //         else if(players[i].countCards('h')==2) num+=att/4/players[i].hp;
                            //     }
                            //     if(players[i].hp==1) num+=att*1.5;
                            // }
                            // if(player.hp==1){
                            //     return -num;
                            // }
                            // if(player.hp==2){
                            //     return -game.players.length/4-num;
                            // }
                            // return -game.players.length/3-num;
                        },
                    },
                },
                mark:false,
                // intro:{
                //     content:"limited",
                // },
                init:function(player,skill){
                    player.storage[skill]=false;
                },
            },

            jiuyu_jiu:{
                audio:false,
                silent:true,
                forced:true,
                mark:true,
                marktext:"酒",
                intro:{
                    name:'酒域',
                    content:'【杀】以外的牌视为【酒】',
                },
                mod:{
					cardname:function(card,player,name){
						if(card.name !='sha') return 'jiu';
					},
				},
				trigger:{player:'useCard'},
				filter:function(event,player){
					return event.card.name!='sha'&&event.cards.length > 0;
				},
				content:function(event){
					player.logSkill('jiuyu_jiu');
                    game.log(player,'将',trigger.cards[0],"视为","#y酒","使用");
				},
            },




            haoqin:{
                audio:2,
                trigger:{
                    player:"phaseJieshu",
                },
                priority:15,
                direct:true,
                onremove:true,
                filter:function (event,player){
                    return game.players.length>1;
                },
                content:function (){
                    "step 0"
                    player.chooseTarget('选择【豪情】的目标',lib.translate.haoqin_info,function(card,player,target){
                            return target!=player;
                    }).set('ai',function(target){     
                            return get.attitude(player,target)+get.attitude(target,player);            
                    });        
                    "step 1"
                    if(result.bool){        
                        var target=result.targets[0];
                        player.logSkill('haoqin',target); 
                        player.line(target,'green');
                        game.log(target,'成为了','#g【豪情】','的目标，其受到的伤害均由',player,'承担');
                        target.storage.haoqin_target=player;
                        target.addSkill('haoqin_target');
                        target.syncStorage('haoqin_target');
                        if (!player.hasSkill('haoqin_end')){
                            player.addSkill('haoqin_end');
                        }
                    }
                    else {       
                            event.finish(); 
                    }                     
                },
                ai:{
                    expose:0.5,
                    maixie:true,
                    "maixie_hp":true,
                    skillTagFilter:function(player,tag){
						if(tag=='maixie' || tag=='maixie_hp'){
							if(player.countCards('h')> 3 || player.hp > 1 ) return false;
                            if(player.countCards('h')== 0) return false;
						}
					},
                },
            },
            zuimei:{
                audio:3,
                trigger:{
                    player:"useCardAfter",
                },
                forced:false,
                filter:function(event, player) {
                    return event.card && event.card.name == "jiu"; // 判断使用的牌是否是【酒】
                },
                content:function() {
                    player.draw(2); // 摸两张牌
                },
                group:"zuimei_shoupai",
                prompt:"醉美",
                prompt2:"你使用【酒】后，可以摸两张牌。",
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    maihp:true,
                    skillTagFilter:function(player,tag){
						if(tag=='maixie' || tag=='maixie_hp'||tag=='maihp'){
							if(player.hp > 1 ) return false;
                            if(player.countCards('h')== 0) return false;
						}
					},
                    effect:{
                        target:function(card, player, target, current) {
                            if (card.name == "jiu") return [1, 3]; // 增强使用【酒】的价值
                        },
                    },
                },
            },

            zuimei_shoupai:{
                mod:{
                    maxHandcard:function(player, num) {
                        return num + 2; // 手牌上限+2
                    },
                },
            },

            zuimei2:{
                audio:2,
                trigger:{
                    player:"useCardAfter",
                },
                forced:false,
                filter:function(event, player) {
                    return event.card && event.card.name == "jiu"; // 判断使用的牌是否是【酒】
                },
                content:function() {
                    player.draw(1); // 摸两张牌
                },
                group:"zuimei_shoupai",
                prompt:"醉美",
                prompt2:"你使用【酒】后，可以摸一张牌。",
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    maihp:true,
                    effect:{
                        target:function(card, player, target, current) {
                            if (card.name == "jiu") return [1, 3]; // 增强使用【酒】的价值
                        },
                    },
                },
            },

            haoqin_end:{
                trigger:{
                    player:['phaseZhunbei','dieBegin'],
                },
                forced:true,
                silent:true,
                filter:function(event,player){
                    return game.hasPlayer(function(current){
                    return current.hasSkill('haoqin_target');
                });
                },
                content:function(){
                 for(var i=0;i<game.players.length;i++){
                        if(game.players[i].hasSkill('haoqin_target')){
                            game.players[i].removeSkill('haoqin_target');
                        }
                    }
                },
            },
        
            haoqin_target:{
                audio:2,
                mark:'character',
                intro:{
                content:function(storage, player) {
                    if (player.storage.haoqin_target){
                        var jiuxiner = player.storage.haoqin_target;
                        return '当你受到伤害时，该伤害改为'+get.translation(jiuxiner)+'承担';
                    }
                    else{
                        return '当你受到伤害时，该伤害改为九昕儿承担';
                    }
                    
                },
                //    '当你受到伤害时，该伤害改为$承担'
                },
                nopop:true,
                priority:-15,      
                trigger:{player:'damageBegin4'},
                forced:true,
                popup:false,
                filter:function(event,player){
                    return player.isAlive() && player.storage.haoqin_target.isAlive();
                },
                content:function (){         
                    game.playAudio('skill','haoqin_target'+Math.ceil(2*Math.random()));                 
                    var target=player.storage.haoqin_target;
                    trigger.player.line(target,'green');
                    target.popup(get.translation('haoqin'));
                    //trigger.targets.remove(player);
                    //trigger.targets.push(target);	
                    //trigger.target = target;
                    trigger.player = target;
                    //target.damage(trigger.num, trigger.nature, trigger.source);
                    //trigger.trigger("damage");
               },
               ai:{
                    // expose:0.2,
                    maixie:true,
                    "maixie_hp":true,
                    skillTagFilter:function(player,tag){
                        if(tag=='maixie' || tag=='maixie_hp'){
                            if(player.storage.haoqin_target.countCards('h')> 3 || player.storage.haoqin_target.hp > 1 ) return false;
                            if(player.storage.haoqin_target.countCards('h')== 0) return false;
                        }
                    },
                    effect:{
                        target:function(card,player,target){
                            if(get.tag(card,'damage')){
                                if (target.storage.haoqin_target.countCards('h') > 0 && !target.storage.haoqin_target.hasSkill('fengyin') && target.hp == 1){
                                    return [0,0.5];
                                }
                                else if (target.storage.haoqin_target.countCards('h') > 0 && !target.storage.haoqin_target.hasSkill('fengyin') && target.hp > 1){
                                    return [0,0];
                                }
                                else{
                                    return [1,-2];
                                }
                            }
                        }
                    },
                },

            },
            
            nvhao:{
                audio:2,
                trigger:{
                    player:"loseAfter",
                },
                frequent:true,
                direct:false,
                filter:function(event,player){
                    return event.es&&event.es.length>0;
                },
                content:function(){
                    //game.playAudio('cyc1.mp3');
                    "step 0"
                    // 询问玩家是否发动技能
                    player.chooseBool(get.prompt2('nvhao')).set("ai", function () {
                        // 根据局势设置默认的AI选择
                        return true; // 默认选择发动
                    });
                    "step 1"
                    if (!result.bool) {
                        // 如果玩家选择不发动技能，则直接结束
                        event.finish();
                        return;
                    }
                    // 技能效果
                    
                    event.count=trigger.es.length;
                    "step 2"
                    event.count--;
                    player.draw(2);
                    "step 3"
                    player.chooseToDiscard('h', 1, true).set('ai',function(card){
                        if (get.type(card,'trick')=='trick'){
                            return -100-get.value(card);
                        }
                        else if (get.type(card)=='equip'){
                            return -50-get.value(card);
                        }
                        else if (get.name(card) == 'tao'){
                            return -10-get.value(card);
                        }
                        else if (get.name(card) == 'jiu'){
                            return -5-get.value(card);
                        }

                        else {
                            return 6-get.value(card);
                        }
                        
                    });
                    "step 4"
                    if (!player.hasSkill('nvhao_jiashang')){
                        player.chooseBool(get.prompt('nvhao'),'你可以令下一次造成的伤害+1').set("ai", function () {
                            // 根据局势设置默认的AI选择
                            return true; // 默认选择发动
                        });
                    }
                    else{
                        event.finish();
                    }
                    
                    "step 5"
                    if (!result.bool) {
                        // 如果玩家选择不发动技能，则直接结束
                        event.finish();
                        return;
                    }
                    else{
                        if (!player.hasSkill('nvhao_jiashang')){
                            player.addSkill('nvhao_jiashang');
                            game.log(player,'令下一次造成的伤害+1');
                        }
                        event.finish();
                    }
                },
                ai:{
                    noe:true,
                    reverseEquip:true,
                    effect:{
                        target:function(card,player,target,current){
                            if(get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
                        },
                    },
                },
            },

            nvhao_jiashang:{
                silent:true,
                popup:false,
                frequent:true,
                forced:true,
                mark:true,
                marktext:"女",
                intro:{
                    name:"女豪",
                    content:"下一次造成伤害+1",
                },
                trigger:{
                    source:"damageBegin3",
                },
                filter:function(event,player){
                    return event.num > 0;
                },
                content:function(event){
                    trigger.num++;
                    player.popup(get.translation('nvhao'),'fire');
                    game.playAudio('skill','nvhao'+Math.ceil(2*Math.random()));
                    game.log(player,'发动了','#g【女豪】');
                    game.log(player,'对',trigger.player,'造成伤害+1，伤害值为','#y'+get.translation(trigger.num));
                    player.removeSkill('nvhao_jiashang');
                    
                },
                ai:{
                    damageBonus:true,
                }
            },


            haoshuang:{
                audio:2,
                locked:false,
                marktext:"喝",
                trigger:{
                    player:"useCard",
                },
                direct:false,
                frequent:false,
                filter:function(event){
                    // return (get.type(event.card,'trick')=='trick'&&event.card.isCard);
                    if (event.card.isCard) {
                        return get.type(event.card,'trick')=='trick';
                    }
                    else if (event.card.name == 'nanman') {
                        return lib.card[event.card.name].type == 'trick';
                    }
                    else {
                        return false;
                    }
                    
                },
                init:function(player){
                    player.storage.haoshuang=0;
                    player.syncStorage('haoshuang');
                },
                content:function(){
                    'step 0'
                    player.draw();
                    'step 1'
                    event.card=result[0];
                    if(get.type(event.card)=='basic'){
                        player.chooseBool('是否弃置'+get.translation(event.card)+'并令本回合手牌上限+1？').set('ai',function(evt,player){
                            var has=game.hasPlayer(function(current){
                                return player!= current && player.inRange(current)&&(get.attitude(player,current)<0);
                            });
                            if (_status.currentPhase==player&&player.getEquip('zhuge')&&get.name(event.card)=='sha'&&has){
                                return false;
                            }
                            return _status.currentPhase==player&&player.needsToDiscard(-1)&&_status.event.value<5.3;
                        }).set('value',get.value(event.card,player));
                    }
                    'step 2'
                    if(result.bool){
                        // game.playAudio('skill','haoshuang'+Math.ceil(2*Math.random()));
                        player.discard(event.card);
                        player.storage.haoshuang++;
                        player.syncStorage('haoshuang');
                        if(_status.currentPhase==player){
                            player.markSkill('haoshuang');
                        }
                    }
                },
                ai:{
                    threaten:7.4,
                    noautowuxie:true,
                    pretrick:true,
                },
                mod:{
                    maxHandcard:function(player,num){
                        return num+player.storage.haoshuang;
                    },
                },
                intro:{
                    content:"本回合手牌上限+#",
                },
                group:"haoshuang_clear",
                subSkill:{
                    clear:{
                        trigger:{
                            global:"phaseAfter",
                        },
                        silent:true,
                        content:function(){
                            player.storage.haoshuang=0;
                            player.syncStorage('haoshuang');
                            player.unmarkSkill('haoshuang');
                        },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },



            honglian_clearEquip: {
                trigger: { player: ['phaseEnd'] },
                silent: true,
                forced:true,
                content: function () {
                    // 清除本回合的使用记录
                    player.storage.honglian_equip=[1,1,1,1];
                },
            },

            honglian_chenyingchao:{
                audio:2,
                enable:'chooseToUse',
                forced:false,
                // direct:true,
                // silent:true,
                // popup:false,
                // skillAnimation:"epic",
                // animationColor:"fire",
                init:function(player){
                    player.storage.honglian_equip=[1,1,1,1];
                },
                filter:function(event,player){
                    if (!player.storage.honglian_equip){
                        player.storage.honglian_equip=[1,1,1,1];
                    }
					return player.countCards('e')>0&&player.storage.honglian_equip&&(
                        (player.storage.honglian_equip[0] == 1&&!player.isEmpty('equip1')) ||
                        (player.storage.honglian_equip[1] == 1&&!player.isEmpty('equip2')) ||
                        (player.storage.honglian_equip[2] == 1&&!(player.isEmpty('equip3')&&player.isEmpty('equip4'))) ||
                        (player.storage.honglian_equip[3] == 1&&!player.isEmpty('equip5')) 
                    );
				},
				filterCard:function (card, player) {
                    // 限制每种装备类型每回合只能用一次
                    if (!player.storage.honglian_equip) {
                        player.storage.honglian_equip = [1, 1, 1, 1];
                    }
                    var type = get.subtype(card);
                    if (type == 'equip1') {
                        return player.storage.honglian_equip[0] == 1;
                    }
                    if (type == 'equip2') {
                        return player.storage.honglian_equip[1] == 1;
                    }
                    if (type == 'equip3'||type == 'equip4') {
                        return player.storage.honglian_equip[2] == 1;
                    }
                    if (type == 'equip5') {
                        return player.storage.honglian_equip[3] == 1;
                    }
                    return false;
                    
                },
				position:'e',
				viewAs:{name:'nanman'},
				prompt:'每回合每个装备栏各限一次，你可以将一个装备栏中的一张装备牌当作【南蛮入侵】使用。',
                onuse: function (result, player) {
                    //播放武器音效
                    game.playAudio('skill','sword_sound'+1);

                    //改变背景
                    if (game.getUpperBackgroundName('',player) != 'honglian_bg'){
                        player.popup('honglian_binsi_chenyingchao');
                        if (!player.hasSkill('honglian_background')){
                            player.addTempSkill('honglian_background','phaseJieshu')
                        }
                        player.storage.honglian_background = game.getUpperBackgroundName('',player);
                        player.syncStorage('honglian_background');
                        game.createClearBackground('honglian_bg',player);
                    }
                    else{
                        // player.logSkill('honglian_chenyingchao');
                    }

                    //保证刷新次数
                    if (!player.hasSkill('honglian_clearEquip')){
                        player.addSkill('honglian_clearEquip');
                    }
                    
                    //效果
                    var card = result.cards[0];
                    var type = get.subtype(card);
                    if (type == 'equip1') {
                        player.storage.honglian_equip[0] = 0;
                    }
                    if (type == 'equip2') {
                        player.storage.honglian_equip[1] = 0;
                    }
                    if (type == 'equip3'||type == 'equip4') {
                        player.storage.honglian_equip[2] = 0;
                    }
                    if (type == 'equip5') {
                        player.storage.honglian_equip[3] = 0;
                    }
                    
                },
				check:function(card){
					var player=_status.currentPhase;
                    var has=game.hasPlayer(function(current){
                        return player!= current && player.inRange(current)&&(get.attitude(player,current)<0);
                    });
                    if (get.name(card)=='zhuge'&&player.countCards('he','zhuge') == 1&&player.countCards('h','sha')>1&&has){
                        return -1;
                    }
					if(player.countCards('he',{subtype:get.subtype(card)})>1){
						return 110-get.equipValue(card);
					}
					if(player.countCards('h')<player.hp){
						return 60-get.value(card);
					}
					return 50-get.equipValue(card);
				},
				// ai:{
				// 	order:9,
				// 	threaten:1.1
				// },
                ai:{
                    order:9,
                    threaten:10.1,
                    // expose:2.5,
                    wuxie:function(target,card,player,viewer){
                        if(get.attitude(viewer,target)>0&&target.countCards('h','sha')){
                            if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
                        }
                    },
                    basic:{
                        order:9,
                        useful:[5,1],
                        value:5,
                    },
                    result:{
                        target:function(player,target){
                            var nh=target.countCards('h');
                            if(get.mode()=='identity'){
                                // if(player.isZhu&&player.hasUnknown(2)) return -100;
                                if(player.isZhu&&nh<=2&&target.hp<=1) return -100;
                                if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                            }
                            if(nh==0) return -30;
                            if(nh==1) return -27;
                            return -25;
                        },
                        player:function(player,target){
                            var has=game.hasPlayer(function(current){
                                return player!= current && player.inRange(current)&&(get.attitude(player,current)<0);
                            });
                            if (player.countCards('e','zhuge')==1&&player.countCards('he','zhuge')==1&&player.countCards('h','sha')>1&&has){
                                if (player.countCards('e')<2){
                                    return -1;
                                }
                                var only1 = player.storage.honglian_equip[0] == 1;
                                var only2 = player.storage.honglian_equip[1] == 0 || player.countCards('e',{subtype:'equip2'}) == 0;
                                var only3 = player.storage.honglian_equip[2] == 0 || (player.countCards('e',{subtype:'equip3'}) == 0&&player.countCards('e',{subtype:'equip4'}) == 0);
                                var only5 = player.storage.honglian_equip[3] == 0 || player.countCards('e',{subtype:'equip5'}) == 0;
                                if (only1&&only2&&only3&&only5){
                                    return -1;
                                }
                            }
                            if(get.mode()=='identity'){
                                if(player.isZhu&&player.hasUnknown(4)) return 100;
                                var zhugongs = game.filterPlayer(function(current) {
                                    return current.identity == 'zhu';
                                }); 
                                if(zhugongs&&zhugongs.length>0&&(player.identity=='zhong'||player.identity=='nei'||player.identity=='mingzhong')&&
                                (zhugongs[0].countCards('e','tengjia')>0||zhugongs[0].hp >= 2 || zhugongs[0].hasSkillTag('preRespondSha') || zhugongs[0].countCards('h')>=3||player.countCards('h','tao')>0)){
                                    return 90;
                                }
                            }
                            if(player.countCards('h')<=player.hp) return 1;
                            if(player.hp<=1) return 1;
                            return 0;
                        },
                    },
                    tag:{
                        respond:1,
                        respondSha:1,
                        damage:1,
                        multitarget:1,
                        multineg:1,
                    },
                },
                // group:['honglian_clearEquip','honglian_binsi_chenyingchao'],
                group:['honglian_binsi_chenyingchao'],
            },


            honglian_binsi_chenyingchao:{
                audio:1,
                animationColor:'fire',
				skillAnimation:'legend',
                popup:false,
                frequent:true,
                trigger: {
                    player: 'dyingAfter', // 脱离濒死时触发
                },
                filter: function (event, player) {
                    // 检查是否满足触发条件
                    return (event.name == 'dying' && player.hp > 0);
                },
                content:function(event){
                    "step 0"
                    player.chooseBool(get.prompt("honglian_chenyingchao"),'你脱离濒死，是否发动【红缨】视为使用一张【南蛮入侵】？').set('ai',function(){
                        var mode=get.mode();
                        if (mode=='identity'&&(player.identity=='zhong'||player.identity=='mingzhong')){
                            var zhugongs = game.filterPlayer(function(current) {
                                return current.identity == 'zhu';
                            }); 
                            if ((zhugongs[0].hp < 2 && !zhugongs[0].hasSkillTag('preRespondSha')) && (zhugongs[0].countCards('h')<5 || zhugongs[0].countCards('e', 'tengjia') < 1)){
                                return false;
                            }
                            else {
                                return true;
                            }
                        }
                        return true;
                    });
                    "step 1"
                    if (result.bool) {
                        
                        //效果
                        var targets=game.filterPlayer();
                        targets.remove(player);
                        targets.sort(lib.sort.seat);
                        event.targets = targets;
                        player.logSkill('honglian_binsi_chenyingchao');
                    }
                    else{
                        event.finish()
                    }
                    "step 2"
                    //改变背景
                    if (game.getUpperBackgroundName('',player) != 'honglian_bg'){
                        if (!player.hasSkill('honglian_background')){
                            player.addTempSkill('honglian_background','phaseJieshu');
                        }
                        player.storage.honglian_background = game.getUpperBackgroundName('',player);
                        player.syncStorage('honglian_background');
                        game.createClearBackground('honglian_bg',player);
                        game.delay(1);
                    }
                    "step 3"
                    player.useCard({ name: 'nanman', isCard: true ,cardid:'honglian_binsi_chenyingchao_id'},event.targets).set('nopopup',true).set('audio',false);
                    game.log(player,"连干"+get.cnNumber(event.targets.length,true)+"大碗白酒，敬在座的各位！喝罢，实在没忍住，打了一个酒嗝，晃晃悠悠着大腿迈前一步又踉跄着后退半步，醉醺醺的样子");
                    game.log(player,'发动【红缨】脱离濒死后视为使用了一张【南蛮入侵】');
                },
            },
                

            honglian_background:{
                silent:true,
                popup:false,
                forced:true,
                onremove:function (player){
                    //改回背景
                    if (game.getUpperBackgroundName('',player) == 'honglian_bg'){
                        game.createClearBackground(player.storage.honglian_background,player);
                        player.storage.honglian_background = '';
                    }
                    else{
                        game.createClearBackground('',player);
                    }
				},
            },



            dizhong:{
                audio:2,
                forced:false,
                frequent: false,
                trigger:{
                    global:"useCardAfter",
                },
                filter:function(event,player){
                    return (!player.hasSkill('dizhong_limit'))&&event.card.name=='nanman'&&game.countPlayer2(function(current){
                        return current.getHistory('damage',function(evt){
                            return evt.getParent(2)==event;
                        }).length>0;
                    })>0;
                },
                content:function(){
                    var num=game.countPlayer2(function(current){
                            return current.getHistory('damage',function(evt){
                                return evt.getParent(2)==trigger;
                            }).length>0;
                        });
                    player.draw(num);
                    player.addTempSkill('dizhong_limit','phaseAfter')
                    //  player.addMark('dizhong',num,false);
                },
                // intro:{
                //     content:"已因此技能获得了#张牌",
                // },
            },

            dizhong_limit:{
                silent:true,
                forced:true,
            },

            
            xiaoyue_wusheng:{
                group:["xiaoyue_wusheng_summer","xiaoyue_wusheng_damage"],
                audio:3,
                trigger:{
                    player:"useCard2",
                },
                forced:true,
                //locked:true,
                mod:{
                    globalFrom:function(from,to,distance){
                        if(_status.currentPhase==from){
                            return distance-1-from.storage.xiaoyue_wusheng;
                        }
                    },
                    wuxieRespondable:function(card,player,target,current){
                        if(player!=current&&player.storage.xiaoyue_wusheng_directHit.contains(card)){
                            return false;
                        }
                    },
                },
                init:function(player){
                    player.storage.xiaoyue_wusheng_directHit=[];
                    player.storage.xiaoyue_wusheng_damage=[];
                    player.storage.xiaoyue_wusheng_unequip=[];
                    player.storage.xiaoyue_wusheng=0;
                },
                filter:function(trigger,player){
                    return _status.currentPhase==player&&trigger.targets&&trigger.targets.length==1&&(get.name(trigger.card)=='sha'||get.type(trigger.card)=='trick')&&!game.hasPlayer(function(current){
                        return get.distance(player,current)>1;
                    });
                },
                filterx:function(event,player){
                    var info=get.info(event.card);
                    if(info.allowMultiple==false) return false;
                    if(event.targets&&!info.multitarget){
                        if(game.hasPlayer(function(current){
                            return lib.filter.targetEnabled2(event.card,player,current)&&!event.targets.contains(current);
                        })){
                            return true;
                        }
                    }
                    return false;
                },
                content:function(){
                    "step 0"
                    event.videoId=lib.status.videoId++;
                    var func=function(card,id,bool){
                        var list=[
                            '为XXX多指定一个目标',
                            '令XXX无视防具',
                            '令XXX不可被抵消',
                            '当XXX造成伤害时摸一张牌',
                        ];
                        var choiceList=ui.create.dialog('【啸月】：请选择一至两项','forcebutton');
                        choiceList.videoId=id;
                        for(var i=0;i<list.length;i++){
                            list[i]=list[i].replace(/XXX/g,card);
                            var str='<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                            if(i==0&&!bool) str+='<div style="opacity:0.5">';
                            str+=list[i];
                            if(i==0&&!bool) str+='</div>';
                            str+='</div>';
                            var next=choiceList.add(str);
                            next.firstChild.addEventListener(lib.config.touchscreen?'touchend':'click',ui.click.button);
                            next.firstChild.link=i;
                            for(var j in lib.element.button){
                                next[j]=lib.element.button[i];
                            }
                            choiceList.buttons.add(next.firstChild);
                        }
                        return choiceList;
                    };
                    if(player.isOnline2()){
                        player.send(func,get.translation(trigger.card),event.videoId,lib.skill.xiaoyue_wusheng.filterx(trigger,player));
                    }
                    event.dialog=func(get.translation(trigger.card),event.videoId,lib.skill.xiaoyue_wusheng.filterx(trigger,player));
                    if(player!=game.me||_status.auto){
                        event.dialog.style.display='none';
                    }
                    var next=player.chooseButton();
                    next.set('dialog',event.videoId);
                    next.set('forced',true);
                    next.set('selectButton',[1,2]);
                    next.set('filterButton',function(button){
                        if(button.link==0){
                            return _status.event.bool1;
                        };
                        return true;
                    });
                    next.set('bool1',lib.skill.xiaoyue_wusheng.filterx(trigger,player));
                    next.set('ai',function(button){
                        var player=_status.event.player;
                        var event=_status.event.getTrigger();
                        switch(button.link){
                            case 0:{
                                var addi = 0;
                                var dam = 0;
                                if (get.type(event.type)=='trick'){
                                    addi += 1.1;
                                }
                                if (get.tag(event.card,'damage')){
                                    dam += 1.5;
                                }
                                if(game.hasPlayer(function(current){
                                    return lib.filter.targetEnabled2(event.card,player,current)&&!event.targets.contains(current)&&get.effect(current,event.card,player,player)+dam>0;
                                })) return 1.2+(Math.random()+get.tag(event.card,'damage'))/2+addi;
                                return 0;
                            }
                            case 1:{
                                if (event.card.name=='sha' && get.color(event.card) == 'black' && trigger.targets[0].getEquip('renwang')){
                                    return 1.3+Math.random();
                                }
                                if (get.tag(event.card,'damage')){
                                    return Math.random();
                                }
                                else{
                                    return 0;
                                }
                                
                            }
                            case 2:{
                                if (get.tag(event.card,'damage')){
                                    if(event.card.name=='sha'||event.card.name=='juedou'||get.type(event.type)=='trick'&&game.hasPlayer(function(current){
                                        return get.attitude(current,player)<0&&current.hasWuxie();
                                    })) return 1+Math.random();
                                    return Math.random();
                                }
                                else{
                                    return 2 + Math.random();
                                }
                            }
                            case 3:{
                                if (get.tag(event.card,'damage')){
                                    return get.tag(event.card,'damage')*1.5+Math.random();
                                }
                                else{
                                    return 0;
                                }
                                
                            }
                        }
                    });
                    "step 1"
                    if(player.isOnline2()){
                        player.send('closeDialog',event.videoId);
                    }
                    event.dialog.close();
                    var map=[
                        function(trigger,player,event){
                            player.chooseTarget('请选择'+get.translation(trigger.card)+'的额外目标',true,function(card,player,target){
                                var player=_status.event.player;
                                if(_status.event.targets.contains(target)) return false;
                                return lib.filter.targetEnabled2(_status.event.card,player,target);
                            }).set('targets',trigger.targets).set('card',trigger.card).set('ai',function(target){
                                var trigger=_status.event.getTrigger();
                                var player=_status.event.player;
                                return get.effect(target,trigger.card,player,player);
                            });
                        },
                        function(trigger,player,event){
                            player.storage.xiaoyue_wusheng_unequip.add(trigger.card);
                        },
                        function(trigger,player,event){
                            player.storage.xiaoyue_wusheng_directHit.add(trigger.card);
                            trigger.nowuxie=true;
                            trigger.customArgs.default.directHit2=true;
                        },
                        function(trigger,player,event){
                            player.storage.xiaoyue_wusheng_damage.add(trigger.card);
                        }
                    ];
                    for(var i=0;i<result.links.length;i++){
                        game.log(player,'选择了','#g【啸月】','的','#y选项'+get.cnNumber(result.links[i]+1,true));
                        map[result.links[i]](trigger,player,event);
                    }
                    if(!result.links.contains(0)) event.finish();
                    "step 2"
                    if(result.targets){
                        player.line(result.targets);
                        trigger.targets.addArray(result.targets);
                    }
                },
                ai:{
                    threaten:1.9,
                    unequip:true,
                    skillTagFilter:function(player,tag,arg){
                        if(tag=='unequip'){
                            if(arg&&player.storage.xiaoyue_wusheng_unequip.contains(arg.card)) return true;
                            return false;
                        }
                        if(tag=='norespond'&&Array.isArray(arg)){
                            var evt=arg[2].getParent();
                            if(evt.type=='card'&&player.storage.xiaoyue_wusheng_directHit.contains(evt.card)) return true;
                            return false;
                        }
                    },
                },
                subSkill:{
                    damage:{
                        sub:true,
                        trigger:{
                            global:"damageBegin1",
                        },
                        audio:"xiaoyue_wusheng",
                        forced:true,
                        filter:function(event,player){
                            return event.card&&player.storage.xiaoyue_wusheng_damage.contains(event.card);
                        },
                        content:function(){player.draw()},
                    },
                    summer:{
                        sub:true,
                        trigger:{
                            player:["phaseAfter","useCardAfter","useCard"],
                        },
                        silent:true,
                        filter:function(event,player){
                            return player==_status.currentPhase;
                        },
                        content:function(){
                            if(trigger.name=='phase'){
                                player.storage.xiaoyue_wusheng=0;
                                return;
                            }
                            else if(event.triggername=='useCard'){
                                player.logSkill('xiaoyue_wusheng');
                                player.storage.xiaoyue_wusheng++;
                                player.syncStorage('xiaoyue_wusheng');
                                return;
                            }
                            else{
                                player.storage.xiaoyue_wusheng_unequip.remove(event.card);
                                player.storage.xiaoyue_wusheng_directHit.remove(event.card);
                                player.storage.xiaoyue_wusheng_damage.remove(event.card);
                            }
                        },
                        forced:true,
                        popup:false,
                    },
                },
            },


            shixue:{
                audio:2,
                skillAnimation:"epic",
                animationColor:"thunder",
                trigger:{
                    global:"phaseAfter",
                },
                frequent:true,
                filter:function(event,player){
                    return player.getStat('kill')>0;
                },
                content:function(){
                    'step 0'
                    //改变背景
                    player.storage.shixue = 'xueyue_bg';//初始化
                    if (game.getUpperBackgroundName('',player) != 'xueyue_bg'){
                        player.storage.shixue = game.getUpperBackgroundName('',player);
                        player.syncStorage('shixue');
                        game.createClearBackground('xueyue_bg',player);
                    }
        
                    'step 1'
                    player.addTempSkill('lang_skill_damage_bonus', 'phaseAfter'); // 添加临时技能
                    player.addTempSkill('shixue_sha', 'phaseAfter'); // 添加临时技能
                    player.insertPhase('shixue',true);
                    game.log(player,'获得一个额外的回合');
                },
                ai:{
                    prophase:true,
                    threaten:2.3,
                },
            },
            lang_skill_damage_bonus:{
                silent:true,
				trigger:{source:'damageBegin1'},
				forced: true,
				popup: false,
                onremove:function(player){
                    //改回背景
                    if (game.getUpperBackgroundName('',player) == 'xueyue_bg'){
                        game.createClearBackground(player.storage.shixue,player);
                        player.storage.shixue = '';
                    }
                    else{
                        game.createClearBackground('',player);
                    }
                },
				filter: function (event, player) {
					return true; // 对所有伤害事件生效
				},
				content: function () {
                    player.logSkill('lang_skill_damage_bonus');
                    game.log(player,"发动技能","#g【嗜血】","，令伤害+1");
					trigger.num++; // 增加伤害值
				},
                ai:{
                    damageBonus:true,
                }
			},
            shixue_sha:{
                forced: true,
				popup: false,
                trigger:{
                    player:"useCard",
                },
                filter:function(event,player){
                    
                    return event.card.name == 'sha';
                },
                content:function(event){
                    player.logSkill('lang_skill_damage_bonus');
                    game.log(player,"发动技能","#g【嗜血】","，将",trigger.card,"视为雷属性","#y【杀】");
                },
                mod:{
					cardnature:function(card){
						if(get.name(card) == 'sha') return 'thunder';
					}
				},
            },



            guao_yuling:{
                audio:2,
                trigger:{
                    player:"phaseJieshuBegin",
                },
                forced:true,
                check:function(){
                    return false;
                },
                filter:function(event,player){
                    return !player.isMinHandcard();
                },
                content:function(){
                    "step 0"
                    player.chooseControl('guao_hp','guao_maxHp',function(event,player){
                        if(player.hp==player.maxHp) return 'guao_hp';
                        if(player.hp<player.maxHp-2||player.hp<=1) return 'guao_maxHp';
                        return 'guao_hp';
                    }).set('prompt','###孤傲###对自己造成1点伤害或减1点体力上限');
                    "step 1"
                    if(result.control=='guao_hp'){
                        player.damage(1,player);
                    }
                    else{
                        player.loseMaxHp(true);
                    }
                },
                ai:{
                    threaten:0.5,
                    neg:true,
                },
            },


            guanjiang_yuling:{
                audio:2,
                trigger:{
                    player:"damageEnd",
                },
                check:function (event,player){
                    if(player.isTurnedOver()||event.num>1) return true;
                    if(player.isPhaseUsing()) return true;
                    // if (event.source&&get.attitude(event.source,player)+get.attitude(event.source,player)>0){
                    //     return true;
                    // }
                    var live=game.countPlayer(function(current){
                        if (current.isAlive()){
                            return true;
                        }
                    });
                    if (event.num == 1 && (player.countCards('h')>(7+10*(live-2)/6)+(2+16*(live-2)/6)*(Math.random()))&&!player.isTurnedOver()){
                        return false;
                    }
                    var num=game.countPlayer(function(current){
                        if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
                            return true;
                        }
                        if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
                            return true;
                        }
                    });
                    return num>=1;
                },
                content:function (event){
                    "step 0"
                    var targets=game.filterPlayer();
                    targets.remove(player);
                    targets.sort(lib.sort.seat);
                    event.targets=targets;
                    event.count=trigger.num;
                    "step 1"
                    event.allTheCard = [];
                    event.allThePlayer = [];
                    event.allPosition = [];
                    event.num=0;
                    player.line(targets);
                    player.chooseControl('手牌区','装备区','判定区').set('ai',function(){
                        if(game.hasPlayer(function(current){
                            return current.countCards('j')&&current!=player&&get.attitude(player,current)>0;
                        })) return 2;
                        return Math.floor(Math.random()*2);
                    }).set('prompt','请选择优先获得的区域');
                    "step 2"
                    event.range={
                        手牌区:['h','e','j'],
                        装备区:['e','h','j'],
                        判定区:['j','h','e'],
                    }[result.control||'手牌区'];
                    "step 3"
                    for (var w = 0; w < event.targets.length; w++){
                        var target=event.targets[w];
                        var range=event.range;
                        for(var i=0;i<range.length;i++){
                            var cards=target.getCards(range[i]);
                            if(cards.length){
                                var card=cards.randomGet();
                                player.gain(card,target);
                                event.allTheCard.push(card);
                                event.allThePlayer.push(target);
                                event.allPosition.push(range[i]);
                                // player.gain(card,target,'giveAuto','bySelf');
                                target.line(player,'green');
                                break;
                            }
                        }
                    }
                    "step 4"
                    for (var i = 0; i < event.allTheCard.length; i++){
                        if (player.isUnderControl(true)){
                            event.allThePlayer[i].$give(event.allTheCard[i],player,true);
                        }
                        else{
                            if (event.allPosition[i] != 'h'){
                                event.allThePlayer[i].$give(event.allTheCard[i],player,true);
                            }
                            else{
                                event.allThePlayer[i].$give(1,player,true);
                            }
                        }
                    }
                    "step 5"
                    player.turnOver();
                    game.delay(2);
                    "step 6"
                    event.count--;
                    if(event.count){
                        player.chooseBool(get.prompt2('guanjiang_yuling')).ai=function(){
                            return lib.skill.guanjiang_yuling.check({num:event.count},player);
                        };
                    }
                    else{
                        event.finish();
                    }
                    "step 7"
                    if(event.count&&result.bool){
                        player.logSkill('guanjiang_yuling');
                        event.goto(1);
                    }
                },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    threaten:function (player,target){
                        if(target.hp==1) return 2.5;
                        return 1;
                    },
                    effect:{
                        target:function (card,player,target){
                            var live=game.countPlayer(function(current){
                                if (current.isAlive()){
                                    return true;
                                }
                            });
                            var num=game.countPlayer(function(current){
                                if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
                                    return true;
                                }
                                if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
                                    return true;
                                }
                            });
                            //牌多了就别打了 因为也不会翻了
                            if ((target.countCards('h')<=(7+10*(live-2)/6)+(2+16*(live-2)/6)*(0.1))&&get.attitude(player,target)+get.attitude(target,player)>0&&num>=1){
                                if(get.tag(card,'damage')){
                                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                                    if(target.hp==1&&(target.countCards('h','tao')>0 || target.countCards('h','jiu')>0)) return [0.1,2.8];
                                    if(target.hp==1) return [0.85,0.8];
                                    if(target.isTurnedOver()) return [0,3];
                                    var num=game.countPlayer(function(current){
                                        if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
                                            return true;
                                        }
                                        if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
                                            return true;
                                        }
                                    });
                                    if(num>2) return [0,1];
                                    if(num==2) return [0.5,1];
                                }
                            }

                            else if ((target.countCards('h')<=(7+10*(live-2)/6)+(2+16*(live-2)/6)*(1))&&get.attitude(player,target)+get.attitude(target,player)<=0){
                                if(get.tag(card,'damage')){
                                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                                    if(target.hp==1&&(target.countCards('h','tao')>0 || target.countCards('h','jiu')>0)) return [0.1,2.8];
                                    if(target.hp==1) return [0.85,0.8];
                                    if(target.isTurnedOver()) return [0,3];
                                    var num=game.countPlayer(function(current){
                                        if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
                                            return true;
                                        }
                                        if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
                                            return true;
                                        }
                                    });
                                    if(num>2) return [0,1];
                                    if(num==2) return [0.5,1];
                                }
                            }
                            
                        },
                    },
                },
            },

            duliang_yuling:{
                audio:2,
                direct: false,
                trigger:{
                    player:"phaseDiscardBefore",
                },
                frequent:function(event,player){
                    return player.needsToDiscard();
                },
                filter:function(event,player){
                    if(player.getHistory('skipped').contains('phaseUse')) return true;
                    var history=player.getHistory('useCard').concat(player.getHistory('respond'));
                    for(var i=0;i<history.length;i++){
                        if((history[i].card.name=='sha' || history[i].card.name=='tao' || history[i].card.name=='jiu')&&history[i].isPhaseUsing()) return false;
                    }
                    return true;
                },
                content:function(){
                    trigger.cancel();
                },
            },


            meigui_liyun:{
                subSkill:{
                    off:{
                        sub:true,
                    },
                },
                audio:2,
                usable:2,
                enable:"phaseUse",
                filterCard:function (card){
                    return get.subtype(card)=='equip1';
                },
                selectCard:function (){
                    return [0,1];
                },
                filterTarget:function (card,player,target){
                    if(player==target) return false;
                    return player.inRange(target);
                },
                content:function (){
                    "step 0"
                    if(cards.length==0){
                        player.loseHp();
                    }
                    // else{
                    //     //播放武器音效
                    //     game.playAudio('skill','sword_sound'+1);
                    // }
                    "step 1"
                    //target.addTempSkill('reqiangxi_off');
                    target.damage(2,'thunder','nocard');
                    "step 2"
                    if (target.isAlive()){
                        player.loseHp();
                        game.log(target,'未死亡');
                    }
                },
                check:function (card){
                    return 15-get.value(card);
                },
                position:"he",
                ai:{
                    expose: 0.5,
                    order:1,
                    damageBonus:true,
                    result:{
                        target:function (player,target){
                            if (get.attitude(player,target) < 0){
                                if (target.hasSkillTag('nothunder')) return 0;
                                if (target.hasSkillTag('forbidNoCardDamage')) return 0;
                                if ((target.hasSkill('zhuxing_len'))&&target.hp > 1) return 0;
                                if ((target.hasSkill('mantian_mei')||target.hasSkill('mantian_mei_nan'))&&target.hp > 2) return 0;
                                if ((target.hasSkillTag('maixie')||target.hasSkillTag('maixie_hp')&&!target.hasSkill('fengyin'))) return 0;
                                if ((target.hasSkillTag('maixie')||target.hasSkillTag('maixie_hp')&&target.hasSkill('fengyin'))) return -10-Math.random();
                                if(!player.countCards('he',{type:'equip'})){
                                    if(player.hp<2&&Math.random()<0.2) return 0;
                                    if(target.hp>=3&&Math.random()<0.7) return 0;
                                    if (target.hp < 2) return -10-Math.random();
                                }
                            }
                            if (target.hp > 3 && get.attitude(player,target) < 0) return 0;
                            if (target.hp < 2 && get.attitude(player,target) < 0) return -10-Math.random();
                            if (get.attitude(player,target) > 0) return 0;
                            return get.damageEffect(target,player);
                        },
                    },
                },
                threaten:3.2,
            },

            wushi_liyun:{
                shaRelated:true,
                audio:2,
                trigger:{
                    player:"useCardToPlayered",
                },
                check:function(event,player){
                    return get.attitude(player,event.target)<0;
                },
                filter:function(event,player){
                    return get.name(event.card)=='sha';
                },
                logTarget:"target",
                content:function(event){
                    "step 0"
                    if(!trigger.target.hasSkill('fengyin')){
                        // trigger.target.storage.wushi_fengyin = player;
                        trigger.target.addTempSkill('wushi_fengyin');
                        // trigger.target.addTempSkill('wushi_fengyin2');
                        trigger.target.syncStorage('wushi_fengyin');
                        game.log(trigger.target,'的非锁定技本回合失效');
                    }
                    if (trigger.target.countCards('he')==0){
                        trigger.getParent().directHit.add(trigger.target);
                        event.finish();
                    }
                    else{
                        event.goto(1);
                    }
                    "step 1"
                    trigger.target.chooseCard('【'+get.translation('wushi_liyun')+'】：请选择一张牌弃置','he',true).set('ai',function(card){
                        var add = 0;
                        if (card.name == 'shan'){
                            add = -10;
                        }
                        return -get.value(card)+add;
                    });
                    "step 2"
                    if (result.cards){
                        event.rightSuit = result.cards[0].suit;
                        trigger.target.discard(result.cards);
                    }
                    else{
                        event.finish();
                    }
                    "step 3"
                    player.judge(function (card) {
                        if(get.suit(card)==event.rightSuit){
                            return -1;
                        } 
                        else{
                            return 1;
                        }
                    });
                    "step 4"
                    if (result.card&&result.bool){
                        trigger.getParent().directHit.add(trigger.target);
                    }
                    else{
                        event.finish();
                    }
                },
                position:"he",
                ai:{
                    expose: 0.4,
                    order:8.5,
                    result:{
                        target:function (player,target){
                            if (get.attitude(player,target) < 0){
                                if ((target.hasSkillTag('maixie')||target.hasSkillTag('maixie_hp')&&!target.hasSkill('fengyin'))) return -10-Math.random();
                                if ((target.hasSkillTag('maixie')||target.hasSkillTag('maixie_hp')&&target.hasSkill('fengyin'))) return 0-Math.random();
                            }
                            else{
                                return 0;
                            }
                            return get.damageEffect(target,player);
                        },
                    },
                },
                threaten:2.5,
            },

            wushi_fengyin:{
				init:function(player,skill){
					var skills=player.getSkills(true,false);
					for(var i=0;i<skills.length;i++){
						if(get.is.locked(skills[i])||lib.skill[skills[i]].charlotte){
							skills.splice(i--,1);
						}
					}
					player.disableSkill(skill,skills);

                    //试验
                    var returnResult = '非锁定技失效';
                    var list=[];
                    for(var i in player.disabledSkills){
                        if(player.disabledSkills[i].contains(skill)){
                            list.push(i)
                        }
                    }
                    if(list.length){
                        var str='，失效技能：';
                        for(var i=0;i<list.length;i++){
                            if(lib.translate[list[i]+'_info']){
                                str+=get.translation(list[i])+'、';
                            }
                        }
                        player.storage.wushi_fengyin = returnResult + str.slice(0,str.length-1);
                        player.syncStorage('wushi_fengyin');
                    }
                    else{
                        player.storage.wushi_fengyin =  returnResult;
                        player.syncStorage('wushi_fengyin');
                    }

				},
				onremove:function(player,skill){
					player.enableSkill(skill);
				},
				locked:true,
				charlotte:true,
				mark:true,
                // marktext:'废',
				intro:{
                    name:'武士',
					content:function(storage,player,skill){
                        if (_status.video){
                            return player.storage.wushi_fengyin;
                        }
                        var returnResult = '非锁定技失效';
						var list=[];
						for(var i in player.disabledSkills){
							if(player.disabledSkills[i].contains(skill)){
								list.push(i)
							}
						}
						if(list.length){
							var str='，失效技能：';
							for(var i=0;i<list.length;i++){
								if(lib.translate[list[i]+'_info']){
									str+=get.translation(list[i])+'、';
								}
							}
							player.storage.wushi_fengyin = returnResult + str.slice(0,str.length-1);
                            player.syncStorage('wushi_fengyin');
						}
                        else{
                            player.storage.wushi_fengyin =  returnResult;
                            player.syncStorage('wushi_fengyin');
                        }
                        return player.storage.wushi_fengyin;
                        
					}
				}
			},

            wushi_fengyin2:{},

            luoshen_liyun:{
                audio:2,
                frequent:true,
                popup:false,
                skillAnimation:'epic',
				animationColor:'fire',
                trigger:{
                    player:"dying",
                },
                filter:function(event,player){
                    return player.countCards('hej')>=1;
                },
                content:function(event){
                    "step 0"
                    player.chooseBool(get.prompt2("luoshen_liyun")).set('ai',function(){
                        if(player.countCards('h','tao')+player.countCards('h','jiu') > 0-player.hp){
                            return false;
                        }
                        else{
                            return true;
                        }
                    });
                    "step 1"
                    if (result.bool) {
                        player.logSkill('luoshen_liyun');
                        var allCards = player.getCards('hej');
                        player.discard(allCards);
                        player.recover(1-player.hp);
                    }
                    else{
                        event.finish();
                    }
                },
            },


            jisu_liyun:{
                audio:false,
                mod:{
                    globalFrom:function(from,to,distance){
                        return distance-2;
                    },
                },
            },

            yuhuo_nv:{
                audio:2,
                enable:"phaseUse",
                popup:false,
                silent:true,
                direct:true,
                // frequent:true,
                filter:function(event,player){
                    return true; 

                },
                content:function(event){
                    "step 0"
                    event.hp = player.hp;
                    player.chooseTarget(get.prompt2("yuhuo_nv"),[1,1],true,function(event,player,target){
                        return target != player||target == player;
                    }).set('ai',function(target){
                        // return -get.attitude(player,target);
                        var end = -1;
                        if (get.attitude(player,target)>0){
                            end = end + 2 ;
                        }
                        if (get.attitude(player,target)>0&&target.hasSkill('nvfei_yawen')){
                            end = end + 3;
                        }
                        if (target.countCards('h')<5&&get.attitude(player,target)>0){
                            end = end + 3 + 5 - target.countCards('h') ;
                        }
                        if (target.hp<2&& target.countCards('h')<6 &&get.attitude(player,target)>0){
                            end = end + 10;
                        }
                        if (target.hasJudge('lebu')&&get.attitude(player,target)>0){
                            end = end -13;
                        }
                        return end+Math.ceil(3*Math.random())-2;
                    });
                    "step 1"
                    if (result.bool && result.targets.length>0){
                        //改变背景
                        if (game.getUpperBackgroundName('',player) != 'yanjiang_bg'){
                            if (!player.hasSkill('yuhuo_background_nv')){
                                player.addTempSkill('yuhuo_background_nv','phaseJieshu');
                            }
                            player.storage.yuhuo_background_nv = game.getUpperBackgroundName('',player);
                            player.syncStorage('yuhuo_background_nv');
                            game.createClearBackground('yanjiang_bg',player);
                            game.delay(1);
                        }
                        //效果
                        player.damage(1,'fire',player);
                        event.target = result.targets[0];
                        // player.logSkill('yuhuo_nv');
                        player.popup('浴火','soil');
                        game.playAudio('skill','yuhuo_nv'+Math.ceil(2*Math.random()));
                        game.log(player,'发动了','#g【浴火】','，令',event.target,'摸牌');
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if (player.hp == event.hp){
                        game.log(player,'未令自己的体力值变化，本回合','#g【浴火】','失效');
                        player.removeSkill('yuhuo_nv');
                        player.addSkill('yuhuo_resume_nv');
                        event.finish();
                    }
                    else{
                        if (player!=event.target){
                            player.line(event.target,"fire");
                        }
                        event.target.draw(2);
                    }
                    
                },
                group:"yuhuo_nv_effect",
                ai:{
                    order:9,
                    expose:0.5,
                    threaten:1.2,
                    basic:{
                        order:8,
                    },
                    result:{
                        player:function(player,target){
                            var score = 0;
                            if (player.countCards('e','tengjia')>0){
                                score -= 2;
                            }

                            var linkEffect = 0;
                            if (player.isLinked()){
                                var has = game.hasPlayer(function(current){
                                    if(current.isLinked()&&!current.hasSkillTag('nofire')&&!current.hasSkillTag('maixie')){
                                        if (get.attitude(player,current)+get.attitude(current,player)>0){
                                            //看藤甲，血量，技能影响
                                            if (current.countCards('e','tengjia')>0){
                                                if (current.hp <= 2){
                                                    linkEffect -= 10;
                                                }
                                                else{
                                                    linkEffect -= 2;
                                                }
                                            }
                                            else{
                                                if (current.hp <= 1){
                                                    linkEffect -= 10;
                                                }
                                                else{
                                                    linkEffect -= 1;
                                                }
                                            }
                                        }
                                        if (get.attitude(player,current)+get.attitude(current,player)<0){
                                            //看藤甲，血量，技能影响
                                            if (current.countCards('e','tengjia')>0){
                                                if (current.hp <= 2){
                                                    linkEffect += 10;
                                                }
                                                else{
                                                    linkEffect += 2;
                                                }
                                            }
                                            else{
                                                if (current.hp <= 1){
                                                    linkEffect += 10;
                                                }
                                                else{
                                                    linkEffect += 1;
                                                }
                                            }
                                        }
                                    }
                                });
                            }

                            score += linkEffect;

                            var xinruan_char = false;

                            var has_xinruan = game.hasPlayer(function(current){
                                if (current.hasSkill('xinruan_mei')){
                                    xinruan_char = current;
                                    return true;
                                }
                            });

                            if (xinruan_char){
                                if (xinruan_char.hasSkill('mantian_mei')){
                                    if (get.attitude(player,xinruan_char)+get.attitude(xinruan_char,player)>=0){
                                        if (xinruan_char.hp <= 1){
                                            score += -1;
                                        }
                                        else{
                                            score += 10;
                                        }
                                    }
                                    else{
                                        if (xinruan_char.hp <= 1){
                                            score += 5;
                                        }
                                        else{
                                            score += -5;
                                        }
                                    }
                                }
                                else{
                                    if (get.attitude(player,xinruan_char)+get.attitude(xinruan_char,player)>=0){
                                        if (xinruan_char.hp <= 1){
                                            score += -5;
                                        }
                                        else{
                                            score += -1;
                                        }
                                    }
                                    else{
                                        if (xinruan_char.hp <= 1){
                                            score += 10;
                                        }
                                        else{
                                            score += 7.5;
                                        }
                                    }
                                }
                            }

                            score = score -0.5 + Math.random();

                            var addi = 0;
                            if (score > 0){
                                if (score > 10){
                                    //一票否决权
                                    return 1;
                                }
                                addi += Math.random();
                            }
                            else{
                                if (score < -8) {
                                    //一票否决权
                                    return -1;
                                }
                                addi -= Math.random();
                            }
                            

                            if (player.storage.chongsheng_nv&&player.storage.chongsheng_nv.length >= 3 + Math.ceil(4*Math.random()) - 1) return -1;
                            if(player.countCards('h')>=20) return -1;
                            if(player.countCards('h')<=8) return Math.random()*0.125*(9-player.countCards('h')) - 0.15 + addi*0.6;
                            // if(player.hp<=2) return -1;
                            return 0;
                        },
                        

                    },
                    
                },
            },

            yuhuo_nv_effect:{
                audio:false,
                silent:true,
                popup:false,
                direct:true,
                trigger:{
                    target:"shaBefore",
                },
                forced:true,
                filter:function(event,player){
                    return false;
                },
                content:function(event){
                    event.finish();
                },
                ai:{
                    effect:{
                        target:function(card,player,target){
                            if(get.name(card)=='tengjia'&&target.hasSkill('yuhuo_nv')&&Math.random()<0.7){
                                if (player == target) return 0;
                            }
                        },
                    },
                },
            },

            yuhuo_resume_nv:{
                silent:true,
                popup:false,
                forced:true,
                trigger:{
                    player:"phaseJieshu",
                },
                content:function(event){
                    player.addSkill('yuhuo_nv');
                },
            },

            yuhuo_background_nv:{
                silent:true,
                popup:false,
                forced:true,
                trigger:{
                    player:"phaseJieshu",
                },
                onremove:function(player){
                    //改回背景
                    if (game.getUpperBackgroundName('',player) == 'yanjiang_bg'){
                        game.createClearBackground(player.storage.yuhuo_background_nv,player);
                        player.storage.yuhuo_background_nv = '';
                    }
                    else{
                        game.createClearBackground('',player);
                    }

                },
                content:function(event){
                    // player.removeSkill('yuhuo_background_nv');
                },
            },

            chongsheng_nv:{
                audio:2,
                locked:true,
                trigger:{
                    player:"changeHp",
                },
                filter:function(event,player){
                    return player.hp<=0&&event.num<0;
                },
                marktext:"生",
                init:function(player){
                    if(!player.storage.chongsheng_nv) {
                        player.storage.chongsheng_nv=[];
                        player.syncStorage('chongsheng_nv');
                    }
                },
                intro:{
                    content:"cards",
                },
                group:"chongsheng_nv_recover",
                frequent:true,
                ondisable:true,
                onremove:function(player){
                    if(player.storage.chongsheng_nv.length){
                        delete player.nodying;
                        player.hp=1-player.storage.chongsheng_nv.length;
                        game.log(player,'移去了【重生】牌',player.storage.chongsheng_nv);
                        game.cardsDiscard(player.storage.chongsheng_nv);
                        player.storage.chongsheng_nv=[];
                        player.syncStorage('chongsheng_nv');
                        player.unmarkSkill('chongsheng_nv');
                        player.dying({});
                    }
                },
                process:function(player){
                    delete player.nodying;
                    player.syncStorage('chongsheng_nv');
                    player.markSkill('chongsheng_nv');
                    player.syncStorage('chongsheng_nv');
                    var nums=[];
                    var cards=player.storage.chongsheng_nv;
                    for(var i=0;i<cards.length;i++){
                        if(nums.contains(cards[i].number)){
                            return;
                        }
                        else{
                            nums.push(cards[i].number);
                        }
                    }
                    if (player.storage.chongsheng_nv.length == 0){
                        player.unmarkSkill('chongsheng_nv');
                        player.syncStorage('chongsheng_nv');
                    }
                    player.nodying=true;
                },
                subSkill:{
                    recover:{
                        trigger:{
                            player:"changeHp",
                        },
                        filter:function(event,player){
                            return player.storage.chongsheng_nv.length>0&&event.num>0;
                        },
                        forced:true,
                        popup:false,
                        content:function(event){
                            'step 0'
                            if (player.hp > 1){
                                while(player.storage.chongsheng_nv.length>0){
                                    player.$throw(player.storage.chongsheng_nv[0]);
                                    game.log(player,'移去了【重生】牌',player.storage.chongsheng_nv[0]);
                                    player.storage.chongsheng_nv[0].discard();
                                    player.storage.chongsheng_nv.remove(player.storage.chongsheng_nv[0]);
                                    player.syncStorage('chongsheng_nv');
                                }
                                event.goto(3);
                            }
                            else{
                                event.count=trigger.num;
                                event.goto(1);
                            }
                            'step 1'
                            event.count--;
                            if((player.hp+player.storage.chongsheng_nv.length)>1){
                                player.chooseCardButton('移去一张【重生】牌',true,player.storage.chongsheng_nv).set('ai',function(button){
                                    var buttons=get.selectableButtons();
                                    for(var i=0;i<buttons.length;i++){
                                        if(buttons[i]!=button&&
                                            buttons[i].link.number==button.link.number&&
                                            !ui.selected.buttons.contains(buttons[i])){
                                            return 1;
                                        }
                                    }
                                    return 0;
                                });
                            }
                            'step 2'
                            for(var i=0;i<result.links.length;i++){
                                result.links[i].discard();
                                player.storage.chongsheng_nv.remove(result.links[i]);
                                player.syncStorage('chongsheng_nv');
                            }
                            player.$throw(result.links);
                            game.log(player,'移去了【重生】牌',result.links);
                            if(event.count) event.goto(1);
                            'step 3'
                            lib.skill.chongsheng_nv.process(player);
                        },
                        sub:true,
                    },
                },
                content:function(){
                    'step 0'
                    var num=(-trigger.num-Math.max(player.hp-trigger.num,1)+1);
                    var cards=get.cards(num);
                    game.cardsGotoSpecial(cards);
                    player.storage.chongsheng_nv.addArray(cards);
                    player.syncStorage('chongsheng_nv');
                    //event.trigger("addCardToStorage");
                    player.showCards(get.translation(player)+'的【重生】牌',player.storage.chongsheng_nv);
                    'step 1'
                    lib.skill.chongsheng_nv.process(player);
                },
                ai:{
                    mingzhi:true,
                },
            },


            leinu_lan:{
                trigger:{
                    player:"phaseBefore",
                    global:"roundStart",
                },
                direct:true,
                audio:2,
                filter:function(event,player){
                    return game.hasPlayer(function(current){
                        if(event.name=='roundStart'&&(!current.isMinHp()&&(!player.storage.jingtong_lan||current.hp>=player.storage.jingtong_lan))) return false;
                        return current!=player&&!current.hasMark('leinu_lan_mark');
                    });
                },
                content:function(){
                    'step 0'
                    if (!player.hasSkill('leinu_end_lan')){
                        player.addSkill('leinu_end_lan');
                    }
                    if (event.triggername=='roundStart'){
                        player.chooseTarget(get.prompt('leinu_lan'),'每轮游戏开始时，你可以指定一名体力值最少或体力值小于你因〖经痛〗获得的牌数且没有“奴”标记的其他角色，令其获得一枚“奴”标记。',function(card,player,target){
                            if(_status.event.round&&!target.isMinHp()&&(!player.storage.jingtong_lan||target.hp>=player.storage.jingtong_lan)) return false;
                            return target!=player&&!target.hasMark('leinu_lan_mark');
                        }).set('ai',function(target){
                            var num=target.isMinHp()?0.5:(1+Math.random());
                            if(get.attitude(_status.event.player,target)<0){
                                num+=0.5;
                            }
                            return num;
                        }).set('round',event.triggername=='roundStart');
                    }
                    else{
                        player.chooseTarget(get.prompt('leinu_lan'),'回合开始前，你可以指定一名未拥有“奴”标记的其他角色，令其获得一枚“奴”标记',function(card,player,target){
                            if(_status.event.round&&!target.isMinHp()&&(!player.storage.jingtong_lan||target.hp>=player.storage.jingtong_lan)) return false;
                            return target!=player&&!target.hasMark('leinu_lan_mark');
                        }).set('ai',function(target){
                            var num=target.isMinHp()?0.5:(1+Math.random());
                            if(get.attitude(_status.event.player,target)<0){
                                num+=0.5;
                            }
                            return num;
                        }).set('round',event.triggername=='roundStart');
                    }
                    
                    'step 1'
                    if(result.bool){
                        var target=result.targets[0];
                        player.logSkill('leinu_lan',target);
                        target.addMark('leinu_lan_mark',1);
                    }
                },
                subSkill:{
                    mark:{
                        marktext:"奴",
                        intro:{
                            "name2":"奴",
                            content:"mark",
                        },
                        sub:true,
                    },
                },
                ai:{
                    combo:"jingtong_lan",
                    threaten:1.4,
                },
            },

            leinu_end_lan:{
                silent:true,
                forced:true,
                trigger:{
                    player:['dieBegin'],
                },
                content:function(event){
                    var has=game.hasPlayer(function(current){
                        if (current.hasMark('leinu_lan_mark')){
                            current.removeMark('leinu_lan_mark');
                        }
                        
                    });
                }
            },

            jingtong_lan:{
                audio:3,
                marktext:'痛',
                init:function(player){
                    if(!player.storage.jingtong_lan) player.storage.jingtong_lan=0;
                },
                intro:{
                    content:"已因此技能获得#张牌",
                },
                trigger:{
                    global:"damageEnd",
                },
                forced:true,
                //locked:true,
                filter:function(event,player){
                    return event.player!=player&&event.player.isAlive()&&event.player.hasMark('leinu_lan_mark');
                },
                content:function(){
                    'step 0'
                    player.draw();
                    player.storage.jingtong_lan++;
                    player.syncStorage('jingtong_lan');
                    player.markSkill('jingtong_lan');
                    'step 1'
                    event.finish();
                    // 'step 1'
                    // if(player.hasZhuSkill('bingzhao',trigger.player)&&trigger.player.group==player.storage.bingzhao){
                    //     trigger.player.chooseBool(get.prompt2('bingzhao',player)).ai=function(){
                    //         return get.attitude(trigger.player,player)>1;
                    //     };
                    // }
                    // else event.finish();
                    // 'step 2'
                    // if(result.bool){
                    //     trigger.player.logSkill('bingzhao',player);
                    //     player.draw();
                    //     player.storage.jingtong_lan++;
                    //     player.markSkill('jingtong_lan');
                    // }
                },
                ai:{
                    combo:"leinu_lan",
                },
            },

            minghou_lan:{
                usable:1,
                audio:3,
                skillAnimation:'epic',
				animationColor:'thunder',
                derivation:['minghou_lan_mingji','minghou_lan_shiling'],
                trigger:{
                    player:"useCardToPlayered",
                },
                direct:true,
                filter:function (event,player){
                    if(event.getParent().triggeredTargets3.length>1) return false;
                    if(!player.isPhaseUsing()) return false;
                    if(!['basic','trick'].contains(get.type(event.card))) return false;
                    if(get.tag(event.card,'damage')) return true;
                    return false;
                },
                content:function (event){
                    'step 0'
                    player.chooseTarget(get.prompt2('minghou_lan'),function(card,player,target){
                        return _status.event.targets.contains(target);
                    }).set('ai',function(target){
                        return 2-get.attitude(_status.event.player,target);
                    }).set('targets',trigger.targets);
                    'step 1'
                    if(result.bool){
                        //改变背景
                        if (game.getUpperBackgroundName('',player) != 'minghou_bg'){
                            if (!player.hasSkill('minghou_background_lan')){
                                player.addTempSkill('minghou_background_lan','phaseAfter')
                            }
                            player.storage.minghou_background_lan = game.getUpperBackgroundName('',player);
                            player.syncStorage('minghou_background_lan');
                            game.createClearBackground('minghou_bg',player);
                        }

                        player.logSkill('minghou_lan',result.targets);
                        var target=result.targets[0];
                        event.target=target;
                        event.choice={
                            basic:false,
                            trick:false,
                            equip:false,
                        }
                        player.chooseBool('是否押基本牌？').ai=function(event,player){
                            var rand=0.95;
                            if(!target.countCards('h',{type:['basic']})) rand=0.05;
                            if(!target.countCards('h')) rand=0;
                            return Math.random()<rand?true:false;
                        };
                    }
                    else{
                        player.storage.counttrigger.minghou_lan--;
                        event.finish();
                    }
                    'step 2'
                    if(result.bool){
                        event.choice.basic=true;
                    }
                    player.chooseBool('是否押锦囊牌？').ai=function(event,player){
                        var rand=0.9;
                            if(!target.countCards('h',{type:['trick','delay']})) rand=0.1;
                            if(!target.countCards('h')) rand=0;
                            return Math.random()<rand?true:false;
                    };
                    'step 3'
                    if(result.bool){
                        event.choice.trick=true;
                    }
                    player.chooseBool('是否押装备牌？').ai=function(event,player){
                        var rand=0.75;
                            if(!target.countCards('h',{type:['equip']})) rand=0.25;
                            if(!target.countCards('h')) rand=0;
                            return Math.random()<rand?true:false;
                    };
                    'step 4'
                    if(result.bool){
                        event.choice.equip=true;
                    }
                    game.delay();
                    var reality={
                        basic:false,
                        trick:false,
                        equip:false,
                    }
                    var he=target.getCards('h');
                    for(var i=0;i<he.length;i++){
                        reality[get.type(he[i],'trick')]=true;
                    }
                    event.num=0;
                    var tl=['basic','trick','equip'];
                    for(var i=0;i<tl.length;i++){
                        if(event.choice[tl[i]]==reality[tl[i]]) event.num++;
                    }
                    'step 5'
                    player.popup('猜对'+get.cnNumber(event.num)+'项','thunder');
                    game.log(player,'猜对了'+get.cnNumber(event.num)+'项');
                    if(event.num>0){
                        target.addTempSkill('minghou_lan_adddamage','phaseJieshu');
                        game.log(trigger.card,'对',event.target,'造成的伤害+1');
                        target.storage.minghou_lan={
                            card:trigger.card,
                            //player:event.targett,
                        }                   
                    }
                    if(event.num>1) player.draw(2);
                    if(event.num>2){
                        player.addSkill('minghou_lan_shiling');
                        player.addSkill('minghou_lan_mingji');
                        player.addSkill('minghou_lan_end');
                        game.log(player,'获得技能','#g【'+get.translation('minghou_lan_mingji')+'】','和','#g【'+get.translation('minghou_lan_shiling')+'】');
                    }
                },
                ai:{
                    damageBonus:true,
                    expose: 0.45,
                    threaten:4.4,
                },
            },

            minghou_background_lan:{
                silent:true,
                popup:false,
                forced:true,
                onremove:function (player){
                    //改回背景
                    if (game.getUpperBackgroundName('',player) == 'minghou_bg'){
                        game.createClearBackground(player.storage.minghou_background_lan,player);
                        player.storage.minghou_background_lan = '';
                    }
                    else{
                        game.createClearBackground('',player);
                    }
				},
            },


            "minghou_lan_adddamage":{
				onremove:function (player){
					delete player.storage.minghou_lan;
				},
				trigger:{
					player:"damageBegin3",
				},
				filter:function (event,player){
					var info=player.storage.minghou_lan;
					return event.card&&event.card==info.card;
				},
				silent:true,
				popup:false,
				forced:true,
				content:function (){
					trigger.num++;
				},
                ai:{
                    damageBonus:true,
                }
			},
			minghou_lan_mingji:{
				audio:2,
                mark:true,
                marktext:"冥",
                intro:{
                    name:"冥祭",
                    content:'当你受到伤害后，你可以获得对你造成伤害的牌并摸一张牌。然后若伤害牌和伤害来源均存在，你可以弃置伤害牌，令伤害来源进行判定，若结果为♠2~9或点数为Q，则其受到无来源的3点雷电伤害。',
                },
				trigger:{
					player:"damageEnd",
				},
                filter:function(event,player){
                    return true;
                },
				content:function (event){
					"step 0"
                    event.hasCardok = false;
					if(get.itemtype(trigger.cards)=='cards'&&get.position(trigger.cards[0],true)=='o'){
						player.gain(trigger.cards,"gain2");
                        event.hasCardok = true;
					}
                    "step 1"
					player.draw(1);
                    "step 2"
                    if (event.hasCardok && trigger.source != undefined){
                        player.chooseBool(get.prompt('minghou_lan_mingji'),'你可以弃置'+get.translation(trigger.cards)+'令'+get.translation(trigger.source)+'进行判定，若结果为♠2~9或点数为Q，则其受到无来源的3点雷电伤害').set('ai',function(event,player){
                            if (get.attitude(player,trigger.source) > 0 || trigger.source.hasSkillTag('nothunder')) {
                                return false;
                            }
                            var num=game.countPlayer(function(current){
								var skills=current.getSkills();
								for(var j=0;j<current.skills.length;j++){
									var rejudge=get.tag(current.skills[j],'rejudge',current);
									if(rejudge!=undefined){
										if(get.attitude(target,current)>0&&
										get.attitude(current,target)>0){
											return rejudge;
										}
										else{
											return -rejudge;
										}
									}
								}
							});
                            if(num==0){
                                return (get.attitude(player,trigger.source) <= 0)&&(Math.random()<0.2);
                            }
                            else if (num > 0){
                                return (get.attitude(player,trigger.source) <= 0)&&(Math.random()<0.6);
                            }
                            else {
                                return false;
                            }
                            
                        });
                    }
                    else{
                        event.finish();
                    }
                    "step 3"
                    if (result.bool){
                        player.discard(trigger.cards);
                        player.logSkill('minghou_lan_mingji');
                        player.line(trigger.source,'green');
                        trigger.source.judge(function(card){
                            if((get.suit(card)=='spade'&&get.number(card)>1&&get.number(card)<10)||get.number(card)==12) return -6;
                            return 0;
                        });
                    }
                    else{
                        event.finish();
                    }
                    "step 4"
                    if(result.card&&result.suit=='spade'&&result.bool==false){
                        game.playAudio('skill','jianyu_len'+Math.ceil(2*Math.random()));
                        game.playAudio('skill','anmou_enda'+3);
						trigger.source.damage(3,'thunder','nosource');
					}else{
                        event.finish();
                    }
                    
				},
				ai:{
					maixie:true,
					"maixie_hp":true,
					effect:{
						target:function (card,player,target){
							if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
							// if(get.tag(card,'damage')&&player!=target) return [1,0.6];
						},
					},
				},
			},
			minghou_lan_shiling:{
				audio:2,
                mark:true,
                marktext:"灵",
                intro:{
                    name:"嗜灵",
                    content:'当其他角色死亡后，你可以选择一项：1.免疫一次伤害（若你已经拥有免伤效果，则改为：回复1点体力），2.获得其所有牌，并成为该角色（你当前的体力值和体力上限保持不变）直到本轮结束。若你选择了其中一项，则你与其交换位置。',
                },
				trigger:{global:'die'},
				filter:function(event,player){
					return player.isDamaged()||event.player.countCards('he')>0||!player.hasSkill('shiling_mianshang');
				},
				direct:true,
				content:function(){
					"step 0"
					var choice=[];
                    if (!player.hasSkill('shiling_mianshang')) choice.push('免疫一次伤害');
					if(player.hasSkill('shiling_mianshang')&&player.isDamaged()) choice.push('回复1点体力');
					if(trigger.player.countCards('he')) choice.push('获得其所有牌');
					choice.push('cancel2');
					player.chooseControl(choice).set('prompt',get.prompt2('minghou_lan_shiling')).set('ai',function(){
						if(choice.length==2) return 0;
						if(get.value(trigger.player.getCards('he'))>2) return 1;
						return 0;
					});
					"step 1"
					if(result.control!='cancel2'){
						player.logSkill(event.name,trigger.player);
						if(result.control=='获得其所有牌'){
							event.togain=trigger.player.getCards('he');
							player.gain(event.togain,trigger.player,'giveAuto','bySelf');
                            var old_name = player.name;
                            var mainOrsub = 'main';
                            game.log(player,'化身为',trigger.player);

                            if (player.name == 'lanmengqi'){
                                player.reinit(player.name,trigger.player.name,[player.hp,player.maxHp]);
                            }
                            else if (player.name2 == 'lanmengqi'){
                                old_name = player.name2;
                                mainOrsub = 'sub';
                                player.reinit(player.name2,trigger.player.name,false);
                            }
                            else{
                                player.reinit(player.name,trigger.player.name,[player.hp,player.maxHp]);
                            }

                            if (!player.hasSkill('shiling_change')){
                                player.addTempSkill('shiling_change','roundStart');
                                player.storage.shiling_change = [old_name,mainOrsub];
                                player.syncStorage('shiling_change'); 
                            }
						}
						else if (result.control=='免疫一次伤害'){
                            player.addSkill('shiling_mianshang');
                        }
                        else{
                            player.recover();
                        }
                        game.swapSeat(player,trigger.player);
					}
				},
                ai:{
					threaten:3.5,
				},
			},

            shiling_change:{
                silent:true,
                popup:false,
                forced:true,
                onremove:function(player){
                    player.logSkill('minghou_lan_shiling');
                    if (player.storage.shiling_change[1] == 'main'){
                        player.reinit(player.name,player.storage.shiling_change[0],[player.hp,player.maxHp]);
                    }
                    else{
                        player.reinit(player.name2,player.storage.shiling_change[0],false);
                    }
                    game.log(player,'变回真身');
                },
            },

            shiling_mianshang:{
                forced:true,
                silent:true,
                popup:false,
                frequent:true,
                mark:true,
                marktext:"免",
                intro:{
                    name:"嗜灵",
                    content:"免疫下一次伤害",
                },
                trigger:{
                    player:"damageBegin4",
                },
                filter:function(event,player){
                    return event.num > 0;
                },
                content:function(event){
                    trigger.cancel();
                    player.logSkill('minghou_lan_shiling');
                    game.log(player,'免疫了伤害');
                    player.removeSkill('shiling_mianshang');
                    
                },
                ai:{
                    threaten:0.5,
                    maixie_defend:true,
                    filterDamage:true,
					// nofire:true,
					// nothunder:true,
					// nodamage:true,
					// effect:{
					// 	target:function(card,player,target,current){
					// 		if(get.tag(card,'damage')) return [0,0];
					// 	}
					// },
				},
            },


            minghou_lan_end:{
                forced:true,
                silent:true,
                trigger:{
                    player:'phaseZhunbeiBefore',
                },
                filter:function(event,player){
                    return true;
                },
                content:function(event){
                    'step 0'
                    if (player.hasSkill('minghou_lan_mingji')){
                        player.removeSkill('minghou_lan_mingji');
                    }
                    if (player.hasSkill('minghou_lan_shiling')){
                        player.removeSkill('minghou_lan_shiling');
                    }
                    'step 1'
                    player.removeSkill('minghou_lan_end');
                },
            },

            nulian_lan:{
                audio:2,
                enable:"phaseUse",
                usable:1,
                frequent:true,
                prompt:"你可以展示自己的一张手牌，然后展示一名拥有“奴”标记的其他角色的至多四张手牌。其展示的牌中：每有一张颜色相同，你摸一张牌；每有一张点数相同，你回复1点体力。",
                promptNoCenter:true,
                group:['nulian_target_lan','nulian_use_lan'],
                filter:function(event,player){
                    var has = game.hasPlayer(function(current){
                        return current!=player&&current.countCards('h')>0&&current.hasMark('leinu_lan_mark');
                    });
                    return has&&player.countCards('h')>0;
                },
                filterTarget:function(event,player,target){
                    return target!=player&&target.countCards('h')>0&&target.hasMark('leinu_lan_mark');
                },
                filterCard:true,
                selectCard:function(){
                    return [1,1];
                },
                check:function(){return 1},
                discard:false,
                lose:false,
                content:function(){
                    'step 0'
                    event.colors=[];
                    event.nums=[];
                    event.nulianCard = cards[0];
                    for(var i=0;i<cards.length;i++){
                        event.colors.push(get.color(cards[i]));
                        event.nums.push(get.number(cards[i]));
                    }
                    player.showCards(cards);
                    'step 1'
                    player.choosePlayerCard(target,'h',[1,4],'【奴恋】：请选择'+get.translation(target)+'至多四张手牌展示').ai=function(){return 0.1+Math.random()};
                    'step 2'
                    event.cards2=result.cards.slice(0);
                    target.showCards(event.cards2,get.translation(player)+'展示'+get.translation(target)+'的'+get.cnNumber(event.cards2.length)+'张手牌');
                    event.drawNum = 0;
                    event.drawTrueCards = [];
                    event.recoverNum = 0;
                    event.recoverTrueCards = [];
                    'step 3'
                    for (var i = 0; i < event.cards2.length; i++){
                        var card = event.cards2[i];
                        if(event.colors.contains(get.color(card))){
                            event.drawTrueCards.push(card);
                            event.drawNum++;
                        }
                        if(event.nums.contains(get.number(card))){
                            event.recoverTrueCards.push(card);
                            event.recoverNum++;
                        }
                    }
                    'step 4'
                    if (event.drawNum > 0){
                        game.log(event.drawTrueCards,'与',event.nulianCard,'颜色相同，',player,'摸'+get.cnNumber(event.drawNum)+'张牌');
                        player.draw(event.drawNum);
                    }
                    if (event.recoverNum > 0){
                        game.log(event.recoverTrueCards,'与',event.nulianCard,'点数相同，',player,'回复'+get.cnNumber(event.recoverNum)+'点体力');
                        player.recover(event.recoverNum);
                    }
                    
                },
                ai:{
                    order:15,
                    threaten:1.5,
                    result:{
                        target:function(player,target){
                            return -target.countCards('h');
                        },
                        player:function(player,target){
                            if (player.countCards('h')> 0) return 1;
                            return 0;
                        },
                    },
                },
            },


            nulian_target_lan:{
                silent:true,
                popup:false,
                frequent:true,
                trigger: {
                    target:'useCardToTarget',
                },
                filter:function (event, player) {
                    if(event.player&&event.player.hasMark('leinu_lan_mark')&&(get.type(event.card)=='trick' || get.type(event.card)=='basic')) {
                        return true;
                    }
                    else{
                        return false;
                    }
				},
                content:function(event){
                    'step 0'
                    player.chooseBool(get.prompt('nulian_lan'),'你成为'+get.translation(trigger.card)+'的目标，是否取消之，然后'+get.translation(trigger.player)+'失去“奴”标记？').set('ai',function(event,player){
                        if (player.hp <= 1 && get.tag(trigger.card,'damage')){
                            return true;
                        }
                        else if (get.tag(trigger.card,'recover')||get.tag(trigger.card,'save')||get.tag(trigger.card,'draw')){
                            return false;
                        }
                        else if (get.name(trigger.card) == 'tiesuo'&&player.isLinked()){
                            return false;
                        }
                        else{
                            return player.hp*0.1 + (trigger.player.hp-player.storage.jingtong_lan)*0.1 - Math.random() < 0;
                        }
                    });
                    'step 1'
                    if (result.bool){
                        player.logSkill('nulian_lan');
                        game.log(player,'将自己从',trigger.card,'的目标中移去');
                        trigger.player.removeMark('leinu_lan_mark');
                        player.line(trigger.player,'green');
                        var evt = trigger.getParent();
                        evt.triggeredTargets2.remove(player);
                        evt.targets.remove(player);
                        trigger.cancel();

                    }

                },
            },

            nulian_use_lan:{
                silent:true,
                popup:false,
                frequent:true,
                trigger:{player:'useCard2'},
                filter:function(event,player){
                    if(!event.targets||event.targets.length!=1) return false;
                    var info=get.info(event.card);
                    if(info.multitarget) return false;
                    if(info.allowMultiple==false) return false;
                    if(info.type=='equip') return false;
                    if(info.type=='delay') return false;
                    return game.hasPlayer(function(current){
                        if(!current.hasMark('leinu_lan_mark')) return false;
                        return !event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,player,current);
                    });
                },
                content:function(event){
                    'step 0'
                    player.chooseTarget(get.prompt('nulian_lan'),'你可以多指定任意名带有“奴”标记的角色为目标，然后其失去“奴”标记。',[1,Infinity],function(card,player,target){
                        if(!target.hasMark('leinu_lan_mark')) return false;
                        var trigger=_status.event.getTrigger();
                        return !trigger.targets.contains(target)&&lib.filter.targetEnabled2(trigger.card,player,target);
                    }).set('ai',function(target){
                        if (get.name(_status.event.getTrigger().card)=='jiu') return false;
                        var player=_status.event.player;
                        if (get.attitude(player,target) > 0){
                            return get.effect(target,_status.event.getTrigger().card,player,player)-1-0.9*Math.random();
                        }
                        else{
                            if (get.tag(_status.event.getTrigger().card,'recover')||get.tag(_status.event.getTrigger().card,'save')||get.tag(_status.event.getTrigger().card,'draw')){
                                return -1;
                            }
                            return get.effect(target,_status.event.getTrigger().card,player,player)*(0.5 + (player.storage.jingtong_lan - trigger.player.hp)*0.1 - Math.random())-1-0.7*Math.random();
                        }
                        
                    });
                    'step 1'
                    if(result.bool){
                        if(!event.isMine()&&!_status.connectMode) game.delayx();
                        event.targets=result.targets.slice(0);
                        for(var i=0;i<event.targets.length;i++){
                            event.targets[i].removeMark('leinu_lan_mark',1);
                        }
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    player.logSkill('nulian_lan',event.targets);
                    trigger.targets.addArray(event.targets);
                },

            },

            

            qinyin_duo:{
                audio:2,
                usable:1,
                enable:"phaseUse",
                frequent:true,
                filterCard:function(card){
                    return get.color(card)=='red';
                },
                filter:function(event,player){
                    return player.countCards('h')>0;
                },
                filterTarget:function(event,player,target){
                    return target!=player&&!target.hasSkill('qinyin_jia_duo')&&!target.hasSkill('qinyin_jian_duo');
                },
                selectCard:function (){
                    return [1,1];
                },
                content:function(){
                    "step 0"
                    player.chooseControl('qinyin_jiashang','qinyin_jianshang',function(event,player){
                        if(get.attitude(player, target) < 0) return 'qinyin_jianshang';
                        if(get.attitude(player, target) > 0) return 'qinyin_jiashang';
                        return 'qinyin_jianshang';
                    }).set('prompt','琴音：令其下回合造成伤害+1还是-1？');
                    // player.chooseControl('qinyin_jiashang','qinyin_jianshang').set('prompt','琴音：令其下回合造成伤害+1还是-1？').set('ai',function(){
					// 	return 'qinyin_jianshang';
					// });
                    
                    "step 1"
                    if(result.control=='qinyin_jiashang'){
                        target.addSkill('qinyin_jia_duo');
                        if (!target.hasSkill('qinyin_end')){
                            target.addSkill('qinyin_end');
                        }
                        game.log(player,'令',target,'直到下一个结束阶段之前造成伤害+1');
                    }
                    else{
                        target.addSkill('qinyin_jian_duo');
                        if (!target.hasSkill('qinyin_end')){
                            target.addSkill('qinyin_end');
                        }
                        game.log(player,'令',target,'直到下一个结束阶段之前造成伤害-1');
                    }

                },
                position:"h",
                check:function (card){
                    return 11-get.value(card);
                },
                ai:{
                    expose: 0.5,
                    threaten:3.5,
                    order:8.5,
                    result:{
                        target:function (player,target){
                            var threatening = get.threaten(target,player,false);
                            if (get.attitude(player, target) < 0) return threatening-100+get.attitude(player, target);
                            if (get.attitude(player, target) > 0) return 1+get.attitude(player, target);
                            return 0;
                        },
                    },
                },

            },

            qinyin_jia_duo:{
                audio:2,
                mark:true,
                intro:{
                    content:'锁定技，造成伤害+1'
                },
                trigger:{source:'damageBegin1'},
                forced: true,
                filter: function (event, player) {
					return true; // 对所有伤害事件生效
				},
				content: function () {
                    // game.playAudio('skill','qinyin_jia_duo'+(Math.ceil(2*Math.random())+2));
					game.log(player,'造成伤害+1');
                    trigger.num++; // 增加伤害值
				},
                ai:{
                    damageBonus:true,
                }

            },

            qinyin_jian_duo:{
                audio:2,
                mark:true,
                intro:{
                    content:'锁定技，造成伤害-1'
                },
                trigger:{source:'damageBegin4'},
                forced: true,
                filter: function (event, player) {
					return true; // 对所有伤害事件生效
				},
				content: function () {
                    // game.playAudio('skill','qinyin_jian_duo'+(Math.ceil(2*Math.random())+2));
					game.log(player,'造成伤害-1');
                    trigger.num--; // 减少伤害值
				},
                ai:{
                    notricksource:true,
                    skillTagFilter:function(player,tag){
                        if (tag == 'notricksource'){
                            if (player.hasSkillTag('damageBonus')){
                                return false;
                            }
                            else{
                                return true;
                            }
                        }
                    },
					effect:{
						player:function(card,player,target){
							if(get.tag(card,'damage') && !player.needsToDiscard() && !player.hasSkillTag('damageBonus',true,target)){
								return [0.2,0];
							}
                            else if (get.tag(card,'damage') && !player.hasSkillTag('damageBonus',true,target)){
                                return [0.4,0];
                            }
						}
					},
				},
                

            },

            qinyin_end:{
                silent:true,
                forced:true,
                trigger:{player:'phaseJieshu'},
                filter: function(event,player){
                    return player.hasSkill('qinyin_jia_duo')||player.hasSkill('qinyin_jian_duo');
                },
                content: function(event,player){
                    if (player.hasSkill('qinyin_jia_duo')){
                        player.removeSkill('qinyin_jia_duo');
                    }
                    if (player.hasSkill('qinyin_jian_duo')){
                        player.removeSkill('qinyin_jian_duo');
                    }
                }

            },


            taose_duo:{
                audio:2,
                skillAnimation:'epic',
				animationColor:'thunder',
                enable:"phaseUse",
                silent:true,
                popup:false,
                direct:true,
                filter:function(event,player){
                    var has = game.hasPlayer(function(current){
						return current!=player&&current.sex == 'female';
					});
                    return has&&player.countCards('h')>0 && (!player.hasSkill('taose_duo_limit'));
                },
                content:function(event){
                    'step 0'
                    player.chooseBool(get.prompt('taose_duo'),"每回合限一次，出牌阶段你可以选择X名女性角色，X至多为3，然后你弃置X张牌，令她们依次失去1点体力。").set('ai',function(){
                        return true;
                    });
                    'step 1'
                    if (result.bool){
                        event.discardNumMax = Math.min(3,player.countCards('h'));
                        player.chooseTarget(get.translation('taose_duo'),'请选择1至3名女性角色（至多为3名）',[1,event.discardNumMax],function(card,player,target){
                            return (target != player && target.sex == 'female');
                        }).ai=function(target){
                            var player = _status.currentPhase;
                            if (get.attitude(player, target)<0&&target.hasSkill('zuimei')&&target.hp==1){
                                return -1;
                            }
                            if (get.attitude(player, target)<0&&target.hasSkillTag('maihp')&&target.hp>1){
                                return -1;
                            }
                            else if (get.attitude(player, target)>2&&target.hasSkillTag('maihp')&&target.hp>1){
                                return Math.random()*10;
                            }
                            if (get.attitude(player,target) < 0 || get.attitude(target,player) < 0){
                                if (target.hp <= 2) {
                                    return -get.attitude(player,target) + 2*(3-target.hp)+5*Math.random();
                                }
                                if (target.hasSkillTag('maixie')||target.hasSkillTag('maixie_hp')) {
                                    return -get.attitude(player,target)+6+5*Math.random();
                                }
                                return -get.attitude(player,target)+6*Math.random();
                            }
                            else if (get.attitude(player,target) == 0 && get.attitude(target,player) == 0){
                                return 1-Math.random();
                            }
                            else{
                                return -1;
                            }
                        };
                    }
                    else {
                        event.finish();
                    }
                    'step 2'
                    if (result.bool&&result.targets.length>0){
                        event.targets = result.targets;
                        event.targets.sort(lib.sort.seat);
                        event.goto(3);
                    }
                    else {
                        event.finish();
                    }
                    'step 3'
                    player.chooseCard('###'+get.translation('taose_duo')+'###'+"请弃置"+get.cnNumber(event.targets.length)+'张手牌',event.targets.length,'h').set('ai',function(card){
                        return Math.max(10-get.value(card),2);
                    });
                    'step 4'
                    if (result.bool){
                        player.logSkill('taose_duo',event.targets);
                        event.num = 0;
                        player.addTempSkill('taose_duo_limit','phaseAfter');
                        player.discard(result.cards);
                        event.goto(5);
                    }
                    else {
                        event.finish();
                    }
                    'step 5'
                    if(event.num < event.targets.length){
                        targets[event.num].loseHp(1);
                        event.num++;
                    }
                    if (event.num == targets.length) event.finish();
                    else event.redo();

                },
                ai:{
                    expose:0.3,
					order:8.5,
                    threaten:3,
                    // jueqing:true,
					result:{
                        player:function(player,target){
                            var has = game.hasPlayer(function(current){
                                return current!=player&&current.sex == 'female'&&(get.attitude(player,current)<0||get.attitude(current,player)<0);
                            });
                            if (!has) return 0;
                            if (target){
                                if (get.attitude(player,target) > 0 && get.attitude(target,player) > 0){
                                    return 0;
                                }
                            }
                            if(player.countCards('h')>player.hp) return 1;
                            if(player.hp<=1) return 1;
                            if (Math.random()<0.8){
                                return 1;
                            }
                            else{
                                return 0;
                            }
                        },
					}
				},
            },

            taose_duo_limit:{
                silent:true,
                forced:true,
            },


            // taose_duo:{
            //     audio:2,
            //     usable:1,
            //     priority: 10,
            //     skillAnimation:'epic',
			// 	animationColor:'thunder',
            //     enable:"phaseUse",
            //     filter:function(event,player){
            //         return player.countCards('h')>0;
            //     },
            //     filterTarget:function(card,player,target){
            //         var length=ui.selected.cards.length;
			// 		return (length==1||length==2||length==3) && (target != player && target.sex == 'female');
			// 	},
            //     selectCard:[1,3],
            //     filterCard:function(card){
			// 		return true;
			// 	},
            //     check:function (card){return Math.max(10-get.value(card),2);},
            //     selectTarget:function (){
			// 		if(ui.selected.cards.length==3) return [3,3];
			// 		if(ui.selected.cards.length==2) return [2,2];
            //         if(ui.selected.cards.length==1) return [1,1];
			// 		// game.uncheck('target');
			// 		return [0,0];
			// 	},
            //     multitarget:true,
			// 	multiline:true,
            //     content:function(){
            //         "step 0"
            //         event.num = 0;
            //         "step 1"
            //         if(event.num < targets.length){
            //             targets[event.num].loseHp(1);
            //             event.num++;
            //         }
            //         if (event.num == targets.length) event.finish();
            //         else event.redo();
            //     },
            //     ai:{
			// 		order:9,
            //         threaten:3,
            //         // jueqing:true,
			// 		result:{
			// 			target:function(player,target){
            //                 if (get.attitude(player,target) < 0 && get.attitude(target,player) < 0){
            //                     if (target.hp <= 2) return -590 - 9*(3-target.hp);
            //                     if (target.hasSkillTag('maixie')||target.hasSkillTag('maixie_hp')) return -600;
			// 				    return -550;
            //                 }
            //                 else{
            //                     return 0;
            //                 }
			// 			},
            //             player:function(player,target){
            //                 if (get.attitude(player,target) > 0 && get.attitude(target,player) > 0){
            //                     return 0;
            //                 }
            //                 if(player.countCards('h')>player.hp) return 1;
            //                 if(player.hp<=1) return 1;
            //                 return 0;
            //             },
			// 		}
			// 	}


            // },


            // taose_duo:{
            //     audio:2,
            //     usable:1,
            //     frequent:false,
            //     priority: 10,
            //     enable:"phaseUse",
            //     // trigger:{player:'phaseDiscardBefore'},
            //     filter:function(event,player){
            //         return player.countCards('h')>0;
            //     },
            //     content:function(event){
            //         "step 0"
            //         player.chooseTarget(
            //         "选择1至3名女性角色（至多为3名）",
            //         [1, 3],
            //         function (card, player, target) {
            //             return target != player && (!target.sex || target.sex == 'female');
            //         }
            //         ).set('ai', function (player,target) {
            //             var attitude = get.attitude(player, target);
            //             if (attitude < 0) { // 敌方角色
            //                 if (target.hp <= 2) return 10 - target.hp; // 优先打击低体力敌人
            //                 return 5 - attitude; // 根据态度调整优先级
            //             }
            //             return 0; // 不选友方目标
            //         });
            //         "step 1"
            //         if(result.bool){
            //             event.targets = result.targets; // 保存选中的目标
            //             player.chooseToDiscard("发动桃色，请弃置"+event.targets.length+"张手牌",'h').set('selectCard', event.targets.length).set('ai',function (card) {
            //                 return 11 - get.value(card);
            //             });
            //         }
            //         else{
            //             event.finish();
            //         }
            //         "step 2"
            //         if (result.bool){
            //             for (var i = 0; i < targets.length; i++) {
            //                 targets[i].loseHp(1); // 每个目标失去1点体力
            //             }
            //             event.finish();
                        
            //         }else {
            //             event.finish(); // 如果没有弃牌，结束技能流程
            //         }

                    

            //     },
            //     check:function(event,player){
            //         return get.attitude(player,event.target)<0;
            //     },
            //     ai:{
            //         order:8.5,
            //         result:{
            //             target:function (player,target){
            //                 if(!player.countCards('h')){
            //                     if(player.hp<2) return 0;
            //                     if(target.hp>=player.hp) return 0;
            //                 }
            //                 return get.damageEffect(target,player);
            //             },
            //             // target:function (player,target){
            //             //     if (get.attitude(player, target) < 0) return 14-get.attitude(player, target);
            //             //     return 0;
            //             // },
            //         },
            //     },

            //     threaten:1.5,


            // },

            duanxiu_duo:{
                audio:4,
                forced:true,
				locked:true,
                // shaRelated:true,
                group:['duanxiu_nan_duo','duanxiu_noSha_duo','duanxiu_nv_duo'],
                ai:{
                    // expose:0.2,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage') && player.sex == 'female' && !player.hasSkillTag('damageBonus',true,target)){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								return [0,0];
							}
						}
					}
				},
            },

            duanxiu_nan_duo:{
                audio:2,
                trigger:{
                    target:'useCardToTargeted',
                },
                direct:false,
                forced:true,
                filter:function (event, player) {
                    if(event.card.name!='sha') return false;
					return event.player.sex=='male'&&event.target.sex=='male';
				},
                content:function(){
                    "step 0"
                    //game.playAudio('skill','duanxiu_duo'+Math.ceil(2*Math.random()));
                    game.log(player,'不能闪避男性角色的','#y【杀】');
                    trigger.getParent().directHit.add(player);
                },
            },

            duanxiu_noSha_duo:{
                silent:true,
                forced:true,
                mod: {
                    playerEnabled: function (card, player, target) {
                        if (card.name == 'sha' && target.sex == 'male') {
                            return false;
                        }
                    },
                },

            },

            duanxiu_nv_duo:{
                audio:2,
                trigger: {
                    player: "damageBegin4", // 当角色即将受到伤害时触发
                },
                direct:false,
                forced: true,
                filter:function (event, player) {
					return (event.source!=undefined)&&event.source.sex=='female';
				},
                content:function(){
                    if(trigger.num >= 1) {
                        game.log(player,'受到女性角色的伤害-1');
                        trigger.num--;
                    }
                }
            },

            hualuo_duo:{
                audio:4,
				trigger:{player:'phaseZhunbeiBegin'},
				//frequent:true,
				content:function(){
					"step 0"
					if(event.cards==undefined) event.cards=[];
					var next=player.judge(function(card){
						if(get.color(card)=='red') return 1.5;
						return -1.5;
					});
					if(get.mode()!='guozhan'&&!player.hasSkillTag('rejudge')) next.set('callback',function(){
						if(event.judgeResult.color=='red'&&get.position(card,true)=='o') player.gain(card,'gain2');
					});
					else next.set('callback',function(){
						if(event.judgeResult.color=='red') event.getParent().orderingCards.remove(card);
					});
					"step 1"
					if(result.card&&result.judge>0){
						event.cards.push(result.card);
						player.chooseBool('是否再次发动【花落】？').set('frequentSkill','hualuo_duo');
					}
					else{
                        game.playAudio('skill','hualuo_duo'+(Math.ceil(2*Math.random())+2));
						for(var i=0;i<event.cards.length;i++){
							if(get.position(event.cards[i],true)!='o'){
								event.cards.splice(i,1);i--;
							}
						}
						if(event.cards.length){
							player.gain(event.cards,'gain2');
						}
						event.finish();
					}
					"step 2"
					if(result.bool){
                        game.playAudio('skill','hualuo_duo'+Math.ceil(2*Math.random()));
						event.goto(0);
					}
					else{
						if(event.cards.length){
							player.gain(event.cards,'gain2');
						}
					}
				},
                ai:{
                    threaten:0.9,
                },
            },


            haoyin_tushan:{
                audio:2,
                frequent:false,
				trigger:{player:'phaseDrawBegin2'},
                mark:true,
                marktext:"尾",
                intro:{
                    name:"尾",
                    content:function(storage, player) {
                        // 检查 player.storage.haoyin_tushan 是否存在，若不存在则显示为 0
                        var count = player.storage.haoyin_tushan || 0;
                        return `已获得${count}个尾印记`;
                    },
                },
                check:function(event,player){
					return 100;
				},
                filter:function(event,player){
					return !event.numFixed&&event.num>0;
				},
                content:function(event){
                    "step 0"
                    player.judge(function (card) {
                        event.point = get.number(card);
                        return get.number(card) <= 9 ? -2 : 2;
                    });
                    "step 1"
                    if (result.card&&result.bool) {
                        if (!player.storage.haoyin_tushan){
                            player.storage.haoyin_tushan = event.point;
                            player.syncStorage('haoyin_tushan');
                        }
                        else{
                            player.storage.haoyin_tushan = player.storage.haoyin_tushan + event.point;
                            player.syncStorage('haoyin_tushan');
                        }
                        game.log(player,'获得','#y'+event.point,'个尾印记');
                        player.markSkill('haoyin_tushan');
                        trigger.num--;
                    }
                    else if (result.card){
                        player.useCard({ name: "jiu", isCard:true ,cardid:"haoyin_tushan_id"},player);
                        if (!player.storage.haoyin_tushan){
                            player.storage.haoyin_tushan = event.point;
                            player.syncStorage('haoyin_tushan');
                        }
                        else{
                            player.storage.haoyin_tushan = player.storage.haoyin_tushan + event.point;
                            player.syncStorage('haoyin_tushan');
                        }
                        game.log(player,'获得','#y'+event.point,'个尾印记');
                        player.markSkill('haoyin_tushan');
                        trigger.num--;
                    }
                    else{
                        if (!player.storage.haoyin_tushan){
                            player.storage.haoyin_tushan = 0;
                            player.syncStorage('haoyin_tushan');
                        }
                        else{
                            player.storage.haoyin_tushan = player.storage.haoyin_tushan + 0;
                            player.syncStorage('haoyin_tushan');
                        }
                        player.markSkill('haoyin_tushan');
                    }


				},
                ai:{
					threaten:0.3,
					// expose:0.1,
				}
                
            },

            
            tianxian_tushan:{
                audio:2,
                locked:true,
                forced:true,
                group:["tianxian_shang_tushan","tianxian_diyi_tushan"],
                ai:{
					maixie_defend:true,
                    filterDamage:true,
					threaten:0.9,
					// effect:{
					// 	target:function(card,player,target){
                    //         if (!player.hasSkill('jiuwei_tushan')){
					// 		if(player.hasSkillTag('jueqing')) return;
					// 		if(target.hujia) return;
					// 		if(player._shibei_tmp) return;
					// 		if(_status.event.getParent('useCard',true)||_status.event.getParent('_wuxie',true)) return;
					// 		if(get.tag(card,'damage')){
					// 			if(target.getHistory('damage').length>0){
					// 				return [1,-2];
					// 			}
					// 			else{
					// 				if(get.attitude(player,target)>0&&target.hp>1){
					// 					return 0;
					// 				}
					// 				if(get.attitude(player,target)<0&&!player.hasSkillTag('damageBonus')){
					// 					if(card.name=='sha') return;
					// 					var sha=false;
					// 					player._shibei_tmp=true;
					// 					var num=player.countCards('h',function(card){
					// 						if(card.name=='sha'){
					// 							if(sha){
					// 								return false;
					// 							}
					// 							else{
					// 								sha=true;
					// 							}
					// 						}
					// 						return get.tag(card,'damage')&&player.canUse(card,target)&&get.effect(target,card,player,player)>0;
					// 					});
					// 					delete player._shibei_tmp;
					// 					if(player.hasSkillTag('damage')){
					// 						num--;
					// 					}
					// 					if(num<2){
					// 						var enemies=player.getEnemies();
					// 						if(enemies.length==1&&enemies[0]==target&&player.needsToDiscard()){
					// 							return;
					// 						}
					// 						return 0;
					// 					}
					// 				}
					// 			}
					// 		}
                    //         }
					// 	}
					// }
				},
            },

            tianxian_shang_tushan:{
                audio:1.5,
                forced:true,
                priority:-10,
                trigger:{
					player:"damageBegin4",
				},
				filter:function (event, player) {
					return event.num > 1; // 针对所有伤害触发
				},
				content:function () {
                    trigger.num = 1;
                },
            },

            tianxian_diyi_tushan:{
                audio:1.5,
                forced:true,
                locked:true,
                priority:-9,
                usable:1,
                // init:function(player){
                //     player.storage.tianxian_diyi_tushan = 1;
                // },
                trigger:{
					player:"damageBegin4",
				},
                filter:function(event, player){
                    // return (player.storage.tianxian_diyi_tushan == 1) && 
                    // (!player.storage.haoyin_tushan || player.storage.haoyin_tushan < 9);
                    return (player.getHistory('damage',function(evt){
						return evt!=event
					}).length==0)&& player.hasSkill('haoyin_tushan')&&
                    !player.storage.haoyin_tushan || player.storage.haoyin_tushan <= 9;
                },
                content:function(){
                    game.log(player,'防止了本回合第一次受到的伤害');
                    trigger.num = 0;
                },

            },


            
            mingding_tushan:{
                audio:2,
                direct:true,
                unique:true,
                juexingji:true,
                skillAnimation:'epic',
				animationColor:'water',
                derivation:['jiuwei_tushan','juannian_tushan'],
                ai:{
					combo:'haoyin_tushan'
				},
                trigger:{player:'phaseZhunbei'},
                forced:true,
                filter:function(event,player){
					return (player.storage.haoyin_tushan)&&(player.storage.haoyin_tushan >= 9);
				},
                content:function(){
                    "step 0"
                    //改变背景
                    if (game.getUpperBackgroundName('',player) != 'mingding_bg'){
                        game.createClearBackground('mingding_bg',player);
                    }
                    game.delay(0.5);
                    "step 1"
                    //效果
                    player.awakenSkill('mingding_tushan');
                    player.storage.haoyin_tushan = 0;
                    player.gainMaxHp();
                    player.logSkill('mingding_tushan');
                    game.delay(2);
					"step 2"
                    game.delay(0.5);
                    //改变背景
                    if (game.getUpperBackgroundName('',player) != 'bingshan_bg'){
                        game.createClearBackground('bingshan_bg',player);
                    }
                    player.recover(player.maxHp - player.hp)
                    player.draw(9);
                    "step 3"
                    player.removeSkill('haoyin_tushan');
                    delete player.storage.haoyin_tushan;
                    game.log(player,'失去了技能','#g【豪饮】');
                    player.addSkill('jiuwei_tushan');
                    player.addSkill('juannian_tushan');
                    game.log(player,'获得了技能','#g【九尾】','和','#g【眷念】');
				},
                ai:{
					threaten:4,
					// expose:0.2,
				}
            },

            jiuwei_tushan:{
                audio:2,
                frequent:false,
                mark:true,
                marktext:"尾",
                intro:{
                    name:"<font size=4>九尾·觉醒</font>",
                    content:"",
                },
                group:["jiuwei_respondSha_tushan","jiuwei_useSha_tushan","jiuwei_shou_tushan","jiuwei_jiashang_tushan"],
                ai:{
                    maixie_defend:true,
                    damageBonus:true,
                    respondSha:true,
					threaten:7.6,
					// expose:1.3,
				}
            },

            jiuwei_respondSha_tushan: {
                audio:2,
                frequent:false,
                shaRelated:true,
                prompt:"九尾",
                prompt2:"你可以发动技能【九尾】判定出【杀】，是否发动？",
                trigger: { player: "chooseToRespondBegin" },
                check:function(trigger,player){
                    if (trigger.getParent()&&trigger.getParent().name == 'yunv_shashan_gui'){
                        if (get.attitude(player,trigger.getParent().player)>2){
                            return true;
                        }
                        else{
                            return false;
                        }
                    }
                    return true;
                },
                filter: function (event, player) {
                    return event.filterCard({ name: "sha" }); // 是否需要【杀】
                },
                content: function () {
                    "step 0"
                    player.judge(function (card) {
                        return get.number(card) <= 9 ? 2 : -2;
                    });
                    "step 1"
                    if (result.card&&result.bool) {
                        game.log('#g【九尾】','出杀判定成功');
                        trigger.untrigger();
                        trigger.set('responded',true);
                        trigger.result={bool:true,card:{name:'sha',isCard:true}}
                    }
                    else{
                        game.log('#g【九尾】','出杀判定失败');
                    }
                },
                
            },

            

            jiuwei_useSha_tushan: {
                audio:2,
                frequent:false,
                shaRelated:true,
                prompt:"你可以选择一个目标，发动技能【九尾】判定向其出杀，是否发动？",
                priority:10,
                line:'thunder',
                // direct:true,
                enable:"chooseToUse",
                filter:function(event,player,target){
                    return !player.hasSkill('jiuzhang_sha_ban') && //(player.countUsed('sha', true) < player.getCardUsable('sha'))&&
                    event.type != 'dying'&&
                    event.filterCard({ name: "sha" });
                },
                filterTarget:function (card,player,target){
                    if(player==target) return false;
                    return true;
                    // return player.inRange(target);
                },
                selectTarget:function (){
                    return [1,1];
                },
                selectCard:function (){
                    return [0,0];
                },
                check:function (card){
                    return 100 - get.value(card);
                },
                content:function(event){
                    "step 0"
                    // player.popup('jiuwei_useSha_tushan');
                    // player.line(target,'thunder');
                    // game.log(player,'对',target,'发动','#g【九尾】','判定向其出杀');
                    player.judge(function (card) {
                        return get.number(card) <= 9 ? 2 : -2; // 判定点数 ≤ 9 则成功
                    });
                    "step 1"
                    if (result.card&&result.bool) {
                        // 判定成功，视为对目标使用了一张【杀】
                        game.log('#g【九尾】','出杀判定成功');
                        player.useCard({name:'sha',isCard:true,cardid:"jiuwei_useSha_tushan_id"},target,false);
                        player.storage.successSha = true;
                        // result = {bool:true}; 
                    } 
                    else {
                        game.log('#g【九尾】','出杀判定失败');
                        player.storage.successSha = false;
                        // result = {bool:false}; 
                    }
                },

                ai:{
                    expose:0.5,
					// order:9,
                    order:function(){
						return get.order({name:'sha'})+0.2;
					},
                    // threaten:3,
                    // jueqing:true,
					result:{
						target:function(player,target){
                            var judgePro = 0;
                            var has = game.hasPlayer(function(current){
                                if (current.hasSkillTag('judgePro')){
                                    if (get.attitude(current,player)>=0){
                                        judgePro+=0.7;
                                    }
                                    else{
                                        judgePro-=0.7;
                                    }
                                }
                            });
                            if (target.hasSkill('forbidNoSuit')||target.hasSkillTag('forbidNoNumber',true,player)){
                                return 0 - judgePro;
                            }
                            if (get.attitude(player,target) < 0){
                                if (target.hasSkillTag('maixie')||target.hasSkillTag('maixie_hp')) return -20;
							    return -get.effect(target,{name:'sha'},player)*7 - judgePro;
                            }
                            else{
                                return 0;
                            }
						}
					}
				}

            },

            jiuwei_shou_tushan:{
                audio:2,
				trigger:{player:'damageEnd'},
                filter:function(event,player){
					return (event.source!=undefined);
				},
				check:function(event,player){
					return (get.attitude(player,event.source)<=0);
				},
                line:'thunder',
                logTarget:'source',
                prompt:"九尾",
                prompt:"是否发动【九尾】判定，若判定结果点数≤9，你对伤害来源造成1点伤害。",
				content:function(){
					"step 0"
					player.judge(function (card) {
                        return get.number(card) <= 9 ? 2 : -2; // 判定点数 ≤ 9 则成功
                    });
					"step 1"
					if(result.card&&result.bool){
                        game.log('#g【九尾】','回击判定成功');
                        trigger.source.damage(1);
						
					}
                    else{
                        game.log('#g【九尾】','回击判定失败');
                        event.finish();return;
                    }
					
				},
				ai:{
                    expose:0.1,
					maixie_defend:true,
					effect:{
						target:function(card,player,target){
							if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
							return 0.8;
							// if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
						}
					},
				}
            },


            jiuwei_jiashang_tushan:{
                audio:2,
                trigger:{source:'damageBegin1'},
                frequent:true,
                // direct:true,
                forced:false,
                line:'thunder',
                filter:function(event,player){
                    return true;
                },
                content:function(){

                    'step 0'
                    player.chooseBool(get.prompt("jiuwei_tushan"), '你可以选择发动技能【九尾】来判定加伤。').set("ai", function () {
                        // 根据局势设置默认的AI选择
                        // return true;
                        return get.attitude(player, trigger.player) < 0;
                    });
                    'step 1'
                    if(result.bool){
                        player.judge(function (card) {
                            return get.number(card) <= 9 ? 2 : -2; // 判定点数 ≤ 9 则成功
                        });
                    }
                    'step 2'
                    if(result.card&&result.bool){
                        game.log('#g【九尾】','加伤判定成功');
                        trigger.num++;
                    }
                    else{
                        game.log('#g【九尾】','加伤判定失败');
                        event.finish();
                    }
                },
                ai:{
                    expose:0.1,
					// result: {
                    //     target: function(card, player, target, current) {
                    //         // 阻止 AI 对友方使用技能
                    //         // if (get.attitude(player, target) < 0) return -1;
                    //         return -1;
                    //     },
                    // },
				}
            },


            juannian_tushan:{
                trigger: { player: "useCard" }, // 监听出牌事件
                forced: true,
                locked:true,
                marktext:"念",
                silent:true,
                popup:false,
                intro: {
                    name:"眷念",
                    content: "当前回合已使用了9张杀",
                },
                filter: function (event, player) {
                    return event.card && event.card.name == "sha"; // 只关注【杀】
                },
                init: function (player) {
                    player.storage.juannian_tushan = 0; // 初始化出杀计数
                    player.syncStorage('juannian_tushan');
                },
                content: function () {
                    // 每使用一次【杀】，计数器+1
                    player.storage.juannian_tushan++;
                    player.syncStorage('juannian_tushan');
                    if (player.storage.juannian_tushan == 9) {
                        // 第九张【杀】触发技能效果
                        game.playAudio('skill','juannian_tushan'+Math.ceil(2*Math.random()));
                        player.logSkill('juannian_tushan');
                        player.addSkill("jiuzhang_sha_ban"); // 添加禁止出杀的技能
                        player.syncStorage('juannian_tushan');
                        player.markSkill("juannian_tushan"); // 标记技能
                    }
                },
                group: ["jiuzhang_sha_reset"], // 依赖重置计数的子技能
                ai:{
                    neg:true,
                },
            },
            
            jiuzhang_sha_reset: {
                trigger: { player: "phaseEnd" }, // 回合结束时重置计数器
                silent: true,
                forced: true,
                content: function () {
                    player.storage.juannian_tushan = 0; // 重置计数
                    player.syncStorage('juannian_tushan');
                    player.removeSkill("jiuzhang_sha_ban"); // 移除禁止技能
                    player.unmarkSkill("juannian_tushan"); // 移除标记
                },
            },
            
            jiuzhang_sha_ban: {
                mod: {
                    cardEnabled: function (card, player) {
                        if (card.name == "sha") return false; // 禁止【杀】的使用
                    },
                },
            },

            linghu_ning:{
                forced:true,
				audio:4,
                locked:true,
                group:['linghu2_ning'],
                ai:{
					maixie_defend:true,
					threaten:0.9,
					effect:{
						target:function(card,player,target){
							if(player.hasSkillTag('jueqing')) return;
							if(target.hujia) return;
							if(player._shibei_tmp) return;
							if(target.hasSkill('shibei_ai')) return;
							if(_status.event.getParent('useCard',true)||_status.event.getParent('_wuxie',true)) return;
							if(get.tag(card,'damage')){
								if(target.getHistory('damage').length>0 && target.getHistory('damage').length%2 == 1){
									return [1,-1];
								}
								else{
									if(get.attitude(player,target)>0&&target.hp>1){
										return 0;
									}
									if(get.attitude(player,target)<0&&!player.hasSkillTag('damageBonus',true,target)){
										if(card.name=='sha') return;
										var sha=false;
										player._shibei_tmp=true;
										var num=player.countCards('h',function(card){
											if(card.name=='sha'){
												if(sha){
													return false;
												}
												else{
													sha=true;
												}
											}
											return get.tag(card,'damage')&&player.canUse(card,target)&&get.effect(target,card,player,player)>0;
										});
										delete player._shibei_tmp;
										if(player.hasSkillTag('damage')){
											num++;
										}
										if(num<2){
											var enemies=player.getEnemies();
											if(enemies.length==1&&enemies[0]==target&&player.needsToDiscard()){
												return;
											}
											return 0;
										}
									}
								}
							}
						}
					}
				},
            },


            linghu2_ning:{
                trigger:{player:'damageEnd'},
				forced:true,
				silent:true,
				check:function(event,player){
				 return player.getHistory('damage',function(evt){
						return evt!=event
					}).length==0;
				},
				content:function(){
					if(player.getHistory('damage',function(evt){
						return evt!=trigger
					}).length % 2 == 1){
						player.loseHp();
                        player.logSkill('linghu2_ning');
                        game.playAudio('skill','linghu_ning'+(Math.ceil(2*Math.random())+2));
					}
					else{
						player.recover();
                        player.logSkill('linghu2_ning');
                        game.playAudio('skill','linghu_ning'+Math.ceil(2*Math.random()));
					}
				},

            },

            husao_ning:{
                audio:5,
                group:["husao_handout_ning","husao_handout_ning1","husao_draw_ning"],
                ai:{
					threaten:3.8,
					effect:{
						target:function(card){
							if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
						}
					},
					noh:true,
					skillTagFilter:function(player,tag){
						if(tag=='noh'){
							if(player.countCards('h')!=1) return false;
						}
					},
				},

            },

            // husao_handout_ning:{
            //     audio:3,
            //     enable:'phaseUse',
            //     selectCard:[1,Infinity],
            //     filterCard:true,
            //     discard:false,
            //     prompt:'出牌阶段每名角色限一次，你可以将任意张手牌交给一名其他角色，若你交给一名角色的手牌数大于该角色的体力上限，则你可以进行一次判定，若结果为♠，则该角色失去1点体力上限，若为其他花色，你对自己造成1点伤害；当你失去最后一张手牌时，你可以选择摸两张牌，然后弃置一张手牌。',
            //     filterTarget:function(card,player,target){
			// 		if(player.storage.husao_handout_ning2&&player.storage.husao_handout_ning2.contains(target)) return false;
			// 		return player!=target;
			// 	},
            //     content:function(event){
            //         "step 0"
			// 		if(!Array.isArray(player.storage.husao_handout_ning2)){
			// 			player.storage.husao_handout_ning2=[];
			// 		}
			// 		player.storage.husao_handout_ning2.push(target);
            //         target.gain(cards,player,'draw');
			// 		if(!Array.isArray(player.storage.husao_handout_ning)){
			// 			player.storage.husao_handout_ning=[]
			// 		}
            //         player.storage.husao_handout_ning.push(cards.length);
			// 		if(cards.length>target.hp){
            //             event.target = target;
            //             target.turnOver();
			// 			event.finish();
						
			// 		}
			// 		else{
			// 			event.finish();
			// 		}
                    
					
            //     },
            //     check:function(card){
            //         var player=get.owner(card);
            //         if(player.countCards('h')>0){
			// 			var players=game.filterPlayer();
			// 			for(var i=0;i<players.length;i++){
            //                 if(get.attitude(player,players[i])>=0){
			// 					if (ui.selected.cards.length<=players[i].hp &&!players[i].isTurnedOver()){
            //                         return 100-get.value(card);
            //                     }
            //                     else if (ui.selected.cards.length > players[i].hp &&players[i].isTurnedOver()){
            //                         return 100-get.value(card);
            //                     }
            //                     else{
            //                         return -100;
            //                     }
                                
			// 				}
            //                 else if(get.attitude(player,players[i])<0){
            //                     if (ui.selected.cards.length == players[i].hp+1 && !players[i].isTurnedOver()){
            //                         return 99-get.value(card);
            //                     }
            //                     else{
            //                         return -100;
            //                     }
			// 				}
            //                 else{
            //                     return -100;
            //                 }

			// 			}
			// 			return -100;
			// 		}
            //         return -100;
			// 	},
            //     ai:{
            //         order:function(skill,player){
			// 			return 9;
			// 		},
            //         result:{
			// 			target:function(player,target){
			// 				if (get.attitude(player,target) >= 0 && target.isTurnedOver()){
            //                     return 20;
            //                 }
            //                 else if (get.attitude(player,target) >= 0 && !target.isTurnedOver()){
            //                     return 19;
            //                 }
            //                 else if (get.attitude(player,target) < 0 && !target.isTurnedOver()){
            //                     return 1;
            //                 }
            //                 else return 0;
			// 			},
            //             player:function(player,target){
			// 				if (player.countCards('h')>0) return 1;
            //                 else return 0;
			// 			}
			// 		},
			// 		threaten:0.8
            //     },

            // },
            husao_handout_ning:{
                audio:3,
                enable:'phaseUse',
                popup:false,
                silent:true,
                direct:true,
                // prompt:"狐骚",
                // prompt2:'出牌阶段每名角色限一次，你可以将任意张手牌交给一名其他角色，若你交给一名角色的手牌数大于该角色的体力上限，则你可以进行一次判定，若结果为♠，则该角色失去1点体力上限，若为其他花色，你对自己造成1点伤害；当你失去最后一张手牌时，你可以选择摸两张牌，然后弃置一张手牌。',
                filter:function(event,player){
                    var has = game.hasPlayer(function(current){
						return current!=player&&!current.hasSkill('husao_handout_ning_end');
					});
					return player.countCards('h')>0&&has;
                },
                content:function(event){
                    'step 0'
					player.chooseCardTarget({
						position:'h',
						filterCard:true,
						selectCard:[1,Infinity],
						filterTarget:function(card,player,target){
							return player!=target&&!target.hasSkill('husao_handout_ning_end');
						},
						ai1:function(card){
                            if(get.type(card)=='basic'||get.name(card)=='wuxie'){
                                if (player.getEquip('zhuge')&&get.name(card)=='sha'){
                                    return 1;
                                }
                                else if (get.name(card)=='sha'){
                                    return 50 - get.value(card);
                                }
                                else{
                                    return 100 - get.value(card);
                                }
                            }
                            else if (get.type(card,'trick')=='trick' || get.type(card)=='equip'){
                                if (get.name(card) == 'zhuge'){
                                    return 0.1;
                                }
                                else if (player.getEquip('zhuge')&&get.type(card)=='equip'&&get.subtype(card)=='equip1'){
                                    return 100 - get.value(card);
                                }
                                else if (get.name(card)=='jiedao'){
                                    return 10;
                                }
                                else if (get.name(card)=='shandian'&&player.getJudge('shandian')){
                                    return 100 - get.value(card);
                                }
                                else{
                                    return 1;
                                }
                                
                            }
                            else{
                                return 1;
                            }
						},
						ai2:function(target){
							var att=get.attitude(_status.event.player,target);
							if (att > 0 && target.isTurnedOver()){
                                if (ui.selected.cards.length-target.hp > 0){
                                    return (att-target.hp*Math.random())*10;
                                }
                                else{
                                    return (0.8-Math.random())*att;
                                }
                            }
                            else if (att > 0 && !target.isTurnedOver()){
                                return (target.hp - ui.selected.cards.length+0.5*Math.random())*att;
                            }
                            else if (att < 0 && target.isTurnedOver()){
                                return (2-ui.selected.cards.length-Math.random())*Math.random();
                            }
                            else if (att < 0 && !target.isTurnedOver()){
                                if (ui.selected.cards.length >= target.hp+1 && ui.selected.cards.length <= target.hp+2){
                                    return (ui.selected.cards.length-target.hp-0.5*Math.random())*10;
                                }
                                else{
                                    return -100;
                                }
                                
                            }
                            return 0.5-Math.random();
						},
						prompt:"狐骚",
                        prompt2:"请选择至少一张牌，然后选择一名其他角色，将这些牌交给此角色。",
                        popup:false,
                        silent:true,
					});
                    "step 1"
                    if(result.bool){
						var target=result.targets[0];
						var cards=result.cards;
                        // target.gain(cards,player,'giveAuto','bySelf');
                        target.gain(cards,player,'draw');
                        target.addSkill('husao_handout_ning_end');
                        player.line(target,'green');
                        if(cards.length > target.hp){
                            target.turnOver();
                        }
						player.logSkill('husao_handout_ning',target);
					}
				
                },
                
                ai:{
                    expose:0.2,
                    order:function(skill,player){
						return 0.1;
					},
                    result:{
                        player:function(player,target){
                            var has = game.hasPlayer(function(current){
                                return current!=player&&!current.hasSkill('husao_handout_ning_end')&&get.attitude(player,current)>0;
                            });
							if (has) return 1;
                            else return Math.random()<0.6;
						}
					},
					threaten:0.8
                },

            },
            husao_handout_ning1:{
				trigger:{player:'phaseUseBegin'},
				silent:true,
                forced:true,
				content:function(){
					player.storage.husao_handout_ning=[];
					player.storage.husao_handout_ning2=[];
				}
			},

            husao_handout_ning_end:{
                trigger:{global:'phaseUseBegin'},
                silent:true,
                forced:true,
                content:function(){
					player.removeSkill('husao_handout_ning_end');
					
				}
            },

            husao_draw_ning:{
                audio:2,
                trigger:{player:'loseEnd'},
				frequent:true,
				filter:function(event,player){
					if(player.countCards('h')) return false;
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].original=='h') return true;
					}
					return false;
				},
				content:function(){
                    "step 0"
					player.draw(2);
                    "step 1"
                    player.chooseToDiscard('h', 1, true).set('ai',function(card){
                        var player=get.owner(card);
                        if (_status.currentPhase!=player){
                            if(get.type(card)=='basic'||get.name(card)=='wuxie'){
                                return -100 - get.value(card);
                            }
                            else if (get.type(card,'trick')=='trick' || get.type(card)=='equip'){
                                return 100 - get.value(card);
                            }
                            else{
                                return 0;
                            }
                        }
                        else{
                            if(get.type(card)=='basic'||get.name(card)=='wuxie'){
                                if (player.getEquip('zhuge')&&get.name(card)=='sha'){
                                    return -100-get.value(card);
                                }
                                else if (get.name(card)=='sha'){
                                    return 50 - get.value(card);
                                }
                                else{
                                    return 100 - get.value(card);
                                }
                            }
                            else if (get.type(card,'trick')=='trick' || get.type(card)=='equip'){
                                if (get.name(card) == 'zhuge'){
                                    return -1000;
                                }
                                else if (player.getEquip('zhuge')&&get.type(card)=='equip'&&get.subtype(card)=='equip1'){
                                    return 100 - get.value(card);
                                }
                                else if (get.name(card)=='jiedao'){
                                    return 1;
                                }
                                else if (get.name(card)=='shandian'&&player.getJudge('shandian')){
                                    return 100 - get.value(card);
                                }
                                else{
                                    return -100 - get.value(card);
                                }
                                
                            }
                            else{
                                return 0;
                            }
                            
                        }
                    });
				},
				ai:{
                    threaten:0.8,
					effect:{
						target:function(card){
							if(card.name=='guohe'||card.name=='shunshou') return 0.5;
						}
					},
                    noh:true,
					skillTagFilter:function(player,tag){
						if(tag=='noh'){
							if(player.countCards('h')!=1) return false;
						}
					}
				}
            },

            xuqin_ning:{
                audio:3,
				enable:'phaseUse',
				filterCard:true,
				usable:1,
				selectCard:2,
				check:function(card){
					var player=get.owner(card);
                    if(get.type(card)=='basic'||get.name(card)=='wuxie'){
                        if (player.getEquip('zhuge')&&get.name(card)=='sha'){
                            return -100-get.value(card);
                        }
                        else if (get.name(card)=='sha'){
                            return 50 - get.value(card);
                        }
                        else{
                            return 100 - get.value(card);
                        }
                    }
                    else if (get.type(card,'trick')=='trick' || get.type(card)=='equip'){
                        if (get.name(card) == 'zhuge'){
                            return -1000;
                        }
                        else if (player.getEquip('zhuge')&&get.type(card)=='equip'&&get.subtype(card)=='equip1'){
                            return 90 - get.value(card);
                        }
                        else if (get.name(card)=='jiedao'){
                            return 1;
                        }
                        else if (get.name(card)=='shandian'&&player.getJudge('shandian')){
                            return 100 - get.value(card);
                        }
                        else{
                            return -100 - get.value(card);
                        }
                        
                    }
                    else{
                        return 0;
                    }
					// if(player.countCards('h')>player.hp)
					// 	return 8-get.value(card)
					// if(player.hp<player.maxHp)
					// 	return 6-get.value(card)
					// return 4-get.value(card)
				},
				filterTarget:function(card,player,target){
					if(target.hp>=target.maxHp) return false;
					if(target==player) return false;
					return true;
				},
				content:function(){
					player.recover();
					target.recover();
                    
                    if (!target.hasSkill('xuqin_ning_lose')){
                        target.addSkill('xuqin_ning_lose');
                        target.storage.zhangning_jiuzihun = player;
                    }
                    if (!target.hasSkill('xuqin_ning_lose_end')){
                        target.addSkill('xuqin_ning_lose_end');
                        target.storage.zhangning_jiuzihun = player;
                    }
				},
				ai:{
                    expose:0.05,
					order:15,
					result:{
						player:function(player){
							if(player.hp<player.maxHp) return 4;
							if(player.countCards('h')>player.hp) return 0
							return -1;
						},
						target:function(player,target){
                            if (target.hasSkill('xuqin_ning_lose')){
                                return 0;
                            }
                            if (get.attitude(player,target) < 0){
                                if (target.hasSkillTag('maihp')) return 0;
                                if (target.hasSkillTag('maixie')||target.hasSkillTag('maixie_hp')) return -100;
							    return -50;
                            }
                            else{
                                return 0;
                            }
						}
					},
					threaten:2,
				}
            },

            xuqin_ning_lose:{
                audio:3,
                priority:16,
                forced:true,
                direct:true,
                trigger:{
                    player:"phaseZhunbeiBefore",
                },
                filter: function(){
                    return true;
                },
                content:function(){
                    if (player.storage.zhangning_jiuzihun){
                        if (player.storage.zhangning_jiuzihun.isAlive()){
                            player.storage.zhangning_jiuzihun.logSkill('xuqin_ning_lose',player);
                        }
                        else{
                            player.logSkill('xuqin_ning_lose');
                        }
                        
                    }
                    player.loseHp(2);
                },

            },

            xuqin_ning_lose_end:{
                silent:true,
                popup:false,
                forced:true,
                trigger:{
                    player:"phaseJieshu",
                },
                filter: function(){
                    return true;
                },
                content:function(){
                    if (player.hasSkill('xuqin_ning_lose')){
                        player.removeSkill('xuqin_ning_lose');
                    }
                },

            },

            




            huiyi_ning:{
                audio:1,
                mode:['identity'],
				unique:true,
                // mark:true,
                // direct:true,
                frequent:false,
                derivation:['linghun_ning'],
                // popup:true,
                intro:{
                    content:"limited",
                },
                skillAnimation:'epic',
				animationColor:'fire',
                popup:false,
                trigger:{
                    player:"changeHp",
                },
                check:function(event,player){
					if (player.countCards('he',{name:'tao'})+player.countCards('he',{name:'jiu'}) > 0-player.hp){
                        return false;
                    }
                    else if (player.getHistory('damage').length % 2 == 1){
                        if (Math.random() < 0.6){
                            return true;
                        }
                        else{
                            return false;
                        }
                    }
                    else if (player.getHistory('damage').length % 2 == 0){
                        if (Math.random() < 0.9){
                            return true;
                        }
                        else{
                            return false;
                        }
                    }
                    else{
                        return true;
                    }
				},
                filter:function(event,player){
                    return player.hp<=0&&event.num<0;
                },
                content:function(event){
                    "step 0"
					player.chooseTarget(get.prompt('huiyi_ning'),function(card,player,target){
						return player!=target;
					}).ai=function(target){
						return get.attitude(player,target);
					};
                    "step 1"
					if(result.bool){
                        var cards=player.getCards('he');
						event.target=result.targets[0];
                        
                        player.removeSkill("husao_ning");
                        game.log(player,'失去了技能','#g【狐骚】');
                        // player.$give(cards,event.target);
						event.target.gain(cards,player,'giveAuto','bySelf');
                        if(event.target.isTurnedOver()) {event.target.turnOver();}
                        if(event.target.isLinked()){
                            event.target.link();
                            game.playAudio('skill','tiesuo');
                        }
                        player.logSkill("huiyi_ning");

                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    // game.playAudio('skill','huiyi_ning'+Math.ceil(1*Math.random()));
                    // player.popup(get.translation('huiyi_ning'));
                    
                    event.suits = ['heart', 'diamond', 'club', 'spade'];
                    event.cards = [];
                    for (var i = 0; i < event.suits.length; i++) {
                        var suit = event.suits[i];
                        //以下是从牌堆中获取
                        var card=get.cardPile2(function(card){
							return get.suit(card)==suit;
						});
                        //以下是从牌堆和弃牌堆里同时检索获取
                        // var card=get.cardPile(function(card){
						// 	return get.suit(card)==suit;
						// });
                        if (card) {
                            event.cards.push(card);
                        }
                    }
                    event.target.showCards(event.cards,'四色【悔意】牌');

                    "step 3"
                    event.target.gain(event.cards, 'draw');
                    event.target.gainMaxHp(1);
                    "step 4"
                    event.target.recover(1);
                    event.target.addSkill("linghun_ning");
                    
                    
                    player.line(event.target,'fire');
                    var mode=get.mode();
                    if (mode=='identity'&&player.identity=='zhu'){
                        game.broadcastAll(function(player,target,shown){
                            var identity=player.identity;
                            player.identity=target.identity;
                            if(shown||player==game.me){
                                player.setIdentity();
                            }
                            target.identity=identity;
                        },player,event.target,player.identityShown);
                        player.line(event.target,'fire');
                        game.zhu = event.target;
                        event.target.setIdentity('zhu');
                        game.addVideo('setIdentity',event.target,'zhu');
                        event.target.identityShown=true;
						event.target.node.identity.classList.remove('guessing');
                    }
                    "step 5"
                    if (player.identity == 'zhu') {
                        player.die(trigger.getParent())._triggered = true; // 标记为已触发，避免影响游戏结束逻辑
                    } else {
                        player.die(trigger.getParent());
                    }

                    'step 6'
                    if (!player.isAlive()) {
                        trigger.cancel(true);
                    }
                    
                },


                ai:{
                    threaten:1.4,
                    result:{
                        player:function(player){
                            if (player.countCards('he',{name:'tao'})+player.countCards('he',{name:'jiu'}) > 0-player.hp){
                                return 0;
                            }
                            else if (player.getHistory('damage').length % 2 == 1){
                                if (Math.random() < 0.6){
                                    return 1;
                                }
                                else{
                                    return 0;
                                }
                            }
                            else if (player.getHistory('damage').length % 2 == 0){
                                if (Math.random() < 0.8){
                                    return 1;
                                }
                                else{
                                    return 0;
                                }
                            }
                            else{
                                return 1;
                            }

                            
                        },
                    },
                },

            },


            linghun_ning:{
                audio:2,
				trigger:{player:'turnOverAfter',},
                frequent:false,
                mark:true,
                marktext:"狐",
                intro:{
                    name2:"狐魂",
                    content:"翻面后，你可以摸一张牌",
                },
				filter:function(event,player){
					return true;
				},
				check:function(event,player){
					return true;
				},
				content:function(){
					player.draw();
				},
				ai:{
					// expose:0.2,
                    threaten:0.2,
				}
            },





            xinnian_caoxin:{
                audio:4,
                trigger:{
					player:["enterGame"],
                    global:'gameDrawAfter',
				},
                // mark:true,
                frequent:true,
                marktext:"信",
                intro:{
                    name:"信印记",
                    content:function(storage, player) {
                        // 检查 player.storage.haoyin_tushan 是否存在，若不存在则显示为 0
                        var count = 0;
                        if (player.storage.xinnian_caoxin){
                            count = player.storage.xinnian_caoxin;
                        }
                        else if (player.storage.xinnian_caoxin == 0){
                            count = player.storage.xinnian_caoxin;
                        }
                        // var count = player.storage.xinnian_caoxin || 1;
                        return `${count}个`;
                    },
                },
                init:function(player){
                    player.storage.xinnian_caoxin = 0;
                    player.syncStorage('xinnian_caoxin');
                },
                content:function(){
                    player.storage.xinnian_caoxin = 1;
                    player.syncStorage('xinnian_caoxin');
                    player.markSkill('xinnian_caoxin');
                    game.log(player,'获得1个信印记');
                },
                group:["xinnian_shanwuxie_caoxin","xinnian_phaseBegin_caoxin"],
                ai:{
                    threaten:0.8,
                },
            },

            xinnian_shanwuxie_caoxin:{
                audio:2,
                trigger:{
                    player:['respond','useCard'],
                },
                prompt2:"是否获得一个信印记并摸一张牌？",
                filter:function(event,player){
					return (event.card&&event.card.name=='shan') || (event.card&&event.card.name=='wuxie');
				},
                frequent:false,
				content:function(){
                    player.storage.xinnian_caoxin++;
                    game.log(player,'获得1个信印记');
                    player.syncStorage('xinnian_caoxin');
                    player.markSkill('xinnian_caoxin');
					player.draw();
				},
				ai:{
					mingzhi:false,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'respondShan')){
								return 0.8;
							}
						}
					},
				}
            },

            xinnian_phaseBegin_caoxin:{
                audio:2,
                frequent:false,
                prompt2:"是否获得场上背面朝上的角色数的信印记？",
                trigger:{
                    player:"phaseUseBegin",
                },
                filter: function(event, player) {
                    return game.hasPlayer(function(current){
						return current.isTurnedOver();
					});
                },
                content:function(){
                    var count = game.filterPlayer(function(current) {
                        return current.isTurnedOver(); // 判断角色是否为背面朝上
                    }).length;
                    player.storage.xinnian_caoxin = player.storage.xinnian_caoxin + count;
                    game.log(player,'获得'+count+'个信印记');
                    player.syncStorage('xinnian_caoxin');
                    player.markSkill('xinnian_caoxin');

                },
            },

            yinyang_caoxin:{
                audio:2,
                group:["yinyang_origin_caoxin","yinyang_shoupai_caoxin","yinyang_zhuangbei_caoxin"],
                ai:{
                    threaten:4,
                },
            },
            
            yinyang_origin_caoxin:{
                audio:2,
                direct:true,
                trigger:{player:'turnOverAfter',},
                filterTarget: function(card, player, target) {
                    return target != player; // 示例：目标不能是自己
                },
                frequent:false,
                prompt2:'你从背面翻至正面后，你可以令一名其他角色翻面。',
                filter:function(event,player){
                    return !player.isTurnedOver();
                },
                content:function(event){
                    "step 0"
                    // 选择一名其他角色
                    player.chooseTarget("请选择一名角色，发动【阴阳】令其翻面", function(card, player, target) {
                        return target != player; // 目标不能是自己
                    }).set('ai', function(target) {
                        // AI逻辑：优先选择敌对角色
                        if (!target.isTurnedOver()){
                            if (get.attitude(player,target)+get.attitude(target,player)<0){
                                // return Math.random()+100;
                                //后置位立马要动的优先翻。
                                var diff_posi = target.dataset.position - player.dataset.position;
                                if (diff_posi<0){
                                    diff_posi = diff_posi+8;
                                }
                                return get.threaten(target,player,true)*(8 - diff_posi)/8;
                            }
                            else{
                                return -1;
                            }
                        }
                        else{
                            return get.attitude(player, target);
                        }
                        
                    });

                    "step 1"
                    if (result.bool && result.targets.length) {
                        var target = result.targets[0];
                        player.logSkill('yinyang_origin_caoxin',target);
                        player.line(target,'green');
                        target.turnOver(); // 令目标翻面
                        game.delay(1);
                    }
                },

                ai:{
                    expose:0.25,
                },
                
            },

            yinyang_shoupai_caoxin:{
                audio:2,
                // silent:true,
                frequent:false,
                priority:11,
                popup:false,
                prompt2:'是否选择与一名背面朝上的角色交换手牌？',
                trigger:{
                    player:"phaseZhunbei",
                },
                filter: function(event, player) {
                    return game.hasPlayer(function(current){
						return current.isTurnedOver()&&current!=player;
					});
                },
                filterTarget: function(card, player, target) {
                    return target.isTurnedOver()&&target!=player; // 示例：目标不能是自己
                },
                content:function(){
                    "step 0"
                    // 选择一名背面朝上的角色
                    player.chooseTarget("请选择一名背面朝上的角色，与其交换手牌", function(card, player, target) {
                        return target != player && target.isTurnedOver(); // 筛选目标：背面朝上的角色，且不能是自己
                    }).set('ai', function(target) {
                        // AI 逻辑：优先选择手牌多的角色
                        var player = _status.currentPhase;
                        if (get.attitude(player,target) > 0){
                            return -1;
                        }
                        else if (player.countCards('h') == 0){
                            return target.countCards('h');
                        }
                        else if (target.countCards('h') <= player.countCards('h') + 2){
                            return -1;
                        }
                        else {
                            return target.countCards('h');
                        }
                        
                    });

                    "step 1"
                    if (result.bool && result.targets.length) {
                        
                        var target = result.targets[0];
                        player.logSkill('yinyang_shoupai_caoxin',target);
                        game.log(player,'与',target,'交换了手牌');
                        event.target = target; // 保存目标
                        // player.swapHandcards(event.target);
                        var targetHand = event.target.getCards('h');
                        var playerHand = player.getCards('h');
                        player.gain(targetHand, event.target, 'draw');
                        event.target.gain(playerHand, player, 'draw');
                        game.playAudio('skill','yinyang_shoupai_caoxin'+3);
                        // player.popup(get.translation('yinyang_shoupai_caoxin'));
                        

                    } else {
                        event.finish(); // 如果未选择目标，直接结束技能流程
                    }
                },
                ai:{
                    result:{
                        player:function(player,target){
                            return target.countCards('h') - player.countCards('h')-2;
                        },
                    },
                },
                


            },

            yinyang_zhuangbei_caoxin:{
                audio:2,
                // silent:true,
                frequent:false,
                priority:11,
                prompt2:'是否选择与一名正面朝上的角色交换装备区内的牌？',
                popup:false,
                trigger:{
                    player:"phaseJieshu",
                },
                filter: function(event, player) {
                    var hasEquip = game.hasPlayer(function(current){
						return current.countCards('e') > 0;
					});
                    return hasEquip&&game.hasPlayer(function(current){
						return !current.isTurnedOver();
					});
                },
                filterTarget: function(card, player, target) {
                    return !target.isTurnedOver()&&target!=player; // 示例：目标不能是自己
                },
                content:function(){
                    "step 0"
                    // 选择一名背面朝上的角色
                    player.chooseTarget("请选择一名正面朝上的角色，与其交换装备区的牌", function(card, player, target) {
                        return target != player && !target.isTurnedOver(); // 筛选目标：背面朝上的角色，且不能是自己
                    }).set('ai', function(target) {
                        // AI 逻辑：优先选择装备牌多的角色
                        var player = _status.currentPhase;
                        if (player.getEquip('bagua')){
                            return -1;
                        }
                        else if (target.getEquip('bagua')){
                            return 10;
                        }
                        else if (target.getEquip('baiyin')&&target.isDamaged()&&
                        get.recoverEffect(target,player,player)>0){
                            return 2;
                        }
                        else if (player.getEquip('baiyin')&&player.isDamaged()&&
                        get.recoverEffect(player,target,target)>0){
                            return 2;
                        }
                        else if (get.attitude(player,target) > 0){
                            return -1;
                        }
                        else if (player.countCards('e') == 0){
                            return target.countCards('e');
                        }
                        else if (target.countCards('e') <= player.countCards('e')){
                            return -1;
                        }
                        else {
                            return target.countCards('e');
                        }
                    });

                    "step 1"
                    if (result.bool && result.targets.length) {
                        var target = result.targets[0];
                        event.target = target; // 保存目标
                        player.logSkill('yinyang_zhuangbei_caoxin',target);
                        player.swapEquip(event.target);
                        // game.playAudio('skill','yinyang_zhuangbei_caoxin'+Math.ceil(2*Math.random()));
                        // player.popup(get.translation('yinyang_zhuangbei_caoxin'));
                        
                        // game.log(player,'与'+get.translation(target)+'交换了装备牌');

                    } else {
                        event.finish(); // 如果未选择目标，直接结束技能流程
                    }
                },
                ai:{
                    result:{
                        target:function(player,target){
                            return target.countCards('e') - player.countCards('e');
                        },
                    },
                },

            },
            
            bingxian_caoxin:{
                audio:5,
                locked:true,
                forced:true,
                group:["bingxian_draw_caoxin","bingxian_discard_caoxin"],
            },

            bingxian_draw_caoxin:{
                audio:3,
                trigger:{player:'gainAfter'},
                // popup:"兵仙",
                forced:true,
                frequent:true,
                filter:function(event,player){
                    if(_status.currentPhase==player) return false;
                    return event.getParent(2).name!='bingxian_draw_caoxin';
                },
                content:function(){
                    player.draw('nodelay');
                }
            },

            bingxian_discard_caoxin:{
                audio:3,
                trigger:{
                    player:'phaseDiscardBefore',
                },
                // popup:"兵仙",
                frequent:true,
                forced:true,
                filter:function(event,player){
                    if(_status.currentPhase==player){
                        var he=player.getCards('he');
                        var bool=false;
                        player.getHistory('gain',function(evt){
                            if(!bool&&evt&&evt.cards){
                                for(var i=0;i<evt.cards.length;i++){
                                    if(he.contains(evt.cards[i])&&get.type(evt.cards[i])!='equip') {bool=true;}
                                    if (bool){break;}
                                }
                            }
                        });
                        return bool;
                    }
                    return false;
                },
                content:function(){
                    var he=player.getCards('he');
                    var list=[];
                    player.getHistory('gain',function(evt){
                        if(evt&&evt.cards){
                            for(var i=0;i<evt.cards.length;i++){
                                if(he.contains(evt.cards[i])&&get.type(evt.cards[i])!='equip') list.add(evt.cards[i]);
                            }
                        }
                    });
                    player.$throw(list);
                    player.lose(list,ui.discardPile,'visible');
                    game.log(player,'将',list,'置入弃牌堆');
                }

            },
            
            taiji_caoxin:{
                audio:8,
                group:["taiji1_caoxin","taiji2_caoxin","taiji3_caoxin","taiji4_caoxin"],
                ai:{
                    threaten:4,
                    notrick:true,
                    skillTagFilter:function(player,tag){
                        var judge_caoxin = player.storage.xinnian_caoxin&& player.storage.xinnian_caoxin>0 && player.isTurnedOver();
						if(tag=='notrick'&&judge_caoxin){
							return true;
						}
                        else if (tag=='notrick'){
                            return false;
                        }
					}
                },
            },

            taiji1_caoxin:{
                audio:2,
                trigger: {
                    player: "damageBegin4", // 当角色即将受到伤害时触发
                },
                frequent:true,
                popup:false,
                prompt2:"你即将受到伤害，是否弃一个信印记，然后翻面，令此伤害-1，并令伤害来源受到其自己造成的1点相同属性的伤害？",
                filter:function (event, player) {
					return player.storage.xinnian_caoxin&& player.storage.xinnian_caoxin>0 && !player.isTurnedOver();
				},
                content:function(event){
                    'step 0'
                    player.chooseBool(get.prompt('taiji1_caoxin'),"你即将受到伤害，是否弃一个信印记，然后翻面，令此伤害-1，并令伤害来源受到其自己造成的1点相同属性的伤害？").set('ai',function(event,player){
                        if (player.storage.xinnian_caoxin<6 &&trigger.num < player.hp){
                            return false;
                        }
                        else if (trigger.source!=undefined && get.attitude(player,trigger.source)>0&& trigger.source.hp <= 1){
                            return false;
                        }
                        else{
                            return true;
                        }

                    });
                    'step 1'
                    if (result.bool){
                        game.delay(0.8);
                        if (trigger.source!=undefined) {
                            if (trigger.nature){
                                game.log(player,'即将受到来自',trigger.source,'的'+get.cnNumber(trigger.num)+'点'+get.translation(trigger.nature)+'属性伤害');
                            }
                            else{
                                game.log(player,'即将受到来自',trigger.source,'的'+get.cnNumber(trigger.num)+'点伤害');
                            }
                        }
                        else{
                            if (trigger.nature){
                                game.log(player,'即将受到'+get.cnNumber(trigger.num)+'点'+get.translation(trigger.nature)+'属性伤害');
                            }
                            else{
                                game.log(player,'即将受到'+get.cnNumber(trigger.num)+'点伤害');
                            }
                        }
                        player.storage.xinnian_caoxin--;
                        game.log(player,'失去1个信印记');
                        player.syncStorage('xinnian_caoxin');
                        player.markSkill("xinnian_caoxin");
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    player.turnOver();
                    player.logSkill('taiji1_caoxin');
                    'step 3'
                    if (trigger.num >= 1){
                        trigger.num--;
                        if (trigger.source!=undefined) {
                            if (trigger.nature){
                                game.log(player,'令此伤害-1，并令',trigger.source,'受到其自己造成的1点'+get.translation(trigger.nature)+'属性的伤害');
                            }
                            else{
                                game.log(player,'令此伤害-1，并令',trigger.source,'受到其自己造成的1点伤害');
                            }
                            
                        }
                        else{
                            game.log(player,'令此伤害-1');
                        }
                    }
                    'step 4'
                    if (trigger.source!=undefined) {
                        player.line(trigger.source,'green');
                        if (trigger.nature){
                            // game.log(player,'令此伤害-1，并令',trigger.source,'受到其自己造成的1点'+get.translation(trigger.nature)+'属性的伤害');
                            trigger.source.damage(1,trigger.nature,trigger.source);
                        }
                        else{
                            // game.log(player,'令此伤害-1，并令',trigger.source,'受到其自己造成的1点伤害');
                            trigger.source.damage(1,trigger.source);
                            
                        }
                    }
                    else{
                        // game.log(player,'令此伤害-1');
                    }

                    
                }
            },


            taiji2_caoxin:{
                audio:2,
                trigger: {
                    target:'useCardToTarget',
                },
                frequent:true,
                popup:false,
                // prompt2:"你成为【杀】的目标，是否弃一个信印记，然后翻面并横置，将此【杀】转移给一名不为此【杀】使用者的其他角色？",
                filter:function (event, player) {
					var judge_caoxin = player.storage.xinnian_caoxin&& player.storage.xinnian_caoxin>0 && player.isTurnedOver();
                    if(event.card.name!='sha') return false;
					return game.hasPlayer(function(current){
						return current!=player&&judge_caoxin;
					});
				},
                content:function(event){
                    'step 0'
                    event.nothasShan = (player.countCards('h', 'shan') == 0);
                    event.nothasBagua = (player.countCards('e', 'bagua') == 0);
                    // 选择一名背面朝上的角色
                    player.chooseBool(get.prompt('taiji2_caoxin'),'你成为【杀】的目标，是否弃一个信印记，然后翻面并横置，将此【杀】转移给一名其他角色，可以为此【杀】使用者？').set('ai',function(player){
                        // 检查玩家是否没有【闪】且装备区没有【八卦阵】
                        if (event.nothasShan&&event.nothasBagua||(event.nothasShan&&!event.nothasBagua&&trigger.player.hasSkill('qinggang_skill'))) {
                            return true; // 满足条件，发动技能
                        }
                        return Math.random()>0.9; // 不满足条件，不发动技能
                    });
                    'step 1'
                    if (result.bool){
                        player.chooseTarget("请选择一名将此【杀】转移的目标", function(card, player, target) {
                            // var trigger=_status.event;
                            return target != player //&& target!=trigger.player; // 筛选目标
                        }).set('ai', function(target) {
                            var add = 0;
                            var player = _status.event.player;
                            if (player.hp <= 1){
                                add = 20;
                            }
                            return -get.attitude(player, target)+add;
                        });
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if (result.bool && result.targets.length) {
                        var target = result.targets[0];
                        player.storage.xinnian_caoxin--;
                        player.syncStorage('xinnian_caoxin');
                        player.markSkill('xinnian_caoxin');
                        player.turnOver();
                        if (!player.isLinked()){
                            player.link();
                            game.playAudio('skill','tiesuo');
                        }
                        player.line(target,"green");
                        var evt=trigger.getParent();
						evt.triggeredTargets2.remove(player);
						evt.targets.remove(player);
						evt.targets.push(target);
                        player.logSkill('taiji2_caoxin');
                        game.log(player,'失去1个信印记');
                        game.log(player,'将【杀】的目标转移给',target);
                        // game.playAudio('skill','taiji2_caoxin'+Math.ceil(2*Math.random()));
                        game.delay(1);
                        
                    } else {
                        event.finish(); // 如果未选择目标，直接结束技能流程
                    }
                },
                ai:{
                    expose:0.45,
                },
            },
            
            taiji3_caoxin:{
                audio:2,
                popup:false,
                silent:true,
                // skillAnimation:'epic',
				// animationColor:'water',
                trigger: {
                    target:'useCardToTarget',
                },
                frequent:true,
                filter:function (event, player) {
					var judge_caoxin = player.storage.xinnian_caoxin&& player.storage.xinnian_caoxin>0 && !player.isTurnedOver();
                    if(get.type(event.card)=='equip') {
                        return judge_caoxin;
                    }
                    else{
                        return false;
                    }
				},
                content:function(event){
                    'step 0'
                    player.chooseBool(get.prompt('taiji3_caoxin'),'你成为装备牌的目标，是否获得一个信印记，然后翻面，而后你可以选择令场上任意一名角色（包括你自己）使用这张装备牌？').set('ai',function(player){
                        return true;
                    });
                    'step 1'
                    if (result.bool){
                        player.chooseTarget("请选择一名角色，令其使用"+get.translation(trigger.card), function(card, player, target) {
                            var type=get.subtype(trigger.card);
                            return (target != player || target == player)&&!target.isDisabled(type); // 筛选目标：背面朝上的角色，且不能是自己
                        }).set('ai', function(target) {
                            return get.attitude(player, target);
                        });
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if (result.bool && result.targets.length) {
                        player.logSkill('taiji3_caoxin');
                        var target = result.targets[0];
                        player.storage.xinnian_caoxin++;
                        game.log(player,'获得1个信印记');
                        player.syncStorage('xinnian_caoxin');
                        player.markSkill('xinnian_caoxin');
                        player.turnOver();
                        player.line(target,"green");
                        var evt=trigger.getParent();
						evt.triggeredTargets2.remove(player);
						evt.targets.remove(player);
						evt.targets.push(target);
                    } else {
                        event.finish(); // 如果未选择目标，直接结束技能流程
                    }
                },

            },


            taiji4_caoxin:{
                audio:2,
                trigger: {
                    target:'useCardToTarget',
                },
                frequent:true,
                filter:function (event, player) {
					var judge_caoxin = player.storage.xinnian_caoxin&& player.storage.xinnian_caoxin>0 && player.isTurnedOver();
                    if(get.type(event.card)=='trick'&&
                    (event.card.name == 'nanman' || 
                    event.card.name == 'wanjian' || 
                    event.card.name == 'juedou'||
                    event.card.name == 'huogong'||
                    get.tag(event.card,'damage'))
                    ) {
                        return judge_caoxin;
                    }
                    else{
                        return false;
                    }
				},
                content:function(){
                    'step 0'
                    player.chooseBool(get.prompt('taiji4_caoxin'),'你成为伤害类锦囊牌的目标，是否获得一个信印记，然后翻面并横置，而后让自己不再是此牌目标？').set('ai',function(player){
                        return true;
                    });
                    'step 1'
                    if (result.bool){
                        player.storage.xinnian_caoxin++;
                        game.log(player,'获得1个信印记');
                        player.syncStorage('xinnian_caoxin');
                        player.markSkill('xinnian_caoxin');
                        player.turnOver();
                        if (!player.isLinked()){
                            player.link();
                            game.playAudio('skill','tiesuo');
                        }
                        game.log(player,'令'+get.translation(trigger.card)+'对自己无效');
                        var evt = trigger.getParent();
                        evt.triggeredTargets2.remove(player);
                        evt.targets.remove(player);
                        trigger.cancel();
                        game.delay(1);
                    }
                    
                },

            },


            kuaijiu_ding:{
                audio:8,
                trigger:{
                    player:"enterGame",
                },
                popup:false,
                marktext:"狂",
                // mark:true,
                intro:{
                    name:"狂印记",
                    content:function(storage, player) {
                        // 检查 player.storage.haoyin_tushan 是否存在，若不存在则显示为 0
                        var count = player.storage.kuaijiu_ding || 0;
                        return `${count}个`;
                    },
                },
                init:function(player){
                    player.storage.kuaijiu_ding = 0;
                    player.syncStorage('kuaijiu_ding');
                },
                // content:function(){
                //     player.markSkill("kuaijiu_ding");
                // },
                group:["kuaijiu_juedou_ding","kuaijiu_loseDamage_ding","kuaijiu_addDamage_ding"],


            },

            kuaijiu_juedou_ding:{
                audio:3,
                frequent:true,
                shaRelated:true,
                popup:false,
                trigger: { player: "chooseToRespondBegin" },
                filter: function (event, player) {
                    return event.filterCard({ name: "sha" })&& event.getParent().card &&get.name(event.getParent().card)=='juedou'; // 是否需要【杀】
                },
                content: function () {
                    "step 0"
                    player.chooseBool(get.prompt('kuaijiu_juedou_ding'),'决斗时需要你打出杀，是否获得1个狂印记，视为打出了一张杀？').set('ai',function(){
                        if (trigger.getParent()&&trigger.getParent().name == 'yunv_shashan_gui'){
                            if (get.attitude(player,trigger.getParent().player)>2){
                                return true;
                            }
                            else{
                                return false;
                            }
                        }
                        if (trigger.getParent().player&&get.attitude(player,trigger.getParent().player)>0&&Math.random()<0.99){
                            return false;
                        }
                        return (player.storage.kuaijiu_ding < player.maxHp - 1 && !player.isTurnedOver())|| player.isTurnedOver()||player.storage.kuaijiu_ding >= player.maxHp + 1;
                    });
                    "step 1"
                    if (result.bool) {

                        if (!player.storage.kuaijiu_ding){
                            player.storage.kuaijiu_ding = 0;
                        }
                        player.storage.kuaijiu_ding++;
                        player.syncStorage('kuaijiu_ding');
                        player.markSkill("kuaijiu_ding");
                        trigger.untrigger();
                        trigger.set('responded',true);
                        trigger.result={bool:true,card:{name:'sha',isCard:true}};
                        // game.playAudio('skill','kuaijiu_juedou_ding'+Math.ceil(3*Math.random()));
                        // player.popup(get.translation('kuaijiu_juedou_ding'));
                        player.logSkill('kuaijiu_juedou_ding');
                        game.log(player,'获得1个狂印记');
                    }
                },
                ai:{
                    expose:0.25,
                },
            },

            kuaijiu_loseDamage_ding:{
                audio:4,
                frequent:true,
                popup:false,
                trigger: {
                    player: "damageBegin4", // 当角色即将受到伤害时触发
                },
                filter:function (event, player) {
					return true;
				},
                content:function(){
                    "step 0"
                    player.chooseBool(get.prompt("kuaijiu_loseDamage_ding"),'你即将受到一次伤害,是否获得1个狂印记，令此次伤害值-1？').set('ai',function(){
                        return true;
                    });
                    "step 1"
                    if (result.bool) {
                        if (!player.storage.kuaijiu_ding){
                            player.storage.kuaijiu_ding = 0;
                        }
                        player.storage.kuaijiu_ding++;
                        player.syncStorage('kuaijiu_ding');
                        player.markSkill("kuaijiu_ding");
                        if(trigger.num >= 1) {
                            trigger.num--;
                        }
                        // game.playAudio('skill','kuaijiu_loseDamage_ding'+Math.ceil(2*Math.random()));
                        // player.popup(get.translation('kuaijiu_loseDamage_ding'));
                        player.logSkill('kuaijiu_loseDamage_ding');
                        game.log(player,'获得1个狂印记');
                        game.log(player,'自罚了一大杯白酒，受到伤害-1')
                    }
                }
            },

            kuaijiu_addDamage_ding:{
                audio:3,
                frequent:true,
                trigger:{source:'damageBegin1'},
                popup:false,
                filter: function (event, player) {
					return player.storage.kuaijiu_ding && player.storage.kuaijiu_ding>0; // 对所有伤害事件生效
				},
                content: function () {
                    "step 0"
                    player.chooseBool(get.prompt("kuaijiu_addDamage_ding"),'你即将造成一次伤害，是否弃1个狂印记，令此次伤害值+1？').set('ai',function(target){
                        return get.attitude(player, trigger.player) < 0;
                    });
                    "step 1"
                    if (result.bool) {
                        if (!player.storage.kuaijiu_ding){
                            player.storage.kuaijiu_ding = 0;
                        }
                        player.storage.kuaijiu_ding--;
                        player.syncStorage('kuaijiu_ding');
                        player.markSkill("kuaijiu_ding");
                        if(trigger.num >= 1) {
                            trigger.num++;
                        }
                        if (player.storage.kuaijiu_ding == 0){
                            player.unmarkSkill("kuaijiu_ding");
                        }
                        // game.playAudio('skill','kuaijiu_addDamage_ding'+Math.ceil(3*Math.random()));
                        // player.popup(get.translation('kuaijiu_addDamage_ding'));
                        player.logSkill('kuaijiu_addDamage_ding',trigger.player,'fire');
                        game.log(player,'弃置1个狂印记');
                        game.log(player,'打了个大酒嗝，泛着令人发呕的酒气，醺得',trigger.player,'难受得紧，造成伤害+1')
                    }
                },
                ai:{
                    expose:0.25,
                },

            },


            kuangyin_ding:{
                audio:2,
                frequent:true,
                popup:false,
                trigger:{target:'useCardToTarget'},
                filter:function(event,player){
					return event.player!=player&&event.card&&(get.type(event.card)=='trick')&&event.targets.length==1&&get.name(event.card)!='juedou'&&get.name(event.card)!='nanman'&&event.player.canUse({name:'juedou',isCard:true},player);
				},
                content:function(event,player){
                    "step 0"
                    player.chooseBool(get.prompt("kuangyin_ding"),'你已经成为单体非延迟类锦囊牌目标，是否将其视为决斗？你决斗时，你的手牌都可以视为杀打出。').set('ai',function(){
                        return get.attitude(trigger.player,player)<0;
                    });
                    "step 1"
                    if (result.bool) {
                        event.origin = trigger.card;
                        // var evt = trigger.getParent();
                        // evt.triggeredTargets2.remove(player);
                        // evt.targets.remove(player);
                        // trigger.cancel();
                        player.logSkill('kuangyin_ding');
                        game.log(player,'将',event.origin,'视为','#y决斗');
                        // trigger.player.useCard({name:'juedou',suit:event.origin.suit,number:event.origin.number,isCard:true,cardid:event.origin.cardid,cards:[event.origin]},player).set('audio',false);  
                        event.origin.name = 'juedou';
                        trigger.player.popup('决斗','metal');
                        trigger.player.line(player,'fire');
                        
                    }
                    else{
                        event.finish()
                    }

                },
                group:["kuangyin_sha_ding"],
                ai:{
                    expose:0.35,
					threaten:1.8,
					effect:{
						target:function(card,player,target){
                            var goon = false;
                            if (target.storage.kuaijiu_ding){
                                goon = target.storage.kuaijiu_ding > target.maxHp;
                                if (goon){
                                    if((card.name == 'shunshou'|| card.name =='guohe'||card.name =='juedou'||card.name =='jiedao'||card.name =='huogong')&&(card.name!='nanman')&&(get.attitude(target,player)<0)) return 0.1-Math.random();
                                }
                                else{
                                    if((card.name == 'shunshou'|| card.name =='guohe'||card.name =='juedou'||card.name =='jiedao'||card.name =='huogong')&&(card.name!='nanman')&&(get.attitude(target,player)<0)) return 0.2-Math.random();
                                }
                            }
						}
					},
				},

            },

            kuangyin_sha_ding:{
                audio:2,
                enable:'chooseToRespond',
                filter:function(event, player){
                    return event.filterCard({ name: "sha" })&& event.getParent().card &&get.name(event.getParent().card)=='juedou';
                },
                filterCard:function(card,player){
					return true;
				},
                position:'h',
                viewAs:{name:'sha'},
                check:function(card){return 8-get.value(card)},
            },

            yujin_ding:{
                audio:6,
                silent:true,
                group:['yujin_animation_ding'],
                ai:{
                    neg:true,
                },
            },

            yujin_animation_ding:{
                silent:true,
                audio:2,
                skillAnimation:"epic",
                animationColor:"fire",
                trigger:{
                    player:"phaseZhunbei",
                },
                forced:true,
                filter:function(event,player){
                    return player.storage.kuaijiu_ding && player.storage.kuaijiu_ding > 0;
                },
                content:function(event,player){
                    "step 0"
                    if (player.storage.kuaijiu_ding < player.maxHp){
                        player.storage.kuaijiu_ding = 0;
                        game.log(player,'清除所有狂印记');
                        player.syncStorage('kuaijiu_ding');
                        player.unmarkSkill('kuaijiu_ding');
                        game.playAudio('skill','yujin_success_ding'+Math.ceil(2*Math.random()));
                        player.logSkill('yujin_animation_ding');
                        event.finish();
                    }
                    else if (player.storage.kuaijiu_ding > 2*player.maxHp){
                        var num = player.storage.kuaijiu_ding;// - player.hp;
                        player.storage.kuaijiu_ding = 0;
                        game.log(player,'清除所有狂印记');
                        player.syncStorage('kuaijiu_ding');
                        player.unmarkSkill('kuaijiu_ding');
                        player.damage(num);
                        game.playAudio('skill','yujin_failure_ding'+Math.ceil(2*Math.random()));
                        player.logSkill('yujin_animation_ding');
                        game.log(player,'喝酒实在是喝多了，胴体撑挺不住，吐得昏天黑地');
                        event.finish();
                    }
                    "step 1"
                    if (player.storage.kuaijiu_ding >= player.maxHp && player.storage.kuaijiu_ding <= 2*player.maxHp){
                        game.playAudio('skill','yujin_judge_ding'+Math.ceil(2*Math.random()));
                        player.logSkill('yujin_animation_ding');
                        player.judge(function (card) {
                            if(get.suit(card)=='heart'){
                                return 10;
                            } 
                            else{
                                return -2;
                            }
                        });
                    }
                   
                   "step 2"
                   if (result.card&&result.bool) {
                        player.storage.kuaijiu_ding = 0;
                        game.log(player,'清除所有狂印记');
                        player.syncStorage('kuaijiu_ding');
                        player.unmarkSkill('kuaijiu_ding');
                        game.playAudio('skill','yujin_success_ding'+Math.ceil(2*Math.random()));
                        player.logSkill('yujin_animation_ding');
                        event.finish();
                    }
                    else{
                        var num = player.storage.kuaijiu_ding;// - player.hp;
                        player.storage.kuaijiu_ding = 0;
                        game.log(player,'清除所有狂印记');
                        player.syncStorage('kuaijiu_ding');
                        player.unmarkSkill('kuaijiu_ding');
                        player.damage(num);
                        game.playAudio('skill','yujin_failure_ding'+Math.ceil(2*Math.random()));
                        player.logSkill('yujin_animation_ding');
                        game.log(player,'喝酒实在是喝多了，胴体撑挺不住，吐得昏天黑地');
                        event.finish();
                    }

                },

            },

            fenfen_ding:{
                audio:4,
                group:["fenfen_juedou_ding","fenfen_damaged_ding"],
                ai:{
                    threaten:0.3,
                },
            },

            fenfen_juedou_ding:{
                audio:2,
                trigger: {
                    player: ['turnOverAfter', 'dyingAfter'], // 翻回正面或脱离濒死时触发
                },
                filter: function (event, player) {
                    // 检查是否满足触发条件
                    return (event.name == 'turnOver' && !player.isTurnedOver()) || (event.name == 'dying' && player.hp > 0);
                },
                frequent:false,
                popup:false,
                direct:true,
                content: function () {
                    "step 0";
                    // 询问是否发动技能
                    player.chooseTarget(get.prompt2('fenfen_ding'),function (card, player, target) {
                        return player != target; // 目标不能是自己
                    }).set('ai', function (target) {
                        // AI 判断优先选择敌人
                        if (target.hasSkillTag('forbidNoNumber',true,_status.event.player)||target.hasSkillTag('forbidNoSuit')){
                            return 0;
                        }
                        return get.effect(target,{name:'juedou'},player)+8;
                    });
                    "step 1";
                    if (result.bool && result.targets.length) {
                        var target = result.targets[0];
                        // 视为对目标使用了一张【决斗】
                        player.useCard({ name: 'juedou', isCard: true ,cardid:'fenfen_juedou_ding_id'}, target).set('skill','fenfen_juedou_ding');
                        // game.playAudio('skill','fenfen_ding'+Math.ceil(2*Math.random()));
                        // player.logSkill('fenfen_juedou_ding');
                    }
                },
                ai:{
                    expose:0.35,
                },

            },

            fenfen_damaged_ding:{
                audio:2,
				trigger:{player:'damageEnd'},
                frequent:true,
                popup:false,
                filter:function(event,player){
                    return !player.isTurnedOver();
                },
                content:function(){
                    "step 0"
                    player.chooseBool(get.prompt("fenfen_damaged_ding"),'你受到伤害，是否翻面，然后摸两张牌？').set('ai',function(){
                        return player.storage.kuaijiu_ding >= player.maxHp;
                    });
                    "step 1"
                    if (result.bool) {
                        player.turnOver();
                        player.draw(2);
                        // game.playAudio('skill','fenfen_damaged_ding'+Math.ceil(2*Math.random()));
                        player.logSkill('fenfen_damaged_ding');
                        game.log(player,'喝得烂醉如泥，丑态百出地趴翻在地，被人架了出去');
                    }
                },
            },


            rongyan_yan:{
                audio:6,
                group:['rongyan_gain_yan','rongyan_huo_yan','rongyan_save_yan'],
                ai:{
                    // expose:0.5,
                    maixie:true,
                    "maixie_hp":true,
                },

            },

            rongyan_gain_yan:{
                audio:2,
                popup:false,
                trigger:{
                    player:['enterGame','damageEnd'],
                },
                marktext:"炎",
                intro:{
                    name:"炎印记",
                    content:function(storage, player) {
                        // 检查 player.storage.haoyin_tushan 是否存在，若不存在则显示为 0
                        var count = player.storage.rongyan_gain_yan || 0;
                        return `${count}个`;
                    },
                },
                prompt:"是否发动【熔炎】？",
                prompt2:"你每受到一次伤害，可获得一个炎印记。",
                init:function(player){
                    player.storage.rongyan_gain_yan = 0;
                    player.syncStorage('rongyan_gain_yan');
                },
                filter:function(event,player){
                    return true;
                },
                content:function(event){
                    if (trigger.name != "enterGame"){
                        if (!player.storage.rongyan_gain_yan){
                            player.storage.rongyan_gain_yan = 1;
                            
                            player.syncStorage('rongyan_gain_yan');
                        }
                        else {
                            player.storage.rongyan_gain_yan++;
                            player.syncStorage('rongyan_gain_yan');
                        }
                        player.markSkill('rongyan_gain_yan');
                        // game.playAudio('skill','rongyan_gain_yan'+Math.ceil(2*Math.random()));
                        player.logSkill('rongyan_gain_yan');
                        game.log(player,'获得1个炎印记');
                    }
                    
                },
            },

            rongyan_huo_silent_yan:{
                audio:false,
            },

            rongyan_huo_yan:{
                audio:2,
                frequent:true,
                popup:false,
                trigger:{
                    source:'damageBegin1',
                    player: "damageBegin1",
                },
                filter:function(event,player){
                    return player.storage.rongyan_gain_yan&&(player.storage.rongyan_gain_yan > 0)&&event.nature!='fire';
                },
                content:function(event){
                    "step 0"
                    player.chooseBool(get.prompt("rongyan_huo_yan"),'你即将造成或受到一次伤害，是否弃一个炎印记，令此伤害为火焰伤害，若伤害的目标没有横置，则横置该目标？').set('ai',function(target){
                        if (trigger.player == player){
                            if (trigger.num >= player.hp - 1 && player.storage.rongyan_gain_yan == 1){
                                return false;
                            }
                            else{
                                return true;
                            }
                        }
                        else{
                            if (trigger.player.countCards('e', 'tengjia')&&get.attitude(trigger.player,player) < 0){
                                return true;
                            }
                            else{
                                return false;
                            }
                        }
                    });
                    "step 1"
                    if (result.bool) {
                        trigger.nature = 'fire';
                        if (!trigger.player.isLinked()){
                            trigger.player.link();
                            game.playAudio('skill','tiesuo');
                        }
                        player.storage.rongyan_gain_yan--;
                        game.log(player,'失去1个炎印记');
                        player.syncStorage('rongyan_gain_yan');
                        if (player.storage.rongyan_gain_yan == 0){
                            player.unmarkSkill("rongyan_gain_yan");
                        }
                        else{
                            player.markSkill("rongyan_gain_yan");
                        }
                        if (trigger.player == player){
                            game.playAudio('skill','rongyan_huo_yan'+1);
                        }
                        else{
                            game.playAudio('skill','rongyan_huo_yan'+2);
                            player.line(trigger.player,'fire');

                        }
                        
                        player.logSkill('rongyan_huo_silent_yan');
                        game.log(player,'令此伤害为火焰伤害，并横置伤害目标');
                    }
                }
            },

            rongyan_save_yan:{
                audio:2,
                frequent:true,
                popup:false,
                trigger:{
                    global:"dying",
                },
                filter:function(event,player){
                    return event.player.hp<=0 && event.player.maxHp > 0 && player.storage.rongyan_gain_yan&&(player.storage.rongyan_gain_yan > 0);
                },
                content:function(event,player){
                    "step 0"
                    player.chooseBool(get.prompt("rongyan_save_yan"),'有角色濒死，是否弃一个炎印记令其减一点体力上限，然后回满体力？注意，若该名角色不为你，则你也需要减一点体力上限。').set('ai',function(target){
                        if (trigger.player == player){
                            if (player.maxHp > 1) {
                                return true;
                            }
                            else{
                                return false;
                            }
                            
                        }
                        else{
                            if (player.maxHp <= 1){
                                return false;
                            } 
                            if (get.attitude(player,trigger.player) - 5 > 0){
                                if (trigger.player.maxHp > 1) {
                                    return true;
                                }
                                else{
                                    return false;
                                }
                            }
                            else if (get.attitude(player,trigger.player) < 0 && trigger.player.maxHp <= 1){
                                return true;
                            }
                            else{
                                return false;
                            }
                        }
                    });
                    "step 1"
                    if (result.bool) {
                        game.log(player,'失去1个炎印记');
                        player.logSkill('rongyan_save_yan');
                        player.storage.rongyan_gain_yan--;
                        player.syncStorage('rongyan_gain_yan');
                        if (trigger.player == player){
                            game.log(player,'以减一点体力上限为代价，回满体力');
                        }
                        else{
                            game.log(player,'令濒死角色',trigger.player,'以减一点体力上限为代价，回满体力');
                        }
                        if (player.storage.rongyan_gain_yan == 0){
                            player.unmarkSkill("rongyan_gain_yan");
                        }
                        else{
                            player.markSkill("rongyan_gain_yan");
                        }

                        trigger.player.loseMaxHp();
                        trigger.player.recover(trigger.player.maxHp - trigger.player.hp);
                        if (trigger.player != player) {
                            player.loseMaxHp();
                            player.line(trigger.player,'green');
                        }
                        
                    }
                },
                ai:{
                    expose:0.65,
                },
            },

            
            longquan_yan:{
                audio:2,
                usable:1,
                skillAnimation:true,
                animationColor:'soil',
                trigger:{
                    player:"useCard",
                },
                check:function(event,player){
                    var targets = game.filterPlayer();
                    targets.remove(player);
                    var effect=0;
                    for(var i=0;i<targets.length;i++){
                        effect+=get.effect(targets[i],{name:'sha'},player);
                    }
                    if(get.mode()=='identity'){
                        if(player.hasUnknown(4)) return true;
                    }
                    return effect > 0 || Math.random() < 0.2;
                },
                filter:function(event,player){                    
                    return get.name(event.card)=='sha' && player==_status.currentPhase;
                },
                content:function(event){
                    "step 0"
                    //改变背景
                    player.storage.longquan_turnOver_yan = game.getUpperBackgroundName('',player);
                    player.syncStorage('longquan_turnOver_yan');
                    game.createClearBackground('huoshan_bg',player);

                    //效果
                    var cardNum = player.countCards('he');
                    player.discard(player.getCards('he'));
                    player.draw(cardNum);
                    "step 1"
                    player.line(trigger.targets[0],'fire');
                    var has=game.hasPlayer(function(current){
                        if (!trigger.targets.contains(current)&&current!=player&&player.canUse(trigger.card,current,false)){
                            trigger.targets.push(current);
                            player.line(current,'fire');   
                        }
                    });
                    "step 2"
                    if (trigger.card.cardid){
                        player.storage.longquan_yan = trigger.card.cardid;
                    }
                    else if (trigger.card.cards&&trigger.card.cards.length>0&&trigger.card.cards[0].cardid){
                        player.storage.longquan_yan = trigger.card.cards[0].cardid;
                    }
                    else{
                        trigger.card.cardid = 'longquan_id';
                        player.storage.longquan_yan = 'longquan_id';
                    }
                    player.syncStorage('longquan_yan');
                    if (!player.hasSkill("longquan_turnOver_yan")){
                        player.addSkill("longquan_turnOver_yan");
                    }
                    
                },

                ai:{
                    threaten:2,
                },

                group:"longquan_turnOver_yan",
            },

            longquan_turnOver_yan:{
                silent:true,
                forced:true,
                trigger:{
                    player:"useCardAfter",
                },
                filter:function(event,player){
                    if (event.card.cardid){
                        return event.card.cardid&& player.storage.longquan_yan && player.storage.longquan_yan == event.card.cardid&&get.name(event.card) == 'sha' && player==_status.currentPhase;
                    }
                    else if (event.card.cards&&event.card.cards.length>0&&event.card.cards[0].cardid){
                        return event.card.cards[0].cardid&& player.storage.longquan_yan && player.storage.longquan_yan == event.card.cards[0].cardid&&get.name(event.card) == 'sha' && player==_status.currentPhase;
                    }
                    else{
                        return player.storage.longquan_yan && player.storage.longquan_yan == 'longquan_id'&&get.name(event.card) == 'sha' && player==_status.currentPhase;
                    }
                    
                },
                content:function(event){
                    'step 0'
                    player.turnOver();
                    player.storage.longquan_yan = '';
                    player.syncStorage('longquan_yan');
                    'step 1'
                    //改回背景
                    game.createClearBackground(player.storage.longquan_turnOver_yan,player);
                    game.delay(0.5);
                },
            },

            yuzhong_yan:{
                audio:2,
                forced:true,
                locked:true,
                group:["yuzhong_zhu_yan","yuzhong_fix_yan","yuzhong_attack_yan","yuzhong_damage_yan"],
            },

            yuzhong_zhu_yan:{
				ai:{
					neg:true
				},
                forced:true,
				init:function(player){
					if(player.isZhu){
						player.hp--;
                        player.maxHp--;
						player.update();
                        // game.playAudio('skill','yuzhong_yan'+Math.ceil(2*Math.random()));
                        player.logSkill('yuzhong_yan');
                        game.log(player,'做主公，不增加体力上限');
					}
				}
			},
            
            yuzhong_fix_yan:{
				audio:false,
                forced:true,
                locked:true,
                direct:true,
                trigger:{
                    player:["judgeBegin","judgeEnd"],
                },
                init:function(player){
                    player.storage.yuzhong_fix_yan = 1;
                    player.syncStorage('yuzhong_fix_yan');
                },
				filter:function(event,player){
                    return true;
                },
                content(event){
                    if (!player.storage.yuzhong_fix_yan){
                        player.storage.yuzhong_fix_yan = 1;
                        player.syncStorage('yuzhong_fix_yan');
                    }
                    
                    var has=game.hasPlayer(function(current){
                        if (current.hasSkill('yuzhong_panding_yan')){
                            // console.log("yuzhong去了呀");
                            current.removeSkill('yuzhong_panding_yan');
                            if (player.storage.yuzhong_fix_yan == 2){
                                player.storage.yuzhong_fix_yan = 1;
                                player.syncStorage('yuzhong_fix_yan');
                            }
                        }else{
                            // console.log("yuzhong加了呀");
                            current.addTempSkill('yuzhong_panding_yan','phaseBefore');
                            if (player.storage.yuzhong_fix_yan == 1){
                                player.storage.yuzhong_fix_yan = 2;
                                player.syncStorage('yuzhong_fix_yan');
                                player.popup('yuzhong_yan');
                                game.playAudio('skill','yuzhong_yan'+Math.ceil(2*Math.random()));
                                game.log(player,"发动了","#g【愚忠】","，判定牌不能被修改或无效。");
                            }
                        }
                        
                    });
                    
                    
                },
			},

            yuzhong_panding_yan:{
                init:function(player,skill){
					var skills=player.getSkills(true,false);
                    var skills_quan=player.getSkills();
					for(var i=0;i<skills.length;i++){
						if(get.is.locked(skills[i])||(get.tag(skills_quan[i],'rejudge',player)==undefined)||lib.skill[skills[i]].charlotte){
							skills.splice(i,1);
                            skills_quan.splice(i,1);
                            i--;
						}
					}
					player.disableSkill(skill,skills);
				},
				onremove:function(player,skill){
					player.enableSkill(skill);
				},
				locked:true,
				charlotte:true,
				mark:false,
                silent:true,
				intro:{
					content:function(storage,player,skill){
						var list=[];
						for(var i in player.disabledSkills){
							if(player.disabledSkills[i].contains(skill)){
								list.push(i)
							}
						}
						if(list.length){
							var str='失效技能：';
							for(var i=0;i<list.length;i++){
								if(lib.translate[list[i]+'_info']){
									str+=get.translation(list[i])+'、';
								}
							}
							return str.slice(0,str.length-1);
						}
					}
				},

            },


            yuzhong_attack_yan:{
                // audio:'yuzhong_yan',
                forced:true,
                locked:true,
                popup:"愚忠",
                trigger:{
                    source:'damageBegin1',
                },
                filter:function(event,player){
                    return true;
                },
                content(event){
                    "step 0"
                    if (!player.isTurnedOver()){
                        game.playAudio('skill','yuzhong_yan'+Math.ceil(2*Math.random()));
                        game.log(player,"正面朝上，发动技能","#g【愚忠】","，摸一张牌");
                        player.draw(1);
                        trigger.player.line(player,'fire');
                    }
                    else{
                        game.playAudio('skill','yuzhong_yan'+Math.ceil(2*Math.random()));
                        game.log(player,"背面朝上，发动技能","#g【愚忠】","，",trigger.player,"摸一张牌");
                        trigger.player.draw(1);
                        player.line(trigger.player,'fire');
                    }
                    "step 1"
                    if (trigger.player.isTurnedOver()){
                        trigger.cancel();
                        trigger.player.turnOver();
                        game.playAudio('skill','yuzhong_yan'+Math.ceil(2*Math.random()));
                        game.log(trigger.player,"背面朝上，",player,"发动技能","#g【愚忠】","，防止此伤害并令",trigger.player,"翻回正面");
                        player.line(trigger.player,'green');
                    }
                },
            },
            
            
            yuzhong_damage_yan:{
                // audio:'yuzhong_yan',
                forced:true,
                locked:true,
                popup:"愚忠",
                trigger:{
                    player:'damageBegin3',
                },
                filter:function(event,player){
                    return ((event.card && get.type(event.card, 'trick') == 'trick')||!event.card||(event.nature=='fire'&& event.notLink() && player.isLinked()));
                },
                content(event){
                    "step 0"
                    if (trigger.nature == 'fire'&& trigger.notLink() && player.isLinked()){
                        game.playAudio('skill','yuzhong_yan'+Math.ceil(2*Math.random()));
                        game.log(player,"是铁索传导的起点，火焰伤害+1");
                        trigger.num++;
                    }
                    "step 1"
                    if (trigger.card && get.type(trigger.card, 'trick') == 'trick'){
                        game.playAudio('skill','yuzhong_yan'+Math.ceil(2*Math.random()));
                        game.log(player,"受到锦囊牌伤害+1");
                        trigger.num++;
                    }
                    else if (!trigger.card){
                        game.playAudio('skill','yuzhong_yan'+Math.ceil(2*Math.random()));
                        game.log(player,"受到非卡牌伤害-1");
                        trigger.num--;
                    }
                    
                },

            },


            
            fanyou_yan:{
                audio:5,
                group:['fanyou_turnover_yan','fanyou_damage_yan','fanyou_give_yan'],

            },

            fanyou_turnover_yan:{
                popup:false,
                audio:2,
                frequent:true,
                trigger:{
                    player:"turnOverAfter",
                },
                filter:function(event,player){
                    return !player.isTurnedOver()&&game.hasPlayer(function(current){return !current.isLinked();});
                },
                content:function(){
                    "step 0"
                    player.chooseTarget(get.prompt('fanyou_yan'),'你从背面翻回正面，可以选择横置一名角色。',function(card,player,target){
                        return !target.isLinked();
                }).set('ai',function(target){     
                        return -get.attitude(player,target);            
                });  

                    "step 1"
                    if(result.bool){
						result.targets[0].link();
                        // game.playAudio('skill','fanyou_yan'+Math.ceil(2*Math.random()));
                        player.logSkill('fanyou_turnover_yan',result.targets[0]);
                        // player.line(result.targets[0],'green');
					}
                },
                ai:{
                    expose:0.1,
                },
            },

            fanyou_damage_yan:{
                popup:false,
                audio:2,
                trigger:{
                    player:"damageBegin2",
                },
                frequent:true,
                filter:function(event,player){
                    return true;
                },
                multitarget:true,
				multiline:true,
                content:function(event){
                    "step 0"
                    player.chooseTarget(get.prompt('fanyou_yan'),'你即将受到伤害，可以选择至多X名角色，令其中横置的角色解除横置，未横置的角色则将其横置，X为你当前的体力值。',[1,player.hp],function(card,player,target){
                        return true;
                }).set('ai',function(target){    
                        if (target == trigger.player){
                            if (trigger.nature == 'fire' || trigger.nature == 'fire'){
                                if (target.isLinked()){
                                    return -100;
                                }
                                else {
                                    return 100;
                                }
                            }
                            else {
                                if (!target.isLinked()){
                                    return -100;
                                }
                                else {
                                    return 100;
                                }
                            }
                        }
                        else if (target.isLinked()){
                            return get.attitude(player,target);
                        }
                        else{
                            return -get.attitude(player,target);
                        }            
                });  
                    "step 1"
                    if (result.bool){
                        player.logSkill('fanyou_damage_yan');
                        for (var i = 0; i < result.targets.length; i++) {
                            result.targets[i].link();
                            game.playAudio('skill','tiesuo');
                            // game.playAudio('skill','fanyou_yan'+(Math.ceil(2*Math.random())+2));
                            game.log(player,"对",result.targets[i],"使用了技能","#g【"+get.translation('fanyou_damage_yan')+"】");
                            player.line(result.targets[i],'green');
                            game.delay();
                        }
                    }
                    else {
                        event.finish();
                    }

                },

                ai:{
                    expose:0.35,
                },

            },

            fanyou_give_yan:{
                audio:1,
                trigger:{
                    player:"gainAfter",
                },
                frequent:true,
                popup:false,
                prompt:"泛友",
                prompt2:"你一次性获得至少两张牌,可以选择一名其他角色，将至少两张牌交给此角色，然后你摸一张牌，若你给出的牌数＞你的体力值，你回复一点体力并翻面。",
                filter:function(event,player){
                    if(event.name=='gain') return event.cards&&event.cards.length>1;
					return event.cards2&&event.cards2.length>1;
                },
                content:function(event){
					'step 0'
					player.chooseCardTarget({
						position:'he',
						filterCard:true,
						selectCard:[2,Infinity],
						filterTarget:function(card,player,target){
							return player!=target;
						},
						ai1:function(card){
                            if (_status.event.player.isTurnedOver()&&(_status.event.player.countCards('he')>_status.event.player.hp)){
                                if (_status.event.player.countCards('h')-_status.event.player.hp - 1 > 0){
                                    return (_status.event.player.countCards('h')-_status.event.player.hp - 1)*0.5+2 + _status.event.player.hp - ui.selected.cards.length;
                                }
                                else{
                                    return 2 + _status.event.player.hp - ui.selected.cards.length;
                                }
                            }
                            else{
                                return Math.min(2.5,_status.event.player.hp+0.5) - ui.selected.cards.length - Math.random()*1.5;
                            }
						},
						ai2:function(target){
							var att=get.attitude(_status.event.player,target);
                            if (_status.event.player.isTurnedOver()&&ui.selected.cards.length>_status.event.player.hp){
                                return att;
                            }
							if(target.countCards('h')>_status.event.player.countCards('h')) return 0;
							return att-4;
						},
						prompt:"泛友",
                        prompt2:"请选择至少两张牌，然后选择一名其他角色，将这些牌交给此角色。",
					});

                    "step 1"
                    if(result.bool){
						var target=result.targets[0];
						var cards=result.cards;
                        target.gain(cards,player,'giveAuto','bySelf');
                        // target.gain(cards,player,'draw');
                        // target.gain(cards,player,'give');
                        player.line(target,'green');
                        player.draw(1);
                        if(cards.length > player.hp){
                            player.recover(1);
                            player.turnOver();
                        }
                        // game.playAudio('skill','fanyou_yan'+5);
						player.logSkill('fanyou_give_yan',target);
	
					}
				},
                ai:{
                    threaten:0.7,
                    expose:0.25,
                },

            },



            mingcha_quan:{
                audio:2,
                forced:true,
                locked:true,
                group:['mingcha_sha_quan','mingcha_trick_quan','mingcha_remove_quan','mingcha_wuxie_quan','mingcha_heitrick_quan','mingcha_effect'],
                ai:{
                    threaten:1.5,
                },

            },

            mingcha_effect:{
                audio:false,
                silent:true,
                popup:false,
                direct:true,
                trigger:{
                    target:"shaBefore",
                },
                forced:true,
                filter:function(event,player){
                    return false;
                },
                content:function(event){
                    event.finish();
                },
                ai:{
                    effect:{
                        target:function(card,player,target){
                            if (get.type(card)=='trick'&&get.color(card)!='black'&&target!=player){
                                return 'zerotarget';
                            }
                            
                        },
                    },
                },
            },

            mingcha_sha_quan:{
                popup:false,
				forced:true,
                shaRelated:true,
                trigger:{
                    player:['judgeAfter',"useCard"],
                },
                filter:function(event,player){
                    if (event.name != 'judge'){
                        return event.card&&event.cards.length>0&&event.card.name=='sha'&&(get.suit(event.cards[0])=='club'||get.suit(event.cards[0])=='spade');
                    }
                    else{
                        if (event.result){
                            return event.result.name == "sha"&&(get.suit(event.result.card) == 'spade' || get.suit(event.result.card) == 'club');
                        }
                        else{
                            return false;
                        }
                    }
                    
                },
                content:function(event){
                    player.logSkill('mingcha_quan');
                    game.log(player,"发动技能","#g【明察】","，将花色视为","#y"+"♦");
                },
                mod:{
					suit:function(card,suit){
						if(card.name == 'sha'&&(suit=='spade'||suit=='club')) return 'diamond';
					}
				}

            },

            mingcha_trick_quan:{
				// audio:2,
                mark:true,
                popup:false,
                locked:true,
				forced:true,
				trigger:{
					player:["useCard","respond"],
				},
				filter:function(event,player){
					return event.card&&(get.type(event.card)=='trick')&&game.hasPlayer(function(current){
						return current!=player;
					});
				},
				content:function(event){
                    player.logSkill('mingcha_quan');
                    game.log(player,'的非延迟锦囊牌无法被','#y【无懈可击】','响应');
                    if (trigger.card.name!='wuxie'){
                        var has=game.hasPlayer(function(current){
                            if (!current.hasSkill('mingcha_disable_quan')){
                                // console.log("加了呀");
                                current.addTempSkill('mingcha_disable_quan');
                                if (trigger.card.cardid){
                                    player.storage.mingcha_remove_quan = trigger.card.cardid;
                                    player.syncStorage('mingcha_remove_quan');
                                }
                                else {
                                    trigger.card.cardid = 'mingcha_remove_quan_id';
                                    player.storage.mingcha_remove_quan = trigger.card.cardid;
                                    player.syncStorage('mingcha_remove_quan');
                                }
                            }
                            else{
    
                            }
                            
                        });
                    }
                    else{
                        trigger.directHit.addArray(game.filterPlayer(function(current){
                            return current!=player||current == player;
                        }));
                    }
                    
				},
                
			},

            mingcha_remove_quan:{
                silent:true,
                popup:false,
                forced:true,
				trigger:{
					player:["useCardAfter","respondAfter",'dieBegin'],
				},
				filter:function(event,player){
                    if (event.name!='die'){
                        return event.card&&(player.storage.mingcha_remove_quan&&event.card.cardid == player.storage.mingcha_remove_quan)&&game.hasPlayer(function(current){
                            return current!=player;
                        });
                    }
                    else{
                        return true;
                    }
					
				},
				content:function(){
                    var has=game.hasPlayer(function(current){
                        if (current.hasSkill('mingcha_disable_quan')){
                            // console.log("去了呀");
                            current.removeSkill('mingcha_disable_quan');
                        }
                        else{

                        }
                        
                    });
				},
            },



            mingcha_disable_quan:{
                // mark:true,
                // marktext:"无",
                // intro:{
                //     name:'无懈',
                // },
                silent:true,
                forced:true,
                // filter:function(event,player){
                //     return true;
                // },

                mod:{
					cardEnabled2:function(card,player){
                        if(card.name=='wuxie') return false;
                    },
				},
            },

            mingcha_wuxie_quan:{
                trigger:{
                    global:["useCard","respond"],
                },
                filter:function(event,player){
                    return event.card&&event.card.name=='wuxie';
                },
                forced:true,
                frequent:true,
                direct:false,
                popup:false,
                content:function(){
                    player.logSkill('mingcha_quan');
                    player.draw(); // 玩家摸一张牌
                },
                ai:{
                    threaten:1.0,
                },
            },


            mingcha_heitrick_quan:{
                forced:true,
                direct:true,
                trigger: {
                    target:'useCardToTarget',
                },
                frequent:true,
                filter:function (event, player) {
                    if(event.card&&get.type(event.card)=='trick'&&get.color(event.card)!='black'&&event.player&&event.player!=player){
                        return true;
                    }
                    else{
                        return false;
                    }
				},
                content:function(){
                    player.logSkill('mingcha_quan');
                    game.log(player,'成为非黑色非延迟锦囊牌的目标，取消之，并摸一张牌');
                    var evt = trigger.getParent();
                    evt.triggeredTargets2.remove(player);
                    evt.targets.remove(player);
                    trigger.cancel();
                    player.draw();
                    
                },
            },


            
            xianfu_quan:{
                audio:2,
                skillAnimation:true,
                animationColor:"wood",
                trigger:{
                    global:["phaseJieshu","turnOverAfter"],
                },
                popup:false,
                frequent:true,
                filter:function(event,player){
                    if (event.player.hasSkill("xianfu_addPhase_quan")){
                        return false;
                    }
                    else if (event.name == "phase" && event.player.getHistory('skipped').contains('phaseUse')&&
                    event.player.getHistory('skipped').contains('phaseDraw')){
                        return player.countCards('he') >= 2;
                    }
                    else if (event.name == 'turnOver' && !event.player.isTurnedOver()){
                        return player.countCards('he') >= 2;
                    }
                    else{
                        return false;
                    }
                },
                content:function(event){
                    "step 0"
                    player.chooseBool(get.prompt('xianfu_quan'),"你可以弃两张牌，令"+get.translation(trigger.player)+"进行一个额外的回合。").set("ai", function () {
                        return get.attitude(player,trigger.player)>1;
                    });
                    "step 1"
                    if(result.bool){
                        // 玩家选择发动技能
                        player.chooseToDiscard(2,true,'he').set('ai',function(card){
                            return 6-get.value(card);
                        });
                         
                    }
                    "step 2"
                    if(result.bool){
                        // 显示技能触发信息
                        player.logSkill('xianfu_quan',trigger.player);
                        // trigger.player.storage.xianfu_player = player;
                        // if (player!=trigger.player){
                        //     player.line(trigger.player,"green");
                        // }
                        trigger.player.storage.xianfu_addPhase_quan=player;
                        // trigger.player.storage.xianfu_addPhase_count=1;
                        game.log(trigger.player,'获得一个额外的回合');
                        trigger.player.addSkill("xianfu_addPhase_quan");
                        // trigger.player.addSkill("xianfu_removeAddPhase_quan");
                    }
                },
                ai:{
                    threaten:5.3,
                    expose:0.75,
                },
            },


            xianfu_addPhase_quan:{
                popup:false,
                priority:200,
                firstDo:true,
                trigger:{
                    global:["phaseAfter","phaseBefore"],//,"turnOverBefore"],
                    player:"phaseLoop",
                },
                forced:true,
                mark:'character',
                // marktext:"全",
                intro:{
                    name2:"贤辅",
                    content:"获得一个额外回合",
                },
                
                filter:function(event,player){
                    return true;
                },
                content:function(event){
                    "step 0"
                    // console.log("information");
                    // console.log("_status.event.getParent('phase'):");
                    // console.log(_status.event.getParent('phase'));
                    // console.log("_status.event.parent:");
                    // console.log(_status.event.parent);
                    // console.log("_status.event.parent.next:");
                    // console.log(_status.event.parent.next);
                    // console.log("_status.event:");
                    // console.log(_status.event);
                    // console.log("event:");
                    // console.log(event);
                    // console.log("player:");
                    // console.log(player);

                    // player.insertPhase(null,true);
                    player.popup(get.translation("xianfu_quan"));
                    game.playAudio('skill','huaxiang'+1);

                    // var evt=_status.event.getParent('phase');
                    var evt = trigger;
                    
                    var next;
                    next=game.createEvent('phase',null,evt);
                    next.player=player;
                    next.skill='xianfu_addPhase_quan';
                    next.setContent('phase');
                    event.next1 = next;
                    

                    "step 1"
                    player.removeSkill('xianfu_addPhase_quan');
                    
                          
                    
                },
            },

            // xianfu_removeAddPhase_quan:{
            //     popup:false,
            //     silent:true,
            //     forced:true,
            //     trigger:{
            //         player:"phaseBegin",
            //     },
            //     filter:function(event,player){
            //         return true;
            //     },
            //     content:function(event){
            //         if (player.hasSkill('xianfu_addPhase_quan')){
            //             player.removeSkill('xianfu_addPhase_quan');
            //         }
            //     },
            // },



            
            zhongcheng_quan:{
                audio:3,
                frequent:false,
                popup:false,
                trigger:{
                    player:"phaseDiscardEnd",
                },
                filter:function(event,player){
                    return game.hasPlayer(function(current){ 
                        return !current.hasSkill('zhongcheng_target_quan');});
                },
                content:function(event){
                    "step 0"
                    player.chooseTarget(get.prompt(get.translation("zhongcheng_quan")),"请选择一个目标，令其获得【忠】，然后你将手牌调整至与其相同。",function(card,player,target){
						return target != player;
					}).set('ai',function(target){
                        if (get.attitude(target,player) > 0){
                            return 2 + target.countCards('h') - player.countCards('h');
                        }
                        else{
                            return -10+ target.countCards('h') -player.countCards('h');
                        }
						
					});
                    "step 1"
                    if (result.bool&& result.targets.length>0){
                        player.logSkill('zhongcheng_quan',result.targets[0]);
                        result.targets[0].storage.quanjinfa = player;
                        player.storage.zhongcheng_target = result.targets[0];
                        result.targets[0].addSkill("zhongcheng_target_quan");
                        result.targets[0].addSkill("zhongcheng_target_damage_quan");
                        player.addSkill('zhongcheng_self_quan');
                        player.addSkill('zhongcheng_self_damage_quan');
                        // player.line(result.targets[0],"green");
                        if (!player.hasSkill('zhongcheng_end_quan')){
                            player.addSkill('zhongcheng_end_quan');
                        }
                    }
                },
                ai:{
                    expose:0.7,
                    threaten:2.4,
                },
                //group:"zhongcheng_end_quan",
            },

            zhongcheng_self_quan:{
                popup:false,
                forced:true,
                locked:true,
                trigger:{
                    player:"phaseJieshu",
                },
                filter:function(event,player){
                    return player.storage.zhongcheng_target&&player.storage.zhongcheng_target.isAlive();
                },
                content:function(event){
                    var h1 = player.storage.zhongcheng_target.countCards('h');
                    var h2 = player.countCards('h');
                    if (h1 > h2){
                        player.draw(h1 - h2);
                    }
                    else if (h1 < h2){
                        player.chooseToDiscard(get.translation('zhongcheng_quan'),"请弃置"+get.cnNumber(h2-h1)+'张牌',h2-h1,true,'h').set('ai',function(card){
                            return 6-get.value(card);
                        });
                    }
                    player.logSkill("zhongcheng_quan");
                },
                //group:"zhongcheng_end_quan",

            },

            zhongcheng_self_damage_quan:{
                popup:false,
                trigger:{
                    player:"damageBegin4",
                },
                frequent:true,
                filter:function(event,player){
                    return player.storage.zhongcheng_target&&player.storage.zhongcheng_target.isAlive()&&event.num > 1;
                },
                content:function(event){
                    "step 0"
                    event.thePlayer = player.storage.zhongcheng_target;
                    player.storage.zhongcheng_target.chooseBool(get.prompt(get.translation("zhongcheng_quan")),
                    "你可以流失一点体力，使此次伤害对"+get.translation(player)+"无效。").set("ai",function(event,player){
                        var mode = get.mode();
                        if (mode =='identity'&&(trigger.player.identity=='zhu')&&(event.thePlayer.identity=='zhong')){
                            return true;
                        }
                        var binsi = false;
                        if (event.thePlayer.hp == 1 && event.thePlayer.countCards('h','tao')+event.thePlayer.countCards('h','jiu') == 0 && Math.random()<0.8){
                            binsi = true
                        }
                        return (!binsi)&&get.attitude(event.thePlayer,trigger.player)>0 &&trigger.player.hp < event.thePlayer.hp + 4;
                        // return true;
                    });
                    "step 1"
                    if (result.bool){
                        player.logSkill("zhongcheng_quan");
                        game.log(player.storage.zhongcheng_target,'愿意失去一点体力，令',player,'受到的'+get.cnNumber(trigger.num)+'点伤害无效');
                        player.storage.zhongcheng_target.line(player,"green");
                        player.storage.zhongcheng_target.loseHp();
                        trigger.num = 0;
                        trigger.cancel();
                    }
                },

            },

            


            zhongcheng_target_quan:{
                mark:true,
                marktext:"忠",
                intro:{
                    name: "忠诚",
                    content:"辅车相依，唇亡齿寒",
                },
                popup:false,
                forced:true,
                trigger:{
                    player:"phaseJieshu",
                },
                filter:function(event,player){
                    return player.storage.quanjinfa&&(player.storage.quanjinfa.countCards('h')!=player.countCards('h'));
                },
                content:function(event){
                    var h1 = player.storage.quanjinfa.countCards('h');
                    var h2 = player.countCards('h');
                    if (h1 > h2){
                        player.draw(h1 - h2);
                        player.storage.quanjinfa.line(player,'green');
                    }
                    else if (h1 < h2){
                        player.chooseToDiscard(get.translation('zhongcheng_quan'),"请弃置"+get.cnNumber(h2-h1)+'张牌',h2-h1,true,'h').set('ai',function(card){
                            return 6-get.value(card);
                        });
                        player.storage.quanjinfa.line(player,'green');
                    }
                    player.storage.quanjinfa.logSkill("zhongcheng_quan");
                },

            },

            zhongcheng_target_damage_quan:{
                popup:false,
                trigger:{
                    player:"damageBegin4",
                },
                frequent:true,
                filter:function(event,player){
                    return player.storage.quanjinfa&&event.num > 1;
                },
                content:function(event){
                    "step 0"
                    event.thePlayer = player.storage.quanjinfa;
                    player.storage.quanjinfa.chooseBool(get.prompt(get.translation("zhongcheng_quan")),
                    "你可以流失一点体力，使此次伤害对"+get.translation(player)+"无效。").set("ai",function(event,player){
                        var mode = get.mode();
                        if (mode =='identity'&&(trigger.player.identity=='zhu')&&(event.thePlayer.identity=='zhong')){
                            return true;
                        }
                        var binsi = false;
                        if (event.thePlayer.hp == 1 && event.thePlayer.countCards('h','tao')+event.thePlayer.countCards('h','jiu') == 0 && Math.random()<0.8){
                            binsi = true
                        }
                        return (!binsi)&&get.attitude(event.thePlayer,trigger.player)>0&&trigger.player.hp < event.thePlayer.hp + 4;
                        // return true;
                    });
                    "step 1"
                    if (result.bool){
                        player.storage.quanjinfa.logSkill("zhongcheng_quan");
                        game.log(player.storage.quanjinfa,'愿意失去一点体力，令',player,'受到的'+get.cnNumber(trigger.num)+'点伤害无效');
                        player.storage.quanjinfa.line(player,"green");
                        player.storage.quanjinfa.loseHp();
                        trigger.num = 0;
                        trigger.cancel();
                    }
                },
            },


            zhongcheng_end_quan:{
                silent:true,
                forced:true,
                trigger:{
                    player:["phaseDiscardBegin",'dieBegin'],
                },
                content:function(event){
                    if (player.hasSkill("zhongcheng_self_quan")){
                        player.removeSkill("zhongcheng_self_quan");
                    }
                    if (player.hasSkill("zhongcheng_self_damage_quan")){
                        player.removeSkill("zhongcheng_self_damage_quan");
                    }

                    var has=game.hasPlayer(function(current){
                        if (current.hasSkill('zhongcheng_target_quan')){
                            // console.log("yuzhong去了呀");
                            current.removeSkill('zhongcheng_target_quan');
                        }
                        if (current.hasSkill('zhongcheng_target_damage_quan')){
                            // console.log("yuzhong去了呀");
                            current.removeSkill('zhongcheng_target_damage_quan');
                        }
                        
                    });
                }

            },





            dutian_mei:{
                audio:4,
                // popup:false,
                enable:"phaseUse",
                direct:true,
                usable:1,
                priority: 15,
                skillAnimation:'epic',
				animationColor:'thunder',
                filter:function(event,player){
                    var has=game.hasPlayer(function(current){
                        return current!=player&&current.countCards('h')>=2;
                    });
                    return player.countCards('h')>=2 && has;
                },
                filterTarget:function(card,player,target){
					return (target != player && target.countCards('h')>=2);
				},
                selectCard:[2,2],
                discard:false,
                lose:false,
                filterCard:function(card){
					return true;
				},
                check:function (card){
                    var player=_status.currentPhase;
                    var addExtra = 0;
                    if (get.suit(card) == 'spade'){
                        addExtra = 4;
                    }
                    if (get.suit(card) == 'heart'){
                        if (player.hasSkill("mantian_mei")||player.hasSkill("mantian_mei_nan")){
                            addExtra = 4;
                        }else{
                            addExtra = 3;
                        }
                    }
                    if (get.suit(card) == 'diamond'){
                        if (player.hasSkill("mantian_mei")||player.hasSkill("mantian_mei_nan")){
                            addExtra = -13;
                        }else{
                            addExtra = 2;
                        }
                    }
                    if (get.suit(card) == 'club'){
                        if (player.hasSkill("mantian_mei")||player.hasSkill("mantian_mei_nan")){
                            addExtra = 4;
                        }else{
                            addExtra = 1;
                        }
                    }
                    return get.number(card)+addExtra;
                },
                selectTarget:[1,3],
                multitarget:true,
				multiline:true,
                content:function(event){
                    'step 0'
                    //改变背景
                    event.background = game.getUpperBackgroundName('',player);
                    game.createClearBackground('casino_bg',player);
                    //效果
                    game.playAudio('skill','dutian_duchang_mei'+1);
                    game.playAudio('skill','dutian_duchang_mei'+2);
                    event.playerCards = cards;
                    event.cards2 = [];
                    event.targets = targets;
                    event.loopNum = 0;
                    game.delay(0.2);
                    'step 1'
                    if (event.loopNum == 0){
                        player.logSkill('dutian_mei');
                        game.log('#g【赌天】','之下：','#y赢','，则坐拥一切！','#b输','，则万劫不复！');
                        game.log(event.targets,'身不由己地加入了赌局！');
                    }
                    game.delay();
                    // event.targets[event.loopNum].choosePlayerCard(event.targets[event.loopNum],'h',[2,2],'请选择【赌天】要展示的牌，同花色大点数胜算更高',true).set('ai',function(card){
                    event.targets[event.loopNum].chooseCard('请选择【赌天】要展示的牌，同花色大点数胜算更高','h',2,true).set('ai',function(card){
                        var addExtra = 0;
                        if (get.suit(card) == 'spade'){
                            addExtra = 4;
                        }
                        if (get.suit(card) == 'heart'){
                            if (event.targets[event.loopNum].hasSkill("mantian_mei")||event.targets[event.loopNum].hasSkill("mantian_mei_nan")){
                                addExtra = 4;
                            }else{
                                addExtra = 3;
                            }
                        }
                        if (get.suit(card) == 'diamond'){
                            if (event.targets[event.loopNum].hasSkill("mantian_mei")||event.targets[event.loopNum].hasSkill("mantian_mei_nan")){
                                addExtra = -13;
                            }else{
                                addExtra = 2;
                            }
                        }
                        if (get.suit(card) == 'club'){
                            if (event.targets[event.loopNum].hasSkill("mantian_mei")||event.targets[event.loopNum].hasSkill("mantian_mei_nan")){
                                addExtra = 4;
                            }else{
                                addExtra = 1;
                            }
                        }
                        return 100+get.number(card)+addExtra;
                    });
                    'step 2'
                    event.cards2.push(result.cards);
                    event.loopNum++;
                    if (event.loopNum == event.targets.length) event.goto(3);
                    else event.goto(1);
                    'step 3'
                    event.publicCards=[];
					if(ui.cardPile.childNodes.length<2){
						var discardcards=get.cards(2);
						game.cardsDiscard(discardcards);
					}
					for(var i=0;i<2;i++){
						if(ui.cardPile.childNodes.length>i) event.publicCards.push(ui.cardPile.childNodes[i]);
					}
                    game.playAudio('skill','dutian_kapai_mei'+Math.ceil(2*Math.random()));
                    player.showCards(event.publicCards,'公牌展示');
                    game.delay();
                    player.popup('公牌展示','metal');
                    game.log(player,"展示公牌");
                    game.delay();
                    'step 4'
                    game.playAudio('skill','dutian_kapai_mei'+Math.ceil(2*Math.random()));
                    player.showCards(event.playerCards,get.translation(player)+'的【赌天】牌展示');
                    game.delay();
                    game.delay();
                    game.delay();
                    game.delay();
                    game.delay();
                    game.delay();
                    if (player.hasSkill("mantian_mei")){
                        player.logSkill("mantian_mei");
                        game.log(player,"发动技能","#g【瞒天】","，将手牌中的","#y"+"♥","和","#y"+"♣","都视为","#y"+"♠");
                    }
                    if (player.hasSkill("mantian_mei_nan")){
                        player.logSkill("mantian_mei_nan");
                        game.log(player,"发动技能","#g【瞒天】","，将手牌中的","#y"+"♥","和","#y"+"♣","都视为","#y"+"♠");
                    }
                    event.playerPoint = 0;
                    event.playerNumber = [];
                    event.playerSuit = [];
                    var tonghua = false;
                    var shunzi = false;
                    for (var i = 0; i < 2; i++){
                        event.playerNumber.push(get.number(event.playerCards[i]));
                        event.playerSuit.push(get.suit(event.playerCards[i]));
                        event.playerNumber.push(get.number(event.publicCards[i]));
                        if (player.hasSkill('mantian_mei')){
                            if (false&&(get.suit(event.publicCards[i]) == 'heart' || get.suit(event.publicCards[i]) == 'club')){
                                event.playerSuit.push('spade');
                                player.logSkill("mantian_mei");
                                game.log(get.translation(player)+"发动技能【瞒天】，将公牌"+get.translation(event.publicCards[i])+"的花色视为♠");
                            }
                            else{
                                event.playerSuit.push(get.suit(event.publicCards[i]));
                            }
                        }
                        else if (player.hasSkill('mantian_mei_nan')){
                            if (false&&(get.suit(event.publicCards[i]) == 'heart' || get.suit(event.publicCards[i]) == 'club')){
                                event.playerSuit.push('spade');
                                player.logSkill("mantian_mei_nan");
                                game.log(get.translation(player)+"发动技能【瞒天】，将公牌"+get.translation(event.publicCards[i])+"的花色视为♠");
                            }
                            else{
                                event.playerSuit.push(get.suit(event.publicCards[i]));
                            }

                        }
                        else{
                            event.playerSuit.push(get.suit(event.publicCards[i]));
                        }
                        
                    }

                    for (var i = 0; i < 4; i++){
                        var addExtra = 0;
                        if (event.playerSuit[i] == 'spade'){
                            addExtra = 4;
                        }
                        if (event.playerSuit[i] == 'heart'){
                            addExtra = 3;
                        }
                        if (event.playerSuit[i] == 'diamond'){
                            addExtra = 2;
                        }
                        if (event.playerSuit[i] == 'club'){
                            addExtra = 1;
                        }
                        event.playerPoint = event.playerPoint + addExtra + event.playerNumber[i];
                    }

                    if (event.playerSuit[0] == event.playerSuit[1] && 
                        event.playerSuit[1] == event.playerSuit[2] &&
                        event.playerSuit[2] == event.playerSuit[3]
                    ){
                        event.playerPoint = event.playerPoint + 100;
                        player.popup('同花','water');
                        tonghua = true;
                        // game.playAudio('skill','dutian_tonghua_mei'+Math.ceil(2*Math.random()));
                        game.delay(10);
                        game.log(player,"的牌是","#g【同花】","，赌天点数","#y"+"+100","点");
                    }
                    // else{
                    //     const frequency = {};
                    //     event.playerSuit.forEach(item => {
                    //         frequency[item] = (frequency[item] || 0) + 1;
                    //     });
                    //     const maxCount = Math.max(...Object.values(frequency));
                    //     if (maxCount == 3){
                    //         event.playerPoint = event.playerPoint + 30;
                    //         player.popup('三花','water');
                    //         game.log(get.translation(player)+"的牌是【三花】，赌天点数+30点");
                    //     }
                    //     else if (maxCount == 2){
                    //         event.playerPoint = event.playerPoint + 10;
                    //         player.popup('对子','water');
                    //         game.log(get.translation(player)+"的牌是【对子】，赌天点数+10点");
                    //     }
                    //     else{

                    //     }
                    // }
                    game.delay(10);
                    event.playerNumber.sort(function(a, b) {
                        return a - b;
                    });
                    if (event.playerNumber[0] == event.playerNumber[1] - 1 && 
                        event.playerNumber[1] == event.playerNumber[2] - 1 &&
                        event.playerNumber[2] == event.playerNumber[3] - 1
                    ){
                        event.playerPoint = event.playerPoint + 100;
                        player.popup('顺子','water');
                        shunzi = true;
                        // game.playAudio('skill','dutian_shunzi_mei'+1);
                        game.delay(10);
                        game.log(player,"的牌是","#g【顺子】","，赌天点数","#y"+"+100","点");
                    }
                    else{
                        const frequency_num = {};
                        event.playerNumber.forEach(item => {
                            frequency_num[item] = (frequency_num[item] || 0) + 1;
                        });
                        const maxCount = Math.max(...Object.values(frequency_num));
                        if (maxCount == 4){
                            event.playerPoint = event.playerPoint + 120;
                            player.popup('豹子','metal');
                            game.log(player,"的牌是","#g【豹子】","，赌天点数","#y"+"+120","点");
                        }
                        // else if (maxCount == 3){
                        //     event.playerPoint = event.playerPoint + 30;
                        //     player.popup('三元','water');
                        //     game.log(get.translation(player)+"的牌是【三元】，赌天点数+30点");
                        // }
                        // else if (maxCount == 2){
                        //     event.playerPoint = event.playerPoint + 10;
                        //     player.popup('对点','water');
                        //     game.log(get.translation(player)+"的牌是【对点】，赌天点数+10点");
                        // }
                        else{

                        }
                    }
                    game.delay(10);
                    if (tonghua&&shunzi&&event.playerNumber[0] == 1 && event.playerSuit[0] == 'spade'){
                        event.playerPoint = event.playerPoint + 1000;
                        player.popup('黑Jack','thunder');
                        game.delay(20);
                        game.log(player,"的牌是","#g【黑Jack】","，赌天点数","#y"+"+1000","点！");
                    }
                    if (tonghua&&shunzi&&event.playerNumber[0] == 1 && event.playerSuit[0] == 'heart'){
                        event.playerPoint = event.playerPoint + 500;
                        player.popup('红皇后','fire');
                        game.log(player,"的牌是","#g【红皇后】","，赌天点数","#y"+"+500","点！");
                    }
                    if (tonghua&&shunzi&&event.playerNumber[0] == 1 && event.playerSuit[0] == 'diamond'){
                        event.playerPoint = event.playerPoint + 200;
                        player.popup('方天戟','soil');
                        game.log(player,"的牌是","#g【方天戟】","，赌天点数","#y"+"+200","点！");
                    }
                    if (tonghua&&shunzi&&event.playerNumber[0] == 1 && event.playerSuit[0] == 'club'){
                        event.playerPoint = event.playerPoint + 120;
                        player.popup('梅花鹿','wood');
                        game.log(player,"的牌是","#g【梅花鹿】","，赌天点数","#y"+"+120","点！");
                    }
                    game.delay(10);
                    player.popup('赌天点数','metal');
                    game.playAudio('skill','dutian_gold_mei'+Math.ceil(3*Math.random()));
                    game.delay();
                    player.popup(event.playerPoint+'点','metal');
                    game.log(player,"的赌天点数为","#y"+event.playerPoint,"点");
                    game.delay();
                    event.loopNum2 = 0;
                    event.otherPoints = [];
                    'step 5'
                    game.playAudio('skill','dutian_kapai_mei'+Math.ceil(2*Math.random()));
                    event.targets[event.loopNum2].showCards(event.cards2[event.loopNum2],get.translation(event.targets[event.loopNum2])+'的【赌天】牌展示');
                    game.delay();
                    game.delay();
                    game.delay();
                    game.delay();
                    game.delay();
                    game.delay();
                    if (event.targets[event.loopNum2].hasSkill("mantian_mei")){
                        event.targets[event.loopNum2].logSkill("mantian_mei");
                        game.log(event.targets[event.loopNum2],"发动技能","#g【瞒天】","，将手牌中的","#y"+"♥","和","#y"+"♣","都视为","#y"+"♠");
                    }
                    if (event.targets[event.loopNum2].hasSkill("mantian_mei_nan")){
                        event.targets[event.loopNum2].logSkill("mantian_mei_nan");
                        game.log(event.targets[event.loopNum2],"发动技能","#g【瞒天】","，将手牌中的","#y"+"♥","和","#y"+"♣","都视为","#y"+"♠");
                    }
                    var playerPoint = 0;
                    var playerNumber = [];
                    var playerSuit = [];
                    var TongHua = false;
                    var ShunZi = false;
                    for (var i = 0; i < 2; i++){
                        playerNumber.push(get.number(event.cards2[event.loopNum2][i]));
                        playerSuit.push(get.suit(event.cards2[event.loopNum2][i]));
                        playerNumber.push(get.number(event.publicCards[i]));
                        if (event.targets[event.loopNum2].hasSkill('mantian_mei')){
                            if (false&&(get.suit(event.publicCards[i]) == 'heart' || get.suit(event.publicCards[i]) == 'club')){
                                playerSuit.push('spade');
                                event.targets[event.loopNum2].logSkill("mantian_mei");
                                game.log(get.translation(event.targets[event.loopNum2])+"发动技能【瞒天】，将公牌"+get.translation(event.publicCards[i])+"的花色视为♠");
                            }
                            else{
                                playerSuit.push(get.suit(event.publicCards[i]));
                            }
                        }
                        else if (event.targets[event.loopNum2].hasSkill('mantian_mei_nan')){
                            if (false&&(get.suit(event.publicCards[i]) == 'heart' || get.suit(event.publicCards[i]) == 'club')){
                                playerSuit.push('spade');
                                event.targets[event.loopNum2].logSkill("mantian_mei_nan");
                                game.log(get.translation(event.targets[event.loopNum2])+"发动技能【瞒天】，将公牌"+get.translation(event.publicCards[i])+"的花色视为♠");
                            }
                            else{
                                playerSuit.push(get.suit(event.publicCards[i]));
                            }
                        }
                        else{
                            playerSuit.push(get.suit(event.publicCards[i]));
                        }
                    }
                    for (var i = 0; i < 4; i++){
                        var addExtra = 0;
                        if (playerSuit[i] == 'spade'){
                            addExtra = 4;
                        }
                        if (playerSuit[i] == 'heart'){
                            addExtra = 3;
                        }
                        if (playerSuit[i] == 'diamond'){
                            addExtra = 2;
                        }
                        if (playerSuit[i] == 'club'){
                            addExtra = 1;
                        }
                        playerPoint = playerPoint + addExtra + playerNumber[i];
                    }
                    if (playerSuit[0] == playerSuit[1] && 
                        playerSuit[1] == playerSuit[2] &&
                        playerSuit[2] == playerSuit[3]
                    ){
                        playerPoint = playerPoint + 100;
                        event.targets[event.loopNum2].popup('同花','water');
                        TongHua = true;
                        game.log(event.targets[event.loopNum2],"的牌是","#g【同花】","，赌天点数","#y"+"+100","点");
                        
                    }
                    // else{
                    //     const frequency = {};
                    //     playerSuit.forEach(item => {
                    //         frequency[item] = (frequency[item] || 0) + 1;
                    //     });
                    //     const maxCount = Math.max(...Object.values(frequency));
                    //     if (maxCount == 3){
                    //         playerPoint = playerPoint + 30;
                    //         event.targets[event.loopNum2].popup('三花','water');
                    //         game.log(get.translation(event.targets[event.loopNum2])+"的牌是【三花】，赌天点数+30点");
                    //     }
                    //     else if (maxCount == 2){
                    //         playerPoint = playerPoint + 10;
                    //         event.targets[event.loopNum2].popup('对子','water');
                    //         game.log(get.translation(event.targets[event.loopNum2])+"的牌是【对子】，赌天点数+10点");
                    //     }
                    //     else{

                    //     }
                    // }
                    game.delay();
                    playerNumber.sort(function(a, b) {
                        return a - b;
                    });
                    if (playerNumber[0] == playerNumber[1] - 1 && 
                        playerNumber[1] == playerNumber[2] - 1 &&
                        playerNumber[2] == playerNumber[3] - 1
                    ){
                        playerPoint = playerPoint + 100;
                        event.targets[event.loopNum2].popup('顺子','water');
                        ShunZi = true;
                        game.log(event.targets[event.loopNum2],"的牌是","#g【顺子】","，赌天点数","#y"+"+100","点");
                    }
                    else{
                        const frequency_num = {};
                        playerNumber.forEach(item => {
                            frequency_num[item] = (frequency_num[item] || 0) + 1;
                        });
                        const maxCount = Math.max(...Object.values(frequency_num));
                        if (maxCount == 4){
                            playerPoint = playerPoint + 120;
                            event.targets[event.loopNum2].popup('豹子','metal');
                            game.log(event.targets[event.loopNum2],"的牌是","#g【豹子】","，赌天点数","#y"+"+120","点");
                        }
                        // else if (maxCount == 3){
                        //     playerPoint = playerPoint + 30;
                        //     event.targets[event.loopNum2].popup('三元','water');
                        //     game.log(get.translation(event.targets[event.loopNum2])+"的牌是【三元】，赌天点数+30点");
                        // }
                        // else if (maxCount == 2){
                        //     playerPoint = playerPoint + 10;
                        //     event.targets[event.loopNum2].popup('对点','water');
                        //     game.log(get.translation(event.targets[event.loopNum2])+"的牌是【对点】，赌天点数+10点");
                        // }
                        else{

                        }
                    }
                    game.delay();
                    if (TongHua&&ShunZi&&playerNumber[0] == 1 && playerSuit[0] == 'spade'){
                        playerPoint = playerPoint + 1000;
                        event.targets[event.loopNum2].popup('黑Jack','thunder');
                        game.log(event.targets[event.loopNum2],"的牌是","#g【黑Jack】","，赌天点数","#y"+"+1000","点！");
                    }
                    if (TongHua&&ShunZi&&playerNumber[0] == 1 && playerSuit[0] == 'heart'){
                        playerPoint = playerPoint + 500;
                        event.targets[event.loopNum2].popup('红皇后','fire');
                        game.log(event.targets[event.loopNum2],"的牌是","#g【红皇后】","，赌天点数","#y"+"+500","点！");
                    }
                    if (TongHua&&ShunZi&&playerNumber[0] == 1 && playerSuit[0] == 'diamond'){
                        playerPoint = playerPoint + 200;
                        event.targets[event.loopNum2].popup('方天戟','soil');
                        game.log(event.targets[event.loopNum2],"的牌是","#g【方天戟】","，赌天点数","#y"+"+200","点！");
                    }
                    if (TongHua&&ShunZi&&playerNumber[0] == 1 && playerSuit[0] == 'club'){
                        playerPoint = playerPoint + 120;
                        event.targets[event.loopNum2].popup('梅花鹿','wood');
                        game.log(event.targets[event.loopNum2],"的牌是","#g【梅花鹿】","，赌天点数","#y"+"+120","点！");
                    }
                    game.delay();
                    event.targets[event.loopNum2].popup('赌天点数','metal');
                    game.playAudio('skill','dutian_gold_mei'+Math.ceil(3*Math.random()));
                    game.delay();
                    event.targets[event.loopNum2].popup(playerPoint+'点','metal');
                    event.otherPoints.push(playerPoint);
                    game.delay();
                    game.log(event.targets[event.loopNum2],"的赌天点数为","#y"+playerPoint,"点");
                    'step 6'
                    event.loopNum2++;
                    if (event.loopNum2 == event.targets.length) event.goto(7);
                    else event.goto(5);
                    'step 7'
                    //改回背景
                    if (game.getUpperBackgroundName('',player) == 'casino_bg'){
                        game.createClearBackground(event.background,player);
                    }
                    else{
                        game.createClearBackground('',player);
                    }

                    //效果
                    var subLargeIndex = 0;
                    for (var i = 1; i < event.otherPoints.length; i++){
                        if (event.otherPoints[subLargeIndex] < event.otherPoints[i]){
                            subLargeIndex = i;
                        }
                    }
                    if (event.playerPoint >= event.otherPoints[subLargeIndex]){
                        player.popup('赢','fire');
                        game.log("恭喜",player,"成为","#g【赌天】","的最后赢家！");
                        game.delay();
                        for (var i = 0; i < event.targets.length; i++){
                            event.targets[i].popup('输','water');
                            game.delay();
                        }
                        for (var i = 0; i < event.targets.length; i++){
                            var targetHand = event.targets[i].getCards('h');
                            // player.gain(targetHand, event.targets[i], 'draw');
                            player.gain(targetHand, event.targets[i], 'giveAuto','bySelf');
                            game.delay();
                            player.line(event.targets[i],'fire');
                        }
                        game.playAudio('skill','dutian_chouma_mei'+1);
                        game.delay();
                        game.delay();
                        game.playAudio('skill','dutian_win_mei'+Math.ceil(7*Math.random()));
                        game.delay();
                        game.delay();
                        for (var i = 0; i < event.targets.length; i++){
                            event.targets[i].damage(1,event.targets[i]);
                            game.delay();
                        }

                    }
                    else{
                        event.targets[subLargeIndex].popup('赢','fire');
                        game.log("恭喜",event.targets[subLargeIndex],"成为","#g【赌天】","的最后赢家！");
                        game.delay();
                        player.popup('输','water');
                        game.delay();
                        for (var i = 0; i < event.targets.length; i++){
                            if (i != subLargeIndex){
                                event.targets[i].popup('输','water');
                                game.delay();
                            }
                        }
                        
                        var playerHand = player.getCards('h');
                        // event.targets[subLargeIndex].gain(playerHand, player, 'draw');
                        event.targets[subLargeIndex].gain(playerHand, player, 'giveAuto','bySelf');
                        event.targets[subLargeIndex].line(player,'fire');
                        game.delay();
                        for (var i = 0; i < event.targets.length; i++){
                            if (i != subLargeIndex){
                                var targetHand = event.targets[i].getCards('h');
                                event.targets[subLargeIndex].gain(targetHand, event.targets[i], 'giveAuto','bySelf');
                                game.delay();
                                event.targets[subLargeIndex].line(event.targets[i],'fire');
                            }
                        }
                        game.playAudio('skill','dutian_chouma_mei'+1);
                        game.delay();
                        game.delay();
                        game.playAudio('skill','dutian_lose_mei'+Math.ceil(3*Math.random()));
                        game.delay();
                        game.delay();
                        player.damage(1,player);
                        for (var i = 0; i < event.targets.length; i++){
                            if (i != subLargeIndex){
                                event.targets[i].damage(1,event.targets[i]);
                                game.delay();
                            }
                        }
                    }
                    'step 8'
                    // ui.cardPile.insertBefore(event.publicCards[1],ui.cardPile.firstChild);
                    // game.log(get.translation(player)+"将公牌"+get.translation(event.publicCards[1])+"放回牌堆顶。");
                    // ui.cardPile.insertBefore(event.publicCards[0],ui.cardPile.firstChild);
                    // game.log(get.translation(player)+"将公牌"+get.translation(event.publicCards[0])+"放回牌堆顶。");
                    event.finish();
                },
                derivation:["dutian_rule_mei"],
                ai:{
					order:9,
                    threaten:6,
                    expose:0.6,
                    // jueqing:true,
					result:{
						target:function(player,target){
                            if (get.attitude(player,target) < 0){
                                return -100 - 18*target.countCards('h');
							    
                            }
                            else{
                                return -40*Math.random()- 10*target.countCards('h');
                            }
						}
					}
				},


            },

            dutian_mei_nan:{
                audio:4,
                mark:true,
                marktext:"天",
                intro:{
                    name:"赌天",
                    content:"拥有技能【赌天】",
                },
                direct:true,
                enable:"phaseUse",
                usable:1,
                priority: 15,
                skillAnimation:'epic',
				animationColor:'thunder',
                filter:function(event,player){
                    var has=game.hasPlayer(function(current){
                        return current!=player&&current.countCards('h')>=2;
                    });
                    return player.countCards('h')>=2 && has;
                },
                filterTarget:function(card,player,target){
					return (target != player && target.countCards('h')>=2);
				},
                selectCard:[2,2],
                discard:false,
                lose:false,
                filterCard:function(card){
					return true;
				},
                check:function (card){
                    var player=_status.currentPhase;
                    var addExtra = 0;
                    if (get.suit(card) == 'spade'){
                        addExtra = 4;
                    }
                    if (get.suit(card) == 'heart'){
                        if (player.hasSkill("mantian_mei")||player.hasSkill("mantian_mei_nan")){
                            addExtra = 4;
                        }else{
                            addExtra = 3;
                        }
                    }
                    if (get.suit(card) == 'diamond'){
                        if (player.hasSkill("mantian_mei")||player.hasSkill("mantian_mei_nan")){
                            addExtra = -13;
                        }else{
                            addExtra = 2;
                        }
                    }
                    if (get.suit(card) == 'club'){
                        if (player.hasSkill("mantian_mei")||player.hasSkill("mantian_mei_nan")){
                            addExtra = 4;
                        }else{
                            addExtra = 1;
                        }
                    }
                    return get.number(card)+addExtra;
                },
                selectTarget:[1,3],
                multitarget:true,
				multiline:true,
                content:function(event){
                    'step 0'
                    //改变背景
                    event.background = game.getUpperBackgroundName('',player);
                    game.createClearBackground('casino_bg',player);
                    //效果
                    game.playAudio('skill','dutian_duchang_mei'+1);
                    game.playAudio('skill','dutian_duchang_mei'+2);
                    event.playerCards = cards;
                    event.cards2 = [];
                    event.targets = targets;
                    event.loopNum = 0;
                    game.delay(0.2);
                    'step 1'
                    if (event.loopNum == 0){
                        player.logSkill('dutian_mei_nan');
                        game.log('#g【赌天】','之下：','#y赢','，则坐拥一切！','#b输','，则万劫不复！');
                        game.log(event.targets,'身不由己地加入了赌局！');
                    }
                    game.delay();
                    // event.targets[event.loopNum].choosePlayerCard(event.targets[event.loopNum],'h',[2,2],'请选择【赌天】要展示的牌，同花色大点数胜算更高',true).set('ai',function(card){
                    event.targets[event.loopNum].chooseCard('请选择【赌天】要展示的牌，同花色大点数胜算更高','h',2,true).set('ai',function(card){
                        var addExtra = 0;
                        if (get.suit(card) == 'spade'){
                            addExtra = 4;
                        }
                        if (get.suit(card) == 'heart'){
                            if (event.targets[event.loopNum].hasSkill("mantian_mei")||event.targets[event.loopNum].hasSkill("mantian_mei_nan")){
                                addExtra = 4;
                            }else{
                                addExtra = 3;
                            }
                        }
                        if (get.suit(card) == 'diamond'){
                            if (event.targets[event.loopNum].hasSkill("mantian_mei")||event.targets[event.loopNum].hasSkill("mantian_mei_nan")){
                                addExtra = -13;
                            }else{
                                addExtra = 2;
                            }
                        }
                        if (get.suit(card) == 'club'){
                            if (event.targets[event.loopNum].hasSkill("mantian_mei")||event.targets[event.loopNum].hasSkill("mantian_mei_nan")){
                                addExtra = 4;
                            }else{
                                addExtra = 1;
                            }
                        }
                        return 100+get.number(card)+addExtra;
                    });
                    'step 2'
                    event.cards2.push(result.cards);
                    event.loopNum++;
                    if (event.loopNum == event.targets.length) event.goto(3);
                    else event.goto(1);
                    'step 3'
                    event.publicCards=[];
					if(ui.cardPile.childNodes.length<2){
						var discardcards=get.cards(2);
						game.cardsDiscard(discardcards);
					}
					for(var i=0;i<2;i++){
						if(ui.cardPile.childNodes.length>i) event.publicCards.push(ui.cardPile.childNodes[i]);
					}
                    game.playAudio('skill','dutian_kapai_mei'+Math.ceil(2*Math.random()));
                    player.showCards(event.publicCards,'公牌展示');
                    game.delay();
                    player.popup('公牌展示','metal');
                    game.log(player,"展示公牌");
                    game.delay();
                    'step 4'
                    game.playAudio('skill','dutian_kapai_mei'+Math.ceil(2*Math.random()));
                    player.showCards(event.playerCards,get.translation(player)+'的【赌天】牌展示');
                    game.delay();
                    game.delay();
                    game.delay();
                    game.delay();
                    game.delay();
                    game.delay();
                    if (player.hasSkill("mantian_mei")){
                        player.logSkill("mantian_mei");
                        game.log(player,"发动技能","#g【瞒天】","，将手牌中的","#y"+"♥","和","#y"+"♣","都视为","#y"+"♠");
                    }
                    if (player.hasSkill("mantian_mei_nan")){
                        player.logSkill("mantian_mei_nan");
                        game.log(player,"发动技能","#g【瞒天】","，将手牌中的","#y"+"♥","和","#y"+"♣","都视为","#y"+"♠");
                    }
                    event.playerPoint = 0;
                    event.playerNumber = [];
                    event.playerSuit = [];
                    var tonghua = false;
                    var shunzi = false;
                    for (var i = 0; i < 2; i++){
                        event.playerNumber.push(get.number(event.playerCards[i]));
                        event.playerSuit.push(get.suit(event.playerCards[i]));
                        event.playerNumber.push(get.number(event.publicCards[i]));
                        if (player.hasSkill('mantian_mei')){
                            if (false&&(get.suit(event.publicCards[i]) == 'heart' || get.suit(event.publicCards[i]) == 'club')){
                                event.playerSuit.push('spade');
                                player.logSkill("mantian_mei");
                                game.log(get.translation(player)+"发动技能【瞒天】，将公牌"+get.translation(event.publicCards[i])+"的花色视为♠");
                            }
                            else{
                                event.playerSuit.push(get.suit(event.publicCards[i]));
                            }
                        }
                        else if (player.hasSkill('mantian_mei_nan')){
                            if (false&&(get.suit(event.publicCards[i]) == 'heart' || get.suit(event.publicCards[i]) == 'club')){
                                event.playerSuit.push('spade');
                                player.logSkill("mantian_mei_nan");
                                game.log(get.translation(player)+"发动技能【瞒天】，将公牌"+get.translation(event.publicCards[i])+"的花色视为♠");
                            }
                            else{
                                event.playerSuit.push(get.suit(event.publicCards[i]));
                            }

                        }
                        else{
                            event.playerSuit.push(get.suit(event.publicCards[i]));
                        }
                        
                    }

                    for (var i = 0; i < 4; i++){
                        var addExtra = 0;
                        if (event.playerSuit[i] == 'spade'){
                            addExtra = 4;
                        }
                        if (event.playerSuit[i] == 'heart'){
                            addExtra = 3;
                        }
                        if (event.playerSuit[i] == 'diamond'){
                            addExtra = 2;
                        }
                        if (event.playerSuit[i] == 'club'){
                            addExtra = 1;
                        }
                        event.playerPoint = event.playerPoint + addExtra + event.playerNumber[i];
                    }

                    if (event.playerSuit[0] == event.playerSuit[1] && 
                        event.playerSuit[1] == event.playerSuit[2] &&
                        event.playerSuit[2] == event.playerSuit[3]
                    ){
                        event.playerPoint = event.playerPoint + 100;
                        player.popup('同花','water');
                        tonghua = true;
                        // game.playAudio('skill','dutian_tonghua_mei'+Math.ceil(2*Math.random()));
                        game.delay(10);
                        game.log(player,"的牌是","#g【同花】","，赌天点数","#y"+"+100","点");
                    }
                    // else{
                    //     const frequency = {};
                    //     event.playerSuit.forEach(item => {
                    //         frequency[item] = (frequency[item] || 0) + 1;
                    //     });
                    //     const maxCount = Math.max(...Object.values(frequency));
                    //     if (maxCount == 3){
                    //         event.playerPoint = event.playerPoint + 30;
                    //         player.popup('三花','water');
                    //         game.log(get.translation(player)+"的牌是【三花】，赌天点数+30点");
                    //     }
                    //     else if (maxCount == 2){
                    //         event.playerPoint = event.playerPoint + 10;
                    //         player.popup('对子','water');
                    //         game.log(get.translation(player)+"的牌是【对子】，赌天点数+10点");
                    //     }
                    //     else{

                    //     }
                    // }
                    game.delay(10);
                    event.playerNumber.sort(function(a, b) {
                        return a - b;
                    });
                    if (event.playerNumber[0] == event.playerNumber[1] - 1 && 
                        event.playerNumber[1] == event.playerNumber[2] - 1 &&
                        event.playerNumber[2] == event.playerNumber[3] - 1
                    ){
                        event.playerPoint = event.playerPoint + 100;
                        player.popup('顺子','water');
                        shunzi = true;
                        // game.playAudio('skill','dutian_shunzi_mei'+1);
                        game.delay(10);
                        game.log(player,"的牌是","#g【顺子】","，赌天点数","#y"+"+100","点");
                    }
                    else{
                        const frequency_num = {};
                        event.playerNumber.forEach(item => {
                            frequency_num[item] = (frequency_num[item] || 0) + 1;
                        });
                        const maxCount = Math.max(...Object.values(frequency_num));
                        if (maxCount == 4){
                            event.playerPoint = event.playerPoint + 120;
                            player.popup('豹子','metal');
                            game.log(player,"的牌是","#g【豹子】","，赌天点数","#y"+"+120","点");
                        }
                        // else if (maxCount == 3){
                        //     event.playerPoint = event.playerPoint + 30;
                        //     player.popup('三元','water');
                        //     game.log(get.translation(player)+"的牌是【三元】，赌天点数+30点");
                        // }
                        // else if (maxCount == 2){
                        //     event.playerPoint = event.playerPoint + 10;
                        //     player.popup('对点','water');
                        //     game.log(get.translation(player)+"的牌是【对点】，赌天点数+10点");
                        // }
                        else{

                        }
                    }
                    game.delay(10);
                    if (tonghua&&shunzi&&event.playerNumber[0] == 1 && event.playerSuit[0] == 'spade'){
                        event.playerPoint = event.playerPoint + 1000;
                        player.popup('黑Jack','thunder');
                        game.delay(20);
                        game.log(player,"的牌是","#g【黑Jack】","，赌天点数","#y"+"+1000","点！");
                    }
                    if (tonghua&&shunzi&&event.playerNumber[0] == 1 && event.playerSuit[0] == 'heart'){
                        event.playerPoint = event.playerPoint + 500;
                        player.popup('红皇后','fire');
                        game.log(player,"的牌是","#g【红皇后】","，赌天点数","#y"+"+500","点！");
                    }
                    if (tonghua&&shunzi&&event.playerNumber[0] == 1 && event.playerSuit[0] == 'diamond'){
                        event.playerPoint = event.playerPoint + 200;
                        player.popup('方天戟','soil');
                        game.log(player,"的牌是","#g【方天戟】","，赌天点数","#y"+"+200","点！");
                    }
                    if (tonghua&&shunzi&&event.playerNumber[0] == 1 && event.playerSuit[0] == 'club'){
                        event.playerPoint = event.playerPoint + 120;
                        player.popup('梅花鹿','wood');
                        game.log(player,"的牌是","#g【梅花鹿】","，赌天点数","#y"+"+120","点！");
                    }
                    game.delay(10);
                    player.popup('赌天点数','metal');
                    game.playAudio('skill','dutian_gold_mei'+Math.ceil(3*Math.random()));
                    game.delay();
                    player.popup(event.playerPoint+'点','metal');
                    game.log(player,"的赌天点数为","#y"+event.playerPoint,"点");
                    game.delay();
                    event.loopNum2 = 0;
                    event.otherPoints = [];
                    'step 5'
                    game.playAudio('skill','dutian_kapai_mei'+Math.ceil(2*Math.random()));
                    event.targets[event.loopNum2].showCards(event.cards2[event.loopNum2],get.translation(event.targets[event.loopNum2])+'的【赌天】牌展示');
                    game.delay();
                    game.delay();
                    game.delay();
                    game.delay();
                    game.delay();
                    game.delay();
                    if (event.targets[event.loopNum2].hasSkill("mantian_mei")){
                        event.targets[event.loopNum2].logSkill("mantian_mei");
                        game.log(event.targets[event.loopNum2],"发动技能","#g【瞒天】","，将手牌中的","#y"+"♥","和","#y"+"♣","都视为","#y"+"♠");
                    }
                    if (event.targets[event.loopNum2].hasSkill("mantian_mei_nan")){
                        event.targets[event.loopNum2].logSkill("mantian_mei_nan");
                        game.log(event.targets[event.loopNum2],"发动技能","#g【瞒天】","，将手牌中的","#y"+"♥","和","#y"+"♣","都视为","#y"+"♠");
                    }
                    var playerPoint = 0;
                    var playerNumber = [];
                    var playerSuit = [];
                    var TongHua = false;
                    var ShunZi = false;
                    for (var i = 0; i < 2; i++){
                        playerNumber.push(get.number(event.cards2[event.loopNum2][i]));
                        playerSuit.push(get.suit(event.cards2[event.loopNum2][i]));
                        playerNumber.push(get.number(event.publicCards[i]));
                        if (event.targets[event.loopNum2].hasSkill('mantian_mei')){
                            if (false&&(get.suit(event.publicCards[i]) == 'heart' || get.suit(event.publicCards[i]) == 'club')){
                                playerSuit.push('spade');
                                event.targets[event.loopNum2].logSkill("mantian_mei");
                                game.log(get.translation(event.targets[event.loopNum2])+"发动技能【瞒天】，将公牌"+get.translation(event.publicCards[i])+"的花色视为♠");
                            }
                            else{
                                playerSuit.push(get.suit(event.publicCards[i]));
                            }
                        }
                        else if (event.targets[event.loopNum2].hasSkill('mantian_mei_nan')){
                            if (false&&(get.suit(event.publicCards[i]) == 'heart' || get.suit(event.publicCards[i]) == 'club')){
                                playerSuit.push('spade');
                                event.targets[event.loopNum2].logSkill("mantian_mei_nan");
                                game.log(get.translation(event.targets[event.loopNum2])+"发动技能【瞒天】，将公牌"+get.translation(event.publicCards[i])+"的花色视为♠");
                            }
                            else{
                                playerSuit.push(get.suit(event.publicCards[i]));
                            }
                        }
                        else{
                            playerSuit.push(get.suit(event.publicCards[i]));
                        }
                    }
                    for (var i = 0; i < 4; i++){
                        var addExtra = 0;
                        if (playerSuit[i] == 'spade'){
                            addExtra = 4;
                        }
                        if (playerSuit[i] == 'heart'){
                            addExtra = 3;
                        }
                        if (playerSuit[i] == 'diamond'){
                            addExtra = 2;
                        }
                        if (playerSuit[i] == 'club'){
                            addExtra = 1;
                        }
                        playerPoint = playerPoint + addExtra + playerNumber[i];
                    }
                    if (playerSuit[0] == playerSuit[1] && 
                        playerSuit[1] == playerSuit[2] &&
                        playerSuit[2] == playerSuit[3]
                    ){
                        playerPoint = playerPoint + 100;
                        event.targets[event.loopNum2].popup('同花','water');
                        TongHua = true;
                        game.log(event.targets[event.loopNum2],"的牌是","#g【同花】","，赌天点数","#y"+"+100","点");
                        
                    }
                    // else{
                    //     const frequency = {};
                    //     playerSuit.forEach(item => {
                    //         frequency[item] = (frequency[item] || 0) + 1;
                    //     });
                    //     const maxCount = Math.max(...Object.values(frequency));
                    //     if (maxCount == 3){
                    //         playerPoint = playerPoint + 30;
                    //         event.targets[event.loopNum2].popup('三花','water');
                    //         game.log(get.translation(event.targets[event.loopNum2])+"的牌是【三花】，赌天点数+30点");
                    //     }
                    //     else if (maxCount == 2){
                    //         playerPoint = playerPoint + 10;
                    //         event.targets[event.loopNum2].popup('对子','water');
                    //         game.log(get.translation(event.targets[event.loopNum2])+"的牌是【对子】，赌天点数+10点");
                    //     }
                    //     else{

                    //     }
                    // }
                    game.delay();
                    playerNumber.sort(function(a, b) {
                        return a - b;
                    });
                    if (playerNumber[0] == playerNumber[1] - 1 && 
                        playerNumber[1] == playerNumber[2] - 1 &&
                        playerNumber[2] == playerNumber[3] - 1
                    ){
                        playerPoint = playerPoint + 100;
                        event.targets[event.loopNum2].popup('顺子','water');
                        ShunZi = true;
                        game.log(event.targets[event.loopNum2],"的牌是","#g【顺子】","，赌天点数","#y"+"+100","点");
                    }
                    else{
                        const frequency_num = {};
                        playerNumber.forEach(item => {
                            frequency_num[item] = (frequency_num[item] || 0) + 1;
                        });
                        const maxCount = Math.max(...Object.values(frequency_num));
                        if (maxCount == 4){
                            playerPoint = playerPoint + 120;
                            event.targets[event.loopNum2].popup('豹子','metal');
                            game.log(event.targets[event.loopNum2],"的牌是","#g【豹子】","，赌天点数","#y"+"+120","点");
                        }
                        // else if (maxCount == 3){
                        //     playerPoint = playerPoint + 30;
                        //     event.targets[event.loopNum2].popup('三元','water');
                        //     game.log(get.translation(event.targets[event.loopNum2])+"的牌是【三元】，赌天点数+30点");
                        // }
                        // else if (maxCount == 2){
                        //     playerPoint = playerPoint + 10;
                        //     event.targets[event.loopNum2].popup('对点','water');
                        //     game.log(get.translation(event.targets[event.loopNum2])+"的牌是【对点】，赌天点数+10点");
                        // }
                        else{

                        }
                    }
                    game.delay();
                    if (TongHua&&ShunZi&&playerNumber[0] == 1 && playerSuit[0] == 'spade'){
                        playerPoint = playerPoint + 1000;
                        event.targets[event.loopNum2].popup('黑Jack','thunder');
                        game.log(event.targets[event.loopNum2],"的牌是","#g【黑Jack】","，赌天点数","#y"+"+1000","点！");
                    }
                    if (TongHua&&ShunZi&&playerNumber[0] == 1 && playerSuit[0] == 'heart'){
                        playerPoint = playerPoint + 500;
                        event.targets[event.loopNum2].popup('红皇后','fire');
                        game.log(event.targets[event.loopNum2],"的牌是","#g【红皇后】","，赌天点数","#y"+"+500","点！");
                    }
                    if (TongHua&&ShunZi&&playerNumber[0] == 1 && playerSuit[0] == 'diamond'){
                        playerPoint = playerPoint + 200;
                        event.targets[event.loopNum2].popup('方天戟','soil');
                        game.log(event.targets[event.loopNum2],"的牌是","#g【方天戟】","，赌天点数","#y"+"+200","点！");
                    }
                    if (TongHua&&ShunZi&&playerNumber[0] == 1 && playerSuit[0] == 'club'){
                        playerPoint = playerPoint + 120;
                        event.targets[event.loopNum2].popup('梅花鹿','wood');
                        game.log(event.targets[event.loopNum2],"的牌是","#g【梅花鹿】","，赌天点数","#y"+"+120","点！");
                    }
                    game.delay();
                    event.targets[event.loopNum2].popup('赌天点数','metal');
                    game.playAudio('skill','dutian_gold_mei'+Math.ceil(3*Math.random()));
                    game.delay();
                    event.targets[event.loopNum2].popup(playerPoint+'点','metal');
                    event.otherPoints.push(playerPoint);
                    game.delay();
                    game.log(event.targets[event.loopNum2],"的赌天点数为","#y"+playerPoint,"点");
                    'step 6'
                    event.loopNum2++;
                    if (event.loopNum2 == event.targets.length) event.goto(7);
                    else event.goto(5);
                    'step 7'
                    //改回背景
                    if (game.getUpperBackgroundName('',player) == 'casino_bg'){
                        game.createClearBackground(event.background,player);
                    }
                    else{
                        game.createClearBackground('',player);
                    }

                    //效果
                    var subLargeIndex = 0;
                    for (var i = 1; i < event.otherPoints.length; i++){
                        if (event.otherPoints[subLargeIndex] < event.otherPoints[i]){
                            subLargeIndex = i;
                        }
                    }
                    if (event.playerPoint >= event.otherPoints[subLargeIndex]){
                        player.popup('赢','fire');
                        game.log("恭喜",player,"成为","#g【赌天】","的最后赢家！");
                        game.delay();
                        for (var i = 0; i < event.targets.length; i++){
                            event.targets[i].popup('输','water');
                            game.delay();
                        }
                        for (var i = 0; i < event.targets.length; i++){
                            var targetHand = event.targets[i].getCards('h');
                            // player.gain(targetHand, event.targets[i], 'draw');
                            player.gain(targetHand, event.targets[i], 'giveAuto','bySelf');
                            game.delay();
                            player.line(event.targets[i],'green');
                        }
                        game.playAudio('skill','dutian_chouma_mei'+1);
                        game.delay();
                        game.delay();
                        // game.playAudio('skill','dutian_win_mei'+Math.ceil(7*Math.random()));
                        game.delay();
                        game.delay();
                        for (var i = 0; i < event.targets.length; i++){
                            event.targets[i].damage(1,event.targets[i]);
                            game.delay();
                        }

                    }
                    else{
                        event.targets[subLargeIndex].popup('赢','fire');
                        game.log("恭喜",event.targets[subLargeIndex],"成为","#g【赌天】","的最后赢家！");
                        game.delay();
                        player.popup('输','water');
                        game.delay();
                        for (var i = 0; i < event.targets.length; i++){
                            if (i != subLargeIndex){
                                event.targets[i].popup('输','water');
                                game.delay();
                            }
                        }
                        
                        var playerHand = player.getCards('h');
                        // event.targets[subLargeIndex].gain(playerHand, player, 'draw');
                        event.targets[subLargeIndex].gain(playerHand, player, 'giveAuto','bySelf');
                        event.targets[subLargeIndex].line(player,'green');
                        game.delay();
                        for (var i = 0; i < event.targets.length; i++){
                            if (i != subLargeIndex){
                                var targetHand = event.targets[i].getCards('h');
                                event.targets[subLargeIndex].gain(targetHand, event.targets[i], 'giveAuto','bySelf');
                                game.delay();
                                event.targets[subLargeIndex].line(event.targets[i],'green');
                            }
                        }
                        game.playAudio('skill','dutian_chouma_mei'+1);
                        game.delay();
                        game.delay();
                        // game.playAudio('skill','dutian_lose_mei'+Math.ceil(3*Math.random()));
                        game.delay();
                        game.delay();
                        player.damage(1,player);
                        for (var i = 0; i < event.targets.length; i++){
                            if (i != subLargeIndex){
                                event.targets[i].damage(1,event.targets[i]);
                                game.delay();
                            }
                        }
                    }
                    'step 8'
                    // ui.cardPile.insertBefore(event.publicCards[1],ui.cardPile.firstChild);
                    // game.log(get.translation(player)+"将公牌"+get.translation(event.publicCards[1])+"放回牌堆顶。");
                    // ui.cardPile.insertBefore(event.publicCards[0],ui.cardPile.firstChild);
                    // game.log(get.translation(player)+"将公牌"+get.translation(event.publicCards[0])+"放回牌堆顶。");
                    event.finish();
                },
                derivation:["dutian_rule_mei"],
                ai:{
					order:9,
                    threaten:8,
                    expose:0.6,
                    // jueqing:true,
					result:{
						target:function(player,target){
                            if (get.attitude(player,target) < 0){
                                return -100 - 18*target.countCards('h');
							    
                            }
                            else{
                                return -40*Math.random()- 10*target.countCards('h');
                            }
						}
					},
				},
                

            },

            dutian_rule_mei:{

            },
            
            
            mantian_mei:{
                audio:4,
                forced:true,
                locked:true,
                group:['mantian_spade_mei','mantian_recover_mei'],
                ai:{
                    threaten:3.3,
                },
            },

            mantian_mei_nan:{
                audio:4,
                forced:true,
                locked:true,
                mark:true,
                marktext:"瞒",
                intro:{
                    name:"瞒天",
                    content:"拥有技能【瞒天】",
                },
                group:['mantian_spade_mei_nan','mantian_recover_mei_nan'],
                ai:{
                    threaten:3.3,
                },

            },

            mantian_spade_mei:{
                popup:false,
				forced:true,
                priority:10,
                trigger:{
                    player:['judgeAfter',"useCard"],
                },
                filter:function(event,player){
                    if (event.name != 'judge'){
                        var has=game.hasPlayer(function(current){
                            return event.targets.contains(current)&&current.hasSkill('mingcha_quan');
                        });
                        return event.card&&event.cards.length>0&&(event.card.name=='sha' || (get.type(event.card,'trick')=='trick'&&has))&&(get.suit(event.cards[0])=='heart');
                    }
                    else{
                        if (event.result){
                            return get.suit(event.result.card) == 'heart' || get.suit(event.result.card) == 'club';
                        }
                        else{
                            return false;
                        }
                    }
                    

                },
                content:function(event){
                    player.logSkill('mantian_mei');
                    game.log(player,"发动技能","#g【瞒天】","，将花色视为","#y"+"♠");
                },
                mod:{
					suit:function(card,suit){
						if((suit=='heart'||suit=='club')) return 'spade';
					}
				}
            },

            mantian_spade_mei_nan:{
                popup:false,
				forced:true,
                priority:10,
                trigger:{
                    player:['judgeAfter',"useCard"],
                },
                filter:function(event,player){
                    if (event.name != 'judge'){
                        var has=game.hasPlayer(function(current){
                            return event.targets.contains(current)&&current.hasSkill('mingcha_quan');
                        });
                        return event.card&&event.cards.length>0&&(event.card.name=='sha' || (get.type(event.card,'trick')=='trick'&&has))&&(get.suit(event.cards[0])=='heart');
                    }
                    else{
                        if (event.result){
                            return get.suit(event.result.card) == 'heart' || get.suit(event.result.card) == 'club';
                        }
                        else{
                            return false;
                        }
                    }
                    

                },
                content:function(event){
                    player.logSkill('mantian_mei_nan');
                    game.log(player,"发动技能","#g【瞒天】","，将花色视为","#y"+"♠");
                },
                mod:{
					suit:function(card,suit){
						if((suit=='heart'||suit=='club')) return 'spade';
					}
				}
            },

            mantian_recover_mei:{
                popup:false,
				forced:true,
                trigger:{
                    player:["damageEnd","phaseDiscardBefore"],
                },
                filter:function(event,player){
                    if (event.name == 'damage'){
                        return (event.source!=undefined)&&(event.player == event.source)&&
                        (event.player==player)||(event.nature == "thunder"&&event.num > 1);
                    }
                    else{
                        return player.getHistory('skipped').contains('phaseUse')||player.getHistory('skipped').contains('phaseDraw');
                    }
                },
                content:function(event){
                    "step 0"
                    player.recover(player.maxHp - player.hp);
                    player.logSkill('mantian_mei');
                    "step 1"
                    player.judge(function (card) {
                        if(get.suit(card)=='spade'){
                            return 2;
                        } 
                        else{
                            return -0.5;
                        }
                    });
                    if(trigger.delay==false) game.delay();
                    game.delay();
                    "step 2"
                    if (result.card&&result.judge >= 0){
                        if (trigger.name == 'damage'){
                            if (!player.hasSkill("mantian_skip_mei")){
                                player.addSkill("mantian_skip_mei");
                            }
                        }
                        else{
                            trigger.cancel();
                        }
                        event.cards=get.cards(2);
                    }
                    else{
                        event.finish();
                    }
                    "step 3"
                    if(event.cards&&event.cards.length>1){
                        player.chooseCardButton('将【瞒天】获得的牌分配给任意角色',true,event.cards,[1,event.cards.length]).set('ai',function(button){
                            if(ui.selected.buttons.length==0) return 1;
                            return 0;
                        });
                    }
                    else if(event.cards.length==1){
                        event._result={links:event.cards.slice(0),bool:true};
                    }
                    else{
                        event.goto(6);
                    }
                    "step 4"
                    if(result.bool){
						for(var i=0;i<result.links.length;i++){
							event.cards.remove(result.links[i]);
						}
						event.togive=result.links.slice(0);
						player.chooseTarget('将'+get.translation(result.links)+'交给一名角色',true).set('ai',function(target){
							var att=get.attitude(_status.event.player,target);
							if(_status.event.enemy){
								return -att;
							}
							else if(att>0){
								return att/(1+target.countCards('h'));
							}
							else{
								return att/100;
							}
						}).set('enemy',get.value(event.togive[0],player,'raw')<0);
					}
                    "step 5"
					if(result.targets.length){
						result.targets[0].gain(event.togive,'draw');
						player.line(result.targets[0],'green');
						game.log(result.targets[0],'获得了'+get.cnNumber(event.togive.length)+'张牌');
						event.goto(3);
					}
                    "step 6"
                    event.finish();
                },
            },

            mantian_skip_mei:{
                forced:true,
                popup:false,
                mark:true,
                priority:15,
                // marktext:"瞒",
                intro:{
                    name:"瞒天",
                    content:"跳过下一个弃牌阶段",
                },
                trigger:{
                    player:"phaseDiscardBefore",
                },
                filter:function(event,player){
                    return true;
                },
                content:function(event){
                    "step 0"
                    trigger.cancel();
                    player.logSkill("mantian_mei");
                    game.log(player,'跳过了弃牌阶段')
                    "step 1"
                    player.removeSkill("mantian_skip_mei");
                },
            },



            mantian_recover_mei_nan:{
                popup:false,
				forced:true,
                trigger:{
                    player:["damageEnd","phaseDiscardBefore"],
                },
                filter:function(event,player){
                    if (event.name == 'damage'){
                        return (event.source!=undefined)&&(event.player == event.source)&&
                        (event.player==player)||(event.nature == "thunder"&&event.num > 1);
                    }
                    else{
                        return player.getHistory('skipped').contains('phaseUse')||player.getHistory('skipped').contains('phaseDraw');
                    }
                },
                content:function(event){
                    "step 0"
                    player.recover(player.maxHp - player.hp);
                    player.logSkill('mantian_mei_nan');
                    "step 1"
                    player.judge(function (card) {
                        if(get.suit(card)=='spade'){
                            return 2;
                        } 
                        else{
                            return -0.5;
                        }
                    });
                    if(trigger.delay==false) game.delay();
                    game.delay();
                    "step 2"
                    if (result.card&&result.judge >= 0){
                        if (trigger.name == 'damage'){
                            if (!player.hasSkill("mantian_skip_mei_nan")){
                                player.addSkill("mantian_skip_mei_nan");
                            }
                        }
                        else{
                            trigger.cancel();
                        }
                        event.cards=get.cards(2);
                    }
                    else{
                        event.finish();
                    }
                    "step 3"
                    if(event.cards&&event.cards.length>1){
                        player.chooseCardButton('将【瞒天】获得的牌分配给任意角色',true,event.cards,[1,event.cards.length]).set('ai',function(button){
                            if(ui.selected.buttons.length==0) return 1;
                            return 0;
                        });
                    }
                    else if(event.cards.length==1){
                        event._result={links:event.cards.slice(0),bool:true};
                    }
                    else{
                        event.goto(6);
                    }
                    "step 4"
                    if(result.bool){
						for(var i=0;i<result.links.length;i++){
							event.cards.remove(result.links[i]);
						}
						event.togive=result.links.slice(0);
						player.chooseTarget('将'+get.translation(result.links)+'交给一名角色',true).set('ai',function(target){
							var att=get.attitude(_status.event.player,target);
							if(_status.event.enemy){
								return -att;
							}
							else if(att>0){
								return att/(1+target.countCards('h'));
							}
							else{
								return att/100;
							}
						}).set('enemy',get.value(event.togive[0],player,'raw')<0);
					}
                    "step 5"
					if(result.targets.length){
						result.targets[0].gain(event.togive,'draw');
						player.line(result.targets[0],'green');
						game.log(result.targets[0],'获得了'+get.cnNumber(event.togive.length)+'张牌');
						event.goto(3);
					}
                    "step 6"
                    event.finish();
                },

                ai:{
                    expose:0.15,
                },
            },

            mantian_skip_mei_nan:{
                forced:true,
                popup:false,
                mark:true,
                priority:15,
                // marktext:"瞒",
                intro:{
                    name:"瞒天",
                    content:"跳过下一个弃牌阶段",
                },
                trigger:{
                    player:"phaseDiscardBefore",
                },
                filter:function(event,player){
                    return true;
                },
                content:function(event){
                    "step 0"
                    trigger.cancel();
                    player.logSkill("mantian_mei_nan");
                    "step 1"
                    player.removeSkill("mantian_skip_mei_nan");
                },
            },

            
            
            xinruan_mei:{
                audio:2,
                forced:true,
                locked:true,
                group:["xinruan_selfDamage_mei","xinruan_jiu_mei"],

            },

            xinruan_selfDamage_mei:{
                forced:true,
                popup:false,
                trigger:{
                    global:"damageEnd",
                },
                filter:function(event,player){
                    return (event.source!=undefined)&&(event.player!=player)&&(event.player == event.source);
                },
                content:function(event){
                    player.damage(trigger.num,player);
                    player.logSkill("xinruan_mei");
                },
            },

            xinruan_jiu_mei:{
                forced:true,
                popup:false,
                trigger:{
                    player:"dying",
                },
                filter:function(event,player){
                    return true;
                },
                content(event){
                    'step 0'
                    //改变背景
                    if (!player.hasSkill('xinruan_background_mei')){
                        player.addTempSkill('xinruan_background_mei',{player:['dyingAfter','die']});
                    }
                    player.storage.xinruan_mei = game.getUpperBackgroundName('',player);
                    player.syncStorage('xinruan_mei');
                    game.createClearBackground('ring_bg',player);
                

                    'step 1'
                    var has=game.hasPlayer(function(current){
                        if (!current.hasSkill('xinruan_jiu_begin_mei')&&current!=player){
                            player.line(current,"green");
                            current.addTempSkill('xinruan_jiu_begin_mei');
                        }
                        // if (!current.hasSkill('xinruan_jiu_end_mei')&&current!=player){
                        //     current.addSkill('xinruan_jiu_end_mei');
                        // }
                        
                        
                    });
                    player.logSkill("xinruan_mei");
                    game.log(player,"濒死，令每名其他角色的","#y【酒】","和","#y♠","手牌可以视为","#y【桃】","使用。");
                    game.delay(2);
                    'step 2'
                    game.delay(2);
                    
                },
            },

            xinruan_background_mei:{
                silent:true,
                popup:false,
                forced:true,
                onremove:function(player){
                    //改回背景
                    if (game.getUpperBackgroundName('',player) == 'ring_bg'){
                        game.createClearBackground(player.storage.xinruan_mei,player);
                        player.storage.xinruan_mei = '';
                    }
                    else{
                        game.createClearBackground('',player);
                    }
                    var has=game.hasPlayer(function(current){
                        if (current.hasSkill('xinruan_jiu_begin_mei')){
                            current.removeSkill('xinruan_jiu_begin_mei');
                        }
                    });
                },
            },

            xinruan_jiu_begin_mei:{
                // mark:true,
                // marktext:"软",
                // intro:{
                //     name:'心软',
                //     content:"",
                // },
                forced:true,
                popup:false,
                mod:{
					cardname:function(card,player){
						if(card.name=='jiu'||card.suit == 'spade') return 'tao';
					},
				},
            },

            // xinruan_jiu_end_mei:{
            //     forced:true,
            //     popup:false,
            //     silent:true,
            //     trigger:{
            //         global:["dyingAfter"],
            //     },
            //     filter:function(event,player){
            //         return true;
            //     },
            //     content:function(event){
            //         "step 0"
            //         if (player.hasSkill("xinruan_jiu_begin_mei")){
            //             player.removeSkill("xinruan_jiu_begin_mei");
            //         }
            //         "step 1"
            //         player.removeSkill("xinruan_jiu_end_mei");
            //     },

            // },

            
            
            zuiai_mei:{
                audio:2,
                popup:false,
                frequent:true,
                subSkill:{
					count:{
						trigger:{
							player:"recoverBegin",
						},
						forced:true,
						silent:true,
						popup:false,
						filter:function (event,player){
							if(!event.card||(event.card.name!='tao')) return false;
							if(!event.source||event.source.sex!='male') return false;
							if(!player.isDying()) return false;
							return true;
						},
						content:function (){
							trigger.zuiai_mei=true;
                            
                            if (trigger.cards&&trigger.cards.length>0&&(trigger.cards[0].name == "jiu"||get.suit(trigger.cards[0])=="spade")){
                                trigger.source.storage.jiu_save_meixian = 1;
                            }
                            
						},
						sub:true,
					},
				},
                group:["zuiai_mei_count"],
                trigger:{
					player:"recoverAfter",
				},
                limited:true,
                init:function (player){
					player.storage.zuiai_mei=false;
				},
                filter:function (event,player){
					if(player.storage.zuiai_mei) return false;
					if(player.isDying()) return false;
					return event.zuiai_mei==true;
				},
                skillAnimation:true,
				animationColor:'fire',
                content:function(event){
                    "step 0"
                    if (!player.hasSkill('zuiai_disableJudge_mei')){
                        player.addSkill('zuiai_disableJudge_mei');
                    }
					player.chooseBool(get.prompt2("zuiai_mei")).set('ai',function(event,player){
                        if (get.attitude(player,trigger.source) > 0.8){
                            if (trigger.source.hasSkill("jingguai")){
                                return Math.random()>0.3;
                            }
                            else if (trigger.source.storage.jiu_save_meixian&&trigger.source.storage.jiu_save_meixian==1){
                                return Math.random()>0.6;
                            }
                            else{
                                return Math.random()>0.85;
                            }
                        }
                        else{
                            return false;
                        }
						
					});
                    "step 1"
                    if(result.bool){
						player.awakenSkill('zuiai_mei');
						player.logSkill('zuiai_mei',trigger.source);
                        if (trigger.source.storage.jiu_save_meixian&&trigger.source.storage.jiu_save_meixian==1||trigger.source.hasSkill("jingguai")){
                            trigger.source.addSkill("mantian_mei_nan");
                            game.log(trigger.source,'获得技能','#g【'+get.translation("mantian_mei_nan")+'】');
                            player.line(trigger.source,'fire');
                        } 
						trigger.source.addSkill("dutian_mei_nan");
                        game.log(trigger.source,'获得技能','#g【'+get.translation("dutian_mei_nan")+'】');
                        player.loseMaxHp();
                        player.recover(player.maxHp - player.hp);
                        if (player.hasSkill("mantian_mei")){
                            player.removeSkill("mantian_mei");
                            game.log(player,'失去技能','#g【'+get.translation("mantian_mei")+'】');
                        }
                        player.disableJudge();
                        player.line(trigger.source,'fire');
                          
					}
                    else{
                        event.finish();
                    }

                },
                mark:false,
				intro:{
					content:"limited",
				},
                ai:{
                    threaten:0.3,
                    expose:0.7,
                },

            },

            zuiai_disableJudge_mei:{
                silent:true,
                popup:false,
            },



            jianyu_len:{
                audio:2,
                trigger:{global:'gainAfter'},
                popup:false,
                frequent:true,
                filter:function(event,player){
					if(event.source==player&&event.player!=player&&!event.player.hasSkill('jianyu_limit_len')){
						return true;
					}
					return false;
				},
                content:function(event){
                    'step 0'
                    player.chooseBool(get.prompt2('jianyu_len')).set('ai',function(event,player){
                        return get.attitude(player,trigger.player) < 0;
                    });
                    'step 1'
                    if (result.bool){
                        player.logSkill('jianyu_len',trigger.player,'thunder');
                        trigger.player.damage(1,'thunder');
                        if (!trigger.player.hasSkill('jianyu_limit_len')){
                            trigger.player.addSkill('jianyu_limit_len');
                        }
                        // player.line(trigger.player,'green');
                    }
                },

                ai:{
                    threaten:2,
					expose:0.5,
				},


            },

            jianyu_limit_len:{
                mark:true,
                marktext:"剑",
                intro:{
                    name:"剑雨",
                    content:function(storage, player) {
                        return `已成为过【剑雨】目标`;
                    },
                },
                silent:true,
                trigger:{
                    global:'phaseEnd',
                    player:"dieBegin",
                },
                filter:function(event,player){
                    return true;
                },
                content:function(event){
                    player.removeSkill('jianyu_limit_len');
                },
            },
            
            yinzhen_len:{
                audio:2,
                frequent:true,
                popup:false,
                skillAnimation:'epic',
				animationColor:'thunder',
                trigger:{
                    player:"dying",
                },
                filter:function(event,player){
                    return player.hp<=0 && player.maxHp > 3;
                },
                content:function(event){
                    "step 0"
                    player.chooseBool(get.prompt2("yinzhen_len")).set('ai',function(){
                        if(player.countCards('h','tao')+player.countCards('h','jiu') > 0-player.hp){
                            return false;
                        }
                        else{
                            return true;
                        }
                    });
                    "step 1"
                    if (result.bool) {
                        player.logSkill('yinzhen_len');
                        event.bool = result.bool;
                        player.loseMaxHp();
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if (event.bool){
                        player.recover(1-player.hp);
                        if (player.maxHp > player.countCards('h')){
                            player.draw(player.maxHp - player.countCards('h'));
                        }
                    }
                    else{
                        event.finish();
                    }
                },

            },
            
            duoqin_len:{
                audio:2,
                group:["duoqin_useAfter_len","duoqin_thunder_len","duoqin_leisha_len"],
                ai:{
                    threaten:2.7,
                },
            },

            duoqin_useAfter_len:{
                popup:false,
                frequent:true,
                trigger:{
                    player:'useCardAfter',
                },
                filter:function(event,player){
					return event.cards.filterInD().length>0 && get.type(event.cards[0], 'trick') == 'trick';
				},
                content:function(event){
                    'step 0'
                    player.chooseTarget(get.prompt('duoqin_len'),'将'+get.translation(trigger.cards)+'收回并交给一名其他角色。',function(card,player,target){
						return target!=player;
					}).set('ai',function(target){
                        var has=game.hasPlayer(function(current){
                            current.hasSkill('bihai_shui');
                        });
                        var att=get.attitude(_status.event.player,target);
                        if (att < 0 && !target.hasSkill('jianyu_limit_len')){
                            if (target.hasSkillTag('nothunder')){return 0;} 
                            else if (has) {return 15-att;}
                            else if (target.hasSkill('duanxiu_duo'||target.hasSkill('kuaijiu_ding')||target.hasSkill('yuzhong_yan')||player.hasSkill('qinyin_jian_duo'))){
                                return -0.5;
                            }
                            else{
                                return 15-att;
                            }
                        }
                        else if (att < 0 && target.hasSkill('jianyu_limit_len')){
                            return 0;
                        }
                        else{
                            if(target.hasJudge('lebu')) return 0;
                            if(att<3) return 0;
                            if(event.wuxie&&target.needsToDiscard(1)){
                                att/=5;
                            }
                            return att;
                        }
					});
                    'step 1'
                    if (result.bool){
                        player.logSkill('duoqin_len',result.targets[0]);
                        player.gain(trigger.cards.filterInD(),'gain2');
                        result.targets[0].gain(trigger.cards,player,'gain2');
                        player.line(result.targets[0],'green');
                    }
                },

            },

            duoqin_thunder_len:{
                popup:false,
                frequent:true,
                trigger:{
                    global:'damageEnd',
                },
                filter:function(event,player){
                    return event.nature == 'thunder';//&&event.player.isAlive();
                },
                content:function(event){
                    'step 0'
                    player.chooseControl('duoqin_thunder_gain','duoqin_thunder_lose','cancel2',function(event,player){
                        if (!trigger.player.isAlive()){return 'duoqin_thunder_gain';}
                        if(get.attitude(player, trigger.player) < 0 && player.hp < 2&& player.maxHp <= 3&&player.countCards('h','tao')==0&&player.countCards('h','jiu')==0){
                            return 'cancel2';
                        }
                        else if (get.attitude(player, trigger.player) < 0&&trigger.player.hasSkillTag('maihp')&&trigger.player.hp>1){
                            return 'cancel2';
                        }
                        else{
                            if(get.attitude(player, trigger.player) < 0) return 'duoqin_thunder_lose';
                            if(get.attitude(player, trigger.player) > 0) return 'duoqin_thunder_gain';
                            return 'duoqin_thunder_lose';
                        }
                    }).set('prompt','【多情】：'+get.translation(trigger.player)+'受到雷电伤害，是否令其回复1点体力或失去1点体力，然后你也随之回复或失去1点体力？');

                    "step 1"
                    if (result.control != 'cancel2'){
                        event.control = result.control;
                        if(result.control=='duoqin_thunder_gain'){
                            trigger.player.recover(1);
                            // player.recover(1);
                            player.line(trigger.player,'green');
                        }
                        else{
                            trigger.player.loseHp(1);
                            // player.loseHp(1);
                            player.line(trigger.player,'green');
                        }    
                        player.logSkill('duoqin_len',trigger.player);
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if (event.control != 'cancel2'){
                        if(event.control=='duoqin_thunder_gain'){
                            player.recover(1);
                        }
                        else{
                            player.loseHp(1);
                        }    
                    }
                    else{
                        event.finish();
                    }

                },
                ai:{
					expose:0.45,
				},
            },

            duoqin_leisha_len:{
                audio:2,
                frequent:true,
                popup:false,
                trigger:{target:'useCardToTarget'},
                filter:function(event,player){
					return event.player!=player&&event.card&&(get.type(event.card)=='trick')&&event.targets.length==1&&get.color(event.card)=='black';
				},
                content:function(event){
                    "step 0"
                    player.chooseBool(get.prompt("duoqin_len"),'你已经成为黑色单体非延迟类锦囊牌目标，是否将其视为【雷杀】？').set('ai',function(){
                        if (get.attitude(trigger.player,player)<0 && get.tag(trigger.card,'damage')){
                            return Math.random()<0.98;
                        }
                        else if (get.attitude(trigger.player,player)<0 && !get.tag(trigger.card,'damage')){
                            if (player.hp == 1){
                                if (player.countCards('h','tao')+player.countCards('h','jiu')>0||player.maxHp > 3){
                                    return Math.random()<0.65;
                                }
                                else{
                                    return Math.random()<0.1;
                                }
                            }
                            else{
                                return Math.random()<0.9;
                            }
                        }
                        else{
                            return Math.random()<0.2;
                        }
                    });
                    "step 1"
                    if (result.bool) {
                        event.origin = trigger.card;
                        // var evt = trigger.getParent();
                        // evt.triggeredTargets2.remove(player);
                        // evt.targets.remove(player);
                        // trigger.cancel();
                        player.logSkill('duoqin_len');
                        game.log(player,'将',event.origin,'视为','#y雷杀');
                        // trigger.player.useCard({name:'sha',suit:event.origin.suit,number:event.origin.number,nature:'thunder',isCard:true,cardid:event.origin.cardid,cards:[event.origin]},player,true).set('audio',false);  
                        event.origin.name = 'sha';
                        event.origin.nature = 'thunder';
                        trigger.player.popup('杀','thunder');
                        trigger.player.line(player,'green');

                        if (trigger.player==_status.currentPhase){
                            if (!trigger.player.hasSkill('duoqin_shaNum_len')){
                                trigger.player.storage.duoqin_shaNum_len = 0;
                                trigger.player.addTempSkill('duoqin_shaNum_len','phaseAfter');
                                trigger.player.syncStorage('duoqin_shaNum_len');
                            }
                            trigger.player.storage.duoqin_shaNum_len++;
                            trigger.player.syncStorage('duoqin_shaNum_len');
                        }

                    }
                    else{
                        event.finish()
                    }
                },
            },

            duoqin_shaNum_len:{
                mod:{
                    cardUsable:function (card,player,num){
						if(card.name=='sha') return num-player.storage.duoqin_shaNum_len;
					},
                },
            },


            
            zhuxing_len:{
                audio:2,
                group:['zhuxing_sha_len','zhuxing_damage_len'],
                // ai:{
				// 	expose:0.5,
				// },
            },


            zhuxing_sha_len:{
                audio:2,
                frequent:true,
                popup:false,
                shaRelated:true,
                trigger:{global:'useCard'},
                filter:function(event,player){
					return event.card.name=='sha'&&player.countCards('he')>0&&event.player.isPhaseUsing();
				},
                content:function(){
					'step 0'
					var go=false;
					if(get.attitude(player,trigger.player)>0){
						if(get.nature(trigger.card)=='thunder'){
							go=true;
						}
						else if(trigger.addCount===false) go=false;
						else if(!trigger.player.hasSkill('paoxiao')&&
							!trigger.player.hasSkill('tanlin3')&&
							!trigger.player.hasSkill('baonu_gu2')&&
                            !trigger.player.hasSkill('yujiu_hp_heng')&&
							!trigger.player.hasSkill('fengnu')&&
							!trigger.player.getEquip('zhuge')){
							var nh=trigger.player.countCards('h');
							if(player==trigger.player){
								go=(player.countCards('h','sha')>0);
							}
							else if(nh>=4){
								go=true;
							}
							else if(player.countCards('h','sha')){
								if(nh==3){
									go=Math.random()<0.8;
								}
								else if(nh==2){
									go=Math.random()<0.5;
								}
							}
							else if(nh>=3){
								if(nh==3){
									go=Math.random()<0.5;
								}
								else if(nh==2){
									go=Math.random()<0.2;
								}
							}
						}
					}
					var next=player.chooseToDiscard(get.prompt('zhuxing_len'),'弃置一张牌'+(get.nature(trigger.card)=='thunder'?'并摸一张牌':'')+'，令'+get.translation(trigger.player)+'本次使用的【杀】不计入使用次数','he');
					next.set('ai',function(card){
						if(_status.event.go){
							return 20-get.value(card);
						}
						return 0;
					});
					next.set('go',go);
					'step 1'
					if(result.bool){
						if(trigger.addCount!==false){
							trigger.addCount=false;
							trigger.player.getStat().card.sha--;
						}
						if(get.nature(trigger.card)=='thunder'){
							player.draw();
						}
						player.logSkill('zhuxing_len',trigger.player);
					}
				},
				ai:{
                    threaten:0.9,
					expose:0.5,
				},
            },

            zhuxing_damage_len:{
                popup:false,
                frequent:true,
                trigger:{
                    player:'damageEnd',
                },
                filter:function(event,player){
                    return event.nature == 'thunder';
                },
                content:function(event){
                    'step 0'
                    player.chooseBool(get.prompt("zhuxing_len"),'你每受到1点雷电伤害，可以发动技能【助兴】摸三张牌并将至多三张牌交给任意角色。').set('ai',function(){
                        return true;
                    });
                    'step 1'
                    if (result.bool){
                        event.goto(2);
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    event.count=trigger.num;
                    'step 3'
                    event.num=0;
                    player.draw(3);
                    player.logSkill('zhuxing_len');
                    'step 4'
                    player.chooseCardTarget({
						position:'he',
						filterCard:true,
						selectCard:[1,1],
						filterTarget:function(card,player,target){
							return player!=target;
						},
						ai1:function(card){
                            return 7-get.value(card);
						},
						ai2:function(target){
                            var has=game.hasPlayer(function(current){
                                current.hasSkill('bihai_shui');
                            });
                            var att=get.attitude(_status.event.player,target);
                            if (att < 0 && !target.hasSkill('jianyu_limit_len')){
                                if (target.hasSkillTag('nothunder')){return 0;} 
                                else if (has) {return 50-att;}
                                else if (target.hasSkill('duanxiu_duo'||target.hasSkill('kuaijiu_ding')||target.hasSkill('yuzhong_yan')||player.hasSkill('qinyin_jian_duo'))){
                                    return -0.5;
                                }
                                else{
                                    return 50-att;
                                }
                            }
                            else if (att < 0 && target.hasSkill('jianyu_limit_len')){
                                return 0;
                            }
                            else{
                                if(target.hasJudge('lebu')) return 0;
                                if(att<3) return 0;
                                if(event.wuxie&&target.needsToDiscard(1)){
                                    att/=5;
                                }
                                return att-10*Math.random();
                            }
						},
						prompt:"助兴",
                        prompt2:"请选择一张牌，然后选择一名其他角色，将这些牌交给此角色，或点击取消。",
					});
                    'step 5'
                    if(result.bool){
                        var target=result.targets[0];
                        var cards=result.cards;
                        target.gain(cards,player,'giveAuto','bySelf');
                        player.logSkill('zhuxing_len',target);
                        player.line(target,'green');
                        event.num++;
                    }
                    else{
                        event.goto(7);
                    }
                    'step 6'
                    if (event.num == 3){
                        event.goto(7);
                    }
                    else{
                        event.goto(4);
                    }
                    'step 7'
                    event.count--;
                    if (event.count > 0){
                        player.chooseBool(get.prompt("zhuxing_len"),'你每受到1点雷电伤害，可以发动技能【助兴】摸三张牌并将至多三张牌交给任意角色。').set('ai',function(){
                            return true;
                        });
                    }
                    else{
                        event.finish();
                    }
                    'step 8'
                    if(event.count > 0 && result.bool){
                        event.goto(3);
                    }
  

                },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    threaten:function (player,target){
                        if(target.hp==1) return 2.5;
                        return 1;
                    },
                    effect:{
                        target:function (card,player,target){
                            if(get.tag(card,'damage')&&get.nature(card)=='thunder'){
                                if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                                if(target.hp==1&&(target.countCards('h','tao')>0 || target.countCards('h','jiu')>0)) return 2.8;
                                if(target.hp==1) return 0.8;
                                if(target.isTurnedOver()) return [0,3];
                                var num=game.countPlayer(function(current){
                                    if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
                                        return true;
                                    }
                                    if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
                                        return true;
                                    }
                                });
                                if(num>2) return [0,1];
                                if(num==2) return [0.5,1];
                            }
                        },
                    },
                },


            },




            anmou_enda:{
                audio:2,
                locked:true,
                forced:true,
                group:['anmou_draw_enda','anmou_discard_enda','anmou_thunder_enda'],
            },

            anmou_draw_enda:{
                silent:true,
                popup:false,
                trigger:{
					player:'drawBegin',
				},
				forced:true,
				content:function(){
                    player.logSkill('anmou_enda');
					trigger.bottom=true;
				},
            },

            anmou_discard_enda:{
                silent:true,
                popup:false,
                forced:true,
                trigger:{
                    player:['useCardAfter','loseAfter'],
                },
                filter:function(event,player){
                    // console.log(event.name);
                    // console.log(event.getParent());
                    // console.log(event.getParent().name);
                    if (event.cards.length == 0) return false;
                    if (event.name == 'lose'&&(event.getParent().name == 'useCard'||
                    event.getParent().name == 'judge'||event.getParent().name == 'phaseJudge'||
                    event.getParent().name == 'cangxin_enda'|| event.getParent().name == 'swapHandcards'||
                    event.getParent().name == 'swapEquip' || event.getParent().name == 'chooseToCompare'
                )) {return false;}
                    if ((event.name == 'useCard') && get.type(event.card)=='equip') return false;
                    return true;
                    
                    // if (event.name == 'lose'&&!(event.getParent().name == 'useCard'||event.getParent().name == 'judge'||event.getParent().name == 'phaseJudge')){
                    //     return event.cards2&&event.cards2.length>0;
                    // }
                    // else if (event.name == 'useCard'&& !get.type(event.card)=='equip'){
                    //     return event.cards.filterInD().length>0
                    // }
                    // else{
                    //     return false;
                    // }
                    
                },
                content(event){
                    var cards = trigger.cards;
                    var fadong = 0;
                    while(cards.length){
						var card=cards.pop();
                        // console.log(get.position(card,true));
						if(get.position(card,true)=='o'||get.position(card,true)=='d'){
							card.fix();
                            if(get.number(card)<=player.hp&&!player.hasSkill('anmou_discard_enda_end')){
                                player.storage.anmouCardId = card.cardid;
                                player.showCards(card,"【暗谋】牌展示");
                                game.log(player,"标记的【暗谋】牌为",card);
                                player.addTempSkill('anmou_discard_enda_end','roundStart');
                            }
							ui.cardPile.insertBefore(card,ui.cardPile.firstChild);
							game.log(player,'将',card,'置于牌堆顶');
                            fadong = 1;
						}
					}
					game.updateRoundNumber();
                    if (fadong == 1){
                        player.logSkill('anmou_enda');
                    }
                    

                },

            },


            anmou_discard_enda_end:{
                mark:false,
                marktext:"暗",
				intro:{
                    name:'暗谋',
                    content:'本轮藏牌已完成',
                },
            },

            anmou_thunder_enda_end:{
                mark:false,
                marktext:"暗",
				intro:{
                    name:'暗谋',
                    content:'本轮雷击已发动',
                },
            },


            anmou_thunder_enda:{
                priority:20,
                silent:true,
                popup:false,
                forced:true,
                trigger:{
                    global:["gainAfter"],
                },
                filter:function(event,player){
                    if (event.player == player) return false;
                    if (!(event.cards&&event.cards.length > 0)) return false;
                    if (!player.storage.anmouCardId) return false;
                    // if (player.hasSkill('anmou_thunder_enda_end')) return false;
                    for (var i = 0; i < event.cards.length; i++){
                        if (event.cards[i].cardid == player.storage.anmouCardId){
                            return true;
                        }
                    }
                    return false;
                },
                content(event){
                    'step 0'
                    player.logSkill('anmou_enda');
                    for (var i = 0; i < trigger.cards.length; i++){
                        if (trigger.cards[i].cardid == player.storage.anmouCardId){
                            trigger.player.showCards(trigger.cards[i],"【暗谋】牌展示");
                            break;
                        }
                    }
                    'step 1'
                    game.playAudio('skill','jianyu_len'+Math.ceil(2*Math.random()));
                    game.playAudio('skill','anmou_enda'+3);
                    game.playAudio('skill','anmou_enda'+4);
                    player.line(trigger.player,'green');
                    player.storage.anmouCardId = '';
                    trigger.player.damage(3,'thunder',player);
                    // player.addTempSkill('anmou_thunder_enda_end','roundStart');
                },

            },


            
            kezheng_enda:{
                audio:3,
                popup:false,
                priority:1,
                frequent:true,
                direct:true,
                trigger:{
                    global:"phaseJieshuEnd",
                },
                filter:function(event,player){
                    return event.player!=player&&event.player.countCards('h') > player.countCards('h');
                },
                content:function(event){
                    'step 0'
                    var choice=[];
                    choice.push('令其交给你一张手牌');
                    choice.push('令其手牌数与你相同');
                    choice.push('cancel2');
                    player.chooseControl(choice).set('prompt',get.prompt2('kezheng_enda',trigger.player)).set('ai',function(){
                        var player=_status.event.player;
                        if (trigger.player.hasSkillTag('noh')){
                            if (Math.random()<0.9){
                                return 2;
                            }
                        }
                        if (get.attitude(player,trigger.player) < 0){
                            if ((player.hp > 1 || player.countCards('h','tao')+player.countCards('h','jiu')>=1)&&trigger.player.countCards('h')-player.countCards('h') > 4){
                                return 1;
                            }
                            else{
                                return 0;
                            }
                        }
                        else{
                            if (Math.random() < 0.2){
                                return 0;
                            }
                            else{
                                return 2;
                            }
                        }
						
					});

                    'step 1'
                    if(result.control!='cancel2'){
                        player.logSkill('kezheng_enda',trigger.player);
                        if (result.control == '令其交给你一张手牌'){
                            trigger.player.chooseCard('h',true,'###'+get.translation('kezheng_enda')+'###请将一张手牌交给'+get.translation(player)).set('ai',function(card){
                                // if(get.type(card)=='equip'){
                                //     return 50-get.value(card);
                                // }
                                return -get.value(card);
                            });
                            event.goto(2);
                        }
                        else{
                            player.loseHp();
                            event.goto(3);
                        }
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if(result.bool){
                        player.gain(result.cards,trigger.player,'giveAuto','bySelf');
                        event.finish();
					}
                    'step 3'
                    if (player.isAlive()){
                        trigger.player.chooseToDiscard(get.translation('kezheng_enda'),"请弃置"+get.cnNumber(trigger.player.countCards('h')-player.countCards('h'))+'张牌',trigger.player.countCards('h')-player.countCards('h'),true,'h').set('ai',function(card){
                            return -get.value(card);
                        });
                        // player.line(trigger.player,'green');
                        // player.logSkill('kezheng_enda',trigger.player);
                        event.finish();
                    }
                    else{
                        event.finish();
                    }
                    

                },
                group:['kezheng_draw_enda'],
                ai:{
                    threaten:8,
                    expose:0.5,
                },
            },

            kezheng_draw_enda:{
                audio:3,
                popup:false,
                priority:2,
                frequent:true,
                direct:true,
                trigger:{
                    global:"phaseJieshuBegin",
                },
                filter:function(event,player){
                    return event.player.countCards('h') == 0;
                },
                content:function(event){
                    'step 0'
                    player.chooseBool(get.prompt('kezheng_enda'),get.translation(trigger.player)+'手牌数为0，你可以令其摸一张牌。').set('ai',function(event,player){
                        if (player.countCards('h')==0){
                            return true;
                        }
                        else{
                            return get.attitude(player,trigger.player) > 0;
                        }
                        
                    });
                    'step 1'
                    if (result.bool){
                        trigger.player.draw(1);
                        player.logSkill('kezheng_draw_enda',trigger.player);
                    }

                },

            },
            
            roufa_enda:{
                audio:2,
                popup:false,
                direct:true,
                skillAnimation:'epic',
				animationColor:'thunder',
                enable:'phaseUse',
                filter:function(event,player){
					var has=game.hasPlayer(function(current){
                        return current.sex == 'female';
                    });
                    return has&&(!player.hasSkill('roufa_enda_limit'));
				},
                content:function(event){
                    "step 0"
                    player.chooseTarget(get.prompt2('roufa_enda')).set('ai',function(target){
                        var players=game.filterPlayer();
                        var effect=0;
                        var countFemale;
                        for(var i=0;i<players.length;i++){
                            if(players[i].sex=='female'&&players[i]!=target&&players[i]!=player&&players[i].countCards('he')){
                                var little_effect = get.effect(target,{name:'sha'},players[i],target);
                                effect+=little_effect;
                            }
                            if (players[i].sex=='female'&&get.attitude(player,players[i])<0){
                                countFemale++;
                            }
                        }
                        if ((players.length<=2||(countFemale <= 2 && Math.random() < 0.3)) && target == player){
                            if (player.hp > 1 || player.countCards('h','shan')){
                                return 100;
                            }
                        }
                        return -effect;
                    });

                    "step 1"
                    if (result.bool){
                        event.realTarget = result.targets[0];
                        player.addTempSkill('roufa_enda_limit','phaseAfter');
                        player.line(event.realTarget,'fire');
                        player.line(event.realTarget,'fire');
                        player.line(event.realTarget,'fire');
                        game.delay(1.2);
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    //改变背景
                    event.background = game.getUpperBackgroundName('',player);
                    game.createClearBackground('roufa_bg',player);
                    game.delay(0.2);
					"step 3"
                    // player.logSkill('roufa_enda',event.realTarget,'fire');
                    player.logSkill('roufa_enda');
                    game.log('【'+get.skillTranslation('roufa_enda',this)+'】','的目标是',event.realTarget)
					event.targets=game.filterPlayer();
					event.targets.remove(player);
					event.targets.remove(event.realTarget);
                    event.targets.sort(lib.sort.seat);
					for(var i=0;i<event.targets.length;i++){
						if(event.targets[i].sex!='female'){
							event.targets.splice(i--,1);
						}
					}
                    for(var i=0;i<event.targets.length;i++){
						player.line(event.targets[i],'green');
                    }
                    event.loop = 0;
					"step 4"
					if(event.loop < event.targets.length){
						event.current=event.targets[event.loop];
						if(event.current.countCards('he')&&event.realTarget.isAlive()){
							event.current.chooseToUse("【肉伐】：向"+get.translation(event.realTarget)+"使用一张【杀】或"+get.translation(player)+"获得你一张牌",{name:'sha'},event.realTarget,-1);
						}
					}
					else{
                        //改回背景
                        if (game.getUpperBackgroundName('',player) == 'roufa_bg'){
                            game.createClearBackground(event.background,player);
                        }
                        else{
                            game.createClearBackground('',player);
                        }
                        event.finish();
						
					}
					"step 5"
					if(result.bool==false){
                        if (event.current.countCards('he')){
                            player.gainPlayerCard(event.current,true,'he');
                            game.log(event.current,'未向',event.realTarget,'出【杀】，',player,'获得其一张牌')
                        }
					}
                    else{

                    }
                    event.loop++;
					event.goto(4);
				},
                ai:{
                    threaten:3.4,
                    expose:0.1,
					order:1,
					result:{
						// target:function(player,target){
						// 	var players=game.filterPlayer();
						// 	var effect=0;
                        //     var countFemale;
						// 	for(var i=0;i<players.length;i++){
						// 		if(players[i].sex=='female'&&players[i]!=target&&players[i]!=player&&players[i].countCards('he')){
                        //             effect+=get.effect(target,{name:'sha'},players[i],target);
                        //         }
                        //         if (players[i].sex=='female'&&get.attitude(player,players[i])<0){
                        //             countFemale++;
                        //         }
						// 	}
                        //     if ((players.length<=2||(countFemale <= 2 && Math.random() < 0.3)) && target == player){
                        //         if (player.hp > 1 || player.countCards('h','shan')){
                        //             return 100;
                        //         }
                        //     }
						// 	return effect;
						// },
                        player:function(player){
                            var all_targets = game.filterPlayer();
                            var effect=0;
                            for (var i = 0; i < all_targets.length; i++){
                                var target = all_targets[i];
                                var players=game.filterPlayer();
                                // var effect=0;
                                var countFemale;
                                for(var i=0;i<players.length;i++){
                                    if(players[i].sex=='female'&&players[i]!=target&&players[i]!=player&&players[i].countCards('he')){
                                        effect+=get.effect(target,{name:'sha'},players[i],target);
                                    }
                                    if (players[i].sex=='female'&&get.attitude(player,players[i])<0){
                                        countFemale++;
                                    }
                                }
                                if ((players.length<=2||(countFemale <= 2 && Math.random() < 0.3)) && target == player){
                                    if (player.hp > 1 || player.countCards('h','shan')){
                                        return 100;
                                    }
                                }
                            }
							return -effect;
						},
					}
				},

            },
            
            roufa_enda_limit:{
                silent:true,
                forced:true,
            },
            
            cangxin_enda:{
                audio:2,
                locked:true,
                silent:true,
                popup:false,
                forced:true,
                // mark:true,
                marktext:"心",
                intro:{
					content:'cardCount',
					onunmark:function(storage,player){
						if(player.storage.cangxin_start_enda != 3 &&storage&&storage.length){
							player.$throw(storage,1000);
							game.cardsDiscard(storage);
							game.log(storage,'被置入了弃牌堆');
							player.storage.cangxin_enda.length=0;
                            player.syncStorage('cangxin_enda');
						}
					},
				},
                init:function(player){
					if(!player.storage.cangxin_enda) {
                        player.storage.cangxin_enda=[];
                        player.syncStorage('cangxin_enda');
                    }
                    if (!player.storage.cangxin_start_enda) {
                        player.storage.cangxin_start_enda = 1;
                        player.syncStorage('cangxin_start_enda');
                    }
				},
                trigger:{
                    player:'enterGame',
                    global:'gameDrawAfter',
                },
                filter:function(event,player){
                    return !player.storage.cangxin_enda||!player.storage.cangxin_enda.length;
                },
                content:function (){
                    'step 0'
                    if (!player.hasSkill('cangxin_start_enda')){
                        player.addSkill('cangxin_start_enda');
                    }
                    player.logSkill('cangxin_enda');
                    player.draw();
                    if(!player.storage.cangxin_enda) {
                        player.storage.cangxin_enda=[];
                        player.syncStorage('cangxin_enda');
                    }
                    if (!player.storage.cangxin_start_enda) {
                        player.storage.cangxin_start_enda = 1;
                        player.syncStorage('cangxin_start_enda');
                    }
                    'step 1'
                    player.chooseCard('h','请选择一张手牌置于你的武将牌上，称为【心】',true).set('ai',function(card){
                        return 6-get.value(card)+10*Math.random();
                    });
                    'step 2'
                    if(result.bool){
                        // player.storage.cangxin_enda.push(result.cards[0]);
                        // player.syncStorage('cangxin_start_enda');
                        if(player.isUnderControl(true)){
							player.$give(1,player,false);
                            // player.$gain(1,false);
                            // player.$gain2(1,false);
						}
                        // else{
                        //     player.$gain2(1,false);
                        // }
                        player.storage.cangxin_enda=player.storage.cangxin_enda.concat(result.cards[0]);
                        player.syncStorage('cangxin_enda');
                        player.markSkill('cangxin_enda');
                        game.addVideo('storage',player,['cangxin_start_enda',get.cardsInfo(player.storage.cangxin_enda),'cards']);
                        game.log(player,'将一张牌置于其武将牌上，称为【心】');
                        player.lose(result.cards[0],ui.special,'toStorage');
                    };
                },
                group:['cangxin_damage_enda','cangxin_show_enda','cangxin_end_enda','cangxin_effect'],
                ai:{
                    threaten:0.8,
                    maixie_defend:true,
                    nothunder:true,

                    forbidNoSuit:true,
                    forbidNoCardDamage:true,
                    skillTagFilter:function(player,tag){
						if((tag=='forbidNoSuit'||tag=='forbidNoCardDamage')&&player.maxHp==player.hp){
							return false;
						}
					}
					// effect:{
					// 	target:function(card,player,target){
					// 		if(get.tag(card,'damage') && target.storage.cangxin_enda.length > 0 && target.hp < target.maxHp){
                    //             if (!target.hasSkill('cangxin_mark_enda')){
                    //                 var chance = 0.6-Math.random();
                    //                 // console.log(chance);
                    //                 return [chance,0];
                    //             }
                                
                    //             // if (get.suit(card) != get.suit(target.storage.cangxin_enda[0])){
                    //             //     return [0,0];
                    //             // }
                    //             // else if (target.hasSkill('cangxin_mark_enda')&&get.suit(card) == get.suit(target.storage.cangxin_enda[0])){
                    //             //     return [1,-2];
                    //             // }
                    //             // else{
                    //             //     return;
                    //             // }
					// 		}
					// 	}
					// },
				},

            },

            cangxin_effect:{
                audio:false,
                silent:true,
                popup:false,
                direct:true,
                trigger:{
                    target:"shaBefore",
                },
                forced:true,
                filter:function(event,player){
                    return false;
                },
                content:function(event){
                    event.finish();
                },
                ai:{
                    effect:{
                        target:function(card,player,target){
                            if (target.hp < target.maxHp&&get.suit(card) != get.suit(target.storage.cangxin_enda[0])&&get.tag(card,'damage')&&target.hasSkill('cangxin_mark_enda')){
                                return 'zerotarget';
                            }
                            if (target.hp < target.maxHp&&get.suit(card) == get.suit(target.storage.cangxin_enda[0])&&get.tag(card,'damage')&&target.hasSkill('cangxin_mark_enda')){
                                return [1,-4];
                            }
                            
                        },
                    },
                },
            },

            cangxin_start_enda:{
                silent:true,
                popup:false,
            },

            
            cangxin_damage_enda:{
                audio:1,
                priority:1,
                silent:true,
                popup:false,
                forced:true,
                trigger:{
                    player:'damageBegin4',
                },
                filter:function(event,player){                    
                    return player.storage.cangxin_enda&&player.storage.cangxin_enda.length > 0;
                },
                content:function(event){
                    'step 0'
                    if (trigger.nature == 'thunder'){
                        player.logSkill('cangxin_enda');
                        game.log(player,'免疫了此次伤害');
                        trigger.num = 0;
                        trigger.cancel();
                        event.finish();
                    }
                    'step 1'
                    if (player.hp < player.maxHp){
                        if (!trigger.card || !trigger.cards){
                            player.logSkill('cangxin_enda');
                            game.log(player,'免疫了此次伤害');
                            trigger.num = 0;
                            trigger.cancel();
                            event.finish();
                        }
                        // else if (trigger.cards.length != 1){
                        //     player.logSkill('cangxin_enda');
                        //     game.log(player,'免疫了此次伤害');
                        //     trigger.num = 0;
                        //     trigger.cancel();
                        //     event.finish();
                        // }
                        else{
                            var xinsuit = get.suit(player.storage.cangxin_enda[0]);
                            if (get.suit(trigger.card) != xinsuit){
                                player.logSkill('cangxin_enda');
                                game.log(player,'免疫了此次伤害');
                                trigger.num = 0;
                                trigger.cancel();
                                event.finish();
                            }
                            else{
                                player.logSkill('cangxin_damage_enda');
                                game.log(player,'受到伤害+1');
                                trigger.num = trigger.num + 1;
                                if (player.storage.cangxin_start_enda==1){
                                    player.storage.cangxin_start_enda = 2;
                                    player.syncStorage('cangxin_start_enda');
                                }
                                event.finish();
                            }   
                        }
                    }
                    else{
                        event.finish();
                    }
                },
            },
            
            cangxin_show_enda:{
                silent:true,
                popup:false,
                forced:true,
                trigger:{
                    player:'damageEnd',
                },
                filter:function(event,player){
                    if (player.storage.cangxin_enda&&player.isAlive()&&player.storage.cangxin_start_enda&&player.storage.cangxin_start_enda==2){
                        return true;
                    }
                    else{
                        return false;
                    }
                },
                content:function(event){
                    player.showCards(player.storage.cangxin_enda,'【藏心】牌展示');
                    player.storage.cangxin_start_enda=3;
                    player.syncStorage('cangxin_start_enda');
                    player.unmarkSkill('cangxin_enda');
                    player.storage.cangxin_mark_enda = [];
                    player.storage.cangxin_mark_enda.push(player.storage.cangxin_enda[0]);
                    player.syncStorage('cangxin_mark_enda');
                    player.addSkill('cangxin_mark_enda');
                    player.markSkill('cangxin_mark_enda');
                },

            },

            cangxin_mark_enda:{
                silent:true,
                popup:false,
                forced:true,
                mark:true,
                marktext:"心",
                intro:{
                    name:'藏心',
                    content:'cards',
                    onunmark:function(storage,player){
						if(storage&&storage.length){
							player.$throw(storage,1000);
							game.cardsDiscard(storage);
							game.log(storage,'被置入了弃牌堆');
							player.storage.cangxin_enda.length=0;
                            player.syncStorage('cangxin_enda');
                            player.storage.cangxin_mark_enda.length=0;
                            player.syncStorage('cangxin_mark_enda');
						}
					},
                },
            },
            
            cangxin_end_enda:{
                audio:1,
                priority:11,
                silent:true,
                popup:false,
                forced:true,
                skillAnimation:'epic',
				animationColor:'water',
                trigger:{
                    player:'dying',
                },
                filter:function(event,player){
                    return player.storage.cangxin_enda && player.storage.cangxin_enda.length > 0 && player.countCards('h','tao')+player.countCards('h','jiu')==0;
                },
                content:function(event){
                    player.logSkill('cangxin_end_enda');
                    player.addSkill('cangxin_lose_enda');
                    player.recover(1-player.hp);
                    if (player.hasSkill('cangxin_mark_enda')){
                        player.unmarkSkill('cangxin_mark_enda');
                    }
                    else{
                        player.unmarkSkill('cangxin_enda');
                    }
                    player.storage.cangxin_enda = [];
                    player.syncStorage('cangxin_enda');
                    player.storage.cangxin_mark_enda = [];
                    player.syncStorage('cangxin_mark_enda');
                    player.removeSkill('cangxin_enda');
                    game.log(player,'失去技能','#g【藏心】');
                    if (player.hasSkill('cangxin_mark_enda')){
                        player.removeSkill('cangxin_mark_enda');
                    }

                },
            },


            cangxin_lose_enda:{
                silent:true,
                popup:false,
                mark:true,
                marktext:"失",
                intro:{
                    name:"<font size=3>失去【藏心】</font>",
                    content:'',
                },
            },



            bihai_shui:{
                audio:2,
                forced:true,
                locked:true,
                popup:false,
                group:['bihai_self_shui','bihai_fire_shui','bihai_thunder_shui'],
                ai:{
                    nofire:true,
                    // filterDamage:true,
                    effect:{
                        target:function(card,player,target){
                            if (get.tag(card,'damage')&&get.tag(card,'fireDamage')&&get.nature(card)=='fire'){
                                return 'zerotarget';
                            }
                        },
                    },
                },

            },

            bihai_self_shui:{
                forced:true,
                silent:true,
                popup:false,
                trigger:{
                    player:"damageBegin1",
                },
                filter:function(event,player){
                    return event.nature == 'fire';
                },
                content:function(event){
                    'step 0'
                    //改变背景
                    if (game.getUpperBackgroundName('',player) != 'beach_bg'){
                        game.createClearBackground('beach_bg',player);
                        game.delay(1);
                    }
                    'step 1'
                    player.logSkill('bihai_shui');
                    'step 2'
                    //效果
                    game.log(player,'使火焰伤害无效');
                    trigger.cancel();

                },

            },

            bihai_fire_shui:{
                audio:2,
                skillAnimation:true,
                animationColor:"water",
                forced:true,
                silent:true,
                popup:false,
                trigger:{
                    global:"damageBegin1",
                },
                filter:function(event,player){
                    return event.player!=player&&event.nature == 'fire'&&event.num>1;
                },
                content:function(event){
                    'step 0'
                    player.logSkill('bihai_fire_shui');
                    'step 1'
                    game.delay(1);
                    'step 2'
                    //改变背景
                    if (game.getUpperBackgroundName('',player) != 'bihai_bg'){
                        game.createClearBackground('bihai_bg',player);
                    }
                    'step 3'
                    //效果
                    game.log(player,'使火焰伤害-1');
                    trigger.num--;
                    game.delay(0.8);
                },
            },

            bihai_thunder_shui:{
                silent:true,
                popup:false,
                forced:true,
                trigger:{
                    global:"damageBegin1",
                },
                filter:function(event,player){
                    return event.nature == 'thunder'&&event.num<=1;
                },
                content:function(event){
                    'step 0'
                    player.logSkill('bihai_fire_shui');
                    'step 1'
                    game.delay(1);
                    'step 2'
                    //改变背景
                    if (game.getUpperBackgroundName('',player) != 'haidi_bg'){
                        game.createClearBackground('haidi_bg',player);
                        // game.delay(1);
                    }
                    'step 3'
                    //技能效果
                    game.log(player,'使雷电伤害+1');
                    trigger.num++;
                    game.delay(0.8);
                },
            },



            
            chengneng_shui:{
                audio:2,
                enable:'phaseUse',
                popup:false,
                direct:true,
                locked:false,
                forced:false,
                usable:2,
                filter:function(event,player){
					return player.getHandcardLimit()>0;
				},
				init:function(player){
					player.storage.chengneng_shui=0;
                    player.storage.useExtraSha = 0;
				},
                content:function(event){
                    'step 0'
                    player.logSkill('chengneng_shui');
                    if (!player.hasSkill('chengneng_end_shui')){
                        player.addSkill('chengneng_end_shui');
                    }
                    if (!player.hasSkill('chengneng_lose_shui')){
                        player.addSkill('chengneng_lose_shui');
                    }
                    'step 1'
					player.storage.chengneng_shui++;
                    player.useCard({ name: 'jiu', isCard: true, cardid:'chengneng_shui_jiu_id'},player);
                    'step 2'
                    var has=game.hasPlayer(function(current){
                        return player!= current && player.canUse({name:'sha'},current,true);//player.inRange(current);
                    });
                    var choice=[];
					if (has) {choice.push('视为使用一张【杀】');}
                    choice.push('令本回合出杀次数+1');
					player.chooseControl(choice).set('prompt',get.prompt2('chengneng_shui')).set('ai',function(event,player){
                        if(choice.length==1) return 0;
                        else{
                            var tagTargetNum=game.countPlayer(function(current){
                                if (current.hasSkill('forbidNoSuit')||current.hasSkillTag('forbidNoNumber',true,player)){
                                    return player!= current && player.canUse({name:'sha'},current,true)&&get.attitude(player,current)<0&&get.effect(current,{name:'sha'},player)>0&&player.countCards('h','sha')>0;
                                }
                                return false;
                            });
                            var feasibleTargetNum = game.countPlayer(function(current){
                                return player!= current && player.canUse({name:'sha'},current,true)&&get.attitude(player,current)<0&&get.effect(current,{name:'sha'},player)>0&&player.countCards('h','sha')>0;
                            });
                            if (tagTargetNum == feasibleTargetNum&&tagTargetNum!=0){
                                return 1;
                            }
                            if (player.countCards('h','sha') == 0) return 0;
                            if (player.getEquip('zhuge')) return 0;
                            if (player.countCards('h',function(card){
                                if (get.name(card)=='sha'&&get.nature(card)){
                                    return true;
                                }
                                else{
                                    return false;
                                }
                            }) == 0) {return 0;}
                            var hasAfraid = game.hasPlayer(function(current){
                                return player!= current && player.canUse({name:'sha'},current,true)&&(get.attitude(player,current)<0|| get.attitude(current,player)<0)&&get.effect(current,{name:'sha'},player)<=1;
                            });
                            if (player.storage.chengneng_shui > 0&&player.hasSkill('jiu')&&player.storage.jiu>1&&(hasAfraid||Math.random()<0.5)){
                                return 0;
                            }
                            if (Math.random() < 0.5){
                                return 0;
                            }
                            else{
                                return 1;
                            }
                        }
                        
					});
                    'step 3'
                    if (result.control == '视为使用一张【杀】'){
                        player.chooseTarget(get.prompt('chengneng_shui'),'请选择使用【杀】的目标',true,function(card,player,target){
                            if(player==target) return false;
                            return player.canUse({name:'sha'},target,true);
                        }).set('ai',function(target){
                            var player = _status.event.player;
                            if (target.hasSkill('forbidNoSuit')||target.hasSkillTag('forbidNoNumber',true,_status.event.player)){
                                return 0;
                            }
                            if (get.attitude(player,target)<0 || get.attitude(target,player)<0){
                                return get.effect(target,{name:'sha'},_status.event.player)+100;
                            }
                            else{
                                return -1;
                            }
                            
                        });
                    }
                    else if (result.control == '令本回合出杀次数+1'){
                        player.storage.useExtraSha++;
                        event.finish();
                    }
                    else {
                        event.finish();
                    }
                    'step 4'
                    if (result.bool && result.targets.length > 0){
                        player.useCard({name:'sha',isCard:true,cardid:"chengneng_shui_sha_id"},result.targets[0],false);
                    }
				},
                ai:{
                    threaten:5.5,
                    expose:0.3,
					order:function(){
                        return get.order({name:'sha'})+0.3;
                    },
                    result:{
						player:function(player){
                            var has=game.hasPlayer(function(current){
                                if (current.hasSkill('forbidNoSuit')||current.hasSkillTag('forbidNoNumber',true,player)){
                                    return player!= current && player.canUse({name:'sha'},current,true)&&get.attitude(player,current)<0&&get.effect(current,{name:'sha'},player)>0&&player.countCards('h','sha')>0;
                                }
                                return player!= current && player.canUse({name:'sha'},current,true)&&(get.attitude(player,current)<0 || get.attitude(current,player)<0)&&get.effect(current,{name:'sha'},player)+2.5>0;
                            });
                            if(has) {
                                if (player.storage.chengneng_shui == 0){
                                    if (player.hp >= 3){
                                        return Math.random() < 0.9 ? 1 : 0;
                                    }
                                    else{
                                        return Math.random() < 0.7 ? 1 : 0;
                                    }
                                }
                                else{
                                    if (player.hp >= 3){
                                        return Math.random() < 0.5 ? 1 : 0;
                                    }
                                    else{
                                        return Math.random() < 0.25 ? 1 : 0;
                                    }
                                }
                            }
                            else{
                                return 0;
                            }
						}
					},
				},
				mod:{
                    cardUsable:function (card,player,num){
						if(card.name=='sha') return num+player.storage.useExtraSha;
					},
					maxHandcard:function(player,num){
						return num-player.storage.chengneng_shui;
					},
				},

            },

            chengneng_lose_shui:{
                audio:2,
				trigger:{player:'phaseUseEnd'},
				silent:true,
                popup:false,
                direct:true,
                forced:true,
                filter:function(event,player){
                    return player.storage.chengneng_shui > 0;
                },
				content:function(event){
                    player.loseHp(player.storage.chengneng_shui);
                    player.logSkill('chengneng_lose_shui');
				}
			},


            chengneng_end_shui:{
				trigger:{player:'phaseAfter'},
				silent:true,
                forced:true,
				content:function(){
					player.storage.chengneng_shui=0;
                    player.storage.useExtraSha = 0;
				}
			},
            
            yilian_shui:{
                audio:2,
                popup:false,
                silent:true,
                frequent:true,
                locked:false,
                forced:false,
                trigger:{
                    player:'phaseZhunbei',
                },
                filter:function(event,player){
                    var has=game.hasPlayer(function(current){
                        return current.sex == 'female';
                    });
                    return has;
                },
                content:function(event){
                    'step 0'
                    player.chooseBool(get.prompt2('yilian_shui')).set('ai',function(){
                        return true;
                    });
                    'step 1'
                    if (!result.bool){
                        event.finish();
                    }
                    else{
                        event.goto(2);
                    }

                    'step 2'
                    if (!player.hasSkill('yilian_end_shui')){
                        player.addSkill('yilian_end_shui');
                    }
                    player.chooseTarget(get.prompt('yilian_shui'),"请选择一名女性角色，成为【依恋】", function(card,player,target){
                        //if(player==target) return false;
                        return target.sex == 'female';
                    }).set('ai',function(target){
                        // if (player == target) return 50;
                        if (get.attitude(player,target) >= 0 && get.attitude(target,player) >= 0 ){
                            return 20*Math.random()+get.attitude(player,target);
                        }
                        else{
                            return 5*Math.random()+get.attitude(player,target);
                        }
                    });
                    'step 3'
                    if (result.bool && result.targets.length > 0){
                        player.logSkill('yilian_shui',result.targets[0]);
                        // game.log(player,'选择了',result.targets[0],'作为【依恋】');
                        if (player!=result.targets[0]){
                            game.log(player,'爱上了',result.targets[0]);
                        }
                        else{
                            game.log(player,'爱上了自己');
                        }
                        result.targets[0].storage.shuimiaoer = player;
                        result.targets[0].storage.yilian_target_recover_shui = player;
                        player.storage.yilian_target = result.targets[0];
                        // result.targets[0].syncStorage('shuimiaoer');
                        result.targets[0].syncStorage('yilian_target_recover_shui');
                        player.syncStorage('yilian_target');
                        player.addSkill('yilian_recover_shui');
                        player.addSkill('yilian_collectCard_shui');
                        result.targets[0].addSkill('yilian_target_recover_shui');
                        result.targets[0].addSkill('yilian_target_collectCard_shui');

                    }
                },
                ai:{
                    threaten:0.5,
                    expose:0.75,
                },

            },

            yilian_recover_shui:{
                silent:true,
                forced:true,
                trigger:{
                    player:'recoverAfter',
                },
                filter:function(event,player){
                    return player.storage.yilian_target.isIn()&&player.storage.yilian_target.hp < player.storage.yilian_target.maxHp;
                },
                content:function(event){
                    player.logSkill('yilian_shui');
                    if (player != player.storage.yilian_target){
                        game.log(player,'与',player.storage.yilian_target,'两个美人儿醉醺醺地拥吻在一起，交换着彼此的口水，胴体交合，摩擦，刹那间，春光乍泄，春意盎然');
                    }else{
                        game.log(player,'醉醺醺地躺在床上，迷恋着自己的胴体，这美妙绝伦的艺术品，玉指在两腿间的唇瓣上摩擦，刹那间，春光乍泄，春意盎然');
                    }
                    player.storage.yilian_target.recover(Math.min(trigger.num,player.storage.yilian_target.maxHp-player.storage.yilian_target.hp));
                    game.delay(2);
                },
            },

            yilian_collectCard_shui:{
                popup:false,
                silent:true,
                frequent:true,
                trigger:{
                    player:'phaseDiscardAfter',
                },
                filter:function(event,player){
                    if (player.isIn()&&player.storage.yilian_target.isIn()){
                        return player.getHistory('lose',function(evt){
							return evt.type=='discard'&&evt.getParent('phaseDiscard')==event&&evt.hs.filterInD('d').length>0;
						}).length>0;
                    }
					return false;
				},
                content:function(event){
                    'step 0'
                    player.storage.yilian_target.chooseBool(get.prompt('yilian_shui'),'是否获得她此阶段弃置的所有牌？').set('ai',function(){
                        return true;
                    });
                    'step 1'
                    if (result.bool){
                        var cards=[];
                        var cards2=[];
                        game.getGlobalHistory('cardMove',function(evt){
                            if(evt.name=='cardsDiscard'&&evt.getParent('phaseDiscard')==trigger) cards.addArray(evt.cards.filterInD('d'));
                        });
                        game.countPlayer2(function(current){
                            current.getHistory('lose',function(evt){
                                if(evt.type!='discard'||evt.getParent('phaseDiscard')!=trigger) return;
                                cards.addArray(evt.cards.filterInD('d'));
                                if(current==trigger.player) cards2.addArray(evt.hs.filterInD('d'));
                            })
                        });
                        event.cards=cards;
                        event.goto(2);
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    player.logSkill('yilian_shui');
                    if (player!=player.storage.yilian_target){
                        player.storage.yilian_target.popup(get.translation('yilian_shui'));
                    }
                    player.storage.yilian_target.gain(event.cards);
                    player.storage.yilian_target.$gain2(event.cards);
                    if (player != player.storage.yilian_target){
                        game.log(player,'这醉醺醺的美人儿喝多了，恍惚欲吐，',player.storage.yilian_target,'一口吻上去，嘴对着嘴，将那呕出的滚滚欲液尽数吞进自己的胃里');
                    }
                    game.log(player.storage.yilian_target,'获得了',event.cards);
                    game.delay(2);
                },


            },

            yilian_target_recover_shui:{
                // mark:true,
                // marktext:"恋",
                mark:'character',
                intro:{
                    name2:"依恋",
                    content:"水淼儿的【依恋】",
                },
                silent:true,
                forced:true,
                trigger:{
                    player:'recoverAfter',
                },
                filter:function(event,player){
                    return player.storage.shuimiaoer.hp < player.storage.shuimiaoer.maxHp;
                },
                content:function(event){
                    player.storage.shuimiaoer.logSkill('yilian_shui');
                    if (player != player.storage.shuimiaoer){
                        game.log(player,'与',player.storage.shuimiaoer,'两个美人儿醉醺醺地拥吻在一起，交换着彼此的口水，胴体交合，摩擦，刹那间，春光乍泄，春意盎然');
                    }else{
                        game.log(player,'醉醺醺地躺在床上，迷恋着自己的胴体，这美妙绝伦的艺术品，玉指在两腿间的唇瓣上摩擦，刹那间，春光乍泄，春意盎然');
                    }
                    player.storage.shuimiaoer.recover(Math.min(trigger.num,player.storage.shuimiaoer.maxHp-player.storage.shuimiaoer.hp));
                    game.delay(2);
                },

            },

            yilian_target_collectCard_shui:{
                popup:false,
                silent:true,
                frequent:true,
                trigger:{
                    player:'phaseDiscardAfter',
                },
                filter:function(event,player){
                    if (player.isIn()&&player.storage.shuimiaoer.isIn()){
                        return player.getHistory('lose',function(evt){
							return evt.type=='discard'&&evt.getParent('phaseDiscard')==event&&evt.hs.filterInD('d').length>0;
						}).length>0;
                    }
					return false;
				},
                content:function(event){
                    'step 0'
                    player.storage.shuimiaoer.chooseBool(get.prompt('yilian_shui'),'是否获得她此阶段弃置的所有牌？').set('ai',function(){
                        return true;
                    });
                    'step 1'
                    if (result.bool){
                        var cards=[];
                        var cards2=[];
                        game.getGlobalHistory('cardMove',function(evt){
                            if(evt.name=='cardsDiscard'&&evt.getParent('phaseDiscard')==trigger) cards.addArray(evt.cards.filterInD('d'));
                        });
                        game.countPlayer2(function(current){
                            current.getHistory('lose',function(evt){
                                if(evt.type!='discard'||evt.getParent('phaseDiscard')!=trigger) return;
                                cards.addArray(evt.cards.filterInD('d'));
                                if(current==trigger.player) cards2.addArray(evt.hs.filterInD('d'));
                            })
                        });
                        event.cards=cards;
                        event.goto(2);
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    player.storage.shuimiaoer.logSkill('yilian_shui');
                    if (player!=player.storage.shuimiaoer){
                        player.popup(get.translation('yilian_shui'));
                    }
                    player.storage.shuimiaoer.gain(event.cards);
                    player.storage.shuimiaoer.$gain2(event.cards);
                    if (player != player.storage.shuimiaoer){
                        game.log(player,'这醉醺醺的美人儿喝多了，恍惚欲吐，',player.storage.shuimiaoer,'一口吻上去，嘴对着嘴，将那呕出的滚滚欲液尽数吞进自己的胃里');
                    }
                    game.log(player.storage.shuimiaoer,'获得了',event.cards);
                    game.delay(2);
                },
            },


            yilian_end_shui:{
                silent:true,
                forced:true,
                trigger:{
                    player:["phaseZhunbeiBegin",'dieBegin'],
                },
                content:function(event){
                    if (player.hasSkill("yilian_recover_shui")){
                        player.removeSkill("yilian_recover_shui");
                    }
                    if (player.hasSkill("yilian_collectCard_shui")){
                        player.removeSkill("yilian_collectCard_shui");
                    }

                    var has=game.hasPlayer(function(current){
                        if (current.hasSkill('yilian_target_recover_shui')){
                            current.removeSkill('yilian_target_recover_shui');
                        }
                        if (current.hasSkill('yilian_target_collectCard_shui')){
                            current.removeSkill('yilian_target_collectCard_shui');
                        }
                        
                    });
                }
            },

            
            baihe_shui:{
                audio:4,
                locked:true,
                forced:true,
                popup:false,
                group:['baihe_nv_shui','baihe_nan_shui','baihe_trick_shui','baihe_effect'],
                ai:{
                    threaten:2.5,
                    damageBonus:true,
                    skillTagFilter:function(player,tag,arg){
                        var right = player.getHistory('damage',function(evt){
                            return evt!=event
                        }).length==0;
                        if (tag == 'damageBonus'&&arg&&arg.sex == 'male'&&right){
                            return true;
                        }
                        else{
                            return false;
                        }
					},
                },
            },

            baihe_effect:{
                audio:false,
                silent:true,
                popup:false,
                direct:true,
                trigger:{
                    target:"shaBefore",
                },
                forced:true,
                filter:function(event,player){
                    return false;
                },
                content:function(event){
                    event.finish();
                },
                ai:{
                    effect:{
                        target:function(card,player,target){
                            if (player.sex == 'male'&&get.type(card) == 'trick'&&get.tag(card, 'damage')&&!get.name(card)=='juedou'){
                                return 'zerotarget';
                            }
                            
                        },
                    },
                },
            },

            baihe_nv_shui:{
                audio:2,
                forced:true,
                silent:true,
                popup:false,
                trigger:{
                    target:'useCardToTarget',
                },
                filter:function(event,player){
                    return event.player.sex == 'female'&&event.card.name == 'tao';
                },
                content:function(event){
                    player.logSkill('baihe_nv_shui');
                    game.log(player,'额外回复1点体力')
                    player.recover(1);
                },
            },

            baihe_nan_shui:{
                audio:2,
                forced:true,
                silent:true,
                popup:false,
                usable:1,
                trigger:{
                    source:'damageBegin1',
                },
                filter:function(event,player){
                    return true;//event.player.sex == 'male';
                },
                content:function(event){
                    if (trigger.player.sex == 'male'){
                        player.logSkill('baihe_nan_shui');
                        game.log(player,'对男性角色造成伤害+1');
                        trigger.num++;
                    }
                    else{
                        event.finish();
                    }
                },
            },


            baihe_trick_shui:{
                forced:true,
                silent:true,
                popup:false,
                direct:true,
                trigger:{
                    target:'useCardToTarget',
                },
                filter:function(event,player){
                    return event.player.sex == 'male'&&get.type(event.card) == 'trick'&&get.tag(event.card, 'damage');
                },
                content:function(event){
                    'step 0'
                    event.cardName = trigger.card.name;
                    event.cardSuit = trigger.card.suit;
                    event.cardNumber = trigger.card.number;
                    event.cardCardid = trigger.card.cardid;
                    event.target = trigger.player;
                    event.cardCard = trigger.card;
                    var evt = trigger.getParent();
                    evt.triggeredTargets2.remove(player);
                    evt.targets.remove(player);
                    trigger.cancel();
                    'step 1'
                    player.logSkill('baihe_nan_shui');
                    game.log(player,'成为了男性角色',event.target,'伤害类锦囊牌',event.cardCard,'的目标后，','将自己从此牌目标中移除，并以',event.target,'为唯一目标反打这张',event.cardCard);
                    player.useCard({ name: event.cardName, isCard: true ,suit:event.cardSuit,number:event.cardNumber,cardid:event.cardCardid,cards:[event.cardCard]},event.target);//.set('skill','baihe_nan_shui');
                    player.line(event.target,'green');

                },
                
            },


            lashou_jin:{
                audio:4,
                popup:false,
                forced:false,
                locked:false,
                group:['lashou_sha_jin','lashou_loseHp_jin','lashou_jueqing_jin'],
                ai:{
                    threaten:7.8,
					jueqing:true,
				}
            },

            lashou_sha_jin:{
                audio:2,
                priority:1,
                silent:true,
                trigger:{
                    global:"damageAfter",
                },
                filter:function(event,player){
                    return event.player.isAlive()&&event.card&&event.card.name == 'sha'&&event.player!=player&&event.player.sex=='female';
                },
                content:function(event){
                    'step 0'
                    event.me = player;
                    var goon = get.attitude(player, trigger.player) < 0;
                    var lowHp = Math.random()+(1 - trigger.player.hp/trigger.player.maxHp) > 0.75;
                    var next = player.chooseToUse(get.prompt2('lashou_jin'),{name:'sha'},trigger.player);
                    next.ai = function (card) {
                        var current_player=_status.currentPhase;
                        if (event.me == current_player && goon && Math.random() < 0.95){
                            return 1;
                        }
                        else if (goon&&lowHp) {
                            return 1;
                        }
                        return 0;
                    };
                    next.logSkill = ["lashou_sha_jin", trigger.player];
                    'step 1'
                    if (result.bool){
                        game.delay(2);
                    }
                },
                ai:{
                    expose:0.35,
                },
            },

            lashou_loseHp_jin:{
                audio:2,
                priority:1,
                silent:true,
                trigger:{
                    global:"loseHpAfter",
                },
                filter:function(event,player){
                    return event.player.isAlive()&&player.countCards('h','tao')+player.countCards('h','jiu') > 0;//event.card&&event.card.name == 'sha'&&event.player!=player&&event.player.sex=='female';
                },
                content:function(event){
                    'step 0'
                    event.me = player;
                    var goon = get.attitude(player, trigger.player) < 0;
                    var lowHp = Math.random()+(1 - trigger.player.hp/trigger.player.maxHp) > 0.75;
                    var selfGood = Math.random()+player.hp/player.maxHp > 0.8;
                    var next = player.chooseToDiscard(get.prompt('lashou_jin'),'当一名角色流失体力后，你可以立刻弃一张【桃】或【酒】，令其流失1点体力。');
                    next.ai = function (card) {
                        if (goon&&trigger.player.hasSkillTag('maihp')&&trigger.player.hp>1){
                            return -1;
                        }
                        else if (get.attitude(player, trigger.player)>2&&trigger.player.hasSkillTag('maihp')&&trigger.player.hp>1){
                            if (card.name == "jiu") return 2;
                            return 1;
                        }
                        var current_player=_status.currentPhase;
                        if (event.me == current_player && goon && Math.random() < 0.95){
                            if (card.name == "jiu") return 2;
                            return 1;
                        }
                        if (goon&&lowHp&&selfGood) {
                            if (card.name == "jiu") return 2;
                            return 1;
                        }
                        return 0;
                    };
                    next.filterCard = function (card) {
                        return get.name(card) == "jiu" || get.name(card) == "tao";
                    };
                    next.selectCard = function () {
                        return [1, 1];
                    };
                    'step 1'
                    if (result.bool){
                        trigger.player.loseHp(1);
                        player.logSkill('lashou_loseHp_jin',trigger.player);
                        game.delay(1);
                    }
                },
                ai:{
                    expose:0.35,
                },
            },

            lashou_jueqing_jin:{
                popup:false,
                silent:true,
                frequent:true,
				trigger:{source:'damageBefore'},
				forced:false,
				priority:16,
				// check:function(){return false;},
                filter:function(event,player){
                    return true;
                },
				content:function(event){
                    'step 0'
                    event.me = player;
                    var goon = get.attitude(player, trigger.player) < 0;
                    player.chooseBool(get.prompt('lashou_jin'),'你对一名角色造成伤害之前，你可以防止此伤害，并令其流失1点体力。').set('ai',function(event,player){
                        if (goon&&trigger.player.hasSkillTag('maihp')&&trigger.player.hp>1){
                            return false;
                        }
                        if (goon&&trigger.player.hasSkill('weiyi_shou')){
                            if (trigger.player.countSkillWithInfo()>1){
                                return true;
                            }
                        }
                        else if (get.attitude(player, trigger.player)>2&&trigger.player.hasSkillTag('maihp')&&trigger.player.hp>1){
                            return true;
                        }
                        var current_player=_status.currentPhase;
                        if (!goon){
                            var mode = get.mode();
                            if (trigger.num > 1 && Math.random()<0.9){
                                return true;
                            }
                            else if (mode =='identity'&&(player.identity=='zhu')&&trigger.player.hp <= 1&&Math.random()<0.9){
                                return true;
                            }
                            else {
                                return false;
                            }
                    
                        }
                        else if (current_player == player){
                            if (trigger.card&&get.name(trigger.card) == 'sha'&&trigger.player!=player&&trigger.player.sex == 'female'){
                                if (trigger.num > 1 && Math.random()<0.95){
                                    return false;
                                }
                                else if (player.countCards('h','sha') > 0 && Math.random()<0.95){
                                    return false;
                                }
                                else{
                                    return true;
                                }
                            }
                            else{
                                if (trigger.num > 1){
                                    if (trigger.num > 2){
                                        return false;
                                    }
                                    if (player.countCards('h','tao')+player.countCards('h','jiu') <= 3&& Math.random()<0.95){
                                        return false;
                                    }
                                    else{
                                        return true;
                                    }
                                }
                                else{
                                    if(trigger.player.hp > 1 || trigger.player.hasSkillTag('maixie')||trigger.player.hasSkillTag('maixie_hp')||trigger.player.hasSkillTag('maixie_defend')){
                                        return true;
                                    }
                                    else{
                                        return false;
                                    }
                                }
                            }
                        }
                        else{
                            if (trigger.card&&trigger.card&&trigger.card.name == 'sha'&&trigger.player!=player&&trigger.player.sex == 'female'){
                                if (trigger.num > 1 && Math.random()<0.95){
                                    return false;
                                }
                                else if (player.countCards('h','sha') > 0 && Math.random()<0.95){
                                    return false;
                                }
                                else{
                                    return true;
                                }
                            }
                            else{
                                if (trigger.num > 1){
                                    if (player.countCards('h','tao')+player.countCards('h','jiu') <= 5&& Math.random()<0.95){
                                        return false;
                                    }
                                    else{
                                        return true;
                                    }
                                }
                                else{
                                    if(trigger.player.hp > 1 || trigger.player.hasSkillTag('maixie')||trigger.player.hasSkillTag('maixie_hp')||trigger.player.hasSkillTag('maixie_defend')){
                                        return true;
                                    }
                                    else{
                                        return false;
                                    }
                                }
                            }
                        }
                    });
                    'step 1'
                    if (result.bool){
                        trigger.cancel();
                        // player.line(trigger.player,'green')
					    trigger.player.loseHp(1);
                        player.logSkill('lashou_loseHp_jin',trigger.player);
                        game.delay(1);
                    }
					
				},
				ai:{
					jueqing:true,
				}
			},


            
            chengting_jin:{
                audio:2,
                silent:true,
                forced:true,
                locked:true,
                popup:false,
                group:['chengting_sha_jin','chengting_taojiu_jin','chengting_discard_jin'],

            },

            chengting_sha_jin:{
                forced:true,
                silent:true,
                popup:false,
                shaRelated:true,
                trigger:{
                    player:["useCard","respond"],
                },
                filter:function(event,player){
                    return event.card&&event.cards.length==1&&event.card.name=='sha'&&(get.type(event.cards[0])=='equip'&&get.subtype(event.cards[0])!='equip3'&&get.subtype(event.cards[0])!='equip4');
                },
                content:function(event){
                    player.logSkill('chengting_taojiu_jin');
                    game.log(player,'的肚皮撑挺得太大，身上的装备都会被滚挺的肚皮崩弹出去，砸伤别人');
                    game.playAudio('skill','chengting_sha_jin'+1);
                    game.log(player,"将装备牌视为","#y杀");
                },
                mod:{
					cardname:function(card,player,name){
						if(['equip'].contains(lib.card[card.name].type)&&lib.card[card.name].subtype!='equip3'&&lib.card[card.name].subtype!='equip4') return 'sha';
					},
					cardnature:function(card,player){
						if(['equip'].contains(lib.card[card.name].type)&&lib.card[card.name].subtype!='equip3'&&lib.card[card.name].subtype!='equip4') return false;
					},
				},

            },

            chengting_taojiu_jin:{
                audio:1,
                forced:true,
                silent:true,
                popup:false,
                trigger:{
                    player:["useCard"],
                },
                filter:function(event,player){
                    return event.card&&event.cards.length==1&&event.card.name=='jiu'&&(get.type(event.cards[0])=='delay');
                },
                content:function(event){
                    player.logSkill('chengting_taojiu_jin');
                    game.log(player,'的肚皮撑挺得太大，任何的拖延都不再有空间，将被她当做酒一般喝进那肚里');
                    game.playAudio('skill','jiuyin'+1);
                    game.log(player,"将延迟锦囊牌视为","#y酒");
                },
                mod:{
					cardname:function(card,player,name){
						if(['delay'].contains(lib.card[card.name].type)) return 'jiu';
					},
				},
            },

            chengting_discard_jin:{
                forced:true,
                silent:true,
                popup:false,
                trigger:{
                    player:'recoverAfter',
                },
                filter:function(event,player){
                    return player.maxHp > 1 && player.hp == player.maxHp;
                },
                content:function(event){
                    'step 0'
                    var selfEquip = player.getCards('e');
                    player.logSkill('chengting_jin');
                    game.log(player,'这回是吃了个爽，身前浑圆的大肚子故意挺了挺，便“嘶啦”一身将浑身的衣衫都撑破，身下的马儿都被累瘸，周围人都被这巨大的肚腹挤得上吐下泻')
                    player.discard(selfEquip);
                    game.delay(1);
                    'step 1'
                    var has=game.hasPlayer(function(current){
                        if (current!=player&&get.distance(current,player)<=1){
                            var differ = 0;
                            if (current.countCards('h') > current.hp){
                                differ = current.countCards('h') - current.hp;
                                current.chooseToDiscard(get.translation('chengting_jin'),'请弃置'+get.cnNumber(differ)+'张牌','h',differ,true).set(ai,function(card){
                                    return -get.value(card)+Math.random();
                                });
                                current.line(player,'green');
                                
                            }
                            
                        }
                    });
                },

            },

            
            baoshi_jin:{
                audio:2,
                popup:false,
                forced:false,
                locked:false,
                frequent:true,
                skillAnimation:'epic',
                animationColor:"thunder",
                trigger:{
                    player:"phaseUseEnd",
                },
                filter:function(event,player){
                    return true;
                },
                content:function(event){
                    'step 0'
                    player.chooseBool(get.prompt2('baoshi_jin')).set('ai',function(event,player){

                        return true;
                    });

                    'step 1'
                    if (!result.bool){
                        event.finish();
                    }
                    else{
                        event.handNum = 0;
                        if (player.countCards('h') > 0){
                            event.handNum = player.countCards('h');
                            var playerHand = player.getCards('h');
                            player.discard(playerHand);
                        }
                    }
                    'step 2'
                    player.storage.baoshi_jin = 1;
                    player.addSkill('baoshi_distance_jin');
                    player.addSkill('baoshi_distance_remove_jin');
                    'step 3'
                    player.logSkill('baoshi_jin');
                    game.log(player,'才不管这么多了，张口迎着风就是一吸，只见全场所有角色的装备和判断牌，似一股洪流般被',player,'大张的红唇一口吞没。如此海量的牌哪是瞬间可以吞完的，',player,'口中吞喝着，眼神却示意下属阿兰快来听听自己这巨肚里的动静。“咕噜咕噜……”缓慢有力的肠胃蠕动声透过下属的耳朵紧贴着的厚实的炙热肚皮，传入她的耳中。虽然受过重创，但',player,'这大肚子里的脏腑显然养得极好，底子够厚，这会缓过劲来倒是恢复如常，尽管蠕动的声势弱了几分。然而脏腑蠕动声此刻却只是背景板，最为响亮的便是“哗哗”吞咽声，阿兰无法想象，奔腾瀑布在夫人这坚硬如石的巨肚会遭遇何物，是和肚皮一样坚韧的顽石？还是柔软娇弱的嫩肉？小半柱香的功夫过去，',player,'缓缓合拢红唇，神情略有些难受地捧住了自己鼓胀沉重的巨肚，毕竟如此海量的牌短时间全入腹中，',player,'也感到不适。她张口打出一个携带潮气的湿热饱嗝，双手抚上自己这巨肚时才发现火热的肚皮被清凉的牌充盈着，皮肉因膨胀而变得绵软之余，温度也凉了不少，薄薄一层肚皮，几乎撑得透明');
                    event.cardNum = event.handNum;
                    event.allTheEJ = [];
                    event.allThePlayer = [];
                    var has=game.hasPlayer(function(current){
                        if (current.countCards('ej')>0){
                            var currentEJ = current.getCards('ej');
                            event.cardNum = event.cardNum + current.countCards('ej');
                            player.line(current,'green');
                            player.gain(currentEJ,current);
                            event.allTheEJ.push(currentEJ);
                            event.allThePlayer.push(current);
                            // current.$give(currentEJ,player,true);
                        }
                    });
                    'step 4'
                    for (var i = 0; i < event.allTheEJ.length; i++){
                        event.allThePlayer[i].$give(event.allTheEJ[i],player,true);
                    }
                    'step 5'
                    if (event.cardNum > 0){
                        player.gainMaxHp(event.cardNum);
                        game.delay(2);
                    }
                    'step 6'
                    if (event.cardNum > 0 && player.hp < player.maxHp){
                        player.recover(player.maxHp - player.hp);
                        game.delay(2);
                    }
                    

                },
                ai:{
                    threaten:9,
                },

            },

            baoshi_distance_jin:{
                popup:false,
                silent:true,
                mark:true,
				marktext:'食',
                forced:true,
				intro:{
                    name:"暴食",
					content:'其他角色计算与你的距离-1',
				},
                mod:{
					globalTo:function(from,to,distance){
						if(typeof to.storage.baoshi_jin=='number'){
							return distance - 1;
						}
					}
				}
            },

            baoshi_distance_remove_jin:{
                popup:false,
                silent:true,
                forced:true,
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                content(event){
                    'step 0'
                    if (player.hasSkill('baoshi_distance_jin')){
                        player.removeSkill('baoshi_distance_jin');
                    }
                    'step 1'
                    player.removeSkill('baoshi_distance_remove_jin');
                },
                

            },
            
            ouni_jin:{
                audio:2,
                forced:true,
                popup:false,
                silent:true,
                trigger:{
                    player:"phaseZhunbei"
                },
                filter:function(event,player){
                    return player.maxHp > 1;
                },
                content:function(event){
                    'step 0'
                    event.popup = 0;
                    if (player.countCards('h')>0 && player.maxHp > 1){
                        player.chooseTarget(get.translation('ouni_jin'),get.translation('ouni_jin_info'), true,function(card,player,target){
                            if(player==target) return false;
                            return true;
                        }).set('ai',function(target){
                            var num = 0;
                            if (get.distance(target,player)<=2){
                                if (get.attitude(player,target) >= 0 && get.attitude(target,player) >= 0 ){
                                    num = num + get.attitude(player,target);
                                    if (target.hasSkillTag('maixie')||target.hasSkillTag('maixie_hp')){
                                        num = num - 1*Math.random();
                                    }
                                    if (player.countCards('h','tao')+player.countCards('h','jiu') > 0){
                                        num = num + 0.5*Math.random();
                                    }
                                }
                                else{
                                    num = num + get.attitude(player,target);
                                    if (target.hasSkillTag('maixie')||target.hasSkillTag('maixie_hp')){
                                        num = num + 12*Math.random();
                                    }
                                    if (player.countCards('h','tao')+player.countCards('h','jiu') > 0){
                                        num = num - 0.5*Math.random();
                                    }
                                }
                            }
                            else{
                                if (get.attitude(player,target) >= 0 && get.attitude(target,player) >= 0 ){
                                    num = num + 7*Math.random()+get.attitude(player,target);
                                    if (target.hasSkillTag('maixie')||target.hasSkillTag('maixie_hp')){
                                        num = num - 1*Math.random();
                                    }
                                    if (player.countCards('h','tao')+player.countCards('h','jiu') > 0){
                                        num = num + 12*Math.random();
                                    }
                                }
                                else{
                                    num = num - 7*Math.random()+get.attitude(player,target);
                                    if (target.hasSkillTag('maixie')||target.hasSkillTag('maixie_hp')){
                                        num = num + 5*Math.random();
                                    }
                                    if (player.countCards('h','tao')+player.countCards('h','jiu') > 0){
                                        num = num - 15*Math.random();
                                    }
                                }
                            }
                            return num;
                        });
                        event.goto(1);
                    }
                    else{
                        event.goto(2);
                    }
                    'step 1'
                    if (result.bool&&result.targets.length > 0){
                        var playerHand = player.getCards('h');
                        result.targets[0].gain(playerHand,player,'giveAuto','bySelf');
                        if(!result.targets[0].hasSkill('ouni_fengyin')){
                            result.targets[0].addTempSkill('ouni_fengyin');
                        }
                        player.logSkill('ouni_jin',result.targets[0]);
                        event.popup = 1;
                        game.log('“呕……”憋不住了！',player,'脑海中这个念头才刚刚闪过，只觉肚中前所未有过的剧烈翻滚倏然爆发，就像是整个胃囊翻了个身，这股从来没有感受过的汹涌呕吐感瞬间击溃了她的心神！恐怖的食糜洪流从',player,'口中倾泻而下，吐了',result.targets[0],'一身，带着浓郁的胃酸，醺臭难闻，令人发呕，',player,'此时犹如一头负伤的母兽，狼狈地匍匐在地，痛苦地喘息，呕吐着，任由自己受苦的巨肚尽情倾吐');
                        game.log(result.targets[0],'的非锁定技被醺得通通失效');
                        event.goto(2);
                    }
                    else{
                        event.goto(2);
                    }
                    'step 2'
                    if (player.maxHp > 1){
                        var diff = player.maxHp - 1;
                        player.loseMaxHp(diff);
                        game.playAudio('skill','multi_loss_maxHp');
                        player.draw(diff);
                        player.addTempSkill('duliang_yuling');
                        if (event.popup == 0){
                            player.logSkill('ouni_jin');
                        }
                        game.log(player,'将胃里的酒肉吐了个精光，她的肚子尤其是下腹明显舒坦了不少，向回收得服服帖帖的，只剩了胃里的一些残酒还在消化吸收，紧致的人鱼线又显现出来，性感得让人窒息，体力上限变为1')
                    }
                    else{
                        event.finish();
                    }

                },
                derivation:'duliang_yuling',
                ai:{
                    expose:0.1,
                    threaten:0.6,
                }

            },

            ouni_fengyin:{
				init:function(player,skill){
					var skills=player.getSkills(true,false);
					for(var i=0;i<skills.length;i++){
						if(get.is.locked(skills[i])||lib.skill[skills[i]].charlotte){
							skills.splice(i--,1);
						}
					}
					player.disableSkill(skill,skills);

                    //试验
                    var returnResult = '非锁定技失效';
                    var list=[];
                    for(var i in player.disabledSkills){
                        if(player.disabledSkills[i].contains(skill)){
                            list.push(i)
                        }
                    }
                    if(list.length){
                        var str='，失效技能：';
                        for(var i=0;i<list.length;i++){
                            if(lib.translate[list[i]+'_info']){
                                str+=get.translation(list[i])+'、';
                            }
                        }
                        player.storage.ouni_fengyin = returnResult + str.slice(0,str.length-1);
                        player.syncStorage('ouni_fengyin');
                    }
                    else{
                        player.storage.ouni_fengyin =  returnResult;
                        player.syncStorage('ouni_fengyin');
                    }

				},
				onremove:function(player,skill){
					player.enableSkill(skill);
				},
				locked:true,
				charlotte:true,
				mark:true,
                marktext:'呕',
				intro:{
                    name:'呕逆',
					content:function(storage,player,skill){
                        if (_status.video){
                            return player.storage.ouni_fengyin;
                        }
                        var returnResult = '非锁定技失效';
						var list=[];
						for(var i in player.disabledSkills){
							if(player.disabledSkills[i].contains(skill)){
								list.push(i)
							}
						}
						if(list.length){
							var str='，失效技能：';
							for(var i=0;i<list.length;i++){
								if(lib.translate[list[i]+'_info']){
									str+=get.translation(list[i])+'、';
								}
							}
							player.storage.ouni_fengyin = returnResult + str.slice(0,str.length-1);
                            player.syncStorage('ouni_fengyin');
						}
                        else{
                            player.storage.ouni_fengyin =  returnResult;
                            player.syncStorage('ouni_fengyin');
                        }
                        return player.storage.ouni_fengyin;
                        
					}
				}
			},



            muniu_kaer:{
                audio:4,
                silent:true,
                popup:false,
                group:['muniu_start_kaer','muniu_share_kaer'],
                ai:{
                    threaten:1.4,
                },
            },

            muniu_start_kaer:{
                audio:2,
                popup:false,
                forced:false,
                frequent:true,
                priority:2,
                trigger:{
                    global:'phaseZhunbei',
                },
                init:function(player){
					if(!player.storage.niu_kaer) player.storage.niu_kaer=[];
				},
                filter:function(event,player){
                    return player.countCards('h')>0&&(!player.hasSkill('niu_kaer')||(player.storage.niu_kaer&&player.storage.niu_kaer.length == 0));
                },
                content:function (event){
                    'step 0'
                    if (!player.hasSkill('muniu_end_kaer')){player.addSkill('muniu_end_kaer');}
                    if(!player.storage.niu_kaer) {player.storage.niu_kaer=[];}
                    player.chooseBool(get.prompt('muniu_kaer'),"每名角色的准备阶段，若你没有【牛】，则你可以将任意张手牌（至少一张）置于武将牌上，称为【牛】。").set('ai',function(card){
                        if (Math.random()<0.9){
                            return true;
                        }
                        else{
                            return false;
                        }
                    });
                    'step 1'
                    if (result.bool){
                        player.chooseCard('h','请选择任意张手牌置于你的武将牌上，称为【牛】',[1,Infinity],true).set('ai',function(card){
                            if (get.name(card)=='tao'){
                                return -13;
                            }
                            if (get.name(card)=='jiu'){
                                return -9;
                            }
                            if (player == _status.currentPhase){
                                if (get.type(card,'trick') == 'trick'){
                                    return -10;
                                }
                            }
                            return -get.value(card)+17*Math.random()+4;
                        });
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if(result.bool){
                        player.logSkill('muniu_start_kaer');
                        player.$give(result.cards.length,player,false);
                        player.storage.niu_kaer=player.storage.niu_kaer.concat(result.cards);
                        if (player.hasSkill('tongzhen_kaer')){
                            player.storage.kaer_jiuzi = player;
                        }
                        player.addSkill('niu_kaer');
                        player.syncStorage('niu_kaer');
                        game.addVideo('storage',player,['muniu_start_kaer',get.cardsInfo(player.storage.niu_kaer),'cards']);
                        game.log(player,'将'+get.cnNumber(result.cards.length)+'张牌置于其武将牌上，称为','#g【牛】');
                        player.lose(result.cards,ui.special,'toStorage');
                    }else{
                        event.finish();
                    }
                    'step 3'
                    game.delay(1);
                },
            },


            niu_kaer:{
                locked:true,
                popup:false,
                forced:true,
                mark:true,
                marktext:"牛",
                intro:{
                    name:"牛",
					content:'cardCount',
                    // content:'cards',
					onunmark:function(storage,player){
                        if(storage&&storage.length&&(!player.storage.muniu_share_kaer || player.storage.muniu_share_kaer == 1)){
							player.$throw(storage,1000);
							game.cardsDiscard(storage);
							game.log("#g【牛】","中的牌：",storage,'被置入了弃牌堆');
							player.storage.niu_kaer.length=0;
						}
					},
				},
                onremove:function(player){
                    'step 0'
                    game.log(player,'失去了','#g【牛】');
                    // if (player.hasSkill('niu_kaer')){
                    //     game.log(player,'失去了【牛】');
                    // }
                    if (!player.storage.kaer_jiuzi){
                        return;
                    }
                    else if (player.hp < player.maxHp || player.storage.kaer_jiuzi.hp < player.storage.kaer_jiuzi.maxHp||(player.storage.kaer_jiuzi.countCards('h')<player.storage.kaer_jiuzi.hp&&(!player.storage.kaer_jiuzi.hasSkill('forbidExtraDraw')))){
                        player.storage.kaer_jiuzi.logSkill('tongzhen_recover_kaer');
                        if (player.storage.kaer_jiuzi.countCards('h')<player.storage.kaer_jiuzi.hp&&(!player.storage.kaer_jiuzi.hasSkill('forbidExtraDraw'))){
                            if (_status.event.name == 'yanhua_kaer'){
                                player.storage.kaer_jiuzi.addTempSkill('forbidExtraDraw');
                            }
                            player.storage.kaer_jiuzi.draw(player.storage.kaer_jiuzi.hp-player.storage.kaer_jiuzi.countCards('h'));
                        }
                    }
                    'step 1'
                    player.recover(1);
                    player.storage.kaer_jiuzi.recover(1);
                    'step 2'
                    delete player.storage.kaer_jiuzi;
                    game.delay(2);

                },
                group:['tongzhen_damage_kaer','tongzhen_attack_kaer'],
            },

            forbidExtraDraw:{
                forced:true,
            },

            muniu_end_kaer:{
                silent:true,
                forced:true,
                trigger:{
                    player:['dieBegin'],
                },
                content:function(event){
                    var has=game.hasPlayer(function(current){
                        if (current.hasSkill('niu_kaer')){
                            // console.log("yuzhong去了呀");
                            current.removeSkill('niu_kaer');
                        }
                        else if (current.storage.kaer_jiuzi){
                            delete current.storage.kaer_jiuzi;
                        }
                        
                    });
                }
            },

            muniu_share_kaer:{
                audio:2,
                popup:false,
                forced:false,
                frequent:true,
                priority:2,
                trigger:{
                    global:'phaseJieshu',
                },
                filter:function(event,player){
                    var has=game.hasPlayer(function(current){
                        if (!current.hasSkill('niu_kaer')){
                            return true;
                        }
                    });
                    return has&&player.hasSkill('niu_kaer')&&(player.storage.niu_kaer&&player.storage.niu_kaer.length > 0);
                },
                content:function(event){
                    'step 0'
                    player.chooseBool(get.prompt('muniu_kaer'),"每名角色结束阶段，你可以将【牛】转移至一名没有【牛】的角色武将牌上。").set('ai',function(card){
                        var player = _status.currentPhase;
                        if (player.countCards('h') > 0&&Math.random()<0.9){
                            return true;
                        }
                        else if (player.countCards('h') <= 0&&Math.random()<0.95){
                            return true;
                        }
                        else{
                            return false;
                        }
                    });
                    'step 1'
                    if (result.bool){
                        player.storage.muniu_share_kaer = 2;
                        player.syncStorage('muniu_share_kaer');
                        player.chooseTarget('选择【牧牛】的目标',"每名角色结束阶段，你可以将【牛】转移至一名没有【牛】的角色武将牌上。",true,function(card,player,target){
                            return target!=player && !target.hasSkill('niu_kaer');
                        }).set('ai',function(target){     
                                return get.attitude(player,target)+Math.random();            
                        }); 
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if (result.bool){
                        player.logSkill('muniu_share_kaer',result.targets[0]);
                        event.NumCards = player.storage.niu_kaer.length;
                        game.log(player,'将'+get.cnNumber(event.NumCards)+'张','#g【牛】','牌置于',result.targets[0],'武将牌上，',result.targets[0],'获得','#g【牛】');
                        player.$give(player.storage.niu_kaer.length,result.targets[0],false);
                        if (player.hasSkill('tongzhen_kaer')){
                            result.targets[0].storage.kaer_jiuzi = player;
                        }
                        result.targets[0].storage.niu_kaer = [];
                        result.targets[0].storage.niu_kaer = result.targets[0].storage.niu_kaer.concat(player.storage.niu_kaer);
                        result.targets[0].syncStorage('niu_kaer');
                        result.targets[0].addSkill('niu_kaer');
                        player.removeSkill('niu_kaer');
                        player.storage.niu_kaer.length = 0;
                        player.storage.niu_kaer = [];
                        player.syncStorage('niu_kaer');
                    }
                    'step 3'
                    player.storage.muniu_share_kaer = 1;
                    player.syncStorage('muniu_share_kaer');
                    if (player.hasSkill('forbidExtraDraw')){
                        player.removeSkill('forbidExtraDraw');
                    }
                    game.delay(2);
                },
            },
            
            tongzhen_kaer:{
                audio:8,
                forced:true,
                locked:true,
                silent:true,
                popup:false,
                group:['tongzhen_draw_kaer'],
                ai:{
                    threaten:1.5,
                },
            },

            tongzhen_draw_kaer:{
                audio:2,
                forced:true,
                popup:false,
                silent:true,
                trigger:{
                    player:"useCardAfter",
                },
                filter:function(event,player){
                    return player.hasSkill('niu_kaer')&&player.storage.niu_kaer&&player.storage.niu_kaer.length != 0;
                },
                content:function(event){
                    'step 0'
                    player.logSkill('tongzhen_draw_kaer');
                    if (player.isMaxHandcard(true)){
                        player.draw(1);
                    }
                    else{
                        player.draw(player.storage.niu_kaer.length);
                    }
                    'step 1'
                    game.delay(1);
                    if (player.hasSkill('niu_kaer')&&player.storage.niu_kaer.length>0){
                        var card = player.storage.niu_kaer[0];
                        player.storage.niu_kaer.remove(card);
                        game.log(player,'弃置','#g【牛】','中的一张牌');
                        player.$throw(card,1000);
                        player.discard(card,'fromStorage');
                        player.syncStorage('niu_kaer');
                        if(player.storage.niu_kaer.length==0){
                            player.removeSkill('niu_kaer');
                        }
                        else{
                            player.markSkill('niu_kaer');
                        }
                    }
                    'step 2'
                    if (player.hasSkill('forbidExtraDraw')){
                        player.removeSkill('forbidExtraDraw');
                    }
                    
                },

            },

            tongzhen_damage_kaer:{
                audio:2,
                forced:true,
                popup:false,
                silent:true,
                trigger:{
                    player:'damageAfter',
                },
                filter:function(event,player){
                    return player.storage.kaer_jiuzi&&player.storage.niu_kaer&&player.storage.niu_kaer.length > 0 && event.player.isAlive();
                },
                content:function(event){
                    'step 0'
                    player.storage.kaer_jiuzi.logSkill('tongzhen_damage_kaer',player);
                    // trigger.player.gain(player.storage.niu_kaer[0],'draw2','log','fromStorage','bySelf');
                    trigger.player.$give(1,trigger.player,false);
                    var card = player.storage.niu_kaer[0];
                    trigger.player.gain(card,'giveAuto','bySelf','fromStorage');
                    game.log(trigger.player,'获得自己一张','#g【牛】','中的牌');
                    player.storage.niu_kaer.remove(card);
                    player.syncStorage('niu_kaer');
                    if(player.storage.niu_kaer.length==0){
                        player.removeSkill('niu_kaer');
                    }
                    else{
                        player.markSkill('niu_kaer');
                    }
                    'step 1'
                    if (player.storage.kaer_jiuzi&&player.storage.kaer_jiuzi.hasSkill('forbidExtraDraw')){
                        player.storage.kaer_jiuzi.removeSkill('forbidExtraDraw');
                    }

                },

            },

            tongzhen_attack_kaer:{
                audio:2,
                forced:true,
                popup:false,
                silent:true,
                trigger:{
                    source:'damageAfter',
                },
                filter:function(event,player){
                    return player.storage.kaer_jiuzi&&player.storage.niu_kaer&&player.storage.niu_kaer.length > 0 && event.player.isAlive();
                },
                content:function(event){
                    'step 0'
                    player.storage.kaer_jiuzi.logSkill('tongzhen_attack_kaer',trigger.player);
                    // trigger.player.gain(player.storage.niu_kaer[0],'draw2','log','fromStorage','bySelf');
                    player.$give(1,trigger.player,false);
                    var card = player.storage.niu_kaer[0];
                    trigger.player.gain(card,'giveAuto','bySelf','fromStorage');
                    game.log(trigger.player,'获得',player,'一张','#g【牛】','中的牌');
                    player.storage.niu_kaer.remove(card);
                    player.syncStorage('niu_kaer');
                    if(player.storage.niu_kaer.length==0){
                        player.removeSkill('niu_kaer');
                    }
                    else{
                        player.markSkill('niu_kaer');
                    }
                    'step 1'
                    if (player.storage.kaer_jiuzi&&player.storage.kaer_jiuzi.hasSkill('forbidExtraDraw')){
                        player.storage.kaer_jiuzi.removeSkill('forbidExtraDraw');
                    }

                },
            },

            tongzhen_recover_kaer:{
                audio:2,
            },
            
            yuanzhu_kaer:{
                audio:2,
                skillAnimation:true,
                animationColor:'wood',
                priority:1.5,
                popup:false,
                silent:true,
                frequent:true,
                forced:false,
                trigger:{
                    global:"dying",
                },
                filter:function(event,player){
                    var has=game.hasPlayer(function(current){
                        if (current.hasSkill('niu_kaer')&&current.storage.niu_kaer.length>0){
                            return true;
                        }
                    });
                    return has&&!player.hasSkill('yuanzhu_end_kaer');
                    // return has;
                },
                content:function(event){
                    'step 0'
                    player.chooseBool(get.prompt2('yuanzhu_kaer')).set('ai',function(event,player){
                        if (trigger.player == player){
                            return true;
                        }
                        else if (get.attitude(player,trigger.player)>0&&Math.random()<0.9){
                            return true;
                        }
                        else if (get.attitude(player,trigger.player)<=0){
                            return false;
                        }
                        else{
                            return false;
                        }
                    });

                    'step 1'
                    if(result.bool){
                        player.logSkill('yuanzhu_kaer',trigger.player);
                        player.addSkill('yuanzhu_end_kaer');
                        player.chooseTarget('选择弃置【牛】牌的目标',"每回合限一次，当有角色濒死时，你可以弃置任意角色【牛】中的一张牌，视为你对濒死角色使用了一张【桃】。",true,function(card,player,target){
                            return target.hasSkill('niu_kaer')&&target.storage.niu_kaer.length>0;
                        }).set('ai',function(target){     
                                return get.attitude(player,target)+10*Math.random();            
                        }); 
                    }else{
                        event.finish();
                    }
                    
                    'step 2'
                    if (result.bool){
                        game.log(player,'弃置',result.targets[0],'#g【牛】','中的一张牌');
                        var card = result.targets[0].storage.niu_kaer[0];
                        result.targets[0].$throw(card,1000);
                        result.targets[0].storage.niu_kaer.remove(card);
                        player.discard(card,'fromStorage');
                        result.targets[0].syncStorage('niu_kaer');
                        if(result.targets[0].storage.niu_kaer.length==0){
                            result.targets[0].removeSkill('niu_kaer');
                        }
                        else{
                            result.targets[0].markSkill('niu_kaer');
                        }
                    }
                    else{
                        event.finish();
                    }
                    'step 3'
                    if (player.hasSkill('forbidExtraDraw')){
                        player.removeSkill('forbidExtraDraw');
                    }
                    // player.line(trigger.player,'green');
                    player.useCard({name:'tao',isCard:true,cardid:'yuanzhu_kaer_id'},trigger.player);
                    
                    
                    // var has=game.hasPlayer(function(current){
                    //     if (current.hasSkill('niu_kaer')&&current.storage.niu_kaer.length>0){
                    //         return true;
                    //     }
                    // });
                    // if (trigger.player.hp < 0 && has) {event.goto(0)};
                },
                ai:{
                    expose:0.6,
                    order:1,
                    threaten:1.5,
                    save:true,
					respondTao:true,
                },

            },

            yuanzhu_end_kaer:{
                silent:true,
                popup:false,
                trigger:{
                    global:"phaseEnd",
                },
                content:function(){
                    player.removeSkill('yuanzhu_end_kaer');
                },
            },
            
            yanhua_kaer:{
                audio:4,
                skillAnimation:true,
                animationColor:'soil',
                popup:false,
                silent:true,
                direct:true,
                enable:'phaseUse',
                filter:function(event,player){
                    var has=game.hasPlayer(function(current){
                        if (current.hasSkill('niu_kaer')&&current.storage.niu_kaer.length>0){
                            return true;
                        }
                    });
                    return has;
                },
                content(event){
                    'step 0'
                    player.logSkill('yanhua_kaer');
                    event.num_cards = 0;
                    var has=game.hasPlayer(function(current){
                        if (current.hasSkill('niu_kaer')&&current.storage.niu_kaer.length>0){
                            event.num_cards = event.num_cards + current.storage.niu_kaer.length;
                            current.removeSkill('niu_kaer');
                        }
                    });
                    'step 1'
                    if (player.hasSkill('forbidExtraDraw')){
                        player.removeSkill('forbidExtraDraw');
                    }
                    player.chooseTarget('选择【烟花】的目标',"出牌阶段限，你可以弃置所有【牛】，然后选择至多X名角色（X为弃置【牛】中的总牌数），对每名选中的角色造成1点火焰伤害。",[1,event.num_cards],true,function(card,player,target){
                        return true;
                    }).set('ai',function(target){     
                        var player = _status.currentPhase;
                        // if(target.hasSkillTag('nofire')) return 0;
                        var eff = 0;
                        // if (target.hasSkill('niu_kaer')&&target.hp < target.maxHp){
                        //     eff = -4;
                        // }
                        if(target.hasSkillTag('nofire')||target.hasSkillTag('forbidNoCardDamage')){
                            eff = eff - 10;
                        }
                        eff = eff + 8/target.hp;
                        if (get.attitude(player,target)>0){
                            eff = eff - 10;
                        }
                        return -get.attitude(player,target)-get.attitude(target,player)+eff;
                        // return get.damageEffect(target,player)+eff+5;           
                    }); 
                    'step 2'
                    if (result.bool){
                        event.targets = result.targets;
                        event.targets.sort(lib.sort.seat);
                        game.log(player,'选择','#g【烟花】','的目标为',event.targets);
                        for (var i = 0; i < event.targets.length; i++){
                            player.line(event.targets[i],'fire');
                            event.targets[i].damage(1,'fire',player);
                        }
                    }
                    else{
                        event.finish();
                    }

                },
                ai:{
                    expose:0.3,
					order:function(){
                        return get.order({name:'huogong'})+0.2;
                    },
                    threaten:2,
					result:{
                        target:function(player,target){
							// if(target.hasSkillTag('nofire')) return 0;
                            if (target){
                                return get.damageEffect(target,player);
                            }
						},
                        player:function(player,target){
                            player.storage.num_cards = 0;
                            player.storage.enemy = 0;
                            var has=game.hasPlayer(function(current){
                                if (current.hasSkill('niu_kaer')&&current.storage.niu_kaer.length>0){
                                    player.storage.num_cards = player.storage.num_cards + current.storage.niu_kaer.length;
                                }
                                if (get.attitude(player,current)<0){
                                    player.storage.enemy++;
                                }
                            });
                            if (player.storage.num_cards > player.storage.enemy && Math.random()<0.3){
                                return 0;
                            }
                            if (player.storage.num_cards > player.storage.enemy+12 && Math.random()<0.6){
                                return 0;
                            }
                            if (target){
                                if (get.attitude(player,target) > 0 && get.attitude(target,player) > 0){
                                    return 0;
                                }
                            }
                            if(player.hp<=1) return 1;
                            if (Math.random()<0.7){
                                return 1;
                            }
                            else{
                                return 0;
                            }
                        },
					}
				},


            },




            weiyi_shou:{
                audio:2,
                priority:3,
                popup:false,
                silent:true,
                frequent:true,
                forced:false,
                locked:false,
                skillAnimation:"epic",
                animationColor:"soil",
                trigger:{
                    player:'damageBegin4'
                },
                filter:function(event,player){
                    return event.source!=undefined&&event.source!=player&&player.countSkillWithInfo()>1&&event.num >= player.hp;
                },
                content:function(event){
                    'step 0'
                    player.chooseBool(get.prompt2('weiyi_shou')).set('ai',function(event,player){
                        if (get.attitude(event.source,player)>2){
                            return false;
                        }
                        return player.countCards('h','tao')+player.countCards('h','jiu')+player.hp <= trigger.num;
                    });
                    'step 1'
                    if (result.bool){
                        var skills  = player.getSkillWithInfo();
                        skills.remove('weiyi_shou');
                        // var choices = [];
                        // for (var i = 0; i < skills.length; i++){
                        //     choices.push(get.translation(skills[i]));
                        // }
                        // choices.push('cancel2');
                        skills.push('cancel2');
                        player.chooseControl(skills).set('prompt',get.prompt2('weiyi_shou')).set('ai',function(event,player){
                            if (skills.length>3){
                                return skills.length - 2;
                            }
                            else{
                                return 0;
                            }
                        });
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if (result.control != 'cancel2'){
                        player.logSkill('weiyi_shou',trigger.source);
                        player.removeSkill(result.control);
                        trigger.source.addTempSkill(result.control,'roundStart');
                        if (!trigger.source.hasSkill('hanshou_skill')){
                            trigger.source.addTempSkill('hanshou_skill','roundStart');
                            trigger.source.storage.hanshou_skill = player;
                            trigger.source.syncStorage('hanshou_skill');
                        }
                        game.log(player,'失去技能','#g【'+get.skillTranslation(result.control,this)+'】');
                        game.log(trigger.source,'本轮获得技能','#g【'+get.skillTranslation(result.control,this)+'】');
                    }
                    else{
                        event.finish();
                    }
                    'step 3'
                    var handCards = trigger.source.getCards('h');
                    event.from = trigger.source;
                    trigger.cancel();
                    player.gain(handCards,event.from,'giveAuto','bySelf');
                    
                },
                ai:{
                    threaten:1.7,
                    effect:{
                        target:function(card,player,target){
                            if (get.tag(card,'damage')&&target.countSkillWithInfo()>1&&target.hp==1&&player.countCards('h')>7&&!player.hasSkillTag('jueqing')){
                                if (Math.random()<0.8){
                                    return 0;
                                }
                            }
                        },
                    },
                },
            },

            hanshou_skill:{
                silent:true,
                forced:true,
            },

            
            huitong_shou:{
                audio:2,
                priority:4,
				trigger:{player:'damageBegin4'},
				direct:true,
				filter:function(event,player){
					if(player.countCards('he') < event.num) return false;
					if(!event.source||event.source==player||!event.source.isIn()) return false;
                    if (player.hasSkill('huitong_shou_limit')) return false;
					return true;
				},
				content:function(){
					'step 0'
					var att=(get.attitude(player,trigger.source)>0);
					var goon=false;
					if(player.hp==1){
						goon=true;
					}
					else{
						var he=player.getCards('he');
						var num=0;
						for(var i=0;i<he.length;i++){
							if(get.value(he[i])<8){
								num++;
								if(num>=2){
									goon=true;break;
								}
							}
						}
					}
					player.chooseCard('he',[trigger.num,player.countCards('he')],get.prompt2('huitong_shou',trigger.source)).set('ai',function(card){
						if(_status.event.att){
							return 10-get.value(card);
						}
						if(_status.event.goon){
							return 8-get.value(card);
						}
						if(!ui.selected.cards.length){
							return 7-get.value(card);
						}
						return 0;
					}).set('goon',goon).set('att',att);
					'step 1'
					if(result.bool){
						player.logSkill('huitong_shou',trigger.source);
                        game.playAudio('skill','dutian_gold_mei'+Math.ceil(3*Math.random()));
                        if (!player.hasSkill('weiyi_shou')&&player.hasSkill('hanshou_skill')){
                            player.storage.hanshou_skill.popup('weiyi_shou');
                        }
						game.delay();
						event.num=result.cards.length;
						var goon=false;
						if(event.num>2||get.attitude(trigger.source,player)>=0){
							goon=true;
						}
						var forced=false;
						var str='【'+get.translation('huitong_shou')+'】：'+'获得其中'+get.cnNumber(trigger.num)+'张牌并防止伤害';
						if(trigger.source.countCards('he')<event.num){
							forced=true;
						}
						else{
							str+='，或取消并令'+get.translation(player)+'获得你'+get.cnNumber(result.cards.length)+'张牌';
						}
						trigger.source.chooseButton([str,result.cards],trigger.num,forced).set('ai',function(button){
							if(_status.event.goon){
								return get.value(button.link);
							}
							return get.value(button.link)-8;
						}).set('goon',goon);
					}
					else{
						event.finish();
					}
					'step 2'
					if(result.bool){
						var card=result.links;
						trigger.source.gain(card,player,'giveAuto','bySelf');
                        game.playAudio('skill','dutian_gold_mei'+Math.ceil(3*Math.random()));
						trigger.cancel();
                        game.log(player,'令此次伤害无效');
                        player.addTempSkill('huitong_shou_limit','phaseAfter');
                        event.finish();
					}
					else{
						player.choosePlayerCard(trigger.source,'he',event.num,'请选择要获得的牌',true).set('ai',function(card){
                            return 10*Math.random();
                        });
					}
                    'step 3'
                    if (result.bool&&result.cards.length > 0){
                        player.gain(result.cards,trigger.source,'giveAuto','bySelf');
                        game.playAudio('skill','dutian_gold_mei'+Math.ceil(3*Math.random()));
                    }
				},
                ai:{
                    threaten:0.9,
                },

            },

            huitong_shou_limit:{
                silent:true,
                forced:true,
            },
            
            fuyao_shou:{
                audio:2,
				trigger:{player:'damageAfter'},
				direct:true,
				filter:function(event,player){
					return player.countCards('h')>0&&player.isDamaged();
				},
				content:function(event){
					"step 0"
					var next=player.chooseCard(get.prompt2('fuyao_shou'));
					next.set('ai',function(card){
						return get.translation(card.name).length - (get.value(card)/10);
					});
					"step 1"
					if(result.bool){
						player.logSkill('fuyao_shou');
                        game.playAudio('skill','dutian_gold_mei'+Math.ceil(3*Math.random()));
                        if (!player.hasSkill('weiyi_shou')&&player.hasSkill('hanshou_skill')){
                            player.storage.hanshou_skill.popup('weiyi_shou');
                            player.storage.hanshou_skill.line(player,'green');
                        }
						player.showCards(result.cards,get.translation(player)+'的【富耀】牌展示');
                        // player.chat('有钱，为所欲为！');
                        game.delay(2);
						event.number = get.translation(result.cards[0].name).length;
						if(trigger.source&&trigger.source.countCards('he')>=event.number){
							trigger.source.chooseToDiscard('【富耀】：弃置'+get.cnNumber(event.number)+'张牌或令'+get.translation(player)+'回复一点体力',event.number,'he',function(card){
								return true;
							}).set('ai',function(card){
								if(get.recoverEffect(_status.event.getParent().player,_status.event.player,_status.event.player)<0){
									return 7-get.value(card);
								}
								return 0;
							});
						}
						else{
							event.recover=true;
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.recover){
						player.recover(1);
					}
					else if(result.bool){
						//player.draw();
					}
					else{
						player.recover(1);
					}
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')&&target.countCards('h')&&(target.hp > 1 || (target.countCards('h')>1&&target.countCards('h','tao')+target.countCards('jiu')>0))){
                                if (get.attitude(player,target)>0){
                                    if (!player.hasSkillTag('damageBonus',true,target)){
                                        return [0,0];
                                    }
                                }
                                else{
                                    if (!player.hasSkillTag('damageBonus',true,target)&&player.countCards('he')<4){
                                        return [0,0];
                                    }
                                    else if (!player.hasSkillTag('damageBonus',true,target)){
                                        if (Math.random()<1/player.countCards('he')){
                                            return [0,0];
                                        }
                                    }
                                }
								
							}
						}
					}
				},

            },
            
            jibian_shou:{
                audio:2,
                group:['jibian_rejudge_shou','jibian_recover_shou'],
                ai:{
                    threaten:4,
                    rejudge:true,
                    tag:{
                        rejudge:1,
                    },
                    // effect:{
					// 	target:function(card,player,target){
					// 		if(get.tag(card,'damage')){
                    //             if (target.isTurnedOver()){
                    //                 if (player.hasSkillTag('damageBonus')){
                    //                     var chance = Math.random();
                    //                     return [chance,-0.1];
                    //                 }
                    //                 else{
                    //                     var chance = 0.2*Math.random();
                    //                     return [chance,0.1];
                    //                 }
                    //             }
					// 		}
					// 	}
					// },
                },
            },

            jibian_rejudge_shou:{
                silent:true,
                popup:false,
                frequent:true,
				trigger:{global:'judge'},
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				direct:true,
				content:function(event){
					"step 0"
					player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
					get.translation(trigger.player.judging[0])+'，'+get.prompt('jibian_shou'),'h',function(card){
						// if(get.color(card)!='black') return false;
						var player=_status.event.player;
						var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
						if(mod2!='unchanged') return mod2;
						var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
						if(mod!='unchanged') return mod;
						return true;
					}).set('ai',function(card){
                        var player=_status.event.player;
                        if (player.hp == 1 && player.countCards('h','tao')+player.countCards('h','jiu')<1){
                            return 0;
                        }
                        var addition = 0;
                        if ((get.suit(card) == 'heart')){
                            addition = 0.2;
                        }
                        if (get.suit(card) == 'club'){
                            addition = 0.1;
                        }
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						var judging=_status.event.judging;
						var result=trigger.judge(card)-trigger.judge(judging);
						var attitude=get.attitude(player,trigger.player);
						if(attitude==0||result==0){
							if(trigger.player!=player) return 0+addition;
							return 0+addition;
						};
						if(attitude>0){
							return result+addition;
						}
						else{
							return -result+addition;
						}
					}).set('judging',trigger.player.judging[0]);
					"step 1"
					if(result.bool){
                        // player.logSkill('jibian_shou');
                        player.loseHp(1);
                        player.draw(1);
                        event.cards = result.cards;
					}
					else{
						event.finish();
					}
                    "step 2"
                    player.respond(event.cards,'highlight','jibian_shou','noOrdering');
                    if (!player.hasSkill('weiyi_shou')&&player.hasSkill('hanshou_skill')){
                        player.storage.hanshou_skill.popup('weiyi_shou');
                        player.storage.hanshou_skill.line(player,'green');
                    }
					"step 3"
                    player.$gain2(trigger.player.judging[0]);
                    player.gain(trigger.player.judging[0]);
                    var card=event.cards[0];
                    if(get.suit(card)=='club') {
                        player.logSkill('jibian_shou');
                        if (!player.hasSkill('weiyi_shou')&&player.hasSkill('hanshou_skill')){
                            player.storage.hanshou_skill.popup('weiyi_shou');
                            player.storage.hanshou_skill.line(player,'green');
                        }
                        player.draw('nodelay');
                    }
                    if(get.suit(card)=='heart') {
                        player.logSkill('jibian_shou');
                        if (!player.hasSkill('weiyi_shou')&&player.hasSkill('hanshou_skill')){
                            player.storage.hanshou_skill.popup('weiyi_shou');
                            player.storage.hanshou_skill.line(player,'green');
                        }
                        player.recover(1);
                    }
                    trigger.player.judging[0]=event.cards[0];
                    trigger.orderingCards.addArray(event.cards);
                    game.log(trigger.player,'的判定牌改为',event.cards[0]);
					"step 4"
					game.delay(2);
				},
				ai:{
                    expose:0.1,
					rejudge:true,
					tag:{
						rejudge:1.5,
					}
				},
            },

            jibian_recover_shou:{
                priority:15,
                silent:true,
                popup:false,
                frequent:true,
                trigger:{
                    global:"recoverBefore",
                },
                filter:function(event,player){
                    var has=game.hasPlayer(function(current){
                        if (current.isDying()){
                            return true;
                        }
                    });
                    return event.player.hp>0&&event.player!=player&&!has&&player.countCards('he')>0&&player.hp<player.maxHp;
                },
                content:function(event){
                    'step 0'
                    player.chooseBool(get.translation('jibian_shou'),get.translation(trigger.player)+'将要回复体力，是否弃一张牌，令此回复转移至你身上？').set('ai',function(event,player){
                        return get.attitude(player,trigger.player) < 0 || get.attitude(trigger.player,player) < 0;
                    });
                    'step 1'
                    if (result.bool){
                        player.chooseToDiscard(1,'he').set('ai',function(card){
                            return 1000-get.value(card);
                        });
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if (result.bool){
                        player.logSkill('jibian_shou',trigger.player)
                        if (!player.hasSkill('weiyi_shou')&&player.hasSkill('hanshou_skill')){
                            player.storage.hanshou_skill.popup('weiyi_shou');
                        }
                        event.num = trigger.num;
                        game.log(player,'将',trigger.player,'的','#y'+event.num,'点体力回复转移给自己');
                        trigger.cancel();
                        player.recover(event.num);
                    }
                    else{
                        event.finish();
                    }
                },
                ai:{
                    expose:0.5,
                },
            },




            yujiu_heng:{
                audio:2,
                group:['yujiu_equip_heng','yujiu_gain_heng'],
                ai:{
                    skillTagFilter:function(player){
                        return player.countCards('e')>0&&player.hp<=0;
                    },
                    threaten:function(player,target){
						if(target.hp==1) return 2;
						return 1.5;
					},
                    save:true,
                    tag:{
                        save:1,
                    },
                    effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
						}
					},

                },
            },

            yujiu_equip_heng:{
                audio:2,
                enable:"chooseToUse",
                forced:false,
                filterCard:function(card){
                    return true;//get.suit(card)=='spade';
                },
                position:'e',
                viewAs:{
                    name:"jiu",
                },
                viewAsFilter:function(player){
                    return player.countCards('e')>0;
                },
                prompt:"将一张装备区的牌当【酒】使用",
                check:function(card){
                    if(_status.event.type=='dying') return 200-get.value(card);
                    var player = _status.event.player;
                    if (!player.hasSkill('yujiu_hp_heng')) return 10-get.value(card);
                    return 5-get.value(card);
                },
                onuse:function(){
                    game.playAudio('skill','sword_sound'+1);
                },
                ai:{
                    skillTagFilter:function(player){
                        return player.countCards('e')>0&&player.hp<=0;
                    },
                    threaten:function(player,target){
						if(target.hp==1) return 2;
						return 1.5;
					},
                    save:true,
                    basic:{
                        useful:function(card,i){
                            if(_status.event.player.hp>1){
                                if(i==0) return 4;
                                return 1;
                            }
                            if(i==0) return 7.3;
                            return 3;
                        },
                        value:function(card,player,i){
                            if(player.hp>1){
                                if(i==0) return 5;
                                return 1;
                            }
                            if(i==0) return 7.3;
                            return 3;
                        },
                    },
                    order:function(){
                        var player = _status.currentPhase;
                        if (!player.hasSkill('yujiu_hp_heng')){
                            return 8.5;
                        }
                        return get.order({name:'sha'})+0.2;
                    },
                    result:{
                        target:function(player,target){
                            if(target&&target.isDying()) return 2;
                            if(target&&!target.isPhaseUsing()) return 0;
                            if(lib.config.mode=='stone'&&!player.isMin()){
                                if(player.getActCount()+1>=player.actcount) return 0;
                            }
                            var shas=player.getCards('h','sha');
                            if(shas.length>1&&(player.getCardUsable('sha')>1||player.countCards('h','zhuge'))){
                                return 0;
                            }
                            shas.sort(function(a,b){
                                return get.order(b)-get.order(a);
                            })
                            var card;
                            if(shas.length){
                                for(var i=0;i<shas.length;i++){
                                    if(lib.filter.filterCard(shas[i],target)){
                                        card=shas[i];break;
                                    }
                                }
                            }
                            else if(player.hasSha()&&player.needsToDiscard()){
                                if(player.countCards('h','hufu')!=1){
                                    card={name:'sha'};
                                }
                            }
                            if(card){
                                if(game.hasPlayer(function(current){
                                    return (get.attitude(target,current)<0&&
                                        target.canUse(card,current,true,true)&&
                                        !current.hasSkillTag('filterDamage',null,{
                                            player:player,
                                            card:card,
                                            jiu:true,
                                        })&&
                                        get.effect(current,card,target)>0);
                                })){
                                    return 1;
                                }
                            }
                            return 0;
                        },
                        player:function(player,target){
                            if (!player.hasSkill('yujiu_hp_heng')){
                                return 1;
                            }
                        },
                    },
                    tag:{
                        save:1,
                    },

                },
            },

            yujiu_gain_heng:{
                silent:true,
                popup:false,
                frequent:true,
                trigger:{
                    player:"useCardAfter",
                },
                filter:function(event,player){
                    var unable = player.storage._disableJudge==true&&player.isDisabled('equip1')&&player.isDisabled('equip2')&&player.isDisabled('equip3')&&player.isDisabled('equip4')&&player.isDisabled('equip5');
                    return get.name(event.card) == 'jiu'&&!player.hasSkill('yujiu_hp_heng')&&!unable;
                },
                content:function(event){
                    'step 0'
                    player.chooseBool(get.prompt('yujiu_heng'),'你使用【酒】后，若你的判定区和装备区没有被完全废除，且本轮还未通过此技能获得效果，你可以弃置装备区所有牌并废除判定区或一个装备区，若如此做，则你于本轮获得【浴酒】效果。').set('ai',function(){
                        var player = _status.event.player;
                        if (player.hp <= 0 && player.countCards('h','tao')+player.countCards('h','jiu') == 0 && player.countCards('e') > 0){
                            return false;
                        }
                        else{
                            return true;
                        }
                    });
                    'step 1'
                    if (result.bool){
                        var es=player.getCards('e');
                        player.discard(es);
                        var choices = [];
                        if (!player.isDisabled('equip1')){
                            choices.push('equip1');
                        }
                        if (!player.isDisabled('equip2')){
                            choices.push('equip2');
                        }
                        if (!player.isDisabled('equip4')){
                            choices.push('equip4');
                        }
                        if (!player.isDisabled('equip3')){
                            choices.push('equip3');
                        }
                        if (!player.isDisabled('equip5')){
                            choices.push('equip5');
                        }
                        if (!player.storage._disableJudge){
                            choices.push('_disableJudge');
                        }
                        choices.push('cancel2');
                        player.chooseControl(choices).set('ai',function(event,player){
                            if (choices.length == 5) return 1;
                            return choices.length - 2;
                        }).set('prompt','###'+get.prompt('yujiu_heng')+'###你使用【酒】后，若你的判定区和装备区没有被完全废除，且本轮还未通过此技能获得效果，你可以弃置装备区所有牌并废除判定区或一个装备区，若如此做，则你于本轮获得【浴酒】效果。');
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if (result.control != 'cancel2'){
                        player.logSkill('yujiu_heng');
                        if (result.control == '_disableJudge'){
                            player.disableJudge();
                            player.storage.yujiu_hp_heng = 0;
                            player.addTempSkill('yujiu_hp_heng','roundStart');
                            player.syncStorage('yujiu_hp_heng');

                        }
                        else{
                            player.disableEquip(result.control);
                            player.storage.yujiu_hp_heng = 0;
                            player.addTempSkill('yujiu_hp_heng','roundStart');
                            player.syncStorage('yujiu_hp_heng');
                        }
                    }
                    else{
                        event.finish();
                    }

                },

            },

            yujiu_hp_heng:{
                priority:18,
                forced:true,
                silent:true,
                popup:false,
                mark:true,
                marktext:'浴',
                intro:{
                    name:'浴酒',
                    content:'本轮手牌上限 = 体力上限 + 已损失体力值。本轮体力值变化后：1.体力值≠0且＜体力上限-1，不进入濒死直接回满体力；2.体力值＝体力上限且体力上限≠1，流失1点体力并令本轮每回合出杀次数+1（目前已+#）',
                },
                trigger:{
                    player:"changeHp",
                },
                onremove:function (player){
                    player.storage.yujiu_hp_heng = 0;
                    player.syncStorage('yujiu_hp_heng');
                },
                filter:function(event,player){
                    return player.hp != player.maxHp - 1 && player.hp != 0;
                },
                content:function(event){
                    'step 0'
                    if (player.hp < player.maxHp - 1){
                        player.logSkill('yujiu_heng');
                        if (player.hp < 0){
                            game.playAudio('skill','yujiu_heng'+3);
                        }
                        else{
                            if (Math.random()<0.2){
                                game.playAudio('skill','yujiu_heng'+3);
                            }
                        }
                        player.nodying=true;
                        player.recover(player.maxHp - player.hp);
                        delete player.nodying;
                        game.delay(2);
                    }
                    'step 1'
                    if (player.hp == player.maxHp && player.maxHp != 1){
                        player.logSkill('yujiu_equip_heng');
                        player.loseHp(1);
                        player.storage.yujiu_hp_heng++;
                        player.syncStorage('yujiu_hp_heng');
                    }
                },
                mod:{
                    maxHandcard:function(player, num) {
                        return player.maxHp+(player.maxHp - player.hp); // 手牌上限+2
                    },
                    cardUsable:function (card,player,num){
						if(card.name=='sha') return num+player.storage.yujiu_hp_heng;
					},
                },
                ai:{
                    mingzhi:true,
                    maihp:true,
                    predamage:true,
                    preshadamage:true,
                    skillTagFilter:function(player,tag){
                        if (tag == 'predamage'&&player.countCards('h')<=17){
                            return false;
                        }
					},
                    effect:{
                        target:function(card,player,target){
                            var has = false;
                            if (player == target){
                                has=game.hasPlayer(function(current){
                                    if (current == player) return false;
                                    return player.inRange(current)&&(get.attitude(player,current)<0&&get.attitude(current,player)<0);
                                });
                            }
                            
                            if ((get.tag(card,'save') || get.tag(card,'recover'))){
                                var rightTime = target == player && player.hp != 0 && has &&player.getCardUsable('sha') == 0 && player.countCards('h','sha') > 0;
                                if (!rightTime&&player==target&&player.hp!=0){
                                    return 0;
                                }

                                // if (target == player && player.hp != 0&&(player.countCards('h','sha')<player.storage.yujiu_hp_heng+1)){
                                //     return 0;
                                // }
                                // if (target == player && player.hp != 0&&(player.countCards('h','sha')>=player.storage.yujiu_hp_heng+1)){
                                //     if (Math.random()<0.3){
                                //         return 0;
                                //     }
                                // }
                                
                            }

                            if (get.tag(card,'damage')&&player!=target){
                                if (target.hp == 1&&player.hasSkillTag('damageBonus',true,target)){
                                    return [0,0];
                                }
                                if (target.hp == 2&&!player.hasSkillTag('damageBonus',true,target)){
                                    return [0,0];
                                }
                                if (target.hp >= 3){
                                    return [0,0];
                                }
                            }
                            
                        },
                    },
                },
            },
            
            yini_heng:{
                audio:2,
                direct:true,
                enable:'phaseUse',
				filter:function(event,player){
					return player.countCards('he',{type:'equip'})>0;
				},
                position:'he',
                discard:false,
                lose:false,
				filterCard:function(card){
					return get.type(card)=='equip';
				},
                check:function(card){
                    var player=_status.currentPhase;
                    var type=get.subtype(card);
                    var unable = player.isDisabled('equip1')&&player.isDisabled('equip2')&&player.isDisabled('equip3')&&player.isDisabled('equip4')&&player.isDisabled('equip5');
                    if (unable){
                        return 100-get.value(card);
                    }
                    else if (!player.isDisabled(type)){
                        return 100-get.value(card);
                    }
                    else if (!player.hasSkill('yujiu_hp_heng')){
                        return -10-get.equipValue(card);
                    }
                    else if (!player.hasSkill('yini_heng_distance')){
                        return 12-get.value(card);
                    }
                    else if (get.name(card) == 'zhuge'){
                        if (player.storage.yujiu_hp_heng&&player.storage.yujiu_hp_heng-1>=player.countCards('h','sha')){
                            return 11- player.countCards('h','sha');
                        }
                        else{
                            return 1- player.countCards('h','sha');
                        } 
                    }
                    else if (!player.isEmpty(type)){
                        return 11-get.value(card);
                    }
                    else{
                        return -get.value(card);
                    }
				},
                filterTarget:function(card,player,target){
					// if(target.isMin()) return false;
					var type=get.subtype(card);
					return player!=target&&!target.isDisabled(type);
				},
                prompt:"出牌阶段，你可以将一张装备牌置于一名其他角色装备区里，然后摸一张牌；每回合第一次发动【旖旎】置入装备后，本回合你计算与其他角色的距离时-1。",
                content:function(){
                    'step 0'
                    event.cards = cards;
                    // event.shiyan = [player.getCards('e')];
                    player.logSkill('yini_heng',target);
                    // player.lose(event.shiyan[0],ui.ordering,'visible');
                    target.equip(event.cards[0]);
                    'step 1'
                    // target.equip(event.shiyan[0][0]);
                    player.lose(event.cards,ui.ordering,'visible');
                    if (!player.hasSkill('yini_heng_distance')){
                        player.addTempSkill('yini_heng_distance','phaseAfter');
                        game.log(player,'本回合计算与其他角色的距离时-1');
                    }
                    if (!player.storage.yini_heng){
                        player.storage.yini_heng = [];
                        player.storage.yini_heng.push(target);
                        player.syncStorage('yini_heng');
                    }
                    else{
                        if (!player.storage.yini_heng.contains(target)){
                            player.storage.yini_heng.push(target);
                            player.syncStorage('yini_heng');
                        }
                    }
					player.draw();
				},
                
                ai:{
                    expose:0.25,
                    // noe:false,
                    // reverseEquip:false,
					basic:{
						order:10,
					},
					result:{
						target:function(player,target){
							var card=ui.selected.cards[0];
                            var type=get.subtype(card);
                            var add = 1;
                            if (target.countCards('e',{subtype:type})>0){
                                add = 4;
                            }
                            if (!player.isDisabled(type)&&!player.hasSkill('yujiu_hp_heng')) return 0;
							if(card) return get.effect(target,card,target,target)/add;
							return 0;
						},
                        // player:function(player,target){
                        //     var unable = player.isDisabled('equip1')&&player.isDisabled('equip2')&&player.isDisabled('equip3')&&player.isDisabled('equip4')&&player.isDisabled('equip5');
                        //     if (unable){
                        //         return 1;
                        //     }
                        //     if (player.hasSkill('yujiu_hp_heng')){
                        //         return 1;
                        //     }
                        //     else if (player.countCards('he',{type:'equip'})>1){
                        //         return Math.random() - 0.5;
                        //     }
                        //     else{
                        //         return 0;
                        //     }
                        // },

					},
					threaten:1.3
				},
                group:['yini_protect_heng'],
                
            },


            yini_protect_heng:{
                silent:true,
                popup:false,
                trigger:{player:'phaseJieshuBegin'},
				direct:true,
                filter:function(event,player){
                    return player.storage.yini_heng&&player.storage.yini_heng.length > 0;
                },
                content:function(event){
					'step 0'
					player.chooseTarget(get.prompt('yini_heng'),'回合结束阶段，你可以选择一名本回合发动过【旖旎】置入装备的角色，直到你的下回合开始，当该角色受到＞1点的伤害时，防止此伤害，然后若这是本局游戏首次，你增加1点体力上限，并将摸牌阶段永久改为：选择一名其他角色，令其摸两张牌。',function(card,player,target){
						return player.storage.yini_heng.contains(target);
					}).set('ai',function(target){
						if(get.attitude(_status.event.player,target)>0){
							return 1/Math.sqrt(target.hp+1);
						}
						return Math.random()-0.8;
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('yini_heng');
                        game.log(player,'秘密选择了本回合置入过装备的角色中的一位，直到',player,'下回合开始，当该角色受到＞1点的伤害时，防止此伤害');
                        target.storage.yini_target_heng=player;
                        target.addSkill('yini_target_heng');
                        target.syncStorage('yini_target_heng');
						
					}
				},
            },

            yini_heng_distance:{
                forced:true,
                silent:true,
                popup:false,
                trigger:{
                    player:'phaseJieshuEnd'
                },
                content:function(event){
                    player.storage.yini_heng = [];
                },
                mod:{
					globalFrom:function(from,to,distance){
						return distance-1;
					}
				}
            },

            yini_target_heng:{
				// mark:'character',
				// intro:{
				// 	content:'下一次受到超过1点的伤害时，防止此伤害'
				// },
                silent:true,
                popup:false,
				trigger:{player:'damageBegin4'},
				forced:true,
				filter:function(event,player){
					return event.num>1;
				},
				//priority:-11,
				content:function(event){
                    'step 0'
                    event.numberD = trigger.num;
					trigger.cancel();
                    'step 1'
                    if (!player.storage.yini_target_heng.hasSkill('yini_draw_heng')){
                        player.storage.yini_target_heng.logSkill('yini_animation_heng');
                        game.log(player.storage.yini_target_heng,'防止了',player,'受到的'+get.cnNumber(event.numberD)+'点伤害');
                        player.storage.yini_target_heng.gainMaxHp();
                        player.storage.yini_target_heng.addSkill('yini_draw_heng');
                        game.log(player.storage.yini_target_heng,'的摸牌阶段永久改为：选择一名其他角色，令其摸两张牌');
                        event.goto(2);
                    }
                    else{
                        player.storage.yini_target_heng.logSkill('yini_heng',player);
                        game.log(player.storage.yini_target_heng,'防止了',player,'受到的'+get.cnNumber(event.numberD)+'点伤害');
                        event.goto(3);
                    }
                    'step 2'
                    player.storage.yini_target_heng.recover(player.storage.yini_target_heng.maxHp - player.storage.yini_target_heng.hp);
                    event.goto(3);
                    'step 3'
					player.removeSkill('yini_target_heng');
				},
				group:'yini_target_heng_remove',
				onremove:true,
				subSkill:{
					remove:{
						trigger:{global:['phaseZhunbeiBegin','dieAfter']},
						forced:true,
						popup:false,
						filter:function(event,player){
							return event.player==player.storage.yini_target_heng;
						},
						content:function(){
							player.removeSkill('yini_target_heng');
						}
					}
				}
			},

            yini_animation_heng:{
                audio:1,
                skillAnimation:true,
                animationColor:"fire",
            },

            yini_draw_heng:{
                forced:true,
                silent:true,
                popup:false,
                trigger:{
                    player:'phaseDrawBegin',
                },
                content:function(event){
                    'step 0'
                    trigger.cancel();
                    player.chooseTarget('###'+get.translation('yini_heng')+'###你的摸牌阶段永久改为：选择一名其他角色，令其摸两张牌。',true,function(card,player,target){
                        return player != target;
                    }).set('ai',function(target){
                        var player = _status.currentPhase;
                        return get.attitude(player,target)+get.attitude(target,player);
                    });
                    'step 1'
                    if (result.bool){
                        player.logSkill('yini_heng',result.targets[0]);
                        result.targets[0].draw(2);
                    }

                },
            },
            
            wenshi_heng:{
                audio:2,
                silent:true,
                popup:false,
                priority:1.5,
                frequent:true,
                forced:false,
                locked:false,
                direct:true,
                trigger:{
                    global:"phaseDiscardBegin",
                },
                filter:function(event,player){
                    return event.player!=player&&event.player.countCards('h') > event.player.hp;
                },
                content:function(event){
                    'step 0'
                    event.number = trigger.player.countCards('h') - trigger.player.hp;
                    player.chooseBool(get.prompt2('wenshi_heng',trigger.player)).set('ai',function(){
                        var player=_status.event.player;
                        var num = event.number;
                        var nice = (player.hasSkill('yujiu_hp_heng')&&(player.hp != num || player.countCards('h','tao')+player.countCards('h','jiu')+player.countCards('e') > 0));
                        var noSkill = !player.hasSkill('yujiu_hp_heng');
                        if (!player.hasSkill('yujiu_hp_heng')&&player.hp <= num && (player.countCards('h','tao')+player.countCards('h','jiu')+player.countCards('e')+player.hp <= num)) return false;
                        if (player.hasSkill('yujiu_hp_heng') && player.hp == num&&player.countCards('h','tao')+player.countCards('h','jiu')+player.countCards('e')<1) return false;
                        if (get.attitude(player,trigger.player) > 0){
                            if (nice){
                                return true;
                            }
                            if (trigger.player.hp < trigger.player.maxHp){
                                if (noSkill&&num>1){
                                    return false;
                                }
                                return true;
                            }
                            else{
                                return Math.random() < 0.3;
                            }
                        }
                        else{
                            if (trigger.player.hp < trigger.player.maxHp){
                                if (trigger.player.countCards('h') - trigger.player.hp > trigger.player.maxHp - trigger.player.hp + 3 + 3*Math.random()){
                                    if (noSkill&&num>1){
                                        return false;
                                    }
                                    return true;
                                }
                                else{
                                    return false;
                                }
                            }
                            else{
                                if (noSkill&&num>1){
                                    return false;
                                }
                                return true;
                            }
                        }
                    });

                    'step 1'
                    if (result.bool){
                        player.logSkill('wenshi_heng',trigger.player);
                        trigger.player.chooseCard('h',true,event.number,'###'+get.translation('wenshi_heng')+'###请将'+get.cnNumber(event.number)+'张手牌交给'+get.translation(player)).set('ai',function(card){
                            return -get.value(card);
                        });
                        event.goto(2);
                    }else{
                        event.finish();
                    }
                    'step 2'
                    if(result.bool){
                        player.gain(result.cards,trigger.player,'giveAuto','bySelf');
					}
                    else{
                        event.finish();
                    }
                    'step 3'
                    trigger.player.recover(event.number);
                    'step 4'
                    player.loseHp(event.number);

                },
                ai:{
                    threaten:1.8,
                    expose:0.2,
                },
            },
            
            zuizhao_heng:{
                audio:2,
                silent:true,
                popup:false,
                forced:true,
                trigger:{
                    global:'phaseUseEnd'
                },
                filter:function(event,player){
                    if (event.player==player) return false;
					var history=game.getGlobalHistory('cardMove',function(evt){
                        return evt.getParent('phaseUse')==event;
                    });
                    var all_cards = [];
                    for(var i=0;i<history.length;i++){
                        if (history[i].cards){
                            for (var j = 0; j < history[i].cards.length;j++){
                                if (get.position(history[i].cards[j])=='d'){
                                    if (!all_cards.contains(history[i].cards[j])){
                                        all_cards.push(history[i].cards[j]);
                                    }
                                    
                                }
                            }
                        }
                    }
					var suits=[];
					for(var i=0;i<all_cards.length;i++){
						var suit=get.suit(all_cards[i]);
						if(suit) suits.add(suit);
					}
					return suits.length==4;
				},
                content:function(event){
                    'step 0'
                    player.logSkill('zuizhao_heng');
                    player.addSkill('zuizhao_addPhase_heng');
                    player.markSkill('zuizhao_addPhase_heng');
                    event.suits = ['heart', 'diamond', 'club', 'spade'];
                    event.cards = [];
                    for (var i = 0; i < event.suits.length; i++) {
                        var suit = event.suits[i];
                        var card=get.discardPile(function(card){
							return get.suit(card)==suit;
						});
                        if (card) {
                            event.cards.push(card);
                        }
                    }
                    player.showCards(event.cards,'四色【醉沼】牌');

                    'step 1'
                    //改变背景
                    if (game.getUpperBackgroundName('',player) != 'zhaoze_bg'){
                        player.addTempSkill('zuizhao_background','roundStart');
                        player.storage.zuizhao_background = game.getUpperBackgroundName('',player);
                        player.syncStorage('zuizhao_background');
                        game.createClearBackground('zhaoze_bg',player);
                    }
                    for (var i = 0; i < event.cards.length; i++){
                        // if (get.type(event.cards[i])=='equip'&&player.canUse(event.cards[i],player)){
                        if (get.type(event.cards[i])=='equip'&&!player.isDisabled(get.subtype(event.cards[i]))){
                            player.equip(event.cards[i]);
                            // player.useCard(event.cards[i],player);
                            event.cards.remove(event.cards[i]);
                            i--;
                        }
                    }
                    player.gain(event.cards, 'draw');
                    'step 2'
                    if (player.hp > 1){
                        player.loseHp(player.hp - 1);
                    }
                    'step 3'
                    player.insertPhase('zuizhao_heng',true);
                    game.log(player,'获得一个额外的回合');
                },

                ai:{
                    prophase:true,
                    threaten:4.5,
                },

            },

            zuizhao_addPhase_heng:{
                popup:false,
                priority:200,
                firstDo:true,
                trigger:{
                    player:["phaseAfter","phaseBefore"],//,"turnOverBefore"],
                },
                forced:true,
                mark:true,
                marktext:"醉",
                intro:{
                    name2:"醉沼",
                    content:"获得一个额外回合",
                },
                
                filter:function(event,player){
                    return true;
                },
                content:function(event){
                    "step 0"
                    player.popup(get.translation("zuizhao_heng"));
                    game.playAudio('skill','zuizhao_phase_heng'+1);

                    "step 1"
                    player.addTempSkill('remove_zuizhao_background','phaseAfter');
                    player.removeSkill('zuizhao_addPhase_heng');        
                    
                },
            },

            remove_zuizhao_background:{
                silent:true,
                popup:false,
                forced:true,
                onremove:function (player){
                    if (player.hasSkill('zuizhao_background')){
                        player.removeSkill('zuizhao_background');
                    }
                },
            },

            zuizhao_background:{
                silent:true,
                popup:false,
                forced:true,
                onremove:function (player){
                    //改回背景
                    if (game.getUpperBackgroundName('',player) == 'zhaoze_bg'){
                        game.createClearBackground(player.storage.zuizhao_background,player);
                        player.storage.zuizhao_background = '';
                    }
                    else{
                        game.createClearBackground('',player);
                    }
                },
            },



            quanjiu_lala:{
                audio:3,
                priority:15,
				trigger:{global:'phaseZhunbeiBefore'},
                filter:function(event,player){
					return player.countCards('h')>0;
				},
                direct:true,
                derivation:"zongjiu_lala",
                content:function(event){
					"step 0"
					var nono=get.attitude(player,trigger.player)>0 && get.attitude(trigger.player,player)>0 ;
					if(get.damageEffect(trigger.player,trigger.player,player)<=0){
						nono=true;
					}
					else if(!player.hasSkill('lingyu_lala')&&trigger.player.hp>2){
						nono=true;
					}
					else if(!player.hasSkill('lingyu_lala')&&trigger.player.hp>1&&player.countCards('h')<3){
						nono=true;
					}
					else if(!player.hasSkill('lingyu_lala')&&trigger.player.canUse('sha',player)&&!player.countCards('h','shan')&&trigger.player.countCards('h')>=3){
						nono=true;
					}
                    if (Math.random()<0.1){
                        nono = false;
                    }
                    if (get.damageEffect(trigger.player,trigger.player,player)<=-10){
                        nono = true;
                    }
                    if (player==trigger.player){
                        nono = false;
                    }
					var next=player.chooseToDiscard(get.prompt2('quanjiu_lala',trigger.player));
					next.set('ai',function(card){
						if(_status.event.nono) return -1;
                        if (player!=trigger.player){
                            if (trigger.player.hasSkillTag('maihp')&&get.attitude(trigger.player,player)+get.attitude(player,trigger.player)<0&&Math.random()<0.9){
                                return -1;
                            }
                            if (trigger.player.hasSkillTag('maihp')&&get.attitude(trigger.player,player)+get.attitude(player,trigger.player)>0&&Math.random()<0.9){
                                return 11-get.value(card);
                            }
                            if (get.name(card) == 'jiu'||get.name(card) == 'tao'||get.name(card)=='wuxie'){
                                return -1-get.value(card);
                            }
                            else if (get.name(card) == 'sha'||get.name(card) == 'shan'){
                                return 0.5;
                            }
                            else{
                                return 11-get.value(card);
                            }
                        }
                        else{
                            return 7 - get.value(card);
                        }
						
                        
					});
					next.set('logSkill',['quanjiu_lala',trigger.player]);
					next.set('nono',nono);
					"step 1"
					if(result.bool){
						trigger.player.chooseUseTarget({name:'jiu'},true,'noTargetDelay','nodelayx');
                        game.log(player,'撒着娇劝',trigger.player,'喝了一大口酒');
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool&&trigger.player!=player) {
                        trigger.player.damage(1,trigger.player);
                    }
                    else{
                        event.finish();
                    }
                    "step 3"
                    trigger.player.addTempSkill('zongjiu_lala','phaseAfter');
                    trigger.player.storage.zongjiu_lala = player;
                    trigger.player.syncStorage('zongjiu_lala');
                    game.log(player,'望着',trigger.player,'喝完，坏点子又来了，故意刁难道：“你是不是酒量很小只能喝这点酒啊？”',trigger.player,'自然不会同意，',player,'狡黠一笑：“那就再喝点！多喝点！证明给我看啊！”',trigger.player,'哪里受得了这个小美女的劝，道：“好~喝就喝！”');
                    game.log(trigger.player,'本回合获得技能','#g【纵酒】');
				},
				ai:{
					threaten:2.6,
					expose:0.2,
				},

            },

            zongjiu_lala:{
                audio:1,
                forced:true,
                mark:true,
                marktext:'纵',
                intro:{
                    content:"锁定技，当你满足以下条件之一时，你流失1点体力并视为使用一张【酒】：1.使用一张锦囊牌后，2.将牌移至游戏外后。",
                },
                trigger:{
                    player:['useCardAfter',"loseAfter","addCardToStorage"],
                },
                direct:true,
                filter:function(event,player){
                    if (event.name == 'useCard'){
                        return get.type(event.card,'trick')=='trick';
                    }
                    else if(event.name=='lose') {
                        return event.toStorage==true;
                    }
                    // else if (event.name == 'gain'){
                    //     return event.fromStorage==true||event.toStorage==true;
                    // }
                    else{
                        return true;
                    }
                },
                content:function(event){
                    'step 0'
                    player.logSkill('zongjiu_lala');
                    player.loseHp(1);
                    'step 1'
                    player.popup('纵酒');
                    player.useCard({ name: 'jiu', isCard: true ,cardid:'zongjiu_lala_id'},player).set('audio',false);
                },
                ai:{
                    presha:true,
                    pretao:true,
                    effect:{
                        player:function(card,player,target){
                            if(get.type(card,'trick')=='trick'&&player.hp < 2 && player.countCards('h','tao')+ player.countCards('h','jiu')<1) {
                                return [0,-500];
                            }
                            else if (get.type(card,'trick')=='trick'&&player.hp < 2){
                                return [0,-1];
                            }
                            else if (get.type(card,'trick')=='trick'&&get.value(card)<6){
                                return [0,-0.2];
                            }
                        },
                    },
                },
            },
            
            leyin_lala:{
                audio:2,
                forced:true,
                trigger:{
                    global:"useCardAfter",
                },
                filter:function(event,player){
                    return get.name(event.card) == 'jiu';
                },
                content:function(event){
                    player.draw(1);
                },
                ai:{
                    threaten:1,
                },
            },
            
            lingyu_lala:{
                audio:2,
                forced:true,
                locked:true,
                group:['lingyu_phaseUse_lala','lingyu_discard_lala','lingyu_damage_lala','lingyu_effect'],
                ai:{
                    threaten:0.7,
                    forbidNoCardButNatureDamage:true,
					// effect:{
					// 	target:function(card,player,target){
					// 		if(get.tag(card,'damage') && !get.tag(card,'natureDamage')){
                    //             return 'zerotarget';
					// 		}
                    //         if (get.tag(card,'skip')=='phaseUse'){
                    //             return 'zerotarget';
                    //         }
					// 	}
					// },
				},
            },

            lingyu_effect:{
                audio:false,
                silent:true,
                popup:false,
                direct:true,
                trigger:{
                    target:"shaBefore",
                },
                forced:true,
                filter:function(event,player){
                    return false;
                },
                content:function(event){
                    event.finish();
                },
                ai:{
                    effect:{
                        target:function(card,player,target){
                            if(get.tag(card,'damage') && !get.tag(card,'natureDamage')&&get.type(card)!='trick'){
                                return 'zerotarget';
							}
                            if (get.tag(card,'skip')=='phaseUse'){
                                return 'zerotarget';
                            }
                        },
                    },
                },
            },

            lingyu_phaseUse_lala:{
                silent:true,
                popup:false,
                forced:true,
                trigger:{
                    player:"phaseUseBegin",
                },
                content:function(event){
                    player.logSkill('lingyu_lala');
                    trigger.cancel();
                    game.log(player,'跳过了出牌阶段');
                },
            },

            lingyu_discard_lala:{
                silent:true,
                popup:false,
                forced:true,
                trigger:{
                    player:"discardAfter",
                    global:"gainAfter"
                },
                filter:function(event,player){
                    if (event.name == 'gain'){
                        if (event.source&&event.source==player){
                            return true;
                        }
                        else{
                            return false;
                        }
                    }
                    return true;
                },
                content:function(event){
                    player.logSkill('lingyu_lala');
                    player.draw(Math.ceil((trigger.cards.length)/2));
                },
            },

            lingyu_damage_lala:{
                silent:true,
                popup:false,
                forced:true,
                priority:0.5,
                trigger:{
                    player:"damageBegin4",
                },
                filter:function(event,player){
                    var condition = event.card&&get.type(event.card,'trick')=='trick'||event.nature;
                    return !condition;
                },
                content:function(event){
                    player.logSkill('lingyu_lala');
                    trigger.cancel();
                    if (trigger.source){
                        game.log(player,'免疫了来自',trigger.source,'的非锦囊、非属性伤害');
                    }
                    else{
                        game.log(player,'免疫了非锦囊、非属性伤害');
                    }
                    
                },
                
            },
            
            dunsheng_lala:{
                audio:3,
                mark:false,
                animationColor:'metal',
				skillAnimation:'legend',
                forced:true,
                limited:true,
                trigger:{global:'phaseAfter'},
                filter:function(event,player){
					return ui.cardPile.childElementCount<=player.hp*10&&!player.hasSkill('dunsheng_limit');
				},
                content:function(event){
                    'step 0'
                    player.awakenSkill('dunsheng_lala');
                    player.addSkill('dunsheng_limit');
                    player.removeSkill('lingyu_lala');
                    game.log(player,'失去了技能','#g【囹圄】');
                    'step 1'
                    player.recover(player.maxHp - player.hp);
                    'step 2'
                    player.insertPhase('dunsheng_lala',true);
                    game.log(player,'获得一个额外的回合');
                    'step 3'
                    if(game.hasPlayer(function(current){
                        return current.name=='chenyingchao'||current.name2=='chenyingchao';
                    })){
                        event.finish();
                    }
                    else{
                        var old_name = player.name;
                        var mainOrsub = 'main';
                        game.log(player,'本回合化身为“陈英超”');
                        if (player.name == 'kalala'){
                            player.reinit(player.name,'chenyingchao',[player.hp,player.maxHp]);
                        }
                        else if (player.name2 == 'kalala'){
                            old_name = player.name2;
                            mainOrsub = 'sub';
                            player.reinit(player.name2,'chenyingchao',false);
                        }
                        else{
                            player.reinit(player.name,'chenyingchao',[player.hp,player.maxHp]);
                        }
                        game.playAudio('skill','honglian_chenyingchao'+1);
                        player.addTempSkill('dunsheng_change','phaseAfter');
                        player.storage.dunsheng_change = [old_name,mainOrsub];
                        player.syncStorage('dunsheng_change'); 
                    }
                },
                ai:{
                    threaten:2,
                },
            },

            dunsheng_change:{
                silent:true,
                popup:false,
                forced:true,
                onremove:function(player){
                    player.popup('dunsheng_lala');
                    game.playAudio('skill','dunsheng_lala'+Math.ceil(2*Math.random()));
                    if (player.storage.dunsheng_change[1] == 'main'){
                        player.reinit('chenyingchao',player.storage.dunsheng_change[0],[player.hp,player.maxHp]);
                    }
                    else{
                        player.reinit(player.name2,player.storage.dunsheng_change[0],false);
                    }
                    game.log(player,'变回自己');
                    if (player.hasSkill('lingyu_lala')){
                        player.removeSkill('lingyu_lala');
                    }

                },
            },

            dunsheng_limit:{
                silent:true,
                popup:false,
                forced:true,
            },

            langnv_yawen:{
                audio:4,
                trigger:{player:'gainAfter'},
                popup:false,
                frequent:true,
                filter:function(event,player){
					if(event.source&&event.source!=player&&!event.source.hasSkill('langnv_limit_yawen')){
						return true;
					}
					return false;
				},
                content:function(event){
                    'step 0'
                    game.delay(1);
                    player.chooseBool(get.prompt2('langnv_yawen',trigger.source)).set('ai',function(event,player){
                        var emeny = (get.attitude(player,trigger.source)+get.attitude(trigger.source,player) < 0);
                        if (emeny){
                            if (trigger.source.hasSkill('yuzhong_yan')){
                                return false;
                            }
                            if ((trigger.source.hasSkillTag('maixie')&&trigger.source.hasSkillTag('maixie_hp'))){
                                return Math.random()<0.1;
                            }
                            else{
                                return true;
                            }
                        }
                        else{
                            if (trigger.source.hasSkill('yuzhong_yan')){
                                return true;
                            }
                            if ((trigger.source.hasSkillTag('maixie')&&trigger.source.hasSkillTag('maixie_hp'))){
                                return Math.random()<0.5;
                            }
                            else{
                                return false;
                            }
                        }
                    });
                    'step 1'
                    if (result.bool){
                        player.logSkill('langnv_yawen',trigger.source,'thunder');
                        trigger.source.damage(1,player);
                        if (!trigger.source.hasSkill('langnv_limit_yawen')){
                            trigger.source.addSkill('langnv_limit_yawen');
                        }
                        // player.line(trigger.source,'green');
                    }
                },
                ai:{
                    threaten:2.5,
                    expose:0.5,
                },
            },


            langnv_limit_yawen:{
                mark:true,
                marktext:"雅",
                intro:{
                    name:"狼女",
                    content:function(storage, player) {
                        return `已成为过【狼女】目标`;
                    },
                },
                silent:true,
                trigger:{
                    global:'phaseEnd',
                    player:"dieBegin",
                },
                filter:function(event,player){
                    return true;
                },
                content:function(event){
                    player.removeSkill('langnv_limit_yawen');
                },
            },
            
            nvfei_yawen:{
                audio:4,
                trigger:{player:'drawBegin'},
				direct:true,
				filter:function(event){
					return event.num>0;
				},
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt2('nvfei_yawen'),[1,trigger.num],function(card,player,target){
						return (target.countCards('he')>0)&&player!=target;
					},function(target){
						var att=get.attitude(_status.event.player,target)+get.attitude(target,_status.event.player);
						if(target.hasSkill('tuntian')) return att/10;
						var result = 1-att+3*Math.random();
                        if (target.hasSkillTag('noh')&&target.countCards('e')==0){
                            result = result/2;
                        }
                        if (target.hasSkillTag('noe')&&target.countCards('h')==0){
                            result = result/2;
                        }
                        if (target.hasSkillTag('forbidNoCardDamage')||target.hasSkillTag('forbidNoCardButNatureDamage')){
                            result = result/2;
                        }
                        if (target.hasSkill('langnv_limit_yawen')&&result>0){
                            result = result/3;
                        }
                        return result;
					});
					"step 1"
					if(result.bool){
                        game.delay(1);
						player.logSkill('nvfei_yawen',result.targets,'thunder');
                        result.targets.sort(lib.sort.seat);
						player.gainMultiple(result.targets,'he');
						trigger.num-=result.targets.length;
					}
					else{
						event.finish();
					}
                    'step 2'
					if(trigger.num<=0) game.delay(1.5);
				},
				ai:{
					threaten:1.8,
					expose:0.4,
				},
            },

            hanbian_yawen:{
                skillAnimation:true,
				animationColor:'water',
				audio:2,
				juexingji:true,
				derivation:['huanglang_yawen'],
				unique:true,
				trigger:{global:'phaseAfter'},
				filter:function(event,player){
					return player.hp<=1&&!player.storage.hanbian_yawen;
				},
				forced:true,
				content:function(){
                    "step 0"
                    //改变背景
                    if (game.getUpperBackgroundName('',player) != 'bingshan_bg'){
                        player.addTempSkill('hanbian_background','phaseAfter');
                        player.storage.hanbian_background = game.getUpperBackgroundName('',player);
                        player.syncStorage('hanbian_background');
                        game.createClearBackground('bingshan_bg',player);
                    }
                    game.delay(0.5);
                    "step 1"
					player.loseMaxHp();
					player.addSkill('huanglang_yawen');
					game.log(player,'获得了技能','#g【皇血】');
					player.awakenSkill(event.name);
					player.storage[event.name]=true;
                    player.insertPhase('hanbian_yawen',true);
				},
				ai:{
					threaten:function(player,target){
						if(target.hp==1) return 2;
						return 0.5;
					},
					maixie:true,
					effect:{
						target:function(card,player,target){
							if(!target.hasFriend()) return;
							if(get.tag(card,'damage')==1&&target.hp==2) return [0.5,1];
						}
					}
				}
            },

            hanbian_background:{
                silent:true,
                popup:false,
                forced:true,
                onremove:function(player){
                    //改回背景
                    if (game.getUpperBackgroundName('',player) == 'bingshan_bg'){
                        // game.createClearBackground(player.storage.hanbian_background,player);
                        game.createClearBackground('',player);
                        player.storage.hanbian_background = '';
                    }
                    else{
                        game.createClearBackground('',player);
                    }
                },
            },


            huanglang_yawen:{
                audio:2,
                locked:true,
                forced:true,
                group:['huanglang_maxhand_yawen','huanglang_draw_yawen'],
                ai:{
                    threaten:6.8,
                },
            },

            huanglang_maxhand_yawen:{
                silent:true,
                popup:false,
                forced:true,
                trigger:{
                    player:'phaseDrawBegin',
                },
                content:function(event){
                    player.logSkill('huanglang_yawen');
                    game.log(player,'跳过摸牌阶段');
                    trigger.cancel();
                },
                mod:{
                    maxHandcard:function(player, num) {
                        return 0; // 手牌上限+2
                    },
                },
            },

            huanglang_draw_yawen:{
                silent:true,
                popup:false,
                forced:true,
                trigger:{player:['loseAfter','changeHp']},
				frequent:true,
				filter:function(event,player){
					return player.countCards('h')<player.getDamagedHp();
				},
				content:function(){
                    player.logSkill('huanglang_yawen');
					player.draw(player.getDamagedHp()-player.countCards('h'));
				},
				ai:{
					noh:true,
                    effect:{
                        target:function(card,player,target){
                            if ((get.tag(card,'recover'))){
                                if (player==target&&player.hp>0){
                                    return 0;
                                }
                            }
                        },
                    },
					skillTagFilter:function(player,tag){
						if(tag=='noh'&&player.maxHp-player.hp<player.countCards('h')){
							return false;
						}
					}
				}
            },




            
            qianshang_dong:{
                audio:2,
                skillAnimation:true,
                animationColor:'soil',
                direct:true,
                frequent:true,
                trigger:{
                    player:"useCard",
                },
                check:function(event,player){
                    var targets = game.filterPlayer();
                    targets.remove(player);
                    var effect=0;
                    for(var i=0;i<targets.length;i++){
                        effect+=get.effect(targets[i],{name:'juedou'},player);
                    }
                    if(get.mode()=='identity'){
                        if(player.hasUnknown(1)) return true;
                    }
                    return effect > 0 || Math.random() < 1;
                },
                filter:function(event,player){
                    return get.name(event.card)=='juedou' && player==_status.currentPhase && !player.hasSkill('qianshang_background');
                },
                content:function(event){
                    "step 0"
                    player.chooseBool(get.prompt2("qianshang_dong")).set('ai',function(event,player){
                        var addi = 0;
                        if (player.hp == 1){
                            addi += 0.3;
                        }
                        var friends_num = 0;
                        var targets = game.filterPlayer();
                        targets.remove(player);
                        var effect=0;
                        for(var i=0;i<targets.length;i++){
                            effect+=get.effect(targets[i],{name:'juedou'},player);
                            if (get.attitude(targets[i],player)>0 || get.attitude(player,targets[i])>1){
                                friends_num++;
                            }
                        }
                        addi += (friends_num - (Math.min(3,player.hp-1)))*0.2;
                        if(get.mode()=='identity'){
                            if(player.hasUnknown(2)) return true;
                        }
                        if (addi < -0.2){
                            return false;
                        }
                        return effect > 0 || Math.random() < 0.35+addi;
                    });

                    "step 1"
                    if (result.bool){
                        //改变背景
                        if (!player.hasSkill('qianshang_background')){
                            player.addTempSkill('qianshang_background','phaseAfter');
                            player.storage.qianshang_background = game.getUpperBackgroundName('',player);
                            player.syncStorage('qianshang_background');
                            game.createClearBackground('huoshan_bg',player);
                        }
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    player.logSkill('qianshang_dong');
                    "step 3"
                    //效果
                    if (player.hp > 1){
                        player.loseHp(player.hp - 1);
                        game.playAudio('skill','multi_loss_maxHp');
                    }
                    "step 4"
                    player.line(trigger.targets,'fire');
                    var has=game.hasPlayer(function(current){
                        if (!trigger.targets.contains(current)&&current!=player&&player.canUse({name:'juedou'},current,false)){
                            trigger.targets.push(current);
                            player.line(current,'fire');   
                        }
                    });
                    "step 5"
                    if (trigger.card.cardid){
                        player.storage.qianshang_dong = trigger.card.cardid;
                    }
                    else if (trigger.card.cards&&trigger.card.cards.length>0&&trigger.card.cards[0].cardid){
                        player.storage.qianshang_dong = trigger.card.cards[0].cardid;
                    }
                    else{
                        trigger.card.cardid = 'qianshang_id';
                        player.storage.qianshang_dong = 'qianshang_id';
                    }
                    player.syncStorage('qianshang_dong');
                    if (!player.hasSkill("qianshang_recover_dong")){
                        player.addSkill("qianshang_recover_dong");
                    }
                    
                },
                ai:{
					threaten:10.1,
				},
            },

            qianshang_recover_dong:{
                priority:100,
                silent:true,
                forced:true,
                trigger:{
                    player:"useCardAfter",
                },
                filter:function(event,player){
                    var has=game.hasPlayer(function(current){
                        return current!=player&&current.hp<current.maxHp;
                    });
                    if (event.card.cardid){
                        return has && get.name(event.card) == 'juedou' && player==_status.currentPhase &&event.card.cardid&& player.storage.qianshang_dong && player.storage.qianshang_dong == event.card.cardid;
                    }
                    else if (event.card.cards&&event.card.cards.length>0&&event.card.cards[0].cardid){
                        return has && get.name(event.card) == 'juedou' && player==_status.currentPhase &&event.card.cards[0].cardid&& player.storage.qianshang_dong && player.storage.qianshang_dong == event.card.cards[0].cardid;
                    }
                    else{
                        return has && get.name(event.card) == 'juedou' && player==_status.currentPhase &&player.storage.qianshang_dong && player.storage.qianshang_dong == 'qianshang_id';
                    }
                    
                },
                content:function(event){
                    'step 0'
                    player.storage.qianshang_dong = '';
                    player.syncStorage('qianshang_dong');
                    event.woundPlayers = [];
                    var has = game.hasPlayer(function(current){
                        if (current!=player&&current.hp<current.maxHp){
                            event.woundPlayers.push(current);
                        }
                    });
                    event.woundPlayers.sort(lib.sort.seat);
                    event.targetIndex = 0;
                    player.line(event.woundPlayers,'green');
                    'step 1'
                    if (event.targetIndex < event.woundPlayers.length){
                        event.woundPlayers[event.targetIndex].chooseBool(get.translation('qianshang_dong'),"是否选择与"+get.translation(player)+"共同回复1点体力并令其获得你区域内的一张牌？").set('ai',function(){
                            var player = _status.currentPhase;
                            if (event.woundPlayers[event.targetIndex].countCards('hej')==1&&event.woundPlayers[event.targetIndex].countCards('h')==1&&event.woundPlayers[event.targetIndex].hasSkill('jiuyin')){
                                return false;
                            }
                            if (get.attitude(event.woundPlayers[event.targetIndex],player)>0 || get.attitude(player,event.woundPlayers[event.targetIndex])>1){
                                return true;
                            }
                            else{
                                var score = 0;
                                if (player.hp >= player.maxHp){
                                    score += 1+1.5*Math.random();
                                }
                                else{
                                    score -= 1+1.5*Math.random();
                                }
                                if (event.woundPlayers[event.targetIndex].hp < 2){
                                    score += 2+1*Math.random();
                                }
                                else{
                                    score -= 2+1*Math.random();
                                }
                                if (event.woundPlayers[event.targetIndex].countCards('he')==0){
                                    score += 2+1*Math.random();
                                }
                                else{
                                    score -= 1+1*Math.random();
                                }
                                var hasTaoJiu = event.woundPlayers[event.targetIndex].countCards('h','tao') + event.woundPlayers[event.targetIndex].countCards('h','jiu');
                                score -= 4*hasTaoJiu/event.woundPlayers[event.targetIndex].countCards('h');
                                if (event.woundPlayers[event.targetIndex].countCards('h')==1&&event.woundPlayers[event.targetIndex].hasSkill('jiuyin')){
                                    return false;
                                }
                                if (event.woundPlayers[event.targetIndex].hasSkillTag('noh')){
                                    return true;
                                }
                                if (score > 0){
                                    return true;
                                }
                                else{
                                    return false;
                                }

                            }
                            // if (player.hp >= player.maxHp){
                            //     return true;
                            // }
                            // else if (event.woundPlayers[event.targetIndex].hp < 2 && Math.random() < 0.3){
                            //     return true;
                            // }
                            // else if (player.hp > 3){
                            //     return get.attitude(event.woundPlayers[event.targetIndex],player)>0;
                            // }
                            // else if (player.hp == 3){
                            //     if (Math.random()<0.3){
                            //         return get.attitude(event.woundPlayers[event.targetIndex],player)>0;
                            //     }
                            //     else{
                            //         return get.attitude(event.woundPlayers[event.targetIndex],player)<0;
                            //     }
                            // }
                            // else{
                            //     return get.attitude(event.woundPlayers[event.targetIndex],player)>0;
                            // }
                        });

                        event.goto(2);
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if (result.bool){
                        event.woundPlayers[event.targetIndex].line(player,'green');
                        game.log(event.woundPlayers[event.targetIndex],'愿意与',player,'共同回复一点体力并令其获得自己区域内一张牌');
                        event.woundPlayers[event.targetIndex].recover(1);
                        player.popup(get.translation('qianshang_dong'));
                        player.recover(1);
                        event.goto(3);
                    }
                    else{
                        event.goto(4);
                    }
                    'step 3'
                    if (event.woundPlayers[event.targetIndex].countCards('hej')>0){
                        player.gainPlayerCard(event.woundPlayers[event.targetIndex],true,'hej');
                    }
                    'step 4'
                    event.targetIndex++;
                    game.delay(0.5);
                    event.goto(1);
                },

            },

            qianshang_background:{
                silent:true,
                popup:false,
                forced:true,
                onremove:function (player){
                    //改回背景
                    if (game.getUpperBackgroundName('',player) == 'huoshan_bg'){
                        game.createClearBackground(player.storage.qianshang_background,player);
                        player.storage.qianshang_background = '';
                    }
                    else{
                        game.createClearBackground('',player);
                    }
				},
            },
            
            yexing_dong:{
                audio:2,
                trigger:{
                    global:'gameDrawAfter',
                    player:["enterGame"],
                    player:'changeHp',
                },
				forced:true,
                direct:true,
                popup:false,
                derivation:['bingtui_dong','liejiu_dong','xiangzhuo_dong'],
                content:function(event){
                    'step 0'
                    if (!player.storage.yexing_dong){
                        player.storage.yexing_dong = [0,0,0];
                        player.syncStorage('yexing_dong');
                    }
                    event.now = [0,0,0];
                    if(player.hp<=3){
						event.now[0] = 1;
					}
					if(player.hp<=2){
						event.now[1] = 1;
					}
					if(player.hp<=1){
						event.now[2] = 1;
					}
                    'step 1'
                    if (event.now[0] == player.storage.yexing_dong[0]&&
                        event.now[1] == player.storage.yexing_dong[1]&&
                        event.now[2] == player.storage.yexing_dong[2]
                    ){
                        event.finish();
                    }
                    else{
                        player.logSkill('yexing_dong');
                        if (event.now[0] != player.storage.yexing_dong[0]){
                            if (event.now[0] == 1 && player.storage.yexing_dong[0] == 0){
                                if (!player.hasSkill('bingtui_dong')){
                                    player.addSkill('bingtui_dong');
                                    game.log(player,'获得技能','#g【'+get.translation('bingtui_dong')+'】')
                                }
                            }
                            else{
                                if (player.hasSkill('bingtui_dong')){
                                    player.removeSkill('bingtui_dong');
                                    game.log(player,'失去技能','#g【'+get.translation('bingtui_dong')+'】')
                                }
                            }
                        }
                        if (event.now[1] != player.storage.yexing_dong[1]){
                            if (event.now[1] == 1 && player.storage.yexing_dong[1] == 0){
                                if (!player.hasSkill('liejiu_dong')){
                                    player.addSkill('liejiu_dong');
                                    game.log(player,'获得技能','#g【'+get.translation('liejiu_dong')+'】')
                                }
                            }
                            else{
                                if (player.hasSkill('liejiu_dong')){
                                    player.removeSkill('liejiu_dong');
                                    game.log(player,'失去技能','#g【'+get.translation('liejiu_dong')+'】')
                                }
                            }
                        }
                        if (event.now[2] != player.storage.yexing_dong[2]){
                            if (event.now[2] == 1 && player.storage.yexing_dong[2] == 0){
                                if (!player.hasSkill('xiangzhuo_dong')){
                                    player.addSkill('xiangzhuo_dong');
                                    game.log(player,'获得技能','#g【'+get.translation('xiangzhuo_dong')+'】')
                                }
                            }
                            else{
                                if (player.hasSkill('xiangzhuo_dong')){
                                    player.removeSkill('xiangzhuo_dong');
                                    game.log(player,'失去技能','#g【'+get.translation('xiangzhuo_dong')+'】')
                                }
                            }
                        }
                        player.storage.yexing_dong[0] = event.now[0];
                        player.storage.yexing_dong[1] = event.now[1];
                        player.storage.yexing_dong[2] = event.now[2];
                        player.syncStorage('yexing_dong');
                        game.delay(1);
                    }
                },
                ai:{
                    threaten:0.8,
					maixie:true,
					effect:{
						target:function(card,player,target){
							// if(get.tag(card,'damage')){
							// 	if(!target.hasFriend()) return;
							// 	if(target.hp>=4) return [0,0.001];
							// }


							// if(get.tag(card,'recover')&&player==target&&target.hp <= 3&&target.hp > 1) {
                            //     if (target==_status.currentPhase&&target.countCards('h','tao')<target.hp + 1){
                            //         return [0,0];
                            //     }
                            // }
						}
					}
				},
            },

            bingtui_dong:{
                audio:2,
                forced:true,
                trigger:{
                    player:'damageBegin4',
                },
                filter:function(event,player){
					if(player.getHistory('damage',function(evt){
						return evt!=event;
					}).length>0){
						return player.countCards('h')>0;
					}
					else{
						return false;
					}
				},
                content:function(event){
                    'step 0'
                    var cards = player.getCards('h');
                    event.cardNumber = cards.length;
                    event.number = trigger.num;
                    player.discard(cards);
                    trigger.cancel();
                    game.log(player,'灌下这罚酒，肚皮撑得发透，连青筋都清晰可辨！手里的牌哪里还拿得住，纷纷散落在地，可她依然倔强地强行并着两条雪白又不失肉感的大腿走着猫步！紧紧并拢的雪白大腿内侧柔嫩敏感的肌肤交错摩擦着，发出“呲呲”的性感之声，保持着淑女该有的姿态！令得她原本就难受至极的肚子被挤压憋着，更加压力山大！但她义无反顾！')
                    game.log(player,'防止了此次伤害');
                    'step 1'
                    if (event.cardNumber > event.number){
                        game.log('在众人面前喝酒，',player,'哪里能让自己失了面子？赶忙用手指挽起耳边的秀发以掩饰踉跄的胴体，胡乱将牌摸回来一些，故意咂了咂嘴，仿佛意犹未尽的模样，说：“哈啊~果真是好酒啊！”');
                        player.draw(event.cardNumber - event.number);
                    }
                    'step 2'
                    if (player == _status.currentPhase){
                        game.log(player,'于回合内发动','#g【并腿】','再摸取'+get.cnNumber(2*event.number)+'张牌');
                        player.draw(2*event.number);
                    }
                },
                ai:{
					effect:{
						target:function(card,player,target){
                            if (get.tag(card,'damage')){
                                if(target.getHistory('damage',function(evt){
                                    return true;
                                }).length>0&&target.countCards('h')>0){
                                    var numDamage = 0;
                                    var allCards = player.getCards('h');
                                    for (var i = 0; i < allCards.length; i++){
                                        if (get.tag(allCards[i],'damage')){
                                            numDamage++;
                                        }
                                    }
                                    if (numDamage<target.countCards('h')&&Math.random()<0.6){
                                        return 0;
                                    }
                                }
                            }
                            
						}
					}
				},

            },

            liejiu_dong:{
                audio:2,
                direct:true,
                priority:15,
                trigger:{
                    player:"damageEnd",
                },
                filter:function(event,player){
                    return event.source&&event.source!=player&&event.source.countCards('h')>0&&player!=_status.currentPhase;//&&!player.hasSkill('liejiu_limit_dong');
                },
                content:function(event){
                    'step 0'
                    player.chooseBool(get.prompt2('liejiu_dong')).set('ai',function(){
                        return get.attitude(player,trigger.source)<0||get.attitude(trigger.source,player)<0;
                    });
                    'step 1'
                    if (result.bool){
                        //改变背景
                        if (game.getUpperBackgroundName('',player) != 'rainforest_bg'){
                            player.addTempSkill('liejiu_dong_background','phaseAfter');
                            player.storage.liejiu_dong_background = game.getUpperBackgroundName('',player);
                            player.syncStorage('liejiu_dong_background');
                            game.createClearBackground('rainforest_bg',player);
                        }

                        player.logSkill('liejiu_dong',trigger.source,'fire');
                        game.log(player,'观看',trigger.source,'的手牌');
                        // player.addTempSkill('liejiu_limit_dong','phaseAfter');
                        var cards = trigger.source.getCards('h');
                        player.chooseCardButton('【猎酒】：选择一张【杀】或【酒】获得之',cards).set('filterButton',function(button){
                            return get.name(button.link)=='sha'||get.name(button.link)=='jiu';
                        }).set('ai',function(button){
                            var add = 0;
                            if (get.name(button.link)=='jiu'){
                                add = 1;
                            }
                            return get.value(button.link)+add+Math.random();
                        });
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if (result.bool){
                        player.gain(result.links[0],trigger.source,'giveAuto','bySelf');
                        game.delay(1);
                    }
                    else{
                        event.finish();
                    }
                    'step 3'
                    game.playAudio('skill','liejiu_dong'+Math.ceil(2*Math.random()));
                    player.useCard({name:'juedou',isCard:true,cardid:'liejiu_dong_id'},trigger.source).set('audio',false); 
                },
                ai:{
                    maixie_defend:true,
                    expose:0.15,
					effect:{
						target:function(card,player,target){
                            if (get.tag(card,'damage')&&get.attitude(player,target)<0){
                                if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                                if (player.countCards('h','sha')+player.countCards('h','jiu')==0){
                                    return [1,-0.2];
                                }
                                return 0.8;
                            }
							
						}
					}
                },
            },

            liejiu_limit_dong:{
                silent:true,
                forced:true,
            },

            liejiu_dong_background:{
                silent:true,
                popup:false,
                forced:true,
                onremove:function (player){
                    //改回背景
                    if (game.getUpperBackgroundName('',player) == 'rainforest_bg'){
                        game.createClearBackground(player.storage.liejiu_dong_background,player);
                        player.storage.liejiu_dong_background = '';
                    }
                    else{
                        game.createClearBackground('',player);
                    }
				},
            },

            xiangzhuo_dong:{
                audio:2,
				trigger:{
                    player:['useCard','damageBegin1'],
                    target:'useCardToTargeted',
                    source:'damageBegin1',
                },
				forced:true,
                locked:true,
                direct:true,
				filter:function(event,player){
                    if (event.name == 'damage'&&event.num<=1){
                        return false;
                    }
					return event.card&&get.name(event.card)=='juedou';
				},
				content:function(event){
                    if (trigger.name == 'useCard'){
                        player.logSkill('xiangzhuo_dong');
                    }
                    else if (trigger.name == 'damage'){
                        if (player == trigger.player){
                            player.logSkill('xiangzhuo_dong');
                            trigger.source.line(trigger.player,'fire');
                        }
                        else{
                            player.logSkill('xiangzhuo_dong');
                            player.line(trigger.player,'fire');
                        }
                    }
                    else{
                        player.logSkill('xiangzhuo_dong');
                        player.line(trigger.player,'fire');
                    }


                    // trigger.target.storage.xiangzhuo_sha = 1;
                    // if (!trigger.target.hasSkill('xiangzhuo_sha')){
                    //     trigger.target.addSkill('xiangzhuo_sha');
                    // }
                    // trigger.target.syncStorage('xiangzhuo_sha');
                    // if (!trigger.target.hasSkill('xiangzhuo_clear')){
                    //     trigger.target.addSkill('xiangzhuo_clear');
                    // }
                    // trigger.player.storage.xiangzhuo_sha = 1;
                    // if (!trigger.player.hasSkill('xiangzhuo_sha')){
                    //     trigger.player.addSkill('xiangzhuo_sha');
                    // }
                    // trigger.player.syncStorage('xiangzhuo_sha');
                    // if (!trigger.player.hasSkill('xiangzhuo_clear')){
                    //     trigger.player.addSkill('xiangzhuo_clear');
                    // }
				},
                group:"xiangzhuo_sha",
				ai:{
					result:{
						target:function(card,player,target){
							if(card.name=='juedou'&&target.countCards('h')>0) return [1,0,0,-1];
						}
					}
				},
            },

            xiangzhuo_sha:{
                audio:false,
                silent:true,
                popup:false,
                direct:true,
                forced:true,
                trigger:{
                    player:"juedou",
                    target:"juedou",
                },
                content:function(event){
                    var idp=trigger.player.playerid;
					var idt=trigger.target.playerid;
                    // trigger.baseDamage = trigger.turnNum;
                    trigger.extraDamage = trigger.turnNum - 1;
                    trigger.shaReq[idp] = trigger.turnNum;
                    trigger.shaReq[idt] = trigger.turnNum;
                },
            },

            // xiangzhuo_clear:{
            //     silent:true,
            //     popup:false,
            //     direct:true,
            //     forced:true,
            //     mark:true,
            //     marktext:'象',
            //     intro:{
            //         name:'象',
            //         content:'象酌',
            //     },
            //     trigger:{
            //         global:"useCardAfter",
            //     },
            //     filter:function(event,player){
            //         return get.name(event.card) == 'juedou'&& player.storage.xiangzhuo_sha&& player.storage.xiangzhuo_sha == 1;
            //     },
            //     content:function(event){
            //         player.storage.xiangzhuo_sha = 0;
            //         delete player.storage.xiangzhuo_sha;
            //         if (player.hasSkill('xiangzhuo_sha')){
            //             player.removeSkill('xiangzhuo_sha');
            //         }
            //         player.removeSkill('xiangzhuo_clear');
            //     },
            // },

            
            aozun_dong:{
                audio:2,
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                direct:true,
                filter:function(event,player){
                    return get.name(event.card)=='sha'&&lib.filter.cardUsable({name:'juedou',isCard:true},player);
                },
                content:function(event){
                    "step 0"
                    player.chooseBool(get.prompt('aozun_dong'),"当你使用【杀】指定目标后，你可以将此牌视为【决斗】并继承此【杀】的伤害值。").set('ai',function(event,player){
                        if (trigger.stocktargets&&trigger.stocktargets.length>0&&trigger.stocktargets.length<=1&&trigger.stocktargets[0].hasSkillTag('notrick')){
                            return false;
                        }
                        if (player.hasSkill('yunv_kong_gui')&&get.type2(player.storage.yunv_kong_gui)=='trick'){
                            return false;
                        }
                        if (!player.hasSkill('qianshang_background')&&player==_status.currentPhase){
                            if (trigger.jiu){
                                if (get.mode() == 'identity'&&player.identity == 'zhu'&&player.hasUnknown(2)){
                                    return true;
                                }
                                if (Math.random()<((player.countCards('h','sha')/2+1)/(1+trigger.jiu_add))){
                                    return true;
                                }
                                else{
                                    return false;
                                }
                            }
                            else{
                                return true;
                            }
                        }
                        else {
                            // if ((!trigger.jiu)&&Math.random()<0.3){
                            //     return true;
                            // }
                            if (Math.random()<0.3){
                                return true;
                            }
                            else{
                                return false;
                            }
                        }
                    });
                    "step 1"
                    if (result.bool){
                        event.origin = trigger.card;
                        if (trigger.cards){
                            event.cards = trigger.cards;
                        }
                        else{
                            event.cards = [event.origin];
                        }
                        event.targets = trigger.stocktargets;
                        // trigger.cancel();
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    player.logSkill('aozun_dong');
                    game.log(player,'将',event.origin,'视为','#y决斗');
                    
                    
                    // player.useCard({name:'juedou',suit:event.origin.suit,number:event.origin.number,isCard:true,cardid:event.origin.cardid,cards:event.cards,},event.targets).set('audio',false); 
                    
                    // event.originName = event.origin.name;
                    event.origin.name = 'juedou';
                    // player.useCard(event.origin,event.targets).set('audio',false);  
                    player.popup('决斗','metal');
                    player.line(event.targets,'green');

                    //step 3
                    // event.origin.name = event.originName;
                    // trigger.cancel();

                },
                group:"aozun_respond_dong",
                ai:{
                    threaten:0.2,
                    preRespondSha:true,
                    preshadamage:true,
					effect:{
						target:function(card,player,target,effect){
							if(get.tag(card,'respondSha')) return 0.7;
						}
					},
				},

            },

            aozun_respond_dong:{
                silent:true,
                direct:true,
                frequent:true,
                trigger:{
                    player:'chooseToRespondBegin',
                },
                filter:function(event,player){
					if(event.responded) return false;
					return event.filterCard({ name: "sha" });
				},
                content:function(event){
					"step 0"
                    var warnText = '';
                    if (trigger.skillwarn){
                        warnText = trigger.skillwarn+'。';
                    }
                    player.chooseBool(get.prompt('aozun_dong'),'<span class="thundertext">'+warnText+'</span>'+"当你需要打出【杀】时，你可以观看牌堆底四张牌，若其中有【杀】，你可以选择其中一张【杀】打出，若其中没有【杀】，你可以获得这四张牌中的一张并将剩余三张牌置于牌堆顶。").set('ai',function(event,player){
                        return true;
                    });
                    "step 1"
                    if (result.bool){
                        event.triggerParent = trigger.getParent();
                        player.logSkill('aozun_dong');
                        game.log(player,'观看牌堆底四张牌');
                        event.triggerParent = trigger.getParent();
                        if (event.triggerParent.target&&event.triggerParent.target == player){
                            player.line(event.triggerParent.player,'green');
                        }
                        else if (event.triggerParent.player&&event.triggerParent.player == player){
                            player.line(event.triggerParent.target,'green');
                        }
                        game.delay(1);
                        var cards=[];
                        if(ui.cardPile.childNodes.length<4){
                            var discardcards=get.cards(4);
                            game.cardsDiscard(discardcards);
                        }
                        for(var i=0;i<4;i++){
                            if(ui.cardPile.childNodes.length>i) cards.unshift(ui.cardPile.childNodes[ui.cardPile.childNodes.length - 1 - i]);
                        }
                        event.allCards = cards;
                        var has = false;
                        for (var i = 0; i < cards.length; i++){
                            if (cards[i].name == 'sha'){
                                has = true;
                                break;
                            }
                        }
                        if (has){
                            player.chooseCardButton('【傲樽】：选择一张【杀】打出',cards).set('filterButton',function(button){
                                return get.type(button.link)=='basic'&&_status.event.getTrigger().filterCard(button.link);
                            }).set('ai',function(button){
                                if (event.triggerParent&&event.triggerParent.name&&event.triggerParent.name == 'juedou'){
                                    if (get.attitude(event.triggerParent.player,event.triggerParent.target) > 0 && get.attitude(event.triggerParent.target,event.triggerParent.player) > 0){
                                        return -1;
                                    }
                                    else{
                                        return 1+Math.random();
                                    }
                                }
                                else if (trigger.getParent()&&trigger.getParent().name == 'yunv_shashan_gui'){
                                    if (get.attitude(player,trigger.getParent().player)>2){
                                        return 1+Math.random();
                                    }
                                    else{
                                        return -1;
                                    }
                                }
                                else{
                                    return 1+Math.random();
                                }
                            });
                            event.goto(2);
                        }
                        else{
                            player.chooseCardButton('【傲樽】：选择一张卡牌获得，剩余三张置顶',cards).set('filterButton',function(button){
                                return true;
                            }).set('ai',function(button){
                                return get.value(button.link);
                            });
                            event.goto(3);
                        }
                        
                    }
                    else{
                        event.finish();
                    }
					"step 2"
					if(result.bool){
						game.log(player,'#g【傲樽】','成功');
						trigger.untrigger();
						trigger.responded=true;
						result.links[0].remove();
						game.updateRoundNumber();
                        // trigger.result={bool:true,card:result.links[0]};
                        trigger.result={bool:true,card:{name:'sha',suit:result.links[0].suit,number:result.links[0].number,nature:result.links[0].nature,isCard:true}};
                        player.$throwordered(result.links[0],true);
                        game.addVideo('throwordered',player,[get.cardInfo(result.links[0]),'',event.videoId]);

                        game.delay(1);
                        event.goto(4);
					}
                    else{
                        event.finish();
                    }
                    "step 3"
                    if(result.bool){
						game.log(player,'#g【傲樽】','失败');
                        ui.cardPile.removeChild(result.links[0]);
                        game.updateRoundNumber();
                        player.$draw(1);
						player.gain(result.links[0],'giveAuto','bySelf');
                        if (player.isUnderControl(true)){
                            game.log(player,'从牌堆底获得',result.links[0]);
                        }
                        else{
                            game.log(player,'从牌堆底获得一张牌');
                        }
                        event.allCards.remove(result.links[0]);
                        for (var i = event.allCards.length - 1; i >= 0; i--){
                            ui.cardPile.removeChild(event.allCards[i]);
                            ui.cardPile.insertBefore(event.allCards[i],ui.cardPile.firstChild);
                        }
                        if (player.isUnderControl(true)){
                            game.log(player,'将',event.allCards,'置于牌堆顶');
                        }
                        else{
                            game.log(player,'将三张牌置于牌堆顶');
                        }
                        game.delay(1.4);
                        event.finish();
					}
                    else{
                        event.finish();
                    }
                    "step 4"
                    game.addVideo('judge2',null,event.videoId);
				},
                ai:{
                    expose:0.02,
                },
            },



            yewang_gu:{
                audio:2,
                forced:false,
                direct:true,
                frequent:true,
                trigger:{
                    target:'useCardToTargeted',
                },
                init:function(player){
                    player.storage.yewang_gu = [1,1,1];
                    player.syncStorage('yewang_gu');
                },
                filter:function(event,player){
                    if (!player.storage.yewang_gu){
                        player.storage.yewang_gu = [1,1,1];
                        player.syncStorage('yewang_gu');
                    }
                    if (player.storage.yewang_gu&&player.storage.yewang_gu.length==3&&event.player&&event.player!=player){
                        if (event.player.hp > player.hp){
                            return player.storage.yewang_gu[0] != 0;
                        }
                        if (event.player.hp == player.hp){
                            return player.storage.yewang_gu[1] != 0;
                        }
                        if (event.player.hp < player.hp){
                            return player.storage.yewang_gu[2] != 0;
                        }
                    }
                    else{
                        return false;
                    }
                },
                content:function(event){
                    "step 0"
                    player.chooseBool(get.prompt2('yewang_gu')).set('ai',function(){
                        return true;
                    });
                    "step 1"
                    if (result.bool){
                        player.logSkill('yewang_gu');
                        if (trigger.player.hp > player.hp){
                            player.storage.yewang_gu[0] = 0;
                            player.syncStorage('yewang_gu');
                            event.Number = 4;
                        }
                        if (trigger.player.hp == player.hp){
                            player.storage.yewang_gu[1] = 0;
                            player.syncStorage('yewang_gu');
                            event.Number = 3;
                        }
                        if (trigger.player.hp < player.hp){
                            player.storage.yewang_gu[2] = 0;
                            player.syncStorage('yewang_gu');
                            event.Number = 2;
                        }
                        game.log(player,'观看牌堆顶'+get.cnNumber(event.Number)+'张牌');
                        var cards=[];
                        if(ui.cardPile.childNodes.length<event.Number){
                            var discardcards=get.cards(event.Number);
                            game.cardsDiscard(discardcards);
                        }
                        for(var i=0;i<event.Number;i++){
                            if(ui.cardPile.childNodes.length>i) cards.push(ui.cardPile.childNodes[i]);
                        }
                        event.allCards = cards;
                        player.chooseCardButton('【野望】：选择其中花色相同的牌获得之',[1,event.Number],event.allCards).set('filterButton',function(button){
                            for(var i=0;i<ui.selected.buttons.length;i++){
                                if(get.suit(ui.selected.buttons[i].link)!=get.suit(button.link)) return false;
                            }
                            return true;
                        }).set('ai',function(button){
                            var value = 0
                            if (get.suit(trigger.card)&&get.tag(trigger.card, 'damage')){
                                if (get.suit(button.link)==get.suit(trigger.card)){
                                    value += 8;
                                }
                            }
                            if (player.hasSkill('yewang_protect_gu')){
                                if (player.storage.yewang_protect_gu.contains(get.suit(button.link))){
                                    value -= 9;
                                }
                            }
                            for (var i = 0; i< event.allCards.length; i++){
                                if (get.suit(button.link)==get.suit(event.allCards[i])){
                                    value += get.value(event.allCards[i]);
                                }
                            }
                            return value + Math.random();
                        });
                        game.delay(1);

                    }
                    else{
                        event.finish();
                    }

                    "step 2"
                    if (result.bool){
                        for (var i=0; i < result.links.length; i++){
                            ui.cardPile.removeChild(result.links[i]);
                        }
                        game.updateRoundNumber();
                        player.$draw(result.links.length);
						player.gain(result.links,'giveAuto','bySelf');
                        if (player.isUnderControl(true)){
                            game.log(player,'从牌堆顶获得',result.links);
                        }
                        else{
                            game.log(player,'从牌堆顶获得'+get.cnNumber(result.links.length)+'张牌');
                        }
                        player.showCards(result.links,'【野望】牌展示');
                        game.log('#g【野望】','记录花色：','#y'+get.translation(get.suit(result.links[0])),'，本回合此花色的牌对',player,'造成的伤害无效');
                        event.suitProtect = get.suit(result.links[0]);
                        if (!player.hasSkill('yewang_protect_gu')){
                            player.addTempSkill('yewang_protect_gu','phaseAfter');
                            player.storage.yewang_protect_gu = [];
                            player.syncStorage('yewang_protect_gu');
                        }
                        player.storage.yewang_protect_gu.push(get.suit(result.links[0]));
                        player.syncStorage('yewang_protect_gu');
                    }
                    else{
                        event.finish();
                    }
                },
                ai:{
					threaten:1.2,
					// expose:0.3,
				},

                group:["yewang_init_gu"],
            },

            yewang_init_gu:{
                silent:true,
                forced:true,
                direct:true,
                trigger:{
                    global:"phaseBegin",
                },
                content:function(event){
                    player.storage.yewang_gu = [1,1,1];
                    player.syncStorage('yewang_gu');
                },
            },

            yewang_effect:{
                audio:false,
                silent:true,
                popup:false,
                direct:true,
                trigger:{
                    target:"shaBefore",
                },
                forced:true,
                filter:function(event,player){
                    return false;
                },
                content:function(event){
                    event.finish();
                },
                ai:{
                    effect:{
                        target:function(card,player,target){
                            if (card&&get.suit(card)&&get.tag(card,'damage')&&target.hasSkill('yewang_protect_gu')&&target.storage.yewang_protect_gu){
                                for (var i = 0; i < target.storage.yewang_protect_gu.length; i++){
                                    if (target.storage.yewang_protect_gu[i] == get.suit(card)){
                                        return 'zerotarget';
                                    }
                                }
                            }
                        },
                    },
                },
            },

            yewang_protect_gu:{
                silent:true,
                forced:true,
                direct:true,
                trigger:{
                    player:"damageBegin4",
                },
                filter:function(event,player){
                    if(event.card&&get.suit(event.card)){
                        for (var i = 0; i < player.storage.yewang_protect_gu.length; i++){
                            if (player.storage.yewang_protect_gu[i] == get.suit(event.card)){
                                return true;
                            }
                        }
                        return false;
                    }
                    else{
                        return false;
                    }
                },
                content:function(event){
                    trigger.cancel();
                    player.logSkill('yewang_gu');
                    game.log(trigger.card,'的花色与','#g【野望】','记录的花色相同，此次伤害对',player,'无效');
                },
                group:['yewang_effect'],
            },
            
            gushi_gu:{
                trigger:{global:'phaseZhunbei'},
				direct:true,
				audio:2,
				init:function(player){
					if(!player.storage.gushi_gu) {
                        player.storage.gushi_gu=[];
                        player.syncStorage('gushi_gu');
                    }
					if(!player.storage.gushi_gu2) {
                        player.storage.gushi_gu2=[];
                        player.syncStorage('gushi_gu2');
                    }
				},
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				intro:{
					content:'cards',
					onunmark:function(storage,player){
						if(storage&&storage.length){
							player.$throw(storage,1000);
							game.cardsDiscard(storage);
							game.log(storage,'被置入了弃牌堆');
							storage.length=0;
                            player.syncStorage('gushi_gu');
						}
						player.storage.gushi_gu2=[];
                        player.syncStorage('gushi_gu2');
					},
					mark:function(dialog,content,player){
						if(content&&content.length){
							dialog.addAuto([content,'blank']);
							if(player.isUnderControl(true)){
								var str='';
								for(var i=0;i<player.storage.gushi_gu2.length;i++){
									str+=get.translation(player.storage.gushi_gu2[i]);
									if(i<player.storage.gushi_gu2.length-1){
										str+='、';
									}
								}
								dialog.add('<div class="text center">'+str+'</div>')
							}
						}
					},
				},
				content:function(){
					'step 0'
					var list1=[],list2=[],list3=[];
					for(var i=0;i<lib.inpile.length;i++){
						var type=get.type(lib.inpile[i]);
						if(type=='basic'){
							list1.push(['基本','',lib.inpile[i]]);
						}
						else if(type=='trick'){
							list2.push(['锦囊','',lib.inpile[i]]);
						}
						else if(type=='delay'){
							list3.push(['锦囊','',lib.inpile[i]]);
						}
					}
                    event.notReady = (player.countCards('h','tao')+player.countCards('h','jiu') == player.countCards('he'));
					player.chooseButton([get.prompt('gushi_gu'),[list1.concat(list2).concat(list3),'vcard']]).set('filterButton',function(button){
						var player=_status.event.player;
						if(player.storage.gushi_gu2&&player.storage.gushi_gu2.contains(button.link[2])) return false;
						return true;
					}).set('ai',function(button){
                        if (event.notReady) return -1;
						var rand=_status.event.rand;
                        var curr = 0;
                        var player = _status.event.player;
                        if (player == _status.currentPhase){
                            curr = 1;
                        }
						switch(button.link[2]){
							case 'sha':return 5+rand[1];
							case 'tao':return 4+rand[2];
							case 'lebu':return 4.3+rand[3];
							case 'shan':return 4.5+curr+rand[4];
							case 'wuzhong':return 4+rand[5];
							case 'shunshou':return 3+rand[6];
                            case 'juedou':return 2.4+rand[7];
							case 'nanman':return 2+rand[8];
							case 'wanjian':return 2+rand[9];
                            case 'wuxie': return curr*6*rand[10]+rand[10];
							default:return rand[0];
						}
					}).set('rand',[Math.random(),Math.random(),Math.random(),Math.random(),
					Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()]);
					'step 1'
					if(result.bool){
						player.storage.gushi_gu2.push(result.links[0][2]);
                        player.syncStorage('gushi_gu2');
						player.logSkill('gushi_gu');
						player.chooseCard('he','选择一张牌作为“古石”',true).set('ai',function(card){
                            var eff = 0;
                            if (get.type(card)=='equip'&&get.subtype(card)!='equip3'&&get.name(card)!='muniu'){
                                eff = 5;
                            }
                            if (get.name(card)=='tao'){
                                eff = eff - 13;
                            }
                            if (get.name(card)=='jiu'){
                                eff = eff - 9;
                            }
                            if (player==_status.currentPhase){
                                eff = eff - get.number(card);
                            }
                            return -5-get.value(card)+eff;
                        });
						if(player.isOnline2()){
							player.send(function(storage){
								game.me.storage.gushi_gu2=storage;
							},player.storage.gushi_gu2);
						}
					}
					else{
						event.finish();
					}
					'step 2'
					if(result.bool){
						var card=result.cards[0];
                        player.$give(1,player,false);
						player.lose(card,ui.special,'toStorage');
						player.storage.gushi_gu.push(card);
						player.syncStorage('gushi_gu');
						player.markSkill('gushi_gu');
                        game.log(player,'将一张牌置于其武将牌上，作为','#g【古石】');
					}
				},
				group:['gushi_gu2'],
                ai:{
					threaten:1.8,
				},
            },

            gushi_gu2:{
				trigger:{global:['useCard']},
				//priority:15,
				audio:'gushi_gu',
				filter:function(event,player){
					// if(_status.currentPhase==player) return false;
					return event.player!=player&&player.storage.gushi_gu2&&player.storage.gushi_gu2.contains(event.card.name);
				},
				direct:true,
				content:function(event){
					"step 0"
                    game.delay(1);
					var effect=0;
                    if (trigger.cards){
                        event.triggerCard = trigger.cards;
                    }
                    else{
                        event.triggerCard = false;
                    }
					if(trigger.card.name=='wuxie'||trigger.card.name=='shan'){
						if(get.attitude(player,trigger.player)<-1){
							effect=-1;
						}
					}
					else if(trigger.targets&&trigger.targets.length){
						for(var i=0;i<trigger.targets.length;i++){
							effect+=get.effect(trigger.targets[i],trigger.card,trigger.player,player);
						}
					}
                    if (get.attitude(player,trigger.player)<0){
                        effect-=150;
                    }
					var str='【古石】：是否令'+get.translation(trigger.player);
					if(trigger.targets&&trigger.targets.length){
						str+='对'+get.translation(trigger.targets);
					}
					str+='使用的'+get.translation(trigger.card)+'失效？'
					var next=player.chooseBool(str,function(){
						var player=_status.event.player;
						var trigger=_status.event.getTrigger();
						if(_status.event.effect<0){
							if(trigger.card.name=='sha'){
								var target=trigger.targets[0];
                                if (get.attitude(player,target)>0) return true;
								if(target==player){
									return !player.countCards('h','shan');
								}
								else{
									return target.hp==1||(target.countCards('h')<=2&&target.hp<=2);
								}
							}
							else{
								return true;
							}
						}
						return false;
					});
					next.set('effect',effect);
					"step 1"
					if(result.bool){
                        game.playAudio('skill','gushi_gu'+3);
						player.popup('gushi_gu');
                        game.log(player,'发动了','#g【古石】');
                        game.delay(1);
						var index=player.storage.gushi_gu2.indexOf(trigger.card.name);
						if(index!=-1){
							var card=player.storage.gushi_gu[index];
                            event.TheCard = card;
							game.cardsDiscard(card);
							player.$throw(card);
                            game.log(player,'弃置“古石”牌',card,'令',trigger.player,'使用的',trigger.card,'无效')
							player.storage.gushi_gu.splice(index,1);
							player.storage.gushi_gu2.splice(index,1);
                            player.syncStorage('gushi_gu');
                            player.syncStorage('gushi_gu2');
							if(player.storage.gushi_gu.length==0){
								player.unmarkSkill('gushi_gu');
							}
							else{
								player.syncStorage('gushi_gu');
								player.markSkill('gushi_gu');
								if(player.isOnline2()){
									player.send(function(storage){
										game.me.storage.gushi_gu2=storage;
									},player.storage.gushi_gu2);
								}
							}
						}
						trigger.targets.length=0;
						trigger.all_excluded=true;
					}
                    else{
                        event.finish();
                    }
                    "step 2"
                    // player.logSkill('gushi_gu');
                    game.broadcastAll(ui.clear);
                    game.addVideo('uiClear');
                    ui.arena.classList.remove('thrownhighlight');
                    game.addVideo('thrownhighlight2');
                    game.delay(0.8);
                    "step 3"
                    game.playAudio('skill','gushi_gu'+Math.ceil(2*Math.random()));
                    player.line(trigger.player,'green');
                    trigger.player.gain(event.TheCard,'gain2').set('log',false);
                    game.log(trigger.player,'获得“古石”牌',event.TheCard);
                    "step 4"
                    if (event.triggerCard&&event.triggerCard.length>0){
                        player.gain(event.triggerCard,'gain2').set('log',false);
                        game.log(player,'获得',trigger.player,'使用的牌',event.triggerCard);
                    }
                    game.updateRoundNumber();
                    
				},
                ai:{
                    expose:0.5,
                },
				
			},
            
            kuanglie_gu:{
                audio:2,
                derivation:"baonu_gu",
                skillAnimation:true,
                animationColor:'soil',
                enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player.canCompare(target);
				},
                line:'fire',
                direct:true,
				selectTarget:[1,3],
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				multitarget:true,
				multiline:true,
				content:function(){
                    'step 0'
                    //改变背景
                    if (game.getUpperBackgroundName('',player) != 'firelion_bg'){
                        if (!player.hasSkill('kuanglie_background')){
                            player.addTempSkill('kuanglie_background','phaseAfter');
                        }
                        player.storage.kuanglie_background = game.getUpperBackgroundName('',player);
                        player.syncStorage('kuanglie_background');
                        game.createClearBackground('firelion_bg',player);
                    }
                    game.delay(0.2);
                    'step 1'
                    player.logSkill('kuanglie_gu');
                    game.delay();
                    'step 2'
					player.chooseToCompare(targets).callback=lib.skill.kuanglie_gu.callback;
				},
                callback:function(event){
                    'step 0'
                    event.thePlayer = player;
                    event.theTarget = target;
                    if(event.num1>event.num2){
                        if (!player.hasSkill('baonu_gu')){
                            player.popup('狂烈','fire');
                            game.playAudio('skill','rongyan_gain_yan2');
                            game.log(player,'发动','#g【狂烈】','获得技能','#g【暴怒】','直到其下回合开始');
                            player.addTempSkill('baonu_gu',{player:"phaseZhunbeiBefore"});
                        }
					}
                    'step 1'
                    if(event.num1 >= event.num2){
                        var choice=[];
                        choice.push('受到火焰伤害');
                        choice.push(get.translation(player)+'流失体力');
                        target.chooseControl(choice).set('ai',function(){
                            var goon = get.attitude(event.theTarget,event.thePlayer)<0;
                            var hasBaoNu = event.thePlayer.hasSkill('baonu_gu');
                            if (hasBaoNu){
                                if (event.thePlayer.hp > 1){
                                    if (goon){
                                        if (event.theTarget.hp > 1){
                                            return 0;
                                        }
                                        else{
                                            return 1;
                                        }
                                    }
                                    else{
                                        return 1;
                                    }
                                }
                                else{
                                    if (goon){
                                        return 1;
                                    }
                                    else{
                                        if (event.theTarget.hp < 2){
                                            return 1;
                                        }
                                        else{
                                            if (event.theTarget.countCards('h','tao') > 0){
                                                return 1;
                                            }
                                            else{
                                                return 0;
                                            }
                                        }
                                    }
                                }
                            }
                            else{
                                if (goon){
                                    return 1;
                                }
                                else{
                                    if (event.theTarget.hasSkillTag('maixie')||event.theTarget.hasSkillTag('nofire')){
                                        return 0;
                                    }
                                    else if (event.thePlayer.hp >= event.theTarget.hp){
                                        return 1;
                                    }
                                    else{
                                        return 0;
                                    }
                                }
                            }
                            
                        }).set('prompt','###狂烈###你拼点没赢，选择受到'+get.translation(player)+'造成的1点火焰伤害或令'+get.translation(player)+'流失1点体力');
                        event.goto(2);
                    }
                    else{
                        event.goto(3);
                    }
                    'step 2'
                    if (result.control == '受到火焰伤害'){
                        player.line(target,'fire');
                        target.damage(1,'fire',player);
                    }
                    else{
                        target.line(player,'green');
                        player.loseHp(1);
                    }
                    'step 3'
                    if (player.isAlive()){
                        if(event.num1 <= event.num2){
                            var choice=[];
                            choice.push('受到火焰伤害');
                            choice.push(get.translation(player)+'流失体力');
                            player.chooseControl(choice).set('ai',function(){
                                return 1;
                            }).set('prompt','###狂烈###你拼点没赢，选择受到'+get.translation(player)+'造成的1点火焰伤害或令'+get.translation(player)+'流失1点体力');
                            event.goto(4);
                        }
                        else{
                            event.goto(5);
                        }
                    }
                    else{
                        event.finish();
                    }
                    'step 4'
                    if (result.control == '受到火焰伤害'){
                        player.damage(1,'fire',player);
                    }
                    else{
                        // target.line(player,'green');
                        player.loseHp(1);
                    }
                    'step 5'
                    if (event.targetIndex == event.allTargets.length - 1){
                        event.goto(6);
                    }
                    else{
                        event.finish();
                    }
                    'step 6'
                    event.i = 0;

                    // for (var i = 0; i < event.allTargets.length; i++){
                    //     if (event.allTargets[i].isAlive()){
                    //         event.allTargets[i].gain(event.cardlist[i]).set('log',false);
                    //         // game.log(event.allTargets[i],'收回拼点牌',event.cardlist[i]);
                    //     }
                    // }
                    // if (player.isAlive()){
                    //     player.gain(event.card1).set('log',false);
                    //     // game.log(player,'收回拼点牌',event.card1);
                    // }
                    // game.updateRoundNumber();
                    
                    'step 7'
                    if (event.i < event.allTargets.length){
                        if (event.allTargets[event.i].isAlive()){
                            event.allTargets[event.i].$gain2(event.cardlist[event.i],false);
                            game.log(event.allTargets[event.i],'收回拼点牌',event.cardlist[event.i]);
                            // game.delay(0.5);
                        }
                        event.goto(8);
                    }
                    else{
                        event.goto(9);
                    }
                    'step 8'
                    event.i++;
                    event.goto(7);
                    'step 9'
                    if (player.isAlive()){
                        player.$gain2(event.card1,false);
                        game.log(player,'收回拼点牌',event.card1);
                        // game.delay(1);
                    }
                    'step 10'
                    for (var i = 0; i < event.allTargets.length; i++){
                        if (event.allTargets[i].isAlive()){
                            event.allTargets[i].gain(event.cardlist[i]).set('log',false);
                            // game.log(event.allTargets[i],'收回拼点牌',event.cardlist[i]);
                        }
                    }
                    if (player.isAlive()){
                        player.gain(event.card1).set('log',false);
                        // game.log(player,'收回拼点牌',event.card1);
                    }



                    game.updateRoundNumber();

                    // if (event.targetIndex == event.allTargets.length - 1){
                    //     for (var i = 0; i < event.allTargets.length; i++){
                    //         if (event.allTargets[i].isAlive()){
                    //             event.allTargets[i].$gain2(event.cardlist[i],false);
                    //             game.log(event.allTargets[i],'收回拼点牌',event.cardlist[i]);
                    //         }
                    //     }
                    //     if (player.isAlive()){
                    //         player.$gain2(event.card1,false);
                    //         game.log(player,'收回拼点牌',event.card1);
                    //     }
                    //     game.updateRoundNumber();
                    // }

                },
                ai:{
                    order:20,
					// order:function(){
                    //     return get.order({name:'tao'})-0.2;
                    // },
                    threaten:4,
                    expose:0.05,
					result:{
                        target:function(player,target){
                            var cards = player.getCards('h');
                            var maxNum = 0;
                            for (var i = 0; i < cards.length; i++){
                                if (maxNum < get.number(cards[i])){
                                    maxNum = get.number(cards[i]);
                                }
                            }
                            var num=ui.selected.targets.length;
                            if (maxNum/13 > num/3){
                                return 0;
                            }
                            var goon = 0;
                            if (get.attitude(target,player)>0){
                                if (player.hp < 3){
                                    if (player.hp+player.countCards('h','tao')+player.countCards('h','jiu')<2){
                                        return 0;
                                    }
                                    else{
                                        goon = -25;
                                    }
                                    
                                }
                                else{
                                    goon = 10;
                                }
                            }
                            return goon - 40/(target.countCards('h')+Math.random());
						},
                        player:function(player){
                            var cards = player.getCards('h');
                            var maxNum = 0;
                            for (var i = 0; i < cards.length; i++){
                                if (maxNum < get.number(cards[i])){
                                    maxNum = get.number(cards[i]);
                                }
                            }
                            if (maxNum > 11){
                                return 1;
                            }
                            if ((maxNum/13 < 2*Math.random()/3)){
                                return 0;
                            }
                            else{
                                if (player.hp > 2){
                                    return 1;
                                }
                                else{
                                    if (Math.random()<0.3){
                                        return 1;
                                    }
                                    else{
                                        return 0;
                                    }
                                }
                            }
                            
                        },
					},
                    
				},

            },

            kuanglie_background:{
                silent:true,
                popup:false,
                forced:true,
                onremove:function(player){
                    //改回背景
                    if (game.getUpperBackgroundName('',player) == 'firelion_bg'){
                        game.createClearBackground(player.storage.kuanglie_background,player);
                        player.storage.kuanglie_background = '';
                    }
                    else{
                        game.createClearBackground('',player);
                    }
                },
            },

            baonu_gu:{
                silent:true,
                trigger:{player:'loseHpEnd'},
				forced:true,
                locked:true,
                mark:true,
                marktext:"暴",
                intro:{
                    name:"暴怒",
                    content:"锁定技，你的手牌上限等于体力上限。当你回复体力后，若你的体力值大于1，你失去1点体力。当你失去1点体力后，你摸三张牌，然后若此时是你的回合外，你改为摸五张牌，若此时是你的回合内，你本回合：所有【杀】都视为【火杀】、使用红色【杀】无距离限制、使用【杀】的次数上限+1。",
                },
				content:function(){
                    player.popup('暴怒','fire');
                    game.playAudio('skill','kuanglie_gu'+Math.ceil(2*Math.random()));
                    game.log(player,'发动了','#g【暴怒】');
					var num=trigger.num;
					if(_status.currentPhase==player){
                        player.draw(3*num);
                        if (!player.hasSkill('baonu_gu2')){
                            player.addTempSkill('baonu_gu2',{player:'phaseAfter'});
                        }
						if(!player.storage.baonu_gu2) player.storage.baonu_gu2=0;
						player.storage.baonu_gu2+=num;
						player.syncStorage('baonu_gu2');
					}
                    else{
                        player.draw(5*num);
                    }
				},
                mod:{
					maxHandcardBase:function(player,num){
						return player.maxHp;
					},
				},
                group:"baonu_lose_gu",
                ai:{
                    threaten:2.5,
					maihp:true,
                    predamage:true,
                    preshadamage:true,
                    skillTagFilter:function(player,tag){
                        if (tag == 'predamage'&&player.countCards('h')<=12){
                            return false;
                        }
					},
				},
            },

            baonu_lose_gu:{
                silent:true,
                forced:true,
                trigger:{
                    player:"recoverAfter",
                },
                filter:function(event,player){
                    if (player.hp > 1){
                        return true;
                    }
                    else{
                        return false;
                    }
                },
                content:function(){
                    player.popup('暴怒','fire');
                    game.log(player,'发动了','#g【暴怒】');
                    player.loseHp(1);
                },
            },

            baonu_gu2:{
                silent:true,
                mod:{
					targetInRange:function(card,player,target,now){
						if(get.name(card) == 'sha'&&get.color(card)=='red') return true;
					},
					cardUsable:function(card,player,num){
						if(get.name(card) == 'sha') return num+player.storage.baonu_gu2;
					},
                    cardnature:function(card){
						if(get.name(card) == 'sha') return 'fire';
					},
				},
				onremove:true,
				trigger:{player:'useCard'},
				forced:true,
				filter:function(event,player){
					return event.card&&event.card.name=='sha';
				},
				content:function(){
					player.popup('暴怒','fire');
                    game.playAudio('skill','kuanglie_gu'+Math.ceil(2*Math.random()));
                    game.log(player,'发动了','#g【暴怒】');
                    game.log(player,'将所有','#y杀','视为','#y火杀');
                    if (get.suit(trigger.card) == 'heart'||get.suit(trigger.card) == 'diamond'||get.color(trigger.card)=='red'){
                        game.log(player,'红色的','#y杀','无距离限制');
                    }
				}
            },



            zhenjiu_gui:{
                audio:2,
                forced:true,
                locked:true,
                group:['zhenjiu_target_gui','zhenjiu_player_gui','zhenjiu_dying_gui'],
                ai:{
					effect:{
						target:function(card,player,target,current){
							if(card.name=='sha'&&get.attitude(player,target)<0){
								if(_status.event.name=='zhenjiu_gui') return;
								var bs=player.getCards('h',{type:'basic'});
								if(bs.length<2) return 0;
								if(player.hasSkill('jiu')) return;
								if(bs.length<=3&&player.countCards('h','sha')<=1){
									for(var i=0;i<bs.length;i++){
										if(bs[i].name!='sha'&&get.value(bs[i])<7){
											return [1,0,1,-0.5];
										}
									}
									return 0;
								}
								return [1,0,1,-0.5];
							}
						},
                        player:function(card,player,target,current){
							if(card.name=='sha'&&get.attitude(player,target)<0){
								if(_status.event.name=='zhenjiu_gui') return;
								var bs=player.getCards('h',{type:'basic'});
								if(bs.length<2) return 0;
								if(player.hasSkill('jiu')) return;
								if(bs.length<=3&&player.countCards('h','sha')<=1){
									for(var i=0;i<bs.length;i++){
										if(bs[i].name!='sha'&&get.value(bs[i])<7){
											return [1,0,1,-0.5];
										}
									}
									return 0;
								}
								return [1,0,1,-0.5];
							}
						},
					},
				},
            },

            zhenjiu_target_gui:{
                audio:1,
                trigger:{
                    target:'useCardToTargeted',
                },
                forced:true,
                filter:function(event,player){
					return get.name(event.card)=='sha';
				},
                content:function(){
					"step 0"
                    game.playAudio('skill','sound_daojiu');
                    if (Math.random()>0.55){
                        game.playAudio('skill','yunv_gui8');
                    }
					var eff=get.effect(trigger.target,trigger.card,trigger.player,trigger.player);
					trigger.player.chooseToDiscard('【斟酒】：弃置一张基本牌并视为使用了一张【酒】，否则【杀】对'+get.translation(trigger.target)+'无效',function(card){
						return get.type(card)=='basic';
					}).set('ai',function(card){
						if(_status.event.eff>0||get.attitude(trigger.player,trigger.target)<-1-2*Math.random()||get.attitude(trigger.target,trigger.player)<-1-2*Math.random()){
							return 6+4*Math.random()-get.value(card);
						}
						return 0;
					}).set('eff',eff);
					"step 1"
					if(result.bool==false){
						trigger.getParent().excluded.add(trigger.target);
                        game.log(trigger.card,'对',trigger.target,'无效');
                        event.finish();
					}
                    else{
                        game.addVideo('jiuNode',trigger.player,true);
                        if(!trigger.player.node.jiu&&lib.config.jiu_effect){
                            trigger.player.node.jiu=ui.create.div('.playerjiu',trigger.player.node.avatar);
                            trigger.player.node.jiu2=ui.create.div('.playerjiu',trigger.player.node.avatar2);
						}
                        game.playAudio('card',trigger.player.sex,'jiu');
                        trigger.player.popup('酒','metal');
                        game.log(trigger.player,'视为在出杀前对','#b自己','使用了','#y酒');
                        game.delay(1.5);
                        event.goto(2);
                    }
                    "step 2"
                    if(!trigger.getParent().baseDamage) trigger.getParent().baseDamage=1;
                    trigger.getParent().baseDamage+=1;
                    trigger.getParent().jiu=true;
                    trigger.getParent().jiu_add=trigger.getParent().jiu_add+1;
                    "step 3"
                    game.addVideo('jiuNode',trigger.player,false);
                    if(trigger.player.node.jiu){
						trigger.player.node.jiu.delete();
						trigger.player.node.jiu2.delete();
						delete trigger.player.node.jiu;
						delete trigger.player.node.jiu2;
					}
                    
				},
            },
            
            zhenjiu_player_gui:{
                audio:1,
                trigger:{
                    player:'useCardToPlayered',
                },
                forced:true,
                filter:function(event,player){
					return get.name(event.card)=='sha';
				},
                content:function(){
					"step 0"
                    game.playAudio('skill','sound_daojiu');
                    // if (Math.random()>0.6){
                    //     game.playAudio('skill','yunv_gui8');
                    // }
					var eff=get.effect(trigger.target,trigger.card,trigger.player,trigger.player);
					trigger.player.chooseToDiscard('【斟酒】：弃置一张基本牌并视为使用了一张【酒】，否则【杀】对'+get.translation(trigger.target)+'无效',function(card){
						return get.type(card)=='basic';
					}).set('ai',function(card){
						if(_status.event.eff>0||get.attitude(trigger.player,trigger.target)<-1-2*Math.random()||get.attitude(trigger.target,trigger.player)<-1-2*Math.random()){
							return 10-get.value(card);
						}
						return 0;
					}).set('eff',eff);
					"step 1"
					if(result.bool==false){
						trigger.getParent().excluded.add(trigger.target);
                        game.log(trigger.card,'对',trigger.target,'无效');
                        event.finish();
					}
                    else{
                        game.addVideo('jiuNode',trigger.player,true);
                        if(!trigger.player.node.jiu&&lib.config.jiu_effect){
                            trigger.player.node.jiu=ui.create.div('.playerjiu',trigger.player.node.avatar);
                            trigger.player.node.jiu2=ui.create.div('.playerjiu',trigger.player.node.avatar2);
						}
                        game.playAudio('card',trigger.player.sex,'jiu');
                        trigger.player.popup('酒','metal');
                        game.log(trigger.player,'视为在出杀前对','#b自己','使用了','#y酒');
                        game.delay(1.5);
                        event.goto(2);
                    }
                    "step 2"
                    if(!trigger.getParent().baseDamage) trigger.getParent().baseDamage=1;
                    trigger.getParent().baseDamage+=1;
                    trigger.getParent().jiu=true;
                    trigger.getParent().jiu_add=trigger.getParent().jiu_add+1;
                    "step 3"
                    game.addVideo('jiuNode',trigger.player,false);
                    if(trigger.player.node.jiu){
						trigger.player.node.jiu.delete();
						trigger.player.node.jiu2.delete();
						delete trigger.player.node.jiu;
						delete trigger.player.node.jiu2;
					}
				},
            },
            
            zhenjiu_dying_gui:{
                silent:true,
                forced:true,
                direct:true,
                trigger:{
                    player:'dying',
                },
                filter:function(event,player){
                    return player.hasSkill('qixing_gui')&&player.storage.qixing_gui&&player.storage.qixing_gui > 0;
                },
                content:function(event){
                    'step 0'
                    player.logSkill('zhenjiu_gui');
                    game.playAudio('skill','sound_daojiu');
                    'step 1'
                    player.storage.qixing_gui = player.storage.qixing_gui - 1;
                    player.syncStorage('qixing_gui');
                    if (player.storage.qixing_gui == 0){
                        player.unmarkSkill('qixing_gui');
                        game.delay(1.5);
                    }
                    'step 2'
                    player.useCard({ name: 'jiu', isCard: true ,cardid:'zhenjiu_dying_gui_id'},player).set('audio',false);
                },
            },
            
            qixing_gui:{
                audio:2,
                forced:true,
                locked:true,
                marktext:'星',
                intro:{
                    name:'七星',
                    content:'#颗星，手牌上限+#',
                },
                trigger:{
                    global:'gameDrawAfter',
                    player:["enterGame"],
                },
                content:function(event){
                    'step 0'
                    event.femaleNum = game.countPlayer(function(current){
                        return current.sex=='female';
                    });
                    player.storage.qixing_gui = 1 + event.femaleNum;
                    if (player.storage.qixing_gui > 7){
                        player.storage.qixing_gui = 7;
                    }
                    player.syncStorage('qixing_gui');
                    game.log(player,'获得了'+player.storage.qixing_gui+'个','#y星');
                    'step 1'
                    player.markSkill('qixing_gui');
                },
                mod:{
					maxHandcardBase:function(player,num){
						return num + player.storage.qixing_gui;
					},
				},
                group:['qixing_discardEnd_gui','qixing_end_gui'],
                derivation:'jieran_gui',
            },

            qixing_discardEnd_gui:{
                silent:true,
                popup:false,
                forced:true,
                trigger:{
                    player:"phaseDiscardEnd",
                },
                filter:function(event,player){
                    return player.storage.qixing_gui&&player.countCards('h')>player.hp;
                },
                content:function(event){
                    player.logSkill('qixing_gui');
                    game.log(player,'的手牌上限+'+player.storage.qixing_gui);
                },
            },

            qixing_end_gui:{
                audio:2,
                animationColor:'fire',
				skillAnimation:true,
                forced:true,
                trigger:{
                    player:"dyingAfter",
                },
                filter:function(event,player){
                    return player.isAlive()&&player.hasSkill('qixing_gui')&&(!player.storage.qixing_gui || player.storage.qixing_gui == 0);
                },
                content:function(event){
                    'step 0'
                    player.unmarkSkill('qixing_gui');
                    player.addSkill('jieran_gui');
                    'step 1'
                    player.removeSkill('qixing_gui');
                    game.log(player,'失去技能','#g【七星】');
                    game.log(player,'获得技能','#g【孑然】');
                },

            },

            jieran_gui:{
                audio:1,
                skillAnimation:true,
				animationColor:'water',
                mark:true,
                direct:true,
                intro:{
                    content:"limited",
                },
                trigger:{
                    player:'phaseZhunbei',
                },
                content:function(event){
                    'step 0'
                    player.chooseTarget(get.prompt2('jieran_gui'),function(event,player,target){
                        if (player == target) return false;
                        return true;
                    }).set('ai',function(target){
                        if (get.attitude(player,target)+get.attitude(target,player)<0){
                            // return Math.random()+100;
                            return get.threaten(target,player,false);
                        }
                        else{
                            return -1;
                        }
                    });
                    'step 1'
                    if (result.bool){
                        player.unmarkSkill('jieran_gui');
                        var target = result.targets[0];
                        player.logSkill('jieran_gui',target,'thunder');
                        target.addSkill('jieran_fengyin');
                        player.addSkill('jieran_die');
                        target.storage.jieran_sha = player;
                        target.addSkill('jieran_sha');
                        target.syncStorage('jieran_sha');
                        target.storage.jieran_shaCount = 0;
                        target.addSkill('jieran_shaCount');
                        target.syncStorage('jieran_shaCount');
                        game.log(player,'令',target,'的非锁定技失效，直到自己死亡')
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    player.removeSkill('jieran_gui');
                },
                ai:{
                    threaten:4,
                },

            },

            jieran_die:{
                audio:false,
                forced:true,
                popup:false,
                trigger:{
                    player:'dieBegin',
                },
                content:function(event){
                    var has=game.hasPlayer(function(current){
                        if (current.hasSkill('jieran_fengyin')){
                            player.popup('孑然');
                            player.line(current,'green');
                            game.playAudio('skill','jieran_gui1');
                            current.removeSkill('jieran_fengyin');
                            game.log(current,'重新获得因','#g【孑然】','而失效的技能');
                        }
                        if (current.hasSkill('jieran_sha')){
                            current.removeSkill('jieran_sha');
                        }
                        if (current.hasSkill('jieran_shaCount')){
                            current.removeSkill('jieran_shaCount');
                        }
                    });
                },
            },

            jieran_sha:{
                audio:1,
                direct:true,
                forced:true,
                trigger:{
                    player:'phaseJieshuBegin',
                },
                filter:function(event,player){
                    return player.storage.jieran_sha.isAlive();
                },
                content:function(event){
                    'step 0'
                    player.storage.jieran_sha.logSkill('jieran_sha');
                    player.storage.jieran_shaCount = player.storage.jieran_shaCount + 1;
                    player.syncStorage('jieran_shaCount');
                    var numberShas = player.storage.jieran_shaCount;
                    event.numberSha = numberShas;
                    'step 1'
                    if (event.numberSha > 0){
                        player.useCard({name:'sha',isCard:true,cardid:"jieran_sha_id"},player.storage.jieran_sha,false);
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if (player.storage.jieran_sha.isAlive()){
                        event.numberSha--;
                        game.delay(1);
                        event.goto(1);
                    }
                    else{
                        event.finish();
                    }
                },

            },

            jieran_shaCount:{

            },



            jieran_fengyin:{
				init:function(player,skill){
					var skills=player.getSkills(true,false);
					for(var i=0;i<skills.length;i++){
						if(get.is.locked(skills[i])||lib.skill[skills[i]].charlotte){
							skills.splice(i--,1);
						}
					}
					player.disableSkill(skill,skills);

                    //试验一下
                    var returnResult = '非锁定技失效';
						var list=[];
						for(var i in player.disabledSkills){
							if(player.disabledSkills[i].contains(skill)){
								list.push(i)
							}
						}
						if(list.length){
							var str='，失效技能：';
							for(var i=0;i<list.length;i++){
								if(lib.translate[list[i]+'_info']){
									str+=get.translation(list[i])+'、';
								}
							}
							player.storage.jieran_fengyin = returnResult + str.slice(0,str.length-1);
                            player.syncStorage('jieran_fengyin');
						}
                        else{
                            player.storage.jieran_fengyin =  returnResult;
                            player.syncStorage('jieran_fengyin');
                        }

				},
				onremove:function(player,skill){
					player.enableSkill(skill);
				},
				locked:true,
				charlotte:true,
				mark:true,
                // marktext:'孑',
				intro:{
                    name:'孑然',
					content:function(storage,player,skill){
                        if (_status.video){
                            return player.storage.jieran_fengyin;
                        }
                        var returnResult = '非锁定技失效';
						var list=[];
						for(var i in player.disabledSkills){
							if(player.disabledSkills[i].contains(skill)){
								list.push(i)
							}
						}
						if(list.length){
							var str='，失效技能：';
							for(var i=0;i<list.length;i++){
								if(lib.translate[list[i]+'_info']){
									str+=get.translation(list[i])+'、';
								}
							}
							player.storage.jieran_fengyin = returnResult + str.slice(0,str.length-1);
                            player.syncStorage('jieran_fengyin');
						}
                        else{
                            player.storage.jieran_fengyin =  returnResult;
                            player.syncStorage('jieran_fengyin');
                        }
                        return player.storage.jieran_fengyin;
                        
					}
				}
			},
            
            yunv_gui:{
                audio:7,
                group:['yunv_shashan_gui','yunv_givePhase_gui'],
                ai:{
                    threaten:1.5,
                    expose:0.65,
                },
            },

            yunv_shashan_gui:{
                audio:2,
                frequent:true,
                direct:true,
                trigger:{player:['chooseToRespondBefore','chooseToUseBefore']},
                filter:function(event,player){
					if(event.responded) return false;
                    if(player.storage.yunv_shashan_guiing) return false;
					if(event.name == 'chooseToUse' && !event.filterCard({name:'shan'},player,event)) return false;
                    if (event.name == 'chooseToRespond' && !event.filterCard({name:'shan'},player,event) && !event.filterCard({name:'sha'},player,event)) return false;
					return game.hasPlayer(function(current){
						return current!=player&&current.sex=='female';
					});
				},
                content:function(event){
                    "step 0"
                    player.chooseBool('###是否发动【驭女】？###当你需要使用【闪】、打出【杀】或【闪】时，你可以令其他女性角色选择是否打出一张【杀】或【闪】（视为由你使用或打出）。').set('ai',function(){
                        if(get.damageEffect(player,trigger.player,player)-1>=0) return false;
                        return true;
                    });
                    "step 1"
                    if (result.bool){
                        player.logSkill('yunv_shashan_gui');
                        event.goto(2);
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if (result){
						delete result.bool;
					}
                    event.Word = '';
                    event.EnglishWord = '';
                    if (trigger.filterCard({name:'shan'},player,event)){
                        event.Word = '闪';
                        event.EnglishWord = 'shan';
                    }
                    else{
                        event.Word = '杀';
                        event.EnglishWord = 'sha';
                    }
                    var has=game.hasPlayer(function(current){
                        if (current.sex == 'female'){
                            player.line(current,"green");
                        }
                    });
                    game.log(player,'请求全场的女性角色替其出','#y'+event.Word+'');
                    game.delay(1.4);
					"step 3"
                    if (result){
						delete result.bool;
					}
					if(event.current==undefined) event.current=player.next;
					if(event.current==player){
                        game.log('无人愿意为',player,'出','#y'+event.Word+'');
						event.finish();
					}
					else if(event.current.sex=='female'){
                        player.storage.yunv_shashan_guiing=true;
                        player.line(event.current);
                        var next=event.current.chooseToRespond('【驭女】：是否替'+get.translation(player)+'打出一张'+event.Word+'？',{name:event.EnglishWord});
                        next.set('ai',function(){
                            var event=_status.event;
                            return (get.attitude(event.player,event.source)-2);
                        });
                        next.set('skillwarn','替'+get.translation(player)+'打出一张'+event.Word);
                        if (event.Word == '闪'){
                            next.autochoose=lib.filter.autoRespondShan;
                        }
                        else{
                            next.autochoose=lib.filter.autoRespondSha;
                        }
                        next.set('source',player);
                        game.delay(0.8);
					}
					"step 4"
					player.storage.yunv_shashan_guiing=false;
					if(result.bool){
                        game.log(event.current,'愿意为',player,'出','#y'+event.Word+'','，视为由',player,'使用或打出');
						event.finish();
                        if (result.cards&&result.cards.length==1){
                            trigger.result={bool:true,card:{name:event.EnglishWord,isCard:true,number:result.cards[0].number,suit:result.cards[0].suit,cardid:result.cards[0].cardid}};
                            // if (trigger.name == 'chooseToRespond'){
                            //     trigger.result={bool:true,card:result.cards[0]};
                            // }
                            // else{
                            //     trigger.result={bool:true,card:{name:event.EnglishWord,isCard:true,number:result.cards[0].number,suit:result.cards[0].suit,cardid:result.cards[0].cardid}};
                            // }
                            
                        }
                        else{
                            trigger.result={bool:true,card:{name:event.EnglishWord,isCard:true}};
                        }
						trigger.responded=true;
						trigger.animate=false;
						if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
							event.current.ai.shown+=0.3;
							if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
						}
					}
					else{
						event.current=event.current.next;
						event.goto(3);
					}
				},
            },


            yunv_givePhase_gui:{
				audio:2,
				trigger:{player:'phaseUseBefore'},
				filter:function(event,player){
					return player.countCards('h')>0&&!player.hasSkill('yunv_givePhase_gui3');
				},
                frequent:true,
				direct:true,
				content:function(){
					"step 0"
					var fang=player.countMark('yunv_givePhase_gui2')==0&&player.countCards('h')<=player.getHandcardLimit()+2;
					player.chooseBool(get.prompt('yunv_gui'),"你可以跳过出牌阶段，然后弃牌阶段开始时，你可以弃置一张手牌，并可以选择一名有牌的女性角色，令她交给你一张牌并获得一个额外的回合，当其于此额外回合内造成伤害之后，你可摸一张牌；然后你可以将弃置的牌置于一名没有【驭】的女性角色武将牌上，称为【驭】，其不能使用和打出与【驭】同类型的牌。").set('ai',function(){
						if(!_status.event.fang) return false;
						var givePhase = game.hasPlayer(function(target){
                            if (target.sex != 'female'||target.countCards('he')==0) return false;
							if(target.hasJudge('lebu')||target==player) return false;
							if(get.attitude(player,target)>2&&target.countCards('he')>0){
								return (get.threaten(target)/Math.sqrt(target.hp+1)/Math.sqrt(target.countCards('h')+1)>0);
							}
							return false;
						});
                        var kongFemale = game.hasPlayer(function(target){
							if (target.sex != 'female'||target==player) return false;
                            if (target.countCards('h')>3&&get.attitude(player,target)+get.attitude(target,player)<-2&&!target.hasSkill('yunv_kong_gui')){
                                return true;
                            }
                            return false;
						});
                        if (givePhase||(kongFemale&&Math.random()<0.4)){
                            return true;
                        }
                        else{
                            return false;
                        }
					}).set('fang',fang);
					"step 1"
					if(result.bool){
						player.logSkill('yunv_givePhase_gui');
                        game.log(player,'跳过了出牌阶段');
						trigger.cancel();
						player.addTempSkill('yunv_givePhase_gui2');
						player.addMark('yunv_givePhase_gui2',1,false);
					}
				}
			},
			yunv_givePhase_gui2:{
				trigger:{player:'phaseDiscardBegin'},
                silent:true,
				forced:true,
				popup:false,
				audio:false,
				onremove:true,
				content:function(){
					"step 0"
					event.count=player.countMark(event.name);
					player.removeMark(event.name,event.count,false);
					"step 1"
					event.count--;
					player.chooseToDiscard('###驭女###是否弃置一张牌，然后你可以令一名其他女性角色进行一个额外回合？你可以将弃置的牌置于一名没有【驭】的女性角色武将牌上，称为【驭】。').ai=function(card){
						var addition = 0;
                        if (get.tag(card,'damage')&&get.name(card)!='sha'){
                            addition += 30+20*Math.random();
                        }
                        if (get.name(card)=='sha'&&player.countCards('h','sha')>1){
                            addition += 40+10*Math.random();
                        }
                        if (get.name(card)=='shan'&&player.countCards('h','shan')>2){
                            addition += 40+10*Math.random();
                        }
                        if (get.type(card,'trick')=='trick'&&get.name(card)!='wuxie'){
                            addition += 35+15*Math.random();
                        }
                        if (get.type(card)=='equip'){
                            addition += 10;
                        }
                        return 10+addition-get.value(card);
					};
					"step 2"
					if(result.bool){
                        event.discardCard = '';
                        if (result.cards&&result.cards.length>0){
                            event.discardCard = result.cards[0];
                        }
						player.chooseTarget('###是否令一名女性角色获得一个回合？###你可以选择一名有牌的女性角色，令她交给你一张牌并获得一个额外的回合，当其于此额外回合内造成伤害之后，你摸一张牌。',function(event,player,target){
                            if (player==target) return false;
                            if (target.sex == 'female'&&target.countCards('he')>0) return true;
                            return false;
                        }).ai=function(target){
							if(target.hasJudge('lebu')) return -1;
							if(get.attitude(player,target)>2){
								return get.threaten(target)/Math.sqrt(target.hp+1)/Math.sqrt(target.countCards('h')+1);
							}
							return -1;
						};
					}
					else event.finish();
					"step 3"
                    if (result.bool){
                        game.delay(1.3);
                        var target=result.targets[0];
                        event.nvTarget = result.targets[0];
                        player.line(target,'fire');
                        player.popup('驭女','soil');
                        game.playAudio('skill','yunv_givePhase_gui2');
                        target.chooseCard('he',true,'【驭女】：请将一张牌交给'+get.translation(player)+'并获得一个额外的回合').set('ai',function(card){
                            var addition = 0;
                            if (!get.tag(card,'damage')&&get.type(card,'trick')!='trick'&&get.type(card)!='equip'){
                                addition += 50;
                            }
                            if (get.name(card)=='sha'&&event.nvTarget.countCards('h','sha')>1){
                                addition += 10;
                            }
                            if (get.type(card)=='equip'&&get.subtype(card)!='equip1'&&get.subtype(card)!='equip4'&&get.subtype(card)!='equip5'){
                                addition += 40;
                            }
                            return addition-get.value(card);
                        });
                        event.goto(4);
                    }
                    else{
                        event.goto(5);
                    }
                    "step 4"
                    if (result.bool){
                        var target=event.nvTarget;
                        player.gain(result.cards,target,'giveAuto','bySelf');
                        player.line(target,'fire');
                        // target.markSkillCharacter('yunv_givePhase_gui',player,'驭女','进行一个额外回合');
                        target.insertPhase('yunv_givePhase_gui',true);
                        target.addTempSkill('yunv_givePhase_gui3',{player:['phaseAfter','phaseCancelled']});
                        target.storage.yunv_givePhase_gui3 = player;
                        target.syncStorage('yunv_givePhase_gui3');
                        target.markSkill('yunv_givePhase_gui3');
                        game.log(player,'对',target,'发动了','#g【驭女】');
                        game.log(player,'宠幸',target,'，赏赐给她一个额外的回合');
                        game.log(target,'受宠若惊，慌忙将一张牌作为谢礼，回馈给',player,'以表谢意')
                    }
                    "step 5"
                    if(event.count>0) {
                        event.goto(1);
                    }
                    else{
                        event.goto(6);
                    }
                    "step 6"
                    player.chooseTarget('###是否选择一名女性角色放置【驭】？###你可以将弃置的手牌置于一名没有【驭】的女性角色武将牌上，称为【驭】。其与【驭】同类型的卡牌将无法使用或打出，若其使用与【驭】同类型的牌则无效。该角色受伤时，或于弃牌阶段弃置至少两张与【驭】同类型的牌后，将【驭】置入弃牌堆。',function(event,player,target){
                        if (player==target) return false;
                        if (target.hasSkill('yunv_kong_gui')) return false;
                        if (target.sex == 'female') return true;
                        return false;
                    }).ai=function(target){
                        return 0 - get.attitude(player,target) - get.attitude(target,player);
                    };
                    "step 7"
                    if (result.bool){
                        var target=result.targets[0];
                        event.kongTarget = result.targets[0];
                        var theCard = event.discardCard;
                        player.logSkill('yunv_kong_gui',target);
                        game.log(player,'将',theCard,'作为','#g【驭】','，置于',target,'的武将牌上');
                        game.log(target,'将无法使用或打出与','#g【驭】','相同类型的牌');
                        player.$give(theCard,target,false);
                        game.delay(1);
                    }
                    else{
                        event.finish();
                    }
                    "step 8"
                    var target=event.kongTarget;
                    var theCard = event.discardCard;
                    target.addSkill('yunv_kong_gui');
                    target.storage.yunv_kong_gui = theCard;
                    target.storage.yunv_kong_gui_markcount=0;
                    target.syncStorage('yunv_kong_gui');
                    target.storage.yunv_useFrobid_gui = player;
                    target.syncStorage('yunv_useFrobid_gui');
                    target.markAuto('yunv_kong_gui',theCard);
                    target.markSkill('yunv_kong_gui');
                    player.lose(theCard,ui.special,'toStorage');
                    game.updateRoundNumber();
                    
                    
				},
                ai:{
                    expose:0.65,
                },
			},

            yunv_kong_gui:{
                audio:2,
                marktext:'驭',
                intro:{
                    name:'驭',
					content:'cards',
					onunmark:function(storage,player){
						if(player.storage.yunv_kong_gui&&storage){
							player.$throw(storage,1000);
							game.cardsDiscard(storage);
							game.log(storage,'被置入了弃牌堆');
							player.storage.yunv_kong_gui.length=0;
                            player.syncStorage('cangxin_enda');
						}
					},
				},
                direct:true,
                mod:{
					cardEnabled:function(card,player){
                        if (player.storage.yunv_kong_gui){
                            var magic = player.storage.yunv_kong_gui;
                            if (get.type2(magic)==get.type(card)||get.type2(magic)==get.type2(card)){
                                return false;
                            }
                        }
					},
					cardRespondable:function(card,player){
						if (player.storage.yunv_kong_gui){
                            var magic = player.storage.yunv_kong_gui;
                            if (get.type2(magic)==get.type(card)||get.type2(magic)==get.type2(card)){
                                return false;
                            }
                        }
					},
					cardSavable:function(card,player){
						if (player.storage.yunv_kong_gui){
                            var magic = player.storage.yunv_kong_gui;
                            if (get.type2(magic)==get.type(card)||get.type2(magic)==get.type2(card)){
                                return false;
                            }
                        }
					},
				},
                trigger:{
					player:['damageEnd','loseAfter'],
				},
				forced:true,
                locked:true,
				filter:function(event,player){
					var storage=player.storage.yunv_kong_gui;
					if(event.name=='damage') return true;
					if(event.type!='discard'||event.getParent('phaseDiscard').player!=player) return false;
					for(var i of event.cards2){
                        var magic = storage;
                        if (get.type2(magic)==get.type2(i,event.hs.contains(i)?player:false)){
                            return true
                        }
					}
					return false;
				},
				content:function(){
                    'step 0'
                    var storage=player.storage.yunv_kong_gui;
					if(trigger.name=='lose'){
                        for(var i of trigger.cards2){
                            var magic = storage;
                            if (get.type2(magic)==get.type2(i,trigger.hs.contains(i)?player:false)){
                                player.storage.yunv_kong_gui_markcount++;
                                player.syncStorage('yunv_kong_gui');
                            }
                        }
					}
					if(trigger.name=='damage'||player.storage.yunv_kong_gui_markcount>=2) {
                        if (player.storage.yunv_useFrobid_gui.isAlive()){
                            player.storage.yunv_useFrobid_gui.popup('驭女');
                            player.storage.yunv_useFrobid_gui.line(player);
                            game.playAudio('skill','yunv_gui7');
                        }
                        else{
                            player.popup('驭女');
                        }
                        game.delay(0.8);
                        event.goto(1);
                    }
					else {
                        player.syncStorage('yunv_kong_gui');
                        player.markSkill('yunv_kong_gui');
                        event.finish();
                    }
                    'step 1'
                    player.unmarkSkill('yunv_kong_gui');
                    game.log(player,'失去','#g【驭】');
                    player.removeSkill('yunv_kong_gui');
				},
                group: "yunv_useFrobid_gui",
            },

            yunv_useFrobid_gui:{
                audio:false,
                popup:false,
                forced:true,
                trigger:{
                    player:"useCardBefore",
                },
                filter:function(event,player){
                    return event.card&&get.type2(event.card) == get.type2(player.storage.yunv_kong_gui);
                },
                content:function(event){
                    if (player.storage.yunv_useFrobid_gui.isAlive()){
                        player.storage.yunv_useFrobid_gui.logSkill('yunv_kong_gui',player);
                    }
                    else{
                        player.popup('驭女');
                    }
                    player.popup(get.translation(get.name(trigger.card)),'metal');
                    player.popup('被无效','metal');
                    game.log(player,'使用的',trigger.card,'与','#g【驭】','：',player.storage.yunv_kong_gui,'，类型相同，被无效化');
                    trigger.cancel();
                },
            },


			yunv_givePhase_gui3:{
				trigger:{source:['damageAfter']},
                marktext:"宠",
                intro:{
                    name:'驭女',
                    content:"进行一个额外的回合",
                },
				forced:true,
				popup:false,
				audio:false,
                filter:function(event,player){
                    return player.storage.yunv_givePhase_gui3.isAlive();
                },
				content:function(){
					// player.unmarkSkill('yunv_givePhase_gui');
					// player.removeSkill('yunv_givePhase_gui3');
                    player.storage.yunv_givePhase_gui3.logSkill('yunv_givePhase_gui');
                    game.log(player,'于其','#g【驭女】','回合内造成伤害，令',player.storage.yunv_givePhase_gui3,'摸牌')
                    player.storage.yunv_givePhase_gui3.draw();
				},
                ai:{
                    predamage:true,
                }
			},





            yanyin_moke:{
                audio:2,
                forced:true,
                priority:-100,
                marktext:'烟',
                intro:{
                    content:"因此技能累计获得#张牌",
                },
                trigger:{
                    player:['useCardAfter','respondAfter'],
                },
                filter:function(event,player){
                    return player.isAlive();
                },
                content:function(event){
                    'step 0'
                    if (!player.hasSkill('liaoyuan_moke')){
                        if (!player.storage.yanyin_moke){
                            player.storage.yanyin_moke = 0;
                        }
                        player.storage.yanyin_moke = player.storage.yanyin_moke + 1;
                        player.syncStorage('yanyin_moke');
                        player.markSkill('yanyin_moke');
                    }
                    player.draw();
                    'step 1'
                    if (!player.isUnderControl(true)&&player.hasSkill('liaoyuan_moke')){
                        game.delay(1);
                    }
                    if (player.isAlive()&&player.countCards('he')>0){
                        player.chooseToDiscard('he', 1, true).set('ai',function(card){
                            var player=get.owner(card);
                            if (_status.currentPhase!=player){
                                if(get.type(card)=='basic'||get.name(card)=='wuxie'){
                                    return -100 - get.value(card);
                                }
                                else if (get.type(card)=='equip'&&get.subtype(card)=='equip3'&&player.countCards('e',get.name(card))>0){
                                    return -100 - get.value(card);
                                }
                                else if (get.type(card,'trick')=='trick' || (get.type(card)=='equip')){
                                    return 100 - get.value(card);
                                }
                                else{
                                    return 0;
                                }
                            }
                            else{
                                if(get.type(card)=='basic'||get.name(card)=='wuxie'){
                                    if (player.getEquip('zhuge')&&get.name(card)=='sha'){
                                        return 110-get.value(card);
                                    }
                                    else if (get.name(card)=='shan'&&player.countCards('h','shan')>1){
                                        return 110 - get.value(card);
                                    }
                                    else if (get.name(card)=='sha'&&player.countCards('h','sha')>3){
                                        return 110 - get.value(card);
                                    }
                                    else if (get.tag(card,'recover')||get.tag(card,'save')){
                                        return - get.value(card);
                                    }
                                    else{
                                        return 50 - get.value(card);
                                    }
                                }
                                else if (get.type(card,'trick')=='trick' || get.type(card)=='equip'){
                                    if (get.type(card)=='equip'){
                                        if (player.countCards('e',{subtype:get.subtype(card)})>0&&player.countCards('h',{subtype:get.subtype(card)})>0&&player.countCards('e',get.name(card))>0){
                                            return 130 - get.value(card);
                                        }
                                        else{
                                            return - get.value(card);
                                        }
                                    }
                                    else if (get.name(card)=='jiedao'){
                                        return 0;
                                    }
                                    else if (get.name(card)=='shandian'&&player.getJudge('shandian')){
                                        return 100 - get.value(card);
                                    }
                                    else if (get.name(card)=='shunshou'||get.name(card)=='bingliang'){
                                        return 120 - get.value(card);
                                    }
                                    else{
                                        return -100 - get.value(card);
                                    }
                                    
                                }
                                else{
                                    return 0;
                                }
                                
                            }

                            //之前的无限流
                            // else{
                            //     if(get.type(card)=='basic'||get.name(card)=='wuxie'){
                            //         if (player.getEquip('zhuge')&&get.name(card)=='sha'){
                            //             return -100-get.value(card);
                            //         }
                            //         else if (get.name(card)=='sha'){
                            //             return 50 - get.value(card);
                            //         }
                            //         else if (get.tag(card,'recover')&&player.hp<player.maxHp){
                            //             return - get.value(card);
                            //         }
                            //         else{
                            //             return 100 - get.value(card);
                            //         }
                            //     }
                            //     else if (get.type(card,'trick')=='trick' || get.type(card)=='equip'){
                            //         if (get.name(card) == 'zhuge'){
                            //             return -1000;
                            //         }
                            //         else if (player.getEquip('zhuge')&&get.type(card)=='equip'&&get.subtype(card)=='equip1'){
                            //             return 100 - get.value(card);
                            //         }
                            //         else if (get.type(card)=='equip'&&player.countCards('e',get.name(card))>0){
                            //             if (get.subtype(card)!='equip4'){
                            //                 return 100 - get.value(card);
                            //             }
                            //             else{
                            //                 if (player.countCards('h',{subtype:'equip4'})>0){
                            //                     return 100 - get.value(card);
                            //                 }
                            //                 else{
                            //                     return - get.value(card);
                            //                 }
                            //             }
                            //         }
                            //         else if (get.name(card)=='jiedao'){
                            //             return 1;
                            //         }
                            //         else if (get.name(card)=='shandian'&&player.getJudge('shandian')){
                            //             return 100 - get.value(card);
                            //         }
                            //         else{
                            //             return -100 - get.value(card);
                            //         }
                                    
                            //     }
                            //     else{
                            //         return 0;
                            //     }
                                
                            // }
                        });
                    }

                },

                ai:{
                    threaten:0.1,
                },

            },

            yanyin_give_moke:{
                audio:2,
                forced:true,
                priority:-100,
                mark:true,
                marktext:'烟',
                intro:{
                    content:"本回合拥有技能【烟瘾】",
                },
                trigger:{
                    player:['useCardAfter','respondAfter'],
                },
                filter:function(event,player){
                    return player.isAlive();
                },
                content:function(event){
                    'step 0'
                    if (!player.storage.yanyin_give_moke.hasSkill('liaoyuan_moke')){
                        if (!player.storage.yanyin_give_moke.storage.yanyin_moke){
                            player.storage.yanyin_give_moke.storage.yanyin_moke = 0;
                        }
                        player.storage.yanyin_give_moke.storage.yanyin_moke = player.storage.yanyin_give_moke.storage.yanyin_moke + 1;
                        player.storage.yanyin_give_moke.syncStorage('yanyin_moke');
                        player.storage.yanyin_give_moke.markSkill('yanyin_moke');
                    }
                    player.draw();
                    'step 1'
                    if (player.isAlive()&&player.countCards('he')>0){
                        player.chooseToDiscard('he', 1, true).set('ai',function(card){
                            var player=get.owner(card);
                            if (_status.currentPhase!=player){
                                if(get.type(card)=='basic'||get.name(card)=='wuxie'){
                                    return -100 - get.value(card);
                                }
                                else if (get.type(card,'trick')=='trick' || get.type(card)=='equip'){
                                    return 100 - get.value(card);
                                }
                                else{
                                    return 0;
                                }
                            }
                            else{
                                if(get.type(card)=='basic'||get.name(card)=='wuxie'){
                                    if (player.getEquip('zhuge')&&get.name(card)=='sha'){
                                        return -100-get.value(card);
                                    }
                                    else if (get.name(card)=='sha'){
                                        return 50 - get.value(card);
                                    }
                                    else if (get.tag(card,'recover')&&player.hp<player.maxHp){
                                        return - get.value(card);
                                    }
                                    else{
                                        return 100 - get.value(card);
                                    }
                                }
                                else if (get.type(card,'trick')=='trick' || get.type(card)=='equip'){
                                    if (get.name(card) == 'zhuge'){
                                        return -1000;
                                    }
                                    else if (player.getEquip('zhuge')&&get.type(card)=='equip'&&get.subtype(card)=='equip1'){
                                        return 100 - get.value(card);
                                    }
                                    else if (get.type(card)=='equip'){
                                        if (player.countCards('e',{subtype:get.subtype(card)})>0&&player.countCards('h',{subtype:get.subtype(card)})>0&&player.countCards('e',get.name(card))>0){
                                            return 130 - get.value(card);
                                        }
                                        else{
                                            return 90 - get.value(card);
                                        }
                                    }
                                    else if (get.name(card)=='jiedao'){
                                        return 1;
                                    }
                                    else if (get.name(card)=='shandian'&&player.getJudge('shandian')){
                                        return 100 - get.value(card);
                                    }
                                    else{
                                        return -100 - get.value(card);
                                    }
                                    
                                }
                                else{
                                    return 0;
                                }
                                
                            }
                        });
                    }

                },

                ai:{
                    threaten:0.1,
                },

            },
            
            ningwu_moke:{
                audio:2,
                forced:true,
                locked:true,
                trigger:{
                    target:"useCardToTargeted",
                },
                filter:function(event,player){
                    return event.player&&event.player!=player&&get.distance(event.player,player)>1;
                },
                content:function(event){
                    'step 0'
                    game.playAudio('skill','ningwu_moke'+Math.ceil(2+2*Math.random()));
                    //改变背景
                    if (game.getUpperBackgroundName('',player) != 'smoke_bg'){
                        if (!player.hasSkill('ningwu_moke_background')){
                            player.addTempSkill('ningwu_moke_background','phaseJieshu');
                            player.storage.ningwu_moke_background = game.getUpperBackgroundName('',player);
                            player.syncStorage('ningwu_moke_background');
                        }
                        game.createClearBackground('smoke_bg',player);
                    }

                    event.cardNumber = 0;
                    event.isGood = false;
                    if (get.number(trigger.card)){
                        event.cardNumber = get.number(trigger.card);
                    }
                    else{
                        event.cardNumber = 0;
                    }
                    if (get.tag(trigger.card,'recover')||get.tag(trigger.card,'save')||get.tag(trigger.card,'draw')){
                        event.isGood = true;
                    }
                    else if (get.name(trigger.card)=='tiesuo'&&player.isLinked()){
                        event.isGood = true;
                    }
                    else{
                        event.isGood = false;
                    }
                    'step 1'
                    player.judge(function (card) {
                        if(get.number(card)>event.cardNumber){
                            if (event.isGood){
                                if (get.tag(trigger.card,'save')){
                                    return -11;
                                }
                                else{
                                    return -1;
                                }
                                
                            }
                            else{
                                return 2;
                            }
                        } 
                        else{
                            if (event.isGood){
                                return 0.1;
                            }
                            else{
                                return -1;
                            }
                        }
                    });
                    "step 2"
                    if (result.card&&get.number(result.card)>event.cardNumber) {
                        trigger.getParent().excluded.add(player);
                        game.log('#g【凝雾】','判定成功，',trigger.card,'对',player,'无效');
                        event.finish();
                    }
                    else{
                        game.log('#g【凝雾】','判定失败');
                        event.finish();
                    }
                },
                group:"ningwu_damage_moke",
                
                derivation:'xuyin_moke',

                ai:{
                    forbidNoNumber:true,
                    threaten:0.5,
                    skillTagFilter:function(player,tag,arg){
                        var source = arg;
                        if (tag == 'forbidNoNumber'&&get.distance(source,player)<=1){
                            return false;
                        }
					},

                },
            },

            ningwu_moke_background:{
                silent:true,
                popup:false,
                forced:true,
                onremove:function(player){
                    //改回背景
                    if (game.getUpperBackgroundName('',player) == 'smoke_bg'){
                        // game.createClearBackground(player.storage.ningwu_moke_background,player);
                        game.createClearBackground('',player);
                    }
                    else{
                        game.createClearBackground('',player);
                    }
                },
            },

            ningwu_damage_moke:{
                audio:false,
                popup:false,
                forced:true,
                trigger:{
                    player:"damageEnd",
                },
                filter:function(event,player){
                    return player.isAlive()&&!player.hasSkill('xuyin_moke');
                },
                content:function(event){
                    //改变背景
                    if (game.getUpperBackgroundName('',player) != 'smoke_bg'){
                        if (!player.hasSkill('ningwu_moke_background')){
                            player.addTempSkill('ningwu_moke_background','phaseJieshu');
                            player.storage.ningwu_moke_background = game.getUpperBackgroundName('',player);
                            player.syncStorage('ningwu_moke_background');
                        }
                        game.createClearBackground('smoke_bg',player);
                    }

                    player.popup('凝雾','thunder');
                    // game.playAudio('skill','ningwu_moke'+Math.ceil(2*Math.random()));
                    game.playAudio('skill','ningwu_moke'+Math.ceil(2+2*Math.random()));
                    game.log(player,'发动了','#g【凝雾】','，本回合获得技能','#g【虚隐】');
                    player.addTempSkill('xuyin_moke');
                },
            },

            xuyin_moke:{
                audio:2,
                direct:true,
                forced:false,
                trigger:{
                    target:'useCardToPlayer',
                },
                filter:function(event,player){
                    if(!event.targets||!event.targets.contains(player)) return false;
                    if (!event.player||event.player==player) return false;
                    var has=game.hasPlayer(function(current){
                        return current!=player&&current!=event.player&&!event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,event.player,current);
                    });
                    return has;
                },
                content:function(event){
                    'step 0'
                    player.chooseTarget(get.prompt2('xuyin_moke'),function(card,player,target){
                        var trigger=_status.event.getTrigger();
                        return target!=player&&target!=trigger.player&&!trigger.targets.contains(target)&&lib.filter.targetEnabled2(trigger.card,trigger.player,target);
                    }).set('ai',function(target){
                        var trigger=_status.event.getTrigger();
                        if (get.attitude(trigger.player,_status.event.player)>0||get.tag(trigger.card,'recover')||get.tag(trigger.card,'save')){
                            return -1;
                        }
                        var add = 0;
                        if (get.tag(trigger.card,'damage')){
                            add += 2.5;
                        }
                        return get.effect(target,trigger.card,trigger.player,_status.event.player)+add;
                    });
                    'step 1'
                    if (result.bool){
                        event.target=result.targets[0];
                        player.logSkill('xuyin_moke',event.target,'thunder');
                        game.swapSeat(player,event.target);
                        // game.delay(0.8);
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    var target = event.target;
                    var evt=trigger.getParent();
                    // evt.triggeredTargets2.remove(player);
                    evt.targets.remove(player);
                    evt.targets.push(target);
                    game.log(target,'代替',player,'成为',trigger.card,'的目标');
                    // game.playAudio('skill','taiji2_caoxin'+Math.ceil(2*Math.random()));
                    game.delay(1);
                },
                ai:{
                    expose:0.35,
                    threaten:3,
                    effect:{
                        target:function(card,player,target){
                            if (target.hasSkill('xuyin_moke')&&get.tag(card,'damage')&&get.attitude(player,target)<0){
                                var has=game.hasPlayer(function(current){
                                    return current!=target&&current!=player&&get.attitude(current,player)+get.attitude(player,current)>0;
                                });
                                if (has&&Math.random()<0.7){
                                    return 0;
                                }
                            }
                        },
                    },
                },

            },
            
            xinghuo_moke:{
                audio:2,
                direct:true,
                unique:true,
                juexingji:true,
                skillAnimation:true,
				animationColor:'soil',
                ai:{
					combo:'yanyin_moke'
				},
                trigger:{player:'phaseZhunbei'},
                forced:true,
                filter:function(event,player){
					return (player.storage.yanyin_moke)&&(player.storage.yanyin_moke >= 8);
				},
                content:function(){
                    'step 0'
                    if (player.name == 'moke'){
                        player.reinit(player.name,'moke2',[player.hp,player.maxHp]);
                    }
                    else if (player.name2 == 'moke'){
                        player.reinit(player.name2,'moke2',false);
                    }
                    else{
                        player.reinit(player.name,'moke2',[player.hp,player.maxHp]);
                    }
                    'step 1'
                    player.awakenSkill('xinghuo_moke');
                    player.unmarkSkill('yanyin_moke');
                    player.logSkill('xinghuo_moke');
                    player.addSkill('liaoyuan_moke');
                    player.addSkill('nongyan_moke');
                    game.log(player,'获得了技能','#g【燎原】','和','#g【浓烟】');
                    game.delay(1);
                },
                derivation:['liaoyuan_moke','nongyan_moke'],
                ai:{
                    threaten:8.1,
                },
            },

            liaoyuan_moke:{
                audio:2,
                direct:true,
				trigger:{
					player:"gainAfter",
				},
				forced:true,
				filter:function (event,player){
					if(_status.currentPhase != player) return false;
					return event.getParent().name=='draw'&&event.getParent(2).name!='liaoyuan_moke';
				},
				content:function (){
                    player.popup('燎原','soil');
                    game.playAudio('skill','liaoyuan_moke'+Math.ceil(2*Math.random()));
                    game.log(player,'发动了','#g【燎原】');
					player.draw('nodelay');
				},
                ai:{
                    threaten:10.1,
                },
            },

            nongyan_moke:{
                audio:false,
                silent:true,
                popup:false,
                direct:true,
                marktext:'烟',//'尘',
                intro:{
                    content:'你与其他角色的距离+#',
                },
                forced:true,
                locked:true,
                priority:-200,
                trigger:{
                    player:["useCardAfter",'phaseAfter','phaseUseBefore'],
                },
                filter:function(event,player){
                    if (event.name == 'useCard'){
                        return player==_status.currentPhase&&player.isPhaseUsing();
                    }
                    else{
                        return player==_status.currentPhase;
                    }
                },
                content:function(){
                    if(trigger.name=='phase'){
                        player.storage.nongyan_moke=0;
                        player.syncStorage('nongyan_moke');
                        player.unmarkSkill('nongyan_moke');
                        return;
                    }
                    else if (trigger.name=='phaseUse'){
                        player.storage.nongyan_moke=0;
                        player.syncStorage('nongyan_moke');
                        player.unmarkSkill('nongyan_moke');
                        return;
                    }
                    else{
                        if (!player.storage.nongyan_moke){
                            player.storage.nongyan_moke = 0;
                        }
                        if (player.storage.nongyan_moke<8){
                            player.popup('浓烟','thunder');
                            game.log(player,'发动了','#g【浓烟】');
                            game.log(player,'与其他角色的距离+1');
                            player.storage.nongyan_moke++;
                            player.syncStorage('nongyan_moke');
                            player.markSkill('nongyan_moke');
                            if (player.storage.nongyan_moke == 1 || player.storage.nongyan_moke == 4){
                                game.playAudio('skill','ningwu_moke'+Math.ceil(2+2*Math.random()));
                            }
                            if (player.storage.nongyan_moke == 8){
                                //改变背景
                                if (game.getUpperBackgroundName('',player) != 'smoke_bg'){
                                    if (!player.hasSkill('ningwu_moke_background')){
                                        player.addTempSkill('ningwu_moke_background','phaseJieshu');
                                        player.storage.ningwu_moke_background = game.getUpperBackgroundName('',player);
                                        player.syncStorage('ningwu_moke_background');
                                    }
                                    game.createClearBackground('smoke_bg',player);
                                }
                                game.playAudio('skill','ningwu_moke'+Math.ceil(2+2*Math.random()));
                            }
                        }
                        return;
                    }
                },
                mod:{
                    globalFrom:function(from,to,distance){
                        if(_status.currentPhase==from){
                            return distance+from.storage.nongyan_moke;
                        }
                    },
                },

                ai:{
                    neg:true,
                    presha:true,
                },
            },

            
            huozhong_moke:{
                audio:2,
				trigger:{global:'useCardAfter'},
				direct:true,
				filter:function(event,player){
					if(event.player==player) return false;
					var evt=event.getParent('phaseUse');
					if(!evt||evt.player!=event.player) return false;
					return event.player.getHistory('useCard',function(evtt){
						return evtt.getParent('phaseUse')==evt;
					}).indexOf(event)==0&&player.countCards('he')>0;
				},
				content:function(){
					'step 0'
					var next=player.chooseToDiscard('he',get.prompt('huozhong_moke',trigger.player),'你可以弃置一张牌，并令其获得技能【烟瘾】直至本回合结束。');
					// next.set('logSkill',['huozhong_moke',trigger.player,'thunder']);
                    next.set('delay',false);
                    next.set('autodelay',false);
					next.set('check',get.attitude(player,trigger.player)>1.5&&trigger.player.countCards('h')>2);
					next.ai=function(card){
						if(_status.event.check) return 5-get.value(card);
						return -1;
					};
					'step 1'
					if(result.bool) {
                        player.popup('火种','soil');
                        game.playAudio('skill','huozhong_moke'+Math.ceil(2*Math.random()));
                        player.line(trigger.player,'fire');
                        game.log(player,'对',trigger.player,'发动了','#g【火种】');
                        game.log(trigger.player,'本回合获得技能','#g【烟瘾】');
                        game.delay(1);
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    trigger.player.storage.yanyin_give_moke = player;
                    trigger.player.addTempSkill('yanyin_give_moke');
                    trigger.player.syncStorage('yanyin_give_moke');
                    game.delay(0.8);
				},
				ai:{
					expose:0.25,
                    threaten:1.2,
				},

            },



            fengru_tong:{
                audio:2,


            },
            
            tunfei_tong:{
                trigger:{player:'damageBegin3'},
				audio:2,
				forced:true,
				filter:function(event){
					return event.card&&(get.color(event.card)!='black'||event.source&&event.source.isAlive()&&event.source.sex == 'male');
				},
				content:function(){
                    if (get.color(trigger.card)=='black'&&trigger.source&&trigger.source.isAlive()&&trigger.source.sex == 'male'){
                        trigger.source.draw();
                    }
                    else{
                        trigger.player.draw();
                    }
				},
            },



            lanyong_mo:{
                audio:2,
				trigger:{target:'useCardToTargeted'},
				direct:true,
				init:function(player){
					if(!player.storage.lanyong_mo) player.storage.lanyong_mo=[];
                    player.syncStorage('lanyong_mo');
				},
				filter:function(event,player){
					return event.card&&get.tag(event.card,'damage')&&event.player.isAlive();
				},
				content:function(){
					'step 0'
					// var list=['sha','shan','tao','jiu','taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman','lebu','bingliang','shandian'];
					// for(var i=0;i<player.storage.lanyong_mo.length;i++){
					// 	list.remove(player.storage.lanyong_mo[i]);
					// }
					// for(var i=0;i<list.length;i++){
					// 	list[i]=[get.type(list[i]),'',list[i]];
					// }
                    var list1=[],list2=[],list3=[];
					for(var i=0;i<lib.inpile.length;i++){
                        if (!player.storage.lanyong_mo.contains(lib.inpile[i])){
                            var type=get.type(lib.inpile[i]);
                            if(type=='basic'){
                                list1.push(['基本','',lib.inpile[i]]);
                            }
                            else if(type=='trick'){
                                list2.push(['锦囊','',lib.inpile[i]]);
                            }
                            else if(type=='delay'){
                                list3.push(['延时锦囊','',lib.inpile[i]]);
                            }
                        }
					}
                    var list = list1.concat(list2).concat(list3);
					player.chooseButton([get.prompt('lanyong_mo',trigger.player),[list,'vcard']]).set('ai',function(button){
                        var player = _status.event.player;
                        var att = get.attitude(trigger.player,player);
                        var type=get.type(button.link[2]);
                        if (att >= 0){
                            if (type == 'basic'){
                                if (button.link[2]!='tao'&&button.link[2]!='jiu'){
                                    return 5+Math.random();
                                }
                                else{
                                    return 3+Math.random();
                                }
                            }
                            else if (type=='trick'){
                                return 2+Math.random();
                            }
                            else{
                                return 1+Math.random();
                            }
                        }
                        else{
                            if (type == 'basic'){
                                if (button.link[2]!='tao'&&button.link[2]!='jiu'){
                                    return 1+Math.random();
                                }
                                else{
                                    return 2+Math.random();
                                }
                            }
                            else if (type=='trick'){
                                return 3+Math.random();
                            }
                            else{
                                return 5+Math.random();
                            }
                        }
					});
					'step 1'
					if(result.bool){
						player.logSkill('lanyong_mo');
                        player.line(trigger.player);
						var name=result.links[0][2];
						event.vcard=result.links;
						event.cardname=name;
						player.storage.lanyong_mo.add(name);
                        player.syncStorage('lanyong_mo');
                        game.log(player,'要求',trigger.player,'弃置一张','#y'+get.translation(event.cardname),'，否则',trigger.card,'对其无效');
					}
					else{
						event.finish();
					}
					'step 2'
					var name=event.cardname;
					trigger.player.chooseToDiscard(function(card){
						return card.name==_status.event.cardname;
					}).set('ai',function(card){
						if(_status.event.att<0){
							return 10-get.value(card);
						}
						return 0;
					}).set('att',get.attitude(trigger.player,player)).set('cardname',name).set('dialog',['懒慵：请弃置一张【'+get.translation(name)+'】，否则此'+get.translation(trigger.card)+'对'+get.translation(player)+'无效',[event.vcard,'vcard']]);
					'step 3'
					if(result.bool==false){
						trigger.excluded.push(player);
                        game.log(trigger.player,'未弃置','#y'+get.translation(event.cardname),'，',trigger.card,'对',player,'无效');
                        event.finish();
                    }
					else{
                        // trigger.player.$throw(result.cards,1000);
                        game.delay(0.8);
						// trigger.player.gainPlayerCard(player);
					}
                    'step 4'
                    trigger.player.draw(get.translation(event.cardname).length);
                    event.finish();
				},
                group:'lanyong_refresh_mo',
				ai:{
                    threaten:0.3,
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'damage')&&get.attitude(player,target)<0){
								return 0.3;
							}
						}
					}
				},

            },

            lanyong_refresh_mo:{
                audio:false,
                direct:true,
                frequent:true,
                trigger:{player:'useCard'},
                filter:function(event,player){
                    var evt=event.getParent('phaseUse');
					if(!evt) return false;
                    if (!player.storage.lanyong_mo || player.storage.lanyong_mo.length == 0){
                        return false;
                    }
                    return player == _status.currentPhase && event.player.getHistory('useCard',function(evtt){
						return evtt.getParent('phaseUse')==evt;
					}).indexOf(event)==0;
                },
                content:function(){
                    if (trigger.card&&player.storage.lanyong_mo.contains(get.name(trigger.card))){
                        player.logSkill('lanyong_mo');
                        player.storage.lanyong_mo.remove(get.name(trigger.card));
                        player.syncStorage('lanyong_mo');
                        game.log(player,'令','#y'+get.translation(get.name(trigger.card)),'视为未通过','#g【懒慵】','声明过');
                    }
                },

            },

            sanman_mo:{
                audio:2,
                priority:-100,
                trigger:{
                    global:"roundStart",
                },
                frequent:true,
                direct:true,
                content:function(){
                    'step 0'
                    player.chooseBool(get.prompt2('sanman_mo')).set('ai',function(){
                        return true;
                    });
                    'step 1'
                    if (result.bool){
                        player.chooseTarget('###请选择【散漫】的目标###'+get.translation('sanman_mo_info'), function(event, player, target) {
                            return true;
                        }).set('ai',function(target){
                            var player = _status.event.player;
                            var addi = get.threaten(target,player,false)/10;
                            var prophase = 1;
                            var final = 0;
                            if (target.hasSkillTag('prophase')){
                                prophase = 1.7;
                            }
                            if (target == player){
                                if (player.countCards('h')>player.hp+2&&player.countCards('j','lebu')==0&&!player.isTurnedOver()){
                                    return 0.1*player.countCards('h')+1+Math.random();
                                }
                                else{
                                    return 0.5+Math.random();
                                }
                            }
                            if(lib.config.mode=='identity'&&game.zhu.isZhu&&player.identity=='zhong'&&target == game.zhu){
                                return (addi + 2.7 + Math.random())*prophase;
                            }
                            var players=get.players(lib.sort.position);
                            var player_position=parseInt(player.dataset.position);
                            var round_position = parseInt(_status.roundStart.dataset.position);
                            var target_position = parseInt(target.dataset.position);
                            var player_actual = player_position - round_position;
                            var target_actual = target_position - round_position;
                            if (player_actual < 0){
                                player_actual += players.length;
                            }
                            if (target_actual < 0){
                                target_actual += players.length;
                            }
                            if (get.attitude(player,target)+get.attitude(target,player)>0){
                                if (target_actual<player_actual&&!player.hasSkill('shuaixing_limit_mo')){
                                    final = (addi + 1.7 + Math.random())*prophase;
                                }
                                else{
                                    if (player.isTurnedOver()){
                                        final = (addi + 1 + Math.random())*prophase;
                                    }
                                    else{
                                        final = ((addi + Math.random())*0.5+0.1*target.countCards('h'))*prophase;
                                    }
                                }
                            }
                            else if ((get.attitude(player,target)<0 || get.attitude(target,player)<0)&&target_actual>player_actual&&!player.isTurnedOver()&&!player.hasSkill('shuaixing_limit_mo')){
                                final = (addi + 1 + Math.random())*prophase;
                            }
                            else{
                                final = -1;
                            }

                            return final;
                        });
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if (result.bool){
                        var target = result.targets[0];
                        player.logSkill('sanman_mo');
                        player.line(target);
                        target.addTempSkill('man_mo','roundStart');
                        target.storage.man_mo = player;
                        target.syncStorage('man_mo');
                        game.log(player,'令',target,'本轮的回合：1.摸牌阶段摸牌数+2，2.出牌阶段使用【杀】次数上限+2，3.手牌上限+2');
                        player.addTempSkill('san_mo','roundStart');
                        player.storage.san_mo = player;
                        player.syncStorage('san_mo');
                        game.log(player,'本轮的回合：1.摸牌阶段摸牌数-1，2.出牌阶段使用【杀】次数上限-1，3.手牌上限-1');
                    }
                    else{
                        event.finish();
                    }
                    'step 3'
                    if (player == _status.roundStart){
                        game.delay(2);
                    }
                    else{
                        game.delay(2);
                    }
                },

                ai:{
                    expose:0.45,
                    threaten:4,
                },
                
            },

            man_mo:{
                mark:true,
                marktext:"漫",
				intro:{
					name:'漫',
					content:'本轮的回合：摸牌数+2、出杀次数+2、手牌上限+2',
				},
				mod:{
					cardUsable:function (card,player,num){
						if(card.name=='sha') return num + 2;
					},
					maxHandcard:function (player,num){
						return num + 2;
					},
				},
				audio:false,
				trigger:{
					player:['phaseDrawBegin2','phaseDiscard','useCard1'],
				},
				forced:true,
				filter:function(event,player){
                    if (event.name == 'phaseDraw'){
                        return !event.numFixed;
                    }
                    else if (event.name == 'phaseDiscard'){
                        return player.countCards('h')>player.hp;
                    }
                    else if (event.name == 'useCard'){
                        return get.name(event.card)=='sha'&&player.countUsed('sha',true)>1&&player.countUsed('sha',true)<=3&&event.getParent().type=='phase';
                    }
                    return false;
				},
				content:function(){
                    if (trigger.name == 'phaseDraw'){
                        if (player.storage.man_mo.isAlive()){
                            player.storage.man_mo.logSkill('sanman_mo');
                            player.storage.man_mo.line(player);
                        }
                        else{
                            player.logSkill('sanman_mo');
                        }
                        game.log(player,'摸牌阶段摸牌数+2');
                        trigger.num+=2;
                    }
                    else if (trigger.name == 'phaseDiscard'){
                        if (player.storage.man_mo.isAlive()){
                            player.storage.man_mo.logSkill('sanman_mo');
                            player.storage.man_mo.line(player);
                        }
                        else{
                            player.logSkill('sanman_mo');
                        }
                        game.log(player,'手牌上限+2');
                    }
                    else if (trigger.name == 'useCard'){
                        if (player.storage.man_mo.isAlive()){
                            player.storage.man_mo.logSkill('sanman_mo');
                            player.storage.man_mo.line(player);
                        }
                        else{
                            player.logSkill('sanman_mo');
                        }
                        game.log(player,'出牌阶段使用【杀】次数上限+2');
                    }
                    
				},
                ai:{
                    threaten:3,
                },
            },

            san_mo:{
                mark:true,
                marktext:"散",
				intro:{
					name:'散',
					content:'本轮的回合：摸牌数-1、出杀次数-1、手牌上限-1',
				},
				mod:{
					cardUsable:function (card,player,num){
						if(card.name=='sha') return num - 1;
					},
					maxHandcard:function (player,num){
						return num - 1;
					},
				},
				audio:false,
				trigger:{
					player:['phaseDrawBegin2','phaseDiscard'],
				},
				forced:true,
				filter:function(event,player){
                    if (event.name == 'phaseDraw'){
                        return !event.numFixed&&event.num>0;
                    }
                    else if (event.name == 'phaseDiscard'){
                        return player.countCards('h')>player.getHandcardLimit();
                    }
                    return false;
				},
				content:function(){
                    if (trigger.name == 'phaseDraw'){
                        if (!player.hasSkill('man_mo')){
                            if (player.storage.san_mo.isAlive()){
                                player.storage.san_mo.logSkill('sanman_mo');
                                player.storage.san_mo.line(player);
                            }
                            else{
                                player.logSkill('sanman_mo');
                            }
                        }
                        game.log(player,'摸牌阶段摸牌数-1');
                        if (trigger.num > 0){
                            trigger.num-=1;
                        }
                        
                    }
                    else if (trigger.name == 'phaseDiscard'){
                        if (!player.hasSkill('man_mo')){
                            if (player.storage.san_mo.isAlive()){
                                player.storage.san_mo.logSkill('sanman_mo');
                                player.storage.san_mo.line(player);
                            }
                            else{
                                player.logSkill('sanman_mo');
                            }
                        }
                        game.log(player,'手牌上限-1');
                    }
                    
				},
            },
            
            shuaixing_mo:{
                skillAnimation:true,
                animationColor:"thunder",
                audio:2,
                direct:true,
                trigger:{
                    player:"phaseZhunbei",
                },
                filter:function(event,player){
                    if (player.hasSkill('shuaixing_limit_mo')){
                        return false;
                    }
                    if (!(player.hasSkill('san_mo')||player.hasSkill('man_mo'))){
                        return false;
                    }
                    var has=game.hasPlayer(function(current){
                        return current!=player&&(current.hasSkill('san_mo')||current.hasSkill('man_mo'));
                    });
                    return has;
                },
                content:function(event){
                    'step 0'
                    player.chooseBool(get.prompt2('shuaixing_mo')).set('ai',function(event,player){
                        if (player.hasSkill('san_mo')){
                            var has_past = game.hasPlayer(function(current){
                                if (current == player){
                                    return false;
                                }
                                if (current.hasSkill('man_mo')){
                                    var players=get.players(lib.sort.position);
                                    var player_position=parseInt(player.dataset.position);
                                    var round_position = parseInt(_status.roundStart.dataset.position);
                                    var current_position = parseInt(current.dataset.position);
                                    var player_actual = player_position - round_position;
                                    var current_actual = current_position - round_position;
                                    if (player_actual < 0){
                                        player_actual += players.length;
                                    }
                                    if (current_actual < 0){
                                        current_actual += players.length;
                                    }
                                    if (current_actual < player_actual){
                                        return true;
                                    }
                                    else{
                                        return false;
                                    }
                                }
                                else{
                                    return false;
                                }
                            });

                            if (has_past){
                                return true;
                            }

                            event.friend_is = player;
                            var has_enemy=game.hasPlayer(function(current){
                                return current!=player&&(current.hasSkill('man_mo'))&&(get.attitude(player,current)<0||get.attitude(current,player)<0);
                            });
                            var has_friend=game.hasPlayer(function(current){
                                if (current!=player&&(current.hasSkill('man_mo'))&&(get.attitude(player,current)>0||get.attitude(current,player)>0)){
                                    event.friend_is = current;
                                    return true;
                                }
                                else{
                                    return false;
                                }
                            });
                            if (has_enemy){
                                return true;
                            }
                            if (has_friend){
                                if (player.countCards('j','lebu')>0){
                                    return false;
                                }
                                else if (event.friend_is.countCards('j','lebu')>0){
                                    return true;
                                }
                                else{
                                    return Math.random()<0.5;
                                }

                            }
                        }
                        else if (player.hasSkill('man_mo')){
                            var has_past = game.hasPlayer(function(current){
                                if (current == player){
                                    return false;
                                }
                                if (current.hasSkill('san_mo')){
                                    var players=get.players(lib.sort.position);
                                    var player_position=parseInt(player.dataset.position);
                                    var round_position = parseInt(_status.roundStart.dataset.position);
                                    var current_position = parseInt(current.dataset.position);
                                    var player_actual = player_position - round_position;
                                    var current_actual = current_position - round_position;
                                    if (player_actual < 0){
                                        player_actual += players.length;
                                    }
                                    if (current_actual < 0){
                                        current_actual += players.length;
                                    }
                                    if (current_actual < player_actual){
                                        return true;
                                    }
                                    else{
                                        return false;
                                    }
                                }
                                else{
                                    return false;
                                }
                            });

                            if (has_past){
                                return false;
                            }

                            event.friend_is = player;
                            var has_enemy=game.hasPlayer(function(current){
                                return current!=player&&(current.hasSkill('san_mo'))&&(get.attitude(player,current)<0||get.attitude(current,player)<0);
                            });
                            var has_friend=game.hasPlayer(function(current){
                                if (current!=player&&(current.hasSkill('san_mo'))&&(get.attitude(player,current)>0||get.attitude(current,player)>0)){
                                    event.friend_is = current;
                                    return true;
                                }
                                else{
                                    return false;
                                }
                            });
                            if (has_enemy){
                                return false;
                            }
                            if (has_friend){
                                if (player.countCards('j','lebu')>0){
                                    return true;
                                }
                                else if (event.friend_is.countCards('j','lebu')>0){
                                    return false;
                                }
                                else{
                                    return Math.random()>0.5;
                                }

                            }
                        }
                        return false;
                    });
                    'step 1'
                    if (result.bool){
                        game.delay(2);
                        player.logSkill('shuaixing_mo');
                        if (player.hasSkill('san_mo')){
                            var has=game.hasPlayer(function(current){
                                if (current!=player&current.hasSkill('man_mo')){
                                    game.log(player,'与',current,'交换','#g【散漫】','效果');
                                    current.removeSkill('man_mo');
                                    if (player.hasSkill('san_mo')){
                                        player.removeSkill('san_mo');
                                    }

                                    player.line(current,'green');
                                    current.line(player,'green');

                                    current.addTempSkill('san_mo','roundStart');
                                    current.storage.san_mo = player;
                                    current.syncStorage('san_mo');
                                    game.log(player,'令',current,'本轮的回合：1.摸牌阶段摸牌数-1，2.出牌阶段使用【杀】次数上限-1，3.手牌上限-1');
                                    player.addTempSkill('man_mo','roundStart');
                                    player.storage.man_mo = player;
                                    player.syncStorage('man_mo');
                                    game.log(player,'本轮的回合：1.摸牌阶段摸牌数+2，2.出牌阶段使用【杀】次数上限+2，3.手牌上限+2');
                                }
                            });
                        }
                        else if (player.hasSkill('man_mo')){
                            var has=game.hasPlayer(function(current){
                                if (current!=player&current.hasSkill('san_mo')){
                                    game.log(player,'与',current,'交换','#g【散漫】','效果');
                                    
                                    current.removeSkill('san_mo');
                                    if (player.hasSkill('man_mo')){
                                        player.removeSkill('man_mo');
                                    }

                                    player.line(current,'green');
                                    current.line(player,'green');

                                    current.addTempSkill('man_mo','roundStart');
                                    current.storage.man_mo = player;
                                    current.syncStorage('man_mo');
                                    game.log(player,'令',current,'本轮的回合：1.摸牌阶段摸牌数+2，2.出牌阶段使用【杀】次数上限+2，3.手牌上限+2');
                                    player.addTempSkill('san_mo','roundStart');
                                    player.storage.san_mo = player;
                                    player.syncStorage('san_mo');
                                    game.log(player,'本轮的回合：1.摸牌阶段摸牌数-1，2.出牌阶段使用【杀】次数上限-1，3.手牌上限-1');
                                }
                            });
                        }

                        player.addSkill('shuaixing_limit_mo');
                        game.log(player,'的技能','#g【率性】','失效直到一名角色死亡');
                    }
                    else{
                        event.finish();
                    }

                },

                ai:{
                    expose:0.2,
                    threaten:2.5,
                },
            },


            shuaixing_limit_mo:{
                silent:true,
                audio:false,
                forced:true,
                trigger:{
                    global:"die",
                },
                content:function(){
                    player.popup('shuaixing_mo','thunder');
                    game.playAudio('skill','shuaixing_mo'+Math.ceil(2+2*Math.random()));
                    game.log(player,'恢复技能','#g【率性】');
                    player.removeSkill('shuaixing_limit_mo');
                },
            },



            yuner_shiyan:{
                // mark:true,
                // marktext:'烟',
                // intro:{
                //     name:'试验',
                // },
                silent:true,
                enable:'phaseUse',
                content:function(event){
                    player.draw(40);
                    player.insertPhase();
                },
            },

            yuner_draw2:{
                // mark:true,
                // marktext:'烟',
                // intro:{
                //     name:'试验',
                // },
                silent:true,
                enable:'phaseUse',
                content:function(event){
                    player.draw(2);
                },
            },

            yuner_shiyan_pai:{
                silent:true,
                enable:'phaseUse',
                content:function(event){
                    player.draw(40);
                },
            },

            

            yuner_shandian:{
                enable:"phaseUse",
				discard:false,
                viewAs:{name:'shandian'},
				//prepare:"throw",
				position:"he",
                locked:false,
				filterCard:function(card,player,event){
					return player.canAddJudge({name:'shandian',cards:[card]});
				},
            },

            yuner_lebu:{
                enable:"phaseUse",
				discard:false,
                viewAs:{name:'lebu'},
				//prepare:"throw",
				position:"he",
                locked:false,
				filterCard:function(card,player,event){
					return player.canAddJudge({name:'lebu',cards:[card]});
				},
            },

            yuner_tao:{
                enable:"chooseToUse",
				discard:false,
                viewAs:{name:'tao'},
				//prepare:"throw",
				position:"he",
                locked:false,
				filterCard:function(card,player,event){
					return true;
				},
            },

            yuner_fanmian:{
                enable:"phaseUse",
                filter:function(event,player){
					return true;
				},
				content:function(){
                    "step 0"
					player.chooseTarget("谁翻面");
                    "step 1"
					if(result.bool){
                        result.targets[0].turnOver();
					}
				},
            },

            yuner_phaseBefore:{
                trigger:{
                    global:"phaseBefore",
                },
                content:function(){
                    "step 0"
                    player.chooseBool('phaseBefore摸牌吗');
                    "step 1"
                    if(result.bool){
                        player.draw();
                    }
                },
            },

            yuner_phaseBegin:{
                trigger:{
                    global:"phaseBegin",
                },
                content:function(){
                    "step 0"
                    player.chooseBool('phaseBegin摸牌吗');
                    "step 1"
                    if(result.bool){
                        player.draw();
                    }
                },
            },

            yuner_phaseZhunbei:{
                trigger:{
                    global:"phaseZhunbeiBefore",
                },
                content:function(){
                    "step 0"
                    player.chooseBool('phaseZhunbeiBefore摸牌吗');
                    "step 1"
                    if(result.bool){
                        player.draw();
                    }
                },
            },

            yuner_phaseEnd:{
                trigger:{
                    global:"phaseEnd",
                },
                content:function(){
                    "step 0"
                    player.chooseBool('phaseEnd摸牌吗');
                    "step 1"
                    if(result.bool){
                        player.draw();
                    }
                },
            },

            yuner_phaseAfter:{
                trigger:{
                    global:"phaseAfter",
                },
                content:function(){
                    "step 0"
                    player.chooseBool('phaseAfter摸牌吗');
                    "step 1"
                    if(result.bool){
                        player.draw();
                    }
                },
            },

            yuner_recover:{
                enable:"phaseUse",
                filter:function(event,player){
					return true;
				},
				content:function(){
                    "step 0"
					player.chooseTarget("谁回复10");
                    "step 1"
					if(result.bool){
                        result.targets[0].recover(10);
					}
				},
            },


            yuner_selfDamage:{
                enable:"phaseUse",
                filter:function(event,player){
					return true;
				},
				content:function(){
                    "step 0"
					player.chooseTarget("你打ta");
                    "step 1"
					if(result.bool){
                        result.targets[0].damage(2,player);
					}
				},
            },

            yuner_selfDamage10:{
                enable:"phaseUse",
                filter:function(event,player){
					return true;
				},
				content:function(){
                    "step 0"
					player.chooseTarget("你打ta");
                    "step 1"
					if(result.bool){
                        result.targets[0].damage(10,player);
					}
				},
            },

            yuner_selfDamageThunder:{
                enable:"phaseUse",
                filter:function(event,player){
					return true;
				},
				content:function(){
                    "step 0"
					player.chooseTarget("你雷打ta");
                    "step 1"
					if(result.bool){
                        result.targets[0].damage(1,'thunder',player);
					}
				},
            },

            yuner_selfDamageFire:{
                enable:"phaseUse",
                filter:function(event,player){
					return true;
				},
				content:function(){
                    "step 0"
					player.chooseTarget("你火打ta");
                    "step 1"
					if(result.bool){
                        result.targets[0].damage(2,'fire',player);
					}
				},
            },

            yuner_selfLoseHp:{
                enable:"phaseUse",
                filter:function(event,player){
					return true;
				},
				content:function(){
                    "step 0"
					player.chooseTarget("ta流失体力");
                    "step 1"
					if(result.bool){
                        result.targets[0].loseHp(1);
					}
				},
            },

            yuner_kongding:{
                enable:'phaseUse',
                filter:function(event,player){
					return true;
				},
				content:function(event){
                    "step 0"
					player.chooseCard("选一张放牌堆顶");
                    "step 1"
                    if (result.cards){
                        ui.cardPile.insertBefore(result.cards[0],ui.cardPile.firstChild);
                    }
					    
				},
                
            },

            yuner_discard:{
                enable:'phaseUse',
                filter:function(event,player){
					return true;
				},
				content:function(event){
                    "step 0"
					player.chooseCard("选一张放牌弃掉");
                    "step 1"
                    if (result.cards){
                        player.discard(result.cards);
                    }
					    
				},
                
            },


            yuner_qiangpai:{
                enable:"phaseUse",
                filter:function(event,player){
					return true;
				},
				content:function(){
                    "step 0"
					player.chooseTarget("你抢ta牌");
                    "step 1"
					if(result.bool){
                        // console.log(result.targets[0].dataset.position);
                        // var players=get.players(lib.sort.position);
                        // for(var i=0;i<players.length;i++){
                        //     console.log('第'+i);
                        //     console.log(players[i]);
                        // }
                        var targetHand = result.targets[0].getCards('h');
                        player.gain(targetHand, result.targets[0], 'draw');
					}
				},
            },

            yuner_die:{
                enable:"phaseUse",
                filter:function(event,player){
					return true;
				},
				content:function(){
                    "step 0"
					player.chooseTarget("ta死亡");
                    "step 1"
					if(result.bool){
                        result.targets[0].die();
					}
				},
            },

            yuner_playerqipai:{
                enable:"phaseUse",
                filter:function(event,player){
					return true;
				},
				content:function(){
                    "step 0"
					player.chooseTarget("ta扔掉牌");
                    "step 1"
					if(result.bool){
                        var targetHand = result.targets[0].getCards('h');
                        result.targets[0].discard(targetHand);
					}
				},
            },

            yuner_geihuihe:{
                enable:"phaseUse",
                filter:function(event,player){
					return true;
				},
				content:function(){
                    "step 0"
					player.chooseTarget("给ta回合");
                    "step 1"
					if(result.bool){
                        result.targets[0].insertPhase();
                        
					}
				},
            },

            yuner_link:{
                enable:"phaseUse",
                filter:function(event,player){
					return true;
				},
				content:function(){
                    "step 0"
					player.chooseTarget("横置ta");
                    "step 1"
					if(result.bool){
                        result.targets[0].link();
                        
					}
				},
            },

            yuner_loseHp:{
                enable:"phaseUse",
                filter:function(event,player){
					return true;
				},
				content:function(){
                    "step 0"
					player.chooseTarget("ta流失体力");
                    "step 1"
					if(result.bool){
                        result.targets[0].loseHp(10);
                        
					}
				},
            },

            yuner_reinit:{
                enable:"phaseUse",
                filter:function(event,player){
					return true;
				},
				content:function(){
                    "step 0"
					player.chooseTarget("成为ta");
                    "step 1"
					if(result.bool){
                        player.reinit(player.name,result.targets[0].name);
                        
					}
				},
            },

            yuner_reinitHp9:{
                enable:"phaseUse",
                filter:function(event,player){
					return true;
				},
				content:function(){
                    "step 0"
					player.chooseTarget("成为ta");
                    "step 1"
					if(result.bool){
                        player.reinit(player.name,result.targets[0].name,[9,10]);
                        
					}
				},
            },

            yuner_WasDamaged:{
                enable:"phaseUse",
                filter:function(event,player){
					return true;
				},
				content:function(){
                    "step 0"
					player.chooseTarget("ta打你");
                    "step 1"
					if(result.bool){
                        player.damage(2,result.targets[0]);
					}
				},
            },

            yuner_WasSha:{
                enable:"phaseUse",
                filter:function(event,player){
					return true;
				},
				content:function(){
                    "step 0"
					player.chooseTarget("ta杀你");
                    "step 1"
					if(result.bool){
                        result.targets[0].useCard({name:'sha',isCard:true},player,false);
					}
				},
            },

            yuner_WasJuedou:{
                enable:"phaseUse",
                filter:function(event,player){
					return true;
				},
				content:function(){
                    "step 0"
					player.chooseTarget("ta决斗你");
                    "step 1"
					if(result.bool){
                        result.targets[0].useCard({name:'juedou',isCard:true},player,false);
					}
				},
            },

            yuner_disableEquip:{
                enable:"phaseUse",
                filter:function(event,player){
					return true;
				},
				content:function(){
                    "step 0"
					player.chooseTarget("废除ta所有装备区");
                    "step 1"
					if(result.bool){
                        result.targets[0].disableEquip('equip1');
                        result.targets[0].disableEquip('equip2');
                        result.targets[0].disableEquip('equip3');
                        result.targets[0].disableEquip('equip4');
                        result.targets[0].disableEquip('equip5');
					}
				},
            },

            yuner_swapequip:{
                enable:"phaseUse",
                filter:function(event,player){
					return true;
				},
				content:function(){
                    "step 0"
					player.chooseTarget("和ta交换装备");
                    "step 1"
					if(result.bool){
                        player.swapEquip(result.targets[0]);
					}
				},
            },

            yuner_muma:{
                enable:"phaseUse",
                content:function(){
                    "step 0"
                    var card=get.cardPile2(function(card){
                        return get.name(card)=='muniu';
                    });
                    if (card){
                        player.gain(card);
                    }
					
				},
                
            },

            yuner_juedou:{
                enable:"phaseUse",
                content:function(){
                    "step 0"
                    var card=get.cardPile2(function(card){
                        return get.name(card)=='juedou';
                    });
                    if (card){
                        player.gain(card);
                    }
					
				},
                
            },


            yuner_muniu_start_kaer:{
                audio:2,
                popup:false,
                forced:false,
                frequent:true,
                priority:2,
                enable:"phaseUse",
                init:function(player){
					if(!player.storage.niu_kaer) player.storage.niu_kaer=[];
				},
                filter:function(event,player){
                    return player.countCards('h')>0&&(!player.hasSkill('niu_kaer')||(player.storage.niu_kaer&&player.storage.niu_kaer.length == 0));
                },
                content:function (event){
                    'step 0'
                    if (!player.hasSkill('muniu_end_kaer')){player.addSkill('muniu_end_kaer');}
                    if(!player.storage.niu_kaer) {player.storage.niu_kaer=[];}
                    player.chooseBool(get.prompt('muniu_kaer'),"每名角色的准备阶段，若你没有【牛】，则你可以将任意张手牌（至少一张）置于武将牌上，称为【牛】。").set('ai',function(card){
                        if (Math.random()<0.9){
                            return true;
                        }
                        else{
                            return false;
                        }
                    });
                    'step 1'
                    if (result.bool){
                        player.chooseCard('h','请选择任意张手牌置于你的武将牌上，称为【牛】',[1,Infinity],true).set('ai',function(card){
                            if (get.name(card)=='tao'){
                                return -13;
                            }
                            if (get.name(card)=='jiu'){
                                return -9;
                            }
                            if (player == _status.currentPhase){
                                if (get.type(card,'trick') == 'trick'){
                                    return -10;
                                }
                            }
                            return -get.value(card)+17*Math.random()+4;
                        });
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if(result.bool){
                        player.logSkill('muniu_start_kaer');
                        player.$give(result.cards.length,player,false);
                        player.storage.niu_kaer=player.storage.niu_kaer.concat(result.cards);
                        player.storage.kaer_jiuzi = player;
                        player.addSkill('niu_kaer');
                        player.syncStorage('niu_kaer');
                        game.addVideo('storage',player,['muniu_start_kaer',get.cardsInfo(player.storage.niu_kaer),'cards']);
                        game.log(player,'将'+get.cnNumber(result.cards.length)+'张牌置于其武将牌上，称为','#g【牛】');
                        player.lose(result.cards,ui.special,'toStorage');
                    }else{
                        event.finish();
                    }
                    'step 3'
                    game.delay(1);
                },
            },



            yuner_muniu_share_kaer:{
                audio:2,
                popup:false,
                forced:false,
                frequent:true,
                priority:2,
                enable:"phaseUse",
                filter:function(event,player){
                    var has=game.hasPlayer(function(current){
                        if (!current.hasSkill('niu_kaer')){
                            return true;
                        }
                    });
                    return has&&player.hasSkill('niu_kaer')&&(player.storage.niu_kaer&&player.storage.niu_kaer.length > 0);
                },
                content:function(event){
                    'step 0'
                    player.chooseBool(get.prompt('muniu_kaer'),"每名角色结束阶段，你可以将【牛】转移至一名没有【牛】的角色武将牌上。").set('ai',function(card){
                        var player = _status.currentPhase;
                        if (player.countCards('h') > 0&&Math.random()<0.9){
                            return true;
                        }
                        else if (player.countCards('h') <= 0&&Math.random()<0.95){
                            return true;
                        }
                        else{
                            return false;
                        }
                    });
                    'step 1'
                    if (result.bool){
                        player.storage.muniu_share_kaer = 2;
                        player.syncStorage('muniu_share_kaer');
                        player.chooseTarget('选择【牧牛】的目标',"每名角色结束阶段，你可以将【牛】转移至一名没有【牛】的角色武将牌上。",true,function(card,player,target){
                            return target!=player && !target.hasSkill('niu_kaer');
                        }).set('ai',function(target){     
                                return get.attitude(player,target)+Math.random();            
                        }); 
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if (result.bool){
                        player.logSkill('muniu_share_kaer',result.targets[0]);
                        event.NumCards = player.storage.niu_kaer.length;
                        game.log(player,'将'+get.cnNumber(event.NumCards)+'张','#g【牛】','牌置于',result.targets[0],'武将牌上，',result.targets[0],'获得','#g【牛】');
                        player.$give(player.storage.niu_kaer.length,result.targets[0],false);
                        result.targets[0].storage.kaer_jiuzi = player;
                        result.targets[0].storage.niu_kaer = [];
                        result.targets[0].storage.niu_kaer = result.targets[0].storage.niu_kaer.concat(player.storage.niu_kaer);
                        result.targets[0].syncStorage('niu_kaer');
                        result.targets[0].addSkill('niu_kaer');
                        player.removeSkill('niu_kaer');
                        player.storage.niu_kaer.length = 0;
                        player.storage.niu_kaer = [];
                        player.syncStorage('niu_kaer');
                    }
                    'step 3'
                    player.storage.muniu_share_kaer = 1;
                    player.syncStorage('muniu_share_kaer');
                    if (player.hasSkill('forbidExtraDraw')){
                        player.removeSkill('forbidExtraDraw');
                    }
                    game.delay(2);
                },
            },

            yuner_neiVSzhu:{
                enable:"phaseUse",
                content:function(){
                    "step 0"
                    game.playAudio('effect','tie');
					game.playAudio('effect','tie_music');
                    game.tieAnimation(3000);
                    // game.bestPlayerShow('chenyingchao',3000);
                    // game.neiVSzhu(3000);
					
				},
            },

            yuner_compareAni:{
                enable:'phaseUse',
                filter:function(event,player){
					return true;
				},
				content:function(event){
                    "step 0"
					player.chooseCard("选两张牌比较",2);
                    "step 1"
                    if (result.cards){
                        player.$compare(result.cards[0],player,result.cards[1]);
                    }
					    
				},
            },

            




            //蔡阳
			yinka:{
				trigger:{player:['drawBegin','judgeBegin']},
				direct:true,
				filter:function(){
					return ui.cardPile.childNodes.length>0;
				},
				content:function(){
					'step 0'
					player.chooseButton(['印卡：请选择要置于牌堆'+(trigger.bottom?'底':'顶')+'的牌（先选择的在上）',Array.from(ui.cardPile.childNodes)],[1,trigger.num||1]);
					'step 1'
					if(result.bool){
						while(result.links.length){
							if(trigger.bottom){
								var card=result.links.shift();
								ui.cardPile.removeChild(card);
								ui.cardPile.appendChild(card);
							}
							else{
								var card=result.links.pop();
								ui.cardPile.removeChild(card);
								ui.cardPile.insertBefore(card,ui.cardPile.firstChild)
							}
						}
					}
				},
				ai:{isLuckyStar:true},
			},




            shiki_omusubi:{
				audio:2,
				trigger:{global:'roundStart'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('shiki_omusubi'),lib.filter.notMe).set('ai',function(target){
						var player=_status.event.player;
							if(player.isHealthy()) return 0;
							if(player.hp<3&&player.getDamagedHp()<2) return 0;
							var list=[];
							if(lib.character[target.name]) list.addArray(lib.character[target.name][3]);
							if(lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
							if(lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
							list=list.filter(function(i){
								return !player.hasSkill(i);
							});
							if(!list.length) return 0;
						return 1+Math.random();
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('shiki_omusubi',target);
						player.loseMaxHp();
						var list=[];
						if(lib.character[target.name]) list.addArray(lib.character[target.name][3]);
						if(lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
						if(lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
						player.addSkill(list);
						game.broadcastAll(function(list){
							lib.character.key_shiki[3].addArray(list);
							game.expandSkills(list);
							for(var i of list){
								var info=lib.skill[i];
								if(!info) continue;
								if(!info.audioname2) info.audioname2={};
								info.audioname2.key_shiki='shiki_omusubi';
							}
						},list);
					}
				},
			},
			kagari_zongsi:{
				enable:'phaseUse',
				usable:1,
				content:function(){
					'step 0'
					var controls=[];
					if(ui.cardPile.hasChildNodes()) controls.push('选择牌堆中的一张牌');
					if(ui.discardPile.hasChildNodes()) controls.push('选择弃牌堆中的一张牌');
					if(game.hasPlayer(function(current){
						return current.countCards('hej')>0;
					})) controls.push('选择一名角色区域内的一张牌');
					if(!controls.length){event.finish();return;}
					event.controls=controls;
					var next=player.chooseControl();
					next.set('choiceList',controls)
					next.set('prompt','请选择要移动的卡牌的来源');
					next.ai=function(){return 0};
					'step 1'
					result.control=event.controls[result.index];
					var list=['弃牌堆','牌堆','角色'];
					for(var i=0;i<list.length;i++){
						if(result.control.indexOf(list[i])!=-1){event.index=i;break;}
					}
					if(event.index==2){
						player.chooseTarget('请选择要移动的卡牌的来源',true,function(card,kagari,target){
							return target.countCards('hej')>0;
						});
					}
					else{
						var source=ui[event.index==0?'discardPile':'cardPile'].childNodes;
						var list=[];
						for(var i=0;i<source.length;i++) list.push(source[i]);
						player.chooseButton(['请选择要移动的卡牌',list],true).ai=get.buttonValue;
					}
					'step 2'
					if(event.index==2){
						player.line(result.targets[0]);
						event.target1=result.targets[0];
						player.choosePlayerCard(result.targets[0],true,'hej').set('visible',true);
					}
					else{
						event.card=result.links[0];
					}
					'step 3'
					if(event.index==2) event.card=result.cards[0];
					var controls=[
						'将这张牌移动到牌堆的顶部或者底部',
						'将这张牌移动到弃牌堆的顶部或者底部',
						'将这张牌移动到一名角色对应的区域里',
					];
					event.controls=controls;
					var next=player.chooseControl();
					next.set('prompt','要对'+get.translation(event.card)+'做什么呢？');
					next.set('choiceList',controls);
					next.ai=function(){return 2};
					'step 4'
					result.control=event.controls[result.index];
					var list=['弃牌堆','牌堆','角色'];
					for(var i=0;i<list.length;i++){
						if(result.control.indexOf(list[i])!=-1){event.index2=i;break;}
					}
					if(event.index2==2){
						player.chooseTarget('要将'+get.translation(card)+'移动到哪一名角色的对应区域呢',true).ai=function(target){
							return target==_status.event.player?1:0;
						};
					}
					else{
						player.chooseControl('顶部','底部').set('prompt','把'+get.translation(card)+'移动到'+(event.index2==0?'弃':'')+'牌堆的...');
					}
					'step 5'
					if(event.index2!=2){
						if(event.target1) event.target1.lose(card,ui.special);
						else card.goto(ui.special);
						event.way=result.control;
					}
					else{
						event.target2=result.targets[0];
						var list=['手牌区'];
						if(lib.card[card.name].type=='equip'&&event.target2.isEmpty(lib.card[card.name].subtype)) list.push('装备区');
						if(lib.card[card.name].type=='delay'&&!event.target2.storage._disableJudge&&!event.target2.hasJudge(card.name)) list.push('判定区');
						if(list.length==1) event._result={control:list[0]};
						else{
							player.chooseControl(list).set('prompt','把'+get.translation(card)+'移动到'+get.translation(event.target2)+'的...').ai=function(){return 0};
						}
					}
					'step 6'
					if(event.index2!=2){
						card.fix();
						var node=ui[event.index==0?'discardPile':'cardPile'];
						if(event.way=='底部') node.appendChild(card);
						else node.insertBefore(card,node.firstChild);
						game.updateRoundNumber();
						event.finish();
					}
					else{
						if(result.control=='手牌区'){
							var next=event.target2.gain(card);
							if(event.target1){
								next.source=event.target1;
								next.animate='giveAuto';
							}
							else next.animate='draw';
						}
						else if(result.control=='装备区'){
							if(event.target1) event.target1.$give(card,event.target2);
							event.target2.equip(card);
						}
						else{
							if(event.target1) event.target1.$give(card,event.target2);
							event.target2.addJudge(card);
						}
					}
					'step 7'
					game.updateRoundNumber();
				},
				ai:{
					order:10,
					result:{player:1},
				},
			},


            

            


            
			
			
		},

        //废除装备栏时显示的卡牌
		card:{
			"feichu_equip1":{
				type:"equip",
				subtype:"equip1",
			},
			"feichu_equip2":{
				type:"equip",
				subtype:"equip2",
			},
			"feichu_equip3":{
				type:"equip",
				subtype:"equip3",
			},
			"feichu_equip4":{
				type:"equip",
				subtype:"equip4",
			},
			"feichu_equip5":{
				type:"equip",
				subtype:"equip5",
			},
			disable_judge:{},
		},



		translate:{
			jiuzisha:'九子魂',
            jiuzizhihun:'九子之魂',
			xiyuduyufengyun:'西域·赌域风云',
			nanyuhuatianjiudi:'南域·花天酒地',
			dongyulenxuewangchao:'东域·冷血王朝',
			beiyulanchuanzhizhan:'北域·蓝川之战',

            "feichu_equip1":"已废除",
			"feichu_equip1_info":"武器栏已废除",
			"feichu_equip2":"已废除",
			"feichu_equip2_info":"防具栏已废除",
			"feichu_equip3":"已废除",
			"feichu_equip3_info":"防御坐骑栏已废除",
			"feichu_equip4":"已废除",
			"feichu_equip4_info":"攻击坐骑栏已废除",
			"feichu_equip5":"已废除",
			"feichu_equip5_info":"宝物栏已废除",
			"feichu_equip1_bg":"废",
			"feichu_equip2_bg":"废",
			"feichu_equip3_bg":"废",
			"feichu_equip4_bg":"废",
			"feichu_equip5_bg":"废",
			disable_judge:'已废除',
			disable_judge_info:'判定区已废除',
			disable_judge_bg:'废',

            ouruoling: '欧若灵',
            jiuyou: '九幽',
            jingling: '精灵',
            yongzhuang: '泳装',
            mizui:'迷醉',
            mizui_damage:'迷醉',
            mizui_target:'迷醉',
            'jiuyou': '九幽',
            'jiuyou_info':"每当有判定发生时，你可以摸一张牌。",
            'jingling': '精灵',
            'jingling_info': "你可以弃置两张牌，使一次判定或一张锦囊牌无效。",
            'yongzhuang': '泳装',
            'yongzhuang_info': "锁定技，当你的防具栏为空时，黑色的杀对你无效。",
            'mizui':'迷醉',
            'mizui_info':"当你成为非黑色杀的目标或受到伤害时，你可以进行一次判定，若结果为♥，则此杀或此次伤害无效。",
            

            hanxin: '韩鑫',
            guaidao: '怪盗',
            jingguai: '精怪',
            jingguai_gaipan: '精怪',
            jingguai_panduan: '精怪',
            jingguai_fanmian: '精怪',
            mingwang: '冥王',
            mingwang_selfDying:'冥王',
            huaxiang:'滑翔',
            huaxiang1:'滑翔',
            huaxiang2:'滑翔',
            huaxiang4:'滑翔',
            'guaidao':"怪盗",
            "guaidao_info":"你可以将一张黑色牌当做【顺手牵羊】使用。",
            "jingguai":"精怪",
            "jingguai_info":"一名角色的判定牌生效前，你可以打出一张红色牌替换之；当你受到伤害时，若你的武将牌背面朝上，则你可在此伤害结算后将武将牌翻回正面。",
            "mingwang":"冥王",
            "mingwang_info":"当一名其他角色进入濒死状态时，你可以弃置三张♠牌，令该角色立即死亡。当你的体力值≤0时，你可以令一名其他角色进行判定，若结果为♠，则你回满体力；若结果点数为K，则该角色立即死亡并令你失去本技能。",
            "huaxiang":"滑翔",
            "huaxiang_info":"你可以选择一至三项: 1. 跳过判定阶段和摸牌阶段; 2. 跳过出牌阶段并弃置一张装备牌; 3. 跳过弃牌阶段并将你的武将牌翻面。你每选择一项，视为你对一名其他角色使用一张没有距离限制的【杀】，且如果你选择了第三项，则你可以摸五张牌，然后弃置一张手牌，若以此法弃置的是装备牌，则你改为使用之。",

			

            jiuxiner: '九昕儿',
            jiuyin: "酒瘾",
            jiuyu: '酒域',
            haoqin: '豪情',
            haoqin_end: '豪情',
            haoqin_target: '豪情',
            zuimei:'醉美',
            "jiuyin":"酒瘾",
            "jiuyin_info":"你可以将一张手牌当作【酒】使用。",
            "jiuyu":"酒域",
            "jiuyu_info":"出牌阶段限一次，你令【醉美】的摸牌数-1，并令所有角色的手牌中除【杀】以外的牌都视为【酒】，然后你依次与除你外的所有角色对饮【酒】（对饮过程：你先使用一张【酒】, 否则失去1点体力，然后此角色使用一张【酒】，否则失去1点体力。）；此过程结束后，你令除你外的所有角色依次对距离最近的其他角色使用一张【杀】，否则回复1点体力；最后，所有角色手牌视为【酒】的限制解除，你恢复技能【醉美】。",
            'jiuyu_jiu':'酒域',
            "haoqin":"豪情",
            "haoqin_info":"回合结束阶段，你可选择一名其他角色，若如此做，直到你的下回合开始，所有角色对该角色造成的伤害均转移到你身上。",
            "zuimei":"醉美",
            "zuimei_info":"你使用【酒】后可以摸两张牌。你的手牌上限+2。",
            "zuimei2":"醉美",



            chenyingchao: '陈英超',
            nvhao:"女豪",
            haoshuang:"豪爽",
            honglian_chenyingchao:"红缨",
            honglian_binsi_chenyingchao:'红缨',
            dizhong:"敌众",
            "nvhao":"女豪",
            "nvhao_info":"当你失去装备区内的牌后，你可以摸两张牌然后弃置一张手牌，然后若你的下一次伤害未通过此技能加伤，你可以令你下一次造成的伤害+1。",
            "haoshuang":"豪爽",
            "haoshuang_info":"当你使用锦囊牌或任意形式转换的【南蛮入侵】时，你可以摸一张牌。若此牌为基本牌，则你可以弃置之，然后令本回合手牌上限+1。",
            "honglian_chenyingchao":"红缨",
            "honglian_chenyingchao_info":"每回合每个装备栏(武器栏，防具栏，坐骑栏，宝具栏)各限一次，你可以将一个装备栏中的一张装备牌当作【南蛮入侵】使用。当你脱离濒死状态时，你可以视为使用一张【南蛮入侵】。",
            'honglian_binsi_chenyingchao':"红缨",
            "dizhong":"敌众",
            "dizhong_info":"每回合限一次，一名角色使用的【南蛮入侵】结算完成后，你可以摸X张牌（X为受到过此牌伤害的角色数）。",
            
            
            wusheng_wusheng: '无声',
            xiaoyue_wusheng:'啸月',
            shixue:'嗜血',
            'xiaoyue_wusheng':"啸月",
            "xiaoyue_wusheng_info":"锁定技，你计算与其他角色的初始距离-1，当你于回合内使用牌时，你本回合计算与其他角色的距离额外-1。你的回合内，若你至场上所有其他角色的距离均≤1，则当你使用【杀】或普通锦囊牌选择唯一目标后，你选择至多两项：1.为此牌多指定一个目标；2.令此牌无视防具；3.令此牌不可被抵消；4.此牌造成伤害时摸一张牌。",
            "shixue":"嗜血",
            "shixue_info":"一名角色的回合结束时，若你本回合内杀死过角色，则你可以进行一个额外的回合，这一回合中你造成的伤害+1且将所有【杀】视为【雷杀】。",
			"lang_skill_damage_bonus":"嗜血",
            
            
            wangyuling: '王煜灵',
            guao_yuling:'孤傲',
            guanjiang_yuling:'灌江',
            duliang_yuling:'肚量',
            'guao_yuling':"孤傲",
            "guao_yuling_info":"锁定技，结束阶段，若你的手牌数不是全场最少的(或之一)，你须对自己造成一点伤害或减少一点体力上限。",
            'guanjiang_yuling':"灌江",
            "guanjiang_yuling_info":"当你受到1点伤害后，你可以按照你选择的区域优先度随机获得每名其他角色区域里的一张牌，然后你翻面。",
            "duliang_yuling":"肚量",
            "duliang_yuling_info":"弃牌阶段开始时，若你于本回合跳过出牌阶段或在出牌阶段内没有使用或打出过【杀】、【酒】或【桃】中的任意一张牌，则你可以跳过此阶段。",
            guao_hp:'伤害',
			guao_maxHp:'体力上限',


            liyun: '璃韵',
            "meigui_liyun":"玫瑰",
            "meigui_liyun_info":"出牌阶段限两次，你可以选择下列一项并对你攻击范围内的一名其他角色造成2点雷电伤害：1. 失去1点；2. 弃置一张武器牌。伤害结算完成后，若此角色并未死亡，则你失去1点体力。",
            "wushi_liyun":"武士",
            "wushi_liyun_info":"当你使用【杀】指定一名角色为目标后，你可以令该角色的非锁定技失效直到回合结束，然后其弃置一张牌，并令你进行一次判定，除非判定结果与该角色弃置的牌花色相同，否则其不能使用【闪】抵消此【杀】。",
            'wushi_fengyin':'武士',
            'wushi_fengyin_bg':'✙',//'✞',//'✙',
            "luoshen_liyun":'裸身',
            "luoshen_liyun_info":'你濒死时，若你的区域内（判定区、装备区、手牌区）有至少一张牌，你可以弃置你区域内所有牌，将体力回复至1点。',
            "jisu_liyun":"疾袭",
            "jisu_liyun_info":"锁定技，你计算与其他角色的距离时-2。",

            zhurongnv: '祝融女',
            "yuhuo_nv":"浴火",
            "yuhuo_nv_info":"出牌阶段，你可以选择一名角色，你对自己造成1点火焰伤害，若此伤害令你的体力值发生了变化，则你令选择的角色摸两张牌，若此伤害未令你的体力值变化，则此技能本回合失效。",
            "chongsheng_nv":"重生",
            "chongsheng_nv_info":"锁定技，当你扣减1点体力时，若你的体力值为0，你可以将牌堆顶的一张牌置于你的武将牌上，称为【重生】牌：若此牌的点数与你武将牌上的其他【重生】牌均不同，你不会死亡；若你的武将牌上有点数相同的牌，你进入濒死状态；当你回复1点体力时，若你有【重生】牌，则你移除一张。",
            
            lanmengqi: '潘多拉',
            "leinu_lan":"儡奴",
            "leinu_lan_info":"回合开始前，你可以指定一名未拥有“奴”标记的其他角色，令其获得一枚“奴”标记。每轮游戏开始时，你可以指定一名体力值最少或体力值小于你因〖经痛〗获得的牌数且没有“奴”标记的其他角色，令其获得一枚“奴”标记。你死亡时，清除全场的“奴”标记。",
            "jingtong_lan":"经痛",
            "jingtong_lan_info":"锁定技，拥有“奴”标记的角色受到伤害后，你摸一张牌。",
            "minghou_lan":"冥后",
            "minghou_lan_info":"每回合限一次。当你于出牌阶段使用带有「伤害」这一标签的基本牌或普通锦囊牌指定目标后，你可以猜测其中的一个目标的手牌中是否有基本牌，锦囊牌或装备牌。若你猜中的项目数：≥1，此牌对该角色的伤害+1；≥2，你摸两张牌；≥3，你获得技能〖冥祭〗和技能〖嗜灵〗直到下回合开始。",
            "nulian_lan":"奴恋",
            "nulian_lan_info":"出牌阶段限一次，你可以展示自己的一张手牌，然后展示一名拥有“奴”标记的其他角色的至多四张手牌。其展示的牌中：每有一张颜色相同，你摸一张牌；每有一张点数相同，你回复1点体力；一名角色使用基本牌或普通锦囊牌指定你为目标时，若其有“奴”标记，你可以取消之，然后其失去“奴”标记；你使用基本牌或普通锦囊牌仅指定一名角色为目标时，你可以多指定任意名带有“奴”标记的角色为目标，然后其失去“奴”标记。",

            'minghou_lan_mingji': '冥祭',
            "minghou_lan_mingji_info":'当你受到伤害后，你可以获得对你造成伤害的牌并摸一张牌。然后若伤害牌和伤害来源均存在，你可以弃置伤害牌，令伤害来源进行判定，若结果为♠2~9或点数为Q，则其受到无来源的3点雷电伤害。',
            "minghou_lan_shiling":'嗜灵',
			"minghou_lan_shiling_info":'当其他角色死亡后，你可以选择一项：1.免疫一次伤害（若你已经拥有免伤效果，则改为：回复1点体力），2.获得其所有牌，并成为该角色（你当前的体力值和体力上限保持不变）直到本轮结束。若你选择了其中一项，则你与其交换位置。',


            duomingdong: '多名洞',
            "qinyin_duo":'琴音',
            "qinyin_duo_info":"每回合限一次，出牌阶段你可以弃置一张红色手牌，然后选择一名其他角色，令其直到下一个结束阶段之前造成伤害+1或-1。",
            "qinyin_jia_duo":'琴音',
            "qinyin_jia_duo_info":'锁定技，造成伤害+1',
            "qinyin_jian_duo":'琴音',
            "qinyin_jian_duo_info":'锁定技，造成伤害-1',
            "taose_duo":'桃色',
            "taose_duo_info":"每回合限一次，出牌阶段你可以选择X名女性角色，X至多为3，然后你弃置X张牌，令她们依次失去1点体力。",
            "duanxiu_duo":'断袖',
            "duanxiu_duo_info":"锁定技，你无法向男性角色出杀，且男性角色若向你出杀则你不可以闪避；当你受到伤害时，若伤害来源为女性角色，则此伤害-1。",
            "duanxiu_nan_duo":"断袖",
            "duanxiu_nv_duo":"断袖",
            "duanxiu_noSha_duo":"断袖",
            "hualuo_duo":'花落',
            "hualuo_duo_info":"准备阶段，你可以进行判定。若结果为红色，你获得判定牌。你可重复此流程，直到出现黑色的判定结果。",
            'qinyin_jiashang':"令其造成伤害+1",
            'qinyin_jianshang':"令其造成伤害-1",



            tushanzuiyue:'涂山醉月',
            "haoyin_tushan":"豪饮",
            "haoyin_tushan_info":"摸牌阶段，你可以少摸一张牌，然后进行一次判定，你获得此判定牌点数的“尾”印记，若点数≤9，你视为使用了一张【酒】。",
            "tianxian_tushan":"天险",
            "tianxian_tushan_info":"锁定技，你受到伤害时，若此伤害值＞1点，则该伤害改为1点；你拥有技能【豪饮】且“尾”印记数量≤9时，你每回合第一次受到的攻击无法对你造成伤害。",
            "tianxian_shang_tushan":"天险",
            "tianxian_diyi_tushan":"天险",
            "mingding_tushan":"酩酊",
            "mingding_tushan_info":"觉醒技，准备阶段，若你的“尾”印记数量≥9，则移除所有“尾”印记，然后你加1点体力上限，回复满体力，摸九张牌，失去技能【豪饮】，获得技能【九尾】和【眷念】。",
            "jiuwei_tushan":"九尾",
            "jiuwei_tushan_info":"每当你需要使用或打出一张【杀】时，你可以进行一次判定：若判定结果点数≤9，则视为你使用或打出了一张【杀】；你发动【九尾】使用的【杀】无距离限制且此【杀】不计入限制的使用次数；当你受到伤害后，你可以进行一次判定：若判定结果点数≤9，你对伤害来源造成1点伤害；当你造成伤害时，你可以进行一次判定：若判定结果点数≤9，你可以令此伤害+1。",
            "jiuwei_respondSha_tushan":"九尾",
            "jiuwei_useSha_tushan":"九尾",
            "jiuwei_shou_tushan":"九尾",
            "jiuwei_jiashang_tushan":"九尾",
            "juannian_tushan":"眷念",
            "juannian_tushan_info":"锁定技，你每回合使用【杀】的次数不能超过9。",


            zhangning_jiuzi:"涂山宁",
            'linghu_ning': "灵狐",
            'linghu_ning_info':"锁定技，当你每回合第奇数次受到伤害时，你回复1点体力；当你每回合第偶数次受到伤害时，你失去1点体力。",
            'linghu2_ning':'灵狐',
            'husao_ning':"狐骚",
            'husao_ning_info':"出牌阶段每名角色限一次，你可以将任意张手牌交给一名其他角色，若你交给一名角色的手牌数大于该角色的体力值，则该角色翻面；当你失去最后一张手牌时，你可以选择摸两张牌，然后弃置一张手牌。",
            "husao_handout_ning":"狐骚",
            "husao_draw_ning":"狐骚",
            'xuqin_ning':"虚情",
            'xuqin_ning_info':"出牌阶段限一次，你可以弃置两张手牌，令你和一名已受伤的角色各回复1点体力，若如此做，则该角色下个回合开始时失去2点体力。",
            'xuqin_ning_lose':"虚情",
            'huiyi_ning':"悔意",
            'huiyi_ning_info':"限定技，你进入濒死前，你可以选择一名角色，你失去技能【狐骚】，令其获得你所有的牌，然后该角色重置武将牌，从牌堆中摸取4种花色的牌各一张并展示之，加1点体力上限，回复1点体力，并获得技能【狐魂】，然后你立即死亡。若在身份局中且你的身份为【主公】，则你死亡之前与该角色交换身份牌。",
            'linghun_ning':"狐魂",
            'linghun_ning_info':"当你翻面后，你可以摸一张牌。",

            caoxin:"曹信",
            "xinnian_caoxin":"信念",
            "xinnian_caoxin_info":"游戏开始时，你获得1个信印记；当你使用或打出【闪】时，你获得一个信印记，并摸一张牌；当你使用或打出【无懈可击】时，你获得一个信印记，并摸一张牌；你的出牌阶段开始时，你获得场上背面朝上的角色数的信印记。",
            "xinnian_shanwuxie_caoxin":"信念",
            "xinnian_phaseBegin_caoxin":"信念",
            "yinyang_caoxin":"阴阳",
            "yinyang_caoxin_info":"当你从背面翻至正面时，你可以令一名其他角色翻面；准备阶段，你可以选择与一名背面朝上的角色交换手牌；你的回合结束时，你可以选择与一名正面朝上的角色交换装备区内的牌。",
            "yinyang_origin_caoxin":"阴阳",
            "yinyang_shoupai_caoxin":"阴阳",
            "yinyang_zhuangbei_caoxin":"阴阳",
            "bingxian_caoxin":"兵仙",
            "bingxian_caoxin_info":"锁定技，你的回合内，你获得的牌，除了装备牌以外，均会在当前回合的弃牌阶段前置入弃牌堆；你的回合外，当你不因此技能效果获得牌时，摸一张牌。",
            "bingxian_draw_caoxin":"兵仙",
            "bingxian_discard_caoxin":"兵仙",
            "taiji_caoxin":"太极",
            "taiji_caoxin_info":"当你的信印记数量＞0时，你可以发动以下效果：1.当你受到伤害时，若你正面朝上，则你可以弃一个信印记，然后翻面，令此伤害-1，并令伤害来源受到其自己造成的1点相同属性的伤害；2.当你成为【杀】的目标时，若你背面朝上，则你可以弃一个信印记，然后翻面并横置，将此【杀】转移给一名其他角色，可以为此【杀】使用者；3.当你成为装备牌的目标时，若你正面朝上，则你可以获得一个信印记，然后翻面，而后你可以选择令场上任意一名角色（包括你自己）使用这张装备牌；4.当你成为一张伤害类锦囊牌的目标时，若你背面朝上，则你可以获得一个信印记，然后翻面并横置，而后你不再是此牌目标。",
            "taiji1_caoxin":"太极",
            "taiji2_caoxin":"太极",
            "taiji3_caoxin":"太极",
            "taiji4_caoxin":"太极",


            dingya:"丁亚",
            'kuaijiu_ding':"快酒",
            'kuaijiu_ding_info':"当你在决斗中需要打出【杀】时，你可以获得一个狂印记，视为打出了一张【杀】；当你即将受到一次伤害时，你可以获得一个狂印记，令此次伤害值-1；当你即将造成一次伤害时，若你拥有至少1个狂印记，你可以弃一个狂印记，令此次伤害值+1。",
            "kuaijiu_juedou_ding":"快酒",
            "kuaijiu_loseDamage_ding":"快酒",
            "kuaijiu_addDamage_ding":"快酒",
            'kuangyin_ding':"狂饮",
            'kuangyin_ding_info':"其他角色对你使用的非延迟类锦囊牌（包括【借刀杀人】）且你为唯一目标时，若此牌不为【决斗】或【南蛮入侵】，你可以将此牌视为【决斗】。当你决斗时，你的手牌都可以视为【杀】打出。",
            "kuangyin_sha_ding":"狂饮",
            'yujin_ding':"余劲",
            'yujin_ding_info':"锁定技，你的准备阶段，若你有狂印记且数量＜你的体力上限，你清除所有狂印记；若你有狂印记且数量≥你的体力上限且≤你双倍的体力上限，则你进行一次判定：若结果为♥，则清除狂印记；若结果为其他花色或你的狂印记数量＞你双倍的体力上限，则你清除狂印记，并对自己造成狂印记数量的伤害。",
            'yujin_animation_ding':"余劲",
            'fenfen_ding':"忿忿",
            'fenfen_ding_info':"当你受到伤害后，若你正面朝上，你可以翻面，然后摸两张牌；当你翻回正面或脱离濒死时，你可以选择一个角色为目标，视为向其使用了一张【决斗】。",
            'fenfen_juedou_ding':"忿忿",
            'fenfen_damaged_ding':"忿忿",



            caoyan:"曹炎",
            'rongyan_yan':"熔炎",
            'rongyan_yan_info':"你每受到一次伤害，可获得一个炎印记；当你的炎印记数量＞0时，你可以发动以下效果：1.当你即将造成伤害或即将受到伤害时，你可以弃一个炎印记，令此伤害为火焰伤害，若伤害的目标没有横置，则横置该目标；2.一名角色濒死时，若其体力上限＞0，你可以弃一个炎印记令其减一点体力上限，然后回满体力，若该名角色不为你，则你也减一点体力上限。",
            'rongyan_gain_yan':"熔炎",
            'rongyan_huo_yan':"熔炎",
            'rongyan_huo_silent_yan':"熔炎",
            'rongyan_save_yan':"熔炎",
            'longquan_yan':"龙拳",
            'longquan_yan_info':"你的回合内限一次，你使用【杀】指定目标后，你可以弃置手牌区和装备区所有牌，然后摸等量的牌，并令所有其他角色均成为此【杀】的目标，此【杀】结算完后，你翻面。",
            'yuzhong_yan':"愚忠",
            'yuzhong_yan_info':"锁定技，你的判定牌不能被无效或修改；你做主公时，不增加体力上限；你即将对一名角色造成伤害时，若你正面朝上，则你摸一张牌，若你背面朝上，该角色摸一张牌，若该角色背面朝上，则此伤害无效，改为令其从背面翻回正面；当你受到伤害时：1.若来自锦囊牌，此伤害+1；2.若伤害非卡牌伤害，此伤害-1；3.若为火焰伤害，且你为铁索传导的起点，则此伤害+1。",
            'yuzhong_zhu_yan':"愚忠",
            'yuzhong_fix_yan':"愚忠",
            'yuzhong_panding_yan':"愚忠",
            'yuzhong_attack_yan':"愚忠",
            'yuzhong_damage_yan':"愚忠",
            'fanyou_yan':"泛友",
            'fanyou_yan_info':"当你从背面翻回正面时，你可以横置一名角色；当你即将受到伤害时，你可以选择至多X名角色，令其中横置的角色解除横置，未横置的角色则将其横置，X为你当前的体力值；当你一次性获得至少两张牌时，你可以选择一名其他角色，将至少两张牌交给此角色，然后你摸一张牌，若你给出的牌数＞你的体力值，你回复一点体力并翻面。",
            'fanyou_turnover_yan':"泛友",
            'fanyou_damage_yan':"泛友",
            'fanyou_give_yan':"泛友",

            quanjinfa:"全金发",
            'mingcha_quan':"明察",
            'mingcha_quan_info':"锁定技，你所有黑杀的花色皆视为♦；你使用的非延时锦囊牌不能被【无懈可击】响应；当一名角色使用或打出【无懈可击】时，你摸一张牌；当你成为其他角色使用非延迟锦囊牌的目标时，若此牌颜色不为黑色，则此牌对你无效然后你摸一张牌。",
            'mingcha_sha_quan':"明察",
            'mingcha_trick_quan':"明察",
            'mingcha_disable_quan':"封无懈",
            'mingcha_wuxie_quan':"明察",
            'mingcha_heitrick_quan':"明察",
            'xianfu_quan':"贤辅",
            'xianfu_quan_info':"一名角色的结束阶段，若此角色之前的回合内跳过了摸牌阶段和出牌阶段，则你可以弃两张牌，使其进行一个额外的回合；当一名角色从背面翻至正面时，你可以弃两张牌，使其本回合结束后进行一个额外的回合。",
            "xianfu_addPhase_quan":"贤辅",
            'zhongcheng_quan':"忠诚",
            'zhongcheng_quan_info':"你的弃牌阶段结束时，你可以选择一名角色，直到你的下一个弃牌阶段开始前，其都拥有【忠】印记；你的结束阶段，你将手牌数调整至与拥有【忠】的角色相同；其结束阶段，将手牌数调整至与你相同；你或其受到伤害时，若此伤害值＞1，则另一方可以选择流失一点体力，使此伤害无效。",
            
            
            meixian:"玫贤",
            'dutian_mei':"赌天",
            'dutian_mei_info':"出牌阶段限一次，你可以选择两张手牌，并选择至多三名有至少两张手牌的其他角色，然后这些角色分别选择两张手牌；接着你从牌堆顶翻出两张【公牌】，展示并放回牌堆顶，公牌的花色和点数不受玩家技能影响；然后你和其他被选中角色分别展示自己选择的牌，每名角色分别用自己展示的牌与公牌组合；【赌天点数】总和最大者为赢家，获得其他参与者所有手牌，其余参与者为输家，每位输家分别对自己造成1点伤害。",
            'dutian_rule_mei':"赌天点数计算规则：",
            'dutian_rule_mei_info':"每张牌的赌天点数 = 牌面点数 + 花色点数；花色点数：♠：+4，♥：+3，♦：+2，♣：+1；4张牌花色相同为【同花】，赌天点数+100；4张牌点数相同为【豹子】，赌天点数+120；4张牌为【顺子】（牌面点数可组成等差数列），赌天点数+100；4张牌为【梅花鹿】（♣A，♣2，♣3，♣4），赌天点数+120；4张牌为【方天戟】（♦A，♦2，♦3，♦4），赌天点数+200；4张牌为【红皇后】（♥A，♥2，♥3，♥4），赌天点数+500；4张牌为【黑Jack】(♠A，♠2，♠3，♠4)，赌天点数+1000。【赌天点数】相等时，先展示手牌者优先获胜。",
            'dutian_mei_nan':"赌天",
            'dutian_mei_nan_info':"出牌阶段限一次，你可以选择两张手牌，并选择至多三名有至少两张手牌的其他角色，然后这些角色分别选择两张手牌；接着你从牌堆顶翻出两张【公牌】，展示并放回牌堆顶，公牌的花色和点数不受玩家技能影响；然后你和其他被选中角色分别展示自己选择的牌，每名角色分别用自己展示的牌与公牌组合；【赌天点数】总和最大者为赢家，获得其他参与者所有手牌，其余参与者为输家，每位输家分别对自己造成1点伤害。",
            'mantian_mei':"瞒天",
            'mantian_mei_info':"锁定技，你的♥和♣都视为♠；你对自己造成伤害后，或你受到＞1点的雷属性伤害后，亦或弃牌阶段前你跳过了摸牌阶段或出牌阶段：你立刻回满体力，并进行一次判定，若结果为♠，则你跳过下一个弃牌阶段，并观看牌堆顶的两张牌，然后将这些牌交给任意角色。",
            'mantian_recover_mei':"瞒天",
            'mantian_skip_mei_bg':'✡',
            'mantian_mei_nan':"瞒天",
            'mantian_mei_nan_info':"锁定技，你的♥和♣都视为♠；你对自己造成伤害后，或你受到＞1点的雷属性伤害后，亦或弃牌阶段前你跳过了摸牌阶段或出牌阶段：你立刻回满体力，并进行一次判定，若结果为♠，则你跳过下一个弃牌阶段，并观看牌堆顶的两张牌，然后将这些牌交给任意角色。",
            'mantian_recover_mei_nan':"瞒天",
            'mantian_skip_mei_nan_bg':'✡',
            'xinruan_mei':"心软",
            'xinruan_mei_info':"锁定技，一名其他角色对自己造成伤害后，你也对自己造成等量伤害；你濒死时，其他角色的【酒】和♠花色的手牌也可以视为【桃】，对你使用。",
            'zuiai_mei':"醉爱",
            'zuiai_mei_info':"限定技，当一名男性角色使用【桃】或【酒】或♠牌令你脱离濒死状态时，你可以选择令其获得技能【赌天】，然后你减一点体力上限，失去技能【瞒天】并废除判定区。若此角色使用的牌包含【酒】或♠牌或其拥有技能【精怪】，则其额外获得技能【瞒天】。",
            
            lenyue:"冷月",
            "jianyu_len":"剑雨",
            "jianyu_len_info":"每回合每名角色限一次，当一名其他角色获得你的牌后，你可以对其造成1点雷电伤害。",
            "yinzhen_len":"饮鸩",
            "yinzhen_len_info":"你濒死时，若你的体力上限＞3，你可以减1点体力上限，将体力回复至1点，然后将手牌数摸至体力上限。",
            "duoqin_len":"多情",
            "duoqin_len_info":"当你使用的锦囊牌置入弃牌堆后，你可以选择一名其他角色，你从弃牌堆获得此牌并将之交给此角色；当一名角色受到雷电伤害后，你可以令其失去1点体力，或回复1点体力，然后你也跟着失去或回复1点体力；当你成为其他角色使用普通锦囊牌的唯一目标时，若此牌颜色为黑色，则你可以将其视为【雷杀】，且此【杀】计入此角色本回合使用次数。",
            'duoqin_thunder_gain':"回复1点体力",
            'duoqin_thunder_lose':"失去1点体力",
            'zhuxing_len':"助兴",
            'zhuxing_len_info':"当一名角色于其出牌阶段内使用【杀】时，你可以弃置一张牌，令此【杀】不计入出牌阶段的使用次数，然后若此【杀】为雷杀，你摸一张牌；你受到1点雷电伤害后，可以摸三张牌，然后将至多三张牌交给任意角色。",
            
            
            lenenda:"冷恩达",
            "anmou_enda":"暗谋",
            "anmou_enda_info":"锁定技，当你摸牌时，改为从牌堆底摸牌；当你失去牌进入弃牌堆时，你改为将牌置于牌堆顶，每轮第一次你置于牌堆顶的牌点数≤你的体力值时，此牌被标记为【暗谋】牌，并展示，若之前标记过【暗谋】牌，则之前的标记作废；当一名其他角色获得你标记的【暗谋】牌时，其展示此牌并受到你造成的3点雷电伤害，然后你移去此牌的【暗谋】标记。",
            "kezheng_enda":"苛政",
            "kezheng_enda_info":"一名其他角色的回合结束阶段，若其手牌数多于你，则你可以选择一项：1.令其交给你一张手牌，2.流失1点体力并令其将手牌数弃至与你相同；一名角色的回合结束阶段开始时，若其手牌数为0，则你可以令其摸一张牌。",
            'kezheng_draw_enda':"苛政",
            "roufa_enda":"肉伐",
            "roufa_enda_info":"每回合出牌阶段限一次，你可以指定一名角色，然后令所有女性角色选择一项：1.对指定的角色使用【杀】，2.你获得她一张牌。",
            'cangxin_enda':"藏心",
            'cangxin_enda_info':"锁定技，游戏开始时，你摸一张牌，并将一张手牌背面朝上置于武将牌上，称为【心】；当你有【心】时，雷电伤害对你无效，当你的体力值＜体力上限并受到伤害时，若非卡牌伤害或伤害牌的花色与【心】不同，则此伤害对你无效，若伤害牌花色与【心】相同，则你受到的伤害+1；你第一次在体力值＜体力上限时受到伤害后，你展示【心】，并将【心】正面朝上；当你濒死时，若你的手牌中没有【桃】或【酒】，则你失去【心】，并将体力回复至1点，然后你失去此技能。",
            'cangxin_start_enda':'藏心',
            'cangxin_end_enda':'藏心',
            'cangxin_damage_enda':'藏心',


            shuimiaoer:"水淼儿",
            "bihai_shui":"碧海",
            "bihai_shui_info":"锁定技，火焰伤害对你无效。一名角色受到火焰伤害时，若伤害值＞1则-1；一名角色受到雷电伤害时，若伤害值≤1则+1。",
            "bihai_fire_shui":"碧海",
            "chengneng_shui":"逞能",
            "chengneng_shui_info":"出牌阶段限两次，若你的手牌上限＞0，你可以令自己本回合手牌上限-1，视为使用一张【酒】，然后你选择一项：1.视为使用一张【杀】，2.令本回合出杀次数+1。出牌阶段结束时，若你本回合发动过技能【逞能】，则你对自己造成X点伤害（X为你本回合发动【逞能】的次数）。",
            'chengneng_lose_shui':"逞能",
            "yilian_shui":"依恋",
            "yilian_shui_info":"准备阶段，你可以选择一名女性角色，成为【依恋】，直到你的下个准备阶段；你和【依恋】对象之一回复体力时，另一方也回复等量体力；你和【依恋】对象之一的弃牌阶段结束时，另一方可以获得此阶段弃置的所有牌。",
            yilian_target_recover_shui:'依恋',
            "baihe_shui":"百合",
            "baihe_shui_info":"锁定技，你成为【桃】的目标时，若使用者是女性，则你额外回复1点体力；你每回合第一次造成伤害时，若受伤角色是男性则造成伤害+1；你成为伤害类锦囊牌的目标时，若使用者是男性，则你将自己从此牌目标中移除，然后你以此牌使用者为唯一目标使用此张锦囊牌。",
            "baihe_nv_shui":"百合",
            "baihe_nan_shui":"百合",

            jinshouzhen:"金守珍",
            "lashou_jin":"辣手",
            "lashou_jin_info":"当一名其他女性角色受到【杀】造成的伤害之后，你可以立刻向其使用一张无视距离的【杀】。当一名角色流失体力后，你可以立刻弃一张【桃】或【酒】，令其流失1点体力。你对一名角色造成伤害之前，你可以防止此伤害，并令其流失1点体力。",
            "lashou_sha_jin":"辣手",
            "lashou_loseHp_jin":"辣手",
            "lashou_jueqing_jin":"辣手",
            "chengting_jin":"撑挺",
            "chengting_jin_info":"锁定技，你手牌中的装备牌除了坐骑牌以外都视为【杀】；你手牌中的延迟锦囊牌都视为【酒】；你回满体力时，若你的体力上限>1，则你弃置所有装备区的牌，然后与你距离为1的其他角色将手牌数弃至与其体力值相同。",
            "chengting_sha_jin":"撑挺",
            "chengting_taojiu_jin":"撑挺",
            "baoshi_jin":"暴食",
            "baoshi_jin_info":"出牌阶段结束时，你可以弃置所有手牌，令其他角色计算与你的距离-1直到你下回合开始，然后你获得所有角色场上的牌（判定区和装备区），你增加X点体力上限（X = 你弃置的手牌数 + 你获得的场上牌数），并回满体力。",
            "ouni_jin":"呕逆",
            "ouni_jin_info":"锁定技，准备阶段，若你的体力上限＞1且有手牌，则你选择一名其他角色，将所有手牌交给该角色，令其非锁定技失效直到本回合结束；然后若你的体力上限＞1，则将体力上限减为1，摸取体力上限变化数量的牌并在本回合获得技能【肚量】。",

            
            wangyueheng:"王月蘅",
            'yujiu_heng':"浴酒",
            'yujiu_heng_info':"你可以将一张装备区的牌当作【酒】使用。你使用【酒】后，若你的判定区和装备区没有被完全废除，且本轮还未通过此技能获得效果，你可以弃置装备区所有牌并废除判定区或一个装备区，然后你于本轮获得【浴酒】锁定效果：你本轮手牌上限 = 体力上限 + 已损失体力值，且当你本轮体力值变化后：1.若你的体力值≠0且＜你的体力上限-1，你不进入濒死直接回满体力；2.若你的体力值＝体力上限且你的体力上限≠1，你流失1点体力并令本轮每回合出杀次数+1。",
            'yujiu_equip_heng':'浴酒',
            'yujiu_hp_heng':'浴酒',
            'yini_heng':"旖旎",
            'yini_heng_info':"出牌阶段，你可以将一张装备牌置于一名其他角色装备区里，然后摸一张牌；每回合第一次发动【旖旎】置入装备后，本回合你计算与其他角色的距离时-1。回合结束阶段，你可以选择一名本回合发动过【旖旎】置入装备的角色，直到你的下回合开始，当该角色受到＞1点的伤害时，防止此伤害，然后若这是本局游戏首次，你增加1点体力上限，回满体力，并将摸牌阶段永久改为：选择一名其他角色，令其摸两张牌。",
            'yini_target_heng':'旖旎',
            'yini_animation_heng':'旖旎',
            'wenshi_heng':"吻噬",
            'wenshi_heng_info':"一名其他角色弃牌阶段开始时，若其手牌数高于体力值，你可以令其交给你X张牌，然后其回复X点体力，你流失X点体力（X为其手牌数与体力值之差）。",
            'zuizhao_heng':"醉沼",
            'zuizhao_heng_info':"锁定技，其他角色出牌阶段结束时，若此阶段有四种花色进入过弃牌堆，你展示弃牌堆中四种花色的牌各一张，将其中能使用的装备牌置于你的装备区，获得其他牌，并将体力值流失至1点，然后在此回合结束后获得一个额外的回合。",
            'zuizhao_addPhase_heng':'醉沼',


            dongxiaorong:"董笑蓉",
            'qianshang_dong':"千觞",
            'qianshang_dong_info':"每回合限一次，你的回合内，你使用【决斗】指定目标后，可以流失体力至1点，并令所有其他角色均成为此【决斗】的目标。此【决斗】结算完后，每名其他受伤角色依次选择是否与你共同回复1点体力并令你获得其区域内任意一张牌。",
            'yexing_dong':"野性",
            'yexing_dong_info':"锁定技，若你的体力值：≤3，你拥有技能【并腿】；≤2，你拥有技能【猎酒】；≤1，你拥有技能【象酌】。",
            'aozun_dong':"傲樽",
            'aozun_dong_info':"当你使用【杀】指定目标后，你可以将此牌视为【决斗】并继承此【杀】的伤害值。当你需要打出【杀】时，你可以观看牌堆底四张牌，若其中有【杀】，你可以选择其中一张【杀】打出，若其中没有【杀】，你可以获得这四张牌中的一张并将剩余三张牌置于牌堆顶。",
            'aozun_respond_dong':"傲樽",
            bingtui_dong:"并腿",
            bingtui_dong_info:"锁定技，当你每回合非首次受到伤害时，若你有手牌，你弃置所有手牌并防止此伤害，然后若你弃置的手牌数大于伤害值，你摸取两者之差数量的牌，若在你的回合内，你再摸伤害值两倍数量的牌。",
            liejiu_dong:"猎酒",
            liejiu_dong_info:"你的回合外，当你受到其他角色的伤害后，若存在伤害来源，你可以观看其手牌，若其中有【杀】或【酒】，你可以获得其中一张【杀】或【酒】并视为对伤害来源使用了一张【决斗】。",
            xiangzhuo_dong:"象酌",
            xiangzhuo_dong_info:"锁定技，你【决斗】时，【决斗】双方第1次响应此【决斗】需打出1张【杀】，第2次响应需额外打出1张【杀】，第3次响应需额外打出2张【杀】，第4次响应需额外打出3张【杀】，以此类推，直到【决斗】中的一方在需要额外打出X张【杀】响应此【决斗】时未成功打出足够的【杀】为止，然后其受到【决斗】另一方造成的伤害额外+X。",
            xiangzhuo_sha:"象酌",


            kaer:"卡尔",
            "muniu_kaer":"牧牛",
            "muniu_kaer_info":"每名角色的准备阶段，若你没有【牛】，则你可以将任意张手牌（至少一张）置于武将牌上，称为【牛】。每名角色结束阶段，你可以将【牛】转移至一名没有【牛】的角色武将牌上。",
            'muniu_start_kaer':"牧牛",
            'muniu_share_kaer':"牧牛",
            "tongzhen_kaer":"童真",
            "tongzhen_kaer_info":"锁定技，你使用一张牌后，若你有【牛】，则摸一张牌并移去【牛】中一张牌，若你的手牌数不是唯一最多，则改为摸X张牌（X为【牛】中牌的数量）；拥有【牛】的角色受到伤害之后，获得一张【牛】中的牌；拥有【牛】的角色造成伤害之后，受到伤害的角色获得一张【牛】中的牌；当一名角色【牛】中的最后一张牌移去后，你将手牌数补至与体力值相等，并与该角色各回复1点体力，然后其失去【牛】。你死亡时，移除全场所有【牛】。",
            tongzhen_draw_kaer:"童真",
            tongzhen_damage_kaer:"童真",
            tongzhen_attack_kaer:"童真",
            tongzhen_recover_kaer:"童真",
            "yuanzhu_kaer":"源助",
            "yuanzhu_kaer_info":"每回合限一次，当有角色濒死时，你可以弃置任意角色【牛】中的一张牌，视为你对濒死角色使用了一张【桃】。",
            "yanhua_kaer":"烟花",
            "yanhua_kaer_info":"出牌阶段限，你可以弃置所有【牛】，然后选择至多X名角色（X为弃置【牛】中的总牌数），对每名选中的角色造成1点火焰伤害。",

            kalala:"卡拉拉",
            'quanjiu_lala':"劝酒",
            'quanjiu_lala_info':"一名角色的回合开始时，你可以弃置一张手牌，然后该角色视为使用一张【酒】，若该角色不是你，其对自己造成1点伤害并于本回合获得技能【纵酒】。",
            'leyin_lala':"乐饮",
            'leyin_lala_info':"锁定技，一名角色使用【酒】后，你摸一张牌。",
            'lingyu_lala':"囹圄",
            'lingyu_lala_info':"锁定技，你始终跳过出牌阶段。当你的牌被弃置或被其他角色获得后，你摸取失去牌一半数量的牌（向上取整）。当你受到伤害时，若非属性伤害且非锦囊牌造成的伤害，此伤害无效。",
            'dunsheng_lala':"遁生",
            'dunsheng_lala_info':"限定技，一名角色的回合结束后，若牌堆剩余牌数≤你体力值的十倍，则你失去技能【囹圄】，回满体力，并获得一个额外的回合，若场上没有角色“陈英超”，则你于此回合内化身为“陈英超”（本技能锁定发动）。",
            'zongjiu_lala':"纵酒",
            'zongjiu_lala_info':"锁定技，当你满足以下条件之一时，你流失1点体力并视为使用一张【酒】：1.使用一张锦囊牌后，2.将牌移至游戏外后。",

            hanshou:"韩寿",
            'weiyi_shou':"逶迤",
            'weiyi_shou_info':"当你受到其他角色的伤害时，若伤害值≥你的体力值且你拥有至少两个技能，则你可以选择自己除本技能以外的一个技能，你失去这个技能，令伤害来源于本轮获得这个技能，然后你防止此伤害并获得伤害来源所有手牌。",
            'huitong_shou':"礼贿",
            'huitong_shou_info':"当你受到其他角色造成的X点伤害时，若你拥有的牌数≥X，你可以令其观看你选择的至少X张牌并令其选择一项：1.获得其中的X张牌，防止此伤害，然后此技能本回合失效；2.令你获得其Y张牌（Y为你展示的牌数）。",
            'fuyao_shou':"富耀",
            'fuyao_shou_info':"你受到伤害之后，可以展示一张手牌，除非伤害来源弃置X张牌，否则你回复1点体力（X为此牌牌名字数）。",
            'jibian_shou':"机变",
            'jibian_shou_info':"一名角色的判定牌生效前，你可以选择一张手牌，失去一点体力并摸一张牌，然后打出选择的牌替换判定牌，若你打出的牌是梅花♣，则你再摸一张牌，若你打出的牌是红桃♥，则你回复1点体力。当一名体力值＞0的其他角色回复体力之前，若没有角色濒死且你已受伤，你可以弃一张牌，令此回复转移至你身上。",

            yawen:"雅雯",
            'langnv_yawen':"狼女",
            'langnv_yawen_info':"每回合每名角色限一次，当你获得一名其他角色的牌后，你可以对其造成1点伤害。",
            'nvfei_yawen':"女匪",
            'nvfei_yawen_info':"当你摸牌时，你可以选择少摸任意张牌，并获得等量的其他角色的各一张牌。",
            'hanbian_yawen':"寒变",
            'hanbian_yawen_info':"觉醒技，一名角色的回合结束后，若你的体力值为1，你减1点体力上限，然后获得技能【皇血】，并获得一个额外的回合。",
            'huanglang_yawen':"皇血",
            'huanglang_yawen_info':"锁定技，你的手牌上限为0。你始终跳过每回合的摸牌阶段。当你的手牌数＜X时，你将手牌摸至X张（X为你已损失的体力值）。",

            banggu_s:"邦古",
            "yewang_gu":"野望",
            "yewang_gu_info":"每回合每项限一次，当你成为其他角色使用牌的目标后，若其体力值：大于你，你观看牌堆顶四张牌；等于你，你观看牌堆顶三张牌；小于你，你观看牌堆顶两张牌。你选择其中任意张花色相同的牌获得并展示之，然后本回合与之花色相同的牌对你造成的伤害无效。",
            "gushi_gu":"古石",
            "gushi_gu_info":"每名角色的准备阶段，你可以记录一个未被记录的基本牌或锦囊牌的名称并扣置一张牌，称为“古石”。当其他角色使用牌时，你可以移去一张记录名称相同的“古石”，令此牌无效，然后此角色获得“古石”牌，你获得此角色使用的牌。",
            gushi_gu_bg:'石',
            "kuanglie_gu":"狂烈",
            "kuanglie_gu_info":"出牌阶段限一次，你可以用一张手牌与至多三名角色同时拼点，然后依次结算拼点结果，若你赢，则你获得技能【暴怒】直到你下回合开始，然后没赢的角色选择一项：1.受到你造成的1点火焰伤害；2.令你流失1点体力。你与最后一名角色拼点结束后，参与拼点的存活角色收回拼点牌。",
            baonu_gu:'暴怒',
            baonu_gu_info:'锁定技，你的手牌上限等于体力上限。当你回复体力后，若你的体力值大于1，你失去1点体力。当你失去1点体力后，你摸三张牌，然后若此时是你的回合外，你改为摸五张牌，若此时是你的回合内，你本回合：所有【杀】都视为【火杀】、使用红色【杀】无距离限制、使用【杀】的次数上限+1。',


            guidouzi_z:'鬼斗子',
            'zhenjiu_gui':"斟酒",
            'zhenjiu_gui_info':"锁定技，当其他玩家使用【杀】指定你为目标或你使用【杀】指定其他角色为目标时，【杀】的使用者需额外弃掉一张基本牌并视为在出杀前使用了一张【酒】，否则此【杀】无效。你进入濒死时，若你有“星”，则你失去一个“星”视为使用了一张【酒】。",
            'zhenjiu_target_gui':"斟酒",
            'zhenjiu_player_gui':"斟酒",
            'zhenjiu_dying_gui':"斟酒",
            'qixing_gui':"七星",
            'qixing_gui_info':"锁定技，游戏开始时，你获得X个“星”，你的手牌上限增加“星”的数量（X为全场女性角色数+1且至多为7）。当你失去最后一个“星”后，你失去技能【七星】，获得技能【孑然】。",
            'qixing_end_gui':'七星',
            'yunv_gui':"驭女",
            'yunv_gui_info':"当你需要使用【闪】、打出【杀】或【闪】时，你可以令其他女性角色选择是否打出一张【杀】或【闪】（视为由你使用或打出）。你可以跳过出牌阶段，然后弃牌阶段开始时，你可以弃置一张手牌，并可以选择一名有牌的女性角色，令她交给你一张牌并获得一个额外的回合，当其于此额外回合内造成伤害之后，你摸一张牌；然后你可以将弃置的手牌置于一名没有【驭】的女性角色武将牌上，称为【驭】，其与【驭】同类型的卡牌将无法使用或打出，若其使用与【驭】同类型的牌则无效；该角色受伤时，或于弃牌阶段弃置至少两张与【驭】同类型的牌后，将【驭】置入弃牌堆。",
            'yunv_shashan_gui':'驭女',
            'yunv_givePhase_gui':'驭女',
            'yunv_kong_gui':'驭女',
            'jieran_gui':'孑然',
            'jieran_gui_info':'限定技，准备阶段，你可以令一名其他角色的非锁定技失效。此角色每回合结束阶段开始时，其视为对你使用X张无视距离的【杀】(X为其技能已失效的回合数)。你死亡时，此角色重新获得失效的技能。',
            'jieran_gui_bg':'☯',
            'jieran_sha':'孑然',
            'jieran_fengyin_bg':'孑',


            moke:"摩可",
            moke2:"摩可",
            'yanyin_moke':'烟瘾',
            'yanyin_moke_info':'锁定技，你使用或打出牌后，你摸一张牌，然后弃一张牌。',
            'yanyin_give_moke':'烟瘾',
            'ningwu_moke':'凝雾',
            'ningwu_moke_info':'锁定技，当一名其他角色使用牌指定你为目标后，若其与你的距离大于1，你进行一次判定，若结果大于此牌的点数（若无点数则视为0），此牌对你无效。当你受到伤害后，你本回合获得技能【虚隐】。',
            'xuyin_moke':'虚隐',
            'xuyin_moke_info':'当一名角色使用牌指定你为目标时，若存在不为此牌的目标且不为此牌使用者的角色，你可以选择与符合条件的一名角色交换位置，然后其代替你成为此牌目标。',
            'xinghuo_moke':'星火',
            'xinghuo_moke_info':'觉醒技，准备阶段，若你或其他角色通过技能【烟瘾】累计获得的总牌数≥8，则你获得技能【燎原】和【浓烟】。',
            'liaoyuan_moke':'燎原',
            'liaoyuan_moke_info':'锁定技，你的回合内，你因摸牌且并非因发动此技能而得到牌时，你摸一张牌。',
            'nongyan_moke':'浓烟',
            'nongyan_moke_info':'锁定技，出牌阶段，你使用牌后，你本回合计算与其他角色的距离+1且至多+8。',
            'huozhong_moke':'火种',
            'huozhong_moke_info':'一名其他角色的出牌阶段，该角色在本阶段使用的第一张牌结算后，你可以弃置一张牌，令其获得技能【烟瘾】直到回合结束。',
            
            
            tongxin:"彤欣",
            "fengru_tong":"丰乳",
            "fengru_tong_info":"丰乳",
            "tunfei_tong":"臀肥",
            "tunfei_tong_info":"锁定技，当你受到牌造成的伤害时，若伤害来源为男性角色且此牌为黑色，则伤害来源摸一张牌；否则你摸一张牌。",


            monian:"墨念",
            "lanyong_mo":"懒慵",
            "lanyong_mo_info":"当你成为带有「伤害」这一标签的牌的目标后，你可以声明一种未以此法声明过的基本牌或锦囊牌的牌名，令使用者选择一项：1.弃置一张你声明的牌，并摸X张牌（X为你申明的牌名的字数）；2.令此牌对你无效。当你于出牌阶段使用第一张牌时，你可令此牌的牌名视为未通过此技能声明过。",
            "lanyong_refresh_mo":'懒慵',
            "sanman_mo":"散漫",
            "sanman_mo_info":"每轮开始时，你可以选择一名角色，令其本轮的回合：1.摸牌阶段摸牌数+2，2.出牌阶段使用【杀】次数上限+2，3.手牌上限+2；若如此做，则你本轮的回合：1.摸牌阶段摸牌数-1，2.出牌阶段使用【杀】次数上限-1，3.手牌上限-1。",
            "shuaixing_mo":"率性",
            "shuaixing_mo_info":"准备阶段，你可以令所有受到【散漫】效果影响的其他角色与你交换对应的【散漫】效果，然后此技能失效直到一名角色死亡。",

            
            yuner:"允儿",
            "yuner_shiyan":"试验",
            "yuner_shiyan_info":"摸牌40并获得一个回合",
            "yuner_shiyan_pai":"摸牌40",
            "yuner_shiyan_pai_info":"摸牌40",
            "yuner_selfDamage":"打人",
            "yuner_selfDamage_info":"打人",
            "yuner_reinit":"变身",
            "yuner_reinit_info":"变身",
            "yuner_reinitHp9":"变身9",
            "yuner_reinitHp9_info":"变身9",
            "yuner_fanmian":"翻面",
            "yuner_fanmian_info":"翻面",


            caiyang:'蔡阳',
            yinka:'印卡',



		},
	};
});
