webpackJsonp([141],{"3Xzz":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("EwKy"),r=e.n(n),i={name:"navpath",data:function(){return{projectName:"gic-web",linkHref:""}},props:{navpath:{type:Array,default:[]},navtip:{type:Boolean,default:!1}},mounted:function(){this.linkHref=r.a.config+"/report/#/memberSummary"},methods:{}},s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navwrap boxbttom"},[e("el-breadcrumb",{attrs:{separator:"/"}},[e("span",{staticClass:"el-breadcrumb__item no-link link-active"},[e("a",{staticClass:"el-breadcrumb__inner is-link",attrs:{href:t.linkHref,role:"link"}},[t._v("首页")]),e("span",{staticClass:"el-breadcrumb__separator",attrs:{role:"presentation"}},[t._v("/")])]),t._v(" "),t._l(t.navpath,function(a,n){return e("el-breadcrumb-item",{key:n,staticClass:"no-link",class:{"link-active":""!=a.path&&n!=t.navpath.length-1},attrs:{to:{path:a.path}}},[t._v(t._s(a.name))])})],2),t._v(" "),t.navpath.length>0?e("h1",{staticClass:"navtitle"},[t._v(t._s(t.navpath[t.navpath.length-1].name))]):t._e(),t._v(" "),1==t.navtip?e("div",{staticClass:"navtip navmTop"},[e("i",{staticClass:"el-icon-info navtipcolor"}),t._v("变更导航个数，移动顺序，更换页面链接均需提交小程序审核后重新发布生效，其他变更立即生效。小程序审核请联系品牌项目经理。")]):t._e()],1)},staticRenderFns:[]};var l=e("C7Lr")(i,s,!1,function(t){e("lKih")},"data-v-d2ee4e94",null);a.default=l.exports},EwKy:function(t,a){var e=window.location.origin;t.exports={config:e}},lKih:function(t,a){}});