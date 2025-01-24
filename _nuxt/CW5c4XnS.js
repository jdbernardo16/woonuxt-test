import{d as ne,N as le,s as re,x as de,M as ie,J as p,H as c,O as ce,I as ue,a7 as me,P as _e,o as l,c as d,b as s,h as b,F as f,a as u,w as A,e,t as o,i,r as pe,_ as fe,g as he,k as ge}from"./Dewv5x70.js";import{_ as ye,a as xe}from"./CJo-ZGAd.js";import{_ as ve}from"./BG7lbux0.js";import{O as be}from"./t_O6d7eG.js";const we={class:"w-full min-h-[600px] flex items-center p-4 text-gray-800 md:bg-white md:rounded-xl md:mx-auto md:shadow-lg md:my-24 md:mt-8 md:max-w-3xl md:p-16 flex-col"},ke={key:0,class:"w-full"},Ie={key:0,class:"flex items-center gap-4"},$e={class:"text-xl font-semibold"},Te={class:"flex items-center justify-between w-full mb-2"},je={class:"text-xl font-semibold"},Me={key:1,class:"flex-1 w-full"},Ce={class:"flex items-start justify-between"},Le={class:"w-[21%]"},De={class:"mb-2 text-xs text-gray-400 uppercase"},Oe={class:"leading-none"},Pe={class:"w-[21%]"},Be={class:"mb-2 text-xs text-gray-400 uppercase"},Ne={class:"leading-none"},Se={class:"w-[21%]"},Ee={class:"mb-2 text-xs text-gray-400 uppercase"},Re={class:"w-[21%]"},qe={class:"mb-2 text-xs text-gray-400 uppercase"},He={class:"leading-none"},Fe={class:"grid gap-2"},Ge={class:"flex-1 leading-tight"},Ve={class:"text-sm text-gray-600"},ze={class:"text-sm font-semibold"},Ue={key:1},Ae={class:"flex justify-between"},Je={class:"flex justify-between"},Qe={class:"flex justify-between"},Ke={key:0,class:"flex justify-between text-primary"},We={class:"flex justify-between"},Xe={class:""},Ye={class:"font-semibold"},Ze={key:2,class:"flex flex-col items-center justify-center flex-1 w-full gap-4 text-center"},es=["innerHTML"],ss=2500,rs=ne({__name:"order-summary",setup(ts){const{query:_,params:J,name:w}=le(),{customer:Q}=re(),{formatDate:K,formatPrice:W}=de(),{t:k}=ie(),n=p(null),X=p(_.fetch_delay==="true"),h=p(!1),m=p(""),Y=c(()=>{var t;return!((t=Q.value)!=null&&t.email)}),I=c(()=>w==="order-summary"),g=c(()=>w==="order-received"),y=c(()=>{var t;return((t=n.value)==null?void 0:t.status)!==be.COMPLETED}),Z=c(()=>{var t;return!!parseFloat(((t=n.value)==null?void 0:t.rawDiscountTotal)||"0")}),$=c(()=>{var t,a;return((a=(t=n.value)==null?void 0:t.downloadableItems)==null?void 0:a.nodes)||[]});ce(()=>{g.value&&(_.cancel_order||_.from_paypal||_.PayerID)&&window.close()}),ue(async()=>{await x(),g.value&&X.value&&y.value&&setTimeout(()=>{x()},ss)});async function x(){var t;try{const a=await me({id:J.orderId});a.order?n.value=a.order:m.value="Could not find order"}catch(a){m.value=((t=a==null?void 0:a.gqlErrors)==null?void 0:t[0].message)||"Could not find order"}h.value=!0}const ee=async()=>{h.value=!1,await x()};return _e({title(){return I.value?k("messages.shop.orderSummary"):k("messages.shop.orderReceived")}}),(t,a)=>{const se=ge,v=fe,T=he,te=ye,oe=ve,ae=xe;return l(),d("div",we,[s(h)?(l(),d(f,{key:1},[s(n)?(l(),d("div",ke,[s(I)?(l(),d("div",Ie,[u(T,{to:"/my-account?tab=orders",class:"inline-flex items-center justify-center p-2 border rounded-md",title:"Back to orders","aria-label":"Back to orders"},{default:A(()=>[u(v,{name:"ion:chevron-back-outline"})]),_:1}),e("h1",$e,o(t.$t("messages.shop.orderSummary")),1)])):s(g)?(l(),d(f,{key:1},[e("div",Te,[e("h1",je,o(t.$t("messages.shop.orderReceived")),1),s(y)?(l(),d("button",{key:0,type:"button",class:"inline-flex items-center justify-center p-2 bg-white border rounded-md",title:"Refresh order","aria-label":"Refresh order",onClick:ee},[u(v,{name:"ion:refresh-outline"})])):i("",!0)]),e("p",null,o(t.$t("messages.shop.orderThanks")),1)],64)):i("",!0),a[0]||(a[0]=e("hr",{class:"my-8"},null,-1))])):i("",!0),s(n)&&!s(Y)?(l(),d("div",Me,[e("div",Ce,[e("div",Le,[e("div",De,o(t.$t("messages.shop.order")),1),e("div",Oe,"#"+o(s(n).databaseId),1)]),e("div",Pe,[e("div",Be,o(t.$t("messages.general.date")),1),e("div",Ne,o(s(K)(s(n).date)),1)]),e("div",Se,[e("div",Ee,o(t.$t("messages.general.status")),1),s(n).status?(l(),b(te,{key:0,order:s(n)},null,8,["order"])):i("",!0)]),e("div",Re,[e("div",qe,o(t.$t("messages.general.paymentMethod")),1),e("div",He,o(s(n).paymentMethodTitle),1)])]),s(n).lineItems?(l(),d(f,{key:0},[a[1]||(a[1]=e("hr",{class:"my-8"},null,-1)),e("div",Fe,[(l(!0),d(f,null,pe(s(n).lineItems.nodes,r=>{var j,M,C,L;return l(),d("div",{key:r.id,class:"flex items-center justify-between gap-8"},[(j=r.product)!=null&&j.node?(l(),b(T,{key:0,to:`/product/${r.product.node.slug}`},{default:A(()=>{var D,O,P,B,N,S,E,R,q,H,F,G,V,z,U;return[u(oe,{class:"w-16 h-16 rounded-xl",src:((P=(O=(D=r.variation)==null?void 0:D.node)==null?void 0:O.image)==null?void 0:P.sourceUrl)||((N=(B=r.product.node)==null?void 0:B.image)==null?void 0:N.sourceUrl)||"/images/placeholder.png",alt:((R=(E=(S=r.variation)==null?void 0:S.node)==null?void 0:E.image)==null?void 0:R.altText)||((H=(q=r.product.node)==null?void 0:q.image)==null?void 0:H.altText)||"Product image",title:((V=(G=(F=r.variation)==null?void 0:F.node)==null?void 0:G.image)==null?void 0:V.title)||((U=(z=r.product.node)==null?void 0:z.image)==null?void 0:U.title)||"Product image",width:"64",height:"64",loading:"lazy"},null,8,["src","alt","title"])]}),_:2},1032,["to"])):i("",!0),e("div",Ge,o(r.variation?(C=(M=r.variation)==null?void 0:M.node)==null?void 0:C.name:(L=r.product)==null?void 0:L.node.name),1),e("div",Ve,"Qty. "+o(r.quantity),1),e("span",ze,o(s(W)(r.total)),1)])}),128))])],64)):i("",!0),a[4]||(a[4]=e("hr",{class:"my-8"},null,-1)),s($).length&&!s(y)?(l(),d("div",Ue,[u(ae,{downloadableItems:s($)},null,8,["downloadableItems"]),a[2]||(a[2]=e("hr",{class:"my-8"},null,-1))])):i("",!0),e("div",null,[e("div",Ae,[e("span",null,o(t.$t("messages.shop.subtotal")),1),e("span",null,o(s(n).subtotal),1)]),e("div",Je,[e("span",null,o(t.$t("messages.general.tax")),1),e("span",null,o(s(n).totalTax),1)]),e("div",Qe,[e("span",null,o(t.$t("messages.general.shipping")),1),e("span",null,o(s(n).shippingTotal),1)]),s(Z)?(l(),d("div",Ke,[e("span",null,o(t.$t("messages.shop.discount")),1),e("span",null,"- "+o(s(n).discountTotal),1)])):i("",!0),a[3]||(a[3]=e("hr",{class:"my-8"},null,-1)),e("div",We,[e("span",Xe,o(t.$t("messages.shop.total")),1),e("span",Ye,o(s(n).total),1)])])])):s(m)?(l(),d("div",Ze,[u(v,{name:"ion:sad-outline",size:"96",class:"text-gray-700"}),a[5]||(a[5]=e("h1",{class:"text-xl font-semibold"},"Error",-1)),s(m)?(l(),d("div",{key:0,class:"text-sm text-red-500",innerHTML:s(m)},null,8,es)):i("",!0)])):i("",!0)],64)):(l(),b(se,{key:0,class:"flex-1"}))])}}});export{rs as default};
