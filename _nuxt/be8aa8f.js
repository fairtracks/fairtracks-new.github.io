(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1104:function(t,e,i){var a=i(1105);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(13).default)("2e8c002e",a,!0,{sourceMap:!1})},1105:function(t,e,i){var a=i(12)(!1);a.push([t.i,".theme--light.v-subheader{color:rgba(0,0,0,.6)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;height:48px;font-size:.875rem;font-weight:400;padding:0 16px}.v-subheader--inset{margin-left:56px}",""]),t.exports=a},1118:function(t,e,i){"use strict";i(1104);var a=i(19),n=i(9);function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e.a=Object(n.a)(a.a).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:s({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},1140:function(t,e,i){var a=i(1141);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(13).default)("31c32259",a,!0,{sourceMap:!1})},1141:function(t,e,i){var a=i(12)(!1);a.push([t.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#121212!important;background:var(--v-background-base,#121212)!important;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#121212!important;background:var(--v-background-base,#121212)!important}.v-pagination{-webkit-box-align:center;align-items:center;display:-webkit-inline-box;display:inline-flex;list-style-type:none;-webkit-box-pack:center;justify-content:center;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{background:transparent;border-radius:4px;font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;text-decoration:none;-webkit-transition:.3s cubic-bezier(0,0,.2,1);transition:.3s cubic-bezier(0,0,.2,1);width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;display:-webkit-inline-box;display:inline-flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-decoration:none;height:32px;width:32px;margin:.3rem 10px}.v-pagination__navigation .v-icon{-webkit-transition:.2s cubic-bezier(.4,0,.6,1);transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:-webkit-inline-box;display:inline-flex;-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:center;justify-content:center;height:32px;width:32px}",""]),t.exports=a},1203:function(t,e,i){"use strict";i(1140);var a=i(89),n=i(141),r=i(26),s=i(1152),o=i(19),l=i(9);function c(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e.a=Object(l.a)(r.a,Object(s.a)({onVisible:["init"]}),o.a).extend({name:"v-pagination",directives:{Resize:n.a},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1==0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach((function(e){v(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var i=e%2==0?1:0,a=Math.floor(e/2),n=this.length-a+1+i;if(this.value>a&&this.value<n){var r=this.length,s=this.value-a+2,o=this.value+a-2-i,l=o+1===r-1?o+1:"...";return[1,s-1==2?2:"..."].concat(c(this.range(s,o)),[l,this.length])}if(this.value===a){var u=this.value+a-1-i;return[].concat(c(this.range(1,u)),["...",this.length])}if(this.value===n){var p=this.value-a+1;return[1,"..."].concat(c(this.range(p,this.length)))}return[].concat(c(this.range(1,a)),["..."],c(this.range(n,this.length)))}},watch:{value:function(){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.onResize(),this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){for(var i=[],a=t=t>0?t:1;a<=e;a++)i.push(a);return i},genIcon:function(t,e,i,n,r){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{disabled:i,type:"button","aria-label":r},on:i?{}:{click:n}},[t(a.a,[e])])])},genItem:function(t,e){var i=this,a=e===this.value&&(this.color||"primary"),n=e===this.value,r=n?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(a,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":n,"aria-label":this.$vuetify.lang.t(r,e)},on:{click:function(){return i.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,a){return t("li",{key:a},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},1218:function(t,e,i){"use strict";i.r(e);var a={data:function(){return{heroAlt:[{src:"pexels-andrea-piacquadio-3884440.jpg",heading:" Blog "}],posts:[{id:"",title:"Hello World",postImage:"",publishedOn:"",lastUpdated:"",author:"",tags:"",category:"",excerpt:"",content:""}],page:2,tags:["Work","Home Improvement","Vacation","Food","Drawers","Shopping","Art","Tech","Creative Writing"],items:[{text:"Technology"},{text:"Health"},{text:"News"},{text:"Recent Discovery"},{text:"Lifestyle and Fitness"},{text:"Fashion"},{text:"Music"}],comments:[{avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",title:"Ali Connors",subtitle:"I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg",title:"Alex Scott",subtitle:"Wish I could come, but I'm out of town this weekend."},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/3.jpg",title:"Sandra Adams",subtitle:"Do you have Paris recommendations? Have you ever been?"},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/4.jpg",title:"Trevor Hansen",subtitle:"Have any ideas about what we should get Heidi for her birthday?"},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg",title:"Britta Holt",subtitle:"We should eat this: Grate, Squash, Corn, and tomatillo Tacos."}]}},head:function(){return{title:"Blog",meta:[{hid:"description",name:"description",content:"Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem"}]}}},n=i(25),r=i(28),s=i.n(r),o=i(256),l=i(236),c=i(184),u=i(1167),p=i(1288),v=i(1077),d=i(1087),h=i(1070),g=i(227),b=i(178),m=i(228),f=i(130),x=i(231),y=i(55),_=i(233),w=i(1203),k=i(1078),C=i(1082),j=i(1118),O=i(1129),I=Object(n.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{class:t.$vuetify.theme.dark?"":"grey lighten-4"},[i("v-container",[i("v-row",[i("v-col",{staticClass:"py-16",attrs:{cols:"12",xl:"10",lg:"9",md:"8",sm:"8"}},[i("v-row",t._l(10,(function(e){return i("v-col",{key:e,attrs:{cols:"12",sm:"6",md:"6",lg:"4",xl:"3"}},[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"450",elevation:"1"}},[i("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"pexels-moose-photos-1036641.jpg"}}),t._v(" "),i("v-card-subtitle",{staticClass:"pb-0"},[i("v-btn",{staticClass:"px-0",attrs:{href:"#",text:"",small:"",color:"primary"}},[t._v("Admin")]),t._v(" "),i("v-btn",{staticClass:"px-0",attrs:{text:"",small:"",disabled:""}},[t._v("October 13, 2020")])],1),t._v(" "),i("v-card-text",{staticClass:"title font-weight-bold mt-3 pb-0 text--primary",staticStyle:{"line-height":"1.8rem"}},[t._v("\n                Check out the new mansion we got for our eSports team!\n              ")]),t._v(" "),i("v-card-text",{staticClass:"text--primary"},[t._v("\n                An online streamer, also known as a live streamer, internet streamer, or streamer,\n                is a person who broadcasts themself online through a live stream or pre-recorded\n                video. The scope of online streamers has grown to includ...\n                "),i("v-btn",{attrs:{href:"#",small:"",text:"",color:"primary"}},[t._v("Read More")])],1),t._v(" "),i("v-card-actions",[i("v-btn",{attrs:{icon:"",color:"yellow darken-1"}},[i("v-icon",[t._v("mdi-comment")])],1),t._v(" "),i("span",{staticClass:"text--disabled"},[t._v("15")]),t._v(" "),i("v-spacer"),t._v(" "),i("v-btn",{attrs:{icon:"",color:"orange"}},[i("v-icon",[t._v("mdi-heart")])],1),i("span",{staticClass:"text--disabled mr-2"},[t._v("45K")]),t._v(" "),i("v-btn",{attrs:{icon:"",color:"primary"}},[i("v-icon",[t._v("mdi-share-variant")])],1),i("span",{staticClass:"text--disabled"},[t._v("25K")]),t._v(" "),i("span",{staticClass:"mr-4"})],1)],1)],1)})),1),t._v(" "),i("div",{staticClass:"text-center"},[i("div",{staticClass:"text-center"},[i("v-container",[i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"8"}},[i("v-container",{staticClass:"max-width"},[i("v-pagination",{staticClass:"my-4",attrs:{circle:"",length:15},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)],1)],1)])],1),t._v(" "),i("v-col",{staticClass:"py-16",attrs:{cols:"12",xl:"2",lg:"3",md:"4",sm:"4"}},[i("aside",[i("v-text-field",{staticClass:"mb-6",attrs:{clearable:"",dense:"",flat:"",outlined:"",placeholder:"Search...","append-icon":"mdi-magnify","hide-details":""}}),t._v(" "),i("v-card",{staticClass:"mb-6",attrs:{outlined:""}},[i("div",{staticClass:"subtitle font-weight-black text-uppercase text-center mt-4"},[t._v("\n              Categories\n            ")]),t._v(" "),i("v-list",{attrs:{dense:""}},[i("v-list-item-group",{attrs:{color:"primary"}},t._l(t.items,(function(e,a){return i("v-list-item",{key:a},[i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)],1),t._v(" "),i("v-card",{staticClass:"mb-6",attrs:{outlined:""}},[i("div",{staticClass:"subtitle font-weight-black text-uppercase text-center mt-4"},[t._v("Tags")]),t._v(" "),i("v-card-text",[i("v-chip-group",{attrs:{column:""}},t._l(t.tags,(function(e){return i("v-chip",{key:e},[t._v("\n                  "+t._s(e)+"\n                ")])})),1)],1)],1),t._v(" "),i("v-card",{staticClass:"mb-6",attrs:{outlined:""}},[i("div",{staticClass:"subtitle font-weight-black text-uppercase text-center mt-4"},[t._v("\n              Recent Comments\n            ")]),t._v(" "),i("v-list",{attrs:{"three-line":"",dense:""}},[t._l(t.comments,(function(e,a){return[e.header?i("v-subheader",{key:e.header,domProps:{textContent:t._s(e.header)}}):e.divider?i("v-divider",{key:a}):i("v-list-item",{key:e.title},[i("v-list-item-avatar",[i("v-img",{attrs:{src:e.avatar}})],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.title)}}),t._v(" "),i("v-list-item-subtitle",{domProps:{textContent:t._s(e.subtitle)}})],1)],1)]}))],2)],1)],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=I.exports;s()(I,{VBtn:o.a,VCard:l.a,VCardActions:c.a,VCardSubtitle:c.b,VCardText:c.c,VChip:u.a,VChipGroup:p.a,VCol:v.a,VContainer:d.a,VDivider:h.a,VIcon:g.a,VImg:b.a,VList:m.a,VListItem:f.a,VListItemAvatar:x.a,VListItemContent:y.a,VListItemGroup:_.a,VListItemSubtitle:y.b,VListItemTitle:y.c,VPagination:w.a,VRow:k.a,VSpacer:C.a,VSubheader:j.a,VTextField:O.a})}}]);