(window.webpackJsonp=window.webpackJsonp||[]).push([[67,31,37,46,50,52,55],{1066:function(t,e,a){"use strict";a.r(e);var s={mixins:[a(910).a],data(){return{componentId:"standards",directFetchChildrenCount:1,pageHeader:"Standards",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","S.svg"),this.$getImageAssetObject("images","tracktypes","VS.svg"),this.$getImageAssetObject("images","tracktypes","LVS.svg")]}},head:()=>({title:"Standards",meta:[]})},i=a(15),n=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("SectionsPageContainer",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}},[e("SectionsAlternatingSubSections",{attrs:{page:t.pageName}})],1)}),[],!1,null,null,null);e.default=n.exports;installComponents(n,{SectionsAlternatingSubSections:a(960).default,SectionsPageContainer:a(908).default})},898:function(t,e,a){},899:function(t,e,a){},900:function(t,e,a){"use strict";var s=a(918);e.a={computed:{markdownFiles(){return this.markdownFilesDir?this.$loadMarkdownFilesInDir(this.markdownFilesDir):[]}},methods:{compileMarkdown:t=>t&&"string"==typeof t?s.marked.parseInline(t,[]):t}}},901:function(t,e,a){"use strict";a.r(e);var s={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}},data:()=>({componentId:"ui-no-script-background-img"})},i=a(15),n=Object(i.a)(s,(function(){return(0,this._self._c)("noscript",{inlineTemplate:{render:function(){var t=this;return(0,t._self._c)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"); ').concat(t.styleText)})},staticRenderFns:[]}})}),[],!1,null,null,null);e.default=n.exports},902:function(t,e,a){"use strict";a(898)},903:function(t,e,a){"use strict";a.r(e);var s={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1},notResponsive:{type:Boolean,default:!1}},data:()=>({componentId:"ui-smart-background-img"}),methods:{getDynamicClasses(t,e){var a=[];return t?a.push("contain-background"):a.push("cover-background"),e&&a.push("lazyload"),a.join(" ")}}},i=(a(902),a(15)),n=a(19),r=a.n(n),o=a(150),l=Object(i.a)(s,(function(){var t=this,e=t._self._c;return t.imageAsset.isSvgImage||t.$config.optimizeImages?e("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,alt:t.alt,behind:"","not-responsive":t.notResponsive},scopedSlots:t._u([{key:"nonRespImgComponent",fn:function(a){var{imageAsset:s,styleText:i,lazyLoad:n}=a;return[e("div",{staticClass:"fill-height center-background attach-classes hide-with-noscript",class:t.getDynamicClasses(t.contain,n),style:n?i:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"); ').concat(i),attrs:{"data-bgset":n?s.optimizedImagePath:null}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":s,"style-text":i}})]}},{key:"respImgComponent",fn:function(a){var{imageAsset:s,styleText:i}=a;return[e("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:i,attrs:{"data-bgset":"".concat(s.responsiveWebpImage.srcSet," [type: image/webp] |\n                      ").concat(s.responsiveImage.srcSet),"data-sizes":"auto"}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":s,"style-text":i}})]}}],null,!1,876970809)}):e("v-img",{class:t.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:t.imageAsset.optimizedImagePath,alt:t.alt,contain:t.contain,"min-height":t.minHeight}})}),[],!1,null,null,null);e.default=l.exports;r()(l,{UiNoScriptBackgroundImg:a(901).default,UiSmartImgFileTypesWrapper:a(414).default}),r()(l,{VImg:o.a})},904:function(t,e,a){"use strict";a(899)},906:function(t,e,a){"use strict";a.r(e);var s={mixins:[{computed:{cssVars(){var t={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,t),t}},methods:{isObject:t=>"[object Object]"===Object.prototype.toString.call(t),hexToRgb(t){var e=0,a=0,s=0;return 4===t.length?(e="0x"+t[1]+t[1],a="0x"+t[2]+t[2],s="0x"+t[3]+t[3]):7===t.length&&(e="0x"+t[1]+t[2],a="0x"+t[3]+t[4],s="0x"+t[5]+t[6]),"".concat(+e,", ").concat(+a,", ").concat(+s)},generateRgbVar(t,e,a){var s=this.hexToRgb(e);s.includes("NaN")||(a["--v-".concat(t,"-rgb")]=s)},createRgbVarsForThemes(t,e){if(void 0!==t)for(var a of Object.values(t))for(var[s,i]of Object.entries(a))if(this.isObject(i))for(var[n,r]of Object.entries(i))this.generateRgbVar("".concat(s,"-").concat(n),r,e);else this.generateRgbVar(s,i,e)}}}],props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:()=>[]}},data:()=>({componentId:"ui-page-header-banner"})},i=(a(904),a(15)),n=a(19),r=a.n(n),o=a(887),l=a(210),c=a(200),u=a(888),d=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("v-responsive",{staticClass:"gradient-fill-header",style:t.cssVars,attrs:{"max-height":"125px","min-height":"75px"}},[e("v-responsive",{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[e("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(a,s){return e("v-col",{key:s,attrs:{cols:"4"}},[e("v-row",{attrs:{"no-gutters":"",justify:"center"}},[e("v-responsive",{staticClass:"gradient-fill-header top-level",style:t.cssVars,attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[e("UiSmartBackgroundImg",{attrs:{height:"56.3",width:"189","min-height":"75","image-asset":a,contain:"","not-responsive":""}})],1)],1)],1)})),1)],1),t._v(" "),e("v-overlay",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),t._v(" "),e("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[e("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n        "+t._s(t.pageHeader)+"\n      ")])])],1)}),[],!1,null,null,null);e.default=d.exports;r()(d,{UiSmartBackgroundImg:a(903).default}),r()(d,{VCol:o.a,VOverlay:l.a,VResponsive:c.a,VRow:u.a})},908:function(t,e,a){"use strict";a.r(e);var s={props:{pageHeader:{type:String,default:""},pageHeaderImages:{type:Array,default:()=>[]},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null},setMargins:{type:Boolean,default:!1}},data:()=>({componentId:"sections-page-container"})},i=a(15),n=a(19),r=a.n(n),o=a(897),l=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("section",{class:t.greyBackground?t.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:t.sectionId}},[e("UiPageHeaderBanner",{directives:[{name:"show",rawName:"v-show",value:t.pageHeader,expression:"pageHeader"}],staticClass:"white",attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),e("v-container",{class:t.setMargins?"pa-md-8 pa-4":"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=l.exports;r()(l,{UiPageHeaderBanner:a(906).default}),r()(l,{VContainer:o.a})},910:function(t,e,a){"use strict";var s=a(416),i=a(94);function n(t,e,a,s,i,n,r){try{var o=t[n](r),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(s,i)}function r(t){return function(){var e=this,a=arguments;return new Promise((function(s,i){var r=t.apply(e,a);function o(t){n(r,s,i,o,l,"next",t)}function l(t){n(r,s,i,o,l,"throw",t)}o(void 0)}))}}function o(t,e,a){var s,n=!1,o=Number(null===(s=getComputedStyle(document.body)["scroll-margin-top"])||void 0===s?void 0:s.replace("px","")),l=window.$nuxt;l.$nextTick((()=>l.$emit("triggerScroll"))),l.$once("triggerScroll",r((function*(){if(a)n={x:a.x,y:a.y};else if(t.hash){var e=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(e="#"+window.CSS.escape(e.substring(1)));try{var s=(t,e)=>document.querySelector(t)||new Promise((a=>{if(e>10)return a();setTimeout((()=>{a(s(t,++e||1))}),100)}));(yield s(t.hash,0))&&(n={selector:e})}catch(t){}}else n={x:0,y:0};if(void 0!==n.y){var r=n.y;o&&(r+=o),Object(i.b)(r,{duration:0})}else void 0!==n.selector&&(document.getElementById(n.selector.substring(1)).scrollIntoView({block:"start",inline:"nearest"}),o&&window.scrollBy(0,-o));return n})))}"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",(()=>{window.history.scrollRestoration="auto"})),window.addEventListener("load",(()=>{window.history.scrollRestoration="manual"})));e.a={beforeRouteEnter(t,e,a){a((t=>{t.prevRoute=e;var a=null===e.name;t.scrollPosition=a?t.$store.state.windowState.reloadScrollPosition:void 0}))},data:()=>({prevRoute:void 0,scrollPosition:void 0}),beforeMount(){window.addEventListener("beforeunload",this.leave)},beforeDestroy(){window.removeEventListener("beforeunload",this.leave)},computed:{pageName(){return this.componentId}},activated(){var t,e,a;t=this.$route,this.prevRoute,e=this.scrollPosition,null!==(a=t.meta)&&void 0!==a&&a.savedPosition&&(e=t.meta.savedPosition,delete t.meta.savedPosition),o(t,0,e),this.scrollPosition=void 0},mounted(){0},methods:{leave(){var t=this.$nuxt.context.store.commit,e={x:window.scrollX,y:window.scrollY};t(s.WINDOW_STATE_M_SET_RELOAD_SCROLL_POSITION,e)}}}},911:function(t,e,a){"use strict";a.r(e);var s={mixins:[a(900).a],props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},scaleDownAtSm:{type:Boolean,default:!1}},data:()=>({componentId:"ui-main-title"})},i=a(15),n=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("div",[e("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-center font-weight-black mt-4 mb-8",class:t.scaleDownAtSm?"text-sm-h3":"text-md-h3",domProps:{textContent:t._s(t.title)}}),t._v(" "),e("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-8",class:t.scaleDownAtSm?"text-sm-h5":"text-md-h5",domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),t.ingress?e("h4",{staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}):e("h4",{staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic"},[t._t("ingress")],2),t._v(" "),t.info?e("p",{staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}}):e("p",{staticClass:"text-subtitle-1 font-weight-light text-center mb-4"},[t._t("info")],2)])}),[],!1,null,null,null);e.default=n.exports},960:function(t,e,a){"use strict";a.r(e);var s=a(54);function i(t,e,a,s,i,n,r){try{var o=t[n](r),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(s,i)}var n={mixins:[a(900).a],props:{page:{type:String,default:""}},data(){return{componentId:"sections-alternating-sub-sections",markdownFilesDir:this.page,mdiGithub:s.mdiGithub,content:{markdownFiles:[],imageAssetObjects:{}}}},fetch(){var t,e=this;return(t=function*(){e.content=yield e.$loadMarkdownFiles("pages/".concat(e.page),e.$content)},function(){var e=this,a=arguments;return new Promise((function(s,n){var r=t.apply(e,a);function o(t){i(r,s,n,o,l,"next",t)}function l(t){i(r,s,n,o,l,"throw",t)}o(void 0)}))})()}},r=n,o=a(15),l=a(19),c=a.n(l),u=a(887),d=a(202),g=a(888),m=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",t._l(t.markdownFiles,(function(a,s){return e("section",{key:s,attrs:{id:a.slug}},[e("v-row",{class:{"flex-row-reverse":s%2==1},attrs:{"no-gutters":""}},[e("v-col",{staticClass:"px-md-8 py-md-16 px-11 py-15",attrs:{cols:"12",md:"6","align-self":"center"}},[e("figure",[a.img?e("UiSmartImg",{staticClass:"mx-auto",attrs:{"max-height":t.$vuetify.breakpoint.mdAndUp?"900px":"600px",contain:"","image-asset":t.$getImageAssetObjectFromPathArray(a.img)}}):t._e(),t._v(" "),e("figcaption",[e("p",{directives:[{name:"show",rawName:"v-show",value:a.caption,expression:"subSection.caption"}],staticClass:"body-2 font-italic text-center pt-8",domProps:{innerHTML:t._s(t.compileMarkdown("Figure "+(s+1)+": "+a.caption))}},[t._v("\n                Figure "+t._s(s+1)+":\n                "+t._s(t.compileMarkdown(a.caption))+"\n              ")])])],1)]),t._v(" "),e("v-col",{staticClass:"px-md-8 py-md-16 px-4 py-8",attrs:{cols:"12",md:"6","align-self":"center"}},[e("v-row",{staticClass:"pa-3",attrs:{"no-gutters":"",justify:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("UiMainTitle",{attrs:{title:a.title,ingress:a.ingress}})],1),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("nuxt-content",{attrs:{document:a}})],1),t._v(" "),e("v-col",{directives:[{name:"show",rawName:"v-show",value:a.github_text,expression:"subSection.github_text"}],attrs:{cols:"12"}},[e("v-row",{staticClass:"pa-3",attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("v-row",{attrs:{"no-gutters":"",justify:"center"}},[e("v-icon",{staticClass:"px-2",attrs:{size:"24px"}},[t._v(t._s(t.mdiGithub))]),t._v(" "),e("div",{staticClass:"font-weight-medium"},[t._v("GitHub repository:")])],1)],1),t._v(" "),e("v-col",{directives:[{name:"show",rawName:"v-show",value:a.github_link,expression:"subSection.github_link"}],staticClass:"pb-6",attrs:{cols:"12",justify:"center"}},[e("v-row",{attrs:{"no-gutters":"",justify:"center"}},[e("a",{attrs:{href:a.github_link}},[t._v(" "+t._s(a.github_text))])])],1)],1)],1)],1)],1)],1)],1)})),0)}),[],!1,null,null,null);e.default=m.exports;c()(m,{UiSmartImg:a(228).default,UiMainTitle:a(911).default}),c()(m,{VCol:u.a,VIcon:d.a,VRow:g.a})}}]);