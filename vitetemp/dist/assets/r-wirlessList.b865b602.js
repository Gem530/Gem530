var t=Object.defineProperty,e=Object.defineProperties,s=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(e,s,r)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,i=(t,e)=>{for(var s in e||(e={}))l.call(e,s)&&a(t,s,e[s]);if(r)for(var s of r(e))o.call(e,s)&&a(t,s,e[s]);return t},c=(t,r)=>e(t,s(r));import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";import{d as n,a as p,r as u,w as d,n as h,c as f,l as g,o as v,e as b,m as y,F as w,v as H,x as N,J as _,u as x,D as O,z as j,f as P,A as k}from"./@vue.0069b3ae.js";var A=m(n(c(i({},{name:"g-wirless-list"}),{props:{list:{default:()=>[]},topNum:{default:5},showNum:{default:15},itemHeight:{default:30}},emits:["loadmore"],setup(t,{emit:e}){const s=t,r=p(),l=p(),o=p(),a=u({start:0,end:s.showNum+s.topNum});d((()=>s.list),((t,e)=>{h((()=>{m()}))}),{deep:!0});const i=f((()=>s.list.slice(a.start,a.end)));g((()=>{m()}));const c=()=>{const t=l.value;t.scrollHeight-t.scrollTop-5<=t.clientHeight&&e("loadmore",!0);let o=l.value.scrollTop;a.start=Math.floor(o/s.itemHeight),a.end=a.start+s.showNum+s.topNum,a.start=a.start<s.topNum?a.start:a.start-s.topNum,r.value.style.top=a.start*s.itemHeight+"px"},m=()=>{const t=l.value;o.value.style.height=s.itemHeight*s.list.length+"px",h((()=>{t.scrollHeight-t.scrollTop-5<=t.clientHeight&&e("loadmore",!0)}))};return(t,e)=>(v(),b("div",{class:"list-wrap",ref_key:"listWrap",ref:l,onScroll:c},[y("div",{class:"scroll-bar",ref_key:"scrollBar",ref:o},null,512),y("div",{class:"list",ref_key:"list",ref:r},[(v(!0),b(w,null,H(x(i),((e,r)=>(v(),b("div",{key:r,style:N(`width: 100%;height: ${s.itemHeight}px;`)},[_(t.$slots,"default",{item:e},(()=>[O(j(e),1)]),!0)],4)))),128))],512)],544))}})),[["__scopeId","data-v-80529708"]]);const I={class:"contanir theme"},T={style:{color:"red","box-sizing":"border-box",border:"1px solid blue"}};var z=m(n(c(i({},{name:"wirlessList"}),{setup(t){const e=u({list:Array.from({length:2e3},((t,e)=>e)),showNum:10,itemHeight:30});g((()=>{}));const s=t=>{const s=Array.from({length:2e3},((t,e)=>e));e.list=[...e.list,...s]};return(t,r)=>(v(),b("div",I,[P(A,{class:"wirless-list",list:x(e).list,showNum:x(e).showNum,itemHeight:x(e).itemHeight,onLoadmore:s},{default:k((t=>[y("div",T,j(t.item),1)])),_:1},8,["list","showNum","itemHeight"])]))}})),[["__scopeId","data-v-03709b66"]]);export{z as default};
