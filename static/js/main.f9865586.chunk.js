(this.webpackJsonptienda=this.webpackJsonptienda||[]).push([[0],{52:function(e,c,t){},53:function(e,c,t){"use strict";t.r(c);var s=t(2),n=t(21),r=t.n(n),a=t(0),i=function(e){var c=e.children;return Object(a.jsx)(a.Fragment,{children:c})},j=t(22),l=t(23),o=function(){return Object(a.jsx)("div",{className:"cart-widget",children:Object(a.jsx)(j.a,{icon:l.a})})},d=function(){return Object(a.jsxs)("nav",{children:[Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/",className:"links",children:"Inicio"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/",className:"links",children:"Tienda"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/",className:"links",children:"Sobre nosotros"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/",className:"links",children:"Contacto"})})]}),Object(a.jsx)(o,{})]})},b=function(e){var c=e.title;return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("a",{href:"/index.html",children:Object(a.jsxs)("h1",{className:"title__h1",children:[" ",c," "]})}),Object(a.jsx)("img",{src:"/React/assets/logo.ico",alt:"logo"})]}),Object(a.jsx)(d,{})]})},u=t(25),O=t(9),h=t(24),x=t.n(h),m=function(e){e.products;return Object(a.jsx)("div",{className:"finder",children:Object(a.jsx)("input",{type:"text",placeholder:" Buscar..."})})},f=function(e){var c=e.product;return Object(a.jsx)("div",{style:{backgroundImage:"url(".concat("/React"+c.img,")")},className:"item",onClick:function(){return console.log(c)},children:Object(a.jsxs)("section",{className:"item__info",children:[Object(a.jsx)("h3",{className:"item__name",children:c.name}),Object(a.jsxs)("h4",{className:"item__price",children:["$",c.price]})]})})},p=function(e){var c=e.products;return Object(a.jsx)("div",{className:"item-list",children:c.map((function(e){return Object(a.jsx)(f,{product:e},e.id)}))})},N=function(){var e=Object(s.useState)([]),c=Object(O.a)(e,2),t=c[0],n=c[1],r=Object(s.useState)(!0),i=Object(O.a)(r,2),j=i[0],l=i[1],o=Object(s.useState)(!1),d=Object(O.a)(o,2),b=d[0],h=d[1],f={id:5,codeName:"zapatoMarron",name:"Zapatos marrones",price:16600,category:"zapatos",img:"/assets/products/zapato_marron.jpg"};return Object(s.useEffect)((function(){x.a.get("".concat("/React/data/db.json")).then((function(e){setTimeout((function(){n(e.data.products),l(!1)}),1500)})).catch((function(e){return console.error(e)}))}),[]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(m,{products:t}),j?Object(a.jsx)("div",{className:"cssload-spin-box"}):null,Object(a.jsxs)("div",{className:"item__container",children:[Object(a.jsx)("button",{style:{cursor:"pointer"},disabled:b,onClick:function(){n([f].concat(Object(u.a)(t))),h(!0)},children:" Agregar"}),Object(a.jsx)(p,{products:t})," "]})]})},g=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("main",{className:"main",children:Object(a.jsx)(N,{})})})},v=function(){return Object(a.jsxs)(i,{children:[Object(a.jsx)(b,{title:"L-Gant"}),Object(a.jsx)(g,{})]})},_=(t(52),document.querySelector("#root"));r.a.render(Object(a.jsx)(v,{}),_)}},[[53,1,2]]]);
//# sourceMappingURL=main.f9865586.chunk.js.map