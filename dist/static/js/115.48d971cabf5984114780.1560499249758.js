webpackJsonp([115,141],{"3Xzz":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("EwKy"),a=r.n(n),o={name:"navpath",data:function(){return{projectName:"gic-web",linkHref:""}},props:{navpath:{type:Array,default:[]},navtip:{type:Boolean,default:!1}},mounted:function(){this.linkHref=a.a.config+"/report/#/memberSummary"},methods:{}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navwrap boxbttom"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("span",{staticClass:"el-breadcrumb__item no-link link-active"},[r("a",{staticClass:"el-breadcrumb__inner is-link",attrs:{href:e.linkHref,role:"link"}},[e._v("首页")]),r("span",{staticClass:"el-breadcrumb__separator",attrs:{role:"presentation"}},[e._v("/")])]),e._v(" "),e._l(e.navpath,function(t,n){return r("el-breadcrumb-item",{key:n,staticClass:"no-link",class:{"link-active":""!=t.path&&n!=e.navpath.length-1},attrs:{to:{path:t.path}}},[e._v(e._s(t.name))])})],2),e._v(" "),e.navpath.length>0?r("h1",{staticClass:"navtitle"},[e._v(e._s(e.navpath[e.navpath.length-1].name))]):e._e(),e._v(" "),1==e.navtip?r("div",{staticClass:"navtip navmTop"},[r("i",{staticClass:"el-icon-info navtipcolor"}),e._v("变更导航个数，移动顺序，更换页面链接均需提交小程序审核后重新发布生效，其他变更立即生效。小程序审核请联系品牌项目经理。")]):e._e()],1)},staticRenderFns:[]};var l=r("C7Lr")(o,i,!1,function(e){r("lKih")},"data-v-d2ee4e94",null);t.default=l.exports},"6iV/":function(e,t,r){"use strict";var n=r("H9GB"),a=r("Ml8i"),o=r("qFr1");e.exports={formats:o,parse:a,stringify:n}},EwKy:function(e,t){var r=window.location.origin;e.exports={config:r}},H9GB:function(e,t,r){"use strict";var n=r("JNAD"),a=r("qFr1"),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},c=function e(t,r,a,o,i,c,s,u,p,f,d,v){var y=t;if("function"==typeof s)y=s(r,y);else if(y instanceof Date)y=f(y);else if(null===y){if(o)return c&&!v?c(r,l.encoder):r;y=""}if("string"==typeof y||"number"==typeof y||"boolean"==typeof y||n.isBuffer(y))return c?[d(v?r:c(r,l.encoder))+"="+d(c(y,l.encoder))]:[d(r)+"="+d(String(y))];var h,m=[];if(void 0===y)return m;if(Array.isArray(s))h=s;else{var b=Object.keys(y);h=u?b.sort(u):b}for(var g=0;g<h.length;++g){var j=h[g];i&&null===y[j]||(m=Array.isArray(y)?m.concat(e(y[j],a(r,j),a,o,i,c,s,u,p,f,d,v)):m.concat(e(y[j],r+(p?"."+j:"["+j+"]"),a,o,i,c,s,u,p,f,d,v)))}return m};e.exports=function(e,t){var r=e,i=t?n.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var s=void 0===i.delimiter?l.delimiter:i.delimiter,u="boolean"==typeof i.strictNullHandling?i.strictNullHandling:l.strictNullHandling,p="boolean"==typeof i.skipNulls?i.skipNulls:l.skipNulls,f="boolean"==typeof i.encode?i.encode:l.encode,d="function"==typeof i.encoder?i.encoder:l.encoder,v="function"==typeof i.sort?i.sort:null,y=void 0!==i.allowDots&&i.allowDots,h="function"==typeof i.serializeDate?i.serializeDate:l.serializeDate,m="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:l.encodeValuesOnly;if(void 0===i.format)i.format=a.default;else if(!Object.prototype.hasOwnProperty.call(a.formatters,i.format))throw new TypeError("Unknown format option provided.");var b,g,j=a.formatters[i.format];"function"==typeof i.filter?r=(g=i.filter)("",r):Array.isArray(i.filter)&&(b=g=i.filter);var O,w=[];if("object"!=typeof r||null===r)return"";O=i.arrayFormat in o?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var _=o[O];b||(b=Object.keys(r)),v&&b.sort(v);for(var C=0;C<b.length;++C){var x=b[C];p&&null===r[x]||(w=w.concat(c(r[x],x,_,u,p,f?d:null,g,v,y,h,j,m)))}var A=w.join(s),k=!0===i.addQueryPrefix?"?":"";return A.length>0?k+A:""}},JNAD:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,a=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),o=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:o,assign:function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var a=t[n],o=a.obj[a.prop],i=Object.keys(o),l=0;l<i.length;++l){var c=i[l],s=o[c];"object"==typeof s&&null!==s&&-1===r.indexOf(s)&&(t.push({obj:o,prop:c}),r.push(s))}return function(e){for(var t;e.length;){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var n=[],a=0;a<t.length;++a)void 0!==t[a]&&n.push(t[a]);r.obj[r.prop]=n}}return t}(t)},decode:function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},encode:function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",n=0;n<t.length;++n){var o=t.charCodeAt(n);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?r+=t.charAt(n):o<128?r+=a[o]:o<2048?r+=a[192|o>>6]+a[128|63&o]:o<55296||o>=57344?r+=a[224|o>>12]+a[128|o>>6&63]+a[128|63&o]:(n+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(n)),r+=a[240|o>>18]+a[128|o>>12&63]+a[128|o>>6&63]+a[128|63&o])}return r},isBuffer:function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,r,a){if(!r)return t;if("object"!=typeof r){if(Array.isArray(t))t.push(r);else{if("object"!=typeof t)return[t,r];(a.plainObjects||a.allowPrototypes||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!=typeof t)return[t].concat(r);var i=t;return Array.isArray(t)&&!Array.isArray(r)&&(i=o(t,a)),Array.isArray(t)&&Array.isArray(r)?(r.forEach(function(r,o){n.call(t,o)?t[o]&&"object"==typeof t[o]?t[o]=e(t[o],r,a):t.push(r):t[o]=r}),t):Object.keys(r).reduce(function(t,o){var i=r[o];return n.call(t,o)?t[o]=e(t[o],i,a):t[o]=i,t},i)}}},Ml8i:function(e,t,r){"use strict";var n=r("JNAD"),a=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/g,i=/(\[[^[\]]*])/.exec(n),l=i?n.slice(0,i.index):n,c=[];if(l){if(!r.plainObjects&&a.call(Object.prototype,l)&&!r.allowPrototypes)return;c.push(l)}for(var s=0;null!==(i=o.exec(n))&&s<r.depth;){if(s+=1,!r.plainObjects&&a.call(Object.prototype,i[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(i[1])}return i&&c.push("["+n.slice(i.index)+"]"),function(e,t,r){for(var n=t,a=e.length-1;a>=0;--a){var o,i=e[a];if("[]"===i)o=(o=[]).concat(n);else{o=r.plainObjects?Object.create(null):{};var l="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,c=parseInt(l,10);!isNaN(c)&&i!==l&&String(c)===l&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(o=[])[c]=n:o[l]=n}n=o}return n}(c,t,r)}};e.exports=function(e,t){var r=t?n.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:o.delimiter,r.depth="number"==typeof r.depth?r.depth:o.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:o.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:o.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:o.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:o.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:o.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:o.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:o.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var l="string"==typeof e?function(e,t){for(var r={},n=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,l=n.split(t.delimiter,i),c=0;c<l.length;++c){var s,u,p=l[c],f=p.indexOf("]="),d=-1===f?p.indexOf("="):f+1;-1===d?(s=t.decoder(p,o.decoder),u=t.strictNullHandling?null:""):(s=t.decoder(p.slice(0,d),o.decoder),u=t.decoder(p.slice(d+1),o.decoder)),a.call(r,s)?r[s]=[].concat(r[s]).concat(u):r[s]=u}return r}(e,r):e,c=r.plainObjects?Object.create(null):{},s=Object.keys(l),u=0;u<s.length;++u){var p=s[u],f=i(p,l[p],r);c=n.merge(c,f,r)}return n.compact(c)}},lKih:function(e,t){},nXb5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("zcXt"),a=r("3Xzz"),o=r("6iV/"),i={name:"event_allocaction",data:function(){return{bodyHeight:document.body.clientHeight||document.documentElement.clientHeight,navpath:[],options:[{value:"0",label:"0"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"}],value:"",radio:"1"}},mounted:function(){var e=this;window.onresize=function(){e.bodyHeight=document.body.clientHeight||document.documentElement.clientHeight},this.getEventData();var t=this.$route.path;t=t.substring(1,t.length),Object(n.a)(t).then(function(t){e.navpath=t})},methods:{getEventData:function(){var e=this;this.axios.post("/api-admin/operation-strategy-enter-transaction",o.stringify({requestProject:"gic-web"})).then(function(t){var r=t.data;if(0==r.errorCode){var n=r.result.enterTransactionDTO;e.radio=n.trafficAllocationType.toString(),e.value=n.trafficGiveupTimes.toString()}})},selectRadio:function(e){console.log(e)},saveBtn:function(){var e=this;this.axios.post("/api-admin/enter-transaction-save",o.stringify({requestProject:"gic-web",trafficAllocationType:parseInt(this.radio),trafficGiveupTimes:parseInt(this.value)})).then(function(t){0==t.data.errorCode&&e.$message.success("保存成功")})}},components:{topNav:a.default}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"right-wrap"},[r("topNav",{attrs:{navpath:e.navpath},on:{"update:navpath":function(t){e.navpath=t}}}),e._v(" "),r("div",{staticClass:"right-content"},[r("div",{staticClass:"right-box"},[r("div",{staticClass:"day-range-wrap"},[r("span",[e._v("话务任务分配\n          "),r("el-popover",{staticClass:"item",attrs:{placement:"top",width:"200",trigger:"hover",title:"",content:"用于控制话务任务的分配给哪个企业号的用户"}},[r("i",{staticClass:"iconfont tooltip-icon icon-xinxixianshi",attrs:{slot:"reference"},slot:"reference"})])],1),e._v(" "),r("div",{staticClass:"day-range"},[r("el-radio-group",{on:{change:e.selectRadio},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[r("el-radio",{attrs:{label:"0"}},[e._v("分配给主门店的店长")]),e._v(" "),r("el-radio",{attrs:{label:"1"}},[e._v("分配给专属导购")])],1)],1)]),e._v(" "),r("div",{staticClass:"day-range-wrap give-up-task"},[r("span",[e._v("话务任务放弃前提")]),e._v(" "),r("div",{staticClass:"day-range"},[r("el-select",{staticClass:"select-time",attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),r("span",{staticClass:"give-up-text"},[e._v("次呼叫后无响应")])],1)]),e._v(" "),r("div",{staticClass:"save-btn"},[r("el-button",{attrs:{type:"primary"},on:{click:e.saveBtn}},[e._v("保 存")])],1)])]),e._v(" "),r("vue-gic-footer")],1)},staticRenderFns:[]};var c=r("C7Lr")(i,l,!1,function(e){r("texA")},"data-v-a82fd404",null);t.default=c.exports},qFr1:function(e,t,r){"use strict";var n=String.prototype.replace,a=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,a,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},texA:function(e,t){},zcXt:function(e,t,r){"use strict";t.a=function(e){var t=[];return new a.a(function(r,n){i.a.post("/api-auth/get-current-memu-data",l.stringify({requestProject:"gic-web",project:"gic-web",path:e})).then(function(e){var a=e.data;if(console.log(a),0==a.errorCode){var o=a.result.list;o.forEach(function(e){var r={};r.name=e.menuName,""==e.menuUrl?r.path=e.menuUrl:r.path="/"+e.menuUrl,t.push(r)}),r(t)}else n([])})})};var n=r("rVsN"),a=r.n(n),o=r("aozt"),i=r.n(o),l=r("6iV/")}});