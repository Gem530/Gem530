var D=Object.defineProperty,w=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var g=(o,t,e)=>t in o?D(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,r=(o,t)=>{for(var e in t||(t={}))y.call(t,e)&&g(o,e,t[e]);if(f)for(var e of f(t))E.call(t,e)&&g(o,e,t[e]);return o},c=(o,t)=>w(o,k(t));import{d as F,a as A,w as I,o as x,e as C,n as M,r as S,l as V,v as n,x as _,L as p,u as a,f as b,D as G,E as L}from"./@vue.10c5446f.js";import{u as N}from"./vue-router.a376125d.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";import{G as v}from"./index.b294b21a.js";const T=["width","height"],U={name:"g-code"},$=F(c(r({},U),{props:{w:{default:320},h:{default:150},num:{default:"1000"}},setup(o){const t=o,e=A();I(()=>t.num,(u,s)=>{M(()=>{l()})},{deep:!0,immediate:!0});const l=()=>{var u=e.value,s=u.getContext("2d");s.clearRect(0,0,u.width,u.height);const h=u.height/2;s.font=h+"px bold \u9ED1\u4F53",s.fillStyle="#fff",s.textAlign="center",s.textBaseline="middle",s.fillText(t.num,u.width/2,u.height/2)};return(u,s)=>(x(),C("canvas",{ref_key:"loginCheckout",ref:e,width:t.w,height:t.h},"\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301canvas\uFF0C\u8BF7\u66F4\u6362\u6D4F\u89C8\u5668\u540E\u518D\u8BD5",8,T))}}));var H=B($,[["__scopeId","data-v-2c5d53cc"]]);const m=o=>(G("data-v-0cf1859e"),o=o(),L(),o),R={class:"contanir theme"},z={class:"box"},O=m(()=>n("div",{class:"login-title"},"LOGIN",-1)),j={class:"form-input"},q=m(()=>n("span",null,"\u8D26 \u53F7\uFF1A",-1)),J={class:"form-input"},K=m(()=>n("span",null,"\u5BC6 \u7801\uFF1A",-1)),P={class:"form-input code"},Q={name:"login"},W=F(c(r({},Q),{setup(o){const t=N(),e=S({num:"",name:"",pass:"",code:""});e.num=Math.floor(Math.random()*(9999-1e3+1)+1e3),V(()=>{});const l=()=>{e.num=Math.floor(Math.random()*(9999-1e3+1)+1e3)},u=()=>(console.log(e),e.name!=="admin"?"\u8D26\u53F7\u9519\u8BEF":e.pass!=="admin"?"\u5BC6\u7801\u9519\u8BEF":e.code.toString()!==e.num.toString()?"\u9A8C\u8BC1\u7801\u4E0D\u4E00\u81F4":!0),s=()=>{if(console.log(u()),u()!==!0)return v({message:u(),type:"error",duration:1500}),!1;v({message:"\u767B\u5F55\u6210\u529F",type:"success",duration:2e3}),sessionStorage.setItem("token","user:admin"),t.push("/index")};return(h,d)=>(x(),C("div",R,[n("div",z,[O,n("div",j,[q,_(n("input",{type:"text",placeholder:"\u8D26\u53F7\uFF1Aadmin","onUpdate:modelValue":d[0]||(d[0]=i=>a(e).name=i)},null,512),[[p,a(e).name]])]),n("div",J,[K,_(n("input",{type:"password",placeholder:"\u5BC6\u7801\uFF1Aadmin","onUpdate:modelValue":d[1]||(d[1]=i=>a(e).pass=i)},null,512),[[p,a(e).pass]])]),n("div",P,[_(n("input",{type:"text",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801","onUpdate:modelValue":d[2]||(d[2]=i=>a(e).code=i)},null,512),[[p,a(e).code]]),b(H,{num:a(e).num,w:60,h:30,onClick:l},null,8,["num"])]),n("button",{onClick:s},"\u767B\u5F55")])]))}}));var oe=B(W,[["__scopeId","data-v-0cf1859e"]]);export{oe as default};
