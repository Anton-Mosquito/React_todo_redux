(this["webpackJsonptodo-redux-saga"]=this["webpackJsonptodo-redux-saga"]||[]).push([[4],{51:function(n,e,t){"use strict";t.r(e);var o,i,c,r,d,s,b,a=t(4),l=t(0),p=t(14),u=t(26),x=t(27),j=t(5),f=t(1),h={toggleTodo:u.d,removeTodo:u.c},O=Object(p.b)(null,h)((function(n){var e=n.todo,t=n.index,o=Object(p.c)(),i=[];e.completed&&i.push("done");var c=Object(l.useCallback)((function(n){o(Object(u.d)(n))}),[o]),r=Object(l.useCallback)((function(n){o(Object(u.c)(n))}),[o]);return Object(f.jsxs)(g,{children:[Object(f.jsxs)(m,{className:i.join(" "),children:[Object(f.jsx)(k,{type:"checkbox",onChange:c.bind(null,e.id),checked:e.completed}),Object(f.jsx)(y,{}),Object(f.jsx)(v,{children:t+1}),"\u2003",e.title]}),Object(f.jsx)(w,{onClick:r.bind(null,e.id),children:Object(f.jsx)("svg",{width:"15px",height:"15px",children:Object(f.jsx)("use",{href:x.a+"#close"})})})]})})),g=j.b.li(o||(o=Object(a.a)(["\nposition: relative;\npadding: 15px 0;\ndisplay: flex;\nflex-direction: row;\njustify-content: space-between;\nalign-items: center;\nborder-bottom: 1px solid rgba(0,0,0,.1);\nborder-radius: 4px;\n&:last-child {\n  border-bottom: none;\n}\n"]))),m=j.b.label(i||(i=Object(a.a)(["\nposition: relative;\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\ncursor: pointer;\n"]))),k=j.b.input(c||(c=Object(a.a)(["\nvisibility: hidden;\nappearance: none;\n&:checked ~ span{\n  background: #03a9f4;\n  border: 1px solid #03a9f4;\n}\n&:checked ~ span:before{\n  border-left: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n}\n"]))),v=j.b.p(r||(r=Object(a.a)(["\nposition: absolute;\n"]))),y=j.b.span(d||(d=Object(a.a)(['\nposition: absolute;\nleft: -30px;\nwidth: 20px;\nheight: 20px;\nborder: 1px solid #ccc;\nborder-radius: 50%;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n&:before{\n  content: "";\n  position: absolute;\n  top: 5px;\n  width: 10px;\n  height: 5px;\n  border-left: 2px solid #ccc;\n  border-bottom: 2px solid #ccc;\n  transform: rotate(-40deg);\n}\n']))),w=j.b.button(s||(s=Object(a.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nheight: 30px;\nwidth: 30px;\nborder-radius: 50%;\nbackground-color: #fc3275;\ncursor: pointer;\noutline: none;\nborder: none;\npadding: 0;\n"]))),C=(e.default=function(){var n=Object(p.d)((function(n){return n.todo.todos}));return Object(f.jsx)(C,{children:n.map((function(n,e){return Object(f.jsx)(O,{todo:n,index:e},n.id+String(n.completed))}))})},j.b.ul(b||(b=Object(a.a)(["\nposition: relative;\nmargin: 0;\npadding: 40px;\n"]))))}}]);
//# sourceMappingURL=4.9a47d5c6.chunk.js.map