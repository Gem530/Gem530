import{b as e}from"./axios.68af02ab.js";import{g as s,a as t,s as a,b as o,c as r}from"./index.f5ed39b5.js";import{o as i,n}from"./element-plus.1a8f7ccb.js";function m(m){return m.timeout=m.timeout||1e4,m.url=(m.baseUrl?m.baseUrl:"/prod-api")+m.url,m.headers=m.headers||{Authorization:s("token")||""},new Promise(((s,c)=>{if("post"==m.method||"put"==m.method){const e={url:m.url,data:m.data,time:(new Date).getTime()},s=t("sessionObj");if(s){const t=s.url,o=s.data,r=s.time,i=1e3;if(o===e.data&&e.time-r<i&&t===e.url){c(new Error("数据正在处理，请勿重复提交"))}else a("sessionObj",e)}else a("sessionObj",e)}e(m).then((e=>{if(m.responseType)return void s(e);const{status:t,data:a}=e;m.baseUrl||200===t&&200===a.code?s(a):401===a.code||403===a.code?(i.confirm("登录已过期，是否重新登录?","提示").then((()=>{o("tagsView"),o("defaultActive"),r.push("/login")})).catch((()=>{})),c(a)):409===a.code?(i.confirm("您的账号已在其他设备登录，请重新登录","提示").then((()=>{o("tagsView"),o("defaultActive"),r.push("/login")})).catch((()=>{})),c(a)):(n({message:a.msg,type:"error"}),c(a))})).catch((e=>{n({message:e.message,type:"error"}),c(e)}))}))}export{m as r};
