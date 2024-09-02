import{d as z,r as w,_ as b,a as s,o as u,c as I,w as o,b as y,e as g,f as e,g as f,t as H,u as h,F as k,E as G,h as E,i as W,j as M,k as V,n as Q,l as J,m as D,p as X,q as Y,s as Z,v as ee,x as te,y as U,z as ne,A as oe,T as se,B as ae}from"./index-yVdOe17l.js";import{u as x}from"./github-markdown-DOik8O1s.js";import"./index-DAlipLh-.js";const T=z("history",()=>{const d=x(),t=w([]);return{windowId:w(),history:t,addConversationToHistory:()=>{const r={id:Date.now(),messageList:JSON.parse(JSON.stringify(d.messageList))};t.value.push(r)},deleteConversation:l=>{const r=t.value.findIndex(p=>p.id===l);r!==-1&&t.value.splice(r,1)},deleteAll:()=>{t.value=[]}}},{persist:{key:"HistoryTalk",paths:["windowId","history"]}}),le={__name:"newChat_btn",setup(d){const t=T(),n=x(),i=()=>{const c=t.history.find(a=>a.id===t.windowId);if(c&&n.messageList.length>0&&(c.messageList=JSON.parse(JSON.stringify(n.messageList))),n.messageList.length>0){const a=Date.now();t.windowId=a,t.history.push({id:a,messageList:[]}),n.messageList=[]}};return(c,a)=>{const l=s("el-button");return u(),I(l,{color:"black",class:"btn",onClick:i},{default:o(()=>[y("新建聊天")]),_:1})}}},ie=b(le,[["__scopeId","data-v-38120186"]]),ce={class:"window",style:{position:"relative"}},re={class:"text"},de={__name:"window",props:{content:String,historyId:String},setup(d){const t=d,n=T();function i(a){const l=document.createElement("div");return l.innerHTML=a,l.textContent||l.innerText||""}function c(){n.deleteConversation(t.historyId)}return(a,l)=>{const r=s("ChatDotSquare"),p=s("el-icon"),_=s("Delete");return u(),g("p",ce,[e(p,{class:"ChatDotSquare"},{default:o(()=>[e(r)]),_:1}),f("span",re,H(i(d.content)),1),e(p,{class:"Delete",onClick:c},{default:o(()=>[e(_)]),_:1})])}}},_e=b(de,[["__scopeId","data-v-a99f6aaa"]]),j=""+new URL("user-DsFVknIh.png",import.meta.url).href,ue={class:"container"},pe=f("img",{src:j,class:"user-image"},null,-1),me=f("span",{class:"welcome-text"},"欢迎使用mychat",-1),fe={class:"dialog-footer"},ge={__name:"footer",setup(d){const t=T(),n=x(),i=w(!1),c=w("gpt-4o");function a(){i.value=!0}function l(){G.confirm("确定要删除所有对话记录吗？此操作不可撤销。","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(()=>{r(),E({type:"success",message:"对话记录已删除"})}).catch(()=>{E({type:"info",message:"已取消删除"})})}function r(){t.deleteAll(),t.windowId=Date.now(),t.history.push({id:t.windowId,messageList:[]}),n.messageList=[]}return(p,_)=>{const m=s("el-icon"),C=s("Setting"),L=s("el-dropdown-item"),v=s("el-dropdown-menu"),$=s("el-dropdown"),N=s("el-input-number"),A=s("el-form-item"),O=s("el-option"),q=s("el-select"),K=s("el-form"),B=s("el-button"),R=s("el-dialog");return u(),g(k,null,[f("div",ue,[pe,me,e(m,{class:"Setting"}),e($,null,{dropdown:o(()=>[e(v,null,{default:o(()=>[e(L,{onClick:a},{default:o(()=>[y("模型设置")]),_:1}),e(L,{onClick:l},{default:o(()=>[y("删除对话记录")]),_:1}),e(L,{divided:"",disabled:""},{default:o(()=>[y("登录")]),_:1})]),_:1})]),default:o(()=>[e(m,{class:"Setting"},{default:o(()=>[e(C)]),_:1})]),_:1})]),e(R,{modelValue:i.value,"onUpdate:modelValue":_[4]||(_[4]=S=>i.value=S),title:"模型设置",center:"",class:"modelDialog"},{footer:o(()=>[f("span",fe,[e(B,{onClick:_[2]||(_[2]=S=>i.value=!1)},{default:o(()=>[y("取消")]),_:1}),e(B,{type:"primary",onClick:_[3]||(_[3]=S=>i.value=!1)},{default:o(()=>[y("确认")]),_:1})])]),default:o(()=>[e(K,{model:p.form},{default:o(()=>[e(A,{label:"上下文联系条数"},{default:o(()=>[e(N,{modelValue:h(n).context_length,"onUpdate:modelValue":_[0]||(_[0]=S=>h(n).context_length=S),min:0,max:25},null,8,["modelValue"])]),_:1}),e(A,{label:"模型选择"},{default:o(()=>[e(q,{modelValue:c.value,"onUpdate:modelValue":_[1]||(_[1]=S=>c.value=S),placeholder:"选择默认模型",disabled:""},{default:o(()=>[e(O,{label:"gpt-4o-mini",value:"shanghai"}),e(O,{label:"gpt-4o",value:"beijing"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}},he={__name:"sidebar",setup(d){const t=T(),n=x(),i=W(()=>[...t.history].reverse()),c=a=>{if(t.history.find(r=>r.id===t.windowId)){const r=t.history.find(p=>p.id===t.windowId);r&&(r.messageList=JSON.parse(JSON.stringify(n.messageList)))}else{const r={id:t.windowId,messageList:JSON.parse(JSON.stringify(n.messageList))};t.history.push(r)}t.windowId=a;const l=t.history.find(r=>r.id===a);l&&(n.messageList=JSON.parse(JSON.stringify(l.messageList)))};return M(()=>{n.messageList.length>0&&(t.deleteConversation(t.windowId),t.history.push({id:t.windowId,messageList:n.messageList}));const a=t.history.find(l=>l.messageList.length===0);a?(t.windowId=a.id,n.messageList=a.messageList):(t.windowId=Date.now(),t.history.push({id:t.windowId,messageList:[]}),n.messageList=[])}),(a,l)=>{const r=s("el-header"),p=s("el-main"),_=s("el-footer"),m=s("DArrowLeft"),C=s("el-icon"),L=s("el-container");return u(),I(L,{style:{position:"relative"}},{default:o(()=>[e(r,{style:{padding:"0"},height:"40px"},{default:o(()=>[e(ie)]),_:1}),e(p,{style:{padding:"0"}},{default:o(()=>[(u(!0),g(k,null,V(i.value,v=>{var $;return u(),g("div",{key:v.id},[e(_e,{content:($=v.messageList[0])!=null&&$.user?v.messageList[0].user:"新建聊天",historyId:v.id,onClick:N=>c(v.id),style:Q({backgroundColor:h(t).windowId===v.id?"#dadada":"",color:h(t).windowId===v.id?"#058a2d":""})},null,8,["content","historyId","onClick","style"])])}),128))]),_:1}),e(_,{style:{padding:"0"}},{default:o(()=>[e(ge)]),_:1}),e(C,{class:"DArrowLeft",onClick:l[0]||(l[0]=v=>a.$emit("toggleSidebar"))},{default:o(()=>[e(m)]),_:1})]),_:1})}}},ve=b(he,[["__scopeId","data-v-7236ef1f"]]),we=[{version:"2.0.3",updateMessage:"支持保存对话历史",updateTime:"2024.8.22"},{version:"2.0.2",updateMessage:"完成AI对话",updateTime:"2024.8.22"},{version:"2.0.1",updateMessage:"继续完善基本框架",updateTime:"2024.8.20"},{version:"2.0.0",updateMessage:"重新构建mychat2.0界面",updateTime:"2024.8.19"}],P={Logs:we},ye={__name:"update",setup(d){const t=P.Logs.map(n=>({version:n.version,updateMessage:n.updateMessage,updateTime:n.updateTime}));return(n,i)=>{const c=s("el-tag"),a=s("el-table-column"),l=s("el-table"),r=s("el-popover");return u(),I(r,{placement:"bottom",width:360,trigger:"click"},{reference:o(()=>[e(c,{class:"tag",type:"success",round:""},{default:o(()=>[y(H(h(P).Logs[0].version)+"更新日志",1)]),_:1})]),default:o(()=>[e(l,{data:h(t),"max-height":240},{default:o(()=>[e(a,{width:"60",property:"version",label:"版本"}),e(a,{width:"180",property:"updateMessage",label:"日志"}),e(a,{width:"",property:"updateTime",label:"时间"})]),_:1},8,["data"])]),_:1})}}},be=b(ye,[["__scopeId","data-v-8c2a70d9"]]),Se={style:{position:"relative"}},xe={class:"title"},Le={__name:"headbar",setup(d){return(t,n)=>{const i=s("Expand"),c=s("el-icon");return u(),g("div",Se,[e(c,{class:"Fold",onClick:n[0]||(n[0]=a=>t.$emit("toggleSidebar"))},{default:o(()=>[e(i)]),_:1}),f("span",xe,[y("MyChat2.0 "),e(be)])])}}},Ie=b(Le,[["__scopeId","data-v-5754acfd"]]),Ce={class:"user-container"},$e=["innerHTML"],ke=f("img",{src:j,alt:"user",class:"userImg"},null,-1),Te={__name:"user",props:{content:String},setup(d){return(t,n)=>{const i=s("el-card");return u(),g("div",Ce,[e(i,{class:"userCard"},{default:o(()=>[f("p",{innerHTML:d.content,class:"markdown-body"},null,8,$e)]),_:1}),ke])}}},De=""+new URL("assistant-Cj6uNKMB.jpg",import.meta.url).href,He={class:"assistant-container"},Me=f("img",{src:De,alt:"assistant",class:"assistantImg"},null,-1),Ve=["innerHTML"],Ne={__name:"assistant",props:{content:String},setup(d){return(t,n)=>{const i=s("el-card");return u(),g("div",He,[Me,e(i,{class:"assistantCard"},{default:o(()=>[f("p",{innerHTML:d.content,class:"markdown-body"},null,8,Ve)]),_:1})])}}};function Ae(){const d=w(null);let t=!0;const n=()=>{const c=d.value;c.scrollTop=c.scrollHeight-c.clientHeight},i=()=>{const c=d.value;c.scrollHeight-c.clientHeight-5<=c.scrollTop?t=!0:t=!1};return M(()=>{const c=d.value;new MutationObserver(()=>{t&&J(()=>{n()})}).observe(c,{childList:!0,subtree:!0}),J(()=>{n()})}),{chatContainer:d,handleScroll:i}}const Oe={__name:"mainPart",setup(d){const{chatContainer:t,handleScroll:n}=Ae(),i=x();return(c,a)=>(u(),g("div",{class:"chat-container",ref_key:"chatContainer",ref:t,onScroll:a[0]||(a[0]=(...l)=>h(n)&&h(n)(...l))},[(u(!0),g(k,null,V(h(i).messageList,(l,r)=>(u(),g("div",{key:r},[e(Te,{content:l.user},null,8,["content"]),e(Ne,{content:l.assistant},null,8,["content"])]))),128))],544))}},Be=b(Oe,[["__scopeId","data-v-9f1339db"]]),Ee={class:"icon-text-container"},Je={__name:"footbar",setup(d){const t=[{icon:Y,text:"聊天"},{icon:Z,text:"GPTs"},{icon:ee,text:"绘画"},{icon:te,text:"更多"}],n=w(0),i=c=>{n.value=c};return(c,a)=>{const l=s("el-icon"),r=s("el-col"),p=s("el-row");return u(),I(p,null,{default:o(()=>[(u(),g(k,null,V(t,(_,m)=>e(r,{key:m,span:6,class:D(["center-content",{active:n.value===m}]),onClick:C=>i(m)},{default:o(()=>[f("div",Ee,[e(l,{class:D({"active-icon":n.value===m})},{default:o(()=>[(u(),I(X(_.icon)))]),_:2},1032,["class"]),f("div",{class:D([{"active-text":n.value===m},"icon-text"])},H(_.text),3)])]),_:2},1032,["onClick","class"])),64))]),_:1})}}},F=b(Je,[["__scopeId","data-v-fd3f3600"]]),Pe={class:"input-container"},Fe=["disabled"],Ue={__name:"inputbar",setup(d){const t=w(null),n=()=>{const a=t.value;a.style.height="40px",a.style.height=`${a.scrollHeight}px`};M(()=>{n()});const i=x(),c=a=>{if(!a.shiftKey){i.sendMessage();const l=t.value;l.style.height="40px"}};return(a,l)=>{const r=s("Promotion"),p=s("el-icon"),_=s("Paperclip");return u(),g("div",Pe,[U(f("textarea",{placeholder:"请输入问题 按Enter发送/Shift+Enter换行",class:"inputstyle",onInput:n,ref_key:"textarea",ref:t,"onUpdate:modelValue":l[0]||(l[0]=m=>h(i).user=m),onKeyup:oe(c,["enter"])},null,544),[[ne,h(i).user]]),f("button",{class:"send-button",onClick:c,disabled:h(i).loading},[e(p,null,{default:o(()=>[e(r)]),_:1})],8,Fe),e(p,{class:"Paperclip"},{default:o(()=>[e(_)]),_:1})])}}},je=b(Ue,[["__scopeId","data-v-ca95dd4a"]]),qe={class:"common-layout"},Ge={__name:"home",setup(d){const t=w(!1),n=w(null);function i(){t.value=!t.value}return(c,a)=>{const l=s("el-aside"),r=s("el-header"),p=s("el-main"),_=s("el-footer"),m=s("el-container");return u(),g("div",qe,[e(m,null,{default:o(()=>[e(l,{class:"menu"},{default:o(()=>[e(F)]),_:1}),e(se,{name:"slide-fade"},{default:o(()=>[U(e(l,{class:"sidebar",ref_key:"sidebarRef",ref:n},{default:o(()=>[e(ve,{onToggleSidebar:i})]),_:1},512),[[ae,t.value]])]),_:1}),e(m,null,{default:o(()=>[e(r,{class:"headbar"},{default:o(()=>[e(Ie,{onToggleSidebar:i})]),_:1}),e(p,{class:"mainPart"},{default:o(()=>[e(Be)]),_:1}),e(je),e(_,{class:"footbar"},{default:o(()=>[e(F)]),_:1})]),_:1})]),_:1})])}}};export{Ge as default};