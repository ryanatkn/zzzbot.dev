const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_app/immutable/nodes/0.CnVx4haW.js","_app/immutable/chunks/disclose-version.D1ARZ0C8.js","_app/immutable/chunks/runtime.npDSB2Qo.js","_app/immutable/chunks/props.D3PLZMyK.js","_app/immutable/chunks/class.BYiLWYym.js","_app/immutable/chunks/string.CdhXuV7e.js","_app/immutable/chunks/index-client.ZgWYLgsW.js","_app/immutable/assets/0.Ce3uEBtg.css","_app/immutable/nodes/1.CEMvxnbQ.js","_app/immutable/chunks/stores.CZDiexO3.js","_app/immutable/chunks/entry.D61QRC86.js","_app/immutable/nodes/2.Rt-ZMewN.js","_app/immutable/assets/2.CyAfMvww.css","_app/immutable/nodes/3.Bejm9JLL.js","_app/immutable/assets/3.-gIOXxzB.css"])))=>i.map(i=>d[i]);
var z=a=>{throw TypeError(a)};var B=(a,t,r)=>t.has(a)||z("Cannot "+r);var u=(a,t,r)=>(B(a,t,"read from private field"),r?r.call(a):t.get(a)),L=(a,t,r)=>t.has(a)?z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,r),O=(a,t,r,o)=>(B(a,t,"write to private field"),o?o.call(a,r):t.set(a,r),r);import{y as N,z as X,x as Z,E as M,F as p,I as $,G as tt,k as _,T as et,aj as rt,ak as st,al as at,g as nt,f as k,p as ot,a as ct,am as it,s as ut,c as lt,r as ft,t as dt,V as I}from"../chunks/runtime.npDSB2Qo.js";import{e as S,u as mt,v as ht,w as _t,m as vt,a as b,t as Y,q as V,x as j,r as gt,b as yt}from"../chunks/disclose-version.D1ARZ0C8.js";import{p as D,i as q,a as Et}from"../chunks/props.D3PLZMyK.js";import{o as bt,b as F}from"../chunks/index-client.ZgWYLgsW.js";function U(a,t,r){N&&X();var o=a,n,i;Z(()=>{n!==(n=t())&&(i&&(tt(i),i=null),n&&(i=p(()=>r(o,n))))},M),N&&(o=$)}function Pt(a){return class extends xt{constructor(t){super({component:a,...t})}}}var v,f;class xt{constructor(t){L(this,v);L(this,f);var i;var r=new Map,o=(e,s)=>{var c=vt(s);return r.set(e,c),c};const n=new Proxy({...t.props||{},$$events:{}},{get(e,s){return _(r.get(s)??o(s,Reflect.get(e,s)))},has(e,s){return s===et?!0:(_(r.get(s)??o(s,Reflect.get(e,s))),Reflect.has(e,s))},set(e,s,c){return S(r.get(s)??o(s,c),c),Reflect.set(e,s,c)}});O(this,f,(t.hydrate?mt:ht)(t.component,{target:t.target,anchor:t.anchor,props:n,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((i=t==null?void 0:t.props)!=null&&i.$$host)||t.sync===!1)&&rt(),O(this,v,n.$$events);for(const e of Object.keys(u(this,f)))e==="$set"||e==="$destroy"||e==="$on"||st(this,e,{get(){return u(this,f)[e]},set(s){u(this,f)[e]=s},enumerable:!0});u(this,f).$set=e=>{Object.assign(n,e)},u(this,f).$destroy=()=>{_t(u(this,f))}}$set(t){u(this,f).$set(t)}$on(t,r){u(this,v)[t]=u(this,v)[t]||[];const o=(...n)=>r.call(this,...n);return u(this,v)[t].push(o),()=>{u(this,v)[t]=u(this,v)[t].filter(n=>n!==o)}}$destroy(){u(this,f).$destroy()}}v=new WeakMap,f=new WeakMap;const Rt="modulepreload",wt=function(a){return"/"+a},W={},A=function(t,r,o){let n=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),s=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));n=Promise.allSettled(r.map(c=>{if(c=wt(c),c in W)return;W[c]=!0;const g=c.endsWith(".css"),R=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${R}`))return;const m=document.createElement("link");if(m.rel=g?"stylesheet":Rt,g||(m.as="script"),m.crossOrigin="",m.href=c,s&&m.setAttribute("nonce",s),document.head.appendChild(m),g)return new Promise((T,C)=>{m.addEventListener("load",T),m.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(e){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=e,window.dispatchEvent(s),!s.defaultPrevented)throw e}return n.then(e=>{for(const s of e||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})},jt={};var kt=Y('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),At=Y("<!> <!>",1);function St(a,t){ct(t,!0);let r=D(t,"components",23,()=>[]),o=D(t,"data_0",3,null),n=D(t,"data_1",3,null);at(()=>t.stores.page.set(t.page)),nt(()=>{t.stores,t.page,t.constructors,r(),t.form,o(),n(),t.stores.page.notify()});let i=j(!1),e=j(!1),s=j(null);bt(()=>{const l=t.stores.page.subscribe(()=>{_(i)&&(S(e,!0),it().then(()=>{S(s,Et(document.title||"untitled page"))}))});return S(i,!0),l});const c=I(()=>t.constructors[1]);var g=At(),R=k(g);{var m=l=>{var h=V();const P=I(()=>t.constructors[0]);var x=k(h);U(x,()=>_(P),(y,E)=>{F(E(y,{get data(){return o()},get form(){return t.form},children:(d,Tt)=>{var G=V(),J=k(G);U(J,()=>_(c),(K,Q)=>{F(Q(K,{get data(){return n()},get form(){return t.form}}),w=>r()[1]=w,()=>{var w;return(w=r())==null?void 0:w[1]})}),b(d,G)},$$slots:{default:!0}}),d=>r()[0]=d,()=>{var d;return(d=r())==null?void 0:d[0]})}),b(l,h)},T=l=>{var h=V();const P=I(()=>t.constructors[0]);var x=k(h);U(x,()=>_(P),(y,E)=>{F(E(y,{get data(){return o()},get form(){return t.form}}),d=>r()[0]=d,()=>{var d;return(d=r())==null?void 0:d[0]})}),b(l,h)};q(R,l=>{t.constructors[1]?l(m):l(T,!1)})}var C=ut(R,2);{var H=l=>{var h=kt(),P=lt(h);{var x=y=>{var E=gt();dt(()=>yt(E,_(s))),b(y,E)};q(P,y=>{_(e)&&y(x)})}ft(h),b(l,h)};q(C,l=>{_(i)&&l(H)})}b(a,g),ot()}const Dt=Pt(St),qt=[()=>A(()=>import("../nodes/0.CnVx4haW.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])),()=>A(()=>import("../nodes/1.CEMvxnbQ.js"),__vite__mapDeps([8,1,2,9,10])),()=>A(()=>import("../nodes/2.Rt-ZMewN.js"),__vite__mapDeps([11,1,2,3,4,9,10,12])),()=>A(()=>import("../nodes/3.Bejm9JLL.js"),__vite__mapDeps([13,1,2,5,3,4,9,10,14]))],Ft=[],Ut={"/":[2],"/about":[3]},Gt={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{Ut as dictionary,Gt as hooks,jt as matchers,qt as nodes,Dt as root,Ft as server_loads};