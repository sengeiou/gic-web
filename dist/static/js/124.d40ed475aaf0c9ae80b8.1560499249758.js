webpackJsonp([124,141],{"3Xzz":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("EwKy"),n=r.n(a),o={name:"navpath",data:function(){return{projectName:"gic-web",linkHref:""}},props:{navpath:{type:Array,default:[]},navtip:{type:Boolean,default:!1}},mounted:function(){this.linkHref=n.a.config+"/report/#/memberSummary"},methods:{}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navwrap boxbttom"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("span",{staticClass:"el-breadcrumb__item no-link link-active"},[r("a",{staticClass:"el-breadcrumb__inner is-link",attrs:{href:e.linkHref,role:"link"}},[e._v("首页")]),r("span",{staticClass:"el-breadcrumb__separator",attrs:{role:"presentation"}},[e._v("/")])]),e._v(" "),e._l(e.navpath,function(t,a){return r("el-breadcrumb-item",{key:a,staticClass:"no-link",class:{"link-active":""!=t.path&&a!=e.navpath.length-1},attrs:{to:{path:t.path}}},[e._v(e._s(t.name))])})],2),e._v(" "),e.navpath.length>0?r("h1",{staticClass:"navtitle"},[e._v(e._s(e.navpath[e.navpath.length-1].name))]):e._e(),e._v(" "),1==e.navtip?r("div",{staticClass:"navtip navmTop"},[r("i",{staticClass:"el-icon-info navtipcolor"}),e._v("变更导航个数，移动顺序，更换页面链接均需提交小程序审核后重新发布生效，其他变更立即生效。小程序审核请联系品牌项目经理。")]):e._e()],1)},staticRenderFns:[]};var l=r("C7Lr")(o,i,!1,function(e){r("lKih")},"data-v-d2ee4e94",null);t.default=l.exports},"6iV/":function(e,t,r){"use strict";var a=r("H9GB"),n=r("Ml8i"),o=r("qFr1");e.exports={formats:o,parse:n,stringify:a}},EwKy:function(e,t){var r=window.location.origin;e.exports={config:r}},H9GB:function(e,t,r){"use strict";var a=r("JNAD"),n=r("qFr1"),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:a.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},s=function e(t,r,n,o,i,s,c,p,u,d,f,v){var y=t;if("function"==typeof c)y=c(r,y);else if(y instanceof Date)y=d(y);else if(null===y){if(o)return s&&!v?s(r,l.encoder):r;y=""}if("string"==typeof y||"number"==typeof y||"boolean"==typeof y||a.isBuffer(y))return s?[f(v?r:s(r,l.encoder))+"="+f(s(y,l.encoder))]:[f(r)+"="+f(String(y))];var h,m=[];if(void 0===y)return m;if(Array.isArray(c))h=c;else{var b=Object.keys(y);h=p?b.sort(p):b}for(var g=0;g<h.length;++g){var _=h[g];i&&null===y[_]||(m=Array.isArray(y)?m.concat(e(y[_],n(r,_),n,o,i,s,c,p,u,d,f,v)):m.concat(e(y[_],r+(u?"."+_:"["+_+"]"),n,o,i,s,c,p,u,d,f,v)))}return m};e.exports=function(e,t){var r=e,i=t?a.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var c=void 0===i.delimiter?l.delimiter:i.delimiter,p="boolean"==typeof i.strictNullHandling?i.strictNullHandling:l.strictNullHandling,u="boolean"==typeof i.skipNulls?i.skipNulls:l.skipNulls,d="boolean"==typeof i.encode?i.encode:l.encode,f="function"==typeof i.encoder?i.encoder:l.encoder,v="function"==typeof i.sort?i.sort:null,y=void 0!==i.allowDots&&i.allowDots,h="function"==typeof i.serializeDate?i.serializeDate:l.serializeDate,m="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:l.encodeValuesOnly;if(void 0===i.format)i.format=n.default;else if(!Object.prototype.hasOwnProperty.call(n.formatters,i.format))throw new TypeError("Unknown format option provided.");var b,g,_=n.formatters[i.format];"function"==typeof i.filter?r=(g=i.filter)("",r):Array.isArray(i.filter)&&(b=g=i.filter);var j,O=[];if("object"!=typeof r||null===r)return"";j=i.arrayFormat in o?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var w=o[j];b||(b=Object.keys(r)),v&&b.sort(v);for(var C=0;C<b.length;++C){var x=b[C];u&&null===r[x]||(O=O.concat(s(r[x],x,w,p,u,d?f:null,g,v,y,h,_,m)))}var A=O.join(c),k=!0===i.addQueryPrefix?"?":"";return A.length>0?k+A:""}},JNAD:function(e,t,r){"use strict";var a=Object.prototype.hasOwnProperty,n=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),o=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},a=0;a<e.length;++a)void 0!==e[a]&&(r[a]=e[a]);return r};e.exports={arrayToObject:o,assign:function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],a=0;a<t.length;++a)for(var n=t[a],o=n.obj[n.prop],i=Object.keys(o),l=0;l<i.length;++l){var s=i[l],c=o[s];"object"==typeof c&&null!==c&&-1===r.indexOf(c)&&(t.push({obj:o,prop:s}),r.push(c))}return function(e){for(var t;e.length;){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var a=[],n=0;n<t.length;++n)void 0!==t[n]&&a.push(t[n]);r.obj[r.prop]=a}}return t}(t)},decode:function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},encode:function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",a=0;a<t.length;++a){var o=t.charCodeAt(a);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?r+=t.charAt(a):o<128?r+=n[o]:o<2048?r+=n[192|o>>6]+n[128|63&o]:o<55296||o>=57344?r+=n[224|o>>12]+n[128|o>>6&63]+n[128|63&o]:(a+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(a)),r+=n[240|o>>18]+n[128|o>>12&63]+n[128|o>>6&63]+n[128|63&o])}return r},isBuffer:function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,r,n){if(!r)return t;if("object"!=typeof r){if(Array.isArray(t))t.push(r);else{if("object"!=typeof t)return[t,r];(n.plainObjects||n.allowPrototypes||!a.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!=typeof t)return[t].concat(r);var i=t;return Array.isArray(t)&&!Array.isArray(r)&&(i=o(t,n)),Array.isArray(t)&&Array.isArray(r)?(r.forEach(function(r,o){a.call(t,o)?t[o]&&"object"==typeof t[o]?t[o]=e(t[o],r,n):t.push(r):t[o]=r}),t):Object.keys(r).reduce(function(t,o){var i=r[o];return a.call(t,o)?t[o]=e(t[o],i,n):t[o]=i,t},i)}}},Ml8i:function(e,t,r){"use strict";var a=r("JNAD"),n=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:a.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t,r){if(e){var a=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/g,i=/(\[[^[\]]*])/.exec(a),l=i?a.slice(0,i.index):a,s=[];if(l){if(!r.plainObjects&&n.call(Object.prototype,l)&&!r.allowPrototypes)return;s.push(l)}for(var c=0;null!==(i=o.exec(a))&&c<r.depth;){if(c+=1,!r.plainObjects&&n.call(Object.prototype,i[1].slice(1,-1))&&!r.allowPrototypes)return;s.push(i[1])}return i&&s.push("["+a.slice(i.index)+"]"),function(e,t,r){for(var a=t,n=e.length-1;n>=0;--n){var o,i=e[n];if("[]"===i)o=(o=[]).concat(a);else{o=r.plainObjects?Object.create(null):{};var l="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,s=parseInt(l,10);!isNaN(s)&&i!==l&&String(s)===l&&s>=0&&r.parseArrays&&s<=r.arrayLimit?(o=[])[s]=a:o[l]=a}a=o}return a}(s,t,r)}};e.exports=function(e,t){var r=t?a.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||a.isRegExp(r.delimiter)?r.delimiter:o.delimiter,r.depth="number"==typeof r.depth?r.depth:o.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:o.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:o.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:o.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:o.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:o.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:o.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:o.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var l="string"==typeof e?function(e,t){for(var r={},a=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,l=a.split(t.delimiter,i),s=0;s<l.length;++s){var c,p,u=l[s],d=u.indexOf("]="),f=-1===d?u.indexOf("="):d+1;-1===f?(c=t.decoder(u,o.decoder),p=t.strictNullHandling?null:""):(c=t.decoder(u.slice(0,f),o.decoder),p=t.decoder(u.slice(f+1),o.decoder)),n.call(r,c)?r[c]=[].concat(r[c]).concat(p):r[c]=p}return r}(e,r):e,s=r.plainObjects?Object.create(null):{},c=Object.keys(l),p=0;p<c.length;++p){var u=c[p],d=i(u,l[u],r);s=a.merge(s,d,r)}return a.compact(s)}},Tp08:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("3Xzz"),n=r("6iV/"),o={name:"performanceSettle",data:function(){return{requestProject:"gic-web",navpath:[{name:"配置中心",path:""},{name:"数据设置",path:""},{name:"业绩结算",path:""}],radio:"0",preMonth:"",nextMonth:"",sellBool:!1,radio2:1}},mounted:function(){this.getCloseData()},methods:{getCloseData:function(){var e=this;this.loading=!0,this.axios.post("/api-admin/operation-strategy-performance",n.stringify({requestProject:"gic-web"})).then(function(t){var r=t.data;if(0==r.errorCode){e.loading=!1;var a=r.result.enterPerformanceDTO;e.nextMonth=a.performanceDay,e.enterPerformanceId=a.enterPerformanceId,e.radio=a.dayType.toString(),e.sellBool=0!=a.saleSetting,e.radio2=a.saleSetting?a.saleSetting:1}else e.$message.error(r.message)})},saveData:function(){var e=this;this.sellBool||this.axios.post("/api-admin/update-enterperformance",n.stringify({requestProject:"gic-web",value:this.radio2})).then(function(t){var r=t.data;0==r.errorCode?e.$message.success("保存成功"):e.$message.error(r.message)})}},components:{topNav:a.default}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"right-wrap"},[r("topNav",{attrs:{navpath:e.navpath}}),e._v(" "),r("div",{staticClass:"right-content"},[r("div",{staticClass:"right-box"},[r("div",{staticClass:"day-range-wrap"},[r("h2",{staticStyle:{"border-top":"none"}},[e._v("业绩结算区间（建议起始于本月1号）")]),e._v(" "),r("div",{staticClass:"day-range"},[r("el-radio-group",{model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[r("el-radio",{attrs:{disabled:"",label:"0"}},[e._v("\n              起始于上月"),r("el-input",{staticClass:"day-input",attrs:{disabled:"",placeholder:"请输入"},model:{value:e.preMonth,callback:function(t){e.preMonth=t},expression:"preMonth"}}),e._v("号\n            ")],1),e._v(" "),r("el-radio",{attrs:{disabled:"",label:"1"}},[e._v("\n              起始于本月"),r("el-input",{staticClass:"day-input",attrs:{disabled:"",placeholder:"请输入"},model:{value:e.nextMonth,callback:function(t){e.nextMonth=t},expression:"nextMonth"}}),e._v("号\n            ")],1)],1)],1),e._v(" "),r("h2",[e._v("销售额配置")]),e._v(" "),e._m(0),e._v(" "),r("div",{staticClass:"day-range"},[r("el-radio-group",{attrs:{disabled:e.sellBool},on:{change:e.selectRadio2},model:{value:e.radio2,callback:function(t){e.radio2=t},expression:"radio2"}},[r("el-radio",{staticClass:"sell-radio",attrs:{label:1}},[e._v("\n              销售额（应收）"),r("span",[e._v("ERP订单销售额")])]),e._v(" "),r("br"),e._v(" "),r("el-radio",{staticClass:"sell-radio",staticStyle:{"margin-bottom":"0"},attrs:{label:2}},[e._v("\n              销售额（实付）"),r("span",[e._v("根据配置剔除优惠的支付方式")])])],1)],1),e._v(" "),r("div",{staticClass:"save-btn"},[r("el-button",{attrs:{disabled:e.sellBool,type:"primary"},on:{click:e.saveData}},[e._v("保 存")])],1)])])]),e._v(" "),r("vue-gic-footer")],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"text-tip"},[t("i",{staticClass:"el-icon-info navtipcolor"}),this._v("销售额（未注明应收或实付的）默认按此选择展示，客单价、件单价、折扣率等将按此选择计算。提交后不允许修改")])}]};var l=r("C7Lr")(o,i,!1,function(e){r("wKQ2")},"data-v-04541d1c",null);t.default=l.exports},lKih:function(e,t){},qFr1:function(e,t,r){"use strict";var a=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return a.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},wKQ2:function(e,t){}});