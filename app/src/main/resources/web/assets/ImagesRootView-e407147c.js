import{_ as g}from"./TagFilter.vuevuetypescriptsetuptruelang-6ec9672d.js";import{_ as k}from"./BucketFilter.vuevuetypescriptsetuptruelang-474a815a.js";import{d as w,p as y,a as C,ax as M,v as z,e as B,x as s,y as o,h as e,o as I,f as a,t as m,w as $,z as b,n as x}from"./index-eee88ba0.js";import{g as d,M as E}from"./splitpanes.es-a3b08d9d.js";import"./EditValueModal-3ea9467f.js";import"./vee-validate.esm-47465a3b.js";const N={class:"page-container"},S={class:"sidebar"},V={class:"nav-title"},A={class:"nav"},G=["onClick"],R={class:"main"},H=w({__name:"ImagesRootView",setup(q){var r,_;const n=y(),u=C(),i=M(n.query),c=((r=i.find(t=>t.name==="tag"))==null?void 0:r.value)??"",l=((_=i.find(t=>t.name==="bucket_id"))==null?void 0:_.value)??"";function p(){x(u,"/images")}return(t,D)=>{const f=k,h=g,v=z("router-view");return I(),B("div",N,[s(e(E),null,{default:o(()=>[s(e(d),{size:"20","min-size":"10"},{default:o(()=>[a("div",S,[a("h2",V,m(t.$t("page_title.images")),1),a("ul",A,[a("li",{onClick:$(p,["prevent"]),class:b({active:e(n).path==="/images"&&!e(c)&&!e(l)})},m(t.$t("all")),11,G),s(f,{type:"IMAGE",selected:e(l)},null,8,["selected"])]),s(h,{type:"IMAGE",selected:e(c)},null,8,["selected"])])]),_:1}),s(e(d),null,{default:o(()=>[a("div",R,[s(v)])]),_:1})]),_:1})])}}});export{H as default};