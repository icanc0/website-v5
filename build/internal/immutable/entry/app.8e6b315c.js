import{S as j,i as B,s as q,a as U,q as h,g as z,j as b,u as d,v as P,w as g,f as w,x as F,y as G,e as W,c as H,b as J,h as y,z as m,t as K,d as M,m as Q,A as D,B as A,C as v,D as k,E as I,F as R,G as L}from"../chunks/index.eb9b5e2d.js";const X="modulepreload",Y=function(a,e){return new URL(a,e).href},O={},p=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Y(f,i),f in O)return;O[f]=!0;const t=f.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!i)for(let l=s.length-1;l>=0;l--){const u=s[l];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${r}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":X,t||(o.as="script",o.crossOrigin=""),o.href=f,document.head.appendChild(o),t)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e()).catch(f=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=f,window.dispatchEvent(t),!t.defaultPrevented)throw f})},ie={};function Z(a){let e,n,i;var s=a[1][0];function f(t){return{props:{data:t[3],form:t[2]}}}return s&&(e=v(s,f(a)),a[12](e)),{c(){e&&k(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&4&&(_.form=t[2]),r&2&&s!==(s=t[1][0])){if(e){D();const o=e;d(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=v(s,f(t)),t[12](e),k(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&d(e.$$.fragment,t),i=!1},d(t){a[12](null),t&&w(n),e&&L(e,t)}}}function $(a){let e,n,i;var s=a[1][0];function f(t){return{props:{data:t[3],$$slots:{default:[x]},$$scope:{ctx:t}}}}return s&&(e=v(s,f(a)),a[11](e)),{c(){e&&k(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&8215&&(_.$$scope={dirty:r,ctx:t}),r&2&&s!==(s=t[1][0])){if(e){D();const o=e;d(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=v(s,f(t)),t[11](e),k(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&d(e.$$.fragment,t),i=!1},d(t){a[11](null),t&&w(n),e&&L(e,t)}}}function x(a){let e,n,i;var s=a[1][1];function f(t){return{props:{data:t[4],form:t[2]}}}return s&&(e=v(s,f(a)),a[10](e)),{c(){e&&k(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){const _={};if(r&16&&(_.data=t[4]),r&4&&(_.form=t[2]),r&2&&s!==(s=t[1][1])){if(e){D();const o=e;d(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=v(s,f(t)),t[10](e),k(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&d(e.$$.fragment,t),i=!1},d(t){a[10](null),t&&w(n),e&&L(e,t)}}}function T(a){let e,n=a[6]&&V(a);return{c(){e=W("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=J(e);n&&n.l(s),s.forEach(w),this.h()},h(){y(e,"id","svelte-announcer"),y(e,"aria-live","assertive"),y(e,"aria-atomic","true"),m(e,"position","absolute"),m(e,"left","0"),m(e,"top","0"),m(e,"clip","rect(0 0 0 0)"),m(e,"clip-path","inset(50%)"),m(e,"overflow","hidden"),m(e,"white-space","nowrap"),m(e,"width","1px"),m(e,"height","1px")},m(i,s){b(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=V(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&w(e),n&&n.d()}}}function V(a){let e;return{c(){e=K(a[7])},l(n){e=M(n,a[7])},m(n,i){b(n,e,i)},p(n,i){i&128&&Q(e,n[7])},d(n){n&&w(e)}}}function ee(a){let e,n,i,s,f;const t=[$,Z],r=[];function _(l,u){return l[1][1]?0:1}e=_(a),n=r[e]=t[e](a);let o=a[5]&&T(a);return{c(){n.c(),i=U(),o&&o.c(),s=h()},l(l){n.l(l),i=z(l),o&&o.l(l),s=h()},m(l,u){r[e].m(l,u),b(l,i,u),o&&o.m(l,u),b(l,s,u),f=!0},p(l,[u]){let E=e;e=_(l),e===E?r[e].p(l,u):(D(),d(r[E],1,1,()=>{r[E]=null}),P(),n=r[e],n?n.p(l,u):(n=r[e]=t[e](l),n.c()),g(n,1),n.m(i.parentNode,i)),l[5]?o?o.p(l,u):(o=T(l),o.c(),o.m(s.parentNode,s)):o&&(o.d(1),o=null)},i(l){f||(g(n),f=!0)},o(l){d(n),f=!1},d(l){r[e].d(l),l&&w(i),o&&o.d(l),l&&w(s)}}}function te(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:f}=e,{components:t=[]}=e,{form:r}=e,{data_0:_=null}=e,{data_1:o=null}=e;F(i.page.notify);let l=!1,u=!1,E=null;G(()=>{const c=i.page.subscribe(()=>{l&&(n(6,u=!0),n(7,E=document.title||"untitled page"))});return n(5,l=!0),c});function N(c){A[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function S(c){A[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function C(c){A[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,s=c.page),"constructors"in c&&n(1,f=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,r=c.form),"data_0"in c&&n(3,_=c.data_0),"data_1"in c&&n(4,o=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,f,r,_,o,l,u,E,i,s,N,S,C]}class se extends j{constructor(e){super(),B(this,e,te,ee,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const re=[()=>p(()=>import("../chunks/0.f3a2b622.js"),["../chunks/0.f3a2b622.js","../chunks/_layout.da46b06b.js","./_layout.svelte.22c43f85.js","../chunks/index.eb9b5e2d.js","../chunks/index.a6647f35.js","../assets/_layout.60c127a3.css"],import.meta.url),()=>p(()=>import("../chunks/1.050855b9.js"),["../chunks/1.050855b9.js","./error.svelte.4c47fe01.js","../chunks/index.eb9b5e2d.js","../chunks/singletons.58797179.js","../chunks/index.a6647f35.js"],import.meta.url),()=>p(()=>import("../chunks/2.d406028a.js"),["../chunks/2.d406028a.js","../chunks/_page.a6d9d92d.js","./_page.svelte.874ee0e9.js","../chunks/index.eb9b5e2d.js"],import.meta.url),()=>p(()=>import("../chunks/3.f35fa46f.js"),["../chunks/3.f35fa46f.js","../chunks/_page.bc7b34ab.js","./blogs-page.svelte.2626029c.js","../chunks/index.eb9b5e2d.js"],import.meta.url),()=>p(()=>import("../chunks/4.89b22e62.js"),["../chunks/4.89b22e62.js","../chunks/_page.2dbb196f.js","./blogs-_blog_-page.svelte.ebd86763.js","../chunks/index.eb9b5e2d.js"],import.meta.url),()=>p(()=>import("../chunks/5.3bcf14fd.js"),["../chunks/5.3bcf14fd.js","./openxr-page.svelte.9ea96fce.js","../chunks/index.eb9b5e2d.js"],import.meta.url),()=>p(()=>import("../chunks/6.f1d3d336.js"),["../chunks/6.f1d3d336.js","../chunks/_page.9dfe8c09.js","./projects-page.svelte.4390f4df.js","../chunks/index.eb9b5e2d.js"],import.meta.url),()=>p(()=>import("../chunks/7.e1c5cbfa.js"),["../chunks/7.e1c5cbfa.js","../chunks/_page.2d82b7ef.js","./projects-_project_-page.svelte.0caf966b.js","../chunks/index.eb9b5e2d.js"],import.meta.url)],oe=[],ae={"/":[-3],"/blogs":[-4],"/blogs/[blog]":[-5],"/openxr":[5],"/projects":[-7],"/projects/[project]":[-8]},le={handleError:({error:a})=>{console.error(a)}};export{ae as dictionary,le as hooks,ie as matchers,re as nodes,se as root,oe as server_loads};
