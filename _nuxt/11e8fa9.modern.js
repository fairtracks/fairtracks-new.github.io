(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{822:function(e,t,s){"use strict";s.r(t);var a={props:{imageAsset:{type:Object,required:!0}},data:()=>({fullCoverStyle:"background-position: center center; position: absolute; background-size: cover; width: 100%;object-fit: contain;z-index: -1"}),computed:{altText(){return this.alt?this.alt:this.imageAsset.filename}}},i=s(22),l=Object(i.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{},[e.imageAsset.isSvgImage?s("div",{staticClass:"lazyload fill-height",style:e.fullCoverStyle,attrs:{"data-bgset":e.imageAsset.optimizedImagePath,"data-sizes":"auto"}}):e._e(),e._v(" "),e.imageAsset.isSvgImage?e._e():s("div",{staticClass:"lazyload fill-height",style:e.fullCoverStyle,attrs:{"data-bgset":e.imageAsset.responsiveWebpImage.srcSet+" [type: image/webp] | "+e.imageAsset.responsiveImage.srcSet,"data-sizes":"auto"}})])}),[],!1,null,null,null);t.default=l.exports}}]);