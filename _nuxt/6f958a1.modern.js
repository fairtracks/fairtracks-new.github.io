(window.webpackJsonp=window.webpackJsonp||[]).push([[43,46],{860:function(t,e,a){var r=a(863);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(11).default)("d1fdbff0",r,!0,{sourceMap:!1})},861:function(t,e,a){var r=a(867);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(11).default)("8ae11210",r,!0,{sourceMap:!1})},862:function(t,e,a){"use strict";a(860)},863:function(t,e,a){var r=a(10)(!1);r.push([t.i,".cover-background[data-v-6ced52ec]{background-size:cover;background-position:50%}",""]),t.exports=r},864:function(t,e,a){"use strict";a.r(e);var r={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},alt:{type:String,default:""}}},s=(a(862),a(19)),i=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,alt:t.alt,behind:""},scopedSlots:t._u([{key:"svgImgComponent",fn:function(t){var e=t.imageAsset,r=t.altText;return[a("div",{staticClass:"lazyload fill-height cover-background",attrs:{"data-bgset":e.optimizedImagePath,"data-sizes":"auto",alt:r}})]}},{key:"imgComponent",fn:function(t){var e=t.imageAsset,r=t.altText;return[a("div",{staticClass:"lazyload fill-height attach-classes cover-background",attrs:{"data-bgset":e.responsiveWebpImage.srcSet+" [type: image/webp] | "+e.responsiveImage.srcSet,"data-sizes":"auto",alt:r}})]}}])})}),[],!1,null,"6ced52ec",null);e.default=i.exports;installComponents(i,{UiSmartImgFileTypesWrapper:a(403).default})},866:function(t,e,a){"use strict";a(861)},867:function(t,e,a){var r=a(10)(!1);r.push([t.i,".gradient-fill-header .v-responsive__content{background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.banner{max-height:150px}",""]),t.exports=r},868:function(t,e,a){"use strict";a.r(e);var r={props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:()=>[]}}},s=(a(866),a(19)),i=a(25),n=a.n(i),o=a(849),l=a(202),c=a(192),g=a(850),u=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-responsive",{attrs:{"aspect-ratio":567/56.3,"max-height":"150px","min-height":"75px"}},[a("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(t,e){return a("v-col",{key:e,attrs:{cols:"4"}},[a("v-row",{staticClass:"ma-0 gradient-fill-header",attrs:{justify:"center"}},[a("v-responsive",{staticStyle:{"z-index":"2"},attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[a("UiSmartBackgroundImg",{attrs:{height:"56.3",width:"189","min-height":"75","image-asset":t}})],1)],1)],1)})),1),t._v(" "),a("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[a("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n      "+t._s(t.pageHeader.toUpperCase())+"\n    ")])])],1)}),[],!1,null,null,null);e.default=u.exports;n()(u,{UiSmartBackgroundImg:a(864).default}),n()(u,{VCol:o.a,VOverlay:l.a,VResponsive:c.a,VRow:g.a})}}]);