import{_ as V}from"./VModal.vuevuetypescriptsetuptruelang-a17bfb7d.js";import{d as _,r as k,a4 as F,C as S,a5 as w,o as M,R as q,v as p,K as c,b as u,O as x,M as C,g as e,L as B,f as m,a6 as D}from"./index-e1652ff6.js";import{u as K,a as $}from"./vee-validate.esm-9bd57891.js";const E=["placeholder"],R=["disabled"],N=_({__name:"EditValueModal",props:{getVariables:{type:Function,required:!0},title:{type:String,required:!0},placeholder:{type:String},value:{type:String},mutation:{type:Function,required:!0},done:{type:Function}},setup(l){const s=l,{handleSubmit:v}=K(),d=k(),{mutate:f,loading:y,onDone:b}=s.mutation(),{value:a,resetField:g,errorMessage:r}=$("inputValue",F().required());a.value=s.value??"",a.value||g(),(async()=>{var t;await S(),(t=d.value)==null||t.focus()})();const i=v(()=>{f(s.getVariables(a.value??""))});return b(()=>{var t;(t=s.done)==null||t.call(this,a.value),w()}),(t,o)=>{const h=V;return M(),q(h,{title:l.title},{body:p(()=>[c(u("input",{ref_key:"input",ref:d,type:"text",placeholder:l.placeholder,class:"form-control","onUpdate:modelValue":o[0]||(o[0]=n=>x(a)?a.value=n:null),onKeyup:o[1]||(o[1]=C((...n)=>e(i)&&e(i)(...n),["enter"]))},null,40,E),[[B,e(a)]]),c(u("div",{class:"invalid-feedback"},m(e(r)?t.$t(e(r)):""),513),[[D,e(r)]])]),action:p(()=>[u("button",{type:"button",disabled:e(y),class:"btn",onClick:o[2]||(o[2]=(...n)=>e(i)&&e(i)(...n))},m(t.$t("save")),9,R)]),_:1},8,["title"])}}});export{N as _};