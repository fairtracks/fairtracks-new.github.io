(window.webpackJsonp=window.webpackJsonp||[]).push([[42,56],{1060:function(t,e,o){"use strict";o.r(e);var n={mixins:[o(999).a],props:{buttonToRight:{type:Boolean},slideMarkdownFile:{type:Object,required:!0},carouselWidth:{type:Number,default:void 0}},data:()=>({componentId:"ui-carousel-text"})},r=o(15),s=o(19),i=o.n(s),l=o(928),u=o(929),a=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("v-row",{attrs:{"no-gutters":"","align-self":"center"}},[e("v-col",{attrs:{cols:"12"}},[e("div",{staticClass:"font-weight-black",class:t.selectByComponentWidthUnbound({lg:t.buttonToRight?"text-h3":"text-h4",md:"text-h4",sm:"text-h5"},"text-h6",t.carouselWidth)},[t._v("\n        "+t._s(t.slideMarkdownFile.title)+"\n      ")])]),t._v(" "),e("v-col",{directives:[{name:"show",rawName:"v-show",value:t.buttonToRight,expression:"buttonToRight"}],attrs:{cols:t.selectByComponentWidthUnbound({sm:9},8,t.carouselWidth)}},[e("div",{class:t.selectByComponentWidthUnbound({md:"text-body-1",sm:"text-body-2"},"text-caption",t.carouselWidth)},[e("nuxt-content",{attrs:{document:t.slideMarkdownFile}})],1)]),t._v(" "),e("v-col",{directives:[{name:"show",rawName:"v-show",value:t.buttonToRight,expression:"buttonToRight"}],staticClass:"pl-4",attrs:{"align-self":"center",cols:t.selectByComponentWidthUnbound({sm:3},4,t.carouselWidth)}},[e("UiStyledButton",{attrs:{href:t.slideMarkdownFile.href,text:"More Info","x-large":t.selectByComponentWidthUnbound({md:!0},!1,t.carouselWidth)}})],1),t._v(" "),e("v-col",{directives:[{name:"show",rawName:"v-show",value:!t.buttonToRight,expression:"!buttonToRight"}],attrs:{cols:"12"}},[e("p",{class:t.selectByComponentWidthUnbound({md:"text-body-1 mb-5",sm:"text-body-2 mb-3"},"text-caption mb-2",t.carouselWidth)},[e("nuxt-content",{attrs:{document:t.slideMarkdownFile}})],1),t._v(" "),e("UiStyledButton",{staticClass:"ma-auto",attrs:{href:t.slideMarkdownFile.href,text:"More Info","x-large":t.selectByComponentWidthUnbound({md:!0},!1,t.carouselWidth)}})],1)],1)}),[],!1,null,null,null);e.default=a.exports;i()(a,{UiStyledButton:o(946).default}),i()(a,{VCol:l.a,VRow:u.a})},946:function(t,e,o){"use strict";o.r(e);var n=o(93),r=o(414);function s(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(Object(o),!0).forEach((function(e){l(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var u={props:{id:{type:String,default:null},href:{type:String,default:null},to:{type:String,default:null},text:{type:String,default:""},icon:{type:String,default:""},large:{type:Boolean,default:!1},xLarge:{type:Boolean,default:!1},small:{type:Boolean,default:!1},xSmall:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:()=>({componentId:"ui-styled-button",prevButtonHoverId:""}),computed:i(i({},Object(n.b)({buttonHoverId:t=>t.buttonHover.buttonHoverId})),{},{shouldHover(){return this.doHover&&""===this.buttonHoverId}}),mounted(){document.addEventListener("mouseup",this.unsetButtonHoverId)},destroyed(){document.removeEventListener("mouseup",this.unsetButtonHoverId)},methods:{setButtonHoverId(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit(r.BUTTON_HOVER_M_SET_ID,t)},unsetButtonHoverId(){this.prevButtonHoverId="",this.$store.commit(r.BUTTON_HOVER_M_SET_ID,this.prevButtonHoverId)}}},a=o(15),d=o(19),c=o.n(d),p=o(230),h=o(202),m=Object(a.a)(u,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"simplebutton"},[e("v-btn",{class:"".concat(t.$vuetify.theme.dark?"primary":"secondary").concat(t.shouldHover?" custom-hover":""),attrs:{id:t.id,large:t.large,"x-large":t.xLarge,small:t.small,"x-small":t.xSmall,href:t.href,"to:":t.to,ripple:!1,nuxt:!!t.to||null},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseout:function(e){return t.unsetButtonHoverId()},click:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()}}},[t.icon?e("v-icon",{staticClass:"pr-3 center"},[t._v("\n        "+t._s(t.icon)+"\n      ")]):t._e(),t._v("\n      "+t._s(t.text)+"\n    ")],1)],1)}),[],!1,null,null,null);e.default=m.exports;c()(m,{VBtn:p.a,VIcon:h.a})},999:function(t,e,o){"use strict";e.a={methods:{selectByComponentWidthUnbound:(t,e,o)=>o>=1888&&"xl"in t?t.xl:o>=1248&&"lg"in t?t.lg:o>=960&&"md"in t?t.md:o>=600&&"sm"in t?t.sm:"xs"in t?t.xs:e,calcComponentHeightAsStringUnbound(){return"".concat((arguments.length>2&&void 0!==arguments[2]?arguments[2]:0)*(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0),"px")}}}}}]);