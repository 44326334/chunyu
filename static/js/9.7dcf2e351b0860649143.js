webpackJsonp([9],{abmX:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("s0MJ"),a=i("RkLV"),o={name:"askhistory",components:{HEADER:i("Cz8s").a},data:function(){return{userid:2,nullList:!1,list:[],olist:[],createProblem:{id:2,text:"",state:!1,problemId:29}}},methods:{loadAskList:function(){var t=this;Object(a.g)({testUserId:this.userid}).then(function(s){if(0===s.data.code&&s.data.list.length>0){for(var i in t.olist=s.data.list,t.olist)0!==t.olist[i].interaction&&t.doctorDetail(t.olist[i].id,i);t.list=t.olist,t.$indicator.close()}else t.nullList=!0})},formatDate:function(t){return e.a.formatDate.format(new Date(t),"yyyy-MM-dd hh:mm:ss")},loadProblemList:function(t){var s=this;Object(a.f)({param:{accountId:this.createProblem.id,lastContentId:parseInt(this.list[t].clinicNo),questionId:this.list[t].id}}).then(function(t){0===t.data.code?(s.$store.commit("setLinkDoctorView",t.data.body.doctorInfo),s.$store.commit("setDoctorHistory",t.data.body.metaItemDetailResultList)):s.$toast("加载历史记录失败!")})},chatDetail:function(t){this.loadProblemList(t),this.$store.commit("setCreateProblem",this.list[t].id),this.$store.commit("setAskProblemStatus",this.list[t].status),this.$store.commit("setAssessed",this.list[t].assessed),this.$router.push({name:"chat",params:{from:"history",list:this.list[t]}})},doctorDetail:function(t,s){var i=this;Object(a.d)({questionId:t}).then(function(t){0===t.data.code&&(i.$set(i.olist[s],"doctor",t.data.body.name),i.$set(i.olist[s],"image",t.data.body.image))})},askStatus:function(t){var s={};switch(t.status){case"n":return s.content="可咨询",s.color="rgb(247, 209, 158)",s;case"c":return t.assessed?(s.content="已关闭",s.color="rgb(184, 184, 184)",s):(s.content="可评价",s.color="rgb(247, 209, 158)",s);case"a":return s.content="已认领",s.color="rgb(184, 184, 184)",s;case"s":return s.content="已回复",s.color="rgb(184, 184, 184)",s;case"v":return s.content="回复已查看",s.color="rgb(184, 184, 184)",s;case"p":return s.content="已关闭",s.color="rgb(184, 184, 184)",s}}},created:function(){this.$indicator.open(),this.loadAskList()}},r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"warp"},[e("HEADER"),t._v(" "),e("div",{staticClass:"con"},[e("ul",[t._l(t.list,function(s,a){return e("li",{directives:[{name:"show",rawName:"v-show",value:!t.nullList,expression:"!nullList"}],key:a},[e("div",{staticClass:"title"},[e("div",{staticClass:"left"},[e("div",{staticClass:"headimg"},[e("img",{attrs:{src:0===s.interaction?i("QLFm"):s.image,alt:"",width:"100%"}})]),t._v(" "),e("div",{staticClass:"doct",style:{color:0===s.interaction?"rgb(192,192,192)":"black"}},[t._v("\n              "+t._s("n"===s.status?"暂无回复":s.doctor)+"\n            ")])]),t._v(" "),e("div",{staticClass:"right"},[e("div",{style:{color:t.askStatus(s).color}},[t._v("\n              "+t._s(t.askStatus(s).content)+"\n            ")])])]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"left"},[e("p",{staticStyle:{"-webkit-box-orient":"vertical"}},[t._v(t._s(s.ask))])]),t._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"callback",on:{click:function(s){t.chatDetail(a)}}},[t._v("查看问诊记录")])])]),t._v(" "),e("div",{staticClass:"time"},[e("img",{attrs:{src:i("qKtB"),alt:""}}),t._v(" "),e("span",[t._v(t._s(t.formatDate(s.gmtCreate)))])])])}),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:t.nullList,expression:"nullList"}]},[t._v("暂无记录")])],2)])],1)};r._withStripped=!0;var n={render:r,staticRenderFns:[]},c=n;var l=!1;var d=i("VU/8")(o,c,!1,function(t){l||i("azvX")},"data-v-1259e2ea",null);d.options.__file="src\\views\\container\\askhistory.vue";s.default=d.exports},azvX:function(t,s){},qKtB:function(t,s){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=9.7dcf2e351b0860649143.js.map