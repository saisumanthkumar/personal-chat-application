(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(27),n=c.n(s),r=c(10),i=c(3),l=c(18),j=c(2),o=c(4),d=c.n(o),h=c(0);var u=function(){var e=Object(i.f)(),t=Object(a.useState)(""),c=Object(j.a)(t,2),s=c[0],n=c[1],o=Object(a.useState)(""),u=Object(j.a)(o,2),b=u[0],p=u[1],O=Object(a.useState)(!0),m=Object(j.a)(O,2),x=m[0],f=m[1];return Object(h.jsxs)("div",{className:"over",children:[Object(h.jsxs)("div",{className:"blur",children:[Object(h.jsx)("div",{className:"middle"}),Object(h.jsx)("div",{className:"topright"}),Object(h.jsx)("div",{className:"bottomleft"})]}),Object(h.jsx)("div",{className:"bg",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),b.length>=8){var c={username:s,password:b};d.a.post("https://chitchat951.herokuapp.com/login",c).then((function(t){200===t.status&&(localStorage.setItem("token",JSON.stringify(Object(l.a)(Object(l.a)({},t.data),{},{timestamp:(new Date).getTime()}))),e.push("/personal-chat-application/user/".concat(t.data.username)))})).catch((function(e){return alert("Please!Check your username and password")}))}else alert("Please!Enter password of length 8 or greater")},children:[Object(h.jsx)("input",{type:"text",placeholder:"Username",value:s,required:!0,onChange:function(e){n(e.target.value)}}),Object(h.jsxs)("div",{className:"pass",children:[Object(h.jsx)("input",{type:"password",placeholder:"Password",id:"password",value:b,required:!0,onChange:function(e){p(e.target.value)}}),Object(h.jsx)("div",{className:"showhide",children:Object(h.jsx)("button",{onClick:function(e){e.preventDefault(),f(!x);var t=document.getElementById("password");t.type=x?"text":"password"},children:x?"SHOW":"HIDE"})})]}),Object(h.jsxs)("p",{children:["Don't have an account?",Object(h.jsx)(r.b,{to:"/personal-chat-application/signup",children:" Sign up"})]}),Object(h.jsx)("button",{children:"Login"})]})})})]})};var b=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),l=Object(j.a)(n,2),o=l[0],u=l[1],b=Object(a.useState)(""),p=Object(j.a)(b,2),O=p[0],m=p[1],x=Object(a.useState)(""),f=Object(j.a)(x,2),v=f[0],g=f[1],N=Object(i.f)(),S=Object(a.useState)([]),C=Object(j.a)(S,2),k=C[0],w=C[1],y=Object(a.useState)(!0),E=Object(j.a)(y,2),I=E[0],L=E[1],U=Object(a.useState)(!0),B=Object(j.a)(U,2),D=B[0],A=B[1];return Object(a.useEffect)((function(){d.a.get("https://chitchat951.herokuapp.com/users").then((function(e){return w(e.data)}))}),[]),Object(h.jsxs)("div",{className:"over",children:[Object(h.jsxs)("div",{className:"blur",children:[Object(h.jsx)("div",{className:"middle"}),Object(h.jsx)("div",{className:"topright"}),Object(h.jsx)("div",{className:"bottomleft"})]}),Object(h.jsx)("div",{className:"bg",children:Object(h.jsx)("div",{className:"container signup",children:Object(h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),k.includes(o))alert("User already exists");else if(O.length>=8)if(O===v){var t={name:c,username:o,password:O};d.a.post("https://chitchat951.herokuapp.com/addUser",t),alert("successfully created a account"),N.push("/personal-chat-application/")}else alert("password and confirm password should be same");else alert("Please!Enter password of length 8 or greater")},children:[Object(h.jsx)("input",{type:"text",value:c,placeholder:"Name",required:!0,onChange:function(e){s(e.target.value)}}),Object(h.jsx)("input",{type:"text",value:o,placeholder:"Username",required:!0,onChange:function(e){u(e.target.value)}}),Object(h.jsxs)("div",{className:"pass",children:[Object(h.jsx)("input",{type:"password",value:O,placeholder:"Password",id:"password",required:!0,onChange:function(e){m(e.target.value)}}),Object(h.jsx)("div",{className:"showhide",children:Object(h.jsx)("button",{onClick:function(e){e.preventDefault(),L(!I);var t=document.getElementById("password");t.type=I?"text":"password"},children:I?"SHOW":"HIDE"})})]}),Object(h.jsxs)("div",{className:"pass",children:[Object(h.jsx)("input",{type:"password",id:"password2",value:v,placeholder:"Confirm password",required:!0,onChange:function(e){g(e.target.value)}}),Object(h.jsx)("div",{className:"showhide",children:Object(h.jsx)("button",{onClick:function(e){e.preventDefault(),A(!D);var t=document.getElementById("password2");t.type=D?"text":"password"},children:D?"SHOW":"HIDE"})})]}),Object(h.jsxs)("p",{children:["Already have an account ?",Object(h.jsx)(r.b,{to:"/personal-chat-application/",children:" Log In"})]}),Object(h.jsx)("button",{children:"Signup"})]})})})]})},p=c.p+"static/media/chatting.6a5f05a6.jpg",O=c(17);var m=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!0),r=Object(j.a)(n,2),l=r[0],o=r[1],u=JSON.parse(localStorage.getItem("token")),b=Object(a.useState)([]),m=Object(j.a)(b,2),x=m[0],f=m[1],v=Object(a.useState)([]),g=Object(j.a)(v,2),N=g[0],S=g[1],C=Object(a.useState)(!0),k=Object(j.a)(C,2),w=(k[0],k[1]),y=Object(a.useState)(""),E=Object(j.a)(y,2),I=E[0],L=E[1],U=Object(a.useState)(""),B=Object(j.a)(U,2),D=B[0],A=B[1],P=Object(a.useState)(""),H=Object(j.a)(P,2),M=H[0],T=H[1],q=Object(a.useState)([]),R=Object(j.a)(q,2),G=R[0],J=R[1],F=Object(a.useState)(!1),W=Object(j.a)(F,2),_=W[0],z=W[1],K=Object(a.useState)([]),Q=Object(j.a)(K,2),V=Q[0],X=Q[1],Y=Object(a.useState)(!1),Z=Object(j.a)(Y,2),$=Z[0],ee=Z[1],te=Object(a.useState)(!1),ce=Object(j.a)(te,2),ae=ce[0],se=ce[1],ne=Object(a.useState)(1),re=Object(j.a)(ne,2),ie=re[0],le=re[1];Object(i.f)(),Object(a.useEffect)((function(){d.a.post("https://chitchat951.herokuapp.com/getUsersChatData",{id:u.id}).then((function(e){return f(e.data.data)})),o(!1)}),[ie]);var je=function(e){var t=e.currentTarget.id;s(t),d.a.post("https://chitchat951.herokuapp.com/participants",{id:t}).then((function(e){return X(e.data)}));var c=e.currentTarget.className;T(c),d.a.post("https://chitchat951.herokuapp.com/getUsersChatMessages",{id:t}).then((function(e){return S(e.data)})),w(!1),oe()};Object(a.useEffect)((function(){d.a.get("https://chitchat951.herokuapp.com/users").then((function(e){return J(e.data)}))}),[ie]);var oe=function(){var e=document.getElementById("leftdup");e.style.width=ae?"0%":"100%",se(!ae)};return!0===l?Object(h.jsx)("h1",{children:"Loading..."}):Object(h.jsxs)("div",{className:"main",children:[Object(h.jsxs)("div",{className:"allChatsButton",onClick:oe,children:[Object(h.jsx)("span",{children:Object(h.jsx)(O.a,{})}),Object(h.jsx)("button",{children:"All Chats"})]}),_&&Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"modal",children:[Object(h.jsx)("button",{onClick:function(){return z(!_)},children:"Close "}),Object(h.jsx)("h3",{children:"ALL USERS"}),G.map((function(e){return Object(h.jsx)("p",{children:e})}))]})}),$&&Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"modal",children:[Object(h.jsx)("button",{onClick:function(){return ee(!$)},children:"Close"}),Object(h.jsx)("h3",{children:"ALL USERS"}),V.map((function(e){return Object(h.jsx)("p",{children:e})}))]})}),Object(h.jsx)("div",{className:"topeff"}),Object(h.jsxs)("div",{className:"messages",children:[Object(h.jsxs)("div",{className:"left",id:"left",children:[Object(h.jsx)("div",{className:"closebutton",children:Object(h.jsx)("button",{onClick:oe,children:Object(h.jsx)("p",{children:"Close"})})}),Object(h.jsxs)("div",{className:"all",onClick:function(){return z(!_)},children:[Object(h.jsx)("em",{children:"ALL GLOBAL USERS"})," ",Object(h.jsx)("span",{children:G.length})]}),Object(h.jsx)("h2",{children:"All Chats"}),x.map((function(e){return Object(h.jsx)("button",{id:e.chatId,className:e.chatname,onClick:je,children:Object(h.jsx)("p",{children:e.chatname})},e.chatId)}))]}),Object(h.jsxs)("div",{className:"leftdup",id:"leftdup",children:[Object(h.jsx)("div",{className:"closebutton",children:Object(h.jsx)("button",{onClick:oe,children:Object(h.jsx)("p",{children:"Close"})})}),Object(h.jsxs)("div",{className:"all",onClick:function(){return z(!_)},children:[Object(h.jsx)("em",{children:"ALL GLOBAL USERS"})," ",Object(h.jsx)("span",{children:G.length})]}),Object(h.jsx)("h2",{children:"All Chats"}),x.map((function(e){return Object(h.jsx)("button",{id:e.chatId,className:e.chatname,onClick:je,children:e.chatname},e.chatId)}))]}),Object(h.jsxs)("div",{className:"right",id:"right",children:[Boolean(!c)&&Object(h.jsxs)("div",{className:"intro",children:[Object(h.jsx)("img",{src:p,alt:""}),Object(h.jsxs)("div",{className:"tetx",children:[Object(h.jsx)("h1",{children:Object(h.jsxs)("em",{children:[" Welcome to ",Object(h.jsx)("span",{children:" CHAT Messenger "})]})}),Object(h.jsx)("p",{children:"Share with your friends and start texting..."})]})]}),Boolean(c)&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"head",children:[Object(h.jsx)("h2",{children:M}),Object(h.jsxs)("p",{onClick:function(){ee(!$)},children:[V.length," Users"]})]}),Object(h.jsxs)("div",{className:"addUser",children:[Object(h.jsxs)("div",{className:"auut",children:[Object(h.jsx)("input",{type:"text",value:I,placeholder:"Type username...",onChange:function(e){return L(e.target.value)}}),Object(h.jsx)("button",{onClick:function(){if(I){var e={id:c,username:I};d.a.post("https://chitchat951.herokuapp.com/addUserToChat",e).then((function(e){alert(e.data.msg),console.log(e)})),L("")}},children:"add user"})]}),Object(h.jsx)("div",{className:"refresh",children:Object(h.jsx)("button",{onClick:function(){o(!0),w(!0),d.a.post("https://chitchat951.herokuapp.com/participants",{id:c}).then((function(e){return X(e.data)})),d.a.post("https://chitchat951.herokuapp.com/getUsersChatMessages",{id:c}).then((function(e){return S(e.data)})),le(ie+1),w(!1),o(!1)},children:"Refresh"})}),Object(h.jsx)("div",{className:"refreshChat",children:Object(h.jsx)("button",{onClick:function(){o(!0),d.a.post("https://chitchat951.herokuapp.com/getUsersChatData",{id:u.id}).then((function(e){return f(e.data.data)})),o(!1)},children:"Refresh Chats"})})]})]}),Object(h.jsxs)("div",{className:"allMessages",children:[N.map((function(e){return Object(h.jsxs)("div",{className:u.username===e.username?"sentmess":"message",children:[Object(h.jsxs)("p",{className:"username",children:[e.username," "]}),Object(h.jsx)("p",{className:"messmain",children:e.msg})]},e._id)})),Boolean(c)&&Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"sendMessage",children:Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{type:"text",placeholder:"Type a message...",value:D,onChange:function(e){return A(e.target.value)}}),Object(h.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),D&&(document.getElementById("right"),d.a.post("https://chitchat951.herokuapp.com/sendMessage",{id:c,username:u.username,msg:D}),A(""),d.a.post("https://chitchat951.herokuapp.com/getUsersChatMessages",{id:c}).then((function(e){return S(e.data)})))},children:"Send"})]})})}),Object(h.jsx)("div",{id:"last"})]}),Boolean(c)&&Object(h.jsx)("div",{className:"boticon",children:Object(h.jsx)("a",{href:"#last",children:Object(h.jsx)(O.b,{})})})]})]})]})};var x=function(){var e=Object(a.useState)({}),t=Object(j.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),r=Object(j.a)(n,2),l=(r[0],r[1]),o=Object(a.useState)(""),u=Object(j.a)(o,2),b=u[0],p=u[1],O=Object(i.f)();return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("token"));s(e),d.a.post("https://chitchat951.herokuapp.com/userData",e).then((function(e){"success"===e.data.type?l(e.data.msg):(alert(e.data.msg),O.push("/personal-chat-application/"))}))}),[]),Object(h.jsxs)("div",{className:"body",children:[Object(h.jsxs)("div",{className:"createChat",children:[Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("input",{type:"text",value:b,placeholder:"start a new chat",onChange:function(e){return p(e.target.value)}}),Object(h.jsx)("button",{onClick:function(){if(""!==b){var e={chatname:b,username:c.username};d.a.post("https://chitchat951.herokuapp.com/createChat",e),alert("successfully created chat ".concat(b)),p("")}},children:"Create Chat"})]}),Object(h.jsx)("div",{className:"logout",children:Object(h.jsx)("button",{onClick:function(){localStorage.removeItem("token"),O.push("/personal-chat-application/")},children:"Logout"})})]}),Object(h.jsx)(m,{})]})};c(60),c(61);var f=function(){return Object(h.jsxs)("div",{className:"error",children:[Object(h.jsx)("p",{children:"\ud83d\ude25\ud83d\ude25\ud83d\ude25"}),Object(h.jsx)("h1",{children:"Error 404-Page not found"}),Object(h.jsx)("h3",{children:"Please Go Back"}),Object(h.jsx)(r.b,{to:"/personal-chat-application/",children:"LOGIN"}),Object(h.jsx)(r.b,{to:"/personal-chat-application/signup",children:"SIGNUP"})]})};var v=function(){return Object(h.jsx)("div",{className:"main",children:Object(h.jsx)(r.a,{children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{path:"/personal-chat-application/",exact:!0,component:u}),Object(h.jsx)(i.a,{path:"/personal-chat-application/signup",component:b}),Object(h.jsx)(i.a,{path:"/personal-chat-application/user/:id",component:x}),Object(h.jsx)(i.a,{path:"*",component:f})]})})})};n.a.render(Object(h.jsx)(v,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.63d216af.chunk.js.map