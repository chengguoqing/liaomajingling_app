require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([10],{100:function(t,e,s){"use strict";var n=i(s(3)),a=i(s(101));function i(t){return t&&t.__esModule?t:{default:t}}new n.default(a.default).$mount()},101:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(103),a=s.n(n),i=s(104);var _=function(t){s(102)},r=s(2)(a.a,i.a,_,"data-v-0b835552",null);e.default=r.exports},102:function(t,e){},103:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(s(12)),a=i(s(5));function i(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{pageNo:1,sd_kis:[],is_dsrt:!1}},onLoad:function(t){this.get_mx()},onReachBottom:function(){this.is_dsrt||(++this.pageNo,this.get_mx())},components:{kongbai:n.default},methods:{get_mx:function(){var t={},e=this;t.pageNo=this.pageNo.toString(),a.default.ajax("a_get_transfer_list",t,function(t){t.data.map(function(t){t.timedf=a.default.time_er(t.create_time),e.sd_kis.push(t)}),t.data.length<10&&(e.is_dsrt=!0)})}},mounted:function(){}}},104:function(t,e,s){"use strict";var n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",[t._l(t.sd_kis,function(e,n){return s("navigator",{staticClass:"sd_drrttys pd bbm pt20 pm20"},[s("view",{staticClass:"dian dsf_jh_deert"},[s("view",{staticClass:"fz26 z9"},[t._v("\n\t\t\t\t"+t._s(e.timedf)+"\n\t\t\t")]),t._v(" "),s("view",{staticClass:"fz26 z3 mt10"},[s("text",{staticClass:"red"},[t._v(t._s(e.amount))]),t._v(" 元\n\t\t\t")])]),t._v(" "),s("view",{staticClass:"ov tr fz26 z9"},[s("view",{staticClass:"mt50"},[s("text",{staticClass:"red"},[t._v(" -"+t._s(e.fee))]),t._v(" 元\n\t\t\t")])]),t._v(" "),s("view",{staticClass:"qc"})])}),t._v(" "),!t.is_dsrt&&t.sd_kis.length>=10?s("view",{staticClass:"btm pt20 fz26 pm20 z9 cen"},[t._v("\n\t\t\t\t加载中...\n\t\t\t")]):t._e(),t._v(" "),t.is_dsrt&&t.sd_kis.length>=10?s("view",{staticClass:"btm pt20 fz26 pm20 z9 cen"},[t._v("\n\t\t\t\t已加载全部数据\n\t\t\t")]):t._e(),t._v(" "),t.sd_kis.length<=0?s("kongbai",{attrs:{mpcomid:"4O3-0"}}):t._e()],2)},staticRenderFns:[]};e.a=n}},[100]);