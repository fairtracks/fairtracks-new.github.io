(window.webpackJsonp=window.webpackJsonp||[]).push([[68,29,33,37,39,47,48,51,53,56],{1114:function(t,e,n){"use strict";var a=n(1136);e.a={computed:{markdownFiles:function(){return this.markdownFilesDir?this.$loadMarkdownFilesInDir(this.markdownFilesDir):[]}},methods:{compileMarkdown:function(t){return t&&"string"==typeof t?a.marked.parseInline(t,[]):t}}}},1115:function(t,e,n){var a=n(1120);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(31).default)("5ca67044",a,!0,{sourceMap:!1})},1116:function(t,e,n){var a=n(1125);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(31).default)("8d97ad88",a,!0,{sourceMap:!1})},1117:function(t,e,n){"use strict";n.r(e);n(32);var a={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}},data:function(){return{componentId:"ui-no-script-background-img"}}},i=n(60),s=Object(i.a)(a,(function(){return(0,this._self._c)("noscript",{inlineTemplate:{render:function(){var t=this;return(0,t._self._c)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"); ').concat(t.styleText)})},staticRenderFns:[]}})}),[],!1,null,null,null);e.default=s.exports},1118:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(126),i="lateRendererMounted";e.b={computed:{isLateRenderer:function(){return"componentId"in this&&a.MD_REG_LATE_RENDERERS.has(this.componentId)}},mounted:function(){this.isLateRenderer&&this.$nuxt.$emit(i)}}},1119:function(t,e,n){"use strict";n(1115)},1120:function(t,e,n){var a=n(30)(!1);a.push([t.i,".center-background,.slot-center-background .attach-classes{background-position:50%}.cover-background,.slot-cover-background .attach-classes{background-size:cover}.contain-background,.slot-contain-background .attach-classes{background-size:contain;background-color:#fff}.full-size{height:100%;width:100%}.auto-size{height:auto;width:auto}",""]),t.exports=a},1121:function(t,e,n){"use strict";n.r(e);var a=n(315),i=(n(32),n(69),{props:{imageAsset:{type:Object,required:!0},imgHeight:{type:String,default:null},imgWidth:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1},notResponsive:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-smart-background-img"}},methods:{getDynamicClasses:function(t,e){var n=[];return t?n.push("contain-background"):n.push("cover-background"),e&&n.push("lazyload"),n.join(" ")}}}),s=(n(1119),n(60)),o=Object(s.a)(i,(function(){var t=this,e=t._self._c;return t.imageAsset.isSvgImage||t.$config.optimizeImages?e("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,"img-height":t.imgHeight,"img-width":t.imgWidth,alt:t.alt,behind:"","not-responsive":t.notResponsive},scopedSlots:t._u([{key:"nonRespImgComponent",fn:function(n){var a=n.imageAsset,i=n.styleText,s=n.lazyLoad;return[e("div",{staticClass:"fill-height center-background attach-classes hide-with-noscript",class:t.getDynamicClasses(t.contain,s),style:s?i:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"); ').concat(i),attrs:{"data-bgset":s?a.optimizedImagePath:null}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":a,"style-text":i}})]}},{key:"respImgComponent",fn:function(n){var a=n.imageAsset,i=n.styleText;return[e("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:i,attrs:{"data-bgset":"".concat(a.responsiveWebpImage.srcSet," [type: image/webp] |\n                    ").concat(a.responsiveImage.srcSet),"data-sizes":"auto"}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":a,"style-text":i}})]}}],null,!1,615995449)}):e(a.a,{class:t.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:t.imageAsset.optimizedImagePath,alt:t.alt,contain:t.contain}})}),[],!1,null,null,null);e.default=o.exports;installComponents(o,{UiNoScriptBackgroundImg:n(1117).default,UiSmartImgFileTypesWrapper:n(592).default})},1123:function(t,e,n){"use strict";var a=n(36);n(4),n(32),n(58),n(73),n(161),n(194);e.a={computed:{cssVars:function(){var t={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,t),t}},methods:{isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},hexToRgb:function(t){var e=0,n=0,a=0;return 4===t.length?(e="0x"+t[1]+t[1],n="0x"+t[2]+t[2],a="0x"+t[3]+t[3]):7===t.length&&(e="0x"+t[1]+t[2],n="0x"+t[3]+t[4],a="0x"+t[5]+t[6]),"".concat(+e,", ").concat(+n,", ").concat(+a)},generateRgbVar:function(t,e,n){var a=this.hexToRgb(e);a.includes("NaN")||(n["--v-".concat(t,"-rgb")]=a)},createRgbVarsForThemes:function(t,e){if(void 0!==t)for(var n=0,i=Object.values(t);n<i.length;n++)for(var s=i[n],o=0,r=Object.entries(s);o<r.length;o++){var c=Object(a.a)(r[o],2),l=c[0],u=c[1];if(this.isObject(u))for(var d=0,p=Object.entries(u);d<p.length;d++){var h=Object(a.a)(p[d],2),g=h[0],f=h[1];this.generateRgbVar("".concat(l,"-").concat(g),f,e)}else this.generateRgbVar(l,u,e)}}}}},1124:function(t,e,n){"use strict";n(1116)},1125:function(t,e,n){var a=n(30)(!1);a.push([t.i,".gradient-fill-header>.v-responsive__content{background:-webkit-linear-gradient(top,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9));background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.top-level{z-index:2}",""]),t.exports=a},1127:function(t,e,n){"use strict";n.r(e);var a=n(1102),i=n(365),s=n(364),o=n(1101),r={mixins:[n(1123).a],props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:function(){return[]}}},data:function(){return{componentId:"ui-page-header-banner"}}},c=(n(1124),n(60)),l=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e(s.a,{staticClass:"gradient-fill-header",style:t.cssVars,attrs:{"max-height":"125px","min-height":"75px"}},[e(s.a,{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[e(o.a,{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(n,i){return e(a.a,{key:i,attrs:{cols:"4"}},[e(o.a,{attrs:{"no-gutters":"",justify:"center"}},[e(s.a,{staticClass:"gradient-fill-header top-level",style:t.cssVars,attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[e("UiSmartBackgroundImg",{attrs:{"img-height":"56.3","img-width":"189","image-asset":n,contain:"","not-responsive":""}})],1)],1)],1)})),1)],1),t._v(" "),e(i.a,{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),t._v(" "),e(i.a,{attrs:{absolute:"",opacity:"0","z-index":"3"}},[e("h1",{staticClass:"text-md-h2 text-sm-h4 text-h5 font-weight-black text-center"},[t._v("\n      "+t._s(t.pageHeader)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=l.exports;installComponents(l,{UiSmartBackgroundImg:n(1121).default})},1129:function(t,e,n){"use strict";n.r(e);var a=n(1113),i={props:{pageHeader:{type:String,default:""},pageHeaderImages:{type:Array,default:function(){return[]}},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null},setMargins:{type:Boolean,default:!1}},data:function(){return{componentId:"sections-page-container"}}},s=n(60),o=Object(s.a)(i,(function(){var t=this,e=t._self._c;return e("section",{class:t.greyBackground?t.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:t.sectionId}},[e("UiPageHeaderBanner",{directives:[{name:"show",rawName:"v-show",value:t.pageHeader,expression:"pageHeader"}],staticClass:"white",attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),e(a.a,{class:t.setMargins?"pa-md-8 pa-4":"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=o.exports;installComponents(o,{UiPageHeaderBanner:n(1127).default})},1130:function(t,e,n){"use strict";n(42),n(4);var a=n(126),i=n(593),s=n(8),o=(n(78),n(35),n(41),n(77),n(70),n(198));function r(t,e,n){var a,i=!1,r=Number(null===(a=getComputedStyle(document.body)["scroll-margin-top"])||void 0===a?void 0:a.replace("px","")),c=window.$nuxt;c.$nextTick((function(){return c.$emit("triggerScroll")})),c.$once("triggerScroll",Object(s.a)(regeneratorRuntime.mark((function e(){var a,s,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=4;break}i={x:n.x,y:n.y},e.next=21;break;case 4:if(!t.hash){e.next=20;break}return a=t.hash,void 0!==window.CSS&&void 0!==window.CSS.escape&&(a="#"+window.CSS.escape(a.substring(1))),e.prev=7,s=function t(e,n){return document.querySelector(e)||new Promise((function(a){if(n>10)return a();setTimeout((function(){a(t(e,++n||1))}),100)}))},e.next=11,s(t.hash,0);case 11:e.sent&&(i={selector:a}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(7);case 18:e.next=21;break;case 20:i={x:0,y:0};case 21:return void 0!==i.y?(c=i.y,r&&(c+=r),Object(o.b)(c,{duration:0})):void 0!==i.selector&&(document.getElementById(i.selector.substring(1)).scrollIntoView({block:"start",inline:"nearest"}),r&&window.scrollBy(0,-r)),e.abrupt("return",i);case 23:case"end":return e.stop()}}),e,null,[[7,15]])}))))}"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",(function(){window.history.scrollRestoration="auto"})),window.addEventListener("load",(function(){window.history.scrollRestoration="manual"})));var c=n(1118);e.a={beforeRouteEnter:function(t,e,n){n((function(n){if(n.prevRoute=e,null===e.name){var a=n.$store.state.windowState.reloadScrollPosition;0===a.y&&t.hash||(n.scrollPosition=a)}else n.scrollPosition=void 0}))},data:function(){return{allLateRenderersMounted:void 0,totalLateRenderers:void 0,prevRoute:void 0,scrollPosition:void 0}},beforeMount:function(){window.addEventListener("beforeunload",this.leave)},beforeDestroy:function(){window.removeEventListener("beforeunload",this.leave)},computed:{pageName:function(){return this.componentId}},created:function(){var t=this,e=this.$nuxt.context.store.getters;this.totalLateRenderers=e[a.MD_REG_G_COUNT_LATE_RENDERERS_IN_PAGE](this.pageName),this.totalLateRenderers>0?this.allLateRenderersMounted=new Promise((function(e){var n=0;t.$nuxt.$on(c.a,(function(){(n+=1)===t.totalLateRenderers&&e(!0)}))})):this.allLateRenderersMounted=!0},activated:function(){var t=this;Promise.resolve(this.allLateRenderersMounted).then((function(){var e,n,a;e=t.$route,t.prevRoute,n=t.scrollPosition,null!==(a=e.meta)&&void 0!==a&&a.savedPosition&&(n=e.meta.savedPosition,delete e.meta.savedPosition),r(e,0,n),t.scrollPosition=void 0}))},mounted:function(){Promise.resolve(this.allLateRenderersMounted).then((function(){0}))},methods:{leave:function(){var t=this.$nuxt.context.store.commit,e={x:window.scrollX,y:window.scrollY};t(i.WINDOW_STATE_M_SET_RELOAD_SCROLL_POSITION,e)}}}},1132:function(t,e,n){var a=n(1151);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(31).default)("7b4fc080",a,!0,{sourceMap:!1})},1133:function(t,e,n){"use strict";n.r(e);var a={mixins:[n(1114).a],props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},scaleDownAtSm:{type:Boolean,default:!1},titleStyle:{type:String,default:""},subtitleStyle:{type:String,default:""},ingressStyle:{type:String,default:""},infoStyle:{type:String,default:""}},data:function(){return{componentId:"ui-main-title"}}},i=n(60),s=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("div",[e("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-center font-weight-black mt-4 mb-8",class:t.scaleDownAtSm?"text-sm-h3":"text-md-h3",style:t.titleStyle,domProps:{textContent:t._s(t.title)}}),t._v(" "),e("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-8",class:t.scaleDownAtSm?"text-sm-h5":"text-md-h5",style:t.subtitleStyle,domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),e("h4",{directives:[{name:"show",rawName:"v-show",value:t.ingress,expression:"ingress"}],staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic",style:t.ingressStyle,domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}),t._v(" "),e("h4",{directives:[{name:"show",rawName:"v-show",value:!t.ingress,expression:"!ingress"}],staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic",style:t.ingressStyle},[t._t("ingress")],2),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.info,expression:"info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",style:t.infoStyle,domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}}),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.info,expression:"!info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",style:t.infoStyle},[t._t("info")],2)])}),[],!1,null,null,null);e.default=s.exports},1148:function(t,e,n){var a=n(1149);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(31).default)("dc0628f2",a,!0,{sourceMap:!1})},1149:function(t,e,n){var a=n(30)(!1);a.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:0;pointer-events:none}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}",""]),t.exports=a},1150:function(t,e,n){"use strict";n(1132)},1151:function(t,e,n){var a=n(30)(!1);a.push([t.i,".table_header{vertical-align:top}",""]),t.exports=a},1157:function(t,e,n){"use strict";n.r(e);var a=n(244),i=n(1102),s=n(1110),o=n(1101),r=n(155),c=n(1),l=(n(35),n(74),n(1148),n(196)),u=n(45),d=n(245),p=n(162),h=n(328),g=n(0),f=n(22),m=n(7),v=Object(m.a)(u.a,d.a,p.a,h.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,n=t.content,a=!(this.bottom||this.left||this.top||this.right),i=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||a?s=i+e.width/2-n.width/2:(this.left||this.right)&&(s=i+(this.right?e.width:-n.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,n=t.content,a=!1!==this.attach?e.offsetTop:e.top,i=0;return this.top||this.bottom?i=a+(this.bottom?e.height:-n.height)+(this.bottom?10:-10):(this.left||this.right)&&(i=a+e.height/2-n.height/2),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),!1===this.attach&&(i+=this.pageYOffset),"".concat(this.calcYOverflow(i),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(g.h)(this.maxWidth),minWidth:Object(g.h)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(g.s)(this,"activator",!0)&&Object(f.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=l.a.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===g.w.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(c.a)(t,this.contentClass,!0),Object(c.a)(t,"menuable__content__active",this.isActive),Object(c.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),b=(n(41),n(249),n(42),n(51),n(55),n(56),n(69),n(86)),x=n(1114),y=n(1118),_={mixins:[x.a,y.b],props:{csvBaseFileName:{type:String,required:!0},delimiter:{type:String,default:""},tableCaption:{type:String,default:""},tableFootnote:{type:String,default:""},itemsPerPage:{type:Number,required:!0}},data:function(){return{componentId:"ui-markdown-table",search:""}},computed:{baseFilePath:function(){return"/data/tables/"+this.csvBaseFileName},headers:function(){return this.createHeaders(this.$nuxt.context.store.getters[b.DATA_G_GET_CONTENTS_BODY_ALL_HEADERS](this.baseFilePath))},data:function(){return this.$nuxt.context.store.getters[b.DATA_G_GET_CONTENTS_BODY_POSSIBLY_SPLIT_TO_ARRAYS](this.baseFilePath,this.delimiter)}},methods:{htmlDecode:function(t){return(new DOMParser).parseFromString(t,"text/html").documentElement.textContent},getMobileBreakpoint:function(){return null},createHeaders:function(t){return t.map((function(t){return{text:t,value:t,class:"table_header"}}))},isLargeList:function(t){return!!Array.isArray(t)&&t.length>3},parseArrayToString:function(t){return t.join(", ")},isArray:function(t){return Array.isArray(t)}}},w=(n(1150),n(60)),S=Object(w.a)(_,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"px-4",attrs:{"no-gutters":""}},[e(i.a,{attrs:{cols:"12"}},[e(a.d,[e(r.a,{attrs:{label:"Search","single-line":"","hide-details":""},scopedSlots:t._u([{key:"append",fn:function(){return[e("UiSmartIcon",{attrs:{name:"magnify"}})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),e(i.a,{attrs:{cols:"12"}},[e(s.a,{attrs:{dense:"",search:t.search,headers:t.headers,items:t.data,"items-per-page":t.itemsPerPage,height:"100%","fixed-header":"","mobile-breakpoint":t.getMobileBreakpoint()},scopedSlots:t._u([{key:"item",fn:function(n){var a=n.item;return[e("tr",t._l(a,(function(n){return e("td",{key:n.name},[t.isLargeList(n)?e(v,{attrs:{bottom:"",transition:"transition-duration: 1s"},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on,i=n.attrs;return[e("span",t._g(t._b({staticStyle:{"text-align":"center","text-decoration":"underline dotted"}},"span",i,!1),a),[t._v("\n                  Multiple\n                ")])]}}],null,!0)},[t._v(" "),e("div",{staticClass:"d-flex flex-column",staticStyle:{"text-align":"center"}},t._l(n,(function(n,a){return e("span",{key:a},[t._v("\n                  "+t._s(n)+",\n                ")])})),0)]):t.isArray(n)?e("span",[t._v(t._s(t.parseArrayToString(n)))]):e("span",{domProps:{innerHTML:t._s(t.compileMarkdown(n))}})],1)})),0)]}}])})],1),t._v(" "),e(i.a,{attrs:{cols:"12"}},[e("p",{directives:[{name:"show",rawName:"v-show",value:t.tableCaption,expression:"tableCaption"}],staticClass:"body-2 font-italic text-center pt-8",domProps:{innerHTML:t._s(t.compileMarkdown(t.tableCaption))}})]),t._v(" "),e(i.a,{attrs:{cols:"12"}},[e("p",{staticClass:"body-2 font-italic text-center pt-8"},[t._v("\n      "+t._s(t.tableFootnote)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=S.exports;installComponents(S,{UiSmartIcon:n(395).default})},1170:function(t,e,n){"use strict";n.r(e);var a=n(1102),i=(n(32),n(35),{mixins:[n(1114).a],props:{subSection:{type:Object,required:!0},subSectionIndex:{type:Number,required:!0}},data:function(){return{componentId:"sections-figure-list"}}}),s=n(60),o=Object(s.a)(i,(function(){var t=this,e=t._self._c;return e(a.a,{staticClass:"px-md-8 px-11 py-0",attrs:{cols:"12",lg:"6","align-self":t.subSection.tables?"end":"center"}},t._l(t.subSection.figures,(function(n,a){return e("figure",{key:a,staticClass:"pb-lg-4 py-7",class:a>0?"pt-lg-16":"pt-lg-0"},[e("UiSmartImg",{staticClass:"mx-auto",attrs:{"max-width":n.maxWidth?n.maxWidth:"600px",contain:"","image-asset":t.$getImageAssetObjectFromPathArray(n.path)}}),t._v(" "),e("figcaption",[e("p",{directives:[{name:"show",rawName:"v-show",value:n.caption,expression:"figure.caption"}],staticClass:"body-2 font-italic text-center pt-8",domProps:{innerHTML:t._s(t.compileMarkdown("Figure ".concat(t.subSectionIndex+1,".").concat(a+1,": ").concat(n.caption)))}})])],1)})),0)}),[],!1,null,null,null);e.default=o.exports;installComponents(o,{UiSmartImg:n(396).default})},1171:function(t,e,n){"use strict";n.r(e);var a=n(1101),i=(n(32),n(35),{mixins:[n(1114).a],props:{subSection:{type:Object,required:!0},subSectionIndex:{type:Number,required:!0}},data:function(){return{componentId:"sections-table-list"}}}),s=n(60),o=Object(s.a)(i,(function(){var t=this,e=t._self._c;return t.subSection.tables?e(a.a,{staticClass:"px-md-16 pb-md-16 px-8 pb-8 pt-0",attrs:{justify:"center"}},t._l(t.subSection.tables,(function(n,a){return e("div",{key:a,style:"max-width:"+n.maxWidth},[e("UiMarkdownTable",{staticClass:"mx-auto",attrs:{"csv-base-file-name":n.csvBaseFileName,delimiter:n.delimiter?n.delimiter:null,"table-caption":"Table ".concat(t.subSectionIndex+1,".").concat(a+1,": ").concat(n.caption),"table-footnote":n.tableFootnote?n.tableFootnote:null,"items-per-page":n.itemsPerPage?n.itemsPerPage:5}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=o.exports;installComponents(o,{UiMarkdownTable:n(1157).default})},1212:function(t,e,n){"use strict";n.r(e);var a=n(1102),i=n(1101),s={mixins:[n(1114).a],props:{page:{type:String,default:""}},data:function(){return{componentId:"sections-alternating-sub-sections",markdownFilesDir:this.page}}},o=n(60),r=Object(o.a)(s,(function(){var t=this,e=t._self._c;return e("div",t._l(t.markdownFiles,(function(n,s){return e("section",{key:s,attrs:{id:n.slug}},[e(i.a,{staticClass:"pa-0 pt-md-16 pt-8"}),t._v(" "),e(i.a,{class:{"flex-row-reverse":s%2==1},attrs:{"no-gutters":""}},[t.$vuetify.breakpoint.lgAndUp?e("SectionsFigureList",{attrs:{"sub-section":n,"sub-section-index":s}}):t._e(),t._v(" "),e(a.a,{staticClass:"px-md-8 px-4 pb-0",attrs:{cols:"12",lg:"6","align-self":"center"}},[e(i.a,{staticClass:"pa-3",attrs:{"no-gutters":"",justify:"center"}},[e(a.a,{attrs:{cols:"12"}},[e("UiMainTitle",{attrs:{title:n.title,ingress:n.ingress}})],1),t._v(" "),e(a.a,{attrs:{cols:"12"}},[e("nuxt-content",{attrs:{document:n}})],1),t._v(" "),e(a.a,{directives:[{name:"show",rawName:"v-show",value:n.github_text,expression:"subSection.github_text"}],attrs:{cols:"12"}},[e(i.a,{staticClass:"pa-3",attrs:{justify:"center"}},[e(a.a,{attrs:{cols:"12"}},[e(i.a,{attrs:{"no-gutters":"",justify:"center"}},[e("UiSmartIcon",{staticClass:"px-2",attrs:{name:"github",size:"24px"}}),t._v(" "),e("div",{staticClass:"font-weight-medium"},[t._v("GitHub repository:")])],1)],1),t._v(" "),e(a.a,{directives:[{name:"show",rawName:"v-show",value:n.github_link,expression:"subSection.github_link"}],staticClass:"pb-6",attrs:{cols:"12",justify:"center"}},[e(i.a,{attrs:{"no-gutters":"",justify:"center"}},[e("a",{attrs:{href:n.github_link}},[t._v(" "+t._s(n.github_text))])])],1)],1)],1)],1)],1)],1),t._v(" "),t.$vuetify.breakpoint.mdAndDown?e("SectionsFigureList",{attrs:{"sub-section":n,"sub-section-index":s}}):t._e(),t._v(" "),e("SectionsTableList",{attrs:{"sub-section":n,"sub-section-index":s}})],1)})),0)}),[],!1,null,null,null);e.default=r.exports;installComponents(r,{SectionsFigureList:n(1170).default,UiMainTitle:n(1133).default,UiSmartIcon:n(395).default,SectionsTableList:n(1171).default})},1342:function(t,e,n){"use strict";n.r(e);var a={mixins:[n(1130).a],data:function(){return{componentId:"standards",pageHeader:"Standards",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","S.svg"),this.$getImageAssetObject("images","tracktypes","VS.svg"),this.$getImageAssetObject("images","tracktypes","LVS.svg")]}},head:function(){return{title:"Standards",meta:[]}}},i=n(60),s=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("SectionsPageContainer",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}},[e("SectionsAlternatingSubSections",{attrs:{page:t.pageName}})],1)}),[],!1,null,null,null);e.default=s.exports;installComponents(s,{SectionsAlternatingSubSections:n(1212).default,SectionsPageContainer:n(1129).default})}}]);