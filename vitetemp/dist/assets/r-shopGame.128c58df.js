var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(t,i,a)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[i]=a,r=(e,t)=>{for(var i in t||(t={}))m.call(t,i)&&u(e,i,t[i]);if(a)for(var i of a(t))s.call(t,i)&&u(e,i,t[i]);return e},n=(e,a)=>t(e,i(a));import{G as o}from"./index.8fdb8f0c.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{d,r as l,w as f,o as c,e as b,m as g,z as h,u as y,F as v,v as w,y as x,x as j,E as P,G,l as E,Q as O,f as J,D as k}from"./@vue.0069b3ae.js";import"./index.50dc0881.js";import"./vuex.cf57797f.js";import"./vue-router.8c9b9931.js";import"./vuex-persistedstate.fa252374.js";const C=[{id:0,name:"奖励11",image:"https://img2.baidu.com/it/u=3719466279,99109861&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",type:1,number:1},{id:1,name:"奖励22",image:"https://img1.baidu.com/it/u=1735623407,4117002237&fm=253&fmt=auto&app=138&f=JPEG?w=616&h=500",type:1,number:1},{id:2,name:"奖励33",image:"https://img1.baidu.com/it/u=2644452384,3800439215&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",type:1,number:1},{id:3,name:"奖励44",image:"https://img1.baidu.com/it/u=3002983824,1456869839&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=501",type:1,number:1},{id:4,name:"奖励55",image:"https://img1.baidu.com/it/u=1821938405,180668334&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",type:1,number:1},{id:5,name:"奖励66",image:"https://img2.baidu.com/it/u=3719466279,99109861&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",type:1,number:1},{id:6,name:"奖励77",image:"https://img2.baidu.com/it/u=240595935,690204872&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",type:1,number:1},{id:7,name:"奖励88",image:"https://img1.baidu.com/it/u=633678651,1473215387&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",type:1,number:1}];const N=(e=>(P("data-v-1bb4bc98"),e=e(),G(),e))((()=>g("div",null,"抽奖",-1))),_=["src"];var R=p(d(n(r({},{name:"g-shopGame"}),{props:{gift:{type:Number,default:0},number:{type:Number,default:0},width:{type:Number,default:300},height:{type:Number,default:300},list:{type:Array,default:()=>C}},emits:["luckResult"],setup(e,{emit:t}){const i=e,a=l({maxCount:6,number:0,speed:150,count:0,index:0,gift:0,flag:!0,list:C});f(i,((e,t)=>{a.gift=e.gift,a.number=e.number,e.list&&e.list.length&&(a.list=e.list)}),{deep:!0,immediate:!0});const m=()=>{a.flag?a.number?(a.flag=!1,u()):o({message:"已无抽奖次数",type:"error",duration:1e3}):o({message:"正在抽奖中，请勿重复点击",type:"error",duration:1e3})};let s;const u=()=>{s=setTimeout((()=>{a.count+=1,a.index=a.index<a.list.length-1?a.index+=1:0,a.count>a.maxCount+16&&a.index===a.gift?(clearTimeout(s),r()):(u(),a.speed=a.count<a.maxCount+3?a.speed-=5:a.speed+=15)}),a.speed)},r=()=>{a.speed=150,a.count=0,a.flag=!0,t("luckResult",a.list[a.index])};return(e,t)=>(c(),b("div",{class:"contanir",style:j(`width: ${i.width/10}rem;height: ${i.height/10}rem;`)},[g("div",{class:"start-btn",onClick:m},[N,g("div",null,"("+h(y(a).number)+")次",1)]),(c(!0),b(v,null,w(y(a).list,((e,t)=>(c(),b("div",{key:t,class:x(["item-btn",`item${t}`,y(a).index===t?"active-btn":""])},[g("img",{src:e.image,alt:""},null,8,_),g("div",null,h(e.name),1)],2)))),128))],4))}})),[["__scopeId","data-v-1bb4bc98"]]);const $={class:"contanir"},D=k(" 九宫格抽奖 "),I=d(n(r({},{name:"shopGame"}),{setup(e){const t=l({gift:5,number:5,list:[]});E((()=>{t.gift=a(0,7),t.number=a(0,7)})),O((()=>{}));const i=e=>{o({message:"抽奖成功:"+e.name,type:"success",duration:2e3}),t.number-=1,t.gift=a(0,7)},a=(e,t)=>Math.floor(Math.random()*(t-e)+e);return(e,a)=>(c(),b("div",$,[D,J(R,{gift:y(t).gift,list:y(t).list,width:350,height:350,number:y(t).number,onLuckResult:i},null,8,["gift","list","number"])]))}}));export{I as default};
