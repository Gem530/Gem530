var A=Object.defineProperty,T=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var F=(e,t,a)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))H.call(t,a)&&F(e,a,t[a]);if(b)for(var a of b(t))U.call(t,a)&&F(e,a,t[a]);return e},h=(e,t)=>T(e,C(t));import{_ as N}from"./avator.a76dfba7.js";import{u as z}from"./vuex.7ea12095.js";import{s as V}from"./index.f852a553.js";import{n as O,d as D,a as x,r as w,l as R,o as i,e as _,m as d,B as P,D as j,u as f,I as B,N as G,O as J,J as $,f as k,A as L,F as W,v as Y,y as q,z as I}from"./@vue.e9e6dad2.js";import{u as M,b as K}from"./vue-router.c4da8ae7.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";import{G as y}from"./index.2f4a1609.js";import{s as Q,a as X,b as Z}from"./index.1c19c252.js";import"./vuex-persistedstate.fa252374.js";import"./axios.58752079.js";function ee(e,t){if(arguments.length===0||!e)return null;const a=t||"{y}-{m}-{d} {h}:{i}:{s}";let s;typeof e=="object"?s=e:(typeof e=="string"&&/^[0-9]+$/.test(e)?e=parseInt(e):typeof e=="string"&&(e=e.replace(new RegExp(/-/gm),"/").replace("T"," ").replace(new RegExp(/\.[\d]{3}/gm),"")),typeof e=="number"&&e.toString().length===10&&(e=e*1e3),s=new Date(e));const u={y:s.getFullYear(),m:s.getMonth()+1,d:s.getDate(),h:s.getHours(),i:s.getMinutes(),s:s.getSeconds(),a:s.getDay()};return a.replace(/{(y|m|d|h|i|s|a)+}/g,(g,l)=>{let o=u[l];return l==="a"?["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"][o]:(g.length>0&&o<10&&(o="0"+o),o||0)})}const se=(e,t)=>{O(()=>{e.scrollTop=t})};const te={class:"component theme"},ae={class:"send"},oe={class:"bottom-box"},re={name:"send"},ne=D(h(v({},re),{emits:["send"],setup(e,{emit:t}){M();const a=x(),s=x(),u=w({message:""});R(()=>{});const m=()=>{t("send",u.message),u.message=""},g=()=>{s.value.style.height="auto";let o=s.value.scrollHeight;o=Math.min(o,100),o&&(s.value.style.height=o+"px",a.value.style.height=o+"px")};return(l,o)=>(i(),_("div",te,[d("div",ae,[P(d("textarea",{class:"send-textarea",rows:"1","onUpdate:modelValue":o[0]||(o[0]=p=>f(u).message=p),onInput:g,ref_key:"textareaRef",ref:s},null,544),[[j,f(u).message]]),d("div",{class:"send-btn",onClick:m},"\u53D1\u9001")]),d("div",oe,[d("div",{ref_key:"bottomRef",ref:a},null,512)])]))}}));var de=S(ne,[["__scopeId","data-v-45b721be"]]);const ce=e=>(G("data-v-0f11a93f"),e=e(),J(),e),ue={class:"component theme"},ie={class:"header"},_e=$("\u6807\u9898"),le=$("icon"),me=ce(()=>d("div",{style:{height:"45px"}},null,-1)),ge={name:"Headers"},pe=D(h(v({},ge),{setup(e){const t=M();return R(()=>{}),(a,s)=>(i(),_("div",ue,[d("div",ie,[d("i",{class:"iconfont icon-arrow-left-bold",onClick:s[0]||(s[0]=u=>f(t).go(-1))}),d("div",null,[B(a.$slots,"title",{},()=>[_e],!0)]),d("div",null,[B(a.$slots,"right",{},()=>[le],!0)])]),me]))}}));var ve=S(pe,[["__scopeId","data-v-0f11a93f"]]);const he=$("\u804A\u5929\u5BA4"),fe={class:"main"},Ie=["src"],ye={key:1,class:"message-avator",src:N},xe={class:"message-info"},De={class:"message-name"},Re={class:"message-time"},$e={class:"message-box"},Me={name:"r-chatRoom"},Se=D(h(v({},Me),{setup(e){const t=z();K(),M();const a=x(),s=w({Id:0,recvId:0,list:[]});s.Id=t.getters.user.userId,s.recvId=t.getters.chatRoom.Id,R(()=>{});const u=({detail:c})=>{const r=JSON.parse(c.data);(r.send_id===s.Id&&r.recv_id===s.recvId||r.send_id===s.recvId&&r.recv_id===s.Id)&&s.list.push(r)};window.addEventListener("onmessageWS",u);const m=c=>{const r={msg:c,sendId:s.Id,recvId:s.recvId};Q(r).then(n=>{const E={msg:c,send_id:t.getters.user.userId,send_name:t.getters.user.name,createTime:new Date,recv_id:t.getters.chatRoom.Id,recv_name:t.getters.chatRoom.name,avator:t.getters.user.avator};V(E)}).catch(n=>{y({message:"\u6D88\u606F\u53D1\u9001\u5931\u8D25\uFF1A"+n.message,type:"error",duration:1500})})};(()=>{const c={sendId:s.recvId,recvId:s.Id};X(c).then(r=>{console.log(r)}).catch(r=>{y({message:"\u66F4\u65B0\u6D88\u606F\u72B6\u6001\u5931\u8D25\uFF1A"+r.message,type:"error",duration:1500})})})(),(c=>{const r={page:1,sendId:s.Id,recvId:s.recvId,pageSize:10};Z(r).then(n=>{s.list=n.data,se(a.value,a.value.scrollHeight)}).catch(n=>{y({message:"\u83B7\u53D6\u4E0E\u597D\u53CB\u7684\u804A\u5929\u8BB0\u5F55\u5931\u8D25\uFF1A"+n.message,type:"error",duration:1500})})})();const o=(c,r)=>ee(c,r),p=c=>c===t.getters.user.userId;return(c,r)=>(i(),_("div",{class:"contanir theme",ref_key:"mainDom",ref:a},[k(ve,null,{title:L(()=>[he]),_:1}),d("main",fe,[(i(!0),_(W,null,Y(f(s).list,n=>(i(),_("div",{class:q({"message-item":!0,right:p(n.send_id)}),key:n.Id},[n.avator?(i(),_("img",{key:0,class:"message-avator",src:n.avator},null,8,Ie)):(i(),_("img",ye)),d("div",xe,[d("div",De,I(p(n.send_id)?n.send_name:n.recv_name),1),d("div",Re,I(o(n.createTime,"{y}-{m}-{d} {h}:{i}:{s}")),1),d("div",$e,I(n.msg),1)])],2))),128))]),k(de,{onSend:m})],512))}}));var Ne=S(Se,[["__scopeId","data-v-ed670f3a"]]);export{Ne as default};
