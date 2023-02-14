var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,i=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&n(e,a,t[a]);if(l)for(var a of l(t))s.call(t,a)&&n(e,a,t[a]);return e},r=(e,l)=>t(e,a(l));import{d as u,c as d,a as c,r as v,w as g,l as h,n as f,o as p,e as m,B as b,C as w,u as y,m as k,F as L,v as B,z as C,L as F,x,y as E,R as O,S as T,f as S,D as j}from"./@vue.0069b3ae.js";import{_ as P}from"./plugin-vue_export-helper.21dcd24c.js";const X={class:"btn-base"},Y=["onClick"],_={class:"btn-sub"},R=["onClick"];var U=P(u(r(i({},{name:"g-draw-board"}),{props:{url:{default:""},type:{default:"blob"},echo:{type:Boolean,default:!0},left:{type:Boolean,default:!1},width:{default:"100%"},height:{default:"200px"},colors:{default:()=>[{name:"红",value:"#ff0000"},{name:"蓝",value:"#0000ff"},{name:"黄",value:"#ffff00"},{name:"紫",value:"#ff00ff"},{name:"粉",value:"pink"}]},signFlag:{type:Boolean,default:!1},thickness:{default:()=>[{name:"细",value:"1"},{name:"中",value:"3"},{name:"粗",value:"7"}]},background:{default:"#fff"},defaultColor:{default:"#000"},defaultThickness:{default:"2"}},emits:["upload","update:url"],setup(e,{expose:t,emit:a}){const l=e,o=d({get:()=>l.url,set:e=>{a("update:url",e)}}),s=c(),n=c(),i=c(),r=v({e:{pageX:"",pageY:""},flag:!0,color:"#000",width:"",height:"",subType:"",moveFlag:!1,thickness:"2",firstFill:!0,subBtnFlag:!1,baseList:[],btnsList:[{name:"颜色",isShow:!!l.colors.length,fun:()=>P("colors")},{name:"粗细",isShow:!!l.thickness.length,fun:()=>P("thickness")},{name:"清除",isShow:!0,fun:()=>U()},{name:"提交",isShow:!0,fun:()=>I()}]});g((()=>l),((e,t)=>{e.defaultColor&&(r.color=e.defaultColor),e.defaultThickness&&(r.thickness=e.defaultThickness)}),{deep:!0,immediate:!0}),h((()=>{n.value=i.value.getContext("2d"),u(),window.addEventListener("mouseup",D),window.addEventListener("mousemove",z),window.addEventListener("mousedown",A),window.addEventListener("touchend",D),window.addEventListener("touchmove",z),window.addEventListener("touchstart",A)}));const u=()=>{f((()=>{r.width="100%"===l.width?s.value.clientWidth+"px":l.width,r.height="100%"===l.height?s.value.clientHeight+"px":l.height,i.value.setAttribute("width",r.width),i.value.setAttribute("height",r.height),S(o.value)}))},S=e=>{if(!e)return;let t=new Image;t.crossOrigin="anonymous",t.src=e,t.onload=()=>{const e=(i.value.width-t.width)/2,a=(i.value.height-t.height)/2;n.value.drawImage(t,e,a,t.width,t.height)}},j=e=>"colors"===r.subType?`color: ${e.value};border-color: ${r.color===e.value?r.color:""}`:`border-color: ${r.thickness===e.value?r.color:""}`,P=e=>{r.subType!==e?r.subBtnFlag=!0:r.subBtnFlag=!r.subBtnFlag,r.subType=e,r.baseList=l[r.subType]},U=()=>{n.value.fillStyle=l.background,n.value.fillRect(0,0,i.value.width,i.value.height)},I=()=>{n.value.drawImage(i.value,0,0,i.value.width,i.value.height);const e=i.value.toDataURL("image/png",1);i.value.toBlob((function(t){o.value="blob"===l.type?t:e,a("upload",{blob:t,base64:e})}),"image/png")},$=e=>{let t={pageX:0,pageY:0};if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){const a=e;t={pageX:a.touches[0].pageX,pageY:a.touches[0].pageY}}else t={pageX:e.pageX,pageY:e.pageY};return t},A=e=>{r.moveFlag=!0,r.e=$(e)},z=e=>{var t;if(!r.moveFlag||l.signFlag&&r.flag)return;l.echo&&r.firstFill&&"canvas"===(null==(t=e.target)?void 0:t.tagName.toLowerCase())&&(U(),r.firstFill=!1);const a=s.value.getBoundingClientRect().top,o=s.value.getBoundingClientRect().left,i=$(e);n.value.beginPath(),n.value.lineWidth=r.thickness,n.value.strokeStyle=r.color,n.value.moveTo(r.e.pageX-o,r.e.pageY-a),n.value.lineTo(i.pageX-o,i.pageY-a),n.value.stroke(),r.e=i},D=()=>{r.moveFlag=!1};var W;return W=()=>{window.removeEventListener("mouseup",D),window.removeEventListener("mousemove",z),window.removeEventListener("mousedown",A),window.removeEventListener("touchend",D),window.removeEventListener("touchmove",z),window.removeEventListener("touchstart",A)},O((()=>{W&&W()})),T((()=>{W&&W()})),t({resizeChange:u}),(e,t)=>(p(),m("div",{class:"component theme",ref_key:"box",ref:s,style:x(`width: ${l.width};height: ${l.height};`)},[b(k("div",{class:"mask theme",onClick:t[0]||(t[0]=e=>y(r).flag=!y(r).flag)},"点击签署",512),[[w,l.signFlag&&y(r).flag]]),k("canvas",{ref_key:"myCanvas",ref:i},null,512),k("div",{class:E(["btn-box",l.left?"btn-box-lefts":""])},[k("div",X,[(p(!0),m(L,null,B(y(r).btnsList,((e,t)=>(p(),m(L,{key:t},[e.isShow?(p(),m("div",{key:0,class:"base-item",onClick:t=>e.fun()},C(e.name),9,Y)):F("",!0)],64)))),128))]),b(k("div",_,[(p(!0),m(L,null,B(y(r).baseList,((e,t)=>(p(),m("div",{class:"base-item",key:t,style:x(j(e)),onClick:t=>(e=>{let t="colors"===r.subType?"color":"thickness";r[t]=e,r.subBtnFlag=!1})(e.value)},C(e.name),13,R)))),128))],512),[[w,y(r).subBtnFlag]])],2)],4))}})),[["__scopeId","data-v-e3d70bf8"]]);const I={class:"contanir theme"},$=j(" 签字板 "),A=["src"],z=u(r(i({},{name:"drawBoard"}),{setup(e){let t=c(null);const a=v({imageUrl:""});h((()=>{}));const l=()=>{t.value.resizeChange()};return(e,o)=>(p(),m("div",I,[$,S(U,{ref_key:"drawBoardRef",ref:t,url:y(a).imageUrl,"onUpdate:url":o[0]||(o[0]=e=>y(a).imageUrl=e),type:"base64",echo:!0,left:!1,width:"350px",height:"350px",background:"#fff","default-color":"#000","default-thickness":"2",colors:[],thickness:[]},null,8,["url"]),k("div",null,[k("button",{onClick:l},"屏幕变化")]),k("img",{src:y(a).imageUrl,title:"签字板结果"},null,8,A)]))}}));export{z as default};
