(window.webpackJsonp=window.webpackJsonp||[]).push([[40,43],{800:function(e,t,r){var content=r(804);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(10).default)("8ae11210",content,!0,{sourceMap:!1})},801:function(e,t,r){"use strict";r.r(t);var n={props:{imageAsset:{type:Object,required:!0}},data:()=>({fullCoverStyle:"background-position: center center; position: absolute; background-size: cover; width: 100%;object-fit: contain;z-index: -1"}),computed:{altText(){return this.alt?this.alt:this.imageAsset.filename}}},l=r(19),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[e.imageAsset.isSvgImage?r("div",{staticClass:"lazyload fill-height",style:e.fullCoverStyle,attrs:{"data-bgset":e.imageAsset.optimizedImagePath,"data-sizes":"auto"}}):e._e(),e._v(" "),e.imageAsset.isSvgImage?e._e():r("div",{staticClass:"lazyload fill-height",style:e.fullCoverStyle,attrs:{"data-bgset":e.imageAsset.responsiveWebpImage.srcSet+" [type: image/webp] | "+e.imageAsset.responsiveImage.srcSet,"data-sizes":"auto"}})])}),[],!1,null,null,null);t.default=component.exports},803:function(e,t,r){"use strict";r(800)},804:function(e,t,r){var n=r(9)(!1);n.push([e.i,".gradient-fill-header .v-responsive__content{background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.banner{max-height:150px}",""]),e.exports=n},805:function(e,t,r){"use strict";r.r(t);var n={props:{pageHeader:{type:String},pageHeaderImages:{type:Array,default:()=>[]}}},l=(r(803),r(19)),o=r(32),c=r.n(o),d=r(790),v=r(194),h=r(184),m=r(791),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-responsive",{attrs:{"aspect-ratio":567/56.3,"max-height":"150px","min-height":"75px"}},[r("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},e._l(e.pageHeaderImages,(function(e,i){return r("v-col",{key:i,attrs:{cols:"4"}},[r("v-row",{staticClass:"ma-0 gradient-fill-header",attrs:{justify:"center"}},[r("v-responsive",{staticStyle:{"z-index":"2"},attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[r("UiSmartBackgroundImg",{attrs:{"image-asset":e}})],1)],1)],1)})),1),e._v(" "),r("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[r("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[e._v("\n      "+e._s(e.pageHeader.toUpperCase())+"\n    ")])])],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{UiSmartBackgroundImg:r(801).default}),c()(component,{VCol:d.a,VOverlay:v.a,VResponsive:h.a,VRow:m.a})}}]);