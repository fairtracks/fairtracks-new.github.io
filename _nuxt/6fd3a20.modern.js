(window.webpackJsonp=window.webpackJsonp||[]).push([[48,43,46],{1043:function(e,t,a){"use strict";a.r(t);var r=a(4),i={asyncData(e){var{store:t}=e,a=t.getters[r.GITHUB_G_GET_ALL_REPOS],i={};for(var s of a)i[s.name]=[{title:"Repository URL",value:t.getters[r.GITHUB_G_GET_REPO_URL](s),clientRender:!1},{title:"Open issues",value:t.getters[r.GITHUB_G_GET_REPO_OPEN_ISSUES](s),clientRender:!1},{title:"Main programming language",value:t.getters[r.GITHUB_G_GET_REPO_LANGUAGE](s),clientRender:!1},{title:"Time of first commit",value:t.getters[r.GITHUB_G_GET_REPO_FIRST_COMMIT_DATE](s),clientRender:"relativeDate"},{title:"Time of most recent commit",value:t.getters[r.GITHUB_G_GET_REPO_LAST_COMMIT_DATE](s),clientRender:"relativeDate"},{title:s.parentCommit?'#Commits (children of parent commit "'.concat(s.parentCommit,'")'):"#Commits (total)",value:t.getters[r.GITHUB_G_GET_REPO_COMMIT_COUNT](s),clientRender:!1},{title:"Top 3 committers",value:t.getters[r.GITHUB_G_GET_REPO_TOP_COMMITTERS](s),clientRender:!1}];return{repos:a,repoInfoItems:i}},data(){return{keyUpdateIndex:0,pageHeader:"Code",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","VS.svg"),this.$getImageAssetObject("images","tracktypes","SF.svg"),this.$getImageAssetObject("images","tracktypes","F.svg")]}},head:()=>({title:"Code",meta:[]}),created(){this.timer=setInterval(this.forceRerender,6e4)},mounted(){this.forceRerender()},methods:{renderRelativeDate(e){return this.$dayjs(e).fromNow()},forceRerender(){this.keyUpdateIndex+=1}}},s=a(19),n=a(25),l=a.n(n),o=a(203),c=a(150),d=a(849),g=a(859),u=a(1037),m=a(195),p=a(103),v=a(40),_=a(850),h=Object(s.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("UiPageHeaderBanner",{attrs:{"page-header":e.pageHeader,"page-header-images":e.pageHeaderImages}}),e._v(" "),a("v-data-iterator",{attrs:{items:e.repos,"item-key":"repo"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.items;return[a("v-container",[a("v-row",e._l(r,(function(t,r){return a("v-col",{key:"r_"+r,attrs:{cols:"12"}},[a("v-card",[a("v-card-title",[e._v(e._s(t.title)+" ")]),e._v(" "),a("v-list",{attrs:{"two-line":""}},e._l(e.repoInfoItems[t.name],(function(t,i){return a("v-list-item",{key:"i_"+r+"_"+i},[a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.title))]),e._v(" "),t.clientRender?"relativeDate"===t.clientRender?a("v-list-item-subtitle",[a("client-only",{key:"i_"+r+"_"+i+"_"+e.keyUpdateIndex,attrs:{placeholder:"Loading..."}},[e._v("\n                        "+e._s(e.renderRelativeDate(t.value))+"\n                      ")])],1):e._e():a("v-list-item-subtitle",[e._v(e._s(t.value))])],1)],1)})),1)],1)],1)})),1)],1)]}}])})],1)}),[],!1,null,null,null);t.default=h.exports;l()(h,{UiPageHeaderBanner:a(868).default}),l()(h,{VCard:o.a,VCardTitle:c.d,VCol:d.a,VContainer:g.a,VDataIterator:u.a,VList:m.a,VListItem:p.a,VListItemContent:v.a,VListItemSubtitle:v.b,VListItemTitle:v.c,VRow:_.a})},860:function(e,t,a){var r=a(863);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a(11).default)("d1fdbff0",r,!0,{sourceMap:!1})},861:function(e,t,a){var r=a(867);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a(11).default)("8ae11210",r,!0,{sourceMap:!1})},862:function(e,t,a){"use strict";a(860)},863:function(e,t,a){var r=a(10)(!1);r.push([e.i,".cover-background[data-v-6ced52ec]{background-size:cover;background-position:50%}",""]),e.exports=r},864:function(e,t,a){"use strict";a.r(t);var r={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},alt:{type:String,default:""}}},i=(a(862),a(19)),s=Object(i.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":e.imageAsset,height:e.height,width:e.width,"min-height":e.minHeight,alt:e.alt,behind:""},scopedSlots:e._u([{key:"svgImgComponent",fn:function(e){var t=e.imageAsset,r=e.altText;return[a("div",{staticClass:"lazyload fill-height cover-background",attrs:{"data-bgset":t.optimizedImagePath,"data-sizes":"auto",alt:r}})]}},{key:"imgComponent",fn:function(e){var t=e.imageAsset,r=e.altText;return[a("div",{staticClass:"lazyload fill-height attach-classes cover-background",attrs:{"data-bgset":t.responsiveWebpImage.srcSet+" [type: image/webp] | "+t.responsiveImage.srcSet,"data-sizes":"auto",alt:r}})]}}])})}),[],!1,null,"6ced52ec",null);t.default=s.exports;installComponents(s,{UiSmartImgFileTypesWrapper:a(403).default})},866:function(e,t,a){"use strict";a(861)},867:function(e,t,a){var r=a(10)(!1);r.push([e.i,".gradient-fill-header .v-responsive__content{background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.banner{max-height:150px}",""]),e.exports=r},868:function(e,t,a){"use strict";a.r(t);var r={props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:()=>[]}}},i=(a(866),a(19)),s=a(25),n=a.n(s),l=a(849),o=a(202),c=a(192),d=a(850),g=Object(i.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-responsive",{attrs:{"aspect-ratio":567/56.3,"max-height":"150px","min-height":"75px"}},[a("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},e._l(e.pageHeaderImages,(function(e,t){return a("v-col",{key:t,attrs:{cols:"4"}},[a("v-row",{staticClass:"ma-0 gradient-fill-header",attrs:{justify:"center"}},[a("v-responsive",{staticStyle:{"z-index":"2"},attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[a("UiSmartBackgroundImg",{attrs:{height:"56.3",width:"189","min-height":"75","image-asset":e}})],1)],1)],1)})),1),e._v(" "),a("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[a("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[e._v("\n      "+e._s(e.pageHeader.toUpperCase())+"\n    ")])])],1)}),[],!1,null,null,null);t.default=g.exports;n()(g,{UiSmartBackgroundImg:a(864).default}),n()(g,{VCol:l.a,VOverlay:o.a,VResponsive:c.a,VRow:d.a})}}]);