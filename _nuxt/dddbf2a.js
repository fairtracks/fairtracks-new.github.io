(window.webpackJsonp=window.webpackJsonp||[]).push([[2,47,56,59,61],{1313:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i(126),o="lateRendererMounted";e.b={computed:{isLateRenderer:function(){return"componentId"in this&&n.MD_REG_LATE_RENDERERS.has(this.componentId)}},mounted:function(){this.isLateRenderer&&this.$nuxt.$emit(o)}}},1321:function(t,e,i){"use strict";i.r(e);i(14),i(9),i(15),i(4),i(16),i(5),i(17),i(25),i(10),i(11),i(12),i(13),i(26),i(24),i(23);var n=i(1),o=i(199),a=i(647);function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){Object(n.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var l={props:{id:{type:String,default:null},href:{type:String,default:null},to:{type:String,default:null},doHover:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-general-button",prevButtonHoverId:""}},computed:s(s({},Object(o.b)({buttonHoverId:function(t){return t.buttonHover.buttonHoverId}})),{},{shouldHover:function(){return this.doHover&&""===this.buttonHoverId}}),mounted:function(){document.addEventListener("mouseup",this.unsetButtonHoverId)},destroyed:function(){document.removeEventListener("mouseup",this.unsetButtonHoverId)},methods:{setButtonHoverId:function(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit(a.BUTTON_HOVER_M_SET_ID,t)},unsetButtonHoverId:function(){this.prevButtonHoverId="",this.$store.commit(a.BUTTON_HOVER_M_SET_ID,this.prevButtonHoverId)},onClick:function(t){t&&this.openLink(t),this.$emit("btn-click",!0)},openLink:function(t){window.open(t,"_blank")}}},c=i(61),u=Object(c.a)(l,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"simplebutton",class:"".concat(t.shouldHover?" custom-hover":""),attrs:{id:t.id},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseout:function(e){return t.unsetButtonHoverId()},mousedown:function(t){t.stopPropagation()},click:function(e){return t.onClick(t.href)}}},[t._t("default",null,{to:t.to})],2)}),[],!1,null,null,null);e.default=u.exports},1326:function(t,e,i){"use strict";i.r(e);var n=i(239),o=(i(328),{components:{GeneralButton:i(1321).default},props:{id:{type:String,default:null},href:{type:String,default:null},to:{type:String,default:null},text:{type:String,default:""},icon:{type:String,default:""},large:{type:Boolean,default:!1},xLarge:{type:Boolean,default:!1},small:{type:Boolean,default:!1},xSmall:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-styled-button",prevButtonHoverId:""}}}),a=i(61),r=Object(a.a)(o,(function(){var t=this,e=t._self._c;return e("GeneralButton",{attrs:{id:t.id,"do-hover":t.doHover,to:t.to,href:t.href},scopedSlots:t._u([{key:"default",fn:function(i){var o=i.to;return[e(n.a,{class:"".concat(t.$vuetify.theme.dark?"primary":"secondary"),attrs:{large:t.large,"x-large":t.xLarge,small:t.small,"x-small":t.xSmall,to:o,ripple:!1,nuxt:!!o||null}},[t.icon?e("UiSmartIcon",{staticClass:"pr-3 center",attrs:{name:t.icon}}):t._e(),t._v("\n      "+t._s(t.text)+"\n    ")],1)]}}])})}),[],!1,null,null,null);e.default=r.exports;installComponents(r,{UiSmartIcon:i(402).default})},1330:function(t,e,i){var n=i(1347);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(29).default)("6a4d654e",n,!0,{sourceMap:!1})},1343:function(t,e,i){"use strict";var n=i(164),o=i(92),a=i(6),r=i(21);e.a=Object(a.a)(n.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(r.c)("v-hover should only contain a single element",this),t)):(Object(r.c)("v-hover is missing a default scopedSlot or bound value",this),null);var t}})},1344:function(t,e,i){var n=i(1345);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(29).default)("2065bca8",n,!0,{sourceMap:!1})},1345:function(t,e,i){var n=i(28)(!1);n.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;outline:none;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;-webkit-transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>.v-card{display:-webkit-box;display:-ms-flexbox;display:flex}.v-dialog--scrollable>.v-card{-webkit-box-flex:1;-ms-flex:1 1 100%;flex:1 1 100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.03);transform:scale(1.03)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes animate-dialog{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.03);transform:scale(1.03)}to{-webkit-transform:scale(1);transform:scale(1)}}",""]),t.exports=n},1346:function(t,e,i){"use strict";i(1330)},1347:function(t,e,i){var n=i(28)(!1);n.push([t.i,".full-overlay>.v-overlay__content{width:100%;height:100%}.above-overlay,.above-overlay>.v-btn,.above-overlay>.v-responsive__content{z-index:2}.size-from-contents:not(.v-dialog--fullscreen){width:auto;overflow:hidden}.no-max-height.v-dialog:not(.v-dialog--fullscreen){max-height:none;margin:0}.max-height-95.v-dialog:not(.v-dialog--fullscreen){max-height:95%;margin:0}.thin-border{border:1px solid #d3d3d3}.thin-border-bottom{border-bottom:1px solid #d3d3d3}.v-dialog__content{overflow-y:scroll}",""]),t.exports=n},1356:function(t,e,i){var n=i(1383);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(29).default)("10330415",n,!0,{sourceMap:!1})},1360:function(t,e,i){"use strict";i.r(e);var n=i(239),o=i(381),a=i(248),r=i(1299),s=i(1408),l=i(372),c=i(371),u=i(1298),d=i(147),f=["zoom"],h={props:{value:Boolean,imageAsset:{type:Object,required:!0},alt:{type:String,default:""},captionHtml:{type:String,default:null},buttons:{type:Array,default:function(){return[]}},cropBottom:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-popup-dialog"}},computed:{show:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{close:function(){if(this.show=!1,this.$route.query.zoom){var t=this.$route.query,e=(t.zoom,Object(d.a)(t,f));this.$router.push({path:this.$route.path,query:e})}}}},m=(i(1346),i(61)),p=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e(s.a,{attrs:{"content-class":t.cropBottom?"size-from-contents max-height-95 overflow-y-auto":"size-from-contents no-max-height overflow-y-auto"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e(o.a,{attrs:{width:"95vw"}},[e(u.a,{attrs:{"no-gutters":"","fill-height":""}},[e(r.a,{attrs:{cols:"12"}},[e(l.a,{staticClass:"full-overlay",attrs:{absolute:"",opacity:"0","z-index":"1"}},[e(c.a,{attrs:{height:"100%"}},[e(u.a,{staticClass:"mb-auto",attrs:{"fill-height":"","no-gutters":"",align:"start",justify:"end"}},[e(r.a,{staticClass:"pa-2 ma-0",attrs:{cols:"auto","align-self":"start"}},[e("div",{staticClass:"simplebutton"},[e(n.a,{staticClass:"pa-0",attrs:{width:"24px",height:"24px","min-width":"24px",ripple:!1},on:{click:function(e){return t.close()}}},[e("UiSmartIcon",{attrs:{name:"close"}})],1)],1)])],1)],1)],1),t._v(" "),e("UiSmartImg",{class:t.cropBottom?"mx-10 mt-10 overflow-y-auto thin-border above-overlay":"mt-4",attrs:{"image-asset":t.imageAsset,width:t.cropBottom?"calc(95vw - 82px)":"95vw",alt:t.alt,"crop-bottom":t.cropBottom}})],1),t._v(" "),e(r.a,{directives:[{name:"show",rawName:"v-show",value:t.captionHtml,expression:"captionHtml"}],staticClass:"px-10 overflow-y-auto",staticStyle:{"z-index":"2"},attrs:{cols:"12"}},[e("figcaption",[e("p",{staticClass:"body-1 font-italic text-center pt-8 pb-2",class:t.$vuetify.breakpoint.xs?"text-subtitle-2":t.None,domProps:{innerHTML:t._s(t.captionHtml)}})])])],1),t._v(" "),e(a.a,{directives:[{name:"show",rawName:"v-show",value:t.buttons.length>0,expression:"buttons.length > 0"}]},[e(u.a,{attrs:{"no-gutters":"",justify:"center"}},t._l(t.buttons,(function(i,n){return e(r.a,{key:"s_"+n,staticClass:"pa-2 ma-0",attrs:{cols:"auto","align-self":"end"}},[e("UiStyledButton",{staticClass:"text-weight-light above-overlay",attrs:{id:"btn_"+n,href:i.href,to:i.to,text:i.text,icon:i.icon,"x-large":""},on:{"btn-click":function(e){return t.close()}}})],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=p.exports;installComponents(p,{UiSmartIcon:i(402).default,UiSmartImg:i(403).default,UiStyledButton:i(1326).default})},1382:function(t,e,i){"use strict";i(1356)},1383:function(t,e,i){var n=i(28)(!1);n.push([t.i,".image-box{box-sizing:border-box;position:relative;margin:auto;overflow:hidden}.image-box .attach-classes.transitioned{display:block;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:opacity .3s,-webkit-transform .3s;transition:opacity .3s,-webkit-transform .3s;transition:transform .3s,opacity .3s;transition:transform .3s,opacity .3s,-webkit-transform .3s}.image-hover .attach-classes.transitioned{max-width:100%;-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);opacity:.5!important}.image-box .v-icon{-webkit-transition:opacity .3s,-webkit-transform .3s;transition:opacity .3s,-webkit-transform .3s;transition:transform .3s,opacity .3s;transition:transform .3s,opacity .3s,-webkit-transform .3s;display:block;opacity:0}.image-hover .v-icon{opacity:.25}",""]),t.exports=n},1406:function(t,e,i){"use strict";i.r(e);i(35),i(33);var n=i(1312),o=i(1313),a={mixins:[n.a,o.b],props:{figureObj:{type:Object,required:!0},figIndex:{type:Number,default:0},figName:{type:String,default:null},subSectionIndex:{type:Number,default:0}},data:function(){return{componentId:"ui-numbered-figure"}},methods:{figureCaptionHtml:function(t,e){var i=e.indexMinus?t-e.indexMinus:t;return this.compileMarkdown("".concat(e.note?"":"Figure ".concat(this.subSectionIndex+1,".").concat(i+1,":")," ").concat(e.caption))}}},r=i(61),s=Object(r.a)(a,(function(){var t=this,e=t._self._c;return e("figure",[t.figureObj.path?e("div",[e("UiSmartImg",{directives:[{name:"show",rawName:"v-show",value:!t.figureObj.zoomable,expression:"!figureObj.zoomable"}],attrs:{"max-width":t.figureObj.maxWidth?t.figureObj.maxWidth:"600px",contain:"","image-asset":t.$getImageAssetObjectFromPathArray(t.figureObj.path)}}),t._v(" "),e("UiZoomableImage",{directives:[{name:"show",rawName:"v-show",value:t.figureObj.zoomable,expression:"figureObj.zoomable"}],attrs:{name:t.figName,"max-width":t.figureObj.maxWidth?t.figureObj.maxWidth:"600px",contain:"","image-asset":t.$getImageAssetObjectFromPathArray(t.figureObj.path),"caption-html":t.figureCaptionHtml(t.figIndex,t.figureObj),"crop-bottom":t.figureObj.cropBottom}})],1):t._e(),t._v(" "),t.figureObj.note?e("UiTechNote",{attrs:{"note-name":t.figureObj.note}}):t._e(),t._v(" "),e("figcaption",{staticClass:"mx-auto",style:t.figureObj.maxWidth?"max-width: ".concat(t.figureObj.maxWidth):"max-width: 600px"},[e("p",{directives:[{name:"show",rawName:"v-show",value:t.figureObj.caption,expression:"figureObj.caption"}],staticClass:"body-2 font-italic text-center pt-6",attrs:{"max-width":t.figureObj.maxWidth?t.figureObj.maxWidth:"600px"},domProps:{innerHTML:t._s(t.figureCaptionHtml(t.figIndex,t.figureObj))}})])],1)}),[],!1,null,null,null);e.default=s.exports;installComponents(s,{UiSmartImg:i(403).default,UiZoomableImage:i(1412).default,UiTechNote:i(1534).default})},1408:function(t,e,i){"use strict";var n=i(39),o=i(1),a=(i(35),i(84),i(70),i(59),i(74),i(89),i(4),i(98),i(5),i(99),i(112),i(113),i(114),i(14),i(9),i(15),i(16),i(17),i(25),i(10),i(11),i(12),i(13),i(26),i(24),i(23),i(1344),i(1284)),r=i(148),s=i(135),l=i(409),c=i(407),u=i(410),d=i(408),f=i(171),h=i(6),m=i(21),p=i(0);function v(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?v(Object(i),!0).forEach((function(e){Object(o.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var b=Object(h.a)(s.a,l.a,c.a,u.a,d.a,r.a);e.a=b.extend({name:"v-dialog",directives:{ClickOutside:f.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(o.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o.a)(t,"v-dialog--active",this.isActive),Object(o.a)(t,"v-dialog--persistent",this.persistent),Object(o.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(o.a)(t,"v-dialog--scrollable",this.scrollable),Object(o.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(m.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):c.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){var e,i;(null===(e=t.$refs.dialog)||void 0===e?void 0:e.contains(document.activeElement))||(t.previousActiveElement=document.activeElement,null===(i=t.$refs.dialog)||void 0===i||i.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===p.w.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),o=Object(n.a)(i).find((function(t){return!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]')}));o&&o.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(a.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:g({role:"dialog","aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=g(g({},t.style),{},{maxWidth:Object(p.h)(this.maxWidth),width:Object(p.h)(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},1412:function(t,e,i){"use strict";i.r(e);var n=i(1343),o=i(372),a=(i(42),{props:{imageAsset:{type:Object,required:!0},name:{type:String,default:null},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},minWidth:{type:String,default:null},maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},cropBottom:{type:Boolean,default:null},captionHtml:{type:String,default:null},dialogButtons:{type:Array,default:function(){}},alt:{type:String,default:""}},data:function(){return{componentId:"ui-zoomable-imaged",showDialog:!1}},created:function(){var t=this;this.$nuxt.$on("queryChanged",(function(){t.$route.query.zoom===t.name?t.showDialog=!0:t.showDialog=!1})),this.$nuxt.$emit("queryChanged")},activated:function(){this.$nuxt.$emit("queryChanged")},beforeDestroy:function(){this.$nuxt.$off("queryChanged")}}),r=(i(1382),i(61)),s=Object(r.a)(a,(function(){var t=this,e=t._self._c;return e("div",[e(n.a,{scopedSlots:t._u([{key:"default",fn:function(i){var n=i.hover;return[e("div",{staticClass:"image-box",class:n?"image-hover":null,on:{click:function(e){t.showDialog=!0}}},[e(o.a,{staticStyle:{"z-index":"3"},attrs:{absolute:"",opacity:"0"}},[e("UiSmartIcon",{staticStyle:{transition:"all 0.3s"},attrs:{name:"magnify-expand","x-large":"",color:"black"}})],1),t._v(" "),e("UiSmartImg",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,"min-width":t.minWidth,"max-height":t.maxHeight,"max-width":t.maxWidth,"crop-bottom":t.cropBottom,alt:t.alt}})],1)]}}])}),t._v(" "),e("UiPopupDialog",{attrs:{"max-width":"80vw","image-asset":t.imageAsset,"crop-bottom":t.cropBottom,buttons:t.dialogButtons,"caption-html":t.captionHtml},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}})],1)}),[],!1,null,null,null);e.default=s.exports;installComponents(s,{UiSmartIcon:i(402).default,UiSmartImg:i(403).default,UiPopupDialog:i(1360).default})}}]);