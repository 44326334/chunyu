webpackJsonp([14],{0:function(e,t,n){n("j1ja"),e.exports=n("NHnr")},"DbO/":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),o=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)};o._withStripped=!0;var i={render:o,staticRenderFns:[]},c=i;var l=!1;var r=n("VU/8")({name:"App"},c,!1,function(e){l||n("e4zn")},null,null);r.options.__file="src\\App.vue";var s=r.exports,u=n("/ocq");a.default.use(u.a);var h=new u.a({routes:[{path:"/phone",name:"phone",title:"绑定手机号",component:function(e){Promise.all([n.e(0),n.e(6)]).then(function(){var t=[n("zoju")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{back:!0,backPath:"/",binding_require:!1}},{path:"/detehistory",name:"detehistory",title:"历史记录",component:function(e){Promise.all([n.e(0),n.e(8)]).then(function(){var t=[n("OP2D")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{back:!0,backPath:"/",binding_require:!0}},{path:"/",name:"robot",title:"问诊精灵",component:function(e){Promise.all([n.e(0),n.e(7)]).then(function(){var t=[n("9feP")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{back:!1}},{path:"/askhistory",name:"askhistory",title:"历史记录",component:function(e){Promise.all([n.e(0),n.e(9)]).then(function(){var t=[n("abmX")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{back:!0,backPath:"/",binding_require:!1}},{path:"/chat",name:"chat",title:"医生问诊",component:function(e){Promise.all([n.e(0),n.e(4)]).then(function(){var t=[n("p35r")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{back:!0,backPath:"/",binding_require:!1}},{path:"/detail",name:"detail",title:"医生简介",component:function(e){Promise.all([n.e(0),n.e(12)]).then(function(){var t=[n("zeBe")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{back:!0,backPath:"/chat",binding_require:!1}},{path:"/robotchat",name:"robotchat",title:"问诊精灵",component:function(e){Promise.all([n.e(0),n.e(5)]).then(function(){var t=[n("lZah")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{back:!0,backPath:"/",binding_require:!1}},{path:"/classes",name:"classes",title:"功能咨询",component:function(e){Promise.all([n.e(0),n.e(11)]).then(function(){var t=[n("Ds2I")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{back:!0,backPath:"/robotchat",binding_require:!1}},{path:"/evaluate",name:"evaluate",title:"评价医生",component:function(e){Promise.all([n.e(0),n.e(2)]).then(function(){var t=[n("WL3N")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{back:!0,backPath:"/chat",binding_require:!1}},{path:"/health",name:"health",title:"健康详情",component:function(e){Promise.all([n.e(0),n.e(1)]).then(function(){var t=[n("30C9")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{back:!1,binding_require:!1}},{path:"/indicators",name:"indicators",title:"指标详情",component:function(e){Promise.all([n.e(0),n.e(10)]).then(function(){var t=[n("DHav")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{back:!0,backPath:"/",binding_require:!0}},{path:"/repo",name:"repo",title:"完整报告",component:function(e){Promise.all([n.e(0),n.e(3)]).then(function(){var t=[n("8MIW")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{back:!0,backPath:"/",binding_require:!0}}]}),p=n("NYxO");a.default.use(p.a);var d=new p.a.Store({state:{messageBox:{read:!1},user:{get phone(){return localStorage.getItem("phone")},get token(){return localStorage.getItem("token")}},account:{id:2},createProblem:{id:null},linkDoctorView:{},doctorHistory:[],robotMsg:[],askModal:!1,askProblemStatus:"",assessed:!1,deteResultId:0,indexHealth:{},indicatorHealth:{},reportHealth:{},healthDetail:{resultId:99}},mutations:{readMessage:function(e,t){e.messageBox.read=t},setUser:function(e,t){var n=t.phone,a=t.token;localStorage.setItem("phone",n),localStorage.setItem("token",a)},setLoginState:function(e,t){e.login.state=t},setCreateProblem:function(e,t){e.createProblem.id=t},setLinkDoctorView:function(e,t){e.linkDoctorView=t},setDoctorHistory:function(e,t){e.doctorHistory=t},pushMessage:function(e,t){e.doctorHistory.push(t)},pushRobotMsg:function(e,t){e.robotMsg.push(t)},setAskModal:function(e,t){e.askModal=t},setAskProblemStatus:function(e,t){e.askProblemStatus=t},setAssessed:function(e,t){e.assessed=t},setDeteResultId:function(e,t){e.deteResultId=t},setIndexHealth:function(e,t){e.indexHealth=t},setIndicatorHealth:function(e,t){e.indicatorHealth=t},setReportHealth:function(e,t){e.reportHealth=t},setHealthDetail:function(e,t){e.healthDetail.resultId=t}},actions:{}}),m=n("Au9i"),b=n.n(m),f=(n("d8/S"),n("wvfG")),k=n.n(f),v=(n("j1ja"),n("aDdV"));n("DbO/");a.default.use(b.a),a.default.use(k.a),a.default.use(v.a),a.default.config.productionTip=!1,a.default.config.devtools=!0;var P=new a.default({el:"#app",router:h,store:d,components:{App:s},template:"<App/>"});t.default=P},"d8/S":function(e,t){},e4zn:function(e,t){}},[0]);
//# sourceMappingURL=app.5deb35ef529a25486f92.js.map