(window.webpackJsonp=window.webpackJsonp||[]).push([[31,40],{1008:function(t,e,a){"use strict";var s=a(135),n=a(33),o=a(8),i=a(10);e.a=Object(o.a)(s.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(i.c)("v-hover should only contain a single element",this),t)):(Object(i.c)("v-hover is missing a default scopedSlot or bound value",this),null);var t}})},1014:function(t,e,a){var s=a(1042);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(12).default)("7a61d650",s,!0,{sourceMap:!1})},1041:function(t,e,a){"use strict";a(1014)},1042:function(t,e,a){var s=a(11)(!1);s.push([t.i,".zoom{-webkit-transform:scale(1.025) translateY(-10px);transform:scale(1.025) translateY(-10px)}.notzoom,.zoom{transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}",""]),t.exports=s},1077:function(t,e,a){"use strict";a.r(e);var s={props:{title:{type:String,default:""},cards:{type:Array,default:function(){return[]}}}},n=(a(1041),a(29)),o=a(44),i=a.n(o),r=a(233),l=a(972),u=a(1008),c=a(973),d=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("v-row",{staticClass:"ma-0 pb-4",attrs:{"no-gutters":""}},[a("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),a("v-col",{staticClass:"ma-0",attrs:{cols:"12"}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.hover;return t._l(t.cards,(function(e,n){return a("v-card",{key:"c_"+n,staticClass:"transition-swing mx-auto",class:s?"zoom":"notzoom",staticStyle:{"z-index":"2"},attrs:{elevation:s?24:2,href:e.link?e.link:null,ripple:!1,"max-width":e.maxWidth?e.maxWidth:null},on:{click:function(e){return t.$emit("btn-click",!0)}}},[a("UiSmartImg",{staticClass:"ma-6",attrs:{contain:"","image-asset":t.$getImageAssetObject("images",e.img[0],e.img[1])}})],1)}))}}])})],1)],1)],1)}),[],!1,null,null,null);e.default=d.exports;i()(d,{UiMinorTitle:a(985).default,UiSmartImg:a(252).default}),i()(d,{VCard:r.a,VCol:l.a,VHover:u.a,VRow:c.a})},985:function(t,e,a){"use strict";a.r(e);var s={props:{title:{type:String,default:""}}},n=a(29),o=Object(n.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"text-h4 font-weight-bold mb-5"},[t._v(t._s(t.title))])}),[],!1,null,null,null);e.default=o.exports}}]);