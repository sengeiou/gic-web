webpackJsonp([116,141],{"3Xzz":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("EwKy"),o=r.n(n),a={name:"navpath",data:function(){return{projectName:"gic-web",linkHref:""}},props:{navpath:{type:Array,default:[]},navtip:{type:Boolean,default:!1}},mounted:function(){this.linkHref=o.a.config+"/report/#/memberSummary"},methods:{}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navwrap boxbttom"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("span",{staticClass:"el-breadcrumb__item no-link link-active"},[r("a",{staticClass:"el-breadcrumb__inner is-link",attrs:{href:e.linkHref,role:"link"}},[e._v("首页")]),r("span",{staticClass:"el-breadcrumb__separator",attrs:{role:"presentation"}},[e._v("/")])]),e._v(" "),e._l(e.navpath,function(t,n){return r("el-breadcrumb-item",{key:n,staticClass:"no-link",class:{"link-active":""!=t.path&&n!=e.navpath.length-1},attrs:{to:{path:t.path}}},[e._v(e._s(t.name))])})],2),e._v(" "),e.navpath.length>0?r("h1",{staticClass:"navtitle"},[e._v(e._s(e.navpath[e.navpath.length-1].name))]):e._e(),e._v(" "),1==e.navtip?r("div",{staticClass:"navtip navmTop"},[r("i",{staticClass:"el-icon-info navtipcolor"}),e._v("变更导航个数，移动顺序，更换页面链接均需提交小程序审核后重新发布生效，其他变更立即生效。小程序审核请联系品牌项目经理。")]):e._e()],1)},staticRenderFns:[]};var c=r("C7Lr")(a,i,!1,function(e){r("lKih")},"data-v-d2ee4e94",null);t.default=c.exports},"6iV/":function(e,t,r){"use strict";var n=r("H9GB"),o=r("Ml8i"),a=r("qFr1");e.exports={formats:a,parse:o,stringify:n}},EwKy:function(e,t){var r=window.location.origin;e.exports={config:r}},H9GB:function(e,t,r){"use strict";var n=r("JNAD"),o=r("qFr1"),a={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,c={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},s=function e(t,r,o,a,i,s,l,u,p,f,d,y){var v=t;if("function"==typeof l)v=l(r,v);else if(v instanceof Date)v=f(v);else if(null===v){if(a)return s&&!y?s(r,c.encoder):r;v=""}if("string"==typeof v||"number"==typeof v||"boolean"==typeof v||n.isBuffer(v))return s?[d(y?r:s(r,c.encoder))+"="+d(s(v,c.encoder))]:[d(r)+"="+d(String(v))];var h,m=[];if(void 0===v)return m;if(Array.isArray(l))h=l;else{var g=Object.keys(v);h=u?g.sort(u):g}for(var b=0;b<h.length;++b){var O=h[b];i&&null===v[O]||(m=Array.isArray(v)?m.concat(e(v[O],o(r,O),o,a,i,s,l,u,p,f,d,y)):m.concat(e(v[O],r+(p?"."+O:"["+O+"]"),o,a,i,s,l,u,p,f,d,y)))}return m};e.exports=function(e,t){var r=e,i=t?n.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var l=void 0===i.delimiter?c.delimiter:i.delimiter,u="boolean"==typeof i.strictNullHandling?i.strictNullHandling:c.strictNullHandling,p="boolean"==typeof i.skipNulls?i.skipNulls:c.skipNulls,f="boolean"==typeof i.encode?i.encode:c.encode,d="function"==typeof i.encoder?i.encoder:c.encoder,y="function"==typeof i.sort?i.sort:null,v=void 0!==i.allowDots&&i.allowDots,h="function"==typeof i.serializeDate?i.serializeDate:c.serializeDate,m="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:c.encodeValuesOnly;if(void 0===i.format)i.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,i.format))throw new TypeError("Unknown format option provided.");var g,b,O=o.formatters[i.format];"function"==typeof i.filter?r=(b=i.filter)("",r):Array.isArray(i.filter)&&(g=b=i.filter);var j,w=[];if("object"!=typeof r||null===r)return"";j=i.arrayFormat in a?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var C=a[j];g||(g=Object.keys(r)),y&&g.sort(y);for(var A=0;A<g.length;++A){var _=g[A];p&&null===r[_]||(w=w.concat(s(r[_],_,C,u,p,f?d:null,b,y,v,h,O,m)))}var x=w.join(l),k=!0===i.addQueryPrefix?"?":"";return x.length>0?k+x:""}},JNAD:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:a,assign:function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],a=o.obj[o.prop],i=Object.keys(a),c=0;c<i.length;++c){var s=i[c],l=a[s];"object"==typeof l&&null!==l&&-1===r.indexOf(l)&&(t.push({obj:a,prop:s}),r.push(l))}return function(e){for(var t;e.length;){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var n=[],o=0;o<t.length;++o)void 0!==t[o]&&n.push(t[o]);r.obj[r.prop]=n}}return t}(t)},decode:function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},encode:function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",n=0;n<t.length;++n){var a=t.charCodeAt(n);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?r+=t.charAt(n):a<128?r+=o[a]:a<2048?r+=o[192|a>>6]+o[128|63&a]:a<55296||a>=57344?r+=o[224|a>>12]+o[128|a>>6&63]+o[128|63&a]:(n+=1,a=65536+((1023&a)<<10|1023&t.charCodeAt(n)),r+=o[240|a>>18]+o[128|a>>12&63]+o[128|a>>6&63]+o[128|63&a])}return r},isBuffer:function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,r,o){if(!r)return t;if("object"!=typeof r){if(Array.isArray(t))t.push(r);else{if("object"!=typeof t)return[t,r];(o.plainObjects||o.allowPrototypes||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!=typeof t)return[t].concat(r);var i=t;return Array.isArray(t)&&!Array.isArray(r)&&(i=a(t,o)),Array.isArray(t)&&Array.isArray(r)?(r.forEach(function(r,a){n.call(t,a)?t[a]&&"object"==typeof t[a]?t[a]=e(t[a],r,o):t.push(r):t[a]=r}),t):Object.keys(r).reduce(function(t,a){var i=r[a];return n.call(t,a)?t[a]=e(t[a],i,o):t[a]=i,t},i)}}},Ml8i:function(e,t,r){"use strict";var n=r("JNAD"),o=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,i=/(\[[^[\]]*])/.exec(n),c=i?n.slice(0,i.index):n,s=[];if(c){if(!r.plainObjects&&o.call(Object.prototype,c)&&!r.allowPrototypes)return;s.push(c)}for(var l=0;null!==(i=a.exec(n))&&l<r.depth;){if(l+=1,!r.plainObjects&&o.call(Object.prototype,i[1].slice(1,-1))&&!r.allowPrototypes)return;s.push(i[1])}return i&&s.push("["+n.slice(i.index)+"]"),function(e,t,r){for(var n=t,o=e.length-1;o>=0;--o){var a,i=e[o];if("[]"===i)a=(a=[]).concat(n);else{a=r.plainObjects?Object.create(null):{};var c="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,s=parseInt(c,10);!isNaN(s)&&i!==c&&String(s)===c&&s>=0&&r.parseArrays&&s<=r.arrayLimit?(a=[])[s]=n:a[c]=n}n=a}return n}(s,t,r)}};e.exports=function(e,t){var r=t?n.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:a.delimiter,r.depth="number"==typeof r.depth?r.depth:a.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:a.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:a.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:a.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:a.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:a.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:a.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var c="string"==typeof e?function(e,t){for(var r={},n=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,c=n.split(t.delimiter,i),s=0;s<c.length;++s){var l,u,p=c[s],f=p.indexOf("]="),d=-1===f?p.indexOf("="):f+1;-1===d?(l=t.decoder(p,a.decoder),u=t.strictNullHandling?null:""):(l=t.decoder(p.slice(0,d),a.decoder),u=t.decoder(p.slice(d+1),a.decoder)),o.call(r,l)?r[l]=[].concat(r[l]).concat(u):r[l]=u}return r}(e,r):e,s=r.plainObjects?Object.create(null):{},l=Object.keys(c),u=0;u<l.length;++u){var p=l[u],f=i(p,c[p],r);s=n.merge(s,f,r)}return n.compact(s)}},OACM:function(e,t){},dXSn:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("zcXt"),o=r("3Xzz"),a=r("6iV/"),i={name:"event_allocaction",data:function(){return{navpath:[],bodyHeight:document.body.clientHeight||document.documentElement.clientHeight,openOnline:!1}},mounted:function(){var e=this;this.getOnlineData(),window.onresize=function(){e.bodyHeight=document.body.clientHeight||document.documentElement.clientHeight};var t=this.$route.path;t=t.substring(1,t.length),Object(n.a)(t).then(function(t){e.navpath=t})},methods:{getOnlineData:function(){var e=this;this.axios.post("/api-admin/operation-strategy-chat-switch",a.stringify({requestProject:"gic-web"})).then(function(t){var r=t.data;if(0==r.errorCode){var n=r.result.ChatSwitchDTO.switchStatus;1==n?e.openOnline=!0:0==n&&(e.openOnline=!1)}})},selectRadio:function(e){var t=this;console.log(e),e?this.axios.post("/api-admin/operation-strategy-save-chat-switch",a.stringify({requestProject:"gic-web",switchStatus:1})).then(function(e){0==e.data.errorCode&&(t.openOnline=!0,t.$message({type:"success",message:"开启成功!"}))}):this.$confirm("关闭后会员将无法与导购进行在线沟通，是否确认关闭?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.axios.post("/api-admin/operation-strategy-save-chat-switch",a.stringify({requestProject:"gic-web",switchStatus:0})).then(function(e){0==e.data.errorCode&&(t.openOnline=!1)}),t.$message({type:"success",message:"关闭成功!"})}).catch(function(){t.openOnline=!0,t.$message({type:"info",message:"已取消"})})}},components:{topNav:o.default}},c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"right-wrap"},[r("topNav",{attrs:{navpath:e.navpath}}),e._v(" "),r("div",{staticClass:"right-content"},[r("div",{staticClass:"right-box"},[r("div",{staticClass:"day-range-wrap give-up-task"},[r("span",[e._v("会员在线沟通功能")]),e._v(" "),r("div",{staticClass:"day-range"},[r("el-switch",{on:{change:e.selectRadio},model:{value:e.openOnline,callback:function(t){e.openOnline=t},expression:"openOnline"}})],1)])])]),e._v(" "),r("vue-gic-footer")],1)},staticRenderFns:[]};var s=r("C7Lr")(i,c,!1,function(e){r("OACM")},"data-v-3c5d855c",null);t.default=s.exports},lKih:function(e,t){},qFr1:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},zcXt:function(e,t,r){"use strict";t.a=function(e){var t=[];return new o.a(function(r,n){i.a.post("/api-auth/get-current-memu-data",c.stringify({requestProject:"gic-web",project:"gic-web",path:e})).then(function(e){var o=e.data;if(console.log(o),0==o.errorCode){var a=o.result.list;a.forEach(function(e){var r={};r.name=e.menuName,""==e.menuUrl?r.path=e.menuUrl:r.path="/"+e.menuUrl,t.push(r)}),r(t)}else n([])})})};var n=r("rVsN"),o=r.n(n),a=r("aozt"),i=r.n(a),c=r("6iV/")}});