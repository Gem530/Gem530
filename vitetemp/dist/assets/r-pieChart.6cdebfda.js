var v=Object.defineProperty,_=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var c=(a,e,t)=>e in a?v(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,r=(a,e)=>{for(var t in e||(e={}))b.call(e,t)&&c(a,t,e[t]);if(m)for(var t of m(e))y.call(e,t)&&c(a,t,e[t]);return a},i=(a,e)=>_(a,w(e));import{i as C}from"./echarts.d2b5984d.js";import{d as p,a as x,w as E,n as k,o as u,e as f,x as B,r as A,l as F,m as l,u as d,q as S,L as D}from"./@vue.e9e6dad2.js";import"./tslib.60310f1a.js";import"./zrender.9969c497.js";const T={name:"drawBoard"},V=p(i(r({},T),{props:{width:{default:"400px"},height:{default:"500px"},options:{default:""}},setup(a){const e=a,t=x();return E(()=>e.options,(o,s)=>{k(()=>{C(t.value).setOption(o)})},{deep:!0,immediate:!0}),(o,s)=>(u(),f("div",{class:"component theme",ref_key:"echartsDom",ref:t,style:B(`width: ${e.width};height: ${e.height};`)},null,4))}})),O={class:"contanir theme"},$={name:"drawBoard"},q=p(i(r({},$),{setup(a){const e=A({flag:!0,options:""}),t={title:{text:"Referer of a Website",subtext:"Fake Data",left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},o={tooltip:{trigger:"item"},legend:{top:"5%",left:"center"},series:[{name:"Access From",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"40",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}]}]},s={legend:{top:"bottom"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},series:[{name:"Nightingale Chart",type:"pie",radius:[50,250],center:["50%","50%"],roseType:"area",itemStyle:{borderRadius:8},data:[{value:40,name:"rose 1"},{value:38,name:"rose 2"},{value:32,name:"rose 3"},{value:30,name:"rose 4"},{value:28,name:"rose 5"},{value:26,name:"rose 6"},{value:22,name:"rose 7"},{value:18,name:"rose 8"}]}]};F(()=>{});const n=()=>{e.flag=!1,setTimeout(()=>{e.flag=!0,e.options=t},10)},h=()=>{e.flag=!1,setTimeout(()=>{e.flag=!0,e.options=o},10)},g=()=>{e.flag=!1,setTimeout(()=>{e.flag=!0,e.options=s},10)};return n(),(H,L)=>(u(),f("div",O,[l("button",{onClick:n},"\u666E\u901A\u997C\u72B6\u56FE"),l("button",{onClick:h},"\u73AF\u5F62\u997C\u72B6\u56FE"),l("button",{onClick:g},"\u5357\u4E01\u683C\u5C14\u997C\u72B6\u56FE"),d(e).flag?(u(),S(V,{key:0,options:d(e).options,width:"500px",height:"500px"},null,8,["options"])):D("",!0)]))}}));export{q as default};
