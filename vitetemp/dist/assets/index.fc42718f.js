var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,s,o)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[s]=o;import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{d as n,a as d,r as u,w as p,n as c,c as g,l as v,I as h,o as m,e as f,B as w,x as b,m as y,z as F,u as M,F as L,v as Y,J as H,D as O}from"./@vue.fb42abb7.js";const x={class:"component theme"},P={class:"pull"},j=n((E=((e,t)=>{for(var s in t||(t={}))a.call(t,s)&&l(e,s,t[s]);if(o)for(var s of o(t))r.call(t,s)&&l(e,s,t[s]);return e})({},{name:"g-wirless-list"}),t(E,s({props:{list:{default:()=>[]},height:{default:"100%"},itemHeight:{default:20}},emits:["dropDown","pullUp"],setup(e,{expose:t,emit:s}){const o=e,a=d(),r=d(),l=d(),i=u({start:0,moveY:0,startY:0,showNum:0,pullFlag:0,bottomPx:30,referFlag:0,referHeight:0,isMobile:!0,trueFlag:!1,isLoading:!0});p((()=>i.isLoading),((e,t)=>{!1===t&&!0===e&&c((()=>{B()}))}),{deep:!0}),p((()=>o.list),((e,t)=>{c((()=>{j()}))}),{deep:!0,immediate:!0});const n=g((()=>o.list.slice(i.start,i.start+i.showNum)));navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)?i.isMobile=!0:i.isMobile=!1,v((()=>{const e=a.value.clientHeight;i.showNum=Math.round(e/o.itemHeight)+3,E(),i.isMobile?(window.addEventListener("touchend",D,{passive:!1}),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchstart",S,{passive:!1})):(window.addEventListener("mouseup",D),window.addEventListener("mousemove",_),window.addEventListener("mousedown",S)),B()}));const j=()=>{r.value.style.height=o.list.length*o.itemHeight+"px"},E=()=>{const e=Math.round(a.value.scrollTop);i.start=Math.round(e/o.itemHeight),l.value.style.top=e+"px"},B=()=>{c((()=>{a.value.scrollHeight-a.value.scrollTop-5<=a.value.clientHeight&&k()}))},S=e=>{e=e||window.event,(i.isMobile||a.value.contains(e.target))&&(i.startY=i.isMobile?e.touches[0].pageY:e.pageY,i.trueFlag=!0)},_=e=>{e=e||window.event,a.value.contains(e.target)&&a.value.scrollTop<1&&i.trueFlag&&(i.moveY=(i.isMobile?e.touches[0].pageY:e.pageY)-i.startY,i.moveY>0&&(e.preventDefault(),i.referFlag=1,i.moveY>80&&(i.referHeight=80)))},D=()=>{i.trueFlag=!1,i.moveY>0&&(i.referFlag=2,s("dropDown"))},k=()=>{i.isLoading&&(i.isLoading=!1,s("pullUp"))};return t({noMoreData:()=>{i.pullFlag=1},pullSuccess:()=>{i.pullFlag=0,i.isLoading=!0,i.referFlag=3,i.referHeight=0,B()},loadmoreSuccess:()=>{i.isLoading=!0}}),(e,t)=>{const s=h("loadmores");return m(),f("div",x,[w((m(),f("div",{ref_key:"box",ref:a,class:"box",style:b(`height: ${o.height};`),onScroll:E},[y("div",{style:b(`height: ${M(i).referHeight}px;`),class:"refersh"},F(1===M(i).referFlag?"松开手指即可刷新":2===M(i).referFlag?"正在加载中...":"刷新成功"),5),y("div",{class:"scroll-bar",ref_key:"scrollBar",ref:r},null,512),y("div",{class:"scroll-list",ref_key:"scrollList",ref:l},[(m(!0),f(L,null,Y(M(n),((t,s)=>(m(),f("div",{key:s},[H(e.$slots,"default",{item:t},(()=>[O(F(t),1)]),!0)])))),128))],512),y("div",P,F(1===M(i).pullFlag?"没有更多了":"加载中..."),1)],36)),[[s,k]])])}}}))));var E,B=i(j,[["__scopeId","data-v-1fed7368"]]);export{B as g};
