(window.webpackJsonp=window.webpackJsonp||[]).push([[30,39,41],{1092:function(t,e,i){"use strict";i.r(e);var s={props:{sectionId:{type:String,default:""},title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},cards:{type:Array,default:function(){return[]}}}},n=i(29),r=i(44),l=i.n(r),a=i(981),o=i(982),u=Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{id:t.sectionId}},[t.title?i("v-row",{staticClass:"pt-16 px-8 pb-8",attrs:{id:t.sectionId+"_title"}},[i("UiMainTitle",{attrs:{title:t.title,ingress:t.ingress,info:t.info}})],1):t._e(),t._v(" "),t.subtitle?i("v-row",{staticClass:"px-8 pt-8 pb-8",attrs:{id:t.sectionId+"_subtitle",justify:"center"}},[i("UiMinorTitle",{attrs:{title:t.subtitle}})],1):t._e(),t._v(" "),i("v-row",{staticClass:"pa-0 pb-16 px-8",attrs:{"fill-height":"",justify:"start"}},t._l(t.cards,(function(e,s){return i("v-col",{key:"c_"+s,attrs:{id:t.sectionId+"_c_"+s,cols:"12",md:"6",lg:"4",xl:"3"}},[t._t("default",null,{cIndex:s,card:e})],2)})),1)],1)}),[],!1,null,null,null);e.default=u.exports;l()(u,{UiMainTitle:i(999).default,UiMinorTitle:i(994).default}),l()(u,{VCol:a.a,VRow:o.a})},994:function(t,e,i){"use strict";i.r(e);var s={props:{title:{type:String,default:""}}},n=i(29),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"text-h4 font-weight-bold mb-5"},[t._v(t._s(t.title))])}),[],!1,null,null,null);e.default=r.exports},999:function(t,e,i){"use strict";i.r(e);var s=i(1e3),n={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""}},methods:{compileMarkdown:function(t){return s.marked.parseInline(t,[])}}},r=i(29),l=Object(r.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-md-h3 text-center font-weight-black mt-4 mb-8",domProps:{textContent:t._s(t.title)}}),t._v(" "),i("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 text-md-h5 font-weight-medium font-italic text-center mb-8",domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),i("h4",{directives:[{name:"show",rawName:"v-show",value:t.ingress,expression:"ingress"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}),t._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:t.info,expression:"info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}})])}),[],!1,null,null,null);e.default=l.exports}}]);