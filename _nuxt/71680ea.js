(window.webpackJsonp=window.webpackJsonp||[]).push([[33,35,42],{637:function(t,e,o){"use strict";o.r(e);var n=o(638),r={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""}},methods:{compileMarkdown:function(t){return n.marked.parseInline(t,[])}}},l=o(39),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[t.title?o("h2",{staticClass:"text-h4 text-md-h3 text-center font-weight-black mt-4 mb-8",domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.subtitle?o("h3",{staticClass:"text-h6 text-md-h5 font-weight-medium font-italic text-center mb-8",domProps:{textContent:t._s(t.subtitle)}}):t._e(),t._v(" "),t.ingress?o("h4",{staticClass:"text-h6 font-weight-medium font-italic text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}):t._e(),t._v(" "),t.info?o("p",{staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}}):t._e()])}),[],!1,null,null,null);e.default=component.exports},645:function(t,e,o){"use strict";o.r(e);var n={props:{id:{type:String},href:{type:String},text:{type:String},xLarge:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:function(){return{prevButtonHoverId:""}},computed:{buttonHoverId:function(){return this.$store.state.buttonHover.buttonHoverId},shouldHover:function(){return this.doHover&&""===this.buttonHoverId}},watch:{hover:function(){console.log("dsds")}},methods:{setButtonHoverId:function(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit("buttonHover/setButtonHoverId",t),console.log(this.id+" (mouseover): "+this.prevButtonHoverId+" -> "+this.buttonHoverId)},unsetButtonHoverId:function(){this.prevButtonHoverId="",this.$store.commit("buttonHover/setButtonHoverId",this.prevButtonHoverId),console.log(this.id+": (mouseleave)"+this.prevButtonHoverId+" -> "+this.buttonHoverId)}}},r=o(39),l=o(77),c=o.n(l),d=o(256),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-btn",{staticClass:"secondary",class:t.shouldHover?"custom-hover":null,attrs:{id:t.id,"x-large":t.xLarge,href:t.href},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseleave:function(e){return t.unsetButtonHoverId(t.id)}}},[t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a})},651:function(t,e,o){"use strict";var n=o(149),r=o(47),l=o(7),c=o(13);e.a=Object(l.a)(n.a,r.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},657:function(t,e,o){},682:function(t,e,o){"use strict";o(657)},707:function(t,e,o){"use strict";o.r(e);var n={props:{cards:{type:Array,default:function(){return[]}},title:{type:String,default:""},titleId:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""}}},r=(o(682),o(39)),l=o(77),c=o.n(l),d=o(243),v=o(624),h=o(651),f=o(234),m=o(187),x=o(235),y=o(139),_=o(71),C=o(122),H=o(625),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"py-16 fill-height",class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4"},[o("v-row",{staticClass:"px-8 pb-4",attrs:{id:t.titleId}},[o("SectionsMainTitle",{attrs:{title:t.title,ingress:t.ingress,info:t.info}})],1),t._v(" "),o("v-row",{staticClass:"pa-0 px-8",attrs:{"fill-height":"",justify:"left"}},t._l(t.cards,(function(e,n){return o("v-col",{key:"c_"+n,attrs:{id:"c_"+n,cols:"12",md:"6",lg:"4",xl:"3"}},[o("v-hover",{scopedSlots:t._u([{key:"default",fn:function(r){var l=r.hover;return[o("v-card",{staticClass:"py-4 px-6 mx-auto transition-swing",class:l?"zoom":"notzoom",attrs:{elevation:l?24:2,outlined:"",shaped:"",width:"380px",height:"616px",href:e.services.at(-1).link}},[o("v-row",{staticClass:"fill-height pa-3",attrs:{"no-gutters":""}},[o("v-col",{staticClass:"pb-3",attrs:{cols:"12"}},[e.logo?o("v-img",{staticClass:"ma-auto",attrs:{contain:"",src:t.createAssetPath("illustrations",e.logo[0],e.logo[1]),"max-height":"80","max-width":"335"}}):o("h2",{staticClass:"text-h5 text-center font-weight-black ma-auto",domProps:{textContent:t._s(e.title)}})],1),t._v(" "),o("v-col",{staticClass:"pb-3",attrs:{cols:"12"}},[o("h3",{staticClass:"text-h6 text-center font-weight-bold mx-8"},[t._v("\n                "+t._s(e.subtitle)+"\n              ")])]),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-list",{staticClass:"pt-1 pb-4"},t._l(e.features,(function(e,n){return o("v-list-item",{key:"feature-"+n,attrs:{dense:""}},[o("v-list-item-icon",[o("v-icon",{staticClass:"grey--text-2"},[t._v("\n                      "+t._s(e.icon)+"\n                    ")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{staticClass:"text-wrap text-left grey--text-2",domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1),t._v(" "),o("v-col",{staticClass:"simplebutton",attrs:{"align-self":"end",cols:"12"}},[o("v-row",{class:1==e.services.length?"justify-end":"justify-space-between",attrs:{"no-gutters":""}},t._l(e.services,(function(t,r){return o("v-col",{key:"s_"+n+"_"+r,staticClass:"pa-0 ma-0",attrs:{cols:"auto","align-self":"end"}},[o("UiStyledButton",{staticClass:"text-weight-light",attrs:{id:"btn_"+n+"_"+r,href:t.link,text:t.text,"do-hover":l&&r+1==e.services.length}})],1)})),1)],1)],1)],1)]}}],null,!0)})],1)})),1)],1)}),[],!1,null,"4400dceb",null);e.default=component.exports;c()(component,{SectionsMainTitle:o(637).default,UiStyledButton:o(645).default}),c()(component,{VCard:d.a,VCol:v.a,VHover:h.a,VIcon:f.a,VImg:m.a,VList:x.a,VListItem:y.a,VListItemContent:_.a,VListItemIcon:C.a,VListItemTitle:_.c,VRow:H.a})}}]);