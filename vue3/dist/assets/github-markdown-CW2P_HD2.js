import{d as m,r as o}from"./index--efjRUtn.js";import{m as g,H as x}from"./index-D2OlA33j.js";const I=m("AIconfig",()=>{const e=o("你好，请随时向我提问"),s=t=>{e.value=t},n=o("/src/assets/img/assistant.jpg"),l=t=>{n.value=t},a=o("gpt4o"),d=t=>{a.value=t},i=o("/chat/");return{url:i,setUrl:t=>{i.value=t},AImodel:a,setAImodel:d,AIphoto:n,setAIphoto:l,prologue:e,setprologue:s}}),w=I();g.setOptions({highlight:function(e,s){return x.highlightAuto(e,[s]).value}});const J=m("dify",()=>{const e=o(""),s=o([]),n=o(10);let l=o([]);const a=o(!1);return{user:e,messageList:s,context_length:n,loading:a,sendMessage:async()=>{if(l.value=s.value.slice(-n.value),console.log("lastMessages",l.value),!e.value.trim()||a.value)return;a.value=!0,s.value.push({user:g(e.value),assistant:"加载中..."});const i=e.value;e.value="";try{const r=await fetch(`/api${w.url}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`历史对话:${JSON.stringify(l.value)}，现在的问题：${i}`,response_mode:"streaming",conversation_id:"",user:"default_user",files:[]})});if(!r.ok){console.error("请求失败:",r.statusText);return}const t=r.body.getReader(),y=new TextDecoder("utf-8");let c="",f="";for(;;){const{done:S,value:A}=await t.read();if(S)break;c+=y.decode(A,{stream:!0});const h=c.split(`

`);c=h.pop(),h.forEach(p=>{if(p.startsWith("data: ")){const v=p.substring(6).trim();if(v)try{const u=JSON.parse(v);u.event==="message"&&u.answer&&(f+=u.answer,s.value[s.value.length-1].assistant=g(f))}catch{console.error("JSON解析错误")}}})}}catch(r){console.error("请求错误:",r)}finally{a.value=!1}}}},{persist:{key:"messageList",paths:["messageList","context_length"]}});export{I as a,J as u};
