import{e as i,B as a,C as l,u as s,g as o,D as u,F as p,k as _,o as r}from"./index-BMQKB9sD.js";import{u as m}from"./github-markdown-DD8Rjea5.js";import"./index--Xy__VpN.js";const M=o("h1",null,"AI 对话",-1),f=["disabled"],g=["disabled"],c=["innerHTML"],y=["innerHTML"],v={__name:"dify",setup(b){const e=m();return(k,t)=>(r(),i("div",null,[M,a(o("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>s(e).user=n),placeholder:"输入你的问题",onKeyup:t[1]||(t[1]=u((...n)=>s(e).sendMessage&&s(e).sendMessage(...n),["enter"])),disabled:s(e).loading},null,40,f),[[l,s(e).user]]),o("button",{onClick:t[2]||(t[2]=(...n)=>s(e).sendMessage&&s(e).sendMessage(...n)),disabled:s(e).loading},"发送",8,g),(r(!0),i(p,null,_(s(e).messageList,(n,d)=>(r(),i("div",{key:d},[o("p",{innerHTML:n.user},null,8,c),o("p",{innerHTML:n.assistant,class:"markdown-body"},null,8,y)]))),128))]))}};export{v as default};
