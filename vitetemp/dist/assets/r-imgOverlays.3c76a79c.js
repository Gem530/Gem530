import{d as e,r as t,a,n as l,l as i,o as s,e as o,m as r,u as n,B as c,O as u,C as v,F as m,v as p,x as f,y as h,z as g,f as d,D as b}from"./@vue.fb42abb7.js";import{f as w}from"./fabric.310a32ce.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";import"./axios.e7b69eb3.js";const y=["width","height"],C=["src"],x={class:"flex"},T=["max","step"],M={class:"flex"},P=["onClick"],Y={class:"flex"},X=["onClick"],O={class:"flex"};var R=k(e({props:{width:{type:Number,default:500},height:{type:Number,default:500},maxScale:{type:Number,default:3},scaleStep:{type:Number,default:.01},img:{type:String,default:"https://img1.baidu.com/it/u=2644452384,3800439215&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"},colors:{type:Array,default:()=>["pink","skyblue","orange"]},isImgWH:{type:Boolean,default:!1},graphical:{type:Array,default:()=>[{key:"Rect",name:"矩形"},{key:"RectR",name:"圆角矩形"},{key:"Circle",name:"圆"},{key:"Ellipse",name:"椭圆"},{key:"Triangle",name:"三角形"},{key:"Line",name:"线段"},{key:"IText",name:"文字"}]}},emits:["getImg"],setup(e,{emit:d}){var b;const k=e,R=t({isMove:!1,isCreateObject:!0,isStroke:!1,isOperat:!1});let I=null,S=null;const j=a(),D=a(null),A=a(void 0),E=a(k.img),z=a(1),B=a(0),V=a(0),L=a(1);let _=k.width,N=k.height;const U=a(k.colors[0]),q=a(null==(b=k.graphical[0])?void 0:b.key);l((()=>{B.value=j.value.getBoundingClientRect().top,V.value=j.value.getBoundingClientRect().left})),i((async()=>{if(k.isImgWH){const{w:e,h:t}=await F();_=e,N=t}W()}));const F=()=>new Promise(((e,t)=>{let a=new Image;a.src=k.img,a.crossOrigin="anonymous",a.onload=()=>{e({w:a.width,h:a.height})},a.onerror=e=>{t(e)}})),G=e=>{I.selection=!1;for(let t in R)R[t]=t==e;if("isStroke"===e&&(R.isCreateObject=!0),"isOperat"===e){I.getObjects().forEach((e=>{e.selectable=!0})),I.selection=!0,I.setViewportTransform(I.viewportTransform)}},H=()=>{I.getActiveObjects().forEach((e=>{I.remove(e)}))},W=async()=>{I=new w.fabric.Canvas("canvasDom",{width:_,height:N}),I.lastzoomPointX=_/2,I.lastzoomPointY=N/2,I.relativeX=0,I.relativeY=0;const e=await oe();le(),se(),I.setBackgroundImage(e),I.renderAll(),I.selection=!1,I.selectionFullyContained=!0,$()},$=()=>{I.on({"mouse:up":e=>te(e),"mouse:move":e=>ee(e),"mouse:down":e=>Q(e),"mouse:wheel":e=>K(e)})},J=()=>{ie("init",_/2,N/2)},Z=e=>{ie(e,_/2,N/2)},K=({e:e})=>{const t=e.deltaY<0?"+":"-";e.preventDefault(),e.stopPropagation(),ie(t,e.pageX-V.value,e.pageY-B.value)},Q=({e:e})=>{if(e.preventDefault(),e.stopPropagation(),I.isDragging=!0,I.lastPosX=e.clientX,I.lastPosY=e.clientY,R.isCreateObject){const{top:t,left:a}=ae(e);switch(q.value){case"Rect":case"RectR":S=new w.fabric.Rect,I.add(S);break;case"Circle":S=new w.fabric.Circle,I.add(S);break;case"Ellipse":S=new w.fabric.Ellipse,I.add(S);break;case"Triangle":S=new w.fabric.Triangle({width:0,height:0,top:t,left:a}),I.add(S);break;case"IText":S=new w.fabric.IText("请输入。。",{top:t,left:a}),I.add(S)}}},ee=({e:e})=>{if(e.preventDefault(),e.stopPropagation(),I.isDragging){if(R.isMove){let t=I.viewportTransform;t[4]+=e.clientX-I.lastPosX,t[5]+=e.clientY-I.lastPosY,I.requestRenderAll(),I.lastPosX=e.clientX,I.lastPosY=e.clientY,I.relativeX=t[4],I.relativeY=t[5],I.setViewportTransform(I.viewportTransform)}if(R.isCreateObject){const{top:t,left:a,w:l,h:i,right:s,bottom:o}=ae(e),r=R.isStroke?"":U.value,n=R.isStroke?U.value:"";switch(q.value){case"Rect":case"Triangle":S.set({width:Math.abs(a-s),height:Math.abs(t-o),fill:r,stroke:n,top:Math.min(t,o),left:Math.min(a,s)});break;case"RectR":S.set({width:Math.abs(a-s),height:Math.abs(t-o),fill:r,stroke:n,top:Math.min(t,o),left:Math.min(a,s),rx:5,ry:5});break;case"Circle":S.set({radius:Math.abs(l/2),fill:r,stroke:n,top:Math.min(t,o),left:Math.min(a,s)});break;case"Ellipse":S.set({rx:Math.abs(l/2),ry:Math.abs(i/2),fill:r,stroke:n,top:Math.min(t,o),left:Math.min(a,s)})}I.renderAll(),I.setViewportTransform(I.viewportTransform)}}},te=({e:e})=>{if(e.preventDefault(),e.stopPropagation(),I.isDragging=!1,R.isCreateObject){const{top:t,left:a,right:l,bottom:i}=ae(e);switch(q.value){case"Line":S=new w.fabric.Line([a,t,l,i],{stroke:U.value}),I.add(S);break;case"IText":I.renderAll()}S.selectable=!1}},ae=e=>{const t=(e.clientX-I.lastPosX)/z.value,a=(e.clientY-I.lastPosY)/z.value,l=I.relativeX>0?2*I.relativeX:0,i=I.relativeY>0?2*I.relativeY:0,s=(e.clientX-V.value+Math.abs(I.viewportTransform[4])-l)/z.value,o=(e.clientY-B.value+Math.abs(I.viewportTransform[5])-i)/z.value;return{relaX:l,relaY:i,top:(I.lastPosY-B.value+Math.abs(I.viewportTransform[5])-i)/z.value,left:(I.lastPosX-V.value+Math.abs(I.viewportTransform[4])-l)/z.value,w:t,h:a,right:s,bottom:o}},le=()=>{D.value.top=N/2,D.value.left=_/2,D.value.originX="center",D.value.originY="center",D.value.selectable=!1,D.value.cornerStyle="circle",D.value.rotate(0)},ie=(e,t,a)=>{let l;if("change"==e)l=z.value;else if("init"==e){l=1,I.relativeX=0,I.relativeY=0;const e=[1,0,0,1,0,0];I.setViewportTransform(e)}else l=("-"==e?-k.scaleStep:k.scaleStep)+I.getZoom();l=Math.max(1,l),l=Math.min(k.maxScale,l),I.lastzoomPointX=t,I.lastzoomPointY=a;const i=new w.fabric.Point(t,a);I.relativeX=I.viewportTransform[4]/l,I.relativeY=I.viewportTransform[5]/l,I.zoomToPoint(i,l),I.setViewportTransform(I.viewportTransform),z.value=l},se=()=>{const e=D.value.width>_?_/D.value.width:D.value.width/_,t=D.value.height>N?N/D.value.height:D.value.height/_,a=e<=t?e:t;D.value.scaleX=a,D.value.scaleY=a,L.value=a},oe=()=>new Promise(((e,t)=>{w.fabric.Image.fromURL(E.value,(t=>{D.value=t,e(t)}),{crossOrigin:"anonymous"})})),re=()=>{A.value=((e=1,t="png")=>I.toDataURL({top:0,left:0,width:_,height:N,format:t,quality:e}))();const e=ne(A.value);d("getImg",{url:A.value,blob:e})},ne=e=>{for(var t=e.split(","),a=t[0].match(/:(.*?);/)[1],l=atob(t[1]),i=l.length,s=new Uint8Array(i);i--;)s[i]=l.charCodeAt(i);return new Blob([s],{type:a})};return(e,t)=>(s(),o("div",{class:"component theme",style:f(`width: ${n(_)}px;`)},[r("canvas",{id:"canvasDom",ref_key:"myCanvas",ref:j,width:n(_),height:n(N)},null,8,y),r("img",{src:A.value,alt:""},null,8,C),r("div",x,[r("button",{onClick:t[0]||(t[0]=e=>Z("-"))},"-"),c(r("input",{type:"range","onUpdate:modelValue":t[1]||(t[1]=e=>z.value=e),min:1,max:k.maxScale,step:k.scaleStep,onInput:t[2]||(t[2]=e=>Z("change"))},null,40,T),[[u,z.value]]),r("button",{onClick:t[3]||(t[3]=e=>Z("+"))},"+"),r("button",{onClick:J},"还原"),r("button",{onClick:re},"裁剪"),c(r("div",null,[r("div",M,[(s(!0),o(m,null,p(k.colors,(e=>(s(),o("div",{key:e,style:f(`background: ${e};`),class:h({"flex-item":!0,"active-flex":e==U.value}),onClick:t=>U.value=e},null,14,P)))),128))]),r("div",Y,[(s(!0),o(m,null,p(k.graphical,(e=>(s(),o("div",{key:e.key,class:h({"flex-item":!0,"active-flex":e.key==q.value}),onClick:t=>(e=>{q.value=e.key})(e)},g(e.name),11,X)))),128))])],512),[[v,n(R).isCreateObject]]),r("div",O,[r("button",{onClick:t[4]||(t[4]=e=>G("isMove"))},"移动"),r("button",{onClick:t[5]||(t[5]=e=>G("isCreateObject"))},"绘制"),r("button",{onClick:t[6]||(t[6]=e=>G("isStroke"))},"框"),r("button",{onClick:t[7]||(t[7]=e=>G("isOperat"))},"操作"),c(r("button",{onClick:H},"删除",512),[[v,n(R).isOperat]])])])],4))}}),[["__scopeId","data-v-4d07402e"]]);const I={class:"contanir component theme"},S=b(" 图片标注页面 "),j=e({setup(e){i((()=>{}));const t=e=>{};return(e,a)=>(s(),o("div",I,[S,d(R,{width:300,height:300,onGetImg:t})]))}});export{j as default};
