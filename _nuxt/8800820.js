(window.webpackJsonp=window.webpackJsonp||[]).push([[61,35,46,48,49,52,53],{1091:function(t,e,a){"use strict";var n=a(1127);e.a={computed:{markdownFiles:function(){return this.markdownFilesDir?this.$loadMarkdownFilesInDir(this.markdownFilesDir):[]}},methods:{compileMarkdown:function(t){return t&&"string"==typeof t?n.marked.parseInline(t,[]):t}}}},1092:function(t,e,a){var n=a(1098);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(31).default)("5ca67044",n,!0,{sourceMap:!1})},1093:function(t,e,a){var n=a(1101);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(31).default)("8d97ad88",n,!0,{sourceMap:!1})},1094:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var n=a(126),o="lateRendererMounted";e.b={computed:{isLateRenderer:function(){return"componentId"in this&&n.MD_REG_LATE_RENDERERS.has(this.componentId)}},mounted:function(){this.isLateRenderer&&this.$nuxt.$emit(o)}}},1095:function(t,e,a){"use strict";var n=a(36);a(4),a(32),a(58),a(73),a(161),a(194);e.a={computed:{cssVars:function(){var t={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,t),t}},methods:{isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},hexToRgb:function(t){var e=0,a=0,n=0;return 4===t.length?(e="0x"+t[1]+t[1],a="0x"+t[2]+t[2],n="0x"+t[3]+t[3]):7===t.length&&(e="0x"+t[1]+t[2],a="0x"+t[3]+t[4],n="0x"+t[5]+t[6]),"".concat(+e,", ").concat(+a,", ").concat(+n)},generateRgbVar:function(t,e,a){var n=this.hexToRgb(e);n.includes("NaN")||(a["--v-".concat(t,"-rgb")]=n)},createRgbVarsForThemes:function(t,e){if(void 0!==t)for(var a=0,o=Object.values(t);a<o.length;a++)for(var r=o[a],s=0,i=Object.entries(r);s<i.length;s++){var c=Object(n.a)(i[s],2),l=c[0],u=c[1];if(this.isObject(u))for(var d=0,p=Object.entries(u);d<p.length;d++){var f=Object(n.a)(p[d],2),g=f[0],m=f[1];this.generateRgbVar("".concat(l,"-").concat(g),m,e)}else this.generateRgbVar(l,u,e)}}}}},1096:function(t,e,a){"use strict";a.r(e);a(32);var n={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}},data:function(){return{componentId:"ui-no-script-background-img"}}},o=a(60),r=Object(o.a)(n,(function(){return(0,this._self._c)("noscript",{inlineTemplate:{render:function(){var t=this;return(0,t._self._c)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"); ').concat(t.styleText)})},staticRenderFns:[]}})}),[],!1,null,null,null);e.default=r.exports},1097:function(t,e,a){"use strict";a(1092)},1098:function(t,e,a){var n=a(30)(!1);n.push([t.i,".center-background,.slot-center-background .attach-classes{background-position:50%}.cover-background,.slot-cover-background .attach-classes{background-size:cover}.contain-background,.slot-contain-background .attach-classes{background-size:contain;background-color:#fff}.full-size{height:100%;width:100%}.auto-size{height:auto;width:auto}",""]),t.exports=n},1099:function(t,e,a){"use strict";a.r(e);var n=a(315),o=(a(32),a(69),{props:{imageAsset:{type:Object,required:!0},imgHeight:{type:String,default:null},imgWidth:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1},notResponsive:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-smart-background-img"}},methods:{getDynamicClasses:function(t,e){var a=[];return t?a.push("contain-background"):a.push("cover-background"),e&&a.push("lazyload"),a.join(" ")}}}),r=(a(1097),a(60)),s=Object(r.a)(o,(function(){var t=this,e=t._self._c;return t.imageAsset.isSvgImage||t.$config.optimizeImages?e("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,"img-height":t.imgHeight,"img-width":t.imgWidth,alt:t.alt,behind:"","not-responsive":t.notResponsive},scopedSlots:t._u([{key:"nonRespImgComponent",fn:function(a){var n=a.imageAsset,o=a.styleText,r=a.lazyLoad;return[e("div",{staticClass:"fill-height center-background attach-classes hide-with-noscript",class:t.getDynamicClasses(t.contain,r),style:r?o:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"); ').concat(o),attrs:{"data-bgset":r?n.optimizedImagePath:null}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":n,"style-text":o}})]}},{key:"respImgComponent",fn:function(a){var n=a.imageAsset,o=a.styleText;return[e("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:o,attrs:{"data-bgset":"".concat(n.responsiveWebpImage.srcSet," [type: image/webp] |\n                    ").concat(n.responsiveImage.srcSet),"data-sizes":"auto"}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":n,"style-text":o}})]}}],null,!1,615995449)}):e(n.a,{class:t.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:t.imageAsset.optimizedImagePath,alt:t.alt,contain:t.contain}})}),[],!1,null,null,null);e.default=s.exports;installComponents(s,{UiNoScriptBackgroundImg:a(1096).default,UiSmartImgFileTypesWrapper:a(600).default})},1100:function(t,e,a){"use strict";a(1093)},1101:function(t,e,a){var n=a(30)(!1);n.push([t.i,".gradient-fill-header>.v-responsive__content{background:-webkit-linear-gradient(top,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9));background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.top-level{z-index:2}",""]),t.exports=n},1102:function(t,e,a){"use strict";a.r(e);var n=a(1079),o=a(369),r=a(368),s=a(1078),i={mixins:[a(1095).a],props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:function(){return[]}}},data:function(){return{componentId:"ui-page-header-banner"}}},c=(a(1100),a(60)),l=Object(c.a)(i,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"gradient-fill-header",style:t.cssVars,attrs:{"max-height":"125px","min-height":"75px"}},[e(r.a,{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[e(s.a,{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(a,o){return e(n.a,{key:o,attrs:{cols:"4"}},[e(s.a,{attrs:{"no-gutters":"",justify:"center"}},[e(r.a,{staticClass:"gradient-fill-header top-level",style:t.cssVars,attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[e("UiSmartBackgroundImg",{attrs:{"img-height":"56.3","img-width":"189","image-asset":a,contain:"","not-responsive":""}})],1)],1)],1)})),1)],1),t._v(" "),e(o.a,{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),t._v(" "),e(o.a,{attrs:{absolute:"",opacity:"0","z-index":"3"}},[e("h1",{staticClass:"text-md-h2 text-sm-h4 text-h5 font-weight-black text-center"},[t._v("\n      "+t._s(t.pageHeader)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=l.exports;installComponents(l,{UiSmartBackgroundImg:a(1099).default})},1103:function(t,e,a){"use strict";a.r(e);var n=a(236),o=(a(32),a(326),a(14),a(9),a(15),a(4),a(16),a(5),a(17),a(25),a(10),a(11),a(12),a(13),a(26),a(24),a(23),a(1)),r=a(196),s=a(601);function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){Object(o.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={props:{id:{type:String,default:null},href:{type:String,default:null},to:{type:String,default:null},text:{type:String,default:""},icon:{type:String,default:""},large:{type:Boolean,default:!1},xLarge:{type:Boolean,default:!1},small:{type:Boolean,default:!1},xSmall:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-styled-button",prevButtonHoverId:""}},computed:c(c({},Object(r.b)({buttonHoverId:function(t){return t.buttonHover.buttonHoverId}})),{},{shouldHover:function(){return this.doHover&&""===this.buttonHoverId}}),mounted:function(){document.addEventListener("mouseup",this.unsetButtonHoverId)},destroyed:function(){document.removeEventListener("mouseup",this.unsetButtonHoverId)},methods:{setButtonHoverId:function(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit(s.BUTTON_HOVER_M_SET_ID,t)},unsetButtonHoverId:function(){this.prevButtonHoverId="",this.$store.commit(s.BUTTON_HOVER_M_SET_ID,this.prevButtonHoverId)},onClick:function(t){t&&this.openLink(t),this.$emit("btn-click",!0)},openLink:function(t){window.open(t,"_blank")}}},u=a(60),d=Object(u.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"simplebutton"},[e(n.a,{class:"".concat(t.$vuetify.theme.dark?"primary":"secondary").concat(t.shouldHover?" custom-hover":""),attrs:{id:t.id,large:t.large,"x-large":t.xLarge,small:t.small,"x-small":t.xSmall,"to:":t.to,ripple:!1,nuxt:!!t.to||null},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseout:function(e){return t.unsetButtonHoverId()},mousedown:function(t){t.stopPropagation()},click:function(e){return t.onClick(t.href)}}},[t.icon?e("UiSmartIcon",{staticClass:"pr-3 center",attrs:{name:t.icon}}):t._e(),t._v("\n    "+t._s(t.text)+"\n  ")],1)],1)}),[],!1,null,null,null);e.default=d.exports;installComponents(d,{UiSmartIcon:a(399).default})},1104:function(t,e,a){"use strict";a.r(e);var n=a(1090),o={props:{pageHeader:{type:String,default:""},pageHeaderImages:{type:Array,default:function(){return[]}},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null},setMargins:{type:Boolean,default:!1}},data:function(){return{componentId:"sections-page-container"}}},r=a(60),s=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{class:t.greyBackground?t.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:t.sectionId}},[e("UiPageHeaderBanner",{directives:[{name:"show",rawName:"v-show",value:t.pageHeader,expression:"pageHeader"}],staticClass:"white",attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),e(n.a,{class:t.setMargins?"pa-md-8 pa-4":"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=s.exports;installComponents(s,{UiPageHeaderBanner:a(1102).default})},1105:function(t,e,a){var n=a(1112);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(31).default)("30f6f134",n,!0,{sourceMap:!1})},1107:function(t,e,a){"use strict";a(42),a(4);var n=a(126),o=a(602),r=a(8),s=(a(78),a(35),a(41),a(79),a(70),a(197));function i(t,e,a){var n,o=!1,i=Number(null===(n=getComputedStyle(document.body)["scroll-margin-top"])||void 0===n?void 0:n.replace("px","")),c=window.$nuxt;c.$nextTick((function(){return c.$emit("triggerScroll")})),c.$once("triggerScroll",Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}o={x:a.x,y:a.y},e.next=21;break;case 4:if(!t.hash){e.next=20;break}return n=t.hash,void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substring(1))),e.prev=7,r=function t(e,a){return document.querySelector(e)||new Promise((function(n){if(a>10)return n();setTimeout((function(){n(t(e,++a||1))}),100)}))},e.next=11,r(t.hash,0);case 11:e.sent&&(o={selector:n}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(7);case 18:e.next=21;break;case 20:o={x:0,y:0};case 21:return void 0!==o.y?(c=o.y,i&&(c+=i),Object(s.b)(c,{duration:0})):void 0!==o.selector&&(document.getElementById(o.selector.substring(1)).scrollIntoView({block:"start",inline:"nearest"}),i&&window.scrollBy(0,-i)),e.abrupt("return",o);case 23:case"end":return e.stop()}}),e,null,[[7,15]])}))))}"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",(function(){window.history.scrollRestoration="auto"})),window.addEventListener("load",(function(){window.history.scrollRestoration="manual"})));var c=a(1094);e.a={beforeRouteEnter:function(t,e,a){a((function(a){if(a.prevRoute=e,null===e.name){var n=a.$store.state.windowState.reloadScrollPosition;0===n.y&&t.hash||(a.scrollPosition=n)}else a.scrollPosition=void 0}))},data:function(){return{allLateRenderersMounted:void 0,totalLateRenderers:void 0,prevRoute:void 0,scrollPosition:void 0}},beforeMount:function(){window.addEventListener("beforeunload",this.leave)},beforeDestroy:function(){window.removeEventListener("beforeunload",this.leave)},computed:{pageName:function(){return this.componentId}},created:function(){var t=this,e=this.$nuxt.context.store.getters;this.totalLateRenderers=e[n.MD_REG_G_COUNT_LATE_RENDERERS_IN_PAGE](this.pageName),this.totalLateRenderers>0?this.allLateRenderersMounted=new Promise((function(e){var a=0;t.$nuxt.$on(c.a,(function(){(a+=1)===t.totalLateRenderers&&e(!0)}))})):this.allLateRenderersMounted=!0},activated:function(){var t=this;Promise.resolve(this.allLateRenderersMounted).then((function(){var e,a,n;e=t.$route,t.prevRoute,a=t.scrollPosition,null!==(n=e.meta)&&void 0!==n&&n.savedPosition&&(a=e.meta.savedPosition,delete e.meta.savedPosition),i(e,0,a),t.scrollPosition=void 0}))},mounted:function(){Promise.resolve(this.allLateRenderersMounted).then((function(){0}))},methods:{leave:function(){var t=this.$nuxt.context.store.commit,e={x:window.scrollX,y:window.scrollY};t(o.WINDOW_STATE_M_SET_RELOAD_SCROLL_POSITION,e)}}}},1111:function(t,e,a){"use strict";a(1105)},1112:function(t,e,a){var n=a(30)(!1);n.push([t.i,".full-overlay>.v-overlay__content{width:100%;height:100%}.above-overlay,.above-overlay>.v-btn,.above-overlay>.v-responsive__content{z-index:2}.size-from-contents:not(.v-dialog--fullscreen){width:auto;overflow:hidden}.no-max-height.v-dialog:not(.v-dialog--fullscreen){max-height:none;margin:0}.max-height-95.v-dialog:not(.v-dialog--fullscreen){max-height:95%;margin:0}.thin-border{border:1px solid #d3d3d3}.thin-border-bottom{border-bottom:1px solid #d3d3d3}",""]),t.exports=n},1113:function(t,e,a){var n=a(1139);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(31).default)("f6c66434",n,!0,{sourceMap:!1})},1122:function(t,e,a){"use strict";a.r(e);var n=a(236),o=a(378),r=a(244),s=a(1079),i=a(1184),c=a(369),l=a(368),u=a(1078),d={props:{value:Boolean,imageAsset:{type:Object,required:!0},alt:{type:String,default:""},captionHtml:{type:String,default:null},buttons:{type:Array,default:function(){return[]}},cropBottom:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-popup-dialog"}},computed:{show:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},p=(a(1111),a(60)),f=Object(p.a)(d,(function(){var t=this,e=t._self._c;return e(i.a,{attrs:{"content-class":t.cropBottom?"size-from-contents max-height-95":"size-from-contents no-max-height"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e(o.a,[e(u.a,{attrs:{"no-gutters":"","fill-height":""}},[e(s.a,{attrs:{cols:"12"}},[e(c.a,{staticClass:"full-overlay",attrs:{absolute:"",opacity:"0","z-index":"1"}},[e(l.a,{attrs:{height:"100%"}},[e(u.a,{staticClass:"mb-auto",attrs:{"fill-height":"","no-gutters":"",align:"start",justify:"end"}},[e(s.a,{staticClass:"pa-2 ma-0",attrs:{cols:"auto","align-self":"start"}},[e("div",{staticClass:"simplebutton"},[e(n.a,{staticClass:"pa-0",attrs:{width:"24px",height:"24px","min-width":"24px",ripple:!1},on:{click:function(e){t.show=!1}}},[e("UiSmartIcon",{attrs:{name:"close"}})],1)],1)])],1)],1)],1),t._v(" "),e("UiSmartImg",{class:t.cropBottom?"mx-10 mt-10 overflow-y-auto thin-border above-overlay":"mt-4",attrs:{"image-asset":t.imageAsset,alt:t.alt,"max-height":t.cropBottom?"calc(95vh - 151px)":"calc(95vh - 110px)",width:t.cropBottom?"calc(90vw - 82px)":"90vw","crop-bottom":t.cropBottom}})],1),t._v(" "),e(s.a,{directives:[{name:"show",rawName:"v-show",value:t.captionHtml,expression:"captionHtml"}],staticClass:"px-10 overflow-y-auto",attrs:{cols:"12"}},[e("figcaption",[e("p",{staticClass:"body-2 font-italic text-center pt-8 pb-2",domProps:{innerHTML:t._s(t.captionHtml)}})])])],1),t._v(" "),e(r.a,{directives:[{name:"show",rawName:"v-show",value:t.buttons.length>0,expression:"buttons.length > 0"}]},[e(u.a,{attrs:{"no-gutters":"",justify:"center"}},t._l(t.buttons,(function(a,n){return e(s.a,{key:"s_"+n,staticClass:"pa-2 ma-0",attrs:{cols:"auto","align-self":"end"}},[e("UiStyledButton",{staticClass:"text-weight-light above-overlay",attrs:{id:"btn_"+n,href:a.href,to:a.to,text:a.text,icon:a.icon,"x-large":""},on:{"btn-click":function(e){t.show=!1}}})],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=f.exports;installComponents(f,{UiSmartIcon:a(399).default,UiSmartImg:a(400).default,UiStyledButton:a(1103).default})},1135:function(t,e,a){var n=a(1163);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(31).default)("f075bc96",n,!0,{sourceMap:!1})},1138:function(t,e,a){"use strict";a(1113)},1139:function(t,e,a){var n=a(30)(!1);n.push([t.i,".image-box{box-sizing:border-box;position:relative;margin:auto;overflow:hidden}.image-box .attach-classes.transitioned{display:block;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:opacity .3s,-webkit-transform .3s;transition:opacity .3s,-webkit-transform .3s;transition:transform .3s,opacity .3s;transition:transform .3s,opacity .3s,-webkit-transform .3s}.image-hover .attach-classes.transitioned{max-width:100%;-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);opacity:.5!important}.image-box .v-icon{-webkit-transition:opacity .3s,-webkit-transform .3s;transition:opacity .3s,-webkit-transform .3s;transition:transform .3s,opacity .3s;transition:transform .3s,opacity .3s,-webkit-transform .3s;display:block;opacity:0}.image-hover .v-icon{opacity:.25}",""]),t.exports=n},1153:function(t,e,a){"use strict";a.r(e);var n=a(1124),o=a(369),r={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},minWidth:{type:String,default:null},maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},cropBottom:{type:Boolean,default:null},captionHtml:{type:String,default:null},dialogButtons:{type:Array,default:function(){}},alt:{type:String,default:""}},data:function(){return{componentId:"ui-zoomable-imaged",showDialog:!1}}},s=(a(1138),a(60)),i=Object(s.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e(n.a,{scopedSlots:t._u([{key:"default",fn:function(a){var n=a.hover;return[e("div",{staticClass:"image-box",class:n?"image-hover":null,on:{click:function(e){t.showDialog=!0}}},[e(o.a,{attrs:{absolute:"",opacity:"0"}},[e("UiSmartIcon",{staticStyle:{transition:"all 0.3s"},attrs:{name:"magnify-expand","x-large":"",color:"black"}})],1),t._v(" "),e("UiSmartImg",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,"min-width":t.minWidth,"max-height":t.maxHeight,"max-width":t.maxWidth,"crop-bottom":t.cropBottom,alt:t.alt}})],1)]}}])}),t._v(" "),e("UiPopupDialog",{attrs:{"max-width":"80vw","image-asset":t.imageAsset,"crop-bottom":t.cropBottom,buttons:t.dialogButtons,"caption-html":t.captionHtml},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}})],1)}),[],!1,null,null,null);e.default=i.exports;installComponents(i,{UiSmartIcon:a(399).default,UiSmartImg:a(400).default,UiPopupDialog:a(1122).default})},1161:function(t,e,a){var n=a(1200);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(31).default)("7631322e",n,!0,{sourceMap:!1})},1162:function(t,e,a){"use strict";a(1135)},1163:function(t,e,a){var n=a(30)(!1);n.push([t.i,".v-slide-group__content{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.cat-highlight{background-color:rgba(var(--v-accent-rgb),.2)}.v-chip:before{color:var(--v-accent-base)}.v-chip--active:before{opacity:.2!important}.v-chip--clickable:active{box-shadow:none}",""]),t.exports=n},1189:function(t,e,a){"use strict";a.r(e);var n=a(378),o=a(244),r=a(383),s=a(1198),i=a(1079),c=a(370),l=a(235),u=a(76),d=a(371),p=a(1078),f=(a(14),a(9),a(25),a(26),a(24),a(23),a(50),a(42),a(67),a(41),a(64),a(66),a(77),a(57),a(43),a(38)),g=a(1),m=a(156),h=(a(10),a(4),a(11),a(5),a(12),a(13),a(84),a(51),a(55),a(56),a(167),a(15),a(16),a(17),a(90),a(98),a(99),a(32),a(100),a(199),a(49),a(200),a(201),a(202),a(203),a(204),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(52),a(58),a(73),a(164),a(165),a(166),a(107),a(1091)),v=a(1095),y=["tags"],b=["category"];function x(t,e){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return w(t,e)}(t))||e&&t&&"number"==typeof t.length){a&&(t=a);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,i=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return s=t.done,t},e:function(t){i=!0,r=t},f:function(){try{s||null==a.return||a.return()}finally{if(i)throw r}}}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function k(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}var _="All",S=["FAIR community","Developers","Data providers/stewards","Analytical end users"],I={mixins:[h.a,v.a],props:{markdownFilesDir:{type:String,required:!0},categoryTitle:{type:String,default:"Categories"},sortCategories:{type:Boolean,default:!1}},data:function(){return{componentId:"sections-materials-layout"}},computed:{posts:function(){var t=this,e=function(e){var a=[];return e&&e.forEach((function(t){return a.push(t.trim())})),t.sortTags(a)},a=this.markdownFiles.map((function(t){var a=t.tags,n=Object(m.a)(t,y);return function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?k(Object(a),!0).forEach((function(e){Object(g.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({tags:e(a)},n)}));return a.sort((function(t,e){return"date"in t&&"date"in e?new Date(e.date)-new Date(t.date):0})),a.forEach((function(t,e){t.index=e})),a},tagsList:function(){var t=this.posts.reduce((function(t,e){return t.concat(e.tags)}),[]).filter((function(t,e,a){return a.indexOf(t)===e}));return this.sortTags(t)},categories:function(){var t=this.posts.map((function(t){return t.category}));return this.sortCategories&&(t=t.sort()),t.unshift(_),Object(f.a)(new Set(t))},filteredPosts:function(){var t=this;return this.filteredPostsByCategory().filter((function(e){return t.filteredPostsByTag().includes(e)}))},filteredPostsIndexes:function(){var t=new Set;return this.filteredPosts.forEach((function(e){t.add(e.index)})),t},activeCategory:{get:function(){var t=this.$route.query;return t.category?t.category:_},set:function(t){if(t!==_)this.$router.push({query:Object.assign({},this.$route.query,{category:t})});else{var e=this.$route.query,a=(e.category,Object(m.a)(e,b));this.$router.push({query:a})}}},selectedTags:{get:function(){var t=this.$route.query;return t.tags?t.tags:[]},set:function(t){this.$router.push({query:Object.assign({},this.$route.query,{tags:t})})}}},methods:{filteredPostsByCategory:function(){var t=this;if(this.activeCategory===_)return this.posts;var e=[];return this.posts.forEach((function(a){a.category===t.activeCategory&&e.push(a)})),e},filteredPostsByTag:function(){var t=this;if(0===this.selectedTags.length)return this.posts;var e=[];return this.posts.forEach((function(a){"tags"in a&&t.selectedTags.every((function(t){return a.tags.includes(t)}))&&e.push(a)})),e},sortTags:function(t){t=t.sort((function(t,e){return(t=t.toLowerCase())>(e=e.toLowerCase())?1:t<e?-1:0}));var e,a=x(S);try{for(a.s();!(e=a.n()).done;){var n=e.value,o=t.indexOf(n);o>=0&&t.unshift(t.splice(o,1)[0])}}catch(t){a.e(t)}finally{a.f()}return t}}},C=I,O=(a(1162),a(60)),j=Object(O.a)(C,(function(){var t=this,e=t._self._c;return e(p.a,{class:t.$vuetify.breakpoint.xs?"flex-column-reverse":""},[t.$vuetify.breakpoint.sm?e(i.a,{attrs:{sm:"1"}}):t._e(),t._v(" "),e(i.a,{attrs:{cols:"12",sm:"6",md:"8",lg:t.$vuetify.breakpoint.width>=1640?10:9,xl:"10"}},[e(p.a,t._l(t.posts,(function(a){return e(i.a,{directives:[{name:"show",rawName:"v-show",value:t.filteredPostsIndexes.has(a.index),expression:"filteredPostsIndexes.has(post.index)"}],key:a.index,staticStyle:{"min-width":"300px"},attrs:{id:"posts",cols:"12",sm:"12",md:"6",lg:t.$vuetify.breakpoint.width>=1640?3:4,xl:"3"}},[t._t("default",null,{post:a})],2)})),1)],1),t._v(" "),e(i.a,{attrs:{id:"post-categories",cols:"12",sm:"4",md:"4",lg:t.$vuetify.breakpoint.width>=1640?2:3,xl:"2"}},[e(n.a,{staticClass:"mb-6",attrs:{outlined:""}},[e("div",{staticClass:"subtitle font-weight-black text-uppercase text-center mt-4",domProps:{textContent:t._s(t.categoryTitle)}}),t._v(" "),e(c.a,{staticClass:"simplebutton",attrs:{dense:""}},[e(d.a,{attrs:{mandatory:""},model:{value:t.activeCategory,callback:function(e){t.activeCategory=e},expression:"activeCategory"}},t._l(t.categories,(function(a,n){return e(l.a,{key:n,style:t.cssVars,attrs:{"active-class":"cat-highlight",value:a}},[e(u.a,[e(u.c,{domProps:{textContent:t._s(a)}})],1)],1)})),1)],1)],1),t._v(" "),e(n.a,{staticClass:"mb-6",attrs:{outlined:""}},[e("div",{staticClass:"subtitle font-weight-black text-uppercase text-center mt-4"},[t._v("Tags")]),t._v(" "),e(o.c,[e(s.a,{attrs:{multiple:"",column:""},model:{value:t.selectedTags,callback:function(e){t.selectedTags=e},expression:"selectedTags"}},t._l(t.tagsList,(function(a){return e(r.a,{key:a,attrs:{value:a}},[t._v("\n            "+t._s(a)+"\n          ")])})),1)],1)],1)],1),t._v(" "),t.$vuetify.breakpoint.sm?e(i.a,{attrs:{sm:"1"}}):t._e()],1)}),[],!1,null,null,null);e.default=j.exports},1199:function(t,e,a){"use strict";a(1161)},1200:function(t,e,a){var n=a(30)(!1);n.push([t.i,".card-category[data-v-7f901f9a]{text-align:center;padding-top:3px;padding-bottom:3px;text-transform:uppercase;font-weight:700;color:#fff}.blog[data-v-7f901f9a]{background-color:#966591}.poster[data-v-7f901f9a]{background-color:#dec349}.publication[data-v-7f901f9a]{background-color:#387572}.presentation[data-v-7f901f9a]{background-color:#bdbdbd}.media[data-v-7f901f9a]{background-color:#966591}",""]),t.exports=n},1262:function(t,e,a){"use strict";a.r(e);var n=a(236),o=a(378),r=a(244),s=a(383),i=a(1198),c=a(368),l=(a(69),"Poster"),u="Presentation",d={props:{post:{type:Object,required:!0}},data:function(){return{componentId:"ui-materials-card",locale:null}},computed:{dialogButton:function(){return{icon:this.post.external?"open-in-new":"download",text:this.categoryToLinkText(this.post.category,this.post.external),href:this.post.staticPath?this.getStaticPath(this.post):this.post.href}}},mounted:function(){this.locale=window.navigator.userLanguage||window.navigator.language},methods:{categoryToDateText:function(t){switch(t){case u:case l:return"Presented on";case"Workflow":return"Conducted on";default:return"Published on"}},categoryToLinkText:function(t,e){switch(t){case l:return e?"View poster":"Download poster [pdf]";case"Blog":return"Read blog post";case u:return e?"View presentation":"Download slides [pdf]";default:return"Read full text"}},dateAsStr:function(t,e){return t&&e.date?new Date(e.date).toLocaleDateString(t,{dateStyle:"medium"}):"NA"},getStaticPath:function(t){return this.$router.options.base+t.staticPath.join("/")}}},p=(a(1199),a(60)),f=Object(p.a)(d,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{id:"post-card",elevation:"1",height:"500px",width:"100%"}},[e("p",{staticClass:"card-category my-0",class:"".concat(t.post.category.toLowerCase())},[t._v(t._s(t.post.category))]),t._v(" "),e(c.a,{staticClass:"mx-auto",attrs:{height:"162"}},[e("UiZoomableImage",{staticClass:"thin-border-bottom",attrs:{"image-asset":t.$getImageAssetObject("materials","previews",t.post.previewImg),"max-height":"160px",width:"100%","dialog-buttons":[t.dialogButton],"crop-bottom":""}})],1),t._v(" "),e(r.b,{staticClass:"pb-0"},[e(n.a,{staticClass:"px-0 primary--text",attrs:{text:"",small:"",disabled:""}},[e("div",{staticClass:"primary--text mr-1"},[t._v(t._s(t.categoryToDateText(t.post.category))+":")]),t._v(" "),e("div",{staticClass:"text--primary",staticStyle:{opacity:"60%"}},[t._v("\n        "+t._s(t.dateAsStr(t.locale,t.post))+"\n      ")])])],1),t._v(" "),e(c.a,{staticClass:"pa-0",attrs:{height:"96px"}},[e(r.c,{staticClass:"subtitle-1 font-weight-bold text--primary",staticStyle:{"line-height":"1.6rem"}},[t._v("\n      "+t._s(t.post.title)+"\n    ")])],1),t._v(" "),e(c.a,{staticClass:"pa-0",attrs:{height:"120px"}},[e(i.a,{staticClass:"px-4",attrs:{multiple:"",column:"","active-class":"error--text"}},t._l(t.post.tags,(function(a){return e(s.a,{key:a,staticClass:"px-1",staticStyle:{opacity:"0.9"},attrs:{disabled:"",outlined:"","x-small":""}},[t._v("\n        "+t._s(a)+"\n      ")])})),1)],1),t._v(" "),e(n.a,{staticClass:"ml-3 px-1",attrs:{text:"",color:"primary"}},[e("a",{staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:t.dialogButton.href}},[e("UiSmartIcon",{staticClass:"mr-2",attrs:{name:t.dialogButton.icon}}),t._v("\n      "+t._s(t.dialogButton.text)+"\n    ")],1)])],1)}),[],!1,null,"7f901f9a",null);e.default=f.exports;installComponents(f,{UiZoomableImage:a(1153).default,UiSmartIcon:a(399).default})},1309:function(t,e,a){"use strict";a.r(e);var n=a(1084),o={mixins:[a(1107).a],data:function(){return{markdownFilesDir:"materials",componentId:"materials",pageHeader:"Materials",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","S.svg"),this.$getImageAssetObject("images","tracktypes","F.svg"),this.$getImageAssetObject("images","tracktypes","LGP.svg")]}}},r=a(60),s=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("SectionsPageContainer",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages,"grey-background":"","set-margins":""}},[e("SectionsCardLayout",{attrs:{"markdown-files-dir":t.markdownFilesDir,"sort-categories":""},scopedSlots:t._u([{key:"default",fn:function(t){var a=t.post;return[e("UiMaterialsCard",{attrs:{post:a}})]}}])}),t._v(" "),e(n.a,{class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4"})],1)}),[],!1,null,"377339b8",null);e.default=s.exports;installComponents(s,{UiMaterialsCard:a(1262).default,SectionsCardLayout:a(1189).default,SectionsPageContainer:a(1104).default})}}]);