"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9048],{2283:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(6540),o=n(4164),i=n(3230),s=n(8630),l=n(4245),r=n(4067);const c={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var d=n(4848);function u(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:s,cancelScroll:c}=(0,l.gk)();return(0,l.Mq)(((e,n)=>{let{scrollY:a}=e;const s=n?.scrollY;s&&(i.current?i.current=!1:a>=s?(c(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,r.$)((e=>{e.location.hash&&(i.current=!0,o(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,d.jsx)("button",{"aria-label":(0,i.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",s.G.common.backToTopButton,c.backToTopButton,e&&c.backToTopButtonShow),type:"button",onClick:t})}},1356:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ue});var a=n(6540),o=n(4164),i=n(7153),s=n(8630),l=n(5357),r=n(40),c=n(2283),d=n(6350),u=n(6347),m=n(2216),b=n(6957),h=n(20),p=n(3230),x=n(4848);function f(e){return(0,x.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,x.jsxs)("g",{fill:"#7a7a7a",children:[(0,x.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,x.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const j={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function v(e){let{onClick:t}=e;return(0,x.jsx)("button",{type:"button",title:(0,p.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",j.collapseSidebarButton),onClick:t,children:(0,x.jsx)(f,{className:j.collapseSidebarButtonIcon})})}var _=n(2),A=n(4245),g=n(4799);const k=Symbol("EmptyContext"),C=a.createContext(k);function S(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),i=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,x.jsx)(C.Provider,{value:i,children:t})}var T=n(4549),N=n(260),I=n(4783),B=n(1062);function y(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,x.jsx)("button",{"aria-label":t?(0,p.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,p.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:a})}function w(e){let{item:t,onItemClick:n,activePath:i,level:r,index:c,...d}=e;const{items:u,label:m,collapsible:h,className:p,href:f}=t,{docs:{sidebar:{autoCollapseCategories:j}}}=(0,b.p)(),v=function(e){const t=(0,B.A)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.Nr)(e):void 0),[e,t])}(t),_=(0,l.w8)(t,i),A=(0,N.ys)(f,i),{collapsed:S,setCollapsed:w}=(0,T.u)({initialState:()=>!!h&&(!_&&t.collapsed)}),{expandedItem:L,setExpandedItem:E}=function(){const e=(0,a.useContext)(C);if(e===k)throw new g.dV("DocSidebarItemsExpandedStateProvider");return e}(),M=function(e){void 0===e&&(e=!S),E(e?null:c),w(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const i=(0,g.ZC)(t);(0,a.useEffect)((()=>{t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:_,collapsed:S,updateCollapsed:M}),(0,a.useEffect)((()=>{h&&null!=L&&L!==c&&j&&w(!0)}),[h,L,c,w,j]),(0,x.jsxs)("li",{className:(0,o.A)(s.G.docs.docSidebarItemCategory,s.G.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":S},p),children:[(0,x.jsxs)("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":A}),children:[(0,x.jsx)(I.A,{className:(0,o.A)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!f&&h,"menu__link--active":_}),onClick:h?e=>{n?.(t),f?M(!1):(e.preventDefault(),M())}:()=>{n?.(t)},"aria-current":A?"page":void 0,role:h&&!f?"button":void 0,"aria-expanded":h&&!f?!S:void 0,href:h?v??"#":v,...d,children:m}),f&&h&&(0,x.jsx)(y,{collapsed:S,categoryLabel:m,onClick:e=>{e.preventDefault(),M()}})]}),(0,x.jsx)(T.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:S,children:(0,x.jsx)(D,{items:u,tabIndex:S?-1:0,onItemClick:n,activePath:i,level:r+1})})]})}var L=n(877),E=n(716);const M={menuExternalLink:"menuExternalLink_NmtK"};function H(e){let{item:t,onItemClick:n,activePath:a,level:i,index:r,...c}=e;const{href:d,label:u,className:m,autoAddBaseUrl:b}=t,h=(0,l.w8)(t,a),p=(0,L.A)(d);return(0,x.jsx)("li",{className:(0,o.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),children:(0,x.jsxs)(I.A,{className:(0,o.A)("menu__link",!p&&M.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:b,"aria-current":h?"page":void 0,to:d,...p&&{onClick:n?()=>n(t):void 0},...c,children:[u,!p&&(0,x.jsx)(E.A,{})]})},u)}const G={menuHtmlItem:"menuHtmlItem_M9Kj"};function W(e){let{item:t,level:n,index:a}=e;const{value:i,defaultStyle:l,className:r}=t;return(0,x.jsx)("li",{className:(0,o.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(n),l&&[G.menuHtmlItem,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:i}},a)}function P(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,x.jsx)(w,{item:t,...n});case"html":return(0,x.jsx)(W,{item:t,...n});default:return(0,x.jsx)(H,{item:t,...n})}}function R(e){let{items:t,...n}=e;const a=(0,l.Y)(t,n.activePath);return(0,x.jsx)(S,{children:a.map(((e,t)=>(0,x.jsx)(P,{item:e,index:t,...n},t)))})}const D=(0,a.memo)(R),F={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function U(e){let{path:t,sidebar:n,className:i}=e;const l=function(){const{isActive:e}=(0,_.M)(),[t,n]=(0,a.useState)(e);return(0,A.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,x.jsx)("nav",{"aria-label":(0,p.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",F.menu,l&&F.menuWithAnnouncementBar,i),children:(0,x.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,x.jsx)(D,{items:n,activePath:t,level:1})})})}const V="sidebar_njMd",Y="sidebarWithHideableNavbar_wUlq",K="sidebarHidden_VK0M",z="sidebarLogo_isFc";function q(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:l}}}=(0,b.p)();return(0,x.jsxs)("div",{className:(0,o.A)(V,s&&Y,i&&K),children:[s&&(0,x.jsx)(h.A,{tabIndex:-1,className:z}),(0,x.jsx)(U,{path:t,sidebar:n}),l&&(0,x.jsx)(v,{onClick:a})]})}const O=a.memo(q);var J=n(763),Q=n(1938);const X=e=>{let{sidebar:t,path:n}=e;const a=(0,Q.M)();return(0,x.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,x.jsx)(D,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function Z(e){return(0,x.jsx)(J.GX,{component:X,props:e})}const $=a.memo(Z);function ee(e){const t=(0,m.l)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,x.jsxs)(x.Fragment,{children:[n&&(0,x.jsx)(O,{...e}),a&&(0,x.jsx)($,{...e})]})}const te={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function ne(e){let{toggleSidebar:t}=e;return(0,x.jsx)("div",{className:te.expandButton,title:(0,p.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,x.jsx)(f,{className:te.expandButtonIcon})})}const ae={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function oe(e){let{children:t}=e;const n=(0,r.t)();return(0,x.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function ie(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:l}=(0,u.zy)(),[r,c]=(0,a.useState)(!1),m=(0,a.useCallback)((()=>{r&&c(!1),!r&&(0,d.O)()&&c(!0),i((e=>!e))}),[i,r]);return(0,x.jsx)("aside",{className:(0,o.A)(s.G.docs.docSidebarContainer,ae.docSidebarContainer,n&&ae.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ae.docSidebarContainer)&&n&&c(!0)},children:(0,x.jsx)(oe,{children:(0,x.jsxs)("div",{className:(0,o.A)(ae.sidebarViewport,r&&ae.sidebarViewportHidden),children:[(0,x.jsx)(ee,{sidebar:t,path:l,onCollapse:m,isHidden:r}),r&&(0,x.jsx)(ne,{toggleSidebar:m})]})})})}const se={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function le(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,r.t)();return(0,x.jsx)("main",{className:(0,o.A)(se.docMainContainer,(t||!a)&&se.docMainContainerEnhanced),children:(0,x.jsx)("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",se.docItemWrapper,t&&se.docItemWrapperEnhanced),children:n})})}const re={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function ce(e){let{children:t}=e;const n=(0,r.t)(),[o,i]=(0,a.useState)(!1);return(0,x.jsxs)("div",{className:re.docsWrapper,children:[(0,x.jsx)(c.A,{}),(0,x.jsxs)("div",{className:re.docRoot,children:[n&&(0,x.jsx)(ie,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,x.jsx)(le,{hiddenSidebarContainer:o,children:t})]})]})}var de=n(3510);function ue(e){const t=(0,l.B5)(e);if(!t)return(0,x.jsx)(de.A,{});const{docElement:n,sidebarName:a,sidebarItems:c}=t;return(0,x.jsx)(i.e3,{className:(0,o.A)(s.G.page.docsDocPage),children:(0,x.jsx)(r.V,{name:a,items:c,children:(0,x.jsx)(ce,{children:n})})})}},3510:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(4164),o=n(3230),i=n(5225),s=n(4848);function l(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,a.A)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(i.A,{as:"h1",className:"hero__title",children:(0,s.jsx)(o.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);