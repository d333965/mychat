import{d as S,r as a}from"./index-w-PaCFxV.js";import{m as l,H as x}from"./index-Chhn-Del.js";l.setOptions({highlight:function(e,s){return x.highlightAuto(e,[s]).value}});const J=S("dify",()=>{const e=a(""),s=a([]),u=a(10);let o=a([]);const r=a(!1);return{user:e,messageList:s,context_length:u,loading:r,sendMessage:async()=>{if(o.value=s.value.slice(-u.value),console.log("lastMessages",o.value),!e.value.trim()||r.value)return;r.value=!0,s.value.push({user:l(e.value),assistant:"加载中..."});const h=e.value;e.value="";try{const t=await fetch("/api/chat/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`历史对话:${JSON.stringify(o.value)}，现在的问题：${h}`,response_mode:"streaming",conversation_id:"",user:"default_user",files:[]})});if(!t.ok){console.error("请求失败:",t.statusText);return}const v=t.body.getReader(),p=new TextDecoder("utf-8");let i="",c="";for(;;){const{done:m,value:y}=await v.read();if(m)break;i+=p.decode(y,{stream:!0});const g=i.split(`

`);i=g.pop(),g.forEach(d=>{if(d.startsWith("data: ")){const f=d.substring(6).trim();if(f)try{const n=JSON.parse(f);n.event==="message"&&n.answer&&(c+=n.answer,s.value[s.value.length-1].assistant=l(c))}catch{console.error("JSON解析错误")}}})}}catch(t){console.error("请求错误:",t)}finally{r.value=!1}}}},{persist:{key:"messageList",paths:["messageList","context_length"]}});export{J as u};