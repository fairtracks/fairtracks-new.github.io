(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1045:function(e,t,s){},1046:function(e,t,s){},1047:function(e,t,s){},1059:function(e,t,s){"use strict";s(1045);var r=s(1056),a=s(1055),i=s(1030),o=s(413),n=(s(1046),s(5)),l=s(1024),c=s(935),h=s(71),p=s(965),d=s(74);function u(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function m(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var b=Object(n.a)().extend({directives:{ripple:d.a},props:{headers:{type:Array,default:()=>[]},options:{type:Object,default:()=>({page:1,itemsPerPage:10,sortBy:[],sortDesc:[],groupBy:[],groupDesc:[],multiSort:!1,mustSort:!1})},checkboxColor:String,sortIcon:{type:String,default:"$sort"},everyItem:Boolean,someItems:Boolean,showGroupBy:Boolean,singleSelect:Boolean,disableSort:Boolean},methods:{genSelectAll(){var e,t={props:{value:this.everyItem,indeterminate:!this.everyItem&&this.someItems,color:null!=(e=this.checkboxColor)?e:""},on:{input:e=>this.$emit("toggle-select-all",e)}};return this.$scopedSlots["data-table-select"]?this.$scopedSlots["data-table-select"](t):this.$createElement(p.a,function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?u(Object(s),!0).forEach((function(t){m(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({staticClass:"v-data-table__checkbox"},t))},genSortIcon(){return this.$createElement(h.a,{staticClass:"v-data-table-header__icon",props:{size:18}},[this.sortIcon])}}}),g=s(0),v=Object(n.a)(b).extend({name:"v-data-table-header-mobile",props:{sortByText:{type:String,default:"$vuetify.dataTable.sortBy"}},methods:{genSortChip(e){var t=[e.item.text],s=this.options.sortBy.findIndex((t=>t===e.item.value)),r=s>=0,a=this.options.sortDesc[s];return t.push(this.$createElement("div",{staticClass:"v-chip__close",class:{sortable:!0,active:r,asc:r&&!a,desc:r&&a}},[this.genSortIcon()])),this.$createElement(c.a,{staticClass:"sortable",on:{click:t=>{t.stopPropagation(),this.$emit("sort",e.item.value)}}},t)},genSortSelect(e){return this.$createElement(l.a,{props:{label:this.$vuetify.lang.t(this.sortByText),items:e,hideDetails:!0,multiple:this.options.multiSort,value:this.options.multiSort?this.options.sortBy:this.options.sortBy[0],menuProps:{closeOnContentClick:!0}},on:{change:e=>this.$emit("sort",e)},scopedSlots:{selection:e=>this.genSortChip(e)}})}},render(e){var t=[],s=this.headers.find((e=>"data-table-select"===e.value));s&&!this.singleSelect&&t.push(this.$createElement("div",{class:["v-data-table-header-mobile__select",...Object(g.F)(s.class)],attrs:{width:s.width}},[this.genSelectAll()]));var r=this.headers.filter((e=>!1!==e.sortable&&"data-table-select"!==e.value)).map((e=>({text:e.text,value:e.value})));!this.disableSort&&r.length&&t.push(this.genSortSelect(r));var a=t.length?e("th",[e("div",{staticClass:"v-data-table-header-mobile__wrapper"},t)]):void 0,i=e("tr",[a]);return e("thead",{staticClass:"v-data-table-header v-data-table-header-mobile"},[i])}}),f=Object(n.a)(b).extend({name:"v-data-table-header-desktop",methods:{genGroupByToggle(e){return this.$createElement("span",{on:{click:t=>{t.stopPropagation(),this.$emit("group",e.value)}}},["group"])},getAria(e,t){var s=e=>this.$vuetify.lang.t("$vuetify.dataTable.ariaLabel.".concat(e)),r="none",a=[s("sortNone"),s("activateAscending")];return e?(t?(r="descending",a=[s("sortDescending"),s(this.options.mustSort?"activateAscending":"activateNone")]):(r="ascending",a=[s("sortAscending"),s("activateDescending")]),{ariaSort:r,ariaLabel:a.join(" ")}):{ariaSort:r,ariaLabel:a.join(" ")}},genHeader(e){var t={attrs:{role:"columnheader",scope:"col","aria-label":e.text||""},style:{width:Object(g.h)(e.width),minWidth:Object(g.h)(e.width)},class:["text-".concat(e.align||"start"),...Object(g.F)(e.class),e.divider&&"v-data-table__divider"],on:{}},s=[];if("data-table-select"===e.value&&!this.singleSelect)return this.$createElement("th",t,[this.genSelectAll()]);if(s.push(this.$scopedSlots.hasOwnProperty(e.value)?this.$scopedSlots[e.value]({header:e}):this.$createElement("span",[e.text])),!this.disableSort&&(e.sortable||!e.hasOwnProperty("sortable"))){t.on.click=()=>this.$emit("sort",e.value);var r=this.options.sortBy.findIndex((t=>t===e.value)),a=r>=0,i=this.options.sortDesc[r];t.class.push("sortable");var{ariaLabel:o,ariaSort:n}=this.getAria(a,i);t.attrs["aria-label"]+="".concat(e.text?": ":"").concat(o),t.attrs["aria-sort"]=n,a&&(t.class.push("active"),t.class.push(i?"desc":"asc")),"end"===e.align?s.unshift(this.genSortIcon()):s.push(this.genSortIcon()),this.options.multiSort&&a&&s.push(this.$createElement("span",{class:"v-data-table-header__sort-badge"},[String(r+1)]))}return this.showGroupBy&&!1!==e.groupable&&s.push(this.genGroupByToggle(e)),this.$createElement("th",t,s)}},render(){return this.$createElement("thead",{staticClass:"v-data-table-header"},[this.$createElement("tr",this.headers.map((e=>this.genHeader(e))))])}});var y=s(40);var O=s(1);function w(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function S(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?w(Object(s),!0).forEach((function(t){$(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):w(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function $(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var j=O.a.extend({name:"v-data-table-header",functional:!0,props:S(S({},b.options.props),{},{mobile:Boolean}),render(e,t){var{props:s,data:r,slots:a}=t;!function(e){if(e.model&&e.on&&e.on.input)if(Array.isArray(e.on.input)){var t=e.on.input.indexOf(e.model.callback);t>-1&&e.on.input.splice(t,1)}else delete e.on.input}(r);var i=function(e,t){var s=[];for(var r in e)e.hasOwnProperty(r)&&s.push(t("template",{slot:r},e[r]));return s}(a(),e);return r=Object(y.a)(r,{props:s}),s.mobile?e(v,r,i):e(f,r,i)}});var P=O.a.extend({name:"row",functional:!0,props:{headers:Array,index:Number,item:Object,rtl:Boolean},render(e,t){var{props:s,slots:r,data:a}=t,i=r(),o=s.headers.map((t=>{var r=[],o=Object(g.p)(s.item,t.value),n=t.value,l=a.scopedSlots&&a.scopedSlots.hasOwnProperty(n)&&a.scopedSlots[n],c=i.hasOwnProperty(n)&&i[n];l?r.push(...Object(g.F)(l({item:s.item,isMobile:!1,header:t,index:s.index,value:o}))):c?r.push(...Object(g.F)(c)):r.push(null==o?o:String(o));var h,p,d="text-".concat(t.align||"start");return 1===(h=r).length&&["td","th"].includes(null==(p=h[0])?void 0:p.tag)?r:e("td",{class:[d,t.cellClass,{"v-data-table__divider":t.divider}]},r)}));return e("tr",a,o)}}),x=O.a.extend({name:"row-group",functional:!0,props:{value:{type:Boolean,default:!0},headerClass:{type:String,default:"v-row-group__header"},contentClass:String,summaryClass:{type:String,default:"v-row-group__summary"}},render(e,t){var{slots:s,props:r}=t,a=s(),i=[];return a["column.header"]?i.push(e("tr",{staticClass:r.headerClass},a["column.header"])):a["row.header"]&&i.push(...a["row.header"]),a["row.content"]&&r.value&&i.push(...a["row.content"]),a["column.summary"]?i.push(e("tr",{staticClass:r.summaryClass},a["column.summary"])):a["row.summary"]&&i.push(...a["row.summary"]),i}}),E=(s(1047),s(12));function C(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function _(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var B=Object(n.a)(E.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?C(Object(s),!0).forEach((function(t){_(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):C(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(g.h)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(e){return e("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}});function D(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function H(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?D(Object(s),!0).forEach((function(t){I(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):D(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function I(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var k=O.a.extend({name:"row",functional:!0,props:{headers:Array,hideDefaultHeader:Boolean,index:Number,item:Object,rtl:Boolean},render(e,t){var{props:s,slots:r,data:a}=t,i=r(),o=s.headers.map((t=>{var r=[],o=Object(g.p)(s.item,t.value),n=t.value,l=a.scopedSlots&&a.scopedSlots.hasOwnProperty(n)&&a.scopedSlots[n],c=i.hasOwnProperty(n)&&i[n];l?r.push(l({item:s.item,isMobile:!0,header:t,index:s.index,value:o})):c?r.push(c):r.push(null==o?o:String(o));var h=[e("div",{staticClass:"v-data-table__mobile-row__cell"},r)];return"dataTableSelect"===t.value||s.hideDefaultHeader||h.unshift(e("div",{staticClass:"v-data-table__mobile-row__header"},[t.text])),e("td",{class:{"v-data-table__mobile-row":!0}},h)}));return e("tr",H(H({},a),{},{staticClass:"v-data-table__mobile-table-row"}),o)}}),M=s(191),F=s(6);function A(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function W(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?A(Object(s),!0).forEach((function(t){R(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):A(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function R(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function G(e,t,s){return r=>{var a=Object(g.p)(e,r.value);return r.filter?r.filter(a,t,e):s(a,t,e)}}t.a=Object(n.a)(a.a,M.a).extend({name:"v-data-table",directives:{ripple:d.a},props:{headers:{type:Array,default:()=>[]},showSelect:Boolean,checkboxColor:String,showExpand:Boolean,showGroupBy:Boolean,height:[Number,String],hideDefaultHeader:Boolean,caption:String,dense:Boolean,headerProps:Object,calculateWidths:Boolean,fixedHeader:Boolean,headersLength:Number,expandIcon:{type:String,default:"$expand"},customFilter:{type:Function,default:g.k},itemClass:{type:[String,Function],default:()=>""},loaderHeight:{type:[Number,String],default:4}},data:()=>({internalGroupBy:[],openCache:{},widths:[]}),computed:{computedHeaders(){if(!this.headers)return[];var e=this.headers.filter((e=>void 0===e.value||!this.internalGroupBy.find((t=>t===e.value)))),t={text:"",sortable:!1,width:"1px"};if(this.showSelect){var s=e.findIndex((e=>"data-table-select"===e.value));s<0?e.unshift(W(W({},t),{},{value:"data-table-select"})):e.splice(s,1,W(W({},t),e[s]))}if(this.showExpand){var r=e.findIndex((e=>"data-table-expand"===e.value));r<0?e.unshift(W(W({},t),{},{value:"data-table-expand"})):e.splice(r,1,W(W({},t),e[r]))}return e},colspanAttrs(){return this.isMobile?void 0:{colspan:this.headersLength||this.computedHeaders.length}},columnSorters(){return this.computedHeaders.reduce(((e,t)=>(t.sort&&(e[t.value]=t.sort),e)),{})},headersWithCustomFilters(){return this.headers.filter((e=>e.filter&&(!e.hasOwnProperty("filterable")||!0===e.filterable)))},headersWithoutCustomFilters(){return this.headers.filter((e=>!(e.filter||e.hasOwnProperty("filterable")&&!0!==e.filterable)))},sanitizedHeaderProps(){return Object(g.d)(this.headerProps)},computedItemsPerPage(){var e=this.options&&this.options.itemsPerPage?this.options.itemsPerPage:this.itemsPerPage,t=this.sanitizedFooterProps.itemsPerPageOptions;if(t&&!t.find((t=>"number"==typeof t?t===e:t.value===e))){var s=t[0];return"object"==typeof s?s.value:s}return e}},created(){[["sort-icon","header-props.sort-icon"],["hide-headers","hide-default-header"],["select-all","show-select"]].forEach((e=>{var[t,s]=e;this.$attrs.hasOwnProperty(t)&&Object(F.a)(t,s,this)}))},mounted(){this.calculateWidths&&(window.addEventListener("resize",this.calcWidths),this.calcWidths())},beforeDestroy(){this.calculateWidths&&window.removeEventListener("resize",this.calcWidths)},methods:{calcWidths(){this.widths=Array.from(this.$el.querySelectorAll("th")).map((e=>e.clientWidth))},customFilterWithColumns(e,t){return function(e,t,s,r,a){return t="string"==typeof t?t.trim():null,e.filter((e=>{var i=s.every(G(e,t,g.k)),o=!t||r.some(G(e,t,a));return i&&o}))}(e,t,this.headersWithCustomFilters,this.headersWithoutCustomFilters,this.customFilter)},customSortWithHeaders(e,t,s,r){return this.customSort(e,t,s,r,this.columnSorters)},createItemProps(e,t){var s=a.a.options.methods.createItemProps.call(this,e,t);return Object.assign(s,{headers:this.computedHeaders})},genCaption(e){return this.caption?[this.$createElement("caption",[this.caption])]:Object(g.s)(this,"caption",e,!0)},genColgroup(e){return this.$createElement("colgroup",this.computedHeaders.map((e=>this.$createElement("col",{class:{divider:e.divider}}))))},genLoading(){var e=this.$createElement("th",{staticClass:"column",attrs:this.colspanAttrs},[this.genProgress()]),t=this.$createElement("tr",{staticClass:"v-data-table__progress"},[e]);return this.$createElement("thead",[t])},genHeaders(e){var t={props:W(W({},this.sanitizedHeaderProps),{},{headers:this.computedHeaders,options:e.options,mobile:this.isMobile,showGroupBy:this.showGroupBy,checkboxColor:this.checkboxColor,someItems:this.someItems,everyItem:this.everyItem,singleSelect:this.singleSelect,disableSort:this.disableSort}),on:{sort:e.sort,group:e.group,"toggle-select-all":this.toggleSelectAll}},s=[Object(g.s)(this,"header",W(W({},t),{},{isMobile:this.isMobile}))];if(!this.hideDefaultHeader){var r=Object(g.q)("header.",this.$scopedSlots);s.push(this.$createElement(j,W(W({},t),{},{scopedSlots:r})))}return this.loading&&s.push(this.genLoading()),s},genEmptyWrapper(e){return this.$createElement("tr",{staticClass:"v-data-table__empty-wrapper"},[this.$createElement("td",{attrs:this.colspanAttrs},e)])},genItems(e,t){var s=this.genEmpty(t.originalItemsLength,t.pagination.itemsLength);return s?[s]:t.groupedItems?this.genGroupedRows(t.groupedItems,t):this.genRows(e,t)},genGroupedRows(e,t){return e.map((e=>(this.openCache.hasOwnProperty(e.name)||this.$set(this.openCache,e.name,!0),this.$scopedSlots.group?this.$scopedSlots.group({group:e.name,options:t.options,isMobile:this.isMobile,items:e.items,headers:this.computedHeaders}):this.genDefaultGroupedRow(e.name,e.items,t))))},genDefaultGroupedRow(e,t,s){var r=!!this.openCache[e],a=[this.$createElement("template",{slot:"row.content"},this.genRows(t,s))],i=()=>this.$set(this.openCache,e,!this.openCache[e]),n=()=>s.updateOptions({groupBy:[],groupDesc:[]});if(this.$scopedSlots["group.header"])a.unshift(this.$createElement("template",{slot:"column.header"},[this.$scopedSlots["group.header"]({group:e,groupBy:s.options.groupBy,isMobile:this.isMobile,items:t,headers:this.computedHeaders,isOpen:r,toggle:i,remove:n})]));else{var l=this.$createElement(o.a,{staticClass:"ma-0",props:{icon:!0,small:!0},on:{click:i}},[this.$createElement(h.a,[r?"$minus":"$plus"])]),c=this.$createElement(o.a,{staticClass:"ma-0",props:{icon:!0,small:!0},on:{click:n}},[this.$createElement(h.a,["$close"])]),p=this.$createElement("td",{staticClass:"text-start",attrs:this.colspanAttrs},[l,"".concat(s.options.groupBy[0],": ").concat(e),c]);a.unshift(this.$createElement("template",{slot:"column.header"},[p]))}return this.$scopedSlots["group.summary"]&&a.push(this.$createElement("template",{slot:"column.summary"},[this.$scopedSlots["group.summary"]({group:e,groupBy:s.options.groupBy,isMobile:this.isMobile,items:t,headers:this.computedHeaders,isOpen:r,toggle:i})])),this.$createElement(x,{key:e,props:{value:r}},a)},genRows(e,t){return this.$scopedSlots.item?this.genScopedRows(e,t):this.genDefaultRows(e,t)},genScopedRows(e,t){for(var s=[],r=0;r<e.length;r++){var a=e[r];s.push(this.$scopedSlots.item(W(W({},this.createItemProps(a,r)),{},{isMobile:this.isMobile}))),this.isExpanded(a)&&s.push(this.$scopedSlots["expanded-item"]({headers:this.computedHeaders,isMobile:this.isMobile,index:r,item:a}))}return s},genDefaultRows(e,t){return this.$scopedSlots["expanded-item"]?e.map(((e,t)=>this.genDefaultExpandedRow(e,t))):e.map(((e,t)=>this.genDefaultSimpleRow(e,t)))},genDefaultExpandedRow(e,t){var s=this.isExpanded(e),r={"v-data-table__expanded v-data-table__expanded__row":s},a=this.genDefaultSimpleRow(e,t,r),i=this.$createElement("tr",{staticClass:"v-data-table__expanded v-data-table__expanded__content"},[this.$scopedSlots["expanded-item"]({headers:this.computedHeaders,isMobile:this.isMobile,item:e})]);return this.$createElement(x,{props:{value:s}},[this.$createElement("template",{slot:"row.header"},[a]),this.$createElement("template",{slot:"row.content"},[i])])},genDefaultSimpleRow(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Object(g.q)("item.",this.$scopedSlots),a=this.createItemProps(e,t);if(this.showSelect){var i=r["data-table-select"];r["data-table-select"]=i?()=>i(W(W({},a),{},{isMobile:this.isMobile})):()=>{var t;return this.$createElement(p.a,{staticClass:"v-data-table__checkbox",props:{value:a.isSelected,disabled:!this.isSelectable(e),color:null!=(t=this.checkboxColor)?t:""},on:{input:e=>a.select(e)}})}}if(this.showExpand){var o=r["data-table-expand"];r["data-table-expand"]=o?()=>o(a):()=>this.$createElement(h.a,{staticClass:"v-data-table__expand-icon",class:{"v-data-table__expand-icon--active":a.isExpanded},on:{click:e=>{e.stopPropagation(),a.expand(!a.isExpanded)}}},[this.expandIcon])}return this.$createElement(this.isMobile?k:P,{key:Object(g.p)(e,this.itemKey),class:Object(y.b)(W(W({},s),{},{"v-data-table__selected":a.isSelected}),Object(g.r)(e,this.itemClass)),props:{headers:this.computedHeaders,hideDefaultHeader:this.hideDefaultHeader,index:t,item:e,rtl:this.$vuetify.rtl},scopedSlots:r,on:{click:()=>this.$emit("click:row",e,a),contextmenu:e=>this.$emit("contextmenu:row",e,a),dblclick:e=>this.$emit("dblclick:row",e,a)}})},genBody(e){var t=W(W({},e),{},{expand:this.expand,headers:this.computedHeaders,isExpanded:this.isExpanded,isMobile:this.isMobile,isSelected:this.isSelected,select:this.select});return this.$scopedSlots.body?this.$scopedSlots.body(t):this.$createElement("tbody",[Object(g.s)(this,"body.prepend",t,!0),this.genItems(e.items,e),Object(g.s)(this,"body.append",t,!0)])},genFoot(e){var t,s;return null==(t=(s=this.$scopedSlots).foot)?void 0:t.call(s,e)},genFooters(e){var t={props:W({options:e.options,pagination:e.pagination,itemsPerPageText:"$vuetify.dataTable.itemsPerPageText"},this.sanitizedFooterProps),on:{"update:options":t=>e.updateOptions(t)},widths:this.widths,headers:this.computedHeaders},s=[Object(g.s)(this,"footer",t,!0)];return this.hideDefaultFooter||s.push(this.$createElement(i.a,W(W({},t),{},{scopedSlots:Object(g.q)("footer.",this.$scopedSlots)}))),s},genDefaultScopedSlot(e){var t={height:this.height,fixedHeader:this.fixedHeader,dense:this.dense};return this.$createElement(B,{props:t,class:{"v-data-table--mobile":this.isMobile}},[this.proxySlot("top",Object(g.s)(this,"top",W(W({},e),{},{isMobile:this.isMobile}),!0)),this.genCaption(e),this.genColgroup(e),this.genHeaders(e),this.genBody(e),this.genFoot(e),this.proxySlot("bottom",this.genFooters(e))])},proxySlot(e,t){return this.$createElement("template",{slot:e},t)}},render(){return this.$createElement(r.a,{props:W(W({},this.$props),{},{customFilter:this.customFilterWithColumns,customSort:this.customSortWithHeaders,itemsPerPage:this.computedItemsPerPage}),on:{"update:options":(e,t)=>{this.internalGroupBy=e.groupBy||[],!Object(g.j)(e,t)&&this.$emit("update:options",e)},"update:page":e=>this.$emit("update:page",e),"update:items-per-page":e=>this.$emit("update:items-per-page",e),"update:sort-by":e=>this.$emit("update:sort-by",e),"update:sort-desc":e=>this.$emit("update:sort-desc",e),"update:group-by":e=>this.$emit("update:group-by",e),"update:group-desc":e=>this.$emit("update:group-desc",e),pagination:(e,t)=>!Object(g.j)(e,t)&&this.$emit("pagination",e),"current-items":e=>{this.internalCurrentItems=e,this.$emit("current-items",e)},"page-count":e=>this.$emit("page-count",e)},scopedSlots:{default:this.genDefaultScopedSlot}})}})}}]);