import{_ as u}from"./BG7lbux0.js";import{d as g,x,o as h,h as b,w as _,a as f,b as i,e as d,i as p,g as y,C}from"./Dewv5x70.js";const w=["innerHTML"],t=220,L=g({__name:"CategoryCard",props:{node:{type:Object,required:!0},imageLoading:{type:String,default:"lazy"}},setup(e){const{FALLBACK_IMG:l}=x(),r=Math.round(t*1.125);return(v,n)=>{const c=u,m=y;return e.node?(h(),b(m,{key:0,to:`/product-category/${decodeURIComponent(e.node.slug)}`,class:"relative flex justify-center overflow-hidden border border-white rounded-xl item snap-mandatory snap-x"},{default:_(()=>{var o,a,s;return[f(c,{width:t,height:i(r),class:"absolute inset-0 object-cover w-full h-full",src:((o=e.node.image)==null?void 0:o.sourceUrl)||i(l),alt:((a=e.node.image)==null?void 0:a.altText)||e.node.name,title:((s=e.node.image)==null?void 0:s.title)||e.node.name,loading:e.imageLoading,sizes:`sm:${t/2}px md:${t}px`,placeholder:"","placeholder-class":"blur-xl"},null,8,["height","src","alt","title","loading","sizes"]),n[0]||(n[0]=d("div",{class:"absolute inset-x-0 bottom-0 opacity-50 bg-gradient-to-t from-black to-transparent h-1/2"},null,-1)),d("span",{class:"relative z-10 mt-auto mb-2 text-sm font-semibold text-white capitalize md:text-base md:mb-4",innerHTML:e.node.name},null,8,w)]}),_:1},8,["to"])):p("",!0)}}}),N=Object.assign(C(L,[["__scopeId","data-v-03215735"]]),{__name:"CategoryCard"});export{N as _};
