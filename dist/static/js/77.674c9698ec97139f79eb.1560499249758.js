webpackJsonp([77,134,141],{"3Xzz":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("EwKy"),o=r.n(s),i={name:"navpath",data:function(){return{projectName:"gic-web",linkHref:""}},props:{navpath:{type:Array,default:[]},navtip:{type:Boolean,default:!1}},mounted:function(){this.linkHref=o.a.config+"/report/#/memberSummary"},methods:{}},a={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navwrap boxbttom"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("span",{staticClass:"el-breadcrumb__item no-link link-active"},[r("a",{staticClass:"el-breadcrumb__inner is-link",attrs:{href:e.linkHref,role:"link"}},[e._v("首页")]),r("span",{staticClass:"el-breadcrumb__separator",attrs:{role:"presentation"}},[e._v("/")])]),e._v(" "),e._l(e.navpath,function(t,s){return r("el-breadcrumb-item",{key:s,staticClass:"no-link",class:{"link-active":""!=t.path&&s!=e.navpath.length-1},attrs:{to:{path:t.path}}},[e._v(e._s(t.name))])})],2),e._v(" "),e.navpath.length>0?r("h1",{staticClass:"navtitle"},[e._v(e._s(e.navpath[e.navpath.length-1].name))]):e._e(),e._v(" "),1==e.navtip?r("div",{staticClass:"navtip navmTop"},[r("i",{staticClass:"el-icon-info navtipcolor"}),e._v("变更导航个数，移动顺序，更换页面链接均需提交小程序审核后重新发布生效，其他变更立即生效。小程序审核请联系品牌项目经理。")]):e._e()],1)},staticRenderFns:[]};var l=r("C7Lr")(i,a,!1,function(e){r("lKih")},"data-v-d2ee4e94",null);t.default=l.exports},"6iV/":function(e,t,r){"use strict";var s=r("H9GB"),o=r("Ml8i"),i=r("qFr1");e.exports={formats:i,parse:o,stringify:s}},"9XfU":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("3Xzz"),o=r("Mk6G"),i=r("s82y"),a=r("rM4U"),l=r("6iV/"),n=function(e,t,r){t?Object(a.a)(t)?r():r(new Error("员工代码不允许有特殊符号")):r(new Error("请输入员工代码"))},c={name:"clerk_list_add",data:function(){return{bodyHeight:document.body.clientHeight||document.documentElement.clientHeight,navpath:[{name:"企业管理",path:""},{name:"企业资料",path:""},{name:"成员管理",path:""},{name:"店员列表",path:"/clerk_list"},{name:"新增成员",path:""}],navpathedit:[{name:"企业管理",path:""},{name:"企业资料",path:""},{name:"成员管理",path:""},{name:"店员列表",path:"/clerk_list"},{name:"编辑成员",path:""}],editNavBool:!1,editForm:{name:"",sex:"1",code:"",mobile:"",level:"",store:"",password:null,pwd:"123456"},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],code:[{required:!0,trigger:"blur",validator:n}],mobile:[{required:!0,message:"请输入手机号码",trigger:"blur"}],level:[{required:!0,message:"请输入职位",trigger:"blur"}]},inputNum1:0,inputLength1:10,inputNum2:0,inputLength2:20,inputNum3:0,inputLength3:10,inputNum4:0,inputLength4:10,clerkId:"",clerkType:"",storeId:null,storeMode:"0",activationStatus:"0",store:"0",loading:!1,sendChildData:{},showPassword:!0,editType:"",storeOrDepart:!1,editStoreBool:!1,addStoreBool:!1,editDepartBool:!1,editStore:{roleName:"",clerkCount:0,lowLevelRoleName:null,app:1,gicWeb:1},roleId:null,departId:null,selectTplDialog:!1,showTpl:!0,loading2:!1,roleList:[],currentIndex:-1,selelctTplData:{},storeGroupId:"",departStoreId:"",storeList:[],saveBtnBool:!0,contactDialog:!1,saveBtnHtml:"该成员处于新增审核中，不能编辑哦",type:2,search:"",search2:"",groupId:"",errorBool1:!1,errorMsg1:"",errorBool2:!1,errorMsg2:"jkj",storeOrDepartType:"0",groupTopBool:!0,storeTopBool:!0}},created:function(){this.getUrlData()},mounted:function(){var e=this;window.onresize=function(){e.bodyHeight=document.body.clientHeight||document.documentElement.clientHeight}},methods:{getUrlData:function(){this.storeOrDepartType=this.$route.query.type,this.clerkId=this.$route.query.clerkId,this.clerkId?this.editNavBool=!0:this.editNavBool=!1,"0"==this.storeOrDepartType?(this.type=2,this.storeOrDepart=!0,this.storeId=this.$route.query.storeId,this.clerkType=this.$route.query.clerkType,this.clerkId?(this.editStoreBool=!0,this.addStoreBool=!1):(this.addStoreBool=!0,this.editStoreBool=!1,this.editForm.level="店员",this.clerkType="0",this.storeMode="0",this.editForm.name="",this.editForm.password=null,this.editForm.pwd=null,this.editForm.storeName=this.$route.query.storeName,this.inputNum3=o.a.getZhLen(this.editForm.level))):"2"==this.storeOrDepartType&&(this.type=3,this.storeOrDepart=!1,this.editDepartBool=!0,this.departId=this.$route.query.departId,this.clerkId?(this.navpathedit[2].path="/clerk_list?type="+this.type,this.showTpl=!0):(this.navpath[2].path="/clerk_list?type="+this.type,this.showTpl=!1)),this.getClerkInfo()},getClerkInfo:function(){var e=this;this.loading=!0,this.axios.post("/api-admin/clerk-info",l.stringify({requestProject:"gic-web",clerkId:this.clerkId,clerkType:this.storeOrDepartType})).then(function(t){var r=t.data;if(console.log(r),e.loading=!1,0==r.errorCode){if(r.result.role){var s=r.result.role;e.editStore.roleName=s.roleName,e.editStore.clerkCount=s.clerkCount,e.editStore.lowLevelRoleName=s.lowLevelRoleName,e.editStore.app=s.app,e.editStore.gicWeb=s.gicWeb,e.roleId=s.roleId}if("2"==e.storeOrDepartType&&(e.roleList=r.result.roleList),e.clerkId){var i=r.result.clerkInfo;if(e.editForm.name=i.clerkName,e.editForm.sex=i.clerkGender,e.editForm.code=i.clerkCode,e.editForm.mobile=i.phoneNumber,e.editForm.level=i.positionName,e.inputNum1=o.a.getZhLen(e.editForm.name),e.inputNum2=o.a.getZhLen(e.editForm.code),e.inputNum3=o.a.getZhLen(e.editForm.level),e.inputNum4=o.a.getZhLen(e.editForm.mobile),2==i.status?(e.saveBtnHtml="该成员处于新增审核中，不能编辑哦",e.saveBtnBool=!1,e.contactDialog=!0):3==i.status?(e.saveBtnHtml="该成员处于离职审核中，不能编辑哦",e.saveBtnBool=!1,e.contactDialog=!0):4==i.status?(e.saveBtnHtml="该成员处于转岗审核中，不能编辑哦",e.saveBtnBool=!1,e.contactDialog=!0):e.saveBtnBool=!0,"0"==e.storeOrDepartType)e.editForm.storeName=i.storeName,e.storeId=i.storeId;else if("2"==e.storeOrDepartType)if(e.storeMode=i.storeMode.toString(),e.activationStatus=i.activationStatus,"1"==e.storeMode){e.storeList=i.storeList,e.sendChildData={},e.sendChildData.storeType=e.storeMode;var a="";i.storeList.forEach(function(e){a+=e.storeGroupId+","}),e.sendChildData.storeList=i.storeList,e.sendChildData.storeGroupIds=a.substring(0,a.length-1)}else if("0"==e.storeMode)e.sendChildData={},e.sendChildData.storeType=e.storeMode;else if("2"==e.storeMode){e.storeList=i.storeList,e.sendChildData={},e.sendChildData.storeType=e.storeMode;var l="",n="";i.storeList.forEach(function(e){l+=e.storeId+",",n+=e.storeName+","}),e.sendChildData.storeList=i.storeList,e.sendChildData.storeIds=l.substring(0,l.length-1),e.sendChildData.storeName=n.substring(0,n.length-1)}}else"2"==e.storeOrDepartType&&(e.storeMode="0",e.editDepartBool=!1)}else e.$message.error(r.message),e.roleId=null})},toInput1:function(e,t){this.editForm.name=o.a.getByteVal(t.target.value,this.inputLength1),this.inputNum1=o.a.getZhLen(this.editForm.name)},toInput2:function(e,t){this.editForm.code&&(this.editForm.code=o.a.getByteVal(t.target.value,this.inputLength2),this.inputNum2=o.a.getZhLen(this.editForm.code))},toInput3:function(e,t){this.editForm.level=o.a.getByteVal(t.target.value,this.inputLength3),this.inputNum3=o.a.getZhLen(this.editForm.level)},toInput4:function(e,t){this.editForm.mobile=o.a.getByteVal(t.target.value,this.inputLength4),this.inputNum4=o.a.getZhLen(this.editForm.mobile)},onlyNumTime:function(){this.editForm.mobile=this.editForm.mobile.replace(/\D/g,"")},selectAgain:function(){this.selectTplDialog=!0},selectTpl:function(e,t){this.currentIndex=t,this.selelctTplData=e},selectTplBtn:function(){this.showTpl=!0,this.selectTplDialog=!1,this.roleId=this.selelctTplData.roleId,this.editStore.roleName=this.selelctTplData.roleName,this.editStore.clerkCount=this.selelctTplData.clerkCount,this.editStore.lowLevelRoleName=this.selelctTplData.lowLevelRoleName,this.editStore.app=this.selelctTplData.app,this.editStore.gicWeb=this.selelctTplData.gicWeb,this.errorBool2=!1},selectTreeHide:function(){this.$refs.selectTree.hideTree()},getSelectGroupData:function(e){console.log(e),this.storeMode=e.storeType.toString(),e.storeList&&(this.storeList=e.storeList)},saveBtn:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.checkError(),!1;if(null==t.roleId?(t.errorBool2=!0,t.errorMsg2="请选择模板"):t.errorBool2=!1,!t.errorBool2){if("1"==t.storeMode){if(t.storeList.length<1)return void t.$message.error("请选择门店分组")}else if("2"==t.storeMode&&t.storeList.length<1)return void t.$message.error("请选择部分门店");t.saveBtnData()}})},checkError:function(){null==this.roleId?(this.errorBool2=!0,this.errorMsg2="请选择模板"):this.errorBool2=!1},saveBtnData:function(){var e=this,t=0;"0"==this.storeOrDepartType?t=Number(this.clerkType):"2"==this.storeOrDepartType&&(t=2),this.axios.post("/api-admin/save-clerk-info?requestProject=gic-web",{clerkId:this.clerkId,clerkType:t,clerkName:this.editForm.name,phoneNumber:this.editForm.mobile,positionName:this.editForm.level,storeId:this.storeId,roleId:this.roleId,departId:this.departId,storeMode:this.storeMode,clerkCode:this.editForm.code,clerkGender:this.editForm.sex,resetPwd:this.editForm.password,storeList:this.storeList},{headers:{"Content-Type":"application/json"}}).then(function(t){var r=t.data;e.loading=!1,0==r.errorCode?(e.$message.success("保存成功"),e.$router.push({path:"/clerk_list",query:{type:e.type}})):110021==r.errorCode?e.$message(r.message):e.$message.error(r.message)})},saveBtn2:function(){var e=this;if(this.editForm.name=this.editForm.name.replace(/\s+/g,""),this.inputNum1=o.a.getZhLen(this.editForm.name),""!=this.editForm.name)if(""!=this.editForm.code)if(/^[\w\u4e00-\u9fa5-]+$/.test(this.editForm.code))if(""!=this.editForm.mobile)if(/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.editForm.mobile))if(""!=this.editForm.level)if(null!=this.roleId){if("1"==this.storeMode){if(this.storeList.length<1)return void this.$message.error("请选择门店分组")}else if("2"==this.storeMode&&this.storeList.length<1)return void this.$message.error("请选择部分门店");this.axios.post("/api-admin/save-clerk-info?requestProject=gic-web",{clerkId:this.clerkId,clerkType:Number(this.clerkType),clerkName:this.editForm.name,phoneNumber:this.editForm.mobile,positionName:this.editForm.level,storeId:this.storeId,roleId:this.roleId,departId:this.departId,storeMode:this.storeMode,clerkCode:this.editForm.code,clerkGender:this.editForm.sex,resetPwd:this.editForm.password,storeList:this.storeList},{headers:{"Content-Type":"application/json"}}).then(function(t){var r=t.data;console.log(r),e.loading=!1,0==r.errorCode?(e.$message.success("保存成功"),e.$router.push({path:"/clerk_list",query:{type:e.type}})):110021==r.errorCode?e.$message(r.message):e.$message.error(r.message)})}else this.$message.error("请选择模板");else this.$message.error("请输入职位");else this.$message.error("请输入有效的手机号码");else this.$message.error("请输入手机号码");else this.$message.error("员工代码不允许有特殊符号");else this.$message.error("请输入员工代码");else this.$message.error("请输入姓名")}},components:{topNav:s.default,selectShopTree:i.default}},p={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"right-wrap"},[e.editNavBool?r("topNav",{attrs:{navpath:e.navpathedit}}):r("topNav",{attrs:{navpath:e.navpath}}),e._v(" "),r("div",{staticClass:"right-content",on:{click:e.selectTreeHide}},[r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"right-box"},[r("div",{staticClass:"item-info"},[r("el-form",{ref:"ruleForm",staticClass:"form-wrap",attrs:{rules:e.rules,"label-position":"right",model:e.editForm,"label-width":"100px"}},[r("div",{staticClass:"item-wrap"},[r("el-form-item",{attrs:{label:"姓名",prop:"name"}},[r("div",{staticClass:"edit-input"},[r("el-input",{staticClass:"input-input",nativeOn:{keyup:function(t){return e.toInput1(e.editForm.name,t)}},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}}),e._v(" "),r("span",{staticClass:"tag-name-num"},[e._v(e._s(e.inputNum1)+"/"+e._s(e.inputLength1))])],1)]),e._v(" "),r("el-form-item",{staticClass:"is-required",attrs:{label:"性别",prop:"sex"}},[r("el-radio-group",{model:{value:e.editForm.sex,callback:function(t){e.$set(e.editForm,"sex",t)},expression:"editForm.sex"}},[r("el-radio",{attrs:{label:"1"}},[e._v("男")]),e._v(" "),r("el-radio",{attrs:{label:"2"}},[e._v("女")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"员工代码",prop:"code"}},[r("div",{staticClass:"edit-input"},[r("el-input",{staticClass:"input-input",attrs:{disabled:e.editStoreBool||e.editDepartBool},nativeOn:{keyup:function(t){return e.toInput2(e.editForm.code,t)}},model:{value:e.editForm.code,callback:function(t){e.$set(e.editForm,"code",t)},expression:"editForm.code"}}),e._v(" "),r("span",{staticClass:"tag-name-num"},[e._v(e._s(e.inputNum2)+"/"+e._s(e.inputLength2))])],1)]),e._v(" "),r("el-form-item",{attrs:{label:"手机号码",prop:"mobile"}},[r("div",{staticClass:"edit-input"},[r("el-input",{staticClass:"input-input",attrs:{type:"number"},nativeOn:{keyup:function(t){return e.toInput4(e.editForm.mobile,t)}},model:{value:e.editForm.mobile,callback:function(t){e.$set(e.editForm,"mobile",t)},expression:"editForm.mobile"}}),e._v(" "),r("span",{staticClass:"tag-name-num"},[e._v(e._s(e.inputNum4)+"/"+e._s(e.inputLength4))])],1)]),e._v(" "),r("el-form-item",{attrs:{label:"职位",prop:"level"}},[r("div",{staticClass:"edit-input"},[r("el-input",{staticClass:"input-input",attrs:{disabled:e.addStoreBool||e.editStoreBool},nativeOn:{keyup:function(t){return e.toInput3(e.editForm.level,t)}},model:{value:e.editForm.level,callback:function(t){e.$set(e.editForm,"level",t)},expression:"editForm.level"}}),e._v(" "),r("span",{staticClass:"tag-name-num"},[e._v(e._s(e.inputNum3)+"/"+e._s(e.inputLength3))])],1),e._v(" "),r("div",{staticClass:"right-input-tip"},[r("span",[e._v("(如需指定店长，请到列表上单独设置)")])])]),e._v(" "),r("el-form-item",{staticClass:"is-required",attrs:{label:"权限模板"}},[r("p",{directives:[{name:"show",rawName:"v-show",value:!e.storeOrDepart,expression:"!storeOrDepart"}],class:{"margin-b-10":e.showTpl}},[r("el-button",{on:{click:e.selectAgain}},[e._v(e._s(e.showTpl?"重新选择":"选择模板"))])],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showTpl,expression:"showTpl"}],staticClass:"tpl-wrap"},[r("div",{staticClass:"title-wrap"},[r("p",{staticClass:"tpl-name fl"},[e._v(e._s(e.editStore.roleName))]),e._v(" "),r("p",{staticClass:"fr"},[e._v(e._s(e.editStore.clerkCount)+"人")])]),e._v(" "),r("ul",[r("li",{staticClass:"clearfix"},[r("p",{staticClass:"tpl-name fl"},[e._v("直属下级")]),e._v(" "),r("p",{staticClass:"fr"},[e._v(e._s(e.editStore.lowLevelRoleName?e.editStore.lowLevelRoleName:"无"))])]),e._v(" "),r("li",{staticClass:"clearfix"},[r("p",{staticClass:"fl"},[e._v("Web后台管理")]),e._v(" "),r("p",{staticClass:"fr"},[e._v(e._s(1==e.editStore.gicWeb?"开启":"关闭"))])])])]),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errorBool2,expression:"errorBool2"}],staticClass:"el-form-item__error"},[e._v(e._s(e.errorMsg2))])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.storeOrDepart,expression:"storeOrDepart"}],staticClass:"store-clerk"},[r("el-form-item",{attrs:{label:"所属门店"}},[r("div",{staticClass:"edit-input"},[r("el-input",{staticClass:"input-input",attrs:{disabled:""},model:{value:e.editForm.storeName,callback:function(t){e.$set(e.editForm,"storeName",t)},expression:"editForm.storeName"}})],1)])],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.storeOrDepart,expression:"!storeOrDepart"}],staticClass:"depart-clerk"},[r("el-form-item",{attrs:{label:"重设登录密码"}},[r("div",{staticClass:"edit-input"},[r("el-input",{staticClass:"input-input",model:{value:e.editForm.password,callback:function(t){e.$set(e.editForm,"password",t)},expression:"editForm.password"}})],1)]),e._v(" "),r("el-form-item",{staticClass:"is-required",attrs:{label:"管辖门店",prop:"store"}},[r("selectShopTree",{ref:"selectTree",attrs:{groupTopBool:e.groupTopBool,storeTopBool:e.storeTopBool,msg:e.sendChildData},on:{sendSelectGroupData:e.getSelectGroupData}})],1)],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.saveBtnBool,expression:"saveBtnBool"}]},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.saveBtn("ruleForm")}}},[e._v("保 存")])],1)],1)])],1)])]),e._v(" "),r("vue-gic-footer"),e._v(" "),r("el-dialog",{attrs:{title:"权限模板",visible:e.selectTplDialog,width:"610px"},on:{"update:visible":function(t){e.selectTplDialog=t}}},[r("div",{staticClass:"select-tpl-wrap clearfix"},e._l(e.roleList,function(t,s){return r("div",{key:s,staticClass:"tpl-wrap",class:{on:e.currentIndex==s},on:{click:function(r){return e.selectTpl(t,s)}}},[r("div",{staticClass:"title-wrap"},[r("p",{staticClass:"tpl-name fl"},[e._v(e._s(t.roleName))]),e._v(" "),r("p",{staticClass:"fr"},[e._v(e._s(t.clerkCount)+"人")])]),e._v(" "),r("ul",[r("li",{staticClass:"clearfix"},[r("p",{staticClass:"fl"},[e._v("直属下级")]),e._v(" "),r("p",{staticClass:"fr"},[e._v(e._s(t.lowLevelRoleName?t.lowLevelRoleName:"无"))])]),e._v(" "),r("li",{staticClass:"clearfix"},[r("p",{staticClass:"fl"},[e._v("Web后台管理")]),e._v(" "),r("p",{staticClass:"fr"},[e._v(e._s(1==t.gicWeb?"开启":"关闭"))])])])])}),0),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.selectTplDialog=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.selectTplBtn(t)}}},[e._v("确 定")])],1)]),e._v(" "),r("el-dialog",{attrs:{title:"提示",visible:e.contactDialog,width:"500px"},on:{"update:visible":function(t){e.contactDialog=t}}},[r("span",[e._v(e._s(e.saveBtnHtml))]),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.contactDialog=!1}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var u=r("C7Lr")(c,p,!1,function(e){r("IHiy")},"data-v-639b5a6f",null);t.default=u.exports},EwKy:function(e,t){var r=window.location.origin;e.exports={config:r}},H9GB:function(e,t,r){"use strict";var s=r("JNAD"),o=r("qFr1"),i={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:s.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},n=function e(t,r,o,i,a,n,c,p,u,d,h,m){var f=t;if("function"==typeof c)f=c(r,f);else if(f instanceof Date)f=d(f);else if(null===f){if(i)return n&&!m?n(r,l.encoder):r;f=""}if("string"==typeof f||"number"==typeof f||"boolean"==typeof f||s.isBuffer(f))return n?[h(m?r:n(r,l.encoder))+"="+h(n(f,l.encoder))]:[h(r)+"="+h(String(f))];var v,g=[];if(void 0===f)return g;if(Array.isArray(c))v=c;else{var y=Object.keys(f);v=p?y.sort(p):y}for(var b=0;b<v.length;++b){var _=v[b];a&&null===f[_]||(g=Array.isArray(f)?g.concat(e(f[_],o(r,_),o,i,a,n,c,p,u,d,h,m)):g.concat(e(f[_],r+(u?"."+_:"["+_+"]"),o,i,a,n,c,p,u,d,h,m)))}return g};e.exports=function(e,t){var r=e,a=t?s.assign({},t):{};if(null!==a.encoder&&void 0!==a.encoder&&"function"!=typeof a.encoder)throw new TypeError("Encoder has to be a function.");var c=void 0===a.delimiter?l.delimiter:a.delimiter,p="boolean"==typeof a.strictNullHandling?a.strictNullHandling:l.strictNullHandling,u="boolean"==typeof a.skipNulls?a.skipNulls:l.skipNulls,d="boolean"==typeof a.encode?a.encode:l.encode,h="function"==typeof a.encoder?a.encoder:l.encoder,m="function"==typeof a.sort?a.sort:null,f=void 0!==a.allowDots&&a.allowDots,v="function"==typeof a.serializeDate?a.serializeDate:l.serializeDate,g="boolean"==typeof a.encodeValuesOnly?a.encodeValuesOnly:l.encodeValuesOnly;if(void 0===a.format)a.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,a.format))throw new TypeError("Unknown format option provided.");var y,b,_=o.formatters[a.format];"function"==typeof a.filter?r=(b=a.filter)("",r):Array.isArray(a.filter)&&(y=b=a.filter);var w,k=[];if("object"!=typeof r||null===r)return"";w=a.arrayFormat in i?a.arrayFormat:"indices"in a?a.indices?"indices":"repeat":"indices";var I=i[w];y||(y=Object.keys(r)),m&&y.sort(m);for(var C=0;C<y.length;++C){var D=y[C];u&&null===r[D]||(k=k.concat(n(r[D],D,I,p,u,d?h:null,b,m,f,v,_,g)))}var L=k.join(c),N=!0===a.addQueryPrefix?"?":"";return L.length>0?N+L:""}},IHiy:function(e,t){},JNAD:function(e,t,r){"use strict";var s=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),i=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},s=0;s<e.length;++s)void 0!==e[s]&&(r[s]=e[s]);return r};e.exports={arrayToObject:i,assign:function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],s=0;s<t.length;++s)for(var o=t[s],i=o.obj[o.prop],a=Object.keys(i),l=0;l<a.length;++l){var n=a[l],c=i[n];"object"==typeof c&&null!==c&&-1===r.indexOf(c)&&(t.push({obj:i,prop:n}),r.push(c))}return function(e){for(var t;e.length;){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var s=[],o=0;o<t.length;++o)void 0!==t[o]&&s.push(t[o]);r.obj[r.prop]=s}}return t}(t)},decode:function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},encode:function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",s=0;s<t.length;++s){var i=t.charCodeAt(s);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?r+=t.charAt(s):i<128?r+=o[i]:i<2048?r+=o[192|i>>6]+o[128|63&i]:i<55296||i>=57344?r+=o[224|i>>12]+o[128|i>>6&63]+o[128|63&i]:(s+=1,i=65536+((1023&i)<<10|1023&t.charCodeAt(s)),r+=o[240|i>>18]+o[128|i>>12&63]+o[128|i>>6&63]+o[128|63&i])}return r},isBuffer:function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,r,o){if(!r)return t;if("object"!=typeof r){if(Array.isArray(t))t.push(r);else{if("object"!=typeof t)return[t,r];(o.plainObjects||o.allowPrototypes||!s.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!=typeof t)return[t].concat(r);var a=t;return Array.isArray(t)&&!Array.isArray(r)&&(a=i(t,o)),Array.isArray(t)&&Array.isArray(r)?(r.forEach(function(r,i){s.call(t,i)?t[i]&&"object"==typeof t[i]?t[i]=e(t[i],r,o):t.push(r):t[i]=r}),t):Object.keys(r).reduce(function(t,i){var a=r[i];return s.call(t,i)?t[i]=e(t[i],a,o):t[i]=a,t},a)}}},Mk6G:function(e,t,r){"use strict";t.a={getByteLen:function(e){for(var t=0,r=0;r<e.length;r++){null!=e.charAt(r).match(/[^\x00-\xff]/gi)?t+=2:t+=1}return t},getZhLen:function(e){for(var t=0,r=0;r<e.length;r++){null!=e.charAt(r).match(/[^\x00-\xff]/gi)?t+=1:t+=.5}return Math.ceil(t)},cutStr:function(e,t,r){for(var s=0,o=0;o<e.length;o++){var i=e.charAt(o);if(1==r&&(encodeURI(i).length>2?s+=1:s+=.5),2==r&&(s+=1),s>=t){var a=s==t?o+1:o;return e.substr(0,a)}}},getByteVal2:function(e){for(var t="",r=0;r<e.length;r++)null!=e[r].match(/[^\x00-\xff]/gi)?1:.5,t+=e[r];return t},getByteVal:function(e,t){for(var r="",s=0,o=0;o<e.length&&(null!=e[o].match(/[^\x00-\xff]/gi)?s+=1:s+=.5,!(s>t));o++)r+=e[o];return r},getCharVal:function(e,t){for(var r="",s=0,o=0;o<e.length&&(null!=e[o].match(/[^\x00-\xff]/gi)?s+=2:s+=1,!(s>t));o++)r+=e[o];return r},regPos:function(e){return/^\d+(\.\d+)?$/.test(e)}}},Ml8i:function(e,t,r){"use strict";var s=r("JNAD"),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:s.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t,r){if(e){var s=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,a=/(\[[^[\]]*])/.exec(s),l=a?s.slice(0,a.index):s,n=[];if(l){if(!r.plainObjects&&o.call(Object.prototype,l)&&!r.allowPrototypes)return;n.push(l)}for(var c=0;null!==(a=i.exec(s))&&c<r.depth;){if(c+=1,!r.plainObjects&&o.call(Object.prototype,a[1].slice(1,-1))&&!r.allowPrototypes)return;n.push(a[1])}return a&&n.push("["+s.slice(a.index)+"]"),function(e,t,r){for(var s=t,o=e.length-1;o>=0;--o){var i,a=e[o];if("[]"===a)i=(i=[]).concat(s);else{i=r.plainObjects?Object.create(null):{};var l="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,n=parseInt(l,10);!isNaN(n)&&a!==l&&String(n)===l&&n>=0&&r.parseArrays&&n<=r.arrayLimit?(i=[])[n]=s:i[l]=s}s=i}return s}(n,t,r)}};e.exports=function(e,t){var r=t?s.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||s.isRegExp(r.delimiter)?r.delimiter:i.delimiter,r.depth="number"==typeof r.depth?r.depth:i.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:i.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:i.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:i.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:i.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:i.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:i.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:i.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var l="string"==typeof e?function(e,t){for(var r={},s=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,a=t.parameterLimit===1/0?void 0:t.parameterLimit,l=s.split(t.delimiter,a),n=0;n<l.length;++n){var c,p,u=l[n],d=u.indexOf("]="),h=-1===d?u.indexOf("="):d+1;-1===h?(c=t.decoder(u,i.decoder),p=t.strictNullHandling?null:""):(c=t.decoder(u.slice(0,h),i.decoder),p=t.decoder(u.slice(h+1),i.decoder)),o.call(r,c)?r[c]=[].concat(r[c]).concat(p):r[c]=p}return r}(e,r):e,n=r.plainObjects?Object.create(null):{},c=Object.keys(l),p=0;p<c.length;++p){var u=c[p],d=a(u,l[u],r);n=s.merge(n,d,r)}return s.compact(n)}},lKih:function(e,t){},oNFN:function(e,t){},qFr1:function(e,t,r){"use strict";var s=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return s.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},rM4U:function(e,t,r){"use strict";t.e=function(e){return/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(e)},t.a=function(e){return/^[\w\u4e00-\u9fa5-]+$/.test(e)},t.b=function(e){return/^[\s\w\u4e00-\u9fa5-]+$/.test(e)},t.c=function(e){return/^[a-zA-Z0-9]/.test(e)},t.d=function(e){var t=e.split(",");if(2!=t.length)return!1;var r=t[0],s=t[1];if(!s)return!1;var o=/^[\+\-]?\d*?\.?\d*?$/;return!(!o.test(r)||!o.test(s))}},s82y:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("6iV/"),o={name:"select_shop_tree",props:{msg:{type:Object},groupTopBool:{type:Boolean,default:!1},storeTopBool:{type:Boolean,default:!1}},data:function(){return{options:[{value:"0",label:"所有门店"},{value:"1",label:"门店分组"},{value:"2",label:"部分门店"}],defaultProps:{children:"children",label:"storeGroupName"},value:"0",dataObj:[],showShopTree:!1,showSearchList:!1,shopGroupValue:"已选择0个门店分组",searchShop:"",searchValue:"",searchValueList:"",searchOptions:[],selectList:[],selecData:[],selecData2:[],selecDataName:[],selecDataId:[],selectListId:[],selectListGroupId:[],keysArr:[],sendGroupObj:{},sendStoreObj:{},storeList:[]}},watch:{msg:function(e,t){this.init(e)}},created:function(){this.init(this.msg)},mounted:function(){this.getGroupTreeData()},methods:{init:function(e){var t=this;if(e.storeType){if(this.value=e.storeType.toString(),"1"==this.value){if(this.selecDataName.splice(0,this.selecDataName.length),this.keysArr.splice(0,this.keysArr.length),this.shopGroupValue="已选择"+e.storeGroupIds.split(",").length+"个门店分组",e.storeGroupIds.split(",").forEach(function(e){t.keysArr.push(e)}),this.selecData=[],e.storeList)e.storeList.length>0&&(this.selecData=e.storeList);else{var r=[];e.storeGroupIds.split(",").forEach(function(e){var t={};t.storeGroupId=e,t.storeId=null,r.push(t)}),this.selecData=r}this.sendGroupObj.storeGroupIds=e.storeGroupIds,this.sendGroupObj.storeIds="",this.sendGroupObj.storeType=this.value,this.sendGroupObj.storeList=e.storeList}else if("2"==this.value){if(this.keysArr.splice(0,this.keysArr.length),this.shopGroupValue="已选择0个门店分组",this.selecDataName.splice(0,this.selecDataName.length),e.storeName.split(",").forEach(function(e){t.selecDataName.push(e)}),this.selectListId.splice(0,this.selectListId.length),e.storeIds.split(",").forEach(function(e){t.selectListId.push(e)}),this.selecData2=[],e.storeList)e.storeList.length>0&&(this.selecData2=e.storeList);else{r=[];e.storeIds.split(",").forEach(function(e){var t={storeGroupId:null};t.storeId=e,r.push(t)}),this.selecData2=r}this.sendStoreObj.storeType=this.value,this.sendStoreObj.storeGroupIds=e.storeGroupIds,this.sendStoreObj.storeIds=e.storeIds,this.sendStoreObj.storeList=e.storeList}else"0"==this.value&&(this.keysArr.splice(0,this.keysArr.length),this.selecDataName.splice(0,this.selecDataName.length),this.selectListId.splice(0,this.selectListId.length),this.keysArr.splice(0,this.keysArr.length),this.shopGroupValue="已选择0个门店分组");this.getGroupTreeData()}},getGroupTreeData:function(){var e=this;this.axios.get("/api-admin/store-group-list",{params:{requestProject:"middle-ground"}}).then(function(t){var r=t.data;0==r.errorCode?e.dataObj=r.result:e.$message.error(r.message)})},getSearchData:function(e){var t=this;e&&this.axios.post("/api-plug/query-store-by-code-name",s.stringify({requestProject:"middle-ground",searchParam:this.searchValueList,selectedIds:this.selectListId.join(","),flag:"1"})).then(function(e){var r=e.data;0==r.errorCode?t.selectList=r.result:t.$message.error(r.message)})},selectShop:function(e){var t={};t.storeType=parseInt(e),"0"==e?(t.storeGroupIds="",t.storeIds="",this.$emit("sendSelectGroupData",t)):"1"==e?(this.sendGroupObj.storeType=parseInt(e),this.$emit("sendSelectGroupData",this.sendGroupObj)):"2"==e&&(this.sendStoreObj.storeType=parseInt(e),this.$emit("sendSelectGroupData",this.sendStoreObj))},toggleShopTree:function(){this.showShopTree=!this.showShopTree},groupBtnSure:function(){this.showShopTree=!1;var e=this.$refs.shopGroupTree.getCheckedKeys(),t=e.length,r=e.join(","),s=[];e.forEach(function(e){var t={};t.storeGroupId=e,t.storeId=null,s.push(t)}),this.shopGroupValue="已选择"+t+"个门店分组",this.sendGroupObj={},this.sendGroupObj.storeGroupIds=r,this.sendGroupObj.storeIds="",this.sendGroupObj.storeType=parseInt(this.value),this.sendGroupObj.storeList=s,this.$emit("sendSelectGroupData",this.sendGroupObj)},toggleSearchShop:function(){this.showSearchList=!this.showSearchList},showSearchTree:function(){this.showSearchList=!0},hideSearch:function(){this.showSearchList=!1},hideTree:function(){this.showShopTree=!1,this.showSearchList=!1},selectShopSuccess:function(e,t){this.selecData2.push(e),this.selecDataName.push(e.storeName),this.selectList.splice(t,1),this.selectListId.push(e.storeId),this.selectListGroupId.push(e.storeGroupId);var r=[];this.selecData2.forEach(function(e){var t={};t.storeGroupId=e.storeGroupId,t.storeId=e.storeId,r.push(t)}),this.sendStoreObj={},this.sendStoreObj.storeType=parseInt(this.value),this.sendStoreObj.storeGroupIds=this.selectListGroupId.join(","),this.sendStoreObj.storeIds=this.selectListId.join(","),this.sendStoreObj.storeList=r,this.$emit("sendSelectGroupData",this.sendStoreObj)},removeData:function(e){this.selecData2.splice(e,1),this.selecDataName.splice(e,1),this.selectListId.splice(e,1),this.selectListGroupId.splice(e,1);var t=[];this.selecData2.forEach(function(e){var r={};r.storeGroupId=e.storeGroupId,r.storeId=e.storeId,t.push(r)}),this.sendStoreObj={},this.sendStoreObj.storeType=parseInt(this.value),this.sendStoreObj.storeGroupIds=this.selectListGroupId.join(","),this.sendStoreObj.storeIds=this.selectListId.join(","),this.sendStoreObj.storeList=t,this.$emit("sendSelectGroupData",this.sendStoreObj)}}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"select-shop-wrap",on:{click:e.hideTree}},[r("el-select",{staticClass:"select-shop fl",attrs:{placeholder:"请选择"},on:{change:e.selectShop},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:"1"==e.value,expression:"value=='1'"}],staticClass:"all-style-wrap fl"},[r("div",{staticClass:"select-shop",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.toggleShopTree(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.shopGroupValue,expression:"shopGroupValue"}],attrs:{type:"text",readonly:""},domProps:{value:e.shopGroupValue},on:{input:function(t){t.target.composing||(e.shopGroupValue=t.target.value)}}})]),e._v(" "),r("transition",{attrs:{name:"slide-fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.showShopTree,expression:"showShopTree"}],staticClass:"select-shop-url-wrap",class:{"group-top-318":e.groupTopBool}},[r("div",{staticClass:"shop-tree-wrap"},[r("el-tree",{ref:"shopGroupTree",attrs:{data:e.dataObj,"show-checkbox":"","default-expand-all":"","default-checked-keys":e.keysArr,"node-key":"storeGroupId","highlight-current":"",props:e.defaultProps}})],1),e._v(" "),r("div",{staticClass:"select-group-btn"},[r("el-row",[r("el-button",{staticStyle:{color:"#303133"},attrs:{type:"text",size:"small"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.hideTree(t)}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.groupBtnSure(t)}}},[e._v("确定")])],1)],1)])])],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:"2"==e.value,expression:"value=='2'"}],staticClass:"all-style-wrap fl"},[r("div",{staticClass:"select-shop",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.toggleSearchShop(t)}}},[r("p",{staticClass:"select-search-shop"},e._l(e.selecDataName,function(t,s){return r("span",{key:s,staticClass:"gic-tag-name"},[e._v(e._s(t)),r("i",{staticClass:"dele-icon el-icon-error",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.removeData(s)}}})])}),0)]),e._v(" "),r("transition",{attrs:{name:"slide-fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.showSearchList,expression:"showSearchList"}],staticClass:"select-shop-url-wrap search-shop-wrap"},[r("div",{staticClass:"search-shop-input",on:{click:function(e){e.stopPropagation()}}},[r("el-input",{staticClass:"input-name",attrs:{"prefix-icon":"el-icon-search",size:"small",clearable:"",placeholder:"输入搜索内容"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getSearchData(e.searchValueList)}},model:{value:e.searchValueList,callback:function(t){e.searchValueList=t},expression:"searchValueList"}})],1),e._v(" "),r("div",{staticClass:"search-shop-list"},[e.selectList.length>0?r("ul",e._l(e.selectList,function(t,s){return r("li",{key:s,on:{click:function(r){return r.preventDefault(),r.stopPropagation(),e.selectShopSuccess(t,s)}}},[r("span",[e._v(e._s(t.storeName))])])}),0):r("p",{staticClass:"no-data"},[e._v("无搜索内容")]),e._v(" "),r("p",{staticClass:"search-list-tip"},[e._v("最多显示5条数据")])])])])],1)],1)},staticRenderFns:[]};var a=r("C7Lr")(o,i,!1,function(e){r("oNFN")},"data-v-a9da9070",null);t.default=a.exports}});