(window.webpackJsonp=window.webpackJsonp||[]).push([[46,41,44],{1012:function(e,t,a){"use strict";a.r(t);var s=a(4),r={asyncData(e){var{store:t,$dayjs:a}=e,r=t.getters[s.GITHUB_G_GET_ALL_REPOS],i={};for(var n of r)i[n.name]=[{title:"Repository URL",value:t.getters[s.GITHUB_G_GET_REPO_URL](n),clientRender:!1},{title:"Open issues",value:t.getters[s.GITHUB_G_GET_REPO_OPEN_ISSUES](n),clientRender:!1},{title:"Main programming language",value:t.getters[s.GITHUB_G_GET_REPO_LANGUAGE](n),clientRender:!1},{title:"Time of first commit",value:t.getters[s.GITHUB_G_GET_REPO_FIRST_COMMIT_DATE](n),clientRender:"relativeDate"},{title:"Time of most recent commit",value:t.getters[s.GITHUB_G_GET_REPO_LAST_COMMIT_DATE](n),clientRender:"relativeDate"},{title:n.parentCommit?'#Commits (children of parent commit "'.concat(n.parentCommit,'")'):"#Commits (total)",value:t.getters[s.GITHUB_G_GET_REPO_COMMIT_COUNT](n),clientRender:!1},{title:"Top 3 committers",value:t.getters[s.GITHUB_G_GET_REPO_TOP_COMMITTERS](n),clientRender:!1}];return{repos:r,repoInfoItems:i}},data(){return{pageHeader:"Code",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","VS.svg"),this.$getImageAssetObject("images","tracktypes","SF.svg"),this.$getImageAssetObject("images","tracktypes","F.svg")]}},head:()=>({title:"Code",meta:[]})},i=a(24),n=a(33),l=a.n(n),o=a(203),c=a(150),g=a(829),m=a(839),u=a(1006),d=a(195),v=a(101),_=a(40),p=a(830),f=Object(i.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("UiPageHeaderBanner",{attrs:{"page-header":e.pageHeader,"page-header-images":e.pageHeaderImages}}),e._v(" "),a("v-data-iterator",{attrs:{items:e.repos,"item-key":"repo"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.items;return[a("v-container",[a("v-row",e._l(s,(function(t,s){return a("v-col",{key:"r_"+s,attrs:{cols:"12"}},[a("v-card",[a("v-card-title",[e._v(e._s(t.title)+" ")]),e._v(" "),a("v-list",{attrs:{"two-line":""}},e._l(e.repoInfoItems[t.name],(function(t,r){return a("v-list-item",{key:"i_"+s+"_"+r},[a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.title))]),e._v(" "),t.clientRender?"relativeDate"===t.clientRender?a("v-list-item-subtitle",[a("client-only",[e._v("\n                        "+e._s(e.$dayjs(t.value).fromNow())+"\n                      ")])],1):e._e():a("v-list-item-subtitle",[e._v(e._s(t.value))])],1)],1)})),1)],1)],1)})),1)],1)]}}])})],1)}),[],!1,null,null,null);t.default=f.exports;l()(f,{UiPageHeaderBanner:a(845).default}),l()(f,{VCard:o.a,VCardTitle:c.d,VCol:g.a,VContainer:m.a,VDataIterator:u.a,VList:d.a,VListItem:v.a,VListItemContent:_.a,VListItemSubtitle:_.b,VListItemTitle:_.c,VRow:p.a})},840:function(e,t,a){var s=a(844);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a(11).default)("8ae11210",s,!0,{sourceMap:!1})},841:function(e,t,a){"use strict";a.r(t);var s={props:{imageAsset:{type:Object,required:!0}},data:()=>({fullCoverStyle:"background-position: center center; position: absolute; background-size: cover; width: 100%;object-fit: contain;z-index: -1"}),computed:{altText(){return this.alt?this.alt:this.imageAsset.filename}}},r=a(24),i=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[e.imageAsset.isSvgImage?a("div",{staticClass:"lazyload fill-height",style:e.fullCoverStyle,attrs:{"data-bgset":e.imageAsset.optimizedImagePath,"data-sizes":"auto"}}):e._e(),e._v(" "),e.imageAsset.isSvgImage?e._e():a("div",{staticClass:"lazyload fill-height",style:e.fullCoverStyle,attrs:{"data-bgset":e.imageAsset.responsiveWebpImage.srcSet+" [type: image/webp] | "+e.imageAsset.responsiveImage.srcSet,"data-sizes":"auto"}})])}),[],!1,null,null,null);t.default=i.exports},843:function(e,t,a){"use strict";a(840)},844:function(e,t,a){var s=a(10)(!1);s.push([e.i,".gradient-fill-header .v-responsive__content{background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.banner{max-height:150px}",""]),e.exports=s},845:function(e,t,a){"use strict";a.r(t);var s={props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:()=>[]}}},r=(a(843),a(24)),i=a(33),n=a.n(i),l=a(829),o=a(202),c=a(192),g=a(830),m=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-responsive",{attrs:{"aspect-ratio":567/56.3,"max-height":"150px","min-height":"75px"}},[a("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},e._l(e.pageHeaderImages,(function(e,t){return a("v-col",{key:t,attrs:{cols:"4"}},[a("v-row",{staticClass:"ma-0 gradient-fill-header",attrs:{justify:"center"}},[a("v-responsive",{staticStyle:{"z-index":"2"},attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[a("UiSmartBackgroundImg",{attrs:{"image-asset":e}})],1)],1)],1)})),1),e._v(" "),a("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[a("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[e._v("\n      "+e._s(e.pageHeader.toUpperCase())+"\n    ")])])],1)}),[],!1,null,null,null);t.default=m.exports;n()(m,{UiSmartBackgroundImg:a(841).default}),n()(m,{VCol:l.a,VOverlay:o.a,VResponsive:c.a,VRow:g.a})}}]);