(window.webpackJsonp=window.webpackJsonp||[]).push([[38,34,52,57],{1076:function(t,e,s){},1079:function(t,e,s){"use strict";s.r(e);var a={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}},data:function(){return{componentId:"ui-no-script-background-img"}}},i=s(22),n=Object(i.a)(a,(function(){return(0,this._self._c)("noscript",{inlineTemplate:{render:function(){var t=this;return(0,t._self._c)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"); ').concat(t.styleText)})},staticRenderFns:[]}})}),[],!1,null,null,null);e.default=n.exports},1080:function(t,e,s){"use strict";s.r(e);var a={mixins:[s(1074).a],props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},scaleDownAtSm:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-main-title"}}},i=s(22),n=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("div",[e("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-center font-weight-black mt-4 mb-8",class:t.scaleDownAtSm?"text-sm-h3":"text-md-h3",domProps:{textContent:t._s(t.title)}}),t._v(" "),e("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-8",class:t.scaleDownAtSm?"text-sm-h5":"text-md-h5",domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),t.ingress?e("h4",{staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}):e("h4",{staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic"},[t._t("ingress")],2),t._v(" "),t.info?e("p",{staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}}):e("p",{staticClass:"text-subtitle-1 font-weight-light text-center mb-4"},[t._t("info")],2)])}),[],!1,null,null,null);e.default=n.exports},1081:function(t,e,s){"use strict";s(1076)},1088:function(t,e,s){"use strict";s.r(e);var a={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1},notResponsive:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-smart-background-img"}},methods:{getDynamicClasses:function(t,e){var s=[];return t?s.push("contain-background"):s.push("cover-background"),e&&s.push("lazyload"),s.join(" ")}}},i=(s(1081),s(22)),n=s(25),o=s.n(n),r=s(186),l=Object(i.a)(a,(function(){var t=this,e=t._self._c;return t.imageAsset.isSvgImage||t.$config.optimizeImages?e("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,alt:t.alt,behind:"","not-responsive":t.notResponsive},scopedSlots:t._u([{key:"nonRespImgComponent",fn:function(s){var a=s.imageAsset,i=s.styleText,n=s.lazyLoad;return[e("div",{staticClass:"fill-height center-background attach-classes hide-with-noscript",class:t.getDynamicClasses(t.contain,n),style:n?i:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"); ').concat(i),attrs:{"data-bgset":n?a.optimizedImagePath:null}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":a,"style-text":i}})]}},{key:"respImgComponent",fn:function(s){var a=s.imageAsset,i=s.styleText;return[e("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:i,attrs:{"data-bgset":"".concat(a.responsiveWebpImage.srcSet," [type: image/webp] |\n                      ").concat(a.responsiveImage.srcSet),"data-sizes":"auto"}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":a,"style-text":i}})]}}],null,!1,876970809)}):e("v-img",{class:t.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:t.imageAsset.optimizedImagePath,alt:t.alt,contain:t.contain,"min-height":t.minHeight}})}),[],!1,null,null,null);e.default=l.exports;o()(l,{UiNoScriptBackgroundImg:s(1079).default,UiSmartImgFileTypesWrapper:s(458).default}),o()(l,{VImg:r.a})},1125:function(t,e,s){},1155:function(t,e,s){"use strict";s(1125)},1194:function(t,e,s){"use strict";s.r(e);var a=s(69),i={mixins:[s(1074).a],props:{sectionId:{type:String,required:!0},mainMarkdownFile:{type:Object,required:!0},carouselId:{type:String,default:""},darkBackground:{type:Boolean,default:!1}},data:function(){return{componentId:"sections-overview-intro",markdownFilesDir:"index/intro",mdiWeb:a.mdiWeb}}},n=(s(1155),s(22)),o=s(25),r=s.n(o),l=s(246),c=s(1063),u=s(241),d=s(249),g=s(239),m=s(1064),p=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("section",{class:t.$vuetify.theme.dark?null:"light-background",attrs:{id:t.sectionId}},[e("v-row",{attrs:{"no-gutters":"",align:"center"}},[e("v-col",{staticClass:"pt-8 pa-0",attrs:{cols:"12",lg:"6"}},[e("v-responsive",{staticClass:"mx-auto text-center",attrs:{"max-width":"600"}},[e("v-avatar",{staticClass:"mb-8",attrs:{color:"primary",size:"70"}},[e("v-icon",{attrs:{"x-large":"",dark:""}},[t._v(t._s(t.mdiWeb))])],1),t._v(" "),e("UiMainTitle",{attrs:{title:t.mainMarkdownFile.title,subtitle:t.mainMarkdownFile.subtitle,"scale-down-at-sm":""},scopedSlots:t._u([{key:"ingress",fn:function(){return[e("nuxt-content",{attrs:{document:t.mainMarkdownFile}})]},proxy:!0}])})],1)],1),t._v(" "),e("v-col",{staticClass:"pt-8 pb-0",attrs:{cols:"12",lg:"6"}},[e("div",{staticClass:"thin-border",style:"border-color: ".concat(t.$vuetify.theme.dark?"var(--v-primary-lighten1)":"var(--secondary)")},[e("v-responsive",{staticClass:"ma-0 px-0",class:t.$vuetify.theme.dark?"primary lighten-1":"secondary",attrs:{height:"40",width:"100%"}},[e("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[e("h5",{staticClass:"text-h5 font-weight-black text-center"},[t._v("News")])])],1),t._v(" "),e("SectionsCarouselLayout",{attrs:{"slides-files-dir":"index/news","carousel-id":"news",height:"500px"}})],1)])],1),t._v(" "),e("v-row",{staticClass:"py-8",attrs:{justify:"space-around"}},t._l(t.markdownFiles,(function(s,a){return e("v-col",{key:a,staticClass:"pa-4",attrs:{cols:"12",lg:"4",md:"6"}},[e("v-responsive",{staticClass:"mx-auto",attrs:{"max-width":"500px"}},[e("v-row",{staticClass:"px-4 px-lg-8",attrs:{"no-gutters":"",justify:"space-between"}},[e("v-col",{attrs:{cols:s.callout?10:12}},[e("div",{staticClass:"pr-2"},[e("div",{staticClass:"text--disabled",domProps:{textContent:t._s(s.subtitle)}}),t._v(" "),e("h4",{staticClass:"text-uppercase mt-1 mb-4",staticStyle:{"letter-spacing":"0.15em"},domProps:{textContent:t._s(s.title)}}),t._v(" "),e("nuxt-content",{attrs:{document:s}})],1)]),t._v(" "),s.callout?e("v-col",{attrs:{cols:"2"}},[e("v-row",{attrs:{"no-gutters":"",justify:"end"}},[e("span",{staticClass:"text-h3 text-right font-weight-bold grey--text",style:"opacity: ".concat(t.$vuetify.theme.dark?"0.5":"0.2")},[t._v(t._s(s.callout)+"\n                ")])])],1):t._e()],1)],1)],1)})),1)],1)}),[],!1,null,"7db19c52",null);e.default=p.exports;r()(p,{UiMainTitle:s(1080).default,SectionsCarouselLayout:s(1168).default}),r()(p,{VAvatar:l.a,VCol:c.a,VIcon:u.a,VOverlay:d.a,VResponsive:g.a,VRow:m.a})}}]);