(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),s=n.n(a),i=(n(13),n(0)),o=function(){return Object(i.jsx)("h2",{children:"Expence Tracker"})},u=n(3),j=n(8),l=n(4),d=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(l.a)(Object(l.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(l.a)(Object(l.a)({},e),{},{transactions:[t.payload].concat(Object(j.a)(e.transactions))});default:return e}},b={transactions:JSON.parse(localStorage.getItem("money"))||[]},O=Object(c.createContext)(b),x=function(e){var t=e.children,n=Object(c.useReducer)(d,b),r=Object(u.a)(n,2),a=r[0],s=r[1];return Object(i.jsx)(O.Provider,{value:{transactions:a.transactions,deleteTransaction:function(e){s({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){s({type:"ADD_TRANSACTION",payload:e}),console.log(e)}},children:t})},h=function(){var e=Object(c.useContext)(O).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Your Balance"}),Object(i.jsx)("h1",{id:"balance",children:e})]})},m=function(){var e=Object(c.useContext)(O).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(i.jsxs)("div",{className:"inc-exp-container",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Income"}),Object(i.jsx)("p",{id:"money-plus",className:"money plus",children:t})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Expense"}),Object(i.jsx)("p",{id:"money-minus",className:"money minus",children:n})]})]})},f=function(e){var t=e.transaction,n=Object(c.useContext)(O).deleteTransaction,r=t.amount<0?"-":"+";return Object(i.jsxs)("li",{className:t.amount<0?"minus":"plus",children:[t.text," ",Object(i.jsxs)("span",{children:[r,Math.abs(t.amount)]}),Object(i.jsx)("button",{onClick:function(){return n(t.id)},className:"delete-btn",children:"x"})]})},p=function(){var e=Object(c.useContext)(O).transactions;return Object(c.useEffect)((function(){localStorage.setItem("money",JSON.stringify(e))})),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"History"}),Object(i.jsx)("ul",{id:"list",className:"list",children:e.map((function(e){return Object(i.jsx)(f,{transaction:e},f.id)}))})]})},v=function(){var e=Object(c.useContext)(O).addTransaction,t=Object(c.useState)(""),n=Object(u.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(0),o=Object(u.a)(s,2),j=o[0],l=o[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"Add new transaction"}),Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={id:Math.floor(1e3*Math.random()),text:r,amount:+j};e(n),a(""),l("")},children:[Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("input",{required:!0,type:"text",value:r,onChange:function(e){return a(e.target.value)},placeholder:"Enter text"})]}),Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(i.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(i.jsx)("input",{required:!0,type:"number",value:j,onChange:function(e){return l(e.target.value)},placeholder:"Enter amount"})]}),Object(i.jsx)("button",{className:"btn",children:"Add transaction"})]})]})};var N=function(){return Object(i.jsxs)(x,{children:[Object(i.jsx)(o,{}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(h,{}),Object(i.jsx)(m,{}),Object(i.jsx)(p,{}),Object(i.jsx)(v,{})]})]})};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(N,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.76ae62d7.chunk.js.map