import{s as e,w as n,r as t,d as r,e as u,g as l,f as i,n as o,h as a,i as s,u as c,j as f}from"./@vue.df4a0536.js";var d,v=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,y=(e,n,t)=>n in e?v(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function g(r,u){var l;const i=e();var o,a;return n((()=>{i.value=r()}),(o=((e,n)=>{for(var t in n||(n={}))w.call(n,t)&&y(e,t,n[t]);if(b)for(var t of b(n))O.call(n,t)&&y(e,t,n[t]);return e})({},u),a={flush:null!=(l=null==u?void 0:u.flush)?l:"sync"},p(o,m(a)))),t(i)}const h="undefined"!=typeof window,E=e=>"boolean"==typeof e,F=e=>"number"==typeof e,S=()=>{};function I(e){return"function"==typeof e?e():c(e)}function P(e){return!!a()&&(s(e),!0)}function k(e,n=200,t={}){return function(e,n){return function(...t){e((()=>n.apply(this,t)),{fn:n,thisArg:this,args:t})}}(function(e,n={}){let t,r;return u=>{const l=I(e),i=I(n.maxWait);if(t&&clearTimeout(t),l<=0||void 0!==i&&i<=0)return r&&(clearTimeout(r),r=null),u();i&&!r&&(r=setTimeout((()=>{t&&clearTimeout(t),r=null,u()}),i)),t=setTimeout((()=>{r&&clearTimeout(r),r=null,u()}),l)}}(n,t),e)}function j(e,n=200,t={}){if(n<=0)return e;const l=r(e.value),i=k((()=>{l.value=e.value}),n,t);return u(e,(()=>i())),l}function T(e,n=!0){l()?i(e):n?e():o(e)}function x(e,n,t={}){const{immediate:u=!0}=t,l=r(!1);let i=null;function o(){i&&(clearTimeout(i),i=null)}function a(){l.value=!1,o()}function s(...t){o(),l.value=!0,i=setTimeout((()=>{l.value=!1,i=null,e(...t)}),I(n))}return u&&(l.value=!0,h&&s()),P(a),{isPending:l,start:s,stop:a}}function C(e){var n;const t=I(e);return null!=(n=null==t?void 0:t.$el)?n:t}h&&(null==(d=null==window?void 0:window.navigator)?void 0:d.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const N=h?window:void 0,z=h?window.document:void 0;function Q(...e){let n,t,r,l;if("string"==typeof e[0]?([t,r,l]=e,n=N):[n,t,r,l]=e,!n)return S;let i=S;const o=u((()=>C(n)),(e=>{i(),e&&(e.addEventListener(t,r,l),i=()=>{e.removeEventListener(t,r,l),i=S})}),{immediate:!0,flush:"post"}),a=()=>{o(),i()};return P(a),a}function R(e,n,t={}){const{window:u=N,ignore:l,capture:i=!0,detectIframe:o=!1}=t;if(!u)return;const a=r(!0);let s;const c=t=>{u.clearTimeout(s);const r=C(e),i=t.composedPath();r&&r!==t.target&&!i.includes(r)&&a.value&&(l&&l.length>0&&l.some((e=>{const n=C(e);return n&&(t.target===n||i.includes(n))}))||n(t))},f=[Q(u,"click",c,{passive:!0,capture:i}),Q(u,"pointerdown",(n=>{const t=C(e);a.value=!!t&&!n.composedPath().includes(t)}),{passive:!0}),Q(u,"pointerup",(e=>{if(0===e.button){const n=e.composedPath();e.composedPath=()=>n,s=u.setTimeout((()=>c(e)),50)}}),{passive:!0}),o&&Q(u,"blur",(t=>{var r;const u=C(e);"IFRAME"!==(null==(r=document.activeElement)?void 0:r.tagName)||(null==u?void 0:u.contains(document.activeElement))||n(t)}))].filter(Boolean);return()=>f.forEach((e=>e()))}function q(e,n=!1){const t=r(),u=()=>t.value=Boolean(e());return u(),T(u,n),t}const W="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},_="__vueuse_ssr_handlers__";function B({document:e=z}={}){if(!e)return r("visible");const n=r(e.visibilityState);return Q(e,"visibilitychange",(()=>{n.value=e.visibilityState})),n}W[_]=W[_]||{},W[_];var H=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;function $(e,n,t={}){const r=t,{window:l=N}=r,i=((e,n)=>{var t={};for(var r in e)A.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&H)for(var r of H(e))n.indexOf(r)<0&&L.call(e,r)&&(t[r]=e[r]);return t})(r,["window"]);let o;const a=q((()=>l&&"ResizeObserver"in l)),s=()=>{o&&(o.disconnect(),o=void 0)},c=u((()=>C(e)),(e=>{s(),a.value&&l&&e&&(o=new ResizeObserver(n),o.observe(e,i))}),{immediate:!0,flush:"post"}),f=()=>{s(),c()};return P(f),{isSupported:a,stop:f}}const D=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function M(e,n={}){const{document:t=z,autoExit:u=!1}=n,l=e||(null==t?void 0:t.querySelector("html")),i=r(!1);let o=D[0];const a=q((()=>{if(!t)return!1;for(const e of D)if(e[1]in t)return o=e,!0;return!1})),[s,c,f,,d]=o;async function v(){a.value&&((null==t?void 0:t[f])&&await t[c](),i.value=!1)}async function p(){if(!a.value)return;await v();const e=C(l);e&&(await e[s](),i.value=!0)}return t&&Q(t,d,(()=>{i.value=!!(null==t?void 0:t[f])}),!1),u&&P(v),{isSupported:a,isFullscreen:i,enter:p,exit:v,toggle:async function(){i.value?await v():await p()}}}var G,J;(J=G||(G={})).UP="UP",J.RIGHT="RIGHT",J.DOWN="DOWN",J.LEFT="LEFT",J.NONE="NONE";var U=Object.defineProperty,V=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,Y=(e,n,t)=>n in e?U(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function Z(e,n,t,i={}){var o,a,s;const{clone:c=!1,passive:d=!1,eventName:v,deep:p=!1,defaultValue:m}=i,b=l(),w=t||(null==b?void 0:b.emit)||(null==(o=null==b?void 0:b.$emit)?void 0:o.bind(b))||(null==(s=null==(a=null==b?void 0:b.proxy)?void 0:a.$emit)?void 0:s.bind(null==b?void 0:b.proxy));let O=v;n||(n="modelValue"),O=v||O||`update:${n.toString()}`;const y=e=>{return c?(e=>"function"==typeof e)(c)?c(e):(n=e,JSON.parse(JSON.stringify(n))):e;var n},g=()=>void 0!==e[n]?y(e[n]):m;if(d){const t=g(),l=r(t);return u((()=>e[n]),(e=>l.value=y(e))),u(l,(t=>{(t!==e[n]||p)&&w(O,t)}),{deep:p}),l}return f({get:()=>g(),set(e){w(O,e)}})}function ee({window:e=N}={}){if(!e)return r(!1);const n=r(e.document.hasFocus());return Q(e,"blur",(()=>{n.value=!1})),Q(e,"focus",(()=>{n.value=!0})),n}function ne(e={}){const{window:n=N,initialWidth:t=1/0,initialHeight:u=1/0,listenOrientation:l=!0,includeScrollbar:i=!0}=e,o=r(t),a=r(u),s=()=>{n&&(i?(o.value=n.innerWidth,a.value=n.innerHeight):(o.value=n.document.documentElement.clientWidth,a.value=n.document.documentElement.clientHeight))};return s(),T(s),Q("resize",s,{passive:!0}),l&&Q("orientationchange",s,{passive:!0}),{width:o,height:a}}((e,n)=>{for(var t in n||(n={}))K.call(n,t)&&Y(e,t,n[t]);if(V)for(var t of V(n))X.call(n,t)&&Y(e,t,n[t])})({linear:function(e){return e}},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});export{F as a,E as b,Q as c,C as d,x as e,B as f,ee as g,g as h,h as i,Z as j,M as k,ne as l,R as o,j as r,P as t,$ as u};
