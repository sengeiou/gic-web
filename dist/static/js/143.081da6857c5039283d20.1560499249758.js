webpackJsonp([143],{EwKy:function(t,a){var e=window.location.origin;t.exports={config:e}},TST4:function(t,a){},dFzb:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("EwKy"),r=e.n(n),i={name:"navpath",data:function(){return{curitem:0}},props:{navpath:{type:Array,default:[]},navtab:{type:Array,default:[]}},mounted:function(){this.linkHref=r.a.config+"/report/#/memberSummary"},methods:{changeTab:function(t){this.curitem=t.value,this.$emit("getCurTab",t.value)}}},s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navbarwrap boxshow"},[e("el-breadcrumb",{attrs:{separator:"/"}},[e("span",{staticClass:"el-breadcrumb__item no-link link-active"},[e("a",{staticClass:"el-breadcrumb__inner is-link",attrs:{href:t.linkHref,role:"link"}},[t._v("首页")]),e("span",{staticClass:"el-breadcrumb__separator",attrs:{role:"presentation"}},[t._v("/")])]),t._v(" "),t._l(t.navpath,function(a,n){return e("el-breadcrumb-item",{key:n,attrs:{to:{path:a.path}}},[t._v(t._s(a.name))])})],2),t._v(" "),e("h1",{staticClass:"navtitle"},[t._v(t._s(t.navpath[t.navpath.length-1].name))]),t._v(" "),e("div",{staticClass:"navbar"},t._l(t.navtab,function(a,n){return e("a",{staticClass:"navbar-item",class:t.curitem==a.value?"curnavbar":"",on:{click:function(e){return t.changeTab(a)}}},[t._v(t._s(a.name)+"\n      "),"specialAd"==a.tab?e("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:"针对特定的会员单独设置广告位",placement:"top"}},[e("i",{staticClass:"tooltip-icon el-icon-question"})]):t._e()],1)}),0)],1)},staticRenderFns:[]};var c=e("C7Lr")(i,s,!1,function(t){e("TST4")},"data-v-4dd2dcc4",null);a.default=c.exports}});