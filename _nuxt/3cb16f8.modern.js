(window.webpackJsonp=window.webpackJsonp||[]).push([[53,33,37,39,40,43,44],{800:function(t,e,r){var content=r(804);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("8ae11210",content,!0,{sourceMap:!1})},801:function(t,e,r){"use strict";r.r(e);var n={props:{imageAsset:{type:Object,required:!0}},data:()=>({fullCoverStyle:"background-position: center center; position: absolute; background-size: cover; width: 100%;object-fit: contain;z-index: -1"}),computed:{altText(){return this.alt?this.alt:this.imageAsset.filename}}},o=r(19),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[t.imageAsset.isSvgImage?r("div",{staticClass:"lazyload fill-height",style:t.fullCoverStyle,attrs:{"data-bgset":t.imageAsset.optimizedImagePath,"data-sizes":"auto"}}):t._e(),t._v(" "),t.imageAsset.isSvgImage?t._e():r("div",{staticClass:"lazyload fill-height",style:t.fullCoverStyle,attrs:{"data-bgset":t.imageAsset.responsiveWebpImage.srcSet+" [type: image/webp] | "+t.imageAsset.responsiveImage.srcSet,"data-sizes":"auto"}})])}),[],!1,null,null,null);e.default=component.exports},802:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,default:""}}},o=r(19),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"text-h4 font-weight-bold mb-5"},[t._v(t._s(t.title))])}),[],!1,null,null,null);e.default=component.exports},803:function(t,e,r){"use strict";r(800)},804:function(t,e,r){var n=r(9)(!1);n.push([t.i,".gradient-fill-header .v-responsive__content{background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.banner{max-height:150px}",""]),t.exports=n},805:function(t,e,r){"use strict";r.r(e);var n={props:{pageHeader:{type:String},pageHeaderImages:{type:Array,default:()=>[]}}},o=(r(803),r(19)),l=r(32),c=r.n(l),d=r(790),v=r(194),h=r(184),f=r(791),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-responsive",{attrs:{"aspect-ratio":567/56.3,"max-height":"150px","min-height":"75px"}},[r("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(t,i){return r("v-col",{key:i,attrs:{cols:"4"}},[r("v-row",{staticClass:"ma-0 gradient-fill-header",attrs:{justify:"center"}},[r("v-responsive",{staticStyle:{"z-index":"2"},attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[r("UiSmartBackgroundImg",{attrs:{"image-asset":t}})],1)],1)],1)})),1),t._v(" "),r("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[r("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n      "+t._s(t.pageHeader.toUpperCase())+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{UiSmartBackgroundImg:r(801).default}),c()(component,{VCol:d.a,VOverlay:v.a,VResponsive:h.a,VRow:f.a})},806:function(t,e,r){"use strict";r.r(e);var n=r(807),o={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""}},methods:{compileMarkdown:t=>n.marked.parseInline(t,[])}},l=r(19),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.title?r("h2",{staticClass:"text-h4 text-md-h3 text-center font-weight-black mt-4 mb-8",domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.subtitle?r("h3",{staticClass:"text-h6 text-md-h5 font-weight-medium font-italic text-center mb-8",domProps:{textContent:t._s(t.subtitle)}}):t._e(),t._v(" "),t.ingress?r("h4",{staticClass:"text-h6 font-weight-medium font-italic text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}):t._e(),t._v(" "),t.info?r("p",{staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}}):t._e()])}),[],!1,null,null,null);e.default=component.exports},808:function(t,e,r){"use strict";r.r(e);var n={props:{id:{type:String,default:null},href:{type:String,default:null},text:{type:String,default:""},xLarge:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:()=>({prevButtonHoverId:""}),computed:{buttonHoverId(){return this.$store.state.buttonHover.buttonHoverId},shouldHover(){return this.doHover&&""===this.buttonHoverId}},methods:{setButtonHoverId(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit("buttonHover/setButtonHoverId",t)},unsetButtonHoverId(){this.prevButtonHoverId="",this.$store.commit("buttonHover/setButtonHoverId",this.prevButtonHoverId)}}},o=r(19),l=r(32),c=r.n(l),d=r(210),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"simplebutton"},[r("v-btn",{staticClass:"secondary",class:t.shouldHover?"custom-hover":null,attrs:{id:t.id,"x-large":t.xLarge,href:t.href,ripple:!1},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseleave:function(e){return t.unsetButtonHoverId(t.id)},click:function(e){return e.stopPropagation(),t.$emit("btn-click",!0)}}},[t._v("\n    "+t._s(t.text)+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a})},824:function(t,e,r){"use strict";var n=r(105),o=r(25),l=r(4),c=r(5);e.a=Object(l.a)(n.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},830:function(t,e,r){var content=r(863);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("2319ca58",content,!0,{sourceMap:!1})},862:function(t,e,r){"use strict";r(830)},863:function(t,e,r){var n=r(9)(!1);n.push([t.i,".zoom[data-v-22ddd0da]{-webkit-transform:scale(1.025) translateY(-10px);transform:scale(1.025) translateY(-10px)}.notzoom[data-v-22ddd0da],.zoom[data-v-22ddd0da]{transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.text-h6[data-v-22ddd0da]{line-height:1.7rem!important}.v-list-item__content[data-v-22ddd0da],.v-list-item__icon[data-v-22ddd0da]{align-self:center;align-items:center}",""]),t.exports=n},897:function(t,e,r){"use strict";r.r(e);var n={props:{sectionId:{type:String,default:""},title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},cards:{type:Array,default:()=>[]}}},o=(r(862),r(19)),l=r(32),c=r.n(l),d=r(195),v=r(790),h=r(824),f=r(186),m=r(187),x=r(98),y=r(38),_=r(83),k=r(184),I=r(791),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{id:t.sectionId}},[t.title?r("v-row",{staticClass:"pt-16 px-8 pb-8",attrs:{id:t.sectionId+"_title"}},[r("UiMainTitle",{attrs:{title:t.title,ingress:t.ingress,info:t.info}})],1):t._e(),t._v(" "),t.subtitle?r("v-row",{staticClass:"px-8 pt-8 pb-8",attrs:{id:t.sectionId+"_subtitle",justify:"center"}},[r("UiMinorTitle",{attrs:{title:t.subtitle}})],1):t._e(),t._v(" "),r("v-row",{staticClass:"pa-0 pb-16 px-8",attrs:{"fill-height":"",justify:"start"}},t._l(t.cards,(function(e,n){return r("v-col",{key:"c_"+n,attrs:{id:t.sectionId+"_c_"+n,cols:"12",md:"6",lg:"4",xl:"3"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(o){var l=o.hover;return[r("v-card",{staticClass:"py-4 px-6 mx-auto transition-swing",class:l?"zoom":"notzoom",attrs:{elevation:l?24:2,outlined:"",shaped:"",width:"380px",height:"614px",href:e.services[e.services.length-1].link}},[r("div",[r("v-responsive",{staticClass:"pt-3 px-1",attrs:{height:"170"}},[r("v-row",{staticClass:"fill-height pa-0",attrs:{"no-gutters":""}},[r("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[e.logo?r("UiSmartImg",{staticClass:"ma-auto",attrs:{contain:"","image-asset":t.$getImageAssetObject("images",e.logo[0],e.logo[1]),"max-height":"75"}}):r("h2",{staticClass:"text-h5 text-center font-weight-black ma-auto",domProps:{textContent:t._s(e.title)}})],1),t._v(" "),r("v-col",{staticClass:"pa-0",attrs:{cols:"12",ali:""}},[r("h3",{staticClass:"text-h6 text-center font-weight-bold mx-8"},[t._v("\n                    "+t._s(e.subtitle)+"\n                  ")])])],1)],1),t._v(" "),r("v-responsive",{staticClass:"pt-5 pb-3 px-1",attrs:{height:"408"}},[r("v-row",{staticClass:"fill-height",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12"}},[r("v-list",{},t._l(e.features,(function(e,n){return r("v-list-item",{key:"feature-"+n,attrs:{dense:""}},[r("v-list-item-icon",[r("v-icon",{staticClass:"grey--text-2"},[t._v("\n                          "+t._s(e.icon)+"\n                        ")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-wrap text-left grey--text-2",domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1),t._v(" "),r("v-col",{attrs:{cols:"12","align-self":"end"}},[r("v-row",{class:1==e.services.length?"justify-end":"justify-space-between",attrs:{"no-gutters":""}},t._l(e.services,(function(t,o){return r("v-col",{key:"s_"+n+"_"+o,staticClass:"pa-0 ma-0",attrs:{cols:"auto","align-self":"end"}},[r("UiStyledButton",{staticClass:"text-weight-light",attrs:{id:"btn_"+n+"_"+o,href:t.link,text:t.text,"do-hover":l&&o+1==e.services.length}})],1)})),1)],1)],1)],1)],1)])]}}],null,!0)})],1)})),1)],1)}),[],!1,null,"22ddd0da",null);e.default=component.exports;c()(component,{UiMainTitle:r(806).default,UiMinorTitle:r(802).default,UiSmartImg:r(375).default,UiStyledButton:r(808).default}),c()(component,{VCard:d.a,VCol:v.a,VHover:h.a,VIcon:f.a,VList:m.a,VListItem:x.a,VListItemContent:y.a,VListItemIcon:_.a,VListItemTitle:y.c,VResponsive:k.a,VRow:I.a})},972:function(t,e,r){"use strict";r.r(e);var n=r(51),o={data(){return{pageHeader:"Services",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","P.svg"),this.$getImageAssetObject("images","tracktypes","VP.svg"),this.$getImageAssetObject("images","tracktypes","LP.svg")],coreSectionId:"fairtracks",title:"The FAIRtracks ecosystem",ingress:"The FAIRtracks ecosystem contains an interconnected group of services built around [the FAIRtracks draft standard](standards#s01-fairtracks). The services are aimed at gathering, curating, validating, integrating, indexing, and analysing the metadata of genomic tracks.",info:"(Please refer to the [overview](/overview#ecosystem) page for images of the interconnections between the services, both internally within the FAIRtracks ecosystem, as well as to external services.)",coreSubtitle:"Core services",coreCards:[{logo:["logos","trackfind.png"],title:"TrackFind",subtitle:"Search engine for genome track metadata",icon:n.q,color:"green darken-2",features:[{icon:n.j,text:"Hierarchical browser of the metadata attributes and all values actually present in the database"},{icon:n.w,text:"Categorical search"},{icon:n.x,text:"Graphical builder of SQL-based search queries"},{icon:n.v,text:"Browse results in table or hierarchical form"},{icon:n.e,text:"Export results in JSON or GSuite formats"},{icon:n.a,text:"REST API for integration into downstream tools and scripts"}],services:[{text:"REST API",link:"https://app.swaggerhub.com/apis-docs/FAIRtracks/TrackFind/1.0.0"},{text:"Web GUI",link:"https://trackfind.elixir.no/"}]}],connectedSectionId:"connected",connectedTitle:"Connected services",connectedCards:[{logo:["logos","gsuite-hyperbrowser.png"],title:"GSuite HyperBrowser",subtitle:"Statistical analysis framework for track data",icon:n.q,color:"green darken-2",features:[{icon:n.c,text:"The first general framework for statistical analysis of genomic tracks"},{icon:n.r,text:"Created at the crossroads of biology, statistics, and computer science"},{icon:n.A,text:"Open-ended web server, based on the Galaxy web framework"},{icon:n.h,text:"Can analyse genomic variation, gene regulation, chromatin structure, 3D genome organization, and more..."},{icon:n.t,text:"Hundreds of precise tools and analyses"},{icon:n.g,text:"Prototype track search and import tool that inspired FAIRtracks is being replaced by TrackFind client"}],services:[{text:"Web GUI",link:"https://hyperbrowser.uio.no/"}]}]}},head:()=>({title:"Services",meta:[]})},l=r(19),c=r(32),d=r.n(c),v=r(791),h=r(795),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"fill-height",class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4"},[r("UiPageHeaderBanner",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),r("SectionsInfoCards",{attrs:{"section-id":t.coreSectionId,title:t.title,subtitle:t.coreSubtitle,ingress:t.ingress,info:t.info,cards:t.coreCards}}),t._v(" "),r("SectionsInfoCards",{attrs:{"section-id":t.connectedSectionId,subtitle:t.connectedTitle,cards:t.connectedCards}}),t._v(" "),r("v-spacer",{class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4"}),t._v(" "),r("v-row")],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{UiPageHeaderBanner:r(805).default,SectionsInfoCards:r(897).default}),d()(component,{VRow:v.a,VSpacer:h.a})}}]);