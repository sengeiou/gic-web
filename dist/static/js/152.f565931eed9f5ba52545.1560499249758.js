webpackJsonp([152],{"0XDy":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"store",data:function(){return{options:[{value:"allstore",label:"所有门店"},{value:"groupstore",label:"门店分组"},{value:"partstore",label:"部分门店"}],value:"",groupvalue:"已选择0个门店分组",selectgroup:"",groupwrap:!1,showGroupTree:!1,data:[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]}],defaultProps:{children:"children",label:"label"},partstore:!1,partvalue:"",options4:[],list:[],loading:!1,states:["Alabama","Alaska","Arizona","Arkansas"]}},methods:{changePartStore:function(){this.$emit("selectStore",{type:"partstore",stores:this.partvalue})},remoteMethod:function(e){var t=this;this.list=this.states.map(function(e){return{value:e,label:e}}),""!==e?(this.loading=!0,setTimeout(function(){t.loading=!1,t.options4=t.list.filter(function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1})},200)):this.options4=[]},checkedStore:function(e,t){var o=t.checkedKeys.length;this.groupvalue="已选择"+o+"个门店分组",this.selectgroup=t.checkedKeys,this.$emit("selectStore",{type:"groupstore",stores:this.selectgroup})},getStore:function(){},changeStore:function(){"allstore"==this.value?(this.$emit("selectStore",{type:"allstore",stores:""}),this.groupwrap=!1,this.partstore=!1):"groupstore"==this.value?(this.groupwrap=!0,this.partstore=!1,this.$emit("selectStore",{type:"groupstore",stores:this.selectgroup})):("partstore"==this.value&&(this.partstore=!0,this.$emit("selectStore",{type:"partstore",stores:this.options4})),this.groupwrap=!1)},showGroup:function(){this.showGroupTree=!this.showGroupTree}},created:function(){this.getStore()},mounted:function(){}},a={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-row",[o("el-col",{staticStyle:{width:"230px"}},[o("el-select",{attrs:{placeholder:"请选择"},on:{change:e.changeStore},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),o("el-col",{directives:[{name:"show",rawName:"v-show",value:e.groupwrap,expression:"groupwrap"}],staticStyle:{width:"240px"}},[o("div",{staticClass:"groupwrap",on:{click:e.showGroup}},[o("div",{staticClass:"groupselect"},[e._v("\n          "+e._s(e.groupvalue)+"\n          "),o("i",{staticClass:"el-icon-arrow-down grouparrow",class:{arrowrotate:e.showGroupTree}})]),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showGroupTree,expression:"showGroupTree"}],staticClass:"grouptree"},[o("el-tree",{attrs:{data:e.data,"show-checkbox":"","node-key":"id","default-expanded-keys":[1],props:e.defaultProps},on:{check:e.checkedStore}})],1)])]),e._v(" "),o("el-col",{directives:[{name:"show",rawName:"v-show",value:e.partstore,expression:"partstore"}],staticStyle:{width:"240px"}},[o("el-select",{attrs:{multiple:"",filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入关键词","remote-method":e.remoteMethod,loading:e.loading},on:{change:e.changePartStore},model:{value:e.partvalue,callback:function(t){e.partvalue=t},expression:"partvalue"}},e._l(e.options4,function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)],1)},staticRenderFns:[]};var s=o("C7Lr")(r,a,!1,function(e){o("PIHC")},"data-v-44e26c04",null);t.default=s.exports},PIHC:function(e,t){}});