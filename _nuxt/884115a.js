(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1206:function(t,r,n){"use strict";var e=n(1242);r.a={data:function(){return{markdownFiles:[]}},created:function(){this.markdownFilesDir&&(this.markdownFiles=this.$loadMarkdownFilesInDir(this.markdownFilesDir))},methods:{compileMarkdown:function(t){return t&&"string"==typeof t?e.marked.parseInline(t,[]):t}}}},1436:function(t,r,n){"use strict";n.r(r);var e=n(1194),i=n(1193),a=(n(33),{mixins:[n(1206).a],props:{markdownFilesDir:{type:String,required:!0}},data:function(){return{componentId:"ui-card-matrix"}},computed:{subsectionId:function(){return this.markdownFilesDir.split("/")[1]}},methods:{createCardId:function(t){return"".concat(this.subsectionId,"_c_").concat(t)}}}),s=n(61),o=Object(s.a)(a,(function(){var t=this,r=t._self._c;return r(i.a,{staticClass:"pa-0 pb-16 px-4",attrs:{"fill-height":"",justify:"space-around"}},t._l(t.markdownFiles,(function(n,i){return r(e.a,{key:t.createCardId(i),attrs:{id:t.createCardId(i),cols:"auto"}},[t._t("default",null,{subSectionId:t.subsectionId,cardId:t.createCardId(i),card:n,imageAsset:n.img?t.$getImageAssetObjectFromPathArray(n.img):null})],2)})),1)}),[],!1,null,null,null);r.default=o.exports}}]);