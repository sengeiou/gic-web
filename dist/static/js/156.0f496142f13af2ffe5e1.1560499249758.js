webpackJsonp([156],{Ef3U:function(t,e){},X4xt:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"integral",data:function(){return{bodyHeight:document.body.clientHeight||document.documentElement.clientHeight,projectName:"gic-web",leftModulesName:"积分结算"}},mounted:function(){var t=this;window.onresize=function(){t.bodyHeight=document.body.clientHeight||document.documentElement.clientHeight}},methods:{getAsideMenu:function(){var t=this;this.axios.get("/api-auth/get-current-memu-data",{params:{requestProject:"gic-web",project:"gic-web",path:"integral_all"}}).then(function(e){0===e.data.errorCode&&(t.leftMenuRouter=e.data.result.leftMenu)}).catch(function(t){})}},components:{}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-wrap"},[e("div",{staticClass:"left-menu",class:{"small-left":this.$store.state.show},style:{minHeight:this.bodyHeight-66+"px"}},[e("vue-gic-aside-menu",{attrs:{projectName:this.projectName,leftModulesName:this.leftModulesName,collapseFlag:this.$store.state.show}})],1),this._v(" "),e("div",{staticClass:"right-right",class:{margin64:this.$store.state.show}},[e("router-view")],1)])},staticRenderFns:[]};var a=i("C7Lr")(n,s,!1,function(t){i("Ef3U")},"data-v-0f487d3b",null);e.default=a.exports}});