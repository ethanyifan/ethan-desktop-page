(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0E5l":function(t,n,e){"use strict";e.r(n),e.d(n,"CalendarApp",function(){return _}),e.d(n,"CalendarModule",function(){return P});var o=e("PCNd"),a=e("i2Gj"),c=e("fXoL"),r=e("YLzM"),i=e("vv9Y"),l=e("5nFA"),d=e("D8zh"),g=e("7NfB"),s=e("iwKZ"),b=e("ofXK"),M=e("6oNp");function p(t,n){1&t&&(c.Vb(0,"div",28),c.zc(1,"\u4eca\u5929"),c.Ub())}function u(t,n){if(1&t){const t=c.Wb();c.Vb(0,"div",29),c.cc("click",function(){return c.sc(t),c.ec().switchToToday()}),c.zc(1,"\u8df3\u8f6c\u5230\u4eca\u5929"),c.Ub()}}function h(t,n){if(1&t&&(c.Vb(0,"div",31),c.Qb(1,"i",32),c.Vb(2,"div",20),c.Vb(3,"div",21),c.zc(4),c.Ub(),c.Vb(5,"div",7),c.zc(6),c.fc(7,"dateFixer"),c.Ub(),c.Ub(),c.Ub()),2&t){const t=n.$implicit;c.Cb(1),c.kc("icon","default"==t.status?"circle":"check_circle"),c.Cb(3),c.Ac(t.title),c.Cb(2),c.Ac(c.hc(7,3,t.date,"HH:mm"))}}function f(t,n){if(1&t&&(c.Tb(0),c.xc(1,h,8,6,"div",30),c.Sb()),2&t){const t=c.ec();c.Cb(1),c.kc("ngForOf",t.todoList[t.activatedDate.timestamp])}}function C(t,n){if(1&t&&(c.Vb(0,"div",33),c.zc(1),c.Ub()),2&t){const t=n.$implicit;c.Cb(1),c.Ac(t.label)}}const m=function(t,n,e){return{today:t,activated:n,outside:e}};function O(t,n){if(1&t){const t=c.Wb();c.Vb(0,"div",34),c.cc("click",function(){c.sc(t);const e=n.$implicit;return c.ec().switchDay(e)}),c.Vb(1,"div",35),c.zc(2),c.Ub(),c.Vb(3,"div",36),c.zc(4),c.fc(5,"dateFixer"),c.Ub(),c.Ub()}if(2&t){const t=n.$implicit,e=c.ec();c.kc("ngClass",c.oc(6,m,t.timestamp==e.todayTimestamp,t.timestamp==e.activatedDate.timestamp,t.outside)),c.Cb(2),c.Ac(t.label),c.Cb(2),c.Ac(c.hc(5,3,t.date,"yyyy/MM/dd"))}}let _=(()=>{class t{constructor(t,n,e){this.EAS=t,this.timeSrv=n,this.todoSrv=e,this.menu=[{name:"\u65e5\u5386",children:[]}],this.titleBarConfig={showBorder:!1},this.todoList=this.todoSrv.getToDoList(),this.weekList=[{label:"\u661f\u671f\u4e00"},{label:"\u661f\u671f\u4e8c"},{label:"\u661f\u671f\u4e09"},{label:"\u661f\u671f\u56db"},{label:"\u661f\u671f\u4e94"},{label:"\u661f\u671f\u516d"},{label:"\u661f\u671f\u5929"}],this.dayList=[],this.today=this.timeSrv.current,this.EAS.setAppActionBarMenu("calendar",this.menu)}get current(){return this.dayList.find(t=>!t.outside)}get todayTimestamp(){let t=new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate());return String(t.getTime())}ngOnInit(){this.switchToToday()}ngAfterViewInit(){this.EAS.eAppConfigChange.subscribe(t=>{})}switchToToday(){const t=new Date;this.initDay(t)}initDay(t){let n=new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate());t=new Date(t.getFullYear(),t.getMonth(),t.getDate());const e=new Date(t.getFullYear(),t.getMonth(),1),o=0==e.getDay()?7:e.getDay(),c=new Date(t.getFullYear(),t.getMonth()+1,0),r=c.getDate(),i=0==c.getDay()?7:c.getDay(),l=new Date(t.getFullYear(),t.getMonth(),r+(7-i)),d=e=>{let o=null;e.getMonth()!=t.getMonth()&&(o=e.getMonth()<t.getMonth()?"prev":"next");let c=a.solarToLunar(e,"TMD");c=c.replace("\u5e74","#").replace("\u6708","#").replace("\u3007","\u96f6").split("#");const r={label:e.getDate(),date:e,timestamp:String(e.getTime()),lunar:c,week:0==e.getDay()?7:e.getDay(),outside:o};e.getTime()==n.getTime()&&(this.activatedDate=r),this.dayList.push(r);const i=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1);i.getTime()>l.getTime()||d(i)};this.dayList=[],this.activatedDate=null,d(new Date(t.getFullYear(),t.getMonth(),2-o)),this.activatedDate||(this.activatedDate=this.current)}switchDay(t){this.activatedDate=t}prevMonth(){this.initDay(new Date(this.current.date.getFullYear(),this.current.date.getMonth()-1,1))}nextMonth(){this.initDay(new Date(this.current.date.getFullYear(),this.current.date.getMonth()+1,1))}}return t.\u0275fac=function(n){return new(n||t)(c.Pb(r.a),c.Pb(i.a),c.Pb(l.a))},t.\u0275cmp=c.Jb({type:t,selectors:[["ng-component"]],decls:40,vars:18,consts:[[3,"titleBarConfig"],[1,"calendar","flex-row"],[1,"detail-block","p-sm"],[1,"detail-wrapper","full-parent","flex-column","align-center","py-lg","px-md"],[1,"month-block","flex-row","justify-between","align-center","mb-lg"],[1,"month-switch-button","flex-row","align-center",3,"click"],["e-icon","","size","medium","icon","arrow_back_ios"],[1,"date"],["e-icon","","size","medium","icon","arrow_forward_ios"],[1,"day-block","flex-column","align-center","py-md","mb-md"],[1,"day","mb-sm"],[1,"week"],["color","white",2,"width","88%"],[1,"lunar"],["class","today-flag px-sm",4,"ngIf","ngIfElse"],["notToday",""],[1,"to-do-block"],[1,"to-do-title","mb-md"],[1,"to-do-item","flex-row","align-center","mb-sm","p-sm",3,"click"],["e-icon","","icon","add_circle_outline","size","small","type","outlined",1,"check-icon","mr-sm"],[1,"detail"],[1,"title"],[4,"ngIf"],[1,"calendar-wrapper","p-sm"],[1,"week-block","flex-row","mb-md"],["class","week-item p-sm",4,"ngFor","ngForOf"],[1,"day-block","flex-row"],["class","day-item p-sm",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"today-flag","px-sm"],[1,"jump-today-button","px-sm","mb-lg",3,"click"],["class","to-do-item flex-row align-center mb-sm p-sm",4,"ngFor","ngForOf"],[1,"to-do-item","flex-row","align-center","mb-sm","p-sm"],["e-icon","","size","small","type","outlined",1,"check-icon","mr-sm",3,"icon"],[1,"week-item","p-sm"],[1,"day-item","p-sm",3,"ngClass","click"],[1,"day-label"],[1,"day-date"]],template:function(t,n){if(1&t&&(c.Vb(0,"e-app",0),c.Vb(1,"div",1),c.Vb(2,"div",2),c.Vb(3,"div",3),c.Vb(4,"div",4),c.Vb(5,"button",5),c.cc("click",function(){return n.prevMonth()}),c.Qb(6,"i",6),c.Ub(),c.Vb(7,"h3",7),c.Vb(8,"b"),c.zc(9),c.fc(10,"dateFixer"),c.Ub(),c.Ub(),c.Vb(11,"button",5),c.cc("click",function(){return n.nextMonth()}),c.Qb(12,"i",8),c.Ub(),c.Ub(),c.Vb(13,"div",9),c.Vb(14,"b",10),c.zc(15),c.fc(16,"dateFixer"),c.Ub(),c.Vb(17,"b",11),c.zc(18),c.Ub(),c.Qb(19,"e-divider",12),c.Vb(20,"div",13),c.zc(21),c.Ub(),c.Ub(),c.xc(22,p,2,0,"div",14),c.xc(23,u,2,0,"ng-template",null,15,c.yc),c.Vb(25,"div",16),c.Vb(26,"h3",17),c.Vb(27,"b"),c.zc(28,"\u5f85\u529e\u4e8b\u9879"),c.Ub(),c.Ub(),c.Vb(29,"div",18),c.cc("click",function(){return n.EAS.launch("toDo",{event:"add"})}),c.Qb(30,"i",19),c.Vb(31,"div",20),c.Vb(32,"div",21),c.zc(33,"\u65b0\u589e\u5f85\u529e\u4e8b\u9879"),c.Ub(),c.Ub(),c.Ub(),c.xc(34,f,2,1,"ng-container",22),c.Ub(),c.Ub(),c.Ub(),c.Vb(35,"div",23),c.Vb(36,"div",24),c.xc(37,C,2,1,"div",25),c.Ub(),c.Vb(38,"div",26),c.xc(39,O,6,10,"div",27),c.Ub(),c.Ub(),c.Ub(),c.Ub()),2&t){const t=c.qc(24);c.kc("titleBarConfig",n.titleBarConfig),c.Cb(9),c.Ac(c.hc(10,12,n.activatedDate.date,"yyyy-MM")),c.Cb(6),c.Ac(c.hc(16,15,n.activatedDate.date,"dd")),c.Cb(3),c.Ac(n.weekList[n.activatedDate.week-1].label),c.Cb(3),c.Cc("",n.activatedDate.lunar[0],"\u5e74",n.activatedDate.lunar[1],"\u6708",n.activatedDate.lunar[2],""),c.Cb(1),c.kc("ngIf",n.activatedDate.timestamp==n.todayTimestamp)("ngIfElse",t),c.Cb(12),c.kc("ngIf",n.todoList[n.activatedDate.timestamp]),c.Cb(3),c.kc("ngForOf",n.weekList),c.Cb(2),c.kc("ngForOf",n.dayList)}},directives:[d.a,g.a,s.a,b.j,b.i,b.h],pipes:[M.a],styles:[".calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]{width:200px;flex-shrink:0}.calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]{color:inherit;background-color:#ef5a38;border-radius:6px}.calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .month-block[_ngcontent-%COMP%]   .month-switch-button[_ngcontent-%COMP%]{transition:transform .2s}.calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .month-block[_ngcontent-%COMP%]   .month-switch-button[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .month-block[_ngcontent-%COMP%]   .month-switch-button[_ngcontent-%COMP%]:active{transform:scale(.9)}.calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .month-block[_ngcontent-%COMP%]   .month-switch-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}.calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .month-block[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{margin-right:4px}.calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .month-block[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#fff}.calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .day-block[_ngcontent-%COMP%]{width:100%;background-color:#0000001a;border-radius:6px}.calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .day-block[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]{font-size:60px;line-height:60px;color:#fff}.calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .day-block[_ngcontent-%COMP%]   .week[_ngcontent-%COMP%]{color:#fff}.calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .day-block[_ngcontent-%COMP%]   .lunar[_ngcontent-%COMP%]{color:#fff;font-size:12px}.calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .jump-today-button[_ngcontent-%COMP%], .calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .today-flag[_ngcontent-%COMP%]{background-color:#fff;color:#ef5a38;border-radius:20px;line-height:20px;font-size:12px}.calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .today-flag[_ngcontent-%COMP%]{position:absolute;left:130px;top:80px;transform:rotate(18deg)}.calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .to-do-block[_ngcontent-%COMP%]{width:100%;color:#fff}.calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .to-do-block[_ngcontent-%COMP%]   .to-do-title[_ngcontent-%COMP%], .calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .to-do-block[_ngcontent-%COMP%]   .to-do-title[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:inherit}.calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .to-do-block[_ngcontent-%COMP%]   .to-do-item[_ngcontent-%COMP%]{color:inherit;border-radius:4px;background-color:#fff3;transition:background-color .2s}.calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .to-do-block[_ngcontent-%COMP%]   .to-do-item[_ngcontent-%COMP%]:hover{background-color:#ffffff4d}.calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .to-do-block[_ngcontent-%COMP%]   .to-do-item[_ngcontent-%COMP%]:active{background-color:#ffffff1a}.calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .to-do-block[_ngcontent-%COMP%]   .to-do-item[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%], .calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .to-do-block[_ngcontent-%COMP%]   .to-do-item[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{color:inherit}.calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .to-do-block[_ngcontent-%COMP%]   .to-do-item[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%], .calendar[_ngcontent-%COMP%]   .detail-block[_ngcontent-%COMP%]   .detail-wrapper[_ngcontent-%COMP%]   .to-do-block[_ngcontent-%COMP%]   .to-do-item[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:inherit;font-size:12px}.calendar[_ngcontent-%COMP%]   .calendar-wrapper[_ngcontent-%COMP%]   .week-block[_ngcontent-%COMP%]{background-color:#f7f7f7;border-radius:6px}.calendar[_ngcontent-%COMP%]   .calendar-wrapper[_ngcontent-%COMP%]   .week-block[_ngcontent-%COMP%]   .week-item[_ngcontent-%COMP%]{width:calc(100% / 7);font-weight:700}.calendar[_ngcontent-%COMP%]   .calendar-wrapper[_ngcontent-%COMP%]   .day-block[_ngcontent-%COMP%]{flex-wrap:wrap;overflow:hidden;border-radius:6px}.calendar[_ngcontent-%COMP%]   .calendar-wrapper[_ngcontent-%COMP%]   .day-block[_ngcontent-%COMP%]   .day-item[_ngcontent-%COMP%]{width:calc(100% / 7);height:88px;position:relative;border-bottom:1px solid #00000014;background-color:#fff;transition:background-color .2s,color .2s,border-radius .2s}.calendar[_ngcontent-%COMP%]   .calendar-wrapper[_ngcontent-%COMP%]   .day-block[_ngcontent-%COMP%]   .day-item[_ngcontent-%COMP%]   .day-label[_ngcontent-%COMP%]{color:inherit}.calendar[_ngcontent-%COMP%]   .calendar-wrapper[_ngcontent-%COMP%]   .day-block[_ngcontent-%COMP%]   .day-item[_ngcontent-%COMP%]   .day-date[_ngcontent-%COMP%]{color:inherit;position:absolute;right:8px;bottom:8px;font-size:12px;opacity:0;transition:opacity .4s ease}.calendar[_ngcontent-%COMP%]   .calendar-wrapper[_ngcontent-%COMP%]   .day-block[_ngcontent-%COMP%]   .day-item[_ngcontent-%COMP%]:hover{background-color:#f7f7f7}.calendar[_ngcontent-%COMP%]   .calendar-wrapper[_ngcontent-%COMP%]   .day-block[_ngcontent-%COMP%]   .day-item[_ngcontent-%COMP%]:hover   .day-date[_ngcontent-%COMP%]{opacity:.5}.calendar[_ngcontent-%COMP%]   .calendar-wrapper[_ngcontent-%COMP%]   .day-block[_ngcontent-%COMP%]   .day-item[_ngcontent-%COMP%]:active{background-color:#ebebeb}.calendar[_ngcontent-%COMP%]   .calendar-wrapper[_ngcontent-%COMP%]   .day-block[_ngcontent-%COMP%]   .day-item.outside[_ngcontent-%COMP%]{color:#ebecf0}.calendar[_ngcontent-%COMP%]   .calendar-wrapper[_ngcontent-%COMP%]   .day-block[_ngcontent-%COMP%]   .day-item.today[_ngcontent-%COMP%]{border-radius:6px;border:6px solid #ef5a38;background-color:#ef5a380a}.calendar[_ngcontent-%COMP%]   .calendar-wrapper[_ngcontent-%COMP%]   .day-block[_ngcontent-%COMP%]   .day-item.activated[_ngcontent-%COMP%]{color:#fff;background-color:#ef5a38;border-radius:6px}"]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({imports:[[o.a]]}),t})()},i2Gj:function(t,n,e){var o,a,c,r,i,l,d;a=[[8,"0131","0301","0331","0429","0528","0627","0726","0825","0924","1023","1122","1222","1320"],[0,"0219","0320","0419","0518","0616","0716","0814","0913","1012","1111","1211","1310"],[0,"0208","0310","0408","0508","0606","0705","0804","0902","1002","1031","1130","1230"],[5,"0129","0227","0329","0427","0527","0625","0724","0823","0921","1020","1119","1219","1317"],[0,"0216","0317","0416","0515","0614","0713","0811","0910","1009","1107","1207","1306"],[0,"0204","0306","0405","0504","0603","0703","0801","0830","0929","1028","1127","1226"],[4,"0125","0223","0325","0424","0523","0622","0721","0820","0918","1018","1116","1216","1314"],[0,"0213","0314","0413","0512","0611","0710","0809","0908","1007","1106","1205","1304"],[0,"0202","0303","0401","0430","0530","0629","0728","0827","0925","1025","1124","1223"],[2,"0122","0220","0322","0420","0519","0618","0717","0816","0914","1014","1113","1213","1311"],[0,"0210","0311","0410","0509","0607","0707","0805","0904","1003","1102","1202","1301"],[6,"0130","0301","0330","0429","0528","0626","0726","0824","0922","1022","1121","1220","1319"],[0,"0218","0319","0417","0517","0615","0714","0813","0911","1010","1109","1209","1307"],[0,"0206","0308","0407","0506","0605","0704","0802","0901","0930","1029","1128","1227"],[5,"0126","0225","0327","0425","0525","0623","0723","0821","0920","1019","1117","1217","1315"],[0,"0214","0316","0414","0514","0613","0712","0811","0909","1009","1107","1207","1305"],[0,"0203","0304","0403","0502","0601","0630","0730","0829","0927","1027","1125","1225"],[2,"0123","0222","0323","0421","0521","0619","0719","0818","0916","1016","1115","1214","1313"],[0,"0211","0313","0411","0510","0609","0708","0807","0905","1005","1104","1203","1302"],[7,"0201","0302","0401","0430","0529","0628","0727","0825","0924","1024","1122","1222","1321"],[0,"0220","0320","0419","0518","0616","0716","0814","0912","1012","1110","1210","1309"],[0,"0208","0310","0408","0508","0606","0705","0804","0902","1001","1031","1129","1229"],[5,"0128","0227","0328","0427","0527","0625","0724","0823","0921","1020","1119","1218","1317"],[0,"0216","0317","0416","0516","0614","0714","0812","0911","1010","1108","1208","1306"],[0,"0205","0305","0404","0504","0602","0702","0801","0830","0929","1028","1127","1226"],[4,"0124","0223","0324","0423","0522","0621","0721","0819","0918","1018","1116","1216","1314"],[0,"0213","0314","0412","0512","0610","0710","0808","0907","1007","1105","1205","1304"],[0,"0202","0304","0402","0501","0531","0629","0729","0827","0926","1025","1124","1224"],[2,"0123","0221","0322","0420","0519","0618","0717","0815","0914","1013","1112","1212","1311"],[0,"0210","0311","0410","0509","0607","0707","0805","0903","1003","1101","1201","1231"],[6,"0130","0228","0330","0429","0528","0626","0726","0824","0922","1022","1120","1220","1319"],[0,"0217","0319","0418","0517","0616","0715","0814","0912","1011","1110","1209","1308"],[0,"0206","0307","0406","0506","0604","0704","0802","0901","0930","1029","1128","1227"],[5,"0126","0224","0326","0425","0524","0623","0722","0821","0920","1019","1118","1217","1315"],[0,"0214","0315","0414","0513","0612","0712","0810","0909","1008","1107","1207","1305"],[0,"0204","0305","0403","0503","0601","0701","0730","0829","0928","1027","1126","1226"],[3,"0124","0223","0323","0421","0521","0619","0718","0817","0916","1015","1114","1214","1313"],[0,"0211","0313","0411","0510","0609","0708","0806","0905","1004","1103","1203","1302"],[7,"0131","0302","0401","0430","0529","0628","0727","0825","0924","1023","1122","1222","1320"],[0,"0219","0321","0420","0519","0617","0717","0815","0913","1013","1111","1211","1309"],[0,"0208","0309","0408","0507","0606","0705","0804","0902","1001","1031","1129","1229"],[6,"0127","0226","0328","0426","0526","0625","0724","0823","0921","1020","1119","1218","1317"],[0,"0215","0317","0415","0515","0614","0713","0812","0910","1010","1108","1208","1306"],[0,"0205","0306","0405","0504","0603","0702","0801","0831","0929","1029","1127","1227"],[4,"0125","0224","0324","0423","0522","0621","0720","0819","0917","1017","1116","1215","1314"],[0,"0213","0314","0412","0512","0610","0709","0808","0906","1006","1105","1205","1303"],[0,"0202","0304","0402","0501","0531","0629","0728","0827","0925","1025","1124","1223"],[2,"0122","0221","0323","0421","0520","0619","0718","0816","0915","1014","1113","1212","1311"],[0,"0210","0311","0409","0509","0607","0707","0805","0903","1003","1101","1201","1230"],[7,"0129","0228","0329","0428","0528","0626","0726","0824","0922","1022","1120","1220","1318"],[0,"0217","0318","0417","0517","0615","0715","0814","0912","1011","1110","1209","1308"],[0,"0206","0308","0406","0506","0605","0704","0803","0901","1001","1030","1129","1228"],[5,"0127","0225","0326","0424","0524","0622","0722","0820","0919","1019","1117","1217","1315"],[0,"0214","0315","0414","0513","0611","0711","0810","0908","1008","1107","1206","1305"],[0,"0203","0305","0403","0503","0601","0630","0730","0828","0927","1027","1126","1225"],[3,"0124","0222","0324","0422","0522","0620","0719","0818","0916","1016","1114","1214","1313"],[0,"0212","0312","0411","0510","0609","0708","0806","0905","1004","1103","1203","1301"],[8,"0131","0302","0331","0430","0529","0628","0727","0825","0924","1023","1122","1221","1320"],[0,"0218","0320","0419","0519","0617","0717","0815","0913","1013","1111","1211","1309"],[0,"0208","0309","0408","0508","0606","0706","0804","0903","1002","1101","1130","1230"],[6,"0128","0227","0327","0426","0525","0624","0724","0822","0921","1020","1119","1218","1317"],[0,"0215","0317","0415","0515","0613","0713","0811","0910","1010","1108","1208","1306"],[0,"0205","0306","0405","0504","0602","0702","0731","0830","0929","1028","1127","1227"],[4,"0125","0224","0325","0424","0523","0621","0721","0819","0918","1017","1116","1216","1315"],[0,"0213","0314","0412","0512","0610","0709","0808","0906","1006","1104","1204","1303"],[0,"0202","0303","0402","0501","0531","0629","0728","0827","0925","1024","1123","1223"],[3,"0121","0220","0322","0421","0520","0619","0718","0816","0915","1014","1112","1212","1311"],[0,"0209","0311","0410","0509","0608","0708","0806","0904","1004","1102","1202","1231"],[7,"0130","0228","0329","0427","0527","0626","0725","0824","0922","1022","1120","1220","1318"],[0,"0217","0318","0417","0516","0615","0714","0813","0912","1011","1110","1209","1308"],[0,"0206","0308","0406","0505","0604","0703","0802","0901","0930","1030","1129","1228"],[5,"0127","0225","0327","0425","0524","0623","0722","0821","0919","1019","1118","1218","1316"],[0,"0215","0315","0414","0513","0611","0711","0809","0908","1007","1106","1206","1304"],[0,"0203","0305","0403","0503","0601","0630","0730","0828","0926","1026","1125","1224"],[4,"0123","0222","0324","0422","0522","0620","0719","0818","0916","1015","1114","1214","1312"],[0,"0211","0313","0412","0511","0610","0709","0807","0906","1005","1103","1203","1301"],[8,"0131","0301","0331","0429","0529","0627","0727","0825","0924","1023","1121","1221","1319"],[0,"0218","0320","0418","0518","0617","0716","0815","0913","1013","1111","1211","1309"],[0,"0207","0309","0407","0507","0606","0705","0804","0902","1002","1101","1130","1230"],[6,"0128","0227","0328","0426","0526","0624","0724","0823","0921","1021","1120","1219","1318"],[0,"0216","0317","0415","0514","0613","0712","0811","0909","1009","1108","1207","1306"],[0,"0205","0306","0405","0504","0602","0702","0731","0829","0928","1028","1126","1226"],[4,"0125","0224","0325","0424","0523","0621","0721","0819","0917","1017","1115","1215","1314"],[0,"0213","0315","0413","0513","0611","0710","0809","0907","1006","1105","1204","1303"],[10,"0202","0303","0401","0501","0531","0629","0728","0827","0925","1024","1123","1222","1321"],[0,"0220","0321","0420","0520","0618","0718","0816","0915","1014","1112","1212","1310"],[0,"0209","0310","0409","0509","0607","0707","0806","0904","1004","1102","1202","1231"],[6,"0129","0228","0329","0428","0527","0626","0726","0824","0923","1023","1121","1221","1319"],[0,"0217","0318","0416","0516","0614","0714","0812","0911","1011","1109","1209","1308"],[0,"0206","0308","0406","0505","0604","0703","0802","0831","0930","1029","1128","1228"],[5,"0127","0225","0327","0425","0524","0623","0722","0820","0919","1018","1117","1217","1316"],[0,"0215","0316","0415","0514","0612","0712","0810","0908","1008","1106","1206","1305"],[0,"0204","0304","0403","0503","0601","0630","0730","0828","0926","1026","1124","1224"],[3,"0123","0221","0323","0422","0521","0620","0719","0818","0916","1015","1114","1213","1312"],[0,"0210","0312","0411","0511","0609","0709","0807","0906","1005","1103","1203","1301"],[8,"0131","0301","0331","0430","0529","0628","0727","0826","0925","1024","1122","1222","1320"],[0,"0219","0319","0418","0517","0616","0715","0814","0912","1012","1111","1211","1309"],[0,"0207","0309","0407","0507","0605","0705","0803","0902","1002","1031","1130","1230"],[5,"0128","0227","0328","0426","0526","0624","0723","0822","0921","1020","1119","1219","1317"],[0,"0216","0318","0416","0515","0614","0713","0811","0910","1009","1108","1208","1307"],[0,"0205","0306","0405","0504","0602","0702","0731","0829","0928","1027","1126","1226"],[4,"0124","0223","0325","0423","0523","0621","0721","0819","0917","1017","1115","1215","1313"],[0,"0212","0314","0413","0512","0611","0710","0809","0907","1006","1105","1204","1303"],[0,"0201","0303","0402","0501","0531","0630","0729","0828","0926","1025","1124","1223"],[2,"0122","0220","0321","0419","0519","0618","0717","0816","0914","1014","1112","1212","1310"],[0,"0209","0310","0409","0508","0607","0706","0805","0904","1003","1102","1201","1231"],[7,"0129","0228","0329","0428","0527","0626","0725","0824","0922","1022","1121","1220","1319"],[0,"0218","0319","0417","0517","0615","0714","0813","0911","1011","1110","1210","1308"],[0,"0207","0308","0406","0505","0604","0703","0801","0831","0929","1029","1128","1227"],[5,"0126","0225","0327","0425","0524","0623","0722","0820","0919","1018","1117","1216","1315"],[0,"0214","0316","0414","0514","0612","0712","0810","0908","1008","1106","1206","1304"],[0,"0203","0305","0403","0503","0602","0701","0731","0829","0927","1027","1125","1225"],[4,"0123","0222","0322","0421","0521","0619","0719","0817","0916","1015","1114","1213","1312"],[0,"0210","0312","0410","0510","0608","0708","0807","0905","1005","1103","1203","1301"],[9,"0131","0301","0331","0429","0529","0627","0727","0825","0924","1024","1122","1222","1320"],[0,"0219","0320","0419","0518","0616","0716","0814","0913","1013","1112","1211","1310"],[0,"0208","0309","0407","0507","0605","0704","0803","0901","1001","1031","1129","1229"],[6,"0128","0226","0328","0426","0526","0624","0723","0822","0920","1020","1118","1218","1317"],[0,"0216","0317","0416","0515","0614","0713","0811","0910","1009","1108","1207","1306"],[0,"0205","0307","0405","0505","0603","0703","0801","0830","0929","1028","1126","1226"],[4,"0125","0223","0324","0423","0523","0621","0721","0819","0917","1017","1115","1215","1313"],[0,"0212","0313","0412","0512","0610","0710","0808","0907","1006","1105","1204","1303"],[0,"0201","0303","0401","0501","0530","0629","0729","0827","0926","1025","1124","1223"],[2,"0122","0220","0322","0420","0519","0618","0718","0816","0915","1015","1113","1213","1311"],[0,"0210","0310","0409","0508","0606","0706","0804","0903","1003","1101","1201","1231"],[6,"0129","0228","0329","0428","0527","0625","0725","0823","0922","1021","1120","1220","1319"],[0,"0217","0319","0417","0517","0615","0714","0813","0911","1010","1109","1209","1308"],[0,"0206","0308","0407","0506","0605","0704","0802","0901","0930","1029","1128","1228"],[5,"0126","0225","0326","0425","0524","0623","0722","0820","0919","1018","1116","1216","1315"],[0,"0213","0315","0414","0513","0612","0711","0810","0908","1008","1106","1205","1304"],[0,"0203","0304","0403","0502","0601","0701","0730","0829","0927","1027","1125","1225"],[3,"0123","0221","0323","0422","0521","0620","0719","0818","0917","1016","1115","1214","1313"],[0,"0211","0312","0410","0509","0608","0707","0806","0905","1004","1103","1203","1301"],[7,"0131","0301","0331","0429","0528","0627","0726","0825","0923","1023","1122","1222","1320"],[0,"0219","0320","0419","0518","0616","0716","0814","0913","1012","1111","1211","1309"],[0,"0208","0310","0408","0508","0606","0705","0804","0902","1001","1031","1130","1229"],[6,"0128","0227","0328","0426","0526","0624","0723","0822","0920","1019","1118","1217","1316"],[0,"0215","0317","0416","0515","0614","0713","0811","0910","1009","1107","1207","1305"],[0,"0204","0306","0405","0504","0603","0702","0801","0830","0929","1028","1126","1226"],[5,"0124","0223","0325","0423","0523","0622","0721","0820","0918","1018","1116","1216","1314"],[0,"0212","0313","0411","0511","0610","0709","0808","0906","1006","1105","1204","1303"],[0,"0201","0302","0401","0430","0530","0628","0728","0827","0925","1025","1124","1223"],[2,"0122","0220","0322","0420","0519","0618","0717","0816","0914","1014","1113","1212","1311"],[0,"0210","0311","0410","0509","0607","0707","0805","0903","1003","1102","1201","1231"],[7,"0130","0229","0329","0428","0527","0625","0725","0823","0921","1021","1119","1219","1318"],[0,"0217","0319","0417","0517","0615","0714","0813","0911","1010","1109","1208","1307"],[0,"0206","0308","0406","0506","0604","0704","0802","0901","0930","1029","1128","1227"],[5,"0126","0225","0326","0425","0525","0623","0723","0821","0920","1019","1117","1217","1315"],[0,"0214","0314","0413","0513","0611","0711","0810","0908","1008","1106","1205","1304"],[0,"0202","0304","0402","0502","0531","0630","0730","0828","0927","1027","1125","1225"],[3,"0123","0221","0323","0421","0521","0619","0719","0817","0916","1016","1114","1214","1313"],[0,"0211","0313","0411","0510","0609","0708","0806","0905","1005","1103","1203","1302"],[8,"0201","0301","0331","0429","0528","0627","0726","0824","0923","1022","1121","1221","1320"],[0,"0219","0320","0419","0518","0616","0716","0814","0912","1012","1110","1210","1309"],[0,"0208","0309","0408","0508","0606","0705","0804","0902","1001","1031","1129","1229"],[6,"0128","0226","0328","0427","0526","0625","0724","0823","0921","1020","1119","1218","1317"],[0,"0215","0316","0415","0515","0613","0713","0811","0910","1009","1107","1207","1305"],[0,"0204","0305","0404","0504","0602","0702","0731","0830","0929","1028","1126","1226"],[4,"0124","0223","0324","0423","0522","0621","0720","0819","0918","1017","1116","1216","1314"],[0,"0212","0314","0412","0512","0610","0710","0808","0907","1006","1105","1205","1304"],[0,"0202","0303","0401","0501","0530","0628","0727","0826","0924","1024","1123","1223"],[3,"0121","0220","0322","0420","0519","0618","0717","0815","0914","1013","1112","1212","1311"],[0,"0209","0311","0410","0509","0607","0707","0805","0903","1003","1101","1201","1231"],[7,"0129","0228","0330","0428","0528","0626","0726","0824","0922","1022","1120","1220","1318"],[0,"0217","0318","0417","0516","0615","0714","0813","0911","1010","1109","1208","1307"],[0,"0205","0307","0406","0505","0604","0704","0802","0901","0930","1029","1128","1227"],[5,"0126","0224","0326","0424","0524","0623","0722","0821","0919","1019","1117","1217","1315"],[0,"0214","0315","0414","0513","0612","0711","0810","0909","1008","1107","1206","1305"],[0,"0203","0304","0402","0502","0531","0629","0729","0828","0926","1026","1125","1224"],[4,"0123","0221","0323","0421","0521","0619","0718","0817","0915","1015","1114","1214","1312"],[0,"0211","0312","0411","0510","0609","0708","0806","0905","1004","1103","1203","1301"],[8,"0131","0302","0331","0430","0529","0628","0727","0825","0924","1023","1122","1221","1320"],[0,"0219","0320","0418","0518","0616","0716","0814","0912","1012","1110","1210","1308"],[0,"0207","0309","0407","0507","0605","0704","0803","0901","0930","1030","1128","1228"],[6,"0126","0225","0326","0425","0525","0623","0723","0821","0920","1019","1118","1217","1316"],[0,"0214","0316","0414","0514","0612","0712","0811","0909","1009","1107","1207","1305"],[0,"0204","0304","0403","0502","0601","0630","0730","0828","0927","1027","1125","1225"],[0,"0123","0222","0323","0422","0521","0620","0719","0818","0917","1017","1115","1215"],[0,"0113","0212","0313","0412","0511","0609","0709","0807","0906","1006","1104","1204"],[0,"0103","0201","0303","0401","0501","0530","0628","0728","0826","0925","1024","1123"],[3,"1223","0122","0220","0321","0419","0519","0617","0716","0815","0913","1012","1111","1211"],[0,"0110","0208","0310","0409","0508","0607","0706","0804","0903","1002","1031","1130"],[7,"1230","0128","0227","0329","0428","0527","0625","0725","0823","0922","1021","1119","1219"],[0,"0118","0216","0318","0417","0516","0615","0714","0813","0911","1011","1109","1209"],[0,"0107","0206","0306","0405","0504","0603","0703","0801","0831","0929","1029","1127"],[5,"1227","0125","0224","0325","0423","0523","0622","0721","0820","0919","1018","1117","1216"],[0,"0115","0213","0315","0413","0512","0611","0710","0809","0908","1007","1106","1206"],[0,"0104","0203","0304","0403","0502","0531","0630","0729","0828","0926","1026","1125"],[4,"1225","0123","0222","0322","0421","0520","0618","0718","0816","0914","1014","1113","1213"],[0,"0111","0210","0312","0410","0510","0608","0707","0806","0904","1003","1102","1202"],[8,"1231","0130","0301","0331","0429","0529","0627","0726","0825","0923","1022","1121","1221"],[0,"0119","0218","0320","0418","0518","0616","0716","0814","0913","1012","1110","1210"],[0,"0108","0207","0308","0406","0506","0605","0704","0803","0901","1001","1030","1129"],[6,"1228","0126","0225","0327","0425","0525","0623","0723","0822","0920","1020","1118","1218"],[0,"0116","0214","0316","0414","0514","0612","0712","0811","0909","1009","1108","1207"],[0,"0106","0204","0306","0404","0503","0602","0701","0731","0829","0928","1028","1127"],[4,"1226","0125","0223","0324","0422","0521","0620","0719","0817","0916","1016","1115","1214"],[0,"0113","0212","0313","0412","0511","0609","0709","0807","0905","1005","1104","1203"],[0,"0102","0201","0303","0401","0501","0530","0628","0727","0826","0924","1024","1122"],[2,"1222","0121","0220","0321","0420","0520","0618","0717","0816","0914","1013","1112","1211"]],c=1900,i=function(t,n,e){var o=t.getTime()-n.getTime();switch(e){case"y":return parseInt(t.getFullYear()-n.getFullYear());case"M":return parseInt(12*(t.getFullYear()-n.getFullYear())+(t.getMonth()-n.getMonth()));case"d":return Math.ceil(o/1e3/60/60/24);case"w":return Math.floor(o/1e3/60/60/24/7);case"h":return Math.floor(o/1e3/60/60);case"m":return Math.floor(o/1e3/60);case"s":return Math.floor(o/1e3);case"ms":return parseInt(o)}},l=function(t,n,e,o,c){var r=a[n];if(!r)return!1;for(var i,l,d,g=t.getFullYear(),s=t.getMonth()+1,b=t.getDate(),M=g,p=r.length-1;p>0;p--){i=p;var u=Number(r[p].substring(0,2)),h=Number(r[p].substring(2,4));if(l=(d=c&&u>12?u-12:u)<s||d==s&&h<=b||(u<=e||u>=o)&&c,12==d&&d>s&&1==p&&(l=!0,g--),l)break}return!!l&&(c&&12==u&&(g-=1),{year:g,month:d,day:h,lunarYear:M=c?M-1:M,lunarMonth:i,leapMonth:r[0]})},d=function(t,n,e){return"M"==e?r.monthAdd(t,n):(r.lunarToSolar(t),r.solarToLunar(void 0))},(r={}).dateAdd=function(t,n){for(var e=function(t){for(var n=t.match(/[+-]?\d+((ms)|[yMdhmsw])/g),e=[],o=0;o<n.length;o++){if(/([+-])(\d+)(.+)/.test(n[o])){var a=parseInt(RegExp.$2);"-"===RegExp.$1&&(a=-a),e.push({value:a,unit:RegExp.$3})}return e}}(n),o=0;o<e.length;o++)t=d(t,e[o]);return t},r.dateDiff=function(t,n,e){if("M"==e)return r.monthDiff(t,n);var o=r.lunarToSolar(t),a=r.lunarToSolar(n);return i(a,o,e)},r.monthAdd=function(t,n){if(t instanceof Date&&(t=r.solarToLunar(t)),0==n)return t;var e,o=t.year,a=t.month;(t.leap||t.leapMonth>0&&t.month>t.leapMonth)&&a++;var c=!0;do{(n=n+a-(e=r.monthsOfYear(o)))<=0?(c=!1,a=o==t.year?e+n:e+n-a):(o++,a=1)}while(c);var i=r.leapMonthOfYear(o),l=!1;return i>0&&a>i&&(l=--a==i),{year:o,month:a,leap:l,leapMonth:i}},r.monthDiff=function(t,n){var e=0;if(t instanceof Date&&(t=r.solarToLunar(t)),n instanceof Date&&(n=r.solarToLunar(n)),t.year==n.year)e=n.month-t.month,t.leapMonth>=t.month&&t.leapMonth<=n.month&&e++;else{e=12,(t.leapMonth>t.month||t.leapMonth==t.month&&!t.isLeaMonth)&&(e+=1),e-=t.month;for(var o=t.year+1,a=o;a<n.year;a++)e+=r.monthsOfYear(o++);e+=n.month,(n.isLeapMonth||n.month<n.leapMonth)&&e++}return e},r.daysOfMonth=function(t,n,e){"object"==typeof t&&(n=t.month,e=t.leap,t=t.year);var o=r.lunarToSolar(t,n,1,e);r.leapMonthOfYear(t)!=n||e?12==n?(t++,n=1):(e=!1,n++):e=!0;var a=r.lunarToSolar(t,n,1,e);return r.dateDiff(a,o,"d")},r.monthsOfYear=function(t){return a[t-c].length-1},r.leapMonthOfYear=function(t){var n=a[t-c];return n?n[0]:0},r.lunarToSolar=function(t,n,e,o){var r=arguments[0];"object"==typeof r&&1==arguments.length&&(t=r.year,n=r.month,e=r.day,o=r.leap);var i=t-c;if(i<0||i>a.length)throw new Error("Specified date range is invalid.");var l=a[i][0];(o&&n==l||l>0&&n>l)&&(n+=1);var d=a[i][n],g=Number(d.substring(0,2)),s=Number(d.substring(2,4));g>12&&(t+=1,g-=12);var b=new Date(t,g-1,s),M=b.getTime()+24*(e-1)*60*60*1e3;return new Date(M)},r.solarToLunar=function(t,n){var e=t.getFullYear()-c;if(e<=0||e>=a.length)throw new Error("Specified date range is invalid.");var o=l(t,e,0,13,!1);if(!(o=o||l(t,e-1,12,99,!0)))return!1;var d=new Date(o.year,o.month-1,o.day),g=i(t,d,"d")+1,s={leap:o.leapMonth>0&&o.leapMonth+1==o.lunarMonth,year:o.lunarYear,month:o.leapMonth>0&&o.lunarMonth>o.leapMonth?o.lunarMonth-1:o.lunarMonth,day:g,leapMonth:o.leapMonth};return n&&s?r.format(s,n):s},r.traditionalYearName=function(t){var n="\u7532\u4e59\u4e19\u4e01\u620a\u5df1\u5e9a\u8f9b\u58ec\u7678".split(""),e="\u5b50\u4e11\u5bc5\u536f\u8fb0\u5df3\u5348\u672a\u7533\u9149\u620c\u4ea5".split("");return n[(t=t-c+36)%10]+e[t%12]+"\u5e74"},r.yearName=function(t){for(var n="\u3007,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d,\u4e03,\u516b,\u4e5d".split(","),e=t.toString(),o="",a=0;a<e.length;a++)o+=n[parseInt(e.charAt(a))];return o+"\u5e74"},r.animalName=function(t){return"\u9f20\u725b\u864e\u5154\u9f99\u86c7\u9a6c\u7f8a\u7334\u9e21\u72d7\u732a".split("")[(t-4)%12]},r.monthName=function(t,n,e){var o="\u6b63,\u4e8c,\u4e09,\u56db,\u4e94,\u516d,\u4e03,\u516b,\u4e5d,\u5341,\u5341\u4e00,\u5341\u4e8c".split(",");return n&&(o[11]="\u814a"),(e?"\u95f0":"")+o[t-1]+"\u6708"},r.dayName=function(t){switch(t){case 10:return"\u521d\u5341";case 20:return"\u4e8c\u5341";case 30:return"\u4e09\u5341";default:return"\u521d\u5341\u5eff\u5345".split("")[Math.floor(t/10)]+"\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341".split("")[(t-1)%10]||t}},r.format=function(t,n){return n.replace(/[TAYyMmdD]/g,function(n,e){switch(n){case"T":return r.traditionalYearName(t.year);case"A":return r.animalName(t.year);case"Y":return r.yearName(t.year);case"y":return t.year;case"m":return r.monthName(t.month,!1,t.leap);case"M":return r.monthName(t.month,!0,t.leap);case"d":return r.dayName(t.day);case"D":return 1==t.day?r.monthName(t.month,!1,t.leap):r.dayName(t.day)}})},void 0===(o=(function(){return r}).call(n,e,n,t))||(t.exports=o)}}]);