(window.webpackJsonp=window.webpackJsonp||[]).push([[51,30,39,41,42,43,46],{1023:function(t,e,a){"use strict";a.r(e);var i={data(){return{pageHeader:"Material",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","LVP.svg"),this.$getImageAssetObject("images","tracktypes","LSF.svg"),this.$getImageAssetObject("images","tracktypes","LF.svg")],cardMatrices:{id:"material",title:"Header?",ingress:"Some text here?",info:"Some text here?",subsections:[{id:"publications",subtitle:"Publications",cards:[{previewImg:"f1000-manuscript-2021.png",title:"Recommendations for the FAIRification of genomic track metadata"},{previewImg:"f1000-manuscript-2021.png",title:"Recommendations for the FAIRification of genomic track metadata"},{previewImg:"f1000-manuscript-2021.png",title:"Recommendations for the FAIRification of genomic track metadata"}]},{id:"posters",subtitle:"Posters",cards:[{previewImg:"f1000-manuscript-2021.png",title:"Recommendations for the FAIRification of genomic track metadata"},{previewImg:"f1000-manuscript-2021.png",title:"Recommendations for the FAIRification of genomic track metadata"}]}]}}},head:()=>({title:"Material",meta:[]})},s=a(24),r=a(33),n=a.n(r),l=a(838),c=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"fill-height",class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4"},[a("UiPageHeaderBanner",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),a("SectionsCardMatrixSubSections",{attrs:{"card-matrices":t.cardMatrices},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.subSectionId,i=t.card;return[a("UiMaterialCard",{attrs:{"sub-section-id":e,card:i}})]}}])}),t._v(" "),a("v-spacer",{class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4"})],1)}),[],!1,null,null,null);e.default=c.exports;n()(c,{UiPageHeaderBanner:a(849).default,UiMaterialCard:a(946).default,SectionsCardMatrixSubSections:a(889).default}),n()(c,{VSpacer:l.a})},844:function(t,e,a){var i=a(848);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(11).default)("8ae11210",i,!0,{sourceMap:!1})},845:function(t,e,a){"use strict";a.r(e);var i={props:{imageAsset:{type:Object,required:!0}},data:()=>({fullCoverStyle:"background-position: center center; position: absolute; background-size: cover; width: 100%;object-fit: contain;z-index: -1"}),computed:{altText(){return this.alt?this.alt:this.imageAsset.filename}}},s=a(24),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[t.imageAsset.isSvgImage?a("div",{staticClass:"lazyload fill-height",style:t.fullCoverStyle,attrs:{"data-bgset":t.imageAsset.optimizedImagePath,"data-sizes":"auto"}}):t._e(),t._v(" "),t.imageAsset.isSvgImage?t._e():a("div",{staticClass:"lazyload fill-height",style:t.fullCoverStyle,attrs:{"data-bgset":t.imageAsset.responsiveWebpImage.srcSet+" [type: image/webp] | "+t.imageAsset.responsiveImage.srcSet,"data-sizes":"auto"}})])}),[],!1,null,null,null);e.default=r.exports},846:function(t,e,a){"use strict";a.r(e);var i={props:{title:{type:String,default:""}}},s=a(24),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"text-h4 font-weight-bold mb-5"},[t._v(t._s(t.title))])}),[],!1,null,null,null);e.default=r.exports},847:function(t,e,a){"use strict";a(844)},848:function(t,e,a){var i=a(10)(!1);i.push([t.i,".gradient-fill-header .v-responsive__content{background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.banner{max-height:150px}",""]),t.exports=i},849:function(t,e,a){"use strict";a.r(e);var i={props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:()=>[]}}},s=(a(847),a(24)),r=a(33),n=a.n(r),l=a(833),c=a(202),o=a(192),d=a(834),u=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-responsive",{attrs:{"aspect-ratio":567/56.3,"max-height":"150px","min-height":"75px"}},[a("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(t,e){return a("v-col",{key:e,attrs:{cols:"4"}},[a("v-row",{staticClass:"ma-0 gradient-fill-header",attrs:{justify:"center"}},[a("v-responsive",{staticStyle:{"z-index":"2"},attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[a("UiSmartBackgroundImg",{attrs:{"image-asset":t}})],1)],1)],1)})),1),t._v(" "),a("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[a("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n      "+t._s(t.pageHeader.toUpperCase())+"\n    ")])])],1)}),[],!1,null,null,null);e.default=u.exports;n()(u,{UiSmartBackgroundImg:a(845).default}),n()(u,{VCol:l.a,VOverlay:c.a,VResponsive:o.a,VRow:d.a})},850:function(t,e,a){"use strict";a.r(e);var i=a(852),s={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""}},methods:{compileMarkdown:t=>i.marked.parseInline(t,[])}},r=a(24),n=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-md-h3 text-center font-weight-black mt-4 mb-8",domProps:{textContent:t._s(t.title)}}),t._v(" "),a("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 text-md-h5 font-weight-medium font-italic text-center mb-8",domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),a("h4",{directives:[{name:"show",rawName:"v-show",value:t.ingress,expression:"ingress"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.info,expression:"info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}})])}),[],!1,null,null,null);e.default=n.exports},876:function(t,e,a){var i=a(909);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(11).default)("157acd8f",i,!0,{sourceMap:!1})},889:function(t,e,a){"use strict";a.r(e);var i={props:{cardMatrices:{type:Object,default:()=>{}}},methods:{createCardId:(t,e)=>"".concat(t,"_c_").concat(e)}},s=a(24),r=a(33),n=a.n(r),l=a(833),c=a(834),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{id:t.cardMatrices.id}},[t.cardMatrices.title?a("v-row",{staticClass:"pt-16 px-8 pb-8"},[a("v-col",{attrs:{cols:"12"}},[a("UiMainTitle",{attrs:{title:t.cardMatrices.title,ingress:t.cardMatrices.ingress,info:t.cardMatrices.info}})],1)],1):t._e(),t._v(" "),t._l(t.cardMatrices.subsections,(function(e){return a("section",{key:e.id,attrs:{id:e.id}},[e.subtitle?a("v-row",{staticClass:"px-8 pt-8 pb-8",attrs:{id:e.id+"_subtitle",justify:"center"}},[a("UiMinorTitle",{attrs:{title:e.subtitle}})],1):t._e(),t._v(" "),a("v-row",{staticClass:"pa-0 pb-16 px-8",attrs:{"fill-height":"",justify:"start"}},t._l(e.cards,(function(i,s){return a("v-col",{key:t.createCardId(e.id,s),attrs:{id:t.createCardId(e.id,s),cols:"12",md:"6",lg:"4",xl:"3"}},[t._t("default",null,{subSectionId:e.id,cardId:t.createCardId(e.id,s),card:i})],2)})),1)],1)}))],2)}),[],!1,null,null,null);e.default=o.exports;n()(o,{UiMainTitle:a(850).default,UiMinorTitle:a(846).default}),n()(o,{VCol:l.a,VRow:c.a})},908:function(t,e,a){"use strict";a(876)},909:function(t,e,a){var i=a(10)(!1);i.push([t.i,".card-title[data-v-8c80a356]{word-break:normal;line-height:1.7rem!important}",""]),t.exports=i},946:function(t,e,a){"use strict";a.r(e);var i={props:{subSectionId:{type:String,required:!0},card:{type:Object,default:()=>{}}}},s=(a(908),a(24)),r=a(33),n=a.n(r),l=a(203),c=a(150),o=a(833),d=a(834),u=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto",attrs:{width:"380"}},[a("v-row",{staticClass:"ma-2",attrs:{justify:"center","no-gutters":""}},[a("v-col",{attrs:{cols:"6"}},[a("UiSmartImg",{attrs:{"image-asset":t.$getImageAssetObject("materials","previews",t.card.previewImg),"max-height":"300"}})],1),t._v(" "),a("v-col",{attrs:{cols:"6"}},[a("v-card-title",{staticClass:"text-subtitle-1 text-left font-weight-bold card-title"},[t._v("\n        "+t._s(t.card.title)+"\n      ")])],1)],1)],1)}),[],!1,null,"8c80a356",null);e.default=u.exports;n()(u,{UiSmartImg:a(222).default}),n()(u,{VCard:l.a,VCardTitle:c.d,VCol:o.a,VRow:d.a})}}]);