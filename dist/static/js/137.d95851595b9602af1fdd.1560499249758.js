webpackJsonp([137],{"3cXf":function(e,t,n){e.exports={default:n("NUnD"),__esModule:!0}},"4OEW":function(e,t){},NUnD:function(e,t,n){var o=n("/KQr"),l=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return l.stringify.apply(l,arguments)}},"V+aV":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("3cXf"),l=n.n(o),i=n("lRwf"),s=n.n(i),c={data:function(){return{treeDataSource:[]}},props:{list:{type:Array,twoWay:!0},func:{type:Function,default:null},expand:{type:Function,default:null},contextmenu:{type:Function,default:function(){console.log("defalt click contextmenu")}},isOpen:{type:Boolean,twoWay:!0,default:!1},isCheck:{type:Boolean,twoWay:!0,default:!1}},watch:{list:{handler:function(){alert("哈哈"),this.initTreeData()},deep:!0}},methods:{initTreeData:function(){var e=this,t=JSON.parse(l()(this.list));!function t(n){n.forEach(function(n){n.hasOwnProperty("clickNode")||(n.clickNode=!!n.hasOwnProperty("clickNode")&&n.clickNode),n.hasOwnProperty("ckbool")||(n.ckbool=!!n.hasOwnProperty("ckbool")&&n.ckbool),n.hasOwnProperty("isCheck")||(n.isCheck=n.hasOwnProperty("isCheck")?n.isCheck:e.isCheck),n.children=n.children||[],n.hover=!1,n.hasOwnProperty("isFolder")||(n.isFolder=n.hasOwnProperty("open")?n.open:e.isOpen),n.hasOwnProperty("isExpand")||(n.isExpand=n.hasOwnProperty("open")?n.open:e.isOpen),n.loadNode=0,t(n.children)})}(t),this.treeDataSource=t}},components:{ztreeItem:{name:"ztreeItem",data:function(){return{parentNodeModel:null}},props:{model:{type:Object,twoWay:!0},num:{type:Number,twoWay:!0},nodes:{type:Number,twoWay:!0,default:0},trees:{type:Array,twoWay:!0,default:[]},root:{type:String,twoWay:!0},callback:{type:Function},expandfunc:{type:Function},cxtmenufunc:{type:Function},ischeck:{type:Boolean,twoWay:!0,default:!1}},methods:{Func:function(e){var t=this;!function n(o,l){o.forEach(function(o){o.id==e.id?(o.clickNode=!0,"function"==typeof t.callback&&t.callback.call(null,e,l,t.trees)):o.clickNode=!1,o.children&&n(o.children,o)})}(this.trees,this.trees)},ckFunc:function(e){var t=this;e.ckbool=!e.ckbool;!function t(n){n.forEach(function(n){n.ckbool=e.ckbool,n.children&&t(n.children)})}(e.children);var n=!1,o=e.parentId;!function l(i,s){i.forEach(function(i){n||(console.log(i.id+"，"+o),i.id==o&&o>0?(console.log("有情况"),o=i.parentId,i.ckbool=e.ckbool,l(t.trees,t.trees)):i.id==e.id&&0==i.parentId?(i.ckbool=e.ckbool,n=!0):l(i.children))})}(this.trees,this.trees)},getParentNode:function(e,t){var n=this;!function o(l,i){l.forEach(function(l){l.id==e.id&&(n.parentNodeModel=i),l.children&&("function"==typeof t&&t.call(l.children),o(l.children,l))})}(this.trees,this.trees)},open:function(e){e.isExpand=!e.isExpand,"function"==typeof this.expandfunc&&e.isExpand&&2!=e.loadNode?this.expandfunc.call(null,e):e.isFolder=!e.isFolder},enterFunc:function(e){e.hover=!0,this.getParentNode(e,null)},leaveFunc:function(e){e.hover=!1},addNode:function(e){if(console.log(this),e){var t=+new Date;e.children.push({id:t,parentId:e.id,name:"动态节点哦～",path:"",clickNode:!1,ckbool:!1,isCheck:this.ischeck,isFolder:!1,isExpand:!1,hover:!1,loadNode:0,children:[]}),e.isFolder=!0,console.log(JSON.parse(l()(e.children)))}else console.log("请先选中节点")},delNode:function(e){e?(this.parentNodeModel.hasOwnProperty("children")?this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(e),1):this.parentNodeModel instanceof Array&&this.parentNodeModel.splice(this.parentNodeModel.indexOf(e),1),e=null):console.log("请先选中节点")},upNode:function(e){if(e||console.log("请先选中节点"),this.parentNodeModel.hasOwnProperty("children")){if((n=this.parentNodeModel.children.indexOf(e))-1>=0){var t=this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(e),1);this.parentNodeModel.children.splice(n-1,0,t[0])}}else if(this.parentNodeModel instanceof Array){var n;if((n=this.parentNodeModel.indexOf(e))-1>=0){t=this.parentNodeModel.splice(this.parentNodeModel.indexOf(e),1);this.parentNodeModel.splice(n-1,0,t[0])}}},downNode:function(e){if(e||console.log("请先选中节点"),this.parentNodeModel.hasOwnProperty("children")){if((n=this.parentNodeModel.children.indexOf(e))+1<=this.parentNodeModel.children.length){var t=this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(e),1);this.parentNodeModel.children.splice(n+1,0,t[0])}}else if(this.parentNodeModel instanceof Array){var n;if((n=this.parentNodeModel.indexOf(e))+1<=this.parentNodeModel.length){t=this.parentNodeModel.splice(this.parentNodeModel.indexOf(e),1);this.parentNodeModel.splice(n+1,0,t[0])}}}},computed:{rootClass:function(){var e="";return"0"==this.root?(this.model.children=this.model.children||[],e=0==this.num&&0==this.model.children.length?"roots_docu":1==this.nodes||0==this.num&&this.nodes!=this.num+1?"root_":this.nodes==this.num+1?"bottom_":"center_"):"1"==this.root&&(this.model.children=this.model.children||[],e=this.nodes>1&&this.model.children.length>0&&this.nodes!=this.num+1?"center_":0==this.num&&this.nodes>1||this.nodes!=this.num+1?"center_docu":1==this.nodes&&0!=this.num||this.nodes==this.num+1&&this.model.children.length>0?"bottom_":"bottom_docu"),e},isChildren:function(){return this.num+1!=this.nodes},prefixClass:function(){var e="";return-1==this.rootClass.indexOf("docu")&&(e=this.model.isFolder?"open":"close"),0==this.model.children.length&&-1==this.rootClass.indexOf("docu")&&(e="docu"),e},liClassVal:function(){return"level"+this.num},spanClassVal:function(){return"button level"+this.num+" switch "+this.rootClass+this.prefixClass},aClassVal:function(){return this.model.clickNode?"level"+this.num+" curSelectedNode":"level"+this.num},ulClassVal:function(){return this.isChildren&&this.model.children.length>0?"level"+this.num+" line":"level"+this.num}},template:"<li :class=\"liClassVal\">\n            \t\x3c!--  <span :class=\"spanClassVal\" @click='open(model)'></span>  小icon的点击  --\x3e\n\t\t\t\t<span :class=\"spanClassVal\"></span>\n\t\t\t\t<a  @mouseenter='enterFunc(model)' @mouseleave='leaveFunc(model)'  @contextmenu.prevent='cxtmenufunc(model)'>\n\t\t\t\t    <span :class=\"{loadSyncNode:model.loadNode==1}\" v-if='model.loadNode==1'></span>\n\t\t\t\t    <span :class='model.iconClass' v-show='model.iconClass' v-else></span>\n\t\t\t\t    <span v-show='ischeck' id=\"treeDemo_5_check\" class=\"button chk\" :class='{\"checkbox_false_full\":!model.ckbool,\"checkbox_true_full\":model.ckbool}' @click='ckFunc(model)' treenode_check=\"\"></span>\n\t\t\t\t\t<span class=\"node_name\" :class='aClassVal' @click='Func(model)' >{{model.name}}</span>\n\t\t\t\t\t\x3c!--新增--\x3e\n\t\t\t\t\t<span  v-show='model.hover' title='新增' class=\"button add\" @click=\"addNode(model)\"></span>\n\t\t\t\t\t\x3c!--删除--\x3e\n\t\t\t\t    <span v-show='model.hover' title='删除' class=\"button remove\" @click=\"delNode(model)\"></span>\n\t\t\t\t    \x3c!--上移--\x3e\n\t\t\t\t    <span v-show='model.hover' title='上移' class=\"button up\" @click=\"upNode(model)\"></span>\n\t\t\t\t    \x3c!--下移--\x3e\n\t\t\t\t    <span v-show='model.hover' title='下移' class=\"button down\" @click=\"downNode(model)\"></span>\n\t\t\t\t</a>\n\t\t\t\t\n\t\t\t\t<ul :class=\"ulClassVal\" v-show='model.isFolder'>\n\t\t\t\t\t<ztree-item v-for=\"(item,i) in model.children\" :key='i' :callback='callback' :expandfunc='expandfunc' :cxtmenufunc='cxtmenufunc' :model.sync=\"item\" :num.sync='i' root='1' :nodes.sync='model.children.length' :ischeck='ischeck' :trees.sync='trees'></ztree-item>\n\t\t\t\t</ul>\n\t\t\t</li>"}},update:function(){this.initTreeData()},mounted:function(){var e=this;s.a.nextTick(function(){e.initTreeData()})}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.treeDataSource.length>0?n("div",{staticClass:"ztree_content_wrap"},[n("div",{staticClass:"zTreeDemoBackground left"},[n("ul",{staticClass:"ztree"},e._l(e.treeDataSource,function(t,o){return n("ztree-item",{key:o,attrs:{model:t,num:o,root:"0",nodes:e.treeDataSource.length,ischeck:e.isCheck,callback:e.func,expandfunc:e.expand,cxtmenufunc:e.contextmenu,trees:e.treeDataSource},on:{"update:model":function(e){t=e},"update:num":function(e){o=e},"update:nodes":function(t){return e.$set(e.treeDataSource,"length",t)},"update:trees":function(t){e.treeDataSource=t}}})}),1)])]):e._e()},staticRenderFns:[]};var r=n("C7Lr")(c,d,!1,function(e){n("4OEW")},null,null);t.default=r.exports}});