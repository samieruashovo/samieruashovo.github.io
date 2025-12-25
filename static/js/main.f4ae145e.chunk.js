(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(16),o=a.n(i),l=(a(103),a(87)),c=a(3),s=a(30),m=a(8),d=a(27);const p=m.a.div`
  background: #151418;
  position: fixed;
  height: 100%;
  width: 100%;
  /* top: 0; */
  left: 0;
  z-index: 999;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${e=>{let{isOpen:t}=e;return t?"100%":"0"}};
  top: ${e=>{let{isOpen:t}=e;return t?"0":"-100%"}};
`,u=Object(m.a)(s.d)`
  font-size: 2rem;
  color: #fff;
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
`,h=m.a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .menu-item + .menu-item {
    margin-top: 2rem;
  }
`,g=Object(m.a)(d.Link)`
  color: #fff;
  cursor: pointer;
  font-size: 1.7rem;

  &:hover {
    color: rgb(119, 119, 121);
  }
`,f=m.a.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  font-size: 1.7rem;
`;var v=function(e){let{isOpen:t,toggle:a}=e;return r.a.createElement(p,{isOpen:t,onClick:a},r.a.createElement(u,{onClick:a}),r.a.createElement(h,null,r.a.createElement(g,{onClick:a,className:"menu-item",to:"projects"},"Projects"),r.a.createElement(g,{onClick:a,className:"menu-item",to:"about"},"About"),r.a.createElement(g,{onClick:a,className:"menu-item",to:"contact"},"Contact")),r.a.createElement(f,{onClick:a},r.a.createElement("a",{className:"btn PrimaryBtn",href:"https://www.linkedin.com/in/samier-uddin-ahammad-shovo-13961b229/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")))};const b=m.a.nav`
  background: transparent;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`,y=Object(m.a)(d.Link)`
  color: rgb(119, 119, 121);
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #f6f6f6;
  }
`,E=Object(m.a)("div")`
  img {
    width: 47px;
    height: 47px;
  }
`,w=Object(m.a)(s.a)`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`,x=m.a.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  .menu-item + .menu-item {
    margin-left: 1rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`,k=m.a.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  a {
    color: #2e073f; /* Text color */
    background-color: #ebd3f8; /* Button background color */
    text-decoration: none;
    padding: 10px 20px; /* Button padding */
    border-radius: 5px; /* Optional rounded corners */
    font-size: 1rem; /* Adjust font size */
    font-weight: bold; /* Optional bold text */

    &:hover {
      background-color: #d0b0f5; /* Hover effect */
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;var S=e=>{let{toggle:t}=e;return r.a.createElement("div",{className:"Container",style:{padding:0}},r.a.createElement(b,null,r.a.createElement(E,{to:"/"},r.a.createElement("img",{src:"/logo.png",alt:"logo"})),r.a.createElement(x,null,r.a.createElement(y,{className:"menu-item",to:"projects"},"Projects"),r.a.createElement(y,{className:"menu-item",to:"about"},"About"),r.a.createElement(y,{className:"menu-item",to:"contact"},"Contact")),r.a.createElement(k,null,r.a.createElement("a",{className:"btn PrimaryBtn ",href:"https://www.linkedin.com/in/samieruashovo",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")),r.a.createElement(w,{onClick:t})))},C=a(24);const P=C.a.div`
  padding-bottom: 2rem;
  padding-top: 4rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`,I=C.a.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`,A=C.a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1;

  h1 {
    font-size: 2.8rem;
    color: #f6f6f6;
    opacity: 0.98;
    font-weight: 400;
  }

  h5 {
    font-size: 1.6rem;
    color: rgb(119, 119, 121);
    margin-bottom: 1rem;
    font-weight: 400;
  }

  p {
    font-size: 17px;
    color: #f6f6f6;
    opacity: 0.85;
  }

  @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
    margin-bottom: 2rem;

    h5 {
      min-height: 5rem;
  }
`,j=C.a.div`
  flex: 1;
  justify-content: center;
  display: flex;
`,T=C.a.img`
  height: 300px;
  width: auto;
   border-radius: 50%;
  object-fit: cover; 
`,z=C.b`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`,_=Object(C.a)(d.Link)`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  position: absolute;

  animation: ${z} 2s linear 0s infinite;
  @media screen and (max-width: 992px) {
    position: relative;
    justify-content: center;
    margin-top: 2rem;
  }
`,N=C.a.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #f6f6f6;

  img {
    height: 35px;
    width: 35px;
    margin-left: 6px;
  }
`;var F=a(69),O=a(13),B=a.n(O);var D=function(){const[e,t]=Object(n.useState)(!1),[a,i]=Object(n.useState)(!1),[o,l]=Object(n.useState)(!1),c=()=>{t(!e)};return r.a.createElement("main",null,r.a.createElement(v,{isOpen:e,toggle:c}),r.a.createElement(S,{toggle:c}),r.a.createElement(P,null,r.a.createElement(I,null,r.a.createElement(A,null,r.a.createElement(B.a,{animateIn:"fadeIn"},r.a.createElement(F.a,{cursor:!1,sequence:["Hi, I'm Samier Uddin Ahammad Shovo",()=>i(!0)],speed:{type:"keyStrokeDelayInMs",value:150},wrapper:"h1",repeat:0}),a&&r.a.createElement(F.a,{cursor:!0,sequence:[1e3,"A Flutter Developer.",1e3,"Django Developer",500,"MERN Stack Developer",1e3,"An innovative thinker.",1e3,"A....",1e3,"Maybe a cool guy?",1e3,"Ok...",1e3,"Ok...  I'm running out of ideas...",1e3,"Uhh...",1e3,"Uhh... you can scroll down to see my projects now...",300,()=>l(!0),1e3,"Seriously, my projects are really cool, go check them out!",1e3,"You're uh...",1e3,"You're uh... still here?",1e3,"Ok, this has been fun, but I'm gonna restart the loop now...",1e3,"See ya! :)",500],speed:50,deletionSpeed:65,wrapper:"h5",repeat:1/0}))),r.a.createElement(j,null,r.a.createElement(B.a,{animateIn:"fadeIn"},r.a.createElement(T,{src:"/me-tg.png",alt:"man-svgrepo"})))),o&&r.a.createElement(B.a,{animateIn:"flipInX",offset:0},r.a.createElement(_,{to:"projects",id:"scrollDown"},r.a.createElement(N,null,"Scroll down",r.a.createElement("img",{src:"/scroll-down.svg",alt:"scroll-down"}))))))};const L=[{img:"/2048.png",title:"SlideFinity",description:"The classic 2048 game with a twist. Merge numbers to get the highest score.",tech_stack:["Flutter","Riverpod","Firebase Analytics","Admob Ads"],github_url:"",demo_url:"https://play.google.com/store/apps/details?id=me.samiershovo.slidefinity&pcampaignid=web_share"},{img:"/mpt.png",title:"MODERN PERIODIC TABLE - MPT",description:"A modern periodic table app with detailed information about elements.",tech_stack:["Flutter","BloC","Firebase Analytics","Admob Ads"],github_url:"",demo_url:"https://play.google.com/store/apps/details?id=com.violettechapp.modern_periodic_table"}],M=[{img:"/osc-1.png",title:"flutter_faker_plus",description:"A customizable fake data generator for Flutter, supporting names, addresses, texts, and more.",tech_stack:["Flutter","Pub Dev"],github_url:"",demo_url:"https://pub.dev/packages/flutter_faker_plus"}],W=[{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",name:"Flutter"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg",name:"Dart"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",name:"Git"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",name:"Github"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg",name:"Django"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",name:"Python"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",name:"Linux"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/debian/debian-original.svg",name:"Debian"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",name:"Figma"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/arduino/arduino-original.svg",name:"Arduino"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",name:"Docker"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",name:"NodeJS"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",name:"Firebase"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",name:"MongoDB"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/matlab/matlab-original.svg",name:"Matlab"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",name:"C"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg",name:"Postman"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",name:"MySQL"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg",name:"OpenCV"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",name:"VS Code"}],U=m.a.div`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  grid-template-columns: 1fr;
  padding-bottom: 2rem;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    border-bottom: 0;
    padding-bottom: 0;
  }
`,Y=m.a.div`
  justify-self: center;
  height: 100%;
  img {
    object-fit: cover;
  }
`,G=m.a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  p {
    font-weight: 400;
    max-width: 95%;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.815);
    text-align: center;

    @media (min-width: 992px) {
      text-align: start;
    }
  }
  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`,q=m.a.div`
  height: 70px;
  display: flex;
  align-items: center;
`,R=m.a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`,V=m.a.div`
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 5px 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.815);
  cursor: default;
  box-shadow: 0px 2px 5px rgba(160, 170, 180, 0.6);
`;var H=function(){return r.a.createElement(r.a.Fragment,null,L.map((e,t)=>r.a.createElement(B.a,{animateIn:"fadeInLeft",key:t},r.a.createElement(U,null,r.a.createElement(Y,null,r.a.createElement("img",{src:e.img,alt:e.name})),r.a.createElement(G,null,r.a.createElement("h4",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement(R,null,e.tech_stack.map((e,t)=>r.a.createElement(V,{key:t},e))),r.a.createElement(q,null,e.github_url.length>0&&r.a.createElement("a",{className:"btn SecondaryBtn btn-shadow",href:e.github_url,target:"_blank",rel:"noopener noreferrer"},"Github"),e.demo_url.length>0&&r.a.createElement("a",{className:"btn PrimaryBtn btn-shadow",href:e.demo_url,target:"_blank",rel:"noopener noreferrer",style:{background:"#7A1CAC"}},"Demo \u279c")))))))};var J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{height:"100%",width:"100%",id:"svg",viewBox:"0 0 1440 400",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none",strokeWidth:"0",fill:"#2E073F",transform:"rotate(-180 720 200)"})),r.a.createElement("div",{className:"ProjectWrapper",id:"projects"},r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"SectionTitle"},"Projects"),r.a.createElement(H,null))))};var $=function(){return r.a.createElement(r.a.Fragment,null,M.map((e,t)=>r.a.createElement(B.a,{animateIn:"fadeInLeft",key:t},r.a.createElement(U,null,r.a.createElement(Y,null,r.a.createElement("img",{src:e.img,alt:e.name})),r.a.createElement(G,null,r.a.createElement("h4",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement(R,null,e.tech_stack.map((e,t)=>r.a.createElement(V,{key:t},e))),r.a.createElement(q,null,e.github_url.length>0&&r.a.createElement("a",{className:"btn SecondaryBtn btn-shadow",href:e.github_url,target:"_blank",rel:"noopener noreferrer"},"Github"),e.demo_url.length>0&&r.a.createElement("a",{className:"btn PrimaryBtn btn-shadow",href:e.demo_url,target:"_blank",rel:"noopener noreferrer",style:{background:"#7A1CAC"}},"Demo \u279c")))))))};var X=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{height:"100%",width:"100%",id:"svg",viewBox:"0 0 1440 400",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none",strokeWidth:"0",fill:"#2E073F",transform:"rotate(-180 720 200)"})),r.a.createElement("div",{className:"ProjectWrapper",id:"projects"},r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"SectionTitle"},"Open source contributions"),r.a.createElement($,null))))};const Z=m.a.div`
  margin-top: 5rem;
`,Q=m.a.img`
  max-width: 120px;
  margin: 0 auto;
  margin-bottom: 1rem;
`,K=m.a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: -2rem;
`,ee=m.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
  min-width: 100px;
  margin-bottom: 2rem;
`,te=m.a.img`
  height: 40px;
  width: 40px;
  padding-bottom: 5px;
`,ae=m.a.div`
  font-size: 14px;
`;var ne=function(){return r.a.createElement(Z,{id:"about"},r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"SectionTitle"},"About Me"),r.a.createElement("div",{className:"BigCard"},r.a.createElement(B.a,{animateIn:"fadeInLeft"},r.a.createElement(Q,{src:"/man-svgrepo-com.svg",alt:"man-svgrepo"})),r.a.createElement("div",{className:"AboutBio"},r.a.createElement(B.a,{animateIn:"fadeInLeft"},"Hey there! I\u2019m ",r.a.createElement("strong",null,"Samier Uddin Ahammad Shovo"),"."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(B.a,{animateIn:"fadeInLeft"},r.a.createElement("div",{class:"skills-title"},"\ud83d\udd39 Software Engineer (Flutter & Android) "),"My expertise lies in Flutter, where I design and develop full-featured mobile applications with clean architecture, MVVM architecture and state management solutions like and BloC & GetX. I\u2019ve worked on various apps, from productivity tools to games, including my published SlideFinity app on Google Play Store, which features multiple themes, customizable board sizes, Play Games services and a sleek UI. I also focus on app performance optimization, offline-first architectures, and native integrations to ensure smooth user experiences across devices."),r.a.createElement("br",null),r.a.createElement(B.a,{animateIn:"fadeInLeft"},r.a.createElement("div",{class:"skills-title"},"\ud83d\udd39 Machine Learning & Computer Vision"),"I\u2019m also deeply interested in machine learning and computer vision. Recently, I trained a YOLO model on a marine debris dataset to detect objects like cans, foam, plastic, and bottles. I enjoy working on real-world AI applications and optimizing models for mobile and edge computing.",r.a.createElement("a",{href:"https://ietresearch.onlinelibrary.wiley.com/doi/pdf/10.1049/ccs2.12114",target:"_blank",rel:"noopener noreferrer"}," Click here to view my research")),r.a.createElement("br",null),r.a.createElement(B.a,{animateIn:"fadeInLeft"},r.a.createElement("div",{class:"skills-title"},"\ud83d\udd39 Awards "),"1st Place among 30 participating teams at Bangladesh University of Business & Technology Brainstorming Week - 2024 IoT competition"),r.a.createElement("br",null),r.a.createElement(B.a,{animateIn:"fadeInLeft"},r.a.createElement("div",{class:"skills-title"},"\ud83d\udd39 Other Technical Skills & Interests"),r.a.createElement("div",null,r.a.createElement("ul",{class:"skills-list"},r.a.createElement("li",null,"-  Flutter Maps & Routing \u2013 Built a map-based app using Barikoi API with navigation features"),r.a.createElement("li",null,"- NFC Development \u2013 Worked with the nfc_manager package for Flutter-based NFC operations"),r.a.createElement("li",null,"- Fake Data Generation \u2013 Currently working on a Flutter package to generate realistic test data"),r.a.createElement("li",null,"- Clean Architecture & MVVM \u2013 Completed an advanced Udemy course on Flutter Clean Architecture with MVVM"))),r.a.createElement("div",{className:"tagline2"},"I have expertise with the following technologies:")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(K,null,W.map((e,t)=>r.a.createElement(B.a,{animateIn:"fadeInLeft",key:t},r.a.createElement(ee,{key:t,className:"tech"},r.a.createElement(te,{src:e.img,alt:e.name}),r.a.createElement(ae,null,e.name)))))))))};const re=m.a.div`
  margin: 5rem 0;
`,ie=m.a.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 1rem;

  span {
    font-size: 1rem;
    font-weight: 400;
  }

  @media (min-width: 576px) {
    span {
      font-size: 1.25rem;
    }
  }
  @media (min-width: 992px) {
    span {
      font-size: 1.5rem;
    }
  }
`;var oe=a(51),le=a(157),ce=a(158),se=a(156);var me=function(){const[e,t]=Object(n.useState)(!1);return r.a.createElement(re,{id:"contact"},r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"SectionTitle"},"Get In Touch"),r.a.createElement(B.a,{animateIn:"fadeIn"},r.a.createElement("div",{className:"BigCard"},r.a.createElement(ie,null,r.a.createElement("div",{style:{display:"flex",alignItems:"center",columnGap:"20px",rowGap:"10px",flexWrap:"wrap",justifyContent:"center"}},r.a.createElement("span",null,"samieruashovo@gmail.com"),r.a.createElement(le.a,{PopperProps:{disablePortal:!0},open:e,onClose:()=>t(!1),title:"Copied!",TransitionComponent:se.a,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,placement:"bottom"},r.a.createElement(ce.a,{onClick:()=>{navigator.clipboard.writeText("samieruashovo@gmail.com"),t(!0),setTimeout(()=>{t(!1)},700)}},r.a.createElement(oe.a,{size:25,style:{cursor:"pointer",color:"#151418"}})))),r.a.createElement("a",{className:"btn PrimaryBtn btn-shadow",href:"mailto:samieruashovo@gmail.com",target:"_blank",rel:"noopener noreferrer",style:{backgroundColor:"#EBD3F8",color:"#2e073f",padding:"10px 20px",borderRadius:"5px",textDecoration:"none",fontWeight:"bold",display:"inline-block",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)"}},"Send Emails"))))))};const de=m.a.div`
  background-image: url(/footer_wave.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;var pe=function(){return r.a.createElement(de,null,r.a.createElement("div",{className:"Container"}))};const ue=m.a.div`
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  a {
    font-size: 2.3rem;
    color: rgb(119, 119, 121);
    &:hover {
      color: rgb(57, 134, 250);
    }
  }

  @media screen and (max-width: 1000px) {
    margin-top: 2rem;
    position: relative;
    top: 0;
    left: 0;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
    }

    a {
      font-size: 2.5rem;
      color: #151418;
      &:hover {
        color: rgb(57, 134, 250);
      }
    }

    .item + .item {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;var he=function(){return r.a.createElement(ue,null,r.a.createElement(B.a,{animateIn:"fadeIn",animateOnce:!0},r.a.createElement("ul",null,r.a.createElement("li",{className:"item"},r.a.createElement("a",{href:"https://www.linkedin.com/in/samieruashovo",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.c,null))),r.a.createElement("li",{className:"item"},r.a.createElement("a",{href:"https://github.com/samieruashovo",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.b,null))))))},ge=a(31);const fe=Object(ge.a)(ce.a)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: white;
  padding: 10px;
`,ve=Object(ge.a)(oe.b)`
  background-color: #007bff;
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0px 4px 20px rgba(160, 170, 180, 0.6);
`;var be=function(){const[e,t]=r.a.useState(!1),[a,i]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{window.addEventListener("scroll",()=>{window.scrollY>500?i(!0):i(!1)},{passive:!0})},[]),a&&r.a.createElement(le.a,{title:"Scroll to top",placement:"top",open:e,onOpen:()=>t(!0),onClose:()=>t(!1)},r.a.createElement(fe,{size:"large","aria-label":"scroll to top",onClick:()=>{t(!1),d.animateScroll.scrollToTop({duration:0})}},r.a.createElement(ve,{fontSize:40,style:{background:"#7A1CAC"}})))};var ye=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement(J,null),r.a.createElement(X,null),r.a.createElement(ne,null),r.a.createElement(me,null),r.a.createElement(he,null),r.a.createElement(pe,null),r.a.createElement(be,null))};var Ee=()=>r.a.createElement("div",{style:{padding:"2rem",maxWidth:"800px",margin:"0 auto",lineHeight:"1.6"}},r.a.createElement("h1",{style:{fontSize:"1.8rem",fontWeight:"700",marginTop:"2rem"}},"SlideFinity Privacy Policy"),r.a.createElement("p",null,'This privacy policy applies to the SlideFinity app (hereby referred to as "Application") for mobile devices that was created by Samier Uddin Ahammad Shovo (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".'),r.a.createElement("h2",null,"Information Collection and Use"),r.a.createElement("p",null,"The Application collects information when you download and use it. This information may include information such as:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Your device's Internet Protocol address (e.g. IP address)"),r.a.createElement("li",null,"The pages of the Application that you visit, the time and date of your visit, the time spent on those pages"),r.a.createElement("li",null,"The time spent on the Application"),r.a.createElement("li",null,"The operating system you use on your mobile device")),r.a.createElement("p",null,"The Application does not gather precise information about the location of your mobile device."),r.a.createElement("p",null,"The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions."),r.a.createElement("p",null,"For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information. The information that the Service Provider requests will be retained by them and used as described in this privacy policy."),r.a.createElement("h2",{style:{fontSize:"1.2rem",fontWeight:"400",marginTop:"2rem"}},"Third Party Access"),r.a.createElement("p",null,"Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement."),r.a.createElement("p",null,"Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://support.google.com/admob/answer/6128543?hl=en",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"#1a73e8"}},"AdMob")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://firebase.google.com/support/privacy",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"#1a73e8"}},"Google Analytics for Firebase")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://firebase.google.com/support/privacy",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"#1a73e8"}},"Firebase Crashlytics"))),r.a.createElement("h2",{style:{fontSize:"1.4rem",fontWeight:"500",marginTop:"2rem"}},"Disclosure of Information"),r.a.createElement("p",null,"The Service Provider may disclose User Provided and Automatically Collected Information:"),r.a.createElement("ul",null,r.a.createElement("li",null,"As required by law, such as to comply with a subpoena, or similar legal process;"),r.a.createElement("li",null,"When they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;"),r.a.createElement("li",null,"With their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.")),r.a.createElement("h2",{style:{fontSize:"1.4rem",fontWeight:"500",marginTop:"2rem"}},"Opt-Out Rights"),r.a.createElement("p",null,"You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network."),r.a.createElement("h2",{style:{fontSize:"1.4rem",fontWeight:"500",marginTop:"2rem"}},"Data Retention Policy"),r.a.createElement("p",null,"The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at ",r.a.createElement("a",{href:"mailto:samieruashovo@gmail.com"},"samieruashovo@gmail.com")," and they will respond in a reasonable time."),r.a.createElement("h2",{style:{fontSize:"1.4rem",fontWeight:"500",marginTop:"2rem"}},"Children"),r.a.createElement("p",null,"The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13. The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (",r.a.createElement("a",{href:"mailto:samieruashovo@gmail.com"},"samieruashovo@gmail.com"),") so that they will be able to take the necessary actions."),r.a.createElement("h2",{style:{fontSize:"1.4rem",fontWeight:"500",marginTop:"2rem"}},"Security"),r.a.createElement("p",null,"The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains."),r.a.createElement("h2",{style:{fontSize:"1.4rem",fontWeight:"500",marginTop:"2rem"}},"Changes"),r.a.createElement("p",null,"This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes."),r.a.createElement("h2",{style:{fontSize:"1.4rem",fontWeight:"500",marginTop:"2rem"}},"Effective Date"),r.a.createElement("p",null,"2025-08-29"),r.a.createElement("h2",{style:{fontSize:"1.4rem",fontWeight:"500",marginTop:"2rem"}},"Your Consent"),r.a.createElement("p",null,"By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us."),r.a.createElement("h2",{style:{fontSize:"1.4rem",fontWeight:"500",marginTop:"2rem"}},"Contact Us"),r.a.createElement("p",null,"If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at ",r.a.createElement("a",{href:"mailto:samieruashovo@gmail.com"},"samieruashovo@gmail.com"),"."));var we=function(){return r.a.createElement(l.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",element:r.a.createElement(ye,null)}),r.a.createElement(c.a,{path:"/slide-finity-privacy-policy",element:r.a.createElement(Ee,null)})))};o.a.render(r.a.createElement(we,null),document.getElementById("root"))},98:function(e,t,a){e.exports=a(120)}},[[98,1,2]]]);
//# sourceMappingURL=main.f4ae145e.chunk.js.map