(this["webpackJsonprobscheidegger.github.io"]=this["webpackJsonprobscheidegger.github.io"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(20),o=n.n(i),a=(n(28),n(29),n(5)),s=n(6),l=n(8),j=n(7),u=n(15),h="#313D5A",d="#EAEAEA",b={height:70,display:"block",backgroundColor:h},p={textAlign:"center",verticalAlign:"center",height:"100%",padding:10,minHeight:70,backgroundColor:h},O={backgroundColor:"#183642",width:100,display:"inline-block",height:"100vh"},g={width:100,display:"inline-block",color:d,alignContent:"center",textAlign:"center",verticalAlign:"center",paddingTop:10},m=n(21),v=n(23),f=n(1),x=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=function(t){return{textDecoration:"none",margin:"100",backgroundColor:function(t){return t===e.props.current}(t)?"#73528A":h,fontSize:"24px",fontWeight:"bold",height:"100%",color:"#CBC5EA"}},n=y.map((function(e,n){return Object(f.jsx)("span",{style:p,children:Object(f.jsx)(u.b,{to:e.path,style:t(e.name),children:e.display})},n)}));return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{style:b,children:[Object(f.jsx)("span",{style:g,children:Object(f.jsx)(m.a,{icon:v.a,size:"3x",style:{margin:"auto",verticalAlign:"center"}})}),n]}),Object(f.jsxs)("div",{style:{display:"flex"},children:[Object(f.jsx)("div",{style:O}),Object(f.jsx)("div",{style:{flex:1},children:this.props.children})]})]})}}]),n}(r.a.Component),y=[{display:"Home",name:"home",path:"/"},{display:"Education",name:"education",path:"/education"},{display:"Projects",name:"projects",path:"/projects"}],C={margin:5},k=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{style:C,children:this.props.children})}}]),n}(r.a.Component),A={margin:10,backgroundColor:"white",borderRadius:7,padding:20},w=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{style:A,children:this.props.children})}}]),n}(r.a.Component),F={fontSize:30},E=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"slideInFromRight",children:Object(f.jsx)(w,{children:Object(f.jsx)("div",{style:F,children:this.props.title})})})}}]),n}(r.a.Component),N={sql:"yellow",css:"orange"},I=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=N[this.props.name.toLowerCase()];return Object(f.jsx)("span",{style:{color:e},children:this.props.name})}}]),n}(r.a.Component),B=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.project;console.log(e.technologies);var t=e.technologies.map((function(e){return Object(f.jsx)(I,{name:e})}));return Object(f.jsxs)(w,{children:[e.name,t]})}}]),n}(r.a.Component),P=[{name:"NXO",for:"",description:"",image:"",technologies:["sql","css","html"]}],S=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=P.map((function(e,t){return console.log(e,t),Object(f.jsx)(B,{project:e},t)}));return console.log(P),console.log(e),Object(f.jsx)("div",{className:"projects-div",children:Object(f.jsx)(x,{current:"projects",children:Object(f.jsxs)(k,{children:[Object(f.jsx)(E,{title:"Projects"}),Object(f.jsx)("div",{className:"slideInFromBottom",children:e})]})})})}}]),n}(r.a.Component),T=n(3),z=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"projects-div",children:Object(f.jsx)(x,{current:"home",children:Object(f.jsx)("div",{className:"slideInFromRight",children:"Home Tab"})})})}}]),n}(r.a.Component),D={backgroundColor:d,width:"100%",height:"100vh"};var H=function(){return Object(f.jsx)("div",{style:D,children:Object(f.jsx)(u.a,{children:Object(f.jsxs)(T.c,{children:[Object(f.jsx)(T.a,{path:"/",component:z,exact:!0}),Object(f.jsx)(T.a,{path:"/projects",component:S})]})})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))};o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(H,{})}),document.getElementById("root")),L()}},[[41,1,2]]]);
//# sourceMappingURL=main.95475fd5.chunk.js.map