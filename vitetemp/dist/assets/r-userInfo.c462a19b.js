var F=Object.defineProperty,_=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var d=(t,e,s)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,c=(t,e)=>{for(var s in e||(e={}))h.call(e,s)&&d(t,s,e[s]);if(a)for(var s of a(e))A.call(e,s)&&d(t,s,e[s]);return t},m=(t,e)=>_(t,g(e));import{u as D}from"./vuex.98bef695.js";import{b as B,u as v}from"./vue-router.976535db.js";import{j as y,k as b}from"./index.b27fe81c.js";import{G as i}from"./index.67903aaa.js";import{d as k,r as C,l as M,o as N,e as U,m as n,z as f,u as p}from"./@vue.fb42abb7.js";import"./axios.e7b69eb3.js";import"./index.6f7a580a.js";import"./vuex-persistedstate.fa252374.js";const x={class:"contanir component theme"},E={name:"MyFriend"},J=k(m(c({},E),{setup(t){const e=D(),s=B(),I=v(),r=C({userId:e.getters.user.userId,friendId:s.query.id,userInfo:{Id:0,name:"",avator:""}});M(()=>{}),(()=>{y(r.friendId).then(o=>{r.userInfo=o.data[0]}).catch(o=>{i({type:"error",message:"\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5931\u8D25\uFF1A"+o.message})})})();const l=()=>{const o={sendId:Number(r.userId),recvId:Number(r.friendId)};b(o).then(u=>{console.log(u),I.push("/chat")}).catch(u=>{i({type:"error",message:"\u6DFB\u52A0\u597D\u53CB\u5931\u8D25\uFF1A"+u.message})})};return(o,u)=>(N(),U("div",x,[n("div",null,"Id\uFF1A"+f(p(r).userInfo.Id),1),n("div",null,"\u540D\u79F0\uFF1A"+f(p(r).userInfo.name),1),n("div",null,[n("button",{onClick:l},"\u6DFB\u52A0\u597D\u53CB")])]))}}));export{J as default};
