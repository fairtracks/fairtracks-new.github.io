(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1035:function(e,t,r){var content=r(1088);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("1d0d7d80",content,!0,{sourceMap:!1})},1087:function(e,t,r){"use strict";r(1035)},1088:function(e,t,r){var n=r(10)(!1);n.push([e.i,".table_header{vertical-align:top}",""]),e.exports=n},1123:function(e,t,r){"use strict";r.r(t);var n=r(953),l=r(65),o={props:{headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},tableNumber:{type:Number,default:1},tableCaption:{type:String,default:""},tableFootnote:{type:String,default:""},itemsPerPage:{type:Number,default:5}},data:function(){return{mdiMagnify:l.p,search:""}},methods:{createHeaders:function(e){return e.map((function(e,t){return{text:e,value:String(t),class:"table_header"}}))},createItems:function(e){return e.map((function(e){return Object.assign({},e)}))},compileMarkdown:function(e){return n.marked.parseInline(e,[])}}},c=(r(1087),r(26)),d=r(45),f=r.n(d),m=r(175),v=r(937),h=r(1111),_=r(938),y=r(971),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"px-4",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12"}},[r("v-card-title",[r("v-text-field",{attrs:{"append-icon":e.mdiMagnify,label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-data-table",{attrs:{dense:"",search:e.search,headers:e.createHeaders(e.headers),items:e.createItems(e.items),"items-per-page":e.itemsPerPage,height:"100%","fixed-header":""},scopedSlots:e._u([{key:"item",fn:function(t){var n=t.item;return[r("tr",e._l(n,(function(t){return r("td",{key:t.name,domProps:{innerHTML:e._s(e.compileMarkdown(t))}})})),0)]}}])})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("p",{staticClass:"body-2 font-italic text-center"},[e._v("\n      Table "+e._s(e.tableNumber)+": "+e._s(e.tableCaption)+"\n    ")])]),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("p",{staticClass:"body-2 font-italic text-center"},[e._v("\n      "+e._s(e.tableFootnote)+"\n    ")])])],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VCardTitle:m.d,VCol:v.a,VDataTable:h.a,VRow:_.a,VTextField:y.a})}}]);