(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,s,t){},,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var i=t(1),c=t.n(i),n=t(6),a=t.n(n),r=t(3),l=(t(16),t(43)),d=t(44),o=t(0);function j(e){var s=e.menuOpen,t=e.setMenuOpen;return Object(o.jsx)("div",{className:"topbar "+(s&&"active"),children:Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsxs)("div",{className:"left",children:[Object(o.jsx)("a",{href:"#intro",className:"logo",children:"codr."}),Object(o.jsxs)("div",{className:"itemContainer",children:[Object(o.jsx)(l.a,{className:"icon"}),Object(o.jsx)("span",{children:"+91 8381073738"})]}),Object(o.jsxs)("div",{className:"itemContainer",children:[Object(o.jsx)(d.a,{className:"icon"}),Object(o.jsx)("span",{children:"sharadzarapkar69@gmail.com"})]})]}),Object(o.jsx)("div",{className:"right",children:Object(o.jsxs)("div",{className:"hamburger",onClick:function(){return t(!s)},children:[Object(o.jsx)("span",{className:"line1"}),Object(o.jsx)("span",{className:"line2"}),Object(o.jsx)("span",{className:"line3"})]})})]})})}t(22);var m=t(8);function b(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){Object(m.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Developer","Designer","Content Creator"]})}),[]),Object(o.jsxs)("div",{className:"intro",id:"intro",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsx)("div",{className:"imgContainer",children:Object(o.jsx)("img",{src:"assets/man.png",alt:""})})}),Object(o.jsxs)("div",{className:"right",children:[Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("h2",{children:"Hi There, I'm"}),Object(o.jsx)("h1",{children:"Sharadkumar Zarapkar"}),Object(o.jsxs)("h3",{children:["Freelance ",Object(o.jsx)("span",{ref:e})]})]}),Object(o.jsx)("a",{href:"#portfolio",children:Object(o.jsx)("img",{src:"assets/down.png",alt:""})})]})]})}t(23);function p(e){var s=e.id,t=e.title,i=e.active,c=e.setSelected;return Object(o.jsx)("li",{className:i?"portfolioList active":"portfolioList",onClick:function(){return c(s)},children:t})}t(24);var h=[{id:1,title:"Social Media App",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"},{id:2,title:"Rampa UI Design",img:"https://cdn.dribbble.com/users/702789/screenshots/15054318/media/4ea5d492b7b07eebc9528ff960794879.png?compress=1&resize=1200x900"},{id:3,title:"E-commerce Web Design",img:"https://cdn.dribbble.com/users/2253180/screenshots/16145086/media/b7c54ff7d5a9de7db211598c891e4b2f.jpg?compress=1&resize=1200x900"},{id:4,title:"Relax Mobile App",img:"https://cdn.dribbble.com/users/4095861/screenshots/15467417/media/d6a15c416626f12b31fa5ca1db192572.png?compress=1&resize=1200x900"},{id:5,title:"Hero Web Design",img:"https://cdn.dribbble.com/users/5031392/screenshots/15467520/media/c36b3b15b25b1e190d081abdbbf947cf.png?compress=1&resize=1200x900"},{id:6,title:"Banking App",img:"https://cdn.dribbble.com/users/3307260/screenshots/15468444/media/447b4501f7a145b05e11c70199a9c417.jpg?compress=1&resize=1200x900"}],u=[{id:1,title:"Web Social Media App",img:"https://cdn.dribbble.com/users/5031392/screenshots/15467520/media/c36b3b15b25b1e190d081abdbbf947cf.png?compress=1&resize=1200x900"},{id:2,title:"Web Rampa UI Design",img:"https://cdn.dribbble.com/users/3967258/screenshots/15463803/media/4fddb9a2caf3b3bd634060f706a91e73.png?compress=1&resize=1200x900"},{id:3,title:"Web E-commerce Design",img:"https://cdn.dribbble.com/users/3637068/screenshots/15467010/media/69a3279182b75365013fe285733d1122.png?compress=1&resize=1200x900"},{id:4,title:"Web Relax App",img:"https://cdn.dribbble.com/users/2264844/screenshots/15463998/media/d85e92a332c41094f68e1f716884f7ce.jpg?compress=1&resize=1200x900"},{id:5,title:"Web Design",img:"https://cdn.dribbble.com/users/387658/screenshots/15458608/media/e92ec1dd33dd1170ae3dc9c5272f2693.jpg?compress=1&resize=1200x900"},{id:6,title:"Web Banking App",img:"https://cdn.dribbble.com/users/6384483/screenshots/15468426/media/ce9479fa1f8dba3a4a49840d76e55e31.png?compress=1&resize=1200x900"}];function x(){var e=Object(i.useState)("featured"),s=Object(r.a)(e,2),t=s[0],c=s[1],n=Object(i.useState)([]),a=Object(r.a)(n,2),l=a[0],d=a[1];return Object(i.useEffect)((function(){switch(t){case"featured":d(h);break;case"web":d(u);break;default:d(h)}}),[t]),Object(o.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(o.jsx)("h1",{children:"Portfolio"}),Object(o.jsx)("ul",{children:[{id:"featured",title:"Featured"},{id:"web",title:"Web App"}].map((function(e){return Object(o.jsx)(p,{title:e.title,active:t===e.id,setSelected:c,id:e.id})}))}),Object(o.jsx)("div",{className:"container",children:l.map((function(e){return Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("img",{src:e.img,alt:""}),Object(o.jsx)("h3",{children:e.title})]})}))})]})}t(25);function g(){var e=Object(i.useState)(0),s=Object(r.a)(e,2),t=s[0],c=s[1],n=[{id:"1",icon:"./assets/mobile.png",title:"Web Design",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",img:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"},{id:"2",icon:"./assets/globe.png",title:"Mobile Application",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",img:"https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg"},{id:"3",icon:"./assets/writing.png",title:"Branding",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",img:"https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg"}],a=function(e){c("left"===e?t>0?t-1:2:t<n.length-1?t+1:0)};return Object(o.jsxs)("div",{className:"works",id:"works",children:[Object(o.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*t,"vw)")},children:n.map((function(e){return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsxs)("div",{className:"leftContainer",children:[Object(o.jsx)("div",{className:"imgContainer",children:Object(o.jsx)("img",{src:e.icon,alt:""})}),Object(o.jsx)("h2",{children:e.title}),Object(o.jsx)("p",{children:e.desc}),Object(o.jsx)("span",{children:"Projects"})]})}),Object(o.jsx)("div",{className:"right",children:Object(o.jsx)("img",{src:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",alt:""})})]})})}))}),Object(o.jsx)("img",{src:"assets/arrow.png",className:"arrow left",alt:"",onClick:function(){return a("left")}}),Object(o.jsx)("img",{src:"assets/arrow.png",className:"arrow right",alt:"",onClick:function(){return a()}})]})}t(26);function O(){return Object(o.jsxs)("div",{className:"testimonials",id:"testimonials",children:[Object(o.jsx)("h1",{children:"Testimonials"}),Object(o.jsx)("div",{className:"container",children:[{id:1,name:"Tom Durden",title:"Senior Developer",img:"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",icon:"assets/twitter.png",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem."},{id:2,name:"Alex Kalinski",title:"Co-Founder of DELKA",img:"https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",icon:"assets/youtube.png",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",featured:!0},{id:3,name:"Martin Harold",title:"CEO of ALBI",img:"https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",icon:"assets/linkedin.png",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem"}].map((function(e){return Object(o.jsxs)("div",{className:e.featured?"card featured":"card",children:[Object(o.jsxs)("div",{className:"top",children:[Object(o.jsx)("img",{src:"assets/right-arrow.png",className:"left",alt:""}),Object(o.jsx)("img",{className:"user",src:e.img,alt:""}),Object(o.jsx)("img",{className:"right",src:e.icon,alt:""})]}),Object(o.jsx)("div",{className:"center",children:e.desc}),Object(o.jsxs)("div",{className:"bottom",children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("h4",{children:e.title})]})]})}))})]})}t(27);function f(){var e=Object(i.useState)(!1),s=Object(r.a)(e,2),t=s[0],c=s[1];return Object(o.jsxs)("div",{className:"contact",id:"contact",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsx)("img",{src:"assets/shake.svg",alt:""})}),Object(o.jsxs)("div",{className:"right",children:[Object(o.jsx)("h2",{children:"Contact."}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(!0)},children:[Object(o.jsx)("input",{type:"text",placeholder:"Email"}),Object(o.jsx)("textarea",{placeholder:"Message"}),Object(o.jsx)("button",{type:"submit",children:"Send"}),t&&Object(o.jsx)("span",{children:"Thanks, I'll reply ASAP :)"})]})]})]})}t(28),t(29);function v(e){var s=e.menuOpen,t=e.setMenuOpen;return Object(o.jsx)("div",{className:"menu "+(s&&"active"),children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{onClick:function(){return t(!1)},children:Object(o.jsx)("a",{href:"#intro",children:"Home"})}),Object(o.jsx)("li",{onClick:function(){return t(!1)},children:Object(o.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(o.jsx)("li",{onClick:function(){return t(!1)},children:Object(o.jsx)("a",{href:"#works",children:"Works"})}),Object(o.jsx)("li",{onClick:function(){return t(!1)},children:Object(o.jsx)("a",{href:"#testimonials",children:"Testimonials"})}),Object(o.jsx)("li",{onClick:function(){return t(!1)},children:Object(o.jsx)("a",{href:"#contact",children:"Contact"})})]})})}var N=function(){var e=Object(i.useState)(!1),s=Object(r.a)(e,2),t=s[0],c=s[1];return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(j,{menuOpen:t,setMenuOpen:c}),Object(o.jsx)(v,{menuOpen:t,setMenuOpen:c}),Object(o.jsxs)("div",{className:"sections",children:[Object(o.jsx)(b,{}),Object(o.jsx)(x,{}),Object(o.jsx)(g,{}),Object(o.jsx)(O,{}),Object(o.jsx)(f,{})]})]})};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.680cda4b.chunk.js.map