import{a as s}from"./vue-router.3b0bf160.js";import{e,m as a,f as t}from"./index.f5ed39b5.js";import"./axios.68af02ab.js";import{k as i,d as o,o as l,c as r,R as m,a7 as p,a as c,Y as d}from"./@vue.df4a0536.js";import"./element-plus.1a8f7ccb.js";import"./@vueuse.ca8459fe.js";import"./@element-plus.5fd8ebeb.js";import"./lodash-es.503fa2cd.js";import"./dayjs.6e4093f3.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./pinia.447e158a.js";import"./nprogress.058bccf8.js";import"./pako.fc44881c.js";import"./mitt.550594b0.js";import"./ws.f1fd17a3.js";const n=c("h2",null,"实时数据列表",-1),v=c("div",{class:"list"},[c("div",{class:"list-name title"},"币种名称"),c("div",{class:"list-price title"},"价格"),c("div",{class:"list-vol title"},"交易量")],-1),j=["onClick"],f={class:"list-name"},u={class:"list-price"},b={class:"list-vol"},h=i({__name:"light-charts",setup(i){const h=e(),k=s(),y=o([]);return a((()=>{h.send("market.overview","OVERVIEW",(s=>{y.value=s.data||[]}))})),t((()=>{h.unSend("market.overview","OVERVIEW")})),(s,e)=>(l(),r("div",null,[n,v,(l(!0),r(m,null,p(y.value,(s=>(l(),r("div",{class:"list",key:s.symbol,onClick:e=>{return a=s.symbol,void k.push({path:`/echart/k-detail/${a}`});var a}},[c("div",f,d(s.symbol.toLocaleUpperCase().replace("USDT","")),1),c("div",u,d(s.amount),1),c("div",b,d(s.vol),1)],8,j)))),128))]))}});export{h as default};
