!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var o=()=>{const e=document.createElement("div");e.classList.add("home");const n=document.createElement("div");n.innerHTML="<h1>ONCE UPON A DUMPLING</h1>",e.appendChild(n);const t=document.createElement("div");return t.innerHTML="\n                <hr>\n                <p>Experience Chinese brunch - food to share with those you love.</p>           \n                <p>Wooden steamer baskets of dumplings, perfectly sloppy cheung fun, pillowy soft char siu bao, crisp fried lo bak go,\n                and hot oolong tea.</p>\n                <p>We use the traditional trolley service for that authentic Hong Kong experience.</p>\n                ",e.appendChild(t),e};function r(e,n,t,o){const r=document.createElement("div");return r.classList.add("card"),r.innerHTML=`\n        <div class="card">\n            <header>\n                <h4>${e}</h4>\n            </header>    \n            <img src="../${n}">\n            <div class="content">\n                <p>${t}</p>\n            </div>\n            <footer>£${o}</footer>\n        </div>\n    `,r}var a=()=>{const e=document.getElementById("content");e.innerHTML="";const n=document.createElement("div");n.innerHTML="MENU",e.appendChild(n);const t=document.createElement("div");t.classList.add("menu");let o=[];o[0]=r("Siu Mai","siumai.png","Pork and prawn steamed dumplings","2.50"),o[1]=r("Har Gow","hargow.jpg","Prawn steamed dumplings","2.50"),o[2]=r("Cheung Fun","cheungfun.jpg","Rice noodles stuffed with either char siu or prawns","3.00"),o[3]=r("Char Siu Bao","bao.jpg","Buns stuffed with char siu","3.50"),o[4]=r("Lo Bak Go","lobakgo.jpg","Fried turnip paste cakes","3.00"),o[5]=r("Oolong Tea","tea.jpg","Pot of hot oolong tea","1.50"),o.forEach(e=>t.appendChild(e)),e.appendChild(t)};var i=()=>{const e=document.getElementById("content");e.innerHTML="";const n=document.createElement("div");n.innerHTML="<h1>CONTACT US</h1>",e.appendChild(n);const t=document.createElement("div");t.classList.add("contact"),t.innerHTML='<img src="../contact.jpg">',e.appendChild(t);const o=document.createElement("div");o.innerHTML="\n        <h2>We love talking about dim sum!</h2>\n        <p>Call us to book a table or give us any feedback. We'd also love to hear from you if you're a tasty dim sum supplier.\n            We're always looking for people to join our team and help us feed people through the medium of dim sum.\n        </p>\n        <h4><a href=\"\">hello[at]onceuponadumpling[dot]com</a></h4>\n    ",e.appendChild(o)};const c=document.querySelectorAll(".tab");c.forEach(e=>e.addEventListener("click",s));const d=document.getElementById("content");function s(e){c.forEach(e=>e.classList.remove("active")),this.classList.add("active"),d.innerHTML="",this.classList.contains("home")&&d.appendChild(o()),this.classList.contains("menu")&&a(),this.classList.contains("contact")&&i()}d.appendChild(o()),o()}]);