(window.webpackJsonp=window.webpackJsonp||[]).push([[30,39,42],{1002:function(t,e,i){"use strict";i.r(e);var s={props:{title:{type:String,default:""}}},r=i(29),a=Object(r.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"text-h4 font-weight-bold mb-5"},[t._v(t._s(t.title))])}),[],!1,null,null,null);e.default=a.exports},1006:function(t,e,i){"use strict";i.r(e);var s=i(1008),r={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""}},methods:{compileMarkdown:function(t){return s.marked.parseInline(t,[])}}},a=i(29),n=Object(a.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-md-h3 text-center font-weight-black mt-4 mb-8",domProps:{textContent:t._s(t.title)}}),t._v(" "),i("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 text-md-h5 font-weight-medium font-italic text-center mb-8",domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),i("h4",{directives:[{name:"show",rawName:"v-show",value:t.ingress,expression:"ingress"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}),t._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:t.info,expression:"info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}})])}),[],!1,null,null,null);e.default=n.exports},1045:function(t,e,i){"use strict";i.r(e);var s={props:{cardMatrices:{type:Object,default:function(){}}},methods:{createCardId:function(t,e){return"".concat(t,"_c_").concat(e)}}},r=i(29),a=i(44),n=i.n(a),l=i(989),c=i(990),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{id:t.cardMatrices.id}},[t.cardMatrices.title?i("v-row",{staticClass:"pt-16 px-8 pb-8"},[i("v-col",{attrs:{cols:"12"}},[i("UiMainTitle",{attrs:{title:t.cardMatrices.title,ingress:t.cardMatrices.ingress,info:t.cardMatrices.info}})],1)],1):t._e(),t._v(" "),t._l(t.cardMatrices.subsections,(function(e){return i("section",{key:e.id,attrs:{id:e.id}},[e.subtitle?i("v-row",{staticClass:"px-8 pt-8 pb-8",attrs:{id:e.id+"_subtitle",justify:"center"}},[i("UiMinorTitle",{attrs:{title:e.subtitle}})],1):t._e(),t._v(" "),i("v-row",{staticClass:"pa-0 pb-16 px-8",attrs:{"fill-height":"",justify:"start"}},t._l(e.cards,(function(s,r){return i("v-col",{key:t.createCardId(e.id,r),attrs:{id:t.createCardId(e.id,r),cols:"12",md:"6",lg:"4",xl:"3"}},[t._t("default",null,{subSectionId:e.id,cardId:t.createCardId(e.id,r),card:s})],2)})),1)],1)}))],2)}),[],!1,null,null,null);e.default=o.exports;n()(o,{UiMainTitle:i(1006).default,UiMinorTitle:i(1002).default}),n()(o,{VCol:l.a,VRow:c.a})}}]);