(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1369:function(t,e,r){var n=r(1413);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(31).default)("1415c7f4",n,!0,{sourceMap:!1})},1370:function(t,e,r){var n=r(1415);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(31).default)("313e646a",n,!0,{sourceMap:!1})},1412:function(t,e,r){"use strict";r(1369)},1413:function(t,e,r){var n=r(30)(!1);n.push([t.i,".v-avatar-text[data-v-7c9d3e38]{color:#fff}.v-avatar-text[data-v-7c9d3e38]:first-letter{text-transform:capitalize}.darker-background[data-v-7c9d3e38]{background-color:var(--v-primary-darken1);color:#fff}.dark-background[data-v-7c9d3e38]{background-color:var(--v-primary-base);color:#fff}.light-background[data-v-7c9d3e38]{background-color:#fff;color:#000}@media (min-width:960px){.md-and-up-two-column[data-v-7c9d3e38]{-webkit-column-count:2!important;-moz-column-count:2!important;column-count:2!important;grid-column-gap:40px!important;-webkit-column-gap:40px!important;-moz-column-gap:40px!important;column-gap:40px!important}}",""]),t.exports=n},1414:function(t,e,r){"use strict";r(1370)},1415:function(t,e,r){var n=r(30)(!1);n.push([t.i,"@media (min-width:960px){.md-and-up-two-column .nuxt-content>p:first-child{margin-top:0}}",""]),t.exports=n},1435:function(t,e,r){"use strict";r.r(e);var n=r(378),a=r(1194),o=r(1205),i=r(1193);r(624),r(69),r(50),r(15),r(4),r(16),r(5),r(17),r(42),r(67),r(49),r(41),r(64),r(9),r(66),r(77),r(52),r(58),r(43);function c(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u={props:{sectionId:{type:String,required:!0},markdownFile:{type:Object,required:!0},darkBackground:{type:Boolean,default:!1}},data:function(){return{componentId:"sections-user-type-relevant-sections"}},computed:{relatedSectionsPerPage:function(){var t=this,e={};if(this.markdownFile.pages){var r,n=c(this.markdownFile.pages);try{var a=function(){var n=r.value,a=t.$store.$db().model("user-types").query().with("sections").whereId(t.sectionId.split("-").slice(2).join("-")).first();e[n]=a.sections.filter((function(t){return t.page===n}))};for(n.s();!(r=n.n()).done;)a()}catch(t){n.e(t)}finally{n.f()}}return e}}},l=(r(1412),r(1414),r(61)),d=Object(l.a)(u,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"py-16",class:t.darkBackground?t.$vuetify.theme.dark?"darker-background":"dark-background":t.$vuetify.theme.dark?null:"light-background",attrs:{id:t.sectionId}},[e(o.a,{attrs:{"grid-list-sm":"",fluid:""}},[e(i.a,[e(a.a,{staticClass:"text-center"},[e("h2",{staticClass:"text-h4 text-md-h3 text-center font-weight-black"},[t._v("\n          "+t._s(t.markdownFile.title)+"\n        ")]),t._v(" "),e("div",{staticClass:"md-and-up-two-column text-left text-p px-10 py-10 my-0"},[e("nuxt-content",{attrs:{document:t.markdownFile}})],1)])],1),t._v(" "),e(i.a,{attrs:{justify:"center"}},t._l(t.markdownFile.pages,(function(r,o){return e(a.a,{key:o,staticClass:"text-center",attrs:{cols:"12",sm:"3"}},[e(n.a,{staticClass:"font-weight-bold mb-5",staticStyle:{opacity:"1.15"},attrs:{size:"100",color:"primary lighten-2"}},[e("span",{staticClass:"v-avatar-text"},[t._v(t._s(r))])]),t._v(" "),t._l(t.relatedSectionsPerPage[r],(function(r,n){return e(i.a,{key:n,staticClass:"text-center"},[e(a.a,{staticClass:"text-center"},[e("h3",[e("nuxt-link",{attrs:{to:{path:r.page+"/",hash:r.orderedId}}},[t._v("\n                "+t._s(r.title)+"\n              ")])],1),t._v(" "),e("p",[t._v("\n              "+t._s(r.userTypeRelevance.customDescription?r.userTypeRelevance.customDescription:r.generalDescription)+"\n            ")])])],1)}))],2)})),1)],1)],1)}),[],!1,null,"7c9d3e38",null);e.default=d.exports}}]);