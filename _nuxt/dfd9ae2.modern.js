(window.webpackJsonp=window.webpackJsonp||[]).push([[3,36,43,44],{374:function(t,e,r){"use strict";var o=r(210);e.a=o.a},801:function(t,e,r){"use strict";r.r(e);var o={props:{imageAsset:{type:Object,required:!0}},data:()=>({fullCoverStyle:"background-position: center center; position: absolute; background-size: cover; width: 100%;object-fit: contain;z-index: -1"}),computed:{altText(){return this.alt?this.alt:this.imageAsset.filename}}},n=r(19),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[t.imageAsset.isSvgImage?r("div",{staticClass:"lazyload fill-height",style:t.fullCoverStyle,attrs:{"data-bgset":t.imageAsset.optimizedImagePath,"data-sizes":"auto"}}):t._e(),t._v(" "),t.imageAsset.isSvgImage?t._e():r("div",{staticClass:"lazyload fill-height",style:t.fullCoverStyle,attrs:{"data-bgset":t.imageAsset.responsiveWebpImage.srcSet+" [type: image/webp] | "+t.imageAsset.responsiveImage.srcSet,"data-sizes":"auto"}})])}),[],!1,null,null,null);e.default=component.exports},808:function(t,e,r){"use strict";r.r(e);var o={props:{id:{type:String,default:null},href:{type:String,default:null},text:{type:String,default:""},xLarge:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:()=>({prevButtonHoverId:""}),computed:{buttonHoverId(){return this.$store.state.buttonHover.buttonHoverId},shouldHover(){return this.doHover&&""===this.buttonHoverId}},methods:{setButtonHoverId(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit("buttonHover/setButtonHoverId",t)},unsetButtonHoverId(){this.prevButtonHoverId="",this.$store.commit("buttonHover/setButtonHoverId",this.prevButtonHoverId)}}},n=r(19),l=r(32),c=r.n(l),h=r(210),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"simplebutton"},[r("v-btn",{staticClass:"secondary",class:t.shouldHover?"custom-hover":null,attrs:{id:t.id,"x-large":t.xLarge,href:t.href,ripple:!1},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseleave:function(e){return t.unsetButtonHoverId(t.id)},click:function(e){return e.stopPropagation(),t.$emit("btn-click",!0)}}},[t._v("\n    "+t._s(t.text)+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:h.a})},810:function(t,e,r){"use strict";var o=r(104);e.a=o.a.extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return o.a.options.computed.classes.call(this)}},methods:{genData:o.a.options.methods.genData}})},818:function(t,e,r){var content=r(819);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("26754d5a",content,!0,{sourceMap:!1})},819:function(t,e,r){var o=r(9)(!1);o.push([t.i,".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}",""]),t.exports=o},820:function(t,e,r){var content=r(821);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("4de61803",content,!0,{sourceMap:!1})},821:function(t,e,r){var o=r(9)(!1);o.push([t.i,".v-window{overflow:hidden}.v-window__container{display:flex;flex-direction:column;height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;position:absolute;margin:0 16px;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{-webkit-transform:translateX(-200%);transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{-webkit-transform:translateX(200%);transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{-webkit-transform:translateX(-200%);transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{-webkit-transform:translateX(0);transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{-webkit-transform:translateX(100%);transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{-webkit-transform:translateX(100%);transform:translateX(100%)}.v-window-y-transition-enter{-webkit-transform:translateY(100%);transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{-webkit-transform:translateY(100%);transform:translateY(100%)}",""]),t.exports=o},824:function(t,e,r){"use strict";var o=r(105),n=r(25),l=r(4),c=r(5);e.a=Object(l.a)(o.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},880:function(t,e,r){"use strict";r(818),r(820);var o=r(212),n=r(374),l=r(65),c=r(104);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){d(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var m=c.a.extend({name:"v-window",directives:{Touch:o.a},provide(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:()=>({changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}),computed:{isActive(){return this.transitionCount>0},classes(){return v(v({},c.a.options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=(this.internalReverse?!this.isReverse:this.isReverse)?"-reverse":"";return"v-window-".concat(t).concat(e,"-transition")},hasActiveItems(){return Boolean(this.items.find((t=>!t.disabled)))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex(((t,i)=>this.internalValue===this.getValue(t,i)))},internalReverse(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex(t,e){this.isReverse=this.updateReverse(t,e)}},mounted(){window.requestAnimationFrame((()=>this.isBooted=!0))},methods:{genDefaultSlot(){return this.$slots.default},genContainer(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,r){var o,c,h,v={click:t=>{t.stopPropagation(),this.changedByDelimiters=!0,r()}},d={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},m=null!=(o=null==(c=(h=this.$scopedSlots)[t])?void 0:c.call(h,{on:v,attrs:d}))?o:[this.$createElement(n.a,{props:{icon:!0},attrs:d,on:v},[this.$createElement(l.a,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},m)},genControlIcons(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"==typeof e){var r=this.genIcon("prev",e,this.prev);r&&t.push(r)}var o=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&o&&"string"==typeof o){var n=this.genIcon("next",o,this.next);n&&t.push(n)}return t},getNextIndex(t){var e=(t+1)%this.items.length;return this.items[e].disabled?this.getNextIndex(e):e},getPrevIndex(t){var e=(t+this.items.length-1)%this.items.length;return this.items[e].disabled?this.getPrevIndex(e):e},next(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse(t,e){var r=this.items.length,o=r-1;return r<=2?t<e:t===o&&0===e||(0!==t||e!==o)&&t<e}},render(t){var data={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var e=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};data.directives.push({name:"touch",value:e})}return t("div",data,[this.genContainer()])}}),w=r(213),f=r(810),y=r(0),_=r(5);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function I(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){O(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e.a=m.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:t=>t>0},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide(){return{parentTheme:this.theme}},data(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes(){return I(I({},m.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark(){return this.dark||!this.light},isVertical(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height(t,e){t!==e&&t&&(this.internalHeight=t)},cycle(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created(){this.$attrs.hasOwnProperty("hide-controls")&&Object(_.a)("hide-controls",':show-arrows="false"',this)},mounted(){this.startTimeout()},methods:{genControlIcons(){return this.isVertical?null:m.options.methods.genControlIcons.call(this)},genDelimiters(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems(){for(var t=this.items.length,e=[],i=0;i<t;i++){var r=this.$createElement(n.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,t)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(l.a,{props:{size:18}},this.delimiterIcon)]);e.push(r)}return this.$createElement(f.a,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:t=>{this.internalValue=t}}},e)},genProgress(){return this.$createElement(w.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render(t){var e=m.options.render.call(this,t);return e.data.style="height: ".concat(Object(y.h)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},881:function(t,e,r){"use strict";var o=r(107),n=r(103),l=r(212),c=r(0),h=r(4),v=Object(h.a)(o.a,Object(n.a)("windowGroup","v-window-item","v-window")).extend().extend().extend({name:"v-window-item",directives:{Touch:l.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:()=>({isActive:!1,inTransition:!1}),computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(c.h)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick((()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(c.h)(t.clientHeight))}))}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((()=>[this.genWindowItem()])))}}),d=r(136),m=r(43);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){y(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var _=Object(h.a)(v,m.a);e.a=_.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot(){return[this.$createElement(d.a,{staticClass:"v-carousel__item",props:f(f({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(c.s)(this))]},genWindowItem(){var{tag:t,data:data}=this.generateRouteLink();return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(t,data,this.genDefaultSlot())}}})},888:function(t,e,r){var content=r(940);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("b8d150bc",content,!0,{sourceMap:!1})},915:function(t,e,r){"use strict";r.r(e);var o={props:{buttonToRight:{type:Boolean},carousel:{type:Object}}},n=r(19),l=r(32),c=r.n(l),h=r(790),v=r(791),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{"no-gutters":"","fill-height":"","align-self":"center"}},[t.buttonToRight?r("v-col",{attrs:{cols:t.$vuetify.breakpoint.smAndUp?10:8}},[r("h2",{staticClass:"text-lg-h3 text-md-h4 mb-3 text-sm-h5 text-h6 font-weight-black"},[t._v("\n      "+t._s(t.carousel.heading)+"\n    ")]),t._v(" "),r("p",{staticClass:"mb-5 text-md-body-1 text-sm-body-2 text-caption"},[t._v("\n      "+t._s(t.carousel.subHeading)+"\n    ")])]):t._e(),t._v(" "),t.buttonToRight?r("v-col",{attrs:{cols:t.$vuetify.breakpoint.smAndUp?2:4}},[r("UiStyledButton",{attrs:{href:t.carousel.href,text:"More Info","x-large":t.$vuetify.breakpoint.mdAndUp}})],1):t._e(),t._v(" "),t.buttonToRight?t._e():r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"text-md-h4 mb-3 text-sm-h5 text-h6 font-weight-black"},[t._v("\n      "+t._s(t.carousel.heading)+"\n    ")]),t._v(" "),r("p",{staticClass:"text-md-body-1 text-sm-body-2 text-caption",class:t.$vuetify.breakpoint.mdAndUp?"mb-5":t.$vuetify.breakpoint.smAndUp?"mb-3":"mb-2"},[t._v("\n      "+t._s(t.carousel.subHeading)+"\n    ")]),t._v(" "),r("UiStyledButton",{attrs:{href:t.carousel.href,text:"More Info","x-large":t.$vuetify.breakpoint.mdAndUp}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{UiStyledButton:r(808).default}),c()(component,{VCol:h.a,VRow:v.a})},939:function(t,e,r){"use strict";r(888)},940:function(t,e,r){var o=r(9)(!1);o.push([t.i,".cropImgBottom .v-image__image--cover{background-position:top!important}.gradient-fill-carousel>.v-responsive{background:var(--v-primary-lighten1)}.gradient-fill-carousel>.v-responsive>.v-responsive__content{background:linear-gradient(180deg,rgba(0,0,0,.5),20%,rgba(0,0,0,.05))}",""]),t.exports=o},958:function(t,e,r){"use strict";r.r(e);var o={props:{carouselsData:{type:Array,default:()=>[]}},methods:{showFullPageImg(t){return this.viewportHorizontal()&&t.topToBottomImg&&t.leftToRightImg},showLeftToRightImg(t){return this.$vuetify.breakpoint.mdAndUp&&!t.topToBottomImg||!this.viewportHorizontal()},showTopToBottomImg(t){return this.$vuetify.breakpoint.mdAndUp?t.topToBottomImg&&!t.leftToRightImg&&this.viewportHorizontal():this.viewportHorizontal()},viewportHorizontal(){if("undefined"!=typeof window)return window.innerHeight<window.innerWidth},containImage:t=>!t.topToBottomImg||null}},n=(r(939),r(19)),l=r(32),c=r.n(l),h=r(880),v=r(881),d=r(790),m=r(824),w=r(791),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[r("v-carousel",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Tip: move mouse pointer away from carousel to resume auto-cycling of slides",delay:{show:2e3},placement:"top"},expression:"{\n        content:\n          'Tip: move mouse pointer away from carousel to resume auto-cycling of slides',\n        delay: { show: 2000 },\n        placement: 'top',\n      }"}],attrs:{id:"carousel",height:"calc(100vh - 64px)",dark:"",cycle:!o,"show-arrows-on-hover":"",draggable:"true","hide-delimiter-background":""}},t._l(t.carouselsData,(function(e,o){return r("v-carousel-item",{key:o,staticClass:"gradient-fill-carousel",attrs:{dark:""}},[t.showFullPageImg(e)?r("div",{staticClass:"v-responsive fill-height"},[r("UiSmartBackgroundImg",{staticStyle:{"z-index":"-1"},attrs:{"image-asset":e.img}}),t._v(" "),r("v-row",{staticClass:"fill-height",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",md:"12","align-self":"end"}},[r("UiCarouselText",{class:t.$vuetify.breakpoint.mdAndUp?"px-12 pb-12":t.$vuetify.breakpoint.smAndUp?"px-8 pb-8":"px-4 pb-4",attrs:{"button-to-right":!0,carousel:e}})],1)],1)],1):t._e(),t._v(" "),t.showLeftToRightImg(e)?r("v-row",{staticClass:"fill-height",attrs:{"no-gutters":""}},[r("v-col",{staticClass:"fill-height",attrs:{cols:"12",md:"12"}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12"}},[r("UiSmartImg",{class:e.topToBottomImg?"cropImgBottom":null,staticStyle:{"z-index":"-1"},attrs:{"max-height":t.$vuetify.breakpoint.smAndUp?t.viewportHorizontal()?"calc(66vh - 42px)":"calc(75vh - 48px)":"calc(50vh - 32px)","image-asset":e.img,contain:t.containImage(e),"align-self":"start"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("UiCarouselText",{class:t.$vuetify.breakpoint.mdAndUp?"pa-12":t.$vuetify.breakpoint.smAndUp?"pa-8":"pa-4",attrs:{"button-to-right":t.viewportHorizontal(),carousel:e}})],1)],1)],1)],1):t._e(),t._v(" "),t.showTopToBottomImg(e)?r("v-row",{staticClass:"fill-height",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"6","align-self":"center"}},[r("UiSmartImg",{class:e.topToBottomImg?"cropImgBottom":null,staticStyle:{"z-index":"-1"},attrs:{"image-asset":e.img,"max-height":"calc(100vh - 64px)","max-width":"100vw",contain:""}})],1),t._v(" "),r("v-col",{class:t.$vuetify.breakpoint.mdAndUp?"pa-12":"pa-4",attrs:{cols:"6","align-self":"center"}},[r("UiCarouselText",{attrs:{"button-to-right":!1,carousel:e}})],1)],1):t._e()],1)})),1)]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{UiSmartBackgroundImg:r(801).default,UiCarouselText:r(915).default,UiSmartImg:r(375).default}),c()(component,{VCarousel:h.a,VCarouselItem:v.a,VCol:d.a,VHover:m.a,VRow:w.a})}}]);