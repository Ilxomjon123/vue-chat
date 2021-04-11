(function(t){function e(e){for(var o,a,s=e[0],u=e[1],c=e[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},i=[];function a(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"58786c94"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=a(t);var c=new Error;i=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}r[t]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-chat/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0020":function(t,e,n){},1:function(t,e){},"228a":function(t,e,n){"use strict";n("7828")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o,r=n("2b0e"),i=n("6293"),a=n.n(i),s=n("8055"),u=n("43f9"),c=n.n(u),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},d=[],f=(n("5c0b"),n("2877")),m={},p=Object(f["a"])(m,l,d,!1,null,null,null),v=p.exports,h=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"container"},[n("CustomInput"),n("VideoArea")],1)])},g=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row input-wrapper"},[n("h2",[t._v("Konferensiya zali")]),n("label",{attrs:{for:"room"}},[t._v("Xona nomini kiriting: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.roomId,expression:"$store.state.roomId"}],attrs:{id:"room"},domProps:{value:t.$store.state.roomId},on:{input:function(e){e.target.composing||t.$set(t.$store.state,"roomId",e.target.value)}}})])},w=[],C={name:"CustomInput"},_=C,j=(n("228a"),Object(f["a"])(_,y,w,!1,null,"249222f2",null)),E=j.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",[n("vue-webrtc",{ref:"webrtc",attrs:{width:"100%",roomId:t.$store.state.roomId},on:{"joined-room":t.logEvent,"left-room":t.logEvent,"open-room":t.logEvent,"share-started":t.logEvent,"share-stopped":t.logEvent,error:t.onError}})],1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 my-3 btn-wrapper"},[t.isVideoPlaying?t._e():n("md-button",{staticClass:"md-raised md-primary",on:{click:t.onJoin}},[t._v("Qo'shilish")]),t.isVideoPlaying?n("md-button",{staticClass:"md-raised md-primary",attrs:{type:"button"},on:{click:t.onLeave}},[t._v("Chiqish")]):t._e(),t.isVideoPlaying?n("md-button",{staticClass:"md-raised md-primary",attrs:{type:"button"},on:{click:t.onCapture}},[t._v("Rasmga olish")]):t._e(),t.isVideoPlaying?n("md-button",{staticClass:"md-raised md-primary",attrs:{type:"button"},on:{click:t.onShareScreen}},[t._v("Ekranni uzatish")]):t._e()],1)])])]),t.img?n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("h2",[t._v("Rasm")]),n("figure",{staticClass:"figure"},[n("img",{staticClass:"img-responsive",attrs:{src:t.img}})])])]):t._e()])},P=[],I=n("ade3"),R=(n("a15b"),o={name:"VideoArea",computed:{},data:function(){return{img:null,isVideoPlaying:!1}}},Object(I["a"])(o,"computed",{webRTCRef:function(){return this.$refs.webrtc}}),Object(I["a"])(o,"methods",{onCapture:function(){this.img=this.webRTCRef.capture()},onJoin:function(){this.isVideoPlaying=!0,this.webRTCRef.join(),console.log(this.$store.state.roomId)},onLeave:function(){this.isVideoPlaying=!1,this.webRTCRef.leave()},onShareScreen:function(){this.img=this.webRTCRef.shareScreen()},onError:function(t,e){console.log("On Error Event",t,e)},logEvent:function(t){console.log("Event : ",t)}}),o),$=R,k=(n("7822"),Object(f["a"])($,O,P,!1,null,"5f24d49b",null)),x=k.exports,S={name:"Home",components:{CustomInput:E,VideoArea:x}},T=S,V=Object(f["a"])(T,b,g,!1,null,null,null),A=V.exports;r["default"].use(h["a"]);var J=[{path:"/",name:"Home",component:A},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],L=new h["a"]({mode:"history",base:"/vue-chat/",routes:J}),M=L,q=n("2f62");r["default"].use(q["a"]);var z=new q["a"].Store({state:{roomId:"video-chat"},getters:{getRoomId:function(t){return t.roomId}},mutations:{},actions:{},modules:{}});n("51de"),n("e094");window.io=s,r["default"].use(c.a),r["default"].use(a.a),r["default"].use(q["a"]),r["default"].config.productionTip=!1,new r["default"]({router:M,store:z,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},7822:function(t,e,n){"use strict";n("0020")},7828:function(t,e,n){},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.c4f2af86.js.map