import{d as W,u as X,r as b,c as J,s as P,bn as Q,a1 as q,aA as H,K as Y,e as a,f as c,x as V,L as Z,w as E,j as i,g as m,t as d,h as o,F as w,A as ee,ag as te,bc as se,o as n,z as oe,bd as ae,be as ne,at as ce,U as le,m as ie,au as de,av as re,bg as ue,bi as F,bj as S,bk as g,aE as _e,ah as pe,bm as he,_ as me}from"./index-bfd324f1.js";import{_ as ve}from"./Breadcrumb-d5b3180f.js";import{n as ke}from"./list-6498ebd9.js";const be=_=>(de("data-v-0d453c7f"),_=_(),re(),_),we={class:"v-toolbar"},ge={class:"right-actions"},fe=["onClick"],ye=be(()=>c("md-ripple",null,null,-1)),Ce={class:"form-check-label"},De=["checked"],Ie={class:"panel-container"},Te={key:0,class:"file-items"},Ve=["onClick","onDblclick","onContextmenu"],Ee=["checked"],Fe=["src"],Se={class:"title"},Re={style:{"font-size":"0.75rem"}},xe={key:1,class:"no-data-placeholder"},Ae={key:0,class:"file-item-info"},Ne=W({__name:"FilesRecentView",setup(_){const{t:v}=X(),R=b([]),u=b(!1),f=J(),{app:y,urlTokenKey:p}=P(f),{loading:x,files:r}=Q(p),{downloadFile:C,downloadDir:A,downloadFiles:N}=te(p),{view:D}=he(R,(e,t)=>{f.lightbox={sources:e,index:t,visible:!0}}),h=b(null),{mutate:$,onDone:z}=q({document:se,appApi:!0});z(e=>{N(e.data.setTempValue.key),r.value.forEach(t=>{t.checked=!1})});const I=()=>{const e=[];return r.value.forEach(t=>{t.checked&&e.push({path:t.path})}),e};function B(e){u.value=e.target.checked}const L=()=>{$({key:ue(),value:JSON.stringify(I())})},M=H(()=>I().length>0);function U(e){if(u.value){e.checked=!e.checked;return}h.value=e}function O(e){F(e.name)?window.open(S(p.value,e.path),"_blank"):g(e.name)?D(r.value,e):C(e.path)}function G(e,t){e.preventDefault();let l;t.isDir?l=[{label:v("download"),onClick:()=>{A(t.path)}}]:(l=[],(F(t.name)||g(t.name))&&l.push({label:v("open"),onClick:()=>{g(t.name)?D(r.value,t):window.open(S(p.value,t.path),"_blank")}}),l.push({label:v("download"),onClick:()=>{C(t.path)}})),_e({x:e.x,y:e.y,items:l})}return(e,t)=>{const l=ve,K=pe,j=Y("tooltip");return n(),a(w,null,[c("div",we,[V(l,{current:e.$t("recent_files")},null,8,["current"]),c("div",ge,[u.value&&M.value?Z((n(),a("button",{key:0,class:"icon-button",onClick:E(L,["stop"])},[ye,V(K)],8,fe)),[[j,e.$t("download")]]):i("",!0),c("label",Ce,[c("md-checkbox",{"touch-target":"wrapper",onChange:B,checked:u.value},null,40,De),m(d(e.$t("select_mode")),1)])])]),c("div",Ie,[o(y).permissions.includes("WRITE_EXTERNAL_STORAGE")?(n(),a("div",Te,[(n(!0),a(w,null,ee(o(r),s=>{var T;return n(),a("div",{key:s.path,class:oe(["file-item",{active:((T=h.value)==null?void 0:T.path)===s.path}]),onClick:k=>U(s),onDblclick:E(k=>O(s),["prevent"]),onContextmenu:k=>G(k,s)},[u.value?(n(),a("md-checkbox",{key:0,"touch-target":"wrapper",checked:s.checked},null,8,Ee)):i("",!0),o(ae)(s.name)||o(ne)(s.name)?(n(),a("img",{key:1,src:o(ce)(s.fileId)+"&w=50&h=50",width:"50",height:"50"},null,8,Fe)):i("",!0),c("div",Se,[m(d(s.name)+" ",1),c("div",Re,[m(d(o(le)(s.updatedAt)),1),s.isDir?i("",!0):(n(),a(w,{key:0},[m(", "+d(o(ie)(s.size)),1)],64))])])],42,Ve)}),128))])):i("",!0),o(r).length===0?(n(),a("div",xe,d(e.$t(o(ke)(o(x),o(y).permissions,"WRITE_EXTERNAL_STORAGE"))),1)):i("",!0)]),h.value?(n(),a("div",Ae,d(e.$t("path"))+": "+d(h.value.path),1)):i("",!0)],64)}}});const Le=me(Ne,[["__scopeId","data-v-0d453c7f"]]);export{Le as default};