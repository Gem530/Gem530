var m=Object.defineProperty,T=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var p=(e,t,a)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,i=(e,t)=>{for(var a in t||(t={}))h.call(t,a)&&p(e,a,t[a]);if(g)for(var a of g(t))A.call(t,a)&&p(e,a,t[a]);return e},o=(e,t)=>T(e,S(t));import{a as I}from"./axios.58752079.js";const M="https://57k67j9137.zicp.fun";function s({method:e="GET",url:t="",data:a={},header:c={},timeout:P=6e4,showLoading:O=!1}){return new Promise((l,d)=>{let n={};e==="post"||e==="POST"||e==="put"||e==="PUT"?n={data:a||{}}:n={params:a||{}},I(o(i({},n),{timeout:P,url:M+t,method:e,headers:Object.assign({token:"Bearer "+(sessionStorage.getItem("token")||"")},c)})).then(r=>{const{status:f,data:u}=r;f===200&&u.code!==0?l(u):d(u)}).catch(r=>{d(o(i({},r),{message:r.response.data}))})})}function k(e){return s({method:"POST",url:"/api/register",data:e})}function E(e){return s({method:"POST",url:"/api/login",data:e})}function R(e){return s({method:"POST",url:"/api/userList",data:e})}function b(e){return s({method:"POST",url:"/api/sendMsgFriend",data:e})}function w(e){return s({method:"GET",url:"/api/getUnreadMsg",data:{userId:e}})}function x(e){return s({method:"POST",url:"/api/getUserMsgRecord",data:e})}function B(e){return s({method:"POST",url:"/api/updateUnreadMsg",data:e})}export{B as a,x as b,w as g,E as l,k as r,b as s,R as u};
