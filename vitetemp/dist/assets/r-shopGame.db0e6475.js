var E=Object.defineProperty,v=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var g=(u,e,a)=>e in u?E(u,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[e]=a,h=(u,e)=>{for(var a in e||(e={}))F.call(e,a)&&g(u,a,e[a]);if(f)for(var a of f(e))G.call(e,a)&&g(u,a,e[a]);return u},_=(u,e)=>v(u,C(e));import{_ as k}from"./index.8485d9ac.js";import{d as y,r as w,w as J,o as r,g as c,l as o,t as b,u as m,F as N,j as P,x as I,B as S,C as $,k as T,A,M as L,z as M,D as R}from"./@vue.fa2a0fcd.js";import"./vuex.53515dac.js";import"./vue-router.e61f4c82.js";import"./vuex-persistedstate.fa252374.js";const B=[{id:0,name:"\u5956\u52B111",image:"https://img2.baidu.com/it/u=3719466279,99109861&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",type:1,number:1},{id:1,name:"\u5956\u52B122",image:"https://img1.baidu.com/it/u=1735623407,4117002237&fm=253&fmt=auto&app=138&f=JPEG?w=616&h=500",type:1,number:1},{id:2,name:"\u5956\u52B133",image:"https://img1.baidu.com/it/u=2644452384,3800439215&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",type:1,number:1},{id:3,name:"\u5956\u52B144",image:"https://img1.baidu.com/it/u=3002983824,1456869839&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=501",type:1,number:1},{id:4,name:"\u5956\u52B155",image:"https://img1.baidu.com/it/u=1821938405,180668334&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",type:1,number:1},{id:5,name:"\u5956\u52B166",image:"https://img2.baidu.com/it/u=3719466279,99109861&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",type:1,number:1},{id:6,name:"\u5956\u52B177",image:"https://img2.baidu.com/it/u=240595935,690204872&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",type:1,number:1},{id:7,name:"\u5956\u52B188",image:"https://img1.baidu.com/it/u=633678651,1473215387&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",type:1,number:1}];const z=u=>(S("data-v-4cac88f9"),u=u(),$(),u),V=z(()=>o("div",null,"\u62BD\u5956",-1)),j=["src"],q=y({props:{gift:{type:Number,default:0},number:{type:Number,default:0},width:{type:Number,default:300},height:{type:Number,default:300},list:{type:Array,default:()=>B}},emits:["luckResult"],setup(u,{emit:e}){const a=u,t=w({maxCount:6,number:0,speed:150,count:0,index:0,gift:0,flag:!0,list:B});J(a,(s,D)=>{t.gift=s.gift,t.number=s.number,s.list&&s.list.length&&(t.list=s.list)},{deep:!0,immediate:!0});const i=()=>{if(!t.flag){alert("\u6B63\u5728\u62BD\u5956\u4E2D\uFF0C\u8BF7\u52FF\u91CD\u590D\u70B9\u51FB");return}if(!t.number){alert("\u5DF2\u65E0\u62BD\u5956\u6B21\u6570");return}t.flag=!1,console.log("\u5F00\u59CB\u62BD\u5956-\u4E2D\u5956\u7ED3\u679C",t.gift),p()};let n;const p=()=>{n=setTimeout(()=>{t.count+=1,t.index=t.index<t.list.length-1?t.index+=1:0,t.count>t.maxCount+16&&t.index===t.gift?(clearTimeout(n),x()):(p(),t.speed=t.count<t.maxCount+3?t.speed-=5:t.speed+=15)},t.speed)},x=()=>{t.speed=150,t.count=0,t.flag=!0,e("luckResult",t.list[t.index])};return(s,D)=>(r(),c("div",{class:"contanir",style:I(`width: ${a.width/10}rem;height: ${a.height/10}rem;`)},[o("div",{class:"start-btn",onClick:i},[V,o("div",null,"("+b(m(t).number)+")\u6B21",1)]),(r(!0),c(N,null,P(m(t).list,(l,d)=>(r(),c("div",{key:d,class:T(["item-btn",`item${d}`,m(t).index===d?"active-btn":""])},[o("img",{src:l.image,alt:""},null,8,j),o("div",null,b(l.name),1)],2))),128))],4))}});var H=k(q,[["__scopeId","data-v-4cac88f9"]]);const K={class:"contanir"},O=R(" \u4E5D\u5BAB\u683C\u62BD\u5956 "),Q={name:"shopGame"},et=y(_(h({},Q),{setup(u){const e=w({gift:5,number:5,list:[]});A(()=>{e.gift=t(0,7),e.number=t(0,7)}),L(()=>{});const a=i=>{e.number-=1,e.gift=t(0,7)},t=(i,n)=>Math.floor(Math.random()*(n-i)+i);return(i,n)=>(r(),c("div",K,[O,M(H,{gift:m(e).gift,list:m(e).list,width:350,height:350,number:m(e).number,onLuckResult:a},null,8,["gift","list","number"])]))}}));export{et as default};