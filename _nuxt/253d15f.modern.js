(window.webpackJsonp=window.webpackJsonp||[]).push([[24,30],{1001:function(t,e,i){"use strict";i.r(e);var o={data:()=>({clipped:!1,drawer:!1,items:[{icon:"mdi-folder-home-outline",title:"Home",to:"/"},{icon:"mdi-account",title:"About",to:"/about"},{icon:"mdi-tools",title:"Services",to:"/services",submenu:[{title:"Services Page",to:"/services"},{title:"Static Websites",to:"/#"},{title:"Mobile Applications",to:"/#"},{title:"Corporate websites",to:"/#"},{title:"Editorial Sites",to:"/#"},{title:"Ecommerce and Store",to:"/#"},{title:"Block Chain Devemopment",to:"/#"}]},{icon:"mdi-cash-usd",title:"Pricing",to:"/pricing"},{icon:"mdi-folder-image",title:"Gallery",to:"/gallery"},{icon:"mdi-blogger",title:"Blog",to:"/blog"},{icon:"mdi-contacts",title:"Contact",to:"/contact"}]}),methods:{changeThemeColor(){!0===this.$vuetify.theme.dark?this.$vuetify.theme.dark=!1:this.$vuetify.theme.dark=!0}}},n=(i(971),i(15)),s=i(19),a=i.n(s),l=i(896),r=i(889),c=i(230),C=i(202),v=i(203),u=i(204),d=i(107),m=i(205),p=i(42),f=i(208),h=i(881),V=i(891),_=i(892),L=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("v-navigation-drawer",{attrs:{fixed:"",app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e("v-list",{attrs:{dense:""}},t._l(t.items,(function(i,o){return e("v-list-item-group",{key:o,attrs:{color:"primary"}},[i.submenu?e("v-list-group",{attrs:{"prepend-icon":i.icon,"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(i.title.toUpperCase())}})],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(i.submenu,(function(i){return e("v-list-item",{key:i.title,attrs:{to:i.to}},[e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(i.title)}})],1)],1)}))],2):e("v-list-item",{attrs:{to:i.to}},[e("v-list-item-action",[e("v-icon",[t._v(t._s(i.icon))])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(i.title.toUpperCase())}})],1)],1)],1)})),1)],1),t._v(" "),e("v-app-bar",{attrs:{fixed:"",app:"","hide-on-scroll":"",height:"64","elevate-on-scroll":""}},[e("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.drawer=!0}}}),t._v(" "),e("nuxt-link",{staticClass:"d-flex",attrs:{to:"/"}},[e("DemoUiLogo")],1),t._v(" "),e("v-spacer"),t._v(" "),t._l(t.items,(function(i,o){return[i.submenu?[e("v-menu",{key:o,attrs:{"open-on-hover":"","offset-y":"",transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var{on:n,attrs:s}=o;return[e("v-btn",t._g(t._b({staticClass:"py-8 submenubtn hidden-sm-and-down",attrs:{plain:"",ripple:!1}},"v-btn",s,!1),n),[t._v("\n                "+t._s(i.title)+"\n                "),e("v-icon",{staticClass:"mx-0",attrs:{right:"",small:""}},[t._v(" mdi-chevron-down ")])],1)]}}],null,!0)},[t._v(" "),e("v-list",{attrs:{dense:""}},t._l(i.submenu,(function(i,o){return e("v-list-item",{key:o,attrs:{link:"",to:i.to}},[e("v-list-item-title",[t._v(t._s(i.title))])],1)})),1)],1)]:e("v-btn",{key:o,staticClass:"py-8 hidden-sm-and-down",attrs:{depressed:"",tile:"",plain:"",to:i.to}},[t._v(t._s(i.title))])]})),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:t.changeThemeColor}},[e("v-icon",[t._v(t._s(t.$vuetify.theme.dark?"mdi-white-balance-sunny":"mdi-weather-night"))])],1)],2)],1)}),[],!1,null,"040c204c",null);e.default=L.exports;a()(L,{DemoUiLogo:i(928).default}),a()(L,{VAppBar:l.a,VAppBarNavIcon:r.a,VBtn:c.a,VIcon:C.a,VList:v.a,VListGroup:u.a,VListItem:d.a,VListItemAction:m.a,VListItemContent:p.a,VListItemGroup:f.a,VListItemTitle:p.c,VMenu:h.a,VNavigationDrawer:V.a,VSpacer:_.a})},915:function(t,e,i){},925:function(t,e,i){"use strict";i(915)},928:function(t,e,i){"use strict";i.r(e);i(925);var o=i(15),n=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"151",height:"55",viewBox:"0 0 151 55",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{staticClass:"fill-theme-color",attrs:{d:"M53.6914 18.9375L57.5 30.8086L61.2969 18.9375H66.7109V36H62.5859V32.0156L62.9844 23.8594L58.8594 36H56.1406L52.0039 23.8477L52.4023 32.0156V36H48.2891V18.9375H53.6914ZM116.012 31.3594L119.41 18.9375H124.004L118.262 36H113.762L108.066 18.9375H112.625L116.012 31.3594Z"}}),t._v(" "),e("path",{class:t.$vuetify.theme.dark?"fill-light-color":"fill-dark-color",attrs:{d:"M68.6562 29.543C68.6562 28.2773 68.9023 27.1523 69.3945 26.168C69.8867 25.1758 70.5938 24.4141 71.5156 23.8828C72.4375 23.3516 73.5195 23.0859 74.7617 23.0859C76.6602 23.0859 78.1562 23.6758 79.25 24.8555C80.3438 26.0273 80.8906 27.625 80.8906 29.6484V29.7891C80.8906 31.7656 80.3398 33.3359 79.2383 34.5C78.1445 35.6562 76.6602 36.2344 74.7852 36.2344C72.9805 36.2344 71.5312 35.6953 70.4375 34.6172C69.3438 33.5312 68.7539 32.0625 68.668 30.2109L68.6562 29.543ZM72.6055 29.7891C72.6055 30.9609 72.7891 31.8203 73.1562 32.3672C73.5234 32.9141 74.0664 33.1875 74.7852 33.1875C76.1914 33.1875 76.9102 32.1055 76.9414 29.9414V29.543C76.9414 27.2695 76.2148 26.1328 74.7617 26.1328C73.4414 26.1328 72.7266 27.1133 72.6172 29.0742L72.6055 29.7891ZM82.1328 29.5664C82.1328 27.5586 82.5664 25.9766 83.4336 24.8203C84.3008 23.6641 85.5117 23.0859 87.0664 23.0859C88.1992 23.0859 89.1523 23.5312 89.9258 24.4219V18H93.8867V36H90.3359L90.1367 34.6406C89.3242 35.7031 88.293 36.2344 87.043 36.2344C85.5352 36.2344 84.3398 35.6562 83.457 34.5C82.5742 33.3438 82.1328 31.6992 82.1328 29.5664ZM86.082 29.8125C86.082 32.0625 86.7383 33.1875 88.0508 33.1875C88.9258 33.1875 89.5508 32.8203 89.9258 32.0859V27.2578C89.5664 26.5078 88.9492 26.1328 88.0742 26.1328C86.8555 26.1328 86.1953 27.1172 86.0938 29.0859L86.082 29.8125ZM102.266 36.2344C100.32 36.2344 98.7461 35.6562 97.543 34.5C96.3398 33.3359 95.7383 31.8242 95.7383 29.9648V29.6367C95.7383 28.3398 95.9766 27.1953 96.4531 26.2031C96.9375 25.2109 97.6406 24.4453 98.5625 23.9062C99.4844 23.3594 100.578 23.0859 101.844 23.0859C103.625 23.0859 105.031 23.6406 106.062 24.75C107.094 25.8516 107.609 27.3906 107.609 29.3672V30.9023H99.7578C99.8984 31.6133 100.207 32.1719 100.684 32.5781C101.16 32.9844 101.777 33.1875 102.535 33.1875C103.785 33.1875 104.762 32.75 105.465 31.875L107.27 34.0078C106.777 34.6875 106.078 35.2305 105.172 35.6367C104.273 36.0352 103.305 36.2344 102.266 36.2344ZM101.82 26.1328C100.664 26.1328 99.9766 26.8984 99.7578 28.4297H103.742V28.125C103.758 27.4922 103.598 27.0039 103.262 26.6602C102.926 26.3086 102.445 26.1328 101.82 26.1328ZM132.629 34.6289C131.793 35.6992 130.664 36.2344 129.242 36.2344C127.852 36.2344 126.797 35.832 126.078 35.0273C125.367 34.2148 125.012 33.0508 125.012 31.5352V23.3203H128.961V31.5586C128.961 32.6445 129.488 33.1875 130.543 33.1875C131.449 33.1875 132.094 32.8633 132.477 32.2148V23.3203H136.449V36H132.746L132.629 34.6289ZM144.758 36.2344C142.812 36.2344 141.238 35.6562 140.035 34.5C138.832 33.3359 138.23 31.8242 138.23 29.9648V29.6367C138.23 28.3398 138.469 27.1953 138.945 26.2031C139.43 25.2109 140.133 24.4453 141.055 23.9062C141.977 23.3594 143.07 23.0859 144.336 23.0859C146.117 23.0859 147.523 23.6406 148.555 24.75C149.586 25.8516 150.102 27.3906 150.102 29.3672V30.9023H142.25C142.391 31.6133 142.699 32.1719 143.176 32.5781C143.652 32.9844 144.27 33.1875 145.027 33.1875C146.277 33.1875 147.254 32.75 147.957 31.875L149.762 34.0078C149.27 34.6875 148.57 35.2305 147.664 35.6367C146.766 36.0352 145.797 36.2344 144.758 36.2344ZM144.312 26.1328C143.156 26.1328 142.469 26.8984 142.25 28.4297H146.234V28.125C146.25 27.4922 146.09 27.0039 145.754 26.6602C145.418 26.3086 144.938 26.1328 144.312 26.1328Z"}}),t._v(" "),e("path",{staticClass:"fill-theme-color",attrs:{d:"M13.0125 9.81917L20.419 32.9045L27.8026 9.81917H38.3312V43H30.3094V35.2517L31.0842 19.3906L23.0625 43H17.7754L9.73092 19.3678L10.5057 35.2517V43H2.50679V9.81917H13.0125Z"}}),t._v(" "),e("path",{class:t.$vuetify.theme.dark?"fill-light-color":"fill-dark-color",attrs:{d:"M20.4063 33.9755L27.0151 9.81917H35.9484L24.7818 43H16.0308L4.95534 9.81917H13.8203L20.4063 33.9755Z"}})])}),[],!1,null,"5a8f9e6e",null);e.default=n.exports},943:function(t,e,i){},971:function(t,e,i){"use strict";i(943)}}]);