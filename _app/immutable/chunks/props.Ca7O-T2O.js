import{S as A,Z as G,_ as W,M as P,$ as X,a0 as h,a1 as S,a2 as o,W as w,x as B,a3 as J,a4 as Q,i as V,d as k,h as F,g as ee,U as re,H as ne,k as te,l as ae,m as q,o as U,v as Y,w as H,n as ie,a5 as C,u as M,a6 as se,L as $,a7 as fe,a8 as ue,a9 as le,aa as ce,ab as _e,ac as K,ad as de,ae as oe,af as ve,ag as z,X as be,ah as ge,ai as O}from"./index-client.BcWPguiC.js";function E(e,t=null,f){if(typeof e!="object"||e===null||A in e)return e;const r=Q(e);if(r!==G&&r!==W)return e;var a=new Map,_=V(e),b=P(0);_&&a.set("length",P(e.length));var y;return new Proxy(e,{defineProperty(l,n,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&X();var u=a.get(n);return u===void 0?(u=P(i.value),a.set(n,u)):h(u,E(i.value,y)),!0},deleteProperty(l,n){var i=a.get(n);if(i===void 0)n in l&&a.set(n,P(o));else{if(_&&typeof n=="string"){var u=a.get("length"),s=Number(n);Number.isInteger(s)&&s<u.v&&h(u,s)}h(i,o),Z(b)}return!0},get(l,n,i){var d;if(n===A)return e;var u=a.get(n),s=n in l;if(u===void 0&&(!s||(d=S(l,n))!=null&&d.writable)&&(u=P(E(s?l[n]:o,y)),a.set(n,u)),u!==void 0){var c=w(u);return c===o?void 0:c}return Reflect.get(l,n,i)},getOwnPropertyDescriptor(l,n){var i=Reflect.getOwnPropertyDescriptor(l,n);if(i&&"value"in i){var u=a.get(n);u&&(i.value=w(u))}else if(i===void 0){var s=a.get(n),c=s==null?void 0:s.v;if(s!==void 0&&c!==o)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return i},has(l,n){var c;if(n===A)return!0;var i=a.get(n),u=i!==void 0&&i.v!==o||Reflect.has(l,n);if(i!==void 0||B!==null&&(!u||(c=S(l,n))!=null&&c.writable)){i===void 0&&(i=P(u?E(l[n],y):o),a.set(n,i));var s=w(i);if(s===o)return!1}return u},set(l,n,i,u){var T;var s=a.get(n),c=n in l;if(_&&n==="length")for(var d=i;d<s.v;d+=1){var m=a.get(d+"");m!==void 0?h(m,o):d in l&&(m=P(o),a.set(d+"",m))}s===void 0?(!c||(T=S(l,n))!=null&&T.writable)&&(s=P(void 0),h(s,E(i,y)),a.set(n,s)):(c=s.v!==o,h(s,E(i,y)));var g=Reflect.getOwnPropertyDescriptor(l,n);if(g!=null&&g.set&&g.set.call(u,i),!c){if(_&&typeof n=="string"){var N=a.get("length"),I=Number(n);Number.isInteger(I)&&I>=N.v&&h(N,I+1)}Z(b)}return!0},ownKeys(l){w(b);var n=Reflect.ownKeys(l).filter(s=>{var c=a.get(s);return c===void 0||c.v!==o});for(var[i,u]of a)u.v!==o&&!(i in l)&&n.push(i);return n},setPrototypeOf(){J()}})}function Z(e,t=1){h(e,e.v+t)}function Ie(e,t,f=!1){F&&ee();var r=e,a=null,_=null,b=o,y=f?re:0,l=!1;const n=(u,s=!0)=>{l=!0,i(s,u)},i=(u,s)=>{if(b===(b=u))return;let c=!1;if(F){const d=r.data===ne;!!b===d&&(r=te(),ae(r),q(!1),c=!0)}b?(a?U(a):s&&(a=Y(()=>s(r))),_&&H(_,()=>{_=null})):(_?U(_):s&&(_=Y(()=>s(r))),a&&H(a,()=>{a=null})),c&&q(!0)};k(()=>{l=!1,t(n),l||i(null,null)},y),F&&(r=ie)}function he(e,t,f){if(e==null)return t(void 0),C;const r=M(()=>e.subscribe(t,f));return r.unsubscribe?()=>r.unsubscribe():r}let x=!1;function Re(e,t,f){const r=f[t]??(f[t]={store:null,source:$(void 0),unsubscribe:C});if(r.store!==e)if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=C;else{var a=!0;r.unsubscribe=he(e,_=>{a?r.source.v=_:h(r.source,_)}),a=!1}return w(r.source)}function Ee(){const e={};return se(()=>{for(var t in e)e[t].unsubscribe()}),e}function ye(e){var t=x;try{return x=!1,[e(),x]}finally{x=t}}const we={get(e,t){let f=e.props.length;for(;f--;){let r=e.props[f];if(O(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,f){let r=e.props.length;for(;r--;){let a=e.props[r];O(a)&&(a=a());const _=S(a,t);if(_&&_.set)return _.set(f),!0}return!1},getOwnPropertyDescriptor(e,t){let f=e.props.length;for(;f--;){let r=e.props[f];if(O(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const a=S(r,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===A||t===z)return!1;for(let f of e.props)if(O(f)&&(f=f()),f!=null&&t in f)return!0;return!1},ownKeys(e){const t=[];for(let f of e.props){O(f)&&(f=f());for(const r in f)t.includes(r)||t.push(r)}return t}};function Se(...e){return new Proxy({props:e},we)}function Pe(e){for(var t=B,f=B;t!==null&&!(t.f&(ce|_e));)t=t.parent;try{return K(t),e()}finally{K(f)}}function Te(e,t,f,r){var j;var a=(f&de)!==0,_=!oe,b=(f&ve)!==0,y=(f&ge)!==0,l=!1,n;b?[n,l]=ye(()=>e[t]):n=e[t];var i=A in e||z in e,u=((j=S(e,t))==null?void 0:j.set)??(i&&b&&t in e?v=>e[t]=v:void 0),s=r,c=!0,d=!1,m=()=>(d=!0,c&&(c=!1,y?s=M(r):s=r),s);n===void 0&&r!==void 0&&(u&&_&&fe(),n=m(),u&&u(n));var g;if(g=()=>{var v=e[t];return v===void 0?m():(c=!0,d=!1,v)},!(f&ue))return g;if(u){var N=e.$$legacy;return function(v,R){return arguments.length>0?((!R||N||l)&&u(R?g():v),v):g()}}var I=!1,T=!1,D=$(n),p=Pe(()=>be(()=>{var v=g(),R=w(D);return I?(I=!1,T=!0,R):(T=!1,D.v=v)}));return a||(p.equals=le),function(v,R){if(arguments.length>0){const L=R?w(p):b?E(v):v;return p.equals(L)||(I=!0,h(D,L),d&&s!==void 0&&(s=L),M(()=>w(p))),v}return w(p)}}export{Re as a,E as b,Se as c,Ie as i,Te as p,Ee as s};