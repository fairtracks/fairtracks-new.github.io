(window.webpackJsonp=window.webpackJsonp||[]).push([[4,60],{1028:function(t,e,a){"use strict";a(998)},1029:function(t,e,a){var o=a(10)(!1);o.push([t.i,".card-category[data-v-8117122c]{text-align:center;padding-top:3px;padding-bottom:3px;text-transform:uppercase;font-weight:700;color:#fff}.blog[data-v-8117122c]{background-color:#966591}.poster[data-v-8117122c]{background-color:#dec349}.publication[data-v-8117122c]{background-color:#387572}.presentation[data-v-8117122c]{background-color:#bdbdbd}.media[data-v-8117122c],.workshop[data-v-8117122c]{background-color:#966591}",""]),t.exports=o},1066:function(t,e,a){"use strict";a.r(e);var o=a(53),s={props:{post:{type:Object,default:()=>{}}},data:()=>({mdiOpenInNew:o.H,mdiDownload:o.q,mdiCalendar:o.e}),methods:{categoryToDateText(t){switch(t){case"presentation":return"Presented on";case"workshop":return"Conducted on";default:return"Published on"}},categoryToLinkText(t){switch(t){case"poster":return"Open poster [pdf]";case"blog":return"Read blog post";case"presentation":return"View slides [pdf]";default:return"Read full text"}}}},i=(a(1028),a(15)),r=a(21),n=a.n(r),l=a(223),c=a(203),d=a(150),p=a(194),u=a(192),g=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto",attrs:{id:"post-card","max-width":"450",elevation:"1",height:"500px"}},[a("p",{staticClass:"card-category my-0",class:""+t.post.category},[t._v(t._s(t.post.category))]),t._v(" "),a("v-responsive",{attrs:{height:"162",width:"100%"}},[a("UiZoomableImage",{staticClass:"thin-border-bottom",attrs:{"image-asset":t.$getImageAssetObject("materials","previews",t.post.previewImg),"max-height":"160px",width:"100%","dialog-buttons":t.post.dialogButtons,"crop-bottom":""}})],1),t._v(" "),a("v-card-subtitle",{staticClass:"pb-0"},[a("v-btn",{staticClass:"px-0 primary--text",attrs:{text:"",small:"",disabled:""}},[a("div",{staticClass:"primary--text mr-1"},[t._v(t._s(t.categoryToDateText(t.post.category))+":")]),t._v(" "),a("div",{staticClass:"text--primary",staticStyle:{opacity:"60%"}},[t._v(t._s(t.post.date))])])],1),t._v(" "),a("v-responsive",{staticClass:"pa-0 mb-4",attrs:{height:"200px"}},[a("v-card-text",{staticClass:"title font-weight-bold pb-0 text--primary",staticStyle:{"line-height":"1.6rem"}},[t._v("\n      "+t._s(t.post.title)+"\n    ")]),t._v(" "),a("v-card-text",{staticClass:"text--primary",staticStyle:{opacity:"85%"}},[t._v("\n      "+t._s(t.post.description)+"\n    ")])],1),t._v(" "),a("v-btn",{staticClass:"ml-3 px-1",attrs:{text:"",color:"primary"}},[a("a",{staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:""+t.post.link}},[a("v-icon",{staticClass:"mr-2"},[t._v(t._s(t.post.external?t.mdiOpenInNew:t.mdiDownload))]),t._v("\n      "+t._s(t.categoryToLinkText(t.post.category))+"\n    ")],1)])],1)}),[],!1,null,"8117122c",null);e.default=g.exports;n()(g,{UiZoomableImage:a(987).default}),n()(g,{VBtn:l.a,VCard:c.a,VCardSubtitle:d.b,VCardText:d.c,VIcon:p.a,VResponsive:u.a})},1136:function(t,e,a){"use strict";a.r(e);var o={data(){return{activeCategory:"all",selectedTags:[],posts:[{category:"publication",tags:["Elixir","Norway"],previewImg:"f1000-manuscript-2021.png",title:"Recommendations for the FAIRification of genomic track metadata",date:"2021-04-21",link:"https://f1000research.com/articles/10-268/v1",external:!0,description:"The FAIRtracks paper has been published by F1000Research. The paper describes particular and general challenges when trying to FAIRify metadata of genomic tracks and discuss how the FAIRtracks ecosystem can help. Read our article to learn about how FAIRness of metadata used for genomic tracks. The article was published on 1 April 2021"},{category:"publication",tags:["UK","FAIR"],previewImg:"kanduri_colocalisation_2019.png",title:"Colocalization analyses of genomic elements: approaches, recommendations and challenges",date:"2018-10-11",link:"https://academic.oup.com/bioinformatics/article/35/9/1615/5126923",external:!0,description:"The paper discusses different approaches and provide recommendations for performing genomic colocalization analysis, and address the challenges to obtain a robust and biologically meaningful interpretation of genomic region set data."},{category:"publication",previewImg:"simovski_coloc-stats_2018.png",tags:["Genetics","FAIR"],title:"Coloc-stats: a unified web interface to perform colocalization analysis of genomic features",date:"2018-06-05",link:"https://academic.oup.com/nar/article/46/W1/W186/5033159",external:!0,description:"Coloc-stats provides a unified interface to perform colocalization analysis across various analytical methods and method-specific options (e.g. colocalizationmeasures, resolution, null models). Coloc-stats is freely available at https://hyperbrowser.uio.no/coloc-stats/."},{category:"publication",previewImg:"simovski_gsuite-hyperbrowser_2017.png",title:"GSuite HyperBrowser: integrative analysis of dataset collections across the genome and epigenome",tags:["Genomics","Tracks"],date:"2017-04-27",link:"https://academic.oup.com/gigascience/article/6/7/gix032/3777985",external:!0,description:"GSuite HyperBrowser is an open-source software system that represents a first comprehensive solution for integrative analysis of track collections across the genome and epigenome. The software is available at: https://hyperbrowser.uio.no"},{category:"publication",previewImg:"sandve_genomic-hyperBrowser_2013.png",title:"The Genomic HyperBrowser: an analysis web server for genome-scale data",date:"2013-04-30",link:"https://academic.oup.com/nar/article/41/W1/W133/1095828",external:!0,description:"The Genomic HyperBrowser (http://hyperbrowser.uio.no) is an open-ended web server for the analysis of genomic track data. Through the provision of several highly customizable components for processing and statistical analysis of genomic tracks, the HyperBrowser opens for a range of genomic investigations, related to, e.g., gene regulation, disease association or epigenetic modifications of the genome."},{category:"publication",previewImg:"gundersen_track-types_2011.png",title:"Identifying elemental genomic track types and representing them uniformly",date:"2011-12-30",link:"https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-12-494",external:!0,description:"Add description."},{category:"publication",previewImg:"sandve_genomic-hyperBrowser_2010.png",title:"The Genomic HyperBrowser: inferential genomics at the sequence level",date:"2010-12-23",link:"https://genomebiology.biomedcentral.com/articles/10.1186/gb-2010-11-12-r121",external:!0,description:"Seminal study about the Genomic HyperBrowser; the paper provides a collection of generic biological investigations that query pairwise relations between tracks, represented as mathematical objects, along the genome."},{category:"publication",previewImg:"BLUEPRINT_Cell_2016.png",title:"The BLUEPRINT Data Analysis Portal",date:"2016-11-15",link:"https://doi.org/10.1016/j.cels.2016.10.021",external:!0,description:"Add description."},{category:"blog",previewImg:"f1000-fairtracks-blog-full.png",title:"FAIRtracks featured in F1000 Article",date:"2021-12-1",link:"https://blog.f1000.com/2021/12/07/fairtracks/",external:!0,description:"FAIRtracks has been featured in a blog post on the F100Researchjournal web site! The blog post lays out the vision of the FAIRtracks project and makes an appeal to the community for involvement."},{category:"poster",previewImg:"Gundersen_Elixir_all_hands_2019_FAIRification.png",title:"FAIRtracks presented at ELIXIR All-Hands 2019",link:this.$getNonImageAssetPath("materials","posters","Gundersen_Elixir_all_hands_2019_FAIRification.pdf"),external:!1},{category:"poster",previewImg:"Kompova_GCC2019_TrackFind.png",title:"TrackFind poster, Galaxy Community Conference 2019",link:this.$getNonImageAssetPath("materials","posters","Kompova_GCC2019_TrackFind.pdf"),external:!1},{category:"poster",previewImg:"Gundersen_Elixir_all_hands_2018_HyperBrowser.png",title:"The Genomic HyperBrowser, ELIXIR All-Hands 2018",link:this.$getNonImageAssetPath("materials","posters","Gundersen_Elixir_all_hands_2018_HyperBrowser.pdf"),external:!1},{category:"poster",previewImg:"Gundersen_GCCBOSC_2018_Coloc_stats.png",title:"Coloc-stats poster, Galaxy Community Conference 2018",link:this.$getNonImageAssetPath("materials","posters","Gundersen_GCCBOSC_2018_Coloc_stats.pdf"),external:!1},{category:"poster",previewImg:"Gundersen_Elixir_all_hands_2017_GTrack.png",title:"The GTrack ecosystem poster, ELIXIR All-Hands 2017",link:"https://doi.org/10.7490/f1000research.1115292.1",external:!0},{category:"presentation",previewImg:"Gundersen_Elixir_all_hands_2019_FAIRification.png",title:"ELIXIR Webinar on FAIRification of Genomic Tracks",link:"https://elixir-europe.org/events/elixir-webinar-fairification-genomic-tracks",external:!0}]}},computed:{tagsList(){return this.posts.reduce(((t,e)=>t.concat(e.tags)),[]).filter(((t,e,a)=>a.indexOf(t)===e)).slice(0,-1)},categories(){var t=this.posts.map((t=>t.category)).sort();return t.unshift("all"),[...new Set(t)]},filteredPosts(){return this.filteredPostsByCategory().filter((t=>this.filteredPostsByTag().includes(t)))}},methods:{filteredPostsByCategory(){if("all"===this.activeCategory)return this.posts;var t=[];return this.posts.forEach((e=>{e.category===this.activeCategory&&t.push(e)})),t.sort(((t,e)=>new Date(e.date)-new Date(t.date)))},filteredPostsByTag(){if(0===this.selectedTags.length)return this.posts;var t=[];return this.posts.forEach((e=>{"tags"in e&&this.selectedTags.every((t=>e.tags.includes(t)))&&t.push(e)})),t.sort(((t,e)=>new Date(e.date)-new Date(t.date)))},setActiveCategory(t){this.activeCategory=t},addRemoveTagToList(t){this.selectedTags.includes(t)?this.selectedTags=this.selectedTags.filter((e=>e!==t)):this.selectedTags.push(t)}}},s=a(15),i=a(21),r=a.n(i),n=a(203),l=a(150),c=a(1010),d=a(1115),p=a(929),u=a(922),g=a(195),m=a(102),h=a(41),v=a(200),f=a(930),y=Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-col",{attrs:{cols:"12",sm:"8",md:"8",lg:"9",xl:"10"}},[a("v-row",t._l(t.filteredPosts,(function(t,e){return a("v-col",{key:e,attrs:{id:"posts",cols:"12",sm:"6",md:"6",lg:"4",xl:"3"}},[a("UiMaterialsCard",{attrs:{post:t}})],1)})),1)],1),t._v(" "),a("v-col",{attrs:{id:"post-categories",cols:"12",xl:"2",lg:"3",md:"4",sm:"4"}},[a("v-card",{staticClass:"mb-4",attrs:{elevation:"1"}},[a("v-card-title",{staticClass:"justify-center"},[t._v("Categories")]),t._v(" "),a("v-divider"),t._v(" "),a("v-list",[a("v-list-item-group",{attrs:{mandatory:""}},t._l(t.categories,(function(e,o){return a("v-list-item",{key:o},[a("v-list-item-content",{on:{click:function(a){return t.setActiveCategory(e)}}},[a("v-list-item-title",{staticStyle:{"text-transform":"capitalize"},domProps:{textContent:t._s(e)}})],1)],1)})),1)],1)],1),t._v(" "),a("v-card",{attrs:{elevation:"1"}},[a("v-card-title",{staticClass:"justify-center"},[t._v("Tags")]),t._v(" "),a("v-divider"),t._v(" "),a("div",{staticClass:"mx-3 d-flex justify-space-around"},[a("v-chip-group",{attrs:{multiple:"",column:"","active-class":"error--text"}},t._l(t.tagsList,(function(e){return a("v-chip",{key:e,on:{click:function(a){return t.addRemoveTagToList(e)}}},[t._v("\n            "+t._s(e)+"\n          ")])})),1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=y.exports;r()(y,{UiMaterialsCard:a(1066).default}),r()(y,{VCard:n.a,VCardTitle:l.d,VChip:c.a,VChipGroup:d.a,VCol:p.a,VDivider:u.a,VList:g.a,VListItem:m.a,VListItemContent:h.a,VListItemGroup:v.a,VListItemTitle:h.c,VRow:f.a})},951:function(t,e,a){"use strict";a.r(e);var o={props:{id:{type:String,default:null},href:{type:String,default:null},to:{type:String,default:null},text:{type:String,default:""},icon:{type:String,default:""},large:{type:Boolean,default:!1},xLarge:{type:Boolean,default:!1},small:{type:Boolean,default:!1},xSmall:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:()=>({prevButtonHoverId:""}),computed:{buttonHoverId(){return this.$store.state.buttonHover.buttonHoverId},shouldHover(){return this.doHover&&""===this.buttonHoverId}},methods:{setButtonHoverId(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit("buttonHover/setButtonHoverId",t)},unsetButtonHoverId(){this.prevButtonHoverId="",this.$store.commit("buttonHover/setButtonHoverId",this.prevButtonHoverId)}}},s=a(15),i=a(21),r=a.n(i),n=a(223),l=a(194),c=Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"simplebutton"},[a("v-btn",{class:t.$vuetify.theme.dark?t.shouldHover?"custom-hover primary":"primary":t.shouldHover?"custom-hover secondary":"secondary",attrs:{id:t.id,large:t.large,"x-large":t.xLarge,small:t.small,"x-small":t.xSmall,href:t.href,"to:":t.to,ripple:!1},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseleave:function(e){return t.unsetButtonHoverId(t.id)},click:function(e){return e.stopPropagation(),t.$emit("btn-click",!0)}}},[t.icon?a("v-icon",{staticClass:"pr-3 center"},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.text)+"\n  ")],1)],1)}),[],!1,null,null,null);e.default=c.exports;r()(c,{VBtn:n.a,VIcon:l.a})},953:function(t,e,a){var o=a(958);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,a(11).default)("49d89040",o,!0,{sourceMap:!1})},957:function(t,e,a){"use strict";a(953)},958:function(t,e,a){var o=a(10)(!1);o.push([t.i,".full-overlay>.v-overlay__content{width:100%;height:100%}.above-overlay,.above-overlay>.v-btn,.above-overlay>.v-responsive__content{z-index:2}.size-from-contents:not(.v-dialog--fullscreen){width:auto;overflow:hidden}.no-max-height.v-dialog:not(.v-dialog--fullscreen){max-height:none;margin:0}.max-height-95.v-dialog:not(.v-dialog--fullscreen){max-height:95%;margin:0}.thin-border{border:1px solid #d3d3d3}.thin-border-bottom{border-bottom:1px solid #d3d3d3}",""]),t.exports=o},961:function(t,e,a){var o=a(977);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,a(11).default)("7140d6a0",o,!0,{sourceMap:!1})},968:function(t,e,a){"use strict";a.r(e);var o=a(53),s={props:{value:Boolean,imageAsset:{type:Object,required:!0},alt:{type:String,default:""},buttons:{type:Array,default:()=>[]},cropBottom:{type:Boolean,default:!1}},data:()=>({mdiClose:o.j}),computed:{show:{get(){return this.value},set(t){this.$emit("input",t)}}}},i=(a(957),a(15)),r=a(21),n=a.n(r),l=a(223),c=a(203),d=a(150),p=a(929),u=a(996),g=a(194),m=a(202),h=a(192),v=a(930),f=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"content-class":t.cropBottom?"size-from-contents max-height-95":"size-from-contents no-max-height"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-card",[a("v-row",{attrs:{"no-gutters":"","fill-height":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-overlay",{staticClass:"full-overlay",attrs:{absolute:"",opacity:"0","z-index":"1"}},[a("v-responsive",{attrs:{height:"100%"}},[a("v-row",{staticClass:"mb-auto",attrs:{"fill-height":"","no-gutters":"",align:"start",justify:"end"}},[a("v-col",{staticClass:"pa-2 ma-0",attrs:{cols:"auto","align-self":"start"}},[a("div",{staticClass:"simplebutton"},[a("v-btn",{staticClass:"pa-0",attrs:{width:"24px",height:"24px","min-width":"24px",ripple:!1},on:{click:function(e){t.show=!1}}},[a("v-icon",[t._v(t._s(t.mdiClose))])],1)],1)])],1)],1)],1),t._v(" "),a("UiSmartImg",{class:t.cropBottom?"mx-10 mt-10 overflow-y-auto thin-border above-overlay":null,attrs:{"image-asset":t.imageAsset,alt:t.alt,"max-height":t.cropBottom?"calc(95vh - 151px)":"calc(95vh - 110px)",width:t.cropBottom?"calc(90vw - 82px)":"90vw","crop-bottom":t.cropBottom}})],1)],1),t._v(" "),a("v-card-actions",[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},t._l(t.buttons,(function(e,o){return a("v-col",{key:"s_"+o,staticClass:"pa-2 ma-0",attrs:{cols:"auto","align-self":"end"}},[a("UiStyledButton",{staticClass:"text-weight-light above-overlay",attrs:{id:"btn_"+o,href:e.href,to:e.to,text:e.text,icon:e.icon,"x-large":""},on:{"btn-click":function(a){!e.link&&(t.show=!1)}}})],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=f.exports;n()(f,{UiSmartImg:a(221).default,UiStyledButton:a(951).default}),n()(f,{VBtn:l.a,VCard:c.a,VCardActions:d.a,VCol:p.a,VDialog:u.a,VIcon:g.a,VOverlay:m.a,VResponsive:h.a,VRow:v.a})},976:function(t,e,a){"use strict";a(961)},977:function(t,e,a){var o=a(10)(!1);o.push([t.i,".image-box{box-sizing:border-box;position:relative;margin:auto;overflow:hidden}.image-box .attach-classes{-webkit-transition:all .3s;transition:all .3s;display:block;-webkit-transform:scale(1);transform:scale(1)}.image-hover .attach-classes{max-width:100%;-webkit-transform:scale(1.05);transform:scale(1.05);opacity:.5}.image-box .v-icon{-webkit-transition:all .3s;transition:all .3s;display:block;opacity:0}.image-hover .v-icon{opacity:.25}",""]),t.exports=o},987:function(t,e,a){"use strict";a.r(e);var o=a(53),s={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},minWidth:{type:String,default:null},maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},cropBottom:{type:Boolean,default:null},dialogButtons:{type:Array,default:()=>{}},alt:{type:String,default:""}},data:()=>({showDialog:!1,mdiMagnifyExpand:o.E})},i=(a(976),a(15)),r=a(21),n=a.n(r),l=a(966),c=a(194),d=a(202),p=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[a("div",{staticClass:"image-box",class:o?"image-hover":null,on:{click:function(e){t.showDialog=!0}}},[a("v-overlay",{attrs:{absolute:"",opacity:"0"}},[a("v-icon",{staticStyle:{transition:"all 0.3s"},attrs:{"x-large":"",color:"black"}},[t._v("\n          "+t._s(t.mdiMagnifyExpand)+"\n        ")])],1),t._v(" "),a("UiSmartImg",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,"min-width":t.minWidth,"max-height":t.maxHeight,"max-width":t.maxWidth,"crop-bottom":t.cropBottom,alt:t.alt}})],1)]}}])}),t._v(" "),a("UiPopupDialog",{attrs:{"max-width":"80vw","image-asset":t.imageAsset,"crop-bottom":t.cropBottom,buttons:t.dialogButtons},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}})],1)}),[],!1,null,null,null);e.default=p.exports;n()(p,{UiSmartImg:a(221).default,UiPopupDialog:a(968).default}),n()(p,{VHover:l.a,VIcon:c.a,VOverlay:d.a})},998:function(t,e,a){var o=a(1029);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,a(11).default)("32907efc",o,!0,{sourceMap:!1})}}]);