import{_ as B,a as C,b as v,c as F,d as N}from"./BpFreXJY.js";import{d as b,a8 as A,x as V,$,N as q,m as D,I as E,U as G,n as H,b as t,o as s,c as I,h as r,i as o,e as p,a as m,p as O}from"./Dewv5x70.js";import"./t_O6d7eG.js";import"./DDnC0uZE.js";import"./BG7lbux0.js";import"./BDmP7TTW.js";const R={key:0,class:"container flex items-start gap-16"},S={class:"w-full"},j={class:"flex items-center justify-between w-full gap-4 mt-8 md:gap-8"},X=b({__name:"[slug]",async setup(L){var d,_;let e,a;const{setProducts:l,updateProductList:u}=A(),{isQueryEmpty:f}=V(),{storeSettings:n}=$(),c=q(),g=c.params.slug,{data:h}=([e,a]=D(()=>O("getProducts",{slug:g})),e=await e,a(),e),i=((_=(d=h.value)==null?void 0:d.products)==null?void 0:_.nodes)||[];return l(i),E(()=>{f.value||u()}),G(()=>c.query,()=>{c.name==="product-category-slug"&&u()}),H({title:"Products",meta:[{hid:"description",name:"description",content:"Products"}]}),(M,Q)=>{const y=v,w=B,x=F,P=N,k=C;return t(i).length?(s(),I("div",R,[t(n).showFilters?(s(),r(y,{key:0,"hide-categories":!0})):o("",!0),p("div",S,[p("div",j,[m(w),t(n).showOrderByDropdown?(s(),r(x,{key:0,class:"hidden md:inline-flex"})):o("",!0),t(n).showFilters?(s(),r(P,{key:1,class:"md:hidden"})):o("",!0)]),m(k)])])):o("",!0)}}});export{X as default};
