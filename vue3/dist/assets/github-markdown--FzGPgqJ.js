import{d as m,r as o}from"./index-kUCnM5CB.js";import{m as g,H as A}from"./index-C4A4NB5u.js";const x=m("AIconfig",()=>{const e=o("你好，请随时向我提问"),t=s=>{e.value=s},n=o("http://www.mychat.ink/api/img/chat.jpg"),l=s=>{n.value=s},a=o("gpt4o"),h=s=>{a.value=s},i=o("/chat/");return{url:i,setUrl:s=>{i.value=s},AImodel:a,setAImodel:h,AIphoto:n,setAIphoto:l,prologue:e,setprologue:t}}),I=x();g.setOptions({highlight:function(e,t){return A.highlightAuto(e,[t]).value}});const k=m("dify",()=>{const e=o(""),t=o([]),n=o(10);let l=o([]);const a=o(!1);return{user:e,messageList:t,context_length:n,loading:a,sendMessage:async()=>{if(l.value=t.value.slice(-n.value),console.log("lastMessages",l.value),!e.value.trim()||a.value)return;a.value=!0,t.value.push({user:g(e.value),assistant:"加载中..."});const i=e.value;e.value="";try{const r=await fetch(`/api${I.url}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`历史对话:${JSON.stringify(l.value)}，现在的问题：${i}`,response_mode:"streaming",conversation_id:"",user:"default_user",files:[]})});if(!r.ok){console.error("请求失败:",r.statusText);return}const s=r.body.getReader(),y=new TextDecoder("utf-8");let u="",d="";for(;;){const{done:S,value:w}=await s.read();if(S)break;u+=y.decode(w,{stream:!0});const f=u.split(`

`);u=f.pop(),f.forEach(p=>{if(p.startsWith("data: ")){const v=p.substring(6).trim();if(v)try{const c=JSON.parse(v);c.event==="message"&&c.answer&&(d+=c.answer,t.value[t.value.length-1].assistant=g(d))}catch{console.error("JSON解析错误")}}})}}catch(r){console.error("请求错误:",r)}finally{a.value=!1}}}},{persist:{key:"messageList",paths:["messageList","context_length"]}});export{x as a,k as u};