(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var i,a,o=n(1),c=n.n(o),s=n(9),r=n.n(s),A=n(2),l=n(3),d=n.p+"static/media/streets.cadfdbde.jpg",h=Object(l.a)(i||(i=Object(A.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        scrollbar-width: none;\n    }\n    body {\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        -webkit-font-smoothing: antialiased;\n\t    -moz-osx-font-smoothing: grayscale;\n        background-color: red;\n        display: flex;\n        flex-flow: column;\n        align-items: center;\n        /* padding: 1rem; */\n        /* justify-content: center; */\n\n        height: 100vh;\n        overflow: hidden;\n        color: white;\n        background-image: url(",");\n        background-repeat: no-repeat;\n        background-size: cover;\n        position: relative;\n        &::after {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n           \n            background-color: #bd4f6c;\nbackground-image: linear-gradient(326deg, #bd4f6c 0%, #d7816a 74%), linear-gradient(315deg, #a40606 0%, #d98324 74%);\n ;\nopacity: .4;\n\n            z-index: -1;\n        }\n    }\n    button, svg, a {\n        cursor: pointer;\n    }\n"])),d),g=n(0),m=l.b.div(a||(a=Object(A.a)(["\n\tdisplay: flex;\n\tflex-flow: column;\n\tmargin-bottom: 1rem;\n\t/* border: 2px solid white; */\n\t/* background-color: rgba(0,0,0,.4); */\n\tborder-radius: 13px;\n\tmargin: 1rem;\n\tjustify-content: center;\n\t/* align-items: center; */\n\t/* padding: 1rem; */\n\t@media (min-width: 640px) {\n\t\tmargin: 2rem 0;\n\t}\n\n\th2 {\n\t}\n\th2 {\n\t\tfont-size: 200%;\n\t\tline-height: 1;\n\t\ttext-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);\n\n\t\t\n\t}\n\th3 {\n\t\t/* background-color: #ff4e00; */\n\t\tborder-radius: 3px;\n\t\tpadding: 0 .5rem;\n\t}\n"]))),b=function(){return Object(g.jsxs)(m,{children:[Object(g.jsx)("h2",{className:"capitalize",children:" cliff sanchez"}),Object(g.jsx)("h3",{className:"md:text-lg xl:text-xl font-medium capitalize",children:"los angeles, CA"})]})},p=n(4),u=n(13),x=n.n(u);n(27);var f,j,w,Q,E=function(t){var e=t.data,n=t.time,i=t.width,a=t.height,c=t.captionStyle,s=t.slideNumberStyle,r=t.radius,A=t.slideNumber,l=t.style,d=t.captionPosition,h=t.dots,m=t.automatic,b=t.pauseIconColor,u=t.pauseIconSize,f=t.slideBackgroundColor,j=t.slideImageFit,w=t.thumbnails,Q=t.thumbnailWidth,E=Object(o.useState)(0),I=Object(p.a)(E,2),M=I[0],N=I[1],k=Object(o.useState)(!1),B=Object(p.a)(k,2),C=B[0],v=B[1],y=Object(o.useState)(0),O=Object(p.a)(y,2),U=O[0],K=O[1],S=function(t){M+t>=e.length?N(0):N(M+t<0?e.length-1:M+t)};return Object(o.useEffect)((function(){if(m){var t=M,i=setInterval((function(){C||(N(t),++t>=e.length&&(t=0),t<0&&(t=e.length-1))}),n||2e3);return function(){clearInterval(i)}}}),[C,U]),Object(o.useEffect)((function(){var t,n=document.getElementsByClassName("carousel-item"),i=document.getElementsByClassName("dot"),a=M;for(t=0;t<e.length;t++)n[t].style.display="none";for(t=0;t<i.length;t++)i[t].className=i[t].className.replace(" active","");if(w){var o=document.getElementsByClassName("thumbnail");for(t=0;t<o.length;t++)o[t].className=o[t].className.replace(" active-thumbnail","");void 0!==o[a]&&(o[a].className+=" active-thumbnail"),function(t){var e=t.offsetLeft+t.offsetWidth,n=t.parentNode.offsetLeft+t.parentNode.offsetWidth;e>=n+t.parentNode.scrollLeft?t.parentNode.scroll({left:e-n,behavior:"smooth"}):e<=t.parentNode.offsetLeft+t.parentNode.scrollLeft&&t.parentNode.scroll({left:t.offsetLeft-t.parentNode.offsetLeft,behavior:"smooth"})}(document.getElementById("thumbnail-".concat(a)))}void 0!==n[a]&&(n[a].style.display="block"),void 0!==i[a]&&(i[a].className+=" active")}),[M,C]),Object(g.jsxs)("div",{style:l,className:"box",children:[Object(g.jsx)("div",{style:{maxWidth:i||"600px",maxHeight:a||"400px"},children:Object(g.jsx)(x.a,{onSwipeRight:function(){S(-1),K(!U)},onSwipeLeft:function(){S(1),K(!U)},children:Object(g.jsxs)("div",{className:"carousel-container",style:{maxWidth:i||"600px",height:a||"400px",backgroundColor:f||"darkgrey",borderRadius:r},children:[e.map((function(t,n){return Object(g.jsxs)("div",{className:"carousel-item fade",style:{maxWidth:i||"600px",maxHeight:a||"400px"},onMouseDown:function(t){m&&v(!0)},onMouseUp:function(t){m&&v(!1)},onMouseLeave:function(t){m&&v(!1)},onTouchStart:function(t){m&&v(!0)},onTouchEnd:function(t){m&&v(!1)},children:[A&&Object(g.jsxs)("div",{className:"slide-number",style:s,children:[n+1," / ",e.length]}),Object(g.jsx)("a",{href:t.url,target:"_blank",children:Object(g.jsx)("img",{src:t.image,alt:t.caption,className:"carousel-image",style:{borderRadius:r,objectFit:j||"cover"}})}),C&&Object(g.jsx)("div",{className:"pause-icon pause",style:{color:b||"white",fontSize:u||"40px"},children:"II"}),Object(g.jsx)("div",{className:"carousel-caption-".concat(d||"bottom"),style:c,children:t.caption})]},n)})),Object(g.jsx)("span",{className:"prev",href:"/",onClick:function(t){S(-1),K(!U)},children:"\u276e"}),Object(g.jsx)("span",{className:"next",href:"/",onClick:function(t){S(1),K(!U)},children:"\u276f"}),h&&Object(g.jsx)("div",{className:"dots",children:e.map((function(t,e){return Object(g.jsx)("span",{className:"dot",onClick:function(t){N(e),K(!U)}},e)}))})]})})}),w&&Object(g.jsx)("div",{className:"thumbnails",id:"thumbnail-div",style:{maxWidth:i},children:e.map((function(t,e){return Object(g.jsx)("img",{width:Q||"100px",src:t.image,alt:t.caption,className:"thumbnail",id:"thumbnail-".concat(e),onClick:function(t){N(e),K(!U)}},e)}))})]})},I=n.p+"static/media/coke.d56b80da.png",M=n.p+"static/media/tubi.b19df70a.png",N=n.p+"static/media/showtime.51254413.png",k=n.p+"static/media/marriott.512de5a5.png",B=n.p+"static/media/arbys.6d7c2dc3.png",C=n.p+"static/media/del-taco.6b5bb3d3.png",v=n.p+"static/media/carvana.f935d19a.png",y=n.p+"static/media/xbox.e668b1df.png",O=n.p+"static/media/hbo.0dcb0abb.png",U=n.p+"static/media/wb.22eafb96.png",K=l.b.div(f||(f=Object(A.a)(["\n\tdisplay: flex;\n\tflex-flow: column;\n\tmax-width: 1200px;\n\tmargin: 0 auto;\n\theight: 100%;\n\tborder-radius: 13px;\n\tposition: relative;\n\tz-index: 0;\n\tborder: none;\n\tborder-radius: 13px;\n\tmargin-top: 2rem;\n\t@media (min-width: 640px) {\n\t\tmargin-top: 0;\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-template-rows: 100px 400px auto auto;\n\t}\n\t@media (min-width: 768px) {\n\t\tgap: .5rem;\n\t}\n\t@media (min-width: 1280px) {\n\t\tborder-radius: 13px;\n\t\t/* display: none; */\n\t}\n\n\t#slides {\n\t\tmargin: 0 auto;\n\t\tmax-width: 100%;\n\t}\n\t.box {\n\t\tmax-width: 100vw;\n\t\t.carousel-item {\n\t\t\tpadding: 0 1rem;\n\t\t\tborder-radius: 3px;\n\t\t\tbackground-color: transparent;\n\n\t\t\t@media (min-width: 768px) {\n\t\t\t\tpadding: 0;\n\t\t\t}\n\t\t}\n\t\t.carousel-image {\n\t\t\tobject-position: top;\n\t\t\tborder-radius: 3px;\n\t\t\theight: 100%;\n\t\t\tmax-width: 900px !important;\n\t\t}\n\t\t#thumbnail-div {\n\t\t\tdisplay: flex;\n\t\t\tgrid-template-columns: repeat(4, 1fr);\n\t\t\tgap: 8px;\n\t\t\tjustify-content: center;\n\t\t\tflex-wrap: wrap;\n\t\t\tpadding: 0 1rem;\n\t\t\timg {\n\t\t\t\tborder-radius: 3px;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.thumbnail {\n\t\t\t\tmax-width: 50px;\n\t\t\t\t@media (min-width: 640px) {\n\t\t\t\t\tmax-width: 75px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.prev,\n\t\t.next {\n\t\t\tfont-size: 2.5rem;\n\t\t\t@media (min-width: 640px) {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\t\t.prev {\n\t\t\tleft: -2rem;\n\t\t\t@media (min-width: 640px) {\n\t\t\t\tleft: -3.5rem;\n\t\t\t}\n\t\t}\n\t\t.next {\n\t\t\tright: -2rem;\n\t\t\t@media (min-width: 640px) {\n\t\t\t\tright: -3.5rem;\n\t\t\t}\n\t\t}\n\t}\n"]))),S=function(){var t=[{image:I,url:"https://cxs2549.github.io/react-coke/"},{image:M,url:"https://cxs2549.github.io/react-tubi/"},{image:N,url:"https://cxs2549.github.io/react-showtime/"},{image:k,url:"https://cxs2549.github.io/react-marriott/"},{image:B,url:"https://cxs2549.github.io/react-arbys/"},{image:C,url:"https://cxs2549.github.io/react-del-taco/"},{image:v,url:"https://cxs2549.github.io/react-carvana/"},{image:y,url:"https://cxs2549.github.io/react-xbox/"},{image:O,url:"https://cxs2549.github.io/react-hbo-max-v2/"},{image:U,url:"https://cxs2549.github.io/react-wb/"}];return Object(g.jsx)(K,{children:Object(g.jsx)("div",{id:"slides",children:Object(g.jsx)(E,{data:t,time:4e3,width:"900px",height:"480px",radius:"10px",captionPosition:"bottom",automatic:!0,dots:!1,pauseIconColor:"blue",pauseIconSize:"40px",slideBackgroundColor:"transparent",slideImageFit:"cover",thumbnails:!0,thumbnailWidth:"100px",style:{textAlign:"center",maxWidth:"100%",maxHeight:"500px",margin:"0px auto"}})})})},J=l.b.div(j||(j=Object(A.a)(["\n/* padding: 0 1rem; */\n/* border: 2px solid white; */\n  img {\n    border-radius: 99999px;\n    max-width: 60px;\n\n  }\n"]))),W=function(){return Object(g.jsx)(J,{children:Object(g.jsx)("img",{src:"data:image/jpeg;base64,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",alt:""})})},D=(n.p,l.b.div(w||(w=Object(A.a)(["\n\tgap: 1rem;\n\toverflow-y: scroll;\n\theight: calc(100vh - 180px);\n\t> div {\n\t\tbackground-size: cover;\n\t\timg {\n            border-radius: 13px;\n\t\t\tmin-width: 400px;\n            object-fit: cover;\n            object-position: top center;\n\t\t\theight: 250px;\n\t\t}\n\t}\n"]))),l.b.div(Q||(Q=Object(A.a)(["\n\t#top {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t\tpadding-right: 1rem;\n    @media (min-width: 1280px) {\n      padding-right: 0;\n    }\n\t\tsvg {\n\t\t\tfont-size: 1.5rem;\n\t\t}\n\t}\n"])))),F=function(){return Object(g.jsxs)(D,{children:[Object(g.jsx)(h,{}),Object(g.jsxs)("div",{id:"top",className:"gap-4",children:[Object(g.jsx)(b,{}),Object(g.jsxs)("div",{className:"flex items-center gap-4",children:[Object(g.jsx)("a",{href:"https://www.linkedin.com/in/cliff-sanchez-b75a201bb/",target:"_blank",children:Object(g.jsx)("i",{className:"fa fa-linkedin","aria-hidden":"true"})}),Object(g.jsx)("a",{href:"https://github.com/cxs2549",target:"_blank",children:Object(g.jsx)("i",{className:"fa fa-github","aria-hidden":"true"})}),Object(g.jsx)(W,{})]})]}),Object(g.jsx)(S,{})]})};n(28);r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(F,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.43144700.chunk.js.map