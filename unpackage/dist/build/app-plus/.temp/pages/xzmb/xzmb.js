require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{80:function(s,t,e){"use strict";var n=c(e(3)),a=c(e(81));function c(s){return s&&s.__esModule?s:{default:s}}new n.default(a.default).$mount()},81:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(83),a=e.n(n),c=e(84);var i=function(s){e(82)},d=e(2)(a.a,c.a,i,"data-v-0e40d7d4",null);t.default=d.exports},82:function(s,t){},83:function(s,t,e){"use strict";(function(s){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{xz_dsf:[{id:1,cls:"act",yanse:"#FE761E,#EC3004"},{id:2,cls:"",yanse:"#F13C06,#FFB669"},{id:3,cls:"",yanse:"#AB3482,#FCD8B7"},{id:4,cls:"",yanse:"#8763DA,#CFD5DF"},{id:5,cls:"",yanse:"#E14AAD,#30B0FE"},{id:6,cls:"",yanse:"#2D2F3C,#FF8041"},{id:7,cls:"",yanse:"#46B7B5,#D55326"},{id:8,cls:"",yanse:"#3DC7DA,#B2D501"},{id:9,cls:"",yanse:"#DE3319,#FD4626"},{id:10,cls:"",yanse:"#FE0000,#FB8B03"}]}},onLoad:function(s){var t=s.id_s-1;this.xz_dsf.map(function(s){s.cls=""}),this.xz_dsf[t].cls="act"},components:{},methods:{sd_ddfgs:function(t){var e=t.id;this.xz_dsf.map(function(s){s.cls=""}),this.xz_dsf[e-1].cls="act",s.setStorageSync("id_s",e),s.setStorageSync("yanse",this.xz_dsf[e-1].yanse),s.switchTab({url:"/pages/index/index?id_s="+e})}},mounted:function(){}}}).call(t,e(8).default)},84:function(s,t,e){"use strict";var n={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("view",{staticClass:"pl20"},s._l(s.xz_dsf,function(t,n){return e("view",{staticClass:"dsf_jh_deert pr20 mt10 pr",attrs:{eventid:"FDU-0-"+n},on:{click:function(e){s.sd_ddfgs(t)}}},[t.cls?e("icon",{staticClass:"sd_jh_deertt",attrs:{type:"success"}}):s._e(),s._v(" "),e("image",{staticClass:"w_derrrtyx",attrs:{src:"../../static/img/"+t.id+".png"}})],1)}))},staticRenderFns:[]};t.a=n}},[80]);