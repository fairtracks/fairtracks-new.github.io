(window.webpackJsonp=window.webpackJsonp||[]).push([[33,37,39,43],{1008:function(t,e,n){"use strict";n(976)},1009:function(t,e,n){var o=n(10)(!1);o.push([t.i,".zoom[data-v-7bbabd70]{-webkit-transform:scale(1.025) translateY(-10px);transform:scale(1.025) translateY(-10px)}.notzoom[data-v-7bbabd70],.zoom[data-v-7bbabd70]{transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.text-h6[data-v-7bbabd70]{line-height:1.7rem!important}.v-list-item__content[data-v-7bbabd70],.v-list-item__icon[data-v-7bbabd70]{align-self:center;align-items:center}",""]),t.exports=o},1043:function(t,e,n){"use strict";n.r(e);var o={props:{sectionId:{type:String,default:""},title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},cards:{type:Array,default:function(){return[]}}}},r=(n(1008),n(26)),l=n(45),c=n.n(l),d=n(228),v=n(937),f=n(970),h=n(219),m=n(171),_=n(220),x=n(125),y=n(52),w=n(100),C=n(217),I=n(938),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{id:t.sectionId}},[t.title?n("v-row",{staticClass:"pt-16 px-8 pb-8",attrs:{id:t.sectionId+"_title"}},[n("UiMainTitle",{attrs:{title:t.title,ingress:t.ingress,info:t.info}})],1):t._e(),t._v(" "),t.subtitle?n("v-row",{staticClass:"px-8 pt-8 pb-8",attrs:{id:t.sectionId+"_subtitle",justify:"center"}},[n("UiMinorTitle",{attrs:{title:t.subtitle}})],1):t._e(),t._v(" "),n("v-row",{staticClass:"pa-0 pb-16 px-8",attrs:{"fill-height":"",justify:"start"}},t._l(t.cards,(function(e,o){return n("v-col",{key:"c_"+o,attrs:{id:t.sectionId+"_c_"+o,cols:"12",md:"6",lg:"4",xl:"3"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(r){var l=r.hover;return[n("v-card",{staticClass:"py-4 px-6 mx-auto transition-swing",class:l?"zoom":"notzoom",attrs:{elevation:l?24:2,outlined:"",shaped:"",width:"380px",height:"614px",href:e.services[e.services.length-1].link}},[n("div",[n("v-responsive",{staticClass:"pt-3 px-1",attrs:{height:"170"}},[n("v-row",{staticClass:"fill-height pa-0",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[e.logo?n("v-img",{staticClass:"ma-auto",attrs:{contain:"",src:t.$getNonImageAssetPath("images",e.logo[0],e.logo[1]),"max-height":"75"}}):n("h2",{staticClass:"text-h5 text-center font-weight-black ma-auto",domProps:{textContent:t._s(e.title)}})],1),t._v(" "),n("v-col",{staticClass:"pa-0",attrs:{cols:"12",ali:""}},[n("h3",{staticClass:"text-h6 text-center font-weight-bold mx-8"},[t._v("\n                    "+t._s(e.subtitle)+"\n                  ")])])],1)],1),t._v(" "),n("v-responsive",{staticClass:"pt-5 pb-3 px-1",attrs:{height:"408"}},[n("v-row",{staticClass:"fill-height",attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12"}},[n("v-list",{},t._l(e.features,(function(e,o){return n("v-list-item",{key:"feature-"+o,attrs:{dense:""}},[n("v-list-item-icon",[n("v-icon",{staticClass:"grey--text-2"},[t._v("\n                          "+t._s(e.icon)+"\n                        ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-wrap text-left grey--text-2",domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1),t._v(" "),n("v-col",{attrs:{cols:"12","align-self":"end"}},[n("v-row",{class:1==e.services.length?"justify-end":"justify-space-between",attrs:{"no-gutters":""}},t._l(e.services,(function(t,r){return n("v-col",{key:"s_"+o+"_"+r,staticClass:"pa-0 ma-0",attrs:{cols:"auto","align-self":"end"}},[n("UiStyledButton",{staticClass:"text-weight-light",attrs:{id:"btn_"+o+"_"+r,href:t.link,text:t.text,"do-hover":l&&r+1==e.services.length}})],1)})),1)],1)],1)],1)],1)])]}}],null,!0)})],1)})),1)],1)}),[],!1,null,"7bbabd70",null);e.default=component.exports;c()(component,{UiMainTitle:n(952).default,UiMinorTitle:n(948).default,UiStyledButton:n(954).default}),c()(component,{VCard:d.a,VCol:v.a,VHover:f.a,VIcon:h.a,VImg:m.a,VList:_.a,VListItem:x.a,VListItemContent:y.a,VListItemIcon:w.a,VListItemTitle:y.c,VResponsive:C.a,VRow:I.a})},948:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:""}}},r=n(26),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"text-h4 font-weight-bold mb-5"},[t._v(t._s(t.title))])}),[],!1,null,null,null);e.default=component.exports},952:function(t,e,n){"use strict";n.r(e);var o=n(953),r={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""}},methods:{compileMarkdown:function(t){return o.marked.parseInline(t,[])}}},l=n(26),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.title?n("h2",{staticClass:"text-h4 text-md-h3 text-center font-weight-black mt-4 mb-8",domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.subtitle?n("h3",{staticClass:"text-h6 text-md-h5 font-weight-medium font-italic text-center mb-8",domProps:{textContent:t._s(t.subtitle)}}):t._e(),t._v(" "),t.ingress?n("h4",{staticClass:"text-h6 font-weight-medium font-italic text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}):t._e(),t._v(" "),t.info?n("p",{staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}}):t._e()])}),[],!1,null,null,null);e.default=component.exports},954:function(t,e,n){"use strict";n.r(e);var o={props:{id:{type:String,default:null},href:{type:String,default:null},text:{type:String,default:""},xLarge:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:function(){return{prevButtonHoverId:""}},computed:{buttonHoverId:function(){return this.$store.state.buttonHover.buttonHoverId},shouldHover:function(){return this.doHover&&""===this.buttonHoverId}},methods:{setButtonHoverId:function(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit("buttonHover/setButtonHoverId",t)},unsetButtonHoverId:function(){this.prevButtonHoverId="",this.$store.commit("buttonHover/setButtonHoverId",this.prevButtonHoverId)}}},r=n(26),l=n(45),c=n.n(l),d=n(243),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"simplebutton"},[n("v-btn",{staticClass:"secondary",class:t.shouldHover?"custom-hover":null,attrs:{id:t.id,"x-large":t.xLarge,href:t.href,ripple:!1},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseleave:function(e){return t.unsetButtonHoverId(t.id)},click:function(e){return e.stopPropagation(),t.$emit("btn-click",!0)}}},[t._v("\n    "+t._s(t.text)+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a})},970:function(t,e,n){"use strict";var o=n(133),r=n(31),l=n(7),c=n(8);e.a=Object(l.a)(o.a,r.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},976:function(t,e,n){var content=n(1009);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("c2026920",content,!0,{sourceMap:!1})}}]);