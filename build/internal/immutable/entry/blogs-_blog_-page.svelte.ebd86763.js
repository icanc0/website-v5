import{S as P,i as T,s as z,e as u,t as D,a as E,c as f,b as _,d as I,f as d,g as V,h as i,j as A,k as e,n as w}from"../chunks/index.eb9b5e2d.js";function B(r){let a,t,s,p=r[0].title+"",o,m,n,C=r[0].date+"",x,b,c,S=r[0].description+"",y,k,v,L=r[0].body+"";return{c(){a=u("div"),t=u("div"),s=u("div"),o=D(p),m=E(),n=u("div"),x=D(C),b=E(),c=u("div"),y=D(S),k=E(),v=u("div"),this.h()},l(h){a=f(h,"DIV",{class:!0});var g=_(a);t=f(g,"DIV",{id:!0,class:!0});var l=_(t);s=f(l,"DIV",{class:!0});var j=_(s);o=I(j,p),j.forEach(d),m=V(l),n=f(l,"DIV",{class:!0});var q=_(n);x=I(q,C),q.forEach(d),b=V(l),c=f(l,"DIV",{class:!0});var H=_(c);y=I(H,S),H.forEach(d),k=V(l),v=f(l,"DIV",{class:!0});var M=_(v);M.forEach(d),l.forEach(d),g.forEach(d),this.h()},h(){i(s,"class","font-bold text-3xl pb-4 dark:text-gray-100"),i(n,"class","font-medium text-lg pb-4 dark:text-gray-100"),i(c,"class","font-medium text-base pb-4 text-gray-600 dark:text-gray-200"),i(v,"class","prose lg:prose-xl sm:prose-sm dark:text-gray-100 dark:prose-dark"),i(t,"id","blogCard"),i(t,"class","bg-gray-50 dark:bg-gray-700 rounded-xl p-8 w-full"),i(a,"class","w-full ")},m(h,g){A(h,a,g),e(a,t),e(t,s),e(s,o),e(t,m),e(t,n),e(n,x),e(t,b),e(t,c),e(c,y),e(t,k),e(t,v),v.innerHTML=L},p:w,i:w,o:w,d(h){h&&d(a)}}}function F(r,a,t){let{data:s}=a,p=s;return r.$$set=o=>{"data"in o&&t(1,s=o.data)},[p,s]}class J extends P{constructor(a){super(),T(this,a,F,B,z,{data:1})}}export{J as default};
