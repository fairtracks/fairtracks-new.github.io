(window.webpackJsonp=window.webpackJsonp||[]).push([[34,49],{907:function(t,s,e){"use strict";e.r(s);var i={props:{title:{type:String,default:""}},data:()=>({componentId:"ui-minor-title"})},n=e(15),a=Object(n.a)(i,(function(){var t=this;return(0,t._self._c)("h3",{staticClass:"text-h4 font-weight-bold mb-5"},[t._v(t._s(t.title))])}),[],!1,null,null,null);s.default=a.exports},995:function(t,s,e){"use strict";e.r(s);var i={props:{title:{type:String,default:""},contactPoints:{type:Array,default:()=>[]},githubIssues:{type:Object,default:null}},data:()=>({componentId:"sections-contact-us"})},n=e(15),a=e(19),l=e.n(a),o=e(887),r=e(202),c=e(203),u=e(107),v=e(42),_=e(91),m=e(888),p=Object(n.a)(i,(function(){var t=this,s=t._self._c;return s("section",[s("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},[s("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),s("v-col",{attrs:{cols:"12"}},[s("v-list",{staticClass:"transparent",attrs:{"two-line":"","max-width":"100%"}},[t._l(t.contactPoints,(function(e,i){return s("v-list-item",{key:"c_"+i},[s("v-list-item-icon",[s("v-icon",{attrs:{color:t.$vuetify.theme.dark?"accent":"primary"}},[t._v("\n                "+t._s(e.icon))])],1),t._v(" "),s("v-list-item-content",[s("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),s("v-list-item-title",{staticClass:"text-wrap"},[s("a",{attrs:{href:e.link}},[t._v("\n                  "+t._s(e.linkText)+"\n                ")])])],1)],1)})),t._v(" "),t.githubIssues?s("v-list-item",[s("v-list-item-icon",[s("v-icon",{attrs:{color:t.$vuetify.theme.dark?"accent":"primary"}},[t._v("\n                "+t._s(t.githubIssues.icon))])],1),t._v(" "),s("v-list-item-content",[s("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n                "+t._s(t.githubIssues.title)+"\n              ")]),t._v(" "),t._l(t.githubIssues.repos,(function(e,i){return s("v-list-item-title",{key:"r_"+i,staticClass:"text-wrap"},[s("a",{attrs:{href:e.issuesLink}},[t._v("\n                  "+t._s(e.title)+"\n                ")])])})),t._v(" "),s("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n                "+t._s(t.githubIssues.endComment)+"\n                "),s("nuxt-link",{attrs:{to:t.githubIssues.endCommentPageLink}},[t._v("\n                  "+t._s(t.githubIssues.endCommentPageText)+"\n                ")])],1)],2)],1):t._e()],2)],1)],1)],1)}),[],!1,null,null,null);s.default=p.exports;l()(p,{UiMinorTitle:e(907).default}),l()(p,{VCol:o.a,VIcon:r.a,VList:c.a,VListItem:u.a,VListItemContent:v.a,VListItemIcon:_.a,VListItemTitle:v.c,VRow:m.a})}}]);