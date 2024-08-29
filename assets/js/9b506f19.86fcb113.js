"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3955],{5765:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=t(4848),a=t(8453);const i={id:"docusaurus-style",slug:"/docusaurus-style",title:"Styles and Pages",authors:"vnambs"},n=void 0,r={id:"skiill/docusaurus/docusaurus-style",title:"Styles and Pages",description:"Styles and Layouts",source:"@site/docs/skiill/docusaurus/style.md",sourceDirName:"skiill/docusaurus",slug:"/docusaurus-style",permalink:"/docu/docs/docusaurus-style",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/skiill/docusaurus/style.md",tags:[],version:"current",frontMatter:{id:"docusaurus-style",slug:"/docusaurus-style",title:"Styles and Pages",authors:"vnambs"},sidebar:"tutorialSidebar",previous:{title:"Search",permalink:"/docu/docs/docusaurus-search"},next:{title:"AWS deployement",permalink:"/docu/docs/aws-deploy"}},l={},c=[{value:"Styles and Layouts",id:"styles-and-layouts",level:2},{value:"Modifying Theme Colors",id:"modifying-theme-colors",level:2},{value:"Homepage",id:"homepage",level:2},{value:"Custom Pages",id:"custom-pages",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h2,{id:"styles-and-layouts",children:(0,o.jsx)(s.a,{href:"https://docusaurus.io/zh-CN/docs/styling-layout#styling-your-site-with-infima",children:"Styles and Layouts"})}),"\n",(0,o.jsxs)(s.p,{children:["A Docusaurus site is a React single-page application. You can style the site as you would a typical React application, and libraries like ",(0,o.jsx)(s.a,{href:"https://tailwindcss.com/",children:"Tailwind CSS"})," and component libraries are supported. However, integrating these can increase the code size, so in this theme, I use global styles and CSS modules."]}),"\n",(0,o.jsx)(s.h2,{id:"modifying-theme-colors",children:"Modifying Theme Colors"}),"\n",(0,o.jsxs)(s.p,{children:["You can set the primary color and background color ",(0,o.jsx)(s.a,{href:"https://docusaurus.io/zh-CN/docs/styling-layout#styling-your-site-with-infima",children:"here"})," to see how it looks in light and dark modes. For example, my theme color is ",(0,o.jsx)("font",{color:"#12AFFA",children:"#12AFFA"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"@docusaurus/preset-classic"})," uses ",(0,o.jsx)(s.a,{href:"https://infima.dev/",children:"Infima"})," as the underlying styling framework. Infima provides flexible layouts and common UI component styles suitable for content-focused websites (blogs, documentation, homepages). For more details, check out the ",(0,o.jsx)(s.a,{href:"https://infima.dev/",children:"Infima website"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"homepage",children:"Homepage"}),"\n",(0,o.jsxs)(s.p,{children:["Since I set the site to ",(0,o.jsx)(s.a,{href:"https://docusaurus.io/zh-CN/docs/blog#blog-only-mode",children:"blog-only mode"}),", there is no dedicated homepage; instead, the blog post list is used as the homepage. You need to delete (or rename) the ",(0,o.jsx)(s.code,{children:"src/pages/index.tsx"})," file to avoid a homepage path conflict. Of course, you can also create a dedicated homepage like Docusaurus does and then redirect to the blog post list page."]}),"\n",(0,o.jsx)(s.p,{children:"Thus, the blog page also serves as the homepage. However, just having a blog is not enough, so I added a Hero component to represent how the site looks on first visit."}),"\n",(0,o.jsxs)(s.p,{children:["The SVG background file for the homepage is located at ",(0,o.jsx)(s.code,{children:"src/components/Hero/img/hero_main.svg"}),". The illustration comes from ",(0,o.jsx)(s.a,{href:"https://undraw.co/illustrations",children:"unDraw"}),", where you can find similar illustration styles for backgrounds. Alternatively, you can hire a designer to create custom illustrations."]}),"\n",(0,o.jsx)(s.h2,{id:"custom-pages",children:"Custom Pages"}),"\n",(0,o.jsxs)(s.p,{children:["Pages such as ",(0,o.jsx)(s.a,{href:"/blog/archive",children:"Archive"}),", ",(0,o.jsx)(s.a,{href:"/friends",children:"Links"}),", ",(0,o.jsx)(s.a,{href:"/docs/skill",children:"Navigation"}),", ",(0,o.jsx)(s.a,{href:"/project",children:"Projects"}),", and ",(0,o.jsx)(s.a,{href:"/about",children:"About Me"})," are defined in the ",(0,o.jsx)(s.code,{children:"src/pages"})," directory, with routes mapped according to the file names. For more on creating pages, see ",(0,o.jsx)(s.a,{href:"https://docusaurus.io/zh-CN/docs/creating-pages",children:"Creating Pages | Docusaurus"}),"."]})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>n,x:()=>r});var o=t(6540);const a={},i=o.createContext(a);function n(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);