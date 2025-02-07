(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(14),o=a.n(i),l=(a(100),a(101),a(28)),c=a(6),s=a(25);const m=c.a.div`
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
`,d=Object(c.a)(l.d)`
  font-size: 2rem;
  color: #fff;
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
`,p=c.a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .menu-item + .menu-item {
    margin-top: 2rem;
  }
`,u=Object(c.a)(s.Link)`
  color: #fff;
  cursor: pointer;
  font-size: 1.7rem;

  &:hover {
    color: rgb(119, 119, 121);
  }
`,g=c.a.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  font-size: 1.7rem;
`;var h=function(e){let{isOpen:t,toggle:a}=e;return r.a.createElement(m,{isOpen:t,onClick:a},r.a.createElement(d,{onClick:a}),r.a.createElement(p,null,r.a.createElement(u,{onClick:a,className:"menu-item",to:"projects"},"Projects"),r.a.createElement(u,{onClick:a,className:"menu-item",to:"about"},"About"),r.a.createElement(u,{onClick:a,className:"menu-item",to:"contact"},"Contact")),r.a.createElement(g,{onClick:a},r.a.createElement("a",{className:"btn PrimaryBtn",href:"https://www.linkedin.com/in/samier-uddin-ahammad-shovo-13961b229/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")))};const f=c.a.nav`
  background: transparent;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`,b=Object(c.a)(s.Link)`
  color: rgb(119, 119, 121);
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #f6f6f6;
  }
`,v=Object(c.a)("div")`
  img {
    width: 47px;
    height: 47px;
  }
`,E=Object(c.a)(l.a)`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`,x=c.a.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  .menu-item + .menu-item {
    margin-left: 1rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`,w=c.a.div`
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
`;var y=e=>{let{toggle:t}=e;return r.a.createElement("div",{className:"Container",style:{padding:0}},r.a.createElement(f,null,r.a.createElement(v,{to:"/"},r.a.createElement("img",{src:"/logo.png",alt:"logo"})),r.a.createElement(x,null,r.a.createElement(b,{className:"menu-item",to:"projects"},"Projects"),r.a.createElement(b,{className:"menu-item",to:"about"},"About"),r.a.createElement(b,{className:"menu-item",to:"contact"},"Contact")),r.a.createElement(w,null,r.a.createElement("a",{className:"btn PrimaryBtn ",href:"https://www.linkedin.com/in/samieruashovo",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")),r.a.createElement(E,{onClick:t})))},k=a(22);const C=k.a.div`
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
`,j=k.a.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`,I=k.a.div`
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
`,N=k.a.div`
  flex: 1;
  justify-content: center;
  display: flex;
`,A=k.a.img`
  height: 300px;
  width: auto;
   border-radius: 50%;
  object-fit: cover; 
`,_=k.b`
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
`,S=Object(k.a)(s.Link)`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  position: absolute;

  animation: ${_} 2s linear 0s infinite;
  @media screen and (max-width: 992px) {
    position: relative;
    justify-content: center;
    margin-top: 2rem;
  }
`,O=k.a.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #f6f6f6;

  img {
    height: 35px;
    width: 35px;
    margin-left: 6px;
  }
`;var B=a(67),F=a(11),z=a.n(F);var M=function(){const[e,t]=Object(n.useState)(!1),[a,i]=Object(n.useState)(!1),[o,l]=Object(n.useState)(!1),c=()=>{t(!e)};return r.a.createElement("main",null,r.a.createElement(h,{isOpen:e,toggle:c}),r.a.createElement(y,{toggle:c}),r.a.createElement(C,null,r.a.createElement(j,null,r.a.createElement(I,null,r.a.createElement(z.a,{animateIn:"fadeIn"},r.a.createElement(B.a,{cursor:!1,sequence:["Hi, I'm Samier Uddin Ahammad Shovo",()=>i(!0)],speed:{type:"keyStrokeDelayInMs",value:150},wrapper:"h1",repeat:0}),a&&r.a.createElement(B.a,{cursor:!0,sequence:[1e3,"A Flutter Developer.",1e3,"Django Developer",500,"MERN Stack Developer",1e3,"An innovative thinker.",1e3,"A....",1e3,"Maybe a cool guy?",1e3,"Ok...",1e3,"Ok...  I'm running out of ideas...",1e3,"Uhh...",1e3,"Uhh... you can scroll down to see my projects now...",300,()=>l(!0),1e3,"Seriously, my projects are really cool, go check them out!",1e3,"You're uh...",1e3,"You're uh... still here?",1e3,"Ok, this has been fun, but I'm gonna restart the loop now...",1e3,"See ya! :)",500],speed:50,deletionSpeed:65,wrapper:"h5",repeat:1/0}))),r.a.createElement(N,null,r.a.createElement(z.a,{animateIn:"fadeIn"},r.a.createElement(A,{src:"/me-tg.png",alt:"man-svgrepo"})))),o&&r.a.createElement(z.a,{animateIn:"flipInX",offset:0},r.a.createElement(S,{to:"projects",id:"scrollDown"},r.a.createElement(O,null,"Scroll down",r.a.createElement("img",{src:"/scroll-down.svg",alt:"scroll-down"}))))))};const L=[{img:"/2048.png",title:"2048 - Number Merge",description:"The classic 2048 game with a twist. Merge numbers to get the highest score.",tech_stack:["Flutter","BloC","Firebase Analytics","Admob Ads"],github_url:"",demo_url:"https://play.google.com/store/apps/details?id=tech.shovo.numbercrunch&fbclid=IwAR0u_iUgt1PBji9GLuNVvLPEZa0ceCNkxFZn9Ya9EWSD1wwNqcSdub_9Dnw"},{img:"/tetris.png",title:"MASTER BRICK 2D - BRICK GAME",description:"A Tetris game where users can play and compete with each other.",tech_stack:["Flutter","Provider","Firebase Analytics","Admob Ads"],github_url:"",demo_url:"https://play.google.com/store/apps/details?id=com.violettechapp.tetris"},{img:"/vscanner.png",title:"VSCANNER: QR & BARCODE SCANNER",description:"A QR and Barcode scanner app that can scan and generate QR codes.",tech_stack:["Flutter","BloC","Firebase Analytics","Admob Ads"],github_url:"",demo_url:"https://play.google.com/store/apps/details?id=com.violettechapp.vscanner"},{img:"/mpt.png",title:"MODERN PERIODIC TABLE - MPT",description:"A modern periodic table app with detailed information about elements.",tech_stack:["Flutter","BloC","Firebase Analytics","Admob Ads"],github_url:"",demo_url:"https://play.google.com/store/apps/details?id=com.violettechapp.modern_periodic_table"}],D=[{img:"/osc-1.png",title:"flutter_faker_plus",description:"A customizable fake data generator for Flutter, supporting names, addresses, texts, and more.",tech_stack:["Flutter","Pub Dev"],github_url:"",demo_url:"https://pub.dev/packages/flutter_faker_plus"}],P=[{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",name:"Flutter"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg",name:"Dart"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",name:"Git"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",name:"Github"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg",name:"Django"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",name:"Python"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",name:"Linux"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/debian/debian-original.svg",name:"Debian"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",name:"Figma"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/arduino/arduino-original.svg",name:"Arduino"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",name:"ReactJS"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",name:"Docker"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",name:"NodeJS"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",name:"Firebase"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",name:"MongoDB"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/matlab/matlab-original.svg",name:"Matlab"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",name:"C"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg",name:"Postman"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",name:"MySQL"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg",name:"OpenCV"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",name:"VS Code"}],T=c.a.div`
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
`,R=c.a.div`
  justify-self: center;
  height: 100%;
  img {
    object-fit: cover;
  }
`,G=c.a.div`
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
`,V=c.a.div`
  height: 70px;
  display: flex;
  align-items: center;
`,W=c.a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`,Y=c.a.div`
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
`;var U=function(){return r.a.createElement(r.a.Fragment,null,L.map((e,t)=>r.a.createElement(z.a,{animateIn:"fadeInLeft",key:t},r.a.createElement(T,null,r.a.createElement(R,null,r.a.createElement("img",{src:e.img,alt:e.name})),r.a.createElement(G,null,r.a.createElement("h4",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement(W,null,e.tech_stack.map((e,t)=>r.a.createElement(Y,{key:t},e))),r.a.createElement(V,null,e.github_url.length>0&&r.a.createElement("a",{className:"btn SecondaryBtn btn-shadow",href:e.github_url,target:"_blank",rel:"noopener noreferrer"},"Github"),e.demo_url.length>0&&r.a.createElement("a",{className:"btn PrimaryBtn btn-shadow",href:e.demo_url,target:"_blank",rel:"noopener noreferrer",style:{background:"#7A1CAC"}},"Demo \u279c")))))))};var q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{height:"100%",width:"100%",id:"svg",viewBox:"0 0 1440 400",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none",strokeWidth:"0",fill:"#2E073F",transform:"rotate(-180 720 200)"})),r.a.createElement("div",{className:"ProjectWrapper",id:"projects"},r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"SectionTitle"},"Projects"),r.a.createElement(U,null))))};var H=function(){return r.a.createElement(r.a.Fragment,null,D.map((e,t)=>r.a.createElement(z.a,{animateIn:"fadeInLeft",key:t},r.a.createElement(T,null,r.a.createElement(R,null,r.a.createElement("img",{src:e.img,alt:e.name})),r.a.createElement(G,null,r.a.createElement("h4",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement(W,null,e.tech_stack.map((e,t)=>r.a.createElement(Y,{key:t},e))),r.a.createElement(V,null,e.github_url.length>0&&r.a.createElement("a",{className:"btn SecondaryBtn btn-shadow",href:e.github_url,target:"_blank",rel:"noopener noreferrer"},"Github"),e.demo_url.length>0&&r.a.createElement("a",{className:"btn PrimaryBtn btn-shadow",href:e.demo_url,target:"_blank",rel:"noopener noreferrer",style:{background:"#7A1CAC"}},"Demo \u279c")))))))};var J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{height:"100%",width:"100%",id:"svg",viewBox:"0 0 1440 400",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none",strokeWidth:"0",fill:"#2E073F",transform:"rotate(-180 720 200)"})),r.a.createElement("div",{className:"ProjectWrapper",id:"projects"},r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"SectionTitle"},"Open source contributions"),r.a.createElement(H,null))))};const Q=c.a.div`
  margin-top: 5rem;
`,Z=c.a.img`
  max-width: 120px;
  margin: 0 auto;
  margin-bottom: 1rem;
`,$=c.a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: -2rem;
`,K=c.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
  min-width: 100px;
  margin-bottom: 2rem;
`,X=c.a.img`
  height: 40px;
  width: 40px;
  padding-bottom: 5px;
`,ee=c.a.div`
  font-size: 14px;
`;var te=function(){return r.a.createElement(Q,{id:"about"},r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"SectionTitle"},"About Me"),r.a.createElement("div",{className:"BigCard"},r.a.createElement(z.a,{animateIn:"fadeInLeft"},r.a.createElement(Z,{src:"/man-svgrepo-com.svg",alt:"man-svgrepo"})),r.a.createElement("div",{className:"AboutBio"},r.a.createElement(z.a,{animateIn:"fadeInLeft"},"Hey there! I\u2019m ",r.a.createElement("strong",null,"Samier Uddin Ahammad Shovo"),"."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(z.a,{animateIn:"fadeInLeft"},r.a.createElement("div",{class:"skills-title"},"\ud83d\udd39 Mobile Engineer"),"My expertise lies in Flutter, where I design and develop full-featured mobile applications with clean architecture, MVVM architecture and state management solutions like and BloC & GetX. I\u2019ve worked on various apps, from productivity tools to games, including my published 2048 - Number Merge game, which features multiple themes, customizable board sizes, and a sleek UI. I also focus on app performance optimization, offline-first architectures, and native integrations to ensure smooth user experiences across devices."),r.a.createElement("br",null),r.a.createElement(z.a,{animateIn:"fadeInLeft"},r.a.createElement("div",{class:"skills-title"},"\ud83d\udd39 Machine Learning & Computer Vision"),"I\u2019m also deeply interested in machine learning and computer vision. Recently, I trained a YOLO model on a marine debris dataset to detect objects like cans, foam, plastic, and bottles. I enjoy working on real-world AI applications and optimizing models for mobile and edge computing.",r.a.createElement("a",{href:"https://ietresearch.onlinelibrary.wiley.com/doi/pdf/10.1049/ccs2.12114",target:"_blank",rel:"noopener noreferrer"}," Click here to view my research")),r.a.createElement("br",null),r.a.createElement(z.a,{animateIn:"fadeInLeft"},r.a.createElement("div",{class:"skills-title"},"\ud83d\udd39 Awards "),"1st Place among 30 participating teams at Bangladesh University of Business & Technology Brainstorming Week - 2024 IoT competition"),r.a.createElement("br",null),r.a.createElement(z.a,{animateIn:"fadeInLeft"},r.a.createElement("div",{class:"skills-title"},"\ud83d\udd39 Other Technical Skills & Interests"),r.a.createElement("div",null,r.a.createElement("ul",{class:"skills-list"},r.a.createElement("li",null,"-  Flutter Maps & Routing \u2013 Built a map-based app using Barikoi API with navigation features"),r.a.createElement("li",null,"- NFC Development \u2013 Worked with the nfc_manager package for Flutter-based NFC operations"),r.a.createElement("li",null,"- Fake Data Generation \u2013 Currently working on a Flutter package to generate realistic test data"),r.a.createElement("li",null,"- Clean Architecture & MVVM \u2013 Completed an advanced Udemy course on Flutter Clean Architecture with MVVM"))),r.a.createElement("div",{className:"tagline2"},"I have expertise with the following technologies:")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement($,null,P.map((e,t)=>r.a.createElement(z.a,{animateIn:"fadeInLeft",key:t},r.a.createElement(K,{key:t,className:"tech"},r.a.createElement(X,{src:e.img,alt:e.name}),r.a.createElement(ee,null,e.name)))))))))};const ae=c.a.div`
  margin: 5rem 0;
`,ne=c.a.div`
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
`;var re=a(49),ie=a(155),oe=a(156),le=a(154);var ce=function(){const[e,t]=Object(n.useState)(!1);return r.a.createElement(ae,{id:"contact"},r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"SectionTitle"},"Get In Touch"),r.a.createElement(z.a,{animateIn:"fadeIn"},r.a.createElement("div",{className:"BigCard"},r.a.createElement(ne,null,r.a.createElement("div",{style:{display:"flex",alignItems:"center",columnGap:"20px",rowGap:"10px",flexWrap:"wrap",justifyContent:"center"}},r.a.createElement("span",null,"samieruashovo@gmail.com"),r.a.createElement(ie.a,{PopperProps:{disablePortal:!0},open:e,onClose:()=>t(!1),title:"Copied!",TransitionComponent:le.a,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,placement:"bottom"},r.a.createElement(oe.a,{onClick:()=>{navigator.clipboard.writeText("samieruashovo@gmail.com"),t(!0),setTimeout(()=>{t(!1)},700)}},r.a.createElement(re.a,{size:25,style:{cursor:"pointer",color:"#151418"}})))),r.a.createElement("a",{className:"btn PrimaryBtn btn-shadow",href:"mailto:samieruashovo@gmail.com",target:"_blank",rel:"noopener noreferrer",style:{backgroundColor:"#EBD3F8",color:"#2e073f",padding:"10px 20px",borderRadius:"5px",textDecoration:"none",fontWeight:"bold",display:"inline-block",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)"}},"Send Emails"))))))};const se=c.a.div`
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
`;var me=function(){return r.a.createElement(se,null,r.a.createElement("div",{className:"Container"}))};const de=c.a.div`
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
`;var pe=function(){return r.a.createElement(de,null,r.a.createElement(z.a,{animateIn:"fadeIn",animateOnce:!0},r.a.createElement("ul",null,r.a.createElement("li",{className:"item"},r.a.createElement("a",{href:"https://www.linkedin.com/in/samieruashovo",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(l.c,null))),r.a.createElement("li",{className:"item"},r.a.createElement("a",{href:"https://github.com/samieruashovo",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(l.b,null))))))},ue=a(29);const ge=Object(ue.a)(oe.a)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: white;
  padding: 10px;
`,he=Object(ue.a)(re.b)`
  background-color: #007bff;
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0px 4px 20px rgba(160, 170, 180, 0.6);
`;var fe=function(){const[e,t]=r.a.useState(!1),[a,i]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{window.addEventListener("scroll",()=>{window.scrollY>500?i(!0):i(!1)},{passive:!0})},[]),a&&r.a.createElement(ie.a,{title:"Scroll to top",placement:"top",open:e,onOpen:()=>t(!0),onClose:()=>t(!1)},r.a.createElement(ge,{size:"large","aria-label":"scroll to top",onClick:()=>{t(!1),s.animateScroll.scrollToTop({duration:0})}},r.a.createElement(he,{fontSize:40,style:{background:"#7A1CAC"}})))};var be=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null),r.a.createElement(q,null),r.a.createElement(J,null),r.a.createElement(te,null),r.a.createElement(ce,null),r.a.createElement(pe,null),r.a.createElement(me,null),r.a.createElement(fe,null))};var ve=function(){return r.a.createElement(be,null)};o.a.render(r.a.createElement(ve,null),document.getElementById("root"))},95:function(e,t,a){e.exports=a(118)}},[[95,1,2]]]);
//# sourceMappingURL=main.1229d51d.chunk.js.map