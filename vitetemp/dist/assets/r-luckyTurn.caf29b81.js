var x=Object.defineProperty,I=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var m=(o,e,a)=>e in o?x(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,_=(o,e)=>{for(var a in e||(e={}))b.call(e,a)&&m(o,a,e[a]);if(g)for(var a of g(e))C.call(e,a)&&m(o,a,e[a]);return o},u=(o,e)=>I(o,w(e));import{_ as P}from"./index.be58f898.js";import{d as h,r as S,y,o as f,g as k,l,k as z,q as B,u as p,z as H,A as W,a as M,x as $}from"./@vue.a7176b8e.js";import"./vuex.5b78a150.js";import"./vue-router.760322c3.js";import"./vuex-persistedstate.fa252374.js";const N=o=>(H("data-v-67963f84"),o=o(),W(),o),T={class:"component theme"},q=N(()=>l("div",{class:"box-arrow"},null,-1)),A={name:"gLuckyTurn"},E=h(u(_({},A),{props:{luckyW:{default:1500},luckyH:{default:1500},luckyImg:{default:"https://gem530.github.io/img/lucky_bg.png"},luckyIndex:{default:0},isShowPrz:{type:Boolean,default:!1}},emits:["endPlay"],setup(o,{emit:e}){const a=o,t=S({awardName:"",imgWidth:0,imgHeight:0,prize_list:[{},{},{},{},{},{},{},{}],start_rotating_degree:0,rotate_angle:0,start_rotating_degree_pointer:0,rotate_angle_pointer:0,rotate_transition:"transform 6s ease-in-out",rotate_transition_pointer:"transform 12s ease-in-out",click_flag:!0,index:0});y(()=>{console.log("onMounted");const s=document.querySelector("#myCanvas");var i=s.getContext("2d");const n=new Image;n.crossorigin="Anonymous",n.src=a.luckyImg,n.onload=()=>{t.imgWidth=n.width,t.imgHeight=n.height,s.width=t.imgWidth,s.height=t.imgHeight,i.drawImage(n,0,0,666,665)}});const r=()=>{t.index=a.luckyIndex,c()},c=()=>{if(!!t.click_flag){var s=5,i=t.index,n=[337.5,292.5,247.5,202.5,157.5,112.5,67.5,22.5],v=4;t.click_flag=!1;var d=t.start_rotating_degree+v*360+n[i]-t.start_rotating_degree%360;t.start_rotating_degree=d,t.rotate_angle="rotate("+d+"deg)",setTimeout(()=>{t.click_flag=!0,e("endPlay",t.click_flag)},s*1e3+1500)}};return(s,i)=>(f(),k("div",T,[l("canvas",{id:"myCanvas",class:z(["wheel-bg-canvas",a.isShowPrz&&"demo_css"]),style:B({width:`${a.luckyW/750*10}rem`||"",height:`${a.luckyH/750*10}rem`||"",transform:p(t).rotate_angle,transition:p(t).rotate_transition})},null,6),l("div",{class:"box-btn"},[q,l("button",{onClick:r},"\u5F00\u59CB")])]))}}));var L=P(E,[["__scopeId","data-v-67963f84"]]);const V={class:"contanir theme"},F={name:"luckyTurn"},Q=h(u(_({},F),{setup(o){const e=M(0);y(()=>{console.log("onMounted"),e.value=t(0,8),console.log(e)});const a=r=>{console.log("endPlay---",r),e.value=t(0,8),console.log(e)},t=(r,c)=>Math.floor(Math.random()*(c-r)+r);return(r,c)=>(f(),k("div",V,[l("div",null,[$(L,{luckyW:1500,luckyH:1500,luckyIndex:e.value,luckyImg:"https://gem530.github.io/img/lucky_bg.png",onEndPlay:a},null,8,["luckyIndex"])])]))}}));export{Q as default};
