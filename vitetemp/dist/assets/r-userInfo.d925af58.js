var e=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(r,s,t)=>s in r?e(r,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[s]=t;import{u as i}from"./vuex.cf57797f.js";import{b as u,u as d}from"./vue-router.8c9b9931.js";import{j as c,k as m}from"./index.b27fe81c.js";import{G as p}from"./index.3a5a0fca.js";import{d as f,r as b,l,o as I,e as j,m as v,z as y,u as O}from"./@vue.0069b3ae.js";import"./axios.e7b69eb3.js";import"./index.c89e9310.js";import"./vuex-persistedstate.fa252374.js";const g={class:"contanir component theme"},h=f((x=((e,r)=>{for(var s in r||(r={}))a.call(r,s)&&n(e,s,r[s]);if(t)for(var s of t(r))o.call(r,s)&&n(e,s,r[s]);return e})({},{name:"MyFriend"}),r(x,s({setup(e){const r=i(),s=u(),t=d(),a=b({userId:r.getters.user.userId,friendId:s.query.id,userInfo:{Id:0,name:"",avator:""}});l((()=>{})),c(a.friendId).then((e=>{a.userInfo=e.data[0]})).catch((e=>{p({type:"error",message:"获取用户信息失败："+e.message})}));const o=()=>{const e={sendId:Number(a.userId),recvId:Number(a.friendId)};m(e).then((e=>{t.push("/chat")})).catch((e=>{p({type:"error",message:"添加好友失败："+e.message})}))};return(e,r)=>(I(),j("div",g,[v("div",null,"Id："+y(O(a).userInfo.Id),1),v("div",null,"名称："+y(O(a).userInfo.name),1),v("div",null,[v("button",{onClick:o},"添加好友")])]))}}))));var x;export{h as default};
