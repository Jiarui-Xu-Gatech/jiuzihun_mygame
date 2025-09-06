'use strict';
game.import('card',function(lib,game,ui,get,ai,_status){
	return {
		name:'jiuzihunCard',
		connect:true,
		card:{
			damage:{
				ai:{
					result:{
						target:-1.5
					},
					tag:{
						damage:1
					}
				}
			},
			recover:{
				ai:{
					result:{
						target:1.5
					},
					tag:{
						recover:1
					}
				}
			},
			firedamage:{
				ai:{
					result:{
						target:-1.5
					},
					tag:{
						damage:1,
						fireDamage:1,
						natureDamage:1,
					}
				}
			},
			thunderdamage:{
				ai:{
					result:{
						target:-1.5
					},
					tag:{
						damage:1,
						thunderDamage:1,
						natureDamage:1,
					}
				}
			},
			respondShan:{
				ai:{
					result:{
						target:-1.5,
					},
					tag:{
						respond:1,
						respondShan:1,
						damage:1
					}
				}
			},
			sha:{
				audio:true,
				fullskin:true,
				nature:['thunder','fire','kami'],
				type:'basic',
				enable:true,
				usable:1,
				range:{attack:1},
				selectTarget:1,
				filterTarget:function(card,player,target){return player!=target},
				content:function(){
					"step 0"
					if(typeof event.shanRequired!='number'||!event.shanRequired||event.shanRequired<0){
						event.shanRequired=1;
					}
					if(typeof event.baseDamage!='number') event.baseDamage=1;
					if(typeof event.extraDamage!='number') event.extraDamage=0;
					"step 1"
					if(event.directHit||event.directHit2||(!_status.connectMode&&lib.config.skip_shan&&!target.hasShan())){
						event._result={bool:false};
					}
					else if(event.skipShan){
						event._result={bool:true,result:'shaned'};
					}
					else{
						var next=target.chooseToUse('请使用一张【守】响应【冲】');
						next.set('type','respondShan');
						next.set('filterCard',function(card,player){
							if(get.name(card)!='shan') return false;
							return lib.filter.cardEnabled(card,player,'forceEnable');
						});
						if(event.shanRequired>1){
							next.set('prompt2','（共需使用'+event.shanRequired+'张【守】）');
						}
						next.set('ai1',function(card){
							var target=_status.event.player;
							var evt=_status.event.getParent();
							var bool=true;
							if(_status.event.shanRequired>1&&!get.is.object(card)&&target.countCards('h','shan')<_status.event.shanRequired){
								bool=false;
							}
							else if(target.hasSkillTag('useShan')){
								bool=true;
							}
							else if(target.hasSkillTag('noShan')){
								bool=false;
							}
							else if(get.damageEffect(target,evt.player,target,evt.card.nature)>=0) bool=false;
							if(bool){
								return get.order(card);
							}
							return 0;
						}).set('shanRequired',event.shanRequired);
						next.set('respondTo',[player,card]);
						//next.autochoose=lib.filter.autoRespondShan;
					}
					"step 2"
					if(!result||!result.bool||!result.result||result.result!='shaned'){
						event.trigger('shaHit');
					}
					else{
						event.shanRequired--;
						if(event.shanRequired>0){
							event.goto(1);
						}
						else{
							event.trigger('shaMiss');
							event.responded=result;
						}
					}
					"step 3"
					if((!result||!result.bool||!result.result||result.result!='shaned')&&!event.unhurt){
						target.damage(get.nature(event.card),event.baseDamage+event.extraDamage);
						event.result={bool:true}
						event.trigger('shaDamage');
					}
					else{
						event.result={bool:false}
						event.trigger('shaUnhirt');
					}
				},
				ai:{
					basic:{
						useful:[5,1],
						value:[5,1],
					},
					order:function(item){
						if(_status.event.player.hasSkillTag('presha',true,null,true)) return 10;
						if(lib.linked.contains(get.nature(item))) return 3.1;
						return 3;
					},
					result:{
						target:function(player,target,card,isLink){
							if (get.tag(card,'fireDamage')&&target.hasSkillTag('nofire')){
								return 0;
							}
							if (get.tag(card,'thunderDamage')&&target.hasSkillTag('nothunder')){
								return 0;
							}
							if (get.tag(card,'poisonDamage')&&target.hasSkillTag('nopoison')){
								return 0;
							}
							if(!isLink&&player.hasSkill('jiu')){
								if(!target.hasSkillTag('filterDamage',null,{
									player:player,
									card:card,
									jiu:true,
								})){
 								if(get.attitude(player,target)>0){
 									return -7;
 								}
 								else{
 									return -4;
 								}
								}
								return -0.5;
							}
							return -1.5;
						},
					},
					tag:{
						respond:1,
						respondShan:1,
						damage:function(card){
							if(card.nature=='poison') return;
							return 1;
						},
						natureDamage:function(card){
							if(card.nature) return 1;
						},
						fireDamage:function(card,nature){
							if(card.nature=='fire') return 1;
						},
						thunderDamage:function(card,nature){
							if(card.nature=='thunder') return 1;
						},
						poisonDamage:function(card,nature){
							if(card.nature=='poison') return 1;
						}
					}
				}
			},
			shacopy:{
				ai:{
					basic:{
						useful:[5,1],
						value:[5,1],
					},
					order:3,
					result:{
						target:-1.5,
					},
					tag:{
						respond:1,
						respondShan:1,
						damage:function(card){
							if(card.nature=='poison') return;
							return 1;
						},
						natureDamage:function(card){
							if(card.nature) return 1;
						},
						fireDamage:function(card,nature){
							if(card.nature=='fire') return 1;
						},
						thunderDamage:function(card,nature){
							if(card.nature=='thunder') return 1;
						},
						poisonDamage:function(card,nature){
							if(card.nature=='poison') return 1;
						}
					}
				}
			},
			shan:{
				audio:true,
				fullskin:true,
				type:'basic',
				cardcolor:'red',
				notarget:true,
				nodelay:true,
				content:function(){
					event.result='shaned';
					event.getParent().delayx=false;
					game.delay(0.5);
				},
				ai:{
					order:3,
					basic:{
						useful:[7,2],
						value:[7,2],
					},
					result:{player:1},
					//expose:0.2
				}
			},
			tao:{
				fullskin:true,
				type:'basic',
				cardcolor:'red',
				toself:true,
				enable:function(card,player){
					return player.hp<player.maxHp;
				},
				savable:true,
				selectTarget:-1,
				filterTarget:function(card,player,target){
					return target==player&&target.hp<target.maxHp;
				},
				modTarget:function(card,player,target){
					return target.hp<target.maxHp;
				},
				content:function(){
					target.recover(event.baseDamage||1);
				},
				ai:{
					basic:{
						order:function(card,player){
							if(player.hasSkillTag('pretao')) return 5;
							return 2;
						},
						useful:[8,6.5,5,4],
						value:[8,6.5,5,4],
					},
					result:{
						target:2,
						target_use:function(player,target){
							// if(player==target&&player.hp<=0) return 2;
							if(player.hasSkillTag('nokeep',true,null,true)) return 2;
							var nd=player.needsToDiscard();
							var keep=false;
							if(nd<=0){
								keep=true;
							}
							else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
								keep=true;
							}
							var mode=get.mode();
							if(target.hp>=2&&keep&&target.hasFriend()){
								if(target.hp>2||nd==0) return 0;
								if(target.hp==2){
									if(game.hasPlayer(function(current){
										if(target!=current&&get.attitude(target,current)>=3){
											if(current.hp<=1) return true;
											if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
										}
									})){
										return 0;
									}
								}
							}
							if(target.hp<0&&target!=player&&target.identity!='zhu'&&!target.hasSkill('chongsheng_nv')&&!target.hasSkill('mingwang')) return 0;
							var att=get.attitude(player,target);
							if(att<3&&att>=0&&player!=target) return 0;
							var tri=_status.event.getTrigger();
							if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
								if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
									var num=game.countPlayer(function(current){
										if(current.identity=='fan'){
											return current.countCards('h','tao');
										}
									});
									if(num>1&&player==target) return 2;
									return 0;
								}
							}
							if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
								if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
									return 0;
								}
							}
							if(mode=='stone'&&target.isMin()&&
							player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&
							tri.source!=target.getEnemy()){
								return 0;
							}
							return 2;
						},
					},
					tag:{
						recover:1,
						save:1,
					}
				}
			},
			bagua:{
				fullskin:true,
				type:'equip',
				subtype:'equip2',
				ai:{
					basic:{
						equipValue:7.5
					}
				},
				skills:['bagua_skill']
			},
			jueying:{
				fullskin:true,
				type:'equip',
				subtype:'equip3',
				distance:{globalTo:1},
			},
			dilu:{
				fullskin:true,
				type:'equip',
				subtype:'equip3',
				distance:{globalTo:1},
			},
			zhuahuang:{
				fullskin:true,
				type:'equip',
				subtype:'equip3',
				distance:{globalTo:1},
			},
			chitu:{
				fullskin:true,
				type:'equip',
				subtype:'equip4',
				distance:{globalFrom:-1},
			},
			dawan:{
				fullskin:true,
				type:'equip',
				subtype:'equip4',
				distance:{globalFrom:-1},
			},
			zixin:{
				fullskin:true,
				type:'equip',
				subtype:'equip4',
				distance:{globalFrom:-1},
			},
			zhuge:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				ai:{
					order:function(){
						return get.order({name:'sha'})-0.1;
					},
					equipValue:function(card,player){
						if(!game.hasPlayer(function(current){
							return player.canUse('sha',current)&&get.distance(player,current)<=1&&get.effect(current,{name:'sha'},player,player)>0;
						})){
							return 1;
						}
						if(player.hasSha()&&_status.currentPhase==player){
							if(player.getEquip('zhuge')&&player.countUsed('sha')||player.getCardUsable('sha')==0){
								return 10;
							}
						}
						if (player.hasSkill('husao_ning')){
							return 20;
						}
						var num=player.countCards('h','sha');
						if(num>1) return 6+num;
						return 3+num;
					},
					basic:{
						equipValue:5
					},
					tag:{
						valueswap:1
					}
				},
				skills:['zhuge_skill']
			},
			cixiong:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				distance:{attackFrom:-1},
				ai:{
					basic:{
						equipValue:2
					}
				},
				skills:['cixiong_skill']
			},
			qinggang:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				distance:{attackFrom:-1},
				ai:{
					basic:{
						equipValue:2
					}
				},
				skills:['qinggang_skill']
			},
			qinglong:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				distance:{attackFrom:-2},
				ai:{
					equipValue:function(card,player){
						return Math.min(2.5+player.countCards('h','sha'),4);
					},
					basic:{
						equipValue:3.5
					}
				},
				skills:['qinglong_skill','qinglong_guozhan']
			},
			zhangba:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				distance:{attackFrom:-2},
				ai:{
					equipValue:function(card,player){
						var num=2.5+player.countCards('h')/3;
						return Math.min(num,4);
					},
					basic:{
						equipValue:3.5
					}
				},
				skills:['zhangba_skill']
			},
			guanshi:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				distance:{attackFrom:-2},
				ai:{
					equipValue:function(card,player){
						var num=2.5+(player.countCards('h')+player.countCards('e'))/2.5;
						return Math.min(num,5);
					},
					basic:{
						equipValue:4.5,
					}
				},
				skills:['guanshi_skill']
			},
			fangtian:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				distance:{attackFrom:-3},
				ai:{
					basic:{
						equipValue:2.5
					}
				},
				skills:['fangtian_skill','fangtian_guozhan']
			},
			qilin:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				distance:{attackFrom:-4},
				ai:{
					basic:{
						equipValue:3
					}
				},
				skills:['qilin_skill']
			},
			wugu:{
				audio:true,
				fullskin:true,
				type:'trick',
				enable:true,
				cardcolor:'red',
				selectTarget:-1,
				filterTarget:true,
				contentBefore:function(){
					"step 0"
					if(!targets.length){
						event.finish();
						return;
					}
					if(get.is.versus()){
						player.chooseControl('顺时针','逆时针',function(event,player){
							if(player.next.side==player.side) return '逆时针';
							return '顺时针';
						}).set('prompt','选择'+get.translation(card)+'的结算方向');
					}
					else{
						event.goto(2);
					}
					"step 1"
					if(result&&result.control=='顺时针'){
						var evt=event.getParent();
						evt.fixedSeat=true;
						evt.targets.sortBySeat();
						evt.targets.reverse();
						if(evt.targets[evt.targets.length-1]==player){
							evt.targets.unshift(evt.targets.pop());
						}
					}
					"step 2"
					ui.clear();
					var num;
					if(event.targets){
						num=event.targets.length;
					}
					else{
						num=game.countPlayer();
					}
					var cards=get.cards(num);
					game.cardsGotoOrdering(cards).relatedEvent=event.getParent();
					var dialog=ui.create.dialog('饕餮盛宴',cards,true);
					_status.dieClose.push(dialog);
					dialog.videoId=lib.status.videoId++;
					game.addVideo('cardDialog',null,['饕餮盛宴',get.cardsInfo(cards),dialog.videoId]);
					event.getParent().preResult=dialog.videoId;
					game.broadcast(function(cards,id){
						var dialog=ui.create.dialog('饕餮盛宴',cards,true);
						_status.dieClose.push(dialog);
						dialog.videoId=id;
					},cards,dialog.videoId);
					game.log(event.card,'亮出了',cards);
				},
				content:function(){
					"step 0"
					for(var i=0;i<ui.dialogs.length;i++){
						if(ui.dialogs[i].videoId==event.preResult){
							event.dialog=ui.dialogs[i];break;
						}
					}
					if(!event.dialog){
						event.finish();
						return;
					}
					if(event.dialog.buttons.length>1){
						var next=target.chooseButton(true,function(button){
							return get.value(button.link,_status.event.player);
						});
						next.set('dialog',event.preResult);
						next.set('closeDialog',false);
						next.set('dialogdisplay',true);
					}
					else{
						event.directButton=event.dialog.buttons[0];
					}
					"step 1"
					var dialog=event.dialog;
					var card;
					if(event.directButton){
						card=event.directButton.link;
					}
					else{
						card=result.links[0];
					}

					var button;
					for(var i=0;i<dialog.buttons.length;i++){
						if(dialog.buttons[i].link==card){
							button=dialog.buttons[i];
							button.querySelector('.info').innerHTML=function(target){
 							if(target._tempTranslate) return target._tempTranslate;
 							var name=target.name;
 							if(lib.translate[name+'_ab']) return lib.translate[name+'_ab'];
 							return get.translation(name);
							}(target);
							dialog.buttons.remove(button);
							break;
						}
					}
					var capt=get.translation(target)+'选择了'+get.translation(button.link);
					if(card){
						target.gain(card,'visible');
						target.$gain2(card);
						game.broadcast(function(card,id,name,capt){
							var dialog=get.idDialog(id);
							if(dialog){
								dialog.content.firstChild.innerHTML=capt;
								for(var i=0;i<dialog.buttons.length;i++){
									if(dialog.buttons[i].link==card){
										dialog.buttons[i].querySelector('.info').innerHTML=name;
										dialog.buttons.splice(i--,1);
										break;
									}
								}
							}
						},card,dialog.videoId,function(target){
							if(target._tempTranslate) return target._tempTranslate;
							var name=target.name;
							if(lib.translate[name+'_ab']) return lib.translate[name+'_ab'];
							return get.translation(name);
						}(target),capt);
					}
					dialog.content.firstChild.innerHTML=capt;
					game.addVideo('dialogCapt',null,[dialog.videoId,dialog.content.firstChild.innerHTML]);
					game.log(target,'选择了',button.link);
					game.delay();
				},
				contentAfter:function(){
					for(var i=0;i<ui.dialogs.length;i++){
						if(ui.dialogs[i].videoId==event.preResult){
							var dialog=ui.dialogs[i];
							dialog.close();
							_status.dieClose.remove(dialog);
							if(dialog.buttons.length){
								event.remained=[];
								for(var i=0;i<dialog.buttons.length;i++){
									event.remained.push(dialog.buttons[i].link);
								}
								event.trigger('wuguRemained');
							}
							break;
						}
					}
					game.broadcast(function(id){
						var dialog=get.idDialog(id);
						if(dialog){
							dialog.close();
							_status.dieClose.remove(dialog);
						}
					},event.preResult);
					game.addVideo('cardDialog',null,event.preResult);
				},
				ai:{
					wuxie:function(){
						if(Math.random()<0.5) return 0;
					},
					basic:{
						order:3,
						useful:1,
					},
					result:{
						target:function(player,target){
							if(get.is.versus()){
								if(target==player) return 1.5;
								return 1;
							}
							if(player.hasUnknown(2)){
								return 0;
							}
							return 2-2*get.distance(player,target,'absolute')/game.countPlayer();
						}
					},
					tag:{
						draw:1,
						multitarget:1
					}
				}
			},
			taoyuan:{
				audio:true,
				fullskin:true,
				type:'trick',
				enable:true,
				selectTarget:-1,
				cardcolor:'red',
				reverseOrder:true,
				filterTarget:function(card,player,target){
					//return target.hp<target.maxHp;
					return true;
				},
				ignoreTarget:function(card,player,target){
					return target.isHealthy();
				},
				content:function(){
					target.recover();
				},
				ai:{
					basic:{
						order:function(){
							return 11;
						},
						useful:[3,1],
						value:0
					},
					result:{
						target:function(player,target){
							return (target.hp<target.maxHp)?2:0;
						}
					},
					tag:{
						recover:0.5,
						multitarget:1
					}
				}
			},
			nanman:{
				audio:true,
				fullskin:true,
				type:'trick',
				enable:true,
				selectTarget:-1,
				filterTarget:function(card,player,target){
					return target!=player;
				},
				reverseOrder:true,
				content:function(){
					"step 0"
					if(typeof event.baseDamage!='number') event.baseDamage=1;
					if(event.directHit) event._result={bool:false};
					else{
						// var next=target.chooseToRespond({name:'sha'});
						//红莲醉舞这里修改为如果没有冲，可以用酒代替冲
						var next;
						var strPrompt = '';
						if (target.countCards('h','sha')!=0){
							next=target.chooseToRespond({name:'sha'});
						}
						else{
							next=target.chooseToRespond('请打出一张【'+get.translation('sha')+'】'+'响应'+'【'+get.translation('nanman')+'】',function(card){
								return ['sha','jiu'].includes(card.name);
							});
							next.set('prompt2','【酒】也能代替【冲】打出');
						}

						next.set('ai',function(card){
							var evt=_status.event.getParent();
							if(get.damageEffect(evt.target,evt.player,evt.target,undefined,true)>=0) return 0;
							if(evt.player.hasSkillTag('notricksource')) return 0;
							if(evt.target.hasSkillTag('notrick')) return 0;
							return 11-get.value(card);
						});
						next.autochoose=lib.filter.autoRespondSha;
					}
					"step 1"
					if(result.bool==false){
						target.damage(event.baseDamage,event.customSource||player);
					}
				},
				ai:{
					wuxie:function(target,card,player,viewer){
						if(get.attitude(viewer,target)>0&&target.countCards('h','sha')){
							if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
						}
					},
					basic:{
						order:9,
						useful:[5,1],
						value:5
					},
					result:{
						target:function(player,target){
							if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
							var nh=target.countCards('h');
							if(get.mode()=='identity'){
								if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
							}
							if(nh==0) return -2;
							if(nh==1) return -1.7
							return -1.5;
						},
						player:function(player,target){
							if (get.mode() == 'identity'&&(player.identity == 'zhu'||player.identity == 'mingzhong')&&player.hasUnknown(3)){
								return 1;
							}
						},
					},
					tag:{
						respond:1,
						respondSha:1,
						damage:1,
						multitarget:1,
						multineg:1,
					}
				}
			},
			wanjian:{
				audio:true,
				fullskin:true,
				type:'trick',
				enable:true,
				selectTarget:-1,
				reverseOrder:true,
				filterTarget:function(card,player,target){
					return target!=player;
				},
				content:function(){
					"step 0"
					if(typeof event.baseDamage!='number') event.baseDamage=1;
					if(event.directHit) event._result={bool:false};
					else{
						var next=target.chooseToRespond({name:'shan'});
						next.set('ai',function(card){
							var evt=_status.event.getParent();
							if(get.damageEffect(evt.target,evt.player,evt.target,undefined,true)>=0) return 0;
							if(evt.player.hasSkillTag('notricksource')) return 0;
							if(evt.target.hasSkillTag('notrick')) return 0;
							if(evt.target.hasSkillTag('noShan')){
								return -1;
							}
						return 11-get.value(card);
						});
						next.autochoose=lib.filter.autoRespondShan;
					}
					"step 1"
					if(result.bool==false){
						target.damage(event.baseDamage);
					}
				},
				ai:{
					wuxie:function(target,card,player,viewer){
						if(get.attitude(viewer,target)>0&&target.countCards('h','shan')){
							if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
						}
					},
					basic:{
						order:9,
						useful:1,
						value:5
					},
					result:{
						target:function(player,target){
							if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
							var nh=target.countCards('h');
							if(get.mode()=='identity'){
								if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
							}
							if(nh==0) return -2;
							if(nh==1) return -1.7
							return -1.5;
						},
						player:function(player,target){
							if (get.mode() == 'identity'&&(player.identity == 'zhu'||player.identity == 'mingzhong')&&player.hasUnknown(3)){
								return 1;
							}
						},
					},
					tag:{
						respond:1,
						respondShan:1,
						damage:1,
						multitarget:1,
						multineg:1,
					}
				}
			},
			wuzhong:{
				audio:true,
				fullskin:true,
				type:'trick',
				enable:true,
				selectTarget:-1,
				cardcolor:'red',
				toself:true,
				filterTarget:function(card,player,target){
					return target==player;
				},
				modTarget:true,
				content:function(){
					if(get.is.versus()){
						if(game.friend.contains(target)){
							if(game.friend.length<game.enemy.length){
								target.draw(3);return;
							}
						}
						else{
							if(game.friend.length>game.enemy.length){
								target.draw(3);return;
							}
						}
					}
					target.draw(2);
				},
				ai:{
					basic:{
						order:7.2,
						useful:4.5,
						value:9.2
					},
					result:{
						target:2,
					},
					tag:{
						draw:2
					}
				}
			},
			juedou:{
				audio:true,
				fullskin:true,
				type:'trick',
				enable:true,
				filterTarget:function(card,player,target){
					return target!=player;
				},
				content:function(){
					"step 0"
					if(event.turn==undefined) event.turn=target;
					if(event.turnNum==undefined) event.turnNum=1;
					if(typeof event.baseDamage!='number') event.baseDamage=1;
					if(typeof event.extraDamage!='number'){
						event.extraDamage=0;
					}
					if(!event.shaReq) event.shaReq={};
					if(typeof event.shaReq[player.playerid]!='number') event.shaReq[player.playerid]=1;
					if(typeof event.shaReq[target.playerid]!='number') event.shaReq[target.playerid]=1;
					event.playerCards=[];
					event.targetCards=[];
					"step 1"
					event.trigger('juedou');
					"step 2"
					event.shaRequired=event.shaReq[event.turn.playerid];
					"step 3"
					if(event.directHit){
						event._result={bool:false};
					}
					else{
						// var next=event.turn.chooseToRespond({name:'sha'});
						//酣战这里修改为如果没有冲，可以用酒代替冲
						var next;
						var strPrompt = '';
						if (event.turn.countCards('h','sha')!=0){
							next=event.turn.chooseToRespond({name:'sha'});
						}
						else{
							next=event.turn.chooseToRespond(function(card){
								return ['sha','jiu'].includes(card.name);
							});
							strPrompt += '或【酒】';
						}

						if(event.shaRequired>1){
							next.set('prompt2','共需打出'+event.shaRequired+'张【冲】'+strPrompt);
						}
						else if (event.turn.countCards('h','sha')==0){
							next.set('prompt2','【酒】也能代替【冲】打出');
						}
						next.set('ai',function(card){
							var event=_status.event;
							var player=event.splayer;
							var target=event.starget;
							if(player.hasSkillTag('notricksource')) return 0;
							if(target.hasSkillTag('notrick')) return 0;
							if(event.shaRequired>1&&player.countCards('h','sha')+player.countCards('h','jiu')<event.shaRequired) return 0;
							if(event.player==target){
								if (player.hasSkill('xiangzhuo_dong')||target.hasSkill('xiangzhuo_dong')){
									if (get.attitude(target,player)>0||get.attitude(player,target)>0){
										return -1;
									}
									if (get.attitude(target,player)<0||get.attitude(player,target)<0){
										return 10+Math.random();
									}
									else{
										return 0;
									}
								}
								if(player.hasSkill('naman')) return -1;
								if(get.attitude(target,player)<0||event.player.hp<=1){
									return get.unuseful2(card);
								}
								return -1;
							}
							else{
								if (player.hasSkill('xiangzhuo_dong')||target.hasSkill('xiangzhuo_dong')){
									if (get.attitude(target,player)>0||get.attitude(player,target)>0){
										return -1;
									}
									if (get.attitude(target,player)<0||get.attitude(player,target)<0){
										return 10+Math.random();
									}
									else{
										return 0;
									}
								}
								if(target.hasSkill('naman')) return -1;
								if(get.attitude(player,target)<0||event.player.hp<=1){
									return get.unuseful2(card)
								}
								return -1;
							}
						});
						next.set('splayer',player);
						next.set('starget',target);
						next.set('shaRequired',event.shaRequired);
						next.autochoose=lib.filter.autoRespondSha;
						if(event.turn==target){
							next.source=player;
						}
						else{
							next.source=target;
						}
					}
					"step 4"
					if(event.target.isDead()||event.player.isDead()){
						event.finish();
					}
					else{
						if(result.bool){
							event.shaRequired--;
							if(event.turn==target){
								if(result.cards) event.targetCards.addArray(result.cards);
								if(event.shaRequired>0) event.goto(3);
								else{
									event.turn=player;
									
									event.goto(1);
								}
							}
							else{
								if(result.cards) event.playerCards.addArray(result.cards);
								if(event.shaRequired>0) event.goto(3);
								else{
									event.turn=target;
									event.turnNum++;
									event.goto(1);
								}
							}
						}
						else{
							if(event.turn==target){
								target.damage(event.baseDamage+event.extraDamage);
							}
							else{
								player.damage(target,event.baseDamage+event.extraDamage);
							}
						}
					}
				},
				ai:{
					wuxie:function(target,card,player,viewer){
						if(player==game.me&&get.attitude(viewer,player)>0){
							return 0;
						}
					},
					basic:{
						order:5,
						useful:1,
						value:5.5
					},
					result:{
						target:function(player,target){
							if (target&&target.storage.kuaijiu_ding){
                                var goon = target.storage.kuaijiu_ding > target.maxHp;
                                if (goon){
                                    if((get.attitude(target,player)<0)) {
										if (Math.random()<0.1){
											return -1.5;
										}
										else{
											return 0;
										}
									}
                                }
                                else{
									if((get.attitude(target,player)<0)) {
										if (Math.random()<0.2){
											return -1.5;
										}
										else{
											return 0;
										}
									}
                                }
                            }
							return -1.5;
						},
						player:function(player,target){
							if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
								return 0;
							}
							var hs1=target.getCards('h','sha');
							var hs2=player.getCards('h','sha');
							if(hs1.length>hs2.length+1){
								return -2;
							}
							var hsx=target.getCards('h');
							if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
								return -2;
							}
							if(hsx.length>3&&hs2.length==0){
								return -2;
							}
							if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
								return -2;
							}
							return -0.5;
						}
					},
					tag:{
						respond:2,
						respondSha:2,
						damage:1,
					}
				}
			},
			shunshou:{
				audio:true,
				fullskin:true,
				type:'trick',
				enable:true,
				range:{global:1},
				selectTarget:1,
				postAi:function(targets){
					return targets.length==1&&targets[0].countCards('j');
				},
				filterTarget:function(card,player,target){
					if(player==target) return false;
					return target.countGainableCards(player,get.is.single()?'he':'hej')>0;
				},
				content:function(){
					var position=get.is.single()?'he':'hej';
					if(target.countGainableCards(player,position)){
						player.gainPlayerCard(position,target,true);
					}
				},
				ai:{
					wuxie:function(target,card,player,viewer){
						if(get.attitude(viewer,player)>0&&get.attitude(viewer,target)>0){
							return 0;
						}
					},
					basic:{
						order:7.5,
						useful:4,
						value:9
					},
					result:{
						target:function(player,target){
							if (target&&target.storage.kuaijiu_ding){
                                var goon = target.storage.kuaijiu_ding > target.maxHp;
                                if (goon){
                                    if((get.attitude(target,player)<0)) {
										if (Math.random()<0.1){
											return -1.5;
										}
										else{
											return 0;
										}
									}
                                }
                                else{
									if((get.attitude(target,player)<0)) {
										if (Math.random()<0.2){
											return -1.5;
										}
										else{
											return 0;
										}
									}
                                }
                            }
							if(get.attitude(player,target)<=0) return (target.countCards('he',function(card){
								return card.name=='tengjia'||get.value(card)>0;
							})>0)?-1.5:1.5;
							var js=target.getCards('j');
							if(js.length){
								var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
								if(jj.name=='shunshou') return 3;
								if(js.length==1&&get.effect(target,jj,target,player)>=0){
									return -1.5;
								}
								return 3;
							}
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
						}
					},
					tag:{
						loseCard:1,
						gain:1,
					}
				}
			},
			guohe:{
				audio:true,
				fullskin:true,
				type:'trick',
				enable:true,
				selectTarget:1,
				postAi:function(targets){
					return targets.length==1&&targets[0].countCards('j');
				},
				filterTarget:function(card,player,target){
					if(player==target) return false;
					return target.countDiscardableCards(player,get.is.single()?'he':'hej');
				},
				content:function(){
					'step 0'
					if(!get.is.single()&&target.countDiscardableCards(player,'hej')){
						player.discardPlayerCard('hej',target,true);
						event.finish();
					}
					else{
						var bool1=target.countDiscardableCards(player,'h');
						var bool2=target.countDiscardableCards(player,'e');
						if(bool1&&bool2){
							player.chooseControl('手牌区','器具区').set('ai',function(){
								return Math.random()<0.5?1:0;
							}).set('prompt','弃置'+(get.translation(target))+'器具区的一张牌，或观看其手牌并弃置其中的一张牌。');
						}
						else event._result={control:bool1?'手牌区':'器具区'};
					}
					'step 1'
					var pos=result.control=='手牌区'?'h':'e';
					player.discardPlayerCard(target,pos,true,'visible');
				},
				ai:{
					basic:{
						order:9,
						useful:1,
						value:5,
					},
					result:{
						target:function(player,target){
							if (target&&target.storage.kuaijiu_ding){
                                var goon = target.storage.kuaijiu_ding > target.maxHp;
                                if (goon){
                                    if((get.attitude(target,player)<0)) {
										if (Math.random()<0.1){
											return -1.5;
										}
										else{
											return 0;
										}
									}
                                }
                                else{
									if((get.attitude(target,player)<0)) {
										if (Math.random()<0.2){
											return -1.5;
										}
										else{
											return 0;
										}
									}
                                }
                            }
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
							var noe2=(es.filter(function(esx){
							return esx.name=='tengjia'||get.value(esx)>0
							}).length==0);
							var noh=(nh==0||target.hasSkillTag('noh'));
							if(noh&&(noe||noe2)) return 0;
							if(att<=0&&!target.countCards('he')) return 1.5;
							return -1.5;
						},
					},
					tag:{
						loseCard:1,
						discard:1
					}
				}
			},
			jiedao:{
				audio:true,
				fullskin:true,
				type:'trick',
				enable:true,
				selectTarget:2,
				singleCard:true,
				multitarget:true,
				targetprompt:['被借刀','出冲目标'],
				complexTarget:true,
				multicheck:function(){
					return game.hasPlayer(function(current){
						if(current.getEquip(1)){
							return game.hasPlayer(function(current2){
								return lib.filter.filterTarget({name:'sha'},current,current2);
							})
						}
					});
				},
				filterTarget:function(card,player,target){
					if(ui.selected.targets.length==0){
						if (player.hasSkill('guimo_chou')){
							return player!=target;
						}
						return (player!=target&&target.getCards('e',{subtype:'equip1'}).length);
					}
					else{
						return lib.filter.filterTarget({name:'sha'},ui.selected.targets[0],target);
					}
				},
				content:function(){
					"step 0"
					if(event.directHit||(!_status.connectMode&&lib.config.skip_shan&&!target.hasSha())){
						event.directfalse=true;
					}
					else{
						target.chooseToUse('对'+get.translation(event.addedTarget)+'使用一张冲，或令'+get.translation(player)+'获得你的武器牌',function(card,player){
							if(get.name(card)!='sha') return false;
							return lib.filter.filterCard.apply(this,arguments);
						}).set('targetRequired',true).set('complexSelect',true).set('filterTarget',function(card,player,target){
						if(target!=_status.event.sourcex&&!ui.selected.targets.contains(_status.event.sourcex)) return false;
						return lib.filter.filterTarget.apply(this,arguments);
					}).set('sourcex',event.addedTarget).set('addCount',false).set('respondTo',[player,card]);
					}
					"step 1"
					if(event.directfalse||result.bool==false){
						var cards=target.getCards('e',{subtype:'equip1'});
						if(cards.length) {
							player.gain(cards,target,'give');
						}
						else if (cards.length == 0 && player.hasSkill('guimo_chou')){
							var position=get.is.single()?'he':'hej';
							if(target.countGainableCards(player,position)){
								game.log(target,'未出冲且器具区无武器牌，',player,'获得',target,'区域内一张牌');
								// player.logSkill('guimo_chou');
								player.popup('鬼没','thunder');
								game.playAudio('skill','guimo_chou'+Math.ceil(5+3*Math.random()));
								game.log(player,'发动了','#g【鬼没】');
								
								player.gainPlayerCard(position,target,true);
							}
						}
					}
				},
				ai:{
					wuxie:function(target,card,player,viewer){
						if(player==game.me&&get.attitude(viewer,player)>0){
							return 0;
						}
					},
					basic:{
						order:8,
						value:2,
						useful:1,
					},
					result:{
						target:function(player,target){
							if (target&&target.storage.kuaijiu_ding){
                                var goon = target.storage.kuaijiu_ding > target.maxHp;
                                if (goon){
                                    if((get.attitude(target,player)<0)) {
										if (Math.random()<0.1){
											return -1.5;
										}
										else{
											return 0;
										}
									}
                                }
                                else{
									if((get.attitude(target,player)<0)) {
										if (Math.random()<0.2){
											return -1.5;
										}
										else{
											return 0;
										}
									}
                                }
                            }
							return -1.5;
						},
						player:function(player){
							if(player.getCards('he',{subtype:'equip1'}).length) return 0;
							return 1.5;
						},
					},
					tag:{
						gain:1,
						use:1,
						useSha:1,
						loseCard:1,
					}
				}
			},
			wuxie:{
				audio:true,
				fullskin:true,
				type:'trick',
				ai:{
					basic:{
						useful:[6,4],
						value:[6,4],
					},
					result:{player:1},
					expose:0.2
				},
				notarget:true,
				contentBefore:function(){
					'step 0'
					if(get.mode()=='guozhan'&&get.cardtag(card,'guo')){
						var trigger=event.getParent(2);
						if(trigger.triggername!='phaseJudge'&&!trigger.statecard&&trigger.target.identity!='ye'&&trigger.target.identity!='unknown'){
							player.chooseControl('对单体使用','对势力使用').set('prompt','请选择'+get.translation(card)+'的使用方式').set('ai',function(){
								return '对势力使用'
							});
						}
						else event.finish();
					}
					else event.finish();
					'step 1'
					if(result.control=='对势力使用'){
						player.chat('对势力使用');
						event.getParent(2).guowuxie=true;
					}
				},
				content:function(){
					var evt=event.getParent();
					event.result={
						wuxied:true,
						directHit:evt.directHit||[],
						nowuxie:evt.nowuxie,
					};
					if(player.isOnline()){
						player.send(function(player){
							if(ui.tempnowuxie&&!player.hasWuxie()){
								ui.tempnowuxie.close();
								delete ui.tempnowuxie;
							}
						},player);
					}
					else if(player==game.me){
						if(ui.tempnowuxie&&!player.hasWuxie()){
							ui.tempnowuxie.close();
							delete ui.tempnowuxie;
						}
					}
				},
			},
			lebu:{
				audio:true,
				fullskin:true,
				type:'delay',
				filterTarget:function(card,player,target){
					return (lib.filter.judge(card,player,target)&&player!=target);
				},
				judge:function(card){
					if(get.suit(card)=='heart') return 0;
					return -3;
				},
				effect:function(){
					if(result.card&&result.suit!='heart'&&result.bool==false){
						player.skip('phaseUse');
					}
				},
				ai:{
					basic:{
						order:1,
						useful:1,
						value:8,
					},
					result:{
						target:function(player,target){
							if (target.hasSkill('lingyu_lala')&&!(ui.cardPile.childElementCount<=target.hp*15&&!target.hasSkill('dunsheng_limit'))){
								return 0;
							}
							if (target.hasSkill('dunkong_bo')){
								return 0;
							}
							var num=target.hp-target.countCards('h')-2;
							if(num>-1) return -0.01;
							if(target.hp<3) num--;
							if(target.isTurnedOver()) num/=2;
							var dist=get.distance(player,target,'absolute');
							if(dist<1) dist=1;
							return num/Math.sqrt(dist);
						}
					},
					tag:{
						skip:'phaseUse'
					}
				}
			},
			shandian:{
				audio:true,
				fullskin:true,
				type:'delay',
				cardnature:'thunder',
				modTarget:function(card,player,target){
					return lib.filter.judge(card,player,target);
				},
				enable:function(card,player){
					return player.canAddJudge(card);
				},
				filterTarget:function(card,player,target){
					return (lib.filter.judge(card,player,target)&&player==target);
				},
				selectTarget:[-1,-1],
				judge:function(card){
					if(get.suit(card)=='spade'&&get.number(card)>1&&get.number(card)<10) return -6;
					return 0;
				},
				effect:function(){
					if(result.card&&result.suit=='spade'&&result.bool==false){
						game.playAudio('skill','anmou_enda'+3);
						player.damage(3,'thunder','nosource');
					}
					else{
						player.addJudgeNext(card);
					}
				},
				cancel:function(){
					player.addJudgeNext(card);
				},
				ai:{
					basic:{
						order:1,
						useful:0,
						value:0,
					},
					result:{
						target:function(player,target){
							if (target.hasSkill('dunkong_bo')&&player==target){
								return 1;
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
							if(num>0) return num;
							if(num==0){
								var mode=get.mode();
								if(mode=='identity'){
									if(target.identity=='nei') return 1;
									var situ=get.situation();
									if(target.identity=='fan'){
										if(situ>1) return 1;
									}
									else{
										if(situ<-1) return 1;
									}
								}
								else if(mode=='guozhan'){
									if(target.identity=='ye') return 1;
									if(game.hasPlayer(function(current){
										return current.identity=='unknown';
									})){
										return -1;
									}
									if(get.population(target.identity)==1){
										if(target.maxHp>2&&target.hp<2) return 1;
										if(game.countPlayer()<3) return -1;
										if(target.hp<=2&&target.countCards('he')<=3) return 1;
									}
								}
							}
							return -1;
						}
					},
					tag:{
						// damage:1,
						// natureDamage:1,
						// thunderDamage:1,
					}
				}
			},
			hanbing:{
				fullskin:true,
				type:"equip",
				subtype:"equip1",
				distance:{attackFrom:-1},
				skills:['hanbing_skill'],
				ai:{
					basic:{
						equipValue:2
					}
				},
			},
			renwang:{
				fullskin:true,
				type:"equip",
				subtype:"equip2",
				skills:['renwang_skill'],
				ai:{
					basic:{
						equipValue:7.5
					},
				},
			},
            			muniu:{
				fullskin:true,
				type:'equip',
				subtype:'equip5',
				nomod:true,
				onEquip:function(){
					if (!player.storage.muniu_skill6){
						player.storage.muniu_skill6 = [];
					}
					if (card.cards){
						player.storage.muniu_skill6=[];
						for (var i = 0; i < card.cards.length; i++){
							player.storage.muniu_skill6.push(card.cards[i]);
						}
					}
					player.syncStorage('muniu_skill6');
					player.markSkill('muniu_skill6');
				},
				forceDie:true,
				onLose:function(){
					player.unmarkSkill('muniu_skill6');
					player.storage.muniu_skill6=[];
					player.storage.muniu_skill6.length = 0;
					player.syncStorage('muniu_skill6');
					delete player.getStat('skill').muniu_skill;
					if((event.getParent(2)&&event.getParent(2).name!='swapEquip')&&event.parent.type!='equip'&&card&&card.cards&&card.cards.length){
						player.$throw(card.cards,1000);
						player.popup('muniu');
						game.log(card,'掉落了',card.cards);
						game.cardsDiscard(card.cards);
						card.cards.length=0;
					}
				},
				clearLose:true,
				equipDelay:false,
				loseDelay:false,
				skills:['muniu_skill','muniu_skill2','muniu_skill6','muniu_skill7'],
				ai:{
					equipValue:function(card){
						if(card.cards) return 7+(card.cards.length/5);
						return 7;
					},
					value:function(card){
						if(card.cards) return 7+(card.cards.length/5);
						return 7;
					},
					basic:{
						equipValue:function(card){
							if(card.cards) return 7+(card.cards.length/5);
							return 7;
						},
						value:function(card){
							if(card.cards) return 7+(card.cards.length/5);
							return 7;
						},
					}
				}
			},
			jiu:{
				audio:true,
				fullskin:true,
				type:"basic",
				toself:true,
				enable:function(event,player){
					//return !player.hasSkill('jiu');
					return true;
				},
				lianheng:true,
				logv:false,
				savable:function(card,player,dying){
					return dying==player;
				},
				usable:1,
				selectTarget:-1,
				modTarget:true,
				filterTarget:function(card,player,target){
					return target==player;
				},
				content:function(){
					if(typeof event.baseDamage!='number') event.baseDamage=1;
					if(target.isDying()||event.getParent(2).type=='dying'){
						target.recover(event.baseDamage);
						if(_status.currentPhase==target){
							target.getStat().card.jiu--;
						}
					}
					else{
						game.addVideo('jiuNode',target,true);
						if(cards&&cards.length){
							card=cards[0];
						}
						if(!target.storage.jiu) target.storage.jiu=0;
						target.storage.jiu+=event.baseDamage;
						if (target.storage.jiu > 1){
							target.popup('酒+'+target.storage.jiu,'fire');
						}
						game.broadcastAll(function(target,card,gain2){
							target.addSkill('jiu');
							if(!target.node.jiu&&lib.config.jiu_effect){
								target.node.jiu=ui.create.div('.playerjiu',target.node.avatar);
								target.node.jiu2=ui.create.div('.playerjiu',target.node.avatar2);
							}
							if(gain2&&card.clone&&(card.clone.parentNode==target.parentNode||card.clone.parentNode==ui.arena)){
								card.clone.moveDelete(target);
							}
						},target,card,target==targets[0]&&cards.length==1);
						if(target==targets[0]&&cards.length==1){
							if(card.clone&&(card.clone.parentNode==target.parentNode||card.clone.parentNode==ui.arena)){
								game.broadcastAll(function(target,card){
									game.addVideo('gain2',target,get.cardsInfo([card]));
								},target,card);
							}
						}
					}
				},
				ai:{
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
								if(i==0) return 5.4;
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
						save:1
					}
				}
			},
			huogong:{
				audio:true,
				fullskin:true,
				type:'trick',
				enable:true,
				cardnature:'fire',
				filterTarget:function(card,player,target){
					if(player!=game.me&&player.countCards('h')<2) return false;
					return target.countCards('h')>0;
				},
				content:function(){
					"step 0"
					if(target.countCards('h')==0){
						event.finish();
						return;
					}
					target.chooseCard(true).ai=function(card){
						if(_status.event.getRand()<0.5) return Math.random();
						return get.value(card);
					};
					"step 1"
					event.dialog=ui.create.dialog(get.translation(target)+'展示的手牌',result.cards);
					event.videoId=lib.status.videoId++;

					game.broadcast('createDialog',event.videoId,get.translation(target)+'展示的手牌',result.cards);
					game.addVideo('cardDialog',null,[get.translation(target)+'展示的手牌',get.cardsInfo(result.cards),event.videoId]);
					event.card2=result.cards[0];
					game.log(target,'展示了',event.card2);
					event._result={};
					player.chooseToDiscard({suit:get.suit(event.card2)},function(card){
						var evt=_status.event.getParent();
						if (evt.player==target){
							return 100 - get.value(card,evt.player);
						}
						if (evt.player.hasSkill('yuzhong_yan')&&target.isTurnedOver()&&get.attitude(evt.player,target)>0){
							return 100 - get.value(card,evt.player);
						}
						if(get.damageEffect(evt.target,evt.player,evt.player,'fire')-get.attitude(evt.player,target)>0){
							return 7-get.value(card,evt.player)-get.attitude(evt.player,target);
						}
						return -1;
					}).prompt=false;
					game.delay(2);
					"step 2"
					if(result.bool){
						target.damage('fire');
					}
					else{
						target.addTempSkill('huogong2');
					}
					event.dialog.close();
					game.addVideo('cardDialog',null,event.videoId);
					game.broadcast('closeDialog',event.videoId);
				},
				ai:{
					basic:{
						order:4,
						value:[3,1],
						useful:1,
					},
					wuxie:function(target,card,player,current,state){
						if(get.attitude(current,player)>=0&&state>0) return false;
					},
					result:{
						player:function(player){
							var nh=player.countCards('h');
							if(nh<=player.hp&&nh<=4&&_status.event.name=='chooseToUse'){
								if(typeof _status.event.filterCard=='function'&&
									_status.event.filterCard({name:'huogong'},player,_status.event)){
									return -10;
								}
								if(_status.event.skill){
									var viewAs=get.info(_status.event.skill).viewAs;
									if(viewAs=='huogong') return -10;
									if(viewAs&&viewAs.name=='huogong') return -10;
								}
							}
							return 0;
						},
						target:function(player,target){
							if(target.hasSkill('huogong2')||target.countCards('h')==0) return 0;
							if (target&&target.storage.kuaijiu_ding){
                                var goon = target.storage.kuaijiu_ding > target.maxHp;
                                if (goon){
                                    if((get.attitude(target,player)<0)) {
										if (Math.random()<0.1){
											return -1.5;
										}
										else{
											return 0;
										}
									}
                                }
                                else{
									if((get.attitude(target,player)<0)) {
										if (Math.random()<0.2){
											return -1.5;
										}
										else{
											return 0;
										}
									}
                                }
                            }
							if(player.countCards('h')<=1) return 0;
							if(target==player){
								if(typeof _status.event.filterCard=='function'&&
									_status.event.filterCard({name:'huogong'},player,_status.event)){
									return -1.5;
								}
								if(_status.event.skill){
									var viewAs=get.info(_status.event.skill).viewAs;
									if(viewAs=='huogong') return -1.5;
									if(viewAs&&viewAs.name=='huogong') return -1.5;
								}
								return 0;
							}
							return -1.5;
						}
					},
					tag:{
						damage:1,
						fireDamage:1,
						natureDamage:1,
						norepeat:1
					}
				}
			},
			tiesuo:{
				audio:true,
				fullskin:true,
				type:'trick',
				enable:true,
				filterTarget:true,
				selectTarget:[1,2],
				complexTarget:true,
				content:function(){
					target.link();
				},
				chongzhu:true,
				ai:{
					wuxie:function(target,card,player,viewer){
						if(_status.event.getRand()<0.5) return 0;
						if(player==game.me&&get.attitude(viewer,player)>0){
							return 0;
						}
					},
					basic:{
						useful:4,
						value:4,
						order:7
					},
					result:{
						target:function(player,target){
							if(target.isLinked()){
								if(target.hasSkillTag('link')) return 0;
								var f=target.hasSkillTag('nofire');
								var t=target.hasSkillTag('nothunder');
								if(f&&t) return 0;
								if(f||t) return 0.5;
								return 2;
							}
							if(get.attitude(player,target)>=0) return -0.9;
							if(ui.selected.targets.length) return -0.9;
							if(game.hasPlayer(function(current){
								return get.attitude(player,current)<=-1&&current!=target&&!current.isLinked();
							})){
								return -0.9;
							}
							return 0;
						}
					},
					tag:{
						multitarget:1,
						multineg:1,
						norepeat:1
					}
				}
			},
			bingliang:{
				audio:true,
				fullskin:true,
				type:'delay',
				range:{global:1},
				filterTarget:function(card,player,target){
					return (lib.filter.judge(card,player,target)&&player!=target);
				},
				judge:function(card){
					if(get.suit(card)=='club') return 0;
					return -3;
				},
				effect:function(){
					if(result.card&&result.suit!='club'&&result.bool==false){
						if(get.is.changban()) player.addTempSkill('bingliang_changban');
						else player.skip('phaseDraw');
					}
				},
				ai:{
					basic:{
						order:1,
						useful:1,
						value:4,
					},
					result:{
						target:function(player,target){
							if (target.hasSkill('dunkong_bo')){
								return 0;
							}
							if(target.hasJudge('caomu')) return 0;
							return -1.5/Math.sqrt(target.countCards('h')+1);
						}
					},
					tag:{
						skip:'phaseDraw'
					}
				}
			},
			hualiu:{
				fullskin:true,
				type:'equip',
				subtype:'equip3',
				distance:{globalTo:1},
			},
			zhuque:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				cardnature:'fire',
				distance:{attackFrom:-3},
				ai:{
					basic:{
						equipValue:2
					}
				},
				skills:['zhuque_skill']
			},
			guding:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				distance:{attackFrom:-1},
				ai:{
					basic:{
						equipValue:2
					}
				},
				skills:['guding_skill']
			},
			tengjia:{
				fullskin:true,
				type:'equip',
				subtype:'equip2',
				cardnature:'fire',
				ai:{
					equipValue:function(card,player){
						if(player.hasSkillTag('nofire')) return 10;
						if(player.hasSkill('yuhuo_nv')) return 0;
						if(player.hasSkillTag('maixie')&&player.hp>1) return 0;
						if(player.hasSkillTag('noDirectDamage')) return 10;
						if(get.damageEffect(player,player,player,'fire')>=0) return 10;
						var num=3-game.countPlayer(function(current){
							return get.attitude(current,player)<0;
						});
						if(player.hp==1) num+=4;
						if(player.hp==2) num+=1;
						if(player.hp==3) num--;
						if(player.hp>3) num-=4;
						return num;
					},
					basic:{
						equipValue:3
					},
				},
				skills:['tengjia1','tengjia2','tengjia3']
			},
			baiyin:{
				fullskin:true,
				type:'equip',
				subtype:'equip2',
				loseDelay:false,
				onLose:function(){
					if(player.isDamaged()) player.logSkill('baiyin_skill');
					var next=game.createEvent('baiyin_recover');
					event.next.remove(next);
					event.getParent().after.push(next);
					next.player=player;
					next.setContent(function(){
						player.recover();
					});
				},
				filterLose:function(card,player){
					if(player.hasSkillTag('unequip2')) return false;
					return true;
				},
				skills:['baiyin_skill'],
				tag:{
					recover:1,
				},
				ai:{
					order:9.5,
					equipValue:function(card,player){
						if(player.hp==player.maxHp) return 5;
						if(player.countCards('h','baiyin')) return 6;
						return 0;
					},
					basic:{
						equipValue:5
					}
				}
			},
		},
		skill:{
			qinglong_guozhan:{
				equipSkill:true,
				trigger:{player:'useCard'},
				forced:true,
				audio:'qinglong_skill',
				filter:function(event,player){
					return get.mode()=='guozhan'&&event.card.name=='sha';
				},
				content:function(){
					if(!_status.qinglong_guozhan) _status.qinglong_guozhan=[];
					_status.qinglong_guozhan=[];
					_status.qinglong_guozhan.add(trigger);
					game.countPlayer2(function(current){
						current.addTempSkill('qinglong_guozhan_mingzhi');
					});
					var next=game.createEvent('qinglong_guozhan');
					event.next.remove(next);
					trigger.after.add(next);
					next.setContent(function(){
						_status.qinglong_guozhan.remove(event.parent);
					});
				}
			},
			qinglong_guozhan_mingzhi:{
				ai:{
					nomingzhi:true,
					skillTagFilter:function(player){
						if(_status.qinglong_guozhan){
							for(var i=0;i<_status.qinglong_guozhan.length;i++){
								if(_status.qinglong_guozhan[i].targets.contains(player)) return true;
							}
						}
						return false;
					},
				}
			},
			hanbing_skill:{
				equipSkill:true,
				trigger:{source:'damageBegin2'},
				//direct:true,
				audio:true,
				filter:function(event){
					return event.card&&event.card.name=='sha'&&event.notLink()&&event.player.getCards('he').length>0;
				},
				//priority:1,
				check:function(event,player){
					var target=event.player;
					var eff=get.damageEffect(target,player,player);
					if(get.attitude(player,target)>0){
						if(eff>=0) return false;
						return true;
					}
					if(eff<=0) return true;
					if(target.hp==1) return false;
					if(event.num>1||player.hasSkill('tianxianjiu')||
						player.hasSkill('luoyi2')||player.hasSkill('reluoyi2')) return false;
					if(target.countCards('he')<2) return false;
					var num=0;
					var cards=target.getCards('he');
					for(var i=0;i<cards.length;i++){
						if(get.value(cards[i])>6) num++;
					}
					if(num>=2) return true;
					return false;
				},
				logTarget:"player",
				content:function(){
					"step 0"
					trigger.cancel();
					"step 1"
					if(trigger.player.countDiscardableCards(player,'he')){
						player.line(trigger.player);
						player.discardPlayerCard('he',trigger.player,true);
					}
					"step 2"
					if(trigger.player.countDiscardableCards(player,'he')){
						player.line(trigger.player);
						player.discardPlayerCard('he',trigger.player,true);
					}
				}
			},
			renwang_skill:{
				equipSkill:true,
				trigger:{target:'shaBegin'},
				forced:true,
				priority:6,
				audio:true,
				filter:function(event,player){
					if(player.hasSkillTag('unequip2')) return false;
					if(event.player.hasSkillTag('unequip',false,{
						name:event.card?event.card.name:null,
						target:player,
						card:event.card
					})) return false;
					return (event.card.name=='sha'&&get.color(event.card)=='black')
				},
				content:function(){
					trigger.cancel();
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(target.hasSkillTag('unequip2')) return;
							if(player.hasSkillTag('unequip',false,{
								name:card?card.name:null,
								target:player,
								card:card
							})||player.hasSkillTag('unequip_ai',false,{
								name:card?card.name:null,
								target:player,
								card:card
							})) return;
							if(card.name=='sha'&&get.color(card)=='black') return 'zerotarget';
						}
					}
				}
			},
			zhuge_skill:{
				equipSkill:true,
				audio:true,
				firstDo:true,
				trigger:{player:'useCard1'},
				forced:true,
				filter:function(event,player){
					return !event.audioed&&event.card.name=='sha'&&player.countUsed('sha',true)>1&&event.getParent().type=='phase';
				},
				content:function(){
					trigger.audioed=true;
				},
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha'){
							if(get.is.versus()||get.is.changban()){
								return num+3;
							}
							return Infinity;
						}
					}
				},
			},
			cixiong_skill:{
				equipSkill:true,
				trigger:{player:'useCardToPlayered'},
				audio:true,
				logTarget:'target',
				check:function(event,player){
					if(get.attitude(player,event.target)>0) return true;
					var target=event.target;
					return target.countCards('h')==0||!target.hasSkillTag('noh');
				},
				filter:function(event,player){
					if(event.card.name!='sha') return false;
					if(player.sex=='male'&&event.target.sex=='female') return true;
					if(player.sex=='female'&&event.target.sex=='male') return true;
					return false;
				},
				content:function(){
					"step 0"
					trigger.target.chooseToDiscard('弃置一张手牌，或令'+get.translation(player)+'摸一张牌').set('ai',function(card){
						var trigger=_status.event.getTrigger();
						return -get.attitude(trigger.target,trigger.player)-get.value(card);
					});
					"step 1"
					if(result.bool==false) player.draw();
				}
			},
			qinggang_skill:{
				equipSkill:true,
				audio:true,
				trigger:{
					player:'useCardToPlayered',
				},
				filter:function(event){
					return event.card.name=='sha';
				},
				forced:true,
				logTarget:'target',
				content:function(){
					trigger.target.addTempSkill('qinggang2');
					trigger.target.storage.qinggang2.add(trigger.card);
				},
				ai:{
					unequip_ai:true,
					skillTagFilter:function(player,tag,arg){
						if(arg&&arg.name=='sha') return true;
						return false;
					}
				}
			},
			qinggang2:{
				firstDo:true,
				ai:{unequip2:true},
				init:function(player,skill){
					if(!player.storage[skill]) player.storage[skill]=[];
				},
				onremove:true,
				trigger:{
					player:['damage','damageCancelled','damageZero'],
					target:['shaMiss','useCardToExcluded'],
				},
				charlotte:true,
				filter:function(event,player){
					return player.storage.qinggang2&&event.card&&player.storage.qinggang2.contains(event.card);
				},
				silent:true,
				forced:true,
				popup:false,
				priority:12,
				content:function(){
					player.storage.qinggang2.remove(trigger.card);
					if(!player.storage.qinggang2.length) player.removeSkill('qinggang2');
				},
			},
			qinglong_skill:{
				equipSkill:true,
				trigger:{player:'shaMiss'},
				direct:true,
				filter:function(event,player){
					if(get.mode()=='guozhan') return false;
					return player.canUse('sha',event.target,false)&&(player.hasSha()||_status.connectMode&&player.countCards('h'));
				},
				content:function(){
					"step 0"
					player.chooseToUse(get.prompt('qinglong'),function(card,player,event){
						if(get.name(card)!='sha') return false;
						return lib.filter.filterCard.apply(this,arguments);
					},trigger.target,-1).set('addCount',false).logSkill='qinglong_skill';
				}
			},
			zhangba_skill:{
				equipSkill:true,
				enable:['chooseToUse','chooseToRespond'],
				filterCard:true,
				selectCard:2,
				position:'h',
				viewAs:{name:'sha'},
				complexCard:true,
				filter:function(event,player){
					return player.countCards('h')>=2;
				},
				audio:true,
				prompt:'将两张手牌当冲使用或打出',
				check:function(card){
					var player = _status.event.player;
					if (player.hasSkillTag('noh')){
						return 10-get.value(card)+Math.random();
					}
					if(card.name=='sha') return 0;
					return 5-get.value(card);
				},
				ai:{
					respondSha:true,
					skillTagFilter:function(player){
						return player.countCards('h')>=2;
					},
				}
			},
			guanshi_skill:{
				equipSkill:true,
				trigger:{player:'shaMiss'},
				direct:true,
				audio:true,
				filter:function(event,player){
					return player.countCards('he',function(card){
						return card!=player.getEquip('guanshi');
					})>=2&&event.target.isAlive();
				},
				content:function(){
					"step 0"
					var next=player.chooseToDiscard(get.prompt('guanshi'),2,'he',function(card){
						return _status.event.player.getEquip('guanshi')!=card;
					});
					next.logSkill='guanshi_skill';
					next.set('ai',function(card){
						var evt=_status.event.getParent();
						if(get.attitude(evt.player,evt._trigger.target)<0){
							if(evt.player.hasSkill('jiu')||
							evt.player.hasSkill('tianxianjiu')||
							evt._trigger.target.hp==1){
								return 8-get.value(card)
							}
							return 5-get.value(card)
						}
						return -1;
					});
					"step 1"
					if(result.bool){
						trigger.untrigger();
						trigger.trigger('shaHit');
						trigger._result.bool=false;
						trigger._result.result=null;
					}
				}
			},
			fangtian_skill:{
				equipSkill:true,
				audio:true,
				trigger:{player:'useCard1'},
				forced:true,
				firstDo:true,
				filter:function(event,player){
					if(event.card.name!='sha'||get.mode()=='guozhan') return false;
					var card=event.card;
					var range;
					var select=get.copy(get.info(card).selectTarget);
					if(select==undefined){
						if(get.info(card).filterTarget==undefined) return false;
						range=[1,1];
					}
					else if(typeof select=='number') range=[select,select];
					else if(get.itemtype(select)=='select') range=select;
					else if(typeof select=='function') range=select(card,player);
					game.checkMod(card,player,range,'selectTarget',player);
					return range[1]!=-1&&event.targets.length>range[1];
				},
				content:function(){},
				mod:{
					selectTarget:function(card,player,range){
						if(card.name!='sha') return;
						if(get.mode()=='guozhan') return;
						if(range[1]==-1) return;
						var cards=player.getCards('h');
						if(!cards.length) return;
						for(var i=0;i<cards.length;i++){
							if(cards[i].classList.contains('selected')==false)
								return;
						}
						range[1]+=2;
					}
				}
			},
			fangtian_guozhan:{
				equipSkill:true,
				trigger:{player:'useCard2'},
				filter:function(event,player){
					if(get.mode()!='guozhan') return false;
					if(event.card.name!='sha') return false;
					return game.hasPlayer(function(target){
						if(event.targets.contains(target)) return false;
						if(!lib.filter.filterTarget(event.card,player,target)) return false;
						if(target.identity=='ye'||target.identity=='unknown') return true;
						for(var i=0;i<event.targets.length;i++){
							if(target.identity==event.targets[i].identity) return false;
						}
						return true;
					});
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('fangtian'),[1,Infinity],function(card,player,target){
						var cardx=_status.event.cardx;
						if(!lib.filter.filterTarget(cardx,player,target)) return false;
						var targets=_status.event.targets.slice(0).concat(ui.selected.targets);
						if(targets.contains(target)) return false;
						if(target.identity=='ye'||target.identity=='unknown') return true;
						for(var i=0;i<targets.length;i++){
							if(target.identity==targets[i].identity) return false;
						}
						return true;
					}).set('promptbar','none').set('cardx',trigger.card).set('targets',trigger.targets).set('ai',function(target){
						var player=_status.event.player;
						return get.effect(target,_status.event.cardx,player,player)
					});
					'step 1'
					if(result.bool){
						player.logSkill('fangtian_skill',result.targets);
						if(!player.storage.fangtian_guozhan_trigger) player.storage.fangtian_guozhan_trigger=[];
						player.storage.fangtian_guozhan_trigger.add(trigger.card);
						trigger.targets.addArray(result.targets);
						player.addTempSkill('fangtian_guozhan_trigger');
					}
				},
			},
			fangtian_guozhan_trigger:{
				trigger:{player:'shaMiss'},
				silent:true,
				onremove:true,
				content:function(){
					if(player.storage[event.name].contains(trigger.card)) trigger.getParent().excluded.addArray(trigger.getParent().targets);
				},
				group:'fangtian_guozhan_remove',
			},
			fangtian_guozhan_remove:{
				trigger:{player:['useCardAfter','useCardCancelled']},
				silent:true,
				filter:function(event,player){
					return player.storage.fangtian_guozhan_trigger&&player.storage.fangtian_guozhan_trigger.contains(event.card);
				},
				content:function(){
					player.storage.fangtian_guozhan_trigger.remove(trigger.card);
				}
			},
			qilin_skill:{
				equipSkill:true,
				trigger:{source:'damageBegin2'},
				filter:function(event,player){
					return event.card&&event.card.name=='sha'&&event.notLink()&&event.player.getCards('e',{subtype:['equip3','equip4','equip6']}).length>0
				},
				direct:true,
				audio:true,
				content:function(){
					"step 0"
					var att=(get.attitude(player,trigger.player)<=0);
					var next=player.chooseButton();
					next.set('att',att);
					next.set('createDialog',['是否发动【滑翔羽】，弃置'+get.translation(trigger.player)+'的一张坐骑牌？',trigger.player.getCards('e',{subtype:['equip3','equip4','equip6']})]);
					next.set('ai',function(button){
						if(_status.event.att) return get.buttonValue(button);
						return 0;
					});
					"step 1"
					if(result.bool){
						player.logSkill('qilin_skill',trigger.player);
						trigger.player.discard(result.links[0]);
					}
				}
			},
			bagua_skill:{
				equipSkill:true,
				trigger:{player:['chooseToRespondBegin','chooseToUseBegin']},
				filter:function(event,player){
					if(event.responded) return false;
					if(event.bagua_skill) return false;
					if(!event.filterCard({name:'shan'},player,event)) return false;
					if(event.name=='chooseToRespond'&&!lib.filter.cardRespondable({name:'shan'},player,event)) return false;
					if(player.hasSkillTag('unequip2')) return false;
					var evt=event.getParent();
					if(evt.player&&evt.player.hasSkillTag('unequip',false,{
						name:evt.card?evt.card.name:null,
						target:player,
						card:evt.card
					})) return false;
					return true;
				},
				audio:true,
				check:function(event,player){
					if(event&&(event.ai||event.ai1)){
						var ai=event.ai||event.ai1;
						var tmp=_status.event;
						_status.event=event;
						var result=ai({name:'shan'},_status.event.player,event);
						_status.event=tmp;
						return result>0;
					}
					return true;
				},
				content:function(){
					"step 0"
					trigger.bagua_skill=true;
					player.judge('bagua',function(card){return (get.color(card)=='red')?1.5:-0.5});
					"step 1"
					if(result.judge>0){
						trigger.untrigger();
						trigger.set('responded',true);
						trigger.result={bool:true,card:{name:'shan',isCard:true}}
					}
				},
				ai:{
					respondShan:true,
					effect:{
						target:function(card,player,target,effect){
							if(target.hasSkillTag('unequip2')) return;
							if(player.hasSkillTag('unequip',false,{
								name:card?card.name:null,
								target:player,
								card:card
							})||player.hasSkillTag('unequip_ai',false,{
								name:card?card.name:null,
								target:player,
								card:card
							})) return;
							if(get.tag(card,'respondShan')) return 0.5;
						}
					}
				}
			},
			_wuxie:{
				trigger:{player:['useCardToBegin','phaseJudge']},
				priority:5,
				popup:false,
				forced:true,
				filter:function(event,player){
					if(event.card.storage&&event.card.storage.nowuxie) return false;
					if(event.name!='phaseJudge'){
						if(event.getParent().nowuxie) return false;
						var info=get.info(event.card);
						if(!event.target){
							if(info.wuxieable) return true;
							return false;
						}
						if(event.player.hasSkillTag('playernowuxie',false,event.card)) return false;
						if(get.type(event.card)!='trick'&&!info.wuxieable) return false;
					}
					return true;
				},
				content:function(){
					'step 0'
					if(trigger.multitarget){
						event.targets=trigger.targets;
					}
					event.target=trigger.target;
					if(event.triggername=='phaseJudge'){
						event.target=trigger.player;
					}
					event.sourcex=event.targets||event.target;
					if(!event.targets&&trigger.targets&&trigger.targets.length==1){
						event.sourcex2=trigger.player;
					}
					event.source=trigger.player;
					event.state=true;
					event.card=trigger.card;
					event._global_waiting=true;
					event.tempnowuxie=(trigger.targets&&trigger.targets.length>1&&!trigger.multitarget);
					event.filterCard=function(card,player){
						if(get.name(card)!='wuxie') return false;
						return lib.filter.cardEnabled(card,player,'forceEnable');
					};
					event.send=function(player,state,isJudge,card,source,target,targets,id,id2,tempnowuxie,skillState){
						if(skillState){
							player.applySkills(skillState);
						}
						state=state?1:-1;
						var str='';
						if(isJudge){
							str+=get.translation(source)+'的';
						}
						if(isJudge){
							str+=get.translation(card,'viewAs');
						}
						else{
							str+=get.translation(card);
						}
						if((targets||target)&&!isJudge){
							str+='对'+get.translation(targets||target);
						}
						str+='将'+(state>0?'生效':'失效')+'，是否制策？';

						if(player.isUnderControl(true)&&!_status.auto&&!ui.tempnowuxie&&tempnowuxie){
							var translation=get.translation(card.name);
							if(translation.length>=4){
								translation=lib.translate[card.name+'_ab']||translation.slice(0,2);
							}
							ui.tempnowuxie=ui.create.control('不制策'+translation,ui.click.tempnowuxie,'stayleft');
							ui.tempnowuxie._origin=id2;
						}
						var next=player.chooseToUse({
							filterCard:function(card,player){
								if(get.name(card)!='wuxie') return false;
								return lib.filter.cardEnabled(card,player,'forceEnable');
							},
							prompt:str,
							type:'wuxie',
							state:state,
							_global_waiting:true,
							ai1:function(){
								if(isJudge){
									var name=card.viewAs||card.name;
									var info=lib.card[name];
									if(info&&info.ai&&info.ai.wuxie){
										var aiii=info.ai.wuxie(source,card,source,_status.event.player,state);
										if(typeof aiii=='number') return aiii;
									}
									if(Math.abs(get.attitude(_status.event.player,source))<3) return 0;
									if(source.hasSkillTag('nowuxie_judge')||source.hasSkillTag('guanxing')&&(source!=player||!source.hasSkill('guanxing_fail'))) return 0;
									if(name!='lebu'&&name!='bingliang'){
										if(source!=_status.event.player){
											return 0;
										}
									}
									var card2;
									if(name!=card.name){
										card2={name:name};
									}
									else{
										card2=card;
									}
									var eff=get.effect(source,card2,source,source);
									if(eff>=0) return 0;
									return state*get.attitude(_status.event.player,source);
								}
								else if(target){
									var triggerevent=_status.event.getTrigger();
									if(triggerevent&&triggerevent.parent&&
										triggerevent.parent.postAi&&
										triggerevent.player.isUnknown(_status.event.player)){
										return 0;
									}
									var info=get.info(card);
									if(info.ai&&info.ai.wuxie){
										var aiii=info.ai.wuxie(target,card,source,_status.event.player,state);
										if(typeof aiii=='number') return aiii;
									}
									if(info.multitarget&&targets){
										var eff=0;
										for(var i=0;i<targets.length;i++){
											eff+=get.effect(targets[i],card,source,_status.event.player)
										}
										return -eff*state;
									}
									if(Math.abs(get.attitude(_status.event.player,target))<3) return 0;
									return -get.effect(target,card,source,_status.event.player)*state;
								}
								else{
									var triggerevent=_status.event.getTrigger();
									if(triggerevent&&triggerevent.parent&&
										triggerevent.parent.postAi&&
										triggerevent.player.isUnknown(_status.event.player)){
										return 0;
									}
									var info=get.info(card);
									if(info.ai&&info.ai.wuxie){
										var aiii=info.ai.wuxie(target,card,source,_status.event.player,state);
										if(typeof aiii=='number') return aiii;
									}
									if(Math.abs(get.attitude(_status.event.player,source))<3) return 0;
									return -get.attitude(_status.event.player,source)*state;
								}
							},
							source:target,
							source2:targets,
							id:id,
							id2:id2
						});
						if(event.stateplayer&&event.statecard) next.set('respondTo',[event.stateplayer,event.statecard]);
						else if(!isJudge){
							next.set('respondTo',[source,card]);
						}
						if(game.online){
							_status.event._resultid=id;
							game.resume();
						}
						else{
							next.nouse=true;
						}
					};
					event.settle=function(){
						if(!event.state){
							if(event.triggername=='phaseJudge'){
								trigger.untrigger();
								trigger.cancelled=true;
							}
							else{
								trigger.cancel();
								if(event.guowuxie==true){
									if(trigger.target.identity!='ye'&&trigger.target.identity!='unknown'){
										trigger.getParent().excluded.addArray(game.filterPlayer(function(current){
											return current.identity==trigger.target.identity;
										}));
									}
								}
							}
						}
						event.finish();
					};
					'step 1'
					var list=game.filterPlayer(function(current){
						if(event.nowuxie) return false;
						if(event.directHit&&event.directHit.contains(current)) return false;
						if(event.triggername=='phaseJudge'){
							if(game.checkMod(trigger.card,player,current,'unchanged','wuxieJudgeEnabled',current)==false) return false;
							if(game.checkMod(trigger.card,player,current,'unchanged','wuxieJudgeRespondable',player)==false) return false;
							if(event.stateplayer&&event.statecard&&(game.checkMod(event.statecard,event.stateplayer,player,current,'unchanged','wuxieRespondable',event.stateplayer)==false)) return false;
						}
						else{
							if(!event.statecard&&trigger.getParent().directHit.contains(current)) return false;
							if(game.checkMod(trigger.card,player,trigger.target,current,'unchanged','wuxieEnabled',current)==false) return false;
							if(game.checkMod(trigger.card,player,trigger.target,current,'unchanged','wuxieRespondable',player)==false) return false;
							if(event.stateplayer&&event.statecard&&(game.checkMod(event.statecard,event.stateplayer,trigger.player,current,'unchanged','wuxieRespondable',event.stateplayer)==false)) return false;
						}
						return current.hasWuxie();
					});
					event.list=list;
					event.id=get.id();
					list.sort(function(a,b){
						return get.distance(event.source,a,'absolute')-get.distance(event.source,b,'absolute');
					});
					'step 2'
					if(event.list.length==0){
						event.settle();
					}
					else if(_status.connectMode&&(event.list[0].isOnline()||event.list[0]==game.me)){
						event.goto(4);
					}
					else{
						event.current=event.list.shift();
						event.send(event.current,event.state,event.triggername=='phaseJudge',
						event.card,event.source,event.target,event.targets,event.id,trigger.parent.id,event.tempnowuxie);
					}
					'step 3'
					if(result.bool){
						event.wuxieresult=event.current;
						event.wuxieresult2=result;
						event.goto(8);
					}
					else{
						event.goto(2);
					}
					'step 4'
					var id=event.id;
					var sendback=function(result,player){
						if(result&&result.id==id&&!event.wuxieresult&&result.bool){
							event.wuxieresult=player;
							event.wuxieresult2=result;
							game.broadcast('cancel',id);
							if(_status.event.id==id&&_status.event.name=='chooseToUse'&&_status.paused){
								return (function(){
									event.resultOL=_status.event.resultOL;
									ui.click.cancel();
									if(ui.confirm) ui.confirm.close();
								});
							}
						}
						else{
							if(_status.event.id==id&&_status.event.name=='chooseToUse'&&_status.paused){
								return (function(){
									event.resultOL=_status.event.resultOL;
								});
							}
						}
					};

					var withme=false;
					var withol=false;
					var list=event.list;
					for(var i=0;i<list.length;i++){
						if(list[i].isOnline()){
							withol=true;
							list[i].wait(sendback);
							list[i].send(event.send,list[i],event.state,event.triggername=='phaseJudge',
							event.card,event.source,event.target,event.targets,event.id,trigger.parent.id,event.tempnowuxie,get.skillState(list[i]));
							list.splice(i--,1);
						}
						else if(list[i]==game.me){
							withme=true;
							event.send(list[i],event.state,event.triggername=='phaseJudge',
							event.card,event.source,event.target,event.targets,event.id,trigger.parent.id,event.tempnowuxie);
							list.splice(i--,1);
						}
					}
					if(!withme){
						event.goto(6);
					}
					if(_status.connectMode){
						if(withme||withol){
							for(var i=0;i<game.players.length;i++){
								game.players[i].showTimer();
							}
						}
					}
					event.withol=withol;
					'step 5'
					if(result&&result.bool&&!event.wuxieresult){
						game.broadcast('cancel',event.id);
						event.wuxieresult=game.me;
						event.wuxieresult2=result;
					}
					'step 6'
					if(event.withol&&!event.resultOL){
						game.pause();
					}
					'step 7'
					for(var i=0;i<game.players.length;i++){
						game.players[i].hideTimer();
					}
					'step 8'
					if(event.wuxieresult){
						var next=event.wuxieresult.useResult(event.wuxieresult2);
						if(event.stateplayer&&event.statecard) next.respondTo=[event.stateplayer,event.statecard];
						else if(event.triggername!='phaseJudge'){
							next.respondTo=[trigger.player,trigger.card];
						}
					}
					'step 9'
					if(event.wuxieresult){
						if(result.wuxied){
							event.nowuxie=result.nowuxie;
							event.directHit=result.directHit;
							event.stateplayer=event.wuxieresult;
							if(event.wuxieresult2&&event.wuxieresult2.used){
								event.statecard=event.wuxieresult2.used;
							}
							else{
								event.statecard=true;
							}
							event.state=!event.state;
							event.goto(1);
						}
						else event.settle();
					}
					else if(event.list.length){
						event.goto(2);
					}
					else{
						event.settle();
					}
					delete event.resultOL;
					delete event.wuxieresult;
					delete event.wuxieresult2;
				}
			},
            			bingliang_changban:{
				cardSkill:true,
				unique:true,
				trigger:{player:'phaseDrawBegin'},
				silent:true,
				content:function(){
					trigger.num--;
				},
				group:'bingliang_changban2'
			},
			bingliang_changban2:{
				cardSkill:true,
				trigger:{player:'phaseDrawAfter'},
				silent:true,
				content:function(){
					if(player.enemy) player.enemy.draw();
				}
			},
			muniu_skill:{
				equipSkill:true,
				enable:'phaseUse',
				usable:1,
				filterCard:true,
				check:function(card){
					if(card.name=='du') return 20;
					var player=_status.event.player;
					var nh=player.countCards('h');
					if (player.hasSkill('husao_ning')||player.hasSkill('huanglang_yawen')){
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
					if(!player.needsToDiscard()){
						if(nh<3) return 0;
						if(nh==3) return 5-get.value(card);
						return 7-get.value(card);
					}
					return 10-get.useful(card);
				},
				discard:false,
				lose:true,
				toStorage:true,
				sync:function(muniu){
					if(game.online){
						return;
					}
					if(!muniu.cards){
						muniu.cards=[];
						// var player = _status.currentPhase;
						// game.addVideo('syncMuniuVideo',player,[muniu,muniu.cards]);
						
						
						// if (muniu.cards){
						// 	var player=_status.event.player;
						// 	if (player){
						// 		player.storage.muniu_skill6 = muniu.cards.length;
						// 		player.syncStorage('muniu_skill6');
						// 		player.markSkill('muniu_skill6');
						// 	}
						// }


					}
					for(var i=0;i<muniu.cards.length;i++){
						if(!muniu.cards[i].parentNode||muniu.cards[i].parentNode.id!='special'){
							muniu.cards.splice(i--,1);
						}
					}
					// if (muniu.cards){
					// 	var player=_status.event.player;
					// 	if (player){
					// 		player.storage.muniu_skill6 = muniu.cards.length;
					// 		player.syncStorage('muniu_skill6');
					// 		player.markSkill('muniu_skill6');
					// 	}
					// }
					game.broadcast(function(muniu,cards){
						muniu.cards=cards;
						// var player = _status.currentPhase;
						// game.addVideo('syncMuniuVideo',player,[muniu,muniu.cards]);
						
						// if (muniu.cards){
						// 	var player=_status.event.player;
						// 	if (player){
						// 		player.storage.muniu_skill6 = muniu.cards.length;
						// 		player.syncStorage('muniu_skill6');
						// 		player.markSkill('muniu_skill6');
						// 	}
						// }

					},muniu,muniu.cards);
				},
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				prepare:function(cards,player){
					player.$give(1,player,false);
				},
				content:function(){
					"step 0"
					for(var i=0;i<cards.length;i++){
						if(!cards[i].destroyed){
							ui.special.appendChild(cards[i]);
						}
						else{
							cards[i].remove();
							cards.splice(i--,1);
						}
					}
					var muniu=player.getEquip(5);
					if(!muniu||!cards.length){
						for(var i=0;i<cards.length;i++){
							cards[i].discard();
						}
						event.finish();
						return;
					}
					if(muniu.cards==undefined) muniu.cards=[];
					muniu.cards.push(cards[0]);
					if (muniu.cards){
						player.storage.muniu_skill6=[];
						for (var i = 0; i < muniu.cards.length; i++){
							player.storage.muniu_skill6.push(muniu.cards[i]);
						}
						player.syncStorage('muniu_skill6');
						player.markSkill('muniu_skill6');
					}
					game.broadcast(function(muniu,cards){
						muniu.cards=cards;
						// var player = _status.currentPhase;
						// game.addVideo('syncMuniuVideo',player,[muniu,cards]);
						if (muniu.cards){
							player.storage.muniu_skill6=[];
							for (var i = 0; i < muniu.cards.length; i++){
								player.storage.muniu_skill6.push(muniu.cards[i]);
							}
							player.syncStorage('muniu_skill6');
							player.markSkill('muniu_skill6');
						}
					},muniu,muniu.cards);
					var players=game.filterPlayer(function(current){
						if(!current.getEquip(5)&&current!=player&&!current.isTurnedOver()&&
							get.attitude(player,current)>=3&&get.attitude(current,player)>=3){
							return true;
						}
					});
					players.sort(lib.sort.seat);
					var choice=players[0];
					var next=player.chooseTarget('是否移动无尽酒壶？',function(card,player,target){
						return !target.isMin()&&player!=target&&target.isEmpty(5);
					});
					next.set('ai',function(target){
						if (player.hasSkill('yini_heng')){
							return -1;
						}
						return target==_status.event.choice?1:-1;
					});
					next.set('choice',choice);
					"step 1"
					if(result.bool){
						var card=player.getEquip(5);
						if (card.cards){
							result.targets[0].storage.muniu_skill6=[];
							for (var i = 0; i < card.cards.length; i++){
								result.targets[0].storage.muniu_skill6.push(card.cards[i]);
							}
							result.targets[0].syncStorage('muniu_skill6');
							player.markSkill('muniu_skill6');
						}
						result.targets[0].equip(card);
						player.$give(card,result.targets[0]);
						player.line(result.targets,'green');
						game.delay();
					}
					else{
						player.updateMarks();
					}
				},
				ai:{
					save:true,
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player,tag){
						var muniu=player.getEquip(5);
						if(!muniu||!muniu.cards) return false;
						for(var i=0;i<muniu.cards.length;i++){
							switch(tag){
								case 'respondSha':if(muniu.cards[i].name=='sha') return true;break;
								case 'respondShan':if(muniu.cards[i].name=='shan') return true;break;
								case 'save':{
									if(muniu.cards[i].name=='tao'||muniu.cards[i].name=='spell_zhiliaoshui') return true;
									if(player==_status.event.dying){
										if(muniu.cards[i].name=='jiu'||muniu.cards[i].name=='tianxianjiu') return true;
									}
									break;
								}
							}
						}
						return false;
					},
					order:1,
					expose:0.1,
					result:{
						player:1
					}
				}
			},
			muniu_skill2:{
				group:['muniu_skill3','muniu_skill4']
			},
			muniu_skill3:{
				trigger:{player:'chooseToRespondBegin'},
				cardSkill:true,
				filter:function(event,player){
					if(event.responded) return false;
					var muniu=player.getEquip(5);
					if(!muniu.cards) return false;
					lib.skill.muniu_skill.sync(muniu);
					for(var i=0;i<muniu.cards.length;i++){
						if(event.filterCard(muniu.cards[i],player,event)&&lib.filter.cardRespondable(muniu.cards[i],player,event)) return true;
					}
					return false;
				},
				direct:true,
				content:function(){
					"step 0"
					//加录像
					if (player.storage.muniu_skill6&&player.storage.muniu_skill6.length>0){
						var muniucards = player.storage.muniu_skill6;
						if (player.isUnderControl(true)){
							game.addVideo('showCards',player,['无尽酒壶',get.cardsInfo(muniucards)]);
						}
						else{
							game.addVideo('showCards',player,['无尽酒壶',get.cardsInfo(muniucards),'hidden']);
							var dialog=ui.create.dialog('无尽酒壶',[get.cardsInfo(muniucards),'blank']);
							setTimeout(function(){
								dialog.close();
							},1000);
						}
					}

					player.chooseButton(['无尽酒壶',player.getEquip(5).cards]).set('filterButton',function(button){
						var evt=_status.event.getTrigger();
						if(evt&&evt.filterCard){
							return evt.filterCard(button.link,_status.event.player,evt)&&lib.filter.cardRespondable(button.link,_status.event.player,evt);
						}
						return true;
					}).set('ai',function(button){
						var evt=_status.event.getTrigger();
						if(evt&&evt.ai){
							var tmp=_status.event;
							_status.event=evt;
							var result=evt.ai(button.link,_status.event.player,evt);
							_status.event=tmp;
							return result;
						}
						return 1;
					});
					"step 1"
					if(result.bool){
						trigger.untrigger();
						trigger.responded=true;
						trigger.result={bool:true,card:result.links[0],cards:result.links.slice(0)};
						var muniu=player.getEquip(5);
						muniu.cards.remove(result.links[0]);
						lib.skill.muniu_skill.sync(muniu);
						if (muniu.cards){
							player.storage.muniu_skill6=[];
							for (var i = 0; i < muniu.cards.length; i++){
								player.storage.muniu_skill6.push(muniu.cards[i]);
							}
							player.syncStorage('muniu_skill6');
							player.markSkill('muniu_skill6');
						}
						player.updateMarks();
					}
				},
				ai:{
					order:4,
					useful:-1,
					value:-1
				}
			},
			muniu_skill4:{
				enable:'chooseToUse',
				filter:function(event,player){
					var muniu=player.getEquip(5);
					if(!muniu.cards) return false;
					lib.skill.muniu_skill.sync(muniu);
					for(var i=0;i<muniu.cards.length;i++){
						if(event.filterCard(muniu.cards[i],player,event)) return true;
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						//加录像
						if (player.storage.muniu_skill6&&player.storage.muniu_skill6.length>0){
							var muniucards = player.storage.muniu_skill6;
							if (player.isUnderControl(true)){
								game.addVideo('showCards',player,['无尽酒壶',get.cardsInfo(muniucards)]);
							}
							else{
								game.addVideo('showCards',player,['无尽酒壶',get.cardsInfo(muniucards),'hidden']);
								var dialog=ui.create.dialog('无尽酒壶',[get.cardsInfo(muniucards),'blank']);
								setTimeout(function(){
									dialog.close();
								},1000);
							}
						}
						return ui.create.dialog('无尽酒壶',player.getEquip(5).cards,'hidden');
					},
					filter:function(button,player){
						var evt=_status.event.getParent();
						if(evt&&evt.filterCard){
							return evt.filterCard(button.link,player,evt);
						}
						return true;
					},
					check:function(button){
						if(_status.event.getParent().type!='phase') return 1;
						if(button.link.name=='du') return 10;
						var player=_status.event.player;
						if(player.getUseValue(button.link)>0) return get.order(button.link);
						return -1;
					},
					backup:function(links,player){
						return {
							filterCard:function(){return false},
							selectCard:-1,
							viewAs:links[0],
							onuse:function(result,player){
								var muniu=player.getEquip(5);
								if(muniu&&muniu.cards){
									muniu.cards.remove(result.card);
									lib.skill.muniu_skill.sync(muniu);
									if (muniu.cards){
										player.storage.muniu_skill6=[];
										for (var i = 0; i < muniu.cards.length; i++){
											player.storage.muniu_skill6.push(muniu.cards[i]);
										}
										player.syncStorage('muniu_skill6');
										player.markSkill('muniu_skill6');
									}
								}
								if (muniu.cards){
									player.storage.muniu_skill6=[];
									for (var i = 0; i < muniu.cards.length; i++){
										player.storage.muniu_skill6.push(muniu.cards[i]);
									}
									player.syncStorage('muniu_skill6');
									player.markSkill('muniu_skill6');
								}
								player.updateMarks();
							}
						}
					},
					prompt:function(links){
						return '选择'+get.translation(links)+'的目标';
					},
				},
				ai:{
					order:function(item,player){
						var event=_status.event;
						if(event.type!='phase') return 4;
						if(!player) return -1;
						var muniu=player.getEquip('muniu');
						if(!muniu||!muniu.cards) return -1;
						var order=0;
						for(var i=0;i<muniu.cards.length;i++){
							if(player.getUseValue(muniu.cards[i])>0){
								var order2=get.order(muniu.cards[i]);
								if(order2>order) order=order2
							}
						}
						return order+0.1;
					},
					result:{
						player:function(player){
							if(_status.event.dying) return get.attitude(player,_status.event.dying);
							return 1;
						}
					},
					useful:-1,
					value:-1
				}
			},
			muniu_skill6:{
				mark:true,
				intro:{
					// content:'cards',
					content:function(storage,player){
						var muniu=player.getEquip(5);
						if(!muniu||!muniu.cards||!muniu.cards.length) {
							// return '共有〇张牌';
							if(player.isUnderControl(true)&&player.storage.muniu_skill6&&player.storage.muniu_skill6.length>0){
								dialog.addAuto(player.storage.muniu_skill6);
								return;
							}
							else{
								return '共有'+get.cnNumber(player.storage.muniu_skill6.length)+'张牌';
							}
						}
						if(player.isUnderControl(true)&&muniu.cards&&muniu.cards.length>0){
							return get.translation(muniu.cards);
						}
						else{
							return '共有'+get.cnNumber(muniu.cards.length)+'张牌';
						}
					},
					mark:function(dialog,storage,player){
						var muniu=player.getEquip(5);
						if(!muniu||!muniu.cards||!muniu.cards.length) {
							// return '共有〇张牌';
							if(player.isUnderControl(true)&&player.storage.muniu_skill6&&player.storage.muniu_skill6.length>0){
								dialog.addAuto(storage);
								return;
							}
							else{
								return '共有'+get.cnNumber(player.storage.muniu_skill6.length)+'张牌';
							}
						}
						if(player.isUnderControl(true)&&muniu.cards&&muniu.cards.length>0){
							dialog.addAuto(muniu.cards);
						}
						else{
							return '共有'+get.cnNumber(muniu.cards.length)+'张牌';
						}
					},
					markcount:function(storage,player){
						var muniu=player.getEquip(5);
						if(muniu&&muniu.cards) {
							return muniu.cards.length;
						}
						else if (player.storage.muniu_skill6){
							return player.storage.muniu_skill6.length;
						}
						else{
							return 0;
						}
					}
				}
			},
			muniu_skill7:{
				filter:function(){return false},
				hiddenCard:function(player,name){
					var muniu=player.getEquip(5);
					if(!muniu.cards) return false;
					lib.skill.muniu_skill.sync(muniu);
					for(var i=0;i<muniu.cards.length;i++){
						if(muniu.cards[i].name==name) return true;
					}
					return false;
				},
			},
			huogong2:{},
			jiu:{
				trigger:{player:'useCard1'},
				filter:function(event){
					return event.card&&event.card.name=='sha';
				},
				forced:true,
				charlotte:true,
				firstDo:true,
				content:function(){
					if(!trigger.baseDamage) trigger.baseDamage=1;
					trigger.baseDamage+=player.storage.jiu;
					trigger.jiu=true;
					trigger.jiu_add=player.storage.jiu;
					game.addVideo('jiuNode',player,false);
					game.broadcastAll(function(player){
						player.removeSkill('jiu');
					},player);
				},
				temp:true,
				vanish:true,
				silent:true,
				popup:false,
				nopop:true,
				onremove:function(player){
					if(player.node.jiu){
						player.node.jiu.delete();
						player.node.jiu2.delete();
						delete player.node.jiu;
						delete player.node.jiu2;
					}
					delete player.storage.jiu;
				},
				ai:{
					damageBonus:true
				},
				group:'jiu2'
			},
			jiu2:{
				trigger:{player:'useCardAfter',global:'phaseAfter'},
				priority:2,
				firstDo:true,
				charlotte:true,
				filter:function(event){
					if(event.name=='useCard') return (event.card&&(event.card.name=='sha'));
					return true;
				},
				forced:true,
				popup:false,
				audio:false,
				content:function(){
					game.broadcastAll(function(player){
						player.removeSkill('jiu');
					},player);
					game.addVideo('jiuNode',player,false);
				},
			},
			guding_skill:{
				equipSkill:true,
				audio:true,
				trigger:{source:'damageBegin1'},
				filter:function(event){
					if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2') return false;
					if(event.card&&event.card.name=='sha'){
						if(event.player.countCards('h')==0) return true;
					}
					return false;
				},
				forced:true,
				content:function(){
					trigger.num++;
				},
				ai:{
					effect:{
						player:function(card,player,target,current){
							if(card.name=='sha'&&target.countCards('h')==0&&!target.hasSkillTag('filterDamage',null,{
								player:player,
								card:card,
							})) return [1,0,1,-3];
						}
					}
				}
			},
			tengjia1:{
				equipSkill:true,
				trigger:{target:['useCardToBefore']},
				forced:true,
				priority:6,
				audio:true,
				filter:function(event,player){
					if(player.hasSkillTag('unequip2')) return false;
					if(event.player.hasSkillTag('unequip',false,{
						name:event.card?event.card.name:null,
						target:player,
						card:event.card
					})) return false;
					if(event.card.name=='nanman') return true;
					if(event.card.name=='wanjian') return true;
				},
				content:function(){
					trigger.cancel();
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(target.hasSkillTag('unequip2')) return;
							if(player.hasSkillTag('unequip',false,{
								name:card?card.name:null,
								target:player,
								card:card
							})||player.hasSkillTag('unequip_ai',false,{
								name:card?card.name:null,
								target:player,
								card:card
							})) return;
							if(card.name=='nanman'||card.name=='wanjian') return 'zerotarget';
							if(card.name=='sha'){
								var equip1=player.getEquip(1);
								if(equip1&&equip1.name=='zhuque') return 1.9;
								if(!card.nature) return 'zerotarget';
							}
						}
					}
				}
			},
			tengjia2:{
				equipSkill:true,
				trigger:{player:'damageBegin3'},
				filter:function(event,player){
					if(event.nature!='fire') return false;
					if(player.hasSkillTag('unequip2')) return false;
					if(event.source&&event.source.hasSkillTag('unequip',false,{
						name:event.card?event.card.name:null,
						target:player,
						card:event.card
					})) return false;
					return true;
				},
				audio:true,
				forced:true,
				content:function(){
					trigger.num++;
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(card.name=='sha'){
								if(card.nature=='fire') return 2;
								if(player.hasSkill('zhuque_skill')) return 1.9;
							}
							if(get.tag(card,'fireDamage')&&current<0) return 2;
						}
					}
				}
			},
			tengjia3:{
				equipSkill:true,
				audio:'tengjia1',
				trigger:{target:'shaBefore'},
				forced:true,
				filter:function(event,player){
					if(player.hasSkillTag('unequip2')) return false;
					if(event.player.hasSkillTag('unequip',false,{
						name:event.card?event.card.name:null,
						target:player,
						card:event.card
					})) return false;
					if(event.card.name=='sha'&&!event.card.nature) return true;
					return false;
				},
				content:function(){
					trigger.cancel();
				},
			},
			baiyin_skill:{
				equipSkill:true,
				trigger:{player:'damageBegin4'},
				forced:true,
				audio:true,
				filter:function(event,player){
					if(event.num<=1) return false;
					if(player.hasSkillTag('unequip2')) return false;
					if(event.source&&event.source.hasSkillTag('unequip',false,{
						name:event.card?event.card.name:null,
						target:player,
						card:event.card
					})) return false;
					return true;
				},
				//priority:-10,
				content:function(){
					trigger.num=1;
				},
				ai:{
					filterDamage:true,
					skillTagFilter:function(player,tag,arg){
						if(player.hasSkillTag('unequip2')) return false;
						if(arg&&arg.player){
							if(arg.player.hasSkillTag('unequip',false,{
								name:arg.card?arg.card.name:null,
								target:player,
								card:arg.card,
							})) return false;
							if(arg.player.hasSkillTag('unequip_ai',false,{
								name:arg.card?arg.card.name:null,
								target:player,
								card:arg.card,
							})) return false;
							if(arg.player.hasSkillTag('jueqing',false,player)) return false;
						}
					},
				},
			},
			zhuque_skill:{
				equipSkill:true,
				trigger:{player:'useCard1'},
				//priority:7,
				filter:function(event,player){
					if(event.card.name=='sha'&&!event.card.nature) return true;
				},
				audio:true,
				check:function(event,player){
					var eff=0;
					var has = game.hasPlayer(function(current){
						return current.hasSkill('bihai_shui');
					});
					if (has){
						eff -= 10;
					}
					for(var i=0;i<event.targets.length;i++){
						var target=event.targets[i];
						if (target.hasSkillTag('nofire')){
							eff -= 50;
						}
						var eff1=get.damageEffect(target,player,player);
						var eff2=get.damageEffect(target,player,player,'fire');
						eff+=eff2;
						eff-=eff1;
					}
					return eff>=0;
				},
				content:function(){
					trigger.card.nature='fire';
					if(get.itemtype(trigger.card)=='card'){
						var next=game.createEvent('zhuque_clear');
						next.card=trigger.card;
						event.next.remove(next);
						trigger.after.push(next);
						next.setContent(function(){
							delete card.nature;
						});
					}
				}
			},
			zhuque_skill2:{
				trigger:{player:'useCardAfter'},
				forced:true,
				popup:false,
				content:function(){
					delete player.storage.zhuque_skill.nature;
				}
			},
			huogon2:{},
		},
		translate:{
			sha:'冲',
			huosha:'火冲',
			leisha:'雷冲',
			shan:'守',
			tao:'药',
			bagua:'烟鬼雪茄',
			bagua_bg:'卦',
			bagua_skill:'烟鬼雪茄',
			jueying:'猫头鹰',//'绝影',
			dilu:'寒武奇虾',//'的卢',
			zhuahuang:'白象',//'爪黄飞电',
			jueying_bg:'+马',
			dilu_bg:'+马',
			zhuahuang_bg:'+马',
			chitu:'赤兔马',
			chitu_bg:'-马',
			dawan:'巨蟒',//'大宛',
			dawan_bg:'-马',
			zixin:'剑齿虎',//'紫骓',
			zixin_bg:'-马',
			zhuge:'暗烟玫瑰',
			cixiong:'鬼斗七星尺',
			zhuge_bg:'弩',
			cixiong_bg:'双',
			qinggang:'魔瞳',
			qinglong:'新月羽毛扇',
			zhangba:'玫璃血饮',
			qinglong_bg:'偃',
			zhangba_bg:'蛇',
			guanshi:'睚眦剑',
			fangtian:'天狼幽爪',
			qilin:'滑翔羽',
			qilin_bg:'弓',
			zhuge_skill:'暗烟玫瑰',
			cixiong_skill:'鬼斗七星尺',
			qinggang_skill:'魔瞳',
			qinglong_skill:'新月羽毛扇',
			qinglong_guozhan:'新月羽毛扇',
			zhangba_skill:'玫璃血饮',
			guanshi_skill:'睚眦剑',
			fangtian_skill:'天狼幽爪',
			qilin_skill:'滑翔羽',
			wugu:'饕餮盛宴',
			taoyuan:'甘霖天降',
			nanman:'红莲醉舞',
			wanjian:'乱剑穿心',
			wuzhong:'赌运亨通',
			juedou:'酣战',
			wugu_bg:'谷',
			taoyuan_bg:'园',
			nanman_bg:'蛮',
			wanjian_bg:'箭',
			wuzhong_bg:'生',
			juedou_bg:'斗',
			shunshou:'盗亦有道',
			guohe:'玉石同碎',
			guohe_bg:'拆',
			jiedao:'借刀杀人',
			wuxie:'以策制策',
			wuxie_bg:'懈',
			lebu:'囹圄迷魂',
			shandian:'闪电',
			shandian_bg:'电',
			hanbing:'百草仗',
			renwang:'九幽坎肩',
			hanbing_bg:'冰',
			renwang_bg:'盾',
			hanbing_skill:'百草仗',
			renwang_skill:'九幽坎肩',
			hanbing_info:'当你使用【冲】造成伤害时，你可以防止此伤害，改为依次弃置目标角色的两张牌。',
			hanbing_skill_info:'当你使用【冲】造成伤害时，你可以防止此伤害，改为依次弃置目标角色的两张牌。',
			renwang_info:'锁定技，黑色的【冲】对你无效',
			renwang_skill_info:'锁定技，黑色的【冲】对你无效',
			sha_info:'出牌阶段，对攻击范围内的一名角色使用，令其使用一张【守】，否则受到一点伤害。',
			shan_info:'抵消一张【冲】',
			tao_info:'出牌阶段，对自己使用，回复1点体力；有角色进入濒死阶段时，对濒死角色使用，令其回复1点体力。',
			bagua_info:'当你需要使用或打出一张【守】时，你可以进行一次判定，若判定结果为红色，视为你使用或打出了一张【守】。',
			bagua_skill_info:'当你需要使用或打出一张【守】时，你可以进行一次判定，若判定结果为红色，视为你使用或打出了一张【守】。',
			jueying_info:'锁定技，其他角色计算与你的距离+1。',
			dilu_info:'锁定技，其他角色计算与你的距离+1。',
			zhuahuang_info:'锁定技，其他角色计算与你的距离+1。',
			chitu_info:'锁定技，你计算与其他角色的距离-1。',
			dawan_info:'锁定技，你计算与其他角色的距离-1。',
			zixin_info:'锁定技，你计算与其他角色的距离-1。',
			zhuge_skill_info:'锁定技，你于出牌阶段内使用【冲】无次数限制。',
			zhuge_info:'锁定技，你于出牌阶段内使用【冲】无次数限制。',
			cixiong_skill_info:'当你使用【冲】指定一名异性的目标角色后，你可以令其选择一项：1.弃置一张手牌；2.令你摸一张牌。',
			cixiong_info:'当你使用【冲】指定一名异性的目标角色后，你可以令其选择一项：1.弃置一张手牌；2.令你摸一张牌。',
			qinggang_skill_info:'锁定技，当你使用【冲】指定一名目标角色后，你令其防具技能无效直到此【冲】被抵消或造成伤害。',
			qinggang_info:'锁定技，当你使用【冲】指定一名目标角色后，你令其防具技能无效直到此【冲】被抵消或造成伤害。',
			qinglong_skill_info:'当你使用的【冲】被目标角色使用的【守】抵消时，你可以对其使用一张【冲】（无距离限制）。',
			qinglong_guozhan_info:'锁定技，当你使用【冲】指定目标后，所有目标角色不能明置武将牌直到此【冲】结算完毕为止。',
			qinglong_info:'当你使用的【冲】被目标角色使用的【守】抵消时，你可以对其使用一张【冲】（无距离限制）。',
			qinglong_info_guozhan:'锁定技，当你使用【冲】指定目标后，所有目标角色不能明置武将牌直到此【冲】结算完毕为止。',
			zhangba_skill_info:'你可以将两张手牌当【冲】使用或打出。',
			zhangba_info:'你可以将两张手牌当【冲】使用或打出。',
			guanshi_skill_info:'当你使用的【冲】被目标角色使用的【守】抵消时，你可以弃置两张牌，令此【冲】依然对其造成伤害。',
			guanshi_info:'当你使用的【冲】被目标角色使用的【守】抵消时，你可以弃置两张牌，令此【冲】依然对其造成伤害。',
			fangtian_skill_info:'你使用的【冲】若是你最后的手牌，你可以额外选择至多两个目标。',
			fangtian_info:'你使用的【冲】若是你最后的手牌，你可以额外选择至多两个目标。',
			fangtian_info_guozhan:'你使用【冲】可以指定任意名角色为目标（不能包含势力相同的角色），若任意一名目标角色使用【守】抵消了此【冲】，则此【冲】对剩余的目标角色无效。',
			qilin_skill_info:'当你使用【冲】对目标角色造成伤害时，你可以弃置其器具区里的一张坐骑牌。',
			qilin_info:'当你使用【冲】对目标角色造成伤害时，你可以弃置其器具区里的一张坐骑牌。',
			wugu_info:'出牌阶段，对所有角色使用。（选择目标后）你从牌堆顶亮出等同于目标数量的牌，每名目标角色获得这些牌中（剩余的）的任意一张。',
			taoyuan_info:'出牌阶段，对所有角色使用。每名目标角色回复1点体力。',
			nanman_info:'出牌阶段，对所有其他角色使用。每名目标角色需打出一张【冲】（当手牌中没有【冲】时，【酒】也能代替【冲】打出），否则受到1点伤害。',
			wanjian_info:'出牌阶段，对所有其他角色使用。每名目标角色需打出一张【守】，否则受到1点伤害。',
			wuzhong_info:'出牌阶段，对你使用。你摸两张牌。',
			juedou_info:'出牌阶段，对一名其他角色使用。由其开始，其与你轮流打出一张【冲】，当手牌中没有【冲】时，【酒】也能代替【冲】打出，直到其中一方未打出【冲】或【酒】为止。未打出【冲】或【酒】的一方受到另一方对其造成的1点伤害。',
			shunshou_info:'出牌阶段，对距离为1且区域里有牌的一名其他角色使用。你获得其区域里的一张牌。',
			guohe_info:'出牌阶段，对区域里有牌的一名其他角色使用。你弃置其区域里的一张牌。',
			jiedao_info:'出牌阶段，对器具区里有武器牌且有使用【冲】的目标的一名其他角色使用。令其对你指定的一名角色使用一张【冲】，否则将其器具区里的武器牌交给你。',
			wuxie_info:'一张策略牌生效前，对此牌使用。抵消此牌对一名角色产生的效果，或抵消另一张【以策制策】产生的效果。',
			lebu_info:'出牌阶段，对一名其他角色使用。若判定结果不为红桃，跳过其出牌阶段。',
			shandian_info:'出牌阶段，对自己使用。若判定结果为黑桃2~9，则目标角色受到3点雷电伤害。若判定不为黑桃2~9，将之移动到下家的判定区里。',

            jiu:'酒',
			jiu_info:'出牌阶段，对自己使用，令自己的下一张使用的【冲】造成的伤害+1（每回合限使用1次）；濒死阶段，对自己使用，回复1点体力',
			huogong:'纵火',
			tiesuo:'锁心连环',
			tiesuo_info:'出牌阶段使用，选择1至2个角色，分别令这些角色横置进入连环状态或重置解除连环状况',
			huogong_bg:'攻',
			huogong_info:'目标角色展示一张手牌，然后若你能弃掉一张与所展示牌相同花色的手牌，则纵火对该角色造成1点火焰伤害。',
			tiesuo_bg:'索',
			bingliang:'海盗洗掠',
			hualiu:'九幽鸟',//'骅骝',
			zhuque:'熔炎战锤',
			bingliang_bg:'粮',
			bingliang_info:'目标角色判定阶段进行判定：若判定结果不为梅花，则跳过该角色的摸牌阶段。',
			hualiu_bg:'+马',
			hualiu_info:'你的防御距离+1',
			zhuque_bg:'扇',
			zhuque_skill:'熔炎战锤',
			zhuque_info:'你可以将一张普通【冲】当具火焰伤害的【冲】使用。',
			guding:'断魂琴',
			guding_info:'锁定技，当你使用【冲】对目标角色造成伤害时，若其没有手牌，此伤害+1。',
			guding_skill:'断魂琴',
			tengjia:'紫砂宝衣',
			tengjia_info:'锁定技，【红莲醉舞】、【乱剑穿心】和普通【冲】对你无效。你每次受到火焰伤害时，该伤害+1。',
			tengjia1:'紫砂宝衣',
			tengjia2:'紫砂宝衣',
			tengjia3:'紫砂宝衣',
			baiyin:'涂山狐裘',
			baiyin_info:'锁定技，你每次受到伤害时，最多承受1点伤害（防止多余的伤害）；当你失去器具区里的【涂山狐裘】时，你回复1点体力。',
			baiyin_skill:'涂山狐裘',
			
			muniu:'无尽酒壶',
			muniu_bg:'壶',//'牛',
			muniu_skill:'酒壶',
			muniu_skill2:'无尽',
			muniu_skill3:'无尽',
			muniu_skill4:'无尽',
			muniu_skill6:'无尽酒壶',
			muniu_skill6_bg:'壶',
			muniu_skill4_backup:'无尽',
			muniu_info:'出牌阶段限一次，你可以将一张手牌扣置于你器具区里的【无尽酒壶】下，若如此做，你可以将此器具移动到一名其他角色的器具区里；你可以使用或打出此器具牌下的牌。',
			muniu_skill_info:'出牌阶段限一次，你可以将一张手牌扣置于你器具区里的【无尽酒壶】下，若如此做，你可以将此器具移动到一名其他角色的器具区里；你可以使用或打出此器具牌下的牌。',
		},
		list:[
			["spade",7,"sha"],
			["spade",8,"sha"],
			["spade",8,"sha"],
			["spade",9,"sha"],
			["spade",9,"sha"],
			["spade",10,"sha"],
			["spade",10,"sha"],
			["club",2,"sha"],
			["club",3,"sha"],
			["club",4,"sha"],
			["club",5,"sha"],
			["club",6,"sha"],
			["club",7,"sha"],
			["club",8,"sha"],
			["club",8,"sha"],
			["club",9,"sha"],
			["club",9,"sha"],
			["club",10,"sha"],
			["club",10,"sha"],
			["club",11,"sha"],
			["club",11,"sha"],
			["heart",10,"sha"],
			["heart",10,"sha"],
			["heart",11,"sha"],
			["diamond",6,"sha"],
			["diamond",7,"sha"],
			["diamond",8,"sha"],
			["diamond",9,"sha"],
			["diamond",10,"sha"],
			["diamond",13,"sha"],
			["heart",2,"shan"],
			["heart",2,"shan"],
			["heart",13,"shan"],
			["diamond",2,"shan"],
			["diamond",2,"shan"],
			["diamond",3,"shan"],
			["diamond",4,"shan"],
			["diamond",5,"shan"],
			["diamond",6,"shan"],
			["diamond",7,"shan"],
			["diamond",8,"shan"],
			["diamond",9,"shan"],
			["diamond",10,"shan"],
			["diamond",11,"shan"],
			["diamond",11,"shan"],
			["heart",3,"tao"],
			["heart",4,"tao"],
			["heart",6,"tao"],
			["heart",7,"tao"],
			["heart",8,"tao"],
			["heart",9,"tao"],
			["heart",12,"tao"],
			["diamond",12,"tao"],

			["spade",2,"bagua"],
			["club",2,"bagua"],
			["spade",5,"jueying"],
			["club",5,"dilu"],
			["heart",13,"zhuahuang"],
			["heart",5,"chitu"],
			["spade",13,"dawan"],
			["club",7,"zixin"],
			["club",1,"zhuge"],
			["diamond",1,"zhuge"],
			["spade",2,"cixiong"],
			["spade",6,"qinggang"],
			["spade",5,"qinglong"],
			["spade",12,"zhangba"],
			["diamond",5,"guanshi"],
			["diamond",12,"fangtian"],
			["heart",5,"qilin"],

			["heart",3,"wugu"],
			["heart",4,"wugu"],
			["heart",1,"taoyuan"],
			["heart",1,"nanman"],
			["diamond",13,"nanman"],
			["diamond",13,"nanman"],
			["spade",7,"wanjian"],
			["spade",1,"juedou"],
			["club",1,"juedou"],
			["diamond",1,"juedou"],
			["heart",7,"wuzhong"],
			["heart",8,"wuzhong"],
			["heart",9,"wuzhong"],
			["heart",11,"wuzhong"],
			["spade",3,'shunshou'],
			["spade",4,'shunshou'],
			["spade",11,'shunshou'],
			["diamond",3,'shunshou'],
			["diamond",4,'shunshou'],
			["spade",3,'guohe'],
			["spade",4,'guohe'],
			["spade",12,'guohe'],
			["club",3,'guohe'],
			["club",4,'guohe'],
			["heart",12,'guohe'],
			["club",12,'jiedao'],
			["club",13,'jiedao'],
			["spade",11,'wuxie'],
			["club",12,'wuxie'],
			["club",13,'wuxie'],
			["spade",6,'lebu'],
			["club",6,'lebu'],
			["heart",6,'lebu'],
			["spade",1,'shandian'],
			["spade",2,'hanbing'],
			["club",2,'renwang'],
			["heart",12,'shandian'],
			["diamond",12,'wuxie'],


            ["heart",4,"sha","fire"],
			["heart",7,"sha","fire"],
			["heart",10,"sha","fire"],
			["diamond",4,"sha","fire"],
			["diamond",5,"sha","fire"],
			["spade",4,"sha","thunder"],
			["spade",5,"sha","thunder"],
			["spade",6,"sha","thunder"],
			["spade",7,"sha","thunder"],
			["spade",8,"sha","thunder"],
			["club",5,"sha","thunder"],
			["club",6,"sha","thunder"],
			["club",7,"sha","thunder"],
			["club",8,"sha","thunder"],
			["heart",8,"shan"],
			["heart",9,"shan"],
			["heart",11,"shan"],
			["heart",12,"shan"],
			["diamond",6,"shan"],
			["diamond",7,"shan"],
			["diamond",8,"shan"],
			["diamond",10,"shan"],
			["diamond",11,"shan"],
			["heart",5,"tao"],
			["heart",6,"tao"],
			["diamond",2,"tao"],
			["diamond",3,"tao"],
			["diamond",9,"jiu"],
			["spade",3,"jiu"],
			["spade",9,"jiu"],
			["club",3,"jiu"],
			["club",9,"jiu"],

			["spade",13,"hualiu"],
			["club",1,"baiyin"],
			["spade",2,"tengjia"],
			["club",2,"tengjia"],
			["spade",1,"guding"],
			["diamond",1,"zhuque"],

			["heart",2,"huogong"],
			["heart",3,"huogong"],
			["diamond",12,"huogong"],
			["spade",11,"tiesuo"],
			["spade",12,"tiesuo"],
			["club",10,"tiesuo"],
			["club",11,"tiesuo"],
			["club",12,"tiesuo"],
			["club",13,"tiesuo"],
			["heart",13,"wuxie"],
			["heart",13,"wuxie"],
			["spade",13,"wuxie"],
			["spade",10,"bingliang"],
			["club",4,"bingliang"],
			
			['spade',9,'muniu'],
		],
	};
});
