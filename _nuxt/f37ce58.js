(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{245:function(t,e,n){var content=n(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(130).default)("28f1127f",content,!0,{sourceMap:!1})},247:function(t,e,n){"use strict";n(245)},248:function(t,e,n){var o=n(129)(!1);o.push([t.i,"@-webkit-keyframes upAnime{0%{height:0}to{height:100%}}@keyframes upAnime{0%{height:0}to{height:100%}}*{box-sizing:border-box;padding:0;margin:0}.continer{position:relative;width:100vw;height:100vh;overflow:hidden}.status{position:relative;font-size:20px;font-weight:700;z-index:1}.status__head{color:#fff}.status__body{color:#ee7800}.screen{position:absolute;width:100%;height:100%;top:0;left:0;background-size:cover;background-attachment:fixed;opacity:0;pointer-events:none}.screen.active{opacity:1;pointer-events:auto;-webkit-animation:upAnime 2s ease;animation:upAnime 2s ease}.screen__text{position:absolute;font-size:50px;color:#fff;font-weight:700;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}.screen.fv{background-image:url(/images/bg_01.jpg)}.screen.news{background-image:url(/images/bg_02.jpg)}.screen.profile{background-image:url(/images/bg_03.jpg)}.screen.gallery{background-image:url(/images/bg_05.jpg)}.screen.other{background-image:url(/images/bg_04.jpg)}",""]),t.exports=o},251:function(t,e,n){"use strict";n.r(e);n(72);var o={data:function(){return{count:1,countFlg:!0}},methods:{changeScreen:function(t){var e=document.querySelectorAll(".screen");this.countFlg&&(t.deltaY>100?this.count<e.length&&(this.count++,this.countFlg=!1,setTimeout(this.changeCountFlg,3e3)):t.deltaY<-100&&this.count>1&&(this.count--,this.countFlg=!1,setTimeout(this.changeCountFlg,3e3)));for(var i=0;i<e.length;i++)e[i].classList.remove("active"),e[this.count-1].classList.add("active")},changeCountFlg:function(){return this.countFlg=!0}}},c=(n(247),n(56)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"continer",on:{wheel:t.changeScreen}},[n("div",{staticClass:"status"},[n("span",{staticClass:"status__head"},[t._v("ステータス：")]),t._v(" "),n("span",{staticClass:"status__body"},[t._v(t._s(t.countFlg?"切り替え可能":"切り替え制限中"))])]),t._v(" "),n("section",{staticClass:"screen fv active",attrs:{id:"fv"}},[n("p",{staticClass:"screen__text"},[t._v(t._s(t.count)+"ページ目 FV")])]),t._v(" "),n("section",{staticClass:"screen news next-active",attrs:{id:"news"}},[n("p",{staticClass:"screen__text"},[t._v(t._s(t.count)+"ページ目 NEWS")])]),t._v(" "),n("section",{staticClass:"screen profile",attrs:{id:"profile"}},[n("p",{staticClass:"screen__text"},[t._v(t._s(t.count)+"ページ目 PROFILE")])]),t._v(" "),n("section",{staticClass:"screen gallery",attrs:{id:"gallery"}},[n("p",{staticClass:"screen__text"},[t._v(t._s(t.count)+"ページ目 GALLERY")])]),t._v(" "),n("section",{staticClass:"screen other",attrs:{id:"other"}},[n("p",{staticClass:"screen__text"},[t._v(t._s(t.count)+"ページ目 OTHER")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);