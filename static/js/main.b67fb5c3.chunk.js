(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(e,t,n){e.exports={block:"Filter_block__3Xjsh",label:"Filter_label__21cjQ",input:"Filter_input__BZtNV"}},21:function(e,t,n){e.exports={list:"ContactList_list__YxCpL",item:"ContactList_item__1Rd21"}},22:function(e,t,n){e.exports={name:"ContactEl_name__1aFzG",number:"ContactEl_number__HltMP"}},30:function(e,t,n){e.exports={section:"Section_section__BT2pb"}},31:function(e,t,n){e.exports={IconButton:"IconButton_IconButton__3Mak5"}},32:function(e,t,n){e.exports={block:"PhonebookView_block__1Sl9Q"}},43:function(e,t,n){},54:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=n(0),o=n.n(r),i=n(12),l=n.n(i),u=n(3),s=n(26),b=(n(43),n(14)),j=n(5),d=n(6),f=n(27),m=n.n(f),O=n(28),p=n.n(O),h=n(8),v=n(2),x=n(29),_=n.n(x),g=Object(j.b)("pnoneBook/add",(function(e){return{payload:{id:_.a.generate(),data:e}}})),C=Object(j.b)("pnoneBook/delete"),y=Object(j.b)("pnoneBook/changeFilter"),k=Object(j.c)([],(c={},Object(h.a)(c,g,(function(e,t){var n=t.payload;return[].concat(Object(b.a)(e),[n])})),Object(h.a)(c,C,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),c)),N=Object(j.c)("",Object(h.a)({},y,(function(e,t){return t.payload}))),w=Object(v.c)({items:k,filter:N}),F=[].concat(Object(b.a)(Object(j.d)({serializableCheck:{ignoredActions:[d.a,d.f,d.b,d.c,d.d,d.e]}})),[p.a]),B={key:"contacts",storage:m.a,blacklist:["filter"]},P=Object(j.a)({reducer:{phoneBook:Object(d.g)(B,w)},middleware:F,devTools:!1}),E=Object(d.h)(P),S=(n(54),n(4)),I=n.n(S),T=n(30),M=n.n(T);function L(e){var t=e.title,n=e.children;return Object(a.jsxs)("div",{className:M.a.section,children:[Object(a.jsx)("h1",{children:t}),n]})}L.protoType={children:I.a.node,title:I.a.string};var z=L,A=n(24),D=(n(55),n(56),n(9)),H=function(e){return e.phoneBook.items},V=function(e){return e.phoneBook.filter},Q=function(e){var t=H(e),n=V(e).toLowerCase();return t.filter((function(e){return e.data.name.includes(n)}))},R=n(7),J=n.n(R);function G(){var e=Object(r.useState)(""),t=Object(A.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),i=Object(A.a)(o,2),l=i[0],s=i[1],b=Object(u.c)(H),j=Object(u.b)(),d=function(){c(""),s("")};return Object(a.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===n)return Object(D.error)({title:"Error",text:"Please eneter name!"});if(""===l)return Object(D.error)({title:"Error",text:"Please eneter number!"});var t=null===b||void 0===b?void 0:b.find((function(e){return e.data.name===n}));return console.log(b),t?(null===t||void 0===t?void 0:t.data.name)===n?(d(),Object(D.notice)({title:"Notice",text:"".concat(n," is already in contacts.")})):void 0:(j(g({name:n,number:l})),void d())},className:J.a.form,children:[Object(a.jsx)("label",{className:J.a.name,children:"Name"}),Object(a.jsx)("input",{className:J.a.inputName,type:"text",name:"name",value:n,autoComplete:"off",onChange:function(e){return c(e.target.value)}}),Object(a.jsx)("label",{className:J.a.number,children:"Number"}),Object(a.jsx)("input",{className:J.a.inputNumber,type:"tel",name:"number",value:l,autoComplete:"off",onChange:function(e){return s(e.target.value)}}),Object(a.jsx)("button",{type:"submit",className:J.a.btn,children:"Add contact"})]})}D.defaults.delay=3e3;var X=n(21),Y=n.n(X),Z=n(22),q=n.n(Z);var K=function(e){var t=e.contact;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{className:q.a.name,children:[t.data.name,": "]}),Object(a.jsx)("span",{className:q.a.number,children:t.data.number})]})},U=n(23),W=n(33),$=n(31),ee=n.n($),te=function(e){var t=e.children,n=e.onClick,c=Object(W.a)(e,["children","onClick"]);return Object(a.jsx)("button",Object(U.a)(Object(U.a)({type:"button",className:ee.a.IconButton,onClick:n},c),{},{children:t}))};te.defaultProps={onClick:function(){return null},children:null};var ne=te;function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var re=r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),oe=r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"});function ie(e,t){var n=e.title,c=e.titleId,a=ae(e,["title","titleId"]);return r.createElement("svg",ce({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,re,oe)}var le=r.forwardRef(ie);n.p;function ue(){var e=Object(u.c)(Q),t=Object(u.b)();return Object(a.jsx)("ul",{className:Y.a.list,children:e&&e.map((function(e){return Object(a.jsxs)("li",{className:Y.a.item,children:[Object(a.jsx)(K,{contact:e}),Object(a.jsx)(ne,{onClick:function(){return n=e.id,t(C(n));var n},"aria-label":"Add todo",children:Object(a.jsx)(le,{width:"15",height:"15",fill:"#fff"})})]},e.id)}))})}ue.protoTypes={contacts:I.a.array,onDeleteContact:I.a.func};var se=n(15),be=n.n(se);function je(){var e=Object(u.c)(V),t=Object(u.b)();return Object(a.jsxs)("div",{className:be.a.block,children:[Object(a.jsx)("label",{className:be.a.label,htmlFor:"filter",children:"Find contacts by name"}),Object(a.jsx)("input",{className:be.a.input,id:"filter",type:"text",value:e,onChange:function(e){return t(y(e.target.value))}})]})}je.protoTypes={value:I.a.string,onChange:I.a.func};var de=n(32),fe=n.n(de);function me(){return Object(a.jsxs)("div",{className:fe.a.block,children:[Object(a.jsx)(z,{title:"Phonebook",children:Object(a.jsx)(G,{})}),Object(a.jsxs)(z,{title:"Contacts",children:[Object(a.jsx)(je,{}),Object(a.jsx)(ue,{})]})]})}var Oe=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(me,{})})},pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};l.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(u.a,{store:P,children:Object(a.jsx)(s.a,{loading:null,persistor:E,children:Object(a.jsx)(Oe,{})})})}),document.getElementById("root")),pe()},7:function(e,t,n){e.exports={form:"ContactForm_form__30ese",name:"ContactForm_name__1OiCn",inputName:"ContactForm_inputName__n38t9",number:"ContactForm_number__1M7dT",inputNumber:"ContactForm_inputNumber__1xQ8S",btn:"ContactForm_btn__2DeRu"}}},[[57,1,2]]]);
//# sourceMappingURL=main.b67fb5c3.chunk.js.map