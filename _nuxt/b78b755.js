(window.webpackJsonp=window.webpackJsonp||[]).push([[48,43,46],{1e3:function(e,t,r){var a=r(11)(!1);a.push([e.i,".gradient-fill-header .v-responsive__content{background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.banner{max-height:150px}",""]),e.exports=a},1001:function(e,t,r){"use strict";r.r(t);var a={props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:function(){return[]}}}},n=(r(999),r(29)),i=r(44),s=r.n(i),o=r(985),l=r(235),c=r(225),u=r(986),d=Object(n.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-responsive",{attrs:{"aspect-ratio":567/56.3,"max-height":"150px","min-height":"75px"}},[r("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},e._l(e.pageHeaderImages,(function(e,t){return r("v-col",{key:t,attrs:{cols:"4"}},[r("v-row",{staticClass:"ma-0 gradient-fill-header",attrs:{justify:"center"}},[r("v-responsive",{staticStyle:{"z-index":"2"},attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[r("UiSmartBackgroundImg",{attrs:{"image-asset":e}})],1)],1)],1)})),1),e._v(" "),r("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[r("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[e._v("\n      "+e._s(e.pageHeader.toUpperCase())+"\n    ")])])],1)}),[],!1,null,null,null);t.default=d.exports;s()(d,{UiSmartBackgroundImg:r(997).default}),s()(d,{VCol:o.a,VOverlay:l.a,VResponsive:c.a,VRow:u.a})},1173:function(e,t,r){"use strict";r.r(t);var a=r(8);function n(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){l=!0,s=e},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw s}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var s={asyncData:function(e){var t,r=e.store,i=r.getters[a.GITHUB_G_GET_ALL_REPOS],s={},o=n(i);try{for(o.s();!(t=o.n()).done;){var l=t.value;s[l.name]=[{title:"Repository URL",value:r.getters[a.GITHUB_G_GET_REPO_URL](l),clientRender:!1},{title:"Open issues",value:r.getters[a.GITHUB_G_GET_REPO_OPEN_ISSUES](l),clientRender:!1},{title:"Main programming language",value:r.getters[a.GITHUB_G_GET_REPO_LANGUAGE](l),clientRender:!1},{title:"Time of first commit",value:r.getters[a.GITHUB_G_GET_REPO_FIRST_COMMIT_DATE](l),clientRender:"relativeDate"},{title:"Time of most recent commit",value:r.getters[a.GITHUB_G_GET_REPO_LAST_COMMIT_DATE](l),clientRender:"relativeDate"},{title:l.parentCommit?'#Commits (children of parent commit "'.concat(l.parentCommit,'")'):"#Commits (total)",value:r.getters[a.GITHUB_G_GET_REPO_COMMIT_COUNT](l),clientRender:!1},{title:"Top 3 committers",value:r.getters[a.GITHUB_G_GET_REPO_TOP_COMMITTERS](l),clientRender:!1}]}}catch(e){o.e(e)}finally{o.f()}return{repos:i,repoInfoItems:s}},data:function(){return{keyUpdateIndex:0,pageHeader:"Code",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","VS.svg"),this.$getImageAssetObject("images","tracktypes","SF.svg"),this.$getImageAssetObject("images","tracktypes","F.svg")]}},head:function(){return{title:"Code",meta:[]}},created:function(){this.timer=setInterval(this.forceRerender,6e4)},mounted:function(){this.forceRerender()},methods:{renderRelativeDate:function(e){return this.$dayjs(e).fromNow()},forceRerender:function(){this.keyUpdateIndex+=1}}},o=r(29),l=r(44),c=r.n(l),u=r(236),d=r(184),m=r(985),g=r(995),v=r(1167),f=r(228),p=r(129),_=r(54),h=r(986),y=Object(o.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("UiPageHeaderBanner",{attrs:{"page-header":e.pageHeader,"page-header-images":e.pageHeaderImages}}),e._v(" "),r("v-data-iterator",{attrs:{items:e.repos,"item-key":"repo"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.items;return[r("v-container",[r("v-row",e._l(a,(function(t,a){return r("v-col",{key:"r_"+a,attrs:{cols:"12"}},[r("v-card",[r("v-card-title",[e._v(e._s(t.title)+" ")]),e._v(" "),r("v-list",{attrs:{"two-line":""}},e._l(e.repoInfoItems[t.name],(function(t,n){return r("v-list-item",{key:"i_"+a+"_"+n},[r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.title))]),e._v(" "),t.clientRender?"relativeDate"===t.clientRender?r("v-list-item-subtitle",[r("client-only",{key:"i_"+a+"_"+n+"_"+e.keyUpdateIndex,attrs:{placeholder:"Loading..."}},[e._v("\n                        "+e._s(e.renderRelativeDate(t.value))+"\n                      ")])],1):e._e():r("v-list-item-subtitle",[e._v(e._s(t.value))])],1)],1)})),1)],1)],1)})),1)],1)]}}])})],1)}),[],!1,null,null,null);t.default=y.exports;c()(y,{UiPageHeaderBanner:r(1001).default}),c()(y,{VCard:u.a,VCardTitle:d.d,VCol:m.a,VContainer:g.a,VDataIterator:v.a,VList:f.a,VListItem:p.a,VListItemContent:_.a,VListItemSubtitle:_.b,VListItemTitle:_.c,VRow:h.a})},996:function(e,t,r){var a=r(1e3);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,r(12).default)("8ae11210",a,!0,{sourceMap:!1})},997:function(e,t,r){"use strict";r.r(t);var a={props:{imageAsset:{type:Object,required:!0}},data:function(){return{fullCoverStyle:"background-position: center center; position: absolute; background-size: cover; width: 100%;object-fit: contain;z-index: -1"}},computed:{altText:function(){return this.alt?this.alt:this.imageAsset.filename}}},n=r(29),i=Object(n.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[e.imageAsset.isSvgImage?r("div",{staticClass:"lazyload fill-height",style:e.fullCoverStyle,attrs:{"data-bgset":e.imageAsset.optimizedImagePath,"data-sizes":"auto"}}):e._e(),e._v(" "),e.imageAsset.isSvgImage?e._e():r("div",{staticClass:"lazyload fill-height",style:e.fullCoverStyle,attrs:{"data-bgset":e.imageAsset.responsiveWebpImage.srcSet+" [type: image/webp] | "+e.imageAsset.responsiveImage.srcSet,"data-sizes":"auto"}})])}),[],!1,null,null,null);t.default=i.exports},999:function(e,t,r){"use strict";r(996)}}]);