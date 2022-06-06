var R=Object.defineProperty,S=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var y=(s,n,i)=>n in s?R(s,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[n]=i,f=(s,n)=>{for(var i in n||(n={}))O.call(n,i)&&y(s,i,n[i]);if(b)for(var i of b(n))N.call(n,i)&&y(s,i,n[i]);return s},w=(s,n)=>S(s,j(n));import{d as U,a as v,r as G,y as C,J as q,o as M,g as P,L as B,M as x,u,l as d,q as W,O as z,z as Q,A as T,B as V,n as F,x as J,C as K}from"./@vue.a7176b8e.js";import{_ as X}from"./index.be58f898.js";import"./vuex.5b78a150.js";import"./vue-router.760322c3.js";import"./vuex-persistedstate.fa252374.js";const D=s=>(Q("data-v-19aa0f86"),s=s(),T(),s),Y={class:"photo-overflow"},Z=["width"],ee=D(()=>d("span",null,"\u672A\u83B7\u53D6\u5230\u53D6\u666F\u6846\u62CD\u7167\u6743\u9650",-1)),te=D(()=>d("span",null,"\u8BF7\u70B9\u51FB\u53F3\u4E0A\u89D2\u5237\u65B0\u540E\u6388\u6743\uFF0C\u6216\u8005",-1)),oe=V(" \u76F4\u63A5\u624B\u673A\u62CD\u7167 "),ie=D(()=>d("button",{style:{position:"absolute",top:"0px",left:"0px"}},"\u62CD\u7167",-1)),ne={name:"g-find-frame"},ae=U(w(f({},ne),{props:{width:{default:350},height:{default:200}},emits:["getPhotoBlob"],setup(s,{emit:n}){const i=s,c=v(),g=v(),e=G({flag:!0,imgNewURL:"",widthD:0,heightD:0,clientWidthD:0,clientHeightD:0,photoW:0,photoH:0,photoFlag:!0});C(()=>{navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)?e.flag=!0:e.flag=!1,console.log("onMounted")}),q(()=>{F(()=>{I()})});const I=()=>{e.clientWidthD=document.body.clientWidth,e.clientHeightD=document.body.clientHeight,i.width?(e.widthD=i.width,e.clientWidthD=i.width):e.widthD=e.clientWidthD,i.height?(e.heightD=i.height,e.clientHeightD=i.height):e.heightD=e.clientHeightD;const t=navigator;t.mediaDevices===void 0&&(t.mediaDevices={}),t.mediaDevices.getUserMedia===void 0&&(t.mediaDevices.getUserMedia=function(o){const h=t.webkitGetUserMedia||t.mozGetUserMedia;return h?new Promise(function(l,a){h.call(t,o,l,a)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}),t.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment"}}).then(function(o){"srcObject"in c.value?c.value.srcObject=o:c.value.src=window.URL.createObjectURL(o),c.value.onloadedmetadata=function(){c.value.play()},F(()=>{c.value.addEventListener("canplay",()=>{console.log(c.value.videoWidth,c.value.videoHeight),e.photoW=c.value.videoWidth,e.photoH=c.value.videoHeight,e.widthD>e.photoW&&(e.widthD=e.photoW),e.heightD>e.photoH&&(e.heightD=e.photoH*e.widthD/e.photoW)})})}).catch(function(o){e.photoFlag=!1,console.log(o.name+": "+o.message,o)})},A=async()=>{if(!e.photoFlag){g.value.click();return}const t=document.createElement("canvas"),o=t.getContext("2d");e.flag?(t.width=e.widthD*2,t.height=e.heightD*2):(t.width=e.widthD,t.height=e.heightD),o.drawImage(c.value,0,0,e.photoW,e.photoW*(e.heightD/e.widthD),0,0,t.width,t.height),console.log(e.photoW,e.photoW*(e.heightD/e.widthD),e.widthD,e.heightD);const h=t.toDataURL("image/jpeg",1),l=await _(h);n("getPhotoBlob",{blob:l,baseUrl:h})},H=async()=>{const o=document.getElementById("ground-push-image").files[0],h=await k(o),l=await L(h);n("getPhotoBlob",{blob:l,baseUrl:h.src})},k=t=>new Promise((o,h)=>{const l=new Image,a=new FileReader;a.onload=function(r){l.src=r.target.result},a.onerror=function(r){h(r)},a.readAsDataURL(t),l.onload=function(){o(l)},l.onerror=function(r){h(r)}}),L=(t,o=.13)=>new Promise(async(h,l)=>{try{const a=document.createElement("canvas"),r=a.getContext("2d"),{width:p,height:m}=t;a.width=p,a.height=m,r.clearRect(0,0,p,m),r.drawImage(t,0,0,p,m);const $=a.toDataURL("image/jpeg",o),E=await _($);h(E)}catch(a){l(a)}}),_=t=>{const o=window.atob(t.split(",")[1]),h=new ArrayBuffer(o.length),l=new Uint8Array(h);for(let a=0;a<o.length;a++)l[a]=o.charCodeAt(a);return new Blob([h],{type:"image/jpeg"})};return(t,o)=>(M(),P("div",{class:"component theme",style:W(`width: ${u(e).clientWidthD}px;height: ${u(e).heightD}px;`)},[B(d("div",Y,[d("video",{class:"video-contain",ref_key:"video",ref:c,id:"video",width:u(e).clientWidthD,autoplay:"",playsinline:"","webkit-playsinline":"true",muted:""},null,8,Z)],512),[[x,u(e).photoFlag]]),B(d("div",{class:"error",style:W(`width: ${u(e).clientWidthD}px;height: ${u(e).heightD}px;`)},[ee,te,d("button",null,[oe,d("input",{type:"file",ref_key:"qrcodeImageDom",ref:g,id:"ground-push-image",onChange:H,accept:"image/*",capture:""},null,544)])],4),[[x,!u(e).photoFlag]]),d("div",{class:"btn-photo",onClick:A},[z(t.$slots,"default",{},()=>[ie],!0)])],4))}}));var se=X(ae,[["__scopeId","data-v-19aa0f86"]]);const ce={class:"contanir theme"},he=d("button",{style:{width:"100px",height:"30px","text-align":"center","line-height":"30px",color:"red"}},"\u62CD-\u62CD-\u7167",-1),le=["src"],de={name:"findFrame"},we=U(w(f({},de),{setup(s){const n=v("");C(()=>{console.log("onMounted")});const i=c=>{console.log("blob----",c),n.value=c.baseUrl};return(c,g)=>(M(),P("div",ce,[J(se,{width:500,height:300,onGetPhotoBlob:i},{default:K(()=>[he]),_:1}),d("img",{src:n.value,alt:""},null,8,le)]))}}));export{we as default};
