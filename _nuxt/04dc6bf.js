(window.webpackJsonp=window.webpackJsonp||[]).push([[33,42],{1025:function(t,s,e){"use strict";e.r(s);var i={props:{title:{type:String,default:""}}},n=e(25),l=Object(n.a)(i,(function(){var t=this,s=t.$createElement;return(t._self._c||s)("h3",{staticClass:"text-h4 font-weight-bold mb-5"},[t._v(t._s(t.title))])}),[],!1,null,null,null);s.default=l.exports},1122:function(t,s,e){"use strict";e.r(s);var i={props:{title:{type:String,default:""},contactPoints:{type:Array,default:function(){return[]}},githubIssues:{type:Object,default:null}}},n=e(25),l=e(30),a=e.n(l),r=e(1009),o=e(227),c=e(228),u=e(131),v=e(54),_=e(105),m=e(1010),p=Object(n.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},[e("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-list",{staticClass:"transparent",attrs:{"two-line":"","max-width":"100%"}},[t._l(t.contactPoints,(function(s,i){return e("v-list-item",{key:"c_"+i},[e("v-list-item-icon",[e("v-icon",{attrs:{color:"primary"}},[t._v(" "+t._s(s.icon))])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n              "+t._s(s.title)+"\n            ")]),t._v(" "),e("v-list-item-title",{staticClass:"text-wrap"},[e("a",{attrs:{href:s.link}},[t._v("\n                "+t._s(s.linkText)+"\n              ")])])],1)],1)})),t._v(" "),t.githubIssues?e("v-list-item",[e("v-list-item-icon",[e("v-icon",{attrs:{color:"primary"}},[t._v(" "+t._s(t.githubIssues.icon))])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n              "+t._s(t.githubIssues.title)+"\n            ")]),t._v(" "),t._l(t.githubIssues.repos,(function(s,i){return e("v-list-item-title",{key:"r_"+i,staticClass:"text-wrap"},[e("a",{attrs:{href:s.issuesLink}},[t._v("\n                "+t._s(s.title)+"\n              ")])])})),t._v(" "),e("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n              "+t._s(t.githubIssues.endComment)+"\n              "),e("nuxt-link",{attrs:{to:"/code"}},[t._v(t._s(t.githubIssues.endCommentPageText))])],1)],2)],1):t._e()],2)],1)],1)],1)}),[],!1,null,null,null);s.default=p.exports;a()(p,{UiMinorTitle:e(1025).default}),a()(p,{VCol:r.a,VIcon:o.a,VList:c.a,VListItem:u.a,VListItemContent:v.a,VListItemIcon:_.a,VListItemTitle:v.c,VRow:m.a})}}]);