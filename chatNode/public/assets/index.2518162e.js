var J=Object.defineProperty,H=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var N=(s,e,t)=>e in s?J(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,y=(s,e)=>{for(var t in e||(e={}))Q.call(e,t)&&N(s,t,e[t]);if(E)for(var t of E(e))U.call(e,t)&&N(s,t,e[t]);return s},k=(s,e)=>H(s,O(e));import{u as D}from"./vuex.7ea12095.js";import{m as X}from"./index.31c63e4c.js";import{u as F}from"./vue-router.c4da8ae7.js";import{d as x,K as Y,a as Z,c as $,j as G,o as c,e as i,F as P,v as V,y as C,m as n,B as ee,C as te,u,z as w,L as S,x as I,M as W,f as b,r as z,w as oe,l as j,N as se,O as ne,n as re,J as K,A as ae,q as T,t as ce,P as le}from"./@vue.e9e6dad2.js";import{_ as L}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as ue}from"./avator.a76dfba7.js";import"./vuex-persistedstate.fa252374.js";const ie={class:"component theme"},_e=["onClick"],de={key:0,class:"right"},me={name:"g-menu",inheritAttrs:!1},he=x(k(y({},me),{props:{keys:{default:"key"},list:{default:()=>[{title:"\u9996\u9875",icon:""}]},level:{default:1},color:null,bkColor:null,activeColor:null,activeBKColor:null},emits:["changeMenu"],setup(s,{emit:e}){const t=s;Y();const d=D();F(),Z(""),t.list.forEach(o=>{o.flag=!0});const a=$(()=>d.getters.base.navFlag),m=$(()=>d.getters.currentRouterGetter.key),v=(o,l=!0)=>`
            padding-left: ${l?t.level*15+10:15}px;
            color: ${o===m.value?t.activeColor:t.color};
            background: ${o===m.value?t.activeBKColor:t.bkColor};
        `,p=(o,l=0)=>{if(o.children){t.list[l].flag=!o.flag;return}e("changeMenu",o)};return(o,l)=>{const g=G("g-menu");return c(),i("div",ie,[(c(!0),i(P,null,V(s.list,(r,B)=>(c(),i("div",{class:C(["item-menu",`item-${t.level}`]),key:B},[n("div",{class:C(["item-title",{"item-active":r[s.keys]===u(m)}]),style:I(v(r[s.keys],u(a))),onClick:W(R=>p(r,B),["stop"])},[n("i",{class:C(["iconfont item-icon",r.icon])},null,2),ee(n("span",null,w(r.title),513),[[te,u(a)]]),r.children&&u(a)?(c(),i("span",de,[n("i",{class:C(["iconfont",r.flag?"icon-arrow-down-filling":"icon-arrow-right-filling"])},null,2)])):S("",!0)],14,_e),r.children?(c(),i("div",{key:0,style:I(`
                    max-height: ${r.flag?(r.children.length*45).toFixed(0):0}px;
                    overflow: ${!r.flag&&r.children?"hidden":""};
                `),class:C({"item-content":!0})},[b(g,{keys:t.keys,list:r.children,level:t.level+1,onChangeMenu:p},null,8,["keys","list","level"])],4)):S("",!0)],2))),128))])}}}));var ve=L(he,[["__scopeId","data-v-e12fb454"]]);const pe=s=>(se("data-v-0a0258cc"),s=s(),ne(),s),ge={class:"contanir theme"},fe=pe(()=>n("img",{src:"https://img1.baidu.com/it/u=2644452384,3800439215&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",alt:"",class:"logo"},null,-1)),ye={class:"nav-box"},ke={name:"left"},Ce=x(k(y({},ke),{setup(s){const e=D();F();const t=z(X),d="key";$(()=>e.getters.base.navFlag),oe(()=>e.getters.base,(o,l)=>{re(()=>{o.navFlag?m("250px"):m("50px")})},{deep:!0,immediate:!0}),j(()=>{});const a=o=>{const l=Math.random(),g={name:o.title,key:o.key,type:"query",data:{id:l}};e.commit("setCurrentRouter",g),e.commit("addRouterList",g)},m=o=>{v("--leftWidth",o)},v=(o,l)=>{document.getElementsByTagName("body")[0].style.setProperty(o,l)},p=o=>{a(o)};return(o,l)=>(c(),i("div",ge,[fe,n("div",ye,[b(ve,{keys:d,list:u(t),onChangeMenu:p},null,8,["list"])])]))}}));var $e=L(Ce,[["__scopeId","data-v-0a0258cc"]]);const be={class:"contanir theme"},xe={class:"user"},Be={class:"user-make"},we={class:"user-info"},Fe=["src"],Le={class:"router-list"},Re=["onClick"],Me=["onClick"],Se={name:"top"},De=x(k(y({},Se),{setup(s){const e=D(),t=F(),d=$(()=>e.getters.base.navFlag),a=$(()=>e.getters.routerListGetter),m=$(()=>e.getters.currentRouterGetter.key),v=()=>{a.value.length<=1&&e.commit("setCurrentRouter",{name:"\u9996\u9875",key:"/home"})};v();const p=()=>{t.push("/chat")},o=_=>{e.commit("removeRouterList",_)},l=_=>{e.commit("setCurrentRouter",_)},g=()=>{R("--colorWhite",A()),R("--colorBlack",A())},r=()=>{e.dispatch("setBaseAction",{navFlag:!d.value})},B=()=>{localStorage.clear(),sessionStorage.clear(),e.commit("initRouterList"),v()},R=(_,f)=>{document.getElementsByTagName("body")[0].style.setProperty(_,f)},A=()=>{const _=M(0,255),f=M(0,255),h=M(0,255);return`rgb(${_},${f},${h})`},M=(_,f)=>Math.floor(Math.random()*(f-_)+_);return(_,f)=>(c(),i("div",be,[n("div",xe,[n("div",Be,[K(" \u5934\u90E8\u83DC\u5355"+w(u(d))+" ",1),n("button",{onClick:r},"\u5207\u6362\u4FA7\u8FB9\u680F\u5BBD\u5EA6"),n("button",{onClick:g},"\u5207\u6362\u4E3B\u9898\u8272"),n("button",{onClick:B},"\u6E05\u9664\u7F13\u5B58"),n("button",{onClick:p},"chat")]),n("div",we,[n("img",{class:"user-avator",src:u(e).getters.user.avator||u(ue),alt:""},null,8,Fe),n("div",null,w(u(e).getters.user.name||"\u672A\u767B\u5F55"),1)])]),n("div",Le,[(c(!0),i(P,null,V(u(a),h=>(c(),i("div",{class:C(["router-item",{"router-item-home":h.key==="/home","router-item-active":h.key===u(m)}]),key:h.key,onClick:q=>l(h)},[K(w(h.name)+" ",1),h.key!=="/home"?(c(),i("i",{key:0,class:"iconfont icon-close-bold close",onClick:W(q=>o(h),["stop"])},null,8,Me)):S("",!0)],10,Re))),128))])]))}}));var Ae=L(De,[["__scopeId","data-v-67aab494"]]);const Ee={class:"contanir theme"},Ne={name:"content"},Ie=x(k(y({},Ne),{setup(s){const t=F().getRoutes().filter(a=>a.name&&a.meta.keepAlive),d=z(t.map(a=>a.name));return(a,m)=>{const v=G("router-view");return c(),i("div",Ee,[b(v,null,{default:ae(({Component:p})=>[(c(),T(le,{include:u(d)},[(c(),T(ce(p)))],1032,["include"]))]),_:1})])}}}));var Ke=L(Ie,[["__scopeId","data-v-9b709a36"]]);const Te={class:"contanir theme"},Ge={name:"index"},Oe=x(k(y({},Ge),{setup(s){return j(()=>{}),(e,t)=>(c(),i("div",Te,[b($e),b(Ae),b(Ke)]))}}));export{Oe as default};