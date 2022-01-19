(window.webpackJsonp=window.webpackJsonp||[]).push([[51,32,37,40,43],{800:function(t,e,r){var content=r(804);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("8ae11210",content,!0,{sourceMap:!1})},801:function(t,e,r){"use strict";r.r(e);var n={props:{imageAsset:{type:Object,required:!0}},data:()=>({fullCoverStyle:"background-position: center center; position: absolute; background-size: cover; width: 100%;object-fit: contain;z-index: -1"}),computed:{altText(){return this.alt?this.alt:this.imageAsset.filename}}},o=r(19),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[t.imageAsset.isSvgImage?r("div",{staticClass:"lazyload fill-height",style:t.fullCoverStyle,attrs:{"data-bgset":t.imageAsset.optimizedImagePath,"data-sizes":"auto"}}):t._e(),t._v(" "),t.imageAsset.isSvgImage?t._e():r("div",{staticClass:"lazyload fill-height",style:t.fullCoverStyle,attrs:{"data-bgset":t.imageAsset.responsiveWebpImage.srcSet+" [type: image/webp] | "+t.imageAsset.responsiveImage.srcSet,"data-sizes":"auto"}})])}),[],!1,null,null,null);e.default=component.exports},803:function(t,e,r){"use strict";r(800)},804:function(t,e,r){var n=r(9)(!1);n.push([t.i,".gradient-fill-header .v-responsive__content{background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.banner{max-height:150px}",""]),t.exports=n},805:function(t,e,r){"use strict";r.r(e);var n={props:{pageHeader:{type:String},pageHeaderImages:{type:Array,default:()=>[]}}},o=(r(803),r(19)),l=r(32),c=r.n(l),d=r(790),h=r(194),m=r(184),f=r(791),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-responsive",{attrs:{"aspect-ratio":567/56.3,"max-height":"150px","min-height":"75px"}},[r("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(t,i){return r("v-col",{key:i,attrs:{cols:"4"}},[r("v-row",{staticClass:"ma-0 gradient-fill-header",attrs:{justify:"center"}},[r("v-responsive",{staticStyle:{"z-index":"2"},attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[r("UiSmartBackgroundImg",{attrs:{"image-asset":t}})],1)],1)],1)})),1),t._v(" "),r("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[r("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n      "+t._s(t.pageHeader.toUpperCase())+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{UiSmartBackgroundImg:r(801).default}),c()(component,{VCol:d.a,VOverlay:h.a,VResponsive:m.a,VRow:f.a})},806:function(t,e,r){"use strict";r.r(e);var n=r(807),o={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""}},methods:{compileMarkdown:t=>n.marked.parseInline(t,[])}},l=r(19),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.title?r("h2",{staticClass:"text-h4 text-md-h3 text-center font-weight-black mt-4 mb-8",domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.subtitle?r("h3",{staticClass:"text-h6 text-md-h5 font-weight-medium font-italic text-center mb-8",domProps:{textContent:t._s(t.subtitle)}}):t._e(),t._v(" "),t.ingress?r("h4",{staticClass:"text-h6 font-weight-medium font-italic text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}):t._e(),t._v(" "),t.info?r("p",{staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}}):t._e()])}),[],!1,null,null,null);e.default=component.exports},896:function(t,e,r){"use strict";r.r(e);var n=r(51),o={data:()=>({mdiWeb:n.A,title:"The FAIRtracks ecosystem",subtitle:"– Hoards of genomic track data at your fingertips",cards:[{title:"Bridging the data gaps",subtitle:"Community building",text:"We aim to connect: <p><ul><li>data producers</li><li>biocurators</li><li>tool developers</li><li>the FAIR community</li><li>researchers/data analysts</li><li>...and other interested parties</li></ul></p>Together we can mobilize the power of genomic track data and metadata at the fingertips of the researchers / bioinformaticians that are the target end users.",callout:"01"},{title:"Quality metadata and services",subtitle:"Technology",text:'Working in concert with the <a href="https://github.com/fairtracks/fairtracks_standard#readme">FAIRtracks draft standard</a> for metadata of genomic tracks, we have built an <nuxt-link to="/services"> ecosystem of services</nuxt-link> to interface with track metadata: <p><ul><li><a href="https://github.com/fairtracks/fairtracks_augment#readme">Metadata augmentation</li><li><a href="https://github.com/fairtracks/fairtracks_validator#readme">Metadata validation</li><li><a href="https://trackfind.elixir.no">Precision search</li><li><a href="/services">...and more</li></ul></p>',callout:"02"},{title:"Endorsed by ELIXIR",subtitle:"Organizational backing",text:'<p>The FAIRtracks ecosystem has been developed and is being provided as part of the national Service Delivery Plans by <a href="https://elixir.no/">ELIXIR Norway</a> and <a href="https://elixir-europe.org/about-us/who-we-are/nodes/spain">ELIXIR Spain</a>,  and is supported by the <a href="https://trackhubregistry.org/">Track Hub Registry group</a> at <a href="https://www.ebi.ac.uk/">EMBL-EBI</a>.</p><p>From 2021, FAIRtracks has been endorsed by ELIXIR Europe as a <a href="https://elixir-europe.org/news/four-new-elixir-recommended-interoperability-resources">Recommended Interoperability Resource (RIR)</a>.</p>',callout:"03"}]})},l=r(19),c=r(32),d=r.n(c),h=r(191),m=r(790),f=r(186),v=r(184),x=r(791),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"py-16",attrs:{id:"intro"}},[r("v-responsive",{staticClass:"max-auto mx-auto text-center",attrs:{"max-width":"600"}},[r("v-avatar",{staticClass:"mb-8",attrs:{color:"primary",size:"70"}},[r("v-icon",{attrs:{"x-large":"",dark:""}},[t._v(t._s(t.mdiWeb))])],1),t._v(" "),r("UiMainTitle",{attrs:{title:t.title,"sub-title":t.subtitle}}),t._v(" "),r("h3",{staticClass:"text-h5 text-md-h4 text-italic text-center font-weight-bold mb-7"},[t._v("\n      – Hoards of genomic track data at your fingertips\n    ")]),t._v(" "),r("p",{staticClass:"title font-weight-light"},[t._v('\n      In the spirit of Open Science, the FAIRtracks ecosystem provides\n      technical solutions for the abundance of genome browser track files\n      ("genomic tracks") to become "Findable, Accessible, Interoperable, and\n      Reusable"\n      '),r("a",{attrs:{href:"https://www.go-fair.org/fair-principles/"}},[t._v(" (FAIR) ")]),t._v("\n      in new research contexts.\n    ")])],1),t._v(" "),r("v-row",{staticClass:"pt-12"},t._l(t.cards,(function(e){return r("v-col",{key:e.title,staticClass:"pa-6",attrs:{cols:"12",md:"4"}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:e.callout?9:12}},[r("div",{staticClass:"pr-2"},[r("div",{staticClass:"text--disabled",domProps:{textContent:t._s(e.subtitle)}}),t._v(" "),r("h4",{staticClass:"text-uppercase mt-1 mb-4",staticStyle:{"letter-spacing":"0.15em"},domProps:{textContent:t._s(e.title)}}),t._v(" "),r("p",{domProps:{innerHTML:t._s(e.text)}})])]),t._v(" "),e.callout?r("v-col",{attrs:{cols:"2"}},[r("span",{staticClass:"text-h3 grey--text font-weight-bold pr-8",staticStyle:{opacity:"0.1"}},[t._v(t._s(e.callout))])]):t._e()],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{UiMainTitle:r(806).default}),d()(component,{VAvatar:h.a,VCol:m.a,VIcon:f.a,VResponsive:v.a,VRow:x.a})},970:function(t,e,r){"use strict";r.r(e);var n={data(){return{pageHeader:"Overview",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","S.svg"),this.$getImageAssetObject("images","tracktypes","F.svg"),this.$getImageAssetObject("images","tracktypes","LGP.svg")]}},head:()=>({title:"Overview",meta:[]})},o=r(19),l=r(32),c=r.n(l),d=r(799),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("UiPageHeaderBanner",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),r("v-container",[r("SectionsFairtracksIntro")],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{UiPageHeaderBanner:r(805).default,SectionsFairtracksIntro:r(896).default}),c()(component,{VContainer:d.a})}}]);