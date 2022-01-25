(window.webpackJsonp=window.webpackJsonp||[]).push([[14,27,28],{1011:function(t,e,i){"use strict";var n=i(7),a=i(87),l=i(134);function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){s(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e.a=Object(n.a)(a.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(a){a&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))})):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:o({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},1012:function(t,e,i){"use strict";i(983);var n=i(995),a=i(7);function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var o=Object(a.a)(n.a);e.a=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},n.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(t){var e=this;this.$nextTick((function(){var i;t?e.calculateInputHeight():null==(i=e.$refs.input)||i.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=n.a.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){n.a.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},1015:function(t,e,i){"use strict";i.r(e);var n=i(27),a=i(42),l=i.n(a),r=i(248),o=i(1011),s=i(995),d=i(1012),v=Object(n.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-form",[i("v-text-field",{attrs:{label:"Name",dense:"",outlined:""}}),t._v(" "),i("v-text-field",{attrs:{label:"Email",dense:"",outlined:""}}),t._v(" "),i("v-text-field",{attrs:{label:"Subject",dense:"",outlined:""}}),t._v(" "),i("v-textarea",{attrs:{dense:"",label:"Your Message","auto-grow":"",outlined:"",rows:"8","row-height":"20"}}),t._v(" "),i("v-btn",{attrs:{outlined:"",block:"",color:"primary"}},[t._v("SEND MESSAGE")])],1)}),[],!1,null,null,null);e.default=v.exports;l()(v,{VBtn:r.a,VForm:o.a,VTextField:s.a,VTextarea:d.a})},1084:function(t,e,i){"use strict";i.r(e);var n={data:function(){return{social:[{platform:"Facebook",link:"https://www.facebook.com/",icon:"mdi-facebook"},{platform:"Twitter",link:"https://twitter.com/",icon:"mdi-twitter"},{platform:"Instagram",link:"https://www.instagram.com/",icon:"mdi-instagram"},{platform:"Linkedin",link:"https://www.linkedin.com/",icon:"mdi-linkedin"},{platform:"Github",link:"https://modevue.staticdesigner.com/",icon:"mdi-github"}]}}},a=i(27),l=i(42),r=i.n(l),o=i(248),s=i(958),d=i(968),v=i(951),u=i(221),f=i(222),x=i(126),c=i(52),p=i(101),h=i(959),_=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{class:t.$vuetify.theme.dark?"blue-grey darken-4 grey--text text--lighten-1":"grey lighten-3 grey--text text--darken-4",attrs:{id:"footer-top"}},[i("v-container",[i("v-row",[i("v-col",{staticClass:"py-12",attrs:{cols:"12",md:"5"}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("DemoUiLogo")],1),t._v(" "),i("v-col",{attrs:{cols:"12"}},[i("p",{staticClass:"mt-8 text-justify",staticStyle:{"max-width":"400px"}},[t._v("\n              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo\n              pariatur quidem, quis modi iure nihil commodi suscipit, corporis\n              dicta adipisci, voluptatum quia cupiditate. Nulla minus\n              voluptatum nostrum deleniti, asperiores facere.\n            ")])]),t._v(" "),i("v-col",{attrs:{cols:"12"}},[i("v-list",{staticClass:"transparent",attrs:{"two-line":""}},[i("v-list-item",[i("v-list-item-icon",[i("v-icon",[t._v(" mdi-map-marker ")])],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",[t._v("ADDRESS")]),t._v(" "),i("v-list-item-subtitle",[t._v("1400 Main Street, Orlando, FL 79938")])],1)],1),t._v(" "),i("v-divider"),t._v(" "),i("v-list-item",[i("v-list-item-icon",[i("v-icon",[t._v(" mdi-email ")])],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",[t._v("EMAIL")]),t._v(" "),i("v-list-item-subtitle",[t._v("info@example.com")]),t._v(" "),i("v-list-item-subtitle",[t._v("support@example.com")])],1)],1),t._v(" "),i("v-divider"),t._v(" "),i("v-list-item",[i("v-list-item-icon",[i("v-icon",[t._v(" mdi-phone ")])],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",[t._v("PHONE")]),t._v(" "),i("v-list-item-subtitle",[t._v("(323) 555-6789")]),t._v(" "),i("v-list-item-subtitle",[t._v("(650) 555-1234")])],1)],1),t._v(" "),i("v-divider")],1),t._v(" "),i("div",{staticClass:"d-flex justify-center mt-5"},t._l(t.social,(function(e,n){return i("v-btn",{key:"social-"+n,staticClass:"d-flex",attrs:{icon:"",large:"",color:"primary",href:e.link,target:"_blank"}},[i("v-icon",[t._v(t._s(e.icon))])],1)})),1)],1)],1)],1),t._v(" "),i("v-col",{staticClass:"text-center hidden-sm-and-down col col-2 py-12",attrs:{cols:"1"}},[i("v-divider",{attrs:{vertical:""}})],1),t._v(" "),i("v-col",{staticClass:"py-12",attrs:{cols:"12",md:"5"}},[i("h3",{staticClass:"mb-8"},[t._v("SEND YOUR MESSAGE")]),t._v(" "),i("DemoUiFooterContactForm")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=_.exports;r()(_,{DemoUiLogo:i(992).default,DemoUiFooterContactForm:i(1015).default}),r()(_,{VBtn:o.a,VCol:s.a,VContainer:d.a,VDivider:v.a,VIcon:u.a,VList:f.a,VListItem:x.a,VListItemContent:c.a,VListItemIcon:p.a,VListItemSubtitle:c.b,VListItemTitle:c.c,VRow:h.a})},979:function(t,e,i){var n=i(987);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(11).default)("3a00fc2c",n,!0,{sourceMap:!1})},983:function(t,e,i){var n=i(984);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(11).default)("ddcad30e",n,!0,{sourceMap:!1})},984:function(t,e,i){var n=i(10)(!1);n.push([t.i,".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-webkit-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-webkit-input-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),t.exports=n},986:function(t,e,i){"use strict";i(979)},987:function(t,e,i){var n=i(10)(!1);n.push([t.i,".fill-theme-color[data-v-43a3c970]{fill:#1976d2}.fill-light-color[data-v-43a3c970]{fill:#fff}.fill-dark-color[data-v-43a3c970]{fill:#000}",""]),t.exports=n},992:function(t,e,i){"use strict";i.r(e);i(986);var n=i(27),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{width:"151",height:"55",viewBox:"0 0 151 55",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{staticClass:"fill-theme-color",attrs:{d:"M53.6914 18.9375L57.5 30.8086L61.2969 18.9375H66.7109V36H62.5859V32.0156L62.9844 23.8594L58.8594 36H56.1406L52.0039 23.8477L52.4023 32.0156V36H48.2891V18.9375H53.6914ZM116.012 31.3594L119.41 18.9375H124.004L118.262 36H113.762L108.066 18.9375H112.625L116.012 31.3594Z"}}),t._v(" "),i("path",{class:t.$vuetify.theme.dark?"fill-light-color":"fill-dark-color",attrs:{d:"M68.6562 29.543C68.6562 28.2773 68.9023 27.1523 69.3945 26.168C69.8867 25.1758 70.5938 24.4141 71.5156 23.8828C72.4375 23.3516 73.5195 23.0859 74.7617 23.0859C76.6602 23.0859 78.1562 23.6758 79.25 24.8555C80.3438 26.0273 80.8906 27.625 80.8906 29.6484V29.7891C80.8906 31.7656 80.3398 33.3359 79.2383 34.5C78.1445 35.6562 76.6602 36.2344 74.7852 36.2344C72.9805 36.2344 71.5312 35.6953 70.4375 34.6172C69.3438 33.5312 68.7539 32.0625 68.668 30.2109L68.6562 29.543ZM72.6055 29.7891C72.6055 30.9609 72.7891 31.8203 73.1562 32.3672C73.5234 32.9141 74.0664 33.1875 74.7852 33.1875C76.1914 33.1875 76.9102 32.1055 76.9414 29.9414V29.543C76.9414 27.2695 76.2148 26.1328 74.7617 26.1328C73.4414 26.1328 72.7266 27.1133 72.6172 29.0742L72.6055 29.7891ZM82.1328 29.5664C82.1328 27.5586 82.5664 25.9766 83.4336 24.8203C84.3008 23.6641 85.5117 23.0859 87.0664 23.0859C88.1992 23.0859 89.1523 23.5312 89.9258 24.4219V18H93.8867V36H90.3359L90.1367 34.6406C89.3242 35.7031 88.293 36.2344 87.043 36.2344C85.5352 36.2344 84.3398 35.6562 83.457 34.5C82.5742 33.3438 82.1328 31.6992 82.1328 29.5664ZM86.082 29.8125C86.082 32.0625 86.7383 33.1875 88.0508 33.1875C88.9258 33.1875 89.5508 32.8203 89.9258 32.0859V27.2578C89.5664 26.5078 88.9492 26.1328 88.0742 26.1328C86.8555 26.1328 86.1953 27.1172 86.0938 29.0859L86.082 29.8125ZM102.266 36.2344C100.32 36.2344 98.7461 35.6562 97.543 34.5C96.3398 33.3359 95.7383 31.8242 95.7383 29.9648V29.6367C95.7383 28.3398 95.9766 27.1953 96.4531 26.2031C96.9375 25.2109 97.6406 24.4453 98.5625 23.9062C99.4844 23.3594 100.578 23.0859 101.844 23.0859C103.625 23.0859 105.031 23.6406 106.062 24.75C107.094 25.8516 107.609 27.3906 107.609 29.3672V30.9023H99.7578C99.8984 31.6133 100.207 32.1719 100.684 32.5781C101.16 32.9844 101.777 33.1875 102.535 33.1875C103.785 33.1875 104.762 32.75 105.465 31.875L107.27 34.0078C106.777 34.6875 106.078 35.2305 105.172 35.6367C104.273 36.0352 103.305 36.2344 102.266 36.2344ZM101.82 26.1328C100.664 26.1328 99.9766 26.8984 99.7578 28.4297H103.742V28.125C103.758 27.4922 103.598 27.0039 103.262 26.6602C102.926 26.3086 102.445 26.1328 101.82 26.1328ZM132.629 34.6289C131.793 35.6992 130.664 36.2344 129.242 36.2344C127.852 36.2344 126.797 35.832 126.078 35.0273C125.367 34.2148 125.012 33.0508 125.012 31.5352V23.3203H128.961V31.5586C128.961 32.6445 129.488 33.1875 130.543 33.1875C131.449 33.1875 132.094 32.8633 132.477 32.2148V23.3203H136.449V36H132.746L132.629 34.6289ZM144.758 36.2344C142.812 36.2344 141.238 35.6562 140.035 34.5C138.832 33.3359 138.23 31.8242 138.23 29.9648V29.6367C138.23 28.3398 138.469 27.1953 138.945 26.2031C139.43 25.2109 140.133 24.4453 141.055 23.9062C141.977 23.3594 143.07 23.0859 144.336 23.0859C146.117 23.0859 147.523 23.6406 148.555 24.75C149.586 25.8516 150.102 27.3906 150.102 29.3672V30.9023H142.25C142.391 31.6133 142.699 32.1719 143.176 32.5781C143.652 32.9844 144.27 33.1875 145.027 33.1875C146.277 33.1875 147.254 32.75 147.957 31.875L149.762 34.0078C149.27 34.6875 148.57 35.2305 147.664 35.6367C146.766 36.0352 145.797 36.2344 144.758 36.2344ZM144.312 26.1328C143.156 26.1328 142.469 26.8984 142.25 28.4297H146.234V28.125C146.25 27.4922 146.09 27.0039 145.754 26.6602C145.418 26.3086 144.938 26.1328 144.312 26.1328Z"}}),t._v(" "),i("path",{staticClass:"fill-theme-color",attrs:{d:"M13.0125 9.81917L20.419 32.9045L27.8026 9.81917H38.3312V43H30.3094V35.2517L31.0842 19.3906L23.0625 43H17.7754L9.73092 19.3678L10.5057 35.2517V43H2.50679V9.81917H13.0125Z"}}),t._v(" "),i("path",{class:t.$vuetify.theme.dark?"fill-light-color":"fill-dark-color",attrs:{d:"M20.4063 33.9755L27.0151 9.81917H35.9484L24.7818 43H16.0308L4.95534 9.81917H13.8203L20.4063 33.9755Z"}})])}),[],!1,null,"43a3c970",null);e.default=a.exports}}]);