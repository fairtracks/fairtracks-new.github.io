(window.webpackJsonp=window.webpackJsonp||[]).push([[45,29,30,31,34,35,39,40,41,43],{799:function(t,e,n){var content=n(802);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("8ae11210",content,!0,{sourceMap:!1})},800:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:""}}},r=n(19),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"text-h4 font-weight-bold mb-5"},[t._v(t._s(t.title))])}),[],!1,null,null,null);e.default=component.exports},801:function(t,e,n){"use strict";n(799)},802:function(t,e,n){var o=n(9)(!1);o.push([t.i,".gradient-fill-header .v-responsive__content{background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.banner{max-height:150px}",""]),t.exports=o},803:function(t,e,n){"use strict";n.r(e);var o={props:{pageHeader:{type:String},pageHeaderImages:{type:Array,default:()=>[]}}},r=(n(801),n(19)),l=n(32),c=n.n(l),d=n(789),v=n(194),m=n(184),h=n(790),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-responsive",{attrs:{"aspect-ratio":567/56.3,"max-height":"150px","min-height":"75px"}},[n("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(t,i){return n("v-col",{key:i,attrs:{cols:"4"}},[n("UiSmartImg",{staticClass:"gradient-fill-header",attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px","image-asset":t,contain:"","svg-in-vuetify-img":""}})],1)})),1),t._v(" "),n("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[n("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n      "+t._s(t.pageHeader.toUpperCase())+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{UiSmartImg:n(376).default}),c()(component,{VCol:d.a,VOverlay:v.a,VResponsive:m.a,VRow:h.a})},806:function(t,e,n){"use strict";n.r(e);var o={props:{id:{type:String,default:null},href:{type:String,default:null},text:{type:String,default:""},xLarge:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:()=>({prevButtonHoverId:""}),computed:{buttonHoverId(){return this.$store.state.buttonHover.buttonHoverId},shouldHover(){return this.doHover&&""===this.buttonHoverId}},methods:{setButtonHoverId(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit("buttonHover/setButtonHoverId",t)},unsetButtonHoverId(){this.prevButtonHoverId="",this.$store.commit("buttonHover/setButtonHoverId",this.prevButtonHoverId)}}},r=n(19),l=n(32),c=n.n(l),d=n(210),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"simplebutton"},[n("v-btn",{staticClass:"secondary",class:t.shouldHover?"custom-hover":null,attrs:{id:t.id,"x-large":t.xLarge,href:t.href,ripple:!1},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseleave:function(e){return t.unsetButtonHoverId(t.id)},click:function(e){return e.stopPropagation(),t.$emit("btn-click",!0)}}},[t._v("\n    "+t._s(t.text)+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a})},822:function(t,e,n){"use strict";var o=n(106),r=n(25),l=n(4),c=n(5);e.a=Object(l.a)(o.a,r.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},826:function(t,e,n){var content=n(847);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("002cfee6",content,!0,{sourceMap:!1})},827:function(t,e,n){var content=n(849);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("7a61d650",content,!0,{sourceMap:!1})},846:function(t,e,n){"use strict";n(826)},847:function(t,e,n){var o=n(9)(!1);o.push([t.i,".team-column[data-v-c4feffc0]{max-width:250px;min-width:250px}",""]),t.exports=o},848:function(t,e,n){"use strict";n(827)},849:function(t,e,n){var o=n(9)(!1);o.push([t.i,".zoom{-webkit-transform:scale(1.025) translateY(-10px);transform:scale(1.025) translateY(-10px)}.notzoom,.zoom{transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}",""]),t.exports=o},850:function(t,e,n){var content=n(851);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("613880ab",content,!0,{sourceMap:!1})},851:function(t,e,n){var o=n(9)(!1);o.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.03);transform:scale(1.03)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes animate-dialog{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.03);transform:scale(1.03)}to{-webkit-transform:scale(1);transform:scale(1)}}",""]),t.exports=o},888:function(t,e,n){"use strict";n.r(e);var o={props:{value:Boolean,buttons:{type:Array,default:()=>[]}},computed:{show:{get(){return this.value},set(t){this.$emit("input",t)}}}},r=n(19),l=n(32),c=n.n(l),d=n(195),v=n(789),m=(n(850),n(792)),h=n(97),f=n(110),y=n(216),x=n(218),_=n(217),w=n(215),k=n(25),C=n(111),I=n(4),S=n(5),T=n(0);function A(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(e){$(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function $(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var B=Object(I.a)(h.a,f.a,y.a,x.a,_.a,w.a,k.a).extend({name:"v-dialog",directives:{ClickOutside:C.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{["v-dialog ".concat(this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(S.e)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):x.a.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{this.$refs.content.contains(document.activeElement)||(this.previousActiveElement=document.activeElement,this.$refs.content.focus()),this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===T.x.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((()=>e&&e.focus()))}this.$emit("keydown",t)},onFocusin(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((t=>t.contains(e)))){var n=[...this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].find((t=>!t.hasAttribute("disabled")));n&&n.focus()}}},genContent(){return this.showLazyContent((()=>[this.$createElement(m.a,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:O({role:"document",tabindex:this.isActive?0:void 0},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=O(O({},data.style),{},{maxWidth:Object(T.h)(this.maxWidth),width:Object(T.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}}),j=n(790),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("v-card",[t._t("default"),t._v(" "),n("v-col",{attrs:{"align-self":"end",cols:"12"}},[n("v-row",{class:1==t.buttons.length?"justify-end":"justify-space-between",attrs:{"no-gutters":""}},t._l(t.buttons,(function(button,e){return n("v-col",{key:"s_"+e,staticClass:"pa-0 ma-0",attrs:{cols:"auto","align-self":"end"}},[n("UiStyledButton",{staticClass:"text-weight-light",attrs:{id:"btn_"+e,href:button.link,text:button.text},on:{"btn-click":function(e){!button.link&&(t.show=!1)}}})],1)})),1)],1)],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{UiStyledButton:n(806).default}),c()(component,{VCard:d.a,VCol:v.a,VDialog:B,VRow:j.a})},889:function(t,e,n){"use strict";n.r(e);var o={props:{teamName:{type:String,default:""},ourTeam:{type:Array,default:()=>[]}}},r=(n(846),n(19)),l=n(32),c=n.n(l),d=n(789),v=n(137),m=n(790),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"pa-16",class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4"},[n("v-row",{attrs:{"no-gutters":""}},[n("UiMinorTitle",{attrs:{title:t.teamName}}),t._v(" "),t._l(t.ourTeam,(function(e,i){return n("v-col",{key:"group-"+i,attrs:{cols:"12"}},[n("h4",{staticClass:"text-h5 text-center pb-5 pt-15 px-5"},[t._v(t._s(e.group))]),t._v(" "),n("v-row",t._l(e.members,(function(e,o){return n("v-col",{key:"person-"+o,attrs:{cols:"12"}},[n("v-row",{staticClass:"mx-auto team-column py-0",class:{"flex-row-reverse":o%2==1}},[n("v-col",{staticClass:"pa-0",attrs:{cols:"6"}},[n("v-img",{class:o%2==1?"mr-auto":"ml-auto",attrs:{src:t.$getNonImageAssetPath("images","team",e.photo),height:"135",width:"102"}})],1),t._v(" "),n("v-col",{staticClass:"my-auto",attrs:{cols:"6"}},[n("v-row",{staticClass:"pa-4",class:o%2==1?"text-right":"text-left"},[n("div",{staticClass:"text-h6 font-weight-bold"},[t._v("\n                  "+t._s(e.name)+"\n                ")]),t._v(" "),e.position?n("div",{staticClass:"text-uppercase"},[t._v("\n                  "+t._s(e.position)+"\n                ")]):t._e()])],1)],1)],1)})),1)],1)})),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("h4",{staticClass:"text-h6 font-italic font-weight-light text-center pb-5 pt-15 px-5"},[t._v("\n        * Has changed affiliation since contributing to FAIRtracks\n      ")])])],2)],1)}),[],!1,null,"c4feffc0",null);e.default=component.exports;c()(component,{UiMinorTitle:n(800).default}),c()(component,{VCol:d.a,VImg:v.a,VRow:m.a})},890:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:""},cards:{type:Array,default:()=>[]}}},r=(n(848),n(19)),l=n(32),c=n.n(l),d=n(195),v=n(789),m=n(822),h=n(137),f=n(790),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-row",{staticClass:"ma-0 pb-4",attrs:{"no-gutters":""}},[n("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),n("v-col",{staticClass:"ma-0",attrs:{cols:"12"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return t._l(t.cards,(function(e,r){return n("v-card",{key:"c_"+r,staticClass:"transition-swing mx-auto",class:o?"zoom":"notzoom",staticStyle:{"z-index":"2"},attrs:{elevation:o?24:2,href:e.link?e.link:null,ripple:!1,"max-width":e.maxWidth?e.maxWidth:null},on:{click:function(e){return t.$emit("btn-click",!0)}}},[n("v-img",{staticClass:"ma-6",attrs:{contain:"",src:t.$getNonImageAssetPath("images",e.img[0],e.img[1])}})],1)}))}}])})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{UiMinorTitle:n(800).default}),c()(component,{VCard:d.a,VCol:v.a,VHover:m.a,VImg:h.a,VRow:f.a})},891:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:""},contactPoints:{type:Array,default:()=>[]},githubIssues:{type:Object,default:null}}},r=n(19),l=n(32),c=n.n(l),d=n(789),v=n(186),m=n(187),h=n(98),f=n(38),y=n(83),x=n(790),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},[n("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-list",{staticClass:"transparent",attrs:{"two-line":"","max-width":"100%"}},[t._l(t.contactPoints,(function(e,o){return n("v-list-item",{key:"c_"+o},[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[t._v(" "+t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),n("v-list-item-title",{staticClass:"text-wrap"},[n("a",{attrs:{href:e.link}},[t._v("\n                "+t._s(e.linkText)+"\n              ")])])],1)],1)})),t._v(" "),t.githubIssues?n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[t._v(" "+t._s(t.githubIssues.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n              "+t._s(t.githubIssues.title)+"\n            ")]),t._v(" "),t._l(t.githubIssues.repos,(function(e,o){return n("v-list-item-title",{key:"r_"+o,staticClass:"text-wrap"},[n("a",{attrs:{href:e.issuesLink}},[t._v("\n                "+t._s(e.title)+"\n              ")])])})),t._v(" "),n("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n              "+t._s(t.githubIssues.endComment)+"\n              "),n("nuxt-link",{attrs:{to:"/code"}},[t._v(t._s(t.githubIssues.endCommentPageText))])],1)],2)],1):t._e()],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{UiMinorTitle:n(800).default}),c()(component,{VCol:d.a,VIcon:v.a,VList:m.a,VListItem:h.a,VListItemContent:f.a,VListItemIcon:y.a,VListItemTitle:f.c,VRow:x.a})},892:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:""},text:{type:String,default:""},references:{type:Array,default:()=>[]}}},r=n(19),l=n(32),c=n.n(l),d=n(789),v=n(186),m=n(187),h=n(98),f=n(38),y=n(83),x=n(790),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-row",{staticClass:"ma-0 pt-16",attrs:{"no-gutters":""}},[n("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("p",{staticClass:"font-italic"},[t._v("\n        "+t._s(t.text)+"\n      ")])]),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-list",t._l(t.references,(function(e,o){return n("v-list-item",{key:"r_"+o},[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[t._v(" "+t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n              "+t._s(e.text)+"\n              "),e.doi?n("a",{attrs:{href:"https://doi.org/"+e.doi}},[t._v("doi: "+t._s(e.doi))]):t._e()])],1)],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{UiMinorTitle:n(800).default}),c()(component,{VCol:d.a,VIcon:v.a,VList:m.a,VListItem:h.a,VListItemContent:f.a,VListItemIcon:y.a,VListItemTitle:f.c,VRow:x.a})},893:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:""},logos:{type:Array,default:()=>[]}}},r=n(19),l=n(32),c=n.n(l),d=n(789),v=n(137),m=n(184),h=n(790),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-row",{staticClass:"ma-0 pt-16",attrs:{"no-gutters":""}},[n("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-responsive",{attrs:{"aspect-ratio":t.$vuetify.breakpoint.mdAndUp?.35:.7,"max-height":"1000"}},[n("v-row",{staticClass:"ma-0 pt-0 fill-height d-flow align-content-space-around"},t._l(t.logos,(function(e,i){return n("v-col",{key:e,staticClass:"pa-8 my-auto",attrs:{cols:"6"}},[n("v-img",{staticClass:"ma-auto",attrs:{src:t.$getNonImageAssetPath("images","logos",e),contain:"","max-width":"200"}})],1)})),1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{UiMinorTitle:n(800).default}),c()(component,{VCol:d.a,VImg:v.a,VResponsive:m.a,VRow:h.a})},965:function(t,e,n){"use strict";n.r(e);var o=n(50),r={data(){return{pageHeader:"Community",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","LP.svg"),this.$getImageAssetObject("images","tracktypes","LS.svg"),this.$getImageAssetObject("images","tracktypes","LBP.svg")],surveyTitle:"Fill out our community survey!",surveyCards:[{link:"",img:["media","FAIRtracks-survey-ad-webpage.png"],maxWidth:"850px"}],showSurveyDialog:!1,surveyDialogButtons:[{text:"Later"},{text:"Fill out survey!",link:"https://fairtracks.net/survey"}],contactUsTitle:"Contact us!",contactPoints:[{icon:o.b,title:"Join the FAIRtracks announcement mailing list:",link:"https://sympa.uio.no/elixir.no/subscribe/fairtracks-info",linkText:"Subscribe here"},{icon:o.y,title:"Follow us on Twitter:",link:"https://twitter.com/fairtracks",linkText:"@fairtracks"},{icon:o.i,title:"Send an e-mail to the international FAIRtracks team:",link:"mailto:fairtracks@elixir.no",linkText:"fairtracks@elixir.no"}],githubIssues:{icon:o.m,title:"Submit an issue to a GitHub repo:",repos:[{title:"The FAIRtracks draft standard",issuesLink:"https://github.com/fairtracks/fairtracks_standard/issues"},{title:"TrackFind",issuesLink:"https://github.com/elixir-oslo/trackfind/issues"},{title:"The FAIRtracks validator",issuesLink:"https://github.com/fairtracks/fairtracks_validator/issues"}],endComment:"...or any of the others listed on the",endCommentPageLink:"/code",endCommentPageText:"source code page"},citeUsTitle:"Cite us!",citeUsText:"Please cite our primary publication in any research that uses or extends FAIRtracks:",references:[{icon:o.s,text:"Gundersen, S. et al. Recommendations to the FAIRification of genomic track metadata. F1000Res 10, ELIXIR-268 (2021).",doi:"10.12688/f1000research.28449.1"}],recommendationsTitle:"Recommendations",recommendationCards:[{link:"https://elixir-europe.org/platforms/interoperability/rirs",img:["logos","elixir-rir.png"]}],logosTitle:"Funding / Acknowledgements",logos:["elixir-norway.png","elixir-spain.png","embl-ebi.svg","inb.png","bsc.jpeg","rcn.png","uio.png","uib.png","ntnu.png"],teamName:"The FAIRtracks team",ourTeam:[{group:"ELIXIR Norway at the Centre for Bioinformatics, University of Oslo (UiO)",members:[{name:"Sveinung Gundersen",position:"",photo:"sveinung-gundersen.png"},{name:"Dmytro Titov*",position:"",photo:"dmytro-titov.png"},{name:"Radmila Kompova*",position:"",photo:"radmila-kompova.png"},{name:"Ahmed Ghanem",position:"",photo:"ahmed-ghanem.png"},{name:"Nazeefa Fatima",position:"",photo:"nazeefa-fatima.png"},{name:"Federico Bianchini",position:"",photo:"federico-bianchini.png"},{name:"Eivind Hovig",position:"",photo:"eivind-hovig.png"}]},{group:"ELIXIR Spain at the Life Sciences Department from the Barcelona Supercomputer Centre (BSC)",members:[{name:"José Mariá Fernández",position:"",photo:"jose-maria-fernandez.png"},{name:"Salvador Capella Gutierrez",position:"",photo:"salvador-capella-gutierrez.png"}]},{group:"The Track Hub Registry group at EMBL-EBI, Hinxton, UK",members:[{name:"Sanjay Boddu",position:"",photo:"sanjay-boddu.png"},{name:"Peter Harrison",position:"",photo:"peter-harrison.png"},{name:"Kieron Taylor*",position:"",photo:"kieron-taylor.png"},{name:"Daniel Zerbino*",position:"",photo:"daniel-zerbino.png"}]},{group:"ELIXIR Norway at the Computational Biology Unit, University of Bergen (UiB)",members:[{name:"Matúš Kalaš",position:"",photo:"matus-kalas.png"}]},{group:"ELIXIR Norway at the Department of Clinical and Molecular Medicine, Norwegian University of Science and Technology (NTNU)",members:[{name:"Finn Drabløs",position:"",photo:"finn-drablos.png"}]}]}},head:()=>({title:"Community",meta:[]}),methods:{test(){this.show=!1,console.log("asdsa")}}},l=n(19),c=n(32),d=n.n(c),v=n(789),m=n(137),h=n(790),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("UiPageHeaderBanner",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),n("v-row",{staticClass:"pa-0",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pt-16 pt-md-0",attrs:{md:"6",cols:"12"}},[n("SectionsTeamColumn",{staticClass:"fill-height",attrs:{"our-team":t.ourTeam,"team-name":t.teamName}})],1),t._v(" "),n("v-col",{staticClass:"pa-16",attrs:{md:"6",cols:"12"}},[n("SectionsClickableCards",{staticClass:"survey",attrs:{title:t.surveyTitle,cards:t.surveyCards},on:{"btn-click":function(e){t.showSurveyDialog=!0}}}),t._v(" "),n("UiPopupDialog",{attrs:{buttons:t.surveyDialogButtons},model:{value:t.showSurveyDialog,callback:function(e){t.showSurveyDialog=e},expression:"showSurveyDialog"}},[n("v-img",{attrs:{contain:"",src:t.$getNonImageAssetPath("images",t.surveyCards[0].img[0],t.surveyCards[0].img[1])}})],1),t._v(" "),n("SectionsContactUs",{attrs:{title:t.contactUsTitle,"contact-points":t.contactPoints,"github-issues":t.githubIssues}}),t._v(" "),n("SectionsCiteUs",{attrs:{title:t.citeUsTitle,text:t.citeUsText,references:t.references}}),t._v(" "),n("v-row",{staticClass:"pa-0 pt-16",attrs:{"no-gutters":""}},[n("v-col",{attrs:{md:"12",cols:"12"}},[n("SectionsClickableCards",{attrs:{title:t.recommendationsTitle,cards:t.recommendationCards}})],1)],1),t._v(" "),n("SectionsLogoList",{attrs:{title:t.logosTitle,logos:t.logos}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{UiPageHeaderBanner:n(803).default,SectionsTeamColumn:n(889).default,SectionsClickableCards:n(890).default,UiPopupDialog:n(888).default,SectionsContactUs:n(891).default,SectionsCiteUs:n(892).default,SectionsLogoList:n(893).default}),d()(component,{VCol:v.a,VImg:m.a,VRow:h.a})}}]);