(window.webpackJsonp=window.webpackJsonp||[]).push([[47,30,31,32,35,36,40,41,42,44,45],{821:function(t,e,i){var a=i(825);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(10).default)("8ae11210",a,!0,{sourceMap:!1})},822:function(t,e,i){"use strict";i.r(e);var a={props:{imageAsset:{type:Object,required:!0}},data:()=>({fullCoverStyle:"background-position: center center; position: absolute; background-size: cover; width: 100%;object-fit: contain;z-index: -1"}),computed:{altText(){return this.alt?this.alt:this.imageAsset.filename}}},s=i(22),n=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[t.imageAsset.isSvgImage?i("div",{staticClass:"lazyload fill-height",style:t.fullCoverStyle,attrs:{"data-bgset":t.imageAsset.optimizedImagePath,"data-sizes":"auto"}}):t._e(),t._v(" "),t.imageAsset.isSvgImage?t._e():i("div",{staticClass:"lazyload fill-height",style:t.fullCoverStyle,attrs:{"data-bgset":t.imageAsset.responsiveWebpImage.srcSet+" [type: image/webp] | "+t.imageAsset.responsiveImage.srcSet,"data-sizes":"auto"}})])}),[],!1,null,null,null);e.default=n.exports},823:function(t,e,i){"use strict";i.r(e);var a={props:{title:{type:String,default:""}}},s=i(22),n=Object(s.a)(a,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"text-h4 font-weight-bold mb-5"},[t._v(t._s(t.title))])}),[],!1,null,null,null);e.default=n.exports},824:function(t,e,i){"use strict";i(821)},825:function(t,e,i){var a=i(9)(!1);a.push([t.i,".gradient-fill-header .v-responsive__content{background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.banner{max-height:150px}",""]),t.exports=a},826:function(t,e,i){"use strict";i.r(e);var a={props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:()=>[]}}},s=(i(824),i(22)),n=i(31),o=i.n(n),r=i(810),l=i(196),c=i(186),u=i(811),d=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-responsive",{attrs:{"aspect-ratio":567/56.3,"max-height":"150px","min-height":"75px"}},[i("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(t,e){return i("v-col",{key:e,attrs:{cols:"4"}},[i("v-row",{staticClass:"ma-0 gradient-fill-header",attrs:{justify:"center"}},[i("v-responsive",{staticStyle:{"z-index":"2"},attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[i("UiSmartBackgroundImg",{attrs:{"image-asset":t}})],1)],1)],1)})),1),t._v(" "),i("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[i("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n      "+t._s(t.pageHeader.toUpperCase())+"\n    ")])])],1)}),[],!1,null,null,null);e.default=d.exports;o()(d,{UiSmartBackgroundImg:i(822).default}),o()(d,{VCol:r.a,VOverlay:l.a,VResponsive:c.a,VRow:u.a})},830:function(t,e,i){"use strict";i.r(e);var a={props:{id:{type:String,default:null},href:{type:String,default:null},text:{type:String,default:""},xLarge:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:()=>({prevButtonHoverId:""}),computed:{buttonHoverId(){return this.$store.state.buttonHover.buttonHoverId},shouldHover(){return this.doHover&&""===this.buttonHoverId}},methods:{setButtonHoverId(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit("buttonHover/setButtonHoverId",t)},unsetButtonHoverId(){this.prevButtonHoverId="",this.$store.commit("buttonHover/setButtonHoverId",this.prevButtonHoverId)}}},s=i(22),n=i(31),o=i.n(n),r=i(215),l=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"simplebutton"},[i("v-btn",{staticClass:"secondary",class:t.shouldHover?"custom-hover":null,attrs:{id:t.id,"x-large":t.xLarge,href:t.href,ripple:!1},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseleave:function(e){return t.unsetButtonHoverId(t.id)},click:function(e){return e.stopPropagation(),t.$emit("btn-click",!0)}}},[t._v("\n    "+t._s(t.text)+"\n  ")])],1)}),[],!1,null,null,null);e.default=l.exports;o()(l,{VBtn:r.a})},846:function(t,e,i){"use strict";var a=i(106),s=i(25),n=i(4),o=i(6);e.a=Object(n.a)(a.a,s.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(o.c)("v-hover should only contain a single element",this),t)):(Object(o.c)("v-hover is missing a default scopedSlot or bound value",this),null);var t}})},851:function(t,e,i){var a=i(878);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(10).default)("8adced08",a,!0,{sourceMap:!1})},852:function(t,e,i){var a=i(880);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(10).default)("7a61d650",a,!0,{sourceMap:!1})},877:function(t,e,i){"use strict";i(851)},878:function(t,e,i){var a=i(9)(!1);a.push([t.i,".team-column[data-v-697c3e17]{max-width:250px;min-width:250px}",""]),t.exports=a},879:function(t,e,i){"use strict";i(852)},880:function(t,e,i){var a=i(9)(!1);a.push([t.i,".zoom{-webkit-transform:scale(1.025) translateY(-10px);transform:scale(1.025) translateY(-10px)}.notzoom,.zoom{transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}",""]),t.exports=a},881:function(t,e,i){var a=i(882);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(10).default)("613880ab",a,!0,{sourceMap:!1})},882:function(t,e,i){var a=i(9)(!1);a.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.03);transform:scale(1.03)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes animate-dialog{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.03);transform:scale(1.03)}to{-webkit-transform:scale(1);transform:scale(1)}}",""]),t.exports=a},913:function(t,e,i){"use strict";i.r(e);var a={props:{value:Boolean,buttons:{type:Array,default:()=>[]}},computed:{show:{get(){return this.value},set(t){this.$emit("input",t)}}}},s=i(22),n=i(31),o=i.n(n),r=i(197),l=i(810),c=(i(881),i(813)),u=i(98),d=i(110),m=i(221),v=i(223),h=i(222),p=i(220),g=i(25),f=i(111),b=i(4),y=i(6),x=i(0);function _(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function w(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?_(Object(i),!0).forEach((function(e){k(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):_(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function k(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var C=Object(b.a)(u.a,d.a,m.a,v.a,h.a,p.a,g.a).extend({name:"v-dialog",directives:{ClickOutside:f.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{["v-dialog ".concat(this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(y.e)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):v.a.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{this.$refs.content.contains(document.activeElement)||(this.previousActiveElement=document.activeElement,this.$refs.content.focus()),this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===x.x.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((()=>e&&e.focus()))}this.$emit("keydown",t)},onFocusin(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((t=>t.contains(e)))){var i=[...this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].find((t=>!t.hasAttribute("disabled")));i&&i.focus()}}},genContent(){return this.showLazyContent((()=>[this.$createElement(c.a,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:w({role:"document",tabindex:this.isActive?0:void 0},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=w(w({},t.style),{},{maxWidth:Object(x.h)(this.maxWidth),width:Object(x.h)(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}}),I=i(811),S=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("v-card",[t._t("default"),t._v(" "),i("v-col",{attrs:{"align-self":"end",cols:"12"}},[i("v-row",{class:1==t.buttons.length?"justify-end":"justify-space-between",attrs:{"no-gutters":""}},t._l(t.buttons,(function(e,a){return i("v-col",{key:"s_"+a,staticClass:"pa-0 ma-0",attrs:{cols:"auto","align-self":"end"}},[i("UiStyledButton",{staticClass:"text-weight-light",attrs:{id:"btn_"+a,href:e.link,text:e.text},on:{"btn-click":function(i){!e.link&&(t.show=!1)}}})],1)})),1)],1)],2)],1)}),[],!1,null,null,null);e.default=S.exports;o()(S,{UiStyledButton:i(830).default}),o()(S,{VCard:r.a,VCol:l.a,VDialog:C,VRow:I.a})},914:function(t,e,i){"use strict";i.r(e);var a={props:{teamName:{type:String,default:""},ourTeam:{type:Array,default:()=>[]}}},s=(i(877),i(22)),n=i(31),o=i.n(n),r=i(810),l=i(811),c=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"pa-16",class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4"},[i("v-row",{attrs:{"no-gutters":""}},[i("UiMinorTitle",{attrs:{title:t.teamName}}),t._v(" "),t._l(t.ourTeam,(function(e,a){return i("v-col",{key:"group-"+a,attrs:{cols:"12"}},[i("h4",{staticClass:"text-h5 text-center pb-5 pt-15 px-5"},[t._v(t._s(e.group))]),t._v(" "),i("v-row",t._l(e.members,(function(e,a){return i("v-col",{key:"person-"+a,attrs:{cols:"12"}},[i("v-row",{staticClass:"mx-auto team-column py-0",class:{"flex-row-reverse":a%2==1}},[i("v-col",{staticClass:"pa-0",attrs:{cols:"6"}},[i("UiSmartImg",{class:a%2==1?"mr-auto":"ml-auto",attrs:{"image-asset":t.$getImageAssetObject("images","team",e.photo),height:"135",width:"102"}})],1),t._v(" "),i("v-col",{staticClass:"my-auto",attrs:{cols:"6"}},[i("v-row",{staticClass:"pa-4",class:a%2==1?"text-right":"text-left"},[i("div",{staticClass:"text-h6 font-weight-bold"},[t._v("\n                  "+t._s(e.name)+"\n                ")]),t._v(" "),e.position?i("div",{staticClass:"text-uppercase"},[t._v("\n                  "+t._s(e.position)+"\n                ")]):t._e()])],1)],1)],1)})),1)],1)})),t._v(" "),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"text-h6 font-italic font-weight-light text-center pb-5 pt-15 px-5"},[t._v("\n        * Has changed affiliation since contributing to FAIRtracks\n      ")])])],2)],1)}),[],!1,null,"697c3e17",null);e.default=c.exports;o()(c,{UiMinorTitle:i(823).default,UiSmartImg:i(214).default}),o()(c,{VCol:r.a,VRow:l.a})},915:function(t,e,i){"use strict";i.r(e);var a={props:{title:{type:String,default:""},cards:{type:Array,default:()=>[]}}},s=(i(879),i(22)),n=i(31),o=i.n(n),r=i(197),l=i(810),c=i(846),u=i(811),d=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("v-row",{staticClass:"ma-0 pb-4",attrs:{"no-gutters":""}},[i("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),i("v-col",{staticClass:"ma-0",attrs:{cols:"12"}},[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return t._l(t.cards,(function(e,s){return i("v-card",{key:"c_"+s,staticClass:"transition-swing mx-auto",class:a?"zoom":"notzoom",staticStyle:{"z-index":"2"},attrs:{elevation:a?24:2,href:e.link?e.link:null,ripple:!1,"max-width":e.maxWidth?e.maxWidth:null},on:{click:function(e){return t.$emit("btn-click",!0)}}},[i("UiSmartImg",{staticClass:"ma-6",attrs:{contain:"","image-asset":t.$getImageAssetObject("images",e.img[0],e.img[1])}})],1)}))}}])})],1)],1)],1)}),[],!1,null,null,null);e.default=d.exports;o()(d,{UiMinorTitle:i(823).default,UiSmartImg:i(214).default}),o()(d,{VCard:r.a,VCol:l.a,VHover:c.a,VRow:u.a})},916:function(t,e,i){"use strict";i.r(e);var a={props:{title:{type:String,default:""},contactPoints:{type:Array,default:()=>[]},githubIssues:{type:Object,default:null}}},s=i(22),n=i(31),o=i.n(n),r=i(810),l=i(188),c=i(189),u=i(99),d=i(38),m=i(84),v=i(811),h=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},[i("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),i("v-col",{attrs:{cols:"12"}},[i("v-list",{staticClass:"transparent",attrs:{"two-line":"","max-width":"100%"}},[t._l(t.contactPoints,(function(e,a){return i("v-list-item",{key:"c_"+a},[i("v-list-item-icon",[i("v-icon",{attrs:{color:"primary"}},[t._v(" "+t._s(e.icon))])],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),i("v-list-item-title",{staticClass:"text-wrap"},[i("a",{attrs:{href:e.link}},[t._v("\n                "+t._s(e.linkText)+"\n              ")])])],1)],1)})),t._v(" "),t.githubIssues?i("v-list-item",[i("v-list-item-icon",[i("v-icon",{attrs:{color:"primary"}},[t._v(" "+t._s(t.githubIssues.icon))])],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n              "+t._s(t.githubIssues.title)+"\n            ")]),t._v(" "),t._l(t.githubIssues.repos,(function(e,a){return i("v-list-item-title",{key:"r_"+a,staticClass:"text-wrap"},[i("a",{attrs:{href:e.issuesLink}},[t._v("\n                "+t._s(e.title)+"\n              ")])])})),t._v(" "),i("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n              "+t._s(t.githubIssues.endComment)+"\n              "),i("nuxt-link",{attrs:{to:"/code"}},[t._v(t._s(t.githubIssues.endCommentPageText))])],1)],2)],1):t._e()],2)],1)],1)],1)}),[],!1,null,null,null);e.default=h.exports;o()(h,{UiMinorTitle:i(823).default}),o()(h,{VCol:r.a,VIcon:l.a,VList:c.a,VListItem:u.a,VListItemContent:d.a,VListItemIcon:m.a,VListItemTitle:d.c,VRow:v.a})},917:function(t,e,i){"use strict";i.r(e);var a={props:{title:{type:String,default:""},text:{type:String,default:""},references:{type:Array,default:()=>[]}}},s=i(22),n=i(31),o=i.n(n),r=i(810),l=i(188),c=i(189),u=i(99),d=i(38),m=i(84),v=i(811),h=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("v-row",{staticClass:"ma-0 pt-16",attrs:{"no-gutters":""}},[i("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),i("v-col",{attrs:{cols:"12"}},[i("p",{staticClass:"font-italic"},[t._v("\n        "+t._s(t.text)+"\n      ")])]),t._v(" "),i("v-col",{attrs:{cols:"12"}},[i("v-list",t._l(t.references,(function(e,a){return i("v-list-item",{key:"r_"+a},[i("v-list-item-icon",[i("v-icon",{attrs:{color:"primary"}},[t._v(" "+t._s(e.icon))])],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n              "+t._s(e.text)+"\n              "),e.doi?i("a",{attrs:{href:"https://doi.org/"+e.doi}},[t._v("doi: "+t._s(e.doi))]):t._e()])],1)],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=h.exports;o()(h,{UiMinorTitle:i(823).default}),o()(h,{VCol:r.a,VIcon:l.a,VList:c.a,VListItem:u.a,VListItemContent:d.a,VListItemIcon:m.a,VListItemTitle:d.c,VRow:v.a})},918:function(t,e,i){"use strict";i.r(e);var a={props:{title:{type:String,default:""},logos:{type:Array,default:()=>[]}}},s=i(22),n=i(31),o=i.n(n),r=i(810),l=i(186),c=i(811),u=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("v-row",{staticClass:"ma-0 pt-16",attrs:{"no-gutters":""}},[i("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),i("v-col",{attrs:{cols:"12"}},[i("v-responsive",{attrs:{"aspect-ratio":t.$vuetify.breakpoint.mdAndUp?.35:.7,"max-height":"1000"}},[i("v-row",{staticClass:"ma-0 pt-0 fill-height d-flow align-content-space-around"},t._l(t.logos,(function(e,a){return i("v-col",{key:a,staticClass:"pa-8 my-auto",attrs:{cols:"6"}},[i("UiSmartImg",{staticClass:"ma-auto",attrs:{"image-asset":t.$getImageAssetObject("images","logos",e),contain:"","max-width":"200"}})],1)})),1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=u.exports;o()(u,{UiMinorTitle:i(823).default,UiSmartImg:i(214).default}),o()(u,{VCol:r.a,VResponsive:l.a,VRow:c.a})},994:function(t,e,i){"use strict";i.r(e);var a=i(51),s={data(){return{pageHeader:"Community",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","LP.svg"),this.$getImageAssetObject("images","tracktypes","LS.svg"),this.$getImageAssetObject("images","tracktypes","LBP.svg")],surveyTitle:"Fill out our community survey!",surveyCards:[{link:"",img:["media","FAIRtracks-survey-ad-webpage.png"],maxWidth:"850px"}],showSurveyDialog:!1,surveyDialogButtons:[{text:"Later"},{text:"Fill out survey!",link:"https://fairtracks.net/survey"}],contactUsTitle:"Contact us!",contactPoints:[{icon:a.b,title:"Join the FAIRtracks announcement mailing list:",link:"https://sympa.uio.no/elixir.no/subscribe/fairtracks-info",linkText:"Subscribe here"},{icon:a.y,title:"Follow us on Twitter:",link:"https://twitter.com/fairtracks",linkText:"@fairtracks"},{icon:a.i,title:"Send an e-mail to the international FAIRtracks team:",link:"mailto:fairtracks@elixir.no",linkText:"fairtracks@elixir.no"}],githubIssues:{icon:a.m,title:"Submit an issue to a GitHub repo:",repos:[{title:"The FAIRtracks draft standard",issuesLink:"https://github.com/fairtracks/fairtracks_standard/issues"},{title:"TrackFind",issuesLink:"https://github.com/elixir-oslo/trackfind/issues"},{title:"The FAIRtracks validator",issuesLink:"https://github.com/fairtracks/fairtracks_validator/issues"}],endComment:"...or any of the others listed on the",endCommentPageLink:"/code",endCommentPageText:"source code page"},citeUsTitle:"Cite us!",citeUsText:"Please cite our primary publication in any research that uses or extends FAIRtracks:",references:[{icon:a.s,text:"Gundersen, S. et al. Recommendations to the FAIRification of genomic track metadata. F1000Res 10, ELIXIR-268 (2021).",doi:"10.12688/f1000research.28449.1"}],recommendationsTitle:"Recommendations",recommendationCards:[{link:"https://elixir-europe.org/platforms/interoperability/rirs",img:["logos","elixir-rir.png"]}],logosTitle:"Funding / Acknowledgements",logos:["elixir-norway.png","elixir-spain.png","embl-ebi.svg","inb.png","bsc.jpeg","rcn.png","uio.png","uib.png","ntnu.png"],teamName:"The FAIRtracks team",ourTeam:[{group:"ELIXIR Norway at the Centre for Bioinformatics, University of Oslo (UiO)",members:[{name:"Sveinung Gundersen",position:"",photo:"sveinung-gundersen.png"},{name:"Dmytro Titov*",position:"",photo:"dmytro-titov.png"},{name:"Radmila Kompova*",position:"",photo:"radmila-kompova.png"},{name:"Ahmed Ghanem",position:"",photo:"ahmed-ghanem.png"},{name:"Nazeefa Fatima",position:"",photo:"nazeefa-fatima.png"},{name:"Federico Bianchini",position:"",photo:"federico-bianchini.png"},{name:"Eivind Hovig",position:"",photo:"eivind-hovig.png"}]},{group:"ELIXIR Spain at the Life Sciences Department from the Barcelona Supercomputer Centre (BSC)",members:[{name:"José Mariá Fernández",position:"",photo:"jose-maria-fernandez.png"},{name:"Salvador Capella Gutierrez",position:"",photo:"salvador-capella-gutierrez.png"}]},{group:"The Track Hub Registry group at EMBL-EBI, Hinxton, UK",members:[{name:"Sanjay Boddu",position:"",photo:"sanjay-boddu.png"},{name:"Peter Harrison",position:"",photo:"peter-harrison.png"},{name:"Kieron Taylor*",position:"",photo:"kieron-taylor.png"},{name:"Daniel Zerbino*",position:"",photo:"daniel-zerbino.png"}]},{group:"ELIXIR Norway at the Computational Biology Unit, University of Bergen (UiB)",members:[{name:"Matúš Kalaš",position:"",photo:"matus-kalas.png"}]},{group:"ELIXIR Norway at the Department of Clinical and Molecular Medicine, Norwegian University of Science and Technology (NTNU)",members:[{name:"Finn Drabløs*",position:"",photo:"finn-drablos.png"}]}]}},head:()=>({title:"Community",meta:[]}),methods:{test(){this.show=!1}}},n=i(22),o=i(31),r=i.n(o),l=i(810),c=i(138),u=i(811),d=Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("UiPageHeaderBanner",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),i("v-row",{staticClass:"pa-0",attrs:{"no-gutters":""}},[i("v-col",{staticClass:"pt-0",attrs:{md:"6",cols:"12"}},[i("SectionsTeamColumn",{staticClass:"fill-height",attrs:{"our-team":t.ourTeam,"team-name":t.teamName}})],1),t._v(" "),i("v-col",{staticClass:"pa-16",attrs:{md:"6",cols:"12"}},[i("SectionsClickableCards",{staticClass:"survey",attrs:{title:t.surveyTitle,cards:t.surveyCards},on:{"btn-click":function(e){t.showSurveyDialog=!0}}}),t._v(" "),i("UiPopupDialog",{attrs:{buttons:t.surveyDialogButtons},model:{value:t.showSurveyDialog,callback:function(e){t.showSurveyDialog=e},expression:"showSurveyDialog"}},[i("v-img",{attrs:{contain:"",src:t.$getNonImageAssetPath("images",t.surveyCards[0].img[0],t.surveyCards[0].img[1])}})],1),t._v(" "),i("SectionsContactUs",{attrs:{title:t.contactUsTitle,"contact-points":t.contactPoints,"github-issues":t.githubIssues}}),t._v(" "),i("SectionsCiteUs",{attrs:{title:t.citeUsTitle,text:t.citeUsText,references:t.references}}),t._v(" "),i("v-row",{staticClass:"pa-0 pt-16",attrs:{"no-gutters":""}},[i("v-col",{attrs:{md:"12",cols:"12"}},[i("SectionsClickableCards",{attrs:{title:t.recommendationsTitle,cards:t.recommendationCards}})],1)],1),t._v(" "),i("SectionsLogoList",{attrs:{title:t.logosTitle,logos:t.logos}})],1)],1)],1)}),[],!1,null,null,null);e.default=d.exports;r()(d,{UiPageHeaderBanner:i(826).default,SectionsTeamColumn:i(914).default,SectionsClickableCards:i(915).default,UiPopupDialog:i(913).default,SectionsContactUs:i(916).default,SectionsCiteUs:i(917).default,SectionsLogoList:i(918).default}),r()(d,{VCol:l.a,VImg:c.a,VRow:u.a})}}]);