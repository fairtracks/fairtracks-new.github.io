(window.webpackJsonp=window.webpackJsonp||[]).push([[33,43,48,51],{1115:function(t,e,i){"use strict";var n=i(1132);e.a={computed:{markdownFiles:function(){return this.markdownFilesDir?this.$loadMarkdownFilesInDir(this.markdownFilesDir):[]}},methods:{compileMarkdown:function(t){return t&&"string"==typeof t?n.marked.parseInline(t,[]):t}}}},1118:function(t,e,i){"use strict";i.r(e);var n={props:{title:{type:String,default:""}},data:function(){return{componentId:"ui-minor-title"}}},s=i(22),r=Object(s.a)(n,(function(){var t=this;return(0,t._self._c)("h3",{staticClass:"text-h4 font-weight-bold mb-5"},[t._v(t._s(t.title))])}),[],!1,null,null,null);e.default=r.exports},1121:function(t,e,i){"use strict";i.r(e);var n={mixins:[i(1115).a],props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},scaleDownAtSm:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-main-title"}}},s=i(22),r=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-center font-weight-black mt-4 mb-8",class:t.scaleDownAtSm?"text-sm-h3":"text-md-h3",domProps:{textContent:t._s(t.title)}}),t._v(" "),e("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-8",class:t.scaleDownAtSm?"text-sm-h5":"text-md-h5",domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),t.ingress?e("h4",{staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}):e("h4",{staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic"},[t._t("ingress")],2),t._v(" "),t.info?e("p",{staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}}):e("p",{staticClass:"text-subtitle-1 font-weight-light text-center mb-4"},[t._t("info")],2)])}),[],!1,null,null,null);e.default=r.exports},1176:function(t,e,i){"use strict";i.r(e);var n={mixins:[i(1115).a],props:{markdownFilesDir:{type:String,required:!0}},data:function(){return{componentId:"ui-card-matrix"}},computed:{subsectionId:function(){return this.markdownFilesDir.split("/")[1]}},methods:{createCardId:function(t){return"".concat(this.subsectionId,"_c_").concat(t)}}},s=i(22),r=i(25),a=i.n(r),o=i(1104),l=i(1105),c=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("v-row",{staticClass:"pa-0 pb-16 px-4",attrs:{"fill-height":"",justify:"space-around"}},t._l(t.markdownFiles,(function(i,n){return e("v-col",{key:t.createCardId(n),attrs:{id:t.createCardId(n),cols:"auto"}},[t._t("default",null,{subSectionId:t.subsectionId,cardId:t.createCardId(n),card:i,imageAsset:i.img?t.$getImageAssetObjectFromPathArray(i.img):null})],2)})),1)}),[],!1,null,null,null);e.default=c.exports;a()(c,{VCol:o.a,VRow:l.a})},1217:function(t,e,i){"use strict";i.r(e);var n={mixins:[i(1115).a],props:{markdownFilesDir:{type:String,required:!0}},data:function(){return{componentId:"sections-card-matrix-sub-sections"}}},s=i(22),r=i(25),a=i.n(r),o=i(1104),l=i(1105),c=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("div",t._l(t.markdownFiles,(function(i){return e("section",{key:i.id,attrs:{id:i.id}},[!i.subSection&&(i.title||i.ingress||i.info)?e("v-row",{staticClass:"pt-16 px-8 pb-8"},[e("v-col",{attrs:{cols:"12"}},[e("UiMainTitle",{attrs:{title:i.title,ingress:i.ingress,info:i.info}})],1)],1):t._e(),t._v(" "),i.subSection&&i.title?e("v-row",{staticClass:"px-8 pt-8 pb-8",attrs:{id:"".concat(i.id,"_title"),justify:"center"}},[e("UiMinorTitle",{attrs:{title:i.title}})],1):t._e(),t._v(" "),i.subSection?e("UiCardMatrix",{attrs:{"markdown-files-dir":[t.markdownFilesDir,i.id].join("/")},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.cardId,n=e.card,s=e.imageAsset;return[t._t("default",null,{cardId:i,card:n,imageAsset:s})]}}],null,!0)}):t._e()],1)})),0)}),[],!1,null,null,null);e.default=c.exports;a()(c,{UiMainTitle:i(1121).default,UiMinorTitle:i(1118).default,UiCardMatrix:i(1176).default}),a()(c,{VCol:o.a,VRow:l.a})}}]);