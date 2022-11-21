(window.webpackJsonp=window.webpackJsonp||[]).push([[68,36,53,54,56,57],{1296:function(t,e,a){"use strict";var n=a(1319);e.a={computed:{markdownFiles:function(){return this.markdownFilesDir?this.$loadMarkdownFilesInDir(this.markdownFilesDir):[]}},methods:{compileMarkdown:function(t){return t&&"string"==typeof t?n.marked.parseInline(t,{breaks:!0}):t}}}},1297:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a(126),s="lateRendererMounted";e.b={computed:{isLateRenderer:function(){return"componentId"in this&&n.MD_REG_LATE_RENDERERS.has(this.componentId)}},mounted:function(){this.isLateRenderer&&this.$nuxt.$emit(s)}}},1298:function(t,e,a){var n=a(1303);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(29).default)("5ca67044",n,!0,{sourceMap:!1})},1299:function(t,e,a){var n=a(1306);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(29).default)("5dbd20a4",n,!0,{sourceMap:!1})},1300:function(t,e,a){"use strict";var n=a(37);a(4),a(33),a(59),a(74),a(163),a(198);e.a={computed:{cssVars:function(){var t={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,t),t}},methods:{isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},hexToRgb:function(t){var e=0,a=0,n=0;return 4===t.length?(e="0x"+t[1]+t[1],a="0x"+t[2]+t[2],n="0x"+t[3]+t[3]):7===t.length&&(e="0x"+t[1]+t[2],a="0x"+t[3]+t[4],n="0x"+t[5]+t[6]),"".concat(+e,", ").concat(+a,", ").concat(+n)},generateRgbVar:function(t,e,a){var n=this.hexToRgb(e);n.includes("NaN")||(a["--v-".concat(t,"-rgb")]=n)},createRgbVarsForThemes:function(t,e){if(void 0!==t)for(var a=0,s=Object.values(t);a<s.length;a++)for(var r=s[a],i=0,o=Object.entries(r);i<o.length;i++){var c=Object(n.a)(o[i],2),l=c[0],u=c[1];if(this.isObject(u))for(var d=0,g=Object.entries(u);d<g.length;d++){var m=Object(n.a)(g[d],2),p=m[0],h=m[1];this.generateRgbVar("".concat(l,"-").concat(p),h,e)}else this.generateRgbVar(l,u,e)}}}}},1301:function(t,e,a){"use strict";a.r(e);a(33);var n={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}},data:function(){return{componentId:"ui-no-script-background-img"}}},s=a(61),r=Object(s.a)(n,(function(){return(0,this._self._c)("noscript",{inlineTemplate:{render:function(){var t=this;return(0,t._self._c)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"); ').concat(t.styleText)})},staticRenderFns:[]}})}),[],!1,null,null,null);e.default=r.exports},1302:function(t,e,a){"use strict";a(1298)},1303:function(t,e,a){var n=a(28)(!1);n.push([t.i,".center-background,.slot-center-background .attach-classes{background-position:50%}.cover-background,.slot-cover-background .attach-classes{background-size:cover}.contain-background,.slot-contain-background .attach-classes{background-size:contain;background-color:#fff}.full-size{height:100%;width:100%}.auto-size{height:auto;width:auto}",""]),t.exports=n},1304:function(t,e,a){"use strict";a.r(e);var n=a(317),s=(a(33),a(69),{props:{imageAsset:{type:Object,required:!0},imgHeight:{type:String,default:null},imgWidth:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1},notResponsive:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-smart-background-img"}},methods:{getDynamicClasses:function(t,e){var a=[];return t?a.push("contain-background"):a.push("cover-background"),e&&a.push("lazyload"),a.join(" ")}}}),r=(a(1302),a(61)),i=Object(r.a)(s,(function(){var t=this,e=t._self._c;return t.imageAsset.isSvgImage||t.$config.optimizeImages?e("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,"img-height":t.imgHeight,"img-width":t.imgWidth,alt:t.alt,behind:"","not-responsive":t.notResponsive},scopedSlots:t._u([{key:"nonRespImgComponent",fn:function(a){var n=a.imageAsset,s=a.styleText,r=a.lazyLoad;return[e("div",{staticClass:"fill-height center-background attach-classes hide-with-noscript",class:t.getDynamicClasses(t.contain,r),style:r?s:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"); ').concat(s),attrs:{"data-bgset":r?n.optimizedImagePath:null}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":n,"style-text":s}})]}},{key:"respImgComponent",fn:function(a){var n=a.imageAsset,s=a.styleText;return[e("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:s,attrs:{"data-bgset":"".concat(n.responsiveWebpImage.srcSet," [type: image/webp] |\n                    ").concat(n.responsiveImage.srcSet),"data-sizes":"auto"}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":n,"style-text":s}})]}}],null,!1,615995449)}):e(n.a,{class:t.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:t.imageAsset.optimizedImagePath,alt:t.alt,contain:t.contain}})}),[],!1,null,null,null);e.default=i.exports;installComponents(i,{UiNoScriptBackgroundImg:a(1301).default,UiSmartImgFileTypesWrapper:a(642).default})},1305:function(t,e,a){"use strict";a(1299)},1306:function(t,e,a){var n=a(28)(!1);n.push([t.i,".gradient-fill-header>.v-responsive__content{background:-webkit-linear-gradient(top,rgba(var(--v-accent-rgb),.9),rgba(var(--v-success-rgb),.9));background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-success-rgb),.9))}.top-level{z-index:2}",""]),t.exports=n},1307:function(t,e,a){"use strict";a.r(e);var n=a(1283),s=a(372),r=a(371),i=a(1282),o={mixins:[a(1300).a],props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:function(){return[]}}},data:function(){return{componentId:"ui-page-header-banner"}}},c=(a(1305),a(61)),l=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"gradient-fill-header",style:t.cssVars,attrs:{"max-height":"125px","min-height":"75px"}},[e(r.a,{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[e(i.a,{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(a,s){return e(n.a,{key:s,attrs:{cols:"4"}},[e(i.a,{attrs:{"no-gutters":"",justify:"center"}},[e(r.a,{staticClass:"gradient-fill-header top-level",style:t.cssVars,attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[e("UiSmartBackgroundImg",{attrs:{"img-height":"56.3","img-width":"189","image-asset":a,contain:"","not-responsive":""}})],1)],1)],1)})),1)],1),t._v(" "),e(s.a,{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),t._v(" "),e(s.a,{attrs:{absolute:"",opacity:"0","z-index":"3"}},[e("h1",{staticClass:"text-md-h2 text-sm-h4 text-h5 font-weight-black text-center"},[t._v("\n      "+t._s(t.pageHeader)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=l.exports;installComponents(l,{UiSmartBackgroundImg:a(1304).default})},1309:function(t,e,a){"use strict";a.r(e);var n=a(1295),s={props:{pageHeader:{type:String,default:""},pageHeaderImages:{type:Array,default:function(){return[]}},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null},setMargins:{type:Boolean,default:!1}},data:function(){return{componentId:"sections-page-container"}}},r=a(61),i=Object(r.a)(s,(function(){var t=this,e=t._self._c;return e("section",{class:t.greyBackground?t.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:t.sectionId}},[e("UiPageHeaderBanner",{directives:[{name:"show",rawName:"v-show",value:t.pageHeader,expression:"pageHeader"}],staticClass:"white",attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),e(n.a,{class:t.setMargins?"pa-md-8 pa-4":"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=i.exports;installComponents(i,{UiPageHeaderBanner:a(1307).default})},1312:function(t,e,a){"use strict";a(42),a(4);var n=a(126),s=a(644),r=a(8),i=(a(78),a(35),a(41),a(79),a(70),a(200));function o(t,e,a){var n,s=!1,o=Number(null===(n=getComputedStyle(document.body)["scroll-margin-top"])||void 0===n?void 0:n.replace("px","")),c=window.$nuxt;c.$nextTick((function(){return c.$emit("triggerScroll")})),c.$once("triggerScroll",Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}s={x:a.x,y:a.y},e.next=21;break;case 4:if(!t.hash){e.next=20;break}return n=t.hash,void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substring(1))),e.prev=7,r=function t(e,a){return document.querySelector(e)||new Promise((function(n){if(a>10)return n();setTimeout((function(){n(t(e,++a||1))}),100)}))},e.next=11,r(t.hash,0);case 11:e.sent&&(s={selector:n}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(7);case 18:e.next=21;break;case 20:s={x:0,y:0};case 21:return void 0!==s.y?(c=s.y,o&&(c+=o),Object(i.b)(c,{duration:0})):void 0!==s.selector&&(document.getElementById(s.selector.substring(1)).scrollIntoView({block:"start",inline:"nearest"}),o&&window.scrollBy(0,-o)),e.abrupt("return",s);case 23:case"end":return e.stop()}}),e,null,[[7,15]])}))))}"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",(function(){window.history.scrollRestoration="auto"})),window.addEventListener("load",(function(){window.history.scrollRestoration="manual"})));var c=a(1297);e.a={beforeRouteEnter:function(t,e,a){a((function(a){if(a.prevRoute=e,null===e.name){var n=a.$store.state.windowState.reloadScrollPosition;0===n.y&&t.hash||(a.scrollPosition=n)}else a.scrollPosition=void 0}))},data:function(){return{allLateRenderersMounted:void 0,totalLateRenderers:void 0,prevRoute:void 0,scrollPosition:void 0}},beforeMount:function(){window.addEventListener("beforeunload",this.leave)},beforeDestroy:function(){window.removeEventListener("beforeunload",this.leave)},computed:{pageName:function(){return this.componentId}},created:function(){var t=this,e=this.$nuxt.context.store.getters;this.totalLateRenderers=e[n.MD_REG_G_GET_LATE_RENDERER_COUNT_IN_PAGE](this.pageName),this.totalLateRenderers>0?this.allLateRenderersMounted=new Promise((function(e){var a=0;t.$nuxt.$on(c.a,(function(){(a+=1)===t.totalLateRenderers&&e(!0)}))})):this.allLateRenderersMounted=!0},activated:function(){var t=this;Promise.resolve(this.allLateRenderersMounted).then((function(){var e,a,n;e=t.$route,t.prevRoute,a=t.scrollPosition,null!==(n=e.meta)&&void 0!==n&&n.savedPosition&&(a=e.meta.savedPosition,delete e.meta.savedPosition),o(e,0,a),t.scrollPosition=void 0}))},mounted:function(){Promise.resolve(this.allLateRenderersMounted).then((function(){0}))},methods:{leave:function(){var t=this.$nuxt.context.store.commit,e={x:window.scrollX,y:window.scrollY};t(s.WINDOW_STATE_M_SET_RELOAD_SCROLL_POSITION,e)}}}},1473:function(t,e,a){"use strict";a.r(e);var n=a(1283),s=a(1282),r=a(1296),i=a(1297),o={mixins:[r.a,i.b],props:{quote:{type:String,default:""},citation:{type:String,default:""},noTextColor:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-quote-text"}},methods:{themeBasedClass:function(t){return this.noTextColor?"":"grey--text ".concat(this.$vuetify.theme.dark?t?"text--lighten-1":"text--lighten-3":t?"text--lighten-1":"text--darken-2")}}},c=a(61),l=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-4"},[e(s.a,[e(n.a,{attrs:{cols:"1"}},[e("UiSmartIcon",{staticClass:"quotation-mark",class:t.themeBasedClass(!0),attrs:{name:"format-quote-open","x-large":""}})],1),t._v(" "),e(n.a,{attrs:{cols:"10"}},[e("p",{staticClass:"quote ma-0 text-h6 font-italic text-center",class:t.themeBasedClass(!1),domProps:{textContent:t._s(t.quote)}})]),t._v(" "),e(n.a,{attrs:{cols:"1"}},[e("UiSmartIcon",{staticClass:"quotation-mark",class:t.themeBasedClass(!0),attrs:{name:"format-quote-close","x-large":""}})],1)],1),t._v(" "),t.citation?e(s.a,{staticClass:"pt-2 px-4 justify-end"},[e("p",{staticClass:"body-2 font-italic",domProps:{innerHTML:t._s(t.compileMarkdown(t.citation))}})]):t._e()],1)}),[],!1,null,null,null);e.default=l.exports;installComponents(l,{UiSmartIcon:a(402).default})},1526:function(t,e,a){"use strict";a.r(e);var n=a(239),s=a(1283),r=a(1295),i=a(1282),o={mixins:[a(1312).a],data:function(){return{componentId:"presenting",shown:!1,playmusic:function(){new Audio("https://freemusicarchive.org/track/pay-attention-duffy-duck-cb-052/stream").play()},pageHeader:"Presenting",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","S.svg"),this.$getImageAssetObject("images","tracktypes","VS.svg"),this.$getImageAssetObject("images","tracktypes","LVS.svg")]}},head:function(){return{title:"Presenting",meta:[]}}},c=a(61),l=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("SectionsPageContainer",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}},[e(r.a,{staticStyle:{"max-width":"1300px"}},[e(i.a,{directives:[{name:"show",rawName:"v-show",value:!t.shown,expression:"!shown"}]},[e(s.a,{staticClass:"pa-8"},[e(n.a,{staticClass:"pa-20",style:{left:"50%",transform:"translateX(-50%)"},attrs:{color:"primary",absolute:""},on:{click:function(e){t.shown=!t.shown,t.playmusic()}}},[t._v("\n          Click me for a surprise\n        ")])],1)],1),t._v(" "),e(i.a,{directives:[{name:"show",rawName:"v-show",value:t.shown,expression:"shown"}],staticClass:"py-8 mt-8",attrs:{"no-gutters":""}},[e(s.a,{attrs:{cols:"12",md:"6","align-self":"center"}},[e("UiSmartImg",{attrs:{"max-height":"250px","max-width":"250px","image-asset":t.$getImageAssetObject("images","team","sveinung-gundersen-big.png")}})],1),t._v(" "),e(s.a,{staticClass:"pa-lg-16 pa-md-10 pa-md-6 px-6 py-16",attrs:{cols:"12",md:"6","align-self":"center"}},[e("h2",{staticClass:"text-md-h3 text-h4 text-center font-weight-black"},[t._v("S. Gundersen")])])],1),t._v(" "),e(i.a,{directives:[{name:"show",rawName:"v-show",value:t.shown,expression:"shown"}],staticClass:"py-8 flex-row-reverse",attrs:{"no-gutters":""}},[e(s.a,{staticClass:"pr-lg-16 pr-md-10 pr-md-6 px-6",attrs:{cols:"12",md:"6","align-self":"center"}},[e("UiSmartImg",{attrs:{"max-height":"405","max-width":"612","image-asset":t.$getImageAssetObject("images","team","fairtracks-team.png")}})],1),t._v(" "),e(s.a,{attrs:{cols:"12",md:"6","align-self":"center"}},[e("div",{staticClass:"pa-lg-16 pa-md-10 pa-md-6 px-6 py-16"},[e("h2",{staticClass:"text-md-h3 text-h4 text-center font-weight-black"},[t._v("\n            ...and the FAIRtracks team\n          ")])])]),t._v(" "),e(s.a,{staticClass:"pt-16",attrs:{cols:"12","align-self":"center"}},[e("div",{staticClass:"py-16"}),t._v(" "),e("h3",{staticClass:"text-md-h5 text-h6 text-center"},[t._v("Context:")]),t._v(" "),e("UiQuoteText",{staticClass:"pa-lg-16 pa-md-10 pa-md-6 px-6 py-16 mx-auto",staticStyle:{"max-width":"500px"},attrs:{quote:"Plus it sounds like an experimental jazz ensemble",citation:"Daniel Zerbino, personal communication (2021)"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=l.exports;installComponents(l,{UiSmartImg:a(403).default,UiQuoteText:a(1473).default,SectionsPageContainer:a(1309).default})}}]);