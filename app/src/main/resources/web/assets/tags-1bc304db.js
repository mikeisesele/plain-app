import{d as k,u as v,bK as A,U as V,bL as B,I as _,t as y,a1 as I,o as $,Q as M,v as b,e as F,g as n,N as q,J as D,b as T,f as h,a2 as Q,bM as G,r as N,i as R,bl as z,X as S}from"./index-b61558b0.js";import{_ as C}from"./VModal.vuevuetypescriptsetuptruelang-97be675f.js";import{_ as U}from"./Multiselect-a8591ac7.js";import{u as w,a as L}from"./vee-validate.esm-3e89ad50.js";import{c as E,k as O}from"./search-10c50927.js";const J=["disabled"],K=k({__name:"AddToTagsModal",props:{tagType:{type:String,required:!0},tags:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]}},setup(i){const o=i,{handleSubmit:l}=w(),{t:r}=v(),{value:t,errorMessage:e}=L("selectedTags",A().test("required",()=>"valid.required",a=>a.length),{initialValue:[]}),{mutate:u,loading:m,onDone:g}=V({document:B,appApi:!0});g(()=>{o.tagType==="AUDIO"&&_.emit("refetch_app"),_.emit("refetch_by_tag_type",o.tagType),y(r("saved")),I()});const d=l(()=>{u({tagType:o.tagType,tagIds:t.value.map(a=>a.id),items:o.items})});return(a,s)=>{const p=U,f=C;return $(),M(f,{title:a.$t("add_to_tags")},{body:b(()=>[F(p,{modelValue:n(t),"onUpdate:modelValue":s[0]||(s[0]=c=>q(t)?t.value=c:null),label:"name","track-by":"id",options:i.tags},null,8,["modelValue","options"]),D(T("div",{class:"invalid-feedback"},h(n(e)?a.$t(n(e)):""),513),[[Q,n(e)]])]),action:b(()=>[T("button",{type:"button",disabled:n(m),class:"btn",onClick:s[1]||(s[1]=(...c)=>n(d)&&n(d)(...c))},h(a.$t("save")),9,J)]),_:1},8,["title"])}}}),X=["disabled"],j=k({__name:"RemoveFromTagsModal",props:{tagType:{type:String,required:!0},tags:{type:Array,default:()=>[]},ids:{type:Array,default:()=>[]}},setup(i){const o=i,{handleSubmit:l}=w(),{t:r}=v(),{value:t,errorMessage:e}=L("selectedTags",A().test("required",()=>"valid.required",a=>a.length),{initialValue:[]}),{mutate:u,loading:m,onDone:g}=V({document:G,appApi:!0});g(()=>{o.tagType==="AUDIO"&&_.emit("refetch_app"),_.emit("refetch_by_tag_type",o.tagType),y(r("saved")),I()});const d=l(()=>{u({tagIds:t.value.map(a=>a.id),keys:o.ids})});return(a,s)=>{const p=U,f=C;return $(),M(f,{title:a.$t("remove_from_tags")},{body:b(()=>[F(p,{modelValue:n(t),"onUpdate:modelValue":s[0]||(s[0]=c=>q(t)?t.value=c:null),label:"name","track-by":"id",options:i.tags},null,8,["modelValue","options"]),D(T("div",{class:"invalid-feedback"},h(n(e)?a.$t(n(e)):""),513),[[Q,n(e)]])]),action:b(()=>[T("button",{type:"button",disabled:n(m),class:"btn",onClick:s[1]||(s[1]=(...c)=>n(d)&&n(d)(...c))},h(a.$t("save")),9,X)]),_:1},8,["title"])}}}),Z=(i,o,l)=>{const{t:r}=v();return{addToTags:()=>{const t=o.value.filter(e=>e.checked);if(t.length===0){y(r("select_first"),"error");return}S(K,{tagType:i,tags:l.value,items:t.map(e=>({key:e.id,title:e.title,size:e.size}))})}}},ee=(i,o,l)=>{const{t:r}=v();return{removeFromTags:()=>{const t=o.value.filter(e=>e.checked);if(t.length===0){y(r("select_first"),"error");return}S(j,{tagType:i,tags:l.value,ids:t.map(e=>e.id)})}}},te=(i,o,l,r)=>{const t=N([]),{t:e}=v();return R({handle:async(u,m)=>{if(m)y(e(m),"error");else if(u){t.value=u.tags;const g=E(o.value);l.tags=[];const d=[];g.forEach(s=>{if(s.name==="text")l.text=s.value;else if(s.name==="tag"){const p=u.tags.find(f=>O(f.name)===s.value);p?(l.tags.push(p),d.push(p.id)):d.push("invalid")}});const a=[...g].filter(s=>s.name!=="tag");d.forEach(s=>{a.push({name:"tag_id",op:"",value:s})}),r(a)}},document:z,variables:{type:i},appApi:!0}),{tags:t}};export{Z as a,ee as b,te as u};