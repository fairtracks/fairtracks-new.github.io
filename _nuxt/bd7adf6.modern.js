(window.webpackJsonp=window.webpackJsonp||[]).push([[41,44],{835:function(e,t,a){var s=a(839);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a(11).default)("8ae11210",s,!0,{sourceMap:!1})},836:function(e,t,a){"use strict";a.r(t);var s={props:{imageAsset:{type:Object,required:!0}},data:()=>({fullCoverStyle:"background-position: center center; position: absolute; background-size: cover; width: 100%;object-fit: contain;z-index: -1"}),computed:{altText(){return this.alt?this.alt:this.imageAsset.filename}}},r=a(24),i=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[e.imageAsset.isSvgImage?a("div",{staticClass:"lazyload fill-height",style:e.fullCoverStyle,attrs:{"data-bgset":e.imageAsset.optimizedImagePath,"data-sizes":"auto"}}):e._e(),e._v(" "),e.imageAsset.isSvgImage?e._e():a("div",{staticClass:"lazyload fill-height",style:e.fullCoverStyle,attrs:{"data-bgset":e.imageAsset.responsiveWebpImage.srcSet+" [type: image/webp] | "+e.imageAsset.responsiveImage.srcSet,"data-sizes":"auto"}})])}),[],!1,null,null,null);t.default=i.exports},838:function(e,t,a){"use strict";a(835)},839:function(e,t,a){var s=a(10)(!1);s.push([e.i,".gradient-fill-header .v-responsive__content{background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.banner{max-height:150px}",""]),e.exports=s},840:function(e,t,a){"use strict";a.r(t);var s={props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:()=>[]}}},r=(a(838),a(24)),i=a(33),n=a.n(i),l=a(824),o=a(199),c=a(189),g=a(825),u=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-responsive",{attrs:{"aspect-ratio":567/56.3,"max-height":"150px","min-height":"75px"}},[a("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},e._l(e.pageHeaderImages,(function(e,t){return a("v-col",{key:t,attrs:{cols:"4"}},[a("v-row",{staticClass:"ma-0 gradient-fill-header",attrs:{justify:"center"}},[a("v-responsive",{staticStyle:{"z-index":"2"},attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[a("UiSmartBackgroundImg",{attrs:{"image-asset":e}})],1)],1)],1)})),1),e._v(" "),a("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[a("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[e._v("\n      "+e._s(e.pageHeader.toUpperCase())+"\n    ")])])],1)}),[],!1,null,null,null);t.default=u.exports;n()(u,{UiSmartBackgroundImg:a(836).default}),n()(u,{VCol:l.a,VOverlay:o.a,VResponsive:c.a,VRow:g.a})}}]);