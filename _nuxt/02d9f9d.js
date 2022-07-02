(window.webpackJsonp=window.webpackJsonp||[]).push([[4,58],{1116:function(t,e,a){"use strict";a.r(e);var o=a(115),i=a(456);function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l={props:{id:{type:String,default:null},href:{type:String,default:null},to:{type:String,default:null},text:{type:String,default:""},icon:{type:String,default:""},large:{type:Boolean,default:!1},xLarge:{type:Boolean,default:!1},small:{type:Boolean,default:!1},xSmall:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-styled-button",prevButtonHoverId:""}},computed:r(r({},Object(o.b)({buttonHoverId:function(t){return t.buttonHover.buttonHoverId}})),{},{shouldHover:function(){return this.doHover&&""===this.buttonHoverId}}),mounted:function(){document.addEventListener("mouseup",this.unsetButtonHoverId)},destroyed:function(){document.removeEventListener("mouseup",this.unsetButtonHoverId)},methods:{setButtonHoverId:function(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit(i.BUTTON_HOVER_M_SET_ID,t)},unsetButtonHoverId:function(){this.prevButtonHoverId="",this.$store.commit(i.BUTTON_HOVER_M_SET_ID,this.prevButtonHoverId)}}},c=a(22),u=a(25),p=a.n(u),d=a(271),m=a(241),g=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"simplebutton"},[e("v-btn",{class:"".concat(t.$vuetify.theme.dark?"primary":"secondary").concat(t.shouldHover?" custom-hover":""),attrs:{id:t.id,large:t.large,"x-large":t.xLarge,small:t.small,"x-small":t.xSmall,href:t.href,"to:":t.to,ripple:!1,nuxt:!!t.to||null},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseout:function(e){return t.unsetButtonHoverId()},click:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()}}},[t.icon?e("v-icon",{staticClass:"pr-3 center"},[t._v("\n        "+t._s(t.icon)+"\n      ")]):t._e(),t._v("\n      "+t._s(t.text)+"\n    ")],1)],1)}),[],!1,null,null,null);e.default=g.exports;p()(g,{VBtn:d.a,VIcon:m.a})},1119:function(t,e,a){},1124:function(t,e,a){"use strict";a(1119)},1126:function(t,e,a){},1134:function(t,e,a){"use strict";a.r(e);var o=a(69),i={props:{value:Boolean,imageAsset:{type:Object,required:!0},alt:{type:String,default:""},buttons:{type:Array,default:function(){return[]}},cropBottom:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-popup-dialog",mdiClose:o.mdiClose}},computed:{show:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},n=(a(1124),a(22)),r=a(25),s=a.n(r),l=a(271),c=a(250),u=a(192),p=a(1104),d=a(1155),m=a(241),g=a(249),f=a(239),h=a(1105),v=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("v-dialog",{attrs:{"content-class":t.cropBottom?"size-from-contents max-height-95":"size-from-contents no-max-height"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("v-card",[e("v-row",{attrs:{"no-gutters":"","fill-height":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-overlay",{staticClass:"full-overlay",attrs:{absolute:"",opacity:"0","z-index":"1"}},[e("v-responsive",{attrs:{height:"100%"}},[e("v-row",{staticClass:"mb-auto",attrs:{"fill-height":"","no-gutters":"",align:"start",justify:"end"}},[e("v-col",{staticClass:"pa-2 ma-0",attrs:{cols:"auto","align-self":"start"}},[e("div",{staticClass:"simplebutton"},[e("v-btn",{staticClass:"pa-0",attrs:{width:"24px",height:"24px","min-width":"24px",ripple:!1},on:{click:function(e){t.show=!1}}},[e("v-icon",[t._v(t._s(t.mdiClose))])],1)],1)])],1)],1)],1),t._v(" "),e("UiSmartImg",{class:t.cropBottom?"mx-10 mt-10 overflow-y-auto thin-border above-overlay":null,attrs:{"image-asset":t.imageAsset,alt:t.alt,"max-height":t.cropBottom?"calc(95vh - 151px)":"calc(95vh - 110px)",width:t.cropBottom?"calc(90vw - 82px)":"90vw","crop-bottom":t.cropBottom}})],1)],1),t._v(" "),e("v-card-actions",[e("v-row",{attrs:{"no-gutters":"",justify:"center"}},t._l(t.buttons,(function(a,o){return e("v-col",{key:"s_"+o,staticClass:"pa-2 ma-0",attrs:{cols:"auto","align-self":"end"}},[e("UiStyledButton",{staticClass:"text-weight-light above-overlay",attrs:{id:"btn_"+o,href:a.href,to:a.to,text:a.text,icon:a.icon,"x-large":""},on:{"btn-click":function(e){!a.link&&(t.show=!1)}}})],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=v.exports;s()(v,{UiSmartImg:a(268).default,UiStyledButton:a(1116).default}),s()(v,{VBtn:l.a,VCard:c.a,VCardActions:u.a,VCol:p.a,VDialog:d.a,VIcon:m.a,VOverlay:g.a,VResponsive:f.a,VRow:h.a})},1140:function(t,e,a){"use strict";a(1126)},1146:function(t,e,a){"use strict";a.r(e);var o=a(69),i={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},minWidth:{type:String,default:null},maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},cropBottom:{type:Boolean,default:null},dialogButtons:{type:Array,default:function(){}},alt:{type:String,default:""}},data:function(){return{componentId:"ui-zoomable-imaged",showDialog:!1,mdiMagnifyExpand:o.mdiMagnifyExpand}}},n=(a(1140),a(22)),r=a(25),s=a.n(r),l=a(1131),c=a(241),u=a(249),p=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("div",[e("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var o=a.hover;return[e("div",{staticClass:"image-box",class:o?"image-hover":null,on:{click:function(e){t.showDialog=!0}}},[e("v-overlay",{attrs:{absolute:"",opacity:"0"}},[e("v-icon",{staticStyle:{transition:"all 0.3s"},attrs:{"x-large":"",color:"black"}},[t._v("\n            "+t._s(t.mdiMagnifyExpand)+"\n          ")])],1),t._v(" "),e("UiSmartImg",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,"min-width":t.minWidth,"max-height":t.maxHeight,"max-width":t.maxWidth,"crop-bottom":t.cropBottom,alt:t.alt}})],1)]}}])}),t._v(" "),e("UiPopupDialog",{attrs:{"max-width":"80vw","image-asset":t.imageAsset,"crop-bottom":t.cropBottom,buttons:t.dialogButtons},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}})],1)}),[],!1,null,null,null);e.default=p.exports;s()(p,{UiSmartImg:a(268).default,UiPopupDialog:a(1134).default}),s()(p,{VHover:l.a,VIcon:c.a,VOverlay:u.a})},1157:function(t,e,a){},1185:function(t,e,a){"use strict";a(1157)},1216:function(t,e,a){"use strict";a.r(e);var o=a(69),i={props:{post:{type:Object,default:function(){}}},data:function(){return{componentId:"ui-materials-card",mdiOpenInNew:o.mdiOpenInNew,mdiDownload:o.mdiDownload,mdiCalendar:o.mdiCalendar}},methods:{categoryToDateText:function(t){switch(t){case"presentation":return"Presented on";case"workshop":return"Conducted on";default:return"Published on"}},categoryToLinkText:function(t){switch(t){case"poster":return"Open poster [pdf]";case"blog":return"Read blog post";case"presentation":return"View slides [pdf]";default:return"Read full text"}}}},n=(a(1185),a(22)),r=a(25),s=a.n(r),l=a(271),c=a(250),u=a(192),p=a(241),d=a(239),m=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("v-card",{staticClass:"mx-auto",attrs:{id:"post-card","max-width":"450",elevation:"1",height:"500px"}},[e("p",{staticClass:"card-category my-0",class:"".concat(t.post.category)},[t._v(t._s(t.post.category))]),t._v(" "),e("v-responsive",{attrs:{height:"162",width:"100%"}},[e("UiZoomableImage",{staticClass:"thin-border-bottom",attrs:{"image-asset":t.$getImageAssetObject("materials","previews",t.post.previewImg),"max-height":"160px",width:"100%","dialog-buttons":t.post.dialogButtons,"crop-bottom":""}})],1),t._v(" "),e("v-card-subtitle",{staticClass:"pb-0"},[e("v-btn",{staticClass:"px-0 primary--text",attrs:{text:"",small:"",disabled:""}},[e("div",{staticClass:"primary--text mr-1"},[t._v(t._s(t.categoryToDateText(t.post.category))+":")]),t._v(" "),e("div",{staticClass:"text--primary",staticStyle:{opacity:"60%"}},[t._v(t._s(t.post.date))])])],1),t._v(" "),e("v-responsive",{staticClass:"pa-0 mb-4",attrs:{height:"200px"}},[e("v-card-text",{staticClass:"title font-weight-bold pb-0 text--primary",staticStyle:{"line-height":"1.6rem"}},[t._v("\n        "+t._s(t.post.title)+"\n      ")]),t._v(" "),e("v-card-text",{staticClass:"text--primary",staticStyle:{opacity:"85%"}},[t._v("\n        "+t._s(t.post.description)+"\n      ")])],1),t._v(" "),e("v-btn",{staticClass:"ml-3 px-1",attrs:{text:"",color:"primary"}},[e("a",{staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:"".concat(t.post.link)}},[e("v-icon",{staticClass:"mr-2"},[t._v(t._s(t.post.external?t.mdiOpenInNew:t.mdiDownload))]),t._v("\n        "+t._s(t.categoryToLinkText(t.post.category))+"\n      ")],1)])],1)}),[],!1,null,"48dd29f4",null);e.default=m.exports;s()(m,{UiZoomableImage:a(1146).default}),s()(m,{VBtn:l.a,VCard:c.a,VCardSubtitle:u.b,VCardText:u.c,VIcon:p.a,VResponsive:d.a})},1269:function(t,e,a){"use strict";a.r(e);function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,o=new Array(e);a<e;a++)o[a]=t[a];return o}var n={data:function(){return{componentId:"sections-materials-layout",activeCategory:"all",selectedTags:[],posts:[{category:"publication",tags:["Elixir","Norway"],previewImg:"f1000-manuscript-2021.png",title:"Recommendations for the FAIRification of genomic track metadata",date:"2021-04-21",link:"https://f1000research.com/articles/10-268/v1",external:!0,description:"The FAIRtracks paper has been published by F1000Research. The paper describes particular and general challenges when trying to FAIRify metadata of genomic tracks and discuss how the FAIRtracks ecosystem can help. Read our article to learn about how FAIRness of metadata used for genomic tracks. The article was published on 1 April 2021"},{category:"publication",tags:["UK","FAIR"],previewImg:"kanduri_colocalisation_2019.png",title:"Colocalization analyses of genomic elements: approaches, recommendations and challenges",date:"2018-10-11",link:"https://academic.oup.com/bioinformatics/article/35/9/1615/5126923",external:!0,description:"The paper discusses different approaches and provide recommendations for performing genomic colocalization analysis, and address the challenges to obtain a robust and biologically meaningful interpretation of genomic region set data."},{category:"publication",previewImg:"simovski_coloc-stats_2018.png",tags:["Genetics","FAIR"],title:"Coloc-stats: a unified web interface to perform colocalization analysis of genomic features",date:"2018-06-05",link:"https://academic.oup.com/nar/article/46/W1/W186/5033159",external:!0,description:"Coloc-stats provides a unified interface to perform colocalization analysis across various analytical methods and method-specific options (e.g. colocalizationmeasures, resolution, null models). Coloc-stats is freely available at https://hyperbrowser.uio.no/coloc-stats/."},{category:"publication",previewImg:"simovski_gsuite-hyperbrowser_2017.png",title:"GSuite HyperBrowser: integrative analysis of dataset collections across the genome and epigenome",tags:["Genomics","Tracks"],date:"2017-04-27",link:"https://academic.oup.com/gigascience/article/6/7/gix032/3777985",external:!0,description:"GSuite HyperBrowser is an open-source software system that represents a first comprehensive solution for integrative analysis of track collections across the genome and epigenome. The software is available at: https://hyperbrowser.uio.no"},{category:"publication",previewImg:"sandve_genomic-hyperBrowser_2013.png",title:"The Genomic HyperBrowser: an analysis web server for genome-scale data",date:"2013-04-30",link:"https://academic.oup.com/nar/article/41/W1/W133/1095828",external:!0,description:"The Genomic HyperBrowser (http://hyperbrowser.uio.no) is an open-ended web server for the analysis of genomic track data. Through the provision of several highly customizable components for processing and statistical analysis of genomic tracks, the HyperBrowser opens for a range of genomic investigations, related to, e.g., gene regulation, disease association or epigenetic modifications of the genome."},{category:"publication",previewImg:"gundersen_track-types_2011.png",title:"Identifying elemental genomic track types and representing them uniformly",date:"2011-12-30",link:"https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-12-494",external:!0,description:"Add description."},{category:"publication",previewImg:"sandve_genomic-hyperBrowser_2010.png",title:"The Genomic HyperBrowser: inferential genomics at the sequence level",date:"2010-12-23",link:"https://genomebiology.biomedcentral.com/articles/10.1186/gb-2010-11-12-r121",external:!0,description:"Seminal study about the Genomic HyperBrowser; the paper provides a collection of generic biological investigations that query pairwise relations between tracks, represented as mathematical objects, along the genome."},{category:"publication",previewImg:"BLUEPRINT_Cell_2016.png",title:"The BLUEPRINT Data Analysis Portal",date:"2016-11-15",link:"https://doi.org/10.1016/j.cels.2016.10.021",external:!0,description:"Add description."},{category:"blog",previewImg:"f1000-fairtracks-blog-full.png",title:"FAIRtracks featured in F1000 Article",date:"2021-12-1",link:"https://blog.f1000.com/2021/12/07/fairtracks/",external:!0,description:"FAIRtracks has been featured in a blog post on the F100Researchjournal web site! The blog post lays out the vision of the FAIRtracks project and makes an appeal to the community for involvement."},{category:"poster",previewImg:"Gundersen_Elixir_all_hands_2019_FAIRification.png",title:"FAIRtracks presented at ELIXIR All-Hands 2019",link:this.$getNonImageAssetPath("materials","posters","Gundersen_Elixir_all_hands_2019_FAIRification.pdf"),external:!1},{category:"poster",previewImg:"Kompova_GCC2019_TrackFind.png",title:"TrackFind poster, Galaxy Community Conference 2019",link:this.$getNonImageAssetPath("materials","posters","Kompova_GCC2019_TrackFind.pdf"),external:!1},{category:"poster",previewImg:"Gundersen_Elixir_all_hands_2018_HyperBrowser.png",title:"The Genomic HyperBrowser, ELIXIR All-Hands 2018",link:this.$getNonImageAssetPath("materials","posters","Gundersen_Elixir_all_hands_2018_HyperBrowser.pdf"),external:!1},{category:"poster",previewImg:"Gundersen_GCCBOSC_2018_Coloc_stats.png",title:"Coloc-stats poster, Galaxy Community Conference 2018",link:this.$getNonImageAssetPath("materials","posters","Gundersen_GCCBOSC_2018_Coloc_stats.pdf"),external:!1},{category:"poster",previewImg:"Gundersen_Elixir_all_hands_2017_GTrack.png",title:"The GTrack ecosystem poster, ELIXIR All-Hands 2017",link:"https://doi.org/10.7490/f1000research.1115292.1",external:!0},{category:"presentation",previewImg:"Gundersen_Elixir_all_hands_2019_FAIRification.png",title:"ELIXIR Webinar on FAIRification of Genomic Tracks",link:"https://elixir-europe.org/events/elixir-webinar-fairification-genomic-tracks",external:!0}]}},computed:{tagsList:function(){return this.posts.reduce((function(t,e){return t.concat(e.tags)}),[]).filter((function(t,e,a){return a.indexOf(t)===e})).slice(0,-1)},categories:function(){var t=this.posts.map((function(t){return t.category})).sort();return t.unshift("all"),o(new Set(t))},filteredPosts:function(){var t=this;return this.filteredPostsByCategory().filter((function(e){return t.filteredPostsByTag().includes(e)}))}},methods:{filteredPostsByCategory:function(){var t=this;if("all"===this.activeCategory)return this.posts;var e=[];return this.posts.forEach((function(a){a.category===t.activeCategory&&e.push(a)})),e.sort((function(t,e){return new Date(e.date)-new Date(t.date)}))},filteredPostsByTag:function(){var t=this;if(0===this.selectedTags.length)return this.posts;var e=[];return this.posts.forEach((function(a){"tags"in a&&t.selectedTags.every((function(t){return a.tags.includes(t)}))&&e.push(a)})),e.sort((function(t,e){return new Date(e.date)-new Date(t.date)}))},setActiveCategory:function(t){this.activeCategory=t},addRemoveTagToList:function(t){this.selectedTags.includes(t)?this.selectedTags=this.selectedTags.filter((function(e){return e!==t})):this.selectedTags.push(t)}}},r=a(22),s=a(25),l=a.n(s),c=a(250),u=a(192),p=a(1171),d=a(1255),m=a(1104),g=a(1097),f=a(242),h=a(138),v=a(53),y=a(247),b=a(1105),_=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("v-row",[e("v-col",{attrs:{cols:"12",sm:"8",md:"8",lg:"9",xl:"10"}},[e("v-row",t._l(t.filteredPosts,(function(t,a){return e("v-col",{key:a,attrs:{id:"posts",cols:"12",sm:"6",md:"6",lg:"4",xl:"3"}},[e("UiMaterialsCard",{attrs:{post:t}})],1)})),1)],1),t._v(" "),e("v-col",{attrs:{id:"post-categories",cols:"12",xl:"2",lg:"3",md:"4",sm:"4"}},[e("v-card",{staticClass:"mb-4",attrs:{elevation:"1"}},[e("v-card-title",{staticClass:"justify-center"},[t._v("Categories")]),t._v(" "),e("v-divider"),t._v(" "),e("v-list",[e("v-list-item-group",{attrs:{mandatory:""}},t._l(t.categories,(function(a,o){return e("v-list-item",{key:o},[e("v-list-item-content",{on:{click:function(e){return t.setActiveCategory(a)}}},[e("v-list-item-title",{staticStyle:{"text-transform":"capitalize"},domProps:{textContent:t._s(a)}})],1)],1)})),1)],1)],1),t._v(" "),e("v-card",{attrs:{elevation:"1"}},[e("v-card-title",{staticClass:"justify-center"},[t._v("Tags")]),t._v(" "),e("v-divider"),t._v(" "),e("div",{staticClass:"mx-3 d-flex justify-space-around"},[e("v-chip-group",{attrs:{multiple:"",column:"","active-class":"error--text"}},t._l(t.tagsList,(function(a){return e("v-chip",{key:a,on:{click:function(e){return t.addRemoveTagToList(a)}}},[t._v("\n              "+t._s(a)+"\n            ")])})),1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=_.exports;l()(_,{UiMaterialsCard:a(1216).default}),l()(_,{VCard:c.a,VCardTitle:u.d,VChip:p.a,VChipGroup:d.a,VCol:m.a,VDivider:g.a,VList:f.a,VListItem:h.a,VListItemContent:v.a,VListItemGroup:y.a,VListItemTitle:v.c,VRow:b.a})}}]);