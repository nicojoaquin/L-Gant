(this.webpackJsonptienda=this.webpackJsonptienda||[]).push([[0],{20:function(e,c,s){},21:function(e,c,s){"use strict";s.r(c);var t=s(2),a=s(7),n=s.n(a),i=s(0),r=function(e){var c=e.children;return Object(i.jsx)(i.Fragment,{children:c})},o=s(8),j=s(9),l=function(){return Object(i.jsx)("div",{className:"cart-widget",children:Object(i.jsx)(o.a,{icon:j.a})})},d=function(){return Object(i.jsxs)("nav",{children:[Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/",className:"links",children:"Inicio"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/",className:"links",children:"Tienda"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/",className:"links",children:"Sobre nosotros"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/",className:"links",children:"Contacto"})})]}),Object(i.jsx)(l,{})]})},m=function(e){var c=e.title;return Object(i.jsxs)("header",{className:"header",children:[Object(i.jsxs)("div",{className:"title",children:[Object(i.jsxs)("h1",{className:"title__h1",children:[" ",c," "]}),Object(i.jsx)("img",{src:"/React/assets/logo.ico",alt:"logo"})]}),Object(i.jsx)(d,{})]})},u=s(4),b=function(e){var c=e.product;return Object(i.jsxs)("div",{className:"item",children:[Object(i.jsx)("img",{onClick:function(){return console.log(c)},className:"item__img",src:"/React"+c.img,alt:c.name}),Object(i.jsxs)("section",{className:"item__info",children:[Object(i.jsx)("h3",{className:"item__name",children:c.name}),Object(i.jsxs)("h4",{className:"item__price",children:["$",c.price]})]})]})},h=function(e){var c=e.items;return Object(i.jsx)("div",{className:"item-list",children:c.map((function(e){return Object(i.jsx)(b,{product:e},e.id)}))})},O=function(){var e=Object(t.useState)({loading:!0}),c=Object(u.a)(e,2),s=c[0],a=c[1];return setTimeout((function(){a({loading:!1})}),2e3),s},x=function(){var e=Object(t.useState)([]),c=Object(u.a)(e,2),s=c[0],a=c[1],n=O().loading,r=[{id:1,codeName:"sastreroGris",name:"Pantalon sastrero gris",price:11e3,category:"pantalones",img:"/assets/products/pantalon_gris.jpg"},{id:2,codeName:"camisaBlanca",name:"Camisa blanca lisa",price:7e3,category:"camisas",img:"/assets/products/camisa_blanca.jpg"},{id:3,codeName:"sacoNegro",name:"Saco negro liso",price:22e3,category:"sacos",img:"/assets/products/saco_negro.jpg"},{id:4,codeName:"trajeRayado",name:"Traje rayado azul",price:55e3,category:"trajes",img:"/assets/products/traje_rayado_azul.jpg"}];return Object(t.useEffect)((function(){new Promise((function(e,c){e(a(r))})).then((function(e){return e})).catch((function(e){console.error(e)}))}),[]),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h2",{className:"productos",children:"Productos"}),n?"Cargando...":Object(i.jsxs)("div",{className:"item-container",children:[Object(i.jsx)(h,{items:s})," "]})]})},g=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("main",{className:"main",children:Object(i.jsx)(x,{})})})},f=function(){return Object(i.jsxs)(r,{children:[Object(i.jsx)(m,{title:"L-Gant"}),Object(i.jsx)(g,{})]})},p=(s(20),document.querySelector("#root"));n.a.render(Object(i.jsx)(f,{}),p)}},[[21,1,2]]]);
//# sourceMappingURL=main.0f29db95.chunk.js.map