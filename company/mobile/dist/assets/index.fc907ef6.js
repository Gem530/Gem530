import{P as p,b1 as T,J as I,A,B as S,d as x,r as b,b2 as R,e as r,$ as k,b3 as w,a0 as L,L as N,aC as $,b4 as z,b5 as E,b as O,c as D,l as d,Z as V,p as u,b6 as Z,b0 as m,z as F,_ as H}from"./index.e8193064.js";const J=p(T),[K,n]=I("nav-bar"),M={title:String,fixed:Boolean,zIndex:A,border:S,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean};var j=x({name:K,props:M,emits:["click-left","click-right"],setup(e,{emit:t,slots:a}){const c=b(),f=R(c,n),l=o=>t("click-left",o),i=o=>t("click-right",o),h=()=>a.left?a.left():[e.leftArrow&&r(L,{class:n("arrow"),name:"arrow-left"},null),e.leftText&&r("span",{class:n("text")},[e.leftText])],v=()=>a.right?a.right():r("span",{class:n("text")},[e.rightText]),s=()=>{const{title:o,fixed:_,border:g,zIndex:B}=e,C=N(B),P=e.leftArrow||e.leftText||a.left,y=e.rightText||a.right;return r("div",{ref:c,style:C,class:[n({fixed:_}),{[w]:g,"van-safe-area-top":e.safeAreaInsetTop}]},[r("div",{class:n("content")},[P&&r("div",{class:[n("left"),k],onClick:l},[h()]),r("div",{class:[n("title"),"van-ellipsis"]},[a.title?a.title():o]),y&&r("div",{class:[n("right"),k],onClick:i},[v()])])])};return()=>e.fixed&&e.placeholder?f(s):s()}});const q=p(j);const G=x({__name:"index",props:{title:{type:[String,Boolean],default:!0},backPath:{type:[String,Boolean],default:!0}},setup(e){const t=e,a=$(),c=z(),f=E(),{slots:l}=F(),i=b(""),h=b({navBarIconColor:"#333",navBarBackgroundColor:"transparent"});typeof t.title=="boolean"?i.value=c.meta.title:t.title&&(i.value=t.title);const v=()=>{typeof t.backPath=="boolean"&&t.backPath?f.go(-1):t.backPath&&f.push(t.backPath)};return(s,o)=>{const _=q,g=J;return O(),D(g,{"theme-vars":h.value,class:"height"},{default:d(()=>[r(_,V({class:"custom-nav-bar",title:i.value},u(a),{onClickLeft:v}),Z({_:2},[u(l).left?{name:"left",fn:d(()=>[m(s.$slots,"left",{},void 0,!0)]),key:"0"}:void 0,u(l).title?{name:"title",fn:d(()=>[m(s.$slots,"title",{},void 0,!0)]),key:"1"}:void 0,u(l).right?{name:"right",fn:d(()=>[m(s.$slots,"right",{},void 0,!0)]),key:"2"}:void 0]),1040,["title"])]),_:3},8,["theme-vars"])}}});const U=H(G,[["__scopeId","data-v-70412e85"]]);export{q as N,U as _};